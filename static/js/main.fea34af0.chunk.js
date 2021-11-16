(this["webpackJsonptodos-editable"]=this["webpackJsonptodos-editable"]||[]).push([[0],{11:function(t,e,n){t.exports={header:"TodoList_header__263uO",button:"TodoList_button__-uivp",textbox:"TodoList_textbox__SsL3e"}},18:function(t,e,n){t.exports={icon:"Icon_icon__2fGQy"}},24:function(t,e,n){},31:function(t,e,n){},36:function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o),c=n(9),a=n.n(c),d=(n(24),n(12)),u=n(2),r=n(7),s=r.c,l=n(10),j=Object(l.b)({name:"todos",initialState:{todos:[],inputValue:"",editInputValue:"",currentlyEditedTodo:null},reducers:{changeInputValue:function(t,e){t.inputValue=e.payload},addTodo:function(t){""!==t.inputValue&&(t.todos.unshift({name:t.inputValue}),t.inputValue="",b(t))},deleteTodo:function(t,e){t.todos=t.todos.slice(0,e.payload).concat(t.todos.slice(e.payload+1)),b(t)},startEditingTodo:function(t,e){t.currentlyEditedTodo=e.payload,t.editInputValue=t.todos[e.payload].name},finishEditingTodo:function(t,e){t.todos[e.payload].name=t.editInputValue,b(t)},cancelEditingTodo:b,changeEditInputValue:function(t,e){t.editInputValue=e.payload}}});function b(t){t.currentlyEditedTodo=null,t.editInputValue=""}var h=j.actions,p=h.addTodo,x=h.deleteTodo,O=h.startEditingTodo,f=h.finishEditingTodo,m=h.cancelEditingTodo,v=h.changeInputValue,_=h.changeEditInputValue,g=function(t){return t.todos.todos},y=function(t){return t.todos.inputValue},E=function(t){return t.todos.editInputValue},T=function(t){return t.todos.currentlyEditedTodo},V=j.reducer,k=n(11),I=n.n(k),w=n(8),C=n.n(w),N=n(18),S=n.n(N),F=n(1);function J(t){var e=t.type,n=t.onClick;return Object(F.jsx)("img",{src:"".concat(e,".svg"),alt:"",className:S.a.icon,onClick:n})}function L(t){var e=t.name,n=t.readonly,o=t.editValue,i=t.onDelete,c=t.onEdit,a=t.onEditCancel,d=t.onEditFinish,u=t.onEditStart;return Object(F.jsxs)("div",{className:C.a.name,children:[Object(F.jsxs)("div",{className:C.a.icongroup,children:[!n&&null!==o&&Object(F.jsxs)("span",{children:[""!==o&&Object(F.jsx)(J,{type:"tick",onClick:d}),Object(F.jsx)(J,{type:"cross",onClick:a})]}),!n&&null===o&&Object(F.jsxs)("span",{children:[Object(F.jsx)(J,{type:"edit",onClick:u}),Object(F.jsx)(J,{type:"delete",onClick:i})]})]}),e,null!==o&&Object(F.jsx)("div",{className:C.a.edit,children:Object(F.jsx)("input",{className:C.a.input,value:o,onChange:function(t){return c(t.target.value)},autoFocus:!0})})]})}function W(t){var e=t.readonly,n=Object(r.b)(),i=s(g),c=s(y),a=s(E),d=s(T);return Object(o.useEffect)((function(){e&&n(m())}),[e,n]),Object(F.jsxs)("div",{children:[!e&&Object(F.jsxs)("div",{children:[Object(F.jsx)("input",{className:I.a.textbox,"aria-label":"Set todo",value:c,onChange:function(t){return n(v(t.target.value))},placeholder:"Write todo.."}),Object(F.jsx)("div",{children:Object(F.jsx)("button",{className:I.a.button,onClick:function(){return n(p())},children:"Add todo"})})]}),Object(F.jsx)("h1",{className:I.a.header,children:"Your Todos:"}),!!i.length&&Object(F.jsx)("div",{children:i.map((function(t,o){return Object(F.jsx)(L,{readonly:e,name:t.name,editValue:d===o?a:null,onEditCancel:function(){return n(m())},onDelete:function(){return n(x(o))},onEdit:function(t){return n(_(t))},onEditFinish:function(){return n(f(o))},onEditStart:function(){n(O(o))}},"".concat(t.name,"_").concat(o))}))})]})}n(31);var A=function(){return Object(F.jsx)(d.a,{basename:"todos-editable",children:Object(F.jsxs)("div",{className:"container",children:[Object(F.jsx)("nav",{children:Object(F.jsxs)("ul",{children:[Object(F.jsx)("li",{children:Object(F.jsx)(d.b,{to:"/",children:"Home"})}),Object(F.jsx)("li",{children:Object(F.jsx)(d.b,{to:"/view",children:"View"})})]})}),Object(F.jsxs)(u.c,{children:[Object(F.jsx)(u.a,{path:"/view",children:Object(F.jsx)(W,{readonly:!0})}),Object(F.jsx)(u.a,{path:"/",children:Object(F.jsx)(W,{})})]})]})})},B=Object(l.a)({reducer:{todos:V}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(F.jsx)(i.a.StrictMode,{children:Object(F.jsx)(r.a,{store:B,children:Object(F.jsx)(A,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},8:function(t,e,n){t.exports={name:"Todo_name__J5J66",header:"Todo_header___uFux",input:"Todo_input__2GoiN",icongroup:"Todo_icongroup__3eMkA"}}},[[36,1,2]]]);
//# sourceMappingURL=main.fea34af0.chunk.js.map