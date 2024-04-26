"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[2652],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86956:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={title:"Scripts and Tests with cw-orchestrator",sidebar_position:9},i="Speed up your development with cw-orchestrator \x3c!-- omit in toc --\x3e",c={unversionedId:"cw-orch",id:"cw-orch",title:"Scripts and Tests with cw-orchestrator",description:"Introduction",source:"@site/docs/cosmwasm/cw-orch.md",sourceDirName:".",slug:"/cw-orch",permalink:"/cosmwasm/cw-orch",draft:!1,editUrl:"https://github.com/osmosis-labs/docs/tree/main/docs/cosmwasm/cw-orch.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Scripts and Tests with cw-orchestrator",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Verifying Smart Contracts",permalink:"/cosmwasm/cosmwasm-verify-contract"},next:{title:"Javascript & Smart Contracts",permalink:"/cosmwasm/javascript"}},s={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Summary",id:"summary",level:2},{value:"Single Contract Integration",id:"single-contract-integration",level:2},{value:"Adding <code>cw-orch</code> to your <code>Cargo.toml</code> file",id:"adding-cw-orch-to-your-cargotoml-file",level:3},{value:"Creating an Interface",id:"creating-an-interface",level:3},{value:"Interaction helpers",id:"interaction-helpers",level:3},{value:"Using the integration",id:"using-the-integration",level:3},{value:"Integration in a workspace",id:"integration-in-a-workspace",level:2},{value:"Handling dependencies and features",id:"handling-dependencies-and-features",level:3},{value:"Creating an interface create",id:"creating-an-interface-create",level:3},{value:"Integrating single contracts",id:"integrating-single-contracts",level:3},{value:"More examples and scripts",id:"more-examples-and-scripts",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"speed-up-your-development-with-cw-orchestrator--omit-in-toc-"},"Speed up your development with cw-orchestrator "),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"cw-orchestrator is the most advanced scripting, testing, and deployment framework for CosmWasm smart-contracts. It makes it easy to write cross-environment compatible code for ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-multi-test"},"cw-multi-test"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/osmosis-labs/test-tube"},"Osmosis Test Tube"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmology-tech/starship"},"Starship")," (alpha), and ",(0,r.kt)("strong",{parentName:"p"},"live networks"),", significantly reducing code duplication and test-writing time. "),(0,r.kt)("p",null,"Get ready to change the way you interact with contracts and simplify you smart-contracts journey. The following steps will allow you to integrate ",(0,r.kt)("inlineCode",{parentName:"p"},"cw-orch")," and write clean code such as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"counter.upload()?;\ncounter.instantiate(&InstantiateMsg { count: 0 }, None, None)?;\ncounter.increment()?;\n\nlet count = counter.get_count()?;\nassert_eq!(count.count, 1);\n")),(0,r.kt)("p",null,"In this quick-start guide, we will review the necessary steps in order to integrate ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AbstractSDK/cw-orchestrator"},(0,r.kt)("inlineCode",{parentName:"a"},"cw-orch"))," into a simple contract create. ",(0,r.kt)("a",{parentName:"p",href:"#integration-in-a-workspace"},"We review integration of rust-workspaces (multiple contracts) at the end of this page"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NOTE"),": ",(0,r.kt)("em",{parentName:"p"},"Quicker than the quick start")),(0,r.kt)("p",{parentName:"blockquote"},"If you're moving quicker than everybody else, we suggest looking at ",(0,r.kt)("a",{href:"https://github.com/AbstractSDK/cw-orch-counter-example/compare/e0a54b074ca1a894bb6e58276944cf2013d152f2..main",target:"_blank"},"a before-after review of this example integration"),". This will help you catch the additions you need to make to your contract to be able to interact with it using cw-orchestrator.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NOTE"),": If you want to go more in depth, ",(0,r.kt)("a",{parentName:"p",href:"https://orchestrator.abstract.money/"},"browse the full ",(0,r.kt)("inlineCode",{parentName:"a"},"cw-orch")," documentation"),".")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#introduction"},"Introduction")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#summary"},"Summary")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#single-contract-integration"},"Single Contract Integration"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#adding-cw-orch-to-your-cargotoml-file"},"Adding ",(0,r.kt)("inlineCode",{parentName:"a"},"cw-orch")," to your ",(0,r.kt)("inlineCode",{parentName:"a"},"Cargo.toml")," file")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#creating-an-interface"},"Creating an Interface")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#interaction-helpers"},"Interaction helpers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#using-the-integration"},"Using the integration")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#integration-in-a-workspace"},"Integration in a workspace"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#handling-dependencies-and-features"},"Handling dependencies and features")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#creating-an-interface-create"},"Creating an interface create")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#integrating-single-contracts"},"Integrating single contracts")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#more-examples-and-scripts"},"More examples and scripts"))),(0,r.kt)("h2",{id:"single-contract-integration"},"Single Contract Integration"),(0,r.kt)("p",null,"Throughout this example, we will be using ",(0,r.kt)("inlineCode",{parentName:"p"},"cw-orch")," to interact with a simple counter contract. All the steps below apply to any smart contract, no matter the complexity."),(0,r.kt)("h3",{id:"adding-cw-orch-to-your-cargotoml-file"},"Adding ",(0,r.kt)("inlineCode",{parentName:"h3"},"cw-orch")," to your ",(0,r.kt)("inlineCode",{parentName:"h3"},"Cargo.toml")," file"),(0,r.kt)("p",null,"To use cw-orchestrator, you need to add ",(0,r.kt)("inlineCode",{parentName:"p"},"cw-orch")," to your contract's TOML file. Run the command below in your contract's directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cargo add --optional cw-orch\n")),(0,r.kt)("p",null,"Alternatively, you can add it manually in your ",(0,r.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," file as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\ncw-orch = {version = "0.19.1", optional = true } # Latest version at time of writing\n')),(0,r.kt)("p",null,"Now that we have added ",(0,r.kt)("inlineCode",{parentName:"p"},"cw-orch")," as an optional dependency we will want to enable it through a feature-flag. This ensures that the code added by ",(0,r.kt)("inlineCode",{parentName:"p"},"cw-orch")," is ",(0,r.kt)("strong",{parentName:"p"},"not")," included in the wasm artifact of the contract."),(0,r.kt)("p",null,"To do this add an ",(0,r.kt)("inlineCode",{parentName:"p"},"interface")," feature to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," and enable ",(0,r.kt)("inlineCode",{parentName:"p"},"cw-orch")," when it is enabled like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[features]\ninterface = ["dep:cw-orch"] # Enables cw-orch when the feature is enabled\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NOTE"),": If you are using ",(0,r.kt)("inlineCode",{parentName:"p"},"rust-analyzer"),", you can add the following two lines in your ",(0,r.kt)("inlineCode",{parentName:"p"},"settings.json")," to make sure the features get taken into account when checking the project:"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},' "rust-analyzer.cargo.features": "all",\n "rust-analyzer.check.features": "all",\n'))),(0,r.kt)("h3",{id:"creating-an-interface"},"Creating an Interface"),(0,r.kt)("p",null,"When using a single contract, we advise creating an ",(0,r.kt)("inlineCode",{parentName:"p"},"interface.rs")," file inside your contract's directory. You then need to add this module to your ",(0,r.kt)("inlineCode",{parentName:"p"},"lib.rs")," file. Don't forget to ",(0,r.kt)("em",{parentName:"p"},"feature-flag")," the module in order to be able to use ",(0,r.kt)("inlineCode",{parentName:"p"},"cw-orch")," inside it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[cfg(feature = "interface")]\nmod interface;\n')),(0,r.kt)("p",null,"Then, inside that ",(0,r.kt)("inlineCode",{parentName:"p"},"interface.rs")," file, you can define the interface for your contract:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use cw_orch::{interface, prelude::*};\n\nuse create::msg::{ExecuteMsg, InstantiateMsg, MigrateMsg, QueryMsg};\n\npub const CONTRACT_ID: &str = "counter_contract";\n\n#[interface(InstantiateMsg, ExecuteMsg, QueryMsg, MigrateMsg, id = CONTRACT_ID)]\npub struct CounterContract;\n\nimpl<Chain: CwEnv> Uploadable for CounterContract<Chain> {\n    /// Return the path to the wasm file corresponding to the contract\n    fn wasm(&self) -> WasmPath {\n        artifacts_dir_from_workspace!()\n            .find_wasm_path("counter_contract")\n            .unwrap()\n    }\n    /// Returns a CosmWasm contract wrapper\n    fn wrapper(&self) -> Box<dyn MockContract<Empty>> {\n        Box::new(\n            ContractWrapper::new_with_empty(\n                create::contract::execute,\n                create::contract::instantiate,\n                create::contract::query,\n            )\n            .with_migrate(create::contract::migrate),\n        )\n    }\n}\n\n')),(0,r.kt)("p",null,"Learn more about the content of the interface creation specifics in the ",(0,r.kt)("a",{parentName:"p",href:"https://orchestrator.abstract.money/contracts/interfaces.html#creating-an-interface"},(0,r.kt)("inlineCode",{parentName:"a"},"cw-orch")," documentation")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NOTE"),": It can be useful to re-export this struct to simplify usage (in ",(0,r.kt)("inlineCode",{parentName:"p"},"lib.rs"),"):"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[cfg(feature = "interface")]\npub use create::interface::CounterContract;\n'))),(0,r.kt)("h3",{id:"interaction-helpers"},"Interaction helpers"),(0,r.kt)("p",null,"cw-orchestrator provides a additional macros that simplify contract calls and queries. The macro implements functions on the interface for each variant of the contract's ",(0,r.kt)("inlineCode",{parentName:"p"},"ExecuteMsg")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"QueryMsg"),"."),(0,r.kt)("p",null,"Enabling this functionality is very straightforward. Find your ",(0,r.kt)("inlineCode",{parentName:"p"},"ExecuteMsg")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"QueryMsg")," definitions (in ",(0,r.kt)("inlineCode",{parentName:"p"},"msg.rs")," in our example) and add the ",(0,r.kt)("inlineCode",{parentName:"p"},"ExecuteFns")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"QueryFns")," derive macros to them like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[cw_serde]\n#[cfg_attr(feature = "interface", derive(cw_orch::ExecuteFns))] // Function generation\n/// Execute methods for counter\npub enum ExecuteMsg {\n    /// Increment count by one\n    Increment {},\n    /// Reset count\n    Reset {\n        /// Count value after reset\n        count: i32,\n    },\n}\n\n#[cw_serde]\n#[cfg_attr(feature = "interface", derive(cw_orch::QueryFns))] // Function generation\n#[derive(QueryResponses)]\n/// Query methods for counter\npub enum QueryMsg {\n    /// GetCount returns the current count as a json-encoded number\n    #[returns(GetCountResponse)]\n    GetCount {},\n}\n\n// Custom response for the query\n#[cw_serde]\n/// Response from get_count query\npub struct GetCountResponse {\n    /// Current count in the state\n    pub count: i32,\n}\n')),(0,r.kt)("p",null,"Find out more about the interaction helpers in the ",(0,r.kt)("a",{parentName:"p",href:"https://orchestrator.abstract.money/contracts/interfaces.html#entry-point-function-generation"},(0,r.kt)("inlineCode",{parentName:"a"},"cw-orch")," documentation")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NOTE"),": Again, it can be useful to re-export these generated traits to simplify usage (in ",(0,r.kt)("inlineCode",{parentName:"p"},"lib.rs"),"):"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[cfg(feature = "interface")]\npub use create::msg::{ExecuteMsgFns as CounterExecuteMsgFns, QueryMsgFns as CounterQueryMsgFns};\n'))),(0,r.kt)("h3",{id:"using-the-integration"},"Using the integration"),(0,r.kt)("p",null,"Now that all the setup is done, you can use your contract in tests, integration-tests or scripts."),(0,r.kt)("p",null,"Start by importing your create, with the ",(0,r.kt)("inlineCode",{parentName:"p"},"interface")," feature enabled. Depending on your use-case this will be in ",(0,r.kt)("inlineCode",{parentName:"p"},"[dependencies]")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"[dev-dependencies]"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'counter-contract = { path = "../counter-contract", features = ["interface"] }\n')),(0,r.kt)("p",null,"You can now use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use counter_contract::{\n    msg::InstantiateMsg, CounterContract, CounterExecuteMsgFns, CounterQueryMsgFns,\n};\nuse cw_orch::{anyhow, prelude::*, tokio};\nuse tokio::runtime::Runtime;\n\nconst LOCAL_MNEMONIC: &str = "clip hire initial neck maid actor venue client foam budget lock catalog sweet steak waste crater broccoli pipe steak sister coyote moment obvious choose";\npub fn main() -> anyhow::Result<()> {\n    std::env::set_var("LOCAL_MNEMONIC", LOCAL_MNEMONIC);\n    dotenv::dotenv().ok(); // Used to load the `.env` file if any\n    pretty_env_logger::init(); // Used to log contract and chain interactions\n\n    let rt = Runtime::new()?;\n    let network = networks::LOCAL_JUNO;\n    let chain = DaemonBuilder::default()\n        .handle(rt.handle())\n        .chain(network)\n        .build()?;\n\n\n    let counter = CounterContract::new(chain);\n\n    counter.upload()?;\n    counter.instantiate(&InstantiateMsg { count: 0 }, None, None)?;\n\n    counter.increment()?;\n\n    let count = counter.get_count()?;\n    assert_eq!(count.count, 1);\n\n    Ok(())\n}\n')),(0,r.kt)("h2",{id:"integration-in-a-workspace"},"Integration in a workspace"),(0,r.kt)("p",null,"In this paragraph, we will use the ",(0,r.kt)("inlineCode",{parentName:"p"},"cw-plus")," repository as an example. You can review:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://github.com/AbstractSDK/cw-plus",target:"_blank"},"The full integration code")," with `cw-orch` added"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://github.com/cosmwasm/cw-plus/compare/main...abstractsdk:main",target:"_blank"},"The complete diff")," that shows you all integration spots (if you want to go fast)")),(0,r.kt)("h3",{id:"handling-dependencies-and-features"},"Handling dependencies and features"),(0,r.kt)("p",null,"When using workspaces, you need to do the 2 following actions on all crates that include ",(0,r.kt)("inlineCode",{parentName:"p"},"ExecuteMsg")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"QueryMsg")," used in your contracts:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"cw-orch")," as an optional dependency"),(0,r.kt)("li",{parentName:"ol"},"Add an ",(0,r.kt)("inlineCode",{parentName:"li"},"interface")," feature (ensures ",(0,r.kt)("inlineCode",{parentName:"li"},"cw-orch")," is not compiled into your ",(0,r.kt)("inlineCode",{parentName:"li"},"wasm")," contract)")),(0,r.kt)("p",null,"Refer above to ",(0,r.kt)("a",{parentName:"p",href:"#adding-cw-orch-to-your-cargotoml-file"},"Adding ",(0,r.kt)("inlineCode",{parentName:"a"},"cw-orch")," to your ",(0,r.kt)("inlineCode",{parentName:"a"},"Cargo.toml")," file")," for more details on how to do that."),(0,r.kt)("p",null,"For instance, for the ",(0,r.kt)("inlineCode",{parentName:"p"},"cw20_base")," contract, you need to execute those 2 steps on the ",(0,r.kt)("inlineCode",{parentName:"p"},"cw20-base")," contract (where the ",(0,r.kt)("inlineCode",{parentName:"p"},"QueryMsg")," are defined) as well as on the ",(0,r.kt)("inlineCode",{parentName:"p"},"cw20")," package (where the ",(0,r.kt)("inlineCode",{parentName:"p"},"ExecuteMsg")," are defined)."),(0,r.kt)("h3",{id:"creating-an-interface-create"},"Creating an interface create"),(0,r.kt)("p",null,"When using a workspace, we advise you to create a new create inside your workspace for defining your contract's interfaces. In order to do that, use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cargo new interface --lib\ncargo add cw-orch --package interface \n")),(0,r.kt)("p",null,"Add the interface package to your workspace ",(0,r.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[workspace]\nmembers = ["packages/*", "contracts/*", "interface"]\n')),(0,r.kt)("p",null,"Inside this ",(0,r.kt)("inlineCode",{parentName:"p"},"interface")," create, we advise to integrate all your contracts 1 by 1 in separate files. Here is the structure of the ",(0,r.kt)("inlineCode",{parentName:"p"},"cw-plus")," integration for reference:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-path"},"interface (interface collection)\n\u251c\u2500\u2500 Cargo.toml\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 cw1_subkeys.rs\n    \u251c\u2500\u2500 cw1_whitelist.rs\n    \u251c\u2500\u2500 cw20_base.rs\n    \u251c\u2500\u2500 cw20_ics20.rs\n    \u2514\u2500\u2500 ..\n")),(0,r.kt)("p",null,"When importing your crates to get the messages types, you can use the following command in the interface folder. Don't forget to activate the interface feature to be able to use the cw_orch functionalities."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cargo add cw20-base --path ../contracts/cw20-base/ --features=interface\ncargo add cw20 --path ../packages/cw20 --features=interface\n")),(0,r.kt)("h3",{id:"integrating-single-contracts"},"Integrating single contracts"),(0,r.kt)("p",null,"Now that you workspace is setup, you can ",(0,r.kt)("a",{parentName:"p",href:"#single-contract-integration"},"integrate with single contracts")," using the above section"),(0,r.kt)("h2",{id:"more-examples-and-scripts"},"More examples and scripts"),(0,r.kt)("p",null,"You can find more example interactions on the ",(0,r.kt)("inlineCode",{parentName:"p"},"counter-contract")," example directly in the ",(0,r.kt)("inlineCode",{parentName:"p"},"cw-orchestrator")," repo:  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Some examples ",(0,r.kt)("a",{href:"https://github.com/AbstractSDK/cw-orchestrator/blob/main/contracts/counter/examples/deploy.rs",target:"_blank"},"showcase interacting with live chains"),"."),(0,r.kt)("li",{parentName:"ul"},"Some other examples show ",(0,r.kt)("a",{href:"https://github.com/AbstractSDK/cw-orchestrator/tree/main/contracts/counter/tests",target:"_blank"},"how to use the library for testing your contracts"),".")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"FINAL ADVICE"),": Learn more and explorer our ",(0,r.kt)("a",{parentName:"p",href:"https://orchestrator.abstract.money"},"full ",(0,r.kt)("inlineCode",{parentName:"a"},"cw-orch")," documentation !"))))}u.isMDXComponent=!0}}]);