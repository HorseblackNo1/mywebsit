import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Main from '@/components/main.vue'
// import index from '@/views/index.vue'
import sitesEnable from '@/views/apache/sites-enable.vue'
import order from '@/views/linux/order.vue'
import php from '@/views/php/php.vue'
import xcxIntro from '@/views/xcx/xcx.vue'
import VueIntro from '@/views/vue/vue.vue'
import wxs from '@/views/xcx/wxs.vue'
import nodeIntro from '@/views/node/node.vue'
import Draggable from '@/views/vuedraggable/draggable.vue'
import LogicFlow from '@/views/logicFlow/logicFlow.vue'
import fsMp from '@/views/fs/fsmp.vue'
import offtemp from '@/views/offocalTemplates/offocalTemplates.vue'
import vuePress from '@/views/vuePress/vuePress.vue'
export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/sites_enable',
      component: Main,
      meta: {
        hideInMenu: true,
        notCache: true
      },
      children: [
        {
          path: '/sites_enable',
          name: 'sites_enable',
          meta: {
            hideInMenu: true,
            title: '首页',
            notCache: true,
            icon: 'md-home'
          },
          component: sitesEnable
        }
      ]
    },
    {
      path: '/order',
      component: Main,
      children: [
        {
          path: '/order_page',
          name: 'order',
          meta: {
            hideInMenu: true,
            title: 'order',
            notCache: true,
            icon: 'md-home'
          },
          component: order
        }
      ]
    },
    {
      path: '/php',
      component: Main,
      children: [
        {
          path: '/php_page',
          name: 'php',
          meta: {
            hideInMenu: true,
            title: 'php',
            notCache: true,
            icon: 'md-home'
          },
          component: php
        }
      ]
    },
    {
      path: '/xcxIntro',
      component: Main,
      children: [
        {
          path: '/xcxIntro',
          name: 'xcxIntro',
          meta: {
            hideInMenu: true,
            title: 'xcxIntro',
            notCache: true,
            icon: 'md-home'
          },
          component: xcxIntro
        },
        {
          path: '/wxs',
          name: 'wxs',
          meta: {
            hideInMenu: true,
            title: 'wxs',
            notCache: true,
            icon: 'md-home'
          },
          component: wxs
        }
      ]
    },
    {
      path: '/VueIntro',
      component: Main,
      children: [
        {
          path: '/VueIntro',
          name: 'VueIntro',
          meta: {
            hideInMenu: true,
            title: 'VueIntro',
            notCache: true,
            icon: 'md-home'
          },
          component: VueIntro
        }
      ]
    },
    {
      path: '/nodeIntro',
      component: Main,
      children: [
        {
          path: '/nodeIntro',
          name: 'nodeIntro',
          meta: {
            hideInMenu: true,
            title: 'nodeIntro',
            notCache: true,
            icon: 'md-home'
          },
          component: nodeIntro
        }
      ]
    },
    {
      path: '/vuedraggable',
      component: Main,
      children: [
        {
          path: '/vuedraggable',
          name: 'vueDraggable',
          meta: {
            hideInMenu: true,
            title: 'vuedraggable',
            notCache: true,
            icon: 'md-home'
          },
          component: Draggable
        }
      ]
    },  
    {
      path: '/vuelogicFlow',
      component: Main,
      children: [
        {
          path: '/vuelogicFlow',
          name: 'vueLogicFlow',
          meta: {
            hideInMenu: true,
            title: 'vuedraggable',
            notCache: true,
            icon: 'md-home'
          },
          component: LogicFlow
        }
      ]
    },  
    {
      path: '/FsMp',
      component: Main,
      children: [
        {
          path: '/FsMp',
          name: 'fsmp',
          meta: {
            hideInMenu: true,
            title: 'vuedraggable',
            notCache: true,
            icon: 'md-home'
          },
          component: fsMp
        }
      ]
    },
    {
      path: '/offtemp',
      component: Main,
      children: [
        {
          path: '/offtemp',
          name: 'offtemplates',
          meta: {
            hideInMenu: true,
            title: 'offtemp',
            notCache: true,
            icon: 'md-home'
          },
          component: offtemp
        }
      ]
    },
    {
      path: '/vuePress',
      component: Main,
      children: [
        {
          path: '/vuePress',
          name: 'vuepress',
          meta: {
            hideInMenu: true,
            title: 'vuePress',
            notCache: true,
            icon: 'md-home'
          },
          component: vuePress
        }
      ]
    },
    
    





    

  ]
})