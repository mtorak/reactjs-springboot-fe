import React, { Component } from 'react';
import logo from './logo.svg'
import './App.css';

class App extends Component {
    state = {
        clients: []
    };

    async componentDidMount() {
        const response = await fetch('/client');
        const body = await response.json();
        this.setState({ clients: body });
        console.log("Body: " + body);
    }

    render() {
        // const { clients } = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div className="App-intro">
                        <h2>Clients</h2>
                        {this.state.clients.map(client =>
                            <div key={client.id}>
                                {client.name} ({client.email})
                            </div>
                        )}
                    </div>
                </header>
            </div>
        );
    }
}
export default App;
