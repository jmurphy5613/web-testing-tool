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

/***/ "./components/navbar.jsx":
/*!*******************************!*\
  !*** ./components/navbar.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ \"./node_modules/@material-ui/core/esm/AppBar/index.js\");\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ \"./node_modules/@material-ui/core/esm/Toolbar/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(function(theme) {\n    return {\n        logo: {\n            fontFamily: theme.typography.fontFamily.primary,\n            marginLeft: theme.spacing(30)\n        }\n    };\n});\nvar Navbar = function() {\n    _s();\n    var classes = useStyles();\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            position: \"static\",\n            __source: {\n                fileName: \"/Users/johnmurphy/Documents/Mac-Pogramming/sat-testing-tool/client/my-app/components/navbar.jsx\",\n                lineNumber: 20,\n                columnNumber: 13\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                variant: \"dense\",\n                __source: {\n                    fileName: \"/Users/johnmurphy/Documents/Mac-Pogramming/sat-testing-tool/client/my-app/components/navbar.jsx\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    variant: \"h3\",\n                    className: classes.logo,\n                    __source: {\n                        fileName: \"/Users/johnmurphy/Documents/Mac-Pogramming/sat-testing-tool/client/my-app/components/navbar.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 21\n                    },\n                    __self: _this,\n                    children: \"Logo\"\n                })\n            })\n        })\n    }));\n};\n_s(Navbar, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function() {\n    return [\n        useStyles\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmJhci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTZDO0FBQ0U7QUFDTTtBQUNBOzs7QUFFckQsR0FBSyxDQUFDSSxTQUFTLEdBQUdELG9FQUFVLENBQUMsUUFBUSxDQUFQRSxLQUFLO0lBQUssTUFDckMsQ0FEc0MsQ0FBQztRQUN0Q0MsSUFBSSxFQUFFLENBQUM7WUFDSEMsVUFBVSxFQUFFRixLQUFLLENBQUNHLFVBQVUsQ0FBQ0QsVUFBVSxDQUFDRSxPQUFPO1lBQy9DQyxVQUFVLEVBQUVMLEtBQUssQ0FBQ00sT0FBTyxDQUFDLEVBQUU7UUFDaEMsQ0FBQztJQUNMLENBQUM7O0FBR0QsR0FBSyxDQUFDQyxNQUFNLEdBQUcsUUFDZixHQURxQixDQUFDOztJQUVsQixHQUFLLENBQUNDLE9BQU8sR0FBR1QsU0FBUztJQUV6QixNQUFNO3VGQUVHSixnRUFBTTtZQUFDYyxRQUFRLEVBQUMsQ0FBUTs7Ozs7OzsyRkFDcEJiLGlFQUFPO2dCQUFDYyxPQUFPLEVBQUMsQ0FBTzs7Ozs7OzsrRkFDbkJiLG9FQUFVO29CQUNQYSxPQUFPLEVBQUMsQ0FBSTtvQkFDWkMsU0FBUyxFQUFFSCxPQUFPLENBQUNQLElBQUk7Ozs7Ozs7OEJBQzFCLENBRUQ7Ozs7O0FBS3BCLENBQUM7R0FsQktNLE1BQU07O1FBRVFSLFNBQVM7OztLQUZ2QlEsTUFBTTtBQW9CWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2YmFyLmpzeD9mNTNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gICAgbG9nbzoge1xuICAgICAgICBmb250RmFtaWx5OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHkucHJpbWFyeSxcbiAgICAgICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygzMClcbiAgICB9XG59KSk7IFxuXG5cbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcblxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCI+XG4gICAgICAgICAgICAgICAgPFRvb2xiYXIgdmFyaWFudD1cImRlbnNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ299XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ29cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvVG9vbGJhcj5cbiAgICAgICAgICAgIDwvQXBwQmFyPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjsiXSwibmFtZXMiOlsiQXBwQmFyIiwiVG9vbGJhciIsIlR5cG9ncmFwaHkiLCJtYWtlU3R5bGVzIiwidXNlU3R5bGVzIiwidGhlbWUiLCJsb2dvIiwiZm9udEZhbWlseSIsInR5cG9ncmFwaHkiLCJwcmltYXJ5IiwibWFyZ2luTGVmdCIsInNwYWNpbmciLCJOYXZiYXIiLCJjbGFzc2VzIiwicG9zaXRpb24iLCJ2YXJpYW50IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/navbar.jsx\n");

/***/ })

});