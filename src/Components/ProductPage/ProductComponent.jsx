import "./ProductComponent.css";
import ProductStep1 from "../../assets/ProductStep1.svg";
import ProductStep2 from "../../assets/ProductStep2.svg";
import ProductStep3 from "../../assets/ProductStep3.svg";
import ProductStep4 from "../../assets/ProductStep4.svg";
function ProductComponent() {
  return (
    <div className="productContainer">
      <div className="productWrapper">
        <div className="productHeadingContainer">
          <h4>
            How Our Product <br />
            Works
          </h4>
          <p>
            With Cobalt, managing your business finances is effortless,
            empowering, and anything but boring. Our intuitive platform brings
            clarity to your cash flow, simplifies your financial
            decision-making, and fingertips. Say no to spreadsheets and tools
            designed in the 80s.
          </p>
        </div>
        <div className="productBodyContainer">
          <div className="productBodyWrapper">
            <div className="productCard">
              <h5>Step 1</h5>
              <p>
                We start every new client interaction with an in-depth discovery
                call where we get to know each other, discuss your current and
                future objectives, and recommend the best course of action.
              </p>
              <img src={ProductStep1} alt="" />
            </div>
            <div className="productCard">
              <h5>Step 2</h5>
              <p>
                Every end-to-end project of ours begins with a bespoke pre-build
                strategy. From brand ID consultation to in-depth code reviews
                were here to set the stage for success.
              </p>
              <img src={ProductStep2} alt="" />
            </div>
            <div className="productCard">
              <h5>Step 3</h5>
              <p>
                After we have a comprehensive understanding of your brand, well
                be ready to move onto design. Each page or asset will be
                designed, reviewed, and given your stamp of approval.
              </p>
              <img src={ProductStep3} alt="" />
            </div>
            <div className="productCard">
              <h5>Step 4</h5>
              <p>
                Whether weve just finished designing your new site or youre
                handing off finished designs for us to develop in Webflow, were
                here to apply our trusted development process to your project.
              </p>
              <img src={ProductStep4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductComponent;
