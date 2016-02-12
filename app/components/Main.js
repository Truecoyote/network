var React = require('react');
var ReactDOM = require('react-dom');
var Levels = require('./Levels');
var Abilities = require('./Abilities');

var Main = React.createClass({
  getInitialState: function(){
    return {
      name0: 'Pepe',
      levels0: [1,2,3,4,5,6],
      text0: 'Pepe se tira pepes. No seas como Pepe.',
      abilities0: [1,4,1,0],
      name1: 'Lionel Hsu',
      levels1: [1,2,3,4,5,6],
      text1: 'LH es lo más.',
      abilities1: [5,5,5,5]
    }
  },
  render: function(){
    return (
        <div>
          <div className = 'card'>
            <Levels levels={this.state.levels0}/>
            <ul className='habilities'>
              <h1>
                {this.state.name0}
              </h1>
              <Abilities abilities = {this.state.abilities0} />

              <div className='card-text'>
                {this.state.text0}
              </div>
            </ul>
          </div>,
          <div className = 'card'>
            <Levels levels={this.state.levels1}/>
            <ul className='habilities'>
              <h1>
                {this.state.name1}
              </h1>
              <Abilities abilities = {this.state.abilities1} />

              <div className='card-text'>
                {this.state.text1}
              </div>
            </ul>
          </div>
        </div>
        )
  }
});

ReactDOM.render(<Main />, document.getElementById('app'))
