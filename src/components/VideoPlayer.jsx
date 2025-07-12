import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { hideMenu, toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";

const VideoPlayer = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hideMenu());
  }, [dispatch]);
  return (
    <>
      <iframe
        width="930px"
        height="530px"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  );
};

export default VideoPlayer;
