import React from 'react'

export default function FormattedDate(props) {
    return (
        <div>
            <h2>It is {props.date.toLocaleTimeString()}</h2>
        </div>
    )
}
