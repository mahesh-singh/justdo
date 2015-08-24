var React = require('react');

var Task = React.createClass({
    render: function () {
        return (
            <li className="list-group-item" key={this.props.id}>{this.props.task.title}</li>
            );
    },
});

module.exports = Task;