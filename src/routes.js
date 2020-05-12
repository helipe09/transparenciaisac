import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './Components/Header';
import Home from './Pages/Home';
import Erro from './Pages/Erro';
import Unidades from './Pages/Unidades';


class routes extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <BrowserRouter>
            <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/unidades" component={Unidades}/>
                    <Route path="*" component={Erro}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default routes;