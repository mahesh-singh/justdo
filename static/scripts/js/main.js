var JustDoApp = require('./components/app.react');
var React = require('react');

window.React = React; 



React.render(
    <JustDoApp/>, 
    document.getElementById('body')
    );
