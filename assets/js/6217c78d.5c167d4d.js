"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[9521],{77734:e=>{e.exports=JSON.parse('{"pluginId":"osmosis-core","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/osmosis-core/","docId":"README"},{"type":"link","label":"Build and Test","href":"/osmosis-core/build","docId":"build"},{"type":"link","label":"Osmosis CLI","href":"/osmosis-core/osmosisd","docId":"osmosisd"},{"type":"link","label":"IDE Setup","href":"/osmosis-core/ide-guide","docId":"ide-guide"},{"type":"category","label":"Modules","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/osmosis-core/modules/","docId":"modules/README"},{"type":"link","label":"spec-epochs","href":"/osmosis-core/modules/spec-epochs","docId":"modules/spec-epochs"},{"type":"link","label":"spec-gamm","href":"/osmosis-core/modules/spec-gamm","docId":"modules/spec-gamm"},{"type":"link","label":"Gov","href":"/osmosis-core/modules/spec-gov","docId":"modules/spec-gov"},{"type":"link","label":"spec-incentives","href":"/osmosis-core/modules/spec-incentives","docId":"modules/spec-incentives"},{"type":"link","label":"spec-lockup","href":"/osmosis-core/modules/spec-lockup","docId":"modules/spec-lockup"},{"type":"link","label":"spec-mint","href":"/osmosis-core/modules/spec-mint","docId":"modules/spec-mint"},{"type":"link","label":"spec-pool-incentives","href":"/osmosis-core/modules/spec-pool-incentives","docId":"modules/spec-pool-incentives"},{"type":"link","label":"spec-superfluid","href":"/osmosis-core/modules/spec-superfluid","docId":"modules/spec-superfluid"},{"type":"link","label":"Token Factory","href":"/osmosis-core/modules/spec-tokenfactory","docId":"modules/spec-tokenfactory"},{"type":"link","label":"TWAP","href":"/osmosis-core/modules/spec-twap","docId":"modules/spec-twap"},{"type":"link","label":"spec-txfees","href":"/osmosis-core/modules/spec-txfees","docId":"modules/spec-txfees"}],"href":"/osmosis-core/category/modules"},{"type":"link","label":"Asset Info","href":"/osmosis-core/asset-info","docId":"asset-info"},{"type":"category","label":"Keys Management","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Basic Key Management","href":"/osmosis-core/keys/keys-cli","docId":"keys/keys-cli"},{"type":"link","label":"Multisig","href":"/osmosis-core/keys/multisig","docId":"keys/multisig"},{"type":"link","label":"Using TMKMS","href":"/osmosis-core/keys/tmkms","docId":"keys/tmkms"}],"href":"/osmosis-core/category/keys-management"},{"type":"category","label":"Relayer","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduccion","href":"/osmosis-core/relaying/","docId":"relaying/README"},{"type":"link","label":"Relayer Guide","href":"/osmosis-core/relaying/relayer-guide","docId":"relaying/relayer-guide"},{"type":"link","label":"IBC Channels","href":"/osmosis-core/relaying/channels","docId":"relaying/channels"},{"type":"link","label":"IBC Relayer List","href":"/osmosis-core/relaying/ibc-relayers-list","docId":"relaying/ibc-relayers-list"}],"href":"/osmosis-core/category/relayer"},{"type":"link","label":"Contributing","href":"/osmosis-core/contributing","docId":"contributing"},{"type":"category","label":"Guides","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Create IBC Pools","href":"/osmosis-core/guides/create-ibc-pool","docId":"guides/create-ibc-pool"},{"type":"link","label":"Performance and Profiling","href":"/osmosis-core/guides/performance","docId":"guides/performance"},{"type":"category","label":"Transaction Structure","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Arbitrage","href":"/osmosis-core/guides/structure/arb","docId":"guides/structure/arb"},{"type":"link","label":"block-2836990","href":"/osmosis-core/guides/structure/block-2836990","docId":"guides/structure/block-2836990"},{"type":"link","label":"txs-block-2836990","href":"/osmosis-core/guides/structure/txs-block-2836990","docId":"guides/structure/txs-block-2836990"}],"href":"/osmosis-core/guides/structure/"}],"href":"/osmosis-core/category/guides"}]},"docs":{"asset-info":{"id":"asset-info","title":"Asset Info","description":"The following are all the assets currently supported by the Osmosis frontend along with their corresponding IBC denomination and channel. When assets are transferred through IBC, they lose their original denomination (i.e ATOM) and obtain a new IBC denomination (i.e. ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2)","sidebar":"tutorialSidebar"},"build":{"id":"build","title":"Build and Test","description":"Install Go 1.18","sidebar":"tutorialSidebar"},"contributing":{"id":"contributing","title":"Contributing","description":"The following information provides a set of guidelines for contributing to the Osmo chain dev repo. Use your best judgment, and, if you see room for improvement, please propose changes to this document.","sidebar":"tutorialSidebar"},"guides/create-ibc-pool":{"id":"guides/create-ibc-pool","title":"Create IBC Pools","description":"Osmosis is a automated market maker blockchain. This means any IBC-enabled zone can add its token as an asset to be traded on Osmosis AMM completely permissionlessly. Because Osmosis is fundamentally designed as an IBC-native AMM that trades IBC tokens, rather than tokens issued on the Osmosis zone, there are additional nuances to understand and steps to be taken in order to ensure your asset is supported by Osmosis.","sidebar":"tutorialSidebar"},"guides/performance":{"id":"guides/performance","title":"Performance and Profiling","description":"Profiling with pprof","sidebar":"tutorialSidebar"},"guides/structure/arb":{"id":"guides/structure/arb","title":"Arbitrage","description":"The transaction at index 1 of block 2836990 is an arbitrage transaction, swapping an exact amount in and (hopefully) getting a larger","sidebar":"tutorialSidebar"},"guides/structure/block-2836990":{"id":"guides/structure/block-2836990","title":"block-2836990","description":"Block 2836990","sidebar":"tutorialSidebar"},"guides/structure/README":{"id":"guides/structure/README","title":"Transaction Structure","description":"Each block on a blockchain, including Cosmos-based ones like Osmosis, are constructed of a series","sidebar":"tutorialSidebar"},"guides/structure/txs-block-2836990":{"id":"guides/structure/txs-block-2836990","title":"txs-block-2836990","description":"Block 2836990 Transactions","sidebar":"tutorialSidebar"},"ide-guide":{"id":"ide-guide","title":"IDE Setup","description":"Recommended IDE setup for developing on Osmosis in Go.","sidebar":"tutorialSidebar"},"keys/keys-cli":{"id":"keys/keys-cli","title":"Basic Key Management","description":"Create, import, export and delete keys using the CLI keyring.","sidebar":"tutorialSidebar"},"keys/multisig":{"id":"keys/multisig","title":"Multisig","description":"A multisig account is an Osmosis account with a special key that can require more than one signature to sign transactions. This can be useful for increasing the security of the account or for requiring the consent of multiple parties to make transactions. Multisig accounts can be created by specifying:","sidebar":"tutorialSidebar"},"keys/tmkms":{"id":"keys/tmkms","title":"Using TMKMS","description":"The Tendermint Key Management System (or TMKMS) should be used by any validator currently or intending to be in the active validator set. This application mitigates the risk of double-signing and provides high-availability to validator keys while keeping these keys on a separate physical host. While TMKMS can be used on the same machine as the validator, it is recommended to be on a separate host.","sidebar":"tutorialSidebar"},"modules/README":{"id":"modules/README","title":"Introduction","description":"Module Accounts","sidebar":"tutorialSidebar"},"modules/spec-epochs":{"id":"modules/spec-epochs","title":"spec-epochs","description":"404: Not Found","sidebar":"tutorialSidebar"},"modules/spec-gamm":{"id":"modules/spec-gamm","title":"spec-gamm","description":"404: Not Found","sidebar":"tutorialSidebar"},"modules/spec-gov":{"id":"modules/spec-gov","title":"Gov","description":"The `gov` module enables on-chain governance which allows Osmosis token holders to participate in a community led decision-making process. For example, users can:","sidebar":"tutorialSidebar"},"modules/spec-incentives":{"id":"modules/spec-incentives","title":"spec-incentives","description":"404: Not Found","sidebar":"tutorialSidebar"},"modules/spec-lockup":{"id":"modules/spec-lockup","title":"spec-lockup","description":"404: Not Found","sidebar":"tutorialSidebar"},"modules/spec-mint":{"id":"modules/spec-mint","title":"spec-mint","description":"404: Not Found","sidebar":"tutorialSidebar"},"modules/spec-pool-incentives":{"id":"modules/spec-pool-incentives","title":"spec-pool-incentives","description":"404: Not Found","sidebar":"tutorialSidebar"},"modules/spec-superfluid":{"id":"modules/spec-superfluid","title":"spec-superfluid","description":"404: Not Found","sidebar":"tutorialSidebar"},"modules/spec-tokenfactory":{"id":"modules/spec-tokenfactory","title":"Token Factory","description":"The tokenfactory module allows any account to create a new token with","sidebar":"tutorialSidebar"},"modules/spec-twap":{"id":"modules/spec-twap","title":"TWAP","description":"Time Weighted Average Price","sidebar":"tutorialSidebar"},"modules/spec-txfees":{"id":"modules/spec-txfees","title":"spec-txfees","description":"404: Not Found","sidebar":"tutorialSidebar"},"osmosisd":{"id":"osmosisd","title":"Osmosis CLI","description":"Minimum Requirements","sidebar":"tutorialSidebar"},"README":{"id":"README","title":"Introduction","description":"The guides on this page will explain the process of developing on Osmosis.","sidebar":"tutorialSidebar"},"relaying/channels":{"id":"relaying/channels","title":"IBC Channels","description":"IBC Channels for Osmosis","sidebar":"tutorialSidebar"},"relaying/ibc-relayers-list":{"id":"relaying/ibc-relayers-list","title":"IBC Relayer List","description":"| Relayer | Contact | How to Support | Support for new relayers | Chains Relaying with Osmosis |","sidebar":"tutorialSidebar"},"relaying/README":{"id":"relaying/README","title":"Introduccion","description":"In IBC, blockchains do not directly pass messages to each other over the network. This is where relayer comes in.","sidebar":"tutorialSidebar"},"relaying/relayer-guide":{"id":"relaying/relayer-guide","title":"Relayer Guide","description":"The following information is based off of this guide created by Clemens from CryptoCrew.","sidebar":"tutorialSidebar"}}}')}}]);