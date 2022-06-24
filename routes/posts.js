const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

/**
 * Routing paths
 **/

router.get("/", (req, res) => {
  res.send("We are on posts");
});

router.get("/second", (req, res) => {
  res.send("We are on posts second");
});

router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (error) {
    res.json({ message: error });
  }

  /* SAME AS WHAT IS BELOW
      post
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
    */
});
module.exports = router;
