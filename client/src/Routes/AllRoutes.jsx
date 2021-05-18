import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Admin } from '../Components/Admin';
import { CheckoutPage } from '../Components/Pages/CheckoutPage';
import { ChinesePage } from '../Components/Pages/ChinesePage';
import { ExplorePage } from '../Components/Pages/ExplorePage';
import { HomePage } from '../Components/Pages/HomePage';
import { Login } from '../Components/Pages/Login';
import { NotFound } from '../Components/Pages/NotFound';
import { PizzaPage } from '../Components/Pages/PizzaPage';
import { User } from '../Components/Pages/User';

const Allroutes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/checkout">
                    <CheckoutPage />
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
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/user">
                    <User />
                </Route>
                <Route exact path="/chinese">
                    <ChinesePage />
                </Route>
                <Route >
                    <NotFound />
                </Route>
            </Switch>
        </div>
    )
}

export { Allroutes }