import React from 'react'

const Legend = () => {
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
    return <div class="legend">{legend}</div>
        
}

export default Legend;