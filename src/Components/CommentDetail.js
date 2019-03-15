import React from 'react'
import faker from 'faker';


export default function CommentDetail() {
    return (
        <div className="comment">
            <a href="#" className="avatar">
                <img src={faker.image.avatar()} alt="avatar" />
            </a>
            <div className="content">
                <a href="#" className="author">
                    {faker.name.firstName(0)}
                </a>
                <div className="metadata">
                    <span className="date">
                        12.08.1995
                    </span>
                </div>
                <div className="text">
                    Nice blog post!
                </div>
            </div>
        </div>
    )
}
