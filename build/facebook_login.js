/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/*!*******************************!*\
  !*** ./src/facebook_login.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./src/constants.js");
// facebook_login.js


// Build the Facebook authentication URL
var authURL = "https://www.facebook.com/v12.0/dialog/oauth?client_id=".concat(_constants_js__WEBPACK_IMPORTED_MODULE_0__.FACEBOOK_APP.appId, "&redirect_uri=").concat(encodeURIComponent(_constants_js__WEBPACK_IMPORTED_MODULE_0__.FACEBOOK_APP.redirect_uri_login), "&response_type=").concat(_constants_js__WEBPACK_IMPORTED_MODULE_0__.FACEBOOK_APP.responseType, "&scope=").concat(_constants_js__WEBPACK_IMPORTED_MODULE_0__.FACEBOOK_APP.scope);

// Redirect the user to the authentication URL
window.location.href = authURL;

// Rest of the code remains the same
})();

/******/ })()
;
//# sourceMappingURL=facebook_login.js.map