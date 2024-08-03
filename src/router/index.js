import { createRouter, createMemoryHistory } from 'vue-router'
import PlayerPanel from '../views/PlayerPanel.vue'
import SearchPanel from '../views/SearchPanel.vue'
import SearchHook from '../views/SearchHook.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/search/:query',
      name: 'search',
      component: SearchPanel,
      props: true
    },
    {
      path: '/search_/:query',
      name: 'searchHook',
      component: SearchHook,
      props: true
    },
    {
      path: '/track/:trackID',
      name: 'player',
      component: PlayerPanel,
      props: true
    }
  ]
})

export default router
