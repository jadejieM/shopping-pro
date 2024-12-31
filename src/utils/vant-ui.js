// 按需导入
import Vue from 'vue' // 注意，这里Vue是一定要导入的，因为下面用到了

import { Button, Switch, Rate, Tabbar, TabbarItem, NavBar, Toast, Search, Swipe, SwipeItem, Grid, GridItem, Image as VanImage, Icon, ActionSheet, Dialog, Checkbox, Tab, Tabs } from 'vant'

// 全局注册
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Checkbox)
Vue.use(Dialog)
Vue.use(ActionSheet)
Vue.use(Icon)
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
