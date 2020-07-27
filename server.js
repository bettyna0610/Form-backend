const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")


const app = express()

const corsOptions = {
    origin:"http://localhost:4200"
}

app.use(cors(corsOptions));


app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: true }));

/*
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});*/

const db = require("./models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });



const data = require("./controllers/data.controller")

app.post("/api/data",data.create)

   


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});




