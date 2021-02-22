import { DashboardFinish, DashboardGuest, DashboardInvitation, DashboardProfile, DashboardWedding } from "../components";
import { Create, Dashboard, Home, Login, Register, GuestConfirmation, Invitations } from "../views";
// import Invitation2 from "../views/Invitation2";
import { Events } from '../views'


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
        path: '/dashboard/wedding',
        component: DashboardWedding,
      },
      {
        path: '/dashboard',
        component: DashboardProfile,
      },
      
    ]
  },
  {
    path: '/guestConfirmation',
    component: GuestConfirmation,
  },
  {
    path: '/event/:id',
    component: Events,
  },
  {
    path: '/create',
    component: Create,
  },
  {
    path: '/invitation',
    component: Invitations,
  },
  // {
  //   path: '/invitation2/:id',
  //   component: Invitation2,
  // },
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