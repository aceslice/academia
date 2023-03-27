import star from "../public/star.svg";
import book from "../public/book-open.svg";

const More = () => {
  return (
    <div className="more">
      <h1 data-aos="zoom-in">
        Education through <br />
        <span>Simplicity</span>
      </h1>
      <span className="line" data-aos="fade-right"></span>
      <div className="container" data-aos="fade-left">
        <img src={book} alt="Icon" />
        <h4>User-friendly platform to learn.</h4>
        <p>
          Simplified experience for learning through creativity and innovation. Try
          it out!
        </p>
      </div>
      <div className="container" data-aos="fade-left">
        <img src={star} alt="Icon" />
        <h4>Packed with Mordern Technology</h4>
        <p>
          Presence of an online library to set you on the path of knowledge and academic success and many more!
        </p>
      </div>
    </div>
  );
};
export default More;
