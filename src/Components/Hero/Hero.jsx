import "./Hero.css";
import img from "../../assets/img/astronaut.svg";
const Hero = () => {
  return (
    <div className="hero">
      <div className="profile">
        <h3 className="greeting">Welcome to my Portfolio</h3>
        <h1 className="intro">Hi! I am Kathy Web Designer</h1>
        <p className="description">
          I am a high-performing IT graduate looking for a position in the field
          of information technology. I offer a strong academic background in
          computer programming, web and mobile development. I built my
          generalist IT professional skills through university projects,
          assignment work and undertaking many elective subjects in a wide
          variety of topics during my degree. I am looking for a chance to take
          my learning into the next stage.
        </p>
      </div>
      <img src={img} alt="" />
    </div>
  );
};

export default Hero;
