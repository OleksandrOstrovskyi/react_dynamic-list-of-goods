(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var o=n(6),r=n.n(o),s=n(4),c=n(3),a=n(7),u=n(8),i=n(10),d=n(9),l=n(1),h=n.n(l),f=n(2),b=n.n(f),j=n(0),p=function(t){var e=t.goods;return Object(j.jsx)("ul",{children:e.map((function(t){return Object(j.jsx)("li",{style:{color:"".concat(t.color)},children:t.name},t.id)}))})},m=(n(17),"https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json");function O(){return fetch(m).then((function(t){return t.json()}))}var g=function(){return fetch(m).then((function(t){return t.json()})).then((function(t){return t.sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5)}))},v=function(){return fetch(m).then((function(t){return t.json()})).then((function(t){return t.filter((function(t){return"red"===t.color}))}))},w=function(t){Object(i.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(a.a)(this,n);for(var o=arguments.length,r=new Array(o),u=0;u<o;u++)r[u]=arguments[u];return(t=e.call.apply(e,[this].concat(r))).state={goods:[]},t.showAllGoods=Object(c.a)(h.a.mark((function e(){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:n=e.sent,t.setState({goods:Object(s.a)(n)});case 4:case"end":return e.stop()}}),e)}))),t.show5FirstGoods=Object(c.a)(h.a.mark((function e(){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:n=e.sent,t.setState({goods:Object(s.a)(n)});case 4:case"end":return e.stop()}}),e)}))),t.showRedGoods=Object(c.a)(h.a.mark((function e(){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:n=e.sent,t.setState({goods:Object(s.a)(n)});case 4:case"end":return e.stop()}}),e)}))),t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.goods;return Object(j.jsxs)("body",{className:"body m-4",children:[Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("button",{type:"button",className:"button",onClick:this.showAllGoods,children:"Load all goods"}),Object(j.jsx)("button",{type:"button",className:"button",onClick:this.show5FirstGoods,children:"Load 5 first goods"}),Object(j.jsx)("button",{type:"button",className:"button",onClick:this.showRedGoods,children:"Load red goods"})]}),Object(j.jsx)(p,{goods:t})]})}}]),n}(b.a.Component),x=w;n(18);r.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.b643c8cb.chunk.js.map