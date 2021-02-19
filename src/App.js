import React from 'react';
import { Home, Undanganku, Register, Login } from './views'
// import "tailwindcss/tailwind.css"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/undanganku" component={Undanganku} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
