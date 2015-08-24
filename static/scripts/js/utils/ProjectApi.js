var JustDoAppDispatcher = require('../actions/JustDoActionCreator');

module.exports = {
    getAllTasks: function () {
        var projects = {};
        $.get('/projects', function (data) {
            JustDoAppDispatcher.receiveAll(data);
        });

        //console.log(projects);

    },
    addTask: function (task) {
        JustDoAppDispatcher.addTask(task);
    },


};