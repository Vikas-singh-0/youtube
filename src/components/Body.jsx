import MainContainer from "./MainContainer";
import SideBar from "./SideBar";
const Body = () => {
    return (
        <div className="bg-black w-[100%] h-[100vh] text-white grid grid-flow-col grid-cols-[20%_80%]">
            <SideBar />
            <MainContainer />
        </div>
    )
}

export default Body;