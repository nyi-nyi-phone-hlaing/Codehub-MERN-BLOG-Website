/* eslint-disable react-refresh/only-export-components */
import PostDetails from "../components/PostDetails";
import { json, redirect, useRouteLoaderData } from "react-router-dom";
import { successToast } from "../utils/toast";

import { getToken } from "../utils/auth";

const Details = () => {
  const post = useRouteLoaderData("post-details");

  return <PostDetails post={post} />;
};

export default Details;

export const loader = async ({ params }) => {
  const response = await fetch(`http://localhost:8080/posts/${params.id}`);

  if (!response.ok) {
    throw json({ message: "Post not found in our recorded" }, { status: 404 });
  }

  const data = await response.json();
  return data.post;
};

export const action = async ({ request, params }) => {
  const response = await fetch(`http://localhost:8080/posts/${params.id}`, {
    method: request.method,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });

  if (!response.ok) {
    throw json(
      { message: "Deletion failed due to an internal server error." },
      { status: 500 }
    );
  }
  successToast("Post Delete Successfully");
  return redirect("/");
};
