import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";

import {
    PublicRouteWithLayout,
    PrivateRouteWithLayout
} from "./components"
import {
    MainLayout,
    DefaultLayout
} from "./layouts"
import {
    FilterExample
} from "./views"

const FilterExampleRoute = () => <PublicRouteWithLayout component={FilterExample} layout={MainLayout}/>

function Routes() {

    return (
        <Switch>
            <Redirect exact from="/" to="/" />
            <Route path={`/filter`} component={FilterExampleRoute}/>
        </Switch>
    )
}

export default Routes
