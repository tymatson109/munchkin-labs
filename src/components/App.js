import React from 'react'
import Header from './Header';
import './App.css';
import Home from './Home';
import About from './About';
import Route from './Route';
import Jobs from './Jobs';


const App = () => {
    return (
        <div className="app">
            <Header />
            <Route path="/">
                <Home />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/jobs">
                <Jobs />
            </Route>
        </div>
    )
}

export default App;
