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

/***/ "./config/frontendConfig.js":
/*!**********************************!*\
  !*** ./config/frontendConfig.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"frontendConfig\": function() { return /* binding */ frontendConfig; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_filip_Documents_permit_demos_supertokens_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_filip_Documents_permit_demos_supertokens_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_filip_Documents_permit_demos_supertokens_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var supertokens_auth_react_recipe_thirdpartyemailpassword__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! supertokens-auth-react/recipe/thirdpartyemailpassword */ \"./node_modules/supertokens-auth-react/recipe/thirdpartyemailpassword/index.js\");\n/* harmony import */ var supertokens_auth_react_recipe_thirdpartyemailpassword__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(supertokens_auth_react_recipe_thirdpartyemailpassword__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var supertokens_auth_react_recipe_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! supertokens-auth-react/recipe/session */ \"./node_modules/supertokens-auth-react/recipe/session/index.js\");\n/* harmony import */ var supertokens_auth_react_recipe_session__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(supertokens_auth_react_recipe_session__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _appInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appInfo */ \"./config/appInfo.js\");\n\n\n\n\n\nvar frontendConfig = function() {\n    return {\n        appInfo: _appInfo__WEBPACK_IMPORTED_MODULE_3__.appInfo,\n        recipeList: [\n            supertokens_auth_react_recipe_thirdpartyemailpassword__WEBPACK_IMPORTED_MODULE_1___default().init({\n                signInAndUpFeature: {\n                    providers: [\n                        supertokens_auth_react_recipe_thirdpartyemailpassword__WEBPACK_IMPORTED_MODULE_1___default().Google.init(),\n                        supertokens_auth_react_recipe_thirdpartyemailpassword__WEBPACK_IMPORTED_MODULE_1___default().Github.init(), \n                    ]\n                },\n                // Redirect user to specific domain after successful authentication.\n                getRedirectionURL: function() {\n                    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_Users_filip_Documents_permit_demos_supertokens_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(context) {\n                        return _Users_filip_Documents_permit_demos_supertokens_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                            while(1)switch(_ctx.prev = _ctx.next){\n                                case 0:\n                                    if (!(context.action === \"SUCCESS\")) {\n                                        _ctx.next = 4;\n                                        break;\n                                    }\n                                    if (!(context.redirectToPath !== undefined)) {\n                                        _ctx.next = 3;\n                                        break;\n                                    }\n                                    return _ctx.abrupt(\"return\", context.redirectToPath);\n                                case 3:\n                                    return _ctx.abrupt(\"return\", \"/demo\");\n                                case 4:\n                                    return _ctx.abrupt(\"return\", undefined);\n                                case 5:\n                                case \"end\":\n                                    return _ctx.stop();\n                            }\n                        }, _callee);\n                    }));\n                    return function(context) {\n                        return _ref.apply(this, arguments);\n                    };\n                }()\n            }),\n            supertokens_auth_react_recipe_session__WEBPACK_IMPORTED_MODULE_2___default().init(), \n        ]\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvZnJvbnRlbmRDb25maWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQWlHO0FBQ2hDO0FBQzdCO0FBRTdCLElBQU1HLGNBQWMsR0FBRyxXQUFNO0lBQ25DLE9BQU87UUFDTkQsT0FBTyxFQUFQQSw2Q0FBTztRQUNQRSxVQUFVLEVBQUU7WUFDWEosaUdBQWlDLENBQUM7Z0JBQ2pDTSxrQkFBa0IsRUFBRTtvQkFDbkJDLFNBQVMsRUFBRTt3QkFDVlAsd0dBQXdDLEVBQUU7d0JBQzFDQSx3R0FBd0MsRUFBRTtxQkFDMUM7aUJBQ0Q7Z0JBQ0Qsb0VBQW9FO2dCQUNwRVUsaUJBQWlCOytCQUFFLGdRQUFPQyxPQUFPLEVBQUs7Ozs7d0NBQ2pDQSxDQUFBQSxDQUFBQSxPQUFPLENBQUNDLE1BQU0sS0FBSyxTQUFTOzs7O3dDQUMzQkQsQ0FBQUEsQ0FBQUEsT0FBTyxDQUFDRSxjQUFjLEtBQUtDLFNBQVM7Ozs7aUVBQ2hDSCxPQUFPLENBQUNFLGNBQWM7O2lFQUV2QixPQUFPOztpRUFFUkMsU0FBUzs7Ozs7O3FCQUNoQjtvQ0FSeUJILE9BQU87Ozs7YUFTakMsQ0FBQztZQUNGVixpRkFBaUIsRUFBRTtTQUNuQjtLQUNELENBQUM7Q0FDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbmZpZy9mcm9udGVuZENvbmZpZy5qcz8xZGFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaGlyZFBhcnR5RW1haWxQYXNzd29yZFJlYWN0IGZyb20gXCJzdXBlcnRva2Vucy1hdXRoLXJlYWN0L3JlY2lwZS90aGlyZHBhcnR5ZW1haWxwYXNzd29yZFwiO1xuaW1wb3J0IFNlc3Npb25SZWFjdCBmcm9tIFwic3VwZXJ0b2tlbnMtYXV0aC1yZWFjdC9yZWNpcGUvc2Vzc2lvblwiO1xuaW1wb3J0IHsgYXBwSW5mbyB9IGZyb20gXCIuL2FwcEluZm9cIjtcblxuZXhwb3J0IGNvbnN0IGZyb250ZW5kQ29uZmlnID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdGFwcEluZm8sXG5cdFx0cmVjaXBlTGlzdDogW1xuXHRcdFx0VGhpcmRQYXJ0eUVtYWlsUGFzc3dvcmRSZWFjdC5pbml0KHtcblx0XHRcdFx0c2lnbkluQW5kVXBGZWF0dXJlOiB7XG5cdFx0XHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdFx0XHRUaGlyZFBhcnR5RW1haWxQYXNzd29yZFJlYWN0Lkdvb2dsZS5pbml0KCksXG5cdFx0XHRcdFx0XHRUaGlyZFBhcnR5RW1haWxQYXNzd29yZFJlYWN0LkdpdGh1Yi5pbml0KCksXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0fSxcblx0XHRcdFx0Ly8gUmVkaXJlY3QgdXNlciB0byBzcGVjaWZpYyBkb21haW4gYWZ0ZXIgc3VjY2Vzc2Z1bCBhdXRoZW50aWNhdGlvbi5cblx0XHRcdFx0Z2V0UmVkaXJlY3Rpb25VUkw6IGFzeW5jIChjb250ZXh0KSA9PiB7XG5cdFx0XHRcdFx0aWYgKGNvbnRleHQuYWN0aW9uID09PSBcIlNVQ0NFU1NcIikge1xuXHRcdFx0XHRcdFx0aWYgKGNvbnRleHQucmVkaXJlY3RUb1BhdGggIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gY29udGV4dC5yZWRpcmVjdFRvUGF0aDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiBcIi9kZW1vXCI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0XHRcdH0sXG5cdFx0XHR9KSxcblx0XHRcdFNlc3Npb25SZWFjdC5pbml0KCksXG5cdFx0XSxcblx0fTtcbn07XG4iXSwibmFtZXMiOlsiVGhpcmRQYXJ0eUVtYWlsUGFzc3dvcmRSZWFjdCIsIlNlc3Npb25SZWFjdCIsImFwcEluZm8iLCJmcm9udGVuZENvbmZpZyIsInJlY2lwZUxpc3QiLCJpbml0Iiwic2lnbkluQW5kVXBGZWF0dXJlIiwicHJvdmlkZXJzIiwiR29vZ2xlIiwiR2l0aHViIiwiZ2V0UmVkaXJlY3Rpb25VUkwiLCJjb250ZXh0IiwiYWN0aW9uIiwicmVkaXJlY3RUb1BhdGgiLCJ1bmRlZmluZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./config/frontendConfig.js\n"));

/***/ })

});