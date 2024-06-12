/* eslint-disable react-refresh/only-export-components */
import { json, redirect, useLoaderData } from "react-router-dom";
import PostList from "../components/PostList";
import { successToast } from "../utils/toast";

import { getToken } from "../utils/auth";

const Feed = () => {
  const posts = useLoaderData();

  return <PostList posts={posts} />;
};

export default Feed;

export const loader = async () => {
  const response = await fetch("http://localhost:8080/posts");

  if (!response.ok) {
    throw json({ message: "Internal Server Error" }, { status: 500 });
  }

  const data = await response.json();
  return data.posts;
};

export const action = async ({ request }) => {
  const data = await request.formData();
  const postId = data.get("postId");
  const response = await fetch(`http://localhost:8080/posts/${postId}`, {
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
