const React = require ('react')

class Bomb extends React.Component {
  constructor(props){
    super(props);

    this.state = {  
      secondsLeft: this.props.initialCount
    };
  }

  render(){

    let msg = this.state.secondsLeft === 0 ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`

    return(
      <div>{msg}</div>
    )
  }
}

module.exports = Bomb;