"use strict";(self["webpackChunkshopping_proj"]=self["webpackChunkshopping_proj"]||[]).push([[98],{7098:function(t,s,r){r.r(s),r.d(s,{default:function(){return l}});r(4114);var o=function(){var t=this,s=t._self._c;return s("div",{staticClass:"search"},[s("van-nav-bar",{attrs:{fixed:"",title:"商品列表","left-arrow":""},on:{"click-left":function(s){return t.$router.go(-1)}}}),s("van-search",{attrs:{readonly:"",shape:"round",background:"#ffffff",value:t.querySearch||"搜索商品","show-action":""},on:{click:function(s){return t.$router.push("/search")}},scopedSlots:t._u([{key:"action",fn:function(){return[s("van-icon",{staticClass:"tool",attrs:{name:"apps-o"}})]},proxy:!0}])}),t._m(0),s("div",{staticClass:"goods-list"},t._l(t.proList,(function(t){return s("GoodsItem",{key:t.goods_id,attrs:{item:t}})})),1)],1)},e=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"sort-btns"},[s("div",{staticClass:"sort-item"},[t._v("综合")]),s("div",{staticClass:"sort-item"},[t._v("销量")]),s("div",{staticClass:"sort-item"},[t._v("价格 ")])])}],a=r(5066),n=r(7867),i={name:"SearchList",data(){return{page:1,proList:[]}},components:{GoodsItem:a.A},computed:{querySearch(){return this.$route.query.search}},async created(){const{data:{list:t}}=await(0,n.Cd)({categoryId:this.$route.query.categoryId,goodsName:this.querySearch,page:this.page});this.proList=t.data}},c=i,u=r(1656),d=(0,u.A)(c,o,e,!1,null,"25f3f517",null),l=d.exports},7867:function(t,s,r){r.d(s,{B7:function(){return a},Cd:function(){return e},Yv:function(){return n}});var o=r(5720);const e=t=>{const{categoryId:s,goodsName:r,page:e}=t;return o.A.get("/goods/list",{params:{categoryId:s,goodsName:r,page:e}})},a=t=>o.A.get("/goods/detail",{params:{goodsId:t}}),n=(t,s)=>o.A.get("/comment/listRows",{params:{goodsId:t,limit:s}})}}]);
//# sourceMappingURL=98.1ecf40ff.js.map