/* eslint-disable react-refresh/only-export-components */
import { json, redirect } from "react-router-dom";
import PostForm from "../components/PostForm";
import uuid from "react-uuid";

const CreatePost = () => {
  return <PostForm formTitle={"Create a new post"} isEdit={false} />;
};

export default CreatePost;

export const action = async ({ request }) => {
  const data = await request.formData();
  const postData = {
    id: uuid(),
    title: data.get("title"),
    date: new Date().toISOString(),
    image: data.get("image"),
    description: data.get("description"),
  };
  const response = await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });

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
