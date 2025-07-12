import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import Search from "./Search";
import { Link } from "react-router-dom";
const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <>
      <div className="flex bg-[azure] content-center gap-4 justify-between items-center shadow-white shadow-sm p-1">
        <div className="flex items-center gap-4 p-2">
          <div className="flex items-center">
            <img
              onClick={toggleMenuHandler}
              className="cursor-pointer w-6 h-6 bg-white"
              src="/hmb.png"
              alt="user img"
            />
          </div>
          <div>
            <Link to="/">
              <img
              className="h-8 bg-white rounded"
              src="/ytlogo.png"
              alt="logo"
            />
            </Link>
          </div>
        </div>
        <div className="flex flex-1 justify-center">
          <Search />
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
