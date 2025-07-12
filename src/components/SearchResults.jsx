import React from "react";
import SearchResCol from "./SearchResCol";
function SearchResults({ results }) {
  return (
    <div
      className="absolute bg-slate-100 w-[35rem] top-14 border rounded-lg z-[1000] hover:shadow-gray-800 overflow-scroll max-h-[85vh]"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {results.map((video) => (
        <SearchResCol key={video.id.videoId} video={video} />
      ))}
    </div>
  );
}

export default SearchResults;
