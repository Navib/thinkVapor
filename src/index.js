import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import promise from "redux-promise";
import reducers from "./reducers";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { store, history } from "./store";
import { ConnectedRouter } from "react-router-redux";

import "./styles/main.scss";
import "./assets/Rick.png";

import App from "./containers/app";
import AppB from "./components/app_B";
import AppC from "./components/app_C";

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <BrowserRouter history={history}>
        <div>
          <Switch>
            <Route path="/c" component={AppC} />
            <Route path="/b" component={AppB} />
            <Route path="/" component={App} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("app")
);
