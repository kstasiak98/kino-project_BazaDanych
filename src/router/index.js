import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../components/HomePage.vue';
import LoginPage from '../profile/LoginPage.vue';
import RepertoirePage2 from '../new-films/RepertoirePage2.vue';
import ProfilePage from '../profile/ProfilePage.vue';
import ShopPage from '../shop/ShopPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    component: HomePage,
  }, {
    path: '/login',
    name: 'Login',
    component: LoginPage,
  }, {
    path: '/login/profile',
    name: 'Profile',
    component: ProfilePage,
  }, {
    path: '/repertoire',
    name: 'Repertoire',
    component: RepertoirePage2,
  }, {
    path: '/store',
    name: 'Store',
    component: ShopPage,
  }],
});
