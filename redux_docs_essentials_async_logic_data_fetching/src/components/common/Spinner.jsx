import { MoonLoader, PulseLoader } from "react-spinners";

export const Spinner = () => {
  return (
    <div className="flex items-center justify-center">
      {/* <MoonLoader color="#36d7b7" className="flex items-center justify-center" /> */}
      <PulseLoader color="#36d7b7" />
    </div>
  );
};
