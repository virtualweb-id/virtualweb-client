import React from 'react';
import { Home, Undanganku, Register, Login, MyInvitation, MyGuests, SendInvitations } from './views'
// import "tailwindcss/tailwind.css"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import RouterView from './routes/RouterView'
import routes from './routes'

function App() {
  return (
    <Router>
      <RouterView routes={routes} />
    </Router>
  );
}

export default App;
