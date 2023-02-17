import React, { useState, useEffect } from "react";
import { fishGroup } from "./resources";
import { shuffle } from "./shuffle";

const Card = () => {
  const [array, setArray] = useState(shuffle(fishGroup));
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    console.log("hey");
    setArray(shuffle(fishGroup));
  }, []);

  const loopThroughFishGroup = array.map((fish) => (
    <div
      className="card"
      key={fish.id}
      onClick={() => setArray(shuffle(fishGroup))}
    >
      <img src={fish.src} alt="Fish" /> <p>{fish.name}</p>
    </div>
  ));

  return <div>{loopThroughFishGroup}</div>;
};

export default Card;
