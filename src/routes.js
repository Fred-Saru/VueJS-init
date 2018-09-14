import Home from './components/Home';
import User from './components/user/User';
import UserDetail from './components/user/UserDetail';
import UserEdit from './components/user/UserEdit';
import UserStart from './components/user/UserStart';

export const routes = [
    { path: '', component: Home },
    { path: '/user/:id', component: User },
    { path: '/user/:id/detail', component: UserDetail },
    { path: '/user/:id/edit', component: UserEdit },
    { path: '/user/:id/start', component: UserStart }
];