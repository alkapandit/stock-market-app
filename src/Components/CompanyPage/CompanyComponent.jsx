import "./CompanyComponent.css";
function CompanyComponent() {
  return (
    <div className="companyContainer">
      <h3>Trusted by teams at</h3>
      <div className="companyWrapper">
        <div className="framerContainer">
          <i className="fa-solid fa-cloud-bolt"></i>
          <span>Framer</span>
        </div>
        <div className="atlassianContainer">
          <i className="fa-brands fa-atlassian"></i>
          <span>Atlassian</span>
        </div>
        <div className="shopifyContainer">
          <i className="fa-brands fa-shopify"></i>
          <span>Shopify</span>
        </div>
        <div className="githubContainer">
          <span>Github</span>
        </div>
        <div className="launchDarklyContainer">
          <span>LaunchDarkly</span>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
        <div className="tailscaleContainer">
          <i className="fa-solid fa-braille"></i>
          <span>tailscale</span>
        </div>
      </div>
    </div>
  );
}

export default CompanyComponent;
