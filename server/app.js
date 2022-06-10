// import http from "http";
// import express from "express";
// import logger from "morgan";
// import cors from "cors";
// // routes
// import indexRouter from "./routes/index.js";
// import userRouter from "./routes/user.js";
// import chatRoomRouter from "./routes/chatRoom.js";
// import deleteRouter from "./routes/delete.js";
// // middlewares
// import { decode } from "./middlewares/jwt.js";

// const app = express();

// /** Get port from environment and store in Express. */
// const port = process.env.PORT || "3000";
// app.set("port", port);

// app.use(logger("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.use("/", indexRouter);
// app.use("/users", userRouter);
// app.use("/room", decode, chatRoomRouter);
// app.use("/delete", deleteRouter);

// /** catch 404 and forward to error handler */
// app.use("*", (req, res) => {
//   return res.status(404).json({
//     success: false,
//     message: "API endpoint doesnt exist"
//   });
// });

// /** Create HTTP server. */
// const server = http.createServer(app);
// /** Listen on provided port, on all network interfaces. */
// server.listen(port);
// /** Event listener for HTTP server "listening" event. */
// server.on("listening", () => {
//   console.log(`Listening on port:: http://localhost:${port}/`);
// });

// 'Import' the Express module instead of http
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const board = require("./router/board");
// Initialize the Express application
const app = express();

dotenv.config();

const PORT = process.env.API_PORT || 4040; // we use || to provide a default value

mongoose.connect(process.env.MONGODB);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);
const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} ${Date.now()}`);
  next();
};
app.use(express.json());
app.use(logging);
app.use("/board", board);

const cors = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};
app.use(cors);
app.use(express.json());
app.use(logging);

// Handle the request with HTTP GET method from http://localhost:4040/status
app.get("/status", (request, response) => {
  // Create the headers for response by default 200
  // Create the response body
  // End and return the response
  response.status(418).json({ message: "Service healthy" });
});

app.post("/echo", (request, response) => {
  response.json({ "request.body": request.body });
});

// Tell the Express app to start listening
// Let the humans know I am running and listening on 4040
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
