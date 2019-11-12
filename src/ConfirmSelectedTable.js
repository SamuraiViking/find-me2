import React from 'react'
import CafFirstFloor from './CafFirstFloor'
import { Link } from 'react-router-dom'
import Legend from './Legend'

class ConfirmSelectedTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            confirmed: false,
        }
    }

    handleConfirmTable() {
        this.setState({
            confirmed: true,
        })
    }

    render() {
        const tableID = this.props.match.params.tableID
        return(
            <div>
                <div>
                    <h1 className="header">Tap your Table</h1>
                </div>
                <CafFirstFloor 
                    clickable={false}
                    tableID={tableID}
                    showConfirm={false}
                    showSendLink={true}
                    onConfirmTable={this.handleConfirmTable}
                />
                <Legend />
                {
                    this.state.confirmed ?
                    <Link to={`/1/${this.state.selectedTableKey}`} className="confirm-button btn">Confirm</Link>
                    : 
                    null
                }
            </div>
        )
    }
}

export default ConfirmSelectedTable;