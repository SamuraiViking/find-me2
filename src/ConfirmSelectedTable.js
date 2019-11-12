import React from 'react'
import CafFirstFloor from './CafFirstFloor'
import { Link } from 'react-router-dom'
import Legend from './Legend'

class ConfirmSelectedTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showConfirmed: false,
            tableConfirmed: false,
        }
        this.selectedTableID = this.props.match.params.tableID
    }

    handleSelectTable(key) {
        this.setState({
            showConfirmed: true,
            selectedTableID: key
        })
    }

    handleTableConfirmed() {
        this.setState({
            tableConfirmed: true,
            showConfirmed: false,
        })
    }

    render() {
        const selectedTableID = this.props.match.params.selectedTableID
        return(
            <div>
                {selectedTableID}
                {this.state.selectedTableID}
                {this.state.confirmed ?
                 "confirmed"
                 :
                 "not confirmed"
                }
                <div>
                    <h1 className="header">Tap your Table</h1>
                </div>
                <CafFirstFloor 
                    clickable={true}
                    onSelectTable={this.handleSelectTable.bind(this)}
                    selectedTableID={selectedTableID}
                />
                <Legend />
                {
                    this.state.showConfirmed ?
                    <Link to={`/1/${this.state.selectedTableID}`} onClick={this.handleTableConfirmed.bind(this)} className="confirm-button btn">Confirm</Link>
                    : 
                    null
                }
                {
                    this.state.tableConfirmed ?
                    <div class="copy-link">
                        <p>Share this link to your friends</p>
                        <p>{window.location.href}</p>
                    </div>
                    :
                    null
                }
            </div>
        )
    }
}

export default ConfirmSelectedTable;