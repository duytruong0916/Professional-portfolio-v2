import React from "react";
import { createBrowserHistory as createHistory } from "history";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Home from "./Pages/Home";
import Angubetta from "./Pages/projects/Angubetta";
export const history = createHistory();

const Routes = () => {

  return (
    <BrowserRouter history={history} onUpdate={() => window.scrollTo(0, 0)}>
      <React.Fragment>
        <ScrollToTop />
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/projects/angubetta" component={Angubetta} exact={true} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  )
};

export default Routes;
