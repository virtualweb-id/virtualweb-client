import { Switch } from "react-router-dom"
import RouteWithSubRoutes from "./RouteWithSubRoutes"

export default ({ routes }) => {
  return (
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
  )
}