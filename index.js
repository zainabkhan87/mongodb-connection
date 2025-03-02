const express = require('express');
const connectDB = require('./db'); // Import DB connection function
const userroutes=require('./src/routes/userRoutes')
const cors = require('cors'); // Import the CORS package


const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

app.use(cors()); 

// Example Route
app.get('/', (req, res) => {
    res.send('MongoDB connected with Express.js');
});
app.use('/user',userroutes)
app.use('/userid',userroutes)
app.post('/username',userroutes)

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});