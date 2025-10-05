import User from '@/icons/lineal/User';
import Gift from '@/icons/lineal/Gift';
import Check from '@/icons/lineal/Check';
import IdCard from '@/icons/lineal/IdCard';
import ChatTwo from '@/icons/lineal/ChatTwo';
import Browser from '@/icons/lineal/Browser';
import { LinkType } from '@/types/demo-1';
import BriefcaseTwo from '@/icons/lineal/BriefcaseTwo';

const services = [
  {
    id: 1,
    link: '#',
    Icon: Browser,
    title: 'Residential Cleaning',
    linkType: LinkType.yellow,
    iconClassName: 'icon-svg-md text-yellow mb-3',
    cardClassName: 'card-border-bottom border-soft-yellow',
    description: `Professional home cleaning services tailored to your needs. We ensure every corner of your home sparkles with cleanliness.`
  },
  {
    id: 2,
    link: '#',
    Icon: ChatTwo,
    title: 'Deep Cleaning',
    linkType: LinkType.green,
    iconClassName: 'icon-svg-md text-green mb-3',
    cardClassName: 'card-border-bottom border-soft-green',
    description: `Comprehensive deep cleaning solutions for a thorough refresh. Perfect for seasonal cleaning or special occasions.`
  },
  {
    id: 3,
    link: '#',
    Icon: IdCard,
    linkType: LinkType.orange,
    title: 'Office Cleaning',
    iconClassName: 'icon-svg-md text-orange mb-3',
    cardClassName: 'card-border-bottom border-soft-orange',
    description: `Keep your workplace spotless and professional. We work around your schedule to minimize disruption.`
  },
  {
    id: 4,
    link: '#',
    Icon: Gift,
    linkType: LinkType.blue,
    title: 'Sanitization Services',
    iconClassName: 'icon-svg-md text-blue mb-3',
    cardClassName: 'card-border-bottom border-soft-blue',
    description: `Advanced sanitization and disinfection services. Protect your space with our eco-friendly cleaning products.`
  }
];

const processList = [
  {
    no: '1',
    className: 'me-lg-6',
    title: 'Book Online',
    subtitle: 'Choose your service, select a date and time that works for you. Get instant confirmation.'
  },
  {
    no: '2',
    title: 'We Clean',
    className: 'ms-lg-13 mt-6',
    subtitle: 'Our professional team arrives on time with all equipment and eco-friendly supplies ready to work.'
  },
  {
    no: '3',
    title: 'Enjoy Your Space',
    className: 'mx-lg-6 mt-6',
    subtitle: `Relax in your spotless space. We guarantee you'll love the results or we'll make it right.`
  }
];

const factList = [
  { id: 1, number: 7518, title: 'Completed Projects', Icon: Check },
  { id: 2, number: 3472, title: 'Happy Customers', Icon: User },
  { id: 3, number: 2184, title: 'Expert Employees', Icon: BriefcaseTwo }
];

const reviews = [
  {
    id: 1,
    name: 'Coriss Ambady',
    designation: 'Financial Analyst',
    review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta. Cras mattis consectetur.`
  },
  {
    id: 2,
    name: 'Cory Zamora',
    designation: 'Marketing Specialist',
    review: `Fusce dapibus, tellus ac cursus tortor mauris condimentum fermentum massa justo sit amet purus sit amet fermentum.`
  },
  {
    id: 3,
    name: 'Nikolas Brooten',
    designation: 'Sales Manager',
    review: `Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor eu rutrum. Nulla vitae libero.`
  },
  {
    id: 4,
    name: 'Coriss Ambady',
    designation: 'Financial Analyst',
    review: `Etiam adipiscing tincidunt elit convallis felis suscipit ut. Phasellus rhoncus eu tincidunt auctor nullam rutrum, pharetra augue.`
  }
];

export { services, processList, factList, reviews };
