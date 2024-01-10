/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API": () => (/* binding */ API)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./src/constants.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var API = {
  login: function () {
    var _login = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(data) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.open('POST', _constants_js__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.logIn);
                xhr.setRequestHeader('Accept', 'application/json');
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.onreadystatechange = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                  var first_digit_response_status_number, obj, jsonResponse, userProfile;
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          if (!(xhr.readyState === 4)) {
                            _context.next = 34;
                            break;
                          }
                          console.log(JSON.parse(xhr.response));
                          first_digit_response_status_number = String(xhr.status).charAt(0);
                          if (!(first_digit_response_status_number == '4')) {
                            _context.next = 10;
                            break;
                          }
                          console.log('INSIDE ERROR');
                          obj = JSON.parse(xhr.response);
                          alert('Email or password is incorect. Please try again.');
                          resolve(false);
                          _context.next = 34;
                          break;
                        case 10:
                          console.log('LOGIN SUCCESSFUL');
                          jsonResponse = JSON.parse(xhr.response);
                          chrome.runtime.sendMessage({
                            message: 'create_notification',
                            title: 'Logged In',
                            description: "You're logged in with email: ".concat(jsonResponse['data']['email'])
                          });
                          if (!jsonResponse['token']) {
                            _context.next = 16;
                            break;
                          }
                          _context.next = 16;
                          return _constants_js__WEBPACK_IMPORTED_MODULE_0__.LS.setItem('Auth_Token', jsonResponse['token']);
                        case 16:
                          _context.next = 18;
                          return _constants_js__WEBPACK_IMPORTED_MODULE_0__.LS.getItem('User_Profile');
                        case 18:
                          userProfile = _context.sent;
                          userProfile.email = data['email'];
                          userProfile.auth_token = jsonResponse['token'];
                          userProfile.password = data['password'];
                          userProfile.name = jsonResponse['data']['name'];
                          _context.next = 25;
                          return _constants_js__WEBPACK_IMPORTED_MODULE_0__.LS.setItem('User_Profile', userProfile);
                        case 25:
                          if (!(jsonResponse['data']['sub_expires_at'] > 0)) {
                            _context.next = 31;
                            break;
                          }
                          _context.next = 28;
                          return _constants_js__WEBPACK_IMPORTED_MODULE_0__.LS.setItem('user have paid?', true);
                        case 28:
                          chrome.runtime.sendMessage({
                            message: 'create_notification',
                            title: 'License Activated',
                            description: 'Enjoy VScan Premium!'
                          });
                          _context.next = 33;
                          break;
                        case 31:
                          _context.next = 33;
                          return _constants_js__WEBPACK_IMPORTED_MODULE_0__.LS.setItem('Is the user on free trial?', true);
                        case 33:
                          resolve(true);
                        case 34:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));
                xhr.send(JSON.stringify(data));
              }));
            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    function login(_x) {
      return _login.apply(this, arguments);
    }
    return login;
  }(),
  signUp: function () {
    var _signUp = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(data) {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", new Promise(function (resolve, reject) {
                console.log(data);
                var xhr = new XMLHttpRequest();
                xhr.open('POST', _constants_js__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.signUp);
                xhr.setRequestHeader('Accept', 'application/json');
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.onreadystatechange = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                  var first_digit_response_status_number, obj, jsonResponse;
                  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          if (xhr.readyState === 4) {
                            console.log(JSON.parse(xhr.response));
                            first_digit_response_status_number = String(xhr.status).charAt(0);
                            if (first_digit_response_status_number == '4') {
                              console.log('INSIDE ERROR');
                              obj = JSON.parse(xhr.response);
                              alert(obj.error);
                              resolve(false);
                            } else if (JSON.parse(xhr.response).was_already_signed_up == true) {
                              console.log('USER ALREADY IN DATABASE');
                              resolve('USER ALREADY IN DATABASE');
                            } else {
                              console.log('SIGNUP SUCCESSFUL');
                              jsonResponse = JSON.parse(xhr.response);
                              resolve(jsonResponse);
                            }
                          }
                        case 1:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                }));
                xhr.send(JSON.stringify(data));
              }));
            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    function signUp(_x2) {
      return _signUp.apply(this, arguments);
    }
    return signUp;
  }(),
  getUserProfile: function () {
    var _getUserProfile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              console.log('getUserProfile()');
              return _context7.abrupt("return", new Promise( /*#__PURE__*/function () {
                var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(resolve, reject) {
                  var xhr;
                  return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          xhr = new XMLHttpRequest();
                          xhr.open('GET', CONST.check_user_payment_Url);
                          xhr.setRequestHeader('Accept', 'application/json');
                          xhr.setRequestHeader('Content-Type', 'application/json');
                          _context6.t0 = xhr;
                          _context6.next = 7;
                          return _constants_js__WEBPACK_IMPORTED_MODULE_0__.LS.getItem('Auth_Token');
                        case 7:
                          _context6.t1 = _context6.sent;
                          _context6.t2 = 'Bearer ' + _context6.t1;
                          _context6.t0.setRequestHeader.call(_context6.t0, 'Authorization', _context6.t2);
                          xhr.onreadystatechange = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                            var json;
                            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                              while (1) {
                                switch (_context5.prev = _context5.next) {
                                  case 0:
                                    if (!(xhr.readyState === 4)) {
                                      _context5.next = 16;
                                      break;
                                    }
                                    console.log(xhr.status);
                                    json = JSON.parse(xhr.response);
                                    if (!json.error) {
                                      _context5.next = 10;
                                      break;
                                    }
                                    console.log('INSIDE ERROR');
                                    console.log(json.error);
                                    if (json.error == 'invalid or expired token') {
                                      resolve('Token expired');
                                    }
                                    resolve(false);
                                    _context5.next = 16;
                                    break;
                                  case 10:
                                    console.log('SUCCESSFUL');
                                    if (!(json.data.sub_expires_at > 0)) {
                                      _context5.next = 15;
                                      break;
                                    }
                                    _context5.next = 14;
                                    return _constants_js__WEBPACK_IMPORTED_MODULE_0__.LS.setItem('user have paid?', true);
                                  case 14:
                                    resolve('Payment detected');
                                  case 15:
                                    resolve(false);
                                  case 16:
                                  case "end":
                                    return _context5.stop();
                                }
                              }
                            }, _callee5);
                          }));
                          xhr.send(JSON.stringify());
                        case 12:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6);
                }));
                return function (_x3, _x4) {
                  return _ref3.apply(this, arguments);
                };
              }()));
            case 2:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));
    function getUserProfile() {
      return _getUserProfile.apply(this, arguments);
    }
    return getUserProfile;
  }(),
  updateAuthToken: function () {
    var _updateAuthToken = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(tabIDupdateToken) {
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              console.log('updateAuthToken()');
              return _context10.abrupt("return", new Promise( /*#__PURE__*/function () {
                var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(resolve, reject) {
                  var login_data, json_Str, json_Login;
                  return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                    while (1) {
                      switch (_context9.prev = _context9.next) {
                        case 0:
                          _context9.t2 = "{\n              \"email\":\"";
                          _context9.next = 3;
                          return _constants_js__WEBPACK_IMPORTED_MODULE_0__.LS.getItem('email');
                        case 3:
                          _context9.t3 = _context9.sent;
                          _context9.t1 = _context9.t2.concat.call(_context9.t2, _context9.t3, "\",\n              \"sessionId\":\"");
                          _context9.next = 7;
                          return _constants_js__WEBPACK_IMPORTED_MODULE_0__.LS.getItem('sessionId');
                        case 7:
                          _context9.t4 = _context9.sent;
                          _context9.t0 = _context9.t1.concat.call(_context9.t1, _context9.t4, "\",\n              \"authTokenGenerated\": true,\n              \"password\":\"");
                          _context9.next = 11;
                          return _constants_js__WEBPACK_IMPORTED_MODULE_0__.LS.getItem('password');
                        case 11:
                          _context9.t5 = _context9.sent;
                          login_data = _context9.t0.concat.call(_context9.t0, _context9.t5, "\"}");
                          json_Str = JSON.stringify(login_data);
                          console.log(json_Str);
                          json_Login = JSON.parse(json_Str);
                          fetch(CONST.login_API_URL, {
                            // Adding method type
                            method: 'POST',
                            headers: {
                              Accept: 'application/json',
                              'Content-Type': 'application/json'
                            },
                            body: json_Login
                          })
                          // Converting to JSON
                          .then(function (response) {
                            return response.json();
                          }).then( /*#__PURE__*/function () {
                            var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(xhr) {
                              var jsonResponse;
                              return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                                while (1) {
                                  switch (_context8.prev = _context8.next) {
                                    case 0:
                                      console.log(xhr);
                                      if (!(xhr.success != true || !xhr)) {
                                        _context8.next = 8;
                                        break;
                                      }
                                      console.log('INSIDE ERROR');
                                      try {
                                        console.log(xhr);
                                      } catch (_unused) {}
                                      resolve('error');
                                      chrome.tabs.sendMessage(tabIDupdateToken, {
                                        message: 'Response Update Token',
                                        result: 'Error'
                                      }, function (response) {});
                                      _context8.next = 23;
                                      break;
                                    case 8:
                                      console.log('LOGIN SUCCESSFUL');
                                      jsonResponse = xhr;
                                      if (!(jsonResponse['data']['sub_expires_at'] > 0)) {
                                        _context8.next = 13;
                                        break;
                                      }
                                      _context8.next = 13;
                                      return _constants_js__WEBPACK_IMPORTED_MODULE_0__.LS.setItem('user have paid?', true);
                                    case 13:
                                      if (!(jsonResponse['multiloginDetected'] == true)) {
                                        _context8.next = 19;
                                        break;
                                      }
                                      console.log('multiloginDetected');
                                      chrome.tabs.sendMessage(tabIDupdateToken, {
                                        message: 'Response Update Token',
                                        result: 'Multilogin Detected, after new login to fetch token'
                                      }, function (response) {});
                                      resolve('Multilogin Detected, after new login to fetch token');
                                      //await LS.setItem('Auth_Token', jsonResponse["token"]);
                                      _context8.next = 22;
                                      break;
                                    case 19:
                                      chrome.tabs.sendMessage(tabIDupdateToken, {
                                        message: 'Response Update Token',
                                        result: 'Multilogin Undetected'
                                      }, function (response) {});
                                      _context8.next = 22;
                                      return _constants_js__WEBPACK_IMPORTED_MODULE_0__.LS.setItem('Auth_Token', jsonResponse['token']);
                                    case 22:
                                      resolve('success');
                                    case 23:
                                    case "end":
                                      return _context8.stop();
                                  }
                                }
                              }, _callee8);
                            }));
                            return function (_x8) {
                              return _ref6.apply(this, arguments);
                            };
                          }());
                        case 17:
                        case "end":
                          return _context9.stop();
                      }
                    }
                  }, _callee9);
                }));
                return function (_x6, _x7) {
                  return _ref5.apply(this, arguments);
                };
              }()));
            case 2:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));
    function updateAuthToken(_x5) {
      return _updateAuthToken.apply(this, arguments);
    }
    return updateAuthToken;
  }(),
  getAuthToken: function () {
    var _getAuthToken = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              console.log('getAuthToken()');
              return _context13.abrupt("return", new Promise( /*#__PURE__*/function () {
                var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(resolve, reject) {
                  var login_data, json_Str, json_Login;
                  return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                    while (1) {
                      switch (_context12.prev = _context12.next) {
                        case 0:
                          _context12.t1 = "{\n              \"email\":\"";
                          _context12.next = 3;
                          return _constants_js__WEBPACK_IMPORTED_MODULE_0__.LS.getItem('email');
                        case 3:
                          _context12.t2 = _context12.sent;
                          _context12.t0 = _context12.t1.concat.call(_context12.t1, _context12.t2, "\",\n              \"password\":\"");
                          _context12.next = 7;
                          return _constants_js__WEBPACK_IMPORTED_MODULE_0__.LS.getItem('password');
                        case 7:
                          _context12.t3 = _context12.sent;
                          login_data = _context12.t0.concat.call(_context12.t0, _context12.t3, "\"}");
                          json_Str = JSON.stringify(login_data);
                          json_Login = JSON.parse(json_Str);
                          fetch(CONST.login_API_URL, {
                            // Adding method type
                            method: 'POST',
                            headers: {
                              Accept: 'application/json',
                              'Content-Type': 'application/json'
                            },
                            body: json_Login
                          })
                          // Converting to JSON
                          .then(function (response) {
                            return response.json();
                          }).then( /*#__PURE__*/function () {
                            var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(xhr) {
                              var jsonResponse;
                              return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                                while (1) {
                                  switch (_context11.prev = _context11.next) {
                                    case 0:
                                      console.log(xhr);
                                      if (!(xhr.success != true || !xhr)) {
                                        _context11.next = 8;
                                        break;
                                      }
                                      console.log('INSIDE ERROR');
                                      try {
                                        console.log(xhr);
                                      } catch (_unused2) {}
                                      resolve('error');
                                      chrome.tabs.sendMessage(tabIDupdateToken, {
                                        message: 'Response Update Token',
                                        result: 'Error'
                                      }, function (response) {});
                                      _context11.next = 22;
                                      break;
                                    case 8:
                                      console.log('SUCCESSFUL');
                                      jsonResponse = xhr;
                                      if (!(jsonResponse['data']['sub_expires_at'] > 0)) {
                                        _context11.next = 13;
                                        break;
                                      }
                                      _context11.next = 13;
                                      return _constants_js__WEBPACK_IMPORTED_MODULE_0__.LS.setItem('user have paid?', true);
                                    case 13:
                                      _context11.t0 = jsonResponse['token'];
                                      _context11.next = 16;
                                      return _constants_js__WEBPACK_IMPORTED_MODULE_0__.LS.getItem('Auth Token');
                                    case 16:
                                      _context11.t1 = _context11.sent;
                                      if (!(_context11.t0 == _context11.t1)) {
                                        _context11.next = 21;
                                        break;
                                      }
                                      //No Multilogin, token expired
                                      resolve('Token Expired, updateAuthToken next');
                                      _context11.next = 22;
                                      break;
                                    case 21:
                                      resolve('Multilogin Detected');
                                    case 22:
                                    case "end":
                                      return _context11.stop();
                                  }
                                }
                              }, _callee11);
                            }));
                            return function (_x11) {
                              return _ref8.apply(this, arguments);
                            };
                          }());
                        case 12:
                        case "end":
                          return _context12.stop();
                      }
                    }
                  }, _callee12);
                }));
                return function (_x9, _x10) {
                  return _ref7.apply(this, arguments);
                };
              }()));
            case 2:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13);
    }));
    function getAuthToken() {
      return _getAuthToken.apply(this, arguments);
    }
    return getAuthToken;
  }()
};

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_ENDPOINTS": () => (/* binding */ API_ENDPOINTS),
/* harmony export */   "DOMAIN": () => (/* binding */ DOMAIN),
/* harmony export */   "FACEBOOK_APP": () => (/* binding */ FACEBOOK_APP),
/* harmony export */   "GMAIL_API_pk_KEY": () => (/* binding */ GMAIL_API_pk_KEY),
/* harmony export */   "GMAIL_API_sk_KEY": () => (/* binding */ GMAIL_API_sk_KEY),
/* harmony export */   "LS": () => (/* binding */ LS),
/* harmony export */   "buyPremiumUrl": () => (/* binding */ buyPremiumUrl),
/* harmony export */   "checkFreeTrialExpiration": () => (/* binding */ checkFreeTrialExpiration),
/* harmony export */   "click": () => (/* binding */ click),
/* harmony export */   "contentScript_Notification": () => (/* binding */ contentScript_Notification),
/* harmony export */   "fuctionalityStatus": () => (/* binding */ fuctionalityStatus),
/* harmony export */   "interval_check_new_job": () => (/* binding */ interval_check_new_job),
/* harmony export */   "isUserPremiumOrFreeACTIVE": () => (/* binding */ isUserPremiumOrFreeACTIVE),
/* harmony export */   "notifications": () => (/* binding */ notifications),
/* harmony export */   "notify": () => (/* binding */ notify),
/* harmony export */   "null_field": () => (/* binding */ null_field),
/* harmony export */   "scroll_to_bottom_page": () => (/* binding */ scroll_to_bottom_page),
/* harmony export */   "support_email": () => (/* binding */ support_email)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
//Development environment
//export const DOMAIN = 'http://127.0.0.1:8082/';

