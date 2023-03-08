import Timer from "./Timer.jsx";
import "./Header.css";

const Header = ({ gameState }) => {
  return (
    <header>
      <h1>find it!</h1>
      <Timer gameState={gameState} />
    </header>
  );
};

export default Header;
