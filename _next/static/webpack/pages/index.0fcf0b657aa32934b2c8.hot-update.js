webpackHotUpdate_N_E("pages/index",{

/***/ "./components/canvas/Plane.tsx":
/*!*************************************!*\
  !*** ./components/canvas/Plane.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-three-fiber */ \"./node_modules/react-three-fiber/web.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\nvar _jsxFileName = \"/Users/yokotani/Documents/\\u958B\\u767A/study-shaders/components/canvas/Plane.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n/* eslint-disable @typescript-eslint/no-unused-vars */\n\n\n\n\nvar PlaneMesh = function PlaneMesh(_ref) {\n  _s();\n\n  var vertexShader = _ref.vertexShader,\n      fragmentShader = _ref.fragmentShader;\n  var material = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  var uniforms = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useMemo\"])(function () {\n    return {\n      uTime: {\n        type: 'f',\n        value: 0.0\n      },\n      uResolution: {\n        type: 'v2',\n        value: new three__WEBPACK_IMPORTED_MODULE_3__[\"Vector2\"](window.innerWidth, window.innerHeight)\n      },\n      uMouse: {\n        type: 'v2',\n        value: new three__WEBPACK_IMPORTED_MODULE_3__[\"Vector2\"]()\n      }\n    };\n  }, []);\n  Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_2__[\"useFrame\"])(function () {\n    if (material.current) {\n      material.current.uniforms.uTime.value += 0.1;\n    }\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"mesh\", {\n    position: [0, 0, 0],\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"planeBufferGeometry\", {\n      attach: \"geometry\",\n      args: [2, 2]\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"shaderMaterial\", {\n      ref: material,\n      attach: \"material\",\n      vertexShader: vertexShader,\n      fragmentShader: fragmentShader,\n      uniforms: uniforms\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(PlaneMesh, \"UgXGVJHCW4Plv+62juOp8iNP7H4=\", false, function () {\n  return [react_three_fiber__WEBPACK_IMPORTED_MODULE_2__[\"useFrame\"]];\n});\n\n_c = PlaneMesh;\n\nvar Plane = function Plane(_ref2) {\n  var vertexShader = _ref2.vertexShader,\n      fragmentShader = _ref2.fragmentShader;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_three_fiber__WEBPACK_IMPORTED_MODULE_2__[\"Canvas\"], {\n    orthographic: true,\n    camera: {\n      zoom: 1,\n      position: [0, 0, 0]\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ambientLight\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(PlaneMesh, {\n      vertexShader: vertexShader,\n      fragmentShader: fragmentShader\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = Plane;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Plane);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"PlaneMesh\");\n$RefreshReg$(_c2, \"Plane\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYW52YXMvUGxhbmUudHN4PzA0ZGIiXSwibmFtZXMiOlsiUGxhbmVNZXNoIiwidmVydGV4U2hhZGVyIiwiZnJhZ21lbnRTaGFkZXIiLCJtYXRlcmlhbCIsInVzZVJlZiIsInVuaWZvcm1zIiwidXNlTWVtbyIsInVUaW1lIiwidHlwZSIsInZhbHVlIiwidVJlc29sdXRpb24iLCJUSFJFRSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInVNb3VzZSIsInVzZUZyYW1lIiwiY3VycmVudCIsIlBsYW5lIiwiem9vbSIsInBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBT0EsSUFBTUEsU0FBMEIsR0FBRyxTQUE3QkEsU0FBNkIsT0FBc0M7QUFBQTs7QUFBQSxNQUFuQ0MsWUFBbUMsUUFBbkNBLFlBQW1DO0FBQUEsTUFBckJDLGNBQXFCLFFBQXJCQSxjQUFxQjtBQUN2RSxNQUFNQyxRQUFRLEdBQUdDLG9EQUFNLEVBQXZCO0FBRUEsTUFBTUMsUUFBUSxHQUFHQyxxREFBTyxDQUN0QjtBQUFBLFdBQU87QUFDTEMsV0FBSyxFQUFFO0FBQUVDLFlBQUksRUFBRSxHQUFSO0FBQWFDLGFBQUssRUFBRTtBQUFwQixPQURGO0FBRUxDLGlCQUFXLEVBQUU7QUFDWEYsWUFBSSxFQUFFLElBREs7QUFFWEMsYUFBSyxFQUFFLElBQUlFLDZDQUFKLENBQWtCQyxNQUFNLENBQUNDLFVBQXpCLEVBQXFDRCxNQUFNLENBQUNFLFdBQTVDO0FBRkksT0FGUjtBQU1MQyxZQUFNLEVBQUU7QUFDTlAsWUFBSSxFQUFFLElBREE7QUFFTkMsYUFBSyxFQUFFLElBQUlFLDZDQUFKO0FBRkQ7QUFOSCxLQUFQO0FBQUEsR0FEc0IsRUFZdEIsRUFac0IsQ0FBeEI7QUFlQUssb0VBQVEsQ0FBQyxZQUFNO0FBQ2IsUUFBSWIsUUFBUSxDQUFDYyxPQUFiLEVBQXNCO0FBQ3BCZCxjQUFRLENBQUNjLE9BQVQsQ0FBaUJaLFFBQWpCLENBQTBCRSxLQUExQixDQUFnQ0UsS0FBaEMsSUFBeUMsR0FBekM7QUFDRDtBQUNGLEdBSk8sQ0FBUjtBQU1BLHNCQUNFO0FBQU0sWUFBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQWhCO0FBQUEsNEJBQ0U7QUFBcUIsWUFBTSxFQUFDLFVBQTVCO0FBQXVDLFVBQUksRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQ0UsU0FBRyxFQUFFTixRQURQO0FBRUUsWUFBTSxFQUFDLFVBRlQ7QUFHRSxrQkFBWSxFQUFFRixZQUhoQjtBQUlFLG9CQUFjLEVBQUVDLGNBSmxCO0FBS0UsY0FBUSxFQUFFRztBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVlELENBcENEOztHQUFNTCxTO1VBa0JKZ0IsMEQ7OztLQWxCSWhCLFM7O0FBc0NOLElBQU1rQixLQUFzQixHQUFHLFNBQXpCQSxLQUF5QixRQUFzQztBQUFBLE1BQW5DakIsWUFBbUMsU0FBbkNBLFlBQW1DO0FBQUEsTUFBckJDLGNBQXFCLFNBQXJCQSxjQUFxQjtBQUNuRSxzQkFDRSxxRUFBQyx3REFBRDtBQUFRLGdCQUFZLE1BQXBCO0FBQXFCLFVBQU0sRUFBRTtBQUFFaUIsVUFBSSxFQUFFLENBQVI7QUFBV0MsY0FBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQO0FBQXJCLEtBQTdCO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUscUVBQUMsU0FBRDtBQUFXLGtCQUFZLEVBQUVuQixZQUF6QjtBQUF1QyxvQkFBYyxFQUFFQztBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFNRCxDQVBEOztNQUFNZ0IsSztBQVNTQSxvRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvY2FudmFzL1BsYW5lLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8sIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENhbnZhcywgdXNlRnJhbWUgfSBmcm9tICdyZWFjdC10aHJlZS1maWJlcic7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHZlcnRleFNoYWRlcjogc3RyaW5nO1xuICBmcmFnbWVudFNoYWRlcjogc3RyaW5nO1xufTtcblxuY29uc3QgUGxhbmVNZXNoOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyB2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyIH0pID0+IHtcbiAgY29uc3QgbWF0ZXJpYWwgPSB1c2VSZWY8VEhSRUUuU2hhZGVyTWF0ZXJpYWw+KCk7XG5cbiAgY29uc3QgdW5pZm9ybXMgPSB1c2VNZW1vKFxuICAgICgpID0+ICh7XG4gICAgICB1VGltZTogeyB0eXBlOiAnZicsIHZhbHVlOiAwLjAgfSxcbiAgICAgIHVSZXNvbHV0aW9uOiB7XG4gICAgICAgIHR5cGU6ICd2MicsXG4gICAgICAgIHZhbHVlOiBuZXcgVEhSRUUuVmVjdG9yMih3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KSxcbiAgICAgIH0sXG4gICAgICB1TW91c2U6IHtcbiAgICAgICAgdHlwZTogJ3YyJyxcbiAgICAgICAgdmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IyKCksXG4gICAgICB9LFxuICAgIH0pLFxuICAgIFtdXG4gICk7XG5cbiAgdXNlRnJhbWUoKCkgPT4ge1xuICAgIGlmIChtYXRlcmlhbC5jdXJyZW50KSB7XG4gICAgICBtYXRlcmlhbC5jdXJyZW50LnVuaWZvcm1zLnVUaW1lLnZhbHVlICs9IDAuMTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPG1lc2ggcG9zaXRpb249e1swLCAwLCAwXX0+XG4gICAgICA8cGxhbmVCdWZmZXJHZW9tZXRyeSBhdHRhY2g9XCJnZW9tZXRyeVwiIGFyZ3M9e1syLCAyXX0gLz5cbiAgICAgIDxzaGFkZXJNYXRlcmlhbFxuICAgICAgICByZWY9e21hdGVyaWFsfVxuICAgICAgICBhdHRhY2g9XCJtYXRlcmlhbFwiXG4gICAgICAgIHZlcnRleFNoYWRlcj17dmVydGV4U2hhZGVyfVxuICAgICAgICBmcmFnbWVudFNoYWRlcj17ZnJhZ21lbnRTaGFkZXJ9XG4gICAgICAgIHVuaWZvcm1zPXt1bmlmb3Jtc31cbiAgICAgIC8+XG4gICAgPC9tZXNoPlxuICApO1xufTtcblxuY29uc3QgUGxhbmU6IFJlYWN0LkZDPFByb3BzPiA9ICh7IHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDYW52YXMgb3J0aG9ncmFwaGljIGNhbWVyYT17eyB6b29tOiAxLCBwb3NpdGlvbjogWzAsIDAsIDBdIH19PlxuICAgICAgPGFtYmllbnRMaWdodCAvPlxuICAgICAgPFBsYW5lTWVzaCB2ZXJ0ZXhTaGFkZXI9e3ZlcnRleFNoYWRlcn0gZnJhZ21lbnRTaGFkZXI9e2ZyYWdtZW50U2hhZGVyfSAvPlxuICAgIDwvQ2FudmFzPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxhbmU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/canvas/Plane.tsx\n");

/***/ })

})