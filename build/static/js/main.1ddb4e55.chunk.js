(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{207:function(e,t,n){e.exports=n.p+"static/media/back.52d23a7f.jpg"},208:function(e,t,n){e.exports=n.p+"static/media/backl.4fcb3eaa.jpg"},223:function(e,t,n){e.exports=n(462)},228:function(e,t,n){},230:function(e,t,n){},258:function(e,t){},260:function(e,t){},290:function(e,t){},291:function(e,t){},356:function(e,t){},457:function(e,t,n){e.exports=n.p+"static/media/Randomly Cute.32c5f057.otf"},462:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(12),c=n.n(r),l=(n(228),n(48)),i=n.n(l),s=n(95),u=n(60),m=(n(230),n(216)),p=n(489),d=n(490),h=n(493),g=n(495),b=n(496),y=n(494),f=n(213),v=n.n(f),E=n(214),O=n.n(E),C=n(215),k=n.n(C),_=n(26),R=n(49),S=n(217),N=n(218),j=n(132),w=n(133),A=n(231),F=n(450)("HE"),D=function(e){Object(N.a)(n,e);var t=Object(S.a)(n);function n(e,a){var o;return Object(j.a)(this,n),(o=t.call(this))._runURL="https://api.hackerearth.com/v3/code/run/",o._compileURL="https://api.hackerearth.com/v3/code/compile/",o._clientSecret=e,o._mode=a||0,F("Bootstraping HackerEarth module with clientSecret as %s and mode as %s",e,a),o}return Object(w.a)(n,[{key:"compile",value:function(e,t){var a=Object(R.a)(Object(_.a)(n.prototype),"getQueryData",this).call(this,e,this.clientSecret,this.mode);F("In HackerEarth:Compile Data sent to API is %s",JSON.stringify(a));var o=Object(R.a)(Object(_.a)(n.prototype),"getRequestPostJSON",this).call(this,a,this.compileURL);return Object(R.a)(Object(_.a)(n.prototype),"doOperation",this).call(this,o,t)}},{key:"run",value:function(e,t){var a=Object(R.a)(Object(_.a)(n.prototype),"getQueryData",this).call(this,e,this.clientSecret,this.mode);F("In HackerEarth:Run Data sent to API is %s",JSON.stringify(a));var o=Object(R.a)(Object(_.a)(n.prototype),"getRequestPostJSON",this).call(this,a,this.runURL);return Object(R.a)(Object(_.a)(n.prototype),"doOperation",this).call(this,o,t)}},{key:"runURL",get:function(){return this._runURL}},{key:"compileURL",get:function(){return this._compileURL}},{key:"clientSecret",get:function(){return this._clientSecret}},{key:"mode",get:function(){return this._mode}}]),n}(function(){function e(){Object(j.a)(this,e)}return Object(w.a)(e,[{key:"getQueryData",value:function(e,t,n){e.language;var a=e.time_limit,o=e.memory_limit,r=e.source,c=e.input;return{client_secret:t,async:n,source:r,lang:e.lang,input:c,time_limit:a||1,memory_limit:o||262144}}},{key:"getRequestPostJSON",value:function(e,t){return{method:"POST",uri:"https://cors-anywhere.herokuapp.com/"+t,form:e,gzip:!0,headers:{"Content-Type":"multipart/form-data","X-Requested-With":"XMLHttpRequest","Access-Control-Allow-Origin":"http://localhost:3000","Access-Control-Allow-Methods":"GET, PUT, POST, DELETE, OPTIONS","Access-Control-Allow-Headers":"Accept, Content-Type, Origin"}}}},{key:"doOperation",value:function(e,t){return new Promise((function(n,a){A(e).then((function(e){return e})).then((function(e){t&&t(null,e),n(e)})).catch((function(e){t&&t(e,null),a(e)}))}))}}]),e}()),x=(n(453),n(455),n(456),n(207)),I=n.n(x),W=n(208),H=n.n(W),P=n(96),J=n.n(P);n(457);var L=function(){var e=o.a.useState(function(){var e="light"in localStorage,t=JSON.parse(localStorage.getItem("light")),n=function(){if(!window.matchMedia)return;return window.matchMedia("(prefers-color-scheme: dark)").matches}();return e?t:!!n}()),t=Object(u.a)(e,2),n=t[0],r=t[1];o.a.useEffect((function(){localStorage.setItem("light",JSON.stringify(n))}),[n]);var c=Object(m.a)({palette:{type:n?"dark":"light"}}),l=Object(a.useState)([{name:"CPP",v:1},{name:"PYTHON",v:2},{name:"CSHARP",v:3},{name:"JAVA",v:4},{name:"JAVASCRIPT",v:5},{name:"JAVASCRIPT_NODE",v:6},{name:"PHP",v:7},{name:"RUBY",v:8}],[]),f=Object(u.a)(l,2),E=f[0],C=(f[1],Object(a.useState)(0)),_=Object(u.a)(C,2),R=_[0],S=_[1],N=Object(a.useState)({value:""}),j=Object(u.a)(N,2),w=(j[0],j[1],Object(a.useState)({value:""})),A=Object(u.a)(w,2),F=A[0],x=A[1],W=o.a.createRef(),P=Object(a.useRef)(),L=function(){var e=Object(s.a)(i.a.mark((function e(t){var n,a,o,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("".concat(W.current.value)),x({value:"Compiling and calculating result ..."}),n="".concat(W.current.value),e.next=6,console.log(n);case 6:a="".concat(P.current.value),o=new D("89d6d425a2229325e68ae2bbe0c12d49dcd76a63",""),(r={}).time_limit=1,r.memory_limit=323244,r.source=n,r.input=a,r.lang="".concat(E[R].name),o.run(r,(function(e,t){e?(console.log("".concat(E[R].name)),console.log(e)):("OK"!==JSON.parse(t).compile_status&&x({value:"Your code had an error: "+JSON.parse(t).compile_status}),console.log(JSON.parse(t)),x({value:JSON.parse(t).run_status.output}))}));case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(s.a)(i.a.mark((function e(t){var n,a,o,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("".concat(W.current.value)),n="".concat(W.current.value),x({value:"Compiling and checking for errors ..."}),e.next=6,console.log(n);case 6:a="".concat(P.current.value),o=new D("89d6d425a2229325e68ae2bbe0c12d49dcd76a63",""),(r={}).time_limit=1,r.memory_limit=323244,r.source=n,r.input=a,r.lang="".concat(E[R].name),o.compile(r,(function(e,t){e?(console.log("".concat(E[R].name)),console.log(e)):"OK"!==JSON.parse(t).compile_status?x({value:"Your code had an error: "+JSON.parse(t).compile_status}):x({value:"Your code compiled succesfully!!"})}));case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(s.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target.value,S(n),W.current.value=0===n?'/******************************************************************************\n\n       Online C++ Compiler.\nCode, Compile, Run and Debug C++ program online.\nWrite your code in this editor and press "Run" button to compile and execute it.\n\n*******************************************************************************/\n\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\ncout<<"Hello World";\n\nreturn 0;\n}':1===n?"'''\n\n       Online Python Compiler.\nCode, Compile, Run and Debug python program online.\nWrite your code in this editor and press \"Run\" button to execute it.\n\n'''\n\nprint(\"Hello World\")\n":2===n?'/******************************************************************************\n\n       Welcome to Online IDE.\n       Code, Compile, Run and Debug online from anywhere in world.\n       \n       *******************************************************************************/\n       using System;\n       class HelloWorld {\n         static void Main() {\n           Console.WriteLine("Hello World");\n         }\n       }':3===n?'/******************************************************************************\n\n       Welcome to Online IDE.\n       Code, Compile, Run and Debug online from anywhere in world.\n       \n       *******************************************************************************/\npublic class Main\n  {\n    public static void main(String[] args) {\n      System.out.println("Hello World");\n     }\n  }\n      \n       ':4===n?"/******************************************************************************\n\n    Online Javascript Interpreter.\nCode, Compile, Run and Debug javascript program online.\nWrite your code in this editor and press \"Run\" button to execute it.\n\n*******************************************************************************/\n\nprint('Hello World');\n\n   ":5===n?'/******************************************************************************\n\n    Online NodeJS Interpreter.\nCode, Compile, Run and Debug javascript program online.\nWrite your code in this editor and press "Run" button to execute it.\n\n*******************************************************************************/\nconsole.log("Hello World");':6===n?'<?php\n    /******************************************************************************\n    \n                                Online PHP Interpreter.\n                    Code, Compile, Run and Debug php program online.\n    Write your code in this editor and press "Run" button to execute it.\n    \n    *******************************************************************************/\n    \necho "Hello World";\n    ':'=begin\n\n    Online Ruby Interpreter.\n    Code, Compile, Run and Debug Ruby script online.\n    Write your code in this editor and press "Run" button to execute it.\n\n=end\n\nputs "Hello World"\n';case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){W.current.value='/******************************************************************************\n\n  Online C++ Compiler.\nCode, Compile, Run and Debug C++ program online.\nWrite your code in this editor and press "Run" button to compile and execute it.\n\n*******************************************************************************/\n\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\ncout<<"Hello World";\n\nreturn 0;\n}'}),[]),o.a.createElement(p.a,{theme:c},o.a.createElement("nav",{className:n?"dark-mode":"light-mode"},o.a.createElement("h1",{className:"h",style:{color:n?"#66FCF1":"#51E2F5"}},"ONLINE IDE:"),o.a.createElement("div",{className:"toggle-containerr"},o.a.createElement("span",{style:{color:n?"#52606D":"white"}},"\u2600\ufe0e"),o.a.createElement("span",{className:"togglee"},o.a.createElement("input",{checked:n,onChange:function(){r((function(e){return!e}))},id:"checkbox",className:"checkbox",type:"checkbox"}),o.a.createElement("label",{htmlFor:"checkbox"})),o.a.createElement("span",{style:{color:n?"white":"#282a36"}},"\u263e"))),o.a.createElement(d.a,{className:"app__paper",style:{height:"100%",backgroundColor:n?"#212121":"gainsboro",backgroundImage:"url(".concat(n?I.a:H.a,")"),transitionDelay:"0.5s",backgroundSize:n?"":"cover"}},o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"App__left"},o.a.createElement("div",{className:"App__header"},o.a.createElement("h1",{className:"g",style:{color:n?"#FFA8B6":"white",backgroundColor:"black"}},"SELECT LANGUAGE: "),o.a.createElement(h.a,{className:"App__dropdown"},o.a.createElement(g.a,{className:"App__select",variant:"outlined",value:R,style:{backgroundColor:"",color:n?"#FFA8B6":"white"},onChange:U},o.a.createElement(b.a,{style:{},value:0},E[0].name),o.a.createElement(b.a,{style:{},value:1}," ",E[1].name),o.a.createElement(b.a,{style:{},value:2}," ",E[2].name),o.a.createElement(b.a,{style:{},value:3}," ",E[3].name),o.a.createElement(b.a,{style:{},value:4}," ",E[4].name),o.a.createElement(b.a,{style:{},value:5}," ",E[5].name),o.a.createElement(b.a,{style:{},value:6}," ",E[6].name),o.a.createElement(b.a,{style:{},value:7}," ",E[7].name)))),o.a.createElement("h3",{style:{color:n?"#C5C6C7":""}},"Code Editor: "),o.a.createElement("textarea",{type:"text",ref:W,className:"App__code",style:{color:n?"":"#9DF9EF",backgroundColor:n?"#d8d8d8":"#282a36",border:""}}),o.a.createElement("div",{className:"App__buttons"},o.a.createElement(y.a,{variant:"contained",size:"large",color:"primary",startIcon:o.a.createElement(v.a,{style:{color:n?"black":""}}),style:{"margin-right":"10px",backgroundColor:n?"#66FCF1":""},onClick:L},o.a.createElement("span",{style:{fontFamily:"".concat(J.a),color:n?"black":"#EDF7F6"}},"Run")),o.a.createElement(y.a,{variant:"contained",disableFocusRipple:"false",size:"large",startIcon:o.a.createElement(O.a,{style:{color:n?"black":""}}),color:"secondary",style:{"margin-right":"10px",backgroundColor:n?"#FFA8B6":""},onClick:T},o.a.createElement("span",{style:{fontFamily:"".concat(J.a),color:n?"black":"#EDF7F6"}},"Compile")),o.a.createElement(y.a,{variant:"contained",size:"large",startIcon:o.a.createElement(k.a,{style:{color:n?"black":""}}),style:{backgroundColor:n?"#66FCF1":""},color:"primary",onClick:function(e){e.preventDefault();W.current.value=""}},o.a.createElement("span",{style:{fontFamily:"".concat(J.a),color:n?"black":"#EDF7F6"}},"Clear")))),o.a.createElement("div",{className:"App__right"},o.a.createElement("h3",{className:"App__smallH",style:{color:n?"#C5C6C7":""}},"Input(Stdin): "),o.a.createElement("textarea",{type:"text",ref:P,className:"App__input",style:{color:n?"":"#9DF9EF",backgroundColor:n?"#d8d8d8":"#282a36",border:" "}}),o.a.createElement("h3",{className:"App__smallH",style:{color:n?"#C5C6C7":""}},"Output(Stdout): "),o.a.createElement("textarea",{disabled:!0,value:F.value,className:"App__output",style:{color:n?"":"#9DF9EF",backgroundColor:n?"#d8d8d8":"#282a36",border:""}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},96:function(e,t,n){e.exports=n.p+"static/media/ARIAL.fa3228aa.TTF"}},[[223,1,2]]]);
//# sourceMappingURL=main.1ddb4e55.chunk.js.map