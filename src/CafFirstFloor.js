import React from 'react';
import { Link, Route, useParams } from 'react-router-dom';
import './App.css';

class CafFirstFloor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showConfirm: false,
            selectedTableKey: null,
        }
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
                tables.push(<div 
                    style={{background: color}}
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
    createTablesLegend = () => {
        let legend = []
        let legendKeys = [
            {
                "color": "green",
                "name": "Two Person Table"
            },
            {
                "color": "black",
                "name": "Long Table"
            },
            {
                "color": "red",
                "name": "Booth Tables"
            },
            {
                "color": "blue",
                "name": "Circular Tables"
            }
        ]
        legendKeys.forEach((key, index) => {
            let legendTableKey = `${index}${key.color}`
            let legendLabelKey = `${index}${key.name}${key.name}`
            legend.push(<div style={{background: key.color }} key={legendTableKey}></div>)
        legend.push(<div className="label" key={legendLabelKey}>{key.name}</div>)
        })
        return legend
    }
    render() {
        return (
            <div>
                <div className="header">
                    <h1>Tap your Table</h1>
                </div>
                <div className="caf-first-floor">
                    {this.createCircleTables()}
                    <div className="blank-row"></div>
                    {this.createSquareRectangleBoothTables()}
                    <div className="blank-row"></div>
                    {this.createTablesLegend()}
                </div>
            </div>
        );
    }
}

export default CafFirstFloor;
