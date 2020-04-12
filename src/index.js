import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import PodcastApp from './pages/PodcastApp';
import PodcastDetail from "./pages/PodcastDetail";
import {BrowserRouter, Switch, Route} from "react-router-dom";

const RootApp = () => (
    <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/" component={PodcastApp}/>
                <Route exact path="/:id" component={PodcastDetail}/>
            </Switch>
        </Suspense>
    </BrowserRouter>
)

ReactDOM.render(
  <React.StrictMode>
    <RootApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
