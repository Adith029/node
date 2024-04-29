const mangoose = require("mongoose");
mangoose
  .connect(
    "mongodb+srv://adithe84:nandanam@cluster0.vnozg27.mongodb.net/database1?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });
