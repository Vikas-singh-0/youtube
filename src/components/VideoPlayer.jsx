import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { hideMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import CommentsSection from "./CommentsSection";
import VideoPlayerWithLiveComments from "./VideoPlayerWithLiveComments";

const VideoPlayer = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hideMenu());
  }, [dispatch]);
  return (
    <div className="flex flex-col items-center justify-center mt-4 bg-black gap-6">
      <VideoPlayerWithLiveComments videoId={videoId} />
      <CommentsSection videoId={videoId} />
    </div>
  );
};

export default VideoPlayer;
