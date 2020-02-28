(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(8),r=n.n(l),c=(n(15),n(16),n(6)),i=n(9),u=n(1),m=n(2),s=n(4),d=n(3),p=n(5),f=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={inputValue:"",idToDo:0},n.onInputChange=function(e){n.setState({inputValue:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),""!==n.state.inputValue.trim()&&(n.props.addToDo({title:n.state.inputValue,idToDo:n.state.idToDo,completed:!1}),n.setState((function(e){return{inputValue:"",idToDo:e.idToDo+1}})))},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.inputValue;return o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",value:e,onChange:this.onInputChange}))}}]),t}(o.a.Component);var h=function(e){var t=e.title,n=e.completed,a=e.id,l=e.mark,r=e.deleteItem;return o.a.createElement("li",{className:n?"completed":""},o.a.createElement("div",{className:"view"},o.a.createElement("input",{type:"checkbox",onChange:function(){return l(a)},className:"toggle",id:a,checked:n}),o.a.createElement("label",{htmlFor:a},t),o.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return r(a)}})))};var v=function(e){var t=e.list,n=e.markComplete,a=e.deleteItem;return o.a.createElement("ul",{className:"todo-list"},t.map((function(e){var t=e.title,l=e.completed,r=e.idToDo;return o.a.createElement(h,{mark:n,id:r,title:t,completed:l,key:r,deleteItem:a})})))},b=function(e){var t=e.filterName,n=e.filter,a=e.currentFilter;return o.a.createElement("li",null,o.a.createElement("a",{href:"#/",onClick:function(){return n(t)},className:t===a?"selected":""},t))},g=[{name:"all"},{name:"completed"},{name:"active"}],C=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={todoList:[],everyCompleted:!1,currentFilter:"all"},n.addToDo=function(e){n.setState((function(t){return{todoList:[].concat(Object(i.a)(t.todoList),[e]),everyCompleted:!1}}))},n.toggleAllComplete=function(){n.setState((function(e){return{everyCompleted:!e.everyCompleted,todoList:e.todoList.map((function(t){return Object(c.a)({},t,{completed:!e.everyCompleted})}))}}))},n.toggleTodoComplete=function(e){n.setState((function(t){return{todoList:t.todoList.map((function(t){return e===t.idToDo?Object(c.a)({},t,{completed:!t.completed}):Object(c.a)({},t)}))}})),n.setState((function(e){return{everyCompleted:e.todoList.every((function(e){return e.completed}))}}))},n.isAllChecked=function(){return n.state.todoList.every((function(e){return e.completed}))},n.deleteItem=function(e){n.setState((function(t){return{todoList:t.todoList.filter((function(t){return t.idToDo!==e}))}}))},n.setFilter=function(e){n.setState({currentFilter:e})},n.clearCompleted=function(){n.setState((function(e){return{todoList:e.todoList.filter((function(e){return!1===e.completed}))}}))},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.todoList,a=t.currentFilter;return o.a.createElement("section",{className:"todoapp"},o.a.createElement("header",{className:"header"},o.a.createElement("h1",null,"todos"),o.a.createElement(f,{addToDo:this.addToDo})),0!==this.state.todoList.length&&o.a.createElement(o.a.Fragment,null,o.a.createElement("section",{className:"main"},o.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",onChange:this.toggleAllComplete,checked:this.isAllChecked()}),o.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),o.a.createElement(v,{list:function(e,t){switch(t){case"completed":return e.filter((function(e){return e.completed}));case"active":return e.filter((function(e){return!e.completed}));default:return e}}(n,a),markComplete:this.toggleTodoComplete,deleteItem:this.deleteItem})),o.a.createElement("footer",{className:"footer"},o.a.createElement("span",{className:"todo-count"},n.filter((function(e){return!e.completed})).length,"items left"),o.a.createElement("ul",{className:"filters"},g.map((function(t){return o.a.createElement(b,{filterName:t.name,filter:e.setFilter,currentFilter:a,key:t.name})}))),o.a.createElement("button",{type:"button",className:"clear-completed",onClick:function(){return e.clearCompleted()}},"Clear completed"))))}}]),t}(o.a.Component);r.a.render(o.a.createElement(C,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.42cbd910.chunk.js.map