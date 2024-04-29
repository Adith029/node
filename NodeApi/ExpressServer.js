const express = require("express");
require('./Config/db')
const userRoute = require("./Route/Router")

const app = express();

app.use(express.json());

app.use('/user',userRoute)

app.listen(5000, (err) => {
  if (err) {
    process.exit(1);
  }
  console.log("Server Running");
});
