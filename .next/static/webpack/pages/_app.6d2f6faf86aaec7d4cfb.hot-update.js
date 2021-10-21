"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./reducers/number.js":
/*!****************************!*\
  !*** ./reducers/number.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; },
/* harmony export */   "plus_number": function() { return /* binding */ plus_number; },
/* harmony export */   "plus_number_request": function() { return /* binding */ plus_number_request; }
/* harmony export */ });
/* harmony import */ var C_Users_SH_Desktop_React_saga_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* module decorator */ module = __webpack_require__.hmd(module);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_SH_Desktop_React_saga_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  current_number: 1
};
var plus_number = "plus_number";
var plus_number_request = function plus_number_request(data) {
  return {
    type: plus_number,
    data: data
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  console.log('reducer들어옴');

  switch (action.type) {
    case plus_number:
      {
        console.log('들어옴');
        var data = action.data + 1;
        console.log('data', data);
        return _objectSpread(_objectSpread({}, state), data);
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC42ZDJmNmZhZjg2YWFlYzdkNGNmYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsWUFBWSxHQUFHO0FBQ3hCQyxFQUFBQSxjQUFjLEVBQUM7QUFEUyxDQUFyQjtBQUlBLElBQU1DLFdBQVcsR0FBRyxhQUFwQjtBQUVBLElBQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQUMsSUFBSSxFQUFJO0FBQ3ZDLFNBQU07QUFDRkMsSUFBQUEsSUFBSSxFQUFFSCxXQURKO0FBRUZFLElBQUFBLElBQUksRUFBSkE7QUFGRSxHQUFOO0FBSUgsQ0FMTTs7QUFPUCxJQUFNRSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFrQztBQUFBLE1BQWpDQyxLQUFpQyx1RUFBekJQLFlBQXlCO0FBQUEsTUFBWFEsTUFBVztBQUM5Q0MsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWjs7QUFDQSxVQUFPRixNQUFNLENBQUNILElBQWQ7QUFDSSxTQUFLSCxXQUFMO0FBQWlCO0FBQ2JPLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVo7QUFDQSxZQUFJTixJQUFJLEdBQUNJLE1BQU0sQ0FBQ0osSUFBUCxHQUFZLENBQXJCO0FBQ0FLLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBbUJOLElBQW5CO0FBQ0EsK0NBQ09HLEtBRFAsR0FFT0gsSUFGUDtBQUlIOztBQUNEO0FBQVE7QUFDSixpQ0FBV0csS0FBWDtBQUNIO0FBWkw7QUFjSCxDQWhCRDs7QUFrQkEsK0RBQWVELE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvbnVtYmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBjdXJyZW50X251bWJlcjoxXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwbHVzX251bWJlciA9IFwicGx1c19udW1iZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBwbHVzX251bWJlcl9yZXF1ZXN0ID0gZGF0YSA9PiB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTogcGx1c19udW1iZXIsXHJcbiAgICAgICAgZGF0YSxcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygncmVkdWNlcuuTpOyWtOyYtCcpXHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgcGx1c19udW1iZXI6e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn65Ok7Ja07Ji0JylcclxuICAgICAgICAgICAgbGV0IGRhdGE9YWN0aW9uLmRhdGErMTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RhdGEnLGRhdGEpXHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OntcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZX1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImN1cnJlbnRfbnVtYmVyIiwicGx1c19udW1iZXIiLCJwbHVzX251bWJlcl9yZXF1ZXN0IiwiZGF0YSIsInR5cGUiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==