import { useState } from "react";
//import handleSubmit from "./handles/Handles";
import Play from "./components/Play";
import Header from "./components/Header";
import householdImg from "./assets/find-household.jpg";
import "./App.css";

function App() {
  /* firestore test code
 const dataRef = useRef();
  const submithandler = (e) => {
    e.preventDefault();
    handleSubmit(dataRef.current.value);
    dataRef.current.value = "";
  };
  return (
    <div className="App">
      <form onSubmit={submithandler}>
        <input type="text" ref={dataRef} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
  */
  const household = {
    pictureHeight: 700,
    pictureWidth: 700,
    image: householdImg,
    items: [
      {
        name: "Rose",
        image: null,
        location: [253, 185],
      },
      {
        name: "Globe",
        image: null,
        location: [394, 364],
      },
      {
        name: "Candle",
        image: null,
        location: [18, 264],
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
