const express = require('express');
const tagsCtrler = require('../controllers/TagsController');

const router = express.Router();

router.get('/', tagsCtrler.getAll);
// router.get('/:tagID',tagsCtrler.getItem);
router.get('/:tagID/posts',tagsCtrler.getPostsByTag);
router.post('/create',tagsCtrler.createNewTag);

module.exports = router;