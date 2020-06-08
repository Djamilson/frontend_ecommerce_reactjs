import React from 'react';

import { Switch } from 'react-router-dom';

import Route from './Routes';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Token from '~/pages/Token';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import Horario from '~/pages/Horario';

import Home from '~/pages/Home';
import Cart from '~/pages/Cart';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/signin" component={SignIn} />
    <Route path="/cart" component={Cart} />

    <Route path="/register" component={SignUp} />
    <Route path="/token/:token" component={Token} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/profile" component={Profile} isPrivate />
    <Route path="/horario" component={Horario} isPrivate />
  </Switch>
);

export default Routes;
