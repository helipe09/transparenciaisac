import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <Container>
                    <h1>Bem Vindo a página HOME!</h1>
                </Container>
            </div>
        );
    }
}

export default Home;