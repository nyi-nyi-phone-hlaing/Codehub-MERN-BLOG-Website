import { FiArrowLeft } from "react-icons/fi";
import {
  Form,
  Link,
  useActionData,
  useNavigation,
  useRouteLoaderData,
} from "react-router-dom";
import PropTypes from "prop-types";

const PostForm = ({ formTitle, isEdit }) => {
  const actionData = useActionData();
  const post = useRouteLoaderData("post-details");
  const navigation = useNavigation();
  const isPosting = navigation.state === "submitting";

  return (
    <div className='w-4/5 mx-auto px-3 max-md:w-full'>
      <header className='relative w-full h-14 flex justify-between items-center'>
        <Link to={"/"}>
          <button className='size-10 bg-zinc-200 dark:bg-zinc-800 flex justify-center items-center mr-3'>
            <FiArrowLeft size={25} />
          </button>
        </Link>
        <h1 className='font-bold text-xl text-emerald-600'>{formTitle}</h1>
        <div className='size-10'></div>
      </header>
      <Form
        method={isEdit ? "PATCH" : "POST"}
        className='w-1/2 mx-auto mt-5 max-md:w-full'>
        {actionData && actionData.errors && (
          <ul className='bg-rose-100 p-2 border border-rose-500 rounded-md mb-2 dark:bg-rose-950 dark:border-rose-600'>
            {Object.values(actionData.errors).map((error, index) => (
              <li
                className='text-center text-rose-500 dark:text-rose-600'
                key={index}>
                {error}
              </li>
            ))}
          </ul>
        )}
        {isEdit && (
          <input
            className='w-full px-2 py-1 bg-transparent outline-none border-2 border-zinc-300 dark:border-zinc-700 rounded-md focus:border-emerald-600'
            name='postId'
            defaultValue={post.id}
            hidden
          />
        )}
        {isEdit && (
          <input
            className='w-full px-2 py-1 bg-transparent outline-none border-2 border-zinc-300 dark:border-zinc-700 rounded-md focus:border-emerald-600'
            name='createdAt'
            defaultValue={post.date}
            hidden
          />
        )}
        <div className='flex flex-col mb-3'>
          <label className='text-zinc-400 mb-1 text-sm' htmlFor='title'>
            Title
          </label>
          <input
            className='px-2 py-1 bg-transparent outline-none border-2 border-zinc-300 dark:border-zinc-700 rounded-md focus:!border-emerald-600 '
            name='title'
            id='title'
            defaultValue={isEdit ? post.title : ""}
            required
          />
        </div>
        <div className='flex flex-col mb-3'>
          <label className='text-zinc-400 mb-1 text-sm' htmlFor='image'>
            Image URL
          </label>
          <input
            className='px-2 py-1 bg-transparent outline-none border-2 border-zinc-300 dark:border-zinc-700 rounded-md focus:!border-emerald-600 '
            name='image'
            id='image'
            defaultValue={isEdit ? post.image : ""}
            required
          />
        </div>
        <div className='flex flex-col mb-3'>
          <label className='text-zinc-400 mb-1 text-sm' htmlFor='description'>
            Description
          </label>
          <textarea
            className='px-2 py-1 bg-transparent text-justify outline-none border-2 border-zinc-300 dark:border-zinc-700 rounded-md focus:!border-emerald-600 resize-none'
            rows={7}
            name='description'
            id='description'
            defaultValue={isEdit ? post.description : ""}
            required></textarea>
        </div>

        <button
          type='submit'
          className='w-full py-1 font-bold text-lg bg-emerald-600 rounded-md hover:bg-emerald-700'
          disabled={isPosting}>
          {isPosting ? "Posting..." : isEdit ? "Edit Post" : "Create Post"}
        </button>
      </Form>
    </div>
  );
};

PostForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  isEdit: PropTypes.bool.isRequired,
};

export default PostForm;
