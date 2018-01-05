import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Item from '@/components/Item'
import Score from '@/components/Score'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children:[
      	{
	      	path:'',
	      	component:Home
	      },
	      {
	      	path:'/item',
	      	component:Item
	      },
	      {
	      	path:'/score',
	      	component:Score
	      }
      ]
    }
  ]
})
