/* eslint-disable react-refresh/only-export-components */
import { json, redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { infoToast } from "../utils/toast";

const Auth = () => {
  return <AuthForm />;
};

export default Auth;

export const action = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode");
  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "Can't request with this params" }, { status: 500 });
  }
  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch(`http://localhost:8080/${mode}`, {
    method: "POST",
    body: JSON.stringify(authData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Internal Server Error" }, { status: 500 });
  }
  const responseData = await response.json();
  const token = responseData.token;
  localStorage.setItem("token", token);
  const expDate = new Date();
  expDate.setDate(expDate.getDate() + 1);
  infoToast(`Token expired at ${expDate}`);
  localStorage.setItem("exp", expDate.toISOString());
  return redirect("/");
};
