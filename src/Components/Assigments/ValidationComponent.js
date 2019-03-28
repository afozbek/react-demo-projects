import React from 'react'

export default function ValidationComponent(props) {
    const isLong = props.textLength.length > 5;
    let component = null;
    if (isLong) {
        component = (<h1>Text long enough</h1>);
    }
    else {
        component = (<h1>Text is short</h1>);
    }
    return (
        <div>
            {component}
        </div>
    );
}
