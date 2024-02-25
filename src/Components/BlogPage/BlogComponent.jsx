import "./BlogComponent.css";
import BlogFifthIcon from "../../assets/BlogFifthIcon.png";
import BlogFirstIcon from "../../assets/BlogFirstIcon.png";
import BlogFourthIcon from "../../assets/BlogFourthIcon.png";
import BlogSecondIcon from "../../assets/BlogSecondIcon.png";
import BlogThirdIcon from "../../assets/BlogThirdIcon.png";
function BlogComponent() {
  return (
    <div className="blogContainer">
      <div className="blogWrapper">
        <div className="blogHeadingContainer">
          <h4>Our Blogs</h4>
          <p>
            With Cobalt, managing your business finances is effortless,
            empowering, and anything but boring. Our intuitive platform brings
            clarity to your cash flow, simplifies your financial
            decision-making, and fingertips. Say no to spreadsheets and tools
            designed in the 80s.
          </p>
        </div>
        <div className="blogCardContainer">
          <div className="blogCardWrapper1">
            <div className="card">
              <img src={BlogFirstIcon} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Lorem Ipsum dolor simple</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </p>
              </div>
            </div>
            <div className="card">
              <img src={BlogSecondIcon} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Lorem Ipsum dolor simple</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </p>
              </div>
            </div>
            <div className="card">
              <img src={BlogThirdIcon} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Lorem Ipsum dolor simple</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </p>
              </div>
            </div>
          </div>
          <div className="blogCardWrapper2">
            <br />
            <div className="card">
              <img src={BlogFourthIcon} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Lorem Ipsum dolor simple</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </p>
              </div>
            </div>
            <div className="card">
              <img src={BlogFifthIcon} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Lorem Ipsum dolor simple</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </p>
              </div>
            </div>
          </div>
          <div className="blogBtnContainer">
            <button>Explore More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogComponent;
