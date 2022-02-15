import { Prisma } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import send from "../../lib/transporter";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("COMMENT REQUEST METHOD:", req.method);
  console.log("COMMENT REQUEST BODY:", req.body);

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const comment: Prisma.CommentCreateInput = JSON.parse(req.body);
    const savedComment = await prisma.comment.create({ data: comment });
    //Send Email
    const mail = {
      from: "mmailer@hofmania.de",
      to: "mmailer@hofmania.de",
      subject: `marcel.hofmania.de | New Comment by ${savedComment.author}`,
      text: `${savedComment.author} has left a new Comment: ${savedComment.content}`,
    };
    send(mail);
    res.status(200).json(savedComment);
  } catch (err) {
    console.log("ERR:", err);
    res.status(400).json({ message: "Something went wrong" });
  }
};
