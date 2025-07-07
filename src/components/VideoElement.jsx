const VideoElement = ({ video }) => {
  console.log(video);

  return (
    <a
      href="#"
      className="block"
      style={{ textDecoration: "none" }}
    >
      <div className="bg-black h-[270px] w-80 rounded-lg shadow-lg cursor-pointer">
        <img
          className=""
          src={video?.snippet?.thumbnails?.medium?.url}
          alt={video?.snippet?.title}
        />
        <div className="p-2 text-white">
          <b>
            <p className="overflow-hidden text-ellipsis whitespace-nowrap max-w-20">
              {video?.snippet?.title}
            </p>
          </b>
          <p className="overflow-hidden text-ellipsis whitespace-nowrap">
            {video?.snippet?.description}
          </p>
          <div className="flex justify-between items-center pr-2">
            <b>{video?.snippet?.channelTitle}</b>
            <span className="text-gray-500">
              {new Date(video?.snippet?.publishedAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default VideoElement;
