"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[9647],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var o=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=s,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return n?o.createElement(h,r(r({ref:t},l),{},{components:n})):o.createElement(h,r({ref:t},l))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,r=new Array(a);r[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var u=2;u<a;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41378:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=n(87462),s=(n(67294),n(3905));const a={sidebar_position:2,sidebar_label:"Theme Customization",description:"How the widget is linked to colours."},r="Theme Customization",i={unversionedId:"user-interface-setup/widget/customization-guide/theme-customization",id:"user-interface-setup/widget/customization-guide/theme-customization",title:"Theme Customization",description:"How the widget is linked to colours.",source:"@site/docs/osmosis-outpost/user-interface-setup/widget/customization-guide/theme-customization.md",sourceDirName:"user-interface-setup/widget/customization-guide",slug:"/user-interface-setup/widget/customization-guide/theme-customization",permalink:"/osmosis-outpost/user-interface-setup/widget/customization-guide/theme-customization",draft:!1,editUrl:"https://github.com/osmosis-labs/docs/tree/main/docs/osmosis-outpost/user-interface-setup/widget/customization-guide/theme-customization.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Theme Customization",description:"How the widget is linked to colours."},sidebar:"tutorialSidebar",previous:{title:"Customizability",permalink:"/osmosis-outpost/user-interface-setup/widget/customization-guide/customizability"},next:{title:"User Guide",permalink:"/osmosis-outpost/category/user-guide"}},c={},u=[{value:"Swap screen",id:"swap-screen",level:3},{value:"Token selector",id:"token-selector",level:3},{value:"Transaction Status",id:"transaction-status",level:3},{value:"Recover Tokens",id:"recover-tokens",level:3},{value:"Settings",id:"settings",level:3}],l={toc:u};function p(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,o.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"theme-customization"},"Theme Customization"),(0,s.kt)("p",null,"The set of custom ",(0,s.kt)("em",{parentName:"p"},"colours and contents")," are linked to the configuration theme.\nIn this scenario, you can see how the elements in the widget are linked to the\n",(0,s.kt)("strong",{parentName:"p"},"colours palette"),"."),(0,s.kt)("p",null,"To see how to edit the style of the Figma design file of this widget, please\ngive a look at the related ",(0,s.kt)("strong",{parentName:"p"},"Platform interface")," customizations, in\n",(0,s.kt)("a",{parentName:"p",href:"../../frontend-platform-interface/customization-guide/design-customization"},"its documentation"),"."),(0,s.kt)("h3",{id:"swap-screen"},"Swap screen"),(0,s.kt)("p",null,'The first screen of the widget is the swap one. Here you can see, as the main\nelements, the two boxes containing the token selectors and the numeric value\ninputs, and a "speaking" button, which helps the user performing some actions\nlike connect the wallet and swap the tokens.'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Swap screen image",src:n(36830).Z,title:"swap screen",width:"1618",height:"1366"})),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"token-selector"},"Token selector"),(0,s.kt)("p",null,'When you need to select the "from" and "to" tokens from the widget, you access\nthe token selector screen. Here, you can identify, as main elements, a\nsearchbar, and a list of tokens.\n',(0,s.kt)("img",{alt:"Token Selector screen image",src:n(51637).Z,title:"select token screen",width:"1618",height:"1490"})),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"transaction-status"},"Transaction Status"),(0,s.kt)("p",null,"Once you start a swap, you can track the status of the operations by clicking\non the txs icon in the top right of the widget. Here, you can see the status of\nthe swap, by looking at all the steps."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Transaction status screen image",src:n(72609).Z,title:"transaction status screen",width:"1618",height:"1292"})),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"recover-tokens"},"Recover Tokens"),(0,s.kt)("p",null,"If something happens after the tokens are swapped and they cannot be shipped to\nyour account, they are guarded by the Osmosis smart contract. You can recover\nthem by through a tx done with the associated ",(0,s.kt)("em",{parentName:"p"},"recovery account"),". Here, you can\nsee which tokens you are able to recover, and there is a button to recover them."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Recover tokens screen image",src:n(62842).Z,title:"recover tokens screen",width:"1618",height:"1292"})),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"settings"},"Settings"),(0,s.kt)("p",null,"You can set the ",(0,s.kt)("em",{parentName:"p"},"slippage tolerance")," and the recovery address. You can perform\nthis action through the settings screen. Here, you can see a list of buttons\nthat allow you to select one of the default values available for the slippage\ntolerance, and a numeric input box that let you insert a custom value. In the\nbottom of the page, you have the ability to set a valid osmosis address as the\nrecovery address. Please, read carefully\n",(0,s.kt)("a",{parentName:"p",href:"./../../../user-guide/recovery-address"},"this")," page before to change this value."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Settings screen image",src:n(35647).Z,title:"settings screen",width:"1618",height:"1292"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"NOTE:"))," If you are looking for the ",(0,s.kt)("strong",{parentName:"p"},"Platform interface")," customizations, please give\na look at\n",(0,s.kt)("a",{parentName:"p",href:"../../frontend-platform-interface/customization-guide/theme-customization"},"its documentation"),".")))}p.isMDXComponent=!0},36830:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/1-7e7c8f0d8757d1ab947f4e7846f6edbf.png"},51637:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/2-9b3f623b2848a840a87ef303f783e6ee.png"},72609:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/3-27b653a44a6b05531a9cd1bd282021d9.png"},62842:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/4-c0d90fa764241a154fdc8ec0176b0230.png"},35647:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/5-b8b21767161456c1944afd0b0cc7b588.png"}}]);