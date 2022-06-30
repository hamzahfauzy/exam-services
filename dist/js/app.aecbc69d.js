(function(){"use strict";var e={933:function(e,t,a){var n=a(963),o=a(252);function r(e,t){const a=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(a)}var s=a(744);const i={},l=(0,s.Z)(i,[["render",r]]);var c=l,u=a(119),d=a(577),h=a.p+"img/logo.4f2756aa.png";const p=(0,o._)("img",{src:h,alt:"logo",width:"250"},null,-1),m=(0,o._)("h2",null,"Arunika Test Platform",-1),g=["onClick"],w=(0,o._)("p",null,"Arunika IT Department 2022",-1);function f(e,t,a,r,s,i){const l=(0,o.up)("CardVue");return(0,o.wg)(),(0,o.j4)(l,null,{header:(0,o.w5)((()=>[p,m])),body:(0,o.w5)((()=>[(0,o._)("p",null,(0,d.zw)(e.participant.name),1),(0,o._)("p",null,(0,d.zw)(e.participant.id_number),1),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.exams,(e=>(0,o.wy)(((0,o.wg)(),(0,o.iD)("button",{class:"primary",key:e.id,onClick:t=>i.handleStart(e)},(0,d.zw)("start"==e.status?"Lanjutkan":"Mulai"),9,g)),[[n.F8,"start"==e.status||""==e.status]]))),128)),(0,o._)("button",{class:"secondary",onClick:t[0]||(t[0]=(...e)=>i.logout&&i.logout(...e))},"Keluar")])),footer:(0,o.w5)((()=>[w])),_:1})}const y={class:"card"},_={class:"card-header"},b={class:"card-body"},v={class:"card-footer"};function k(e,t,a,n,r,s){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",y,[(0,o._)("div",_,[(0,o.WI)(e.$slots,"header")]),(0,o._)("div",b,[(0,o.WI)(e.$slots,"body")]),(0,o._)("div",v,[(0,o.WI)(e.$slots,"footer")])])])}var C={props:["title","header"]};const x=(0,s.Z)(C,[["render",k]]);var I=x;const S="https://arunikaconsulting.et.r.appspot.com/";async function j(e){const t=await fetch(S+"index.php?module=auth/login",{method:"POST",body:e}),a=await t.json();return localStorage.setItem("token",a.data.auth_key),a}async function T(){const e=localStorage.getItem("token"),t=await fetch(S+"index.php?module=dashboard/index",{headers:{Authorization:"Bearer "+e}}),a=await t.json();return a}async function D(e){const t=localStorage.getItem("token"),a=await fetch(S+"index.php?module=sequences/start",{method:"POST",headers:{Authorization:"Bearer "+t},body:e}),n=await a.json();return n}async function $(e){const t=localStorage.getItem("token"),a=await fetch(S+"index.php?module=sequences/categories&exam_id="+e,{headers:{Authorization:"Bearer "+t}}),n=await a.json();return n}async function A(e){const t=localStorage.getItem("token"),a=await fetch(S+"index.php?module=sequences/single-categories&category_id="+e,{headers:{Authorization:"Bearer "+t}}),n=await a.json();return n}async function O(e){const t=localStorage.getItem("token"),a=await fetch(S+"index.php?module=sequences/answer",{method:"POST",headers:{Authorization:"Bearer "+t},body:e}),n=await a.json();return n}async function V(e){const t=localStorage.getItem("token"),a=await fetch(S+"index.php?module=sequences/finish",{method:"POST",headers:{Authorization:"Bearer "+t},body:e}),n=await a.json();return n}var N={name:"HomeView",components:{CardVue:I},data:()=>({participant:{},exams:[]}),created(){this.init()},methods:{async init(){const e=await T();this.participant=e.data.participant,this.exams=e.data.exams,console.log(e)},logout(){localStorage.removeItem("token"),window.location.reload()},async handleStart(e){if("start"==e.status){const t=await $(e.exam_id);localStorage.setItem("categories",JSON.stringify(t.data)),localStorage.setItem("selectedCategory",localStorage.getItem("selectedCategory")??0),this.$router.push({name:"exam",params:{id:e.exam_id}})}else this.$router.push({name:"start",params:{id:e.exam_id}})}}};const P=(0,s.Z)(N,[["render",f]]);var z=P;const H=(0,o._)("h2",null,"Biodata",-1),L={class:"form-group"},U=(0,o._)("label",{for:""},"Nama",-1),M={class:"form-group"},q=(0,o._)("label",{for:""},"Asal Sekolah",-1),B={class:"form-group"},E=(0,o._)("label",{for:""},"Tempat Tanggal Lahir",-1),K={class:"between"},Z={class:"form-group"},F=(0,o._)("label",{for:""},"No Handphone",-1),W={class:"between"},J=(0,o._)("button",{class:"two primary"},"Mulai",-1),Y=(0,o._)("p",null,"Arunika IT Department 2022",-1);function G(e,t,a,r,s,i){const l=(0,o.up)("CardVue");return(0,o.wg)(),(0,o.j4)(l,null,{header:(0,o.w5)((()=>[H])),body:(0,o.w5)((()=>[(0,o._)("form",{onSubmit:t[6]||(t[6]=(...e)=>i.handleSubmit&&i.handleSubmit(...e)),class:"form"},[(0,o._)("div",L,[U,(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=t=>e.name=t),placeholder:"Nama..."},null,512),[[n.nr,e.name]])]),(0,o._)("div",M,[q,(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=t=>e.school=t),placeholder:"Asal Sekolah..."},null,512),[[n.nr,e.school]])]),(0,o._)("div",B,[E,(0,o._)("div",K,[(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=t=>e.place_birth=t),placeholder:"Tempat Lahir..."},null,512),[[n.nr,e.place_birth]]),(0,o.wy)((0,o._)("input",{type:"date","onUpdate:modelValue":t[3]||(t[3]=t=>e.date_birth=t),placeholder:"Tanggal Lahir..."},null,512),[[n.nr,e.date_birth]])])]),(0,o._)("div",Z,[F,(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=t=>e.handphone=t),placeholder:"No Handphone..."},null,512),[[n.nr,e.handphone]])]),(0,o._)("div",W,[(0,o._)("button",{type:"button",class:"one secondary",onClick:t[5]||(t[5]=t=>e.$router.go(-1))},"Kembali"),J])],32)])),footer:(0,o.w5)((()=>[Y])),_:1})}var Q={components:{CardVue:I},data:()=>({name:"",school:"",place_birth:"",date_birth:"",handphone:""}),methods:{async handleSubmit(e){e.preventDefault();let t=new FormData;t.append("user_metas[name]",this.name),t.append("user_metas[school]",this.school),t.append("user_metas[place_birth]",this.place_birth),t.append("user_metas[date_birth]",this.date_birth),t.append("user_metas[handphone]",this.handphone),t.append("exam_id",this.$route.params.id);let a=await D(t);"success"==a.status&&this.$router.push({name:"exam",params:{id:this.$route.params.id}})}}};const R=(0,s.Z)(Q,[["render",G]]);var X=R;const ee=(0,o._)("img",{src:h,alt:"logo",width:"250"},null,-1),te=(0,o._)("h2",null,"Arunika Test Platform",-1),ae=(0,o._)("p",null,"Ujian Selesai",-1),ne=(0,o._)("button",{class:"primary"},"Kembali ke Halaman Utama",-1),oe=(0,o._)("p",null,"Arunika IT Department 2022",-1);function re(e,t,a,n,r,s){const i=(0,o.up)("router-link"),l=(0,o.up)("CardVue");return(0,o.wg)(),(0,o.j4)(l,null,{header:(0,o.w5)((()=>[ee,te])),body:(0,o.w5)((()=>[ae,(0,o.Wm)(i,{to:"/"},{default:(0,o.w5)((()=>[ne])),_:1})])),footer:(0,o.w5)((()=>[oe])),_:1})}var se={components:{CardVue:I}};const ie=(0,s.Z)(se,[["render",re]]);var le=ie;const ce={class:"between"},ue={key:0},de=["innerHTML"],he=["onClick"],pe=["id"],me=["for","innerHTML"],ge={class:"between"},we=(0,o._)("p",null,"Arunika IT Department 2022",-1);function fe(e,t,a,n,r,s){const i=(0,o.up)("CardVue");return(0,o.wg)(),(0,o.j4)(i,null,{header:(0,o.w5)((()=>[(0,o._)("div",ce,[(0,o._)("h2",null,(0,d.zw)(e.selectedCategory.name),1),e.selectedCategory.has_timer?((0,o.wg)(),(0,o.iD)("p",ue,(0,d.zw)(e.count),1)):(0,o.kq)("",!0)])])),body:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.selectedCategory.posts,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e.id,class:"exam"},[(0,o._)("p",{innerHTML:e.post_content},null,8,de),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.items,(t=>((0,o.wg)(),(0,o.iD)("div",{class:"option",key:"exam-"+e.id+"-option-"+t.id,onClick:a=>s.handleAnswer(e,t)},[(0,o._)("input",{type:"radio",name:"konten",id:"exam-"+e.id+"-option-"+t.id},null,8,pe),(0,o._)("label",{for:"exam-"+e.id+"-option-"+t.id,innerHTML:t.post_content},null,8,me)],8,he)))),128))])))),128)),(0,o._)("div",ge,[(0,o._)("button",{class:"one secondary",onClick:t[0]||(t[0]=(...e)=>s.handlePrev&&s.handlePrev(...e))},"Kembali"),(0,o._)("button",{class:"two primary",onClick:t[1]||(t[1]=(...e)=>s.handleNext&&s.handleNext(...e))},(0,d.zw)(s.selectedCategoryIdx==s.categories.length-1?"Selesai":"Selanjutnya"),1)])])),footer:(0,o.w5)((()=>[we])),_:1})}var ye={components:{CardVue:I},data:()=>({selectedCategory:{},interval:null,counts:[],count:"00:00:00",time:0}),async created(){await this.load(),"Countdown"==this.selectedCategory.has_timer&&this.countdown()},computed:{categories(){return JSON.parse(localStorage.getItem("categories"))},selectedCategoryIdx(){return parseInt(localStorage.getItem("selectedCategory"))},currentCategory(){return this.categories[this.selectedCategoryIdx]}},methods:{async load(){const e=await A(this.currentCategory.id);this.selectedCategory=e.data,"Countdown"==e.data.has_timer&&(this.selectedCategory.countdown=this.currentCategory.countdown,this.counts=this.selectedCategory.countdown.split(":"),this.time=parseInt(this.counts[2]),this.time+=60*parseInt(this.counts[1]),this.time+=60*parseInt(this.counts[0])*60)},countdown(){this.interval=setInterval((()=>{this.counts[1]<0&&this.counts[0]>0&&(this.counts[0]-=1,this.counts[1]=59),this.counts[2]<0&&this.counts[1]>0&&(this.counts[1]-=1,this.counts[2]=59),0==this.time?this.handleNext():this.count=`${this.counts[0]}:${this.counts[1]}:${this.counts[2]}`,this.counts[2]--,this.time--,this.selectedCategory.countdown=`${this.counts[0]}:${this.counts[1]}:${this.counts[2]}`,this.categories.forEach((e=>{e.id==this.selectedCategory.id&&(e.countdown=this.selectedCategory.countdown)}),this.categories),localStorage.setItem("categories",JSON.stringify(this.categories))}),1e3)},handlePrev(){0==this.selectedCategoryIdx?this.$router.go(-1):(localStorage.setItem("selectedCategory",this.selectedCategoryIdx-1),window.location.reload())},async handleNext(){if(await clearInterval(this.interval),this.selectedCategoryIdx==this.categories.length-1){let e=new FormData;e.append("exam_id",this.$route.params.id);const t=await V(e);console.log(t),this.$router.push({name:"finish"})}else localStorage.setItem("selectedCategory",this.selectedCategoryIdx+1),window.location.reload()},async handleAnswer(e,t){let a=new FormData;a.append("exam_id",this.$route.params.id),a.append("question_id",e.id),a.append("answer_id",t.id);const n=await O(a);console.log(n)}}};const _e=(0,s.Z)(ye,[["render",fe]]);var be=_e;const ve=(0,o._)("img",{src:h,alt:"logo",width:"250"},null,-1),ke=(0,o._)("h2",null,"Arunika Test Platform",-1),Ce={class:"form-group"},xe=(0,o._)("label",{for:""},"Nama Pengguna / Nomor Ujian",-1),Ie=(0,o._)("button",{class:"primary"},"Masuk",-1),Se=(0,o._)("p",null,"Arunika IT Department 2022",-1);function je(e,t,a,r,s,i){const l=(0,o.up)("CardVue");return(0,o.wg)(),(0,o.j4)(l,null,{header:(0,o.w5)((()=>[ve,ke])),body:(0,o.w5)((()=>[(0,o._)("form",{onSubmit:t[1]||(t[1]=(...e)=>i.handleLogin&&i.handleLogin(...e)),class:"form"},[(0,o._)("div",Ce,[xe,(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=t=>e.username=t)},null,512),[[n.nr,e.username]])]),Ie],32)])),footer:(0,o.w5)((()=>[Se])),_:1})}var Te={components:{CardVue:I},data:()=>({username:""}),methods:{async handleLogin(e){e.preventDefault();let t=new FormData;t.append("username",this.username);const a=await j(t);"success"==a.status&&window.location.reload()}}};const De=(0,s.Z)(Te,[["render",je]]);var $e=De;const Ae=[{path:"/",name:"home",component:z,beforeEnter:(e,t,a)=>{var n=window.localStorage.getItem("token");null==n?a({name:"login"}):a()}},{path:"/start/:id",name:"start",component:X,beforeEnter:(e,t,a)=>{var n=window.localStorage.getItem("token");null==n?a({name:"login"}):a()}},{path:"/exam/:id",name:"exam",component:be,beforeEnter:(e,t,a)=>{var n=window.localStorage.getItem("token");null==n?a({name:"login"}):a()}},{path:"/finish",name:"finish",component:le,beforeEnter:(e,t,a)=>{var n=window.localStorage.getItem("token");null==n?a({name:"login"}):a()}},{path:"/login",name:"login",component:$e,beforeEnter:(e,t,a)=>{var n=window.localStorage.getItem("token");null!=n?a({name:"home"}):a()}}],Oe=(0,u.p7)({history:(0,u.r5)(),routes:Ae});var Ve=Oe,Ne=a(907),Pe=(0,Ne.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,n.ri)(c).use(Pe).use(Ve).mount("#app")}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,n,o,r){if(!n){var s=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],r=e[u][2];for(var i=!0,l=0;l<n.length;l++)(!1&r||s>=r)&&Object.keys(a.O).every((function(e){return a.O[e](n[l])}))?n.splice(l--,1):(i=!1,r<s&&(s=r));if(i){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,o,r]}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,r,s=n[0],i=n[1],l=n[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(l)var u=l(a)}for(t&&t(n);c<s.length;c++)r=s[c],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(u)},n=self["webpackChunkclient"]=self["webpackChunkclient"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(933)}));n=a.O(n)})();
//# sourceMappingURL=app.aecbc69d.js.map