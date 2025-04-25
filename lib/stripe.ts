import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2022-11-15',
});

export async function createCheckoutSession() {
  const response = await fetch('/api/create-checkout-session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to process request');
  }

  const data = await response.json();
  
  // Show message if provided
  if (data.message) {
    alert(data.message);
  }
  
  return data.url;
}