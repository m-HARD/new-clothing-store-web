(function(){var e={7863:function(e,t,s){"use strict";var r=s(9242),l=s(3396);function o(e,t,s,r,o,n){const a=(0,l.up)("nav-bar"),i=(0,l.up)("the-body"),c=(0,l.up)("my-footer");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(a),(0,l.Wm)(i),(0,l.Wm)(c)],64)}var n=s(7139),a=s.p+"img/clothes.a0b2656a.svg";const i={class:"sticky top-0 z-50 bg-gray-200 shadow-xl"},c={class:""},d={class:"container px-6 py-2 mx-auto flex flex-col justify-center items-center"},g={class:"w-full flex items-center justify-between"},m=(0,l._)("img",{src:a,alt:"",class:"h-6 items-center hidden md:block"},null,-1),x=(0,l._)("span",{class:"text-xl font-bold text-gray-800 md:text-2xl hover:text-blue-400 cursor-pointer font-serif"},"Areen Style ",-1),u=(0,l._)("button",{type:"button",class:"text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"},[(0,l._)("svg",{viewBox:"0 0 24 24",class:"w-6 h-6 fill-current"},[(0,l._)("path",{"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"})])],-1),f=[u],p=(0,l.uE)('<li class="block w-full"><a class="mx-4 px-4 py-3 block bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400" href="intent://send/+249117803213#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end">تواصل مع ارين استايل عبر الواتساب</a></li><li class="block w-full"><a class="mx-4 px-4 py-3 block bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400" href="intent://send/+249121174819#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end">تواصل مع المشرف عبر الواتساب</a></li><li class="block w-full"><a class="mx-4 px-4 py-3 block bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400" href="intent://send/+249921578765#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end">تواصل مع المصمم عبر الواتساب</a></li>',3),h=[p],y={id:"tags",class:"flex flex-row justify-center items-center flex-wrap"},w={key:0,href:"#BestSeller",class:"h-12 px-2 py-2 hover:bg-gray-300 text-center text-gray-700 border-bottom-width: 1px; border-gray-300 -px-1 whitespace-nowrap focus:outline-none"},b=(0,l._)("span",{class:"mx-1 text-xs md:text-base"}," الأكثر مبيعا ",-1),v=[b],k=["href"],_={class:"mx-1 text-xs md:text-base"};function j(e,t,s,r,o,a){return(0,l.wg)(),(0,l.iD)("div",i,[(0,l._)("div",c,[(0,l._)("nav",d,[(0,l._)("div",g,[m,x,(0,l._)("div",{onClick:t[0]||(t[0]=e=>o.showMenu=!o.showMenu),class:"flex"},f)]),(0,l._)("ul",{class:(0,n.C_)([o.showMenu?"block":"hidden","w-full mt-8 space-y-4 md:justify-center md:items-center md:space-x-10 md:text-center md:mb-2"])},h,2)])]),(0,l._)("div",y,[a.getBestSeller.length>0?((0,l.wg)(),(0,l.iD)("a",w,v)):(0,l.kq)("",!0),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.NavBarTags,((e,t)=>((0,l.wg)(),(0,l.iD)("a",{href:"#"+e.Category,key:t,class:"h-12 px-2 py-2 hover:bg-gray-300 text-center text-gray-700 border-bottom-width: 1px; border-gray-300 -px-1 whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400"},[(0,l._)("span",_,(0,n.zw)(e.Category),1)],8,k)))),128))])])}var D=[{id:1,name:"فستان",description:"فستان هزاز",Category:"ملابس نسائية",imgName:"1.jpeg",bestSeller:!1,sizes:["s","md","xl","xxl"],colors:["مشكل"],colorText:!0,price:5e3},{id:2,name:"فستان",description:"فستان هزاز",Category:"ملابس نسائية",imgName:"2.jpeg",bestSeller:!1,sizes:["s","md","xl","xxl"],colors:["مشكل"],colorText:!0,price:5e3},{id:3,name:"فستان",description:"فستان هزاز",Category:"ملابس نسائية",imgName:"3.jpeg",bestSeller:!1,sizes:["s","md","xl","xxl"],colors:["مشكل"],colorText:!0,price:5e3},{id:4,name:"شبشب",description:"شبشب جلد  صناعي صناعة مصرية",Category:"نسائي",imgName:"4.jpeg",bestSeller:!0,sizes:["39"],colors:["red"],colorText:!1,price:3e3},{id:5,name:"استربلس",description:"استربلس صناعة مصرية",Category:"نسائي",imgName:"5.jpeg",bestSeller:!1,sizes:["s","md","xl","xxl"],colors:["red","White","Brown","black","gray","Pink"],colorText:!1,price:2500},{id:6,name:"فستان",description:"فستان هزاز",Category:"ملابس نسائية",imgName:"6.jpeg",bestSeller:!1,sizes:["s","md","xl","xxl"],colors:["black","White"],colorText:!1,price:5500}],C={data(){return{showMenu:!1,Products:D,NavBarTags:[]}},created(){this.getAllCategory()},computed:{getBestSeller(){return this.Products.filter((e=>!!e.bestSeller&&e))}},methods:{getAllCategory(){const e=new Set;this.NavBarTags=this.Products.filter((t=>{const s=e.has(t.Category);return e.add(t.Category),!s}))}}},z=s(89);const O=(0,z.Z)(C,[["render",j]]);var S=O;const B={class:"bg-gray-200 mt-40"},T=(0,l.uE)('<div class="container px-6 py-8 mx-auto"><div class="text-center"><a href="https://api.whatsapp.com/send?phone=+249921578765&amp;text=السلام عليكم" class="text-2xl font-bold text-gray-800 hover:text-gray-700">Areen Style</a><p class="max-w-md mx-auto mt-2 text-gray-500">مكانك المفضل للتسوق مع areen style</p><div class="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center"><a href="https://www.facebook.com/elshimaa.ahmed.90" class="w-full mt-2 sm:mt-0 px-5 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-80">تواصل مع المشرف</a><a href="https://www.facebook.com/profile.php?id=100006830505422" class="w-full mt-2 sm:mt-0 px-5 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-600 rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-gray-500 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-80">تواصل مع المصمم</a></div></div><hr class="my-10 border-gray-200"><div class="flex flex-col items-center sm:flex-row sm:justify-between"><p class="text-sm text-gray-400">©جميع الحقوق محفوظة 2022</p><div class="flex mt-3 -mx-2 sm:mt-0"><a href="https://www.facebook.com/elshimaa.ahmed.90" class="mx-2 text-sm text-gray-400 hover:text-gray-500" aria-label="Reddit"> تم الأشراف بواسطة @الشيماء </a></div><div class="flex mt-3 -mx-2 sm:mt-0"><a href="https://m-hard.github.io/" class="mx-2 text-sm text-gray-400 hover:text-gray-500" aria-label="Reddit"> تم تصميم بواسطة @M.Hard </a></div></div></div>',1),H=[T];function N(e,t){return(0,l.wg)(),(0,l.iD)("footer",B,H)}const Y={},M=(0,z.Z)(Y,[["render",N]]);var P=M,E=s.p+"img/productId.61bee96a.svg",K=s.p+"img/color.b45d51f1.svg",A=s.p+"img/size.307f542d.svg",W=s.p+"img/cash.01d57348.svg";const I={block:""},U=(0,l.uE)('<div id="header" class="w-full border-b-2 bg-white"><div class="flex" style="height:600px;"><div class="hidden lg:block lg:w-1/2" style="clip-path:polygon(10% 0, 100% 0%, 100% 100%, 0 100%);"><div class="h-full object-cover" style="background-image:url(https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-1.2.1&amp;raw_url=true&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1170);"><div class="h-full bg-black opacity-25"></div></div></div><div class="flex items-center text-center lg:text-right px-8 md:px-12 lg:w-1/2"><div><h2 class="text-3xl font-semibold text-gray-800 md:text-4xl">اخر التصاميم وبافضل الأسعار</h2><p class="mt-2 text-sm text-gray-500 md:text-base">يتمتع المتجر بمجموعة كبيرة من الازياء والمنتجات وبافضل الأسعار مع امكانية التوصيل</p><div class="flex justify-center lg:justify-start mt-6"><a class="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800" href="#BestSeller">تابع التصفح</a><a class="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400" href="intent://send/+249117803213#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end">تواصل معي عبر الواتساب</a></div></div></div></div></div>',1),Z={key:0,id:"BestSeller"},q=(0,l._)("h1",{class:"mt-16 text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl"},"الأكثر مبيعا",-1),F={class:"grid grid-cols-1 gap-8 mx-8 mt-8 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5"},G=["src","alt"],L=["textContent"],R={class:"w-full px-2"},V=["textContent"],J={class:"flex items-center mt-6 text-gray-700"},Q=(0,l._)("img",{class:"h-6 ml-1",src:E,alt:"svg"},null,-1),X={class:"mx-1 inline-flex font-bold text-base rounded-full"},$={key:0,class:"flex items-center mt-1 text-gray-700"},ee=(0,l._)("img",{class:"h-6 ml-1",src:K,alt:"svgColor"},null,-1),te={key:0},se=["textContent"],re={key:1},le={key:1,class:"mt-4 h-6"},oe={key:2,class:"flex items-center mt-1 text-gray-700"},ne=(0,l._)("img",{class:"h-6 ml-1",src:A,alt:"svg"},null,-1),ae={key:3,class:"mt-1 h-6"},ie={class:"flex items-center mt-1 mb-2 text-gray-700"},ce=(0,l._)("img",{class:"h-6 ml-1",src:W,alt:"svgCash"},null,-1),de={class:"px-2 text-lg font-extrabold"},ge=(0,l._)("span",{class:"mr-1 font-normal text-base"},"جنيه",-1),me={class:"flex items-center justify-center mt-8 mb-2"},xe=["href"],ue=["id"],fe=["textContent"],pe={class:"grid grid-cols-1 gap-8 mx-8 mt-8 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5"},he=["src","alt"],ye=["textContent"],we={class:"w-full px-2"},be=["textContent"],ve={class:"flex items-center mt-6 text-gray-700"},ke=(0,l._)("img",{class:"h-6 ml-1",src:E,alt:"svg"},null,-1),_e={class:"mx-1 inline-flex font-bold text-base rounded-full"},je={key:0,class:"flex items-center mt-1 text-gray-700"},De=(0,l._)("img",{class:"h-6 ml-1",src:K,alt:"svg"},null,-1),Ce={key:0},ze=["textContent"],Oe={key:1},Se={key:1,class:"mt-4 h-6"},Be={key:2,class:"flex items-center mt-1 text-gray-700"},Te=(0,l._)("img",{class:"h-6 ml-1",src:A,alt:"svg"},null,-1),He={key:3,class:"mt-1 h-6"},Ne={class:"flex items-center mt-6 mb-2 text-gray-700"},Ye=(0,l._)("img",{class:"h-6 ml-1",src:W,alt:"svgCash"},null,-1),Me={class:"px-2 text-lg font-extrabold"},Pe=(0,l._)("span",{class:"mr-1 font-normal text-base"},"جنيه",-1),Ee={class:"flex items-center justify-center mt-8 mb-2"},Ke=["href"];function Ae(e,t,r,o,a,i){return(0,l.wg)(),(0,l.iD)("div",I,[U,i.getBestSeller.length>0?((0,l.wg)(),(0,l.iD)("div",Z,[q,(0,l._)("div",F,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.getBestSeller,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{key:t,class:"flex flex-col items-center justify-center w-full max-w-lg mx-auto bg-white border-2 shadow-md rounded-md overflow-hidden"},[(0,l._)("img",{class:"object-fill w-full h-80 xl:h-72",src:s(5459)("./"+e.imgName),alt:e.name},null,8,G),(0,l._)("h4",{class:"mt-2 text-lg font-medium text-gray-700",textContent:(0,n.zw)(e.name)},null,8,L),(0,l._)("div",R,[(0,l._)("span",{class:"",textContent:(0,n.zw)(e.description)},null,8,V),(0,l._)("div",J,[Q,(0,l._)("div",null,[(0,l._)("span",X,(0,n.zw)(e.id),1)])]),e.colors.length>0?((0,l.wg)(),(0,l.iD)("div",$,[ee,e.colorText?((0,l.wg)(),(0,l.iD)("div",te,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.colors,((e,t)=>((0,l.wg)(),(0,l.iD)("span",{class:"mx-1 inline-flex px-2 py-1 rounded-full border shadow-md text-xs font-medium",key:t,textContent:(0,n.zw)(e)},null,8,se)))),128))])):((0,l.wg)(),(0,l.iD)("div",re,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.colors,((e,t)=>((0,l.wg)(),(0,l.iD)("span",{class:"mx-1 inline-flex px-4 py-2 rounded-full border shadow-md",key:t,style:(0,n.j5)("background-color:"+e)},null,4)))),128))]))])):((0,l.wg)(),(0,l.iD)("div",le)),e.sizes.length>0?((0,l.wg)(),(0,l.iD)("div",oe,[ne,(0,l._)("div",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.sizes,((e,t)=>((0,l.wg)(),(0,l.iD)("span",{class:"mx-1 inline-flex font-bold text-base rounded-full",key:t},(0,n.zw)(e),1)))),128))])])):((0,l.wg)(),(0,l.iD)("div",ae)),(0,l._)("div",ie,[ce,(0,l._)("h1",de,[(0,l.Uk)((0,n.zw)(e.price)+" ",1),ge])]),(0,l._)("div",me,[(0,l._)("a",{href:"https://api.whatsapp.com/send?phone=+249117803213&text=السلام عليكم طلب المنتج :`"+e.name+"`. رقم المنتج :`"+e.id+"`",class:"w-full text-center px-5 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-600 rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-gray-500 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-80"}," طلب المنتج عبر الواتساب ",8,xe)])])])))),128))])])):(0,l.kq)("",!0),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.ProductsByCategory,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{key:t,id:e[0].Category},[(0,l._)("h1",{class:"mt-28 lg:mt-16 text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl",textContent:(0,n.zw)(e[0].Category)},null,8,fe),(0,l._)("div",pe,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{key:t,class:"flex flex-col items-center justify-center w-full max-w-lg mx-auto bg-white border-2 shadow-md rounded-md overflow-hidden"},[(0,l._)("img",{class:"object-fill w-full h-96 xl:h-80",src:s(5459)("./"+e.imgName),alt:e.name},null,8,he),(0,l._)("h4",{class:"mt-2 text-lg font-medium text-gray-700",textContent:(0,n.zw)(e.name)},null,8,ye),(0,l._)("div",we,[(0,l._)("span",{class:"",textContent:(0,n.zw)(e.description)},null,8,be),(0,l._)("div",ve,[ke,(0,l._)("div",null,[(0,l._)("span",_e,(0,n.zw)(e.id),1)])]),e.colors.length>0?((0,l.wg)(),(0,l.iD)("div",je,[De,e.colorText?((0,l.wg)(),(0,l.iD)("div",Ce,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.colors,((e,t)=>((0,l.wg)(),(0,l.iD)("span",{class:"mx-1 inline-flex px-2 py-1 rounded-full border shadow-md text-xs font-medium",key:t,textContent:(0,n.zw)(e)},null,8,ze)))),128))])):((0,l.wg)(),(0,l.iD)("div",Oe,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.colors,((e,t)=>((0,l.wg)(),(0,l.iD)("span",{class:"mx-1 inline-flex px-4 py-2 rounded-full border shadow-md",key:t,style:(0,n.j5)("background-color:"+e)},null,4)))),128))]))])):((0,l.wg)(),(0,l.iD)("div",Se)),e.sizes.length>0?((0,l.wg)(),(0,l.iD)("div",Be,[Te,(0,l._)("div",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.sizes,((e,t)=>((0,l.wg)(),(0,l.iD)("span",{class:"mx-1 inline-flex font-bold text-base rounded-full",key:t},(0,n.zw)(e),1)))),128))])])):((0,l.wg)(),(0,l.iD)("div",He)),(0,l._)("div",Ne,[Ye,(0,l._)("h1",Me,[(0,l.Uk)((0,n.zw)(e.price),1),Pe])]),(0,l._)("div",Ee,[(0,l._)("a",{href:"https://api.whatsapp.com/send?phone=+249117803213&text=السلام عليكم طلب المنتج :`"+e.name+"`. رقم المنتج :`"+e.id+"`",class:"w-full text-center px-5 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-600 rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-gray-500 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-80"}," طلب المنتج عبر الواتساب ",8,Ke)])])])))),128))])],8,ue)))),128))])}var We={data(){return{Products:D,ProductsByCategory:[]}},computed:{getBestSeller(){return this.Products.filter((e=>!!e.bestSeller&&e))}},created(){function e(){window.scrollTo(0,window.pageYOffset-110)}this.ProductsByCategory=this.groupArrayOfObjects(this.Products,"Category"),window.addEventListener("hashchange",e)},methods:{groupArrayOfObjects(e,t){return e.reduce((function(e,s){return(e[s[t]]=e[s[t]]||[]).push(s),e}),{})}}};const Ie=(0,z.Z)(We,[["render",Ae]]);var Ue=Ie,Ze={name:"App",components:{NavBar:S,MyFooter:P,TheBody:Ue}};const qe=(0,z.Z)(Ze,[["render",o]]);var Fe=qe;(0,r.ri)(Fe).mount("#app")},5459:function(e,t,s){var r={"./1.jpeg":2699,"./2.jpeg":1890,"./3.jpeg":8205,"./4.jpeg":3450,"./5.jpeg":7665,"./6.jpeg":8487};function l(e){var t=o(e);return s(t)}function o(e){if(!s.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}l.keys=function(){return Object.keys(r)},l.resolve=o,e.exports=l,l.id=5459},2699:function(e,t,s){"use strict";e.exports=s.p+"img/1.48637599.jpeg"},1890:function(e,t,s){"use strict";e.exports=s.p+"img/2.9e7419eb.jpeg"},8205:function(e,t,s){"use strict";e.exports=s.p+"img/3.6e40e509.jpeg"},3450:function(e,t,s){"use strict";e.exports=s.p+"img/4.5a9b93c2.jpeg"},7665:function(e,t,s){"use strict";e.exports=s.p+"img/5.b6ca3f12.jpeg"},8487:function(e,t,s){"use strict";e.exports=s.p+"img/6.b97364c3.jpeg"}},t={};function s(r){var l=t[r];if(void 0!==l)return l.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,s),o.exports}s.m=e,function(){var e=[];s.O=function(t,r,l,o){if(!r){var n=1/0;for(d=0;d<e.length;d++){r=e[d][0],l=e[d][1],o=e[d][2];for(var a=!0,i=0;i<r.length;i++)(!1&o||n>=o)&&Object.keys(s.O).every((function(e){return s.O[e](r[i])}))?r.splice(i--,1):(a=!1,o<n&&(n=o));if(a){e.splice(d--,1);var c=l();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,l,o]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.p=""}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,r){var l,o,n=r[0],a=r[1],i=r[2],c=0;if(n.some((function(t){return 0!==e[t]}))){for(l in a)s.o(a,l)&&(s.m[l]=a[l]);if(i)var d=i(s)}for(t&&t(r);c<n.length;c++)o=n[c],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(d)},r=self["webpackChunkclothing_store"]=self["webpackChunkclothing_store"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=s.O(void 0,[998],(function(){return s(7863)}));r=s.O(r)})();
//# sourceMappingURL=app.2fa601b6.js.map