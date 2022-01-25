const postsCtrler = require('../controllers/PostsController');

const { Router } = require("express");

const router = Router();

router.get('/:postID', postsCtrler.getItem);
router.get('/', postsCtrler.getAll);
router.post('/create',postsCtrler.createNewPost);
<<<<<<< HEAD
router.delete('/delete', postsCtrler.deletePost);
=======
router.delete('/:postID/delete', postsCtrler.deleteOnePost);
router.post('/:postID/add-tag', postsCtrler.addPostTag);
router.get('/:postID/tags', postsCtrler.getTagsPost);
>>>>>>> 124a2070b1f6adc680b751c300efa63bd6fc78a9

module.exports = router;