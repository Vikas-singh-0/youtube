import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (isMenuOpen) {
    return null;
  }
  return (
    <>
      <div className="bg-black h-[100vh] text-white p-5 border-r border-white-800 shadow-md shadow-white ">
        <div className="mb-5">
          <ul>
            <li>
              <b>Home</b>
            </li>
            <li>
              <b>Shorts</b>
            </li>
            <li>
              <b>Trending</b>
            </li>
          </ul>
        </div>
        <div className=" mb-5">
          <b>Subscritpions</b>
          <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
          </ul>
        </div>
        <div>
          <b>Watch Later</b>
          <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
