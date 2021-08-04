import React from 'react'

export default function OnlyAssets(props) {
    
    return (
        <div>
        {props.attributes.map(att => {
            <h1>{att.name}</h1>
        })}
        </div>
    )
}
