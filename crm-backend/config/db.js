const dns = require('node:dns/promises');

// Force Node to use Google and Cloudflare DNS
dns.setServers(['8.8.8.8', '1.1.1.1']);

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn=await mongoose.connect(process.env.MONGO_URI,{
        family:4
    }

    );
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};
module.exports = connectDB;
