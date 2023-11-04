import { randomValueFromArray } from "./random";
import React, { useState } from 'react';

export default function App() {
  const [showStory, setShowStory] = useState(false);
  const [xItem, setXItem] = useState("");
  const [yItem, setYItem] = useState("");
  const [zItem, setZItem] = useState("");
  const [ukus, setUkus] = useState("us");
  const [f, setF] = useState("94");
  const [Player, setPlayer] = useState("");
  const [Kane,setKane]=useState("");

  const generateStory = () => {
    if (showStory) {
      setXItem(randomValueFromArray(["Willy the Goblin", "Big Daddy", "Father Christmas"]));
      setYItem(randomValueFromArray(["the soup kitchen", "Disneyland", "the White House"]));
      setZItem(randomValueFromArray(["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"]));
    }

    if (ukus === "uk") {
      setF("34");
      setKane("21stone");
    }
    if(ukus === "us"){
      setF("94")
      setKane("300ponds")
    }
    setShowStory(true);
  };

  return (
    <>
      <div>
        <label htmlFor="customname">Enter custom name:</label>
        <input type="text" placeholder="Player" value={Player} onChange={(e) => setPlayer(e.target.value)} />
      </div>
      <div>
        <label htmlFor="us">
          <input type="radio" name="u" value="us" checked={ukus === "us"} onChange={() => setUkus("us")} />US
        </label>
        <label htmlFor="uk">
          <input type="radio" name="u" value="uk" checked={ukus === "uk"} onChange={() => setUkus("uk")} />UK
        </label>
      </div>

      <div>
        <button onClick={generateStory}>Generate random story</button>
      </div>

      {showStory && (
        <p>
          It was {f} fahrenheit outside, so {xItem} went for a walk. When they
          got to {yItem}, they stared in horror for a few moments, then {zItem}.
          {Player} saw the whole thing, but was not surprised — {xItem} weighs {Kane},
           and it was a hot day.
        </p>
      )}
    </>
  );
}