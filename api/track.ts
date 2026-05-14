import { z } from 'zod';

export const config = {
  runtime: 'edge',
};

const trackSchema = z.object({
  timestamp: z.string().datetime(),
  pathname: z.string().max(512),
  referrer: z.string().max(2048).optional().default(''),
  session_id: z.string().uuid(),
});

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const url = process.env.TINYBIRD_TRACKING_URL;
  const token = process.env.TINYBIRD_TOKEN;

  if (!url || !token) {
    return new Response(JSON.stringify({ error: 'Missing Tinybird configuration' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const raw = await req.json();
    const parsed = trackSchema.safeParse(raw);
    if (!parsed.success) {
      return new Response(JSON.stringify({ error: 'Invalid request body' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const response = await fetch(`${url}&token=${token}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(parsed.data),
    });

    return new Response(null, { status: response.status });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
