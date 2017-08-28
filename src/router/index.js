/*import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
*/

import App from '../App'
import Home from '../page/home'
import Main from '../page/main'
import Inline from '../page/inline'
import First from '../page/first'
import Second from '../page/second'
import Third from '../page/third'
import Forth from '../page/forth'

export default [{
    path: '/',
    component: Main,
    children: [{
      path: '/home',
      name:'home',
      component:Home,
      children: [{
        path: 'first',
        name:'first',
        component:First
      },{
        path: 'second',
        name:'second',
        component:Second
      },{
        path: 'third',
        name:'third',
        component:Third
      },{
        path: 'forth',
        name:'forth',
        component:Forth
      }]
    },{
      path: '/inline',
      name:'inline',
      component: Inline
    }]
}]