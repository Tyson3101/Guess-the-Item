import { useState, useEffect, useRef } from "react";
import items from "../data/Items.json";

function Game({
  catergories,
  stopGame,
  score,
  changeScore,
}: {
  catergories: string[];
  stopGame: Function;
  score: number;
  changeScore: Function;
}) {
  const imageEle = useRef() as any;
  function getRandomItem() {
    const randomCategory = catergories[
      Math.floor(Math.random() * catergories.length)
    ] as "cars" | "decals" | "wheels" | "explosions" | "boosts";
    let chosenItem =
      items[randomCategory][
        Math.floor(Math.random() * items[randomCategory].length)
      ];
    return chosenItem;
  }

  const [item, setItem] = useState(getRandomItem() as any);
  const [otherOptions, setOtherOptions] = useState(getOtherOptions());
  useEffect(() => {
    setOtherOptions(getOtherOptions());
  }, [item]);
  function getOtherOptions() {
    let options = [];
    while (options.length !== 3) {
      let check =
        items[(item.type + "s") as "cars"][
          Math.floor(Math.random() * items[(item.type + "s") as "cars"].length)
        ];
      if (check.name === item.name) continue;
      else options.push(check);
    }
    item.correct = true;
    options.push(item);
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
  }
  function clickEvent(option: any) {
    if (option.correct) {
      setItem(getRandomItem() as any);
      changeScore();
    } else {
      if (imageEle) {
        imageEle.current.src = "";
      }
      stopGame();
    }
  }
  return (
    <div>
      <div className="header">
        <h1>Guess the Item</h1>
        <h3>Score: {score}</h3>
      </div>

      <div className="game">
        <div className="preview">
          <img ref={imageEle as any} src={item.image} alt="Loading..." />
        </div>
        <div className="answers">
          {otherOptions.map((option) => {
            return (
              <button
                className="answer"
                onClick={() => clickEvent(option)}
                id={option.image}
              >
                {option.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Game;
