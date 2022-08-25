const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/databaseConnection");
require("colors");
const morgan = require("morgan");
const path = require("path");

const app = express();

// config dotenv
dotenv.config();

// mongoDB connection
connectDB();

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// Route handlers
app.use("/api/pizzas", require("./routes/pizzaRoute"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/orders", require("./routes/orderRoute"));

// For Production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Hello World from node server");
  });
}

// start server
const port = process.env.PORT;
app.listen(port, () => {
  // console.log(
  //   `Server running on ${process.env.NODE_ENV} mode on port on ${process.env.PORT}`
  //     .bgMagenta.white
  // );
});
