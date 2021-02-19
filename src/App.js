import Home from "./views/Home"
import Login from "./views/Login"
import Register from "./views/Register"

import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/register">
        <Register/>
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
