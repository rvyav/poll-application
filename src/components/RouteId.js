
import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

function RouteId
() {
    return (
        <Router>
            <Route path="/card/:id/vote">
            </Route>
        </Router>
    )
}

export default RouteId;

