import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/Constants";
import VideoElement from "./VideoElement";

const VideoContainer = () => {
  const [videoList, setVideoList] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("videoList") === null) {
      fetch(YOUTUBE_SEARCH_API)
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("videoList", JSON.stringify(data.items));
          setVideoList(data.items);
        });
    } else {
      setVideoList(JSON.parse(localStorage.getItem("videoList")));
    }
  }, []);
  if (!videoList || videoList.length === 0) {
    return (
      <div className="bg-gray-900 w-[97%] h-[100%] text-white flex flex-wrap justify-center m-2">
        <h1 className="text-2xl">Loading...</h1>
      </div>
    );
  }
  return (
    <div className="bg-gray-900 w-[97%] h-[100%] text-white flex flex-wrap justify-center m-2 gap-7">
      {videoList.map((vid) => (
        <VideoElement key={vid.id} video={vid} />
      ))}
    </div>
  );
};

export default VideoContainer;
