module.exports = function(app) {
    let controller = require('./controllers/Controller');
    app.route('').post(controller.post);
    app.route('').get(controller.get);
    app.route('').delete(controller.delete);
}