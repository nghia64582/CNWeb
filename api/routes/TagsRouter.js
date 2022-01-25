const express = require('express');
const tagsCtrler = require('../controllers/TagsController');

const router = express.Router();

router.get('/', tagsCtrler.getAll);
// router.get('/:tagID',tagsCtrler.getItem);
router.get('/:tagID',tagsCtrler.getPostsByTag);
router.post('/create',tagsCtrler.createNewTag);
router.delete('/:tagID/delete', tagsCtrler.deleteOneTag);

module.exports = router;