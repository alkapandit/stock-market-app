import "./FeaturesComponent.css";
import UsersIcon from "../../assets/UsersIcon.svg";
import SearchIcon from "../../assets/SearchIcon.svg";
import APIcon from "../../assets/APIcon.svg";
import FeaturesTableIcon from "../../assets/FeaturesTableIcon.svg";
import FeaturesTextIcon from "../../assets/FeaturesTextIcon.svg";
import FeaturesPlayIcon from "../../assets/FeaturesPlayIcon.svg";

function FeaturesComponent() {
  return (
    <div className="featureContainer">
      <div className="featureWrapper">
        <div className="featureVideoContainer">
          <div className="featureVideoWrapper">
            <img src={FeaturesTextIcon} alt="" className="featuresTextIcon" />
            <img src={FeaturesPlayIcon} alt="" className="featuresPlayIcon" />
          </div>
        </div>
        <div className="featureCardContainer">
          <div className="featureCardWrapper">
            <div className="featuresCard">
              <img src={UsersIcon} alt="" />
              <h5>Users</h5>
              <p>
                Stay on top of your growing company by making it easy to search,
                and get to know, your teammates.
              </p>
            </div>
            <div className="featuresCard">
              <img src={SearchIcon} alt="" />
              <h5>Reaserch Analysis</h5>
              <p>
                Keep your visuals consistently on-brand with easily accessible
                colors, icons, screenshots and more, for the whole team.
              </p>
            </div>
            <div className="featuresCard">
              <img src={APIcon} alt="" />
              <h5>A.P</h5>
              <p>
                Set up template bug report forms to give timely and actionable
                feedback on features and projects in development.
              </p>
            </div>
          </div>
        </div>
        <div className="featureTblContainer">
          <div className="featureTblWrapper">
            <div className="featureTblImageContainer">
              <img src={FeaturesTableIcon} alt="" />
            </div>
            <div className="featureTblTextContainer">
              <div className="featureTblTextWrapper">
                <div className="featuresText1">
                  <h2>
                    100K<span>+</span>
                  </h2>
                  <p>cumulative trading volume to date</p>
                </div>
                <div className="featuresText2">
                  <h2>
                    100K<span>+</span>
                  </h2>
                  <p>cumulative trading volume to date</p>
                </div>
                <div className="featuresText3">
                  <h2>
                    100K<span>+</span>
                  </h2>
                  <p>cumulative trading volume to date</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesComponent;
