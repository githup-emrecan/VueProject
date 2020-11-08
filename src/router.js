import Vue from 'vue'
import Router from 'vue-router'
import Home from '../src/views/Home'
import login from '../src/views/Login'
import adres from '../src/views/Adress'
import shower from '../src/views/Shower'
import account from '../src/views/Infoaccount'
import product from '../src/views/Product'
import productdetails from '../src/views/ProductDetails'
import productcart from '../src/views/CartInfo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
     path: '/',
     name: 'home',
     component: Home
     },
   {
    path: '/login',
    name: 'login',
    component:login
   
   },
   {
    path: '/adress',
    name: 'adres',
    component:adres
   }
   ,
   {
    path: '/shower',
    name: 'shower',
    component:shower
  
   }
   ,
   {
    path: '/account',
    name: 'account',
    component:account
  
   }
   ,
   {
    path: '/product',
    name: 'product',
    component:product
  
   }
   ,
   {
    path: '/productdetails/:id',
    name: 'productdetails',
    component:productdetails
   },
   {
    path: '/productcart',
    name: 'productcart',
    component:productcart
   }
  ]
})
