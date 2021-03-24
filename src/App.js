import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {Helmet} from "react-helmet";

import './App.scss';
import './animations/slideTransition.scss';

import Lander from './views/Lander';
import Design from './views/Design';
import AvantVibes from './views/Moodboards/AvantVibes';
import DRAINE1 from './views/Moodboards/DRAINE1';


function App() {
  return (
    <Router>
      <Helmet>
        <meta name="author" content="Tom Stannett" />
        <meta name="description" content="Portal." />
        <meta charSet="UTF-8" />

        <meta property="og:title" content="TOM STANNETT" />
        <meta property="og:url" content="https://www.drainzine.fr" />
        <meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />
        
      </Helmet>

      <div className="App">
        <Route render={({ location }) => {
          const currentKey = location.pathname.split("/")[1] || "/"; 
          const timeout = {enter: 800, exit: 400};
          return (
            <TransitionGroup component={null}>
              <CSSTransition key={currentKey} timeout={timeout} classNames="pageSlider" mountOnEnter={true} unmountOnExit={true}>
                <Switch location={location}>
                  <Route path="/" exact component={Lander} />
                  <Route path="/design" exact component={Design} />
                  <Route path="/moodboards/avant_vibes" exact component={AvantVibes} />
                  <Route path="/moodboards/drain_e1" exact component={DRAINE1} />
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
