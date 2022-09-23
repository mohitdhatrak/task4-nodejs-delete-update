// const express = require('express');
// const router = express.Router();
// const axios = require('axios').default;

// const app = express();

// app.use(router);

// router.get("/", async (req, res) => {
//   let response;
//   const apiURL = "https://breakingbadapi.com/api/characters";

//   try {
//     response = await axios.get(apiURL);
//     // console.log(response.data);
//   }
//   catch (err) {
//     res.send("Some error has occured, please try again later!");
//   }

//   res.json(response.data);
// });

// app.listen(3000);