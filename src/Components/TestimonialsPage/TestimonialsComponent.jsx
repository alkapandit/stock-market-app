import "./TestimonialsComponent.css";
import TestimonialLeftArrowIcon from "../../assets/TestimonialLeftArrowIcon.svg";
import TestimonialRightArrowIcon from "../../assets/TestimonialRightArrowIcon.svg";
function TestimonialsComponent() {
  return (
    <div className="testimonialContainer">
      <div className="testimonialWrapper">
        <div className="testimonialHeadingContainer">
          <h4>Testimonials</h4>
          <p>
            Our partnerships have delivered great value to our projects and were
            happy to share some of their feedback below
          </p>
        </div>
        <div className="testimonialTextContainer">
          <div className="testimonialTextWrapper">
            <img src={TestimonialLeftArrowIcon} alt="" />
            <p>
              Since 2019, Gravity team has been an astounding market maker for
              Bitkub. They have proven themselves to be one of the most
              consistent, committed and driven market makers on our exchange.
              Gravity Team has contributed high-quality volume and has proven to
              be very reliable and trustworthy partner. We strongly advocate
              Gravity Team as they have been an indispensable part of our
              market-making team.
            </p>
            <img src={TestimonialRightArrowIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsComponent;
