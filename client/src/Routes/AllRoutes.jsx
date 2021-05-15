import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Admin } from '../Components/Admin';
import { Cart } from '../Components/Cart';
import { ChinesePage } from '../Components/Pages/ChinesePage';
import { ExplorePage } from '../Components/Pages/ExplorePage';
import { HomePage } from '../Components/Pages/HomePage';
import { PizzaPage } from '../Components/Pages/PizzaPage';

const Allroutes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/cart">
                    <Cart />
                </Route>
                <Route exact path="/admin">
                    <Admin />
                </Route>
                <Route exact path="/explore">
                    <ExplorePage />
                </Route>
                <Route exact path="/pizza">
                    <PizzaPage />
                </Route>
                <Route exact path="/chinese">
                    <ChinesePage />
                </Route>
            </Switch>
        </div>
    )
}

export { Allroutes }