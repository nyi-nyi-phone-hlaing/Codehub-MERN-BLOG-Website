/* eslint-disable react-refresh/only-export-components */
import { json, useLoaderData } from "react-router-dom";
import PostList from "../components/PostList";

const Feed = () => {
  const posts = useLoaderData();

  return (
    <div className='w-full h-full'>
      <PostList posts={posts} />
    </div>
  );
};

export default Feed;

export const loader = async () => {
  const response = await fetch("http://localhost:8080/posts");

  if (!response.ok) {
    throw json();
  }

  const data = await response.json();
  return data.posts;
};
