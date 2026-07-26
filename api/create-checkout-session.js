import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { priceId, quantity = 1 } = req.body || {};

  if (!priceId || typeof priceId !== "string" || !priceId.startsWith("price_")) {
    return res.status(400).json({ error: "A valid Stripe priceId is required" });
  }

  const qty = Number.isInteger(quantity) && quantity > 0 ? quantity : 1;

  try {
    const origin = req.headers.origin || `https://${req.headers.host}`;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: qty }],
      success_url: `${origin}/?checkout=success`,
      cancel_url: `${origin}/?checkout=canceled`,
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout session error:", err);
    return res.status(500).json({ error: "Failed to create checkout session" });
  }
}