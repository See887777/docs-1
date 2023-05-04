"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[8685],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>u});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),p=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),k=p(n),u=r,c=k["".concat(l,".").concat(u)]||k[u]||d[u]||o;return n?a.createElement(c,s(s({ref:e},m),{},{components:n})):a.createElement(c,s({ref:e},m))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,s=new Array(o);s[0]=k;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},64147:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={},s="Osmosis Network",i={unversionedId:"README",id:"README",title:"Osmosis Network",description:"Recommended API Endpoints and Frontend URLs for Osmosis Network, Chain Registry, and Other Providers.",source:"@site/docs/networks/README.md",sourceDirName:".",slug:"/",permalink:"/networks/",draft:!1,editUrl:"https://github.com/osmosis-labs/docs/tree/main/docs/networks/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"Explorers",permalink:"/networks/explorers"}},l={},p=[{value:"Official public endpoints",id:"official-public-endpoints",level:2},{value:"Frontend URLs",id:"frontend-urls",level:2},{value:"API Docs",id:"api-docs",level:3},{value:"Chain Registry",id:"chain-registry",level:2},{value:"Infrastructure Providers",id:"infrastructure-providers",level:2}],m={toc:p};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"osmosis-network"},"Osmosis Network"),(0,r.kt)("p",null,"Recommended API Endpoints and Frontend URLs for Osmosis Network, Chain Registry, and Other Providers."),(0,r.kt)("h2",{id:"official-public-endpoints"},"Official public endpoints"),(0,r.kt)("p",null,"These following API's are recommended for development purposes. For maximun control and reliability it's recommended to run your own node. This can be easility accomplsihed by using the get.osmosis.zone installer. "),(0,r.kt)("admonition",{title:"Important Notice",type:"warning"},(0,r.kt)("h3",{parentName:"admonition",id:""}),(0,r.kt)("blockquote",{parentName:"admonition"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"During April, 2023"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"osmo-test-4")," will remain the official testnet while ",(0,r.kt)("inlineCode",{parentName:"p"},"osmo-test-5")," will be in public beta."),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"During May, 2023"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"osmo-test-4")," will be deprecated (but not removed) and the official testnet will become ",(0,r.kt)("inlineCode",{parentName:"p"},"osmo-test-5"),"."),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"On June 1st, 2023"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"osmo-test-4")," will be deleted."),(0,r.kt)("p",{parentName:"blockquote"},"For now, the official testnet is ",(0,r.kt)("inlineCode",{parentName:"p"},"osmo-test-4"),". Unless bugs are discovered, in May we will promote ",(0,r.kt)("inlineCode",{parentName:"p"},"osmo-test-5")," as the official testnet."),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"osmo-test-5")," is not a fork of mainnet, it has started with no state. The rationale is to treat it like a separate production environment, with its own relayers and pools. Forking mainnet creates a lot of unusable chain state (with pools and IBC channels that are now unusable) and makes configuring the frontend complicated."),(0,r.kt)("p",{parentName:"blockquote"},"We will also release a devnet publicly, which will be a fork of mainnet."))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Mainnet"),(0,r.kt)("th",{parentName:"tr",align:null},"Testnet (New)"),(0,r.kt)("th",{parentName:"tr",align:null},"Testnet (Legacy)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Chain ID"),(0,r.kt)("td",{parentName:"tr",align:null},"osmosis-1"),(0,r.kt)("td",{parentName:"tr",align:null},"osmo-test-5"),(0,r.kt)("td",{parentName:"tr",align:null},"osmo-test-4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Endpoints"),(0,r.kt)("td",{parentName:"tr",align:null},"gRPC endpoint: ",(0,r.kt)("inlineCode",{parentName:"td"},"grpc.osmosis.zone:9090"),(0,r.kt)("br",null)," gRPC-gateway: ",(0,r.kt)("inlineCode",{parentName:"td"},"https://rpc.osmosis.zone:443")," ",(0,r.kt)("br",null)," LCD endpoint: ",(0,r.kt)("inlineCode",{parentName:"td"},"https://lcd.osmosis.zone")),(0,r.kt)("td",{parentName:"tr",align:null},"gRPC endpoint: ",(0,r.kt)("inlineCode",{parentName:"td"},"grpc.osmotest5.osmosis.zone")," ",(0,r.kt)("br",null)," gRPC-gateway: ",(0,r.kt)("inlineCode",{parentName:"td"},"https://rpc.osmotest5.osmosis.zone"),(0,r.kt)("br",null)," LCD endpoint: ",(0,r.kt)("inlineCode",{parentName:"td"},"https://lcd.osmotest5.osmosis.zone/")),(0,r.kt)("td",{parentName:"tr",align:null},"gRPC endpoint: ",(0,r.kt)("inlineCode",{parentName:"td"},"grpc-test.osmosis.zone:443")," ",(0,r.kt)("br",null),"gRPC-gateway:  ",(0,r.kt)("inlineCode",{parentName:"td"},"https://rpc.testnet.osmosis.zone:443"),(0,r.kt)("br",null)," LCD endpoint: ",(0,r.kt)("inlineCode",{parentName:"td"},"https://lcd-test.osmosis.zone"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Explorer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://lcd.osmosis.zone"},"https://lcd.osmosis.zone")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://explorer.osmotest5.osmosis.zone/"},"https://explorer.osmotest5.osmosis.zone/")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://lcd-test.osmosis.zone"},"https://lcd-test.osmosis.zone"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Utilities"),(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://osmotest5.osmosis.zone/"},"https://explorer.osmotest5.osmosis.zone/")),(0,r.kt)("td",{parentName:"tr",align:null},"...")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"API Reference"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api"},"RPC API Reference"),(0,r.kt)("br",null)," ",(0,r.kt)("a",{parentName:"td",href:"/api/?v=LCD"},"LCD API Reference")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api"},"RPC API Reference"),(0,r.kt)("br",null)," ",(0,r.kt)("a",{parentName:"td",href:"/api/?v=LCD"},"LCD API Reference")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api"},"RPC API Reference"),(0,r.kt)("br",null)," ",(0,r.kt)("a",{parentName:"td",href:"/api/?v=LCD"},"LCD API Reference"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Swagger"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://lcd.osmosis.zone/swagger/"},"LCD Swagger"),(0,r.kt)("br",null)," ",(0,r.kt)("a",{parentName:"td",href:"https://rpc-docs.osmosis.zone/"},"RPC Swagger")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://lcd.osmotest5.osmosis.zone/swagger/"},"LCD Swagger"),(0,r.kt)("br",null)," ",(0,r.kt)("a",{parentName:"td",href:"https://rpc-docs.osmosis.zone/"},"RPC Swagger")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://lcd-test.osmosis.zone/swagger/"},"LCD Swagger"),(0,r.kt)("br",null)," ",(0,r.kt)("a",{parentName:"td",href:"https://rpc-docs.osmosis.zone/"},"RPC Swagger"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Faucet"),(0,r.kt)("td",{parentName:"tr",align:null},"Not Available"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://faucet.osmotest5.osmosis.zone/"},"faucet.osmotest5.osmosis.zone/")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://faucet.osmosis.zone/"},"faucet.osmosis.zone"))))),(0,r.kt)("h2",{id:"frontend-urls"},"Frontend URLs"),(0,r.kt)("p",null,"The Osmosis front-end can be accessed by anyone, and there are several places where it can be found. Additionally, you can run the Osmosis front-end on your own computer by following the instructions provided ",(0,r.kt)("a",{parentName:"p",href:"https://docs.osmosis.zone/frontend/osmosis-frontend"}," here")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Network"),(0,r.kt)("th",{parentName:"tr",align:null},"URL"),(0,r.kt)("th",{parentName:"tr",align:null},"Network ID"),(0,r.kt)("th",{parentName:"tr",align:null},"Explorer"),(0,r.kt)("th",{parentName:"tr",align:null},"Contract Explorer"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mainnet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://app.osmosis.zone/"},"app.osmosis.zone")),(0,r.kt)("td",{parentName:"tr",align:null},"osmosis-1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.mintscan.io/osmosis"},"Mintscan"),", ",(0,r.kt)("a",{parentName:"td",href:"https://bigdipper.live/osmosis"},"Big Dipper"),", ",(0,r.kt)("a",{parentName:"td",href:"https://ping.pub/osmosis"},"Ping.pub")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://celatone.osmosis.zone/"},"Celatone"),", ",(0,r.kt)("a",{parentName:"td",href:"https://www.mintscan.io/osmosis/wasm"},"Mintscan"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mainnet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://app.osmosis.zone/"},"akash.osmosis.zone")),(0,r.kt)("td",{parentName:"tr",align:null},"osmosis-1"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mainnet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://app.osmosis.zone/"},"flux.osmosis.zone")),(0,r.kt)("td",{parentName:"tr",align:null},"osmosis-1"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"New Testnet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.osmosis.zone/"},"testnet.osmosis.zone")),(0,r.kt)("td",{parentName:"tr",align:null},"osmo-test-5"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.mintscan.io/osmosis-testnet"},"Mintscan"),", ",(0,r.kt)("a",{parentName:"td",href:"https://explorer.osmotest5.osmosis.zone/"},"Ping.pub")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://celatone.osmosis.zone/testnet"},"Celatone"),", ",(0,r.kt)("a",{parentName:"td",href:"https://testnet.mintscan.io/osmosis-testnet/contract"},"Mintscan"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Legacy Testnet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.osmosis.zone/"},"testnet.osmosis.zone")),(0,r.kt)("td",{parentName:"tr",align:null},"osmo-test-4"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://explorer.osmotest5.osmosis.zone/"},"Ping.pub")),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("h3",{id:"api-docs"},"API Docs"),(0,r.kt)("p",null,"Please visit the ",(0,r.kt)("a",{parentName:"p",href:"/api"},"API reference")," to interact with these endpoints. "),(0,r.kt)("h2",{id:"chain-registry"},"Chain Registry"),(0,r.kt)("p",null,"This repo contains a chain.json and assetlist.json for a number of cosmos-sdk based chains. A chain.json contains data that makes it easy to start running or interacting with a node. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/chain-registry"},"Chain Registry")," : ",(0,r.kt)("inlineCode",{parentName:"li"},"https://github.com/cosmos/chain-registry"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Did you know there is also an NPM package that fetch chain-registry data? ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Learn more")," : ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/chain-registry"},"https://www.npmjs.com/package/chain-registry")," ")),(0,r.kt)("h2",{id:"infrastructure-providers"},"Infrastructure Providers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.allthatnode.com/osmosis.dsrv"},"All That Node")," : ",(0,r.kt)("inlineCode",{parentName:"p"},"https://www.allthatnode.com/osmosis.dsrv")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Features",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Unlimited access to archive data"),(0,r.kt)("li",{parentName:"ul"},"Faucet available"),(0,r.kt)("li",{parentName:"ul"},"Automated updates"),(0,r.kt)("li",{parentName:"ul"},"Technical support"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://datahub.figment.io"},"DataHub")," : ",(0,r.kt)("inlineCode",{parentName:"p"},"https://datahub.figment.io"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://onfinality.io/"},"OnFinality")," is a blockchain infrastructure platform that saves Web3 builders time and makes their lives easier. OnFinality delivers scalable API endpoints for the biggest blockchain networks and empowers developers to automatically test, deploy, scale and monitor their own blockchain nodes in minutes. OnFinality offers free and premium (Pay-as-you-go or subsription-based) API ",(0,r.kt)("a",{parentName:"p",href:"https://onfinality.io/networks/osmosis"},"services for Osmosis"),". Public RPC Endpoint for Osmosis: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://osmosis.api.onfinality.io/public")))))}d.isMDXComponent=!0}}]);