import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectAllPosts } from "../../app/features/posts/postsSlice";
import { selectUserById } from "../../app/features/users/usersSlice";

export const UserPage = () => {
  const { userId } = useParams();

  const user = useSelector((state) => selectUserById(state, Number(userId)));

  const postsForUser = useSelector((state) => {
    const allPosts = selectAllPosts(state);
    return allPosts.filter((post) => post.user === Number(userId));
  });

  const postTitles = postsForUser.map((post) => (
    <li className="flex items-center justify-between p-3 hover:bg-gray-200" key={post.id}>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  ));

  return (
    <section className="bg-gray-100 p-5">
      <h2 className="mb-5 text-2xl font-semibold">{user.name}</h2>

      <ul className="divide-y divide-solid divide-gray-300 rounded-md border border-gray-300 bg-white">
        {postTitles}
      </ul>
    </section>
  );
};
