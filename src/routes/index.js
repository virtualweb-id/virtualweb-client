import { DashboardFinish, DashboardGuest, DashboardInvitation, DashboardProfile, DashboardWedding } from "../components";
import { Create, Dashboard, Home, Invitation, Login, Register, GuestConfirmation, Event } from "../views";


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
    component: Event,
  },
  {
    path: '/create',
    component: Create,
  },
  {
    path: '/invitation',
    component: Invitation,
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