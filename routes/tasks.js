module.exports = function(app) {
    const Tasks = app.models.tasks;
    app.get("/tasks", function(req, res) {
        Tasks.findAll({}, function(tasks) {
            res.json({tasks: tasks});
        });
    });
};