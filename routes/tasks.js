module.exports = function(app) {
    const Tasks = app.db.models.Tasks;
    app.route("/tasks")
        .get(function(req, res) {
            // "/tasks": Lista tarefas
            Tasks.findAll({})
                .then(function(result) {
                    res.json(result);
                })
                .catch(function(error) {
                    res.status(412).json({msg: error.message});
                });
        })
        .post(function(req, res) {
            // "/tasks": Cadastra uma nova tarefa
            Tasks.create(req.body)
                .then(function(result) {
                    res.json(result);
                })
                .catch(function(error) {
                    res.status(412).json({msg: error.message});
                });
        });
    app.route("/tasks/:id")
        .get(function(req, res) {
            // "/tasks/1": Consulta uma tarefa
            Tasks.findOne({where: req.params})
                .then(function(result) {
                    if (result) {
                        res.json(result);
                    } else {
                        res.sendStatus(404);
                    }
                })
                .catch(function(error) {
                    res.status(412).json({msg: error.message});
                });
        })
        .put(function(req, res) {
            // "/tasks/1": Atualiza uma tarefa
            Tasks.update(req.body, {where: req.params})
                .then(function(result) {
                    res.sendStatus(204);
                })
                .catch(function(error) {
                    res.status(412).json({msg: error.message});
                });
        })
        .delete(function(req, res) {
            // "/tasks/1": Exclui uma tarefa
            Tasks.destroy({where: req.params})
                .then(function(result) {
                    res.sendStatus(204)
                })
                .catch(function(error) {
                    res.status(412).json({msg: error.message});
                });
        });
};