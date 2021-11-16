/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/Register";
exports.ids = ["pages/Register"];
exports.modules = {

/***/ "./components/templates/RegisterPageTemplate.tsx":
/*!*******************************************************!*\
  !*** ./components/templates/RegisterPageTemplate.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RegisterPageTemplate; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _atoms_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../atoms/Input */ \"./components/atoms/Input.tsx\");\n/* harmony import */ var _atoms_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/Button */ \"./components/atoms/Button.tsx\");\n/* harmony import */ var _atoms_Img__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../atoms/Img */ \"./components/atoms/Img.tsx\");\n/* harmony import */ var _organisms_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../organisms/Header */ \"./components/organisms/Header.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../firebase/firebase */ \"./firebase/firebase.js\");\n/* harmony import */ var _styles_globalStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/globalStyles */ \"./styles/globalStyles.tsx\");\n/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../api/index */ \"./api/index.tsx\");\n\nvar _jsxFileName = \"/Users/Tony/Desktop/dogBlog/components/templates/RegisterPageTemplate.tsx\";\n\n\n\n\n\n\n\n\n\nfunction RegisterPageTemplate({\n  token\n}) {\n  const {\n    0: image,\n    1: setImage\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n  const {\n    0: createObjectURL,\n    1: setCreateObjectURL\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n  const {\n    0: progress,\n    1: setProgress\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0); //인풋에 사진 선택한것 저장\n\n  const handleChange = e => {\n    if (e.target.files !== null) {\n      const file = e.target.files[0];\n      const fileUrl = URL.createObjectURL(file);\n      setCreateObjectURL(fileUrl);\n      setImage(file);\n    }\n  }; //사진 업로드 기능 및 fcm 메세지 요청\n\n\n  const handleUpload = e => {\n    e.preventDefault();\n    const formData = new FormData();\n    const messaging = _firebase_firebase__WEBPACK_IMPORTED_MODULE_7__.default.messaging();\n    formData.append('file', image);\n    formData.append('sub_id', '1234');\n    const options = {\n      headers: {\n        'Content-Type': 'multipart/form-data'\n      },\n      onUploadProgress: progressEvent => {\n        const {\n          loaded,\n          total\n        } = progressEvent;\n        let percent = Math.round(loaded * 100 / total);\n        setProgress(percent);\n      }\n    };\n    _api_index__WEBPACK_IMPORTED_MODULE_9__.postImgUpload(formData, options).then(res => {\n      if (res.status === 201) {\n        handleFcm();\n        messaging.onMessage(payload => {\n          return alert(payload.notification.title);\n        });\n      }\n    }).catch(error => console.log(error));\n  }; //노드 서버에서 사진이 업로드 성공하면 fcm 요청\n\n\n  const handleFcm = () => {\n    axios__WEBPACK_IMPORTED_MODULE_6___default().get(_api_index__WEBPACK_IMPORTED_MODULE_9__.FCM).then(res => console.log(res)).catch(err => console.log(err));\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_8__.RegisterWrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_organisms_Header__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_Img__WEBPACK_IMPORTED_MODULE_4__.default, {\n      type: \"previewImg\",\n      src: createObjectURL,\n      alt: \"asdf\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_Input__WEBPACK_IMPORTED_MODULE_2__.default, {\n      accept: \"image/*\",\n      handleChange: handleChange,\n      type: \"file\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_Button__WEBPACK_IMPORTED_MODULE_3__.default, {\n      name: \"upload\",\n      onClick: handleUpload\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"progress\", {\n      className: \"registerProgress\",\n      max: \"100\",\n      value: progress\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, this), progress, \"%\"]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 69,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2dCbG9nLy4vY29tcG9uZW50cy90ZW1wbGF0ZXMvUmVnaXN0ZXJQYWdlVGVtcGxhdGUudHN4PzUyODgiXSwibmFtZXMiOlsiUmVnaXN0ZXJQYWdlVGVtcGxhdGUiLCJ0b2tlbiIsImltYWdlIiwic2V0SW1hZ2UiLCJ1c2VTdGF0ZSIsImNyZWF0ZU9iamVjdFVSTCIsInNldENyZWF0ZU9iamVjdFVSTCIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwiZmlsZXMiLCJmaWxlIiwiZmlsZVVybCIsIlVSTCIsImhhbmRsZVVwbG9hZCIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsIm1lc3NhZ2luZyIsImZpcmViYXNlIiwiYXBwZW5kIiwib3B0aW9ucyIsImhlYWRlcnMiLCJvblVwbG9hZFByb2dyZXNzIiwicHJvZ3Jlc3NFdmVudCIsImxvYWRlZCIsInRvdGFsIiwicGVyY2VudCIsIk1hdGgiLCJyb3VuZCIsIkFQSSIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJoYW5kbGVGY20iLCJvbk1lc3NhZ2UiLCJwYXlsb2FkIiwiYWxlcnQiLCJub3RpZmljYXRpb24iLCJ0aXRsZSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPZSxTQUFTQSxvQkFBVCxDQUE4QjtBQUFFQztBQUFGLENBQTlCLEVBQXdEO0FBQ3JFLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsK0NBQVEsQ0FBTSxFQUFOLENBQWxDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLGVBQUQ7QUFBQSxPQUFrQkM7QUFBbEIsTUFBd0NGLCtDQUFRLENBQVMsRUFBVCxDQUF0RDtBQUNBLFFBQU07QUFBQSxPQUFD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RVQ7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLEVBTUdBLFFBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFVRCIsImZpbGUiOiIuL2NvbXBvbmVudHMvdGVtcGxhdGVzL1JlZ2lzdGVyUGFnZVRlbXBsYXRlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgTW91c2VFdmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbnB1dCBmcm9tICcuLi9hdG9tcy9JbnB1dCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2F0b21zL0J1dHRvbic7XG5pbXBvcnQgSW1nIGZyb20gJy4uL2F0b21zL0ltZyc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL29yZ2FuaXNtcy9IZWFkZXInO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBmaXJlYmFzZSBmcm9tICcuLi8uLi9maXJlYmFzZS9maXJlYmFzZSc7XG5pbXBvcnQgKiBhcyBTIGZyb20gJy4uLy4uL3N0eWxlcy9nbG9iYWxTdHlsZXMnO1xuaW1wb3J0ICogYXMgQVBJIGZyb20gJy4uLy4uL2FwaS9pbmRleCc7XG5pbXBvcnQgKiBhcyBUWVBFIGZyb20gJy4uLy4uL2ludGVyZmFjZS9pbmRleCc7XG5cbmludGVyZmFjZSByZWdpc3RlclByb3BzIHtcbiAgdG9rZW46IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVnaXN0ZXJQYWdlVGVtcGxhdGUoeyB0b2tlbiB9OiByZWdpc3RlclByb3BzKSB7XG4gIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGU8YW55PihbXSk7XG4gIGNvbnN0IFtjcmVhdGVPYmplY3RVUkwsIHNldENyZWF0ZU9iamVjdFVSTF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuXG4gIC8v7J247ZKL7JeQIOyCrOynhCDshKDtg53tlZzqsoMg7KCA7J6lXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGlmIChlLnRhcmdldC5maWxlcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgY29uc3QgZmlsZVVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XG4gICAgICBzZXRDcmVhdGVPYmplY3RVUkwoZmlsZVVybCk7XG4gICAgICBzZXRJbWFnZShmaWxlKTtcbiAgICB9XG4gIH07XG5cbiAgLy/sgqzsp4Qg7JeF66Gc65OcIOq4sOuKpSDrsI8gZmNtIOuplOyEuOyngCDsmpTssq1cbiAgY29uc3QgaGFuZGxlVXBsb2FkID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBjb25zdCBtZXNzYWdpbmcgPSBmaXJlYmFzZS5tZXNzYWdpbmcoKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBpbWFnZSk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdzdWJfaWQnLCAnMTIzNCcpO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSdcbiAgICAgIH0sXG4gICAgICBvblVwbG9hZFByb2dyZXNzOiAocHJvZ3Jlc3NFdmVudDogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbG9hZGVkLCB0b3RhbCB9ID0gcHJvZ3Jlc3NFdmVudDtcbiAgICAgICAgbGV0IHBlcmNlbnQgPSBNYXRoLnJvdW5kKChsb2FkZWQgKiAxMDApIC8gdG90YWwpO1xuICAgICAgICBzZXRQcm9ncmVzcyhwZXJjZW50KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIEFQSS5wb3N0SW1nVXBsb2FkKGZvcm1EYXRhLCBvcHRpb25zKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAxKSB7XG4gICAgICAgICAgaGFuZGxlRmNtKCk7XG4gICAgICAgICAgbWVzc2FnaW5nLm9uTWVzc2FnZSgocGF5bG9hZDogVFlQRS5maXJlYmFzZVBheWxvYWQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhbGVydChwYXlsb2FkLm5vdGlmaWNhdGlvbi50aXRsZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICB9O1xuXG4gIC8v64W465OcIOyEnOuyhOyXkOyEnCDsgqzsp4TsnbQg7JeF66Gc65OcIOyEseqzte2VmOuptCBmY20g7JqU7LKtXG4gIGNvbnN0IGhhbmRsZUZjbSA9ICgpID0+IHtcbiAgICBheGlvc1xuICAgICAgLmdldChBUEkuRkNNKVxuICAgICAgLnRoZW4oKHJlcykgPT4gY29uc29sZS5sb2cocmVzKSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxTLlJlZ2lzdGVyV3JhcHBlcj5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxJbWcgdHlwZT1cInByZXZpZXdJbWdcIiBzcmM9e2NyZWF0ZU9iamVjdFVSTH0gYWx0PVwiYXNkZlwiIC8+XG4gICAgICA8SW5wdXQgYWNjZXB0PVwiaW1hZ2UvKlwiIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfSB0eXBlPVwiZmlsZVwiIC8+XG4gICAgICA8QnV0dG9uIG5hbWU9XCJ1cGxvYWRcIiBvbkNsaWNrPXtoYW5kbGVVcGxvYWR9IC8+XG4gICAgICA8cHJvZ3Jlc3MgY2xhc3NOYW1lPVwicmVnaXN0ZXJQcm9ncmVzc1wiIG1heD1cIjEwMFwiIHZhbHVlPXtwcm9ncmVzc30gLz5cbiAgICAgIHtwcm9ncmVzc30lXG4gICAgPC9TLlJlZ2lzdGVyV3JhcHBlcj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/templates/RegisterPageTemplate.tsx\n");

