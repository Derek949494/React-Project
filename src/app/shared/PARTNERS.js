import CowFarmLogo from '../assets/cows.jpeg';
import BerryFarmLogo from '../assets/berries.jpeg';
import FlourMillLogo from '../assets/flour.jpeg';
import RoastedBeansLogo from '../assets/beanssmall.jpeg';

export const PARTNERS = [
    {
        id: 0,
        name: 'The Roasted Bean Coffee Farm',
        image: RoastedBeansLogo,
        featured: false,
        description:
            "Our #1 source for all things coffee. The best roasted coffee beans on the West Coast"
    }, 
    {
        id: 1,
        name: 'Very Berry Farms',
        image: BerryFarmLogo,
        featured: false,
        description:
            'Our local one-stop-shop for all things berries!'
    },
    {
        id: 2,
        name: 'Dough Boys Flour Mill',
        image: FlourMillLogo,
        featured: false,
        description:
            'Locally made, providing that fresh taste you love.'
    },
    {
        id: 3,
        name: 'Cozy Cow Dairy Farm',
        image: CowFarmLogo,
        featured: true,
        description:
            'A local dairy farm we love to visit for all our dairy needs.'
    }
];