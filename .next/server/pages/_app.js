(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 505:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _project_serum_anchor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var _project_serum_anchor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_project_serum_anchor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(280);
/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(847);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(247);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_3__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_4__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__]);
([_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_3__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_4__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






// import { DEFAULT_TIMEOUT } from "./connection";
// import AppBar from "./components/AppBar";
// import Rarity from "./pages/Rarity";
// import Team from "./pages/Team";
__webpack_require__(121);
const getCandyMachineId = ()=>{
    console.log("env candy machine id", process.env.NEXT_CANDY_MACHINE_ID);
    try {
        return new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_2__.web3.PublicKey(process.env.NEXT_CANDY_MACHINE_ID);
    } catch (e) {
        console.log("Failed to construct CandyMachineId", e);
        return undefined;
    }
};
let error = (/* unused pure expression or super */ null && (undefined));
if (process.env.NEXT_SOLANA_NETWORK === undefined) {
    error = "Your NEXT_SOLANA_NETWORK value in the .env file doesn't look right! The options are devnet and mainnet-beta!";
} else if (process.env.NEXT_SOLANA_RPC_HOST === undefined) {
    error = "Your NEXT_SOLANA_RPC_HOST value in the .env file doesn't look right! Make sure you enter it in as a plain-text url (i.e., https://metaplex.devnet.rpcpool.com/)";
}
const candyMachineId = getCandyMachineId();
const network = process.env.NEXT_SOLANA_NETWORK ?? "devnet";
const rpcHost = process.env.NEXT_SOLANA_RPC_HOST ?? _project_serum_anchor__WEBPACK_IMPORTED_MODULE_2__.web3.clusterApiUrl(network);
const connection = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_2__.web3.Connection(rpcHost);
function App({ Component , pageProps  }) {
    const wallets = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>[
            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_3__.PhantomWalletAdapter(),
            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_3__.SolflareWalletAdapter(),
            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_3__.SlopeWalletAdapter({
                network
            }),
            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_3__.SolletExtensionWalletAdapter({
                network
            })
        ], [
        network
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: "app",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__.ConnectionProvider, {
            endpoint: rpcHost,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__.WalletProvider, {
                autoConnect: true,
                wallets: wallets,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_4__.WalletModalProvider, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    })
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 121:
/***/ (() => {



/***/ }),

/***/ 24:
/***/ ((module) => {

"use strict";
module.exports = require("@project-serum/anchor");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 247:
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react");;

/***/ }),

/***/ 847:
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react-ui");;

/***/ }),

/***/ 280:
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-wallets");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(505));
module.exports = __webpack_exports__;

})();