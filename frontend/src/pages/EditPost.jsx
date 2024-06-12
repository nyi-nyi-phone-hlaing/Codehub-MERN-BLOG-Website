/* eslint-disable react-refresh/only-export-components */
import { json, redirect } from "react-router-dom";
import PostForm from "../components/PostForm";

import { getToken } from "../utils/auth";
const EditPost = () => {
  return <PostForm formTitle={"Edit your post"} isEdit={true} />;
};

export default EditPost;

export const action = async ({ request }) => {
  const data = await request.formData();
  const postData = {
    id: data.get("postId"),
    title: data.get("title"),
    date: data.get("createdAt"),
    image: data.get("image"),
    description: data.get("description"),
  };
  const response = await fetch(
    `http://localhost:8080/posts/${data.get("postId")}`,
    {
      method: "PATCH",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getToken(),
      },
    }
  );

  if (response.status === 401) {
    throw json(
      {
        message: "Unauthorize! Please register or login now",
        to: "/auth?mode=signup",
      },
      { status: 401 }
    );
  }

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json(
      { message: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
  return redirect("/");
};
