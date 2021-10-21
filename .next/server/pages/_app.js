"use strict";
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./Providers/createCtx.js":
/*!********************************!*\
  !*** ./Providers/createCtx.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../saga */ "./saga/index.jsx");







const configureStore = () => {
  const sagaMiddlewares = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();
  const Middlewares = [sagaMiddlewares];
  const enhancer =  false ? 0 : (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)(...Middlewares));
  const Store = (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_4__.default, enhancer);
  Store.sagaTask = sagaMiddlewares.run(_saga__WEBPACK_IMPORTED_MODULE_5__.default); // serverside rendering

  return Store;
};

const wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.createWrapper)(configureStore, {
  debug: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wrapper);

/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Providers_createCtx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Providers/createCtx */ "./Providers/createCtx.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\SH\\Desktop\\React_saga\\pages\\_app.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import Head from 'next/head';




const App = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Providers_createCtx__WEBPACK_IMPORTED_MODULE_0__.default.withRedux(App));

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./reducers/post.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./number */ "./reducers/number.js");






const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__.HYDRATE:
      return action.payload;

    default:
      {
        const combineReducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
          number: _number__WEBPACK_IMPORTED_MODULE_4__.default,
          post: _post__WEBPACK_IMPORTED_MODULE_3__.default
        });
        return combineReducer(state, action);
      }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);

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

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "GET_POST_REQUEST": () => (/* binding */ GET_POST_REQUEST),
/* harmony export */   "GET_POST_SUCCESS": () => (/* binding */ GET_POST_SUCCESS),
/* harmony export */   "GET_POST_FAIL": () => (/* binding */ GET_POST_FAIL),
/* harmony export */   "GET_POST": () => (/* binding */ GET_POST),
/* harmony export */   "GET_POST_DETAIL_REQUEST": () => (/* binding */ GET_POST_DETAIL_REQUEST),
/* harmony export */   "GET_POST_DETAIL_SUCCESS": () => (/* binding */ GET_POST_DETAIL_SUCCESS),
/* harmony export */   "GET_POST_DETAIL_FAIL": () => (/* binding */ GET_POST_DETAIL_FAIL),
/* harmony export */   "GET_POST_DETAIL": () => (/* binding */ GET_POST_DETAIL),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  posts: [],
  postDetail: null,
  loading: false
};
/* Redux Actions */
// 상수로 설정, 오류 발생 시 찾기가 편함

const GET_POST_REQUEST = "GET_POST_REQUEST";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_FAIL = "GET_POST_FAIL";
const GET_POST = () => {
  return {
    type: GET_POST_REQUEST
  };
};
const GET_POST_DETAIL_REQUEST = "GET_POST_DETAIL_REQUEST";
const GET_POST_DETAIL_SUCCESS = "GET_POST_DETAIL_SUCCESS";
const GET_POST_DETAIL_FAIL = "GET_POST_DETAIL_FAIL";
const GET_POST_DETAIL = data => {
  return {
    type: GET_POST_DETAIL_REQUEST,
    data
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_REQUEST:
      console.log('P REQUEST');
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case GET_POST_SUCCESS:
      console.log('P SUCCESS');
      return _objectSpread(_objectSpread({}, state), {}, {
        posts: [...state.posts, ...action.data],
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);

/***/ }),

/***/ "./saga/index.jsx":
/*!************************!*\
  !*** ./saga/index.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rootSaga)
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _postSaga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postSaga */ "./saga/postSaga.jsx");


function* rootSaga() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(_postSaga__WEBPACK_IMPORTED_MODULE_1__.default) // 안의 인자값(함수)를 실행시키는 역할
  ]);
}

/***/ }),

