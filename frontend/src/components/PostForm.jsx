import { FiArrowLeft } from "react-icons/fi";
import { Form, Link } from "react-router-dom";
import PropTypes from "prop-types";

const PostForm = ({ formTitle, isCreate }) => {
  return (
    <div className='w-4/5 mx-auto px-3 max-md:w-full'>
      <header className='relative w-full h-14 flex justify-between items-center'>
        <Link to={"/"}>
          <button className='size-10 bg-zinc-800 flex justify-center items-center mr-3'>
            <FiArrowLeft size={25} />
          </button>
        </Link>
        <h1 className='font-bold text-xl text-emerald-600'>{formTitle}</h1>
        <div className='size-10'></div>
      </header>
      <Form method='post' className='w-1/2 mx-auto mt-5 max-md:w-full'>
        <div className='flex flex-col mb-3'>
          <label className='text-zinc-400 mb-1 text-sm' htmlFor='title'>
            Title
          </label>
          <input
            className='px-2 py-1 bg-transparent outline-none border-2 border-zinc-700 rounded-md focus:border-emerald-600 '
            name='title'
            id='title'
          />
        </div>
        <div className='flex flex-col mb-3'>
          <label className='text-zinc-400 mb-1 text-sm' htmlFor='image'>
            Image URL
          </label>
          <input
            className='px-2 py-1 bg-transparent outline-none border-2 border-zinc-700 rounded-md focus:border-emerald-600 '
            name='image'
            id='image'
          />
        </div>
        <div className='flex flex-col mb-3'>
          <label className='text-zinc-400 mb-1 text-sm' htmlFor='description'>
            Description
          </label>
          <textarea
            className='px-2 py-1 bg-transparent text-justify outline-none border-2 border-zinc-700 rounded-md focus:border-emerald-600 resize-none'
            rows={7}
            name='description'
            id='description'></textarea>
        </div>
        {isCreate ? (
          <button
            type='submit'
            className='w-full py-1 font-bold text-lg bg-emerald-600 rounded-md hover:bg-emerald-700'>
            Create Post
          </button>
        ) : (
          <button
            type='submit'
            className='w-full py-1 font-bold text-lg bg-emerald-600 rounded-md hover:bg-emerald-700'>
            Edit Post
          </button>
        )}
      </Form>
    </div>
  );
};

PostForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  isCreate: PropTypes.bool.isRequired,
};

export default PostForm;
