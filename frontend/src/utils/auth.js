import { redirect } from "react-router-dom";

export const calculateExpDate = () => {
  const expDateInMiliseconds = new Date(localStorage.getItem("exp"));
  const currentDateInMiliseconds = new Date();
  const duration = expDateInMiliseconds - currentDateInMiliseconds;
  return duration;
};

export const getToken = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  if (calculateExpDate() < 0) {
    return "TOKEN_EXPIRED";
  }
  return token;
};

export const tokenLoader = () => {
  return getToken();
};

export const checkTokenLoader = () => {
  const token = getToken();
  if (!token) {
    return redirect("/web-guard");
  }
  return token;
};
