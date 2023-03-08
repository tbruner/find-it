import Timer from "./Timer.jsx";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <h1>find it!</h1>
      <Timer gameState={true} />
    </header>
  );
};

export default Header;
