"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./Components/Layouts/Header/header.jsx":
/*!**********************************************!*\
  !*** ./Components/Layouts/Header/header.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_css_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header_css.jsx */ "./Components/Layouts/Header/header_css.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\SH\\Desktop\\React_saga\\Components\\Layouts\\Header\\header.jsx";





const Header = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_header_css_jsx__WEBPACK_IMPORTED_MODULE_1__.Menu, {
      children: "\uC6B0\uB9AC\uD300"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_header_css_jsx__WEBPACK_IMPORTED_MODULE_1__.Menu, {
      children: "\uD30C\uC774\uD305"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_header_css_jsx__WEBPACK_IMPORTED_MODULE_1__.Menu, {
      children: "\uCD5C\uACE0\uC57C!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./Components/Layouts/Header/header_css.jsx":
/*!**************************************************!*\
  !*** ./Components/Layouts/Header/header_css.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu": () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Menu = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "header_css__Menu",
  componentId: "sc-1q7k1s6-0"
})(["background:red;width:500px;"]);

/***/ }),

/***/ "./Components/Layouts/ThemeLayout.jsx":
/*!********************************************!*\
  !*** ./Components/Layouts/ThemeLayout.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_header_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header/header.jsx */ "./Components/Layouts/Header/header.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\SH\\Desktop\\React_saga\\Components\\Layouts\\ThemeLayout.jsx";





const ThemeLayout = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_Header_header_jsx__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 12
    }, undefined), children]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeLayout);

/***/ }),

/***/ "./Providers/rootProvider.js":
/*!***********************************!*\
  !*** ./Providers/rootProvider.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Layouts_ThemeLayout_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Layouts/ThemeLayout.jsx */ "./Components/Layouts/ThemeLayout.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\SH\\Desktop\\React_saga\\Providers\\rootProvider.js";





const RootProvider = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_Components_Layouts_ThemeLayout_jsx__WEBPACK_IMPORTED_MODULE_1__.default, {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RootProvider);

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Layouts_ThemeLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Layouts/ThemeLayout */ "./Components/Layouts/ThemeLayout.jsx");
/* harmony import */ var _Providers_rootProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Providers/rootProvider */ "./Providers/rootProvider.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/number */ "./reducers/number.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\SH\\Desktop\\React_saga\\pages\\index.jsx";








const index = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const {
    current_number
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.number);
  const post = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.post);

  const btn_click = e => {
    e.preventDefault();
    console.log(post);
    console.log(current_number);
    dispatch((0,_reducers_number__WEBPACK_IMPORTED_MODULE_4__.plus_number_request)(current_number));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Providers_rootProvider__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      children: current_number
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
      onClick: btn_click,
      children: "+"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);

/***/ }),

/***/ "./reducers/number.js":
/*!****************************!*\
  !*** ./reducers/number.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "plus_number": () => (/* binding */ plus_number),
/* harmony export */   "plus_number_request": () => (/* binding */ plus_number_request),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  current_number: 1
};
const plus_number = "plus_number";
const plus_number_request = data => {
  return {
    type: plus_number,
    data
  };
};

