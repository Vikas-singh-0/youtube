import MainContainer from "./MainContainer";
import SideBar from "./SideBar";
const Body = () => {
    return (
        <div className="bg-black w-[90%] h-[100%] text-white grid grid-flow-col">
            <SideBar />
            <MainContainer />
        </div>
    )
}

export default Body;