/***/ "./saga/postSaga.jsx":
/*!***************************!*\
  !*** ./saga/postSaga.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ postSaga)
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");


 // if                            // else
// let BaseURL = process.env.NODE_ENV.backURL || 'http://localhost:3001';

let BaseURL = "development".backURL || 'https://jsonplaceholder.typicode.com';

async function getPostAPI(data = "") {
  const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`${BaseURL}/posts/${data}`);
  return response;
}

function* getPosts() {
  // API 통신, Web Server와 통신을 하게 됨
  try {
    const {
      data
    } = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(getPostAPI); // console.log('postSaga..s data : ', data);

    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.GET_POST_SUCCESS,
      data
    });
  } catch (e) {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.GET_POST_FAIL,
      data: 'ERROR'
    });
  }
}

function* getPostDetail(action) {
  try {
    const {
      data
    } = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(getPostAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.GET_POST_DETAIL_SUCCESS,
      data
    });
  } catch (e) {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__.GET_POST_DETAIL_FAIL,
      data: 'ERROR'
    });
  }
}

function* watchPosts() {
  // takeLatest == 마지막에 대한 요청만 보내는
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_2__.GET_POST_REQUEST, getPosts); // 위 아래 같은 코드
  // if (actionChannel.type == "GET_POST_REQUEST"){
  //     getPosts()
  // }
}

function* watchPostDetail() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_2__.GET_POST_DETAIL_REQUEST, getPostDetail);
}

function* postSaga() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchPosts), // 안의 인자값(함수)를 실행시키는 역할
  (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchPostDetail)]);
}

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("redux-saga/effects");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0X3NhZ2EvLi9Qcm92aWRlcnMvY3JlYXRlQ3R4LmpzIiwid2VicGFjazovL3JlYWN0X3NhZ2EvLi9wYWdlcy9fYXBwLmpzeCIsIndlYnBhY2s6Ly9yZWFjdF9zYWdhLy4vcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVhY3Rfc2FnYS8uL3JlZHVjZXJzL251bWJlci5qcyIsIndlYnBhY2s6Ly9yZWFjdF9zYWdhLy4vcmVkdWNlcnMvcG9zdC5qcyIsIndlYnBhY2s6Ly9yZWFjdF9zYWdhLy4vc2FnYS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vcmVhY3Rfc2FnYS8uL3NhZ2EvcG9zdFNhZ2EuanN4Iiwid2VicGFjazovL3JlYWN0X3NhZ2EvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL3JlYWN0X3NhZ2EvZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly9yZWFjdF9zYWdhL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9yZWFjdF9zYWdhL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vcmVhY3Rfc2FnYS9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vcmVhY3Rfc2FnYS9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovL3JlYWN0X3NhZ2EvZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vcmVhY3Rfc2FnYS9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIjtcclxuaW1wb3J0IGNyZWF0ZVNhZ2EgZnJvbSAncmVkdXgtc2FnYSc7XHJcblxyXG5pbXBvcnQgcmVkdWNlIGZyb20gJy4uL3JlZHVjZXJzJztcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3NhZ2EnO1xyXG5cclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzYWdhTWlkZGxld2FyZXMgPSBjcmVhdGVTYWdhKCk7XHJcbiAgICBjb25zdCBNaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZXNdO1xyXG4gICAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXHJcbiAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLk1pZGRsZXdhcmVzKSlcclxuICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4uTWlkZGxld2FyZXMpKVxyXG5cclxuICAgIGNvbnN0IFN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlLCBlbmhhbmNlcik7XHJcbiAgICBTdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlcy5ydW4ocm9vdFNhZ2EpOyAvLyBzZXJ2ZXJzaWRlIHJlbmRlcmluZ1xyXG5cclxuICAgIHJldHVybiBTdG9yZTtcclxufVxyXG5cclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHtcclxuICAgIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjsiLCJpbXBvcnQgd3JhcHBlciBmcm9tIFwiLi4vUHJvdmlkZXJzL2NyZWF0ZUN0eFwiO1xyXG5cclxuLy8gaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmNvbnN0IEFwcD0oe0NvbXBvbmVudCxwYWdlUHJvcHN9KT0+e1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD4gICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30vPnsvKuyasOumrOqwgCDrp4zrk6Ag66qo65OgIOqyg+ydtCBjb21wb25lbnRz7JeQIOychOy5mO2VnOuLpC4gICovfVxyXG4gXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoQXBwKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgcG9zdCBmcm9tICcuL3Bvc3QnO1xyXG5pbXBvcnQgbnVtYmVyIGZyb20gJy4vbnVtYmVyJztcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgZGVmYXVsdDp7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbWJpbmVSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgICAgICAgICAgICAgIG51bWJlcixwb3N0XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiBjb21iaW5lUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyOyIsImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBjdXJyZW50X251bWJlcjoxXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwbHVzX251bWJlciA9IFwicGx1c19udW1iZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBwbHVzX251bWJlcl9yZXF1ZXN0ID0gZGF0YSA9PiB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTogcGx1c19udW1iZXIsXHJcbiAgICAgICAgZGF0YSxcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygncmVkdWNlcuuTpOyWtOyYtCcpXHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgcGx1c19udW1iZXI6e1xyXG4gICAgICAgICAgICBsZXQgZGF0YT1hY3Rpb24uZGF0YSsxO1xyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRfbnVtYmVyOmRhdGEsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDp7XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGV9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBwb3N0czogW10sXHJcbiAgICBwb3N0RGV0YWlsOiBudWxsLFxyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbn1cclxuXHJcbi8qIFJlZHV4IEFjdGlvbnMgKi9cclxuLy8g7IOB7IiY66GcIOyEpOyglSwg7Jik66WYIOuwnOyDnSDsi5wg7LC+6riw6rCAIO2OuO2VqFxyXG5leHBvcnQgY29uc3QgR0VUX1BPU1RfUkVRVUVTVCA9IFwiR0VUX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgR0VUX1BPU1RfU1VDQ0VTUyA9IFwiR0VUX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX1BPU1RfRkFJTCA9IFwiR0VUX1BPU1RfRkFJTFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9QT1NUID0gKCkgPT4ge1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6IEdFVF9QT1NUX1JFUVVFU1QsXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfUE9TVF9ERVRBSUxfUkVRVUVTVCA9IFwiR0VUX1BPU1RfREVUQUlMX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9QT1NUX0RFVEFJTF9TVUNDRVNTID0gXCJHRVRfUE9TVF9ERVRBSUxfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX1BPU1RfREVUQUlMX0ZBSUwgPSBcIkdFVF9QT1NUX0RFVEFJTF9GQUlMXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1BPU1RfREVUQUlMID0gZGF0YSA9PiB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTogR0VUX1BPU1RfREVUQUlMX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YSxcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgR0VUX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1AgUkVRVUVTVCcpO1xyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEdFVF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQIFNVQ0NFU1MnKTtcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBwb3N0czpbLi4uc3RhdGUucG9zdHMsIC4uLmFjdGlvbi5kYXRhXSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBHRVRfUE9TVF9GQUlMOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUCBGQUlMJyk7XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEdFVF9QT1NUX0RFVEFJTF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUCBEIFJFUVVFU1QnKTtcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBHRVRfUE9TVF9ERVRBSUxfU1VDQ0VTUzpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1AgRCBTVUNDRVNTJyk7XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgcG9zdERldGFpbDogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgR0VUX1BPU1RfREVUQUlMX0ZBSUw6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQIEQgRkFJTCcpO1xyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsImltcG9ydCB7IGFsbCwgZm9yayB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBwb3N0U2FnYSBmcm9tICcuL3Bvc3RTYWdhJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpe1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHBvc3RTYWdhKSAvLyDslYjsnZgg7J247J6Q6rCSKO2VqOyImCnrpbwg7Iuk7ZaJ7Iuc7YKk64qUIOyXre2VoFxyXG4gICAgXSlcclxufSIsImltcG9ydCB7IGFsbCwgY2FsbCwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBHRVRfUE9TVF9SRVFVRVNULCBHRVRfUE9TVF9TVUNDRVNTLCBHRVRfUE9TVF9GQUlMLFxyXG4gICAgR0VUX1BPU1RfREVUQUlMX1JFUVVFU1QsIEdFVF9QT1NUX0RFVEFJTF9TVUNDRVNTLCBHRVRfUE9TVF9ERVRBSUxfRkFJTCxcclxufSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuXHJcbiAgICAgICAgICAgLy8gaWYgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZWxzZVxyXG4vLyBsZXQgQmFzZVVSTCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WLmJhY2tVUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMSc7XHJcbmxldCBCYXNlVVJMID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYuYmFja1VSTCB8fCAnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFBvc3RBUEkoZGF0YSA9IFwiXCIpe1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7QmFzZVVSTH0vcG9zdHMvJHtkYXRhfWApO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiogZ2V0UG9zdHMoKXtcclxuICAgIC8vIEFQSSDthrXsi6AsIFdlYiBTZXJ2ZXLsmYAg7Ya17Iug7J2EIO2VmOqyjCDrkKhcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwoZ2V0UG9zdEFQSSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3Bvc3RTYWdhLi5zIGRhdGEgOiAnLCBkYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBHRVRfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlKXtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBHRVRfUE9TVF9GQUlMLFxyXG4gICAgICAgICAgICBkYXRhOiAnRVJST1InLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBnZXRQb3N0RGV0YWlsKGFjdGlvbil7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKGdldFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBHRVRfUE9TVF9ERVRBSUxfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZSl7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogR0VUX1BPU1RfREVUQUlMX0ZBSUwsXHJcbiAgICAgICAgICAgIGRhdGE6ICdFUlJPUicsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUG9zdHMoKXtcclxuICAgIC8vIHRha2VMYXRlc3QgPT0g66eI7KeA66eJ7JeQIOuMgO2VnCDsmpTssq3rp4wg67O064K064qUXHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEdFVF9QT1NUX1JFUVVFU1QsIGdldFBvc3RzKTtcclxuXHJcbiAgICAvLyDsnIQg7JWE656YIOqwmeydgCDsvZTrk5xcclxuICAgIC8vIGlmIChhY3Rpb25DaGFubmVsLnR5cGUgPT0gXCJHRVRfUE9TVF9SRVFVRVNUXCIpe1xyXG4gICAgLy8gICAgIGdldFBvc3RzKClcclxuICAgIC8vIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUG9zdERldGFpbCgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChHRVRfUE9TVF9ERVRBSUxfUkVRVUVTVCwgZ2V0UG9zdERldGFpbCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICogcG9zdFNhZ2EoKXtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaFBvc3RzKSwgLy8g7JWI7J2YIOyduOyekOqwkijtlajsiJgp66W8IOyLpO2WieyLnO2CpOuKlCDsl63tlaBcclxuICAgICAgICBmb3JrKHdhdGNoUG9zdERldGFpbCksXHJcbiAgICBdKTtcclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyJdLCJuYW1lcyI6WyJjcmVhdGVXcmFwcGVyIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29tcG9zZSIsImNyZWF0ZVN0b3JlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImNyZWF0ZVNhZ2EiLCJyZWR1Y2UiLCJyb290U2FnYSIsImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmVzIiwiTWlkZGxld2FyZXMiLCJlbmhhbmNlciIsIlN0b3JlIiwic2FnYVRhc2siLCJydW4iLCJ3cmFwcGVyIiwiZGVidWciLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ3aXRoUmVkdXgiLCJSZWFjdCIsImNvbWJpbmVSZWR1Y2VycyIsIkhZRFJBVEUiLCJwb3N0IiwibnVtYmVyIiwicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwiY29tYmluZVJlZHVjZXIiLCJpbml0aWFsU3RhdGUiLCJjdXJyZW50X251bWJlciIsInBsdXNfbnVtYmVyIiwicGx1c19udW1iZXJfcmVxdWVzdCIsImRhdGEiLCJyZWR1Y2VyIiwiY29uc29sZSIsImxvZyIsInBvc3RzIiwicG9zdERldGFpbCIsImxvYWRpbmciLCJHRVRfUE9TVF9SRVFVRVNUIiwiR0VUX1BPU1RfU1VDQ0VTUyIsIkdFVF9QT1NUX0ZBSUwiLCJHRVRfUE9TVCIsIkdFVF9QT1NUX0RFVEFJTF9SRVFVRVNUIiwiR0VUX1BPU1RfREVUQUlMX1NVQ0NFU1MiLCJHRVRfUE9TVF9ERVRBSUxfRkFJTCIsIkdFVF9QT1NUX0RFVEFJTCIsImFsbCIsImZvcmsiLCJwb3N0U2FnYSIsImNhbGwiLCJwdXQiLCJ0YWtlTGF0ZXN0IiwiYXhpb3MiLCJCYXNlVVJMIiwiYmFja1VSTCIsImdldFBvc3RBUEkiLCJyZXNwb25zZSIsImdldCIsImdldFBvc3RzIiwiZSIsImdldFBvc3REZXRhaWwiLCJ3YXRjaFBvc3RzIiwid2F0Y2hQb3N0RGV0YWlsIl0sInNvdXJjZVJvb3QiOiIifQ==