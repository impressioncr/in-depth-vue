import Router from 'vue-router'
import routes from './routes'

export default () => {
  return new Router({
    routes,
    mode: 'history',
    fallback: true,
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    }
    // linkActiveClass: '',
    // linkExactActiveClass: '',
  })
}
