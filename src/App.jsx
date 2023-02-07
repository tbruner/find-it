//import handleSubmit from "./handles/Handles";
import Play from "./components/Play";
import Header from "./components/Header";
import "./App.css";

function App() {
  /* firestore test code
 const dataRef = useRef();
  const submithandler = (e) => {
    e.preventDefault();
    handleSubmit(dataRef.current.value);
    dataRef.current.value = "";
  };
  return (
    <div className="App">
      <form onSubmit={submithandler}>
        <input type="text" ref={dataRef} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
  */
  return (
    <div id="app">
      <Header />
      <Play />
    </div>
  );
}
export default App;
