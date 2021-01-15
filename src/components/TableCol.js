import React, { Component } from 'react'

class TableCol extends Component {
    addCol = () =>{
        let cols = [];
        for(let i = 1; i <= this.props.numCol; i++){
			cols.push(<td className={this.props.colored ? "colored" : "uncolored"} key={i} onClick={this.props.changeColor}></td>)
        }
        return cols;
    }

    render() {
        return (
               this.addCol()
        )
    }
}
export default TableCol;