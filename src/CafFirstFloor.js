import React from 'react';
import './App.css';

class CafFirstFloor extends React.Component {
    createSquareRectangleBoothTables = () => {
        let tables = []
        let tablesOrder = ["sq", "long", "long", "aisle", "long", "long", "sq","booth"]
        for(let i = 0; i < 6; i++) {
            let tableRow = []
            tablesOrder.forEach((tableType) => {
                tableRow.push(<div className={tableType}></div>)
            })
            tables.push(tableRow)
        }
        return tables
    }
    createCircleTables = () => {
        let tables = []
        let tablesOrder = [
            ['', 'circle', '', 'circle', '', 'circle', '', ''],
            ['', '', 'circle', '', 'circle', '', '', '']
        ]
        tablesOrder.forEach((tableRowOrder) => {
            tableRowOrder.forEach((tableType) => {
                tables.push(<div className={tableType}></div>)
            })
        })
        return tables
    }
    createTablesLegend = () => {
        let legend = []
        let legendOrder = [
            {
                "tableType": "sq",
                "name": "Two Person Table"
            },
            {
                "tableType": "long",
                "name": "Long Table"
            },
            {
                "tableType": "booth",
                "name": "Booth Tables"
            },
            {
                "tableType": "circle",
                "name": "Circular Tables"
            }
        ]
        legendOrder.forEach((elem) => {
            legend.push(<div className={elem.tableType}></div>)
            legend.push(<div className="label">{`${elem.name}`}</div>)
        })
        return legend
    }
    render() {
        const rows = 6;


        return (
            <div>
                <div class="header">
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
