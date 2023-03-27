import "./css/app.css";
import Topnav from "./components/Topnav";
import Hero from "./components/Hero";
import Menu from "../src/public/menu.svg";
import More from "./components/More";
import Aos from "aos";
import 'aos/dist/aos.css';

function App() {
  Aos.init();
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
      <More />

    </div>
  );
}
export default App;
