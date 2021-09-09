const fs = require("fs");
const path = require("path");
const express = require("express");

const app = express();

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

//Direct express to the public folder. Configure static directory
app.use(express.static(path.join(__dirname, "/public")));

//Read account data
const accountData = fs.readFileSync("/src/json/accounts.json", {
  encoding: "utf8",
});
const accounts = JSON.parse(accountData);

//Read User data
const userData = fs.readFileSync("src/json/users.json", {
  encoding: "utf8",
});
const users = JSON.parse(userData);

//Create the Savings Account Route
app.get("/savings", (req, res) => {
  res.render("account", { account: accounts.savings });
});

//Create the Checking Route
app.get("/checking", (req, res) => {
  res.render("account", { account: accounts.checking });
});

//Create the Credit Route
app.get("/credit", (req, res) => {
  res.render("account", { account: accounts.credit });
});

//Create Profile Route
app.get("/profile", (req, res) => {
  res.render("profile", { user: users[0] });
});

//Create the Index route
app.get("/", (req, res) => {
  res.render("index", { title: "Account Summary", account: accounts });
});

//Create server
app.listen(3000, () => {
  console.log("PS Project Running on port 3000!");
});
