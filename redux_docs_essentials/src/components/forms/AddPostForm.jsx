import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "../../app/features/posts/postsSlice";
import { useState } from "react";

export const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const dispatch = useDispatch();

  const users = useSelector((state) => state.users);

  const onSavePostClicked = () => {
    if (title && content) {
      // dispatch(
      //   postAdded({
      //     id: nanoid(),
      //     title,
      //     content,
      //   })
      // );
      // https://redux.js.org/tutorials/essentials/part-4-using-data#preparing-action-payloads
      // dispatch(postAdded(title, content));

      // https://redux.js.org/tutorials/essentials/part-4-using-data#adding-authors-for-posts
      dispatch(postAdded(title, content, userId));

      setTitle("");
      setContent("");
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const usersOptions = users.map((user) => (
    <option className="text-gray-800" key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section className="add-post-form md:w-1/2">
      <h2 className="my-2 text-2xl font-bold text-gray-800">Add a New Post</h2>
      <form className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-1">
          <label htmlFor="postTitle" className="text-gray-800">
            Post Title:
          </label>
          <input
            className="rounded-lg border border-gray-300 p-2"
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitleChanged}
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label className="text-gray-800" htmlFor="postAuthor">
            Author:
          </label>
          <select
            className="rounded-lg border border-gray-300 p-2"
            id="postAuthor"
            value={userId}
            onChange={onAuthorChanged}
          >
            <option className="text-gray-300" value="">
              select
            </option>
            {usersOptions}
          </select>
        </div>

        <div className="flex flex-col space-y-1">
          <label htmlFor="postContent" className="text-gray-800">
            Content:
          </label>
          <textarea
            className="resize-none rounded-lg border border-gray-300 p-2"
            id="postContent"
            name="postContent"
            rows="5"
            value={content}
            onChange={onContentChanged}
          />
        </div>
        <div className="flex justify-end">
          <button
            className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            type="button"
            onClick={onSavePostClicked}
            disabled={!canSave}
          >
            Save Post
          </button>
        </div>
      </form>
    </section>
  );
};
