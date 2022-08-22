/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./config/appInfo.js":
/*!***************************!*\
  !*** ./config/appInfo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appInfo\": () => (/* binding */ appInfo)\n/* harmony export */ });\nconst appInfo = {\n    // learn more about this on https://supertokens.com/docs/thirdpartyemailpassword/appinfo\n    appName: \"SuperTokens + Permit Demo\",\n    apiDomain: \"http://localhost:3000\",\n    websiteDomain: \"http://localhost:3000\",\n    apiBasePath: \"/api/auth\",\n    websiteBasePath: \"/auth\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvYXBwSW5mby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsT0FBTyxHQUFHO0lBQ3RCLHdGQUF3RjtJQUN4RkMsT0FBTyxFQUFFLDJCQUEyQjtJQUNwQ0MsU0FBUyxFQUFFLHVCQUF1QjtJQUNsQ0MsYUFBYSxFQUFFLHVCQUF1QjtJQUN0Q0MsV0FBVyxFQUFFLFdBQVc7SUFDeEJDLGVBQWUsRUFBRSxPQUFPO0NBQ3hCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdXBlcnRva2Vucy8uL2NvbmZpZy9hcHBJbmZvLmpzP2IyMTYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGFwcEluZm8gPSB7XG5cdC8vIGxlYXJuIG1vcmUgYWJvdXQgdGhpcyBvbiBodHRwczovL3N1cGVydG9rZW5zLmNvbS9kb2NzL3RoaXJkcGFydHllbWFpbHBhc3N3b3JkL2FwcGluZm9cblx0YXBwTmFtZTogXCJTdXBlclRva2VucyArIFBlcm1pdCBEZW1vXCIsXG5cdGFwaURvbWFpbjogXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIixcblx0d2Vic2l0ZURvbWFpbjogXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIixcblx0YXBpQmFzZVBhdGg6IFwiL2FwaS9hdXRoXCIsXG5cdHdlYnNpdGVCYXNlUGF0aDogXCIvYXV0aFwiLFxufTtcbiJdLCJuYW1lcyI6WyJhcHBJbmZvIiwiYXBwTmFtZSIsImFwaURvbWFpbiIsIndlYnNpdGVEb21haW4iLCJhcGlCYXNlUGF0aCIsIndlYnNpdGVCYXNlUGF0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./config/appInfo.js\n");

/***/ }),

