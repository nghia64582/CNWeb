const postsCtrler = require('../controllers/PostsController');

const { Router } = require("express");

const router = Router();

router.get('/:postID', postsCtrler.getItem);
router.get('/', postsCtrler.getAll);
router.post('/create',postsCtrler.createNewPost);
router.delete('/:postID/delete', postsCtrler.deleteOnePost);

module.exports = router;