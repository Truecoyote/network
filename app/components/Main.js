var React = require('react');
var ReactDOM = require('react-dom');
var Levels = require('./Levels');
var Abilities = require('./Abilities');

var Main = React.createClass({
  getInitialState: function(){
    return {
      name: 'Pepe',
      levels: [1,2,3,4,5,6],
      text: 'Pepe se tira pepes. No seas como Pepe.',
      abilities: [1,4,1,0]
    }
  },
  render: function(){
    return (
        <div className = 'card'>
          <Levels levels={this.state.levels}/>
          <ul className='habilities'>
            <h1>
              {this.state.name}
            </h1>
            <Abilities abilities = {this.state.abilities} />

            <div className='card-text'>
              {this.state.text}
            </div>
          </ul>
        </div>
        )
  }
});

ReactDOM.render(<Main />, document.getElementById('app'))
