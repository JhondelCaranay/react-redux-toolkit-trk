import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllPosts } from "../../app/features/posts/postsSlice";
import { PostAuthor, ReactionButtons } from "../../components/common";
import { AddPostForm } from "../../components/forms";

export const PostsList = () => {
  // const posts = useSelector((state) => state.posts);
  const posts = useSelector(selectAllPosts);

  // Sort posts in reverse chronological order by datetime string
  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post) => (
    <article key={post.id} className="post-excerpt mb-4 rounded-lg bg-white p-4 shadow-md">
      <h3 className="cursor-pointer text-xl font-bold text-gray-800 hover:text-blue-500">
        {post.title}
      </h3>
      <PostAuthor userId={post.user} />
      <p className=" text-gray-800">{post.content.substring(0, 100)}</p>
      <Link to={`/posts/${post.id}`} className="block text-right text-blue-500 hover:text-blue-700">
        View Post
      </Link>
      <ReactionButtons post={post} />
    </article>
  ));

  return (
    <>
      <AddPostForm />
      <section className="post-list">
        <h2 className="my-2 text-2xl font-bold text-gray-800">Posts</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {renderedPosts}
        </div>
      </section>
    </>
  );
};
