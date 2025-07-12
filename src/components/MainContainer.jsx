import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="bg-black w-[100%] h-[100%] text-white flex flex-col m-2">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
