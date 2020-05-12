import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

class Erro extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <Container>
                    <h1>Página não localizada</h1>
                </Container>
            </div>
        );
    }
}

export default Erro;