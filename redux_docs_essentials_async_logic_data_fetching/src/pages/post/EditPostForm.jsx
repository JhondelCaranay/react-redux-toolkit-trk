import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { postUpdated, selectPostById } from "../../app/features/posts/postsSlice";

export const EditPostForm = () => {
  const { postId } = useParams();

  // const post = useSelector((state) => state.posts.find((post) => post.id === postId));

  // https://redux.js.org/tutorials/essentials/part-5-async-logic#extracting-posts-selectors
  const post = useSelector((state) => selectPostById(state, Number(postId)));

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postUpdated({ id: postId, title, content }));
      navigate(`/posts/${postId}`);
    }
  };

  return (
    <section className="p-5">
      <h2 className="text-2xl font-semibold text-gray-900">Edit Post</h2>
      <form className="flex flex-col gap-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="postTitle">
          Post Title:
        </label>
        <input
          className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's on your mind?"
          value={title}
          onChange={onTitleChanged}
        />
        <label className="block text-sm font-medium text-gray-700" htmlFor="postContent">
          Content:
        </label>
        <textarea
          rows="4"
          className="block w-full resize-none rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
      </form>
      <button
        className="mt-4 inline-flex  items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        type="button"
        onClick={onSavePostClicked}
      >
        Save Post
      </button>
    </section>
  );
};
