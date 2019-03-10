import React from 'react';
import TodoList from './Todo-List';


class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemler: [],
            text: '',
            saniye: 0
        };
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    tick = () => {
        this.setState({ saniye: this.state.saniye + 1 })
    }

    handleChange = (e) => {
        this.setState({ text: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(state => ({
            itemler: state.itemler.concat(newItem),
            text: ''
        }));
    }
    render() {
        return (
            <div>
                <h3>{this.hello}</h3>
                <h2>{this.state.saniye}</h2>
                <TodoList itemler={this.state.itemler} />
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-todo">
                        What needs to be done?
                    </label>
                    <input
                        id="new-todo"
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <button>
                        Add #{this.state.itemler.length + 1}
                    </button>
                    <button onClick={this.tick}>
                        Tıkla
                    </button>
                </form>
                <h4>{this.state.text}</h4>
            </div>
        );
    }


}
export default TodoApp;
