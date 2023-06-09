import Logo from "../public/logo.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="texts">
        <img src={Logo} alt="Academia Logo" className="logo" />
        <h1>
          Be <span>Extra</span> Prepared
          <br />
          On The <span>Go.</span>
        </h1>
        <p>
          Get exclusive access to all your academic contents with the click of a
          button
        </p>
        <div className="buttons">
          <button className="get">Get Started</button>
          <button className="lrn">Learn More</button>
        </div>
        <div className="chips" data-aos="fade-right">
          <div className="chip" ></div>
          <div className="chip"></div>
          <div className="chip"></div>
          <div className="chip"></div>
          <p>Join your peers today!</p>
        </div>
      </div>
      <div data-aos="zoom-in" className="img-container"></div>
    </section>
  );
};
export default Hero;
