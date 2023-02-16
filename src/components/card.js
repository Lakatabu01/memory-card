import React from "react";
import { fishGroup } from "./resources";

const Card = () => {
  const loopThroughFishGroup = fishGroup.map((fish) => (
    <div>
      <img src={fish.src} alt="Fish" /> <p>{fish.name}</p>{" "}
    </div>
  ));

  return <div>{loopThroughFishGroup}</div>;
};

export default Card;