/***/ }),

/***/ "./firebase/firebase.js":
/*!******************************!*\
  !*** ./firebase/firebase.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ \"firebase\");\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);\n\nconst config = {\n  apiKey: 'AIzaSyBRnNF4z4burdQlNpBhbrSZF0fqceNDKjQ',\n  authDomain: 'hm-sprint-tony.firebaseapp.com',\n  databaseURL: 'https://hm-sprint-tony.firebaseio.com',\n  projectId: 'hm-sprint-tony',\n  storageBucket: 'hm-sprint-tony.appspot.com',\n  messagingSenderId: '802846160049',\n  appId: '1:802846160049:web:860eeec063a4181d585e90',\n  measurementId: 'G-ZL9SFR6ZM9'\n};\n\nif (!(firebase__WEBPACK_IMPORTED_MODULE_0___default().apps.length)) {\n  firebase__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(config);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((firebase__WEBPACK_IMPORTED_MODULE_0___default()));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2dCbG9nLy4vZmlyZWJhc2UvZmlyZWJhc2UuanM/MjNiYyJdLCJuYW1lcyI6WyJjb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJmaXJlYmFzZSJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFFQSxNQUFNQSxNQUFNLEdBQUc7QUFDYkMsUUFBTSxFQUFFLHlDQURLO0FBRWJDLFlBQVUsRUFBRSxnQ0FGQztBQUdiQyxhQUFXLEVBQUUsdUNBSEE7QUFJYkMsV0FBUyxFQUFFLGdCQUpFO0FBS2JDLGVBQWEsRUFBRSw0QkFMRjtBQU1iQyxtQkFBaUIsRUFBRSxjQU5OO0FBT2JDLE9BQUssRUFBRSwyQ0FQTTtBQVFiQyxlQUFhLEVBQUU7QUFSRixDQUFmOztBQVdBLElBQUksQ0FBQ0MsNkRBQUwsRUFBMkI7QUFDekJBLCtEQUFBLENBQXVCVCxNQUF2QjtBQUNEOztBQUVELCtEQUFlUyxpREFBZiIsImZpbGUiOiIuL2ZpcmViYXNlL2ZpcmViYXNlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcblxuY29uc3QgY29uZmlnID0ge1xuICBhcGlLZXk6ICdBSXphU3lCUm5ORjR6NGJ1cmRRbE5wQmhiclNaRjBmcWNlTkRLalEnLFxuICBhdXRoRG9tYWluOiAnaG0tc3ByaW50LXRvbnkuZmlyZWJhc2VhcHAuY29tJyxcbiAgZGF0YWJhc2VVUkw6ICdodHRwczovL2htLXNwcmludC10b255LmZpcmViYXNlaW8uY29tJyxcbiAgcHJvamVjdElkOiAnaG0tc3ByaW50LXRvbnknLFxuICBzdG9yYWdlQnVja2V0OiAnaG0tc3ByaW50LXRvbnkuYXBwc3BvdC5jb20nLFxuICBtZXNzYWdpbmdTZW5kZXJJZDogJzgwMjg0NjE2MDA0OScsXG4gIGFwcElkOiAnMTo4MDI4NDYxNjAwNDk6d2ViOjg2MGVlZWMwNjNhNDE4MWQ1ODVlOTAnLFxuICBtZWFzdXJlbWVudElkOiAnRy1aTDlTRlI2Wk05J1xufTtcblxuaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZpcmViYXNlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./firebase/firebase.js\n");

/***/ }),

