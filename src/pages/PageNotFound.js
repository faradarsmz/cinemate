import PageNotFoundImage from "../assets/pnf.jpg";
import { useTitle } from "../hooks/useTitle";

export const PageNotFound = () => {
  useTitle("Not Found");

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10">404, Oops!</p>
          <div className="max-w-lg">
            <img
              className="rounded"
              src={PageNotFoundImage}
              alt="404 Page Not Found"
            />
          </div>
        </div>
      </section>
    </main>
  );
};
