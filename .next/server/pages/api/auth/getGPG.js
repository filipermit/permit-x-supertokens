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
exports.id = "pages/api/auth/getGPG";
exports.ids = ["pages/api/auth/getGPG"];
exports.modules = {

/***/ "permitio":
/*!***************************!*\
  !*** external "permitio" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("permitio");

/***/ }),

/***/ "supertokens-node/nextjs":
/*!******************************************!*\
  !*** external "supertokens-node/nextjs" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("supertokens-node/nextjs");

/***/ }),

/***/ "supertokens-node/recipe/session/framework/express":
/*!********************************************************************!*\
  !*** external "supertokens-node/recipe/session/framework/express" ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = require("supertokens-node/recipe/session/framework/express");

/***/ }),

/***/ "(api)/./pages/api/auth/getGPG.js":
/*!**********************************!*\
  !*** ./pages/api/auth/getGPG.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var permitio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! permitio */ \"permitio\");\n/* harmony import */ var permitio__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(permitio__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var supertokens_node_nextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! supertokens-node/nextjs */ \"supertokens-node/nextjs\");\n/* harmony import */ var supertokens_node_nextjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(supertokens_node_nextjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var supertokens_node_recipe_session_framework_express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! supertokens-node/recipe/session/framework/express */ \"supertokens-node/recipe/session/framework/express\");\n/* harmony import */ var supertokens_node_recipe_session_framework_express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(supertokens_node_recipe_session_framework_express__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function verifyAndFetchGPGKey(req, res) {\n    // Verify that a user is authenticated by checking the session.\n    await (0,supertokens_node_nextjs__WEBPACK_IMPORTED_MODULE_1__.superTokensNextWrapper)(async (next)=>{\n        await (0,supertokens_node_recipe_session_framework_express__WEBPACK_IMPORTED_MODULE_2__.verifySession)()(req, res, next);\n    }, req, res);\n    const GPGKey = \"DKdkdl459sl4wdsk7KDMMDdQw4w9WgXcQ\";\n    // Permit PDP instance.\n    const permit = new permitio__WEBPACK_IMPORTED_MODULE_0__.Permit({\n        pdp: \"http://localhost:7766\",\n        // Permit SDK Key\n        token: process.env.PERMIT_IO_KEY\n    });\n    const permitted = await permit.check(req.session.getUserId(), \"view-gpg-key\", {\n        type: \"card\",\n        tenant: \"SuperTokens\"\n    });\n    if (permitted) {\n        res.status(200).send({\n            gpg: GPGKey\n        });\n    } else {\n        res.status(403).send(\"Unauthorized\");\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (verifyAndFetchGPGKey);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9nZXRHUEcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFrQztBQUMrQjtBQUNpQjtBQUVsRixlQUFlRyxvQkFBb0IsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDN0MsK0RBQStEO0lBQy9ELE1BQU1KLCtFQUFzQixDQUMzQixPQUFPSyxJQUFJLEdBQUs7UUFDZixNQUFNSixnR0FBYSxFQUFFLENBQUNFLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztLQUN0QyxFQUNERixHQUFHLEVBQ0hDLEdBQUcsQ0FDSCxDQUFDO0lBRUYsTUFBTUUsTUFBTSxHQUFHLG1DQUFtQztJQUVsRCx1QkFBdUI7SUFDdkIsTUFBTUMsTUFBTSxHQUFHLElBQUlSLDRDQUFNLENBQUM7UUFDekJTLEdBQUcsRUFBRSx1QkFBdUI7UUFDNUIsaUJBQWlCO1FBQ2pCQyxLQUFLLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxhQUFhO0tBQ2hDLENBQUM7SUFFRixNQUFNQyxTQUFTLEdBQUcsTUFBTU4sTUFBTSxDQUFDTyxLQUFLLENBQ25DWCxHQUFHLENBQUNZLE9BQU8sQ0FBQ0MsU0FBUyxFQUFFLEVBQ3ZCLGNBQWMsRUFDZDtRQUNDQyxJQUFJLEVBQUUsTUFBTTtRQUNaQyxNQUFNLEVBQUUsYUFBYTtLQUNyQixDQUNEO0lBRUQsSUFBSUwsU0FBUyxFQUFFO1FBQ2RULEdBQUcsQ0FBQ2UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsR0FBRyxFQUFFZixNQUFNO1NBQUUsQ0FBQyxDQUFDO0tBQ3RDLE1BQU07UUFDTkYsR0FBRyxDQUFDZSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztLQUNyQztDQUNEO0FBRUQsaUVBQWVsQixvQkFBb0IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N1cGVydG9rZW5zLy4vcGFnZXMvYXBpL2F1dGgvZ2V0R1BHLmpzPzBkMjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGVybWl0IH0gZnJvbSBcInBlcm1pdGlvXCI7XG5pbXBvcnQgeyBzdXBlclRva2Vuc05leHRXcmFwcGVyIH0gZnJvbSBcInN1cGVydG9rZW5zLW5vZGUvbmV4dGpzXCI7XG5pbXBvcnQgeyB2ZXJpZnlTZXNzaW9uIH0gZnJvbSBcInN1cGVydG9rZW5zLW5vZGUvcmVjaXBlL3Nlc3Npb24vZnJhbWV3b3JrL2V4cHJlc3NcIjtcblxuYXN5bmMgZnVuY3Rpb24gdmVyaWZ5QW5kRmV0Y2hHUEdLZXkocmVxLCByZXMpIHtcblx0Ly8gVmVyaWZ5IHRoYXQgYSB1c2VyIGlzIGF1dGhlbnRpY2F0ZWQgYnkgY2hlY2tpbmcgdGhlIHNlc3Npb24uXG5cdGF3YWl0IHN1cGVyVG9rZW5zTmV4dFdyYXBwZXIoXG5cdFx0YXN5bmMgKG5leHQpID0+IHtcblx0XHRcdGF3YWl0IHZlcmlmeVNlc3Npb24oKShyZXEsIHJlcywgbmV4dCk7XG5cdFx0fSxcblx0XHRyZXEsXG5cdFx0cmVzXG5cdCk7XG5cblx0Y29uc3QgR1BHS2V5ID0gXCJES2RrZGw0NTlzbDR3ZHNrN0tETU1EZFF3NHc5V2dYY1FcIjtcblxuXHQvLyBQZXJtaXQgUERQIGluc3RhbmNlLlxuXHRjb25zdCBwZXJtaXQgPSBuZXcgUGVybWl0KHtcblx0XHRwZHA6IFwiaHR0cDovL2xvY2FsaG9zdDo3NzY2XCIsXG5cdFx0Ly8gUGVybWl0IFNESyBLZXlcblx0XHR0b2tlbjogcHJvY2Vzcy5lbnYuUEVSTUlUX0lPX0tFWSxcblx0fSk7XG5cblx0Y29uc3QgcGVybWl0dGVkID0gYXdhaXQgcGVybWl0LmNoZWNrKFxuXHRcdHJlcS5zZXNzaW9uLmdldFVzZXJJZCgpLFxuXHRcdFwidmlldy1ncGcta2V5XCIsXG5cdFx0e1xuXHRcdFx0dHlwZTogXCJjYXJkXCIsXG5cdFx0XHR0ZW5hbnQ6IFwiU3VwZXJUb2tlbnNcIixcblx0XHR9XG5cdCk7XG5cblx0aWYgKHBlcm1pdHRlZCkge1xuXHRcdHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgZ3BnOiBHUEdLZXkgfSk7XG5cdH0gZWxzZSB7XG5cdFx0cmVzLnN0YXR1cyg0MDMpLnNlbmQoXCJVbmF1dGhvcml6ZWRcIik7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdmVyaWZ5QW5kRmV0Y2hHUEdLZXk7XG4iXSwibmFtZXMiOlsiUGVybWl0Iiwic3VwZXJUb2tlbnNOZXh0V3JhcHBlciIsInZlcmlmeVNlc3Npb24iLCJ2ZXJpZnlBbmRGZXRjaEdQR0tleSIsInJlcSIsInJlcyIsIm5leHQiLCJHUEdLZXkiLCJwZXJtaXQiLCJwZHAiLCJ0b2tlbiIsInByb2Nlc3MiLCJlbnYiLCJQRVJNSVRfSU9fS0VZIiwicGVybWl0dGVkIiwiY2hlY2siLCJzZXNzaW9uIiwiZ2V0VXNlcklkIiwidHlwZSIsInRlbmFudCIsInN0YXR1cyIsInNlbmQiLCJncGciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/getGPG.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/getGPG.js"));
module.exports = __webpack_exports__;

})();