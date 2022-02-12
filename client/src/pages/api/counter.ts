import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    console.log("AN ERROR HAS OCCURED IN API ROUTE counter.ts");
    return res.status(405).json({ message: "Method not allowed" });
  }
  const updatedCounter = req.body;

  const savedCounter = await prisma.viewCount.update({
    where: { id: 1 },
    data: {
      counter: parseInt(updatedCounter),
    },
  });
  res.json(savedCounter);
};
