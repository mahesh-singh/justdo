var React = require('react');
var JustDoActions = require('../actions/JustDoActionCreator');

var SearchSection = React.createClass({
    showTaskEditor:function(){
        JustDoActions.updateTaskEditorVisibility(true); 
    },
    render: function () {
        return (
                        <nav className="navbar navbar-default">
                            <div className="container-fluid">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                    <a className="navbar-brand" href="#">Just Do</a>
                                </div>

                                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                
                                    <form className="navbar-form navbar-left" role="search">
                                        <div className="form-group">
                                            <input type="text" className="form-control " placeholder="Search"/>
                                        </div>
                                        <button type="submit" className="btn btn-default">Go</button>
                                    </form>
                                    <div className="nav navbar-form navbar-right">
                                        <div className="form-group">
                                            <button onClick={this.showTaskEditor} type="button" className="btn btn-default" aria-label="Left Align">
                                                <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
            );
    }
});

module.exports = SearchSection;