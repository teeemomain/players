(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,a,t){e.exports=t(69)},44:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(34),l=t.n(c),o=(t(44),t(5)),s=t(6),i=t(8),u=t(7),m=t(9),p=t(14),d=t(15),v=t(2),h=t.n(v),f=t(12),b=t(38),E=t(19),y=t(13),g=t.n(y),N=n.a.createContext(),j=function(e,a){switch(a.type){case"DELETE_PLAYER":return Object(E.a)({},e,{players:e.players.filter(function(e){return e.id!==a.payload})});case"ADD_PLAYER":return Object(E.a)({},e,{players:[a.payload].concat(Object(b.a)(e.players))});case"UPDATE_PLAYER":return Object(E.a)({},e,{players:e.players.map(function(e){return e.id===a.payload.id?e=a.payload:e})});default:return e}},O=function(e){function a(){var e,t;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={players:[],dispatch:function(e){return t.setState(function(a){return j(a,e)})}},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(h.a.mark(function e(){var a;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://jsonplaceholder.typicode.com/users");case 2:a=e.sent,this.setState({players:a.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return n.a.createElement(N.Provider,{value:this.state},this.props.children)}}]),a}(r.Component),k=N.Consumer,w=function(e){function a(){var e,t;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={showPlayerInfo:!1},t.togglePlayerInfo=function(){t.setState({showPlayerInfo:!t.state.showPlayerInfo})},t.onDeleteClick=function(){var e=Object(f.a)(h.a.mark(function e(a,t){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.delete("https://jsonplaceholder.typicode.com/users/".concat(a));case 2:t({type:"DELETE_PLAYER",payload:a});case 3:case"end":return e.stop()}},e)}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.props.player,t=a.id,r=a.name,c=a.race,l=a.level,o=this.state.showPlayerInfo;return n.a.createElement(k,null,function(a){var s=a.dispatch;return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"card card-body"},n.a.createElement("p",{className:"primaryText"},"Player ",t,n.a.createElement("i",{onClick:e.togglePlayerInfo,className:"fa fa-chevron-down arrow",style:{cursor:"pointer"}}),n.a.createElement("i",{onClick:e.onDeleteClick.bind(e,t,s),className:"fa fa-times del-button",style:{cursor:"pointer"}}),n.a.createElement(p.b,{to:"/player/edit/".concat(t)},n.a.createElement("i",{className:"fa fa-edit",style:{cursor:"pointer",float:"right",color:"black",marginRight:".5rem"}}))),o?n.a.createElement("ul",{className:"list-group"},n.a.createElement("li",{className:"list-group-item"},"Name: ",r),n.a.createElement("li",{className:"list-group-item"},"Race: ",c),n.a.createElement("li",{className:"list-group-item"},"Level: ",l)):null))})}}]),a}(r.Component),x=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement(k,null,function(e){var a=e.players;return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",{className:"primaryText2 center"},"Players List"),a.map(function(e){return n.a.createElement(w,{key:e.id,player:e})}))})}}]),a}(r.Component);var C=function(){return n.a.createElement("nav",{className:"navbar navbar-expand-sm bg-dark mb-3 py-0"},n.a.createElement("div",{className:"container"},n.a.createElement("a",{href:"/",className:"navBar navbar-brand"},"REACT APP 1 "),n.a.createElement("div",null,n.a.createElement("ul",{className:"navbar-nav mr-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.b,{to:"/",className:"nav-link navBarItem"},n.a.createElement("i",{className:"fa fa-home navIcon"}),"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.b,{to:"/player/add",className:"nav-link navBarItem"},n.a.createElement("i",{className:"fa fa-plus navIcon"}),"Add Player")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.b,{to:"/about",className:"nav-link navBarItem"},n.a.createElement("i",{className:"fa fa-question navIcon"}),"About"))))))},P=t(16),A=t(37),R=t.n(A),S=function(e){var a=e.label,t=e.name,r=e.value,c=e.placeholder,l=e.type,o=e.onChange,s=e.error;return n.a.createElement("div",null,n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:t},a),n.a.createElement("input",{type:l,name:t,className:R()("form-control form-control-lg",{"is-invalid":s}),placeholder:c,value:r,onChange:o}),s&&n.a.createElement("div",{className:"invalid-feedback"},s)))};S.defaultProps={type:"text"};var L=S,D=function(e){function a(){var e,t;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={name:"",race:"",level:"",errors:{}},t.onChange=function(e){return t.setState(Object(P.a)({},e.target.name,e.target.value))},t.onSubmit=function(){var e=Object(f.a)(h.a.mark(function e(a,r){var n,c,l,o,s,i;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),n=t.state,c=n.name,l=n.race,o=n.level,""!==c){e.next=5;break}return t.setState({errors:{name:"Name is Required"}}),e.abrupt("return");case 5:if(""!==l){e.next=8;break}return t.setState({errors:{race:"Race is Required"}}),e.abrupt("return");case 8:if(""!==o){e.next=11;break}return t.setState({errors:{level:"Level is Required"}}),e.abrupt("return");case 11:return s={name:c,race:l,level:o},e.next=14,g.a.post("https://jsonplaceholder.typicode.com/users",s);case 14:i=e.sent,a({type:"ADD_PLAYER",payload:i.data}),t.setState({name:"",race:"",level:"",errors:{}}),t.props.history.push("/");case 18:case"end":return e.stop()}},e)}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,r=a.race,c=a.level,l=a.errors;return n.a.createElement(k,null,function(a){var o=a.dispatch;return n.a.createElement("div",null,n.a.createElement("div",{className:"card mb-3"},n.a.createElement("div",{className:"card-header primaryText2 center"},"Add Player"),n.a.createElement("div",{className:"card-body"},n.a.createElement("form",{onSubmit:e.onSubmit.bind(e,o)},n.a.createElement(L,{label:"Name",name:"name",placeholder:"Enter Name",value:t,onChange:e.onChange,error:l.name}),n.a.createElement(L,{label:"Race",name:"race",placeholder:"Enter Race",value:r,onChange:e.onChange,error:l.race}),n.a.createElement(L,{label:"Level",name:"level",placeholder:"Enter Level",value:c,onChange:e.onChange,error:l.level}),n.a.createElement("input",{type:"submit",value:"Add Player",className:"btn btn-block btn-primary"})))))})}}]),a}(r.Component),I=function(e){return n.a.createElement("div",null,n.a.createElement("h1",{className:"display-4 primaryText2"},"About Players"),n.a.createElement("p",null,"This app is created for learning and testing React basics"))},T=function(){return n.a.createElement("div",null,n.a.createElement("h1",{className:"display-4"}," Page Not Found"),n.a.createElement("p",{className:"lead"},"Sorry, this page does not exist"))},q=function(e){function a(){var e,t;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={name:"",race:"",level:"",errors:{}},t.onChange=function(e){return t.setState(Object(P.a)({},e.target.name,e.target.value))},t.onSubmit=function(){var e=Object(f.a)(h.a.mark(function e(a,r){var n,c,l,o,s,i,u;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),n=t.state,c=n.name,l=n.race,o=n.level,""!==c){e.next=5;break}return t.setState({errors:{name:"Name is Required"}}),e.abrupt("return");case 5:if(""!==l){e.next=8;break}return t.setState({errors:{race:"Race is Required"}}),e.abrupt("return");case 8:if(""!==o){e.next=11;break}return t.setState({errors:{level:"Level is Required"}}),e.abrupt("return");case 11:return s={name:c,race:l,level:o},i=t.props.match.params.id,e.next=15,g.a.put("https://jsonplaceholder.typicode.com/users/".concat(i),s);case 15:u=e.sent,a({type:"UPDATE_PLAYER",payload:u.data}),t.setState({name:"",race:"",level:"",errors:{}}),t.props.history.push("/");case 19:case"end":return e.stop()}},e)}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(h.a.mark(function e(){var a,t,r;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.id,e.next=3,g.a.get("https://jsonplaceholder.typicode.com/users/".concat(a));case 3:t=e.sent,r=t.data,this.setState({name:r.name});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.name,r=a.race,c=a.level,l=a.errors;return n.a.createElement(k,null,function(a){var o=a.dispatch;return n.a.createElement("div",null,n.a.createElement("div",{className:"card mb-3"},n.a.createElement("div",{className:"card-header primaryText2 center"},"Edit Player"),n.a.createElement("div",{className:"card-body"},n.a.createElement("form",{onSubmit:e.onSubmit.bind(e,o)},n.a.createElement(L,{label:"Name",name:"name",placeholder:"Enter Name",value:t,onChange:e.onChange,error:l.name}),n.a.createElement(L,{label:"Race",name:"race",placeholder:"Enter Race",value:r,onChange:e.onChange,error:l.race}),n.a.createElement(L,{label:"Level",name:"level",placeholder:"Enter Level",value:c,onChange:e.onChange,error:l.level}),n.a.createElement("input",{type:"submit",value:"Update Player",className:"btn btn-block btn-primary"})))))})}}]),a}(r.Component),B=(t(67),t(68),function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement(O,null,n.a.createElement(p.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(C,null),n.a.createElement("div",{className:"container"},n.a.createElement(d.c,null,n.a.createElement(d.a,{exact:!0,path:"/",component:x}),n.a.createElement(d.a,{exact:!0,path:"/player/add",component:D}),n.a.createElement(d.a,{exact:!0,path:"/player/edit/:id",component:q}),n.a.createElement(d.a,{exact:!0,path:"/about/",component:I}),n.a.createElement(d.a,{component:T}))))))}}]),a}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,1,2]]]);
//# sourceMappingURL=main.8755e6ce.chunk.js.map