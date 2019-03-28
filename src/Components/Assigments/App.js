import React, { Component } from 'react'
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';
export default class App extends Component {
    state = {
        text: ''
    }
    onChangeHandler = e => {
        const input = e.target.value;
        this.setState({ text: input })
    }

    deleteBlockHandler = (charIndex) => {
        const text = this.state.text;
        let splittedText = text.split('');
        splittedText.splice(charIndex, 1);
        this.setState({ text: splittedText.join('') });
    }
    render() {
        const input = this.state.text;
        const chars = input.split('').map((char, index) => {
            return <CharComponent value={char} key={index} click={() => this.deleteBlockHandler(index)} />
        });

        return (
            <div>
                <input type="text" onChange={this.onChangeHandler} value={this.state.text} />
                <ValidationComponent textLength={this.state.text}
                />
                {chars}
            </div>
        )
    }
}
