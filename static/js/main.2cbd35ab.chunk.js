(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{1:function(e,t,a){e.exports={statistics:"Statistics_statistics__2C3bO",statisticsItem:"Statistics_statisticsItem__2bR0I"}},16:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a.n(c),n=a(4),i=a.n(n),r=a(5),o=a(6),l=a(7),d=a(10),b=a(9),u=a(8),j=a.n(u),f=a(0),h=function(e){var t=e.options,a=e.onLeaveFeedback,c=Object.keys(t);return Object(f.jsx)("div",{children:c.map((function(e){return Object(f.jsx)("button",{type:"button",className:j.a.feedbackBtn,onClick:function(){return a(e)},children:e},e)}))})},O=a(1),v=a.n(O),k=function(e){var t=e.good,a=e.neutral,c=e.bad,s=e.total,n=e.positivePercentage;return Object(f.jsxs)("ul",{className:v.a.statistics,children:[Object(f.jsxs)("li",{className:v.a.statisticsItem,children:["Good: ",t]}),Object(f.jsxs)("li",{className:v.a.statisticsItem,children:["Neutral: ",a]}),Object(f.jsxs)("li",{className:v.a.statisticsItem,children:["Bad: ",c]}),Object(f.jsxs)("li",{className:v.a.statisticsItem,children:["Total: ",s]}),Object(f.jsxs)("li",{className:v.a.statisticsItem,children:["Positive feedback: ",n,"%"]})]})};k.defaultProps={good:0,neutral:0,bad:0};var m=k,p=function(e){var t=e.message;return Object(f.jsx)("span",{children:t})};p.defaultProps={message:"No feedback given"};var x=p,g=function(e){var t=e.title,a=e.children;return Object(f.jsxs)("section",{children:[Object(f.jsx)("h2",{children:t}),a]})};g.defaultProps={title:"Please leave feedback"};var P=g,N=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(o.a)(this,a);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={good:0,neutral:0,bad:0},e.incrementHandler=function(t){e.setState((function(e){return Object(r.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){return e.state.good/e.countTotalFeedback()*100},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state;return Object(f.jsxs)(P,{title:"Please leave feedback",children:[Object(f.jsx)(h,{options:e,onLeaveFeedback:this.incrementHandler}),Object(f.jsx)("h2",{children:"Statistics"}),this.countTotalFeedback()>0?Object(f.jsx)(m,{good:e.good,neutral:e.neutral,bad:e.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(f.jsx)(x,{message:"No feedback given"})]})}}]),a}(s.a.Component);i.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(N,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={feedbackBtn:"FeedbackOptions_feedbackBtn__1cRt1"}}},[[16,1,2]]]);
//# sourceMappingURL=main.2cbd35ab.chunk.js.map