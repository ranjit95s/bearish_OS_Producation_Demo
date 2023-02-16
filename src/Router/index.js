import React, { useEffect, useMemo, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import {ROUTE_LIST} from "./index.utils";
import {useSelector} from "react-redux";

const INITIAL_STATE = () => ({
    routeList: ROUTE_LIST(),
});

const Router = () => {

    const location = useLocation();
    const [state, setState] = useState(INITIAL_STATE());

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    // const isLoggedIn = true;

    const getAllRoutesArray = (routeList) => {
        return routeList.reduce((acc, route) => {
            return [...acc, route, ...getAllRoutesArray(route.routeList || [])]
        }, []);
    };

    const getRoutes = (route) => route.map(({ path, element: Element, routeList = [] }, i) => <Route path={path}
        element={<Element
            routeList={routeList} />}
        key={i}>
        {getRoutes(routeList)}
    </Route>);
    const routes = useMemo(() => getRoutes(state.routeList), [state.routeList]);

    const validateCurrentRoute = () => {
        setState(() => ({ ...state, routeList: ROUTE_LIST() }));
    };

    useEffect(() => {
        const currentRoute = getAllRoutesArray(state.routeList).find(({ path }) => location.pathname.includes(path));
        if ((currentRoute?.authRequired && !isLoggedIn) || !currentRoute?.authRequired && isLoggedIn)
            validateCurrentRoute();
    }, [isLoggedIn]);

    return (<>
        <Routes>
            {routes}
            <Route
                path="*"
                element={<Navigate to={localStorage.getItem('token') ? '/dashboard' : '/login'} replace />}
            />
        </Routes>
    </>)
}

export default Router;
