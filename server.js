const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});
app.get("/test", (req, res) => {
  res.send("Test");
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log("server is runnig on port ", PORT);
});
