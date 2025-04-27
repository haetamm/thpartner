import {
  AnFilledHome,
  CaUserAvatarFilled,
  CaEarthFilled,
  AnOutlinedFileDone,
  MdSharpMoreTime
} from '@kalimahapps/vue-icons';
import FacebookIcon from '~/components/icons/FacebookIcon.vue';
import InstagramIcon from '~/components/icons/InstagramIcon.vue';
import YoutubeIcon from '~/components/icons/YoutubeIcon.vue';

export const times = ['08:00', '9:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'];

export const splitItemsIntoGroups = (times) => {
  const timeGroup = [];
  const groupSize = 4;
  for (let i = 0; i < times.length; i += groupSize) {
    const group = times.slice(i, i + groupSize);
    timeGroup.push(group);
  }
  return timeGroup;
};

export const allowedDates = (val) => {
  const selectedDate = new Date(val);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const thirtyDaysLater = new Date();
  thirtyDaysLater.setDate(thirtyDaysLater.getDate() + 30);

  return (
    selectedDate >= today &&
    selectedDate <= thirtyDaysLater &&
    selectedDate.getDay() !== 0 &&
    selectedDate.getDay() !== 6
  );
};

export function getDescription (desc) {
  const cleanedString = desc.replace(/<\/?div>/g, '');

  const trimmedString = cleanedString.substring(0, 120);

  return `${trimmedString}...`;
}

export const navLinks = [
  { label: 'Home', path: '/', text: 'HOME', icon: AnFilledHome },
  { label: 'Team', path: '/team', text: 'TEAM', icon: CaUserAvatarFilled },
  { label: 'Location', path: '/location', text: 'LOCATION', icon: CaEarthFilled },
  { label: 'Appointment', path: '/appointment', text: 'APPOINTMENT', icon: MdSharpMoreTime },
  { label: 'Service', path: '/service', text: 'SERVICES', icon: AnOutlinedFileDone }
];

export const socmedLinks = [
  { label: 'go to instagram', path: 'https://www.instagram.com', icon: InstagramIcon },
  { label: 'go to facebook', path: 'https://id-id.facebook.com', icon: FacebookIcon },
  { label: 'https://www.youtube.com', path: 'https://www.youtube.com', icon: YoutubeIcon }
];
