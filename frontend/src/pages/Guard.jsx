import { Link } from "react-router-dom";

const Guard = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <h1 className='font-extrabold text-3xl text-center text-zinc-400 dark:text-zinc-700'>
        Oppos!
      </h1>
      <p className='my-3 font-semibold text-center text-zinc-500'>
        You are not currently an authorize user.
      </p>
      <div className='flex gap-2 items-center'>
        <Link to={"/auth?mode=signup"}>
          <button className='text-white px-2 py-1 border border-emerald-600 bg-emerald-600'>
            Register
          </button>
        </Link>
        <p className='font-semibold text-center text-zinc-500'>OR</p>
        <Link to={"/auth?mode=login"}>
          <button className='text-white px-2 py-1 border border-emerald-600 bg-emerald-600'>
            Login
          </button>
        </Link>
        <p className='font-semibold text-center text-zinc-500'>OR</p>
        <Link to={"/"}>
          <button className='text-white px-2 py-1 border border-emerald-600 bg-emerald-600'>
            Back to Feed
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Guard;
