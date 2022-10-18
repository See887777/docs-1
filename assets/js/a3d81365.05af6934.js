"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[8970],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),m=s,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(h,r(r({ref:t},u),{},{components:n})):o.createElement(h,r({ref:t},u))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,r=new Array(a);r[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var l=2;l<a;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},11881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=n(87462),s=(n(67294),n(3905));const a={title:"Interact with Osmosis CLI",sidebar_position:2},r=void 0,i={unversionedId:"interact-cli",id:"interact-cli",title:"Interact with Osmosis CLI",description:"Using the CLI",source:"@site/docs/apis/interact-cli.mdx",sourceDirName:".",slug:"/interact-cli",permalink:"/apis/interact-cli",draft:!1,editUrl:"https://github.com/osmosis-labs/docs/tree/main/docs/apis/interact-cli.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Interact with Osmosis CLI",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Osmosis Public APIs",permalink:"/apis/"},next:{title:"Interacting with gRPC",permalink:"/apis/grpc/"}},c={},l=[{value:"Using the CLI",id:"using-the-cli",level:2},{value:"Node status",id:"node-status",level:3},{value:"This is the output from <code>osmosisd status</code>",id:"this-is-the-output-from-osmosisd-status",level:4},{value:"Node configuration",id:"node-configuration",level:3},{value:"Change node",id:"change-node",level:3},{value:"Connect to the testnet",id:"connect-to-the-testnet",level:3}],u={toc:l};function d(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"using-the-cli"},"Using the CLI"),(0,s.kt)("p",null,"Once osmosisd is ",(0,s.kt)("a",{parentName:"p",href:"../osmosis-core/osmosisd"},"installed")," and configured with the correct network, you can now send commands with it. In a new terminal window, start by running the following query command:"),(0,s.kt)("h3",{id:"node-status"},"Node status"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"osmosisd status\n")),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Output"),(0,s.kt)("p",null,(0,s.kt)("h4",{id:"this-is-the-output-from-osmosisd-status"},"This is the output from ",(0,s.kt)("inlineCode",{parentName:"h4"},"osmosisd status")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "NodeInfo": {\n    "protocol_version": {\n      "p2p": "8",\n      "block": "11",\n      "app": "12"\n    },\n    "id": "4017c243549b8bb4ad2b4cfe5d685aea450dcbcd",\n    "listen_addr": "209.34.206.35:26656",\n    "network": "osmosis-1",\n    "version": "0.34.21",\n    "channels": "40202122233038606100",\n    "moniker": "artifact-rpc",\n    "other": {\n      "tx_index": "on",\n      "rpc_address": "tcp://0.0.0.0:26657"\n    }\n  },\n  "SyncInfo": {\n    "latest_block_hash": "FBA710794C5A9C61523D7CCE78F2F51C7CD7A6C33A154C078E423859D7243E30",\n    "latest_app_hash": "EC15E54C7BF66EDC9FEF561969B756CAA58933598FCBF72FE7727DE78F0D8DCF",\n    "latest_block_height": "6335644",\n    "latest_block_time": "2022-10-07T08:45:15.929540892Z",\n    "earliest_block_hash": "38EAF21C7C4A786D73FFAADA32FD3D4B2B683AF2050B41CF5E5924D20AF4EEBC",\n    "earliest_app_hash": "808B1D7123C385D52E6A5BC544FD763D156526751DEB401DADB18C717D567DC0",\n    "earliest_block_height": "6287475",\n    "earliest_block_time": "2022-10-03T22:54:17.633996278Z",\n    "catching_up": false\n  },\n  "ValidatorInfo": {\n    "Address": "369E2DCC99CD68400753812BBDF54CD5380FBAC7",\n    "PubKey": {\n      "type": "tendermint/PubKeyEd25519",\n      "value": "mhb68/B38wFLH/5pDgvPKNbKyKdwduIKxJySz0GV/uI="\n    },\n    "VotingPower": "0"\n  }\n}\n')))),(0,s.kt)("h3",{id:"node-configuration"},"Node configuration"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"osmosisd config\n")),(0,s.kt)("p",null,"Output: "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "chain-id": "osmosis-1",\n    "keyring-backend": "os",\n    "output": "text",\n    "node": "http://osmosis.artifact-staking.io:26657",\n    "broadcast-mode": "sync",\n    "grpc-concurrency": false\n}\n')),(0,s.kt)("p",null,"In this example when we install osmosisd as a client with the ",(0,s.kt)("a",{parentName:"p",href:"../osmosis-core/osmosisd"},"installer"),", it connects to the ",(0,s.kt)("inlineCode",{parentName:"p"},"http://osmosis.artifact-staking.io:26657"),". "),(0,s.kt)("h3",{id:"change-node"},"Change node"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"osmosis config node https://rpc.osmosis.zone:443\n")),(0,s.kt)("h3",{id:"connect-to-the-testnet"},"Connect to the testnet"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"osmosisd config node https://rpc-test.osmosis.zone:443\nosmosisd config chain-id osmo-test-4\n")),(0,s.kt)("p",null,"To add a  new account on your local keyring"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"osmosisd keys add testaccount --keyring-backend test\n\n# Put the generated address in a variable for later use.\nMYACCOUNT=$(osmosisd keys show testaccount -a --keyring-backend test)\n")),(0,s.kt)("p",null,"The command above creates a local key-pair that is not yet registered on the chain. An account is created the first time it receives tokens from another account.\nYou can now send some tokens to this enw account. If you are connected to the testnet, you can get tokens from ",(0,s.kt)("a",{parentName:"p",href:"https://faucet.osmosis.zone"},"https://faucet.osmosis.zone")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Check that the testaccount account did receive the tokens.\nosmosisd query bank balances $MYACCOUNT\n")),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(68823).Z,width:"1450",height:"612"}),"  "),(0,s.kt)("p",null,"For more information about querying osmosisd via the CLI visit the ",(0,s.kt)("a",{parentName:"p",href:"https://hub.cosmos.network/main/hub-tutorials/gaiad.html"},"Cosmos documentation"),"."))}d.isMDXComponent=!0},68823:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/query-balance-6f813e4f1d682513f75adf519620fd98.png"}}]);