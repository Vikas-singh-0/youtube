import { useEffect, useRef, useState } from "react";
import { API_KEY } from "../utils/Constants";
import SearchResults from "./SearchResults";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  console.log(searchText);
  const [searchResults, setSearchResults] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchText}&key=${API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("Search results:", data);
          setSearchResults(data.items);
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
        });
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  return (
    <>
      {(searchResults.length > 0) && showSuggestions && <SearchResults results={searchResults} />}
      <div className="flex w-full max-w-xl">
        <input
          type="text"
          className="border border-gray-300 rounded-l-full p-2 px-4 text-black w-full focus:outline-none focus:border-blue-500"
          placeholder="Search"
          onChange={(e) => setSearchText(e.target.value)}
          onFocus={() => setTimeout(() => setShowSuggestions(true), 100)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
        />
        <div onClick={() => {console.log("Search text:", searchText);}} className="bg-gray-100 border border-gray-300 border-l-0 rounded-r-full px-5 flex items-center justify-center hover:bg-gray-200">
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Search;
