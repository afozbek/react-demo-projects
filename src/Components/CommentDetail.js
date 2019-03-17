import React from 'react'


export default function CommentDetail(props) {
    //console.log(props);// props: {name: 'ada'}
    return (
        <div className="comment">
            <a href="#" className="avatar">
                <img src={props.avatar} alt="avatar" />
            </a>
            <div className="content">
                <a href="#" className="author">
                    {props.name}
                </a>
                <div className="metadata">
                    <span className="date">
                        {props.timeAgo}
                    </span>
                </div>
                <div className="text">
                    {props.comment}
                </div>
            </div>
        </div>
    )
}
