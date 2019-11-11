import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class CafFirstFloor extends React.Component {
    handleClick(key, e) {
        console.log(key, e.target);
    }
    createSquareRectangleBoothTables = () => {
        let tables = []
        let tableColumnsColor = ["green", "black", "black", "white", "black", "black", "green","red"]
        for(let row = 0; row < 6; row++) {
            let tableRow = []
            tableColumnsColor.forEach((color, column) => {
                let key = `${row}${column}${color}`;
                tableRow.push(<div
                    style={{background: color}}
                    onClick={this.handleClick.bind(this, key)}
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
                    onClick={this.handleClick.bind(this, key)}
                    keyprop={key}>
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
                    <Link to="/2">Go to Second Floor</Link>
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
