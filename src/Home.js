import React, {Component} from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import {Link} from 'react-router-dom';
import {Button, Container} from 'reactstrap';

class Home extends Component {

    render() {
        return (
            <div>
                <AppNavbar isOpen="true" someOtherVal={new Date()}/>
                <Container fluid>
                    <Button color="link">
                        <Link to="/client">Clients</Link>
                    </Button>
                </Container>
            </div>
        );
    }
}

export default Home;