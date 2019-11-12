import React from 'react'
import CafFirstFloor from './CafFirstFloor'

class ConfirmSelectedTable extends React.Component {
    render() {
        const tableID = this.props.match.params.tableID
        return(
            <div>
                {tableID}
                <CafFirstFloor 
                    clickable={false}
                    tableID={tableID}
                />
            </div>
        )
    }
}

export default ConfirmSelectedTable;