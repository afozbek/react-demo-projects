import React from 'react';
import Table from './Components/Table';
class App extends React.Component {
    state = {
        canlarim: [
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
        ]
    };


    /**
     * @param {Number} index
     * @returns {Array} Removed index Array
     */
    removeCharacter = index => {
        const { canlarim } = this.state;

        this.setState({
            canlarim: canlarim.filter((character, i) => {
                return i !== index;
            })
        })
    }
    render() {
        return (
            <div className="container">
                <Table
                    friendsData={this.state.canlarim}
                    removeCharacter={this.removeCharacter}
                />
            </div>
        );
    }
}
export default App;