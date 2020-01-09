import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';


import Movies from '../components/movies';
import NotFound from '../components/notfound';

import { Provider } from 'unistore/react';
import { store, actions } from "../store";
import MovieList from '../components/movie-list';

const MainRouter = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Movies} />
                    {/* <Route exact path="/home" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/experience" component={Experience} /> */}
                    {/* <Route exact path="/news" component={News} /> */}
                    <Route path="/category/:category" component={MovieList} />
                    <Route component={NotFound} />

                </Switch>
            </BrowserRouter>
        </Provider>
    );
};

export default MainRouter;