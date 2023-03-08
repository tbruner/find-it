import { useState } from "react";
import handleRequest from "./handles/Handles";
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

  let newClick = true;
  const [gameImg, setGameImg] = useState(household);
  const [found, setFound] = useState(0);
  const [items, setItems] = useState(gameImg.items.map((item) => item));
  const [gameState, setGameState] = useState(true);

  async function checkClick(e) {
    const targetBox = document.querySelector("#target-container");
    targetBox.classList.remove("wrong");

    if (newClick) {
      let rect = e.target.getBoundingClientRect();

      let cursorX = e.clientX - rect.left;
      let cursorY = e.clientY - rect.top;

      let left = cursorX - 35;
      if (left < 0) left = 0;
      if (left > gameImg.pictureWidth - 70) left = gameImg.pictureWidth - 70;

      let top = cursorY - 35;
      if (top < 0) top = 0;
      if (top > gameImg.pictureHeight - 70) top = gameImg.pictureHeight - 70;

      targetBox.style.left = left + "px";
      targetBox.style.top = top + "px";
      targetBox.style.display = "flex";

      const imageRef = await handleRequest(gameImg.name);

      imageRef.items.forEach((item) => {
        if (
          item.location[0] > left &&
          item.location[0] < left + 70 &&
          item.location[1] > top &&
          item.location[1] < top + 70
        ) {
          setFound(item.id);
        }
      });

      newClick = false;
    } else {
      targetBox.style.display = "none";

      newClick = true;
    }
  }

  async function checkMatch(e) {
    const targetBox = document.querySelector("#target-container");

    if (e.target.dataset.id === found) {
      const item = document.querySelector(`#${e.target.innerText}`);
      let newItems = [...items];

      item.style.backgroundColor = "green";
      targetBox.style.display = "none";

      for (let i = 0; i < newItems.length; i++) {
        if (newItems[i].key == found) {
          newItems[i].count--;
          break;
        }
      }

      setItems(newItems);
    } else {
      targetBox.classList.add("wrong");
      // wait for animation
      setTimeout(() => {
        targetBox.style.display = "none";
      }, 1000);
    }

    let gameWon = true;

    for (let i = 0; i < items.length; i++) {
      if (items[i].count) {
        gameWon = false;
        break;
      }
    }

    if (gameWon) {
      const statusMessage = document.querySelector(".status-message");
      statusMessage.innerText = "You Won!";
      setGameState(false);
    }
  }

  return (
    <div id="app">
      <Header gameState={gameState} />
      <Play
        gameImg={household}
        items={items}
        checkClick={checkClick}
        checkMatch={checkMatch}
      />
    </div>
  );
}
export default App;
