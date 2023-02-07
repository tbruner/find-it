import household from "../assets/find-household.jpg";
import "./Play.css";

const Play = () => {
  let pictureHeight = 700;
  let pictureWidth = 700;
  let newClick = true;

  function checkClick(e) {
    const targetBox = document.querySelector("#target-box");

    if (newClick) {
      let rect = e.target.getBoundingClientRect();

      let cursorX = e.clientX - rect.left;
      let cursorY = e.clientY - rect.top;
      let left = cursorX - 35;
      if (left < 0) left = 0;
      if (left > pictureWidth - 70) left = pictureWidth - 70;
      let top = cursorY - pictureHeight - 35;
      if (top > -70) top = -70;
      if (top < -pictureHeight) top = -pictureHeight;

      targetBox.style.left = left + "px";
      targetBox.style.top = top + "px";
      targetBox.style.display = "block";
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
      <div id="target-box" />
    </div>
  );
};

export default Play;
