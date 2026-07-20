import { kv } from "@vercel/kv";

const KEY = "snake:leaderboard";
const MAX_SCORE = 220; 
const MAX_NAME_LEN = 3;
const KEEP = 50; 

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const raw = await kv.zrange(KEY, 0, 2, { rev: true, withScores: true });
      const scores = [];
      for (let i = 0; i < raw.length; i += 2) {
        const member = String(raw[i]);
        const score = Number(raw[i + 1]);
        const name = member.split("::")[0];
        scores.push({ name, score });
      }
      return res.status(200).json({ scores });
    } catch (err) {
      return res.status(500).json({ error: "failed to load leaderboard" });
    }
  }

  if (req.method === "POST") {
    try {
      const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
      const rawName = typeof body?.name === "string" ? body.name.trim() : "";
      const score = Number(body?.score);

      if (!Number.isFinite(score) || score < 0 || score > MAX_SCORE) {
        return res.status(400).json({ error: "invalid score" });
      }

      const name = (rawName || "ANO").slice(0, MAX_NAME_LEN).toUpperCase();
      const member = `${name}::${Date.now()}::${Math.random().toString(36).slice(2, 8)}`;

      await kv.zadd(KEY, { score, member });
      await kv.zremrangebyrank(KEY, 0, -(KEEP + 1));

      return res.status(200).json({ ok: true });
    } catch (err) {
      return res.status(500).json({ error: "failed to submit score" });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  return res.status(405).json({ error: "method not allowed" });
}