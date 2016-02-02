var React = require('react');
var ReactDOM = require('react-dom')

var Ability = React.createClass({
  render: function(){
    var star = <i className='puntuation icon icon-star'></i>
    var empty = <i className='puntuation icon icon-star-empty'></i>
    var className = 'icon hability icon-' + this.props.name;
    var level = this.props.level
    var stars = [1,1,1,1,1]
    var levels = stars.map(function(_, idx) {
      if(level > idx){
        return <i key={idx} className='puntuation icon icon-star'></i>
      }
      else{
        return <i key={idx} className='puntuation icon icon-star-empty'></i>
      }
    })
    return (
            <li>
              <div>
                <i className={className}></i>
              </div>
              {levels}
            </li>
        )
  }
});

module.exports = Ability;
