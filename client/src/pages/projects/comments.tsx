import Head from "next/head";
import { useState } from "react";
import prisma from "../../lib/prisma";
import safeJsonStringify from "safe-json-stringify";
import CommentCard from "../../components/CommentCard";
import { AddComment } from "../../components/AddComment";
import { Comment } from "@prisma/client";

export async function getServerSideProps() {
  const rawComments = await prisma.comment.findMany();
  const stringifiedComments = safeJsonStringify(rawComments);
  const comments = JSON.parse(stringifiedComments);

  return {
    props: {
      initialComments: comments,
    },
  };
}

const Comments = ({ initialComments }) => {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  return (
    <div>
      <div>
        <Head>
          <title>Projects | Comments</title>
        </Head>
      </div>
      <div className="mt-10 flex max-w-2xl flex-col md:m-auto md:mt-10">
        <h1 className="p-2 text-3xl font-semibold ">Leave a Comment!</h1>
        <div className="m-3 mx-5 mb-7 rounded-lg bg-orange-200 px-5 py-2 text-black shadow-lg">
          <em className="font-semibold">Note:</em> Please keep the comments
          friendly.
        </div>

        <div className="border-orange-gray-200 mx-5 h-full rounded-md border bg-orange-50 text-black shadow-lg">
          <div>
            {comments.map((c, i: number) => (
              <div key={i}>
                <CommentCard comment={c} />
              </div>
            ))}
          </div>
          <AddComment comments={comments} setComments={setComments} />
        </div>
      </div>
    </div>
  );
};

export default Comments;
