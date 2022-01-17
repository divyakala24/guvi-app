const express = require("express");
const router = express.Router();
const postService = require("../services/posts.service");

// GET, POST, PUT, DELETE


//READ

//router.get("/search", (req, res) => {

  //req.query => query parameters

 // res.send(req.query);
// res.end(JSON.stringify(posts));
//});

//REA
router.get("/", async (req, res) => {
  const petshop = await postService.getPosts();

   res.send(petshop);
  });

//CREATE 

router.post("/", async (req, res) => {

  //req.body=> body data thats coming from client
  const post = await postService.createPosts(req.body);
    res.send(post);
});

//UPDATE
router.put("/:id", async (req, res) => {

  const post = await postService.updatePosts(req.params.id, req.body); 

  // req.params => URL Parameters
  //console.log(req.params);
  res.send(post);

});

//DELETE
router.delete("/:id", async (req, res) => {
  const post = await postService.deletePosts(req.params.id); 
  res.send(post);
  

});

module.exports = router;