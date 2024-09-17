const express = require('express');
const router = express.Router();


// First post example
let blogPosts = [
  { id: 1, title: 'Welcome to my blog post application!', 
    content: 'Feel free to create or delete new posts', 
    blogDate: "9/16/2024, 2:03:34 PM",
    authorName: "Naima Ontiveros"},
 
];

// Display all blog posts
router.get('/', (req, res) => {
  res.render('index', { blogPosts });
});

// Display form to add a new blog post
router.get('/new', (req, res) => {
  res.render('new');
});

// Create a new blog post
router.post('/new', (req, res) => {
  const { title, content, authorName} = req.body;
  const blogDate = new Date().toLocaleString();
  const newPost = { id: blogPosts.length + 1, title, content, blogDate, authorName};
  blogPosts.push(newPost);
  res.redirect('/');
});

// Display form to edit a blog post
router.get('/edit/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = blogPosts.find(post => post.id === id);
  res.render('edit', { post });
});

// Update a blog post
  router.post('/edit/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content, authorName } = req.body;
  const postIndex = blogPosts.findIndex(post => post.id === id);
  const blogDate = blogPosts[postIndex].blogDate; 
  blogPosts[postIndex] = { id, title, content, authorName, blogDate };  
  res.redirect('/');
});

// Delete a blog post
router.post('/delete/:id', (req, res) => {
  const id = parseInt(req.params.id);
  blogPosts = blogPosts.filter(post => post.id !== id);
  res.redirect('/');
});

module.exports = router;
