var express = require("express");
var router = express.Router();

var jsonParser = router.use(express.json());
var urlencoded = router.use(express.urlencoded({ extended: true }));

const messages = [
  {
    text: "Hi there!",
    user: "Tman",
    added:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
  {
    text: "Hello Programmer!",
    user: "Nazy",
    added:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  // res.render("index", { title: "Express" });
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", (req, res, next) => {
  res.render("form", {});
});

router.post("/new", (req, res, next) => {
  let newMessages = JSON.parse(JSON.stringify(req.body));
  // console.log(req.body.message);
  messages.push({
    text: newMessages.message,
    user: newMessages.author,
    added:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  });
  res.redirect("/");
});

module.exports = router;
