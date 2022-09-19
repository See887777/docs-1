"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[1849],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),f=n,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return r?o.createElement(m,a(a({ref:t},c),{},{components:r})):o.createElement(m,a({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},47569:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=r(87462),n=(r(67294),r(3905));const i={},a="OSMO",s={unversionedId:"osmo",id:"osmo",title:"OSMO",description:"Purpose",source:"@site/docs/overview/osmo.md",sourceDirName:".",slug:"/osmo",permalink:"/overview/osmo",draft:!1,editUrl:"https://github.com/osmosis-labs/docs/tree/main/docs/overview/osmo.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Governance",permalink:"/overview/governance"},next:{title:"Glossary",permalink:"/overview/terminology"}},l={},u=[{value:"Purpose",id:"purpose",level:2},{value:"Superfluid Staking",id:"superfluid-staking",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"osmo"},"OSMO"),(0,n.kt)("h2",{id:"purpose"},"Purpose"),(0,n.kt)("p",null,"The OSMO token is a governance token that allows staked token holders to decide the future of the protocol, including every implementation detail. OSMO will initially be used for the following (although governance is free to add or remove these functions):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Voting on protocol upgrades"),(0,n.kt)("li",{parentName:"ul"},"Allocating liquidity mining rewards for bonded liquidity gauges"),(0,n.kt)("li",{parentName:"ul"},"Setting the base network swap fee")),(0,n.kt)("p",null,"Governance is the critical component of how Osmosis evolves. Active stakeholders of the network will be responsible for proposing, vetting, and passing protocol upgrades."),(0,n.kt)("p",null,"The pools eligible for liquidity rewards will be selected by OSMO governance participants, allowing the stakeholders to formulate an incentivization strategy that best aligns with the long-term interests of the protocol."),(0,n.kt)("h2",{id:"superfluid-staking"},"Superfluid Staking"),(0,n.kt)("p",null,'The OSMO token is also minted and burned in the context of Superfluid Staking. As a Osmosis-specific feature, Superfluid Staking provides the consensus layer more security with a sort of "Proof of Useful Stake". Each person gets an amount of Osmo representative of the value of their share of liquidity pool tokens staked and delegated to validators, resulting in the security guarantee of the consensus layer to also be based on GAMM LP shares. '),(0,n.kt)("p",null,"Further details can be seen in the ",(0,n.kt)("a",{parentName:"p",href:"../osmosis-core/modules/spec-superfluid.md"},"Superfluid module specifications")))}p.isMDXComponent=!0}}]);