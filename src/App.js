import React from 'react';
import {Table} from './components';
import './App.css';

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      selectedColor: "",
      numRow: 1,
      numCol: 1,
      colored: false
    }
  }

  addRow = () =>{
    this.setState((prevState) => ({numRow: prevState.numRow+1}))
  }

  addCol = () =>{
    this.setState((prevState) => ({numCol: prevState.numCol+1}))
  }

  removeRow = () => {
    if(this.state.numRow > 1){
      this.setState((prevState) => ({numRow: prevState.numRow - 1}))
    }
    else {
      this.setState({numRow: 1, numCol: 1})
    }
  }

  removeCol = () => {
    if(this.state.numCol > 1){
      this.setState((prevState) => ({numCol: prevState.numCol - 1}))
    }
    else {
      this.setState({numRow: 1, numCol: 1})
    }
  }

  selectColor = (e) => {
    this.setState({selectedColor: e.target.value})
  }

  changeColor = (e) => {
    if(this.state.selectedColor !== ""){
      e.target.style.backgroundColor = this.state.selectedColor;
      e.target.className = "colored";
    }
    console.log(e.target.className)
  }

  render(){
    return(
      <div className = "App">
        <h1 className = "container">TTP Assignment 8</h1>
        <div className = "container">
          <button type="button" className="myButton setMargin" onClick={()=>this.addRow()}>Add Row</button>
          <button type="button" className="myButton setMargin" onClick={()=>this.addCol()}>Add Column</button>
          <button type="button" className="myButton setMargin" onClick={()=>this.removeRow()}>Remove Row</button>
          <button type="button" className="myButton setMargin" onClick={()=>this.removeCol()}>Remove Column</button>
          <select className="myButton setMargin" onChange={this.selectColor}>
            <option value>Pick a Color</option>
            <option value="#FFD700">Gold</option>
            <option value="#FF0000">Red</option>
            <option value="#9400D3">Purple</option>
            <option value="#00FF00">Lime</option>
            <option value="#FF69B4">Pink</option>
            <option value="#00BFFF">Blue</option>
          </select>
        </div>
        <div className="container">
          <table>
            <tbody>
              <Table
              selectedColor = {this.state.selectedColor}
              numRow = {this.state.numRow}
              numCol = {this.state.numCol}
              changeColor = {this.changeColor}
              colored = {this.state.colored}
              cell = {this.state.cells}
              />
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default App;
