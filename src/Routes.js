import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import SingleProduct from "./Components/SingleProduct/SingleProduct";


class Routes extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div className="App">
                        <Switch>
                            <Route exact path='/' component={Dashboard} />
                            <Route exact path='/products' component={Dashboard} />
                            <Route exact path='/singleproduct/:id' component={SingleProduct} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default Routes;