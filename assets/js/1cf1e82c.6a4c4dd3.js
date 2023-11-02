"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[3203],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var r=a.createContext({}),p=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(r.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,r=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),c=s,k=u["".concat(r,".").concat(c)]||u[c]||m[c]||o;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function c(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var r in t)hasOwnProperty.call(t,r)&&(i[r]=t[r]);i.originalType=e,i.mdxType="string"==typeof e?e:s,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},10490:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),s=(n(67294),n(3905));const o={title:"Osmosis CLI",sidebar_position:3},l="Osmosisd",i={unversionedId:"osmosisd",id:"osmosisd",title:"Osmosis CLI",description:"Minimum Requirements",source:"@site/docs/osmosis-core/osmosisd.md",sourceDirName:".",slug:"/osmosisd",permalink:"/osmosis-core/osmosisd",draft:!1,editUrl:"https://github.com/osmosis-labs/docs/tree/main/docs/osmosis-core/osmosisd.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Osmosis CLI",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Build and Test",permalink:"/osmosis-core/build"},next:{title:"IDE Setup",permalink:"/osmosis-core/ide-guide"}},r={},p=[{value:"Minimum Requirements",id:"minimum-requirements",level:2},{value:"Command Help",id:"command-help",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Manual Installation",id:"manual-installation",level:2},{value:"Update System",id:"update-system",level:3},{value:"Install Build Requirements",id:"install-build-requirements",level:2},{value:"Install Osmosis Binary",id:"install-osmosis-binary",level:2},{value:"Commands",id:"commands",level:2},{value:"<code>add-genesis-account</code>",id:"add-genesis-account",level:3},{value:"<code>collect-gentxs</code>",id:"collect-gentxs",level:3},{value:"<code>debug</code>",id:"debug",level:3},{value:"<code>export</code>",id:"export",level:3},{value:"<code>gentx</code>",id:"gentx",level:3},{value:"<code>help</code>",id:"help",level:3},{value:"<code>init</code>",id:"init",level:3},{value:"<code>keys</code>",id:"keys",level:3},{value:"<code>migrate</code>",id:"migrate",level:3},{value:"<code>query</code>",id:"query",level:3},{value:"<code>rosetta</code>",id:"rosetta",level:3},{value:"<code>start</code>",id:"start",level:3},{value:"<code>status</code>",id:"status",level:3},{value:"<code>tendermint</code>",id:"tendermint",level:3},{value:"<code>testnet</code>",id:"testnet",level:3},{value:"<code>tx</code>",id:"tx",level:3},{value:"<code>txs</code>",id:"txs",level:3},{value:"<code>unsafe-reset-all</code>",id:"unsafe-reset-all",level:3},{value:"<code>validate-genesis</code>",id:"validate-genesis",level:3},{value:"<code>version</code>",id:"version",level:3}],d={toc:p};function m(e){let{components:t,...o}=e;return(0,s.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"osmosisd"},"Osmosisd"),(0,s.kt)("h2",{id:"minimum-requirements"},"Minimum Requirements"),(0,s.kt)("p",null,"The minimum recommended specs for running osmosisd is as follows:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"8-core (4 physical core), x86_64 architecture processor"),(0,s.kt)("li",{parentName:"ul"},"32 GB RAM (or equivalent swap file set up)"),(0,s.kt)("li",{parentName:"ul"},"1 TB of storage space")),(0,s.kt)("p",null,"You can check if you have enough storage to run osmosisd ",(0,s.kt)("a",{parentName:"p",href:"https://quicksync.io/networks/osmosis.html"},"here"),"."),(0,s.kt)("h2",{id:"command-help"},"Command Help"),(0,s.kt)("p",null,"Go to ",(0,s.kt)("a",{parentName:"p",href:"#commands"},"commands")," to learn more."),(0,s.kt)("h2",{id:"quick-start"},"Quick Start"),(0,s.kt)("p",null,"Go to ",(0,s.kt)("a",{parentName:"p",href:"https://get.osmosis.zone/"},"https://get.osmosis.zone/")," or copy and paste the following into your terminal, then follow the onscreen instructions:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"curl -sL https://get.osmosis.zone/install > i.py && python3 i.py\n")),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(3960).Z,width:"795",height:"553"})),(0,s.kt)("p",null,"If you are running on an Apple M1 Chip and are running into issues with osmosisd not being a recognized command: "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"git clone https://github.com/osmosis-labs/osmosis.git\ncd osmosis\nmake build\nsudo cp build/osmosisd /usr/local/bin\n")),(0,s.kt)("h2",{id:"manual-installation"},"Manual Installation"),(0,s.kt)("h3",{id:"update-system"},"Update System"),(0,s.kt)("p",null,"This guide will explain how to install the osmosisd binary onto your system."),(0,s.kt)("p",null,"On Ubuntu, start by updating your system:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt upgrade --yes\n")),(0,s.kt)("h2",{id:"install-build-requirements"},"Install Build Requirements"),(0,s.kt)("p",null,"Install make and gcc."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install git build-essential ufw curl jq snapd --yes\n")),(0,s.kt)("p",null,"Install go:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"wget -q -O - https://git.io/vQhTU | bash -s -- --version 1.19.9\n")),(0,s.kt)("p",null,"After installed, open new terminal to properly load go"),(0,s.kt)("h2",{id:"install-osmosis-binary"},"Install Osmosis Binary"),(0,s.kt)("p",null,"Clone the osmosis repo, checkout and install v11.0.1:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HOME\ngit clone https://github.com/osmosis-labs/osmosis\ncd osmosis\n\ngit checkout v11.0.1\n\nmake install\n")),(0,s.kt)("admonition",{title:"Note",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"If you came from the testnet node instruction, ",(0,s.kt)("a",{parentName:"p",href:"../overview/validate"},"click here to return")),(0,s.kt)("p",{parentName:"admonition"},"If you came from the mainnet node instruction, ",(0,s.kt)("a",{parentName:"p",href:"../overview/validate"},"click here to return"))),(0,s.kt)("h2",{id:"commands"},"Commands"),(0,s.kt)("p",null,"This section describes the commands available from ",(0,s.kt)("inlineCode",{parentName:"p"},"osmosisd"),", the command line interface that connects a running ",(0,s.kt)("inlineCode",{parentName:"p"},"osmosisd")," process."),(0,s.kt)("h3",{id:"add-genesis-account"},(0,s.kt)("inlineCode",{parentName:"h3"},"add-genesis-account")),(0,s.kt)("p",null,"Adds a genesis account to ",(0,s.kt)("inlineCode",{parentName:"p"},"genesis.json"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"osmosisd add-genesis-account <address-or-key-name> '<amount><coin-denominator>,<amount><coin-denominator>'\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"osmosisd add-genesis-account acc1 '200000000uOsmo,550000ukrw'\n")),(0,s.kt)("h3",{id:"collect-gentxs"},(0,s.kt)("inlineCode",{parentName:"h3"},"collect-gentxs")),(0,s.kt)("p",null,"Collects genesis transactions and outputs them to ",(0,s.kt)("inlineCode",{parentName:"p"},"genesis.json"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"osmosisd collect-gentxs\n")),(0,s.kt)("h3",{id:"debug"},(0,s.kt)("inlineCode",{parentName:"h3"},"debug")),(0,s.kt)("p",null,"Helps debug the application. "),(0,s.kt)("h3",{id:"export"},(0,s.kt)("inlineCode",{parentName:"h3"},"export")),(0,s.kt)("p",null,"Exports the state to JSON."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"osmosisd export\n")),(0,s.kt)("h3",{id:"gentx"},(0,s.kt)("inlineCode",{parentName:"h3"},"gentx")),(0,s.kt)("p",null,"Adds a genesis transaction to ",(0,s.kt)("inlineCode",{parentName:"p"},"genesis.json"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"osmosisd gentx <key-name> <amount><coin-denominator>\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'osmosisd gentx myKey 1000000uOsmo --home=/path/to/home/dir --keyring-backend=os --chain-id=test-chain-1 \\\n    --moniker="myValidator" \\\n    --commission-max-change-rate=0.01 \\\n    --commission-max-rate=1.0 \\\n    --commission-rate=0.07 \\\n    --details="..." \\\n    --security-contact="..." \\\n    --website="..."\n')),(0,s.kt)("h3",{id:"help"},(0,s.kt)("inlineCode",{parentName:"h3"},"help")),(0,s.kt)("p",null,"Shows help information."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"osmosisd help\n")),(0,s.kt)("h3",{id:"init"},(0,s.kt)("inlineCode",{parentName:"h3"},"init")),(0,s.kt)("p",null,"Initializes the configuration files for a validator and a node."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"osmosisd init <moniker>\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"osmosisd init myNode\n")),(0,s.kt)("h3",{id:"keys"},(0,s.kt)("inlineCode",{parentName:"h3"},"keys")),(0,s.kt)("p",null,"Manages Keyring commands. "),(0,s.kt)("h3",{id:"migrate"},(0,s.kt)("inlineCode",{parentName:"h3"},"migrate")),(0,s.kt)("p",null,"Migrates the source genesis into the target version and prints to STDOUT."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"osmosisd migrate <path-to-genesis-file>\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"osmosisd migrate /genesis.json --chain-id=testnet --genesis-time=2020-04-19T17:00:00Z --initial-height=4000\n")),(0,s.kt)("h3",{id:"query"},(0,s.kt)("inlineCode",{parentName:"h3"},"query")),(0,s.kt)("p",null,"Manages queries. "),(0,s.kt)("h3",{id:"rosetta"},(0,s.kt)("inlineCode",{parentName:"h3"},"rosetta")),(0,s.kt)("p",null,"Creates a Rosetta server."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"osmosisd rosetta\n")),(0,s.kt)("h3",{id:"start"},(0,s.kt)("inlineCode",{parentName:"h3"},"start")),(0,s.kt)("p",null,"Runs the full node application with Tendermint in or out of process. By default, the application runs with Tendermint in process."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"osmosisd start\n")),(0,s.kt)("h3",{id:"status"},(0,s.kt)("inlineCode",{parentName:"h3"},"status")),(0,s.kt)("p",null,"Displays the status of a remote node."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"osmosisd status\n")),(0,s.kt)("h3",{id:"tendermint"},(0,s.kt)("inlineCode",{parentName:"h3"},"tendermint")),(0,s.kt)("p",null,"Manages the Tendermint protocol. "),(0,s.kt)("h3",{id:"testnet"},(0,s.kt)("inlineCode",{parentName:"h3"},"testnet")),(0,s.kt)("p",null,"Creates a testnet with the specified number of directories and populates each directory with the necessary files."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"osmosisd testnet\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"osmosisd testnet --v 6 --output-dir ./output --starting-ip-address 192.168.10.2\n")),(0,s.kt)("h3",{id:"tx"},(0,s.kt)("inlineCode",{parentName:"h3"},"tx")),(0,s.kt)("p",null,"Retrieves a transaction by its hash, account sequence, or signature. "),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax to query by hash")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"osmosisd query tx <hash>\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax to query by account sequence")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"osmosisd query tx --type=acc_seq <address>:<sequence>\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax to query by signature")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"osmosisd query tx --type=signature <sig1_base64,sig2_base64...>\n")),(0,s.kt)("h3",{id:"txs"},(0,s.kt)("inlineCode",{parentName:"h3"},"txs")),(0,s.kt)("p",null,"Retrieves transactions that match the specified events where results are paginated."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"osmosisd query txs --events '<event>' --page <page-number> --limit <number-of-results>\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"osmosisd query txs --events 'message.sender=cosmos1...&message.action=withdraw_delegator_reward' --page 1 --limit 30\n")),(0,s.kt)("h3",{id:"unsafe-reset-all"},(0,s.kt)("inlineCode",{parentName:"h3"},"unsafe-reset-all")),(0,s.kt)("p",null,"Resets the blockchain database, removes address book files, and resets ",(0,s.kt)("inlineCode",{parentName:"p"},"data/priv_validator_state.json")," to the genesis state."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"osmosisd unsafe-reset-all\n")),(0,s.kt)("h3",{id:"validate-genesis"},(0,s.kt)("inlineCode",{parentName:"h3"},"validate-genesis")),(0,s.kt)("p",null,"Validates the genesis file at the default location or at the location specified."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"osmosisd validate-genesis </path-to-file>\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"osmosisd validate-genesis </genesis.json>\n")),(0,s.kt)("h3",{id:"version"},(0,s.kt)("inlineCode",{parentName:"h3"},"version")),(0,s.kt)("p",null,"Returns the version of Osmosis you're running."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"osmosisd version\n")))}m.isMDXComponent=!0},3960:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/installer-8efdd86d2ad69ebfe88cf040b8f83096.png"}}]);