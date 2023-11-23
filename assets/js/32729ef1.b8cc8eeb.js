"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[2398],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return n?o.createElement(g,a(a({ref:t},u),{},{components:n})):o.createElement(g,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25514:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const s={sidebar_position:10},a="Interact with gRPC Server",i={unversionedId:"integrate/grpc",id:"integrate/grpc",title:"Interact with gRPC Server",description:"A gRPC endpoint is availble on the public Osmosis nodes so that you can start playing and intreacting with it right away.",source:"@site/docs/overview/integrate/grpc.md",sourceDirName:"integrate",slug:"/integrate/grpc",permalink:"/overview/integrate/grpc",draft:!1,editUrl:"https://github.com/osmosis-labs/docs/tree/main/docs/overview/integrate/grpc.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Interact with CLI",permalink:"/overview/integrate/cli"},next:{title:"APR Calculation",permalink:"/overview/integrate/apr"}},l={},c=[{value:"Enabling gRPC on a node",id:"enabling-grpc-on-a-node",level:2},{value:"Grpc endpoints",id:"grpc-endpoints",level:2},{value:"Buf Studio",id:"buf-studio",level:3},{value:"Interacting with Buf Studio",id:"interacting-with-buf-studio",level:4},{value:"How does buf Studio work with Osmosis",id:"how-does-buf-studio-work-with-osmosis",level:4},{value:"gRPCurl",id:"grpcurl",level:3},{value:"Interacting with grpcurl",id:"interacting-with-grpcurl",level:4},{value:"Query for historical state using grpcurl",id:"query-for-historical-state-using-grpcurl",level:4},{value:"Interacting with Go",id:"interacting-with-go",level:3},{value:"Install Cosmos SDK",id:"install-cosmos-sdk",level:4},{value:"Query for historical state using Go",id:"query-for-historical-state-using-go",level:4}],u={toc:c};function p(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"interact-with-grpc-server"},"Interact with gRPC Server"),(0,r.kt)("p",null,"A gRPC endpoint is availble on the public Osmosis nodes so that you can start playing and intreacting with it right away."),(0,r.kt)("h2",{id:"enabling-grpc-on-a-node"},"Enabling gRPC on a node"),(0,r.kt)("p",null,"If you are running your own node. It's also possible to enable them by editing  ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.osmosisd/config/app.toml"),": "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"grpc.enable = true|false")," field defines if the gRPC server should be enabled. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"grpc.address = {string}")," field defines the address (really, the port, since the host should be kept at ",(0,r.kt)("inlineCode",{parentName:"li"},"0.0.0.0"),") the server should bind to. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"0.0.0.0:9090"),".")),(0,r.kt)("h2",{id:"grpc-endpoints"},"Grpc endpoints"),(0,r.kt)("p",null,"An overview of all available gRPC endpoints shipped with Osmosis is available in the ",(0,r.kt)("a",{parentName:"p",href:"https://buf.build/osmosis-labs/osmosis"},"Osmosis Protobuf documentation"),". There is also a Cosmos SDK is ",(0,r.kt)("a",{parentName:"p",href:"https://buf.build/cosmos/cosmos-sdk"},"Protobuf documentation"),"."),(0,r.kt)("p",null,"You can send requests to the gRPC server using a gRPC client such as ",(0,r.kt)("a",{parentName:"p",href:"#grpcurl"},"grpcurl")," or from ",(0,r.kt)("a",{parentName:"p",href:"./interact-grpc-buf-studio"},"Buf Studio"),"."),(0,r.kt)("p",null,"Since the code generation library largely depends on your own tech stack, we will only present three alternatives:"),(0,r.kt)("h3",{id:"buf-studio"},"Buf Studio"),(0,r.kt)("h4",{id:"interacting-with-buf-studio"},"Interacting with Buf Studio"),(0,r.kt)("p",null,"An interactive web UI for all the gRPC and Protobuf services stored on the ",(0,r.kt)("a",{parentName:"p",href:"https://buf.build/osmosis-labs/osmosis"},"Osmosis Buf Schema Registry")),(0,r.kt)("p",null,"Studio preconfigured with the mainnet RPC:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://studio.buf.build/osmosis-labs/osmosis/osmosis.epochs.v1beta1.Query/EpochInfos?target=http%3A%2F%2Fgrpc.osmosis.zone%3A9090&selectedProtocol=grpc&agentUrl=https%3A%2F%2Fbuf.osmosis.zone&share=AQQA%2B%2F86Ant9"},"Launch Buf Studio on mainnet RPC")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://studio.buf.build/osmosis-labs/osmosis/osmosis.epochs.v1beta1.Query/EpochInfos?target=http%3A%2F%2Fgrpc.dev-osmosis.zone%3A443&selectedProtocol=grpc&agentUrl=https%3A%2F%2Fbuf.osmosis.zone&share=AQQA%2B%2F86Ant9"},"Launch Buf Studio on testnet RPC"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(39495).Z,width:"2032",height:"1458"})),(0,r.kt)("p",null,"Things you can do with buf Studio: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select an endpoint from any BSR module to send requests to  gRPC"),(0,r.kt)("li",{parentName:"ul"},"Use the editor with schema-based autocompletion, validation and documentation to draft JSON based request messages."),(0,r.kt)("li",{parentName:"ul"},"Configure headers to further customize outgoing requests."),(0,r.kt)("li",{parentName:"ul"},"Optionally include cookies in outgoing request to send authenticated requests to private APIs (or Buf Studio Agent instances)."),(0,r.kt)("li",{parentName:"ul"},"Create shareable links for requests defined on Buf Studio to team members with access.")),(0,r.kt)("h4",{id:"how-does-buf-studio-work-with-osmosis"},"How does buf Studio work with Osmosis"),(0,r.kt)("p",null,"We have a Buf agent running at ",(0,r.kt)("a",{parentName:"p",href:"https://buf.osmosis.zone"},"https://buf.osmosis.zone")," which will allow you to use the buf data studio to explore the available methods. "),(0,r.kt)("h3",{id:"grpcurl"},"gRPCurl"),(0,r.kt)("h4",{id:"interacting-with-grpcurl"},"Interacting with grpcurl"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/fullstorydev/grpcurl"},"grpcurl")," is like ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," but for gRPC. It is also available as a Go library, but we will use it only as a CLI command for debugging and testing purposes. Follow the instructions in the previous link to install it."),(0,r.kt)("p",null,"Assuming you already installed osmosisd with the ",(0,r.kt)("a",{parentName:"p",href:"../osmosis-core/osmosisd"},"installer"),", you should be able to run the following command to list the Protobuf services available (you can replace ",(0,r.kt)("inlineCode",{parentName:"p"},"grpc.osmosis.zone:9000")," by the gRPC server endpoint of another node such as the testnet, another provider or your own node."),(0,r.kt)("p",null,"Listing all the methods from the mainnet"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"grpcurl -plaintext grpc.osmosis.zone:9090 list\n")),(0,r.kt)("p",null,"Output will look like: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cosmos.auth.v1beta1.Query\ncosmos.authz.v1beta1.Query\ncosmos.bank.v1beta1.Query\ncosmos.base.reflection.v1beta1.ReflectionService\ncosmos.base.reflection.v2alpha1.ReflectionService\ncosmos.base.tendermint.v1beta1.Service\ncosmos.distribution.v1beta1.Query\ncosmos.evidence.v1beta1.Query\ncosmos.gov.v1beta1.Query\ncosmos.params.v1beta1.Query\ncosmos.slashing.v1beta1.Query\ncosmos.staking.v1beta1.Query\ncosmos.tx.v1beta1.Service\ncosmos.upgrade.v1beta1.Query\ncosmwasm.wasm.v1.Query\ngrpc.reflection.v1alpha.ServerReflection\nibc.applications.interchain_accounts.host.v1.Query\nibc.applications.transfer.v1.Query\nibc.core.channel.v1.Query\nibc.core.client.v1.Query\nibc.core.connection.v1.Query\nosmosis.epochs.v1beta1.Query\nosmosis.gamm.v1beta1.Query\nosmosis.incentives.Query\nosmosis.lockup.Query\nosmosis.mint.v1beta1.Query\nosmosis.poolincentives.v1beta1.Query\nosmosis.superfluid.Query\nosmosis.tokenfactory.v1beta1.Query\nosmosis.twap.v1beta1.Query\nosmosis.txfees.v1beta1.Query\ntestdata.Query\n")),(0,r.kt)("p",null,"You should see a list of gRPC services, like ",(0,r.kt)("inlineCode",{parentName:"p"},"cosmos.bank.v1beta1.Query"),". This is called reflection, which is a Protobuf endpoint returning a description of all available endpoints. Each of these represents a different Protobuf service, and each service exposes multiple RPC methods you can query against."),(0,r.kt)("p",null,"In order to get a description of the service you can run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"grpcurl  -plaintext \\\n    grpc.osmosis.zone:9090 \\\n    describe osmosis.gamm.v1beta1.Query               \n")),(0,r.kt)("p",null,"It's also possible to execute an RPC call to query the node for information:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"grpcurl -plaintext grpc.dev-osmosis.zone:443 osmosis.gamm.v1beta1.Query.Pools\n")),(0,r.kt)("p",null,"The list of all available gRPC query endpoints and API exploration is possible with the help of buf studio. "),(0,r.kt)("h4",{id:"query-for-historical-state-using-grpcurl"},"Query for historical state using grpcurl"),(0,r.kt)("p",null,"You may also query for historical data by passing some ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/grpc/grpc-go/blob/master/Documentation/grpc-metadata.md"},"gRPC metadata")," to the query: the ",(0,r.kt)("inlineCode",{parentName:"p"},"x-cosmos-block-height")," metadata should contain the block to query. Using grpcurl as above, the command looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'grpcurl \\\n    -plaintext \\\n    -H "x-cosmos-block-height: 6312618" \\\n    -d \'{"address":"osmo19a7pmytd9vk26l57q8chacuprsmx05g23mg6yc"}\' \\\n    grpc.osmosis.zone:9090 \\\n    cosmos.bank.v1beta1.Query/AllBalances\n')),(0,r.kt)("p",null,"Note: This endpoint might change to  grpc.osmosis.zone:443 in the near future. "),(0,r.kt)("p",null,"Assuming the state at that block has not yet been pruned by the node, this query should return a non-empty response."),(0,r.kt)("h3",{id:"interacting-with-go"},"Interacting with Go"),(0,r.kt)("p",null,"The following snippet shows how to query the state using gRPC inside a Go program. The idea is to create a gRPC connection, and use the Protobuf-generated client code to query the gRPC server."),(0,r.kt)("h4",{id:"install-cosmos-sdk"},"Install Cosmos SDK"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/cosmos/cosmos-sdk@main\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n    "fmt"\n\n    "google.golang.org/grpc"\n\n    "github.com/cosmos/cosmos-sdk/codec"\n    sdk "github.com/cosmos/cosmos-sdk/types"\n    banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"\n)\n\nfunc queryState() error {\n    myAddress, err := sdk.AccAddressFromBech32("cosmos1...")\n    if err != nil {\n        return err\n    }\n\n    // Create a connection to the gRPC server.\n    grpcConn, err := grpc.Dial(\n        "127.0.0.1:9090", // your gRPC server address.\n        grpc.WithInsecure(), // The Cosmos SDK doesn\'t support any transport security mechanism. \n        // This instantiates a general gRPC codec which handles proto bytes. We pass in a nil interface registry\n        // if the request/response types contain interface instead of \'nil\' you should pass the application specific codec.\n        grpc.WithDefaultCallOptions(grpc.ForceCodec(codec.NewProtoCodec(nil).GRPCCodec())),\n    )\n    if err != nil {\n        return err\n    }\n    defer grpcConn.Close()\n\n    // This creates a gRPC client to query the x/bank service.\n    bankClient := banktypes.NewQueryClient(grpcConn)\n    bankRes, err := bankClient.Balance(\n        context.Background(),\n        &banktypes.QueryBalanceRequest{Address: myAddress.String(), Denom: "atom"},\n    )\n    if err != nil {\n        return err\n    }\n\n    fmt.Println(bankRes.GetBalance()) // Prints the account balance\n\n    return nil\n}\n')),(0,r.kt)("p",null,"You can replace the query client (here we are using ",(0,r.kt)("inlineCode",{parentName:"p"},"x/bank"),"'s) with one generated from any other Protobuf service. The list of all available gRPC query endpoints is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/issues/7786"},"coming soon"),"."),(0,r.kt)("h4",{id:"query-for-historical-state-using-go"},"Query for historical state using Go"),(0,r.kt)("p",null,"Querying for historical blocks is done by adding the block height metadata in the gRPC request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n    "fmt"\n\n    "google.golang.org/grpc"\n    "google.golang.org/grpc/metadata"\n\n    "github.com/cosmos/cosmos-sdk/codec"\n    sdk "github.com/cosmos/cosmos-sdk/types"\n    grpctypes "github.com/cosmos/cosmos-sdk/types/grpc"\n    banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"\n)\n\nfunc queryState() error {\n    // --snip--\n\n    var header metadata.MD\n    bankRes, err = bankClient.Balance(\n        metadata.AppendToOutgoingContext(context.Background(), grpctypes.GRPCBlockHeightHeader, "12"), // Add metadata to request\n        &banktypes.QueryBalanceRequest{Address: myAddress.String(), Denom: "atom"},\n        grpc.Header(&header), // Retrieve header from response\n    )\n    if err != nil {\n        return err\n    }\n    blockHeight := header.Get(grpctypes.GRPCBlockHeightHeader)\n\n    fmt.Println(blockHeight) // Prints the block height (12)\n\n    return nil\n}\n')))}p.isMDXComponent=!0},39495:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/buf-30f670d272afadd5289a696df0b9f587.png"}}]);