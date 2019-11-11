import React from 'react'
import CafFirstFloor from './CafFirstFloor'

class ConfirmSelectedTable extends React.Component {
    render() {
        return(
            <CafFirstFloor 
                clickable={false}
            />
        )
    }
}

export default ConfirmSelectedTable;