var Task = require('./Task.react');
var React = require('react');


var Project = React.createClass({
    render: function () {
        return (
                <div className="panel panel-default">
                      
                      <div className="panel-heading">{this.props.project.title}</div>
                      <div className="panel-body">
                        <p>information like 
                         - no due date(2) - tag (2), urgent(1),   </p>
                      </div>

                      <ul className="list-group">
                        {this.props.project.tasks.map(function(task){
                            return <Task task={task}/>;
                        })}
                      </ul>
                    </div>
            );
    }
});

module.exports = Project;