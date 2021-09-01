import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Main from "./components/main";

const App = () => {
    return (
        <div>
            <Switch>
                <Route path="/" component={() => <Main/>} />
                <Redirect to="/" />
            </Switch>
        </div>
    );
};

export default App;