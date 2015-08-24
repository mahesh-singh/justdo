var React = require('react');

var TaskEditor = React.createClass({
    addTask:function(){
        
    },
    componentDidMount: function() {
    },
    render: function () {
        return (
                <div className={"" + (this.props.visible ? 'active' : 'hidden')} id='taskEditorContainer' ref='taskEditor'>
                    <div className="form-horizontal">
                        <div className="form-group">
                            <label htmlFor="inputTask" className="col-sm-2 control-label">Task</label>
                            <div className="col-sm-10">
                              <textarea ref='textAreaTaskAdd' className="form-control col-sm-10 mousetrap" rows="2"></textarea>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                              <button type="button" onClick={this.addTask} className="btn btn-default">Add</button>
                            </div>
                          </div>
                    </div>
                </div>
            );
    },


    

});

module.exports = TaskEditor;