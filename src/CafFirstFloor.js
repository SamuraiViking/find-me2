import React from 'react';
import Legend from './Legend'
import { Link } from 'react-router-dom'
import './App.css';

class CafFirstFloor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showConfirm: false,
            selectedTableKey: false,
            showSendLink: true,
        }
    }

    componentWillMount() {
        this.setState({
            selectedTableKey: this.props.tableID,
            showConfirm: this.props.showConfirm,
            showSendLink: this.props.showSendLink,
        })
    }

    handleClick(key, e) {
        if(key.includes("white")) {
            return
        }

        this.setState({
            showConfirm: true,
            selectedTableKey: key,
        })
    }

    createSquareRectangleBoothTables = () => {
        let tables = []
        let tableColumnsColor = ["green", "black", "black", "white", "black", "black", "green","red"]
        for(let row = 0; row < 6; row++) {
            let tableRow = []
            tableColumnsColor.forEach((color, column) => {
                let key = `${row}${column}${color}`;
                let tableColor = key === this.state.selectedTableKey ? "purple" : color
                tableRow.push(
                        <div
                            onClick={this.handleClick.bind(this, key)}
                            style={{background: tableColor}}
                            keyprop={key}
                            key={key}>
                        </div>)
            })
            tables.push(tableRow)
        }
        return tables
    }
    createCircleTables = () => {
        let tables = []
        let tableColors = [
            ['white', 'blue', 'white', 'blue', 'white', 'blue', 'white', 'white'],
            ['white', 'white', 'blue', 'white', 'blue', 'white', 'white', 'white']
        ]
        tableColors.forEach((rowColors, row) => {
            rowColors.forEach((color, column) => {
                let key = `${row}${column}${color}`
                let tableColor = key === this.state.selectedTableKey ? "purple" : color
                tables.push(<div 
                    style={{background: tableColor}}
                    className="circle"
                    key={key}
                    keyprop={key}
                    onClick={this.handleClick.bind(this, key)}
                    >
                    </div>)
            })
        })
        return tables
    }
    render() {
        return (
            <div>
                <div className="caf-first-floor">
                    {this.createCircleTables()}
                    <div className="blank-row"></div>
                    {this.createSquareRectangleBoothTables()}
                    <div className="blank-row"></div>
                    {
                        this.state.showSendLink ?
                        <h1>{window.location.href}</h1>
                        :
                        null
                    }
                </div>
            </div>
        );
    }
}

export default CafFirstFloor;
