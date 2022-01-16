const postsCtrler = require('../controllers/PostsController');

const { Router } = require("express");

const router = Router();

router.get('/:postID', postsCtrler.getItem);
router.get('/', postsCtrler.getAll);
router.post('/:slug',postsCtrler.createNewPost);

module.exports = router;