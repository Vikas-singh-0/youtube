import { useEffect, useState } from "react";
import { randomComments } from "../utils/Constants";

const VideoPlayerWithLiveComments = ({ videoId }) => {
  const [liveComments, setLiveComments] = useState([
    { text: "Welcome to the live chat!", id: Date.now() },
  ]);
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveComments((prevComments) => {
        if (prevComments.length >= 10) {
          return prevComments.slice(1); // Remove the oldest comment if there are more than 10 comments
        }
        return [
          ...prevComments,
          { text: randomComments[Math.floor(Math.random() * randomComments.length)], id: Date.now() },
        ];
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  const [input, setInput] = useState("");
  const handleInputChange = (e) => setInput(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setLiveComments((prevComments) => [
        ...prevComments,
        { text: input, id: Date.now() },
      ]);
      setInput("");
    }
  };
  return (
    <div className="flex flex-row justify-center mt-4 bg-black w-full ml-16">
      <iframe
        width="930px"
        height="530px"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div
        className="comments-section ml-16 border-2 rounded-xl w-96 border-gray-700 flex flex-col shadow-2xl"
        style={{ height: "530px", background: "linear-gradient(135deg, #232526 0%, #414345 100%)" }}
      >
        <h3 className="text-white border-b-2 p-4 text-2xl font-bold pl-4 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 rounded-t-xl shadow">
          💬 Top Chat
        </h3>
        <div className="p-4 flex-1 overflow-y-auto custom-scrollbar">
          <ul>
            {liveComments.map((comment, idx) => (
              <li
                key={comment.id}
                className={`flex items-start py-3 transition-all duration-200 ${
                  idx !== liveComments.length - 1
                    ? "border-b border-gray-700"
                    : ""
                }`}
              >
                <img
                  src={`https://i.pravatar.cc/40?u=${comment.id}`}
                  alt="User"
                  className="w-10 h-10 rounded-full mr-3 border-2 border-blue-500 shadow"
                />
                <span className="text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 px-4 py-2 rounded-2xl shadow-lg font-medium">
                  {comment.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <form
          onSubmit={handleSubmit}
          className="p-4 border-t border-gray-700 flex items-center gap-2"
          style={{ background: "#18181b" }}
        >
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Add a comment..."
            className="flex-1 px-3 py-2 rounded-xl bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow hover:scale-105 transition"
          >
            🚀 Send
          </button>
        </form>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #444;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>
    </div>
  );
};
export default VideoPlayerWithLiveComments;
