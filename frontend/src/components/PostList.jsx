import PropTypes from "prop-types";
import Post from "./Post";

const PostList = ({ posts }) => {
  return (
    <div className='w-full mx-auto p-3 grid grid-cols-3 gap-3 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-0'>
      {posts &&
        posts.length > 0 &&
        posts.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.array,
};

export default PostList;
