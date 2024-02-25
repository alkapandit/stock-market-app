import "./FooterComponent.css";
import FooterFacebookIcon from '../../assets/FooterFacebookIcon.svg'
import FooterInstaIcon from '../../assets/FooterInstaIcon.svg'
import FooterTwitterIcon from '../../assets/FooterTwitterIcon.svg'
import FooterLinkedinIcon from '../../assets/FooterLinkedinIcon.svg'
function FooterComponent() {
  return (
    <div className="footerContainer">
      <div className="footerWrapper">
        <div className="footerLeftContainer">
          <h5>Stock P Logo</h5>
          <p>
            Our partnerships have delivered great value to our projects and
            we’re happy to share some of their feedback below
          </p>
          <div className="footerIconsContainer">
            <div><img src={FooterFacebookIcon} alt=""/></div>
            <div><img src={FooterLinkedinIcon} alt=""/></div>
            <div><img src={FooterTwitterIcon} alt=""/></div>
            <div><img src={FooterInstaIcon} alt=""/></div>
          </div>
        </div>
        <div className="footerRightContainer">
          <div className="footerProductContainer">
            <h5>Product</h5>
            <p>About Us</p>
            <p>FAQ</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Disclaimer</p>
            <p>Submit Grievance</p>
            <p>Features</p>
          </div>
          <div className="footerCommunityContainer">
            <h5>Community</h5>
            <p>Subscriptions</p>
            <p>Courses</p>
            <p>Webinar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;
