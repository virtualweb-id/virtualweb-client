import { DashboardFinish, DashboardGuest, DashboardInvitation, DashboardProfile } from "../components";
import { Dashboard, Home, Invitation, Login, Register, Wedding } from "../views";

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
        component: DashboardGuest,
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
    path: '/invitation',
    component: Invitation,
  },
  {
    path: '/wedding',
    component: Wedding,
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