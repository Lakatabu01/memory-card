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
    if (score >= 10) {
      setScore(0);

      return;
    }

    if (currentCard === e.target.nextSibling) {
      setScore(0);
    } else {
      setScore(score + 1);
      setCurrentCard(e.target.nextSibling);
    }
  };

  const highScoreUpdater = (e) => {
    if (highScore >= 10) {
      setHighScore(10);

      return;
    }

    if (score === highScore && e.target.nextSibling !== currentCard) {
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
        <div className="score">Score: {score}</div>
        <div className="high-score">HighScore: {highScore}</div>
      </div>

      <div className="all-cards"> {loopThroughFishGroup} </div>
    </div>
  );
};

export default Card;
