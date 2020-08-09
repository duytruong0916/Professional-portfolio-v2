import React from "react";
import { createBrowserHistory as createHistory } from "history";
import { Route, Router, Switch } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Home from "./Pages/Home";
import Angubetta from "./Pages/projects/Angubetta";
import Aleph from "./Pages/projects/Aleph";
import Scrumstub from "./Pages/projects/ScrumStubs";
import Epics from "./Pages/projects/Epics";
import Ultimate from "./Pages/projects/Ultimate";
import Timefoxwatch from "./Pages/projects/Timefox";
import Portfolio from "./Pages/projects/Portfolio";
import Banking from "./Pages/projects/Banking";
import Secret from "./Pages/projects/Secret";
import { TransitionGroup, CSSTransition } from "react-transition-group";
export const history = createHistory();

const Routes = () => {
  return (
    <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
      <ScrollToTop />
      <React.Fragment>
        <Route
          render={({ location }) => {
            return (
              <TransitionGroup component={null}>
                <CSSTransition
                  timeout={300}
                  classNames="page"
                  key={location.key}
                >
                  <Switch location={location}>
                    <Route path="/" component={Home} exact={true} />
                    <Route
                      path="/projects/angubetta"
                      component={Angubetta}
                      exact={true}
                    />
                    <Route
                      path="/projects/scrumstub"
                      component={Scrumstub}
                      exact={true}
                    />
                    <Route
                      path="/projects/aleph"
                      component={Aleph}
                      exact={true}
                    />
                    <Route
                      path="/projects/epics"
                      component={Epics}
                      exact={true}
                    />
                    <Route
                      path="/projects/ultimate"
                      component={Ultimate}
                      exact={true}
                    />
                    <Route
                      path="/projects/timefoxwatch"
                      component={Timefoxwatch}
                      exact={true}
                    />
                    <Route
                      path="/projects/portfolio"
                      component={Portfolio}
                      exact={true}
                    />
                    <Route
                      path="/projects/banking"
                      component={Banking}
                      exact={true}
                    />
                    <Route
                      path="/projects/secret"
                      component={Secret}
                      exact={true}
                    />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            );
          }}
        />
      </React.Fragment>
    </Router>
  );
};

export default Routes;
