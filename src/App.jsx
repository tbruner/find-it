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
        count: 1,
        key: 1,
      },
      {
        name: "Globe",
        count: 1,
        key: 2,
      },
      {
        name: "Candle",
        count: 1,
        key: 3,
      },
      /* {
        name: "Paintbrushes",
        count: 4,
        key: 4,
      },*/
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
