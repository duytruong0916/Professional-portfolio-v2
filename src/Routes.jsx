import React from 'react';
import {createBrowserHistory as createHistory} from 'history';
import {Route, Router, Switch} from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Home from './Components/Home';
import Angubetta from './Components/projects/Angubetta';
import Aleph from './Components/projects/Aleph';
import Scrumstub from './Components/projects/ScrumStubs';
import Epics from './Components/projects/Epics';
import Ultimate from './Components/projects/Ultimate';
import Timefoxwatch from './Components/projects/Timefox';
import Portfolio from './Components/projects/Portfolio';
import Banking from './Components/projects/Banking';
import Secret from './Components/projects/Secret';
import Hayter from './Components/projects/Hayter';
import DMI from './Components/projects/Dmi';
import Goldeye from './Components/projects/Goldeye';
import Porfolio_v2 from './Components/projects/Porfolio-v2';
import Brazoria from './Components/projects/Brazoria';

import {TransitionGroup, CSSTransition} from 'react-transition-group';
export const history = createHistory();

const Routes = () => {
  return (
    <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
      <ScrollToTop />
      <React.Fragment>
        <Route
          render={({location}) => {
            return (
              <TransitionGroup component={null}>
                <CSSTransition
                  timeout={300}
                  classNames='page'
                  key={location.key}>
                  <Switch location={location}>
                    <Route path='/' component={Home} exact={true} />
                    <Route
                      path='/projects/angubetta'
                      component={Angubetta}
                      exact={true}
                    />
                    <Route
                      path='/projects/scrumstub'
                      component={Scrumstub}
                      exact={true}
                    />
                    <Route
                      path='/projects/aleph'
                      component={Aleph}
                      exact={true}
                    />
                    <Route
                      path='/projects/epics'
                      component={Epics}
                      exact={true}
                    />
                    <Route
                      path='/projects/ultimate'
                      component={Ultimate}
                      exact={true}
                    />
                    <Route
                      path='/projects/timefoxwatch'
                      component={Timefoxwatch}
                      exact={true}
                    />
                    <Route
                      path='/projects/portfolio'
                      component={Portfolio}
                      exact={true}
                    />
                    <Route
                      path='/projects/banking'
                      component={Banking}
                      exact={true}
                    />
                    <Route
                      path='/projects/secret'
                      component={Secret}
                      exact={true}
                    />
                    <Route
                      path='/projects/hayter'
                      component={Hayter}
                      exact={true}
                    />
                    <Route path='/projects/dmi' component={DMI} exact={true} />
                    <Route
                      path='/projects/goldeye'
                      component={Goldeye}
                      exact={true}
                    />
                    <Route
                      path='/projects/brazoria'
                      component={Brazoria}
                      exact={true}
                    />
                    <Route
                      path='/projects/porfolio-v2'
                      component={Porfolio_v2}
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
