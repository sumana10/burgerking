import aboutimage from "../images/about.png";

const About = () => {
  return (
    <div id="about">
      <div className="about-text">
        <h1>UPCOMING EVENT </h1>
        <p>
          The Burger store is the best place to taste and enjoy each bite of the
          Burger. Cherish your moments with loved one by tasting our best
          quality Bureger with High Quality Mozerrila Cheeze.Burger store is the
          best place to taste and enjoy each bite of the Burger. Cherish your
          moments with loved one by tasting our best quality Bureger with High
          Quality Mozerrila Cheeze.Burger store is the best place to taste and
          enjoy each bite of the Burger. Cherish your moments with loved one by
          tasting our best quality Bureger with High Quality Mozerrila Cheeze.
        </p>
        <button>Read More</button>
      </div>
      <div className="about-image">
        <img src={aboutimage} alt="" />
      </div>
    </div>
  );
};

export default About;
