const postsCtrler = require('../controllers/PostsController');
const cmtCtrler = require('../controllers/CommentController');
const ratingCtrler = require('../controllers/RatingController');
const { Router } = require("express");

const router = Router();
router.get('/postsHasTag', postsCtrler.getAllPostsHasTag);
router.get('/:postID', postsCtrler.getItem);
router.get('/', postsCtrler.getAll);

router.post('/create',postsCtrler.createNewPost);
router.delete('/:postID/delete', postsCtrler.deleteOnePost);
router.post('/:postID/add-tag', postsCtrler.addPostTag);
router.get('/:postID/tags', postsCtrler.getTagsPost);
router.post('/:postID/create', cmtCtrler.postComment);
router.post('/:postID/delete-comment', cmtCtrler.deleteComment);
router.post('/:postID/ratingcreate', ratingCtrler.postRating);
router.get('/:postID/comments', cmtCtrler.getAllComments);
router.post('/:postID/avgrating', ratingCtrler.getAverageRating);

module.exports = router;