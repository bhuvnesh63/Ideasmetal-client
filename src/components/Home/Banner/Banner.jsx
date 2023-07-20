import "./Banner.scss";

import BannerImg from "../../../assets/products/banner-img.png";

import { useNavigate } from "react-router-dom";


const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>IDEAS</h1>
          <p>
            <i className="italic">The Ideas Inc.</i> is an Indian company founded, owned and managed by two seasoned professionals who have an experience of 15 years in the handcrafted metal products trade. They have a deep knowledge and expertise about the various aspects of the trade.
          </p>
          <div className="ctas">
            <div className="banner-cta v1" onClick={() => {
              navigate('/about')}}>Read More</div>
            <div className="banner-cta v2" onClick={() => {
              navigate('/contact')
            }}>Contact Us</div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
