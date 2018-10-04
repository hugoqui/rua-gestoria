import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Autonomos from '@/components/Autonomos'
import Empresas from '@/components/Empresas'
import Presupuesto from '@/components/Presupuesto'
import Contacto from '@/components/Contacto'
import Servicios from '@/components/Servicios'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Home
    },
    {
      path: '/empresas',
      name: 'Empresas',
      component: Empresas
    },
    {
      path: '/tarifas',
      name: 'Presupuesto',
      component: Presupuesto
    },
    {
      path: '/contacto',
      name: 'Contacto',
      component: Contacto
    },
    {
      path: '/servicios',
      name: 'Servicios',
      component: Servicios
    },
    {
      path: '/autonomos',
      name: 'Autónomos',
      component: Autonomos
    }
  ],
  mode: 'history'
})