const currentDate = new Date();
const endDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000 * 10);
const profilePhotos: string[] = [
  '../../../assets/images/1.jpg',
  '../../assets/images/2.jpg',
  '../../assets/images/3.jpeg',
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
