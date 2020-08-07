import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from './screens/notLogin/Main'
import pageNotFound from './components/pageNotFound'

export default function Routes() {
    return (
        <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        {/* Finally, catch all unmatched routes */}
        <Route>
            <pageNotFound />
        </Route>
        </Switch>
    );
}