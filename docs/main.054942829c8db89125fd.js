(()=>{"use strict";var e,t={6499:(e,t,a)=>{var l=a(7378),n=a(1542),r=a(9461),s=a(906),c=a(4942),o=a(5870);let i;!function(e){e.CHANGE_DATES="CHANGE_DATES",e.SAVE_TABLE_DATA="SAVE_TABLE_DATA"}(i||(i={}));const u={date:{fromDate:1,toDate:1},data:[]},d=(e=u,t)=>{switch(t.type){case i.SAVE_TABLE_DATA:return{...e,data:t.payload};case i.CHANGE_DATES:return{...e,date:t.payload};default:return e}};let _;!function(e){e.SAVE_SALARY_DATA="SAVE_SALARY_DATA",e.SAVE_TOTAL_SUM="SAVE_TOTAL_SUM"}(_||(_={}));const m={data:null,total:null},b=(e=m,t)=>{switch(t.type){case _.SAVE_SALARY_DATA:return{...e,data:t.payload};case _.SAVE_TOTAL_SUM:return{...e,total:t.payload};default:return e}};let h;function A(){return{type:h.HIDE_SAVE_MODAL}}!function(e){e.SHOW_SAVE_MODAL="SHOW_SAVE_MODAL",e.HIDE_SAVE_MODAL="HIDE_SAVE_MODAL",e.DISABLE_MODAL_BTN="DISABLE_MODAL_BTN",e.ENABLE_MODAL_BTN="ENABLE_MODAL_BTN"}(h||(h={}));const p={visibility:!1,btnDisable:!0},N=(e=p,t)=>{switch(t.type){case h.DISABLE_MODAL_BTN:return{...e,btnDisable:!0};case h.ENABLE_MODAL_BTN:return{...e,btnDisable:!1};case h.SHOW_SAVE_MODAL:return{...e,visibility:!0};case h.HIDE_SAVE_MODAL:return{...e,visibility:!1};default:return e}};let x;!function(e){e.SAVE_DATE="SAVE_DATE"}(x||(x={}));const y={year:(new Date).toLocaleDateString().split(".")[2],month:(new Date).toLocaleDateString().split(".")[1]},E=(e=y,t)=>{switch(t.type){case x.SAVE_DATE:return{...e,...t.payload};default:return e}},j=((0,s.UY)({table:d,salary:b,modal:N,date:E}),(0,s.UY)({table:d,salary:b,modal:N,date:E})),f=(0,s.MT)(j,(0,c.Uo)((0,s.md)(o.Z))),S=r.v9,D=()=>S((e=>e.table.date));var v=a(4246);const O=()=>{const e=(0,r.I0)(),t=D(),[a,n]=(0,l.useState)(t),s=e=>{e.persist(),n((t=>({...t,[e.target.name]:Number(e.target.value)})))};return(0,v.jsxs)("div",{className:"tableCreator",children:[(0,v.jsxs)("label",{children:["С",(0,v.jsx)("input",{type:"text",name:"fromDate",className:"fromDate",onChange:s,value:a.fromDate})]}),(0,v.jsxs)("label",{children:["По",(0,v.jsx)("input",{type:"text",name:"toDate",className:"toDate",onChange:s,value:a.toDate})]}),(0,v.jsx)("button",{className:"tableBtn btn",onClick:()=>{return e((t=a,{type:i.CHANGE_DATES,payload:t}));var t},children:"Начертить таблицу"})]})},k=()=>(0,v.jsxs)("tr",{className:"table__row",children:[(0,v.jsx)("th",{className:"table__cell",children:"День"}),(0,v.jsx)("th",{className:"table__cell",children:"Имя работника"}),(0,v.jsx)("th",{className:"table__cell",children:"Выходной?"}),(0,v.jsx)("th",{className:"table__cell",children:"10 мин"}),(0,v.jsx)("th",{className:"table__cell",children:"20 мин"}),(0,v.jsx)("th",{className:"table__cell",children:"30 мин"}),(0,v.jsx)("th",{className:"table__cell",children:"60 мин"}),(0,v.jsx)("th",{className:"table__cell",children:"720 мин"}),(0,v.jsx)("th",{className:"table__cell",children:"план"})]}),L={PLAN:12,WEEKEND_PLAN:35,PLAN_COEF:{10:1,20:1.65,30:2.7,60:4.5,720:7.5},BONUS:{10:60,20:85,30:162,60:245,720:400},WEEKEND_BONUS:{10:55,20:65,30:148.5,60:180,720:300},RATE:1300};let T;!function(e){e.Dasha="Dasha",e.Nastya="Nastya",e.Oleg="Oleg"}(T||(T={}));const w={Dasha:"Даша",Nastya:"Настя",Oleg:"Олег"},V=()=>(0,v.jsx)("select",{name:"workerName",id:"workerName",className:"workerSelect",children:Object.entries(w).map((([e,t])=>(0,v.jsx)("option",{value:e,children:t},`worker/${e}`)))}),$=({rowNumber:e})=>{const t=e=>{e.target.select()};return(0,v.jsxs)("tr",{className:"table__row",children:[(0,v.jsx)("td",{className:"table__cell",children:(0,v.jsx)("input",{type:"number",defaultValue:e,disabled:!0})}),(0,v.jsx)("td",{className:"table__cell",children:(0,v.jsx)(V,{})}),(0,v.jsx)("td",{className:"table__cell",children:(0,v.jsx)("input",{type:"checkbox",name:"weekend"})}),(0,v.jsx)("td",{className:"table__cell",children:(0,v.jsx)("input",{type:"number",name:"min10",defaultValue:"",onFocus:t})}),(0,v.jsx)("td",{className:"table__cell",children:(0,v.jsx)("input",{type:"number",name:"min20",defaultValue:"",onFocus:t})}),(0,v.jsx)("td",{className:"table__cell",children:(0,v.jsx)("input",{type:"number",name:"min30",defaultValue:"",onFocus:t})}),(0,v.jsx)("td",{className:"table__cell",children:(0,v.jsx)("input",{type:"number",name:"min60",defaultValue:"",onFocus:t})}),(0,v.jsx)("td",{className:"table__cell",children:(0,v.jsx)("input",{type:"number",name:"min720",defaultValue:"",onFocus:t})}),(0,v.jsx)("td",{className:"table__cell",children:(0,v.jsx)("input",{type:"number",name:"plan",defaultValue:"",disabled:!0})})]})},B=()=>{const{fromDate:e,toDate:t}=D();let a=[];try{if(e>0&&t>0&&e<=t)for(let l=e;l<=t;l++)a.push((0,v.jsx)($,{rowNumber:l},`tableRow/Day:${l}`))}catch(e){return console.error(e),void console.error("Некорректные данные")}return(0,v.jsxs)("table",{className:"table",children:[(0,v.jsx)("thead",{children:(0,v.jsx)(k,{})}),(0,v.jsx)("tbody",{children:a})]})},C=()=>{let e=[];return document.querySelectorAll(".table__row").forEach((t=>{let a=t.querySelectorAll("td");if(a.length>0){const t=(e=>{const t={date:0,workerName:"",weekend:!1,tickets:{10:0,20:0,30:0,60:0,720:0},plan:0,planComplete:!1,bonus:0};return e.forEach(((e,a)=>{switch(a){case 0:t.date=Number(e.querySelector("input").value);break;case 1:t.workerName=e.querySelector("select").value;break;case 2:t.weekend=e.querySelector("input").checked;break;case 3:t.tickets[10]=Number(e.querySelector("input").value);break;case 4:t.tickets[20]=Number(e.querySelector("input").value);break;case 5:t.tickets[30]=Number(e.querySelector("input").value);break;case 6:t.tickets[60]=Number(e.querySelector("input").value);break;case 7:t.tickets[720]=Number(e.querySelector("input").value)}})),t})(a);let{weekend:l,tickets:n}=t;if((e=>{let t=!1;for(const a in e)""!==e[a]&&(t=!0);return t})(n)){t.plan=(e=>{const{PLAN_COEF:t}=L;let a=0;for(const l in e)a+=e[l]*t[l];return a=Number(a.toFixed(2)),a})(n);const r=a[8].querySelector("input");r.value=String(t.plan),t.planComplete=((e,t)=>{const{PLAN:a,WEEKEND_PLAN:l}=L;return!!(t&&e>=l)||!t&&e>=a})(t.plan,l),t.planComplete?(t.bonus=((e,t)=>{const a=t?L.WEEKEND_BONUS:L.BONUS;let l=0;for(const t in e)l+=e[t]*a[t];return l})(n,l),r.style.backgroundColor="#b6ff88"):r.style.backgroundColor="#ff8888",e.push(t)}}})),e},g=()=>{const e=(0,r.I0)();return(0,v.jsx)("button",{className:"calculateBtn btn",onClick:()=>{const t=C();e(function(e){return{type:i.SAVE_TABLE_DATA,payload:e}}(t));const a=(e=>{const{RATE:t}=L,a={};return e.forEach((e=>{const{workerName:l,bonus:n}=e;a[l]||(a[l]={rate:0,bonus:0}),a[l].rate+=t,a[l].bonus+=n})),a})(t);e(function(e){return{type:_.SAVE_SALARY_DATA,payload:e}}(a));let l=0;for(let e in a)l+=a[e].rate+a[e].bonus;e(function(e){return{type:_.SAVE_TOTAL_SUM,payload:e}}(l)),e({type:h.ENABLE_MODAL_BTN})},children:"Рассчитать"})},M=()=>{const e=(0,r.I0)(),t=S((e=>e.modal.btnDisable));return(0,v.jsx)("button",{className:"saveBtn btn",onClick:()=>{e({type:h.SHOW_SAVE_MODAL})},disabled:t,children:"Сохранить"})},q=({name:e,rate:t,bonus:a})=>(0,v.jsxs)("div",{className:"workerCard card",children:[(0,v.jsx)("div",{className:"card__name",children:e}),(0,v.jsxs)("div",{className:"card__rate",children:["Cтавка: ",t]}),(0,v.jsxs)("div",{className:"card__bonus",children:["Бонусы: ",a]}),(0,v.jsxs)("div",{className:"card__total",children:["Всего: ",(0,v.jsx)("span",{children:t+a})]})]}),H=()=>{const e=S((e=>e.salary.data)),t=S((e=>e.salary.total)),a=Object.entries(w).map((([t,a])=>{if(e?.[t])return(0,v.jsx)(q,{name:a,rate:e[t].rate,bonus:e[t].bonus},`workerSalary/${t}`)}));return(0,v.jsxs)("div",{children:[(0,v.jsx)(g,{}),(0,v.jsx)(M,{}),e&&a,t&&(0,v.jsxs)("div",{className:"totalSalary",children:["Общая сумма: ",(0,v.jsx)("span",{children:t})]})]})};var I=a(2926);const U=()=>{const e=(0,r.I0)(),{fromDate:t,toDate:a}=D(),l=S((e=>e.table.data)),n=S((e=>e.salary)),s=S((e=>e.date)),{month:c,year:o}=s;return(0,v.jsxs)("div",{className:"modal",children:[(0,v.jsx)("input",{type:"month",name:"month",className:"modal__month",defaultValue:`${o}-${c}`}),(0,v.jsx)("button",{className:"modal__btn btn",onClick:()=>{const r=document.querySelector(".modal__month");let[c,o]=r.value.split("-");e(function(e){return{type:x.SAVE_DATE,payload:e}}({year:c,month:o}));let i="";l.forEach((e=>{i+=((e,t)=>{const{month:a,year:l}=t,{date:n,workerName:r,weekend:s,tickets:c,plan:o,planComplete:i,bonus:u}=e;return`/------------${n}.${a}.${l}------------/\n${s?"Выходной день.":"Будний день."}\nНа смене ${w[r]}.\n${i?"План выполнен.":"План не выполнен."}\nСделано билетов: ${o}.\nИз них:\n    10 - ${c[10]},\n    20 - ${c[20]},\n    30 - ${c[30]},\n    60 - ${c[60]},\n    720 - ${c[720]}.\nБонус составил: ${u} рублей.\n/-----------------------------------/\n`})(e,s)})),i+=(e=>{let t="";return Object.entries(w).forEach((([a,l])=>{if(e.data[a]){const{rate:n,bonus:r}=e.data[a];t+=`\nЗа расчетный период ${l} заработала ${n+r}.\nИз них ставка - ${n} рублей, бонус - ${r} рублей.\n----\n`}})),`/------------ИТОГО------------/\n${t}\nОбщие затраты на зарплаты: ${e.total} рублей.\n`})(n);let u=new Blob([i],{type:"text/plain;charset=utf-8"});(0,I.saveAs)(u,`Зарплата ${t}-${a}.${o}.${c} .txt`),e(A())},children:"ОК"}),(0,v.jsx)("button",{className:"modal__btn btn",onClick:()=>e(A()),children:"Назад"})]})},F=()=>{const e=S((e=>e.modal.visibility));return(0,v.jsxs)("div",{className:"container",children:[(0,v.jsx)(O,{}),(0,v.jsx)(B,{}),(0,v.jsx)(H,{}),e&&(0,v.jsx)(U,{})]})};(0,n.render)((0,v.jsx)(l.StrictMode,{children:(0,v.jsx)(r.zt,{store:f,children:(0,v.jsx)(F,{})})}),document.getElementById("root"))}},a={};function l(e){var n=a[e];if(void 0!==n)return n.exports;var r=a[e]={exports:{}};return t[e].call(r.exports,r,r.exports,l),r.exports}l.m=t,e=[],l.O=(t,a,n,r)=>{if(!a){var s=1/0;for(i=0;i<e.length;i++){for(var[a,n,r]=e[i],c=!0,o=0;o<a.length;o++)(!1&r||s>=r)&&Object.keys(l.O).every((e=>l.O[e](a[o])))?a.splice(o--,1):(c=!1,r<s&&(s=r));c&&(e.splice(i--,1),t=n())}return t}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[a,n,r]},l.d=(e,t)=>{for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};l.O.j=t=>0===e[t];var t=(t,a)=>{var n,r,[s,c,o]=a,i=0;for(n in c)l.o(c,n)&&(l.m[n]=c[n]);if(o)var u=o(l);for(t&&t(a);i<s.length;i++)r=s[i],l.o(e,r)&&e[r]&&e[r][0](),e[s[i]]=0;return l.O(u)},a=self.webpackChunk=self.webpackChunk||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),l.O(void 0,[295],(()=>l(1202)));var n=l.O(void 0,[295],(()=>l(6499)));n=l.O(n)})();