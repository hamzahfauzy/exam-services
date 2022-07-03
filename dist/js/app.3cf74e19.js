(function(){"use strict";var e={453:function(e,t,a){var n=a(963),o=a(252);function r(e,t){const a=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(a)}var s=a(744);const i={},l=(0,s.Z)(i,[["render",r]]);var u=l,c=a(119),d=a(577),h=a.p+"img/logo.4f2756aa.png";const m=(0,o._)("img",{src:h,alt:"logo",width:"250"},null,-1),p=(0,o._)("h2",null,"Arunika Test Platform",-1),g={key:0},w=["onClick"],f=(0,o._)("p",null,"Arunika IT Department 2022",-1);function y(e,t,a,r,s,i){const l=(0,o.up)("CardVue");return(0,o.wg)(),(0,o.j4)(l,null,{header:(0,o.w5)((()=>[m,p])),body:(0,o.w5)((()=>[e.participant?((0,o.wg)(),(0,o.iD)("div",g,[(0,o._)("p",null,(0,d.zw)(e.participant.name),1),(0,o._)("p",null,(0,d.zw)(e.participant.id_number),1),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.exams,(e=>(0,o.wy)(((0,o.wg)(),(0,o.iD)("button",{class:"btn-home primary",key:e.id,onClick:t=>i.handleStart(e)},(0,d.zw)("start"==e.status?"Lanjutkan":"Mulai"),9,w)),[[n.F8,e.exam.in_time||"start"==e.status]]))),128)),(0,o._)("button",{class:"btn-home secondary",onClick:t[0]||(t[0]=(...e)=>i.doLogout&&i.doLogout(...e))},"Keluar")])):(0,o.kq)("",!0)])),footer:(0,o.w5)((()=>[f])),_:1})}const _={class:"card"},v={class:"card-header"},b={class:"card-body"},x={class:"card-footer"};function I(e,t,a,n,r,s){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",_,[(0,o._)("div",v,[(0,o.WI)(e.$slots,"header")]),(0,o._)("div",b,[(0,o.WI)(e.$slots,"body")]),(0,o._)("div",x,[(0,o.WI)(e.$slots,"footer")])])])}var k={props:["title","header"]};const C=(0,s.Z)(k,[["render",I]]);var S=C;const $="https://arunikaconsulting.et.r.appspot.com/";async function j(e){const t=await fetch($+"index.php?module=auth/login",{method:"POST",body:e}),a=await t.json();return localStorage.setItem("token",a.data.auth_key),a}async function T(){const e=localStorage.getItem("token"),t=await fetch($+"index.php?module=dashboard/index",{headers:{Authorization:"Bearer "+e}}),a=await t.json();return a}async function D(e){const t=localStorage.getItem("token"),a=await fetch($+"index.php?module=sequences/start",{method:"POST",headers:{Authorization:"Bearer "+t},body:e}),n=await a.json();return n}async function z(e){const t=localStorage.getItem("token"),a=await fetch($+"index.php?module=sequences/categories&exam_id="+e,{headers:{Authorization:"Bearer "+t}}),n=await a.json();return n}async function A(e,t){const a=localStorage.getItem("token"),n=await fetch($+"index.php?module=sequences/single-categories&category_id="+e+"&exam_id="+t,{headers:{Authorization:"Bearer "+a}}),o=await n.json();return o}async function O(e,t){const a=localStorage.getItem("token");var n=new FormData;n.append("exam_id",e),n.append("category_index",t);const o=await fetch($+"index.php?module=sequences/save-category-index",{method:"POST",headers:{Authorization:"Bearer "+a},body:n}),r=await o.json();return r}async function V(e){const t=localStorage.getItem("token"),a=await fetch($+"index.php?module=sequences/answer",{method:"POST",headers:{Authorization:"Bearer "+t},body:e}),n=await a.json();return n}async function L(e){const t=localStorage.getItem("token"),a=await fetch($+"index.php?module=sequences/finish",{method:"POST",headers:{Authorization:"Bearer "+t},body:e}),n=await a.json();return n}function U(){localStorage.removeItem("token")}var N={name:"HomeView",components:{CardVue:S},data:()=>({participant:{},exams:[]}),created(){this.init()},methods:{async init(){const e=await T();"Unauthorized"==e.message&&this.doLogout(),this.participant=e.data.participant,this.exams=e.data.exams},doLogout(){U(),this.$router.push({name:"login"})},async handleStart(e){if("start"==e.status){const t=await z(e.exam_id);"Unauthorized"==t.message&&this.doLogout(),localStorage.setItem("categories",JSON.stringify(t.data)),localStorage.setItem("selectedCategory",e.category_index??0),this.$router.push({name:"exam",params:{id:e.exam_id}})}else this.$router.push({name:"start",params:{id:e.exam_id}})}}};const P=(0,s.Z)(N,[["render",y]]);var H=P;const q=(0,o._)("h2",null,"Biodata",-1),B={class:"form-group"},M=(0,o._)("label",{for:""},"Nama",-1),F={class:"form-group"},Z=(0,o._)("label",{for:""},"Asal Sekolah",-1),E={class:"form-group"},K=(0,o._)("label",{for:""},"Tempat Tanggal Lahir",-1),W={class:"between"},J={class:"form-group"},Y=(0,o._)("label",{for:""},"No Handphone",-1),G={class:"between"},Q=(0,o._)("button",{class:"two primary"},"Mulai",-1),R=(0,o._)("p",null,"Arunika IT Department 2022",-1);function X(e,t,a,r,s,i){const l=(0,o.up)("CardVue");return(0,o.wg)(),(0,o.j4)(l,null,{header:(0,o.w5)((()=>[q])),body:(0,o.w5)((()=>[(0,o._)("form",{onSubmit:t[6]||(t[6]=(...e)=>i.handleSubmit&&i.handleSubmit(...e)),class:"form"},[(0,o._)("div",B,[M,(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=t=>e.name=t),placeholder:"Nama..."},null,512),[[n.nr,e.name]])]),(0,o._)("div",F,[Z,(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=t=>e.school=t),placeholder:"Asal Sekolah..."},null,512),[[n.nr,e.school]])]),(0,o._)("div",E,[K,(0,o._)("div",W,[(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=t=>e.place_birth=t),placeholder:"Tempat Lahir..."},null,512),[[n.nr,e.place_birth]]),(0,o.wy)((0,o._)("input",{type:"date","onUpdate:modelValue":t[3]||(t[3]=t=>e.date_birth=t),placeholder:"Tanggal Lahir..."},null,512),[[n.nr,e.date_birth]])])]),(0,o._)("div",J,[Y,(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=t=>e.handphone=t),placeholder:"No Handphone..."},null,512),[[n.nr,e.handphone]])]),(0,o._)("div",G,[(0,o._)("button",{type:"button",class:"one secondary",onClick:t[5]||(t[5]=t=>e.$router.go(-1))},"Kembali"),Q])],32)])),footer:(0,o.w5)((()=>[R])),_:1})}var ee={components:{CardVue:S},data:()=>({name:"",school:"",place_birth:"",date_birth:"",handphone:""}),methods:{async handleSubmit(e){e.preventDefault();let t=new FormData;t.append("user_metas[name]",this.name),t.append("user_metas[school]",this.school),t.append("user_metas[place_birth]",this.place_birth),t.append("user_metas[date_birth]",this.date_birth),t.append("user_metas[handphone]",this.handphone),t.append("exam_id",this.$route.params.id);let a=await D(t);"Unauthorized"==a.message&&(U(),this.$router.push({name:"login"})),"success"==a.status&&(localStorage.setItem("selectedCategory",0),this.$router.push({name:"exam",params:{id:this.$route.params.id}}))}}};const te=(0,s.Z)(ee,[["render",X]]);var ae=te;const ne=(0,o._)("img",{src:h,alt:"logo",width:"250"},null,-1),oe=(0,o._)("h2",null,"Arunika Test Platform",-1),re=(0,o._)("p",null,"Ujian Selesai",-1),se=(0,o._)("button",{class:"primary"},"Kembali ke Halaman Utama",-1),ie=(0,o._)("p",null,"Arunika IT Department 2022",-1);function le(e,t,a,n,r,s){const i=(0,o.up)("router-link"),l=(0,o.up)("CardVue");return(0,o.wg)(),(0,o.j4)(l,null,{header:(0,o.w5)((()=>[ne,oe])),body:(0,o.w5)((()=>[re,(0,o.Wm)(i,{to:"/"},{default:(0,o.w5)((()=>[se])),_:1})])),footer:(0,o.w5)((()=>[ie])),_:1})}var ue={components:{CardVue:S}};const ce=(0,s.Z)(ue,[["render",le]]);var de=ce;const he={class:"between"},me={key:0},pe=["innerHTML"],ge=["name","id","onChange","checked"],we=["for","innerHTML"],fe={class:"between"},ye=(0,o._)("p",null,"Arunika IT Department 2022",-1);function _e(e,t,a,n,r,s){const i=(0,o.up)("CardVue");return(0,o.wg)(),(0,o.j4)(i,null,{header:(0,o.w5)((()=>[(0,o._)("div",he,[(0,o._)("h2",null,(0,d.zw)(e.selectedCategory.name),1),e.selectedCategory.has_timer&&"No"!=e.selectedCategory.has_timer?((0,o.wg)(),(0,o.iD)("p",me,(0,d.zw)(e.count),1)):(0,o.kq)("",!0)])])),body:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.selectedCategory.posts,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e.id,class:"exam"},[(0,o._)("p",{innerHTML:e.post_content},null,8,pe),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.items,(t=>((0,o.wg)(),(0,o.iD)("div",{class:"option",key:"exam-"+e.id+"-option-"+t.id},[(0,o._)("input",{type:"radio",name:"option-"+e.id,id:"exam-"+e.id+"-option-"+t.id,onChange:a=>s.handleAnswer(e,t),checked:parseInt(t.selected)},null,40,ge),(0,o._)("label",{for:"exam-"+e.id+"-option-"+t.id,innerHTML:t.post_content},null,8,we)])))),128))])))),128)),(0,o._)("div",fe,[(0,o._)("button",{class:"full primary",onClick:t[0]||(t[0]=(...e)=>s.handleNext&&s.handleNext(...e))},(0,d.zw)(e.selectedCategoryIdx==e.categories.length-1?"Selesai":"Selanjutnya"),1)])])),footer:(0,o.w5)((()=>[ye])),_:1})}var ve={components:{CardVue:S},data:()=>({selectedCategory:{},interval:null,counts:[],count:"00:00:00",time:0,selectedCategoryIdx:localStorage.getItem("selectedCategory"),categories:JSON.parse(localStorage.getItem("categories"))}),async created(){await this.load()},computed:{currentCategory(){return this.categories[this.selectedCategoryIdx]}},methods:{async load(){var e=this.$route.params.id;const t=await A(this.currentCategory.id,e);"Unauthorized"==t.message&&(U(),this.$router.push({name:"login"})),this.selectedCategory=t.data;let a=t.data.has_timer;"Countdown"==a&&(this.selectedCategory.countdown=this.currentCategory.countdown,this.counts=this.selectedCategory.countdown.split(":"),this.time=parseInt(this.counts[2]),this.time+=60*parseInt(this.counts[1]),this.time+=60*parseInt(this.counts[0])*60,this.countdown())},countdown(){this.interval=setInterval((()=>{this.counts[1]<0&&this.counts[0]>0&&(this.counts[0]-=1,this.counts[1]=59),this.counts[2]<0&&this.counts[1]>0&&(this.counts[1]-=1,this.counts[2]=59),0==this.time?this.handleNext():this.count=`${this.counts[0]}:${this.counts[1]}:${this.counts[2]}`,this.counts[2]--,this.time--,this.selectedCategory.countdown=`${this.counts[0]}:${this.counts[1]}:${this.counts[2]}`,this.categories[this.selectedCategoryIdx]=this.selectedCategory,localStorage.setItem("categories",JSON.stringify(this.categories))}),1e3)},async handlePrev(){await clearInterval(this.interval),0==this.selectedCategoryIdx?this.$router.go(-1):(this.selectedCategoryIdx=parseInt(this.selectedCategoryIdx)-1,localStorage.setItem("selectedCategory",this.selectedCategoryIdx),await this.load())},async handleNext(){if(await clearInterval(this.interval),O(this.$route.params.id,this.selectedCategoryIdx),this.selectedCategoryIdx==this.categories.length-1){let e=new FormData;e.append("exam_id",this.$route.params.id);const t=await L(e);"Unauthorized"==t.message&&(U(),this.$router.push({name:"login"})),this.$router.push({name:"finish"})}else this.selectedCategoryIdx=parseInt(this.selectedCategoryIdx)+1,localStorage.setItem("selectedCategory",this.selectedCategoryIdx),await this.load()},async handleAnswer(e,t){let a=new FormData;a.append("exam_id",this.$route.params.id),a.append("question_id",e.id),a.append("answer_id",t.id);const n=await V(a);"Unauthorized"==n.message&&(U(),this.$router.push({name:"login"}))}}};const be=(0,s.Z)(ve,[["render",_e]]);var xe=be;const Ie=(0,o._)("img",{src:h,alt:"logo",width:"250"},null,-1),ke=(0,o._)("h2",null,"Arunika Test Platform",-1),Ce={class:"form-group"},Se=(0,o._)("label",{for:""},"Nama Pengguna / Nomor Ujian",-1),$e=(0,o._)("button",{class:"primary"},"Masuk",-1),je=(0,o._)("p",null,"Arunika IT Department 2022",-1);function Te(e,t,a,r,s,i){const l=(0,o.up)("CardVue");return(0,o.wg)(),(0,o.j4)(l,null,{header:(0,o.w5)((()=>[Ie,ke])),body:(0,o.w5)((()=>[(0,o._)("form",{onSubmit:t[1]||(t[1]=(...e)=>i.handleLogin&&i.handleLogin(...e)),class:"form"},[(0,o._)("div",Ce,[Se,(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=t=>e.username=t)},null,512),[[n.nr,e.username]])]),$e],32)])),footer:(0,o.w5)((()=>[je])),_:1})}var De={components:{CardVue:S},data:()=>({username:""}),methods:{async handleLogin(e){e.preventDefault();let t=new FormData;t.append("username",this.username);const a=await j(t);"success"==a.status?this.$router.push({name:"home"}):alert("Data peserta tidak ditemukan")}}};const ze=(0,s.Z)(De,[["render",Te]]);var Ae=ze;const Oe=[{path:"/",name:"home",component:H,beforeEnter:(e,t,a)=>{var n=window.localStorage.getItem("token");null==n?a({name:"login"}):a()}},{path:"/start/:id",name:"start",component:ae,beforeEnter:(e,t,a)=>{var n=window.localStorage.getItem("token");null==n?a({name:"login"}):a()}},{path:"/exam/:id",name:"exam",component:xe,beforeEnter:(e,t,a)=>{var n=window.localStorage.getItem("token");null==n?a({name:"login"}):a()}},{path:"/finish",name:"finish",component:de,beforeEnter:(e,t,a)=>{var n=window.localStorage.getItem("token");null==n?a({name:"login"}):a()}},{path:"/login",name:"login",component:Ae,beforeEnter:(e,t,a)=>{var n=window.localStorage.getItem("token");null!=n?a({name:"home"}):a()}}],Ve=(0,c.p7)({history:(0,c.r5)(),routes:Oe});var Le=Ve,Ue=a(907),Ne=(0,Ue.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,n.ri)(u).use(Ne).use(Le).mount("#app")}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,n,o,r){if(!n){var s=1/0;for(c=0;c<e.length;c++){n=e[c][0],o=e[c][1],r=e[c][2];for(var i=!0,l=0;l<n.length;l++)(!1&r||s>=r)&&Object.keys(a.O).every((function(e){return a.O[e](n[l])}))?n.splice(l--,1):(i=!1,r<s&&(s=r));if(i){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[n,o,r]}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,r,s=n[0],i=n[1],l=n[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(l)var c=l(a)}for(t&&t(n);u<s.length;u++)r=s[u],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(c)},n=self["webpackChunkclient"]=self["webpackChunkclient"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(453)}));n=a.O(n)})();
//# sourceMappingURL=app.3cf74e19.js.map