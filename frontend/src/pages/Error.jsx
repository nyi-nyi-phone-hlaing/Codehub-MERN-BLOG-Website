import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const status = error.status ? error.status : "404";
  const message = error.data?.message ? error.data.message : "Page not found";
  const goto = error.data?.to ? error.data.to : "/";
  let btnText = "Back to Feed";

  switch (goto) {
    case "/auth?mode=signup":
      btnText = "Go to Register";
      break;

    default:
      btnText = "Back to Feed";
      break;
  }

  return (
    <div className='w-full h-screen flex justify-center items-center bg-zinc-950'>
      <div>
        <h1 className='font-extrabold text-9xl text-center text-zinc-400 dark:text-zinc-700'>
          {status}
        </h1>
        <p className='font-semibold text-center text-zinc-500'>{message}</p>
        <Link
          to={goto}
          className='bg-rose-500 block mx-auto w-fit mt-4 px-2 py-1 font-bold'>
          {btnText}
        </Link>
      </div>
    </div>
  );
};

export default Error;
