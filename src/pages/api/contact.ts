import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      const contact = await prisma.contact.create({
        data: {
          name,
          email,
          message,
        },
      });
      res.status(201).json({ success: true, contact });
    } catch (error) {
      console.error("Error saving data:", error);
      res.status(500).json({ success: false, error: 'Error saving data' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 