import Home from './pages/Home.vue';
import Donors from './pages/Donors.vue';
import DonorDetails from './pages/DonorDetails.vue';
import AsDonor from './pages/AsDonor.vue';
import RequestAsDoctor from './pages/RequestAsDoctor.vue';
import Search from './pages/Search.vue';
import ContactUs from './pages/ContactUs.vue';
import SearchWithCity from './pages/SearchWithCity.vue';

export const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/search-donors/:group',
        component: Search
    },
    {
        path: '/search-donors',
        name: 'search-donors',
        component: SearchWithCity
    },
    {
        path: '/donors',
        name: 'donors',
        component: Donors
    },
    {
        path: '/donors-details/:key',
        name: 'donors-details',
        component: DonorDetails
    },
    {
        path: '/as-donor',
        name: 'as-donor',
        component: AsDonor
    },
    {
        path: '/request-as-doctor',
        name: 'request-as-doctor',
        component: RequestAsDoctor
    },
    {
        path: '/contact-us',
        name: 'contact-us',
        component: ContactUs,
        meta: {
            title: 'About Us',
        }
    }
]