/***/ "./pages/Register/index.tsx":
/*!**********************************!*\
  !*** ./pages/Register/index.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Register; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_templates_RegisterPageTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/templates/RegisterPageTemplate */ \"./components/templates/RegisterPageTemplate.tsx\");\n/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebase/firebase */ \"./firebase/firebase.js\");\n\n\nvar _jsxFileName = \"/Users/Tony/Desktop/dogBlog/pages/Register/index.tsx\";\n\n\n\nfunction Register() {\n  const {\n    0: token,\n    1: setToken\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    const messaging = _firebase_firebase__WEBPACK_IMPORTED_MODULE_3__.default.messaging();\n    Notification.requestPermission().then(() => {\n      return messaging.getToken();\n    }).then(token => {\n      console.log(token);\n    });\n  }, []);\n  console.log(token); // useEffect(() => {\n  //   enableMessaging();\n  //   localforage\n  //     .getItem('fcm_token')\n  //     .then((result: any) => setToken(result))\n  //     .catch((error) => console.log(error));\n  // }, []);\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_templates_RegisterPageTemplate__WEBPACK_IMPORTED_MODULE_2__.default, {\n      token: token\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2dCbG9nLy4vcGFnZXMvUmVnaXN0ZXIvaW5kZXgudHN4P2NkY2UiXSwibmFtZXMiOlsiUmVnaXN0ZXIiLCJ0b2tlbiIsInNldFRva2VuIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJtZXNzYWdpbmciLCJmaXJlYmFzZSIsIk5vdGlmaWNhdGlvbiIsInJlcXVlc3RQZXJtaXNzaW9uIiwidGhlbiIsImdldFRva2VuIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTtBQUVlLFNBQVNBLFFBQVQsR0FBb0I7QUFDakMsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQywrQ0FBUSxDQUFTLEVBQVQsQ0FBbEM7QUFDQUMsa0RBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTUMsU0FBUyxHQUFHQyxpRUFBQSxFQUFsQjtBQUNBQyxnQkFBWSxDQUFDQyxpQkFBYixHQUNHQyxJQURILENBQ1EsTUFBTTtBQUNWLGFBQU9KLFNBQVMsQ0FBQ0ssUUFBVixFQUFQO0FBQ0QsS0FISCxFQUlHRCxJQUpILENBSVNSLEtBQUQsSUFBVztBQUNmVSxhQUFPLENBQUNDLEdBQVIsQ0FBWVgsS0FBWjtBQUNELEtBTkg7QUFPRCxHQVRRLEVBU04sRUFUTSxDQUFUO0FBVUFVLFNBQU8sQ0FBQ0MsR0FBUixDQUFZWCxLQUFaLEVBWmlDLENBYWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLHNCQUNFO0FBQUEsMkJBQ0UsOERBQUMsK0VBQUQ7QUFBc0IsV0FBSyxFQUFFQTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFLRCIsImZpbGUiOiIuL3BhZ2VzL1JlZ2lzdGVyL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGxvY2FsZm9yYWdlIGZyb20gJ2xvY2FsZm9yYWdlJztcbmltcG9ydCBlbmFibGVNZXNzYWdpbmcgZnJvbSAnLi4vLi4vaG9va3MvZmNtTWVzc2FnZSc7XG5pbXBvcnQgUmVnaXN0ZXJQYWdlVGVtcGxhdGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy90ZW1wbGF0ZXMvUmVnaXN0ZXJQYWdlVGVtcGxhdGUnO1xuaW1wb3J0IGZpcmViYXNlIGZyb20gJy4uLy4uL2ZpcmViYXNlL2ZpcmViYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVnaXN0ZXIoKSB7XG4gIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbWVzc2FnaW5nID0gZmlyZWJhc2UubWVzc2FnaW5nKCk7XG4gICAgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2luZy5nZXRUb2tlbigpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCh0b2tlbikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh0b2tlbik7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuICBjb25zb2xlLmxvZyh0b2tlbik7XG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgZW5hYmxlTWVzc2FnaW5nKCk7XG4gIC8vICAgbG9jYWxmb3JhZ2VcbiAgLy8gICAgIC5nZXRJdGVtKCdmY21fdG9rZW4nKVxuICAvLyAgICAgLnRoZW4oKHJlc3VsdDogYW55KSA9PiBzZXRUb2tlbihyZXN1bHQpKVxuICAvLyAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAgLy8gfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8UmVnaXN0ZXJQYWdlVGVtcGxhdGUgdG9rZW49e3Rva2VufSAvPlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Register/index.tsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("firebase");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","api_index_tsx","components_atoms_Button_tsx-components_atoms_Img_tsx-components_atoms_Input_tsx-components_or-973b5b"], function() { return __webpack_exec__("./pages/Register/index.tsx"); });
module.exports = __webpack_exports__;

})();