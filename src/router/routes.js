import Login from "../pages/Login";

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
      { path: 'dashboard', component: () => import('pages/Index.vue') },
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
