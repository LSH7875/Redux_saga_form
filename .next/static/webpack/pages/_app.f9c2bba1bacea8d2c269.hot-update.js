"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; },
/* harmony export */   "GET_POST_REQUEST": function() { return /* binding */ GET_POST_REQUEST; },
/* harmony export */   "GET_POST_SUCCESS": function() { return /* binding */ GET_POST_SUCCESS; },
/* harmony export */   "GET_POST_FAIL": function() { return /* binding */ GET_POST_FAIL; },
/* harmony export */   "GET_POST": function() { return /* binding */ GET_POST; },
/* harmony export */   "GET_POST_DETAIL_REQUEST": function() { return /* binding */ GET_POST_DETAIL_REQUEST; },
/* harmony export */   "GET_POST_DETAIL_SUCCESS": function() { return /* binding */ GET_POST_DETAIL_SUCCESS; },
/* harmony export */   "GET_POST_DETAIL_FAIL": function() { return /* binding */ GET_POST_DETAIL_FAIL; },
/* harmony export */   "GET_POST_DETAIL": function() { return /* binding */ GET_POST_DETAIL; }
/* harmony export */ });
/* harmony import */ var C_Users_SH_Desktop_React_saga_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_SH_Desktop_React_saga_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* module decorator */ module = __webpack_require__.hmd(module);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_SH_Desktop_React_saga_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  number: 1
};
/* Redux Actions */
// 상수로 설정, 오류 발생 시 찾기가 편함

var GET_POST_REQUEST = "GET_POST_REQUEST";
var GET_POST_SUCCESS = "GET_POST_SUCCESS";
var GET_POST_FAIL = "GET_POST_FAIL";
var GET_POST = function GET_POST() {
  return {
    type: GET_POST_REQUEST
  };
};
_c = GET_POST;
var GET_POST_DETAIL_REQUEST = "GET_POST_DETAIL_REQUEST";
var GET_POST_DETAIL_SUCCESS = "GET_POST_DETAIL_SUCCESS";
var GET_POST_DETAIL_FAIL = "GET_POST_DETAIL_FAIL";
var GET_POST_DETAIL = function GET_POST_DETAIL(data) {
  return {
    type: GET_POST_DETAIL_REQUEST,
    data: data
  };
};
_c2 = GET_POST_DETAIL;

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GET_POST_REQUEST:
      console.log('P REQUEST');
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case GET_POST_SUCCESS:
      console.log('P SUCCESS');
      return _objectSpread(_objectSpread({}, state), {}, {
        posts: [].concat((0,C_Users_SH_Desktop_React_saga_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(state.posts), (0,C_Users_SH_Desktop_React_saga_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(action.data)),
        loading: false
      });

    case GET_POST_FAIL:
      console.log('P FAIL');
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false
      });

    case GET_POST_DETAIL_REQUEST:
      console.log('P D REQUEST');
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case GET_POST_DETAIL_SUCCESS:
      console.log('P D SUCCESS');
      return _objectSpread(_objectSpread({}, state), {}, {
        postDetail: action.data,
        loading: false
      });

    case GET_POST_DETAIL_FAIL:
      console.log('P D FAIL');
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

var _c, _c2;

