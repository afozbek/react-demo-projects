import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './Components/CommentDetail';
import ApprovalCard from './Components/ApprovelCard';

const App = () => {
    { faker.image.avatar() }
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail name="furkan" timeAgo="Today at 4.45PM" comment="Furkan Sena'ya aşık"
                    avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail name="yunus" timeAgo="Today at 1.00AM" comment="Yunus Furkan'ın yakın arkadaşı"
                    avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail name="sena" timeAgo="Yesterday at 2.18PM" comment="Sena tam bir Python'cu"
                    avatar={faker.image.avatar()} />
            </ApprovalCard>



        </div>
    );
}
ReactDOM.render(<App />, document.getElementById('root'));