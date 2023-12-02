const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors())
const PORT = process.env.PORT || 3001;

// Connect to MongoDB
mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;

db.on('error', (error) => console.error('MongoDB connection error:', error));
db.once('open', () => console.log('Connected to MongoDB'));

// Define a Package schema
const packageSchema = new mongoose.Schema({
    username: String,
    repoName: String,
});

// Create a Package model
const Package = mongoose.model('Package', packageSchema);

// Middleware for handling JSON data
app.use(express.json());

// Endpoint to add a package to the database
app.post('/addPackage', async (req, res) => {
    const { username, repoName } = req.body;
    console.log(req.body)
    try {
        const newPackage = new Package({ username, repoName });
        await newPackage.save();
        res.status(201).json({ message: 'Package added successfully' });
    } catch (error) {
        console.error('Error adding package:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Endpoint to get the list of packages from the database
app.get('/getPackages', async (req, res) => {
    try {
        const packages = await Package.find();
        res.json(packages);
    } catch (error) {
        console.error('Error fetching packages:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
