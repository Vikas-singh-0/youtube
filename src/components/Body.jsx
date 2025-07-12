import { Outlet } from "react-router-dom";
// import MainContainer from "./MainContainer";
import SideBar from "./SideBar";
import Head from "./Head";
const Body = () => {
  return (
    <>
      <Head />
      <div className="bg-black w-[100vw] h-[100vh] text-white grid grid-flow-col">
        <SideBar />
        <Outlet />
      </div>
    </>
  );
};

export default Body;
