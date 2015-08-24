var SearchSection = require('./SearchSection.react')
var ProjectSection = require('./ProjectSection.react');

var React = require('react');
var ProjectApi = require('../utils/ProjectApi')



var JustDoApp = React.createClass({
    componentDidMount: function() {
        ProjectApi.getAllTasks();

    },
    
    render: function () {
        return (
                <div id="main">
                    <SearchSection/>
                    <ProjectSection/>
                </div>
            );
    },

});

module.exports = JustDoApp;

