let Context = require('tingle-context');
let Demo = require('./NumberFieldDemo');
require('fastclick').attach(document.body);

React.render(<Demo/>, document.getElementById('TingleDemo'));
