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
        key: 253185,
      },
      {
        name: "Globe",
        image: null,
        key: 394364,
      },
      {
        name: "Candle",
        image: null,
        key: 18264,
      },
      {
        name: "Paintbrush1",
        image: null,
        count: 1,
        key: 62611,
      },
      {
        name: "Paintbrush2",
        image: null,
        count: 1,
        key: 564563,
      },
      {
        name: "Paintbrush3",
        image: null,
        count: 2,
        key: 46484,
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
