import React from 'react'
import { Switch, Route } from 'react-router';
import App from './App';
import About from './Components/About/About';


const Router = () => {
    return (
        <Switch>
            <Route exact path ="/"  render={(props) => <App />}/>
            <Route path = "/About"  render={(props) => <About />}/>
        </Switch>
    )
}

// Start Router function here //
export default Router
