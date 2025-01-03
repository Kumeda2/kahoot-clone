import game from "../../assets/images/game.webp";
import Card from "../../modules/Card/Card";
import cl from "./Gallery.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useRef, useEffect, useState } from "react";

export default function Gallery() {
  const games = [
    {
      id: 1,
      title: "Game 1",
      img: game,
    },
    {
      id: 2,
      title: "Game 2",
      img: game,
    },
    {
      id: 3,
      title: "Game 3",
      img: game,
    },
    {
      id: 4,
      title: "Game 4",
      img: game,
    },
    {
      id: 5,
      title: "Game 5",
      img: game,
    },
    {
      id: 6,
      title: "Game 6",
      img: game,
    },
  ];
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollRef = useRef(null);

  const arrowClickHandler = (direction) => {
    direction === "left"
      ? (scrollRef.current.scrollLeft -= 500)
      : (scrollRef.current.scrollLeft += 500);

    setShowLeftArrow(scrollRef.current.scrollLeft > 0);

    setShowRightArrow(
      scrollRef.current.scrollLeft + scrollRef.current.clientWidth <
        scrollRef.current.scrollWidth
    );
  };

  return (
    <div className={cl.galleryWrapper}>
      <div className={cl.games} ref={scrollRef}>
        {showLeftArrow && (
          <div
            className={cl.leftArrow}
            onClick={() => arrowClickHandler("left")}
          >
            <IoIosArrowBack />
          </div>
        )}
        {games.map((game) => {
          return <Card key={game.id} title={game.title} img={game.img} />;
        })}
        {showRightArrow && (
          <div
            className={cl.rightArrow}
            onClick={() => arrowClickHandler("right")}
          >
            <IoIosArrowForward />
          </div>
        )}
      </div>
    </div>
  );
}
