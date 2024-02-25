import HomeIcon from "../../assets/HomeIcon.png";
import HomeArrowIcon from "../../assets/HomeArrowIcon.svg";
import HomeDownArrowIcon from "../../assets/HomeDownArrowIcon.svg";
import "./HomeComponent.css";

function HomeComponent() {
  return (
    <div className="homeContainer">
      <div className="homeBgContainer">
        <img src={HomeIcon} alt="" />
      </div>
      <div className="homeTextContainer">
        <div className="homeTextWrapper">
          <div className="homeFeatureBtnContainer">
            <div className="homeFeatureBtnWrapper">
              <p>Featured on Product Hunt</p>
              <img src={HomeArrowIcon} alt="" />
            </div>
          </div>
          <div className="homeMainTextContainer">
            <p>
              Your team, <br />
              reimagined.
            </p>
          </div>
          <div className="homeParaContainer">
            <p>
              Take your team up a level with easy-to-use tools, effortless{" "}
              <br />
              templates and efficient workflows.
            </p>
          </div>
          <div className="homeBtnContainer">
            <button>Get started today</button>
          </div>
          <div className="homeLearnMoreContainer">
            <div className="homeLearnMoreWrapper">
              <p>Learn More</p>
              <img src={HomeDownArrowIcon}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
