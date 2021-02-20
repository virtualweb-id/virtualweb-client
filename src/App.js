import React from 'react';
import { Home, Undanganku, Register, Login, Wedding } from './views'
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
        <Route path="/wedding" component={Wedding} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/undanganku" component={Undanganku} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
