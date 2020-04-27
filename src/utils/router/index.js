/* eslint-disable no-debugger */
import React, { createContext, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import BeforeEnter from './beforeEnter';

const RouteContext = createContext([])

const renderRoutes = (routes, switchProps = {}, extraProps = {}) => {
  if (routes && routes.length > 0) {
    return (
      <Switch {...switchProps}>
        {routes.map((route, i) => (
          <Route
            key={route.key || i}
            path={route.path}
            exact={route.exact}
            strict={route.strict}
            render={props => {
              const { beforeEnter, ...routeProps } = route;

              return (
                <RouteContext.Provider value={route.routes}>
                  {beforeEnter ?
                    <BeforeEnter {...props} {...extraProps} beforeEnter={beforeEnter} route={routeProps} /> :
                    <route.component {...props} {...extraProps} route={routeProps} />}
                </RouteContext.Provider>
              )
            }}
          />
        ))}
      </Switch>
    )
  }
  return null;
}

const RouterView = () => {
  const routes = useContext(RouteContext);
  return renderRoutes(routes);
}

export {
  renderRoutes,
  RouterView
};