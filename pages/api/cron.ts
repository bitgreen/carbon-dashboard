import { NextApiRequest, NextApiResponse } from 'next';

//API to manage scheduled cron jobs
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    try {
      const { authorization } = req.headers;

      if (authorization === `Bearer ${process.env.API_SECRET_KEY}`) {
        res.status(200).json({ success: true });
      } else {
        res.status(401).json({ success: false });
      }
    } catch (err:any) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}