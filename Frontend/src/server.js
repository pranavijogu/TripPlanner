const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://nikshithavarkala:R3Y4a3En10GwNRsb@cluster0.nfj7vmg.mongodb.net/places", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    console.log('DB connection successful');
    db = client.connection.db;
    console.log('Connected to database:', db.databaseName); // Log database name
  })
  .catch(err => console.error('Failed to connect to MongoDB', err));

const CitySchema = new mongoose.Schema({
  City: String,
  Ratings: Number,
  Ideal_duration: String,
  Best_time_to_visit: String,
  City_desc: String,
});

const City = mongoose.model("City", CitySchema);

app.get('/api/city/:name', async (req, res) => {
  const cityName = req.params.name;
  console.log('Request received for city:', cityName);

  if (!cityName) {
    res.status(400).send({ message: 'City name is required' });
    return;
  }

  try {
    const collection = db.collection('places');
    console.log('Querying database for city:', cityName);
    collection.find(
      { City: { $regex: cityName, $options: 'i' } },
      { projection: { _id: 0, City: 1, Ratings: 1, Ideal_duration: 1, Best_time_to_visit: 1, City_desc: 1 } }
    )
    
      .maxTimeMS(5000)
      .toArray((err, records) => {
        console.log('Query completed');
        if (err) {
          console.error('Error fetching records:', err);
          res.status(500).send({ message: 'Error fetching records', error: err });
        } else if (records.length === 0) {
          console.log('No records found for city:', cityName);
          res.status(404).send({ message: 'No records found for the specified city' });
        } else {
          console.log('Records found for city:', cityName, records);
          const processedRecords = records.map(record => ({
            ...record,
            Best_time_to_visit: record.Best_time_to_visit || "-"
          }));
          res.status(200).send(processedRecords);
        }
      });
  } catch (error) {
    console.error('Error fetching records:', error);
    res.status(500).send({ message: 'Error fetching records', error });
  }
});

app.listen(3000, () => {
  console.log('Server listening on Port http://localhost:3000');
});
