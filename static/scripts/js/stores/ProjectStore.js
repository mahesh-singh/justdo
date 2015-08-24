var JustDoAppDispatcher = require('../dispatcher/JustDoAppDispatcher');
var JustDoConstants = require('../constants/JustDoConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ActionTypes = JustDoConstants.ActionTypes
var CHANGE_EVENT = 'change';


var _projects = [];
var _taskEditorVisiblility = false;

function setTaskEditorVisiblility(taskEditorVisiblility) {
    _taskEditorVisiblility = taskEditorVisiblility;
}

function addTask(task) {
    _projects[0].task.push(task);
}

var ProjectStore = assign({}, EventEmitter.prototype, {
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    /**
     * @param {function} callback
     */
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    getAll: function () {
        return _projects;
    },

    getTaskEditorVisibility: function () {
        return _taskEditorVisiblility;
    },


});

ProjectStore.dispatchToken = JustDoAppDispatcher.register(function (action) {
    switch (action.type) {
        case ActionTypes.RECEIVE_All:
            _projects = action.projects;
            ProjectStore.emitChange();
            break;
        case ActionTypes.SHOW_TASK_EDITOR:
            setTaskEditorVisiblility(action.showTaskEditor);
            ProjectStore.emitChange();
            break;
        case ActionTypes.TASK_ADD:
            addTask(task);
            ProjectStore.emitChange();
            break;
        default:
            //do nothing

    }
});

module.exports = ProjectStore;