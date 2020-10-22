import React from "react";
import {
  BrowserRouter
} from "react-router-dom";
import { routes } from './router';
import { renderRoutes } from 'react-router-config';
import 'antd/dist/antd.css';

export default function App() {
  return (
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  );
}


