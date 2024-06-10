/* eslint-disable react-refresh/only-export-components */
import { json, redirect } from "react-router-dom";
import PostForm from "../components/PostForm";
const EditPost = () => {
  return <PostForm formTitle={"Edit your post"} isEdit={true} />;
};

export default EditPost;

export const loader = async ({ params }) => {
  const response = await fetch(`http://localhost:8080/posts/${params.id}`);

  if (!response.ok) {
    throw json({ message: "" }, { status: 500 });
  }
  const data = await response.json();
  return data.post;
};

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
      },
    }
  );

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "" }, { status: 500 });
  }
  return redirect("/");
};
