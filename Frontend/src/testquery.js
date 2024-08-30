const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://nikshithavarkala:R3Y4a3En10GwNRsb@cluster0.nfj7vmg.mongodb.net/places", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    console.log('DB connection successful');
    const db = client.connection.db;

    const collection = db.collection('places');
    const cityName = 'Ooty'; // Change this to a city you know exists in your collection
    console.log('Querying database for city:', cityName);
    
    collection.find({ City: { $regex: cityName, $options: 'i' } }, { projection: { _id: 0, City: 1, Ratings: 1, Ideal_duration: 1, Best_time_to_visit: 1, City_desc: 1 } })
      .maxTimeMS(5000)
      .toArray((err, records) => {
        console.log('Query completed');
        if (err) {
          console.error('Error fetching records:', err);
        } else if (records.length === 0) {
          console.log('No records found for city:', cityName);
        } else {
          console.log('Records found for city:', cityName, records);
        }
        mongoose.connection.close();
      });
  })
  .catch(err => console.error('Failed to connect to MongoDB', err));
