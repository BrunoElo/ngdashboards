import {
  faArchive,
  faChartBar,
  faCog,
  faEnvelope,
  faTasks,
  faThLarge,
  faUser,
  faUsers,
  faWrench,
} from '@fortawesome/free-solid-svg-icons';
import { sideMenu } from '../models/menu';

// Trenly
export const sidebarMenus: sideMenu[] = [
  { icon: 'fa fa-th-large fa-lg', name: 'Dashboard', link: '' },
  { icon: 'fa fa-tasks fa-lg', name: 'Tasks', link: '' },
  { icon: 'fa fa-users fa-lg', name: 'Clients', link: '' },
  { icon: 'fa fa-wrench fa-lg', name: 'Services', link: '' },
  { icon: 'fa fa-cog fa-lg', name: 'Settings', link: '' },
  { icon: 'fa fa-envelope fa-lg', name: 'Messages', link: '' },
  { icon: 'fa fa-user fa-lg', name: 'Profile', link: '' },
  { icon: 'fa fa-bar-chart fa-lg', name: 'Performance', link: '' },
];

// Drulister
export const drulisterMenus: sideMenu[] = [
  { icon: 'fa fa-th-large fa-lg', name: 'Dashboard', link: 'dashboard' },
  { icon: 'fa fa-users fa-lg', name: 'Clients', link: 'clients' },
  { icon: 'fa fa-tasks fa-lg', name: 'Projects', link: 'projects' },
  { icon: 'fa fa-user fa-lg', name: 'Profile', link: 'profile' },
  { icon: 'fa fa-bar-chart fa-lg', name: 'Performance', link: 'performance' },
  { icon: 'fa fa-envelope fa-lg', name: 'Messages', link: 'messages' },
  { icon: 'fa fa-archive fa-lg', name: 'Inventory', link: 'inventory' },

  { icon: 'fa fa-wrench fa-lg', name: 'Services', link: 'services' },
  { icon: 'fa fa-cog fa-lg', name: 'Settings', link: 'settings' },
];

// Klayve
export const klayveMenus: sideMenu[] = [
  { icon: faThLarge, name: 'Dashboard', link: 'dashboard' },
  { icon: faUsers, name: 'Clients', link: 'clients' },
  { icon: faTasks, name: 'Projects', link: 'projects' },
  { icon: faUser, name: 'Profile', link: 'profile' },
  { icon: faChartBar, name: 'Performance', link: 'performance' },
  { icon: faEnvelope, name: 'Messages', link: 'messages' },
  { icon: faArchive, name: 'Inventory', link: 'inventory' },

  { icon: faWrench, name: 'Services', link: 'services' },
  { icon: faCog, name: 'Settings', link: 'settings' },
];
