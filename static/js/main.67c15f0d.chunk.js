(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{18:function(e,t,a){e.exports=a(41)},23:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(12),o=a.n(r);a(23);var c=function(){return l.a.createElement("form",{className:"form-inline my-2 my-lg-0"},l.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),l.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Search"))};var s=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-dark"},l.a.createElement("a",{className:"navbar-brand",href:"#"},"Employee Directory"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement(c,null))},m=a(13),i=a(14),u=a(16),p=a(15),h=a(17),d=a(2),f=a.n(d),g=function(){return f.a.get("https://randomuser.me/api/?results=200&nat=us/")},E=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={employees:[]},a.handleFirstNameSort=function(){console.log("click"),console.log(a.state.employees);var e=a.state.employees;e.sort((function(e,t){return e.name.first<t.name.first?-1:e.name.first>t.name.first?1:0})),console.log(e),a.setState({employees:e}),console.log(a.state.employees)},a.handleLastNameSort=function(){console.log("clicking");var e=a.state.employees;e.sort((function(e,t){return e.name.last<t.name.last?-1:e.name.last>t.name.last?1:0})),a.setState({employees:e})},a.loadAll=function(){g().then((function(e){var t=e.data.results;console.log(t),a.setState({employees:t})}))},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.loadAll()}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Image"),l.a.createElement("th",{onClick:this.handleFirstNameSort},"First Name"),l.a.createElement("th",{onClick:this.handleLastNameSort},"Last Name"),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"Phone Number")),this.state.employees.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("img",{src:e.picture.thumbnail})),l.a.createElement("td",null,e.name.first),l.a.createElement("td",null,e.name.last),l.a.createElement("td",null,e.email),l.a.createElement("td",null,e.cell))}))))}}]),t}(n.Component);var b=function(){return l.a.createElement("div",null,l.a.createElement(s,null),l.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.67c15f0d.chunk.js.map