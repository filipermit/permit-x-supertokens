"use strict";
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
exports.id = "pages/api/auth/[[...path]]";
exports.ids = ["pages/api/auth/[[...path]]"];
exports.modules = {

/***/ "permitio":
/*!***************************!*\
  !*** external "permitio" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("permitio");

/***/ }),

/***/ "supertokens-node":
/*!***********************************!*\
  !*** external "supertokens-node" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("supertokens-node");

/***/ }),

/***/ "supertokens-node/framework/express":
/*!*****************************************************!*\
  !*** external "supertokens-node/framework/express" ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = require("supertokens-node/framework/express");

/***/ }),

/***/ "supertokens-node/nextjs":
/*!******************************************!*\
  !*** external "supertokens-node/nextjs" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("supertokens-node/nextjs");

/***/ }),

/***/ "supertokens-node/recipe/session":
/*!**************************************************!*\
  !*** external "supertokens-node/recipe/session" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("supertokens-node/recipe/session");

/***/ }),

/***/ "supertokens-node/recipe/thirdpartyemailpassword":
/*!******************************************************************!*\
  !*** external "supertokens-node/recipe/thirdpartyemailpassword" ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = require("supertokens-node/recipe/thirdpartyemailpassword");

/***/ }),

/***/ "(api)/./config/appInfo.js":
/*!***************************!*\
  !*** ./config/appInfo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appInfo\": () => (/* binding */ appInfo)\n/* harmony export */ });\nconst appInfo = {\n    // learn more about this on https://supertokens.com/docs/thirdpartyemailpassword/appinfo\n    appName: \"SuperTokens + Permit Demo\",\n    apiDomain: \"http://localhost:3000\",\n    websiteDomain: \"http://localhost:3000\",\n    apiBasePath: \"/api/auth\",\n    websiteBasePath: \"/auth\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvYXBwSW5mby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsT0FBTyxHQUFHO0lBQ3RCLHdGQUF3RjtJQUN4RkMsT0FBTyxFQUFFLDJCQUEyQjtJQUNwQ0MsU0FBUyxFQUFFLHVCQUF1QjtJQUNsQ0MsYUFBYSxFQUFFLHVCQUF1QjtJQUN0Q0MsV0FBVyxFQUFFLFdBQVc7SUFDeEJDLGVBQWUsRUFBRSxPQUFPO0NBQ3hCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdXBlcnRva2Vucy8uL2NvbmZpZy9hcHBJbmZvLmpzP2IyMTYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGFwcEluZm8gPSB7XG5cdC8vIGxlYXJuIG1vcmUgYWJvdXQgdGhpcyBvbiBodHRwczovL3N1cGVydG9rZW5zLmNvbS9kb2NzL3RoaXJkcGFydHllbWFpbHBhc3N3b3JkL2FwcGluZm9cblx0YXBwTmFtZTogXCJTdXBlclRva2VucyArIFBlcm1pdCBEZW1vXCIsXG5cdGFwaURvbWFpbjogXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIixcblx0d2Vic2l0ZURvbWFpbjogXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIixcblx0YXBpQmFzZVBhdGg6IFwiL2FwaS9hdXRoXCIsXG5cdHdlYnNpdGVCYXNlUGF0aDogXCIvYXV0aFwiLFxufTtcbiJdLCJuYW1lcyI6WyJhcHBJbmZvIiwiYXBwTmFtZSIsImFwaURvbWFpbiIsIndlYnNpdGVEb21haW4iLCJhcGlCYXNlUGF0aCIsIndlYnNpdGVCYXNlUGF0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./config/appInfo.js\n");

/***/ }),

