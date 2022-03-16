/// importing the dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs");
//const {canViewData} = require("./project")
const { User } = require("../models/user");
const { Profile } = require("../models/profile");


mongoose.connect(
  "mongodb+srv://Lingqizhu:Peggy1980122@cluster0.k9dxo.mongodb.net/Jobsite?retryWrites=true&w=majority"
);

// defining the Express app
const app = express();

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan("combined"));

/* app.post("/register", async (req, res) => {
  const newPassword = await bcrypt.hash(req.body.password, 10);
  const user = await User.create({
    email: req.body.email,
    username: req.body.username,
    password: newPassword,
  });
  await user.save();
  res.send({message:"new user registered" });
});

app.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.sendStatus(401);
  }
  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password
  );
  if (isPasswordValid) {
    user.token = uuidv4();
    await user.save();
    res.send({ token: user.token, role: user.role });
  } else {
    return res.sendStatus(404);
  }
});

app.use(async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const user = await User.findOne({ token: authHeader });

  if (user) {
    next();
  } else {
    res.sendStatus(403);
  }
}); */

app.get('/userlist',function(req,res){
  User.find().then((users) => res.send(users))
});

// defining CRUD operations
app.get("/profiles", async (req, res) => {
  res.send(await Profile.find());
});

app.get("/profiles/:id", async (req, res) => {
  res.send(await Profile.findOne({ _id: ObjectId(req.params.id) }));
});

app.get('/location/:location', async(req, res)=>{
  res.send(await Profile.find({location: req.params.location}))
})

app.get('/email/:email', async(req, res)=>{
  res.send(await Profile.find({email: req.params.email}))
})

app.get('/available/:available', async(req, res)=>{
  res.send(await Profile.find({available: req.params.available}))
})


app.post("/", async (req, res) => {
  const newProfile= req.body;
  const profile = new Profile(newProfile);
  await profile.save();
  res.send({ message: "New profile inserted." });
});

app.delete("/delete/:id", async (req, res) => {
  await Profile.deleteOne({ _id: ObjectId(req.params.id) });
  res.send({ message: "Profile removed." });
});

app.put("/update/:id", async (req, res) => {
  await Profile.findOneAndUpdate({ _id: ObjectId(req.params.id) }, req.body);
  res.send({ message: "Profile updated." });
});

/* app.put("/employer/:id", async (req, res) => {
  await Employer.findOneAndUpdate({ _id: ObjectId(req.params.id) }, req.body);
  res.send({ message: "Profile updated." });
}); */

// starting the server
app.listen(3001, () => {
  console.log("listening on port 3001");
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function callback() {
  console.log("Database connected!");
});