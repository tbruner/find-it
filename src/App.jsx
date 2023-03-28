import { useState } from "react";
import {
  handleImageRequest,
  handleLeaderboardRequest,
  addNameToLeaderboard,
} from "./handles/Handles";
import Play from "./components/Play";
import Home from "./components/Home";
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
  const [items, setItems] = useState([...gameImg.items]);
  const [gameState, setGameState] = useState(true);
  const [time, setTime] = useState(0);
  const [displayHome, setHome] = useState(false);
  const [leaderboard, setLeaderboard] = useState();

  async function getLeaderboard(name) {
    const response = await handleLeaderboardRequest(name);
    return response;
  }

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

      const imageRef = await handleImageRequest(gameImg.name);

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
      const modal = document.querySelector("#modal");
      const nameInput = document.querySelector("#leaderboard-name");

      modal.classList.add("modal-display");

      // target/focus input box
      nameInput.focus();

      statusMessage.innerText = "You Won!";
      setGameState(false);
    }
  }

  async function homeOnClick() {
    setLeaderboard(await getLeaderboard(gameImg.name));
    setHome(true);
  }

  function reset() {
    setGameState(true);
    setFound(0);
    setHome(false);

    let newItems = [...items];

    for (let i = 0; i < newItems.length; i++) {
      newItems[i].count = 1;
    }

    setItems(newItems);

    const modal = document.querySelector("#modal");

    modal.classList.remove("modal-display");
  }

  async function addToLeaderboard() {
    const nameInput = document.querySelector("#leaderboard-name");
    const name = nameInput.value;

    addNameToLeaderboard(name, time, gameImg.name);

    // clear name from input box
    nameInput.value = "";

    setLeaderboard(await getLeaderboard(gameImg.name));
    setHome(true);
  }

  return (
    <div id="app">
      <Header gameState={gameState} setTime={setTime} />
      {displayHome ? (
        <Home leaderboard={leaderboard} reset={reset} />
      ) : (
        <Play
          gameImg={household}
          items={items}
          checkClick={checkClick}
          checkMatch={checkMatch}
          homeOnClick={homeOnClick}
          addToLeaderboard={addToLeaderboard}
        />
      )}
    </div>
  );
}
export default App;
