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
exports.id = "pages/api/auth/permit";
exports.ids = ["pages/api/auth/permit"];
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

/***/ "(api)/./pages/api/auth/permit.js":
/*!**********************************!*\
  !*** ./pages/api/auth/permit.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var permitio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! permitio */ \"permitio\");\n/* harmony import */ var permitio__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(permitio__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var supertokens_node_nextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! supertokens-node/nextjs */ \"supertokens-node/nextjs\");\n/* harmony import */ var supertokens_node_nextjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(supertokens_node_nextjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var supertokens_node_recipe_session_framework_express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! supertokens-node/recipe/session/framework/express */ \"supertokens-node/recipe/session/framework/express\");\n/* harmony import */ var supertokens_node_recipe_session_framework_express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(supertokens_node_recipe_session_framework_express__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n// Verify that a user is authenticated by checking the session.\nasync function permissionCheck(req, res) {\n    await (0,supertokens_node_nextjs__WEBPACK_IMPORTED_MODULE_1__.superTokensNextWrapper)(async (next)=>{\n        await (0,supertokens_node_recipe_session_framework_express__WEBPACK_IMPORTED_MODULE_2__.verifySession)()(req, res, next);\n    }, req, res);\n    const { action , resource  } = req.body;\n    // Permit PDP instance.\n    const permit = new permitio__WEBPACK_IMPORTED_MODULE_0__.Permit({\n        pdp: \"http://localhost:7766\",\n        // Permit SDK Key\n        token: process.env.PERMIT_IO_KEY\n    });\n    // Permit check for correct permissions for a sepcific role.\n    const permitted = await permit.check(req.session.getUserId(), action, {\n        type: resource,\n        tenant: \"SuperTokens\"\n    });\n    const userId = req.session.getUserId();\n    if (permitted) {\n        console.log(`${userId} is PERMITTED to ${action} on ${resource}.`);\n        res.status(200).send(`${userId} is PERMITTED to ${action} on ${resource}`);\n    } else {\n        console.log(`${userId} is NOT PERMITTED to ${action} on ${resource}`);\n        res.status(403).send(`${userId} is NOT PERMITTED to ${action} on ${resource}`);\n    }\n    return permitted;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (permissionCheck);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9wZXJtaXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFrQztBQUMrQjtBQUNpQjtBQUVsRiwrREFBK0Q7QUFDL0QsZUFBZUcsZUFBZSxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN4QyxNQUFNSiwrRUFBc0IsQ0FDM0IsT0FBT0ssSUFBSSxHQUFLO1FBQ2YsTUFBTUosZ0dBQWEsRUFBRSxDQUFDRSxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7S0FDdEMsRUFDREYsR0FBRyxFQUNIQyxHQUFHLENBQ0gsQ0FBQztJQUVGLE1BQU0sRUFBRUUsTUFBTSxHQUFFQyxRQUFRLEdBQUUsR0FBR0osR0FBRyxDQUFDSyxJQUFJO0lBRXJDLHVCQUF1QjtJQUN2QixNQUFNQyxNQUFNLEdBQUcsSUFBSVYsNENBQU0sQ0FBQztRQUN6QlcsR0FBRyxFQUFFLHVCQUF1QjtRQUM1QixpQkFBaUI7UUFDakJDLEtBQUssRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGFBQWE7S0FDaEMsQ0FBQztJQUVGLDREQUE0RDtJQUM1RCxNQUFNQyxTQUFTLEdBQUcsTUFBTU4sTUFBTSxDQUFDTyxLQUFLLENBQUNiLEdBQUcsQ0FBQ2MsT0FBTyxDQUFDQyxTQUFTLEVBQUUsRUFBRVosTUFBTSxFQUFFO1FBQ3JFYSxJQUFJLEVBQUVaLFFBQVE7UUFDZGEsTUFBTSxFQUFFLGFBQWE7S0FDckIsQ0FBQztJQUVGLE1BQU1DLE1BQU0sR0FBR2xCLEdBQUcsQ0FBQ2MsT0FBTyxDQUFDQyxTQUFTLEVBQUU7SUFFdEMsSUFBSUgsU0FBUyxFQUFFO1FBQ2RPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUMsRUFBRUYsTUFBTSxDQUFDLGlCQUFpQixFQUFFZixNQUFNLENBQUMsSUFBSSxFQUFFQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRUgsR0FBRyxDQUFDb0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQyxFQUFFSixNQUFNLENBQUMsaUJBQWlCLEVBQUVmLE1BQU0sQ0FBQyxJQUFJLEVBQUVDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUMzRSxNQUFNO1FBQ05lLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUMsRUFBRUYsTUFBTSxDQUFDLHFCQUFxQixFQUFFZixNQUFNLENBQUMsSUFBSSxFQUFFQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEVILEdBQUcsQ0FDRG9CLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FDWEMsSUFBSSxDQUFDLENBQUMsRUFBRUosTUFBTSxDQUFDLHFCQUFxQixFQUFFZixNQUFNLENBQUMsSUFBSSxFQUFFQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDakU7SUFFRCxPQUFPUSxTQUFTLENBQUM7Q0FDakI7QUFFRCxpRUFBZWIsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3VwZXJ0b2tlbnMvLi9wYWdlcy9hcGkvYXV0aC9wZXJtaXQuanM/NGFlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQZXJtaXQgfSBmcm9tIFwicGVybWl0aW9cIjtcbmltcG9ydCB7IHN1cGVyVG9rZW5zTmV4dFdyYXBwZXIgfSBmcm9tIFwic3VwZXJ0b2tlbnMtbm9kZS9uZXh0anNcIjtcbmltcG9ydCB7IHZlcmlmeVNlc3Npb24gfSBmcm9tIFwic3VwZXJ0b2tlbnMtbm9kZS9yZWNpcGUvc2Vzc2lvbi9mcmFtZXdvcmsvZXhwcmVzc1wiO1xuXG4vLyBWZXJpZnkgdGhhdCBhIHVzZXIgaXMgYXV0aGVudGljYXRlZCBieSBjaGVja2luZyB0aGUgc2Vzc2lvbi5cbmFzeW5jIGZ1bmN0aW9uIHBlcm1pc3Npb25DaGVjayhyZXEsIHJlcykge1xuXHRhd2FpdCBzdXBlclRva2Vuc05leHRXcmFwcGVyKFxuXHRcdGFzeW5jIChuZXh0KSA9PiB7XG5cdFx0XHRhd2FpdCB2ZXJpZnlTZXNzaW9uKCkocmVxLCByZXMsIG5leHQpO1xuXHRcdH0sXG5cdFx0cmVxLFxuXHRcdHJlc1xuXHQpO1xuXG5cdGNvbnN0IHsgYWN0aW9uLCByZXNvdXJjZSB9ID0gcmVxLmJvZHk7XG5cblx0Ly8gUGVybWl0IFBEUCBpbnN0YW5jZS5cblx0Y29uc3QgcGVybWl0ID0gbmV3IFBlcm1pdCh7XG5cdFx0cGRwOiBcImh0dHA6Ly9sb2NhbGhvc3Q6Nzc2NlwiLFxuXHRcdC8vIFBlcm1pdCBTREsgS2V5XG5cdFx0dG9rZW46IHByb2Nlc3MuZW52LlBFUk1JVF9JT19LRVksXG5cdH0pO1xuXG5cdC8vIFBlcm1pdCBjaGVjayBmb3IgY29ycmVjdCBwZXJtaXNzaW9ucyBmb3IgYSBzZXBjaWZpYyByb2xlLlxuXHRjb25zdCBwZXJtaXR0ZWQgPSBhd2FpdCBwZXJtaXQuY2hlY2socmVxLnNlc3Npb24uZ2V0VXNlcklkKCksIGFjdGlvbiwge1xuXHRcdHR5cGU6IHJlc291cmNlLFxuXHRcdHRlbmFudDogXCJTdXBlclRva2Vuc1wiLFxuXHR9KTtcblxuXHRjb25zdCB1c2VySWQgPSByZXEuc2Vzc2lvbi5nZXRVc2VySWQoKTtcblxuXHRpZiAocGVybWl0dGVkKSB7XG5cdFx0Y29uc29sZS5sb2coYCR7dXNlcklkfSBpcyBQRVJNSVRURUQgdG8gJHthY3Rpb259IG9uICR7cmVzb3VyY2V9LmApO1xuXHRcdHJlcy5zdGF0dXMoMjAwKS5zZW5kKGAke3VzZXJJZH0gaXMgUEVSTUlUVEVEIHRvICR7YWN0aW9ufSBvbiAke3Jlc291cmNlfWApO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnNvbGUubG9nKGAke3VzZXJJZH0gaXMgTk9UIFBFUk1JVFRFRCB0byAke2FjdGlvbn0gb24gJHtyZXNvdXJjZX1gKTtcblx0XHRyZXNcblx0XHRcdC5zdGF0dXMoNDAzKVxuXHRcdFx0LnNlbmQoYCR7dXNlcklkfSBpcyBOT1QgUEVSTUlUVEVEIHRvICR7YWN0aW9ufSBvbiAke3Jlc291cmNlfWApO1xuXHR9XG5cblx0cmV0dXJuIHBlcm1pdHRlZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGVybWlzc2lvbkNoZWNrO1xuIl0sIm5hbWVzIjpbIlBlcm1pdCIsInN1cGVyVG9rZW5zTmV4dFdyYXBwZXIiLCJ2ZXJpZnlTZXNzaW9uIiwicGVybWlzc2lvbkNoZWNrIiwicmVxIiwicmVzIiwibmV4dCIsImFjdGlvbiIsInJlc291cmNlIiwiYm9keSIsInBlcm1pdCIsInBkcCIsInRva2VuIiwicHJvY2VzcyIsImVudiIsIlBFUk1JVF9JT19LRVkiLCJwZXJtaXR0ZWQiLCJjaGVjayIsInNlc3Npb24iLCJnZXRVc2VySWQiLCJ0eXBlIiwidGVuYW50IiwidXNlcklkIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsInNlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/permit.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/permit.js"));
module.exports = __webpack_exports__;

})();