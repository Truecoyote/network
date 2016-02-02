var React = require('react');
var ReactDOM = require('react-dom')
var Ability = require('./Ability');

var Abilities = React.createClass({
  render: function(){
    var backend = this.props.abilities[0]
    var database = this.props.abilities[1]
    var frontend = this.props.abilities[2]
    var design = this.props.abilities[3]
    return(
        <div>
            <Ability name='backend' level={backend}/>
            <Ability name='database' level={database}/>
            <Ability name='frontend' level={frontend}/>
            <Ability name='design' level={design}/>
        </div>
        )
  }
});

module.exports = Abilities;