/***/ "./config/frontendConfig.js":
/*!**********************************!*\
  !*** ./config/frontendConfig.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"frontendConfig\": () => (/* binding */ frontendConfig)\n/* harmony export */ });\n/* harmony import */ var supertokens_auth_react_recipe_thirdpartyemailpassword__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! supertokens-auth-react/recipe/thirdpartyemailpassword */ \"supertokens-auth-react/recipe/thirdpartyemailpassword\");\n/* harmony import */ var supertokens_auth_react_recipe_thirdpartyemailpassword__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(supertokens_auth_react_recipe_thirdpartyemailpassword__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var supertokens_auth_react_recipe_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! supertokens-auth-react/recipe/session */ \"supertokens-auth-react/recipe/session\");\n/* harmony import */ var supertokens_auth_react_recipe_session__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(supertokens_auth_react_recipe_session__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _appInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appInfo */ \"./config/appInfo.js\");\n\n\n\nconst frontendConfig = ()=>{\n    return {\n        appInfo: _appInfo__WEBPACK_IMPORTED_MODULE_2__.appInfo,\n        recipeList: [\n            supertokens_auth_react_recipe_thirdpartyemailpassword__WEBPACK_IMPORTED_MODULE_0___default().init({\n                signInAndUpFeature: {\n                    providers: [\n                        supertokens_auth_react_recipe_thirdpartyemailpassword__WEBPACK_IMPORTED_MODULE_0___default().Google.init(),\n                        supertokens_auth_react_recipe_thirdpartyemailpassword__WEBPACK_IMPORTED_MODULE_0___default().Github.init(), \n                    ]\n                },\n                // Redirect user to specific domain after successful authentication.\n                getRedirectionURL: async (context)=>{\n                    if (context.action === \"SUCCESS\") {\n                        if (context.redirectToPath !== undefined) {\n                            return context.redirectToPath;\n                        }\n                        return \"/demo\";\n                    }\n                    return undefined;\n                }\n            }),\n            supertokens_auth_react_recipe_session__WEBPACK_IMPORTED_MODULE_1___default().init(), \n        ]\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvZnJvbnRlbmRDb25maWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWlHO0FBQ2hDO0FBQzdCO0FBRTdCLE1BQU1HLGNBQWMsR0FBRyxJQUFNO0lBQ25DLE9BQU87UUFDTkQsT0FBTztRQUNQRSxVQUFVLEVBQUU7WUFDWEosaUdBQWlDLENBQUM7Z0JBQ2pDTSxrQkFBa0IsRUFBRTtvQkFDbkJDLFNBQVMsRUFBRTt3QkFDVlAsd0dBQXdDLEVBQUU7d0JBQzFDQSx3R0FBd0MsRUFBRTtxQkFDMUM7aUJBQ0Q7Z0JBQ0Qsb0VBQW9FO2dCQUNwRVUsaUJBQWlCLEVBQUUsT0FBT0MsT0FBTyxHQUFLO29CQUNyQyxJQUFJQSxPQUFPLENBQUNDLE1BQU0sS0FBSyxTQUFTLEVBQUU7d0JBQ2pDLElBQUlELE9BQU8sQ0FBQ0UsY0FBYyxLQUFLQyxTQUFTLEVBQUU7NEJBQ3pDLE9BQU9ILE9BQU8sQ0FBQ0UsY0FBYyxDQUFDO3lCQUM5Qjt3QkFDRCxPQUFPLE9BQU8sQ0FBQztxQkFDZjtvQkFDRCxPQUFPQyxTQUFTLENBQUM7aUJBQ2pCO2FBQ0QsQ0FBQztZQUNGYixpRkFBaUIsRUFBRTtTQUNuQjtLQUNELENBQUM7Q0FDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3VwZXJ0b2tlbnMvLi9jb25maWcvZnJvbnRlbmRDb25maWcuanM/MWRhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGhpcmRQYXJ0eUVtYWlsUGFzc3dvcmRSZWFjdCBmcm9tIFwic3VwZXJ0b2tlbnMtYXV0aC1yZWFjdC9yZWNpcGUvdGhpcmRwYXJ0eWVtYWlscGFzc3dvcmRcIjtcbmltcG9ydCBTZXNzaW9uUmVhY3QgZnJvbSBcInN1cGVydG9rZW5zLWF1dGgtcmVhY3QvcmVjaXBlL3Nlc3Npb25cIjtcbmltcG9ydCB7IGFwcEluZm8gfSBmcm9tIFwiLi9hcHBJbmZvXCI7XG5cbmV4cG9ydCBjb25zdCBmcm9udGVuZENvbmZpZyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRhcHBJbmZvLFxuXHRcdHJlY2lwZUxpc3Q6IFtcblx0XHRcdFRoaXJkUGFydHlFbWFpbFBhc3N3b3JkUmVhY3QuaW5pdCh7XG5cdFx0XHRcdHNpZ25JbkFuZFVwRmVhdHVyZToge1xuXHRcdFx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHRcdFx0VGhpcmRQYXJ0eUVtYWlsUGFzc3dvcmRSZWFjdC5Hb29nbGUuaW5pdCgpLFxuXHRcdFx0XHRcdFx0VGhpcmRQYXJ0eUVtYWlsUGFzc3dvcmRSZWFjdC5HaXRodWIuaW5pdCgpLFxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdC8vIFJlZGlyZWN0IHVzZXIgdG8gc3BlY2lmaWMgZG9tYWluIGFmdGVyIHN1Y2Nlc3NmdWwgYXV0aGVudGljYXRpb24uXG5cdFx0XHRcdGdldFJlZGlyZWN0aW9uVVJMOiBhc3luYyAoY29udGV4dCkgPT4ge1xuXHRcdFx0XHRcdGlmIChjb250ZXh0LmFjdGlvbiA9PT0gXCJTVUNDRVNTXCIpIHtcblx0XHRcdFx0XHRcdGlmIChjb250ZXh0LnJlZGlyZWN0VG9QYXRoICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGNvbnRleHQucmVkaXJlY3RUb1BhdGg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRyZXR1cm4gXCIvZGVtb1wiO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSksXG5cdFx0XHRTZXNzaW9uUmVhY3QuaW5pdCgpLFxuXHRcdF0sXG5cdH07XG59O1xuIl0sIm5hbWVzIjpbIlRoaXJkUGFydHlFbWFpbFBhc3N3b3JkUmVhY3QiLCJTZXNzaW9uUmVhY3QiLCJhcHBJbmZvIiwiZnJvbnRlbmRDb25maWciLCJyZWNpcGVMaXN0IiwiaW5pdCIsInNpZ25JbkFuZFVwRmVhdHVyZSIsInByb3ZpZGVycyIsIkdvb2dsZSIsIkdpdGh1YiIsImdldFJlZGlyZWN0aW9uVVJMIiwiY29udGV4dCIsImFjdGlvbiIsInJlZGlyZWN0VG9QYXRoIiwidW5kZWZpbmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./config/frontendConfig.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var supertokens_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! supertokens-auth-react */ \"supertokens-auth-react\");\n/* harmony import */ var supertokens_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(supertokens_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config_frontendConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/frontendConfig */ \"./config/frontendConfig.js\");\n/* harmony import */ var supertokens_auth_react_recipe_session__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! supertokens-auth-react/recipe/session */ \"supertokens-auth-react/recipe/session\");\n/* harmony import */ var supertokens_auth_react_recipe_session__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(supertokens_auth_react_recipe_session__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var supertokens_auth_react_recipe_thirdpartyemailpassword__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! supertokens-auth-react/recipe/thirdpartyemailpassword */ \"supertokens-auth-react/recipe/thirdpartyemailpassword\");\n/* harmony import */ var supertokens_auth_react_recipe_thirdpartyemailpassword__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(supertokens_auth_react_recipe_thirdpartyemailpassword__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nif (false) {}\nfunction MyApp({ Component , pageProps  }) {\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        async function doRefresh() {\n            if (pageProps.fromSupertokens === \"needs-refresh\") {\n                if (await supertokens_auth_react_recipe_session__WEBPACK_IMPORTED_MODULE_5___default().attemptRefreshingSession()) {\n                    location.reload();\n                } else {\n                    // user has been logged out\n                    (0,supertokens_auth_react_recipe_thirdpartyemailpassword__WEBPACK_IMPORTED_MODULE_6__.redirectToAuth)();\n                }\n            }\n        }\n        doRefresh();\n    }, [\n        pageProps.fromSupertokens\n    ]);\n    if (pageProps.fromSupertokens === \"needs-refresh\") {\n        return null;\n    }\n    // SuperTokens wrapper to provide authentication across the whole app.\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(supertokens_auth_react__WEBPACK_IMPORTED_MODULE_3__.SuperTokensWrapper, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/filip/Documents/permit/demos/supertokens/pages/_app.js\",\n            lineNumber: 34,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/filip/Documents/permit/demos/supertokens/pages/_app.js\",\n        lineNumber: 33,\n        columnNumber: 3\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBK0I7QUFDTDtBQUNRO0FBQzRDO0FBQ2hCO0FBQ0Y7QUFDMkI7QUFFdkYsSUFBSSxLQUE2QixFQUFFLEVBRWxDO0FBRUQsU0FBU1MsS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEVBQUU7SUFDeENWLGdEQUFTLENBQUMsSUFBTTtRQUNmLGVBQWVXLFNBQVMsR0FBRztZQUMxQixJQUFJRCxTQUFTLENBQUNFLGVBQWUsS0FBSyxlQUFlLEVBQUU7Z0JBQ2xELElBQUksTUFBTVIscUdBQWdDLEVBQUUsRUFBRTtvQkFDN0NVLFFBQVEsQ0FBQ0MsTUFBTSxFQUFFLENBQUM7aUJBQ2xCLE1BQU07b0JBQ04sMkJBQTJCO29CQUMzQlYscUdBQWMsRUFBRSxDQUFDO2lCQUNqQjthQUNEO1NBQ0Q7UUFDRE0sU0FBUyxFQUFFLENBQUM7S0FDWixFQUFFO1FBQUNELFNBQVMsQ0FBQ0UsZUFBZTtLQUFDLENBQUMsQ0FBQztJQUNoQyxJQUFJRixTQUFTLENBQUNFLGVBQWUsS0FBSyxlQUFlLEVBQUU7UUFDbEQsT0FBTyxJQUFJLENBQUM7S0FDWjtJQUVELHNFQUFzRTtJQUN0RSxxQkFDQyw4REFBQ1Ysc0VBQWtCO2tCQUNsQiw0RUFBQ08sU0FBUztZQUFFLEdBQUdDLFNBQVM7Ozs7O2dCQUFJOzs7OztZQUNSLENBQ3BCO0NBQ0Y7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3VwZXJ0b2tlbnMvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTdXBlclRva2Vuc1JlYWN0LCB7IFN1cGVyVG9rZW5zV3JhcHBlciB9IGZyb20gXCJzdXBlcnRva2Vucy1hdXRoLXJlYWN0XCI7XG5pbXBvcnQgKiBhcyBTdXBlclRva2Vuc0NvbmZpZyBmcm9tIFwiLi4vY29uZmlnL2Zyb250ZW5kQ29uZmlnXCI7XG5pbXBvcnQgU2Vzc2lvbiBmcm9tIFwic3VwZXJ0b2tlbnMtYXV0aC1yZWFjdC9yZWNpcGUvc2Vzc2lvblwiO1xuaW1wb3J0IHsgcmVkaXJlY3RUb0F1dGggfSBmcm9tIFwic3VwZXJ0b2tlbnMtYXV0aC1yZWFjdC9yZWNpcGUvdGhpcmRwYXJ0eWVtYWlscGFzc3dvcmRcIjtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0U3VwZXJUb2tlbnNSZWFjdC5pbml0KFN1cGVyVG9rZW5zQ29uZmlnLmZyb250ZW5kQ29uZmlnKCkpO1xufVxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRhc3luYyBmdW5jdGlvbiBkb1JlZnJlc2goKSB7XG5cdFx0XHRpZiAocGFnZVByb3BzLmZyb21TdXBlcnRva2VucyA9PT0gXCJuZWVkcy1yZWZyZXNoXCIpIHtcblx0XHRcdFx0aWYgKGF3YWl0IFNlc3Npb24uYXR0ZW1wdFJlZnJlc2hpbmdTZXNzaW9uKCkpIHtcblx0XHRcdFx0XHRsb2NhdGlvbi5yZWxvYWQoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyB1c2VyIGhhcyBiZWVuIGxvZ2dlZCBvdXRcblx0XHRcdFx0XHRyZWRpcmVjdFRvQXV0aCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGRvUmVmcmVzaCgpO1xuXHR9LCBbcGFnZVByb3BzLmZyb21TdXBlcnRva2Vuc10pO1xuXHRpZiAocGFnZVByb3BzLmZyb21TdXBlcnRva2VucyA9PT0gXCJuZWVkcy1yZWZyZXNoXCIpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdC8vIFN1cGVyVG9rZW5zIHdyYXBwZXIgdG8gcHJvdmlkZSBhdXRoZW50aWNhdGlvbiBhY3Jvc3MgdGhlIHdob2xlIGFwcC5cblx0cmV0dXJuIChcblx0XHQ8U3VwZXJUb2tlbnNXcmFwcGVyPlxuXHRcdFx0PENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuXHRcdDwvU3VwZXJUb2tlbnNXcmFwcGVyPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIlN1cGVyVG9rZW5zUmVhY3QiLCJTdXBlclRva2Vuc1dyYXBwZXIiLCJTdXBlclRva2Vuc0NvbmZpZyIsIlNlc3Npb24iLCJyZWRpcmVjdFRvQXV0aCIsImluaXQiLCJmcm9udGVuZENvbmZpZyIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZG9SZWZyZXNoIiwiZnJvbVN1cGVydG9rZW5zIiwiYXR0ZW1wdFJlZnJlc2hpbmdTZXNzaW9uIiwibG9jYXRpb24iLCJyZWxvYWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "supertokens-auth-react":
/*!*****************************************!*\
  !*** external "supertokens-auth-react" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("supertokens-auth-react");

/***/ }),

/***/ "supertokens-auth-react/recipe/session":
/*!********************************************************!*\
  !*** external "supertokens-auth-react/recipe/session" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("supertokens-auth-react/recipe/session");

/***/ }),

/***/ "supertokens-auth-react/recipe/thirdpartyemailpassword":
/*!************************************************************************!*\
  !*** external "supertokens-auth-react/recipe/thirdpartyemailpassword" ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("supertokens-auth-react/recipe/thirdpartyemailpassword");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();