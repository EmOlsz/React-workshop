import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from './components/home';
import ContactPage from './components/contact';
import './App.css';

class App extends Component {



    render() {
        return (
            <BrowserRouter>
                <section>
                    <Route path='/home' component={HomePage} />
                    <Route path='/contact' component={ContactPage} />
                </section>
            </BrowserRouter>
        );
    };
}

export default App;
