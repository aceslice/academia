const Hero = () => {
  return (
    <section className="hero">
      <div className="texts">
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
        <div className="chips">
          <div className="chip"></div>
          <div className="chip"></div>
          <div className="chip"></div>
          <div className="chip"></div>
          <p>Join your peers today!</p>
        </div>
      </div>
      <div className="img-container"></div>
    </section>
  );
};
export default Hero;
