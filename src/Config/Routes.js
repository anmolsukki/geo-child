import React from 'react';
import DefaultLayout from '../Containers';

const Home = React.lazy(() => import('../Views/Home'));
const About = React.lazy(() => import('../Views/About'));
const Contact = React.lazy(() => import('../Views/Contact'));

const Routes = [
  { path: '/', name: 'Main', component: DefaultLayout, exact: true },
  { path: '/home', name: 'Home', component: Home, exact: true, isPrivate: false },
  { path: '/about', name: 'About', component: About, exact: true, isPrivate: false },
  { path: '/contact', name: 'Contact', component: Contact, exact: true, isPrivate: false },
];

export default Routes;
