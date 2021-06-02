
import './App.css';
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {index:0};
    this.result = 0;
  }
  shouldComponentUpdate(nextProps, nextState) {
    {console.log(nextProps)}
    {console.log(nextState)}
    console.log("should Component Update")
  }
  componentWillMount() {
    console.log("component Will Mount")
  }
  componentDidMount(){
    console.log("component Did Mount")
  }
  componentWillUpdate(){
    console.log("component Will Update")
  }
  changeState(){
    this.setState({index: 2})
  }

  render() {
    return(
      <div>
        {console.log("hi")}
        <h1>{this.state.index}</h1>  
        <button onClick={this.changeState.bind(this)}>Click me</button>
      </div>
      
    )
  }
}
export default App;
