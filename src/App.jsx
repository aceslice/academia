import "./css/app.css";
import Topnav from "./components/Topnav";
import Hero from "./components/Hero";
import Menu from "../src/public/menu.svg";

function App() {
  return (
    <div className="app">
      <img
        src={Menu}
        alt="Menu"
        className="menu"
        onClick={() => {
          document.getElementById("top").style.transform = "translateY(0)";
        }}
      />
      <Topnav />
      <Hero />
    </div>
  );
}
export default App;
