// 按需导入
import Vue from 'vue' // 注意，这里Vue是一定要导入的，因为下面用到了

import { Button, Switch, Rate, Tabbar, TabbarItem, NavBar, Toast, Search, Swipe, SwipeItem, Grid, GridItem, Image as VanImage } from 'vant'

Vue.use(VanImage)
Vue.use(GridItem)
Vue.use(Grid)
Vue.use(SwipeItem)
Vue.use(Swipe)
Vue.use(Search)
Vue.use(Toast)
Vue.use(NavBar)
Vue.use(Rate)
Vue.use(Button)
Vue.use(Switch)
Vue.use(Tabbar)
Vue.use(TabbarItem)
