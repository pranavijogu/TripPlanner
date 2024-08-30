import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PopularCities.css'; // Assuming you create a new CSS file for this section

const PopularCities = () => {
  const navigate = useNavigate();

  const handleCardClick = (destination) => {
    // Navigate to CityDetail with the specified destination
    navigate(`/citydetails/${destination}`);
  };
  return (
    <div className="popular-cities">
      <h2 className="popularCitiesTitle">Discover Popular Cities</h2>
      <div className="popularCitiesContainer">
        <div className="gridContainer">
          <div className="featuredItem" onClick={() => handleCardClick('Mumbai')}>
            <img
              src="https://i.natgeofe.com/n/41769731-51c3-445d-85c7-d9668ecf3ba0/SleepMumbai3_4x3.jpg"
              alt="Mumbai"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Mumbai</h1>
              <h2>Mumbai is India's bustling financial and entertainment hub, famous for its iconic landmarks and vibrant culture.</h2>
            </div>
          </div>

          <div className="featuredItem" onClick={() => handleCardClick('Himachal Pradesh')}>
            <img
              src="https://lp-cms-production.imgix.net/2019-06/GettyImages-149353949_high.jpg"
              alt="Himachal Pradesh"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Himachal Pradesh</h1>
              <h2>Himachal Pradesh, nestled in the Himalayas, is renowned for its breathtaking landscapes, hill stations, and adventure tourism.</h2>
            </div>
          </div>

          <div className="featuredItem" onClick={() => handleCardClick('Uttarakhand')}>
            <img
              src="https://static.toiimg.com/photo/msid-89326554,width-96,height-65.cms"
              alt="Uttarakhand"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Uttarakhand</h1>
              <h2>Uttarakhand, known as the 'Land of the Gods,' is renowned for its stunning Himalayan landscapes and pilgrimage sites.</h2>
            </div>
          </div>

          <div className="featuredItem" onClick={() => handleCardClick('Andaman')}>
            <img
              src="https://www.scubadiving-phuket.com/wp-content/uploads/2017/04/Scuba-Diving-Phuket-Andaman-Sea-Islands-Thailand.jpg"
              alt="Andaman"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Andaman</h1>
              <h2>Group of islands known for pristine beaches, turquoise waters, and rich marine life.</h2>
            </div>
          </div>

          <div className="featuredItem" onClick={() => handleCardClick('Kolkata')}>
            <img
              src="https://static.toiimg.com/thumb/width-600,height-400,msid-58475411.cms"
              alt="Kolkata"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Kolkata</h1>
              <h2>Kolkata, known as the "City of Joy," is celebrated for its cultural richness, colonial architecture, and vibrant festivities.</h2>
            </div>
          </div>

          <div className="featuredItem" onClick={() => handleCardClick('Leh')}>
            <img
              src="https://www.thegranddragonladakh.com/blog/admin/assets/img/post/image_2023-08-22-05-49-39_64e44c731bc7e.jpg"
              alt="Leh"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Leh</h1>
              <h2>Leh in Ladakh offers breathtaking landscapes, ancient monasteries, and the famous Pangong Lake, attracting nature lovers and culture seekers from around the globe</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCities;
