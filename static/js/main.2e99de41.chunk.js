(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Captain Holt","image":"http://costumeplaybook.com/wp-content/uploads/2018/10/holt-brooklyn-nine-nine.jpg","Role":"Sergent","Department":"Police","Office":333333333,"Mobile":666666666,"Email":"spongebob@test.com","Address":"#111 DownTown Toronto M4B 1B3"},{"id":2,"name":"Jake Peralta","image":"http://costumeplaybook.com/wp-content/uploads/2018/10/jake-peralta.jpg","Role":"Detective","Department":"Police","Office":333333311,"Mobile":666666611,"Email":"krabs@test.com","Address":"#222 DownTown Toronto M4B 1B4"},{"id":3,"name":"Amy Santiago","image":"http://costumeplaybook.com/wp-content/uploads/2018/10/amy-santiago-brooklyn.jpg","Role":"Detective","Department":"Police","Office":333333312,"Mobile":666666612,"Email":"squidward@test.com","Address":"#333 DownTown Toronto M4B 1B4"},{"id":4,"name":"Terry Crews","image":"http://costumeplaybook.com/wp-content/uploads/2018/10/terry-crews-brooklyn-nine-nine.jpg","Role":"Sergent","Department":"Police","Office":333333313,"Mobile":666666613,"Email":"dexter@test.com","Address":"#444 DownTown Toronto M4B 1B4"},{"id":5,"name":"Rosa Diaz","image":"http://costumeplaybook.com/wp-content/uploads/2018/10/rosa-diaz-brooklyn.jpg","Role":"Detective","Department":"Police","Office":333333314,"Mobile":666666614,"Email":"test@test.com","Address":"#555 DownTown Toronto M4B 1B4"},{"id":6,"name":"Charles Boyle","image":"http://costumeplaybook.com/wp-content/uploads/2018/10/boyle-brooklyn-nine-nine.jpg","Role":"Detective","Department":"Police","Office":333333315,"Mobile":666666615,"Email":"doug@test.com","Address":"#666 DownTown Toronto M4B 1B4"},{"id":7,"name":"Gina Linetti","image":"https://vignette.wikia.nocookie.net/brooklynnine-nine/images/5/53/GinaS5.jpg","Role":"Administration","Department":"Administrator","Office":333333316,"Mobile":666666616,"Email":"gina@test.com","Address":"#777 DownTown Toronto M4B 1B4"},{"id":8,"name":"Scully","image":"http://costumeplaybook.com/wp-content/uploads/2018/10/norm-scully-featured.jpg","Role":"Administration","Department":"Adminstrator","Office":333333317,"Mobile":666666617,"Email":"johny@test.com","Address":"#888 DownTown Toronto M4B 1B4"},{"id":9,"name":"Hitchcock","image":"http://costumeplaybook.com/wp-content/uploads/2018/10/hitchcock.jpg","Role":"Administration","Department":"Administrator","Office":"33333319","Mobile":666666619,"Email":"tommy@test.com","Address":"#999 DownTown Toronto M4B 1B4"}]')},,,function(e,t,n){e.exports=n(14)},,,,,function(e,t,n){},function(e){e.exports=JSON.parse("{}")},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(4),r=n.n(l);n(10);var c=function(e){return o.a.createElement("div",null,o.a.createElement("div",{class:"container-fluid"},o.a.createElement("div",{class:"row"},o.a.createElement("div",{class:"col-12"},o.a.createElement("div",{className:"wrapper",style:{}},e.children)))))},i=(n(11),n(12),n(1)),s=n(2);var m=function(e){console.log(e);var t={colborder:{border:"1px solid lightgrey"},listtype:{listStyleType:"none"},imgcontainer:{}};return o.a.createElement("div",null,e.displayEmployeeList.map((function(e){return o.a.createElement("div",{class:"row justify-content-center"},o.a.createElement("div",{class:"col-11 p-2",style:t.colborder},o.a.createElement("div",{class:"row"},o.a.createElement("div",{class:"col-3 imgcontainer"},o.a.createElement("img",{class:"img-thumbnail",alt:e.name,src:e.image})),o.a.createElement("div",{class:"col-9 emp-content"},o.a.createElement("div",{class:"row"},o.a.createElement("div",{class:"col"},o.a.createElement("ul",{style:t.listtype},o.a.createElement("li",null,o.a.createElement("strong",null,"Name:")," ",e.name),o.a.createElement("li",null,o.a.createElement("strong",null,"Occupation:")," ",e.Role),o.a.createElement("li",null,o.a.createElement("strong",null,"Department:")," ",e.Department),o.a.createElement("li",null,o.a.createElement("strong",null,"Email:")," ",e.Email),o.a.createElement("li",null,o.a.createElement("strong",null,"Office:")," ",e.Office),o.a.createElement("li",null,o.a.createElement("strong",null,"Address:")," ",e.Address))))))))})))};var p=function(e){var t=Object(a.useState)({search:""}),n=Object(i.a)(t,2),l=n[0],r=n[1],c=Object(a.useState)(s),p=Object(i.a)(c,2),d=p[0],u=p[1];return console.log(d),o.a.createElement("div",null,o.a.createElement("form",null,o.a.createElement("div",{class:"input-group p-3"},o.a.createElement("input",{type:"text",class:"form-control",value:l.search,placeholder:"Search Employee by Name",onChange:function(e){e.preventDefault();var t=e.target.value;if(r({search:t}),console.log(d),t.length>1){console.log(d);var n=s.filter((function(e){return 0===e.name.toLowerCase().indexOf(l.search.toLowerCase())}));console.log(n),u(n)}else u([])}}))),o.a.createElement(m,{displayEmployeeList:d}))};var d=function(){var e=Object(a.useState)({search:""}),t=Object(i.a)(e,2);return t[0],t[1],o.a.createElement("div",null,o.a.createElement("form",{class:"row"},o.a.createElement("div",{class:"col-12"},o.a.createElement(p,null))))};var u=function(){return o.a.createElement("div",null,o.a.createElement("div",{class:"row"},o.a.createElement("div",{class:"col-12 p-2",style:{border:"3px solid blue"}},o.a.createElement("h1",{class:" headertxt text-center"},"EMPLOYEE DIRECTORY"))))};var E=function(){return o.a.createElement(c,null,o.a.createElement(u,null),o.a.createElement(d,null))};n(13);r.a.render(o.a.createElement(E,null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.2e99de41.chunk.js.map