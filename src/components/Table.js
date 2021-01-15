import React, { Component } from 'react';
import TableRow from './TableRow'

class Table extends Component {


    
    render() {
        return (
            <TableRow 
            selectedColor = {this.props.selectedColor}
            numRow = {this.props.numRow}
            numCol = {this.props.numCol}
            changeColor = {this.props.changeColor}
            colored ={this.props.colored}
            />
        )
    }
}

export default Table