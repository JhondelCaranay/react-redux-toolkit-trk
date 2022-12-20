import { useSelector } from "react-redux";

export const PostAuthor = ({ userId }) => {
  const author = useSelector((state) => state.users.find((user) => user.id === userId));

  return (
    <span className="text-xs text-gray-800">by {author ? author.name : "Unknown author"}</span>
  );
};
