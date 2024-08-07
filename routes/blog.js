const express = require('express');
const router = express.Router();
const blogPosts = require('../data/blogPosts');

router.get('/', (req, res) => {
    res.render('blog', { title: 'Blog', posts: blogPosts });
});

router.get('/:id', (req, res) => {
    const post = blogPosts.find(post => post.id === req.params.id);
    if (post) {
        res.render('templates/blogPost', { title: post.title, post });
    } else {
        res.status(404).send('Blog post not found');
    }
});

module.exports = router;
