const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://madphoenix1311:Aeiou%40123@fvm.fjhh8n9.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the fruit model
const Fruit = mongoose.model('Fruit', {
  name: String,
  image: String,
  quantity: Number,
  price: Number, // Add the price field
});

// Middleware to parse JSON requests
app.use(express.json());

// Routes

// Add fruit to MongoDB
app.post('/addFruit', async (req, res) => {
  try {
    const newFruit = new Fruit(req.body);
    await newFruit.save();
    res.status(201).json({ message: 'Fruit added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all fruits from MongoDB
app.get('/getFruits', async (req, res) => {
  try {
    const fruits = await Fruit.find();
    res.status(200).json(fruits);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update existing fruit in MongoDB
app.put('/updateFruit/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const updatedFruit = await Fruit.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedFruit);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete fruit from MongoDB
app.delete('/deleteFruit/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await Fruit.findByIdAndDelete(id);
    res.status(200).json({ message: 'Fruit deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
