import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='w-full h-14 flex justify-between items-center bg-zinc-950 px-3'>
      <Link to={"/"}>
        <h1 className='text-emerald-600 uppercase font-extrabold text-xl '>
          blog.io
        </h1>
      </Link>
      <ul className='flex items-center gap-3'>
        <NavLink to={"/"} className='text-zinc-400 font-bold'>
          Feed
        </NavLink>
        <NavLink to={"/create-post"} className='text-zinc-400 font-bold'>
          Create Post
        </NavLink>
      </ul>
      <div className='flex items-center gap-3'>
        <button className='text-zinc-400 px-2 py-1 border border-zinc-400'>
          Register
        </button>
        <button className='text-white px-2 py-1 border border-emerald-600 bg-emerald-600'>
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
