import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2022-11-15',
});

export async function createCheckoutSession() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://nadavlistingsync.github.io/rebny-ai-assistant';
  
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'REBNY Lease Generator Access',
          },
          unit_amount: 1000, // $10.00
        },
        quantity: 1,
      },
    ],
    success_url: `${baseUrl}/dashboard`,
    cancel_url: `${baseUrl}/`,
  });

  return session.url;
}