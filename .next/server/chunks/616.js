"use strict";
exports.id = 616;
exports.ids = [616];
exports.modules = {

/***/ 851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W2": () => (/* binding */ Container),
/* harmony export */   "kC": () => (/* binding */ Flex)
/* harmony export */ });
/* unused harmony exports Text, Title */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const Container = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`
  ${(props)=>props.height};
  ${(props)=>props.maxHeight};
  ${(props)=>props.minHeight};
  ${(props)=>props.maxWidth};
  ${(props)=>props.minWidth};
  ${(props)=>props.width};
  ${(props)=>props.items};
`;
const Flex = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`
  align-items: ${(props)=>props.align};
  align-self: ${(props)=>props.self};
  display: flex;
  direction: ${(props)=>props.by ?? "row"};
  justify-content: ${(props)=>props.justify};
  justify-items: ${(props)=>props.items};
  flex-wrap: ${(props)=>props.wrap};
  margin: ${(props)=>props.m};
  margin-bottom: ${(props)=>props.mb};
  margin-left: ${(props)=>props.ml};
  margin-right: ${(props)=>props.mr};
  margin-top: ${(props)=>props.mt};
  padding: ${(props)=>props.p};
  padding-bottom: ${(props)=>props.pb};
  padding-left: ${(props)=>props.pl};
  padding-right: ${(props)=>props.pr};
  padding-top: ${(props)=>props.pt};
`;
const Text = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().p)`
  align: ${(props)=>props.align};
  color: ${(props)=>props.color ?? props.theme.colors.textPrimary};
  display: ${(props)=>props.display};
  line-height: ${(props)=>props.height};
  font-size: ${(props)=>props.size};
  font-weight: ${(props)=>props.bold ? 800 : `${props.weight}`};
  margin: ${(props)=>props.m};
  margin-bottom: ${(props)=>props.mb};
  margin-left: ${(props)=>props.ml};
  margin-right: ${(props)=>props.mr};
  margin-top: ${(props)=>props.mt};
  text-transform: ${(props)=>props.textTransform};
  white-space: ${(props)=>props.whiteSpace};
  word-break: ${(props)=>props.wordBreak};

  ${(props)=>props.theme.mediaQueries.tablet} {
    font-size: ${(props)=>`calc(${props.size} - 8px)`};
    line-height: ${(props)=>`calc(${props.height} - 8px)`};
  }

  ${(props)=>props.theme.mediaQueries.mobile} {
    font-size: ${(props)=>`calc(${props.size} - 16px)`};
    line-height: ${(props)=>`calc(${props.height} - 16px)`};
  }
`;
const Title = (props)=>{
    const { children , ...rest } = props;
    return /*#__PURE__*/ _jsx(Text, {
        size: "48px",
        ...rest,
        children: children
    });
};


/***/ }),

/***/ 616:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FunkyFlowerzDescription": () => (/* binding */ FunkyFlowerzDescription),
/* harmony export */   "Samples": () => (/* binding */ Samples),
/* harmony export */   "SplashImage": () => (/* binding */ SplashImage),
/* harmony export */   "SplashQuote": () => (/* binding */ SplashQuote),
/* harmony export */   "SplashTitle": () => (/* binding */ SplashTitle),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(851);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(735);
/* harmony import */ var _components_svgs_FunkyFlowerzTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(803);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(268);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_states__WEBPACK_IMPORTED_MODULE_3__]);
_states__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const Home = ()=>{
    const store = (0,_states__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Page__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        isMobile: store.isMobile,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_shared__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
                    by: store.isMobile ? "column-reverse" : "row",
                    justify: "space-between",
                    style: {
                        alignItems: "end",
                        gridGap: "2rem",
                        width: "100%",
                        minHeight: store.isMobile ? "unset" : "507px",
                        maxHeight: store.isMobile ? "unset" : "507px"
                    },
                    wrap: "nowrap",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_shared__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
                            justify: "space-between",
                            style: {
                                alignItems: "start",
                                gridGap: "2rem",
                                height: "100%",
                                width: "100%"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SplashTitle, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_svgs_FunkyFlowerzTitle__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SplashQuote, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: "text-4xl",
                                            children: "There are always flowers for those who want to see them."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "- Matisse"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FunkyFlowerzDescription, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "collectible-digital-art",
                                            children: "Collectible Digital Art"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "A collection of 2700 hand-made flowers from 9 species, including dozens of insect variants and mutations."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "50% proceeds donated to environmental organizations."
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SplashImage, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                alt: "funkyflowerz top",
                                src: "./funky-flowerz-top.gif"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Samples, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        alt: "funky flowerz samples",
                        src: "./funkyflowerz-bg.png"
                    })
                })
            ]
        })
    });
};
const FunkyFlowerzDescription = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  margin-top: calc(66px - 50px);
  font-size: 1.5rem;
  width: 100%;

  .collectible-digital-art {
    font-weight: 700;
    margin-bottom: 8px;
  }
  @media (max-width: 1439px) {
    min-width: calc(100vw / 2 - 2rem);
    font-size: 1.125rem;
  }
  @media (max-width: 1023px) {
    margin-top: 0.25rem;
    font-size: 0.75rem;
  }
  @media (max-width: 767px) {
    font-size: 1.125rem;
    min-width: 100%;
  }
`;
const SplashImage = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  display: flex;
  justify-content: end;
  width: 100%;

  img {
    min-width: 507px;
    max-width: 507px;
    min-height: 507px;
    max-height: 507px;
    width: 100%;
    height: 100%;
  }
  @media (max-width: 1199px) {
    justify-content: center;
    img {
      min-width: calc(100vw / 2 - 5rem);
      min-height: calc(100vw / 2 - 5rem);
      max-width: calc(100vw / 2 - 5rem);
      max-height: calc(100vw / 2 - 5rem);
    }
  }
`;
const Samples = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_components_shared__WEBPACK_IMPORTED_MODULE_1__/* .Container */ .W2)`
  padding-top: 140px;
  max-width: 608px;
  width: calc(100vw / 2);

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;
const SplashTitle = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  max-width: calc(100vw / 2 - 5rem);
  svg {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 767px) {
    max-width: 100%;
  }
`;
const SplashQuote = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  width: 100%;

  p {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  @media (max-width: 1439px) {
    max-width: calc(100vw / 2 - 5rem);
    p {
      font-size: 1.75rem;
      line-height: 2rem;
    }
  }
  @media (max-width: 1023px) {
    max-width: calc(100vw / 2 - 4rem);
    p {
      font-size: 1.5rem;
      line-height: 1.75rem;
    }
  }
  @media (max-width: 767px) {
    max-width: 100%;
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;