const express = require("express");
const app = express();
// const connect = require("./db/connect");

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

require("dotenv").config();
require("express-async-errors"); // for throw error
const route = require("./routes/products");

// middleware
app.use(express.json());
app.use("/api/v1/products", route);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const connectDB = async () => {
  // connect database
  // try {
  //   await connect(process.env.MONGO_URI);
  // } catch (error) {
  //   console.log(error);
  // }

  app.listen(port, () => {
    console.log("Server listen on port " + port + "...");
  });
};
connectDB();
