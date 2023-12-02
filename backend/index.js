/**
 * Backend to connect to database (Mongo)
 * getPackages to retrive all the information
 * addPackage to add a new list item
 * 
 * @author Sujal Choudhari
 */

const express = require('express');
const cors = require('cors'); // for policy
const mongoose = require('mongoose');
require('dotenv').config(); // to use .env

// create app
const app = express();
app.use(cors())
app.use(express.json());
const PORT = process.env.PORT || 3001;

// MongoDB Connection
mongoose.connect(
    process.env.MONGO_URI, // from .env
    { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on('error', (error) => console.error('MongoDB connection error:', error));
db.once('open', () => console.log('Connected to MongoDB'));

// Schema
const packageSchema = new mongoose.Schema({
    username: String,
    repoName: String,
});
const Package = mongoose.model('Package', packageSchema);


app.get('/', (req, res) => {
    return res.send("All Systems Functional")
})

// Add end point
app.post('/addPackage', async (req, res) => {
    try {
        const newPackage = new Package(req.body);
        await newPackage.save();
        res.status(201).json({ message: 'Package added successfully' });
    } catch (error) {
        console.error('Error adding package:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// get End Point
app.get('/getPackages', async (req, res) => {
    try {
        const packages = await Package.find().limit(50); // send first 50 packages
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
