import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden">
      <h1 className="text-9xl font-bold">404</h1>
      <p className="text-2xl font-bold text-gray-800">Sorry, that page was not found</p>

      <Link className="text-2xl font-bold text-blue-500 hover:text-blue-600" to="/">
        Back to home
      </Link>
    </div>
  );
};
