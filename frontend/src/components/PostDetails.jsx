import {
  FiArrowLeft,
  FiBookmark,
  FiCalendar,
  FiEdit,
  FiMoreVertical,
  FiTrash,
  FiX,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";
import TimeAgo from "react-timeago";

const PostDetails = ({ post }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  return (
    <div className='w-4/5 mx-auto px-3 max-md:w-full'>
      <header className='relative w-full h-14 flex justify-between items-center'>
        <div className='flex justify-start items-center'>
          <Link to={"/"}>
            <button className='size-10 bg-zinc-800 flex justify-center items-center mr-3'>
              <FiArrowLeft size={25} />
            </button>
          </Link>
          <img
            className='size-9 rounded-full bg-zinc-700 mr-3'
            src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D'
            alt='User Profile'
          />
          <div>
            <h1 className='font-bold mb-0.5'>webWizard&apos;s post</h1>
            <p className='text-zinc-400 text-xs flex items-center gap-1'>
              <FiCalendar size={13} />
              <TimeAgo date={post.date} />
            </p>
          </div>
        </div>
        <button
          onClick={() => setIsMenuActive((prev) => !prev)}
          className='size-10 rounded-full flex justify-center items-center duration-200 hover:bg-zinc-800'>
          {isMenuActive ? <FiX size={25} /> : <FiMoreVertical size={25} />}
        </button>

        {isMenuActive && (
          <ul className='absolute right-0 top-14 bg-zinc-800 p-2 rounded-md shadow-md'>
            <li className=' px-2 py-1 mb-1 rounded-sm flex items-center justify-start cursor-pointer duration-300 hover:bg-zinc-700 hover:text-emerald-500'>
              <FiBookmark size={22} className='mr-2' /> Save post
            </li>
            <Link
              to={`/edit-post/${post.id}`}
              className=' px-2 py-1 mb-1 rounded-sm flex items-center justify-start cursor-pointer duration-300 hover:bg-zinc-700 hover:text-emerald-500'>
              <FiEdit size={22} className='mr-2' /> Edit Post
            </Link>
            <li className=' px-2 py-1 mb-1 rounded-sm flex items-center justify-start cursor-pointer duration-300 hover:bg-zinc-700 hover:text-emerald-500'>
              <FiTrash size={22} className='mr-2' /> Delete Post
            </li>
          </ul>
        )}
      </header>
      <section className='pb-4'>
        <img
          className='w-4/5 aspect-2/1 object-cover mx-auto my-4'
          src={post.image}
          alt={post.title}
        />
        <h1 className='font-bold text-lg mb-2'>{post.title}</h1>
        <p className='text-justify text-zinc-400'>{post.description}</p>
      </section>
    </div>
  );
};

PostDetails.propTypes = {
  post: PropTypes.object,
};

export default PostDetails;