//Production environment
var DOMAIN = 'https://vscanllc.com/';
var GMAIL_API_pk_KEY = '970872214371-v1uek96t2phgrtpft175s6dou5jcrt9k.apps.googleusercontent.com';
var GMAIL_API_sk_KEY = '970872214371-v1uek96t2phgrtpft175s6dou5jcrt9k.apps.googleusercontent.com';
var buyPremiumUrl = 'https://vscanllc.com/';
var support_email = 'support@vscanllc.com';
var free_trial_period = 7;
var null_field = 'N/A';
var LS = {
  getAllItems: function getAllItems() {
    return chrome.storage.local.get();
  },
  getItem: function () {
    var _getItem = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(key) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return chrome.storage.local.get(key);
            case 2:
              _context.t0 = key;
              return _context.abrupt("return", _context.sent[_context.t0]);
            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    function getItem(_x) {
      return _getItem.apply(this, arguments);
    }
    return getItem;
  }(),
  setItem: function setItem(key, val) {
    return chrome.storage.local.set(_defineProperty({}, key, val));
  },
  removeItems: function removeItems(keys) {
    return chrome.storage.local.remove(keys);
  }
};
function click(_x2) {
  return _click.apply(this, arguments);
}
function _click() {
  _click = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(btn) {
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", new Promise(function (res, rej) {
              console.log('clicking', btn);
              btn.focus();
              btn.scrollIntoView();
              btn.click();
              btn.dispatchEvent(new MouseEvent('mousedown', {
                bubbles: true
              }));
              btn.dispatchEvent(new MouseEvent('mouseup', {
                bubbles: true
              }));
              btn.dispatchEvent(new MouseEvent('click', {
                bubbles: true
              }));
              res();
            }));
          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _click.apply(this, arguments);
}
var FACEBOOK_APP = {
  appId: '1674798352913956',
  responseType: 'token',
  scope: 'user_likes,email',
  redirect_uri_login: 'https://codecortex.eu/contact/?Facebook=true&',
  redirect_uri_signup: 'https://codecortex.eu/contact/?Facebook=true&signup=true'
};
function contentScript_Notification(title, message) {
  chrome.runtime.sendMessage({
    message: 'create_notification',
    title: title,
    description: message
  }, function (response) {
    console.log('Notified SW');
  });
}
function scroll_to_bottom_page() {
  window.scrollBy({
    top: 10000,
    left: 100,
    behavior: 'smooth'
  });
}
var checkFreeTrialExpiration = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var userProfile, startDate, diffInMs, diffInDays;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log('Check Free Trial Expiration()');
            _context2.next = 3;
            return LS.getItem('User_Profile');
          case 3:
            userProfile = _context2.sent;
            startDate = userProfile.free_trial_started;
            diffInMs = new Date() - new Date(startDate);
            diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24));
            console.log('Days Passed since beginning of free trial:');
            console.log(diffInDays);
            if (!(diffInDays > free_trial_period)) {
              _context2.next = 16;
              break;
            }
            console.log('Free trial period expired');
            userProfile.free_trial = false;
            _context2.next = 14;
            return LS.setItem('User_Profile', userProfile);
          case 14:
            _context2.next = 17;
            break;
          case 16:
            console.log('Free trial period is ACTIVE');
          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return function checkFreeTrialExpiration() {
    return _ref.apply(this, arguments);
  };
}();
var fuctionalityStatus = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var isVideoScanEnabled, userProfile;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return checkFreeTrialExpiration();
          case 2:
            _context3.next = 4;
            return LS.getItem('isVideoScanEnabled');
          case 4:
            isVideoScanEnabled = _context3.sent;
            _context3.next = 7;
            return LS.getItem('User_Profile');
          case 7:
            userProfile = _context3.sent;
            console.log(userProfile);
            if (!((userProfile.free_trial || userProfile.premium_membership) && isVideoScanEnabled)) {
              _context3.next = 13;
              break;
            }
            return _context3.abrupt("return", true);
          case 13:
            return _context3.abrupt("return", false);
          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return function fuctionalityStatus() {
    return _ref2.apply(this, arguments);
  };
}();
var isUserPremiumOrFreeACTIVE = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var userProfile;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return checkFreeTrialExpiration();
          case 2:
            _context4.next = 4;
            return LS.getItem('User_Profile');
          case 4:
            userProfile = _context4.sent;
            console.log(userProfile);
            if (!(userProfile.free_trial || userProfile.premium_membership)) {
              _context4.next = 10;
              break;
            }
            return _context4.abrupt("return", true);
          case 10:
            return _context4.abrupt("return", false);
          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return function isUserPremiumOrFreeACTIVE() {
    return _ref3.apply(this, arguments);
  };
}();
var minutes_interval = 30;
var interval_check_new_job = minutes_interval * 60 * 1000;
var API_ENDPOINTS = {
  signUp: DOMAIN + 'api/auth/register',
  logIn: DOMAIN + 'api/auth/login'
};
function notify(title, message, iconUrl) {
  chrome.notifications.create({
    type: 'basic',
    iconUrl: iconUrl,
    title: title,
    message: message,
    priority: 1
  });
}
var notifications = {
  logIn_success: function logIn_success(name, method) {
    var title = 'Welcome back ' + name;
    var message = 'You have successfully logged in with ' + method;
    var iconUrl = '../icons/icon_128.png';
    notify(title, message, iconUrl);
  },
  signUp_success: function signUp_success(name, method) {
    var title = 'Welcome ' + name;
    var message = 'You have successfully signed up with ' + method;
    var iconUrl = '../icons/icon_128.png';
    notify(title, message, iconUrl);
  }
};

