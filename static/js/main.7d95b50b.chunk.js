(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{140:function(e,a,t){},142:function(e,a,t){},144:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(62),o=t.n(l),i=(t(76),t(18)),r=t(19),s=t(22),u=t(20),m=t(21),d=t(2),g=(t(78),function(e){var a=e.flags;return c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"textContainer"},"Flags of the World"),c.a.createElement("div",{className:"line1"},c.a.createElement("div",{className:"flag",style:{backgroundImage:"url(".concat(a[0],")")}}),c.a.createElement("div",{className:"flag",style:{backgroundImage:"url(".concat(a[1],")")}}),c.a.createElement("div",{className:"flag",style:{backgroundImage:"url(".concat(a[2],")")}}),c.a.createElement("div",{className:"flag",style:{backgroundImage:"url(".concat(a[3],")")}}),c.a.createElement("div",{className:"flag",style:{backgroundImage:"url(".concat(a[4],")")}})),c.a.createElement("div",{className:"line2"}),c.a.createElement("div",{className:"line3"},c.a.createElement("div",{className:"flag",style:{backgroundImage:"url(".concat(a[10],")")}}),c.a.createElement("div",{className:"flag",style:{backgroundImage:"url(".concat(a[11],")")}}),c.a.createElement("div",{className:"flag",style:{backgroundImage:"url(".concat(a[12],")")}}),c.a.createElement("div",{className:"flag",style:{backgroundImage:"url(".concat(a[13],")")}}),c.a.createElement("div",{className:"flag",style:{backgroundImage:"url(".concat(a[14],")")}})))}),v=t(69),p=(t(80),function(e){var a=e.text,t=e.onClick,n=e.type,l="btn-flag";return e.delay&&(l="btn-flag showUp"),c.a.createElement("button",{className:l,type:n||"button",onClick:t},a)}),f=(t(82),function(e){var a=e.options||[],t=e.handleChange,n=e.handleSubmit,l=a.map(function(e,a){return c.a.createElement("label",{key:e.id,className:"label".concat(a)},c.a.createElement("input",{type:"radio",value:e.id,checked:e.checked,onChange:t,name:"flag-choice",className:"radio-input"}),c.a.createElement("span",{className:"radio-button"}),e.name)});return console.log(e.options),c.a.createElement("form",{className:"flag-form",onSubmit:n},l,c.a.createElement(p,{text:"GUESS FLAG",delay:!1,type:"submit"}))}),h=(t(84),t(49),function(e){var a=e.capital,t=e.region,n=e.subregion,l=e.population,o=(e.flag,e.answer),i=e.nativeName,r=c.a.createElement("div",{className:"textWrapper"},c.a.createElement("div",{className:"openingText"},"Correct!"),c.a.createElement("div",{className:"infoText"},"".concat(o," (").concat(i,") is situated in ").concat(t," and is a part of ").concat(n,". It has population of ").concat(l," and the capital city is ").concat(a,".")));return o===i&&(r=c.a.createElement("div",{className:"textWrapper"},c.a.createElement("div",{className:"openingText"},"Correct!"),c.a.createElement("div",{className:"infoText"},"".concat(o," is situated in ").concat(t," and is a part of ").concat(n,". It has population of ").concat(l," and the capital city is ").concat(a,".")))),void 0===a&&(r=c.a.createElement("div",{className:"textWrapper"},c.a.createElement("div",{className:"openingText"},"Correct!"),c.a.createElement("div",{className:"infoText"},"".concat(o," is situated in ").concat(t," and is a part of ").concat(n,". It has population of ").concat(l,".")))),c.a.createElement("div",null,r)}),E=function(e){var a=e.answer;return c.a.createElement("div",{className:"textWrapper"},c.a.createElement("div",{className:"openingText"},"Incorrect!"),c.a.createElement("div",{className:"infoText"},"Correct answer: ".concat(a)))},b=function(e){var a=e.correct,t=e.answer,n=e.onNext,l=e.capital,o=e.region,i=e.subregion,r=e.population,s=e.flag,u=e.nativeName,m={backgroundImage:""};return a&&(m={backgroundImage:"radial-gradient( rgba(30,145,214,.88),rgba(88,173,221,.95)), url(".concat(s,")")}),c.a.createElement("div",{className:"flag-answer",style:m},a?c.a.createElement(h,{answer:t,capital:l,region:o,subregion:i,population:r,flag:s,nativeName:u}):c.a.createElement(E,{answer:t}),c.a.createElement(p,{text:"NEXT",delay:!0,onClick:n}))},N=(t(87),function(e){var a={display:"none"};return e.show&&(a={display:"block"}),c.a.createElement("header",{className:"header",style:a},c.a.createElement("p",null,"Flags of the World"))}),y=(t(89),t(145)),k=t(147),O=t(149),j=t(151),w=t(146),x=t(148),C=t(150),S=t(152),_=1,I=2,T=3,W=function(){var e="https://antebozic.github.io/country-flag/";return c.a.createElement("div",{className:"navigation"},c.a.createElement("input",{type:"checkbox",className:"navigation__checkbox",id:"navi-toggle"}),c.a.createElement("label",{for:"navi-toggle",className:"navigation__button"},c.a.createElement("span",{className:"navigation__icon"},"\xa0")),c.a.createElement("div",{className:"navigation__background"},"\xa0"),c.a.createElement("nav",{className:"navigation__nav"},c.a.createElement("ul",{className:"navigation__list"},"Rules are simple, try to guess the flag and you'll get to know more about the country.",c.a.createElement("br",null),"If you like the game, feel free to share. Enjoy!",c.a.createElement("div",{className:"socialMediaWrap"},c.a.createElement(y.a,{url:e},c.a.createElement(w.a,{size:75,round:!0})),c.a.createElement(k.a,{url:e},c.a.createElement(x.a,{size:75,round:!0})),c.a.createElement(O.a,{url:e},c.a.createElement(C.a,{size:75,round:!0})),c.a.createElement(j.a,{url:e},c.a.createElement(S.a,{size:75,round:!0}))))))},q=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).state={userChoice:void 0},t.handleChange=t.handleChange.bind(Object(d.a)(Object(d.a)(t))),t.handleSubmit=t.handleSubmit.bind(Object(d.a)(Object(d.a)(t))),t}return Object(m.a)(a,e),Object(r.a)(a,[{key:"handleChange",value:function(e){this.setState({userChoice:Number(e.target.value)})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onGuess(this.state.userChoice)}},{key:"render",value:function(){var e=this.props,a=e.capital,t=(e.lang,e.region),n=e.subregion,l=e.population,o=e.flag,i=e.questionState,r=e.options,s=e.answerText,u=e.onNext,m=e.correctOption,d=e.nativeName,g="".concat(s," is ").concat(t," and ").concat(n," that ").concat(d," and ").concat(l," and ").concat(a);s===d&&(g="".concat(s," is ").concat(t," and ").concat(n," that no native name and ").concat(l," and ").concat(a)),console.log(g);var p=i===_,h=this.state.userChoice,E=r.map(function(e){return Object(v.a)({},e,{checked:h===e.id})}),y=i===_?c.a.createElement(f,{handleChange:this.handleChange,handleSubmit:this.handleSubmit,options:E}):c.a.createElement(b,{correctOption:m,options:r,questionState:i,correct:i===T,onNext:u,answer:s,capital:a,region:t,subregion:n,population:l,flag:o,nativeName:d}),k=c.a.createElement("div",null);return i===_&&(k=c.a.createElement("div",{className:"flag-div"},c.a.createElement("img",{className:"flag-img",src:o,alt:"Guess the flag"}))),c.a.createElement("div",{className:"questionWrapper"},c.a.createElement(W,null),c.a.createElement(N,{show:p}),y,k)}}]),a}(n.Component);q.defaultProps={options:[]};var G=q,M=t(47),F=t.n(M),z=(t(140),t(68)),A=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).state={countries:[],options:[],animation:!0,flags:[],correctOption:void 0,questionState:void 0},t.onGuess=t.onGuess.bind(Object(d.a)(Object(d.a)(t))),t.nextQuestion=t.nextQuestion.bind(Object(d.a)(Object(d.a)(t))),t.endAnimation=t.endAnimation.bind(Object(d.a)(Object(d.a)(t))),t._getFlags=t._getFlags.bind(Object(d.a)(Object(d.a)(t))),t}return Object(m.a)(a,e),Object(r.a)(a,[{key:"endAnimation",value:function(){var e=this;setTimeout(function(){e.setState({animation:!1})},5e3)}},{key:"apiCall",value:function(){var e=this;fetch("https://restcountries.eu/rest/v2/all").then(function(e){return e.json()}).then(function(a){var t=Math.floor(Math.random()*a.length),n=e._getOptions(t,a);e._getFlags(a),e.setState({countries:a,correctOption:t,options:n,questionState:_})}).catch(console.warn)}},{key:"componentDidMount",value:function(){this.endAnimation(),this.apiCall()}},{key:"onGuess",value:function(e){var a=e===this.state.correctOption?T:I;this.setState({questionState:a})}},{key:"nextQuestion",value:function(){var e=Math.floor(Math.random()*this.state.countries.length),a=this._getOptions(e,this.state.countries);this.setState({correctOption:e,options:a,questionState:_})}},{key:"_getFlags",value:function(e){var a=e.map(function(e){return e.flag});F()(a),a=a.slice(0,15),this.setState({flags:a})}},{key:"_getOptions",value:function(e,a){for(var t=[e],n=0;t.length<4&&n<15;){var c=Math.floor(Math.random()*a.length);-1===t.indexOf(c)?t.push(c):n++}return F()(t)}},{key:"render",value:function(){console.log(this.state.flags);var e=this.state,a=e.countries,t=e.correctOption,n=e.options,l=e.questionState,o=c.a.createElement("div",{className:"spinnerWrap"},c.a.createElement("div",{class:"lds-spinner"},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null)));if(void 0!==t){var i=a[t],r=i.flag,s=i.name,u=i.capital,m=i.region,d=i.subregion,v=i.population,p=i.nativeName,f=a[t].languages[0].name;console.log(r),console.log(s),console.log(u);var h=n.map(function(e){return{id:e,name:a[e].name,capital:a[e].capital,lang:a[e].languages[0].name}});o=this.state.animation?c.a.createElement(g,{flags:this.state.flags}):c.a.createElement(G,{correctOption:t,answerText:s,onGuess:this.onGuess,onNext:this.nextQuestion,options:h,questionState:l,flag:r,capital:u,lang:f,region:m,subregion:d,population:v,nativeName:p})}return c.a.createElement("div",null,o,c.a.createElement(z.Offline,null,c.a.createElement("div",{className:"showConn"},c.a.createElement("h2",null,"There is a problem with your internet connection!"))))}}]),a}(n.Component),Q=(t(142),function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"flag-app"},c.a.createElement(A,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},49:function(e,a,t){},71:function(e,a,t){e.exports=t(144)},76:function(e,a,t){},78:function(e,a,t){},80:function(e,a,t){},82:function(e,a,t){},84:function(e,a,t){},87:function(e,a,t){},89:function(e,a,t){}},[[71,2,1]]]);
//# sourceMappingURL=main.7d95b50b.chunk.js.map