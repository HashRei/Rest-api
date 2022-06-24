const express = require("express");

const router = express.Router();

/**
 * Routing paths
**/

router.get("/", (req, res) => {
  res.send("We are on posts");
});

router.get("/second", (req, res) => {
    res.send("We are on posts second");
  });

module.exports = router;
