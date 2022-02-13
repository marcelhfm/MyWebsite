import React from "react";
import { Comment } from "@prisma/client";
import { format } from "path";
import * as moment from "moment";

interface CommentCardProps {
  comment: Comment;
}

export default function CommentCard(props: CommentCardProps) {
  const date: Date = new Date(props.comment.createdAt);
  const formattedDate = moment.default(date).format("MMM Do");
  const formattedHour = moment.default(date).format("HH:mm");
  return (
    <div className="border-b border-gray-200 px-4 py-3">
      {/** Comment Body */}
      <div className="flex min-w-0 flex-col">
        {/** Header Row */}
        <p className="">
          <span className="truncate">
            <span className="font-bold">{props.comment.author}</span>
            <span className="px-1 text-gray-400">·</span>
            <span className=" text-gray-400">{formattedDate}</span>
            <span className="px-1 text-gray-400">·</span>
            <span className="text-gray-400">{formattedHour}</span>
          </span>
        </p>

        {/**Comment text */}
        <p className="">{props.comment.content}</p>
      </div>
    </div>
  );
}
