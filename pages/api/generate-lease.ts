import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const response = await fetch('https://us-api.plumsail.com/api/v2/processes/ekqgxhkp/pxqngyj/start', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(req.body)
    });

    if (!response.ok) {
      throw new Error('Failed to generate lease');
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error generating lease:', error);
    res.status(500).json({ message: 'Failed to generate lease' });
  }
} 