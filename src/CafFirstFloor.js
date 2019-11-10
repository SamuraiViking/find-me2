import React from 'react';
import './App.css';

class CafFirstFloor extends React.Component {
    handleClick() {
        console.log("you clicked on me");
    }
    createSquareRectangleBoothTables = () => {
        let tables = []
        let tablesOrder = ["sq", "long", "long", "aisle", "long", "long", "sq","booth"]
        for(let i = 0; i < 6; i++) {
            let tableRow = []
            tablesOrder.forEach((tableType, index) => {
                tableRow.push(<div 
                    className={tableType} 
                    onClick={() => this.handleClick()}
                    key={`${i}${index}${tableType}`}>
                    </div>)
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
        tablesOrder.forEach((tableRowOrder, index1) => {
            tableRowOrder.forEach((tableType, index2) => {
                tables.push(<div 
                    className={tableType}
                    key={`${index1}${index2}${tableType}`}>
                    </div>)
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
        legendOrder.forEach((elem, index) => {
            legend.push(<div className={elem.tableType} key={`${index}${elem.tableType}`}></div>)
            legend.push(<div className="label" key={`${index}${elem.name}`}>{`${elem.name}`}</div>)
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
