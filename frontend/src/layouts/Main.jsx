/* eslint-disable react-refresh/only-export-components */
import {
  Outlet,
  useLoaderData,
  useNavigate,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import { useEffect } from "react";
import { infoToast } from "../utils/toast";
import { calculateExpDate } from "../utils/auth";
import Loading from "../components/Loading";

const Main = () => {
  const token = useLoaderData();
  const submit = useSubmit();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  useEffect(() => {
    if (!token) {
      return;
    }
    if (token === "TOKEN_EXPIRED") {
      infoToast("Token Expired! Login again.");
      submit(null, { action: "/logout", method: "POST" });
      return;
    }

    const duration = calculateExpDate();
    const timeoutId = setTimeout(() => {
      infoToast("Token Expired! Login again.");
      navigate("/logout");
    }, duration);

    return () => clearTimeout(timeoutId);
  }, [token, submit, navigate]);

  return (
    <div className='select-none duration-1000 font-poppins w-full h-screen flex justify-center items-start bg-zinc-100 dark:bg-zinc-800 dark:text-white'>
      <Container>
        <Navbar />
        <div className='w-full h-[calc(100vh-3.5rem)] bg-zinc-50 dark:bg-zinc-900 overflow-y-scroll'>
          {isLoading ? <Loading /> : <Outlet />}
        </div>
      </Container>
    </div>
  );
};

export default Main;
