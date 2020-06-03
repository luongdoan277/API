import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Product from "./pages/products";
import MyAccount from "./pages/MyAccount";

class RouterPath extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/register' component={Register}/>
                    <Route exact path='/cart' component={Cart}/>
                    <Route exact path='/product' component={Product}/>
                    <Route exact path='/myaccount' component={MyAccount}/>
                </Switch>
            </main>
        )
    }
}

export default RouterPath
