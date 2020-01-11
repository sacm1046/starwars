import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import People from './views/People';
import NotFound from './views/notfound';
import NavBar from './components/navbar';
import Planets from './views/Planets';
import Vehicles from './views/Vehicles';
import CardPeople from './views/CardPeople';
import CardPlanets from './views/CardPlanets';
import CardVehicles from './views/CardVehicles';

const Layout = () => {
    return(
        <BrowserRouter>
        <NavBar />
        <Switch>
        <Route exact path={"/"} component={People} />
        <Route exact path={"/Planets"} component={Planets} />
        <Route exact path={"/Vehicles"} component={Vehicles} />
        <Route exact path={"/CardPeople"} component={CardPeople} />
        <Route exact path={"/CardPlanets"} component={CardPlanets} />
        <Route exact path={"/CardVehicles"} component={CardVehicles} />
        <Route component={NotFound} />
        </Switch>
        </BrowserRouter>
    )
}

export default Layout;