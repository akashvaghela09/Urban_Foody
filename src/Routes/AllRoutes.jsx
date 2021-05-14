import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Cart } from '../Components/Cart';
import { Home } from "../Components/Home"

const Allroutes = () => {
    return (
        <div>
            <Link to="/cart">Cart</Link>
            <Link to="/">Home</Link>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/cart">
                    <Cart />
                </Route>
            </Switch>
        </div>
    )
}

export { Allroutes }