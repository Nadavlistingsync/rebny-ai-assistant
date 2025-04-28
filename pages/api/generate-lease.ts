import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { leaseType } = req.body;
    let endpoint = '';

    switch (leaseType) {
      case 'condo':
        endpoint = 'https://us-api.plumsail.com/api/v2/processes/ekqgxhkp/pxqngyj/start';
        break;
      case 'townhouse':
        endpoint = 'https://us-api.plumsail.com/api/v2/processes/ekqgxhkp/awaconr/start';
        break;
      case 'coop':
        endpoint = 'https://us-api.plumsail.com/api/v2/processes/ekqgxhkp/pxqngyj/start';
        break;
      case 'rental':
        endpoint = 'https://us-api.plumsail.com/api/v2/processes/ekqgxhkp/pxqngyj/start';
        break;
      default:
        return res.status(400).json({ message: 'Invalid lease type' });
    }

    const response = await fetch(endpoint, {
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