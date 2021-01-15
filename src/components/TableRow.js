import React, { Component } from 'react'
import TableCol from './TableCol'

class TableRow extends Component {

    addRow = () =>{
        let rows = []
        for(let i = 1; i <= this.props.numRow; i++){
            rows.push(<tr key={i}><TableCol numCol = {this.props.numCol} 
                changeColor={this.props.changeColor} 
                colored ={this.props.colored}
                
                /></tr>)
        }
        return rows;
    }

    render() {
        return (
            this.addRow()
        )
    }
}

export default TableRow;