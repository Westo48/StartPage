(this.webpackJsonpstartpage=this.webpackJsonpstartpage||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/entertainment.e7541885.svg"},21:function(e,t,a){e.exports=a.p+"static/media/code.369ce179.svg"},22:function(e,t,a){e.exports=a.p+"static/media/eye.42668b69.svg"},23:function(e,t,a){e.exports=a(36)},28:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),l=a.n(c),s=(a(28),a(12)),i=a(1),o=(a(29),a(6)),m=a(7),u=a(9),h=a(8),p=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4"},"Hello There"),r.a.createElement(s.b,{to:"StartPage/weston",className:"btn btn-primary"},"Weston"),r.a.createElement("h1",{className:"display-4"},"General Kenobi"))}}]),a}(n.Component),d=(a(35),a(20)),g=a.n(d),v=a(21),E=a.n(v),f=a(22),w=a.n(f),y=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={date:new Date},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4 text-center"},this.state.date.toLocaleTimeString()))}}]),a}(n.Component),b=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"link-set-links"},this.props.links.filter((function(t){return t.category===e.props.category})).map((function(e){return r.a.createElement("div",{key:e.url},r.a.createElement("a",{href:e.url,className:"lead"},e.name))})))}}]),a}(n.Component),k=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={links:[{name:"Netflix",url:"https://www.netflix.com/browse",category:"Entertain"},{name:"Hulu",url:"https://www.hulu.com/",category:"Entertain"},{name:"Disney+",url:"https://www.disneyplus.com/",category:"Entertain"},{name:"Funimation",url:"https://www.funimation.com/",category:"Entertain"},{name:"YouTube",url:"https://www.youtube.com/",category:"Entertain"},{name:"GitHub",url:"https://github.com/",category:"Dev"},{name:"StackOverflow",url:"https://stackoverflow.com/",category:"Dev"},{name:"Clash Blog",url:"https://clashofclans.com/blog/",category:"Gaming"},{name:"Clash Ninja",url:"https://www.clash.ninja/upgrade-tracker/rgq8rgu9/home#builders",category:"Gaming"},{name:"Clash of Stats",url:"https://www.clashofstats.com/players/razgriz-RGQ8RGU9/summary",category:"Gaming"}]},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.links;return r.a.createElement("div",{className:"westonContainer"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-2 text-center"},"Hello Weston"),r.a.createElement(y,null),r.a.createElement("div",{className:"link-set-group row text-center"},r.a.createElement("div",{className:"link-set col-md-4 mb-3"},r.a.createElement("div",{className:"link-set-head"},r.a.createElement("img",{src:g.a,alt:"Entertainment",className:"mb-3"})),r.a.createElement(b,{links:e,category:"Entertain"})),r.a.createElement("div",{className:"link-set col-md-4 mb-3"},r.a.createElement("div",{className:"link-set-head"},r.a.createElement("img",{src:E.a,alt:"Code",className:"mb-3"})),r.a.createElement(b,{links:e,category:"Dev"})),r.a.createElement("div",{className:"link-set col-md-4 mb-3"},r.a.createElement("div",{className:"link-set-head"},r.a.createElement("img",{src:w.a,alt:"Gaming",className:"mb-3"})),r.a.createElement(b,{links:e,category:"Gaming"})))))}}]),a}(n.Component);var N=function(){return r.a.createElement(s.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/StartPage/",component:p}),r.a.createElement(i.a,{exact:!0,path:"/StartPage/weston",component:k})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.8e9ac579.chunk.js.map