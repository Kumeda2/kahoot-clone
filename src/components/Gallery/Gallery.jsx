import game from "../../assets/images/game.webp";
import cl from "./Gallery.module.css";

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
  ];

  return (
    <div className={cl.games}>
      {games.map((game) => {
        return (
          <div className={cl.game} key={game.id}>
            <img src={game.img} alt={game.title} />
            <div key={game.id} className={cl.gameName}>
              {game.title}
            </div>
          </div>
        );
      })}
    </div>
  );
}
