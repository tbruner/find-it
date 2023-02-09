import household from "../assets/find-household.jpg";
import "./Play.css";

const Play = () => {
  let pictureHeight = 700;
  let pictureWidth = 700;
  let newClick = true;
  let roseLoc = [253, 185];
  let globeLoc = [394, 364];
  let candleLoc = [18, 264];
  // last paintbrush location has two brushes
  let paintbrushLocs = [
    [62, 611],
    [564, 563],
    [464, 84],
  ];

  function checkClick(e) {
    const targetBox = document.querySelector("#target-container");
    const dropdown = document.querySelector("#target-dropdown");

    if (newClick) {
      let rect = e.target.getBoundingClientRect();

      let cursorX = e.clientX - rect.left;
      let cursorY = e.clientY - rect.top;
      let left = cursorX - 35;
      if (left < 0) left = 0;
      if (left > pictureWidth - 70) left = pictureWidth - 70;
      let top = cursorY - 35;
      if (top < 0) top = 0;
      if (top > pictureHeight - 70) top = pictureHeight - 70;

      targetBox.style.left = left + "px";
      targetBox.style.top = top + "px";
      targetBox.style.display = "block";

      if (
        roseLoc[0] > left &&
        roseLoc[0] < left + 70 &&
        roseLoc[1] > top &&
        roseLoc[1] < top + 70
      ) {
        dropdown.style.backgroundColor = "white";
      } else {
        dropdown.style.backgroundColor = "black";
      }
      newClick = false;
    } else {
      targetBox.style.display = "none";
      newClick = true;
    }
  }

  return (
    <div id="game-space">
      <img
        className="game-img"
        src={household}
        alt="household hidden object image"
        onClick={checkClick}
      />
      <div id="target-container">
        <div id="target-box"></div>
        <div id="target-dropdown"></div>
      </div>
    </div>
  );
};

export default Play;
