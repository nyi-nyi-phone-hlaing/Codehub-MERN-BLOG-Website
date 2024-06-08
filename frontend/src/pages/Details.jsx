/* eslint-disable react-refresh/only-export-components */
import PostDetails from "../components/PostDetails";
import { json, useLoaderData } from "react-router-dom";

const Details = () => {
  const post = useLoaderData();
  return <PostDetails post={post} />;
};

export default Details;

export const loader = async ({ params }) => {
  const response = await fetch(`http://localhost:8080/posts/${params.id}`);

  if (!response.ok) {
    throw json();
  }

  const data = await response.json();
  return data.post;
};
