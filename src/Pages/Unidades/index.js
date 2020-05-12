import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import './unidades.css';

class Unidades extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            unidade:[]
         };

         this.loadUnit = this.loadUnit.bind(this);
    }

    componentDidMount(){
        this.loadUnit();
    }

    loadUnit(){
        // URL da API: https://sujeitoprogramador.com/r-api/?api=filmes/
        let url = 'http://localhost:3100/unidade';
        fetch(url)
        .then((r) => r.json())
        .then((json)=> {
            this.setState({unidade: json});
            console.log(json);
        })
        
    }
    
    render(){
        return(
            <div>
                <div>
                    { this.state.unidade.map((unidades)=> {
                        return(
                            <article>
                                <strong>{unidades.id}</strong>
                                <strong>{unidades.name}</strong>
                                <strong>{unidades.local}</strong>
                            </article>
                        );
                    }
                    ) }
                </div>
            </div>
        )
    }


    // render() {
    //     return (
    //         <Container>
    //             <Navbar bg="primary" className="barra">
    //                  <h4>Unidade Gestora</h4>
    //             </Navbar>
    //             <Container>
    //             <Row>
    //                 <Col className="box">
    //                     <Link to="/">
    //                     <img src="/vertical-isac.png"
    //                     width="120px"
    //                     />
    //                     </Link>
    //                 </Col>
    //             </Row>
    //             </Container>

    //             <Navbar bg="primary" className="barra">
    //                  <h4>UPAS - Unidades de Pronto Atendimento </h4>
    //             </Navbar>
    //             <Container>
    //             <Row>
    //                 <Col className="box">
    //                     <Link to="/">
    //                     <img src="/UPA-anatolio-cor.png"
    //                     width="120px"
    //                     />
    //                     </Link>
    //                 </Col>
    //             </Row>
    //             </Container>
                
    //         </Container>

            
    //     );
    // }
}

export default Unidades;