/***/ "(api)/./config/backendConfig.js":
/*!*********************************!*\
  !*** ./config/backendConfig.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"backendConfig\": () => (/* binding */ backendConfig)\n/* harmony export */ });\n/* harmony import */ var supertokens_node_recipe_thirdpartyemailpassword__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! supertokens-node/recipe/thirdpartyemailpassword */ \"supertokens-node/recipe/thirdpartyemailpassword\");\n/* harmony import */ var supertokens_node_recipe_thirdpartyemailpassword__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(supertokens_node_recipe_thirdpartyemailpassword__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var supertokens_node_recipe_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! supertokens-node/recipe/session */ \"supertokens-node/recipe/session\");\n/* harmony import */ var supertokens_node_recipe_session__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(supertokens_node_recipe_session__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _appInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appInfo */ \"(api)/./config/appInfo.js\");\n/* harmony import */ var permitio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! permitio */ \"permitio\");\n/* harmony import */ var permitio__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(permitio__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst permit = new permitio__WEBPACK_IMPORTED_MODULE_3__.Permit({\n    pdp: \"http://localhost:7766\",\n    token: process.env.PERMIT_IO_KEY\n});\nasync function registerUserInPermit(id, email) {\n    let roles = [\n        {\n            role: \"Stranger\",\n            tenant: \"SuperTokens\"\n        }, \n    ];\n    // Assign roles based on email address (if part of Permit or Supertokens).\n    if (/@supertokens.com\\s*$/.test(email) || /@permit.io\\s*$/.test(email)) {\n        roles = [\n            {\n                role: \"Friend\",\n                tenant: \"SuperTokens\"\n            }, \n        ];\n    }\n    // Add a user during first-time signup to Permit.\n    await permit.write(permit.api.syncUser({\n        key: id,\n        email,\n        roles\n    }));\n}\nconst backendConfig = ()=>{\n    return {\n        framework: \"express\",\n        supertokens: {\n            connectionURI: \"https://try.supertokens.com\"\n        },\n        appInfo: _appInfo__WEBPACK_IMPORTED_MODULE_2__.appInfo,\n        recipeList: [\n            supertokens_node_recipe_thirdpartyemailpassword__WEBPACK_IMPORTED_MODULE_0___default().init({\n                // Intercept point between authentication provided by Supertokens and\n                // authorization provided by Permit.\n                override: {\n                    apis: (oI)=>{\n                        return {\n                            ...oI,\n                            thirdPartySignInUpPOST: async function(input) {\n                                let response = await oI.thirdPartySignInUpPOST(input);\n                                if (response.status === \"OK\") {\n                                    if (response.createdNewUser) {\n                                        await registerUserInPermit(response.user.id, response.user.email);\n                                    }\n                                }\n                                return response;\n                            },\n                            emailPasswordSignUpPOST: async function(input) {\n                                let response = await oI.emailPasswordSignUpPOST(input);\n                                if (response.status === \"OK\") {\n                                    await registerUserInPermit(response.user.id, response.user.email);\n                                }\n                                return response;\n                            }\n                        };\n                    }\n                },\n                providers: [\n                    // We have provided you with development keys which you can use for testing.\n                    // IMPORTANT: Please replace them with your own OAuth keys for production use.\n                    supertokens_node_recipe_thirdpartyemailpassword__WEBPACK_IMPORTED_MODULE_0___default().Google({\n                        clientId: \"1060725074195-kmeum4crr01uirfl2op9kd5acmi9jutn.apps.googleusercontent.com\",\n                        clientSecret: \"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\"\n                    }),\n                    supertokens_node_recipe_thirdpartyemailpassword__WEBPACK_IMPORTED_MODULE_0___default().Github({\n                        clientId: \"467101b197249757c71f\",\n                        clientSecret: \"e97051221f4b6426e8fe8d51486396703012f5bd\"\n                    }), \n                ]\n            }),\n            supertokens_node_recipe_session__WEBPACK_IMPORTED_MODULE_1___default().init(), \n        ],\n        isInServerlessEnv: true\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFnQixFQUFFO1NBQ2xCO1FBQ0R5QyxpQkFBaUIsRUFBRSxJQUFJO0tBQ3ZCLENBQUM7Q0FDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3VwZXJ0b2tlbnMvLi9jb25maWcvYmFja2VuZENvbmZpZy5qcz9iODI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaGlyZFBhcnR5RW1haWxQYXNzd29yZE5vZGUgZnJvbSBcInN1cGVydG9rZW5zLW5vZGUvcmVjaXBlL3RoaXJkcGFydHllbWFpbHBhc3N3b3JkXCI7XG5pbXBvcnQgU2Vzc2lvbk5vZGUgZnJvbSBcInN1cGVydG9rZW5zLW5vZGUvcmVjaXBlL3Nlc3Npb25cIjtcbmltcG9ydCB7IGFwcEluZm8gfSBmcm9tIFwiLi9hcHBJbmZvXCI7XG5pbXBvcnQgeyBQZXJtaXQgfSBmcm9tIFwicGVybWl0aW9cIjtcblxuY29uc3QgcGVybWl0ID0gbmV3IFBlcm1pdCh7XG5cdHBkcDogXCJodHRwOi8vbG9jYWxob3N0Ojc3NjZcIixcblx0dG9rZW46IHByb2Nlc3MuZW52LlBFUk1JVF9JT19LRVksXG59KTtcblxuYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXJVc2VySW5QZXJtaXQoaWQsIGVtYWlsKSB7XG5cdGxldCByb2xlcyA9IFtcblx0XHR7XG5cdFx0XHRyb2xlOiBcIlN0cmFuZ2VyXCIsXG5cdFx0XHR0ZW5hbnQ6IFwiU3VwZXJUb2tlbnNcIixcblx0XHR9LFxuXHRdO1xuXG5cdC8vIEFzc2lnbiByb2xlcyBiYXNlZCBvbiBlbWFpbCBhZGRyZXNzIChpZiBwYXJ0IG9mIFBlcm1pdCBvciBTdXBlcnRva2VucykuXG5cdGlmICgvQHN1cGVydG9rZW5zLmNvbVxccyokLy50ZXN0KGVtYWlsKSB8fCAvQHBlcm1pdC5pb1xccyokLy50ZXN0KGVtYWlsKSkge1xuXHRcdHJvbGVzID0gW1xuXHRcdFx0e1xuXHRcdFx0XHRyb2xlOiBcIkZyaWVuZFwiLFxuXHRcdFx0XHR0ZW5hbnQ6IFwiU3VwZXJUb2tlbnNcIixcblx0XHRcdH0sXG5cdFx0XTtcblx0fVxuXG5cdC8vIEFkZCBhIHVzZXIgZHVyaW5nIGZpcnN0LXRpbWUgc2lnbnVwIHRvIFBlcm1pdC5cblx0YXdhaXQgcGVybWl0LndyaXRlKFxuXHRcdHBlcm1pdC5hcGkuc3luY1VzZXIoe1xuXHRcdFx0a2V5OiBpZCxcblx0XHRcdGVtYWlsLFxuXHRcdFx0cm9sZXMsXG5cdFx0fSlcblx0KTtcbn1cblxuZXhwb3J0IGNvbnN0IGJhY2tlbmRDb25maWcgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0ZnJhbWV3b3JrOiBcImV4cHJlc3NcIixcblx0XHRzdXBlcnRva2Vuczoge1xuXHRcdFx0Y29ubmVjdGlvblVSSTogXCJodHRwczovL3RyeS5zdXBlcnRva2Vucy5jb21cIixcblx0XHR9LFxuXHRcdGFwcEluZm8sXG5cdFx0cmVjaXBlTGlzdDogW1xuXHRcdFx0VGhpcmRQYXJ0eUVtYWlsUGFzc3dvcmROb2RlLmluaXQoe1xuXHRcdFx0XHQvLyBJbnRlcmNlcHQgcG9pbnQgYmV0d2VlbiBhdXRoZW50aWNhdGlvbiBwcm92aWRlZCBieSBTdXBlcnRva2VucyBhbmRcblx0XHRcdFx0Ly8gYXV0aG9yaXphdGlvbiBwcm92aWRlZCBieSBQZXJtaXQuXG5cdFx0XHRcdG92ZXJyaWRlOiB7XG5cdFx0XHRcdFx0YXBpczogKG9JKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHQuLi5vSSxcblx0XHRcdFx0XHRcdFx0dGhpcmRQYXJ0eVNpZ25JblVwUE9TVDogYXN5bmMgZnVuY3Rpb24gKGlucHV0KSB7XG5cdFx0XHRcdFx0XHRcdFx0bGV0IHJlc3BvbnNlID0gYXdhaXQgb0kudGhpcmRQYXJ0eVNpZ25JblVwUE9TVChpbnB1dCk7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gXCJPS1wiKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAocmVzcG9uc2UuY3JlYXRlZE5ld1VzZXIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXdhaXQgcmVnaXN0ZXJVc2VySW5QZXJtaXQoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzcG9uc2UudXNlci5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXNwb25zZS51c2VyLmVtYWlsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiByZXNwb25zZTtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0ZW1haWxQYXNzd29yZFNpZ25VcFBPU1Q6IGFzeW5jIGZ1bmN0aW9uIChpbnB1dCkge1xuXHRcdFx0XHRcdFx0XHRcdGxldCByZXNwb25zZSA9IGF3YWl0IG9JLmVtYWlsUGFzc3dvcmRTaWduVXBQT1NUKGlucHV0KTtcblx0XHRcdFx0XHRcdFx0XHRpZiAocmVzcG9uc2Uuc3RhdHVzID09PSBcIk9LXCIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGF3YWl0IHJlZ2lzdGVyVXNlckluUGVybWl0KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXNwb25zZS51c2VyLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXNwb25zZS51c2VyLmVtYWlsXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzcG9uc2U7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHRcdC8vIFdlIGhhdmUgcHJvdmlkZWQgeW91IHdpdGggZGV2ZWxvcG1lbnQga2V5cyB3aGljaCB5b3UgY2FuIHVzZSBmb3IgdGVzdGluZy5cblx0XHRcdFx0XHQvLyBJTVBPUlRBTlQ6IFBsZWFzZSByZXBsYWNlIHRoZW0gd2l0aCB5b3VyIG93biBPQXV0aCBrZXlzIGZvciBwcm9kdWN0aW9uIHVzZS5cblx0XHRcdFx0XHRUaGlyZFBhcnR5RW1haWxQYXNzd29yZE5vZGUuR29vZ2xlKHtcblx0XHRcdFx0XHRcdGNsaWVudElkOlxuXHRcdFx0XHRcdFx0XHRcIjEwNjA3MjUwNzQxOTUta21ldW00Y3JyMDF1aXJmbDJvcDlrZDVhY21pOWp1dG4uYXBwcy5nb29nbGV1c2VyY29udGVudC5jb21cIixcblx0XHRcdFx0XHRcdGNsaWVudFNlY3JldDogXCJHT0NTUFgtMXIwYU5jRzhnZGRXeUVnUjZSV2FBaUpLcjJTV1wiLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFRoaXJkUGFydHlFbWFpbFBhc3N3b3JkTm9kZS5HaXRodWIoe1xuXHRcdFx0XHRcdFx0Y2xpZW50SWQ6IFwiNDY3MTAxYjE5NzI0OTc1N2M3MWZcIixcblx0XHRcdFx0XHRcdGNsaWVudFNlY3JldDogXCJlOTcwNTEyMjFmNGI2NDI2ZThmZThkNTE0ODYzOTY3MDMwMTJmNWJkXCIsXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdF0sXG5cdFx0XHR9KSxcblx0XHRcdFNlc3Npb25Ob2RlLmluaXQoKSxcblx0XHRdLFxuXHRcdGlzSW5TZXJ2ZXJsZXNzRW52OiB0cnVlLFxuXHR9O1xufTtcbiJdLCJuYW1lcyI6WyJUaGlyZFBhcnR5RW1haWxQYXNzd29yZE5vZGUiLCJTZXNzaW9uTm9kZSIsImFwcEluZm8iLCJQZXJtaXQiLCJwZXJtaXQiLCJwZHAiLCJ0b2tlbiIsInByb2Nlc3MiLCJlbnYiLCJQRVJNSVRfSU9fS0VZIiwicmVnaXN0ZXJVc2VySW5QZXJtaXQiLCJpZCIsImVtYWlsIiwicm9sZXMiLCJyb2xlIiwidGVuYW50IiwidGVzdCIsIndyaXRlIiwiYXBpIiwic3luY1VzZXIiLCJrZXkiLCJiYWNrZW5kQ29uZmlnIiwiZnJhbWV3b3JrIiwic3VwZXJ0b2tlbnMiLCJjb25uZWN0aW9uVVJJIiwicmVjaXBlTGlzdCIsImluaXQiLCJvdmVycmlkZSIsImFwaXMiLCJvSSIsInRoaXJkUGFydHlTaWduSW5VcFBPU1QiLCJpbnB1dCIsInJlc3BvbnNlIiwic3RhdHVzIiwiY3JlYXRlZE5ld1VzZXIiLCJ1c2VyIiwiZW1haWxQYXNzd29yZFNpZ25VcFBPU1QiLCJwcm92aWRlcnMiLCJHb29nbGUiLCJjbGllbnRJZCIsImNsaWVudFNlY3JldCIsIkdpdGh1YiIsImlzSW5TZXJ2ZXJsZXNzRW52Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./config/backendConfig.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[[...path]].js":
