import {
  faAt,
  faBirthdayCake,
  faCog,
  faCreditCard,
  faSignOutAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

const currentDate = new Date();
const endDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000 * 10);
const profilePhotos: string[] = [
  '../../../assets/images/1.jpg',
  '../../assets/images/2.jpg',
  '../../assets/images/3.jpeg',
];

export const slideImages = [
  { src: 'app/dashboards/autocredit/assets/images/credit card.png' },
  { src: 'app/dashboards/autocredit/assets/images/credit card2.png' },
  { src: 'app/dashboards/autocredit/assets/images/credit card3.png' },
];

export const tableInfo = [
  {
    project: 'App Development',
    start: currentDate,
    end: endDate,
    team: profilePhotos,
    status: 'success',
  },
  {
    project: 'Logo Design',
    start: currentDate,
    end: endDate,
    team: profilePhotos,
    status: 'processing',
  },
  {
    project: 'Server setup',
    start: currentDate,
    end: endDate,
    team: profilePhotos,
    status: 'success',
  },
  {
    project: 'Front-end Design',
    start: currentDate,
    end: endDate,
    team: profilePhotos,
    status: 'processing',
  },
  {
    project: 'Web Development',
    start: currentDate,
    end: endDate,
    team: profilePhotos,
    status: 'success',
  },
];

export const klayveTable = [
  {
    project: 'App Development',
    manager: 'Chidimma',
    status: 'completed',
    dueDate: endDate,
  },
  {
    project: 'Logo Design',
    manager: 'Ade',
    status: 'pending',
    dueDate: endDate,
  },
  {
    project: 'Server setup',
    manager: 'Temi',
    status: 'in progress',
    dueDate: endDate,
  },
  {
    project: 'Front-end Design',
    manager: 'Halima',
    status: 'completed',
    dueDate: endDate,
  },
  {
    project: 'Web Development',
    manager: 'Ngozi',
    status: 'in progress',
    dueDate: endDate,
  },
];

export const progressInfo = [
  { value: 38, label: 'Less than 1 hour' },
  { value: 50, label: '1 - 3 hours' },
  { value: 75, label: 'More than 3 hours' },
  { value: 20, label: 'More than 6 hours' },
];

export const cardInfo = [
  {
    value: '23',
    icon: 'fa fa-users fa-2x',
    name: 'Clients',
  },
  {
    value: '162',
    icon: 'fa fa-tasks fa-2x',
    name: 'Projects',
  },
  {
    value: '49',
    icon: 'fa fa-shopping-bag fa-2x',
    name: 'Orders',
  },
  {
    value: '8000',
    icon: 'fa fa-money fa-2x',
    name: 'Income',
    money: true,
  },
];

export const projects = [
  {
    title: 'UI/UX',
    department: 'UI Team',
    status: 'review',
  },
  {
    title: 'Web Development',
    department: 'Frontend',
    status: 'in progress',
  },
  {
    title: 'App Upgrade',
    department: 'Mobile Team',
    status: 'pending',
  },
  {
    title: 'UI/UX',
    department: 'UI Team',
    status: 'review',
  },
  {
    title: 'Web Development',
    department: 'Frontend',
    status: 'in progress',
  },
  {
    title: 'App Upgrade',
    department: 'Mobile Team',
    status: 'pending',
  },
  {
    title: 'UI/UX',
    department: 'UI Team',
    status: 'review',
  },
  {
    title: 'Web Development',
    department: 'Frontend',
    status: 'in progress',
  },
  {
    title: 'App Upgrade',
    department: 'Mobile Team',
    status: 'pending',
  },
];

export const notifications = [
  {
    date: currentDate,
    icon: faAt,
    detail: '3 pending details need to be completed',
  },
  {
    date: currentDate,
    icon: faBirthdayCake,
    detail:
      'You still have a few more information to provide to complete your profile',
  },
  {
    date: currentDate,
    icon: faAt,
    detail: '3 pending details need to be completed',
  },
  {
    date: currentDate,
    icon: faBirthdayCake,
    detail:
      'You still have a few more information to provide to complete your profile',
  },
  {
    date: currentDate,
    icon: faAt,
    detail: '3 pending details need to be completed',
  },
  {
    date: currentDate,
    icon: faBirthdayCake,
    detail:
      'You still have a few more information to provide to complete your profile',
  },
  {
    date: currentDate,
    icon: faAt,
    detail: '3 pending details need to be completed',
  },
  {
    date: currentDate,
    icon: faBirthdayCake,
    detail:
      'You still have a few more information to provide to complete your profile',
  },
  {
    date: currentDate,
    icon: faAt,
    detail: '3 pending details need to be completed',
  },
  {
    date: currentDate,
    icon: faBirthdayCake,
    detail:
      'You still have a few more information to provide to complete your profile',
  },
];

export const profileOptions = [
  { icon: faUser, name: 'Profile' },
  { icon: faCog, name: 'Settings' },
  { icon: faCreditCard, name: 'Payments' },
  { icon: faSignOutAlt, name: 'Logout' },
];
