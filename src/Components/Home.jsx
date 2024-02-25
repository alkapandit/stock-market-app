import HomeComponent from "./HomePage/HomeComponent";
import HeaderComponent from "./HeaderPage/HeaderComponent";
import CompanyComponent from "./CompanyPage/CompanyComponent";
import './Home.css';
import AboutComponent from "./AboutPage/AboutComponent";
import FeaturesComponent from "./FeaturesPage/FeaturesComponent";
import WebinarComponent from "./WebinarPage/WebinarComponent";
import ExpertiesComponent from "./ExpertiesPage/ExpertiesComponent";
import ProductComponent from "./ProductPage/ProductComponent";
import StockMarketComponent from "./StockMarketPage/StockMarketComponent";
import BlogComponent from "./BlogPage/BlogComponent";
import ReferEarnComponent from "./ReferEarnPage/ReferEarnComponent";
import TestimonialsComponent from "./TestimonialsPage/TestimonialsComponent";
import FooterComponent from "./FooterPage/FooterComponent";
function Home() {
  return (
    <div className="home">
      <HeaderComponent />
      <HomeComponent />
      <CompanyComponent />
      <AboutComponent/>
      <FeaturesComponent/>
      <WebinarComponent/>
      <ExpertiesComponent/>
      <ProductComponent/>
      <StockMarketComponent/>
      <BlogComponent/>
      <ReferEarnComponent/>
      <TestimonialsComponent/>
      <FooterComponent/>
    </div>
  );
}

export default Home;
