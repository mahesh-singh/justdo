var JustDoAppDispatcher = require('../dispatcher/JustDoAppDispatcher');
var JustDoConstants = require('../constants/JustDoConstants');

var ActionTypes = JustDoConstants.ActionTypes;

module.exports = {
    receiveAll: function (projects) {
        JustDoAppDispatcher.dispatch({
            type: ActionTypes.RECEIVE_All,
            projects: projects
        });
    },
    updateTaskEditorVisibility: function (taskEditorVisibility) {
        JustDoAppDispatcher.dispatch({
            type: ActionTypes.SHOW_TASK_EDITOR,
            showTaskEditor: taskEditorVisibility
        });
    },
    addTask: function (task) {
        JustDoAppDispatcher.dispatch({
            type: ActionTypes.TASK_ADD,
            task: task
        });
    },

};