$RefreshReg$(_c, "GET_POST");
$RefreshReg$(_c2, "GET_POST_DETAIL");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5mOWMyYmJhMWJhY2VhOGQyYzI2OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxZQUFZLEdBQUc7QUFDeEJDLEVBQUFBLE1BQU0sRUFBQztBQURpQixDQUFyQjtBQUlQO0FBQ0E7O0FBQ08sSUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsSUFBTUMsYUFBYSxHQUFHLGVBQXRCO0FBRUEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUMxQixTQUFNO0FBQ0ZDLElBQUFBLElBQUksRUFBRUo7QUFESixHQUFOO0FBR0gsQ0FKTTtLQUFNRztBQU1OLElBQU1FLHVCQUF1QixHQUFHLHlCQUFoQztBQUNBLElBQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUNBLElBQU1DLG9CQUFvQixHQUFHLHNCQUE3QjtBQUVBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsSUFBSSxFQUFJO0FBQ25DLFNBQU07QUFDRkwsSUFBQUEsSUFBSSxFQUFFQyx1QkFESjtBQUVGSSxJQUFBQSxJQUFJLEVBQUpBO0FBRkUsR0FBTjtBQUlILENBTE07TUFBTUQ7O0FBT2IsSUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBa0M7QUFBQSxNQUFqQ0MsS0FBaUMsdUVBQXpCYixZQUF5QjtBQUFBLE1BQVhjLE1BQVc7O0FBQzlDLFVBQU9BLE1BQU0sQ0FBQ1IsSUFBZDtBQUNJLFNBQUtKLGdCQUFMO0FBQ0lhLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDQSw2Q0FDT0gsS0FEUDtBQUVJSSxRQUFBQSxPQUFPLEVBQUU7QUFGYjs7QUFJSixTQUFLZCxnQkFBTDtBQUNJWSxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0EsNkNBQ09ILEtBRFA7QUFFSUssUUFBQUEsS0FBSyw0SUFBS0wsS0FBSyxDQUFDSyxLQUFYLG1JQUFxQkosTUFBTSxDQUFDSCxJQUE1QixFQUZUO0FBR0lNLFFBQUFBLE9BQU8sRUFBRTtBQUhiOztBQUtKLFNBQUtiLGFBQUw7QUFDSVcsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNBLDZDQUNPSCxLQURQO0FBRUlJLFFBQUFBLE9BQU8sRUFBRTtBQUZiOztBQUlKLFNBQUtWLHVCQUFMO0FBQ0lRLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFDQSw2Q0FDT0gsS0FEUDtBQUVJSSxRQUFBQSxPQUFPLEVBQUU7QUFGYjs7QUFJSixTQUFLVCx1QkFBTDtBQUNJTyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBQ0EsNkNBQ09ILEtBRFA7QUFFSU0sUUFBQUEsVUFBVSxFQUFFTCxNQUFNLENBQUNILElBRnZCO0FBR0lNLFFBQUFBLE9BQU8sRUFBRTtBQUhiOztBQUtKLFNBQUtSLG9CQUFMO0FBQ0lNLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7QUFDQSw2Q0FDT0gsS0FEUDtBQUVJSSxRQUFBQSxPQUFPLEVBQUU7QUFGYjs7QUFJSjtBQUNJLGFBQU9KLEtBQVA7QUF4Q1I7QUEwQ0gsQ0EzQ0Q7O0FBNkNBLCtEQUFlRCxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3JlZHVjZXJzL3Bvc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG51bWJlcjoxXHJcbn1cclxuXHJcbi8qIFJlZHV4IEFjdGlvbnMgKi9cclxuLy8g7IOB7IiY66GcIOyEpOyglSwg7Jik66WYIOuwnOyDnSDsi5wg7LC+6riw6rCAIO2OuO2VqFxyXG5leHBvcnQgY29uc3QgR0VUX1BPU1RfUkVRVUVTVCA9IFwiR0VUX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgR0VUX1BPU1RfU1VDQ0VTUyA9IFwiR0VUX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX1BPU1RfRkFJTCA9IFwiR0VUX1BPU1RfRkFJTFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9QT1NUID0gKCkgPT4ge1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6IEdFVF9QT1NUX1JFUVVFU1QsXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfUE9TVF9ERVRBSUxfUkVRVUVTVCA9IFwiR0VUX1BPU1RfREVUQUlMX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9QT1NUX0RFVEFJTF9TVUNDRVNTID0gXCJHRVRfUE9TVF9ERVRBSUxfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX1BPU1RfREVUQUlMX0ZBSUwgPSBcIkdFVF9QT1NUX0RFVEFJTF9GQUlMXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1BPU1RfREVUQUlMID0gZGF0YSA9PiB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTogR0VUX1BPU1RfREVUQUlMX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YSxcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgR0VUX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1AgUkVRVUVTVCcpO1xyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEdFVF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQIFNVQ0NFU1MnKTtcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBwb3N0czpbLi4uc3RhdGUucG9zdHMsIC4uLmFjdGlvbi5kYXRhXSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBHRVRfUE9TVF9GQUlMOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUCBGQUlMJyk7XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEdFVF9QT1NUX0RFVEFJTF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUCBEIFJFUVVFU1QnKTtcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBHRVRfUE9TVF9ERVRBSUxfU1VDQ0VTUzpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1AgRCBTVUNDRVNTJyk7XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgcG9zdERldGFpbDogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgR0VUX1BPU1RfREVUQUlMX0ZBSUw6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQIEQgRkFJTCcpO1xyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJudW1iZXIiLCJHRVRfUE9TVF9SRVFVRVNUIiwiR0VUX1BPU1RfU1VDQ0VTUyIsIkdFVF9QT1NUX0ZBSUwiLCJHRVRfUE9TVCIsInR5cGUiLCJHRVRfUE9TVF9ERVRBSUxfUkVRVUVTVCIsIkdFVF9QT1NUX0RFVEFJTF9TVUNDRVNTIiwiR0VUX1BPU1RfREVUQUlMX0ZBSUwiLCJHRVRfUE9TVF9ERVRBSUwiLCJkYXRhIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsImxvYWRpbmciLCJwb3N0cyIsInBvc3REZXRhaWwiXSwic291cmNlUm9vdCI6IiJ9