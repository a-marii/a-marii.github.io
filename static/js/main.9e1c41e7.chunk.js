(this["webpackJsonpsalute-demo-app"]=this["webpackJsonpsalute-demo-app"]||[]).push([[0],{36:function(t,s,e){},72:function(t,s,e){},73:function(t,s,e){"use strict";e.r(s);var n=e(0),a=e(1),i=e.n(a),c=e(8),r=e.n(c),o=(e(36),e(12)),l=e(25),u=e(26),h=e(6),d=e(30),p=e(29),j=e(28),b=e(2),_=e.n(b),f=e(11),m=e(7),x=e.n(m),O="https://history-quiz-1.herokuapp.com/todos/";function w(){return(w=Object(f.a)(_.a.mark((function t(s,e,n,a,i){var c,r;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.post(O,{task:s,completed1:e,completed2:n,completed3:a,completed4:i});case 2:return c=t.sent,r=c.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(){return(v=Object(f.a)(_.a.mark((function t(s){var e;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.delete("".concat(O).concat(s));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function N(){return(N=Object(f.a)(_.a.mark((function t(s,e){var n,a;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.put("".concat(O).concat(s),e);case 2:return n=t.sent,a=n.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(){return(k=Object(f.a)(_.a.mark((function t(){var s,e;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get(O);case 2:return s=t.sent,e=s.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var g={createTodo:function(t,s,e,n,a){return w.apply(this,arguments)},deleteTodo:function(t){return v.apply(this,arguments)},updateTodo:function(t,s){return N.apply(this,arguments)},getAllQuestion:function(){return k.apply(this,arguments)}},y=(e(72),function(t){Object(d.a)(e,t);var s=Object(p.a)(e);function e(t){var a,i;return Object(l.a)(this,e),(a=s.call(this,t)).renderArrayTopics=function(){return Object(n.jsxs)("ul",{children:[Object(n.jsxs)("button",{className:"Topics",onClick:function(){return a.assistant_param(a.state.list_of_topics[0].id,"choose_theme")},children:[a.state.list_of_topics[0].id,". ",a.state.list_of_topics[0].topic]}),Object(n.jsxs)("button",{className:"Topics",onClick:function(){return a.assistant_param(a.state.list_of_topics[1].id,"choose_theme")},children:[a.state.list_of_topics[1].id,". ",a.state.list_of_topics[1].topic]}),Object(n.jsxs)("button",{className:"Topics",onClick:function(){return a.assistant_param(a.state.list_of_topics[2].id,"choose_theme")},children:[a.state.list_of_topics[2].id,". ",a.state.list_of_topics[2].topic]}),Object(n.jsxs)("button",{className:"Topics",onClick:function(){return a.assistant_param(a.state.list_of_topics[3].id,"choose_theme")},children:[a.state.list_of_topics[3].id,". ",a.state.list_of_topics[3].topic]})]})},a.renderArrayResults=function(){return a.state.show_results.map((function(t){var s=t.topic,e=t.task,a=t.your_answer,i=t.true_answer,c=t.result;return"\u0412\u0435\u0440\u043d\u043e"===c?Object(n.jsxs)("tr",{children:[Object(n.jsxs)("td",{className:"Td",children:[s," "]}),Object(n.jsxs)("td",{className:"Td",children:[e," "]}),Object(n.jsxs)("td",{children:[a," "]}),Object(n.jsxs)("td",{children:[i," "]}),Object(n.jsx)("td",{className:"td_green",children:c})]}):Object(n.jsxs)("tr",{children:[Object(n.jsxs)("td",{className:"Td",children:[s," "]}),Object(n.jsxs)("td",{className:"Td",children:[e," "]}),Object(n.jsxs)("td",{children:[a," "]}),Object(n.jsxs)("td",{children:[i," "]}),Object(n.jsx)("td",{className:"td_red",children:c})]})}))},console.log("constructor"),a.state={questions:[{_id:"",task:"",answer1:"",answer2:"",answer3:"",answer4:"",true_answer:""}],answer:"",result:"",state_answer:0,list_of_topics:[],show_results:[],topic:{id:"",topic:"",start:0,finish:0},state:4,rand:0},a.Number_Answers=a.Number_Answers.bind(Object(h.a)(a)),a.ChooseTopic=a.ChooseTopic.bind(Object(h.a)(a)),a.NewQuestion=a.NewQuestion.bind(Object(h.a)(a)),a.Compare=a.\u0421ompare.bind(Object(h.a)(a)),a.assistant=(i=function(){return a.getStateForAssistant()},Object(j.a)({getState:i})),a.assistant.on("data",(function(t){console.log("assistant.on(data)",t);var s=t.action;a.dispatchAssistantAction(s)})),a.assistant.on("start",(function(t){console.log("assistant.on(start)",t)})),a.assistant_global_event("start"),a}return Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this;console.log("componentDidMount"),g.getAllQuestion().then((function(s){t.setState({questions:s}),console.log("questions",t.state.questions),t.allTopics(),t.setState({state:0})}))}},{key:"getStateForAssistant",value:function(){console.log("getStateForAssistant: this.state:",this.state);var t={item_selector:this.state.notes};return console.log("getStateForAssistant: state:",this.state.notes),t}},{key:"dispatchAssistantAction",value:function(t){if(console.log("dispatchAssistantAction",t),t)switch(t.type){case"add_note":this.Number_Answers(t.note);break;case"new_note":this.NewQuestion();break;case"new_topic":case"new_topic_gp":this.ChooseTopic(t.note);break;case"show_results":this.setState({state:2});break;case"return_topic":this.setState({state:0});break;case"reset_results":this.setState({show_results:[]})}}},{key:"getRandomArbitrary",value:function(t,s){return Math.floor(Math.random()*(s-t+1))+t}},{key:"allTopics",value:function(){for(var t=0,s=0,e=0,n=0;n<this.state.questions.length-1;n++)this.state.questions[n].topic!==this.state.questions[n+1].topic&&(e=n,t++,this.setState({list_of_topics:[].concat(Object(o.a)(this.state.list_of_topics),[{id:t,topic:this.state.questions[n].topic,start:s,finish:e}])}),s=n+1),n===this.state.questions.length-2&&(t++,this.setState({list_of_topics:[].concat(Object(o.a)(this.state.list_of_topics),[{id:t,topic:this.state.questions[n].topic,start:s,finish:n}])}))}},{key:"ChooseTopic",value:function(t){var s=this,e=t-1;this.setState({state:1,topic:{id:this.state.list_of_topics[e].topic,topic:this.state.list_of_topics[e].topic,start:this.state.list_of_topics[e].start,finish:this.state.list_of_topics[e].finish}},(function(){s.NewQuestion()}))}},{key:"Number_Answers",value:function(t){var s=this;0===this.state.state_answer&&("\u043e\u0434\u0438\u043d"===t||"\u043f\u0435\u0440\u0432\u044b\u0439"===t||"1"===t||1===t?this.setState({answer:this.state.questions[this.state.rand].answer1},(function(){return s.Compare()})):"\u0434\u0432\u0430"===t||"\u0432\u0442\u043e\u0440\u043e\u0439"===t||"2"===t||2===t?this.setState({answer:this.state.questions[this.state.rand].answer2},(function(){return s.Compare()})):"\u0442\u0440\u0438"===t||"\u0442\u0440\u0435\u0442\u0438\u0439"===t||"3"===t||3===t?this.setState({answer:this.state.questions[this.state.rand].answer3},(function(){return s.Compare()})):"\u0447\u0435\u0442\u044b\u0440\u0435"!==t&&"\u0447\u0435\u0442\u0432\u0435\u0440\u0442\u044b\u0439"!==t&&"4"!==t&&4!==t||this.setState({answer:this.state.questions[this.state.rand].answer4},(function(){return s.Compare()}))),this.setState({state_answer:1})}},{key:"\u0421ompare",value:function(){var t=this;this.state.answer===this.state.questions[this.state.rand].true_answer?this.setState({result:"\u0412\u0435\u0440\u043d\u043e"},(function(){t.Result()})):this.setState({result:"\u041d\u0435\u0432\u0435\u0440\u043d\u043e"},(function(){t.Result()}))}},{key:"Result",value:function(){this.setState({show_results:[].concat(Object(o.a)(this.state.show_results),[{topic:this.state.topic.topic,task:this.state.questions[this.state.rand].task,your_answer:this.state.answer,true_answer:this.state.questions[this.state.rand].true_answer,result:this.state.result}])})}},{key:"NewQuestion",value:function(){var t=this.state.topic.start,s=this.state.topic.finish,e=this.getRandomArbitrary(t,s);this.setState({state_answer:0,state:1,rand:e,answer:"",result:""}),console.log("max",s),console.log("min",t)}},{key:"assistant_global_event",value:function(t){this.assistant&&console.log("assistant_global_event"),this.assistant.sendData({action:{action_id:t}}),"show_res"===t?this.ShowResults():"del_res"===t?this.DeleteResults():"list_theme"===t?this.ShowTopics():this.NewQuestion()}},{key:"assistant_param",value:function(t,s){this.assistant.sendData({action:{action_id:s,parameters:{number:t}}}),"choose_theme"===s?this.ChooseTopic(t):this.Number_Answers(t)}},{key:"WriteTopic",value:function(){var t=this;return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("div",{className:"Topics_div",children:this.renderArrayTopics()}),Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"Text"})}),Object(n.jsxs)("ul",{className:"positionButtons",children:[" ",Object(n.jsx)("p",{children:Object(n.jsx)("button",{onClick:function(){return t.assistant_global_event("show_res")},className:"fourth_button",children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b"})})]})]})}},{key:"ShowTopics",value:function(){this.setState({state:0}),this.WriteTopic()}},{key:"ShowResults",value:function(){this.setState({state:2}),this.render()}},{key:"DeleteResults",value:function(){this.setState({show_results:[]})}},{key:"WriteQuestions",value:function(){var t=this;return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)("div",{className:"Answers",children:[Object(n.jsxs)("div",{className:"Questions",children:[" ",this.state.questions[this.state.rand].task]}),Object(n.jsx)("p",{children:Object(n.jsxs)("button",{onClick:function(){return t.assistant_param(1,"answer")},className:"but_res",children:["\u0412\u0430\u0440\u0438\u0430\u043d\u0442 1: ",this.state.questions[this.state.rand].answer1]})}),Object(n.jsx)("p",{children:Object(n.jsxs)("button",{onClick:function(){return t.assistant_param(2,"answer")},className:"but_res",children:["\u0412\u0430\u0440\u0438\u0430\u043d\u0442 2: ",this.state.questions[this.state.rand].answer2]})}),Object(n.jsx)("p",{children:Object(n.jsxs)("button",{onClick:function(){return t.assistant_param(3,"answer")},className:"but_res",children:["\u0412\u0430\u0440\u0438\u0430\u043d\u0442 3: ",this.state.questions[this.state.rand].answer3]})}),Object(n.jsx)("p",{children:Object(n.jsxs)("button",{onClick:function(){return t.assistant_param(4,"answer")},className:"but_res",children:["\u0412\u0430\u0440\u0438\u0430\u043d\u0442 4: ",this.state.questions[this.state.rand].answer4]})}),Object(n.jsxs)("div",{className:"Result",children:[Object(n.jsxs)("ul",{children:["\u0412\u0430\u0448 \u041e\u0442\u0432\u0435\u0442: ",this.state.answer," "]}),Object(n.jsxs)("ul",{children:[" \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442: ",this.state.result," "]})]})]}),Object(n.jsxs)("ul",{className:"positionButtons",children:[" ",Object(n.jsx)("p",{children:Object(n.jsx)("button",{onClick:function(){return t.assistant_global_event("list_theme")},className:"second_button",children:Object(n.jsx)("span",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u0435\u043c"})})}),Object(n.jsx)("p",{children:Object(n.jsx)("button",{onClick:function(){return t.assistant_global_event("next_answer")},className:"third_button",children:Object(n.jsx)("span",{children:"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u043e\u043f\u0440\u043e\u0441"})})}),Object(n.jsx)("p",{children:Object(n.jsx)("button",{onClick:function(){return t.assistant_global_event("show_res")},className:"fourth_button",children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b"})})]})]})}},{key:"WriteResults",value:function(){var t=this;return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("div",{className:"Results",children:Object(n.jsxs)("table",{children:[Object(n.jsxs)("thead",{children:[Object(n.jsx)("tr",{children:Object(n.jsx)("th",{className:"text_rez",colspan:"5",children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b"})}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{className:"text_rez",children:"\u0422\u0435\u043c\u0430"}),Object(n.jsx)("th",{className:"text_rez",children:"\u0417\u0430\u0434\u0430\u043d\u0438\u0435"}),Object(n.jsx)("th",{className:"text_rez",children:"\u0412\u0430\u0448 \u043e\u0442\u0432\u0435\u0442"}),Object(n.jsx)("th",{className:"text_rez",children:"\u0412\u0435\u0440\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442"}),Object(n.jsx)("th",{className:"text_rez",children:"\u0412\u0435\u0440\u0434\u0438\u043a\u0442"})]})]}),Object(n.jsxs)("tbody",{children:[Object(n.jsx)("tr",{}),this.renderArrayResults()]})]})}),Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"Text"})}),Object(n.jsxs)("ul",{className:"positionButtons",children:[Object(n.jsx)("p",{children:Object(n.jsx)("button",{onClick:function(){return t.assistant_global_event("list_theme")},className:"third_button",children:Object(n.jsx)("span",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u0435\u043c"})})}),Object(n.jsx)("p",{children:Object(n.jsx)("button",{onClick:function(){return t.assistant_global_event("del_res")},className:"fourth_button",children:"\u0421\u0431\u0440\u043e\u0441 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432"})})]})]})}},{key:"WriteLoading",value:function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)("div",{className:"position",children:[Object(n.jsx)("div",{className:"loader",role:"status"}),"       "]})})}},{key:"render",value:function(){switch(console.log("render"),this.state.state){case 0:return this.WriteTopic();case 1:return this.WriteQuestions();case 2:return this.WriteResults();case 4:return this.WriteLoading()}}}]),e}(i.a.Component)),S=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,75)).then((function(s){var e=s.getCLS,n=s.getFID,a=s.getFCP,i=s.getLCP,c=s.getTTFB;e(t),n(t),a(t),i(t),c(t)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(y,{})}),document.getElementById("root")),S()}},[[73,1,2]]]);
//# sourceMappingURL=main.9e1c41e7.chunk.js.map