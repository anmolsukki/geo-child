import React from 'react';
import DefaultLayout from '../Containers';

const Home = React.lazy(() => import('../Views/Home/Home'));
const ItemDetails = React.lazy(() => import('../Views/ItemDetails/ItemDetails'));
const About = React.lazy(() => import('../Views/About/AboutPage'));
const Contact = React.lazy(() => import('../Views/Contact/Contact'));
const Team = React.lazy(() => import('../Views/Team/Team'));
const Magazines = React.lazy(() => import('../Views/Magazine/Magazines'));
const ViewMagazine = React.lazy(() => import('../Views/Magazine/ViewMagazine'));
const Login = React.lazy(() => import('../Views/Auth/Login/Login'));
const Register = React.lazy(() => import('../Views/Auth/Register/Register'));
const ProfilePage = React.lazy(() => import('../Views/Profile/ProfilePage'));

const Routes = [
  { path: '/', name: 'Main', component: DefaultLayout, exact: true },
  { path: '/home', name: 'Home', component: Home, exact: true },
  { path: '/home/:id', name: 'ItemDetails', component: ItemDetails, exact: true },
  { path: '/about', name: 'About', component: About, exact: true },
  { path: '/contact', name: 'Contact', component: Contact, exact: true },
  { path: '/team', name: 'Team', component: Team, exact: true },
  { path: '/magazine', name: 'Magazines', component: Magazines, exact: true },
  {
    path: '/profile/:id',
    name: 'ViewMagazine',
    component: ViewMagazine,
    exact: true,
    isPrivate: true,
  },
  { path: '/login', name: 'Login', component: Login, exact: true },
  { path: '/register', name: 'Register', component: Register, exact: true },
  { path: '/profile', name: 'ProfilePage', component: ProfilePage, exact: true, isPrivate: true },
];

export default Routes;
