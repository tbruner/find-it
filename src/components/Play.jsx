import { useState } from "react";
import handleRequest from "../handles/Handles";
import "./Play.css";

const Play = ({ gameImg }) => {
  let newClick = true;
  const [found, setFound] = useState(0);
  const [items, setItems] = useState(gameImg.items.map((item) => item));

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

  function checkMatch(e) {
    const targetBox = document.querySelector("#target-container");

    if (e.target.dataset.id === found) {
      const item = document.querySelector(`#${e.target.innerText}`);
      item.style.backgroundColor = "green";
      targetBox.style.display = "none";
      let newItems = [...items];
      for (let i = 0; i < newItems.length; i++) {
        console.log(newItems[i]);
        if (newItems[i].key == found) {
          newItems.splice(i, 1);
          break;
        }
      }
      setItems(newItems);
      console.log(items);
    } else {
      targetBox.classList.add("wrong");
      // wait for animation
      setTimeout(() => {
        targetBox.style.display = "none";
      }, 1000);
    }
  }

  return (
    <>
      <div className="items-heading">
        <h2>Find these items:</h2>
        <ul className="items-to-find">
          {items.map((item) => (
            <li key={item.key} id={item.name}>
              {item.count} {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div id="game-space">
        <img
          className="game-img"
          src={gameImg.image}
          alt="household hidden object image"
          onClick={checkClick}
        />
        <div id="target-container">
          <div id="target-box"></div>
          <div id="target-dropdown">
            {items.map((item) => (
              <div key={item.key} data-id={item.key} onClick={checkMatch}>
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Play;
