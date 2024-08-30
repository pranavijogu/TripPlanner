import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './DestinationPage.css';

const DestinationPage = () => {
  const { destinationName } = useParams(); // Get the destination name from the URL

  // Example data; you can fetch this from an API or database
  const destinations = {
    Delhi: {
      name: 'Delhi',
      description: "Explore the wonders of Delhi, its heritage, the art and craft, the diverse cuisine and culture. A symbol of the country's rich past and thriving present, Delhi is a city where ancient and modern blend seamlessly together. It is a place that not only touches your pulse but even fastens it to a frenetic speed. Home to millions of dreams, the city takes on unprecedented responsibilities o realizing dreams bringing people closer and inspiring their thoughts.",
      popularPlaces: [
        {
          name: 'Red Fort',
          image: 'https://cdn.britannica.com/20/189820-050-D650A54D/Red-Fort-Old-Delhi-India.jpg',
          info: 'The Red Fort or Lal Qila is a historic fort in Delhi, India, that historically served as the main residence of the Mughal emperors. Emperor Shah Jahan commissioned construction of the Red Fort on 12 May 1639, when he decided to shift his capital from Agra to Delhi.',
          reviews: 4.5,
          entryPrice: 'Free',
        },
        {
          name: 'Qutub Minar',
          image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201704/647_042717101905.jpg',
          info: "The Qutb Minar, also spelled Qutub Minar and Qutab Minar, is a minaret and 'victory tower' that forms part of the Qutb complex, which lies at the site of Delhi's oldest fortified city, Lal Kot, founded by the Tomar Rajputs. It consists of 399 steps. It is a UNESCO World Heritage Site in the Mehrauli area of South Delhi, India. ",
          reviews: 4.5,
          entryPrice: 'INR 30 (Indian Nationals), INR 500 (Foreign Nationals)',

        },
        {
          name: 'India Gate',
          image: 'https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/27/5c47137b8b32bdc3702a6c0b4b2359e9_1000x1000.jpg',
          info: "The India Gate (formerly known as All India War Memorial) is a war memorial located near the Kartavya path on the eastern edge of the 'ceremonial axis' of New Delhi, formerly called Rajpath in New Delhi.",
          reviews: 4.7,
          entryPrice: 'Free',
        },
        {
          name: 'Lotus Temple',
          image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh18TK5A-X1GdHUB766VY3iJM0my8T8WNp6V0OZv6ATtDiUeAZq4P4FLHTFfTb1q0zd3KP9XAqE9v6P2laNb1hAY3pXJwcJ1xZFAhXAsUkX74mUp7F9LA5Aq4L6fYWgPZwTGF8Bn2Jhz1fS/w1200-h630-p-k-no-nu/lotus+temple.jpg',
          info: "The Lotus Temple, located in New Delhi, India, is a Baháʼí House of Worship that was dedicated in December 1986. Notable for its lotus-like shape, it has become a prominent attraction in the city. Like all Bahá’í Houses of Worship, the Lotus Temple is open to all, regardless of religion or any other qualification..",
          reviews: 4.9,
          entryPrice: 'Free',
        },
      ],
    },
    Goa: {
      name: 'Goa',
      description: 'The magical land of Goa is a land of celebrations and festivities. Snuggled in the Konkan Coast Belt, It has a long coastline of approx 100 kilometers. Goa is primarily known for its beautiful beaches which are engrossed with oscillating palm trees and an astonishing nightlife.',
      image: 'https://assets.cntraveller.in/photos/65169715f1f1534fc4e0f24d/4:3/w_1640,h_1230,c_limit/W%20Goa.jpg',
      popularPlaces: [
        {
          name: 'Baga Beach',
          image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/72/06.jpg',
          info: 'Baga Beach is a popular beach and tourist destination in North Goa. Baga is located at the north end of the contiguous beach stretch that starts from Sinquerim, Candolim, leads to Calangute, and then to Baga.',
          reviews: 4.3,
          entryPrice: 'Free',
        },
        {
          name: 'Basilica of Bom Jesus',
          image: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Basilica_of_bom_jesus_-_Front_View.jpg',
          info: "The Basilica of Bom Jesus is a Catholic basilica located in Goa, in the Konkan region of India. The iconic church is a pilgrimage centre and recognised by UNESCO as a World Heritage Site.",
          reviews: 4.6,
          entryPrice: 'INR 10 (Indian Nationals), INR 100 (Foreign Nationals)',
        },
        {
          name: 'Aguada Fort',
          image: 'https://www.fabhotels.com/blog/wp-content/uploads/2019/06/Aguada-Fort_600.jpg',
          info: "Fort Aguada is a well-preserved seventeenth-century Portuguese fort, along with a lighthouse, standing in Goa, India, on Sinquerim Beach, overlooking the Arabian Sea. ",
          reviews: 4.4,
          entryPrice: 'INR 25 (Indian Nationals), INR 300 (Foreign Nationals)',
        },
        {
          name: 'Dudhsagar Falls',
          image: 'https://nammatrip.in/wp-content/uploads/2022/08/dudhsagar-falls-banner.webp',
          info: "Dudhsagar Falls ('Sea of Milk') is a four-tiered waterfall on the Mandovi River in the Indian state of Goa. It is 60 km from Panaji by road and is located on the Belgaum–Vasco Da Gama rail route about 46 km east of Madgaon and 80 km south of Belgaum. ",
          reviews: 4.8,
          entryPrice: 'INR 100 (Indian Nationals), INR 300 (Foreign Nationals)',
        },
      ],
    },

    Kerala: {
      name: 'Kerala',
      description: 'Kerala, located in the southwestern part of India, is known for its palm-lined beaches and backwaters. The state offers a unique blend of serene landscapes and rich cultural heritage. It is also renowned for its traditional Ayurvedic treatments. Kerala\'s vibrant festivals and delicious cuisine make it a popular tourist destination.',
      popularPlaces: [
        {
          name: 'Alleppey Backwaters',
          image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/cc/95/14/alleppey-backwater-tour.jpg?w=1200&h=900&s=1',
          info: 'Known as the "Venice of the East," Alleppey is famous for its picturesque backwaters. The network of tranquil canals, lagoons, and lakes offers an idyllic setting for houseboat cruises. Visitors can explore lush paddy fields, quaint villages, and local wildlife.',
          reviews: 4.7,
          entryPrice: 'INR 500 (Houseboat Cruise)',
        },
        {
          name: 'Munnar',
          image: 'https://www.abhibus.com/blog/wp-content/uploads/2023/05/Top-10-Places-to-Visit-in-Munnar-You-Must-Visit-in-2023-1024x604.jpg',
          info: 'Munnar is a stunning hill station known for its rolling hills covered with tea plantations. The region\'s cool climate and lush greenery make it a popular retreat. Key attractions include the Eravikulam National Park, home to the endangered Nilgiri Tahr.',
          reviews: 4.6,
          entryPrice: 'Free (Entry to most attractions)',
        },
        {
          name: 'Kumarakom',
          image: 'https://img.onmanorama.com/content/dam/mm/en/travel/travel-news/images/2019/7/7/kumarakom.jpg',
          info: 'Situated on the banks of Vembanad Lake, Kumarakom is renowned for its backwater tourism. The Kumarakom Bird Sanctuary is a haven for bird watchers, with numerous migratory species. Houseboat cruises provide a serene experience, drifting through coconut groves and rice paddies.',
          reviews: 4.8,
          entryPrice: 'INR 200 (Bird Sanctuary Entry)',
        },
        {
          name: 'Kochi',
          image: 'https://irisholidays.com/keralatourism/wp-content/uploads/2013/07/kochi-image.jpg',
          info: 'Kochi, also known as Cochin, is a vibrant city with a rich history influenced by Dutch, Portuguese, and British colonialism. Fort Kochi is famous for its Chinese fishing nets and colonial architecture. The Jewish Synagogue and Mattancherry Palace are major historical attractions.',
          reviews: 4.5,
          entryPrice: 'INR 50 (Mattancherry Palace Entry)',
        },
      ],
    },

    Hyderabad: {
      name: 'Hyderabad',
      description: "Hyderabad, the 'City of Pearls,' is a historic city famous for its rich cultural heritage and modern amenities. This bustling metropolis is known for its grand palaces, ancient forts, and bustling bazaars. ",
      popularPlaces: [
        {
          name: 'Charminar',
          image: 'https://www.fabhotels.com/blog/wp-content/uploads/2019/05/Charminar_600.jpg',
          info: 'The Charminar is a historic monument and mosque located in the heart of Hyderabad. Built in 1591 by Muhammad Quli Qutb Shah, it is an iconic symbol of the city. The structure is renowned for its stunning architecture and intricate carvings.',
          reviews: 4.7,
          entryPrice: 'INR 20 (Indian Nationals), INR 250 (Foreign Nationals)',
        },
        {
          name: 'Golconda Fort',
          image: 'https://apnayatra.com/wp-content/uploads/2024/02/Golconda-Fort-Hyderabad.jpg',
          info: 'Golconda Fort is a historic fortress located in the western part of Hyderabad. It was the capital of the medieval Golconda Sultanate and is known for its grandeur and architectural brilliance. ',
          reviews: 4.8,
          entryPrice: 'INR 15 (Indian Nationals), INR 200 (Foreign Nationals)',
        },
        {
          name: 'Hussain Sagar Lake',
          image: 'https://www.holidify.com/images/cmsuploads/compressed/1280px-Hussain_Sagar_lake2C_Hyderabad_20230309153045.jpg',
          info: 'Hussain Sagar Lake is a picturesque artificial lake located in the heart of Hyderabad. Built by Ibrahim Quli Qutb Shah in 1563, the lake is a major tourist attraction and a hub for water sports. The lake features a large statue of Buddha in the center, known as the Buddha Statue of Hyderabad. ',
          reviews: 4.6,
          entryPrice: 'INR 50 (Boat Ride)',
        },
        {
          name: 'Ramoji Film City',
          image: 'https://hyderabadtourpackage.in/images/places-to-visit/ramoji-film-city-hyderabad-entryfee-timings-tour-package-header.jpg',
          info: 'Ramoji Film City is one of the largest film studio complexes in the world, located on the outskirts of Hyderabad. It is a popular tourist destination, offering guided tours and various entertainment options.',
          reviews: 4.9,
          entryPrice: 'INR 1150 (General Entry)',
        },
      ],
    },
    Ladakh: {
      name: 'Ladakh',
      description: "Ladakh, known as the 'Land of High Passes,' is a high-altitude desert paradise located in the northernmost region of India. This stunning destination is renowned for its breathtaking landscapes, rugged mountains, and serene Buddhist monasteries. ",
      popularPlaces: [
        {
          name: 'Pangong Lake',
          image: 'https://static.toiimg.com/photo/105293415.cms',
          info: 'Pangong Lake, also known as Pangong Tso, is a mesmerizing high-altitude lake situated in the Himalayas. The lake is famous for its changing colors, from azure blue to green and even red, depending on the time of day and weather conditions.',
          reviews: 4.9,
          entryPrice: 'INR 20 (Inner Line Permit)',
        },
        {
          name: 'Leh Palace',
          image: 'https://www.culturalindia.net/iliimages/leh-palace-4.jpg',
          info: 'Leh Palace is a historic palace located in the town of Leh, Ladakh. Built in the 17th century by King Sengge Namgyal, the palace is a fine example of medieval Tibetan architecture.',
          reviews: 4.7,
          entryPrice: 'INR 15 (Indian Nationals), INR 100 (Foreign Nationals)',
        },
        {
          name: 'Nubra Valley',
          image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/b9/e6/1c/nubra-valley.jpg?w=1200&h=-1&s=1',
          info: 'Nubra Valley is a picturesque valley located in the northern part of Ladakh, known for its stunning landscapes and unique culture. The valley is famous for its sand dunes, Bactrian camels, and scenic beauty. Visitors can enjoy camel safaris, trekking, and exploring the local monasteries.',
          reviews: 4.8,
          entryPrice: 'INR 20 (Inner Line Permit)',
        },
        {
          name: 'Thiksey Monastery',
          image: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Thikse_Monastery_.jpg',
          info: 'Thiksey Monastery is a stunning Tibetan Buddhist monastery located in Ladakh, known for its architectural beauty and spiritual significance. The monastery is situated on a hilltop, offering panoramic views of the Indus Valley.',
          reviews: 4.9,
          entryPrice: 'Free',
        },
      ],
    },

    Puducherry: {
      name: 'Puducherry',
      description: "Puducherry, also known as Pondicherry, is a charming coastal town in southern India known for its French colonial architecture and serene beaches. This tranquil destination offers a unique blend of Indian and French cultures, making it a popular spot for tourists seeking a peaceful retreat. .",
      popularPlaces: [
        {
          name: 'Auroville',
          image: 'https://files.auroville.org/auroville-org/system/image_attachments/images/000/014/537/original/Matrimandir_25-7-2020_7028.jpg?1600949312',
          info: 'Auroville is an experimental township near Puducherry, founded in 1968 by Mirra Alfassa and designed by architect Roger Anger. The township is dedicated to human unity and sustainable living. ',
          reviews: 4.8,
          entryPrice: 'Free (Entry), INR 150 (Matrimandir Booking)',
        },
        {
          name: 'Promenade Beach',
          image: 'https://i0.wp.com/pondicherryin.com/wp-content/uploads/2021/01/Rock-Beach2-1.jpg?fit=1068%2C713&ssl=1',
          info: 'Promenade Beach, also known as Rock Beach, is a popular beach in Puducherry, stretching along the Bay of Bengal. The beach is known for its scenic beauty, clean surroundings, and vibrant atmosphere. ',
          reviews: 4.7,
          entryPrice: 'Free',
        },
        {
          name: 'Sri Aurobindo Ashram',
          image: 'https://pondicherrytourism.co.in/images/places-to-visit/header/sri-aurobindo-ashram-puducherry-tourism-entry-fee-timings-holidays-reviews-header.jpg',
          info: 'Sri Aurobindo Ashram is a spiritual community founded by Sri Aurobindo and Mirra Alfassa, also known as The Mother, in 1926. The ashram is a center for spiritual practice and community living, attracting visitors from around the world. ',
          reviews: 4.9,
          entryPrice: 'Free',
        },
        {
          name: 'Paradise Beach',
          image: 'https://www.luxurytrailsofindia.com/wp-content/uploads/2016/11/Paradise-Beach-Pondicherry-india.jpg',
          info: 'Paradise Beach, also known as Plage Paradiso, is a beautiful and secluded beach located near Puducherry. The beach is accessible by boat and is known for its pristine sands, clear waters, and tranquil surroundings. Visitors can enjoy swimming, sunbathing, and beach volleyball. ',
          reviews: 4.8,
          entryPrice: 'INR 150 (Boat Ride)',
        },
      ],
    },
    
  };

  const destination = destinations[destinationName];

  if (!destination) {
    return <div>Destination not found</div>;
  }

  return (
    <div className="destinationContainer">
      <div className="destinationHeader">
        <h1>{destination.name}</h1>
      </div>
      <p className="destinationDescription">{destination.description}</p>
      <div className="popularPlaces">
        <h2>Popular places in {destination.name}</h2>
        {destination.popularPlaces.map((place, index) => (
          <div key={index} className="popularPlace">
            <img src={place.image} alt={place.name} />
            <div className="popularPlaceInfo">
              <h3>{index + 1}. {place.name}</h3>
              <p>{place.info}</p>
              <div className="reviews">
                <span className="reviewsLogo">★</span>
                <span className="reviewsNumber">{place.reviews}</span>
              </div>
              <p><strong>Entry Price:</strong> {place.entryPrice}</p>
              
            </div>
            
          </div>
        ))}
        <Link to={`/citydetails/${encodeURIComponent(destination.name)}`} className="showMoreButton">
          Show More
        </Link>
      </div>
    </div>
  );
};


export default DestinationPage;
