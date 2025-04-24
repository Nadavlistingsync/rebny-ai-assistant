export async function sendToPlumsail(data: Record<string, any>) {
  const response = await fetch('https://us-api.plumsail.com/api/v2/processes/ekqgxhkp/pxqngyj/start', {
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
