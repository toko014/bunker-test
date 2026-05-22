import type { NextApiRequest, NextApiResponse } from "next";
import { API_URL } from "../../../constants";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const backendUrl = `https://${API_URL}/play`;
    const response = await fetch(backendUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error('Backend API error:', error);
    res.status(500).json({ error: 'Backend server unavailable' });
  }
}
