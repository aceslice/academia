const Topnav = () => {
  return (
    <nav className="topnav">
      <div className="links">
        <div className="logo"></div>
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
