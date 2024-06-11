import { useState } from "react";
import { FiArrowLeft, FiEye, FiEyeOff } from "react-icons/fi";
import { Form, Link, useSearchParams } from "react-router-dom";

const AuthForm = () => {
  const [togglePassword, setTogglePassword] = useState(false);
  const [searchParams] = useSearchParams();
  const isRegister = searchParams.get("mode") === "register";

  return (
    <div className='w-4/5 mx-auto px-3 max-md:w-full'>
      <header className='relative w-full h-14 flex justify-between items-center'>
        <Link to={"/"}>
          <button className='size-10 bg-zinc-200 dark:bg-zinc-800 flex justify-center items-center mr-3'>
            <FiArrowLeft size={25} />
          </button>
        </Link>
        <h1 className='font-bold text-xl text-emerald-600'>
          {isRegister ? "Register a new account" : "Login to your account"}
        </h1>
        <div className='size-10'></div>
      </header>
      <Form className='w-1/2 mx-auto mt-5 max-md:w-full'>
        <div className='flex flex-col mb-3'>
          <label className='text-zinc-400 mb-1 text-sm' htmlFor='email'>
            Email
          </label>
          <input
            className='px-2 py-1 bg-transparent outline-none border-2 border-zinc-300 dark:border-zinc-700 rounded-md focus:!border-emerald-600 '
            name='email'
            id='email'
            required
          />
        </div>
        <div className='flex flex-col mb-3'>
          <label className='text-zinc-400 mb-1 text-sm' htmlFor='password'>
            Password
          </label>
          <div className='flex gap-1'>
            <input
              className={`block ${
                isRegister ? "w-full" : "w-[calc(100%-2.5rem)]"
              } px-2 py-1 bg-transparent outline-none border-2 border-zinc-300 dark:border-zinc-700 rounded-md focus:!border-emerald-600 `}
              name='password'
              type={togglePassword ? "text" : "password"}
              id='password'
              required
            />
            {!isRegister && (
              <button
                type='button'
                onClick={() => setTogglePassword((prev) => !prev)}
                className='size-10 bg-zinc-200 dark:bg-zinc-800 flex justify-center items-center rounded-md'>
                {togglePassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            )}
          </div>
        </div>
        {isRegister && (
          <div className='flex flex-col mb-3'>
            <label
              className='text-zinc-400 mb-1 text-sm'
              htmlFor='confirm-password'>
              Confirm Password
            </label>
            <div className='flex gap-1'>
              <input
                className='block w-full px-2 py-1 bg-transparent outline-none border-2 border-zinc-300 dark:border-zinc-700 rounded-md focus:!border-emerald-600 '
                name='confirm-password'
                type={togglePassword ? "text" : "password"}
                id='confirm-password'
                required
              />
            </div>
          </div>
        )}

        {isRegister && (
          <button
            type='button'
            onClick={() => setTogglePassword((prev) => !prev)}
            className='text-emerald-600 gap-1 flex justify-center items-center rounded-md mb-3'>
            {togglePassword ? (
              <>
                <FiEyeOff size={20} /> Hide Password
              </>
            ) : (
              <>
                <FiEye size={20} /> Show Password
              </>
            )}
          </button>
        )}

        <button
          type='submit'
          className='w-full py-1 font-bold text-lg bg-emerald-600 rounded-md hover:bg-emerald-700'>
          {isRegister ? "Register" : "Login"}
        </button>
        <p className='text-center text-zinc-400 mt-3'>
          {isRegister ? "Already have an account?" : "Don't have an account?"}
          <Link
            to={isRegister ? "/auth?mode=login" : "/auth?mode=register"}
            className='ml-1 text-emerald-600 underline font-bold'>
            {isRegister ? "Login here" : "Register here"}
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default AuthForm;
