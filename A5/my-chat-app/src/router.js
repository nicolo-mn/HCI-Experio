import { createRouter, createWebHistory } from 'vue-router'
import SignUp from './components/SignUp.vue'
import LeTueZone from './components/LeTueZone.vue'
import Home from './components/Home.vue'
import TuttiViaggi from './components/TuttiViaggi.vue'
import Profilo from './components/Profilo.vue'
import DaiUnConsiglio from './components/DaiUnConsiglio.vue'
import ListaChat from './components/ListaChat.vue'
import BachecaGenerale from './components/BachecaGenerale.vue'
import BachecaViaggioSingolo from './components/BachecaViaggioSingolo.vue'
import ConsigliDati from './components/ConsigliDati.vue'
import NuovoViaggio from './components/NuovoViaggio.vue'

const routes = [
    { path: '/', component: SignUp },
    { path: '/le-tue-zone', component: LeTueZone },
    { path: '/home', component: Home },
    { path: '/tutti-viaggi', component: TuttiViaggi },
    { path: '/profilo', component: Profilo },
    { path: '/dai-un-consiglio', component: DaiUnConsiglio },
    { path: '/lista-chat', component: ListaChat },
    { path: '/bacheca-generale', component: BachecaGenerale },
    { path: '/bacheca-viaggio-singolo', component: BachecaViaggioSingolo },
    { path: '/consigli-dati', component: ConsigliDati },
    { path: '/nuovo-viaggio', component: NuovoViaggio },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
