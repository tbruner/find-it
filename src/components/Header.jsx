import Timer from "./Timer.jsx";
import "./Header.css";

const Header = ({ gameState, setTime }) => {
  return (
    <header>
      <h1>find it!</h1>
      <Timer gameState={gameState} setTime={setTime} />
    </header>
  );
};

export default Header;
