const cmtCtrler = require('../controllers/CommentController')
const { Router } = require("express");
const router = Router();

router.post('/create', cmtCtrler.postComment);
router.delete('/:cmtID/delete', cmtCtrler.deleteOneComment);
router.get('/:postID/comments', cmtCtrler.getCmtsByPostId);
router.get('/:cmtID', cmtCtrler.getItem);

module.exports = router;