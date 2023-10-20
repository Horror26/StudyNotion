const express = require("express");
const router = express.Router();

// Import the About page component from "./src/pages/About.jsx"
const AboutPage = require("../src/pages/About.jsx");

// Define a route for the "/about" URL path
router.get("/about", (req, res) => {
  // Render the About page
  res.render("about", { pageContent: AboutPage });
});

module.exports = router;
