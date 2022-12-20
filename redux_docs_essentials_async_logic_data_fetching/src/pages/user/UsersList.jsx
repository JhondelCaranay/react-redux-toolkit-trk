import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllUsers } from "../../app/features/users/usersSlice";

export const UsersList = () => {
  const users = useSelector(selectAllUsers);

  const renderedUsers = users.map((user) => (
    <li className="flex items-center justify-between p-3 hover:bg-gray-200" key={user.id}>
      <Link className="flex items-center" to={`/users/${user.id}`}>
        {user.name}
      </Link>
    </li>
  ));

  return (
    <section className="bg-gray-100 p-5">
      <h2 className="mb-5 text-2xl font-semibold">Users</h2>

      <ul className="divide-y divide-solid divide-gray-300 rounded-md border border-gray-300 bg-white">
        {renderedUsers}
      </ul>
    </section>
  );
};
