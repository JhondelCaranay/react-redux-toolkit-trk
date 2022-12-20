export const About = () => {
  // return <div>About</div>;
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold">404</h1>
        <p className="mb-8 text-3xl">
          Oops, something went wrong. The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="focus:shadow-outline rounded-full bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-600 focus:outline-none"
        >
          Go Home
        </a>
      </div>
    </div>
  );
  // return (
  //   <div className="bg-gray-900 text-white">
  //     <div className="container mx-auto py-10">
  //       <h1 className="mb-6 text-5xl font-bold">Welcome to Pizza Paradise</h1>
  //       <p className="mb-8 text-2xl">We serve the best pizzas in town. Come check us out!</p>
  //       <button className="focus:shadow-outline rounded-full bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-600 focus:outline-none">
  //         Order Now
  //       </button>
  //     </div>
  //   </div>
  // );
  // return (
  //   <div>
  //     {/* <!-- Basic input --> */}
  //     <input className="rounded border py-2 px-3" type="text" placeholder="Enter your name" />
  //     {/* <!-- Focused input --> */}
  //     <input
  //       className="focus:shadow-outline rounded border-2 border-blue-500 py-2 px-3 focus:outline-none"
  //       type="text"
  //       placeholder="Enter your name"
  //     />
  //     {/* <!-- Disabled input --> */}
  //     <input
  //       className="cursor-not-allowed rounded bg-gray-500 py-2 px-3"
  //       type="text"
  //       placeholder="Enter your name"
  //       disabled
  //     />
  //     {/* <!-- Invalid input --> */}
  //     <input
  //       className="rounded border-2 border-red-500 py-2 px-3"
  //       type="text"
  //       placeholder="Enter your name"
  //       aria-invalid="true"
  //     />
  //   </div>
  // );
};
