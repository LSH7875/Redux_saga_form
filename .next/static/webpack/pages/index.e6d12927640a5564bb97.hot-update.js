"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

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

  switch (action.type) {
    case plus_number:
      {
        var data = action.data + 1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTZkMTI5Mjc2NDBhNTU2NGJiOTcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFlBQVksR0FBRztBQUN4QkMsRUFBQUEsY0FBYyxFQUFDO0FBRFMsQ0FBckI7QUFJQSxJQUFNQyxXQUFXLEdBQUcsYUFBcEI7QUFFQSxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUFDLElBQUksRUFBSTtBQUN2QyxTQUFNO0FBQ0ZDLElBQUFBLElBQUksRUFBRUgsV0FESjtBQUVGRSxJQUFBQSxJQUFJLEVBQUpBO0FBRkUsR0FBTjtBQUlILENBTE07O0FBT1AsSUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBa0M7QUFBQSxNQUFqQ0MsS0FBaUMsdUVBQXpCUCxZQUF5QjtBQUFBLE1BQVhRLE1BQVc7O0FBQzlDLFVBQU9BLE1BQU0sQ0FBQ0gsSUFBZDtBQUNJLFNBQUtILFdBQUw7QUFBaUI7QUFDYixZQUFJRSxJQUFJLEdBQUNJLE1BQU0sQ0FBQ0osSUFBUCxHQUFZLENBQXJCO0FBQ0EsK0NBQ09HLEtBRFAsR0FFT0gsSUFGUDtBQUlIOztBQUNEO0FBQVE7QUFDSixpQ0FBV0csS0FBWDtBQUNIO0FBVkw7QUFZSCxDQWJEOztBQWVBLCtEQUFlRCxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3JlZHVjZXJzL251bWJlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgY3VycmVudF9udW1iZXI6MVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcGx1c19udW1iZXIgPSBcInBsdXNfbnVtYmVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcGx1c19udW1iZXJfcmVxdWVzdCA9IGRhdGEgPT4ge1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6IHBsdXNfbnVtYmVyLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIHBsdXNfbnVtYmVyOntcclxuICAgICAgICAgICAgbGV0IGRhdGE9YWN0aW9uLmRhdGErMTtcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6e1xyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiY3VycmVudF9udW1iZXIiLCJwbHVzX251bWJlciIsInBsdXNfbnVtYmVyX3JlcXVlc3QiLCJkYXRhIiwidHlwZSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=