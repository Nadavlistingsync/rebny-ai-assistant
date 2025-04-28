export async function sendToPlumsail(data: Record<string, any>) {
  const leaseType = data.leaseType;
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
      throw new Error('Invalid lease type');
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error(`Plumsail API error: ${response.statusText}`);
  }

  return await response.json();
}
