import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Container from "../components/Container";

const Main = () => {
  return (
    <div className='font-poppins w-full h-screen flex justify-center items-start bg-zinc-800 text-white'>
      <Container>
        <Navbar />
        <div className='w-full h-[calc(100vh-3.5rem)] bg-zinc-900 overflow-y-scroll'>
          <Outlet />
        </div>
      </Container>
    </div>
  );
};

export default Main;
