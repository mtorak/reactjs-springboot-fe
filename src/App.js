import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ClientList from './ClientList';
import ClientEdit from './ClientEdit';
import ClientNew from './ClientNew';
import Home from './Home';
import './App.css';

class App extends Component {

    render() {
        return (

            <Router>
                <Switch>
                    <Route path='/' exact={true} component={Home} />
                    <Route path='/client' exact={true} component={ClientList} />
                    <Route path='/client/:id' component={ClientEdit} />
                </Switch>
            </Router>

            // <Router>
            //     <Switch>
            //         {/*Home page */}
            //         <Route exact path="/home" component={Home} />

            //         {/* Route for client list */}
            //         <Route exact path="/" component={ClientList} />

            //         {/* Route for client edit */}
            //         <Route path="/client/:id" component={ClientEdit} />

            //         {/* Route for new client */}
            //         <Route path="/client/new" component={ClientNew} />

            //         {/* Optionally, add a redirect or a default route */}
            //     </Switch>
            // </Router>

        );
    }
}
export default App;
