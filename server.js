const express = require("express");
const mongoose = require("mongoose");
const parser = require("body-parser");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use('/', routes);

//connect to mlab database
const CONNECTION_STRING = process.env.MONGODB_URI || "mongodb://localhost:27017/polis";
mongoose.connect(CONNECTION_STRING, { useNewUrlParser: true });



// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

process.on('SIGINT', () => {process.exit()});