import { useState } from "react";
import StartPage from "./components/StartPage";
import Game from "./components/Game";
import "./css/App.css";

function App() {
  const [started, setStarted] = useState(false);
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);
  const [catergories, setCatergories] = useState([] as string[]);
  function start(filters: { [key: string]: boolean }[]) {
    const filteredGame = [];
    for (let [key, value] of Object.entries(filters)) {
      if (value) {
        filteredGame.push(key);
      }
    }
    console.log(filteredGame);
    if (filteredGame.length) {
      setCatergories([...filteredGame]);
      setStarted(true);
    } else alert("Please select an item!");
  }
  return (
    <>
      {started ? (
        <Game
          catergories={catergories}
          stopGame={() => {
            setStarted(false);
            setScore(0);
            setMessage("Game Failed.\nScore: " + score);
          }}
          score={score}
          changeScore={() => setScore(score + 1)}
        />
      ) : (
        <StartPage click={start} message={message} />
      )}
    </>
  );
}

export default App;
