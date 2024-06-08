import PropTypes from "prop-types";
import { useState } from "react";
import {
  FiBookmark,
  FiCalendar,
  FiEdit,
  FiMoreVertical,
  FiTrash,
  FiX,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import TimeAgo from "react-timeago";

const Post = ({ post }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  return (
    <div className='bg-zinc-800 rounded-md overflow-hidden'>
      <div className='p-2'>
        <Link to={`/view/post/${post.id}`}>
          <h1 className='font-bold text-lg text-emerald-600'>{post.title}</h1>
        </Link>
        <p className='text-sm text-zinc-500 mb-2 flex items-center gap-1'>
          <FiCalendar size={15} />
          <TimeAgo date={post.date} />
        </p>
        <Link to={`/view/post/${post.id}`}>
          <img
            className='w-full aspect-2/1 bg-zinc-900'
            src={post.image}
            alt={post.title}
          />
        </Link>
      </div>
      <div className='relative flex items-center justify-between bg-zinc-950 p-2'>
        <div className='flex justify-start items-center gap-3'>
          <img
            className='size-10 rounded-full bg-zinc-700'
            src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D'
            alt='User Profile'
          />
          <div>
            <h1 className='mb-1'>webWizard</h1>
            <p className='text-zinc-600 text-sm'>nnph123725@gmail.com</p>
          </div>
        </div>
        <button
          onClick={() => setIsMenuActive((prev) => !prev)}
          className='size-8 rounded-full flex justify-center items-center duration-200 hover:bg-zinc-800'>
          {isMenuActive ? <FiX size={20} /> : <FiMoreVertical size={20} />}
        </button>
        {isMenuActive && (
          <ul className='absolute right-2 bottom-16 bg-zinc-900 p-2 rounded-md shadow-lg'>
            <li className=' px-2 py-1 mb-1 rounded-sm flex items-center justify-start cursor-pointer duration-300 hover:bg-zinc-800 hover:text-emerald-500'>
              <FiBookmark size={22} className='mr-2' /> Save post
            </li>

            <Link
              to={`/edit-post/${post.id}`}
              className=' px-2 py-1 mb-1 rounded-sm flex items-center justify-start cursor-pointer duration-300 hover:bg-zinc-800 hover:text-emerald-500'>
              <FiEdit size={22} className='mr-2' /> Edit Post
            </Link>
            <li className=' px-2 py-1 mb-1 rounded-sm flex items-center justify-start cursor-pointer duration-300 hover:bg-zinc-800 hover:text-emerald-500'>
              <FiTrash size={22} className='mr-2' /> Delete Post
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object,
};

export default Post;
