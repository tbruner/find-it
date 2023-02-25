import { useState } from "react";
//import handleSubmit from "./handles/Handles";
import Play from "./components/Play";
import Header from "./components/Header";
import householdImg from "./assets/find-household.jpg";
import "./App.css";

function App() {
  const household = {
    name: "household",
    pictureHeight: 700,
    pictureWidth: 700,
    image: householdImg,
    items: [
      {
        name: "Rose",
        image: null,
        location: [253, 185],
        key: 253185,
      },
      {
        name: "Globe",
        image: null,
        location: [394, 364],
        key: 394364,
      },
      {
        name: "Candle",
        image: null,
        location: [18, 264],
        key: 18264,
      },
      {
        name: "Paintbrushes",
        image: null,
        count: 3,
        // last paintbrush location has two brushes
        location: [
          [62, 611],
          [564, 563],
          [464, 84],
        ],
        key: 62611,
      },
    ],
  };

  return (
    <div id="app">
      <Header />
      <Play gameImg={household} />
    </div>
  );
}
export default App;
