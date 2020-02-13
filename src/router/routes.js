import Login from "../pages/Login";
import dashboard from "../pages/dashboard";
import tables from "../pages/menu/tables";
import forms from "../pages/menu/forms"
import notifications from "../pages/menu/notifications"
import graphs from "../pages/menu/graphs"

const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: Login },
    ],
  },
  {
    path: '/',
    component: () => import('layouts/AdminPanel.vue'),
    children: [
      { path: 'dashboard', component: dashboard },
      { path: 'tables', component: tables },
      { path: 'forms', component: forms },
      { path: 'notifications', component: notifications},
      { path: 'graphs', component: graphs},
    ],
  },
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
