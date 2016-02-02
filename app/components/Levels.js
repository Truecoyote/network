var React = require('react');
var ReactDOM = require('react-dom')

var Levels = React.createClass({
  render: function(){
    var levels = this.props.levels.map(function(level, idx) {
      return <li key={idx}>{level}</li>
    })
    return (
        <ul className='levels'>
          {levels}
        </ul>
        )
  }
});

module.exports = Levels;
