import { Disclosure, Transition } from "@headlessui/react";
import { Comment, Prisma } from "@prisma/client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { server } from "../config/url";

interface AddCommentProps {
  comments: any;
  setComments: any;
}

async function saveComment(comment: Prisma.CommentCreateInput) {
  const response = await fetch(`${server}/api/comment`, {
    method: "POST",
    body: JSON.stringify(comment),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

export const AddComment: React.FC<AddCommentProps> = ({
  comments,
  setComments,
}) => {
  const { register, handleSubmit } = useForm();

  const addComment = async (data, e) => {
    let response = await saveComment(data);
    setComments([...comments, response]);
    e.target.reset();
  };
  return (
    <div className="my-2 w-full px-4">
      <Disclosure>
        {({ open }) => (
          <>
            <div className={`${open ? "hidden" : ""}`}>
              <Disclosure.Button className="flex justify-between rounded-lg bg-orange-200 px-4 py-2 text-left text-sm font-medium hover:bg-orange-300 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                <span>New Comment</span>
              </Disclosure.Button>
            </div>
            <Transition
              show={open}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="w-full px-1 pt-4 pb-2">
                <form onSubmit={handleSubmit(addComment)}>
                  <div>
                    <div>
                      <label htmlFor="author" className="px-2 font-semibold">
                        Name
                      </label>
                      <div>
                        <input
                          type="text"
                          name="author"
                          required
                          id="author"
                          className="w-full rounded-xl border border-gray-400 pt-1 pb-1 shadow-sm focus:border-orange-200 focus:outline-none focus:ring-1 focus:ring-orange-200"
                          placeholder="Feel free to be creative"
                          {...register("author")}
                        />
                      </div>
                    </div>

                    <div className="mt-3">
                      <label htmlFor="author" className="px-2 font-semibold">
                        Your Comment
                      </label>
                      <div className="">
                        <textarea
                          name="content"
                          required
                          id="content"
                          className="w-full rounded-xl border border-gray-400 pt-1 pb-1 shadow-sm focus:border-orange-200 focus:outline-none focus:ring-1 focus:ring-orange-200"
                          placeholder="Type your Comment here"
                          {...register("content")}
                        />
                      </div>
                    </div>
                    <div className="mt-3 flex justify-between">
                      <Disclosure.Button
                        type="submit"
                        className="flex justify-between rounded-lg bg-orange-200 px-4 py-2 text-left text-sm font-medium hover:bg-orange-300 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75"
                      >
                        Add Comment
                      </Disclosure.Button>
                      <Disclosure.Button
                        type="submit"
                        className="flex justify-between rounded-lg bg-orange-300 px-4 py-2 text-left text-sm font-medium hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75"
                      >
                        Cancel
                      </Disclosure.Button>
                    </div>
                  </div>
                </form>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};
