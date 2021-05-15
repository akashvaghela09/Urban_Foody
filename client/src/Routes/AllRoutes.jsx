import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Admin } from '../Components/Admin';
import { Cart } from '../Components/Cart';
import { Home } from "../Components/Home"

const Allroutes = () => {
    return (
        <div>
            <Link to="/cart">Cart</Link><br/>
            <Link to="/">Home</Link><br/>
            <Link to="/admin">Admin</Link>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/cart">
                    <Cart />
                </Route>
                <Route exact path="/admin">
                    <Admin />
                </Route>
            </Switch>
        </div>
    )
}

export { Allroutes }