export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  const url = process.env.TINYBIRD_PIPE_URL;
  const token = process.env.TINYBIRD_TOKEN;

  if (!url || !token) {
    return new Response(JSON.stringify({ error: 'Missing Tinybird configuration' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const response = await fetch(`${url}?token=${token}`);
    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