/*!***************************************!*\
  !*** ./pages/api/auth/[[...path]].js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ superTokens)\n/* harmony export */ });\n/* harmony import */ var supertokens_node_nextjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! supertokens-node/nextjs */ \"supertokens-node/nextjs\");\n/* harmony import */ var supertokens_node_nextjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(supertokens_node_nextjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var supertokens_node_framework_express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! supertokens-node/framework/express */ \"supertokens-node/framework/express\");\n/* harmony import */ var supertokens_node_framework_express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(supertokens_node_framework_express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var supertokens_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! supertokens-node */ \"supertokens-node\");\n/* harmony import */ var supertokens_node__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(supertokens_node__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_backendConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config/backendConfig */ \"(api)/./config/backendConfig.js\");\n\n\n\n\nsupertokens_node__WEBPACK_IMPORTED_MODULE_2___default().init((0,_config_backendConfig__WEBPACK_IMPORTED_MODULE_3__.backendConfig)());\nasync function superTokens(req, res) {\n    await (0,supertokens_node_nextjs__WEBPACK_IMPORTED_MODULE_0__.superTokensNextWrapper)(async (next)=>{\n        await (0,supertokens_node_framework_express__WEBPACK_IMPORTED_MODULE_1__.middleware)()(req, res, next);\n    }, req, res);\n    if (!res.writableEnded) {\n        res.status(404).send(\"Not found\");\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bWy4uLnBhdGhdXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFpRTtBQUNEO0FBQ3JCO0FBQ21CO0FBRTlERSw0REFBZ0IsQ0FBQ0Msb0VBQWEsRUFBRSxDQUFDLENBQUM7QUFFbkIsZUFBZUUsV0FBVyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUNuRCxNQUFNUCwrRUFBc0IsQ0FDM0IsT0FBT1EsSUFBSSxHQUFLO1FBQ2YsTUFBTVAsOEVBQVUsRUFBRSxDQUFDSyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7S0FDbkMsRUFDREYsR0FBRyxFQUNIQyxHQUFHLENBQ0gsQ0FBQztJQUNGLElBQUksQ0FBQ0EsR0FBRyxDQUFDRSxhQUFhLEVBQUU7UUFDdkJGLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDbEM7Q0FDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3N1cGVydG9rZW5zLy4vcGFnZXMvYXBpL2F1dGgvW1suLi5wYXRoXV0uanM/NzA2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdXBlclRva2Vuc05leHRXcmFwcGVyIH0gZnJvbSBcInN1cGVydG9rZW5zLW5vZGUvbmV4dGpzXCI7XG5pbXBvcnQgeyBtaWRkbGV3YXJlIH0gZnJvbSBcInN1cGVydG9rZW5zLW5vZGUvZnJhbWV3b3JrL2V4cHJlc3NcIjtcbmltcG9ydCBzdXBlcnRva2VucyBmcm9tIFwic3VwZXJ0b2tlbnMtbm9kZVwiO1xuaW1wb3J0IHsgYmFja2VuZENvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi9jb25maWcvYmFja2VuZENvbmZpZ1wiO1xuXG5zdXBlcnRva2Vucy5pbml0KGJhY2tlbmRDb25maWcoKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHN1cGVyVG9rZW5zKHJlcSwgcmVzKSB7XG5cdGF3YWl0IHN1cGVyVG9rZW5zTmV4dFdyYXBwZXIoXG5cdFx0YXN5bmMgKG5leHQpID0+IHtcblx0XHRcdGF3YWl0IG1pZGRsZXdhcmUoKShyZXEsIHJlcywgbmV4dCk7XG5cdFx0fSxcblx0XHRyZXEsXG5cdFx0cmVzXG5cdCk7XG5cdGlmICghcmVzLndyaXRhYmxlRW5kZWQpIHtcblx0XHRyZXMuc3RhdHVzKDQwNCkuc2VuZChcIk5vdCBmb3VuZFwiKTtcblx0fVxufVxuIl0sIm5hbWVzIjpbInN1cGVyVG9rZW5zTmV4dFdyYXBwZXIiLCJtaWRkbGV3YXJlIiwic3VwZXJ0b2tlbnMiLCJiYWNrZW5kQ29uZmlnIiwiaW5pdCIsInN1cGVyVG9rZW5zIiwicmVxIiwicmVzIiwibmV4dCIsIndyaXRhYmxlRW5kZWQiLCJzdGF0dXMiLCJzZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[[...path]].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[[...path]].js"));
module.exports = __webpack_exports__;

})();