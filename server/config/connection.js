const mongoose = require("mongoose");

// Define the connection URI for MongoDB
const connection = mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/googlebooks",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Export the connection
module.exports = connection;
