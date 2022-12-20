import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { PostAuthor, ReactionButtons } from "../../components/common";

export const SinglePostPage = () => {
  const { postId } = useParams();
  const post = useSelector((state) => state.posts.find((post) => post.id === postId));

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    // use tailwindcss to style the page
    <section className="p-5">
      <article className="rounded-lg bg-white p-5 shadow-md">
        <h2 className="text-2xl font-bold text-gray-800">{post.title}</h2>
        <PostAuthor userId={post.user} />
        <p className="text-gray-800">{post.content}</p>
        <Link to={`/posts/edit/${post.id}`} className="text-indigo-600">
          Edit Post
        </Link>
        <ReactionButtons post={post} />
      </article>
    </section>
  );
};
