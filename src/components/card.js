import React, { useState, useEffect } from "react";
import { fishGroup } from "./resources";
import { shuffle } from "./shuffle";

const Card = () => {
  const [array, setArray] = useState(shuffle(fishGroup));
  const [currentCard, setCurrentCard] = useState("");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const handleClick = (e) => {
    setArray(shuffle(fishGroup));
    ScoreUpdater(e);
    highScoreUpdater(e);
  };

  //shuffles the cards when component is mounted
  useEffect(() => {
    setArray(shuffle(fishGroup));
  }, []);

  const ScoreUpdater = (e) => {
    if (currentCard === e.target.lastChild) {
      setScore(0);
    } else {
      setScore(score + 1);
      setCurrentCard(e.target.lastChild);
    }
  };

  const highScoreUpdater = (e) => {
    if (score === highScore && e.target.lastChild !== currentCard) {
      setHighScore(highScore + 1);
    }
  };

  const loopThroughFishGroup = array.map((fish) => (
    <div className="card" key={fish.id} onClick={handleClick}>
      <img src={fish.src} alt="Fish" />
      <p>{fish.name}</p>
    </div>
  ));

  return (
    <div>
      <div className="scoreboard">
        <div>Score: {score}</div>
        <div>highScore: {highScore}</div>
      </div>

      {loopThroughFishGroup}
    </div>
  );
};

export default Card;
