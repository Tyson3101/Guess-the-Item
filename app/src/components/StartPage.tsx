import { useState } from "react";

function StartPage({ click, message }: { click: Function; message: string }) {
  const [cars, setCars] = useState(
    window.localStorage.getItem("carsCheck")?.toLowerCase() === "true"
  );
  const [decals, setDecals] = useState(
    window.localStorage.getItem("decalsCheck")?.toLowerCase() === "true"
  );
  const [wheels, setWheels] = useState(
    window.localStorage.getItem("wheelsCheck")?.toLowerCase() === "true"
  );
  const [boosts, setBoosts] = useState(
    window.localStorage.getItem("boostsCheck")?.toLowerCase() === "true"
  );
  const [explosions, setExplosions] = useState(
    window.localStorage.getItem("explosionsCheck")?.toLowerCase() === "true"
  );
  const handleChange = (e: any) => {
    if (e.target.id === "carCheck") {
      window.localStorage.setItem("carsCheck", `${!cars}`);
      setCars(!cars);
    } else if (e.target.id === "decalCheck") {
      window.localStorage.setItem("decalsCheck", `${!decals}`);
      setDecals(!decals);
    } else if (e.target.id === "wheelCheck") {
      window.localStorage.setItem("wheelsCheck", `${!wheels}`);
      setWheels(!wheels);
    } else if (e.target.id === "boostCheck") {
      window.localStorage.setItem("boostsCheck", `${!boosts}`);
      setBoosts(!boosts);
    } else if (e.target.id === "explosionCheck") {
      window.localStorage.setItem("explosionsCheck", `${!explosions}`);
      setExplosions(!explosions);
    }
  };
  return (
    <div className="startPage">
      <h1>Guess the Item!</h1>
      <h3 className="msg">{message}</h3>
      <div className="checklist">
        <h4>Choose what items to guess!</h4>
        <div className="checks">
          Cars:{" "}
          <input
            type="checkbox"
            id="carCheck"
            checked={cars}
            onChange={handleChange}
          />
          Decals:{" "}
          <input
            type="checkbox"
            id="decalCheck"
            checked={decals}
            onChange={handleChange}
          />
          Wheels:{" "}
          <input
            type="checkbox"
            id="wheelCheck"
            checked={wheels}
            onChange={handleChange}
          />
          Boost:{" "}
          <input
            type="checkbox"
            id="boostCheck"
            checked={boosts}
            onChange={handleChange}
          />
          Goal Explosions:{" "}
          <input
            type="checkbox"
            id="explosionCheck"
            checked={explosions}
            onChange={handleChange}
          />
        </div>
      </div>
      <button
        onClick={() => click({ cars, decals, wheels, boosts, explosions })}
      >
        Start
      </button>
    </div>
  );
}

export default StartPage;
