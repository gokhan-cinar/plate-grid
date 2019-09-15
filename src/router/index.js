import Vue from 'vue'
import Router from 'vue-router'
import Settings from "../pages/Settings";
import TableContent from "../pages/TableContent";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/table',
      name: 'TableContent',
      component: TableContent
    }
  ]
})
