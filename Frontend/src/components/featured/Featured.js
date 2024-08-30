import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Featured.css';

const Featured = () => {
  const navigate = useNavigate();

  const handleCardClick = (destination) => {
    navigate(`/destination/${destination}`);
  };

  return (
    <div className="featured">
      <h2 className="featuredTitle">Discover Amazing Destinations</h2>
      <div className="featuredContainer">
        <div className="gridContainer">
          <div className="featuredItem" onClick={() => handleCardClick('Delhi')}>
            <img
              src="https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg"
              alt="Delhi"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Delhi</h1>
              <h2>India's bustling capital, blending historic monuments like the Red Fort with modern cosmopolitan life.</h2>
            </div>
          </div>

          <div className="featuredItem" onClick={() => handleCardClick('Goa')}>
            <img
              src="https://assets.cntraveller.in/photos/65169715f1f1534fc4e0f24d/4:3/w_1640,h_1230,c_limit/W%20Goa.jpg"
              alt="Goa"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Goa</h1>
              <h2>Famous for its sun-kissed beaches, lively nightlife, and Portuguese heritage.</h2>
            </div>
          </div>

          <div className="featuredItem" onClick={() => handleCardClick('Kerala')}>
            <img
              src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2VyYWxhfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              alt="Kerala"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Kerala</h1>
              <h2>"God's Own Country," with tranquil backwaters, lush greenery, and Ayurvedic treatments.</h2>
            </div>
          </div>

          <div className="featuredItem" onClick={() => handleCardClick('Hyderabad')}>
            <img
              src="https://www.mistay.in/travel-blog/content/images/2023/03/Hyderabad.jpg"
              alt="Hyderabad"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Hyderabad</h1>
              <h2>Historic city famous for its rich culinary heritage, iconic Charminar, and bustling bazaars.</h2>
            </div>
          </div>

          <div className="featuredItem" onClick={() => handleCardClick('Ladakh')}>
            <img
              src="https://static.toiimg.com/photo/92360678.cms"
              alt="Ladakh"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Ladakh</h1>
              <h2>High-altitude desert paradise with stunning landscapes and Buddhist monasteries.</h2>
            </div>
          </div>

          <div className="featuredItem" onClick={() => handleCardClick('Puducherry')}>
            <img
              src="https://travelmax.in/wp-content/uploads/2023/09/Feature_Image_French_Colony.jpg"
              alt="Puducherry"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Puducherry</h1>
              <h2>Tranquil coastal town known for its French colonial architecture and serene beaches.</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
