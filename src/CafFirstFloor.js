import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class CafFirstFloor extends React.Component {
    handleClick(key, e) {
        console.log(key, e.target);
    }
    createSquareRectangleBoothTables = () => {
        let tables = []
        let tablesOrder = ["green", "black", "black", "white", "black", "black", "green","red"]
        for(let i = 0; i < 6; i++) {
            let tableRow = []
            tablesOrder.forEach((tableColor, index) => {
                let key = `${i}${index}${tableColor}`;
                tableRow.push(<div
                    style={{background: tableColor}}
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
        let tablesOrder = [
            ['white', 'blue', 'white', 'blue', 'white', 'blue', 'white', 'white'],
            ['white', 'white', 'blue', 'white', 'blue', 'white', 'white', 'white']
        ]
        tablesOrder.forEach((tableRowOrder, index1) => {
            tableRowOrder.forEach((tableColor, index2) => {
                let key = `${index1}${index2}${tableColor}`
                tables.push(<div 
                    style={{background: tableColor}}
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
        let legendOrder = [
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
        legendOrder.forEach((elem, index) => {
            let legendTableKey = `${index}${elem.tableType}`
            let legendLabelKey = `${index}${elem.name}${elem.name}`
            legend.push(<div style={{background: elem.color }} key={legendTableKey}></div>)
        legend.push(<div className="label" key={legendLabelKey}>{elem.name}</div>)
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