/***/ }),

/***/ "./src/modules/get_facebook_info.js":
/*!******************************************!*\
  !*** ./src/modules/get_facebook_info.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getFacebookInfo)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.js */ "./src/api.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



// Step 1: Get the access token from the redirect URI
function getAccessTokenFromUrl(urlHash) {
  var accessTokenMatch = document.URL.match(/#access_token=([^&]*)/);
  if (accessTokenMatch && accessTokenMatch[1]) {
    return accessTokenMatch[1];
  } else {
    return null;
  }
}

// Step 2: Use the access token to get user info from the Facebook Graph API
function getUserInfo(accessToken) {
  return new Promise( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
      var response, data, USER_LS;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch("https://graph.facebook.com/v12.0/me?fields=id,name,email&access_token=".concat(accessToken));
            case 3:
              response = _context.sent;
              if (!response.ok) {
                _context.next = 15;
                break;
              }
              _context.next = 7;
              return response.json();
            case 7:
              data = _context.sent;
              console.log('User Info:', data);
              _context.next = 11;
              return _constants__WEBPACK_IMPORTED_MODULE_0__.LS.getItem('User_Profile');
            case 11:
              USER_LS = _context.sent;
              resolve(data);
              _context.next = 17;
              break;
            case 15:
              console.error('Error fetching user info:', response.statusText);
              resolve(null);
            case 17:
              _context.next = 23;
              break;
            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](0);
              console.error('Error fetching user info:', _context.t0);
              resolve(null);
            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 19]]);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
}
function call_API_login_or_signup(_x3, _x4) {
  return _call_API_login_or_signup.apply(this, arguments);
} // Step 3: Run the script
function _call_API_login_or_signup() {
  _call_API_login_or_signup = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(data, user_signing_up) {
    var USER_LS;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log('call_API_login_or_signup');
            //if user signing up
            _context2.next = 3;
            return _constants__WEBPACK_IMPORTED_MODULE_0__.LS.getItem('User_Profile');
          case 3:
            USER_LS = _context2.sent;
            _api_js__WEBPACK_IMPORTED_MODULE_1__.API.signUp(data).then(function (response) {
              if (response == 'USER ALREADY IN DATABASE') {
                var title = 'Welcome Back' + data.name;
                var message = 'You have successfully logged in with Facebook';
                (0,_constants__WEBPACK_IMPORTED_MODULE_0__.contentScript_Notification)(title, message);
              } else {
                var _title = 'Welcome ' + data.name;
                var _message = 'You have successfully signed up with Facebook';
                (0,_constants__WEBPACK_IMPORTED_MODULE_0__.contentScript_Notification)(_title, _message);
              }
            });
            USER_LS.facebook_details = data;
            USER_LS.is_user_logged_in = true;
            _context2.next = 9;
            return _constants__WEBPACK_IMPORTED_MODULE_0__.LS.setItem('User_Profile', USER_LS);
          case 9:
            console.log('User Info:', USER_LS);
            return _context2.abrupt("return", data);
          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _call_API_login_or_signup.apply(this, arguments);
}
function getFacebookInfo(user_signing_up) {
  console.log('getFacebookInfo');
  var urlHash = document.URL; // Add the URL hash containing the access token here
  var accessToken = getAccessTokenFromUrl(urlHash);
  if (accessToken) {
    console.log('Access Token:', accessToken);
    getUserInfo(accessToken).then(function (userInfo) {
      if (userInfo) {
        call_API_login_or_signup(userInfo, user_signing_up);
      }
    });
  } else {
    console.error('Access token not found in the URL');
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************************!*\
  !*** ./src/content_AccessToken.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_get_facebook_info_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/get_facebook_info.js */ "./src/modules/get_facebook_info.js");



console.log('Revelation - Content Access Token Injected');
function get_Token_Based_on_Website_Used_to_Login(queryParam) {
  console.log(queryParam);
  var referreal_from_Facebook = new URLSearchParams(queryParam).get('Facebook');
  var user_wants_to_signup = new URLSearchParams(queryParam).get('signup');
  if (referreal_from_Facebook) {
    console.log('Facebook access token retrieving');
    console.log('Extracting Facebook Info of User...');
    (0,_modules_get_facebook_info_js__WEBPACK_IMPORTED_MODULE_0__["default"])(user_wants_to_signup);
  } else {
    executeFunctionY();
  }
}
function executeFunctionY() {
  console.log('Executing Function Y...');
}

// Usage example:
get_Token_Based_on_Website_Used_to_Login(window.location.search);
})();

/******/ })()
;
//# sourceMappingURL=content_AccessToken.js.map