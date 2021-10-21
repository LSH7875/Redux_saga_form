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
      current_number = _useSelector.current_number;

  var _useSelector2 = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.post;
  }),
      post = _useSelector2.post;

  var btn_click = function btn_click(e) {
    // e.preventDefault();
    console.log(post);
    console.log(current_number);
    dispatch((0,_reducers_number__WEBPACK_IMPORTED_MODULE_4__.plus_number_request)(current_number));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Providers_rootProvider__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      children: current_number
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
      onClick: btn_click,
      children: "+"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};

_s(index, "x+FUDVcrxGJGeHsrTckrv7TYQ9c=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzZkOTc1YTFmMjEzZGUxMjhjNjguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFDQSxJQUFNTyxLQUFLLEdBQUMsU0FBTkEsS0FBTSxHQUFJO0FBQUE7O0FBQ1osTUFBTUMsUUFBUSxHQUFHSix3REFBVyxFQUE1Qjs7QUFDQSxxQkFBeUJDLHdEQUFXLENBQUMsVUFBQ0ksS0FBRDtBQUFBLFdBQVNBLEtBQUssQ0FBQ0MsTUFBZjtBQUFBLEdBQUQsQ0FBcEM7QUFBQSxNQUFPQyxjQUFQLGdCQUFPQSxjQUFQOztBQUNBLHNCQUFhTix3REFBVyxDQUFDLFVBQUNJLEtBQUQ7QUFBQSxXQUFTQSxLQUFLLENBQUNHLElBQWY7QUFBQSxHQUFELENBQXhCO0FBQUEsTUFBT0EsSUFBUCxpQkFBT0EsSUFBUDs7QUFFQSxNQUFNQyxTQUFTLEdBQUMsU0FBVkEsU0FBVSxDQUFDQyxDQUFELEVBQUs7QUFDakI7QUFDQUMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlKLElBQVo7QUFDQUcsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlMLGNBQVo7QUFDQUgsSUFBQUEsUUFBUSxDQUFDRixxRUFBbUIsQ0FBQ0ssY0FBRCxDQUFwQixDQUFSO0FBQ0gsR0FMRDs7QUFNQSxzQkFDSTtBQUFBLDRCQUNBLDhEQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQSxlQUVBO0FBQUEsZ0JBQU1BO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZBLGVBR0E7QUFBUSxhQUFPLEVBQUVFLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEE7QUFBQSxrQkFESjtBQU9ILENBbEJEOztHQUFNTjtVQUNlSCxzREFDUUMsc0RBQ1pBOzs7QUFpQmpCLCtEQUFlRSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBUaGVtZUxheW91dCBmcm9tICcuLi9Db21wb25lbnRzL0xheW91dHMvVGhlbWVMYXlvdXQnXHJcbmltcG9ydCBSb290UHJvdmlkZXIgZnJvbSAnLi4vUHJvdmlkZXJzL3Jvb3RQcm92aWRlcidcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCx1c2VTZWxlY3Rvcn0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7cGx1c19udW1iZXJfcmVxdWVzdH0gZnJvbSAnLi4vcmVkdWNlcnMvbnVtYmVyJ1xyXG5jb25zdCBpbmRleD0oKT0+e1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3Qge2N1cnJlbnRfbnVtYmVyfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLm51bWJlcik7XHJcbiAgICBjb25zdCB7cG9zdH09dXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUucG9zdClcclxuICAgIFxyXG4gICAgY29uc3QgYnRuX2NsaWNrPShlKT0+e1xyXG4gICAgICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwb3N0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50X251bWJlcilcclxuICAgICAgICBkaXNwYXRjaChwbHVzX251bWJlcl9yZXF1ZXN0KGN1cnJlbnRfbnVtYmVyKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8Um9vdFByb3ZpZGVyLz5cclxuICAgICAgICA8ZGl2PntjdXJyZW50X251bWJlcn08L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2J0bl9jbGlja30+KzwvYnV0dG9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXgiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJUaGVtZUxheW91dCIsIlJvb3RQcm92aWRlciIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJwbHVzX251bWJlcl9yZXF1ZXN0IiwiaW5kZXgiLCJkaXNwYXRjaCIsInN0YXRlIiwibnVtYmVyIiwiY3VycmVudF9udW1iZXIiLCJwb3N0IiwiYnRuX2NsaWNrIiwiZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9