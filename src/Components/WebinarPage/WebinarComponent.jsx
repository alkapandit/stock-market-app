import "./WebinarComponent.css";
import WebinarFirstCardIcon from "../../assets/WebinarFirstCardIcon.svg";
import WebinarSecondCardIcon from "../../assets/WebinarSecondCardIcon.svg";
import WebinarThirdCardIcon from "../../assets/WebinarThirdCardIcon.svg";
import WebinarImageIcon from "../../assets/WebinarImageIcon.png";
function WebinarComponent() {
  return (
    <div className="webinarContainer">
      <div className="webinarWrapper">
        <div className="webinarHeadingContainer">
          <h4>Why Choose Us</h4>
          <p>
            Turn Pro to harness the power of AI, make Raycast your own with
            custom themes, <br/>keep your Macs in sync and more.
          </p>
        </div>
        <div className="webinarCardContainer">
          <div className="webinarCardWrapper">
            <div className="card">
              <img
                src={WebinarFirstCardIcon}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Lorem Ipsum Dolor</h5>
                <p className="card-text">
                  Cards support a wide variety of content, including images,
                  text, list groups, links, and more. Below are examples of
                  what’s supported.
                </p>
              </div>
            </div>
            <div className="card">
              <img
                src={WebinarSecondCardIcon}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Lorem Ipsum Dolor</h5>
                <p className="card-text">
                  Cards support a wide variety of content, including images,
                  text, list groups, links, and more. Below are examples of
                  what’s supported.
                </p>
              </div>
            </div>
            <div className="card">
              <img
                src={WebinarThirdCardIcon}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Lorem Ipsum Dolor</h5>
                <p className="card-text">
                  Cards support a wide variety of content, including images,
                  text, list groups, links, and more. Below are examples of
                  what’s supported.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="webinarImgContainer">
            <img src={WebinarImageIcon} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default WebinarComponent;
