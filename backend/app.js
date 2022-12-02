const express = require("express");
const body_parser=require("body-parser")
const app = express();

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

require("dotenv").config();
require("express-async-errors"); // for throw error
const routeRoute = require("./routes/route");
const routeCollector = require("./routes/collector");
const routeJaniator = require("./routes/janiator");
const routeMcp = require("./routes/mcp");
const routeVehicle=require("./routes/vehicle")
// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use("/api/route", routeRoute);
app.use("/api/collector", routeCollector);
app.use("/api/janiator", routeJaniator);
app.use("/api/mcp", routeMcp);
app.use("/api/vehicle",routeVehicle)

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log("Server listen on port " + port + "...");
  });


  