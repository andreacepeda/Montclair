import { kv } from "@vercel/kv";

const KEY = "newsletter:subscribers";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
      const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";

      if (!EMAIL_RE.test(email) || email.length > 254) {
        return res.status(400).json({ error: "invalid email" });
      }

      await kv.zadd(KEY, { score: Date.now(), member: email });
      return res.status(200).json({ ok: true });
    } catch (err) {
      return res.status(500).json({ error: "failed to save email" });
    }
  }

  if (req.method === "GET") {
    const key = req.query?.key;
    if (!process.env.ADMIN_SECRET || key !== process.env.ADMIN_SECRET) {
      return res.status(401).json({ error: "unauthorized" });
    }
    try {
      const raw = await kv.zrange(KEY, 0, -1, { withScores: true });
      const subscribers = [];
      for (let i = 0; i < raw.length; i += 2) {
        subscribers.push({
          email: String(raw[i]),
          joinedAt: new Date(Number(raw[i + 1])).toISOString(),
        });
      }
      return res.status(200).json({ count: subscribers.length, subscribers });
    } catch (err) {
      return res.status(500).json({ error: "failed to load subscribers" });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  return res.status(405).json({ error: "method not allowed" });
}