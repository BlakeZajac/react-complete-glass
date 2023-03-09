// import axios from "axios";
// import express, { json } from "express";

// const app = express();

// app.use(json());

// const adminApiKey = process.env.REACT_APP_CM_ADMIN_KEY;

// app.post("/proxy", async (req, res) => {
//   const { url, headers, body } = req.body;

//   try {
//     const response = await axios({
//       url: url, // Use the requested URL
//       method: req.method,
//       headers: headers,
//       data: body,
//       auth: {
//         username: adminApiKey,
//         password: "",
//       },
//     });

//     res.json({
//       headers: response.headers,
//       body: response.data,
//     });
//   } catch (error) {
//     console.error(error);
//     res.sendStatus(500);
//   }
// });

// app.listen(3000, () => {
//   console.log("Server started on port 3000");
// });
