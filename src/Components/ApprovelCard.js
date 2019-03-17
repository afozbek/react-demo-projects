import React from 'react'

export default function ApprovelCard(props) {

    //props.children referencing its child component
    console.log(props);
    return (
        <div className="ui card">
            <div className="content">{props.children}</div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui green button">Approve</div>
                    <div className="ui basic red button">Reject</div>
                </div>
            </div>
        </div>

    );
}
