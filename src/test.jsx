import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouteConfig from './routes';
import { renderRoutes } from './utils/router';

const InitRouter = () => {
  return <Router>{renderRoutes(RouteConfig)}</Router>;
};

export default InitRouter;
