import App from './App'
import Home from './components/home.vue'
import Logo from './components/logo.vue'
import Speak from './components/speak.vue'
import Picture from './components/picture.vue'
import Items from './components/items.vue'

const routers = [
    {
        path:"/",
        component:Home
    },
    {
        path:"/home",
        name:"home",
        component:Home
    },
    {
        path:"/logo",
        name:"logo",
        component:Logo
    },
    {
        path:"/speak",
        name:"speak",
        component:Speak
    },
    {
        path:"/picture",
        name:"picture",
        component:Picture
    },
    {
        path:"/items",
        name:"items",
        component:Items
    },
    {
        path:'*',
        component:App
    }
];

export default routers

