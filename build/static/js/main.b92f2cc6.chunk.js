(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{21:function(e,t,a){e.exports=a(48)},26:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var o=a(1),n=a.n(o),c=a(8),l=a.n(c),i=(a(26),a(19)),r=a(11),s=a(18),d=a.n(s).a.initializeApp({apiKey:"AIzaSyChauZk7o7elT-_QSSe11jui8mmxX-OWco",authDomain:"todo-app-44e65.firebaseapp.com",databaseURL:"https://todo-app-44e65.firebaseio.com",projectId:"todo-app-44e65",storageBucket:"todo-app-44e65.appspot.com",messagingSenderId:"432765067293",appId:"1:432765067293:web:296b90f58b57e61293e6f4",measurementId:"G-LB5WBYC0L2"}).firestore(),u=(a(43),a(44),function(e){return n.a.createElement("div",{className:"todo"},n.a.createElement("div",{className:"todo-span"},n.a.createElement("span",{"data-id":e.id},e.title)),n.a.createElement("button",{value:e.value,onClick:e.deleteTodo,className:"deleteBtn"}))}),m=a(55),p=a(54),f=a(56);var b=function(){var e=Object(o.useState)(""),t=Object(r.a)(e,2),a=t[0],c=t[1],l=Object(o.useState)([]),s=Object(r.a)(l,2),b=s[0],v=s[1],E=Object(o.useState)(!1),O=Object(r.a)(E,2),h=O[0],g=O[1],j=Object(o.useState)([]),w=Object(r.a)(j,2),S=w[0],k=w[1];Object(o.useEffect)((function(){d.collection("todos").onSnapshot((function(e){k(e.docs.map((function(e){return{id:e.id,data:e.data()}}))),v(e.docs.map((function(e){return e.data().title}))),g(!0)}))}),[]);var N=function(e){e.preventDefault();var t=e.target.value;d.collection("todos").doc(S[t].id).delete()};return n.a.createElement("div",{id:"bootstrap-overrides",className:"App"},n.a.createElement("h1",null,"Todo App"),n.a.createElement("form",{className:"form-inline"},n.a.createElement("input",{className:"form-control todo-input",value:a,onChange:function(e){return c(e.target.value)},type:"text"}),n.a.createElement("button",{className:"addBtn",disabled:!a,type:"submit",onClick:function(e){e.preventDefault(),console.log("BOOM >",a),d.collection("todos").add({title:a}),c(""),console.log(h),console.log([].concat(Object(i.a)(b),[a]))}},"ADD TODO")),n.a.createElement(m.a,null,n.a.createElement("div",{className:"todo-wrapper"},b.map((function(e,t){return n.a.createElement(p.a,{in:h,timeout:300,classNames:"scaleIn",unmountOnExit:!0},n.a.createElement(u,{title:e,value:t,key:Object(f.a)(),deleteTodo:N}))})))))};a(47),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.b92f2cc6.chunk.js.map