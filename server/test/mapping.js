const fs = require('fs');
const mongoose = require('mongoose');
const {Client}= require("../features/client/models/client")
const uri = 'mongodb+srv://codexTech:1234567890@saifistable.ebpc2l9.mongodb.net/saifiStable'; // Replace with your MongoDB connection string

// Define the schema for the data
const ClientSchema = mongoose.Schema({
    username: {
        type : String,
        required:true,
    },
    email: {
        type : String,
        required:true,
    },
    phone:{
        type : String,
        required:true,
    },
    age:{
        type : Number,
        required:true,
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female'], // Define your enum values here
      },
    membershipStatus : {
        type: String,
        enum: ['active', 'inactive'], // Define your enum values here
        required: false,
        default : "inactive"
    },
    membershipType : {
        type: String,
        enum: ['family', 'individual'], // Define your enum values here
        required: false,
        default : "individual"
    },
    Membership:{
        type:mongoose.Types.ObjectId,
        ref:"InvMembership",
        required:false
    },
    courses : {
        type : [String],
        required : false,
        default : []
    },
    avatar : {
        type : String || null,
        required : false,
        default : null
    },
    activity :{
        type : Number,
        required: false,
        default : 1
    },
})


// Create the model

  async function importData() {
  try {
    // Read the file
    const data = await fs.promises.readFile('./data.json', 'utf8');
    const dataArray = JSON.parse(data);

    // Connect to MongoDB
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');

    // Save the data to MongoDB
    await Client.insertMany(dataArray);
    console.log('Data imported successfully');

    // Close the connection
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error importing data:', error);
  }
}

/importData();


// const express = require("express")
// const App = express()
// const uri = 'mongodb://localhost:27017'; // Replace with your MongoDB connection string
// const fils =require("./data")
// const mongoose = require('mongoose');
// // Connect to MongoDB
// mongoose.connect(uri)
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
//   });






  



