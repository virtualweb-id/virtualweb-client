import { DashboardFinish, DashboardInvitation, DashboardProfile } from "../components";
import { Dashboard, Home, Login, Register, Undanganku } from "../views";

const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
    routes: [
      {
        path: '/dashboard/send',
        component: DashboardFinish,
      },
      {
        path: '/dashboard/guests',
        component: DashboardProfile,
      },
      {
        path: '/dashboard/invitation',
        component: DashboardInvitation,
      },
      {
        path: '/dashboard',
        component: DashboardProfile,
      },
    ]
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/',
    component: Home,
  },
];

export default routes