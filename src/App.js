import React from 'react';
import Table from './Components/Table';
class App extends React.Component {
    render() {
        const canlarim = [
            {
                'name': 'Sena',
                'proximity': 'Lover & Very Close Friend'
            },
            {
                'name': 'Silan',
                'proximity': 'Very Close Friend'
            },
            {
                'name': 'Yunus Emre',
                'proximity': 'Very Close Friend'
            }
        ];


        return (
            <div className="container">
                <Table friendsData={canlarim} />
            </div>
        );
    }
}
export default App;