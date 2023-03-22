import "./Play.css";

const Play = ({ gameImg, items, checkClick, checkMatch, homeOnClick }) => {
  return (
    <div className="play-area">
      <div id="modal" className="modal-hidden">
        <div className="modal-content">
          <div className="status-message"></div>
          <div className="modal-leaderboard-input">
            <label for="leaderboard-name">Enter your name:</label>
            <input id="leaderboard-name" type="text"></input>
          </div>
          <button>Add to Leaderboard</button>
          <button onClick={homeOnClick}>Home</button>
        </div>
      </div>
      <div className="items-heading">
        <div className="label">Find these items:</div>
        <ul className="items-to-find">
          {items.map((item) => (
            <li
              key={item.key}
              id={item.name}
              style={{ backgroundColor: item.count > 0 ? "" : "green" }}
            >
              {item.name}
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
              <div
                key={item.key}
                data-id={item.key}
                className={item.count > 0 ? "active-item" : "inactive-item"}
                onClick={checkMatch}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Play;
