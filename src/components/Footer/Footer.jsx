import "./Footer.scss";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { Context} from '../../utils/context'
import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import payment from '../../assets/payments.png'
const Footer = () => {
const { categories } = useContext(Context);
  const navigate = useNavigate();
  // console.log("caterrrr", categories)
  return(
  <footer className="footer">
    <div className="footer-content">
      <div className="col">
        <div className="title">About</div>
        <div className="text">
        <span className='span'><i>The Ideas Inc. </i></span> is an Indian company founded, owned and managed by two seasoned professionals who have an experience of 15 years in the handcrafted metal products trade. They have a deep knowledge and expertise about the various aspects of the trade.
        </div>
      </div>
      <div className="col">
      <div className="title">Contact</div>
      <div className="c-item">
        <FaLocationArrow />
        <div className="text">
        Ekta Vihar Rampur Road Moradabad,
        </div>
      </div>
      <div className="c-item">
        <FaMobileAlt />
        <div className="text">
         Phone: +91 92195 19039
        </div>
      </div>
      <div className="c-item">
        <FaEnvelope />
        <div className="text">
          Email: email@theiinc.com
        </div>
      </div>
      </div>
      {/* <div className="col">
        <div className="title">Categories</div>
        { categories?.data?.map((item) => (
          <span key={item.id} className="text" onClick={() =>navigate(`/category/${item.id}`)}>{item.attributes.title}</span>
          ))}
        </div> */}
      <div className="col">
        <div className="title">Pages</div>
        <span className="text" onClick={() => navigate('/')}>Home</span>
          <span className="text" onClick={() => navigate('/about')}>About</span>
          <span className="text" onClick={() => navigate('/category')}>Categories</span>
          <span className="text" onClick={() => navigate('/items')}>All Products</span>
          <span className="text" onClick={() => navigate('/contact')}>Contact Us</span>
        </div>
    </div>
    <div className="bottom-bar">
      <div className="bottom-bar-content">
        <div className="text">
          IdeasMetal is the first......................
        </div>
        <img src={payment} alt=""  />
      </div>
    </div>
  </footer>
  );
};
export default Footer;
