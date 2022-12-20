import React from "react";
import { useDispatch } from "react-redux";
import { reactionAdded } from "../../app/features/posts/postsSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  hooray: "🎉",
  heart: "❤️",
  rocket: "🚀",
  eyes: "👀",
};

export const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className=" focus:shadow-outline-gray m-1 rounded-lg border border-gray-300 bg-white px-2 py-1 text-xs font-semibold text-gray-800 transition-colors duration-150 hover:bg-gray-100 focus:outline-none active:bg-gray-100"
        onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: name }))}
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });

  return <div className="flex items-center justify-start">{reactionButtons}</div>;
};
