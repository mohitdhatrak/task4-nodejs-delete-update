const express = require('express');
const axios = require('axios');
const { connectToMongoDB } = require("./db/db.connect.js");
const { Character } = require("./models/character.model.js");

const app = express();

connectToMongoDB();

app.post("/", async (req, res) => {
  const apiURL = "https://breakingbadapi.com/api/characters";

  try {
    const response = await axios.get(apiURL);
    const favCharData =
      response.data.find(obj => obj.name === "Henry Schrader");
    const favCharacter = new Character(favCharData);
    const data = await favCharacter.save();
    res.json(data);
  }
  catch (error) {
    res.json({
      message: "Some error occurred",
      error,
    });
  }
})

app.get("/", async (req, res) => {
  try {
    const favChar = await Character.find({});
    res.json({ favChar });
  } catch (error) {
    res.json({
      message: "Could not get the character data",
      error,
    });
  }
});

app.listen(3000);