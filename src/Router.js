import React from 'react'
import { Switch, Route } from 'react-router';
import App from './App';



const Router = () => {
    return (
        <Switch>
            <Route exact path ="/"  render={(props) => <App />}/>

        </Switch>
    )
}

// Start Router function here //
export default Router
