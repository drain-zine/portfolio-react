import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import './App.scss';
import './animations/slideTransition.scss';

import Lander from './components/Lander';
import Design from './components/Design';


function App() {
  return (
    <Router>
      <div className="App">
        <Route render={({ location }) => {
          const currentKey = location.pathname.split("/")[1] || "/";
          console.log(currentKey);
          const timeout = {enter: 800, exit: 400};

            return (
              <TransitionGroup component={null}>
                <CSSTransition key={currentKey} timeout={timeout} classNames="pageSlider" mountOnEnter={true} unmountOnExit={true}>
                  <Switch location={location}>
                    <Route path="/" exact component={Lander} />
                    <Route path="/design" exact component={Design} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )
        }}/>
      </div>
    </Router>
  );
}

export default App;
