import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "POST") {
    const counterData = JSON.parse(req.body);
    const savedCounter = await prisma.viewCount.update({
      where: { id: 1 },
      data: counterData,
    });
    res.json(savedCounter);
  } else if (req.method == "GET") {
    const counter = await prisma.viewCount.findFirst();
    res.json(counter);
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
};
