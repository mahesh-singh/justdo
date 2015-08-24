var React = require('react');
var Project = require('./Project.react');
var ProjectStore = require('../stores/ProjectStore');
var TaskEditor = require('./TaskEditor.react.js');
var MoustrapMixin = require('./MoustrapMixin');
var JustDoActions = require('../actions/JustDoActionCreator');

function getStateFromStores() {
    return{
        projects:ProjectStore.getAll(),
        showTaskEditor:ProjectStore.getTaskEditorVisibility()
    }
}


var ProjectSection = React.createClass({
    mixins: [MoustrapMixin],
    getInitialState: function(){
        return getStateFromStores();
    },

    componentDidMount: function() {
        this.bindShortcut('a', function () { JustDoActions.updateTaskEditorVisibility(true); });
        this.bindShortcut('esc', function () { JustDoActions.updateTaskEditorVisibility(false); });
        ProjectStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        ProjectStore.removeChangeListener(this._onChange);
    },

    render: function () {
        return (
                <div className="container-fluid">
                    <TaskEditor visible={this.state.showTaskEditor}/>
                    {this.state.projects.map(function(project){
                        return <Project key={project.id} project={project}/>;
                    })}                       
                </div>
            );
    },

    _onChange: function() {
        this.setState(getStateFromStores());
    }
});

module.exports = ProjectSection;