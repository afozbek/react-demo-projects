import React from 'react';
import Table from './Components/Table';
import Form from './Components/Form';
class App extends React.Component {
    state = {
        canlarim: []
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
    //onceki butun arkadaslar + yeni eklenen
    handleSubmit = character => {
        this.setState({ canlarim: [...this.state.canlarim, character] })
    }

    render() {
        return (
            <div className="container">
                <Table
                    friendsData={this.state.canlarim}
                    removeCharacter={this.removeCharacter}
                />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}
export default App;