const reducer = (state = initialState, action) => {
  console.log('reducer들어옴');

  switch (action.type) {
    case plus_number:
      {
        let data = action.data + 1;
        return _objectSpread(_objectSpread({}, state), {}, {
          current_number: data
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWQ7QUFDSSxTQUFLRixXQUFMO0FBQWlCO0FBQ2IsWUFBSUMsSUFBSSxHQUFDRyxNQUFNLENBQUNILElBQVAsR0FBWSxDQUFyQjtBQUNBLCtDQUNPVixLQURQO0FBRUlELFVBQUFBLGNBQWMsRUFBQ1c7QUFGbkI7QUFJSDs7QUFDRDtBQUFRO0FBQ0osaUNBQVdWLEtBQVg7QUFDSDtBQVZMO0FBWUgsQ0FkRDs7QUFnQkEsaUVBQWVZLE9BQWY7Ozs7Ozs7Ozs7QUM3QkE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdF9zYWdhLy4vQ29tcG9uZW50cy9MYXlvdXRzL0hlYWRlci9oZWFkZXIuanN4Iiwid2VicGFjazovL3JlYWN0X3NhZ2EvLi9Db21wb25lbnRzL0xheW91dHMvSGVhZGVyL2hlYWRlcl9jc3MuanN4Iiwid2VicGFjazovL3JlYWN0X3NhZ2EvLi9Db21wb25lbnRzL0xheW91dHMvVGhlbWVMYXlvdXQuanN4Iiwid2VicGFjazovL3JlYWN0X3NhZ2EvLi9Qcm92aWRlcnMvcm9vdFByb3ZpZGVyLmpzIiwid2VicGFjazovL3JlYWN0X3NhZ2EvLi9wYWdlcy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vcmVhY3Rfc2FnYS8uL3JlZHVjZXJzL251bWJlci5qcyIsIndlYnBhY2s6Ly9yZWFjdF9zYWdhL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9yZWFjdF9zYWdhL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly9yZWFjdF9zYWdhL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vcmVhY3Rfc2FnYS9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtNZW51fSBmcm9tICcuL2hlYWRlcl9jc3MuanN4JztcclxuXHJcbmNvbnN0IEhlYWRlcj0oKT0+e1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPE1lbnU+7Jqw66as7YyAPC9NZW51PlxyXG4gICAgICAgIDxNZW51Pu2MjOydtO2MhTwvTWVudT5cclxuICAgICAgICA8TWVudT7stZzqs6DslbwhPC9NZW51PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcclxuXHJcbiIsImltcG9ydCBTdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lbnU9U3R5bGVkLmRpdmBcclxuICAgIGJhY2tncm91bmQ6cmVkO1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG5gIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlci9oZWFkZXIuanN4JztcclxuXHJcbmNvbnN0IFRoZW1lTGF5b3V0ID0gKHtjaGlsZHJlbn0pID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgIDxIZWFkZXIvPlxyXG4gICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGhlbWVMYXlvdXQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRoZW1lTGF5b3V0IGZyb20gJy4uL0NvbXBvbmVudHMvTGF5b3V0cy9UaGVtZUxheW91dC5qc3gnO1xyXG5cclxuY29uc3QgUm9vdFByb3ZpZGVyID0gKHtjaGlsZHJlbn0pID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8VGhlbWVMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvVGhlbWVMYXlvdXQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvb3RQcm92aWRlcjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBUaGVtZUxheW91dCBmcm9tICcuLi9Db21wb25lbnRzL0xheW91dHMvVGhlbWVMYXlvdXQnXHJcbmltcG9ydCBSb290UHJvdmlkZXIgZnJvbSAnLi4vUHJvdmlkZXJzL3Jvb3RQcm92aWRlcidcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCx1c2VTZWxlY3Rvcn0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7cGx1c19udW1iZXJfcmVxdWVzdH0gZnJvbSAnLi4vcmVkdWNlcnMvbnVtYmVyJ1xyXG5jb25zdCBpbmRleD0oKT0+e1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3Qge2N1cnJlbnRfbnVtYmVyfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLm51bWJlcik7XHJcbiAgICBjb25zdCBwb3N0PXVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLnBvc3QpXHJcbiAgICBcclxuICAgIGNvbnN0IGJ0bl9jbGljaz0oZSk9PntcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocG9zdCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudF9udW1iZXIpXHJcbiAgICAgICAgZGlzcGF0Y2gocGx1c19udW1iZXJfcmVxdWVzdChjdXJyZW50X251bWJlcikpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPFJvb3RQcm92aWRlci8+XHJcbiAgICAgICAgPGRpdj57Y3VycmVudF9udW1iZXJ9PC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtidG5fY2xpY2t9Pis8L2J1dHRvbj5cclxuICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4IiwiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGN1cnJlbnRfbnVtYmVyOjFcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBsdXNfbnVtYmVyID0gXCJwbHVzX251bWJlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBsdXNfbnVtYmVyX3JlcXVlc3QgPSBkYXRhID0+IHtcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOiBwbHVzX251bWJlcixcclxuICAgICAgICBkYXRhLFxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdyZWR1Y2Vy65Ok7Ja07Ji0JylcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBwbHVzX251bWJlcjp7XHJcbiAgICAgICAgICAgIGxldCBkYXRhPWFjdGlvbi5kYXRhKzE7XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudF9udW1iZXI6ZGF0YSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OntcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZX1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsIk1lbnUiLCJIZWFkZXIiLCJTdHlsZWQiLCJkaXYiLCJUaGVtZUxheW91dCIsImNoaWxkcmVuIiwiUm9vdFByb3ZpZGVyIiwidXNlRWZmZWN0IiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInBsdXNfbnVtYmVyX3JlcXVlc3QiLCJpbmRleCIsImRpc3BhdGNoIiwiY3VycmVudF9udW1iZXIiLCJzdGF0ZSIsIm51bWJlciIsInBvc3QiLCJidG5fY2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiaW5pdGlhbFN0YXRlIiwicGx1c19udW1iZXIiLCJkYXRhIiwidHlwZSIsInJlZHVjZXIiLCJhY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9