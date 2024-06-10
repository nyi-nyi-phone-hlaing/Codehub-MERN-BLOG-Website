import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const status = error.status ? error.status : "404";
  const message = error.data?.message ? error.data.message : "Page not found";

  return (
    <div className='w-full h-screen flex justify-center items-center bg-zinc-950'>
      <div>
        <h1 className='font-extrabold text-9xl text-center text-zinc-800'>
          {status}
        </h1>
        <p className='font-semibold text-center text-zinc-500'>{message}</p>
        <Link
          to={"/"}
          className='bg-rose-500 block mx-auto w-fit mt-4 px-2 py-1 font-bold'>
          Back to Feed
        </Link>
      </div>
    </div>
  );
};

export default Error;
