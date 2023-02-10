import "./Play.css";

const Play = ({ gameImg }) => {
  let newClick = true;

  function checkClick(e) {
    const targetBox = document.querySelector("#target-container");
    const dropdown = document.querySelector("#target-dropdown");

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
      targetBox.style.display = "block";

      let found = false;
      gameImg.items.forEach((item) => {
        if (isNaN(item.location[0])) {
          item.location.forEach((loc) => {
            if (
              loc[0] > left &&
              loc[0] < left + 70 &&
              loc[1] > top &&
              loc[1] < top + 70
            ) {
              dropdown.style.backgroundColor = "white";
              found = true;
            }
          });
        } else if (
          item.location[0] > left &&
          item.location[0] < left + 70 &&
          item.location[1] > top &&
          item.location[1] < top + 70
        ) {
          dropdown.style.backgroundColor = "white";
          found = true;
        }
      });

      if (!found) {
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
        src={gameImg.image}
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
