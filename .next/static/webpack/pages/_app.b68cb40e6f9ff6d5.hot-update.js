"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _Users_filip_Documents_permit_demos_supertokens_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_filip_Documents_permit_demos_supertokens_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_filip_Documents_permit_demos_supertokens_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var supertokens_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! supertokens-auth-react */ \"./node_modules/supertokens-auth-react/index.js\");\n/* harmony import */ var supertokens_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(supertokens_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _config_frontendConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/frontendConfig */ \"./config/frontendConfig.js\");\n/* harmony import */ var supertokens_auth_react_recipe_session__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! supertokens-auth-react/recipe/session */ \"./node_modules/supertokens-auth-react/recipe/session/index.js\");\n/* harmony import */ var supertokens_auth_react_recipe_session__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(supertokens_auth_react_recipe_session__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var supertokens_auth_react_recipe_thirdpartyemailpassword__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! supertokens-auth-react/recipe/thirdpartyemailpassword */ \"./node_modules/supertokens-auth-react/recipe/thirdpartyemailpassword/index.js\");\n/* harmony import */ var supertokens_auth_react_recipe_thirdpartyemailpassword__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(supertokens_auth_react_recipe_thirdpartyemailpassword__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nif (true) {\n    supertokens_auth_react__WEBPACK_IMPORTED_MODULE_4___default().init(_config_frontendConfig__WEBPACK_IMPORTED_MODULE_5__.frontendConfig());\n}\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        function doRefresh() {\n            return _doRefresh.apply(this, arguments);\n        }\n        function _doRefresh() {\n            _doRefresh = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_Users_filip_Documents_permit_demos_supertokens_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                return _Users_filip_Documents_permit_demos_supertokens_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            if (!(pageProps.fromSupertokens === \"needs-refresh\")) {\n                                _ctx.next = 8;\n                                break;\n                            }\n                            _ctx.next = 3;\n                            return supertokens_auth_react_recipe_session__WEBPACK_IMPORTED_MODULE_6___default().attemptRefreshingSession();\n                        case 3:\n                            if (!_ctx.sent) {\n                                _ctx.next = 7;\n                                break;\n                            }\n                            {\n                                location.reload();\n                            }\n                            _ctx.next = 8;\n                            break;\n                        case 7:\n                            {\n                                // user has been logged out\n                                (0,supertokens_auth_react_recipe_thirdpartyemailpassword__WEBPACK_IMPORTED_MODULE_7__.redirectToAuth)();\n                            }\n                        case 8:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return _doRefresh.apply(this, arguments);\n        }\n        doRefresh();\n    }, [\n        pageProps.fromSupertokens\n    ]);\n    if (pageProps.fromSupertokens === \"needs-refresh\") {\n        return null;\n    }\n    // SuperTokens wrapper to provide authentication across the whole app.\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(supertokens_auth_react__WEBPACK_IMPORTED_MODULE_4__.SuperTokensWrapper, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({}, pageProps), void 0, false, {\n            fileName: \"/Users/filip/Documents/permit/demos/supertokens/pages/_app.js\",\n            lineNumber: 34,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/filip/Documents/permit/demos/supertokens/pages/_app.js\",\n        lineNumber: 33,\n        columnNumber: 3\n    }, this);\n}\n_s(MyApp, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztBQUErQjtBQUNMO0FBQ1E7QUFDNEM7QUFDaEI7QUFDRjtBQUMyQjtBQUV2RixJQUFJLElBQTZCLEVBQUU7SUFDbENFLGtFQUFxQixDQUFDRSxrRUFBZ0MsRUFBRSxDQUFDLENBQUM7Q0FDMUQ7QUFFRCxTQUFTSyxLQUFLLENBQUMsS0FBd0IsRUFBRTtRQUF4QkMsU0FBUyxHQUFYLEtBQXdCLENBQXRCQSxTQUFTLEVBQUVDLFNBQVMsR0FBdEIsS0FBd0IsQ0FBWEEsU0FBUzs7SUFDcENWLGdEQUFTLENBQUMsV0FBTTtpQkFDQVcsU0FBUzttQkFBVEEsVUFBUzs7aUJBQVRBLFVBQVM7WUFBVEEsVUFBUyxHQUF4QixrUUFBMkI7Ozs7Z0NBQ3RCRCxDQUFBQSxDQUFBQSxTQUFTLENBQUNFLGVBQWUsS0FBSyxlQUFlOzs7OzttQ0FDdENSLHFHQUFnQyxFQUFFOzs7Ozs7NEJBQUU7Z0NBQzdDVSxRQUFRLENBQUNDLE1BQU0sRUFBRSxDQUFDOzZCQUNsQjs7Ozs0QkFBTTtnQ0FDTiwyQkFBMkI7Z0NBQzNCVixxR0FBYyxFQUFFLENBQUM7NkJBQ2pCOzs7Ozs7YUFFRjttQkFUY00sVUFBUzs7UUFVeEJBLFNBQVMsRUFBRSxDQUFDO0tBQ1osRUFBRTtRQUFDRCxTQUFTLENBQUNFLGVBQWU7S0FBQyxDQUFDLENBQUM7SUFDaEMsSUFBSUYsU0FBUyxDQUFDRSxlQUFlLEtBQUssZUFBZSxFQUFFO1FBQ2xELE9BQU8sSUFBSSxDQUFDO0tBQ1o7SUFFRCxzRUFBc0U7SUFDdEUscUJBQ0MsOERBQUNWLHNFQUFrQjtrQkFDbEIsNEVBQUNPLFNBQVMscUZBQUtDLFNBQVM7Ozs7Z0JBQUk7Ozs7O1lBQ1IsQ0FDcEI7Q0FDRjtHQXhCUUYsS0FBSztBQUFMQSxLQUFBQSxLQUFLO0FBMEJkLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU3VwZXJUb2tlbnNSZWFjdCwgeyBTdXBlclRva2Vuc1dyYXBwZXIgfSBmcm9tIFwic3VwZXJ0b2tlbnMtYXV0aC1yZWFjdFwiO1xuaW1wb3J0ICogYXMgU3VwZXJUb2tlbnNDb25maWcgZnJvbSBcIi4uL2NvbmZpZy9mcm9udGVuZENvbmZpZ1wiO1xuaW1wb3J0IFNlc3Npb24gZnJvbSBcInN1cGVydG9rZW5zLWF1dGgtcmVhY3QvcmVjaXBlL3Nlc3Npb25cIjtcbmltcG9ydCB7IHJlZGlyZWN0VG9BdXRoIH0gZnJvbSBcInN1cGVydG9rZW5zLWF1dGgtcmVhY3QvcmVjaXBlL3RoaXJkcGFydHllbWFpbHBhc3N3b3JkXCI7XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdFN1cGVyVG9rZW5zUmVhY3QuaW5pdChTdXBlclRva2Vuc0NvbmZpZy5mcm9udGVuZENvbmZpZygpKTtcbn1cblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0YXN5bmMgZnVuY3Rpb24gZG9SZWZyZXNoKCkge1xuXHRcdFx0aWYgKHBhZ2VQcm9wcy5mcm9tU3VwZXJ0b2tlbnMgPT09IFwibmVlZHMtcmVmcmVzaFwiKSB7XG5cdFx0XHRcdGlmIChhd2FpdCBTZXNzaW9uLmF0dGVtcHRSZWZyZXNoaW5nU2Vzc2lvbigpKSB7XG5cdFx0XHRcdFx0bG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gdXNlciBoYXMgYmVlbiBsb2dnZWQgb3V0XG5cdFx0XHRcdFx0cmVkaXJlY3RUb0F1dGgoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRkb1JlZnJlc2goKTtcblx0fSwgW3BhZ2VQcm9wcy5mcm9tU3VwZXJ0b2tlbnNdKTtcblx0aWYgKHBhZ2VQcm9wcy5mcm9tU3VwZXJ0b2tlbnMgPT09IFwibmVlZHMtcmVmcmVzaFwiKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHQvLyBTdXBlclRva2VucyB3cmFwcGVyIHRvIHByb3ZpZGUgYXV0aGVudGljYXRpb24gYWNyb3NzIHRoZSB3aG9sZSBhcHAuXG5cdHJldHVybiAoXG5cdFx0PFN1cGVyVG9rZW5zV3JhcHBlcj5cblx0XHRcdDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cblx0XHQ8L1N1cGVyVG9rZW5zV3JhcHBlcj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJTdXBlclRva2Vuc1JlYWN0IiwiU3VwZXJUb2tlbnNXcmFwcGVyIiwiU3VwZXJUb2tlbnNDb25maWciLCJTZXNzaW9uIiwicmVkaXJlY3RUb0F1dGgiLCJpbml0IiwiZnJvbnRlbmRDb25maWciLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImRvUmVmcmVzaCIsImZyb21TdXBlcnRva2VucyIsImF0dGVtcHRSZWZyZXNoaW5nU2Vzc2lvbiIsImxvY2F0aW9uIiwicmVsb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});