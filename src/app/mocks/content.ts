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
