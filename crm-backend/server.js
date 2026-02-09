const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const mongoose = require('mongoose');

// 1. IMPORT ROUTES
const userRoutes = require('./routes/userRoutes');
const crmRoutes = require('./routes/crmRoutes');
const authRoutes = require("./routes/authRoutes");

// 2. IMPORT USER MODEL (Crucial - Fixes the GET error)
// Ensure this path matches your actual folder structure
const User = require('./models/User'); 

dotenv.config();
connectDB();

const app = express();

// 3. MIDDLEWARE
app.use(cors());
app.use(express.json());

// 4. THE GET ROUTE (Fixed)
// This matches your Angular CrmService call: http://localhost:5000/api/users


// 5. API ROUTES
app.use('/api/users', userRoutes);
app.use('/api/crm', crmRoutes); 
app.use("/api", authRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`CRM Server running on port ${PORT}`));