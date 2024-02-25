import "./StockMarketComponent.css";
import StockMarketIcon from '../../assets/StockMarketIcon.png'
function StockMarketComponent() {
  return (
    <div className="stockMarketContainer">
      <div className="stockMarketWrapper">
        <div className="stockMarketHeadingContainer">
          <h4>
            Our Stock Market <br />
            Experties
          </h4>
          <p>
            Empower your teams to build better processes, for a better
            workplace.
          </p>
          <button>Join Expert Team</button>
        </div>
        <div className="stockMarketImgContainer"><img src={StockMarketIcon} alt=""/></div>
      </div>
    </div>
  );
}

export default StockMarketComponent;
