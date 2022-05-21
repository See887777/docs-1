(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{512:function(s,e,t){"use strict";t.r(e);var a=t(8),o=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"localosmosis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#localosmosis"}},[s._v("#")]),s._v(" LocalOsmosis")]),s._v(" "),t("h2",{attrs:{id:"what-is-localosmosis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-is-localosmosis"}},[s._v("#")]),s._v(" What is LocalOsmosis?")]),s._v(" "),t("p",[s._v("LocalOsmosis (a fork of LocalTerra) is a complete Osmosis testnet and ecosystem containerized with Docker and orchestrated with a simple "),t("code",[s._v("docker-compose")]),s._v(" file. It simplifies the way smart-contract developers test their contracts in a sandbox before they deploy them on a testnet or mainnet.")]),s._v(" "),t("p",[s._v("LocalOsmosis comes preconfigured with opinionated, sensible defaults for standard testing environments. If other projects mention testing on LocalOsmosis, they are referring to the settings defined in this repo.")]),s._v(" "),t("p",[s._v("LocalOsmosis has the following advantages over a public testnet:")]),s._v(" "),t("ul",[t("li",[s._v("Easily modifiable world states")]),s._v(" "),t("li",[s._v("Quick to reset for rapid iterations")]),s._v(" "),t("li",[s._v("Simple simulations of different scenarios")]),s._v(" "),t("li",[s._v("Controllable validator behavior")])]),s._v(" "),t("h2",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[s._v("#")]),s._v(" Prerequisites")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[t("code",[s._v("Docker")]),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/docker/compose",target:"_blank",rel:"noopener noreferrer"}},[t("code",[s._v("docker-compose")]),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://get.osmosis.zone",target:"_blank",rel:"noopener noreferrer"}},[t("code",[s._v("Osmosisd")]),t("OutboundLink")],1),s._v(" "),t("ul",[t("li",[s._v("Select option 3 (localosmosis), the installer will configure everything for you.")]),s._v(" "),t("li",[s._v("The osmosisd dameon on your local computer is used to communicate with the localosmosis daemin running inside the Docker container.")])])]),s._v(" "),t("li",[s._v("Supported known architecture: x86_64")]),s._v(" "),t("li",[s._v("16+ GB of RAM is recommended")])]),s._v(" "),t("h2",{attrs:{id:"install-localosmosis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-localosmosis"}},[s._v("#")]),s._v(" Install LocalOsmosis")]),s._v(" "),t("ol",[t("li",[s._v("Run the following commands::")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/osmosis-labs/LocalOsmosis.git\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" LocalOsmosis\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("Make sure your Docker daemon is running in the background and "),t("a",{attrs:{href:"https://github.com/docker/compose",target:"_blank",rel:"noopener noreferrer"}},[t("code",[s._v("docker-compose")]),t("OutboundLink")],1),s._v(" is installed.")])]),s._v(" "),t("p",[s._v("If running on linux, you can install these tools with the following commands:")]),s._v(" "),t("ul",[t("li",[s._v("docker")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo apt-get remove docker docker-engine docker.io\nsudo apt-get update\nsudo apt install docker.io -y\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ul",[t("li",[s._v("docker-compose")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo apt install docker-compose -y\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"start-stop-and-reset-localosmosis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-stop-and-reset-localosmosis"}},[s._v("#")]),s._v(" Start, stop, and reset LocalOsmosis")]),s._v(" "),t("ul",[t("li",[s._v("Start LocalOsmosis:")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" start\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("Your environment now contains:")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://github.com/osmosis-labs/osmosis",target:"_blank",rel:"noopener noreferrer"}},[s._v("osmosisd"),t("OutboundLink")],1),s._v(" RPC node running on "),t("code",[s._v("tcp://localhost:26657")])]),s._v(" "),t("li",[s._v("LCD running on http://localhost:1317")])]),s._v(" "),t("p",[s._v("Stop LocalOsmosis (and retain chain data):")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" stop\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("Stop LocalOsmosis (and delete chain data):")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" restart\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"integrations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#integrations"}},[s._v("#")]),s._v(" Integrations")]),s._v(" "),t("h3",{attrs:{id:"osmosisd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#osmosisd"}},[s._v("#")]),s._v(" osmosisd")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("Ensure the same version of "),t("code",[s._v("osmosisd")]),s._v(" is present in your local computer and LocalOsmosis Docker container. You can check the version of localosmosis by checking the image in the docker-compose.yml file and the version of your osmosisd on your local machine with "),t("code",[s._v("osmosisd version")])])]),s._v(" "),t("li",[t("p",[s._v("Use "),t("code",[s._v("osmosisd")]),s._v(" from your local machine to talk to your LocalOsmosis "),t("code",[s._v("osmosisd")]),s._v(" node:")])])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("osmosisd status\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("This command automatically works because "),t("code",[s._v("osmosisd")]),s._v(" connects to "),t("code",[s._v("localhost:26657")]),s._v(" by default.")]),s._v(" "),t("p",[s._v("The following command is the explicit form:")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("osmosisd status --node"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("tcp://localhost:26657\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("Run any of the "),t("code",[s._v("osmosisd")]),s._v(" commands against your LocalOsmosis network, as shown in the following example:")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("osmosisd query account osmo1l0jjmvdtj4c3f8cxzzgfhq0zhdzf2x8cgpg056\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"configure-localosmosis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configure-localosmosis"}},[s._v("#")]),s._v(" Configure LocalOsmosis")]),s._v(" "),t("p",[s._v("The majority of LocalOsmosis is implemented through a "),t("code",[s._v("docker-compose.yml")]),s._v(" file, making it easily customizable. You can use LocalOsmosis as a starting template point for setting up your own local Osmosis testnet with Docker containers.")]),s._v(" "),t("p",[s._v("Out of the box, LocalOsmosis comes preconfigured with opinionated settings such as:")]),s._v(" "),t("ul",[t("li",[s._v("ports defined for RPC (26657) and LCD (1317)")]),s._v(" "),t("li",[s._v("standard "),t("a",{attrs:{href:"#accounts"}},[s._v("accounts")])])]),s._v(" "),t("h3",{attrs:{id:"modifying-node-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#modifying-node-configuration"}},[s._v("#")]),s._v(" Modifying node configuration")]),s._v(" "),t("p",[s._v("You can modify the node configuration of your validator in the "),t("code",[s._v("config/config.toml")]),s._v(" and "),t("code",[s._v("config/app.toml")]),s._v(" files.")]),s._v(" "),t("h4",{attrs:{id:"pro-tip-speed-up-block-time"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pro-tip-speed-up-block-time"}},[s._v("#")]),s._v(" Pro tip: Speed Up Block Time")]),s._v(" "),t("p",[s._v("To decrease block time, edit the "),t("code",[s._v("[consensus]")]),s._v(" parameters in the "),t("code",[s._v("config/config.toml")]),s._v(" file, and specify your own values.")]),s._v(" "),t("p",[s._v("The following example configures all timeouts to "),t("code",[s._v("200ms")]),s._v(":")]),s._v(" "),t("div",{staticClass:"language-diff line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-diff"}},[t("code",[s._v('##### consensus configuration options #####\n[consensus]\n\nwal_file = "data/cs.wal/wal"\n'),t("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[t("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v(' timeout_propose = "3s"\n')]),t("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v(' timeout_propose_delta = "500ms"\n')]),t("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v(' timeout_prevote = "1s"\n')]),t("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v(' timeout_prevote_delta = "500ms"\n')]),t("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v(' timeout_precommit_delta = "500ms"\n')]),t("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v(' timeout_commit = "5s"\n')])]),t("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v(' timeout_propose = "200ms"\n')]),t("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v(' timeout_propose_delta = "200ms"\n')]),t("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v(' timeout_prevote = "200ms"\n')]),t("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v(' timeout_prevote_delta = "200ms"\n')]),t("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v(' timeout_precommit_delta = "200ms"\n')]),t("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v(' timeout_commit = "200ms"\n')])])])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("p",[s._v("Additionally, you can use the following single line to configure timeouts:")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -E -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/timeout_(propose|prevote|precommit|commit)/s/[0-9]+m?s/200ms/'")]),s._v(" config/config.toml\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"modifying-genesis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#modifying-genesis"}},[s._v("#")]),s._v(" Modifying genesis")]),s._v(" "),t("p",[s._v("You can change the "),t("code",[s._v("genesis.json")]),s._v(" file by altering "),t("code",[s._v("config/genesis.json")]),s._v(". To load your changes, restart your LocalOsmosis.")]),s._v(" "),t("h2",{attrs:{id:"accounts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#accounts"}},[s._v("#")]),s._v(" Accounts")]),s._v(" "),t("p",[s._v("LocalOsmosis is pre-configured with one validator and 10 accounts with ION and OSMO balances.")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("Account")]),s._v(" "),t("th",[s._v("Address")]),s._v(" "),t("th",[s._v("Mnemonic")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("validator")]),s._v(" "),t("td",[t("code",[s._v("osmo1phaxpevm5wecex2jyaqty2a4v02qj7qmlmzk5a")]),t("br"),t("code",[s._v("osmovaloper1phaxpevm5wecex2jyaqty2a4v02qj7qm9v24r6")])]),s._v(" "),t("td",[t("code",[s._v("satisfy adjust timber high purchase tuition stool faith fine install that you unaware feed domain license impose boss human eager hat rent enjoy dawn")])])]),s._v(" "),t("tr",[t("td",[s._v("test1")]),s._v(" "),t("td",[t("code",[s._v("osmo1cyyzpxplxdzkeea7kwsydadg87357qnahakaks")])]),s._v(" "),t("td",[t("code",[s._v("notice oak worry limit wrap speak medal online prefer cluster roof addict wrist behave treat actual wasp year salad speed social layer crew genius")])])]),s._v(" "),t("tr",[t("td",[s._v("test2")]),s._v(" "),t("td",[t("code",[s._v("osmo18s5lynnmx37hq4wlrw9gdn68sg2uxp5rgk26vv")])]),s._v(" "),t("td",[t("code",[s._v("quality vacuum heart guard buzz spike sight swarm shove special gym robust assume sudden deposit grid alcohol choice devote leader tilt noodle tide penalty")])])]),s._v(" "),t("tr",[t("td",[s._v("test3")]),s._v(" "),t("td",[t("code",[s._v("osmo1qwexv7c6sm95lwhzn9027vyu2ccneaqad4w8ka")])]),s._v(" "),t("td",[t("code",[s._v("symbol force gallery make bulk round subway violin worry mixture penalty kingdom boring survey tool fringe patrol sausage hard admit remember broken alien absorb")])])]),s._v(" "),t("tr",[t("td",[s._v("test4")]),s._v(" "),t("td",[t("code",[s._v("osmo14hcxlnwlqtq75ttaxf674vk6mafspg8xwgnn53")])]),s._v(" "),t("td",[t("code",[s._v("bounce success option birth apple portion aunt rural episode solution hockey pencil lend session cause hedgehog slender journey system canvas decorate razor catch empty")])])]),s._v(" "),t("tr",[t("td",[s._v("test5")]),s._v(" "),t("td",[t("code",[s._v("osmo12rr534cer5c0vj53eq4y32lcwguyy7nndt0u2t")])]),s._v(" "),t("td",[t("code",[s._v("second render cat sing soup reward cluster island bench diet lumber grocery repeat balcony perfect diesel stumble piano distance caught occur example ozone loyal")])])]),s._v(" "),t("tr",[t("td",[s._v("test6")]),s._v(" "),t("td",[t("code",[s._v("osmo1nt33cjd5auzh36syym6azgc8tve0jlvklnq7jq")])]),s._v(" "),t("td",[t("code",[s._v("spatial forest elevator battle also spoon fun skirt flight initial nasty transfer glory palm drama gossip remove fan joke shove label dune debate quick")])])]),s._v(" "),t("tr",[t("td",[s._v("test7")]),s._v(" "),t("td",[t("code",[s._v("osmo10qfrpash5g2vk3hppvu45x0g860czur8ff5yx0")])]),s._v(" "),t("td",[t("code",[s._v("noble width taxi input there patrol clown public spell aunt wish punch moment will misery eight excess arena pen turtle minimum grain vague inmate")])])]),s._v(" "),t("tr",[t("td",[s._v("test8")]),s._v(" "),t("td",[t("code",[s._v("osmo1f4tvsdukfwh6s9swrc24gkuz23tp8pd3e9r5fa")])]),s._v(" "),t("td",[t("code",[s._v("cream sport mango believe inhale text fish rely elegant below earth april wall rug ritual blossom cherry detail length blind digital proof identify ride")])])]),s._v(" "),t("tr",[t("td",[s._v("test9")]),s._v(" "),t("td",[t("code",[s._v("osmo1myv43sqgnj5sm4zl98ftl45af9cfzk7nhjxjqh")])]),s._v(" "),t("td",[t("code",[s._v("index light average senior silent limit usual local involve delay update rack cause inmate wall render magnet common feature laundry exact casual resource hundred")])])]),s._v(" "),t("tr",[t("td",[s._v("test10")]),s._v(" "),t("td",[t("code",[s._v("osmo14gs9zqh8m49yy9kscjqu9h72exyf295afg6kgk")])]),s._v(" "),t("td",[t("code",[s._v("prefer forget visit mistake mixture feel eyebrow autumn shop pair address airport diesel street pass vague innocent poem method awful require hurry unhappy shoulder")])])])])])])}),[],!1,null,null,null);e.default=o.exports}}]);