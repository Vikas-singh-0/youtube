import React from "react";
import { useNavigate } from "react-router-dom";

export default function SearchResCol({ video }) {
  const navigate = useNavigate();
  const handleClick = (videoId) => {
    // console.log("Video ID:", videoId);
    navigate(`/videoPlayer?v=${videoId}`);
  };
  return (
    <div
      key={video.id.videoId}
      className="flex p-2 border-b hover:bg-gray-200 cursor-pointer"
      onClick={() => {
        console.log("Video ID:", video.id.videoId);
        handleClick(video.id.videoId);
      }}
    >
      <div className="flex gap-2">
        <img
          className="w-24 h-14"
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
        <div className="ml-2">
          <h3 className="text-sm font-semibold">{video.snippet.title}</h3>
          <p className="text-xs text-gray-500">{video.snippet.channelTitle}</p>
        </div>
      </div>
    </div>
  );
}
