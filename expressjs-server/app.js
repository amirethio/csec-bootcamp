const express = require("express");
const bodyParser = require("body-parser");

const home = require("./routes/home.route");
const now = require("./routes/now.route");
const about = require("./routes/about.route");
const app = express();
const contact = require("./routes/contact.route");

app.get("/", (req, res) => {
  res.send("hello");
});
app.use(bodyParser.json());
app.use(home);
app.use(now);
app.use(about);
app.use(contact);


app.get("/:all" , (req,res)=>{
    res.json({
      message: "no route like this ",
    });
})
app.listen(3500, (err) => {
  if (err) throw err;
  console.log("running on port http://localhost:3500");
});
