const Head = () => {
  return (
    <>
      <div className="flex bg-[azure] content-center gap-4 justify-between items-center shadow-white shadow-sm p-1">
        <div className="flex items-center gap-4 p-2">
          <div className="flex items-center">
            <img className="w-6 h-6 bg-white" src="/hmb.png" alt="user img" />
          </div>
          <div>
            <img
              className="h-8 bg-white rounded"
              src="/ytlogo.png"
              alt="logo"
            />
          </div>
        </div>
        <div className="flex flex-1 justify-center">
          <div className="flex w-full max-w-xl">
            <input
              type="text"
              className="border border-gray-300 rounded-l-full p-2 px-4 text-black w-full focus:outline-none focus:border-blue-500"
              placeholder="Search"
            />
            <button className="bg-gray-100 border border-gray-300 border-l-0 rounded-r-full px-5 flex items-center justify-center hover:bg-gray-200">
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
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <img
            className="w-8 h-8 rounded-full m-2"
            src="/user.jpg"
            alt="user img"
          />
        </div>
      </div>
    </>
  );
};

export default Head;
