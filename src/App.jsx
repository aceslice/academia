import "./css/app.css";
import Topnav from "./components/Topnav";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="app">
      <img
        src="/public/elements.svg"
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
