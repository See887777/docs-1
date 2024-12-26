"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[8705],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(h,s(s({ref:t},p),{},{components:r})):n.createElement(h,s({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},20518:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_position:16},s="Determination of Risk Level for Earn Strategies",o={unversionedId:"integrate/earn-risk",id:"integrate/earn-risk",title:"Determination of Risk Level for Earn Strategies",description:"Overview",source:"@site/docs/overview/integrate/earn-risk.md",sourceDirName:"integrate",slug:"/integrate/earn-risk",permalink:"/overview/integrate/earn-risk",draft:!1,editUrl:"https://github.com/osmosis-labs/docs/tree/main/docs/overview/integrate/earn-risk.md",tags:[],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"tutorialSidebar",previous:{title:"Interact with RPC endpoints",permalink:"/overview/integrate/rpc"},next:{title:"External Projects",permalink:"/overview/integrate/external_projects/"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Introduction",id:"introduction",level:2},{value:"How Risk Level is Calculated",id:"how-risk-level-is-calculated",level:2},{value:"Applying for Risk Level Assessment",id:"applying-for-risk-level-assessment",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"determination-of-risk-level-for-earn-strategies"},"Determination of Risk Level for Earn Strategies"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This page provides a brief and high-level overview of the Risk Levels displayed for each strategy on the Osmosis Zone app. "),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"The Earn page on the Osmosis Zone app displays various strategies that can utilize users' assets to try earning a yield. A risk level is displayed to users with for each strategy, and a risk level assessment is required. "),(0,a.kt)("h2",{id:"how-risk-level-is-calculated"},"How Risk Level is Calculated"),(0,a.kt)("p",null,"Assessing the risk level of earn strategies involves a comprehensive evaluation across several key areas. Firstly, the strategy mechanics are scrutinized to determine the type of strategy and its dependency on off-chain actors. This analysis sheds light on the operational dynamics and potential vulnerabilities. Secondly, the strategy's Lindiness is examined, which includes assessing historical yield consistency and tracking project and strategy start dates. Additionally, the asset composition is evaluated to understand the nature of underlying deposit assets, whether they result in exposure to single or multiple assets, and the correlation among them. Safety controls are paramount, with scrutiny given to safety rate limits, oracle dependencies, and mechanisms to counter oracle manipulation. Governance structure is also a focal point, investigating the presence of controllers that could abscond with funds or pause the strategy, and ensuring the economic security of the governance system exceeds the Total Value Locked (TVL) of the strategy. Lastly, the transparency and reliability of the project's contracts, including their open-source nature and the number of audits conducted, are assessed to gauge the overall security posture. This multifaceted approach ensures a thorough understanding of the risk landscape associated with earn strategies, enabling informed decision-making and risk management strategies."),(0,a.kt)("h2",{id:"applying-for-risk-level-assessment"},"Applying for Risk Level Assessment"),(0,a.kt)("p",null,"To apply for a risk level assessment to be associated with your earn strategy, follow these steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Process Review"),": See the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/osmosis-labs/fe-content/tree/main/cms/earn#risk-level"},"Risk Level section of the Earn CMS README")," in GitHub for latest details and instructions on the entire Strategy addition process."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Application Preparation"),": Duplicate a copy of the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/1_FM7hJKl017wAaHcYybN3lGSMeJMqiuevNX6H8LGnD0"},"Earn Strategy Report Card Application Google Sheets Spreadsheet"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Assessment Criteria"),": Evaluate your strategy based on key factors including mechanics, Lindiness, asset composition, safety controls, governance."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Application Completion"),": Fill out the duplicated copy of the Earn Strategy Report Card Application spreadsheet."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Submission"),": Once completed, provide a link to the completed Application in the description of the GitHub Pull Request that adds the strategy to the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/osmosis-labs/fe-content/tree/main/cms/earn"},"Earn page's CMS"),".")))}d.isMDXComponent=!0}}]);