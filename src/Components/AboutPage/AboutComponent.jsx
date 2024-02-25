import "./AboutComponent.css";
import AboutIcon from "../../assets/AboutIcon.svg";
import AboutPuzzleIcon from "../../assets/AboutPuzzleIcon.svg";
function AboutComponent() {
  return (
    <div className="aboutContainer">
      <div className="aboutWrapper">
        <div className="aboutHeadingContainer">
          <h4>
            About Our Product <br />& Features.
          </h4>
          <p>
            Empower your teams to build better processes, for a better
            <br />
            workplace.
          </p>
        </div>
        <div className="aboutBodyContainer">
          <div className="aboutBodyImgContainer">
            <img src={AboutIcon} alt="" />
          </div>
          <div className="aboutBodyTextContainer">
            <article>
              <img src={AboutPuzzleIcon} alt="" />
              <span>Introducing Our Product</span>
            </article>
            <h3>
              Our intuitive interface designed for seamless user experience.
            </h3>
            <p>
              Gain valuable insights into your operations with our comprehensive
              analytics suite, enabling data-driven decision-making for enhanced
              productivity and profitability.
              <br />
              <br />
              Experience lightning-fast performance with optimized code and
              efficient algorithms, ensuring swift operation even with extensive
              data.
            </p>
            <button>
              Explore More <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutComponent;
