const postsRouter = require('./PostsRouter')
const tagsRouter = require('./TagsRouter')
const cmtRouter = require('./CommentsRouter')
module.exports = function(app) {
    let controller = require('../controllers/Controller');
    app.route('').post(controller.post);
    app.route('').get(controller.get);
    app.use('/posts', postsRouter);
    app.use('/tags', tagsRouter);
    app.use('/comments', cmtRouter);
}