"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Layouts_ThemeLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Layouts/ThemeLayout */ "./Components/Layouts/ThemeLayout.jsx");
/* harmony import */ var _Providers_rootProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Providers/rootProvider */ "./Providers/rootProvider.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/number */ "./reducers/number.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\SH\\Desktop\\React_saga\\pages\\index.jsx",
    _this = undefined,
    _s = $RefreshSig$();









var index = function index() {
  _s();

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.number;
  }),
      current_number = _useSelector.current_number,
      IsLogin = _useSelector.IsLogin;

  var btn_click = function btn_click() {
    e.preventDefault();
    console.log(current_number);
    dispatch((0,_reducers_number__WEBPACK_IMPORTED_MODULE_4__.default)(current_number));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Providers_rootProvider__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      children: current_number
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
      onClick: btn_click,
      children: "+"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};

_s(index, "dEa/s4c4PrA+ZzRIGa6/crV17f0=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector];
});

/* harmony default export */ __webpack_exports__["default"] = (index);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDdmNDNlOTU1M2FiODA2ZTcyZDUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFDQSxJQUFNTSxLQUFLLEdBQUMsU0FBTkEsS0FBTSxHQUFJO0FBQUE7O0FBQ1osTUFBTUMsUUFBUSxHQUFHSix3REFBVyxFQUE1Qjs7QUFDQSxxQkFBaUNDLHdEQUFXLENBQUMsVUFBQ0ksS0FBRDtBQUFBLFdBQVNBLEtBQUssQ0FBQ0MsTUFBZjtBQUFBLEdBQUQsQ0FBNUM7QUFBQSxNQUFPQyxjQUFQLGdCQUFPQSxjQUFQO0FBQUEsTUFBc0JDLE9BQXRCLGdCQUFzQkEsT0FBdEI7O0FBRUEsTUFBTUMsU0FBUyxHQUFDLFNBQVZBLFNBQVUsR0FBSTtBQUNoQkMsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTixjQUFaO0FBQ0FILElBQUFBLFFBQVEsQ0FBQ0YseURBQW1CLENBQUNLLGNBQUQsQ0FBcEIsQ0FBUjtBQUNILEdBSkQ7O0FBS0Esc0JBQ0k7QUFBQSw0QkFDQSw4REFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREEsZUFFQTtBQUFBLGdCQUFNQTtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGQSxlQUdBO0FBQVEsYUFBTyxFQUFFRSxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhBO0FBQUEsa0JBREo7QUFPSCxDQWhCRDs7R0FBTU47VUFDZUgsc0RBQ2dCQzs7O0FBZ0JyQywrREFBZUUsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgVGhlbWVMYXlvdXQgZnJvbSAnLi4vQ29tcG9uZW50cy9MYXlvdXRzL1RoZW1lTGF5b3V0J1xyXG5pbXBvcnQgUm9vdFByb3ZpZGVyIGZyb20gJy4uL1Byb3ZpZGVycy9yb290UHJvdmlkZXInXHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsdXNlU2VsZWN0b3J9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgcGx1c19udW1iZXJfcmVxdWVzdCBmcm9tICcuLi9yZWR1Y2Vycy9udW1iZXInXHJcbmNvbnN0IGluZGV4PSgpPT57XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7Y3VycmVudF9udW1iZXIsSXNMb2dpbn0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS5udW1iZXIpXHJcblxyXG4gICAgY29uc3QgYnRuX2NsaWNrPSgpPT57XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRfbnVtYmVyKVxyXG4gICAgICAgIGRpc3BhdGNoKHBsdXNfbnVtYmVyX3JlcXVlc3QoY3VycmVudF9udW1iZXIpKTtcclxuICAgIH1cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxSb290UHJvdmlkZXIvPlxyXG4gICAgICAgIDxkaXY+e2N1cnJlbnRfbnVtYmVyfTwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17YnRuX2NsaWNrfT4rPC9idXR0b24+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleCJdLCJuYW1lcyI6WyJSZWFjdCIsIlRoZW1lTGF5b3V0IiwiUm9vdFByb3ZpZGVyIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInBsdXNfbnVtYmVyX3JlcXVlc3QiLCJpbmRleCIsImRpc3BhdGNoIiwic3RhdGUiLCJudW1iZXIiLCJjdXJyZW50X251bWJlciIsIklzTG9naW4iLCJidG5fY2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==