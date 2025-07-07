import Button from "./Button";

const ButtonList = () => {
    const handleClick = () => {
        console.log(` clicked`);
    };
    let btnList = ["Live", "Videos", "Shorts", "Playlists", "Channels", "Community", "About", "Anime", "Movies", "Music", "Sports", "Gaming", "News", "Learning", "Fashion", "Beauty", "AnimeMovies", "AnimeMusic", "AnimeSports", "AnimeGaming", "AnimeNews", "AnimeLearning", "AnimeFashion", "AnimeBeauty"];
    return (
        <div className="scroll-x w-[98.5%] overflow-scroll whitespace-nowrap [&::-webkit-scrollbar]:hidden scrollbar-hide" >
            {btnList.map((label, index) => (
                <Button
                    key={index}
                    label={label}
                    clickHandler={handleClick}
                    disabled={index !== 2 ? false : true} // You can set this based on your logic
                />
            ))}
        </div>
    );
};

export default ButtonList;