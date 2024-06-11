import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className='relative w-full h-14 flex justify-between items-center bg-zinc-50 dark:bg-zinc-950 px-3'>
      <Link to={"/"}>
        <h1 className='text-emerald-600 uppercase font-extrabold text-xl '>
          blog.io
        </h1>
      </Link>
      <ul className='items-center gap-3 hidden md:flex'>
        <NavLink to={"/"} className='text-zinc-400 font-bold'>
          Feed
        </NavLink>
        <NavLink to={"/create-post"} className='text-zinc-400 font-bold'>
          Create Post
        </NavLink>
      </ul>
      <div className='hidden items-center gap-3 md:flex'>
        <button
          onClick={toggleTheme}
          className='flex items-center justify-start gap-2 bg-zinc-200 dark:bg-zinc-800 px-2 py-1 rounded-md'>
          {isDarkTheme ? (
            <>
              <FiSun size={23} /> Light
            </>
          ) : (
            <>
              <FiMoon size={23} /> Dark
            </>
          )}
        </button>
        <Link to={"/auth?mode=register"}>
          <button className='text-zinc-400 px-2 py-1 border border-zinc-400'>
            Register
          </button>
        </Link>
        <Link to={"/auth?mode=login"}>
          <button className='text-white px-2 py-1 border border-emerald-600 bg-emerald-600'>
            Login
          </button>
        </Link>
      </div>

      {/* In Mobile Devices */}
      <div className='flex items-center gap-2 md:hidden'>
        <button
          onClick={toggleTheme}
          className='size-10 bg-zinc-200 dark:bg-zinc-800 flex justify-center items-center rounded-md shadow-sm'>
          {isDarkTheme ? <FiSun size={23} /> : <FiMoon size={23} />}
        </button>
        <button
          onClick={() => setToggleMenu((prev) => !prev)}
          className='size-10 bg-zinc-200 dark:bg-zinc-800 flex justify-center items-center rounded-md shadow-sm'>
          {toggleMenu ? <FiX size={25} /> : <FiMenu size={25} />}
        </button>
      </div>

      {toggleMenu && (
        <ul className='absolute w-full flex flex-col items-center left-0 top-14 py-4 z-10  bg-zinc-50 dark:bg-zinc-950 !bg-opacity-50 !backdrop-blur-md md:hidden shadow-md '>
          <NavLink
            onClick={() => setToggleMenu(false)}
            to={"/"}
            className='text-zinc-600 dark:text-zinc-400 font-bold mb-2'>
            Feed
          </NavLink>
          <NavLink
            onClick={() => setToggleMenu(false)}
            to={"/create-post"}
            className='text-zinc-600 dark:text-zinc-400 font-bold'>
            Create Post
          </NavLink>
          <div className='flex items-center gap-3 mt-4'>
            <Link to={"/auth?mode=register"}>
              <button className='text-zinc-400 px-2 py-1 border border-zinc-400'>
                Register
              </button>
            </Link>
            <Link to={"/auth?mode=login"}>
              <button className='text-white px-2 py-1 border border-emerald-600 bg-emerald-600'>
                Login
              </button>
            </Link>
          </div>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
