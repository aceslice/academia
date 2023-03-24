import Logo from "/public/logo.svg";
import Menu from "/public/menu.svg"
const Topnav = () => {
  return (
    <nav className="topnav" id="top">
      <img src={Menu} alt="Menu" className="menu" onClick={() =>{
         document.getElementById("top").style.transform = "translateY(-100%)";
      } }/>
      <div className="links">
        <img src={Logo} alt="Academia Logo" className="logo"/>
        <a href="#">Course</a>
        <a href="#">Flash Sale</a>
        <a href="#">Bootcamp</a>
        <a href="#">Learning Flow</a>
      </div>
      <div className="buttons">
        <button className="login">Login</button>
        <button className="sign">Create Account</button>
      </div>
    </nav>
  );
};
export default Topnav;
