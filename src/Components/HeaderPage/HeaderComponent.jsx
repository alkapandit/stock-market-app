import "./HeaderComponent.css";
function HeaderComponent() {
  return (
    <div className="headerContainer">
      <div className="headerWrapper">
        <div className="hseaderLogoContainer">Stock P Logo</div>
        <div className="hseaderMenuContainer">
          <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Experties</li>
            <li>Blogs</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="hseaderLoginContainer">
          <div className="hseaderLoginWrapper">
            <div className="hseaderReferEarnBtn">
              <p>Refer & Earn</p>
            </div>
            <div className="hseaderLoginBtn">Log In</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
