(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var i=n(3),o=n.n(i),a=n(18),d=n.n(a),c=(n(23),n(24),n(11)),s=n(14),l=n(5),r=n(6),u=n(2),h=n(8),m=n(7),b=n(13),j=n(9),p=n(4),O=n(0),f=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).handleSubmit=i.handleSubmit.bind(Object(u.a)(i)),i.handleChange=i.handleChange.bind(Object(u.a)(i)),i.state={id:"",key:"",name:"",completed:!1},i}return Object(r.a)(n,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.addTodoItem(this.state),this.setState({name:""})}},{key:"handleChange",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return Object(O.jsx)("form",{onSubmit:this.handleSubmit,children:Object(O.jsxs)("div",{className:"newTodoForm",children:[Object(O.jsx)("input",{type:"text",name:"name",placeholder:"Enter new todo",onChange:this.handleChange,value:this.state.name}),Object(O.jsx)("button",{children:Object(O.jsx)(j.a,{className:"faIcon",icon:p.c})})]})})}}]),n}(i.Component),v=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).handleClick=i.handleClick.bind(Object(u.a)(i)),i.enterEditMode=i.enterEditMode.bind(Object(u.a)(i)),i.editMe=i.editMe.bind(Object(u.a)(i)),i.exitEditMode=i.exitEditMode.bind(Object(u.a)(i)),i.deleteMe=i.deleteMe.bind(Object(u.a)(i)),i.state={editMode:!1},i}return Object(r.a)(n,[{key:"handleClick",value:function(e){this.props.toggleCompleted(e.target.id)}},{key:"enterEditMode",value:function(){this.setState((function(e){return{editMode:!e.editMode}}),(function(){}))}},{key:"editMe",value:function(e){this.props.editItem(this.props.id,e.target.value)}},{key:"exitEditMode",value:function(e){e.preventDefault(),this.setState({editMode:!1})}},{key:"deleteMe",value:function(){this.props.deleteItem(this.props.id)}},{key:"render",value:function(){var e="item";this.props.completed&&(e+=" completed");var t=Object(O.jsx)("p",{onClick:this.handleClick,id:this.props.id,className:e,children:this.props.name}),n=Object(O.jsx)("form",{onSubmit:this.exitEditMode,children:Object(O.jsx)("div",{className:"newTodoForm editModeForm",children:Object(O.jsx)("input",{type:"text",name:"name",value:this.props.name,onChange:this.editMe})})});return Object(O.jsxs)("div",{className:"TodoItem",children:[this.state.editMode?n:t,Object(O.jsxs)("div",{className:"todoIcons",children:[this.state.editMode?Object(O.jsx)(j.a,{onClick:this.exitEditMode,className:"faIcon",icon:p.a}):Object(O.jsx)(j.a,{onClick:this.enterEditMode,className:"faIcon",icon:p.b}),Object(O.jsx)(j.a,{onClick:this.deleteMe,className:"faIcon",icon:p.d})]})]})}}]),n}(i.Component),I=n(10),g=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).state={idCounter:3,todoItems:[{id:0,key:Object(I.uuid)(),name:"Wash the dishes",completed:!1},{id:1,key:Object(I.uuid)(),name:"Go to the gym",completed:!1},{id:2,key:Object(I.uuid)(),name:"Clean the bathroom",completed:!1},{id:3,key:Object(I.uuid)(),name:"Wash the car",completed:!1}]},i.addTodoItem=i.addTodoItem.bind(Object(u.a)(i)),i.toggleCompleted=i.toggleCompleted.bind(Object(u.a)(i)),i.editItem=i.editItem.bind(Object(u.a)(i)),i.deleteItem=i.deleteItem.bind(Object(u.a)(i)),i}return Object(r.a)(n,[{key:"addTodoItem",value:function(e){var t=Object(s.a)(this.state.todoItems);e.id=this.state.idCounter+1,e.key=Object(I.uuid)(),t.push(e),this.setState((function(e){return{idCounter:e.idCounter+1,todoItems:t}}),(function(){}))}},{key:"toggleCompleted",value:function(e){var t=Object(s.a)(this.state.todoItems),n=t.filter((function(t){return t.id===parseInt(e)}));(n=n[0]).completed=!n.completed,this.setState({todoItems:t})}},{key:"editItem",value:function(e,t){var n=this,i=Object(s.a)(this.state.todoItems),o=i.filter((function(t){return t.id===parseInt(e)}));console.log(o),(o=o[0]).name=t,this.setState({todoItems:i},(function(){console.log(n.state)}))}},{key:"deleteItem",value:function(e){var t=this;this.setState({todoItems:this.state.todoItems.filter((function(t){return t.id!==e}))},(function(){console.log(t.state)}))}},{key:"render",value:function(){var e=this,t=this.state.todoItems.map((function(t){return Object(i.createElement)(v,Object(c.a)(Object(c.a)({},e.state),{},{id:t.id,key:t.key,name:t.name,completed:t.completed,toggleCompleted:e.toggleCompleted,deleteItem:e.deleteItem,editItem:e.editItem}))}));return Object(O.jsxs)("div",{className:"TodoList",children:[Object(O.jsx)("h1",{children:"Things You Should Do"}),Object(O.jsx)("p",{children:"Like right now"}),Object(O.jsx)("hr",{}),t,Object(O.jsx)(f,Object(c.a)(Object(c.a)({},this.state),{},{addTodoItem:this.addTodoItem}))]})}}]),n}(i.Component);var k=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(g,{})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,a=t.getLCP,d=t.getTTFB;n(e),i(e),o(e),a(e),d(e)}))};d.a.render(Object(O.jsx)(o.a.StrictMode,{children:Object(O.jsx)(k,{})}),document.getElementById("root")),C()}},[[34,1,2]]]);
//# sourceMappingURL=main.831fc306.chunk.js.map