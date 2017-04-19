/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	__webpack_require__(45);
	
	__webpack_require__(70);
	
	__webpack_require__(71);
	
	__webpack_require__(72);
	
	__webpack_require__(73);
	
	__webpack_require__(74);
	
	__webpack_require__(75);
	
	__webpack_require__(76);
	
	__webpack_require__(77);
	
	__webpack_require__(78);
	
	__webpack_require__(86);
	
	__webpack_require__(87);
	
	__webpack_require__(91);
	
	__webpack_require__(92);
	
	__webpack_require__(93);
	
	__webpack_require__(96);
	
	__webpack_require__(97);
	
	__webpack_require__(98);
	
	__webpack_require__(99);
	
	__webpack_require__(100);
	
	__webpack_require__(101);
	
	__webpack_require__(102);
	
	__webpack_require__(103);
	
	__webpack_require__(105);
	
	__webpack_require__(106);
	
	__webpack_require__(107);
	
	__webpack_require__(108);
	
	__webpack_require__(111);
	
	__webpack_require__(117);
	
	__webpack_require__(118);
	
	__webpack_require__(119);
	
	__webpack_require__(120);
	
	__webpack_require__(121);
	
	__webpack_require__(122);
	
	__webpack_require__(123);
	
	__webpack_require__(125);
	
	__webpack_require__(127);
	
	__webpack_require__(131);
	
	__webpack_require__(132);
	
	__webpack_require__(133);
	
	__webpack_require__(135);
	
	__webpack_require__(137);
	
	__webpack_require__(138);
	
	__webpack_require__(139);
	
	__webpack_require__(140);
	
	__webpack_require__(142);
	
	__webpack_require__(143);
	
	__webpack_require__(144);
	
	__webpack_require__(145);
	
	__webpack_require__(146);
	
	__webpack_require__(61);
	
	__webpack_require__(147);
	
	__webpack_require__(148);
	
	__webpack_require__(150);
	
	__webpack_require__(151);
	
	__webpack_require__(152);
	
	__webpack_require__(153);
	
	__webpack_require__(154);
	
	__webpack_require__(155);
	
	__webpack_require__(157);
	
	__webpack_require__(158);
	
	__webpack_require__(159);
	
	__webpack_require__(161);
	
	__webpack_require__(162);
	
	__webpack_require__(163);
	
	__webpack_require__(165);
	
	__webpack_require__(166);
	
	__webpack_require__(167);
	
	__webpack_require__(168);
	
	__webpack_require__(169);
	
	__webpack_require__(170);
	
	__webpack_require__(171);
	
	__webpack_require__(172);
	
	__webpack_require__(173);
	
	__webpack_require__(174);
	
	__webpack_require__(175);
	
	__webpack_require__(176);
	
	__webpack_require__(178);
	
	__webpack_require__(179);
	
	__webpack_require__(180);
	
	__webpack_require__(182);
	
	__webpack_require__(183);
	
	__webpack_require__(186);
	
	__webpack_require__(187);
	
	__webpack_require__(188);
	
	__webpack_require__(190);
	
	var _react = __webpack_require__(194);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(194);
	
	var _I18n = __webpack_require__(197);
	
	var _App = __webpack_require__(368);
	
	var _App2 = _interopRequireDefault(_App);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var context = window.context;
	var lang = document.documentElement.getAttribute('lang') || 'en';
	
	document.addEventListener('DOMContentLoaded', function () {
	  (0, _reactDom.render)(_react2.default.createElement(
	    _I18n.I18n,
	    { context: context, lang: lang },
	    _react2.default.createElement(_App2.default, null)
	  ), document.querySelector('[role=application]'));
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(3)
	  , $typed       = __webpack_require__(21)
	  , buffer       = __webpack_require__(22)
	  , anObject     = __webpack_require__(8)
	  , toIndex      = __webpack_require__(35)
	  , toLength     = __webpack_require__(27)
	  , isObject     = __webpack_require__(9)
	  , ArrayBuffer  = __webpack_require__(4).ArrayBuffer
	  , speciesConstructor = __webpack_require__(43)
	  , $ArrayBuffer = buffer.ArrayBuffer
	  , $DataView    = buffer.DataView
	  , $isView      = $typed.ABV && ArrayBuffer.isView
	  , $slice       = $ArrayBuffer.prototype.slice
	  , VIEW         = $typed.VIEW
	  , ARRAY_BUFFER = 'ArrayBuffer';
	
	$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {ArrayBuffer: $ArrayBuffer});
	
	$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
	  // 24.1.3.1 ArrayBuffer.isView(arg)
	  isView: function isView(it){
	    return $isView && $isView(it) || isObject(it) && VIEW in it;
	  }
	});
	
	$export($export.P + $export.U + $export.F * __webpack_require__(12)(function(){
	  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
	}), ARRAY_BUFFER, {
	  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
	  slice: function slice(start, end){
	    if($slice !== undefined && end === undefined)return $slice.call(anObject(this), start); // FF fix
	    var len    = anObject(this).byteLength
	      , first  = toIndex(start, len)
	      , final  = toIndex(end === undefined ? len : end, len)
	      , result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first))
	      , viewS  = new $DataView(this)
	      , viewT  = new $DataView(result)
	      , index  = 0;
	    while(first < final){
	      viewT.setUint8(index++, viewS.getUint8(first++));
	    } return result;
	  }
	});
	
	__webpack_require__(44)(ARRAY_BUFFER);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , core      = __webpack_require__(5)
	  , hide      = __webpack_require__(6)
	  , redefine  = __webpack_require__(16)
	  , ctx       = __webpack_require__(19)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target)redefine(target, key, out, type & $export.U);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 4 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 5 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(7)
	  , createDesc = __webpack_require__(15);
	module.exports = __webpack_require__(11) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(8)
	  , IE8_DOM_DEFINE = __webpack_require__(10)
	  , toPrimitive    = __webpack_require__(14)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(11) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(9);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(11) && !__webpack_require__(12)(function(){
	  return Object.defineProperty(__webpack_require__(13)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(12)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(9)
	  , document = __webpack_require__(4).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(9);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , hide      = __webpack_require__(6)
	  , has       = __webpack_require__(17)
	  , SRC       = __webpack_require__(18)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(5).inspectSource = function(it){
	  return $toString.call(it);
	};
	
	(module.exports = function(O, key, val, safe){
	  var isFunction = typeof val == 'function';
	  if(isFunction)has(val, 'name') || hide(val, 'name', key);
	  if(O[key] === val)return;
	  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe){
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if(O[key])O[key] = val;
	      else hide(O, key, val);
	    }
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 17 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(20);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4)
	  , hide   = __webpack_require__(6)
	  , uid    = __webpack_require__(18)
	  , TYPED  = uid('typed_array')
	  , VIEW   = uid('view')
	  , ABV    = !!(global.ArrayBuffer && global.DataView)
	  , CONSTR = ABV
	  , i = 0, l = 9, Typed;
	
	var TypedArrayConstructors = (
	  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
	).split(',');
	
	while(i < l){
	  if(Typed = global[TypedArrayConstructors[i++]]){
	    hide(Typed.prototype, TYPED, true);
	    hide(Typed.prototype, VIEW, true);
	  } else CONSTR = false;
	}
	
	module.exports = {
	  ABV:    ABV,
	  CONSTR: CONSTR,
	  TYPED:  TYPED,
	  VIEW:   VIEW
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(4)
	  , DESCRIPTORS    = __webpack_require__(11)
	  , LIBRARY        = __webpack_require__(23)
	  , $typed         = __webpack_require__(21)
	  , hide           = __webpack_require__(6)
	  , redefineAll    = __webpack_require__(24)
	  , fails          = __webpack_require__(12)
	  , anInstance     = __webpack_require__(25)
	  , toInteger      = __webpack_require__(26)
	  , toLength       = __webpack_require__(27)
	  , gOPN           = __webpack_require__(28).f
	  , dP             = __webpack_require__(7).f
	  , arrayFill      = __webpack_require__(39)
	  , setToStringTag = __webpack_require__(41)
	  , ARRAY_BUFFER   = 'ArrayBuffer'
	  , DATA_VIEW      = 'DataView'
	  , PROTOTYPE      = 'prototype'
	  , WRONG_LENGTH   = 'Wrong length!'
	  , WRONG_INDEX    = 'Wrong index!'
	  , $ArrayBuffer   = global[ARRAY_BUFFER]
	  , $DataView      = global[DATA_VIEW]
	  , Math           = global.Math
	  , RangeError     = global.RangeError
	  , Infinity       = global.Infinity
	  , BaseBuffer     = $ArrayBuffer
	  , abs            = Math.abs
	  , pow            = Math.pow
	  , floor          = Math.floor
	  , log            = Math.log
	  , LN2            = Math.LN2
	  , BUFFER         = 'buffer'
	  , BYTE_LENGTH    = 'byteLength'
	  , BYTE_OFFSET    = 'byteOffset'
	  , $BUFFER        = DESCRIPTORS ? '_b' : BUFFER
	  , $LENGTH        = DESCRIPTORS ? '_l' : BYTE_LENGTH
	  , $OFFSET        = DESCRIPTORS ? '_o' : BYTE_OFFSET;
	
	// IEEE754 conversions based on https://github.com/feross/ieee754
	var packIEEE754 = function(value, mLen, nBytes){
	  var buffer = Array(nBytes)
	    , eLen   = nBytes * 8 - mLen - 1
	    , eMax   = (1 << eLen) - 1
	    , eBias  = eMax >> 1
	    , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
	    , i      = 0
	    , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
	    , e, m, c;
	  value = abs(value)
	  if(value != value || value === Infinity){
	    m = value != value ? 1 : 0;
	    e = eMax;
	  } else {
	    e = floor(log(value) / LN2);
	    if(value * (c = pow(2, -e)) < 1){
	      e--;
	      c *= 2;
	    }
	    if(e + eBias >= 1){
	      value += rt / c;
	    } else {
	      value += rt * pow(2, 1 - eBias);
	    }
	    if(value * c >= 2){
	      e++;
	      c /= 2;
	    }
	    if(e + eBias >= eMax){
	      m = 0;
	      e = eMax;
	    } else if(e + eBias >= 1){
	      m = (value * c - 1) * pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * pow(2, eBias - 1) * pow(2, mLen);
	      e = 0;
	    }
	  }
	  for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
	  e = e << mLen | m;
	  eLen += mLen;
	  for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
	  buffer[--i] |= s * 128;
	  return buffer;
	};
	var unpackIEEE754 = function(buffer, mLen, nBytes){
	  var eLen  = nBytes * 8 - mLen - 1
	    , eMax  = (1 << eLen) - 1
	    , eBias = eMax >> 1
	    , nBits = eLen - 7
	    , i     = nBytes - 1
	    , s     = buffer[i--]
	    , e     = s & 127
	    , m;
	  s >>= 7;
	  for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
	  if(e === 0){
	    e = 1 - eBias;
	  } else if(e === eMax){
	    return m ? NaN : s ? -Infinity : Infinity;
	  } else {
	    m = m + pow(2, mLen);
	    e = e - eBias;
	  } return (s ? -1 : 1) * m * pow(2, e - mLen);
	};
	
	var unpackI32 = function(bytes){
	  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
	};
	var packI8 = function(it){
	  return [it & 0xff];
	};
	var packI16 = function(it){
	  return [it & 0xff, it >> 8 & 0xff];
	};
	var packI32 = function(it){
	  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
	};
	var packF64 = function(it){
	  return packIEEE754(it, 52, 8);
	};
	var packF32 = function(it){
	  return packIEEE754(it, 23, 4);
	};
	
	var addGetter = function(C, key, internal){
	  dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
	};
	
	var get = function(view, bytes, index, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = store.slice(start, start + bytes);
	  return isLittleEndian ? pack : pack.reverse();
	};
	var set = function(view, bytes, index, conversion, value, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = conversion(+value);
	  for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
	};
	
	var validateArrayBufferArguments = function(that, length){
	  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
	  var numberLength = +length
	    , byteLength   = toLength(numberLength);
	  if(numberLength != byteLength)throw RangeError(WRONG_LENGTH);
	  return byteLength;
	};
	
	if(!$typed.ABV){
	  $ArrayBuffer = function ArrayBuffer(length){
	    var byteLength = validateArrayBufferArguments(this, length);
	    this._b       = arrayFill.call(Array(byteLength), 0);
	    this[$LENGTH] = byteLength;
	  };
	
	  $DataView = function DataView(buffer, byteOffset, byteLength){
	    anInstance(this, $DataView, DATA_VIEW);
	    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	    var bufferLength = buffer[$LENGTH]
	      , offset       = toInteger(byteOffset);
	    if(offset < 0 || offset > bufferLength)throw RangeError('Wrong offset!');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
	    if(offset + byteLength > bufferLength)throw RangeError(WRONG_LENGTH);
	    this[$BUFFER] = buffer;
	    this[$OFFSET] = offset;
	    this[$LENGTH] = byteLength;
	  };
	
	  if(DESCRIPTORS){
	    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	    addGetter($DataView, BUFFER, '_b');
	    addGetter($DataView, BYTE_LENGTH, '_l');
	    addGetter($DataView, BYTE_OFFSET, '_o');
	  }
	
	  redefineAll($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset){
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset){
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1]));
	    },
	    getUint32: function getUint32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	    },
	    getFloat64: function getFloat64(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	    },
	    setInt8: function setInt8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setUint16: function setUint16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setInt32: function setInt32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setUint32: function setUint32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packF32, value, arguments[2]);
	    },
	    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
	      set(this, 8, byteOffset, packF64, value, arguments[2]);
	    }
	  });
	} else {
	  if(!fails(function(){
	    new $ArrayBuffer;     // eslint-disable-line no-new
	  }) || !fails(function(){
	    new $ArrayBuffer(.5); // eslint-disable-line no-new
	  })){
	    $ArrayBuffer = function ArrayBuffer(length){
	      return new BaseBuffer(validateArrayBufferArguments(this, length));
	    };
	    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	    for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
	      if(!((key = keys[j++]) in $ArrayBuffer))hide($ArrayBuffer, key, BaseBuffer[key]);
	    };
	    if(!LIBRARY)ArrayBufferProto.constructor = $ArrayBuffer;
	  }
	  // iOS Safari 7.x bug
	  var view = new $DataView(new $ArrayBuffer(2))
	    , $setInt8 = $DataView[PROTOTYPE].setInt8;
	  view.setInt8(0, 2147483648);
	  view.setInt8(1, 2147483649);
	  if(view.getInt8(0) || !view.getInt8(1))redefineAll($DataView[PROTOTYPE], {
	    setInt8: function setInt8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, true);
	}
	setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	setToStringTag($DataView, DATA_VIEW);
	hide($DataView[PROTOTYPE], $typed.VIEW, true);
	exports[ARRAY_BUFFER] = $ArrayBuffer;
	exports[DATA_VIEW] = $DataView;

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(16);
	module.exports = function(target, src, safe){
	  for(var key in src)redefine(target, key, src[key], safe);
	  return target;
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(26)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(29)
	  , hiddenKeys = __webpack_require__(38).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(17)
	  , toIObject    = __webpack_require__(30)
	  , arrayIndexOf = __webpack_require__(34)(false)
	  , IE_PROTO     = __webpack_require__(36)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(31)
	  , defined = __webpack_require__(33);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(32);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(30)
	  , toLength  = __webpack_require__(27)
	  , toIndex   = __webpack_require__(35);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(26)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(37)('keys')
	  , uid    = __webpack_require__(18);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(40)
	  , toIndex  = __webpack_require__(35)
	  , toLength = __webpack_require__(27);
	module.exports = function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , aLen   = arguments.length
	    , index  = toIndex(aLen > 1 ? arguments[1] : undefined, length)
	    , end    = aLen > 2 ? arguments[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(33);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(7).f
	  , has = __webpack_require__(17)
	  , TAG = __webpack_require__(42)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(37)('wks')
	  , uid        = __webpack_require__(18)
	  , Symbol     = __webpack_require__(4).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(8)
	  , aFunction = __webpack_require__(20)
	  , SPECIES   = __webpack_require__(42)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(4)
	  , dP          = __webpack_require__(7)
	  , DESCRIPTORS = __webpack_require__(11)
	  , SPECIES     = __webpack_require__(42)('species');
	
	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(46)('Int8', 1, function(init){
	  return function Int8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	if(__webpack_require__(11)){
	  var LIBRARY             = __webpack_require__(23)
	    , global              = __webpack_require__(4)
	    , fails               = __webpack_require__(12)
	    , $export             = __webpack_require__(3)
	    , $typed              = __webpack_require__(21)
	    , $buffer             = __webpack_require__(22)
	    , ctx                 = __webpack_require__(19)
	    , anInstance          = __webpack_require__(25)
	    , propertyDesc        = __webpack_require__(15)
	    , hide                = __webpack_require__(6)
	    , redefineAll         = __webpack_require__(24)
	    , toInteger           = __webpack_require__(26)
	    , toLength            = __webpack_require__(27)
	    , toIndex             = __webpack_require__(35)
	    , toPrimitive         = __webpack_require__(14)
	    , has                 = __webpack_require__(17)
	    , same                = __webpack_require__(47)
	    , classof             = __webpack_require__(48)
	    , isObject            = __webpack_require__(9)
	    , toObject            = __webpack_require__(40)
	    , isArrayIter         = __webpack_require__(49)
	    , create              = __webpack_require__(51)
	    , getPrototypeOf      = __webpack_require__(55)
	    , gOPN                = __webpack_require__(28).f
	    , getIterFn           = __webpack_require__(56)
	    , uid                 = __webpack_require__(18)
	    , wks                 = __webpack_require__(42)
	    , createArrayMethod   = __webpack_require__(57)
	    , createArrayIncludes = __webpack_require__(34)
	    , speciesConstructor  = __webpack_require__(43)
	    , ArrayIterators      = __webpack_require__(61)
	    , Iterators           = __webpack_require__(50)
	    , $iterDetect         = __webpack_require__(66)
	    , setSpecies          = __webpack_require__(44)
	    , arrayFill           = __webpack_require__(39)
	    , arrayCopyWithin     = __webpack_require__(67)
	    , $DP                 = __webpack_require__(7)
	    , $GOPD               = __webpack_require__(68)
	    , dP                  = $DP.f
	    , gOPD                = $GOPD.f
	    , RangeError          = global.RangeError
	    , TypeError           = global.TypeError
	    , Uint8Array          = global.Uint8Array
	    , ARRAY_BUFFER        = 'ArrayBuffer'
	    , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
	    , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
	    , PROTOTYPE           = 'prototype'
	    , ArrayProto          = Array[PROTOTYPE]
	    , $ArrayBuffer        = $buffer.ArrayBuffer
	    , $DataView           = $buffer.DataView
	    , arrayForEach        = createArrayMethod(0)
	    , arrayFilter         = createArrayMethod(2)
	    , arraySome           = createArrayMethod(3)
	    , arrayEvery          = createArrayMethod(4)
	    , arrayFind           = createArrayMethod(5)
	    , arrayFindIndex      = createArrayMethod(6)
	    , arrayIncludes       = createArrayIncludes(true)
	    , arrayIndexOf        = createArrayIncludes(false)
	    , arrayValues         = ArrayIterators.values
	    , arrayKeys           = ArrayIterators.keys
	    , arrayEntries        = ArrayIterators.entries
	    , arrayLastIndexOf    = ArrayProto.lastIndexOf
	    , arrayReduce         = ArrayProto.reduce
	    , arrayReduceRight    = ArrayProto.reduceRight
	    , arrayJoin           = ArrayProto.join
	    , arraySort           = ArrayProto.sort
	    , arraySlice          = ArrayProto.slice
	    , arrayToString       = ArrayProto.toString
	    , arrayToLocaleString = ArrayProto.toLocaleString
	    , ITERATOR            = wks('iterator')
	    , TAG                 = wks('toStringTag')
	    , TYPED_CONSTRUCTOR   = uid('typed_constructor')
	    , DEF_CONSTRUCTOR     = uid('def_constructor')
	    , ALL_CONSTRUCTORS    = $typed.CONSTR
	    , TYPED_ARRAY         = $typed.TYPED
	    , VIEW                = $typed.VIEW
	    , WRONG_LENGTH        = 'Wrong length!';
	
	  var $map = createArrayMethod(1, function(O, length){
	    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
	  });
	
	  var LITTLE_ENDIAN = fails(function(){
	    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	  });
	
	  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
	    new Uint8Array(1).set({});
	  });
	
	  var strictToLength = function(it, SAME){
	    if(it === undefined)throw TypeError(WRONG_LENGTH);
	    var number = +it
	      , length = toLength(it);
	    if(SAME && !same(number, length))throw RangeError(WRONG_LENGTH);
	    return length;
	  };
	
	  var toOffset = function(it, BYTES){
	    var offset = toInteger(it);
	    if(offset < 0 || offset % BYTES)throw RangeError('Wrong offset!');
	    return offset;
	  };
	
	  var validate = function(it){
	    if(isObject(it) && TYPED_ARRAY in it)return it;
	    throw TypeError(it + ' is not a typed array!');
	  };
	
	  var allocate = function(C, length){
	    if(!(isObject(C) && TYPED_CONSTRUCTOR in C)){
	      throw TypeError('It is not a typed array constructor!');
	    } return new C(length);
	  };
	
	  var speciesFromList = function(O, list){
	    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	  };
	
	  var fromList = function(C, list){
	    var index  = 0
	      , length = list.length
	      , result = allocate(C, length);
	    while(length > index)result[index] = list[index++];
	    return result;
	  };
	
	  var addGetter = function(it, key, internal){
	    dP(it, key, {get: function(){ return this._d[internal]; }});
	  };
	
	  var $from = function from(source /*, mapfn, thisArg */){
	    var O       = toObject(source)
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , iterFn  = getIterFn(O)
	      , i, length, values, result, step, iterator;
	    if(iterFn != undefined && !isArrayIter(iterFn)){
	      for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
	        values.push(step.value);
	      } O = values;
	    }
	    if(mapping && aLen > 2)mapfn = ctx(mapfn, arguments[2], 2);
	    for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++){
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };
	
	  var $of = function of(/*...items*/){
	    var index  = 0
	      , length = arguments.length
	      , result = allocate(this, length);
	    while(length > index)result[index] = arguments[index++];
	    return result;
	  };
	
	  // iOS Safari 6.x fails here
	  var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });
	
	  var $toLocaleString = function toLocaleString(){
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };
	
	  var proto = {
	    copyWithin: function copyWithin(target, start /*, end */){
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /*, thisArg */){
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /*, thisArg */){
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
	        arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /*, thisArg */){
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /*, thisArg */){
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /*, thisArg */){
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /*, fromIndex */){
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /*, fromIndex */){
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator){ // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /*, thisArg */){
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse(){
	      var that   = this
	        , length = validate(that).length
	        , middle = Math.floor(length / 2)
	        , index  = 0
	        , value;
	      while(index < middle){
	        value         = that[index];
	        that[index++] = that[--length];
	        that[length]  = value;
	      } return that;
	    },
	    some: function some(callbackfn /*, thisArg */){
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn){
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end){
	      var O      = validate(this)
	        , length = O.length
	        , $begin = toIndex(begin, length);
	      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
	        O.buffer,
	        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
	        toLength((end === undefined ? length : toIndex(end, length)) - $begin)
	      );
	    }
	  };
	
	  var $slice = function slice(start, end){
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };
	
	  var $set = function set(arrayLike /*, offset */){
	    validate(this);
	    var offset = toOffset(arguments[1], 1)
	      , length = this.length
	      , src    = toObject(arrayLike)
	      , len    = toLength(src.length)
	      , index  = 0;
	    if(len + offset > length)throw RangeError(WRONG_LENGTH);
	    while(index < len)this[offset + index] = src[index++];
	  };
	
	  var $iterators = {
	    entries: function entries(){
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys(){
	      return arrayKeys.call(validate(this));
	    },
	    values: function values(){
	      return arrayValues.call(validate(this));
	    }
	  };
	
	  var isTAIndex = function(target, key){
	    return isObject(target)
	      && target[TYPED_ARRAY]
	      && typeof key != 'symbol'
	      && key in target
	      && String(+key) == String(key);
	  };
	  var $getDesc = function getOwnPropertyDescriptor(target, key){
	    return isTAIndex(target, key = toPrimitive(key, true))
	      ? propertyDesc(2, target[key])
	      : gOPD(target, key);
	  };
	  var $setDesc = function defineProperty(target, key, desc){
	    if(isTAIndex(target, key = toPrimitive(key, true))
	      && isObject(desc)
	      && has(desc, 'value')
	      && !has(desc, 'get')
	      && !has(desc, 'set')
	      // TODO: add validation descriptor w/o calling accessors
	      && !desc.configurable
	      && (!has(desc, 'writable') || desc.writable)
	      && (!has(desc, 'enumerable') || desc.enumerable)
	    ){
	      target[key] = desc.value;
	      return target;
	    } else return dP(target, key, desc);
	  };
	
	  if(!ALL_CONSTRUCTORS){
	    $GOPD.f = $getDesc;
	    $DP.f   = $setDesc;
	  }
	
	  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty:           $setDesc
	  });
	
	  if(fails(function(){ arrayToString.call({}); })){
	    arrayToString = arrayToLocaleString = function toString(){
	      return arrayJoin.call(this);
	    }
	  }
	
	  var $TypedArrayPrototype$ = redefineAll({}, proto);
	  redefineAll($TypedArrayPrototype$, $iterators);
	  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice:          $slice,
	    set:            $set,
	    constructor:    function(){ /* noop */ },
	    toString:       arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP($TypedArrayPrototype$, TAG, {
	    get: function(){ return this[TYPED_ARRAY]; }
	  });
	
	  module.exports = function(KEY, BYTES, wrapper, CLAMPED){
	    CLAMPED = !!CLAMPED;
	    var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
	      , ISNT_UINT8 = NAME != 'Uint8Array'
	      , GETTER     = 'get' + KEY
	      , SETTER     = 'set' + KEY
	      , TypedArray = global[NAME]
	      , Base       = TypedArray || {}
	      , TAC        = TypedArray && getPrototypeOf(TypedArray)
	      , FORCED     = !TypedArray || !$typed.ABV
	      , O          = {}
	      , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    var getter = function(that, index){
	      var data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    var setter = function(that, index, value){
	      var data = that._d;
	      if(CLAMPED)value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    var addElement = function(that, index){
	      dP(that, index, {
	        get: function(){
	          return getter(this, index);
	        },
	        set: function(value){
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if(FORCED){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME, '_d');
	        var index  = 0
	          , offset = 0
	          , buffer, byteLength, length, klass;
	        if(!isObject(data)){
	          length     = strictToLength(data, true)
	          byteLength = length * BYTES;
	          buffer     = new $ArrayBuffer(byteLength);
	        } else if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          var $len = data.byteLength;
	          if($length === undefined){
	            if($len % BYTES)throw RangeError(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if(byteLength < 0)throw RangeError(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if(byteLength + offset > $len)throw RangeError(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if(TYPED_ARRAY in data){
	          return fromList(TypedArray, data);
	        } else {
	          return $from.call(TypedArray, data);
	        }
	        hide(that, '_d', {
	          b: buffer,
	          o: offset,
	          l: byteLength,
	          e: length,
	          v: new $DataView(buffer)
	        });
	        while(index < length)addElement(that, index++);
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	      hide(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if(!$iterDetect(function(iter){
	      // V8 works with iterators, but fails in many other cases
	      // https://code.google.com/p/v8/issues/detail?id=4552
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME);
	        var klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if(!isObject(data))return new Base(strictToLength(data, ISNT_UINT8));
	        if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          return $length !== undefined
	            ? new Base(data, toOffset($offset, BYTES), $length)
	            : $offset !== undefined
	              ? new Base(data, toOffset($offset, BYTES))
	              : new Base(data);
	        }
	        if(TYPED_ARRAY in data)return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
	        if(!(key in TypedArray))hide(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if(!LIBRARY)TypedArrayPrototype.constructor = TypedArray;
	    }
	    var $nativeIterator   = TypedArrayPrototype[ITERATOR]
	      , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
	      , $iterator         = $iterators.values;
	    hide(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide(TypedArrayPrototype, VIEW, true);
	    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);
	
	    if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
	      dP(TypedArrayPrototype, TAG, {
	        get: function(){ return NAME; }
	      });
	    }
	
	    O[NAME] = TypedArray;
	
	    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
	
	    $export($export.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES,
	      from: $from,
	      of: $of
	    });
	
	    if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
	
	    $export($export.P, NAME, proto);
	
	    setSpecies(NAME);
	
	    $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});
	
	    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);
	
	    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});
	
	    $export($export.P + $export.F * fails(function(){
	      new TypedArray(1).slice();
	    }), NAME, {slice: $slice});
	
	    $export($export.P + $export.F * (fails(function(){
	      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
	    }) || !fails(function(){
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, {toLocaleString: $toLocaleString});
	
	    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if(!LIBRARY && !CORRECT_ITER_NAME)hide(TypedArrayPrototype, ITERATOR, $iterator);
	  };
	} else module.exports = function(){ /* empty */ };

/***/ },
/* 47 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(32)
	  , TAG = __webpack_require__(42)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(50)
	  , ITERATOR   = __webpack_require__(42)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(8)
	  , dPs         = __webpack_require__(52)
	  , enumBugKeys = __webpack_require__(38)
	  , IE_PROTO    = __webpack_require__(36)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(13)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(54).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(7)
	  , anObject = __webpack_require__(8)
	  , getKeys  = __webpack_require__(53);
	
	module.exports = __webpack_require__(11) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(29)
	  , enumBugKeys = __webpack_require__(38);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4).document && document.documentElement;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(17)
	  , toObject    = __webpack_require__(40)
	  , IE_PROTO    = __webpack_require__(36)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(48)
	  , ITERATOR  = __webpack_require__(42)('iterator')
	  , Iterators = __webpack_require__(50);
	module.exports = __webpack_require__(5).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(19)
	  , IObject  = __webpack_require__(31)
	  , toObject = __webpack_require__(40)
	  , toLength = __webpack_require__(27)
	  , asc      = __webpack_require__(58);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(59);
	
	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(9)
	  , isArray  = __webpack_require__(60)
	  , SPECIES  = __webpack_require__(42)('species');
	
	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(32);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(62)
	  , step             = __webpack_require__(63)
	  , Iterators        = __webpack_require__(50)
	  , toIObject        = __webpack_require__(30);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(64)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(42)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(6)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(23)
	  , $export        = __webpack_require__(3)
	  , redefine       = __webpack_require__(16)
	  , hide           = __webpack_require__(6)
	  , has            = __webpack_require__(17)
	  , Iterators      = __webpack_require__(50)
	  , $iterCreate    = __webpack_require__(65)
	  , setToStringTag = __webpack_require__(41)
	  , getPrototypeOf = __webpack_require__(55)
	  , ITERATOR       = __webpack_require__(42)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(51)
	  , descriptor     = __webpack_require__(15)
	  , setToStringTag = __webpack_require__(41)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(6)(IteratorPrototype, __webpack_require__(42)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(42)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(40)
	  , toIndex  = __webpack_require__(35)
	  , toLength = __webpack_require__(27);
	
	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , end   = arguments.length > 2 ? arguments[2] : undefined
	    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
	    , inc   = 1;
	  if(from < to && to < from + count){
	    inc  = -1;
	    from += count - 1;
	    to   += count - 1;
	  }
	  while(count-- > 0){
	    if(from in O)O[to] = O[from];
	    else delete O[to];
	    to   += inc;
	    from += inc;
	  } return O;
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(69)
	  , createDesc     = __webpack_require__(15)
	  , toIObject      = __webpack_require__(30)
	  , toPrimitive    = __webpack_require__(14)
	  , has            = __webpack_require__(17)
	  , IE8_DOM_DEFINE = __webpack_require__(10)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(11) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 69 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(46)('Uint8', 1, function(init){
	  return function Uint8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(46)('Uint8', 1, function(init){
	  return function Uint8ClampedArray(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	}, true);

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(46)('Int16', 2, function(init){
	  return function Int16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(46)('Uint16', 2, function(init){
	  return function Uint16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(46)('Int32', 4, function(init){
	  return function Int32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(46)('Uint32', 4, function(init){
	  return function Uint32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(46)('Float32', 4, function(init){
	  return function Float32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(46)('Float64', 8, function(init){
	  return function Float64Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(79);
	
	// 23.1 Map Objects
	module.exports = __webpack_require__(83)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(7).f
	  , create      = __webpack_require__(51)
	  , redefineAll = __webpack_require__(24)
	  , ctx         = __webpack_require__(19)
	  , anInstance  = __webpack_require__(25)
	  , defined     = __webpack_require__(33)
	  , forOf       = __webpack_require__(80)
	  , $iterDefine = __webpack_require__(64)
	  , step        = __webpack_require__(63)
	  , setSpecies  = __webpack_require__(44)
	  , DESCRIPTORS = __webpack_require__(11)
	  , fastKey     = __webpack_require__(82).fastKey
	  , SIZE        = DESCRIPTORS ? '_s' : 'size';
	
	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)dP(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);
	
	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(19)
	  , call        = __webpack_require__(81)
	  , isArrayIter = __webpack_require__(49)
	  , anObject    = __webpack_require__(8)
	  , toLength    = __webpack_require__(27)
	  , getIterFn   = __webpack_require__(56)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(8);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(18)('meta')
	  , isObject = __webpack_require__(9)
	  , has      = __webpack_require__(17)
	  , setDesc  = __webpack_require__(7).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(12)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(4)
	  , $export           = __webpack_require__(3)
	  , redefine          = __webpack_require__(16)
	  , redefineAll       = __webpack_require__(24)
	  , meta              = __webpack_require__(82)
	  , forOf             = __webpack_require__(80)
	  , anInstance        = __webpack_require__(25)
	  , isObject          = __webpack_require__(9)
	  , fails             = __webpack_require__(12)
	  , $iterDetect       = __webpack_require__(66)
	  , setToStringTag    = __webpack_require__(41)
	  , inheritIfRequired = __webpack_require__(84);
	
	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  var fixMethod = function(KEY){
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a){
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO = !IS_WEAK && fails(function(){
	        // V8 ~ Chromium 42- fails only with 5+ elements
	        var $instance = new C()
	          , index     = 5;
	        while(index--)$instance[ADDER](index, index);
	        return !$instance.has(-0);
	      });
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        anInstance(target, C, NAME);
	        var that = inheritIfRequired(new Base, target, C);
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);
	
	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var isObject       = __webpack_require__(9)
	  , setPrototypeOf = __webpack_require__(85).set;
	module.exports = function(that, target, C){
	  var P, S = target.constructor;
	  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
	    setPrototypeOf(that, P);
	  } return that;
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(9)
	  , anObject = __webpack_require__(8);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(19)(Function.call, __webpack_require__(68).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(79);
	
	// 23.2 Set Objects
	module.exports = __webpack_require__(83)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var each         = __webpack_require__(57)(0)
	  , redefine     = __webpack_require__(16)
	  , meta         = __webpack_require__(82)
	  , assign       = __webpack_require__(88)
	  , weak         = __webpack_require__(90)
	  , isObject     = __webpack_require__(9)
	  , getWeak      = meta.getWeak
	  , isExtensible = Object.isExtensible
	  , uncaughtFrozenStore = weak.ufstore
	  , tmp          = {}
	  , InternalMap;
	
	var wrapper = function(get){
	  return function WeakMap(){
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};
	
	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      var data = getWeak(key);
	      if(data === true)return uncaughtFrozenStore(this).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	};
	
	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(83)('WeakMap', wrapper, methods, weak, true, true);
	
	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  InternalMap = weak.getConstructor(wrapper);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on internal weakmap shim
	      if(isObject(a) && !isExtensible(a)){
	        if(!this._f)this._f = new InternalMap;
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(53)
	  , gOPS     = __webpack_require__(89)
	  , pIE      = __webpack_require__(69)
	  , toObject = __webpack_require__(40)
	  , IObject  = __webpack_require__(31)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(12)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 89 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll       = __webpack_require__(24)
	  , getWeak           = __webpack_require__(82).getWeak
	  , anObject          = __webpack_require__(8)
	  , isObject          = __webpack_require__(9)
	  , anInstance        = __webpack_require__(25)
	  , forOf             = __webpack_require__(80)
	  , createArrayMethod = __webpack_require__(57)
	  , $has              = __webpack_require__(17)
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;
	
	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function(that){
	  return that._l || (that._l = new UncaughtFrozenStore);
	};
	var UncaughtFrozenStore = function(){
	  this.a = [];
	};
	var findUncaughtFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function(key){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var data = getWeak(anObject(key), true);
	    if(data === true)uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(90);
	
	// 23.4 WeakSet Objects
	__webpack_require__(83)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export   = __webpack_require__(3)
	  , aFunction = __webpack_require__(20)
	  , anObject  = __webpack_require__(8)
	  , rApply    = (__webpack_require__(4).Reflect || {}).apply
	  , fApply    = Function.apply;
	// MS Edge argumentsList argument is optional
	$export($export.S + $export.F * !__webpack_require__(12)(function(){
	  rApply(function(){});
	}), 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    var T = aFunction(target)
	      , L = anObject(argumentsList);
	    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
	  }
	});

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export    = __webpack_require__(3)
	  , create     = __webpack_require__(51)
	  , aFunction  = __webpack_require__(20)
	  , anObject   = __webpack_require__(8)
	  , isObject   = __webpack_require__(9)
	  , fails      = __webpack_require__(12)
	  , bind       = __webpack_require__(94)
	  , rConstruct = (__webpack_require__(4).Reflect || {}).construct;
	
	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = fails(function(){
	  function F(){}
	  return !(rConstruct(function(){}, [], F) instanceof F);
	});
	var ARGS_BUG = !fails(function(){
	  rConstruct(function(){});
	});
	
	$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/){
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if(ARGS_BUG && !NEW_TARGET_BUG)return rConstruct(Target, args, newTarget);
	    if(Target == newTarget){
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch(args.length){
	        case 0: return new Target;
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args));
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto    = newTarget.prototype
	      , instance = create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var aFunction  = __webpack_require__(20)
	  , isObject   = __webpack_require__(9)
	  , invoke     = __webpack_require__(95)
	  , arraySlice = [].slice
	  , factories  = {};
	
	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  } return factories[len](F, args);
	};
	
	module.exports = Function.bind || function bind(that /*, args... */){
	  var fn       = aFunction(this)
	    , partArgs = arraySlice.call(arguments, 1);
	  var bound = function(/* args... */){
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if(isObject(fn.prototype))bound.prototype = fn.prototype;
	  return bound;
	};

/***/ },
/* 95 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP          = __webpack_require__(7)
	  , $export     = __webpack_require__(3)
	  , anObject    = __webpack_require__(8)
	  , toPrimitive = __webpack_require__(14);
	
	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(12)(function(){
	  Reflect.defineProperty(dP.f({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    propertyKey = toPrimitive(propertyKey, true);
	    anObject(attributes);
	    try {
	      dP.f(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(3)
	  , gOPD     = __webpack_require__(68).f
	  , anObject = __webpack_require__(8);
	
	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD           = __webpack_require__(68)
	  , getPrototypeOf = __webpack_require__(55)
	  , has            = __webpack_require__(17)
	  , $export        = __webpack_require__(3)
	  , isObject       = __webpack_require__(9)
	  , anObject       = __webpack_require__(8);
	
	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = gOPD.f(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = getPrototypeOf(target)))return get(proto, propertyKey, receiver);
	}
	
	$export($export.S, 'Reflect', {get: get});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD     = __webpack_require__(68)
	  , $export  = __webpack_require__(3)
	  , anObject = __webpack_require__(8);
	
	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return gOPD.f(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(3)
	  , getProto = __webpack_require__(55)
	  , anObject = __webpack_require__(8);
	
	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(3);
	
	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(3)
	  , anObject      = __webpack_require__(8)
	  , $isExtensible = Object.isExtensible;
	
	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(3);
	
	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(104)});

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN     = __webpack_require__(28)
	  , gOPS     = __webpack_require__(89)
	  , anObject = __webpack_require__(8)
	  , Reflect  = __webpack_require__(4).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = gOPN.f(anObject(it))
	    , getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(3)
	  , anObject           = __webpack_require__(8)
	  , $preventExtensions = Object.preventExtensions;
	
	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target){
	    anObject(target);
	    try {
	      if($preventExtensions)$preventExtensions(target);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP             = __webpack_require__(7)
	  , gOPD           = __webpack_require__(68)
	  , getPrototypeOf = __webpack_require__(55)
	  , has            = __webpack_require__(17)
	  , $export        = __webpack_require__(3)
	  , createDesc     = __webpack_require__(15)
	  , anObject       = __webpack_require__(8)
	  , isObject       = __webpack_require__(9);
	
	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = gOPD.f(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = getPrototypeOf(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    dP.f(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}
	
	$export($export.S, 'Reflect', {set: set});

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(3)
	  , setProto = __webpack_require__(85);
	
	if(setProto)$export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto){
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(23)
	  , global             = __webpack_require__(4)
	  , ctx                = __webpack_require__(19)
	  , classof            = __webpack_require__(48)
	  , $export            = __webpack_require__(3)
	  , isObject           = __webpack_require__(9)
	  , aFunction          = __webpack_require__(20)
	  , anInstance         = __webpack_require__(25)
	  , forOf              = __webpack_require__(80)
	  , speciesConstructor = __webpack_require__(43)
	  , task               = __webpack_require__(109).set
	  , microtask          = __webpack_require__(110)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;
	
	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(42)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(24)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(41)($Promise, PROMISE);
	__webpack_require__(44)(PROMISE);
	Wrapper = __webpack_require__(5)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(66)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(19)
	  , invoke             = __webpack_require__(95)
	  , html               = __webpack_require__(54)
	  , cel                = __webpack_require__(13)
	  , global             = __webpack_require__(4)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(32)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , macrotask = __webpack_require__(109).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(32)(process) == 'process';
	
	module.exports = function(){
	  var head, last, notify;
	
	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };
	
	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(4)
	  , has            = __webpack_require__(17)
	  , DESCRIPTORS    = __webpack_require__(11)
	  , $export        = __webpack_require__(3)
	  , redefine       = __webpack_require__(16)
	  , META           = __webpack_require__(82).KEY
	  , $fails         = __webpack_require__(12)
	  , shared         = __webpack_require__(37)
	  , setToStringTag = __webpack_require__(41)
	  , uid            = __webpack_require__(18)
	  , wks            = __webpack_require__(42)
	  , wksExt         = __webpack_require__(112)
	  , wksDefine      = __webpack_require__(113)
	  , keyOf          = __webpack_require__(114)
	  , enumKeys       = __webpack_require__(115)
	  , isArray        = __webpack_require__(60)
	  , anObject       = __webpack_require__(8)
	  , toIObject      = __webpack_require__(30)
	  , toPrimitive    = __webpack_require__(14)
	  , createDesc     = __webpack_require__(15)
	  , _create        = __webpack_require__(51)
	  , gOPNExt        = __webpack_require__(116)
	  , $GOPD          = __webpack_require__(68)
	  , $DP            = __webpack_require__(7)
	  , $keys          = __webpack_require__(53)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(28).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(69).f  = $propertyIsEnumerable;
	  __webpack_require__(89).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(23)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(6)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(42);

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(4)
	  , core           = __webpack_require__(5)
	  , LIBRARY        = __webpack_require__(23)
	  , wksExt         = __webpack_require__(112)
	  , defineProperty = __webpack_require__(7).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(53)
	  , toIObject = __webpack_require__(30);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(53)
	  , gOPS    = __webpack_require__(89)
	  , pIE     = __webpack_require__(69);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(30)
	  , gOPN      = __webpack_require__(28).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(3);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(88)});

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(3);
	$export($export.S, 'Object', {is: __webpack_require__(47)});

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(3);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(85).set});

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(7).f
	  , createDesc = __webpack_require__(15)
	  , has        = __webpack_require__(17)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';
	
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	
	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(11) && dP(FProto, NAME, {
	  configurable: true,
	  get: function(){
	    try {
	      var that = this
	        , name = ('' + that).match(nameRE)[1];
	      has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
	      return name;
	    } catch(e){
	      return '';
	    }
	  }
	});

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(3)
	  , toIObject = __webpack_require__(30)
	  , toLength  = __webpack_require__(27);
	
	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl  = toIObject(callSite.raw)
	      , len  = toLength(tpl.length)
	      , aLen = arguments.length
	      , res  = []
	      , i    = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < aLen)res.push(String(arguments[i]));
	    } return res.join('');
	  }
	});

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(3)
	  , toIndex        = __webpack_require__(35)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;
	
	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res  = []
	      , aLen = arguments.length
	      , i    = 0
	      , code;
	    while(aLen > i){
	      code = +arguments[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(3)
	  , $at     = __webpack_require__(124)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(26)
	  , defined   = __webpack_require__(33);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(3);
	
	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(126)
	});

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(26)
	  , defined   = __webpack_require__(33);
	
	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(3)
	  , toLength    = __webpack_require__(27)
	  , context     = __webpack_require__(128)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(130)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(129)
	  , defined  = __webpack_require__(33);
	
	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(9)
	  , cof      = __webpack_require__(32)
	  , MATCH    = __webpack_require__(42)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(42)('match');
	module.exports = function(KEY){
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch(e){
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch(f){ /* empty */ }
	  } return true;
	};

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(3)
	  , toLength  = __webpack_require__(27)
	  , context   = __webpack_require__(128)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(130)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , endPosition = arguments.length > 1 ? arguments[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(3)
	  , context  = __webpack_require__(128)
	  , INCLUDES = 'includes';
	
	$export($export.P + $export.F * __webpack_require__(130)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	if(__webpack_require__(11) && /./g.flags != 'g')__webpack_require__(7).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(134)
	});

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(8);
	module.exports = function(){
	  var that   = anObject(this)
	    , result = '';
	  if(that.global)     result += 'g';
	  if(that.ignoreCase) result += 'i';
	  if(that.multiline)  result += 'm';
	  if(that.unicode)    result += 'u';
	  if(that.sticky)     result += 'y';
	  return result;
	};

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(136)('match', 1, function(defined, MATCH, $match){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return [function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match];
	});

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(6)
	  , redefine = __webpack_require__(16)
	  , fails    = __webpack_require__(12)
	  , defined  = __webpack_require__(33)
	  , wks      = __webpack_require__(42);
	
	module.exports = function(KEY, length, exec){
	  var SYMBOL   = wks(KEY)
	    , fns      = exec(defined, SYMBOL, ''[KEY])
	    , strfn    = fns[0]
	    , rxfn     = fns[1];
	  if(fails(function(){
	    var O = {};
	    O[SYMBOL] = function(){ return 7; };
	    return ''[KEY](O) != 7;
	  })){
	    redefine(String.prototype, KEY, strfn);
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return rxfn.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return rxfn.call(string, this); }
	    );
	  }
	};

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(136)('replace', 2, function(defined, REPLACE, $replace){
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return [function replace(searchValue, replaceValue){
	    'use strict';
	    var O  = defined(this)
	      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  }, $replace];
	});

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(136)('split', 2, function(defined, SPLIT, $split){
	  'use strict';
	  var isRegExp   = __webpack_require__(129)
	    , _split     = $split
	    , $push      = [].push
	    , $SPLIT     = 'split'
	    , LENGTH     = 'length'
	    , LAST_INDEX = 'lastIndex';
	  if(
	    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
	    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
	    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
	    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
	    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
	    ''[$SPLIT](/.?/)[LENGTH]
	  ){
	    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
	    // based on es5-shim implementation, need to rework it
	    $split = function(separator, limit){
	      var string = String(this);
	      if(separator === undefined && limit === 0)return [];
	      // If `separator` is not a regex, use native split
	      if(!isRegExp(separator))return _split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var separator2, match, lastIndex, lastLength, i;
	      // Doesn't need flags gy, but they don't hurt
	      if(!NPCG)separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	      while(match = separatorCopy.exec(string)){
	        // `separatorCopy.lastIndex` is not reliable cross-browser
	        lastIndex = match.index + match[0][LENGTH];
	        if(lastIndex > lastLastIndex){
	          output.push(string.slice(lastLastIndex, match.index));
	          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
	          if(!NPCG && match[LENGTH] > 1)match[0].replace(separator2, function(){
	            for(i = 1; i < arguments[LENGTH] - 2; i++)if(arguments[i] === undefined)match[i] = undefined;
	          });
	          if(match[LENGTH] > 1 && match.index < string[LENGTH])$push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if(output[LENGTH] >= splitLimit)break;
	        }
	        if(separatorCopy[LAST_INDEX] === match.index)separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if(lastLastIndex === string[LENGTH]){
	        if(lastLength || !separatorCopy.test(''))output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	  // Chakra, V8
	  } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
	    $split = function(separator, limit){
	      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
	    };
	  }
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return [function split(separator, limit){
	    var O  = defined(this)
	      , fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
	  }, $split];
	});

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(136)('search', 1, function(defined, SEARCH, $search){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
	});

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(19)
	  , $export        = __webpack_require__(3)
	  , toObject       = __webpack_require__(40)
	  , call           = __webpack_require__(81)
	  , isArrayIter    = __webpack_require__(49)
	  , toLength       = __webpack_require__(27)
	  , createProperty = __webpack_require__(141)
	  , getIterFn      = __webpack_require__(56);
	
	$export($export.S + $export.F * !__webpack_require__(66)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(7)
	  , createDesc      = __webpack_require__(15);
	
	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export        = __webpack_require__(3)
	  , createProperty = __webpack_require__(141);
	
	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(12)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , aLen   = arguments.length
	      , result = new (typeof this == 'function' ? this : Array)(aLen);
	    while(aLen > index)createProperty(result, index, arguments[index++]);
	    result.length = aLen;
	    return result;
	  }
	});

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(3);
	
	$export($export.P, 'Array', {copyWithin: __webpack_require__(67)});
	
	__webpack_require__(62)('copyWithin');

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(3)
	  , $find   = __webpack_require__(57)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(62)(KEY);

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(3)
	  , $find   = __webpack_require__(57)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(62)(KEY);

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(3);
	
	$export($export.P, 'Array', {fill: __webpack_require__(39)});
	
	__webpack_require__(62)('fill');

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(3)
	  , _isFinite = __webpack_require__(4).isFinite;
	
	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(3);
	
	$export($export.S, 'Number', {isInteger: __webpack_require__(149)});

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(9)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(3)
	  , isInteger = __webpack_require__(149)
	  , abs       = Math.abs;
	
	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(3);
	
	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(3);
	
	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(3);
	
	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(3);
	
	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(3)
	  , log1p   = __webpack_require__(156)
	  , sqrt    = Math.sqrt
	  , $acosh  = Math.acosh;
	
	$export($export.S + $export.F * !($acosh
	  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	  && Math.floor($acosh(Number.MAX_VALUE)) == 710
	  // Tor Browser bug: Math.acosh(Infinity) -> NaN 
	  && $acosh(Infinity) == Infinity
	), 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
/* 156 */
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(3)
	  , $asinh  = Math.asinh;
	
	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}
	
	// Tor Browser bug: Math.asinh(0) -> -0 
	$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(3)
	  , $atanh  = Math.atanh;
	
	// Tor Browser bug: Math.atanh(-0) -> 0 
	$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(3)
	  , sign    = __webpack_require__(160);
	
	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 160 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(3);
	
	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(3)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(3)
	  , $expm1  = __webpack_require__(164);
	
	$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {expm1: $expm1});

/***/ },
/* 164 */
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	var $expm1 = Math.expm1;
	module.exports = (!$expm1
	  // Old FF bug
	  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
	  // Tor Browser bug
	  || $expm1(-2e-17) != -2e-17
	) ? function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	} : $expm1;

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(3)
	  , sign      = __webpack_require__(160)
	  , pow       = Math.pow
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);
	
	var roundTiesToEven = function(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	};
	
	
	$export($export.S, 'Math', {
	  fround: function fround(x){
	    var $abs  = Math.abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(3)
	  , abs     = Math.abs;
	
	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum  = 0
	      , i    = 0
	      , aLen = arguments.length
	      , larg = 0
	      , arg, div;
	    while(i < aLen){
	      arg = abs(arguments[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(3)
	  , $imul   = Math.imul;
	
	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(12)(function(){
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y){
	    var UINT16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UINT16 & xn
	      , yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(3);
	
	$export($export.S, 'Math', {log1p: __webpack_require__(156)});

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(3);
	
	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(3);
	
	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(3);
	
	$export($export.S, 'Math', {sign: __webpack_require__(160)});

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(3)
	  , expm1   = __webpack_require__(164)
	  , exp     = Math.exp;
	
	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(12)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(3)
	  , expm1   = __webpack_require__(164)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(3);
	
	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/Array.prototype.includes
	var $export   = __webpack_require__(3)
	  , $includes = __webpack_require__(34)(true);
	
	$export($export.P, 'Array', {
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	
	__webpack_require__(62)('includes');

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(3)
	  , $values = __webpack_require__(177)(false);
	
	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(53)
	  , toIObject = __webpack_require__(30)
	  , isEnum    = __webpack_require__(69).f;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export  = __webpack_require__(3)
	  , $entries = __webpack_require__(177)(true);
	
	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-getownpropertydescriptors
	var $export        = __webpack_require__(3)
	  , ownKeys        = __webpack_require__(104)
	  , toIObject      = __webpack_require__(30)
	  , gOPD           = __webpack_require__(68)
	  , createProperty = __webpack_require__(141);
	
	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , getDesc = gOPD.f
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key;
	    while(keys.length > i)createProperty(result, key = keys[i++], getDesc(O, key));
	    return result;
	  }
	});

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(3)
	  , $pad    = __webpack_require__(181);
	
	$export($export.P, 'String', {
	  padStart: function padStart(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-string-pad-start-end
	var toLength = __webpack_require__(27)
	  , repeat   = __webpack_require__(126)
	  , defined  = __webpack_require__(33);
	
	module.exports = function(that, maxLength, fillString, left){
	  var S            = String(defined(that))
	    , stringLength = S.length
	    , fillStr      = fillString === undefined ? ' ' : String(fillString)
	    , intMaxLength = toLength(maxLength);
	  if(intMaxLength <= stringLength || fillStr == '')return S;
	  var fillLen = intMaxLength - stringLength
	    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};


/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(3)
	  , $pad    = __webpack_require__(181);
	
	$export($export.P, 'String', {
	  padEnd: function padEnd(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(4)
	  , $export    = __webpack_require__(3)
	  , invoke     = __webpack_require__(95)
	  , partial    = __webpack_require__(184)
	  , navigator  = global.navigator
	  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function(set){
	  return MSIE ? function(fn, time /*, ...args */){
	    return set(invoke(
	      partial,
	      [].slice.call(arguments, 2),
	      typeof fn == 'function' ? fn : Function(fn)
	    ), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout:  wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(185)
	  , invoke    = __webpack_require__(95)
	  , aFunction = __webpack_require__(20);
	module.exports = function(/* ...pargs */){
	  var fn     = aFunction(this)
	    , length = arguments.length
	    , pargs  = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that = this
	      , aLen = arguments.length
	      , j = 0, k = 0, args;
	    if(!holder && !aLen)return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
	    while(aLen > k)args.push(arguments[k++]);
	    return invoke(fn, args, that);
	  };
	};

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4);

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(3)
	  , $task   = __webpack_require__(109);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	var $iterators    = __webpack_require__(61)
	  , redefine      = __webpack_require__(16)
	  , global        = __webpack_require__(4)
	  , hide          = __webpack_require__(6)
	  , Iterators     = __webpack_require__(50)
	  , wks           = __webpack_require__(42)
	  , ITERATOR      = wks('iterator')
	  , TO_STRING_TAG = wks('toStringTag')
	  , ArrayValues   = Iterators.Array;
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype
	    , key;
	  if(proto){
	    if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
	    if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
	  }
	}

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!(function(global) {
	  "use strict";
	
	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };
	
	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }
	
	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] =
	    GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  runtime.awrap = function(arg) {
	    return { __await: arg };
	  };
	
	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return Promise.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }
	
	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }
	
	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }
	
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }
	
	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	  runtime.AsyncIterator = AsyncIterator;
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );
	
	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      context.method = method;
	      context.arg = arg;
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }
	
	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;
	
	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }
	
	          context.dispatchException(context.arg);
	
	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          if (record.arg === ContinueSentinel) {
	            continue;
	          }
	
	          return {
	            value: record.arg,
	            done: context.done
	          };
	
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;
	
	      if (context.method === "throw") {
	        if (delegate.iterator.return) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined;
	          maybeInvokeDelegate(delegate, context);
	
	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }
	
	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }
	
	      return ContinueSentinel;
	    }
	
	    var record = tryCatch(method, delegate.iterator, context.arg);
	
	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }
	
	    var info = record.arg;
	
	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }
	
	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;
	
	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;
	
	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined;
	      }
	
	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }
	
	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[toStringTagSymbol] = "Generator";
	
	  Gp.toString = function() {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.method = "next";
	      this.arg = undefined;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	
	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined;
	        }
	
	        return !! caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }
	
	      return this.complete(record);
	    },
	
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	
	      return ContinueSentinel;
	    },
	
	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined;
	      }
	
	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(189)))

/***/ },
/* 189 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 190 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"spin":"BmaMLCmaNjd7mY80GifLJ"};

/***/ },
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {(function (global, factory) {
		 true ? module.exports = factory(__webpack_require__(195), __webpack_require__(196)) :
		typeof define === 'function' && define.amd ? define(['proptypes', 'preact'], factory) :
		(global.preactCompat = factory(global.PropTypes,global.preact));
	}(this, (function (PropTypes,preact) {
	
	PropTypes = 'default' in PropTypes ? PropTypes['default'] : PropTypes;
	
	var version = '15.1.0'; // trick libraries to think we are react
	
	var ELEMENTS = 'a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan'.split(' ');
	
	var REACT_ELEMENT_TYPE = (typeof Symbol!=='undefined' && Symbol.for && Symbol.for('react.element')) || 0xeac7;
	
	var COMPONENT_WRAPPER_KEY = typeof Symbol!=='undefined' ? Symbol.for('__preactCompatWrapper') : '__preactCompatWrapper';
	
	// don't autobind these methods since they already have guaranteed context.
	var AUTOBIND_BLACKLIST = {
		constructor: 1,
		render: 1,
		shouldComponentUpdate: 1,
		componentWillReceiveProps: 1,
		componentWillUpdate: 1,
		componentDidUpdate: 1,
		componentWillMount: 1,
		componentDidMount: 1,
		componentWillUnmount: 1,
		componentDidUnmount: 1
	};
	
	
	var CAMEL_PROPS = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vert|word|writing|x)[A-Z]/;
	
	
	var BYPASS_HOOK = {};
	
	/*global process*/
	var DEV = typeof process==='undefined' || !process.env || process.env.NODE_ENV!=='production';
	
	// a component that renders nothing. Used to replace components for unmountComponentAtNode.
	function EmptyComponent() { return null; }
	
	
	
	// make react think we're react.
	var VNode = preact.h('a', null).constructor;
	VNode.prototype.$$typeof = REACT_ELEMENT_TYPE;
	VNode.prototype.preactCompatUpgraded = false;
	VNode.prototype.preactCompatNormalized = false;
	
	Object.defineProperty(VNode.prototype, 'type', {
		get: function() { return this.nodeName; },
		set: function(v) { this.nodeName = v; },
		configurable:true
	});
	
	Object.defineProperty(VNode.prototype, 'props', {
		get: function() { return this.attributes; },
		set: function(v) { this.attributes = v; },
		configurable:true
	});
	
	
	
	var oldEventHook = preact.options.event;
	preact.options.event = function (e) {
		if (oldEventHook) { e = oldEventHook(e); }
		e.persist = Object;
		e.nativeEvent = e;
		return e;
	};
	
	
	var oldVnodeHook = preact.options.vnode;
	preact.options.vnode = function (vnode) {
		if (!vnode.preactCompatUpgraded) {
			vnode.preactCompatUpgraded = true;
	
			var tag = vnode.nodeName,
				attrs = vnode.attributes = extend({}, vnode.attributes);
	
			if (typeof tag==='function') {
				if (tag[COMPONENT_WRAPPER_KEY]===true || (tag.prototype && 'isReactComponent' in tag.prototype)) {
					if (vnode.children && !vnode.children.length) { vnode.children = undefined; }
					if (vnode.children) { attrs.children = vnode.children; }
	
					if (!vnode.preactCompatNormalized) {
						normalizeVNode(vnode);
					}
					handleComponentVNode(vnode);
				}
			}
			else {
				if (vnode.children && !vnode.children.length) { vnode.children = undefined; }
				if (vnode.children) { attrs.children = vnode.children; }
	
				if (attrs.defaultValue) {
					if (!attrs.value && attrs.value!==0) {
						attrs.value = attrs.defaultValue;
					}
					delete attrs.defaultValue;
				}
	
				handleElementVNode(vnode, attrs);
			}
		}
	
		if (oldVnodeHook) { oldVnodeHook(vnode); }
	};
	
	function handleComponentVNode(vnode) {
		var tag = vnode.nodeName,
			a = vnode.attributes;
	
		vnode.attributes = {};
		if (tag.defaultProps) { extend(vnode.attributes, tag.defaultProps); }
		if (a) { extend(vnode.attributes, a); }
	}
	
	function handleElementVNode(vnode, a) {
		var shouldSanitize, attrs, i;
		if (a) {
			for (i in a) { if ((shouldSanitize = CAMEL_PROPS.test(i))) { break; } }
			if (shouldSanitize) {
				attrs = vnode.attributes = {};
				for (i in a) {
					if (a.hasOwnProperty(i)) {
						attrs[ CAMEL_PROPS.test(i) ? i.replace(/([A-Z0-9])/, '-$1').toLowerCase() : i ] = a[i];
					}
				}
			}
		}
	}
	
	
	
	// proxy render() since React returns a Component reference.
	function render$1(vnode, parent, callback) {
		var prev = parent && parent._preactCompatRendered && parent._preactCompatRendered.base;
	
		// ignore impossible previous renders
		if (prev && prev.parentNode!==parent) { prev = null; }
	
		// default to first Element child
		if (!prev) { prev = parent.children[0]; }
	
		// remove unaffected siblings
		for (var i=parent.childNodes.length; i--; ) {
			if (parent.childNodes[i]!==prev) {
				parent.removeChild(parent.childNodes[i]);
			}
		}
	
		var out = preact.render(vnode, parent, prev);
		if (parent) { parent._preactCompatRendered = out && (out._component || { base: out }); }
		if (typeof callback==='function') { callback(); }
		return out && out._component || out;
	}
	
	
	var ContextProvider = function () {};
	
	ContextProvider.prototype.getChildContext = function () {
		return this.props.context;
	};
	ContextProvider.prototype.render = function (props) {
		return props.children[0];
	};
	
	function renderSubtreeIntoContainer(parentComponent, vnode, container, callback) {
		var wrap = preact.h(ContextProvider, { context: parentComponent.context }, vnode);
		var c = render$1(wrap, container);
		if (callback) { callback(c); }
		return c._component || c.base;
	}
	
	
	function unmountComponentAtNode(container) {
		var existing = container._preactCompatRendered && container._preactCompatRendered.base;
		if (existing && existing.parentNode===container) {
			preact.render(preact.h(EmptyComponent), container, existing);
			return true;
		}
		return false;
	}
	
	
	
	var ARR = [];
	
	// This API is completely unnecessary for Preact, so it's basically passthrough.
	var Children = {
		map: function(children, fn, ctx) {
			if (children == null) { return null; }
			children = Children.toArray(children);
			if (ctx && ctx!==children) { fn = fn.bind(ctx); }
			return children.map(fn);
		},
		forEach: function(children, fn, ctx) {
			if (children == null) { return null; }
			children = Children.toArray(children);
			if (ctx && ctx!==children) { fn = fn.bind(ctx); }
			children.forEach(fn);
		},
		count: function(children) {
			return children && children.length || 0;
		},
		only: function(children) {
			children = Children.toArray(children);
			if (children.length!==1) { throw new Error('Children.only() expects only one child.'); }
			return children[0];
		},
		toArray: function(children) {
			return Array.isArray && Array.isArray(children) ? children : ARR.concat(children);
		}
	};
	
	
	/** Track current render() component for ref assignment */
	var currentComponent;
	
	
	function createFactory(type) {
		return createElement.bind(null, type);
	}
	
	
	var DOM = {};
	for (var i=ELEMENTS.length; i--; ) {
		DOM[ELEMENTS[i]] = createFactory(ELEMENTS[i]);
	}
	
	function upgradeToVNodes(arr, offset) {
		for (var i=offset || 0; i<arr.length; i++) {
			var obj = arr[i];
			if (Array.isArray(obj)) {
				upgradeToVNodes(obj);
			}
			else if (obj && typeof obj==='object' && !isValidElement(obj) && ((obj.props && obj.type) || (obj.attributes && obj.nodeName) || obj.children)) {
				arr[i] = createElement(obj.type || obj.nodeName, obj.props || obj.attributes, obj.children);
			}
		}
	}
	
	function isStatelessComponent(c) {
		return typeof c==='function' && !(c.prototype && c.prototype.render);
	}
	
	
	// wraps stateless functional components in a PropTypes validator
	function wrapStatelessComponent(WrappedComponent) {
		return createClass({
			displayName: WrappedComponent.displayName || WrappedComponent.name,
			render: function() {
				return WrappedComponent(this.props, this.context);
			}
		});
	}
	
	
	function statelessComponentHook(Ctor) {
		var Wrapped = Ctor[COMPONENT_WRAPPER_KEY];
		if (Wrapped) { return Wrapped===true ? Ctor : Wrapped; }
	
		Wrapped = wrapStatelessComponent(Ctor);
	
		Object.defineProperty(Wrapped, COMPONENT_WRAPPER_KEY, { configurable:true, value:true });
		Wrapped.displayName = Ctor.displayName;
		Wrapped.propTypes = Ctor.propTypes;
		Wrapped.defaultProps = Ctor.defaultProps;
	
		Object.defineProperty(Ctor, COMPONENT_WRAPPER_KEY, { configurable:true, value:Wrapped });
	
		return Wrapped;
	}
	
	
	function createElement() {
		var args = [], len = arguments.length;
		while ( len-- ) args[ len ] = arguments[ len ];
	
		upgradeToVNodes(args, 2);
		return normalizeVNode(preact.h.apply(void 0, args));
	}
	
	
	function normalizeVNode(vnode) {
		vnode.preactCompatNormalized = true;
	
		applyClassName(vnode);
	
		if (isStatelessComponent(vnode.nodeName)) {
			vnode.nodeName = statelessComponentHook(vnode.nodeName);
		}
	
		var ref = vnode.attributes.ref,
			type = ref && typeof ref;
		if (currentComponent && (type==='string' || type==='number')) {
			vnode.attributes.ref = createStringRefProxy(ref, currentComponent);
		}
	
		applyEventNormalization(vnode);
	
		return vnode;
	}
	
	
	function cloneElement$1(element, props) {
		var children = [], len = arguments.length - 2;
		while ( len-- > 0 ) children[ len ] = arguments[ len + 2 ];
	
		if (!isValidElement(element)) { return element; }
		var elementProps = element.attributes || element.props;
		var node = preact.h(
			element.nodeName || element.type,
			elementProps,
			element.children || elementProps && elementProps.children
		);
		// Only provide the 3rd argument if needed.
		// Arguments 3+ overwrite element.children in preactCloneElement
		var cloneArgs = [node, props];
		if (children && children.length) {
			cloneArgs.push(children);
		}
		else if (props && props.children) {
			cloneArgs.push(props.children);
		}
		return normalizeVNode(preact.cloneElement.apply(void 0, cloneArgs));
	}
	
	
	function isValidElement(element) {
		return element && ((element instanceof VNode) || element.$$typeof===REACT_ELEMENT_TYPE);
	}
	
	
	function createStringRefProxy(name, component) {
		return component._refProxies[name] || (component._refProxies[name] = function (resolved) {
			if (component && component.refs) {
				component.refs[name] = resolved;
				if (resolved===null) {
					delete component._refProxies[name];
					component = null;
				}
			}
		});
	}
	
	
	function applyEventNormalization(ref) {
		var nodeName = ref.nodeName;
		var attributes = ref.attributes;
	
		if (!attributes || typeof nodeName!=='string') { return; }
		var props = {};
		for (var i in attributes) {
			props[i.toLowerCase()] = i;
		}
		if (props.ondoubleclick) {
			attributes.ondblclick = attributes[props.ondoubleclick];
			delete attributes[props.ondoubleclick];
		}
		// for *textual inputs* (incl textarea), normalize `onChange` -> `onInput`:
		if (props.onchange && (nodeName==='textarea' || (nodeName.toLowerCase()==='input' && !/^fil|che|rad/i.test(attributes.type)))) {
			var normalized = props.oninput || 'oninput';
			if (!attributes[normalized]) {
				attributes[normalized] = multihook([attributes[normalized], attributes[props.onchange]]);
				delete attributes[props.onchange];
			}
		}
	}
	
	
	function applyClassName(ref) {
		var attributes = ref.attributes;
	
		if (!attributes) { return; }
		var cl = attributes.className || attributes.class;
		if (cl) { attributes.className = cl; }
	}
	
	
	function extend(base, props) {
		for (var key in props) {
			if (props.hasOwnProperty(key)) {
				base[key] = props[key];
			}
		}
		return base;
	}
	
	
	function shallowDiffers(a, b) {
		for (var i in a) { if (!(i in b)) { return true; } }
		for (var i$1 in b) { if (a[i$1]!==b[i$1]) { return true; } }
		return false;
	}
	
	
	function findDOMNode(component) {
		return component && component.base || component;
	}
	
	
	function F(){}
	
	function createClass(obj) {
		function cl(props, context) {
			bindAll(this);
			Component$1.call(this, props, context, BYPASS_HOOK);
			newComponentHook.call(this, props, context);
		}
	
		obj = extend({ constructor: cl }, obj);
	
		// We need to apply mixins here so that getDefaultProps is correctly mixed
		if (obj.mixins) {
			applyMixins(obj, collateMixins(obj.mixins));
		}
		if (obj.statics) {
			extend(cl, obj.statics);
		}
		if (obj.propTypes) {
			cl.propTypes = obj.propTypes;
		}
		if (obj.defaultProps) {
			cl.defaultProps = obj.defaultProps;
		}
		if (obj.getDefaultProps) {
			cl.defaultProps = obj.getDefaultProps();
		}
	
		F.prototype = Component$1.prototype;
		cl.prototype = extend(new F(), obj);
	
		cl.displayName = obj.displayName || 'Component';
	
		return cl;
	}
	
	
	// Flatten an Array of mixins to a map of method name to mixin implementations
	function collateMixins(mixins) {
		var keyed = {};
		for (var i=0; i<mixins.length; i++) {
			var mixin = mixins[i];
			for (var key in mixin) {
				if (mixin.hasOwnProperty(key) && typeof mixin[key]==='function') {
					(keyed[key] || (keyed[key]=[])).push(mixin[key]);
				}
			}
		}
		return keyed;
	}
	
	
	// apply a mapping of Arrays of mixin methods to a component prototype
	function applyMixins(proto, mixins) {
		for (var key in mixins) { if (mixins.hasOwnProperty(key)) {
			proto[key] = multihook(
				mixins[key].concat(proto[key] || ARR),
				key==='getDefaultProps' || key==='getInitialState' || key==='getChildContext'
			);
		} }
	}
	
	
	function bindAll(ctx) {
		for (var i in ctx) {
			var v = ctx[i];
			if (typeof v==='function' && !v.__bound && !AUTOBIND_BLACKLIST.hasOwnProperty(i)) {
				(ctx[i] = v.bind(ctx)).__bound = true;
			}
		}
	}
	
	
	function callMethod(ctx, m, args) {
		if (typeof m==='string') {
			m = ctx.constructor.prototype[m];
		}
		if (typeof m==='function') {
			return m.apply(ctx, args);
		}
	}
	
	function multihook(hooks, skipDuplicates) {
		return function() {
			var arguments$1 = arguments;
			var this$1 = this;
	
			var ret;
			for (var i=0; i<hooks.length; i++) {
				var r = callMethod(this$1, hooks[i], arguments$1);
	
				if (skipDuplicates && r!=null) {
					if (!ret) { ret = {}; }
					for (var key in r) { if (r.hasOwnProperty(key)) {
						ret[key] = r[key];
					} }
				}
				else if (typeof r!=='undefined') { ret = r; }
			}
			return ret;
		};
	}
	
	
	function newComponentHook(props, context) {
		propsHook.call(this, props, context);
		this.componentWillReceiveProps = multihook([propsHook, this.componentWillReceiveProps || 'componentWillReceiveProps']);
		this.render = multihook([propsHook, beforeRender, this.render || 'render', afterRender]);
	}
	
	
	function propsHook(props, context) {
		var this$1 = this;
	
		if (!props) { return; }
	
		// React annoyingly special-cases single children, and some react components are ridiculously strict about this.
		var c = props.children;
		if (c && Array.isArray(c) && c.length===1) {
			props.children = c[0];
	
			// but its totally still going to be an Array.
			if (props.children && typeof props.children==='object') {
				props.children.length = 1;
				props.children[0] = props.children;
			}
		}
	
		// add proptype checking
		if (DEV) {
			var ctor = typeof this==='function' ? this : this.constructor,
				propTypes = this.propTypes || ctor.propTypes;
			if (propTypes) {
				for (var prop in propTypes) {
					if (propTypes.hasOwnProperty(prop) && typeof propTypes[prop]==='function') {
						var displayName = this$1.displayName || ctor.name;
						var err = propTypes[prop](props, prop, displayName, 'prop');
						if (err) { console.error(new Error(err.message || err)); }
					}
				}
			}
		}
	}
	
	
	function beforeRender(props) {
		currentComponent = this;
	}
	
	function afterRender() {
		if (currentComponent===this) {
			currentComponent = null;
		}
	}
	
	
	
	function Component$1(props, context, opts) {
		preact.Component.call(this, props, context);
		this.state = this.getInitialState ? this.getInitialState() : {};
		this.refs = {};
		this._refProxies = {};
		if (opts!==BYPASS_HOOK) {
			newComponentHook.call(this, props, context);
		}
	}
	extend(Component$1.prototype = new preact.Component(), {
		constructor: Component$1,
	
		isReactComponent: {},
	
		replaceState: function(state, callback) {
			var this$1 = this;
	
			this.setState(state, callback);
			for (var i in this$1.state) {
				if (!(i in state)) {
					delete this$1.state[i];
				}
			}
		},
	
		getDOMNode: function() {
			return this.base;
		},
	
		isMounted: function() {
			return !!this.base;
		}
	});
	
	
	
	function PureComponent(props, context) {
		Component$1.call(this, props, context);
	}
	F.prototype = Component$1.prototype;
	PureComponent.prototype = new F();
	PureComponent.prototype.shouldComponentUpdate = function(props, state) {
		return shallowDiffers(this.props, props) || shallowDiffers(this.state, state);
	};
	
	
	
	var index = {
		version: version,
		DOM: DOM,
		PropTypes: PropTypes,
		Children: Children,
		render: render$1,
		createClass: createClass,
		createFactory: createFactory,
		createElement: createElement,
		cloneElement: cloneElement$1,
		isValidElement: isValidElement,
		findDOMNode: findDOMNode,
		unmountComponentAtNode: unmountComponentAtNode,
		Component: Component$1,
		PureComponent: PureComponent,
		unstable_renderSubtreeIntoContainer: renderSubtreeIntoContainer
	};
	
	return index;
	
	})));
	//# sourceMappingURL=preact-compat.js.map
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(189)))

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
	    factory(exports, module);
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, mod);
	    global.PropTypes = mod.exports;
	  }
	})(this, function (exports, module) {
	
	  'use strict';
	
	  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;
	
	  var ReactElement = {};
	
	  ReactElement.isValidElement = function (object) {
	    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	  };
	
	  var ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	
	  var emptyFunction = {
	    thatReturns: function thatReturns(what) {
	      return function () {
	        return what;
	      };
	    }
	  };
	
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator';
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }
	
	  var ANONYMOUS = '<<anonymous>>';
	
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),
	
	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker
	  };
	
	  function createChainableTypeChecker(validate) {
	    function checkType(isRequired, props, propName, componentName, location, propFullName) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;
	      if (props[propName] == null) {
	        var locationName = ReactPropTypeLocationNames[location];
	        if (isRequired) {
	          return new Error('Required ' + locationName + ' `' + propFullName + '` was not specified in ' + ('`' + componentName + '`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }
	
	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);
	
	    return chainedCheckType;
	  }
	
	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        var locationName = ReactPropTypeLocationNames[location];
	
	        var preciseType = getPreciseType(propValue);
	
	        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturns(null));
	  }
	
	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var locationName = ReactPropTypeLocationNames[location];
	        var propType = getPropType(propValue);
	        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']');
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!ReactElement.isValidElement(props[propName])) {
	        var locationName = ReactPropTypeLocationNames[location];
	        return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var locationName = ReactPropTypeLocationNames[location];
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      return createChainableTypeChecker(function () {
	        return new Error('Invalid argument supplied to oneOf, expected an instance of array.');
	      });
	    }
	
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (propValue === expectedValues[i]) {
	          return null;
	        }
	      }
	
	      var locationName = ReactPropTypeLocationNames[location];
	      var valuesString = JSON.stringify(expectedValues);
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        var locationName = ReactPropTypeLocationNames[location];
	        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      return createChainableTypeChecker(function () {
	        return new Error('Invalid argument supplied to oneOfType, expected an instance of array.');
	      });
	    }
	
	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName) == null) {
	          return null;
	        }
	      }
	
	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        var locationName = ReactPropTypeLocationNames[location];
	        return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        var locationName = ReactPropTypeLocationNames[location];
	        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || ReactElement.isValidElement(propValue)) {
	          return true;
	        }
	
	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }
	
	        return true;
	      default:
	        return false;
	    }
	  }
	
	  function isSymbol(propType, propValue) {
	    if (propType === 'symbol') {
	      return true;
	    }
	
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }
	
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }
	
	    return false;
	  }
	
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }
	
	  function getPreciseType(propValue) {
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }
	
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }
	
	  module.exports = ReactPropTypes;
	});
	
	//# sourceMappingURL=index.js.map

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	!function(global, factory) {
	     true ? factory(exports) : 'function' == typeof define && define.amd ? define([ 'exports' ], factory) : factory(global.preact = global.preact || {});
	}(this, function(exports) {
	    function VNode(nodeName, attributes, children) {
	        this.nodeName = nodeName;
	        this.attributes = attributes;
	        this.children = children;
	        this.key = attributes && attributes.key;
	    }
	    function h(nodeName, attributes) {
	        var children, lastSimple, child, simple, i;
	        for (i = arguments.length; i-- > 2; ) stack.push(arguments[i]);
	        if (attributes && attributes.children) {
	            if (!stack.length) stack.push(attributes.children);
	            delete attributes.children;
	        }
	        while (stack.length) if ((child = stack.pop()) instanceof Array) for (i = child.length; i--; ) stack.push(child[i]); else if (null != child && child !== !0 && child !== !1) {
	            if ('number' == typeof child) child = String(child);
	            simple = 'string' == typeof child;
	            if (simple && lastSimple) children[children.length - 1] += child; else {
	                (children || (children = [])).push(child);
	                lastSimple = simple;
	            }
	        }
	        var p = new VNode(nodeName, attributes || void 0, children || EMPTY_CHILDREN);
	        if (options.vnode) options.vnode(p);
	        return p;
	    }
	    function extend(obj, props) {
	        if (props) for (var i in props) obj[i] = props[i];
	        return obj;
	    }
	    function clone(obj) {
	        return extend({}, obj);
	    }
	    function delve(obj, key) {
	        for (var p = key.split('.'), i = 0; i < p.length && obj; i++) obj = obj[p[i]];
	        return obj;
	    }
	    function isFunction(obj) {
	        return 'function' == typeof obj;
	    }
	    function isString(obj) {
	        return 'string' == typeof obj;
	    }
	    function hashToClassName(c) {
	        var str = '';
	        for (var prop in c) if (c[prop]) {
	            if (str) str += ' ';
	            str += prop;
	        }
	        return str;
	    }
	    function cloneElement(vnode, props) {
	        return h(vnode.nodeName, extend(clone(vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
	    }
	    function createLinkedState(component, key, eventPath) {
	        var path = key.split('.');
	        return function(e) {
	            var t = e && e.target || this, state = {}, obj = state, v = isString(eventPath) ? delve(e, eventPath) : t.nodeName ? t.type.match(/^che|rad/) ? t.checked : t.value : e, i = 0;
	            for (;i < path.length - 1; i++) obj = obj[path[i]] || (obj[path[i]] = !i && component.state[path[i]] || {});
	            obj[path[i]] = v;
	            component.setState(state);
	        };
	    }
	    function enqueueRender(component) {
	        if (!component._dirty && (component._dirty = !0) && 1 == items.push(component)) (options.debounceRendering || defer)(rerender);
	    }
	    function rerender() {
	        var p, list = items;
	        items = [];
	        while (p = list.pop()) if (p._dirty) renderComponent(p);
	    }
	    function isFunctionalComponent(vnode) {
	        var nodeName = vnode && vnode.nodeName;
	        return nodeName && isFunction(nodeName) && !(nodeName.prototype && nodeName.prototype.render);
	    }
	    function buildFunctionalComponent(vnode, context) {
	        return vnode.nodeName(getNodeProps(vnode), context || EMPTY);
	    }
	    function isSameNodeType(node, vnode) {
	        if (isString(vnode)) return node instanceof Text;
	        if (isString(vnode.nodeName)) return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
	        if (isFunction(vnode.nodeName)) return (node._componentConstructor ? node._componentConstructor === vnode.nodeName : !0) || isFunctionalComponent(vnode); else return;
	    }
	    function isNamedNode(node, nodeName) {
	        return node.normalizedNodeName === nodeName || toLowerCase(node.nodeName) === toLowerCase(nodeName);
	    }
	    function getNodeProps(vnode) {
	        var props = clone(vnode.attributes);
	        props.children = vnode.children;
	        var defaultProps = vnode.nodeName.defaultProps;
	        if (defaultProps) for (var i in defaultProps) if (void 0 === props[i]) props[i] = defaultProps[i];
	        return props;
	    }
	    function removeNode(node) {
	        var p = node.parentNode;
	        if (p) p.removeChild(node);
	    }
	    function setAccessor(node, name, old, value, isSvg) {
	        if ('className' === name) name = 'class';
	        if ('class' === name && value && 'object' == typeof value) value = hashToClassName(value);
	        if ('key' === name) ; else if ('class' === name && !isSvg) node.className = value || ''; else if ('style' === name) {
	            if (!value || isString(value) || isString(old)) node.style.cssText = value || '';
	            if (value && 'object' == typeof value) {
	                if (!isString(old)) for (var i in old) if (!(i in value)) node.style[i] = '';
	                for (var i in value) node.style[i] = 'number' == typeof value[i] && !NON_DIMENSION_PROPS[i] ? value[i] + 'px' : value[i];
	            }
	        } else if ('dangerouslySetInnerHTML' === name) {
	            if (value) node.innerHTML = value.__html || '';
	        } else if ('o' == name[0] && 'n' == name[1]) {
	            var l = node._listeners || (node._listeners = {});
	            name = toLowerCase(name.substring(2));
	            if (value) {
	                if (!l[name]) node.addEventListener(name, eventProxy, !!NON_BUBBLING_EVENTS[name]);
	            } else if (l[name]) node.removeEventListener(name, eventProxy, !!NON_BUBBLING_EVENTS[name]);
	            l[name] = value;
	        } else if ('list' !== name && 'type' !== name && !isSvg && name in node) {
	            setProperty(node, name, null == value ? '' : value);
	            if (null == value || value === !1) node.removeAttribute(name);
	        } else {
	            var ns = isSvg && name.match(/^xlink\:?(.+)/);
	            if (null == value || value === !1) if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', toLowerCase(ns[1])); else node.removeAttribute(name); else if ('object' != typeof value && !isFunction(value)) if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', toLowerCase(ns[1]), value); else node.setAttribute(name, value);
	        }
	    }
	    function setProperty(node, name, value) {
	        try {
	            node[name] = value;
	        } catch (e) {}
	    }
	    function eventProxy(e) {
	        return this._listeners[e.type](options.event && options.event(e) || e);
	    }
	    function collectNode(node) {
	        removeNode(node);
	        if (node instanceof Element) {
	            node._component = node._componentConstructor = null;
	            var _name = node.normalizedNodeName || toLowerCase(node.nodeName);
	            (nodes[_name] || (nodes[_name] = [])).push(node);
	        }
	    }
	    function createNode(nodeName, isSvg) {
	        var name = toLowerCase(nodeName), node = nodes[name] && nodes[name].pop() || (isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName));
	        node.normalizedNodeName = name;
	        return node;
	    }
	    function flushMounts() {
	        var c;
	        while (c = mounts.pop()) {
	            if (options.afterMount) options.afterMount(c);
	            if (c.componentDidMount) c.componentDidMount();
	        }
	    }
	    function diff(dom, vnode, context, mountAll, parent, componentRoot) {
	        if (!diffLevel++) {
	            isSvgMode = parent && void 0 !== parent.ownerSVGElement;
	            hydrating = dom && !(ATTR_KEY in dom);
	        }
	        var ret = idiff(dom, vnode, context, mountAll);
	        if (parent && ret.parentNode !== parent) parent.appendChild(ret);
	        if (!--diffLevel) {
	            hydrating = !1;
	            if (!componentRoot) flushMounts();
	        }
	        return ret;
	    }
	    function idiff(dom, vnode, context, mountAll) {
	        var ref = vnode && vnode.attributes && vnode.attributes.ref;
	        while (isFunctionalComponent(vnode)) vnode = buildFunctionalComponent(vnode, context);
	        if (null == vnode) vnode = '';
	        if (isString(vnode)) {
	            if (dom && dom instanceof Text && dom.parentNode) {
	                if (dom.nodeValue != vnode) dom.nodeValue = vnode;
	            } else {
	                if (dom) recollectNodeTree(dom);
	                dom = document.createTextNode(vnode);
	            }
	            return dom;
	        }
	        if (isFunction(vnode.nodeName)) return buildComponentFromVNode(dom, vnode, context, mountAll);
	        var out = dom, nodeName = String(vnode.nodeName), prevSvgMode = isSvgMode, vchildren = vnode.children;
	        isSvgMode = 'svg' === nodeName ? !0 : 'foreignObject' === nodeName ? !1 : isSvgMode;
	        if (!dom) out = createNode(nodeName, isSvgMode); else if (!isNamedNode(dom, nodeName)) {
	            out = createNode(nodeName, isSvgMode);
	            while (dom.firstChild) out.appendChild(dom.firstChild);
	            if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
	            recollectNodeTree(dom);
	        }
	        var fc = out.firstChild, props = out[ATTR_KEY];
	        if (!props) {
	            out[ATTR_KEY] = props = {};
	            for (var a = out.attributes, i = a.length; i--; ) props[a[i].name] = a[i].value;
	        }
	        if (!hydrating && vchildren && 1 === vchildren.length && 'string' == typeof vchildren[0] && fc && fc instanceof Text && !fc.nextSibling) {
	            if (fc.nodeValue != vchildren[0]) fc.nodeValue = vchildren[0];
	        } else if (vchildren && vchildren.length || fc) innerDiffNode(out, vchildren, context, mountAll, !!props.dangerouslySetInnerHTML);
	        diffAttributes(out, vnode.attributes, props);
	        if (ref) (props.ref = ref)(out);
	        isSvgMode = prevSvgMode;
	        return out;
	    }
	    function innerDiffNode(dom, vchildren, context, mountAll, absorb) {
	        var j, c, vchild, child, originalChildren = dom.childNodes, children = [], keyed = {}, keyedLen = 0, min = 0, len = originalChildren.length, childrenLen = 0, vlen = vchildren && vchildren.length;
	        if (len) for (var i = 0; i < len; i++) {
	            var _child = originalChildren[i], props = _child[ATTR_KEY], key = vlen ? (c = _child._component) ? c.__key : props ? props.key : null : null;
	            if (null != key) {
	                keyedLen++;
	                keyed[key] = _child;
	            } else if (hydrating || absorb || props || _child instanceof Text) children[childrenLen++] = _child;
	        }
	        if (vlen) for (var i = 0; i < vlen; i++) {
	            vchild = vchildren[i];
	            child = null;
	            var key = vchild.key;
	            if (null != key) {
	                if (keyedLen && key in keyed) {
	                    child = keyed[key];
	                    keyed[key] = void 0;
	                    keyedLen--;
	                }
	            } else if (!child && min < childrenLen) for (j = min; j < childrenLen; j++) {
	                c = children[j];
	                if (c && isSameNodeType(c, vchild)) {
	                    child = c;
	                    children[j] = void 0;
	                    if (j === childrenLen - 1) childrenLen--;
	                    if (j === min) min++;
	                    break;
	                }
	            }
	            child = idiff(child, vchild, context, mountAll);
	            if (child && child !== dom) if (i >= len) dom.appendChild(child); else if (child !== originalChildren[i]) {
	                if (child === originalChildren[i + 1]) removeNode(originalChildren[i]);
	                dom.insertBefore(child, originalChildren[i] || null);
	            }
	        }
	        if (keyedLen) for (var i in keyed) if (keyed[i]) recollectNodeTree(keyed[i]);
	        while (min <= childrenLen) {
	            child = children[childrenLen--];
	            if (child) recollectNodeTree(child);
	        }
	    }
	    function recollectNodeTree(node, unmountOnly) {
	        var component = node._component;
	        if (component) unmountComponent(component, !unmountOnly); else {
	            if (node[ATTR_KEY] && node[ATTR_KEY].ref) node[ATTR_KEY].ref(null);
	            if (!unmountOnly) collectNode(node);
	            var c;
	            while (c = node.lastChild) recollectNodeTree(c, unmountOnly);
	        }
	    }
	    function diffAttributes(dom, attrs, old) {
	        var name;
	        for (name in old) if (!(attrs && name in attrs) && null != old[name]) setAccessor(dom, name, old[name], old[name] = void 0, isSvgMode);
	        if (attrs) for (name in attrs) if (!('children' === name || 'innerHTML' === name || name in old && attrs[name] === ('value' === name || 'checked' === name ? dom[name] : old[name]))) setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
	    }
	    function collectComponent(component) {
	        var name = component.constructor.name, list = components[name];
	        if (list) list.push(component); else components[name] = [ component ];
	    }
	    function createComponent(Ctor, props, context) {
	        var inst = new Ctor(props, context), list = components[Ctor.name];
	        Component.call(inst, props, context);
	        if (list) for (var i = list.length; i--; ) if (list[i].constructor === Ctor) {
	            inst.nextBase = list[i].nextBase;
	            list.splice(i, 1);
	            break;
	        }
	        return inst;
	    }
	    function setComponentProps(component, props, opts, context, mountAll) {
	        if (!component._disable) {
	            component._disable = !0;
	            if (component.__ref = props.ref) delete props.ref;
	            if (component.__key = props.key) delete props.key;
	            if (!component.base || mountAll) {
	                if (component.componentWillMount) component.componentWillMount();
	            } else if (component.componentWillReceiveProps) component.componentWillReceiveProps(props, context);
	            if (context && context !== component.context) {
	                if (!component.prevContext) component.prevContext = component.context;
	                component.context = context;
	            }
	            if (!component.prevProps) component.prevProps = component.props;
	            component.props = props;
	            component._disable = !1;
	            if (0 !== opts) if (1 === opts || options.syncComponentUpdates !== !1 || !component.base) renderComponent(component, 1, mountAll); else enqueueRender(component);
	            if (component.__ref) component.__ref(component);
	        }
	    }
	    function renderComponent(component, opts, mountAll, isChild) {
	        if (!component._disable) {
	            var skip, rendered, inst, cbase, props = component.props, state = component.state, context = component.context, previousProps = component.prevProps || props, previousState = component.prevState || state, previousContext = component.prevContext || context, isUpdate = component.base, nextBase = component.nextBase, initialBase = isUpdate || nextBase, initialChildComponent = component._component;
	            if (isUpdate) {
	                component.props = previousProps;
	                component.state = previousState;
	                component.context = previousContext;
	                if (2 !== opts && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === !1) skip = !0; else if (component.componentWillUpdate) component.componentWillUpdate(props, state, context);
	                component.props = props;
	                component.state = state;
	                component.context = context;
	            }
	            component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
	            component._dirty = !1;
	            if (!skip) {
	                if (component.render) rendered = component.render(props, state, context);
	                if (component.getChildContext) context = extend(clone(context), component.getChildContext());
	                while (isFunctionalComponent(rendered)) rendered = buildFunctionalComponent(rendered, context);
	                var toUnmount, base, childComponent = rendered && rendered.nodeName;
	                if (isFunction(childComponent)) {
	                    var childProps = getNodeProps(rendered);
	                    inst = initialChildComponent;
	                    if (inst && inst.constructor === childComponent && childProps.key == inst.__key) setComponentProps(inst, childProps, 1, context); else {
	                        toUnmount = inst;
	                        inst = createComponent(childComponent, childProps, context);
	                        inst.nextBase = inst.nextBase || nextBase;
	                        inst._parentComponent = component;
	                        component._component = inst;
	                        setComponentProps(inst, childProps, 0, context);
	                        renderComponent(inst, 1, mountAll, !0);
	                    }
	                    base = inst.base;
	                } else {
	                    cbase = initialBase;
	                    toUnmount = initialChildComponent;
	                    if (toUnmount) cbase = component._component = null;
	                    if (initialBase || 1 === opts) {
	                        if (cbase) cbase._component = null;
	                        base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, !0);
	                    }
	                }
	                if (initialBase && base !== initialBase && inst !== initialChildComponent) {
	                    var baseParent = initialBase.parentNode;
	                    if (baseParent && base !== baseParent) {
	                        baseParent.replaceChild(base, initialBase);
	                        if (!toUnmount) {
	                            initialBase._component = null;
	                            recollectNodeTree(initialBase);
	                        }
	                    }
	                }
	                if (toUnmount) unmountComponent(toUnmount, base !== initialBase);
	                component.base = base;
	                if (base && !isChild) {
	                    var componentRef = component, t = component;
	                    while (t = t._parentComponent) (componentRef = t).base = base;
	                    base._component = componentRef;
	                    base._componentConstructor = componentRef.constructor;
	                }
	            }
	            if (!isUpdate || mountAll) mounts.unshift(component); else if (!skip) {
	                if (component.componentDidUpdate) component.componentDidUpdate(previousProps, previousState, previousContext);
	                if (options.afterUpdate) options.afterUpdate(component);
	            }
	            var fn, cb = component._renderCallbacks;
	            if (cb) while (fn = cb.pop()) fn.call(component);
	            if (!diffLevel && !isChild) flushMounts();
	        }
	    }
	    function buildComponentFromVNode(dom, vnode, context, mountAll) {
	        var c = dom && dom._component, originalComponent = c, oldDom = dom, isDirectOwner = c && dom._componentConstructor === vnode.nodeName, isOwner = isDirectOwner, props = getNodeProps(vnode);
	        while (c && !isOwner && (c = c._parentComponent)) isOwner = c.constructor === vnode.nodeName;
	        if (c && isOwner && (!mountAll || c._component)) {
	            setComponentProps(c, props, 3, context, mountAll);
	            dom = c.base;
	        } else {
	            if (originalComponent && !isDirectOwner) {
	                unmountComponent(originalComponent, !0);
	                dom = oldDom = null;
	            }
	            c = createComponent(vnode.nodeName, props, context);
	            if (dom && !c.nextBase) {
	                c.nextBase = dom;
	                oldDom = null;
	            }
	            setComponentProps(c, props, 1, context, mountAll);
	            dom = c.base;
	            if (oldDom && dom !== oldDom) {
	                oldDom._component = null;
	                recollectNodeTree(oldDom);
	            }
	        }
	        return dom;
	    }
	    function unmountComponent(component, remove) {
	        if (options.beforeUnmount) options.beforeUnmount(component);
	        var base = component.base;
	        component._disable = !0;
	        if (component.componentWillUnmount) component.componentWillUnmount();
	        component.base = null;
	        var inner = component._component;
	        if (inner) unmountComponent(inner, remove); else if (base) {
	            if (base[ATTR_KEY] && base[ATTR_KEY].ref) base[ATTR_KEY].ref(null);
	            component.nextBase = base;
	            if (remove) {
	                removeNode(base);
	                collectComponent(component);
	            }
	            var c;
	            while (c = base.lastChild) recollectNodeTree(c, !remove);
	        }
	        if (component.__ref) component.__ref(null);
	        if (component.componentDidUnmount) component.componentDidUnmount();
	    }
	    function Component(props, context) {
	        this._dirty = !0;
	        this.context = context;
	        this.props = props;
	        if (!this.state) this.state = {};
	    }
	    function render(vnode, parent, merge) {
	        return diff(merge, vnode, {}, !1, parent);
	    }
	    var options = {};
	    var stack = [];
	    var EMPTY_CHILDREN = [];
	    var lcCache = {};
	    var toLowerCase = function(s) {
	        return lcCache[s] || (lcCache[s] = s.toLowerCase());
	    };
	    var resolved = 'undefined' != typeof Promise && Promise.resolve();
	    var defer = resolved ? function(f) {
	        resolved.then(f);
	    } : setTimeout;
	    var EMPTY = {};
	    var ATTR_KEY = 'undefined' != typeof Symbol ? Symbol.for('preactattr') : '__preactattr_';
	    var NON_DIMENSION_PROPS = {
	        boxFlex: 1,
	        boxFlexGroup: 1,
	        columnCount: 1,
	        fillOpacity: 1,
	        flex: 1,
	        flexGrow: 1,
	        flexPositive: 1,
	        flexShrink: 1,
	        flexNegative: 1,
	        fontWeight: 1,
	        lineClamp: 1,
	        lineHeight: 1,
	        opacity: 1,
	        order: 1,
	        orphans: 1,
	        strokeOpacity: 1,
	        widows: 1,
	        zIndex: 1,
	        zoom: 1
	    };
	    var NON_BUBBLING_EVENTS = {
	        blur: 1,
	        error: 1,
	        focus: 1,
	        load: 1,
	        resize: 1,
	        scroll: 1
	    };
	    var items = [];
	    var nodes = {};
	    var mounts = [];
	    var diffLevel = 0;
	    var isSvgMode = !1;
	    var hydrating = !1;
	    var components = {};
	    extend(Component.prototype, {
	        linkState: function(key, eventPath) {
	            var c = this._linkedStates || (this._linkedStates = {});
	            return c[key + eventPath] || (c[key + eventPath] = createLinkedState(this, key, eventPath));
	        },
	        setState: function(state, callback) {
	            var s = this.state;
	            if (!this.prevState) this.prevState = clone(s);
	            extend(s, isFunction(state) ? state(s, this.props) : state);
	            if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
	            enqueueRender(this);
	        },
	        forceUpdate: function() {
	            renderComponent(this, 2);
	        },
	        render: function() {}
	    });
	    exports.h = h;
	    exports.cloneElement = cloneElement;
	    exports.Component = Component;
	    exports.render = render;
	    exports.rerender = rerender;
	    exports.options = options;
	});
	//# sourceMappingURL=preact.js.map

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * preact plugin that provides Polyglot and date-fns helpers using a Higher Order Component.
	 *
	 */
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.translate = exports.I18n = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(194);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _nodePolyglot = __webpack_require__(198);
	
	var _nodePolyglot2 = _interopRequireDefault(_nodePolyglot);
	
	var _format = __webpack_require__(221);
	
	var _format2 = _interopRequireDefault(_format);
	
	var _en = __webpack_require__(238);
	
	var _en2 = _interopRequireDefault(_en);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var initPolyglot = function initPolyglot(context, lang) {
	  var polyglot = new _nodePolyglot2.default({
	    phrases: _en2.default,
	    locale: 'en'
	  });
	
	  // Load global locales
	  if (lang && lang !== 'en') {
	    try {
	      var dict = __webpack_require__(239)("./" + lang);
	      polyglot.extend(dict);
	      polyglot.locale(lang);
	    } catch (e) {
	      console.warn('The dict phrases for "' + lang + '" can\'t be loaded');
	    }
	  }
	
	  // Load context locales
	  if (context) {
	    var _dict = !(function webpackMissingModule() { var e = new Error("Cannot find module \"../contexts\""); e.code = 'MODULE_NOT_FOUND'; throw e; }());
	    polyglot.extend(_dict);
	  }
	
	  return polyglot;
	};
	
	var initFormat = function initFormat(lang) {
	  var locales = {
	    en: __webpack_require__(234)
	  };
	  if (lang && lang !== 'en') {
	    try {
	      locales[lang] = __webpack_require__(240)("./" + lang);
	    } catch (e) {
	      console.warn('The "' + lang + '" locale isn\'t supported by date-fns');
	    }
	  }
	  return function (date, formatStr) {
	    return (0, _format2.default)(date, formatStr, { locale: locales[lang] });
	  };
	};
	
	// Provider root component
	
	var I18n = exports.I18n = function (_Component) {
	  _inherits(I18n, _Component);
	
	  function I18n(props) {
	    _classCallCheck(this, I18n);
	
	    var _this = _possibleConstructorReturn(this, (I18n.__proto__ || Object.getPrototypeOf(I18n)).call(this, props));
	
	    _this.polyglot = initPolyglot(props.context, props.lang);
	    _this.format = initFormat(props.lang);
	    return _this;
	  }
	
	  _createClass(I18n, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        t: this.polyglot.t.bind(this.polyglot),
	        f: this.format
	      };
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      if (newProps.locale !== this.props.locale) {
	        this.polyglot = initPolyglot(newProps.context, newProps.lang);
	        this.format = initFormat(newProps.lang);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.props.children && this.props.children[0] || null;
	    }
	  }]);
	
	  return I18n;
	}(_react.Component);
	
	I18n.childContextTypes = {
	  t: _react2.default.PropTypes.func,
	  f: _react2.default.PropTypes.func
	};
	
	// higher order decorator for components that need `t` and/or `f`
	var translate = exports.translate = function translate() {
	  return function (WrappedComponent) {
	    var _translate = function _translate(props, context) {
	      return _react2.default.createElement(WrappedComponent, _extends({}, props, { t: context.t, f: context.f }));
	    };
	    return _translate;
	  };
	};

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	//     (c) 2012-2016 Airbnb, Inc.
	//
	//     polyglot.js may be freely distributed under the terms of the BSD
	//     license. For all licensing information, details, and documention:
	//     http://airbnb.github.com/polyglot.js
	//
	//
	// Polyglot.js is an I18n helper library written in JavaScript, made to
	// work both in the browser and in Node. It provides a simple solution for
	// interpolation and pluralization, based off of Airbnb's
	// experience adding I18n functionality to its Backbone.js and Node apps.
	//
	// Polylglot is agnostic to your translation backend. It doesn't perform any
	// translation; it simply gives you a way to manage translated phrases from
	// your client- or server-side JavaScript application.
	//
	
	'use strict';
	
	var forEach = __webpack_require__(199);
	var warning = __webpack_require__(201);
	var has = __webpack_require__(202);
	var trim = __webpack_require__(205);
	
	var warn = function warn(message) {
	  warning(false, message);
	};
	
	var replace = String.prototype.replace;
	var split = String.prototype.split;
	
	// #### Pluralization methods
	// The string that separates the different phrase possibilities.
	var delimeter = '||||';
	
	// Mapping from pluralization group plural logic.
	var pluralTypes = {
	  arabic: function (n) {
	    // http://www.arabeyes.org/Plural_Forms
	    if (n < 3) { return n; }
	    if (n % 100 >= 3 && n % 100 <= 10) return 3;
	    return n % 100 >= 11 ? 4 : 5;
	  },
	  chinese: function () { return 0; },
	  german: function (n) { return n !== 1 ? 1 : 0; },
	  french: function (n) { return n > 1 ? 1 : 0; },
	  russian: function (n) {
	    if (n % 10 === 1 && n % 100 !== 11) { return 0; }
	    return n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
	  },
	  czech: function (n) {
	    if (n === 1) { return 0; }
	    return (n >= 2 && n <= 4) ? 1 : 2;
	  },
	  polish: function (n) {
	    if (n === 1) { return 0; }
	    return n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
	  },
	  icelandic: function (n) { return (n % 10 !== 1 || n % 100 === 11) ? 1 : 0; }
	};
	
	// Mapping from pluralization group to individual locales.
	var pluralTypeToLanguages = {
	  arabic: ['ar'],
	  chinese: ['fa', 'id', 'ja', 'ko', 'lo', 'ms', 'th', 'tr', 'zh'],
	  german: ['da', 'de', 'en', 'es', 'fi', 'el', 'he', 'hu', 'it', 'nl', 'no', 'pt', 'sv'],
	  french: ['fr', 'tl', 'pt-br'],
	  russian: ['hr', 'ru', 'lt'],
	  czech: ['cs', 'sk'],
	  polish: ['pl'],
	  icelandic: ['is']
	};
	
	function langToTypeMap(mapping) {
	  var ret = {};
	  forEach(mapping, function (langs, type) {
	    forEach(langs, function (lang) {
	      ret[lang] = type;
	    });
	  });
	  return ret;
	}
	
	function pluralTypeName(locale) {
	  var langToPluralType = langToTypeMap(pluralTypeToLanguages);
	  return langToPluralType[locale]
	    || langToPluralType[split.call(locale, /-/, 1)[0]]
	    || langToPluralType.en;
	}
	
	function pluralTypeIndex(locale, count) {
	  return pluralTypes[pluralTypeName(locale)](count);
	}
	
	var dollarRegex = /\$/g;
	var dollarBillsYall = '$$';
	var tokenRegex = /%\{(.*?)\}/g;
	
	// ### transformPhrase(phrase, substitutions, locale)
	//
	// Takes a phrase string and transforms it by choosing the correct
	// plural form and interpolating it.
	//
	//     transformPhrase('Hello, %{name}!', {name: 'Spike'});
	//     // "Hello, Spike!"
	//
	// The correct plural form is selected if substitutions.smart_count
	// is set. You can pass in a number instead of an Object as `substitutions`
	// as a shortcut for `smart_count`.
	//
	//     transformPhrase('%{smart_count} new messages |||| 1 new message', {smart_count: 1}, 'en');
	//     // "1 new message"
	//
	//     transformPhrase('%{smart_count} new messages |||| 1 new message', {smart_count: 2}, 'en');
	//     // "2 new messages"
	//
	//     transformPhrase('%{smart_count} new messages |||| 1 new message', 5, 'en');
	//     // "5 new messages"
	//
	// You should pass in a third argument, the locale, to specify the correct plural type.
	// It defaults to `'en'` with 2 plural forms.
	function transformPhrase(phrase, substitutions, locale) {
	  if (typeof phrase !== 'string') {
	    throw new TypeError('Polyglot.transformPhrase expects argument #1 to be string');
	  }
	
	  if (substitutions == null) {
	    return phrase;
	  }
	
	  var result = phrase;
	
	  // allow number as a pluralization shortcut
	  var options = typeof substitutions === 'number' ? { smart_count: substitutions } : substitutions;
	
	  // Select plural form: based on a phrase text that contains `n`
	  // plural forms separated by `delimeter`, a `locale`, and a `substitutions.smart_count`,
	  // choose the correct plural form. This is only done if `count` is set.
	  if (options.smart_count != null && result) {
	    var texts = split.call(result, delimeter);
	    result = trim(texts[pluralTypeIndex(locale || 'en', options.smart_count)] || texts[0]);
	  }
	
	  // Interpolate: Creates a `RegExp` object for each interpolation placeholder.
	  result = replace.call(result, tokenRegex, function (expression, argument) {
	    if (!has(options, argument) || options[argument] == null) { return expression; }
	    // Ensure replacement value is escaped to prevent special $-prefixed regex replace tokens.
	    return replace.call(options[argument], dollarRegex, dollarBillsYall);
	  });
	
	  return result;
	}
	
	// ### Polyglot class constructor
	function Polyglot(options) {
	  var opts = options || {};
	  this.phrases = {};
	  this.extend(opts.phrases || {});
	  this.currentLocale = opts.locale || 'en';
	  var allowMissing = opts.allowMissing ? transformPhrase : null;
	  this.onMissingKey = typeof opts.onMissingKey === 'function' ? opts.onMissingKey : allowMissing;
	  this.warn = opts.warn || warn;
	}
	
	// ### polyglot.locale([locale])
	//
	// Get or set locale. Internally, Polyglot only uses locale for pluralization.
	Polyglot.prototype.locale = function (newLocale) {
	  if (newLocale) this.currentLocale = newLocale;
	  return this.currentLocale;
	};
	
	// ### polyglot.extend(phrases)
	//
	// Use `extend` to tell Polyglot how to translate a given key.
	//
	//     polyglot.extend({
	//       "hello": "Hello",
	//       "hello_name": "Hello, %{name}"
	//     });
	//
	// The key can be any string.  Feel free to call `extend` multiple times;
	// it will override any phrases with the same key, but leave existing phrases
	// untouched.
	//
	// It is also possible to pass nested phrase objects, which get flattened
	// into an object with the nested keys concatenated using dot notation.
	//
	//     polyglot.extend({
	//       "nav": {
	//         "hello": "Hello",
	//         "hello_name": "Hello, %{name}",
	//         "sidebar": {
	//           "welcome": "Welcome"
	//         }
	//       }
	//     });
	//
	//     console.log(polyglot.phrases);
	//     // {
	//     //   'nav.hello': 'Hello',
	//     //   'nav.hello_name': 'Hello, %{name}',
	//     //   'nav.sidebar.welcome': 'Welcome'
	//     // }
	//
	// `extend` accepts an optional second argument, `prefix`, which can be used
	// to prefix every key in the phrases object with some string, using dot
	// notation.
	//
	//     polyglot.extend({
	//       "hello": "Hello",
	//       "hello_name": "Hello, %{name}"
	//     }, "nav");
	//
	//     console.log(polyglot.phrases);
	//     // {
	//     //   'nav.hello': 'Hello',
	//     //   'nav.hello_name': 'Hello, %{name}'
	//     // }
	//
	// This feature is used internally to support nested phrase objects.
	Polyglot.prototype.extend = function (morePhrases, prefix) {
	  forEach(morePhrases, function (phrase, key) {
	    var prefixedKey = prefix ? prefix + '.' + key : key;
	    if (typeof phrase === 'object') {
	      this.extend(phrase, prefixedKey);
	    } else {
	      this.phrases[prefixedKey] = phrase;
	    }
	  }, this);
	};
	
	// ### polyglot.unset(phrases)
	// Use `unset` to selectively remove keys from a polyglot instance.
	//
	//     polyglot.unset("some_key");
	//     polyglot.unset({
	//       "hello": "Hello",
	//       "hello_name": "Hello, %{name}"
	//     });
	//
	// The unset method can take either a string (for the key), or an object hash with
	// the keys that you would like to unset.
	Polyglot.prototype.unset = function (morePhrases, prefix) {
	  if (typeof morePhrases === 'string') {
	    delete this.phrases[morePhrases];
	  } else {
	    forEach(morePhrases, function (phrase, key) {
	      var prefixedKey = prefix ? prefix + '.' + key : key;
	      if (typeof phrase === 'object') {
	        this.unset(phrase, prefixedKey);
	      } else {
	        delete this.phrases[prefixedKey];
	      }
	    }, this);
	  }
	};
	
	// ### polyglot.clear()
	//
	// Clears all phrases. Useful for special cases, such as freeing
	// up memory if you have lots of phrases but no longer need to
	// perform any translation. Also used internally by `replace`.
	Polyglot.prototype.clear = function () {
	  this.phrases = {};
	};
	
	// ### polyglot.replace(phrases)
	//
	// Completely replace the existing phrases with a new set of phrases.
	// Normally, just use `extend` to add more phrases, but under certain
	// circumstances, you may want to make sure no old phrases are lying around.
	Polyglot.prototype.replace = function (newPhrases) {
	  this.clear();
	  this.extend(newPhrases);
	};
	
	
	// ### polyglot.t(key, options)
	//
	// The most-used method. Provide a key, and `t` will return the
	// phrase.
	//
	//     polyglot.t("hello");
	//     => "Hello"
	//
	// The phrase value is provided first by a call to `polyglot.extend()` or
	// `polyglot.replace()`.
	//
	// Pass in an object as the second argument to perform interpolation.
	//
	//     polyglot.t("hello_name", {name: "Spike"});
	//     => "Hello, Spike"
	//
	// If you like, you can provide a default value in case the phrase is missing.
	// Use the special option key "_" to specify a default.
	//
	//     polyglot.t("i_like_to_write_in_language", {
	//       _: "I like to write in %{language}.",
	//       language: "JavaScript"
	//     });
	//     => "I like to write in JavaScript."
	//
	Polyglot.prototype.t = function (key, options) {
	  var phrase, result;
	  var opts = options == null ? {} : options;
	  if (typeof this.phrases[key] === 'string') {
	    phrase = this.phrases[key];
	  } else if (typeof opts._ === 'string') {
	    phrase = opts._;
	  } else if (this.onMissingKey) {
	    var onMissingKey = this.onMissingKey;
	    result = onMissingKey(key, opts, this.currentLocale);
	  } else {
	    this.warn('Missing translation for key: "' + key + '"');
	    result = key;
	  }
	  if (typeof phrase === 'string') {
	    result = transformPhrase(phrase, opts, this.currentLocale);
	  }
	  return result;
	};
	
	
	// ### polyglot.has(key)
	//
	// Check if polyglot has a translation for given key
	Polyglot.prototype.has = function (key) {
	  return has(this.phrases, key);
	};
	
	// export transformPhrase
	Polyglot.transformPhrase = transformPhrase;
	
	module.exports = Polyglot;


/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(200)
	
	module.exports = forEach
	
	var toString = Object.prototype.toString
	var hasOwnProperty = Object.prototype.hasOwnProperty
	
	function forEach(list, iterator, context) {
	    if (!isFunction(iterator)) {
	        throw new TypeError('iterator must be a function')
	    }
	
	    if (arguments.length < 3) {
	        context = this
	    }
	    
	    if (toString.call(list) === '[object Array]')
	        forEachArray(list, iterator, context)
	    else if (typeof list === 'string')
	        forEachString(list, iterator, context)
	    else
	        forEachObject(list, iterator, context)
	}
	
	function forEachArray(array, iterator, context) {
	    for (var i = 0, len = array.length; i < len; i++) {
	        if (hasOwnProperty.call(array, i)) {
	            iterator.call(context, array[i], i, array)
	        }
	    }
	}
	
	function forEachString(string, iterator, context) {
	    for (var i = 0, len = string.length; i < len; i++) {
	        // no such thing as a sparse string.
	        iterator.call(context, string.charAt(i), i, string)
	    }
	}
	
	function forEachObject(object, iterator, context) {
	    for (var k in object) {
	        if (hasOwnProperty.call(object, k)) {
	            iterator.call(context, object[k], k, object)
	        }
	    }
	}


/***/ },
/* 200 */
/***/ function(module, exports) {

	module.exports = isFunction
	
	var toString = Object.prototype.toString
	
	function isFunction (fn) {
	  var string = toString.call(fn)
	  return string === '[object Function]' ||
	    (typeof fn === 'function' && string !== '[object RegExp]') ||
	    (typeof window !== 'undefined' &&
	     // IE8 and below
	     (fn === window.setTimeout ||
	      fn === window.alert ||
	      fn === window.confirm ||
	      fn === window.prompt))
	};


/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = function() {};
	
	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }
	
	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }
	
	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}
	
	module.exports = warning;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(189)))

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	var bind = __webpack_require__(203);
	
	module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	var implementation = __webpack_require__(204);
	
	module.exports = Function.prototype.bind || implementation;


/***/ },
/* 204 */
/***/ function(module, exports) {

	var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
	var slice = Array.prototype.slice;
	var toStr = Object.prototype.toString;
	var funcType = '[object Function]';
	
	module.exports = function bind(that) {
	    var target = this;
	    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
	        throw new TypeError(ERROR_MESSAGE + target);
	    }
	    var args = slice.call(arguments, 1);
	
	    var bound;
	    var binder = function () {
	        if (this instanceof bound) {
	            var result = target.apply(
	                this,
	                args.concat(slice.call(arguments))
	            );
	            if (Object(result) === result) {
	                return result;
	            }
	            return this;
	        } else {
	            return target.apply(
	                that,
	                args.concat(slice.call(arguments))
	            );
	        }
	    };
	
	    var boundLength = Math.max(0, target.length - args.length);
	    var boundArgs = [];
	    for (var i = 0; i < boundLength; i++) {
	        boundArgs.push('$' + i);
	    }
	
	    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);
	
	    if (target.prototype) {
	        var Empty = function Empty() {};
	        Empty.prototype = target.prototype;
	        bound.prototype = new Empty();
	        Empty.prototype = null;
	    }
	
	    return bound;
	};


/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var bind = __webpack_require__(203);
	var define = __webpack_require__(206);
	
	var implementation = __webpack_require__(210);
	var getPolyfill = __webpack_require__(219);
	var shim = __webpack_require__(220);
	
	var boundTrim = bind.call(Function.call, getPolyfill());
	
	define(boundTrim, {
		getPolyfill: getPolyfill,
		implementation: implementation,
		shim: shim
	});
	
	module.exports = boundTrim;


/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var keys = __webpack_require__(207);
	var foreach = __webpack_require__(209);
	var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';
	
	var toStr = Object.prototype.toString;
	
	var isFunction = function (fn) {
		return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
	};
	
	var arePropertyDescriptorsSupported = function () {
		var obj = {};
		try {
			Object.defineProperty(obj, 'x', { enumerable: false, value: obj });
	        /* eslint-disable no-unused-vars, no-restricted-syntax */
	        for (var _ in obj) { return false; }
	        /* eslint-enable no-unused-vars, no-restricted-syntax */
			return obj.x === obj;
		} catch (e) { /* this is IE 8. */
			return false;
		}
	};
	var supportsDescriptors = Object.defineProperty && arePropertyDescriptorsSupported();
	
	var defineProperty = function (object, name, value, predicate) {
		if (name in object && (!isFunction(predicate) || !predicate())) {
			return;
		}
		if (supportsDescriptors) {
			Object.defineProperty(object, name, {
				configurable: true,
				enumerable: false,
				value: value,
				writable: true
			});
		} else {
			object[name] = value;
		}
	};
	
	var defineProperties = function (object, map) {
		var predicates = arguments.length > 2 ? arguments[2] : {};
		var props = keys(map);
		if (hasSymbols) {
			props = props.concat(Object.getOwnPropertySymbols(map));
		}
		foreach(props, function (name) {
			defineProperty(object, name, map[name], predicates[name]);
		});
	};
	
	defineProperties.supportsDescriptors = !!supportsDescriptors;
	
	module.exports = defineProperties;


/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var slice = Array.prototype.slice;
	var isArgs = __webpack_require__(208);
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};
	
	var keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];
	
		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}
	
		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}
	
		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}
	
		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
	
			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
	
	keysShim.shim = function shimObjectKeys() {
		if (Object.keys) {
			var keysWorksWithArguments = (function () {
				// Safari 5.0 bug
				return (Object.keys(arguments) || '').length === 2;
			}(1, 2));
			if (!keysWorksWithArguments) {
				var originalKeys = Object.keys;
				Object.keys = function keys(object) {
					if (isArgs(object)) {
						return originalKeys(slice.call(object));
					} else {
						return originalKeys(object);
					}
				};
			}
		} else {
			Object.keys = keysShim;
		}
		return Object.keys || keysShim;
	};
	
	module.exports = keysShim;


/***/ },
/* 208 */
/***/ function(module, exports) {

	'use strict';
	
	var toStr = Object.prototype.toString;
	
	module.exports = function isArguments(value) {
		var str = toStr.call(value);
		var isArgs = str === '[object Arguments]';
		if (!isArgs) {
			isArgs = str !== '[object Array]' &&
				value !== null &&
				typeof value === 'object' &&
				typeof value.length === 'number' &&
				value.length >= 0 &&
				toStr.call(value.callee) === '[object Function]';
		}
		return isArgs;
	};


/***/ },
/* 209 */
/***/ function(module, exports) {

	
	var hasOwn = Object.prototype.hasOwnProperty;
	var toString = Object.prototype.toString;
	
	module.exports = function forEach (obj, fn, ctx) {
	    if (toString.call(fn) !== '[object Function]') {
	        throw new TypeError('iterator must be a function');
	    }
	    var l = obj.length;
	    if (l === +l) {
	        for (var i = 0; i < l; i++) {
	            fn.call(ctx, obj[i], i, obj);
	        }
	    } else {
	        for (var k in obj) {
	            if (hasOwn.call(obj, k)) {
	                fn.call(ctx, obj[k], k, obj);
	            }
	        }
	    }
	};
	


/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var bind = __webpack_require__(203);
	var ES = __webpack_require__(211);
	var replace = bind.call(Function.call, String.prototype.replace);
	
	var leftWhitespace = /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/;
	var rightWhitespace = /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/;
	
	module.exports = function trim() {
		var S = ES.ToString(ES.CheckObjectCoercible(this));
		return replace(replace(S, leftWhitespace, ''), rightWhitespace, '');
	};


/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $isNaN = __webpack_require__(212);
	var $isFinite = __webpack_require__(213);
	
	var sign = __webpack_require__(214);
	var mod = __webpack_require__(215);
	
	var IsCallable = __webpack_require__(216);
	var toPrimitive = __webpack_require__(217);
	
	// https://es5.github.io/#x9
	var ES5 = {
		ToPrimitive: toPrimitive,
	
		ToBoolean: function ToBoolean(value) {
			return Boolean(value);
		},
		ToNumber: function ToNumber(value) {
			return Number(value);
		},
		ToInteger: function ToInteger(value) {
			var number = this.ToNumber(value);
			if ($isNaN(number)) { return 0; }
			if (number === 0 || !$isFinite(number)) { return number; }
			return sign(number) * Math.floor(Math.abs(number));
		},
		ToInt32: function ToInt32(x) {
			return this.ToNumber(x) >> 0;
		},
		ToUint32: function ToUint32(x) {
			return this.ToNumber(x) >>> 0;
		},
		ToUint16: function ToUint16(value) {
			var number = this.ToNumber(value);
			if ($isNaN(number) || number === 0 || !$isFinite(number)) { return 0; }
			var posInt = sign(number) * Math.floor(Math.abs(number));
			return mod(posInt, 0x10000);
		},
		ToString: function ToString(value) {
			return String(value);
		},
		ToObject: function ToObject(value) {
			this.CheckObjectCoercible(value);
			return Object(value);
		},
		CheckObjectCoercible: function CheckObjectCoercible(value, optMessage) {
			/* jshint eqnull:true */
			if (value == null) {
				throw new TypeError(optMessage || 'Cannot call method on ' + value);
			}
			return value;
		},
		IsCallable: IsCallable,
		SameValue: function SameValue(x, y) {
			if (x === y) { // 0 === -0, but they are not identical.
				if (x === 0) { return 1 / x === 1 / y; }
				return true;
			}
			return $isNaN(x) && $isNaN(y);
		},
	
		// http://www.ecma-international.org/ecma-262/5.1/#sec-8
		Type: function Type(x) {
			if (x === null) {
				return 'Null';
			}
			if (typeof x === 'undefined') {
				return 'Undefined';
			}
			if (typeof x === 'function' || typeof x === 'object') {
				return 'Object';
			}
			if (typeof x === 'number') {
				return 'Number';
			}
			if (typeof x === 'boolean') {
				return 'Boolean';
			}
			if (typeof x === 'string') {
				return 'String';
			}
		}
	};
	
	module.exports = ES5;


/***/ },
/* 212 */
/***/ function(module, exports) {

	module.exports = Number.isNaN || function isNaN(a) {
		return a !== a;
	};


/***/ },
/* 213 */
/***/ function(module, exports) {

	var $isNaN = Number.isNaN || function (a) { return a !== a; };
	
	module.exports = Number.isFinite || function (x) { return typeof x === 'number' && !$isNaN(x) && x !== Infinity && x !== -Infinity; };


/***/ },
/* 214 */
/***/ function(module, exports) {

	module.exports = function sign(number) {
		return number >= 0 ? 1 : -1;
	};


/***/ },
/* 215 */
/***/ function(module, exports) {

	module.exports = function mod(number, modulo) {
		var remain = number % modulo;
		return Math.floor(remain >= 0 ? remain : remain + modulo);
	};


/***/ },
/* 216 */
/***/ function(module, exports) {

	'use strict';
	
	var fnToStr = Function.prototype.toString;
	
	var constructorRegex = /^\s*class /;
	var isES6ClassFn = function isES6ClassFn(value) {
		try {
			var fnStr = fnToStr.call(value);
			var singleStripped = fnStr.replace(/\/\/.*\n/g, '');
			var multiStripped = singleStripped.replace(/\/\*[.\s\S]*\*\//g, '');
			var spaceStripped = multiStripped.replace(/\n/mg, ' ').replace(/ {2}/g, ' ');
			return constructorRegex.test(spaceStripped);
		} catch (e) {
			return false; // not a function
		}
	};
	
	var tryFunctionObject = function tryFunctionObject(value) {
		try {
			if (isES6ClassFn(value)) { return false; }
			fnToStr.call(value);
			return true;
		} catch (e) {
			return false;
		}
	};
	var toStr = Object.prototype.toString;
	var fnClass = '[object Function]';
	var genClass = '[object GeneratorFunction]';
	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
	
	module.exports = function isCallable(value) {
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		if (hasToStringTag) { return tryFunctionObject(value); }
		if (isES6ClassFn(value)) { return false; }
		var strClass = toStr.call(value);
		return strClass === fnClass || strClass === genClass;
	};


/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var toStr = Object.prototype.toString;
	
	var isPrimitive = __webpack_require__(218);
	
	var isCallable = __webpack_require__(216);
	
	// https://es5.github.io/#x8.12
	var ES5internalSlots = {
		'[[DefaultValue]]': function (O, hint) {
			var actualHint = hint || (toStr.call(O) === '[object Date]' ? String : Number);
	
			if (actualHint === String || actualHint === Number) {
				var methods = actualHint === String ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
				var value, i;
				for (i = 0; i < methods.length; ++i) {
					if (isCallable(O[methods[i]])) {
						value = O[methods[i]]();
						if (isPrimitive(value)) {
							return value;
						}
					}
				}
				throw new TypeError('No default value');
			}
			throw new TypeError('invalid [[DefaultValue]] hint supplied');
		}
	};
	
	// https://es5.github.io/#x9
	module.exports = function ToPrimitive(input, PreferredType) {
		if (isPrimitive(input)) {
			return input;
		}
		return ES5internalSlots['[[DefaultValue]]'](input, PreferredType);
	};


/***/ },
/* 218 */
/***/ function(module, exports) {

	module.exports = function isPrimitive(value) {
		return value === null || (typeof value !== 'function' && typeof value !== 'object');
	};


/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var implementation = __webpack_require__(210);
	
	var zeroWidthSpace = '\u200b';
	
	module.exports = function getPolyfill() {
		if (String.prototype.trim && zeroWidthSpace.trim() === zeroWidthSpace) {
			return String.prototype.trim;
		}
		return implementation;
	};


/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var define = __webpack_require__(206);
	var getPolyfill = __webpack_require__(219);
	
	module.exports = function shimStringTrim() {
		var polyfill = getPolyfill();
		define(String.prototype, { trim: polyfill }, { trim: function () { return String.prototype.trim !== polyfill; } });
		return polyfill;
	};


/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	var getDayOfYear = __webpack_require__(222)
	var getISOWeek = __webpack_require__(228)
	var getISOYear = __webpack_require__(232)
	var parse = __webpack_require__(223)
	var isValid = __webpack_require__(233)
	var enLocale = __webpack_require__(234)
	
	/**
	 * @category Common Helpers
	 * @summary Format the date.
	 *
	 * @description
	 * Return the formatted date string in the given format.
	 *
	 * Accepted tokens:
	 * | Unit                    | Token | Result examples                  |
	 * |-------------------------|-------|----------------------------------|
	 * | Month                   | M     | 1, 2, ..., 12                    |
	 * |                         | Mo    | 1st, 2nd, ..., 12th              |
	 * |                         | MM    | 01, 02, ..., 12                  |
	 * |                         | MMM   | Jan, Feb, ..., Dec               |
	 * |                         | MMMM  | January, February, ..., December |
	 * | Quarter                 | Q     | 1, 2, 3, 4                       |
	 * |                         | Qo    | 1st, 2nd, 3rd, 4th               |
	 * | Day of month            | D     | 1, 2, ..., 31                    |
	 * |                         | Do    | 1st, 2nd, ..., 31st              |
	 * |                         | DD    | 01, 02, ..., 31                  |
	 * | Day of year             | DDD   | 1, 2, ..., 366                   |
	 * |                         | DDDo  | 1st, 2nd, ..., 366th             |
	 * |                         | DDDD  | 001, 002, ..., 366               |
	 * | Day of week             | d     | 0, 1, ..., 6                     |
	 * |                         | do    | 0th, 1st, ..., 6th               |
	 * |                         | dd    | Su, Mo, ..., Sa                  |
	 * |                         | ddd   | Sun, Mon, ..., Sat               |
	 * |                         | dddd  | Sunday, Monday, ..., Saturday    |
	 * | Day of ISO week         | E     | 1, 2, ..., 7                     |
	 * | ISO week                | W     | 1, 2, ..., 53                    |
	 * |                         | Wo    | 1st, 2nd, ..., 53rd              |
	 * |                         | WW    | 01, 02, ..., 53                  |
	 * | Year                    | YY    | 00, 01, ..., 99                  |
	 * |                         | YYYY  | 1900, 1901, ..., 2099            |
	 * | ISO week-numbering year | GG    | 00, 01, ..., 99                  |
	 * |                         | GGGG  | 1900, 1901, ..., 2099            |
	 * | AM/PM                   | A     | AM, PM                           |
	 * |                         | a     | am, pm                           |
	 * |                         | aa    | a.m., p.m.                       |
	 * | Hour                    | H     | 0, 1, ... 23                     |
	 * |                         | HH    | 00, 01, ... 23                   |
	 * |                         | h     | 1, 2, ..., 12                    |
	 * |                         | hh    | 01, 02, ..., 12                  |
	 * | Minute                  | m     | 0, 1, ..., 59                    |
	 * |                         | mm    | 00, 01, ..., 59                  |
	 * | Second                  | s     | 0, 1, ..., 59                    |
	 * |                         | ss    | 00, 01, ..., 59                  |
	 * | 1/10 of second          | S     | 0, 1, ..., 9                     |
	 * | 1/100 of second         | SS    | 00, 01, ..., 99                  |
	 * | Millisecond             | SSS   | 000, 001, ..., 999               |
	 * | Timezone                | Z     | -01:00, +00:00, ... +12:00       |
	 * |                         | ZZ    | -0100, +0000, ..., +1200         |
	 * | Seconds timestamp       | X     | 512969520                        |
	 * | Milliseconds timestamp  | x     | 512969520900                     |
	 *
	 * The characters wrapped in square brackets are escaped.
	 *
	 * The result may vary by locale.
	 *
	 * @param {Date|String|Number} date - the original date
	 * @param {String} [format='YYYY-MM-DDTHH:mm:ss.SSSZ'] - the string of tokens
	 * @param {Object} [options] - the object with options
	 * @param {Object} [options.locale=enLocale] - the locale object
	 * @returns {String} the formatted date string
	 *
	 * @example
	 * // Represent 11 February 2014 in middle-endian format:
	 * var result = format(
	 *   new Date(2014, 1, 11),
	 *   'MM/DD/YYYY'
	 * )
	 * //=> '02/11/2014'
	 *
	 * @example
	 * // Represent 2 July 2014 in Esperanto:
	 * var eoLocale = require('date-fns/locale/eo')
	 * var result = format(
	 *   new Date(2014, 6, 2),
	 *   'Do [de] MMMM YYYY',
	 *   {locale: eoLocale}
	 * )
	 * //=> '2-a de julio 2014'
	 */
	function format (dirtyDate, dirtyFormatStr, dirtyOptions) {
	  var formatStr = dirtyFormatStr ? String(dirtyFormatStr) : 'YYYY-MM-DDTHH:mm:ss.SSSZ'
	  var options = dirtyOptions || {}
	
	  var locale = options.locale
	  var localeFormatters = enLocale.format.formatters
	  var formattingTokensRegExp = enLocale.format.formattingTokensRegExp
	  if (locale && locale.format && locale.format.formatters) {
	    localeFormatters = locale.format.formatters
	
	    if (locale.format.formattingTokensRegExp) {
	      formattingTokensRegExp = locale.format.formattingTokensRegExp
	    }
	  }
	
	  var date = parse(dirtyDate)
	
	  if (!isValid(date)) {
	    return 'Invalid Date'
	  }
	
	  var formatFn = buildFormatFn(formatStr, localeFormatters, formattingTokensRegExp)
	
	  return formatFn(date)
	}
	
	var formatters = {
	  // Month: 1, 2, ..., 12
	  'M': function (date) {
	    return date.getMonth() + 1
	  },
	
	  // Month: 01, 02, ..., 12
	  'MM': function (date) {
	    return addLeadingZeros(date.getMonth() + 1, 2)
	  },
	
	  // Quarter: 1, 2, 3, 4
	  'Q': function (date) {
	    return Math.ceil((date.getMonth() + 1) / 3)
	  },
	
	  // Day of month: 1, 2, ..., 31
	  'D': function (date) {
	    return date.getDate()
	  },
	
	  // Day of month: 01, 02, ..., 31
	  'DD': function (date) {
	    return addLeadingZeros(date.getDate(), 2)
	  },
	
	  // Day of year: 1, 2, ..., 366
	  'DDD': function (date) {
	    return getDayOfYear(date)
	  },
	
	  // Day of year: 001, 002, ..., 366
	  'DDDD': function (date) {
	    return addLeadingZeros(getDayOfYear(date), 3)
	  },
	
	  // Day of week: 0, 1, ..., 6
	  'd': function (date) {
	    return date.getDay()
	  },
	
	  // Day of ISO week: 1, 2, ..., 7
	  'E': function (date) {
	    return date.getDay() || 7
	  },
	
	  // ISO week: 1, 2, ..., 53
	  'W': function (date) {
	    return getISOWeek(date)
	  },
	
	  // ISO week: 01, 02, ..., 53
	  'WW': function (date) {
	    return addLeadingZeros(getISOWeek(date), 2)
	  },
	
	  // Year: 00, 01, ..., 99
	  'YY': function (date) {
	    return addLeadingZeros(date.getFullYear(), 4).substr(2)
	  },
	
	  // Year: 1900, 1901, ..., 2099
	  'YYYY': function (date) {
	    return addLeadingZeros(date.getFullYear(), 4)
	  },
	
	  // ISO week-numbering year: 00, 01, ..., 99
	  'GG': function (date) {
	    return String(getISOYear(date)).substr(2)
	  },
	
	  // ISO week-numbering year: 1900, 1901, ..., 2099
	  'GGGG': function (date) {
	    return getISOYear(date)
	  },
	
	  // Hour: 0, 1, ... 23
	  'H': function (date) {
	    return date.getHours()
	  },
	
	  // Hour: 00, 01, ..., 23
	  'HH': function (date) {
	    return addLeadingZeros(date.getHours(), 2)
	  },
	
	  // Hour: 1, 2, ..., 12
	  'h': function (date) {
	    var hours = date.getHours()
	    if (hours === 0) {
	      return 12
	    } else if (hours > 12) {
	      return hours % 12
	    } else {
	      return hours
	    }
	  },
	
	  // Hour: 01, 02, ..., 12
	  'hh': function (date) {
	    return addLeadingZeros(formatters['h'](date), 2)
	  },
	
	  // Minute: 0, 1, ..., 59
	  'm': function (date) {
	    return date.getMinutes()
	  },
	
	  // Minute: 00, 01, ..., 59
	  'mm': function (date) {
	    return addLeadingZeros(date.getMinutes(), 2)
	  },
	
	  // Second: 0, 1, ..., 59
	  's': function (date) {
	    return date.getSeconds()
	  },
	
	  // Second: 00, 01, ..., 59
	  'ss': function (date) {
	    return addLeadingZeros(date.getSeconds(), 2)
	  },
	
	  // 1/10 of second: 0, 1, ..., 9
	  'S': function (date) {
	    return Math.floor(date.getMilliseconds() / 100)
	  },
	
	  // 1/100 of second: 00, 01, ..., 99
	  'SS': function (date) {
	    return addLeadingZeros(Math.floor(date.getMilliseconds() / 10), 2)
	  },
	
	  // Millisecond: 000, 001, ..., 999
	  'SSS': function (date) {
	    return addLeadingZeros(date.getMilliseconds(), 3)
	  },
	
	  // Timezone: -01:00, +00:00, ... +12:00
	  'Z': function (date) {
	    return formatTimezone(date.getTimezoneOffset(), ':')
	  },
	
	  // Timezone: -0100, +0000, ... +1200
	  'ZZ': function (date) {
	    return formatTimezone(date.getTimezoneOffset())
	  },
	
	  // Seconds timestamp: 512969520
	  'X': function (date) {
	    return Math.floor(date.getTime() / 1000)
	  },
	
	  // Milliseconds timestamp: 512969520900
	  'x': function (date) {
	    return date.getTime()
	  }
	}
	
	function buildFormatFn (formatStr, localeFormatters, formattingTokensRegExp) {
	  var array = formatStr.match(formattingTokensRegExp)
	  var length = array.length
	
	  var i
	  var formatter
	  for (i = 0; i < length; i++) {
	    formatter = localeFormatters[array[i]] || formatters[array[i]]
	    if (formatter) {
	      array[i] = formatter
	    } else {
	      array[i] = removeFormattingTokens(array[i])
	    }
	  }
	
	  return function (date) {
	    var output = ''
	    for (var i = 0; i < length; i++) {
	      if (array[i] instanceof Function) {
	        output += array[i](date, formatters)
	      } else {
	        output += array[i]
	      }
	    }
	    return output
	  }
	}
	
	function removeFormattingTokens (input) {
	  if (input.match(/\[[\s\S]/)) {
	    return input.replace(/^\[|]$/g, '')
	  }
	  return input.replace(/\\/g, '')
	}
	
	function formatTimezone (offset, delimeter) {
	  delimeter = delimeter || ''
	  var sign = offset > 0 ? '-' : '+'
	  var absOffset = Math.abs(offset)
	  var hours = Math.floor(absOffset / 60)
	  var minutes = absOffset % 60
	  return sign + addLeadingZeros(hours, 2) + delimeter + addLeadingZeros(minutes, 2)
	}
	
	function addLeadingZeros (number, targetLength) {
	  var output = Math.abs(number).toString()
	  while (output.length < targetLength) {
	    output = '0' + output
	  }
	  return output
	}
	
	module.exports = format


/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(223)
	var startOfYear = __webpack_require__(225)
	var differenceInCalendarDays = __webpack_require__(226)
	
	/**
	 * @category Day Helpers
	 * @summary Get the day of the year of the given date.
	 *
	 * @description
	 * Get the day of the year of the given date.
	 *
	 * @param {Date|String|Number} date - the given date
	 * @returns {Number} the day of year
	 *
	 * @example
	 * // Which day of the year is 2 July 2014?
	 * var result = getDayOfYear(new Date(2014, 6, 2))
	 * //=> 183
	 */
	function getDayOfYear (dirtyDate) {
	  var date = parse(dirtyDate)
	  var diff = differenceInCalendarDays(date, startOfYear(date))
	  var dayOfYear = diff + 1
	  return dayOfYear
	}
	
	module.exports = getDayOfYear


/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	var isDate = __webpack_require__(224)
	
	var MILLISECONDS_IN_HOUR = 3600000
	var MILLISECONDS_IN_MINUTE = 60000
	var DEFAULT_ADDITIONAL_DIGITS = 2
	
	var parseTokenDateTimeDelimeter = /[T ]/
	var parseTokenPlainTime = /:/
	
	// year tokens
	var parseTokenYY = /^(\d{2})$/
	var parseTokensYYY = [
	  /^([+-]\d{2})$/, // 0 additional digits
	  /^([+-]\d{3})$/, // 1 additional digit
	  /^([+-]\d{4})$/ // 2 additional digits
	]
	
	var parseTokenYYYY = /^(\d{4})/
	var parseTokensYYYYY = [
	  /^([+-]\d{4})/, // 0 additional digits
	  /^([+-]\d{5})/, // 1 additional digit
	  /^([+-]\d{6})/ // 2 additional digits
	]
	
	// date tokens
	var parseTokenMM = /^-(\d{2})$/
	var parseTokenDDD = /^-?(\d{3})$/
	var parseTokenMMDD = /^-?(\d{2})-?(\d{2})$/
	var parseTokenWww = /^-?W(\d{2})$/
	var parseTokenWwwD = /^-?W(\d{2})-?(\d{1})$/
	
	// time tokens
	var parseTokenHH = /^(\d{2}([.,]\d*)?)$/
	var parseTokenHHMM = /^(\d{2}):?(\d{2}([.,]\d*)?)$/
	var parseTokenHHMMSS = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/
	
	// timezone tokens
	var parseTokenTimezone = /([Z+-].*)$/
	var parseTokenTimezoneZ = /^(Z)$/
	var parseTokenTimezoneHH = /^([+-])(\d{2})$/
	var parseTokenTimezoneHHMM = /^([+-])(\d{2}):?(\d{2})$/
	
	/**
	 * @category Common Helpers
	 * @summary Convert the given argument to an instance of Date.
	 *
	 * @description
	 * Convert the given argument to an instance of Date.
	 *
	 * If the argument is an instance of Date, the function returns its clone.
	 *
	 * If the argument is a number, it is treated as a timestamp.
	 *
	 * If an argument is a string, the function tries to parse it.
	 * Function accepts complete ISO 8601 formats as well as partial implementations.
	 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
	 *
	 * If all above fails, the function passes the given argument to Date constructor.
	 *
	 * @param {Date|String|Number} argument - the value to convert
	 * @param {Object} [options] - the object with options
	 * @param {0 | 1 | 2} [options.additionalDigits=2] - the additional number of digits in the extended year format
	 * @returns {Date} the parsed date in the local time zone
	 *
	 * @example
	 * // Convert string '2014-02-11T11:30:30' to date:
	 * var result = parse('2014-02-11T11:30:30')
	 * //=> Tue Feb 11 2014 11:30:30
	 *
	 * @example
	 * // Parse string '+02014101',
	 * // if the additional number of digits in the extended year format is 1:
	 * var result = parse('+02014101', {additionalDigits: 1})
	 * //=> Fri Apr 11 2014 00:00:00
	 */
	function parse (argument, dirtyOptions) {
	  if (isDate(argument)) {
	    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
	    return new Date(argument.getTime())
	  } else if (typeof argument !== 'string') {
	    return new Date(argument)
	  }
	
	  var options = dirtyOptions || {}
	  var additionalDigits = options.additionalDigits
	  if (additionalDigits == null) {
	    additionalDigits = DEFAULT_ADDITIONAL_DIGITS
	  } else {
	    additionalDigits = Number(additionalDigits)
	  }
	
	  var dateStrings = splitDateString(argument)
	
	  var parseYearResult = parseYear(dateStrings.date, additionalDigits)
	  var year = parseYearResult.year
	  var restDateString = parseYearResult.restDateString
	
	  var date = parseDate(restDateString, year)
	
	  if (date) {
	    var timestamp = date.getTime()
	    var time = 0
	    var offset
	
	    if (dateStrings.time) {
	      time = parseTime(dateStrings.time)
	    }
	
	    if (dateStrings.timezone) {
	      offset = parseTimezone(dateStrings.timezone)
	    } else {
	      // get offset accurate to hour in timezones that change offset
	      offset = new Date(timestamp + time).getTimezoneOffset()
	      offset = new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE).getTimezoneOffset()
	    }
	
	    return new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE)
	  } else {
	    return new Date(argument)
	  }
	}
	
	function splitDateString (dateString) {
	  var dateStrings = {}
	  var array = dateString.split(parseTokenDateTimeDelimeter)
	  var timeString
	
	  if (parseTokenPlainTime.test(array[0])) {
	    dateStrings.date = null
	    timeString = array[0]
	  } else {
	    dateStrings.date = array[0]
	    timeString = array[1]
	  }
	
	  if (timeString) {
	    var token = parseTokenTimezone.exec(timeString)
	    if (token) {
	      dateStrings.time = timeString.replace(token[1], '')
	      dateStrings.timezone = token[1]
	    } else {
	      dateStrings.time = timeString
	    }
	  }
	
	  return dateStrings
	}
	
	function parseYear (dateString, additionalDigits) {
	  var parseTokenYYY = parseTokensYYY[additionalDigits]
	  var parseTokenYYYYY = parseTokensYYYYY[additionalDigits]
	
	  var token
	
	  // YYYY or ±YYYYY
	  token = parseTokenYYYY.exec(dateString) || parseTokenYYYYY.exec(dateString)
	  if (token) {
	    var yearString = token[1]
	    return {
	      year: parseInt(yearString, 10),
	      restDateString: dateString.slice(yearString.length)
	    }
	  }
	
	  // YY or ±YYY
	  token = parseTokenYY.exec(dateString) || parseTokenYYY.exec(dateString)
	  if (token) {
	    var centuryString = token[1]
	    return {
	      year: parseInt(centuryString, 10) * 100,
	      restDateString: dateString.slice(centuryString.length)
	    }
	  }
	
	  // Invalid ISO-formatted year
	  return {
	    year: null
	  }
	}
	
	function parseDate (dateString, year) {
	  // Invalid ISO-formatted year
	  if (year === null) {
	    return null
	  }
	
	  var token
	  var date
	  var month
	  var week
	
	  // YYYY
	  if (dateString.length === 0) {
	    date = new Date(0)
	    date.setUTCFullYear(year)
	    return date
	  }
	
	  // YYYY-MM
	  token = parseTokenMM.exec(dateString)
	  if (token) {
	    date = new Date(0)
	    month = parseInt(token[1], 10) - 1
	    date.setUTCFullYear(year, month)
	    return date
	  }
	
	  // YYYY-DDD or YYYYDDD
	  token = parseTokenDDD.exec(dateString)
	  if (token) {
	    date = new Date(0)
	    var dayOfYear = parseInt(token[1], 10)
	    date.setUTCFullYear(year, 0, dayOfYear)
	    return date
	  }
	
	  // YYYY-MM-DD or YYYYMMDD
	  token = parseTokenMMDD.exec(dateString)
	  if (token) {
	    date = new Date(0)
	    month = parseInt(token[1], 10) - 1
	    var day = parseInt(token[2], 10)
	    date.setUTCFullYear(year, month, day)
	    return date
	  }
	
	  // YYYY-Www or YYYYWww
	  token = parseTokenWww.exec(dateString)
	  if (token) {
	    week = parseInt(token[1], 10) - 1
	    return dayOfISOYear(year, week)
	  }
	
	  // YYYY-Www-D or YYYYWwwD
	  token = parseTokenWwwD.exec(dateString)
	  if (token) {
	    week = parseInt(token[1], 10) - 1
	    var dayOfWeek = parseInt(token[2], 10) - 1
	    return dayOfISOYear(year, week, dayOfWeek)
	  }
	
	  // Invalid ISO-formatted date
	  return null
	}
	
	function parseTime (timeString) {
	  var token
	  var hours
	  var minutes
	
	  // hh
	  token = parseTokenHH.exec(timeString)
	  if (token) {
	    hours = parseFloat(token[1].replace(',', '.'))
	    return (hours % 24) * MILLISECONDS_IN_HOUR
	  }
	
	  // hh:mm or hhmm
	  token = parseTokenHHMM.exec(timeString)
	  if (token) {
	    hours = parseInt(token[1], 10)
	    minutes = parseFloat(token[2].replace(',', '.'))
	    return (hours % 24) * MILLISECONDS_IN_HOUR +
	      minutes * MILLISECONDS_IN_MINUTE
	  }
	
	  // hh:mm:ss or hhmmss
	  token = parseTokenHHMMSS.exec(timeString)
	  if (token) {
	    hours = parseInt(token[1], 10)
	    minutes = parseInt(token[2], 10)
	    var seconds = parseFloat(token[3].replace(',', '.'))
	    return (hours % 24) * MILLISECONDS_IN_HOUR +
	      minutes * MILLISECONDS_IN_MINUTE +
	      seconds * 1000
	  }
	
	  // Invalid ISO-formatted time
	  return null
	}
	
	function parseTimezone (timezoneString) {
	  var token
	  var absoluteOffset
	
	  // Z
	  token = parseTokenTimezoneZ.exec(timezoneString)
	  if (token) {
	    return 0
	  }
	
	  // ±hh
	  token = parseTokenTimezoneHH.exec(timezoneString)
	  if (token) {
	    absoluteOffset = parseInt(token[2], 10) * 60
	    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
	  }
	
	  // ±hh:mm or ±hhmm
	  token = parseTokenTimezoneHHMM.exec(timezoneString)
	  if (token) {
	    absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10)
	    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
	  }
	
	  return 0
	}
	
	function dayOfISOYear (isoYear, week, day) {
	  week = week || 0
	  day = day || 0
	  var date = new Date(0)
	  date.setUTCFullYear(isoYear, 0, 4)
	  var fourthOfJanuaryDay = date.getUTCDay() || 7
	  var diff = week * 7 + day + 1 - fourthOfJanuaryDay
	  date.setUTCDate(date.getUTCDate() + diff)
	  return date
	}
	
	module.exports = parse


/***/ },
/* 224 */
/***/ function(module, exports) {

	/**
	 * @category Common Helpers
	 * @summary Is the given argument an instance of Date?
	 *
	 * @description
	 * Is the given argument an instance of Date?
	 *
	 * @param {*} argument - the argument to check
	 * @returns {Boolean} the given argument is an instance of Date
	 *
	 * @example
	 * // Is 'mayonnaise' a Date?
	 * var result = isDate('mayonnaise')
	 * //=> false
	 */
	function isDate (argument) {
	  return argument instanceof Date
	}
	
	module.exports = isDate


/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(223)
	
	/**
	 * @category Year Helpers
	 * @summary Return the start of a year for the given date.
	 *
	 * @description
	 * Return the start of a year for the given date.
	 * The result will be in the local timezone.
	 *
	 * @param {Date|String|Number} date - the original date
	 * @returns {Date} the start of a year
	 *
	 * @example
	 * // The start of a year for 2 September 2014 11:55:00:
	 * var result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
	 * //=> Wed Jan 01 2014 00:00:00
	 */
	function startOfYear (dirtyDate) {
	  var cleanDate = parse(dirtyDate)
	  var date = new Date(0)
	  date.setFullYear(cleanDate.getFullYear(), 0, 1)
	  date.setHours(0, 0, 0, 0)
	  return date
	}
	
	module.exports = startOfYear


/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	var startOfDay = __webpack_require__(227)
	
	var MILLISECONDS_IN_MINUTE = 60000
	var MILLISECONDS_IN_DAY = 86400000
	
	/**
	 * @category Day Helpers
	 * @summary Get the number of calendar days between the given dates.
	 *
	 * @description
	 * Get the number of calendar days between the given dates.
	 *
	 * @param {Date|String|Number} dateLeft - the later date
	 * @param {Date|String|Number} dateRight - the earlier date
	 * @returns {Number} the number of calendar days
	 *
	 * @example
	 * // How many calendar days are between
	 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
	 * var result = differenceInCalendarDays(
	 *   new Date(2012, 6, 2, 0, 0),
	 *   new Date(2011, 6, 2, 23, 0)
	 * )
	 * //=> 366
	 */
	function differenceInCalendarDays (dirtyDateLeft, dirtyDateRight) {
	  var startOfDayLeft = startOfDay(dirtyDateLeft)
	  var startOfDayRight = startOfDay(dirtyDateRight)
	
	  var timestampLeft = startOfDayLeft.getTime() -
	    startOfDayLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE
	  var timestampRight = startOfDayRight.getTime() -
	    startOfDayRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE
	
	  // Round the number of days to the nearest integer
	  // because the number of milliseconds in a day is not constant
	  // (e.g. it's different in the day of the daylight saving time clock shift)
	  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY)
	}
	
	module.exports = differenceInCalendarDays


/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(223)
	
	/**
	 * @category Day Helpers
	 * @summary Return the start of a day for the given date.
	 *
	 * @description
	 * Return the start of a day for the given date.
	 * The result will be in the local timezone.
	 *
	 * @param {Date|String|Number} date - the original date
	 * @returns {Date} the start of a day
	 *
	 * @example
	 * // The start of a day for 2 September 2014 11:55:00:
	 * var result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
	 * //=> Tue Sep 02 2014 00:00:00
	 */
	function startOfDay (dirtyDate) {
	  var date = parse(dirtyDate)
	  date.setHours(0, 0, 0, 0)
	  return date
	}
	
	module.exports = startOfDay


/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(223)
	var startOfISOWeek = __webpack_require__(229)
	var startOfISOYear = __webpack_require__(231)
	
	var MILLISECONDS_IN_WEEK = 604800000
	
	/**
	 * @category ISO Week Helpers
	 * @summary Get the ISO week of the given date.
	 *
	 * @description
	 * Get the ISO week of the given date.
	 *
	 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
	 *
	 * @param {Date|String|Number} date - the given date
	 * @returns {Number} the ISO week
	 *
	 * @example
	 * // Which week of the ISO-week numbering year is 2 January 2005?
	 * var result = getISOWeek(new Date(2005, 0, 2))
	 * //=> 53
	 */
	function getISOWeek (dirtyDate) {
	  var date = parse(dirtyDate)
	  var diff = startOfISOWeek(date).getTime() - startOfISOYear(date).getTime()
	
	  // Round the number of days to the nearest integer
	  // because the number of milliseconds in a week is not constant
	  // (e.g. it's different in the week of the daylight saving time clock shift)
	  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1
	}
	
	module.exports = getISOWeek


/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	var startOfWeek = __webpack_require__(230)
	
	/**
	 * @category ISO Week Helpers
	 * @summary Return the start of an ISO week for the given date.
	 *
	 * @description
	 * Return the start of an ISO week for the given date.
	 * The result will be in the local timezone.
	 *
	 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
	 *
	 * @param {Date|String|Number} date - the original date
	 * @returns {Date} the start of an ISO week
	 *
	 * @example
	 * // The start of an ISO week for 2 September 2014 11:55:00:
	 * var result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
	 * //=> Mon Sep 01 2014 00:00:00
	 */
	function startOfISOWeek (dirtyDate) {
	  return startOfWeek(dirtyDate, {weekStartsOn: 1})
	}
	
	module.exports = startOfISOWeek


/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(223)
	
	/**
	 * @category Week Helpers
	 * @summary Return the start of a week for the given date.
	 *
	 * @description
	 * Return the start of a week for the given date.
	 * The result will be in the local timezone.
	 *
	 * @param {Date|String|Number} date - the original date
	 * @param {Object} [options] - the object with options
	 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
	 * @returns {Date} the start of a week
	 *
	 * @example
	 * // The start of a week for 2 September 2014 11:55:00:
	 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
	 * //=> Sun Aug 31 2014 00:00:00
	 *
	 * @example
	 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
	 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
	 * //=> Mon Sep 01 2014 00:00:00
	 */
	function startOfWeek (dirtyDate, dirtyOptions) {
	  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0
	
	  var date = parse(dirtyDate)
	  var day = date.getDay()
	  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn
	
	  date.setDate(date.getDate() - diff)
	  date.setHours(0, 0, 0, 0)
	  return date
	}
	
	module.exports = startOfWeek


/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	var getISOYear = __webpack_require__(232)
	var startOfISOWeek = __webpack_require__(229)
	
	/**
	 * @category ISO Week-Numbering Year Helpers
	 * @summary Return the start of an ISO week-numbering year for the given date.
	 *
	 * @description
	 * Return the start of an ISO week-numbering year,
	 * which always starts 3 days before the year's first Thursday.
	 * The result will be in the local timezone.
	 *
	 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
	 *
	 * @param {Date|String|Number} date - the original date
	 * @returns {Date} the start of an ISO year
	 *
	 * @example
	 * // The start of an ISO week-numbering year for 2 July 2005:
	 * var result = startOfISOYear(new Date(2005, 6, 2))
	 * //=> Mon Jan 03 2005 00:00:00
	 */
	function startOfISOYear (dirtyDate) {
	  var year = getISOYear(dirtyDate)
	  var fourthOfJanuary = new Date(0)
	  fourthOfJanuary.setFullYear(year, 0, 4)
	  fourthOfJanuary.setHours(0, 0, 0, 0)
	  var date = startOfISOWeek(fourthOfJanuary)
	  return date
	}
	
	module.exports = startOfISOYear


/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(223)
	var startOfISOWeek = __webpack_require__(229)
	
	/**
	 * @category ISO Week-Numbering Year Helpers
	 * @summary Get the ISO week-numbering year of the given date.
	 *
	 * @description
	 * Get the ISO week-numbering year of the given date,
	 * which always starts 3 days before the year's first Thursday.
	 *
	 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
	 *
	 * @param {Date|String|Number} date - the given date
	 * @returns {Number} the ISO week-numbering year
	 *
	 * @example
	 * // Which ISO-week numbering year is 2 January 2005?
	 * var result = getISOYear(new Date(2005, 0, 2))
	 * //=> 2004
	 */
	function getISOYear (dirtyDate) {
	  var date = parse(dirtyDate)
	  var year = date.getFullYear()
	
	  var fourthOfJanuaryOfNextYear = new Date(0)
	  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4)
	  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0)
	  var startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear)
	
	  var fourthOfJanuaryOfThisYear = new Date(0)
	  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4)
	  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0)
	  var startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear)
	
	  if (date.getTime() >= startOfNextYear.getTime()) {
	    return year + 1
	  } else if (date.getTime() >= startOfThisYear.getTime()) {
	    return year
	  } else {
	    return year - 1
	  }
	}
	
	module.exports = getISOYear


/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	var isDate = __webpack_require__(224)
	
	/**
	 * @category Common Helpers
	 * @summary Is the given date valid?
	 *
	 * @description
	 * Returns false if argument is Invalid Date and true otherwise.
	 * Invalid Date is a Date, whose time value is NaN.
	 *
	 * Time value of Date: http://es5.github.io/#x15.9.1.1
	 *
	 * @param {Date} date - the date to check
	 * @returns {Boolean} the date is valid
	 * @throws {TypeError} argument must be an instance of Date
	 *
	 * @example
	 * // For the valid date:
	 * var result = isValid(new Date(2014, 1, 31))
	 * //=> true
	 *
	 * @example
	 * // For the invalid date:
	 * var result = isValid(new Date(''))
	 * //=> false
	 */
	function isValid (dirtyDate) {
	  if (isDate(dirtyDate)) {
	    return !isNaN(dirtyDate)
	  } else {
	    throw new TypeError(toString.call(dirtyDate) + ' is not an instance of Date')
	  }
	}
	
	module.exports = isValid


/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	var buildDistanceInWordsLocale = __webpack_require__(235)
	var buildFormatLocale = __webpack_require__(236)
	
	/**
	 * @category Locales
	 * @summary English locale.
	 */
	module.exports = {
	  distanceInWords: buildDistanceInWordsLocale(),
	  format: buildFormatLocale()
	}


/***/ },
/* 235 */
/***/ function(module, exports) {

	function buildDistanceInWordsLocale () {
	  var distanceInWordsLocale = {
	    lessThanXSeconds: {
	      one: 'less than a second',
	      other: 'less than {{count}} seconds'
	    },
	
	    xSeconds: {
	      one: '1 second',
	      other: '{{count}} seconds'
	    },
	
	    halfAMinute: 'half a minute',
	
	    lessThanXMinutes: {
	      one: 'less than a minute',
	      other: 'less than {{count}} minutes'
	    },
	
	    xMinutes: {
	      one: '1 minute',
	      other: '{{count}} minutes'
	    },
	
	    aboutXHours: {
	      one: 'about 1 hour',
	      other: 'about {{count}} hours'
	    },
	
	    xHours: {
	      one: '1 hour',
	      other: '{{count}} hours'
	    },
	
	    xDays: {
	      one: '1 day',
	      other: '{{count}} days'
	    },
	
	    aboutXMonths: {
	      one: 'about 1 month',
	      other: 'about {{count}} months'
	    },
	
	    xMonths: {
	      one: '1 month',
	      other: '{{count}} months'
	    },
	
	    aboutXYears: {
	      one: 'about 1 year',
	      other: 'about {{count}} years'
	    },
	
	    xYears: {
	      one: '1 year',
	      other: '{{count}} years'
	    },
	
	    overXYears: {
	      one: 'over 1 year',
	      other: 'over {{count}} years'
	    },
	
	    almostXYears: {
	      one: 'almost 1 year',
	      other: 'almost {{count}} years'
	    }
	  }
	
	  function localize (token, count, options) {
	    options = options || {}
	
	    var result
	    if (typeof distanceInWordsLocale[token] === 'string') {
	      result = distanceInWordsLocale[token]
	    } else if (count === 1) {
	      result = distanceInWordsLocale[token].one
	    } else {
	      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
	    }
	
	    if (options.addSuffix) {
	      if (options.comparison > 0) {
	        return 'in ' + result
	      } else {
	        return result + ' ago'
	      }
	    }
	
	    return result
	  }
	
	  return {
	    localize: localize
	  }
	}
	
	module.exports = buildDistanceInWordsLocale


/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	var buildFormattingTokensRegExp = __webpack_require__(237)
	
	function buildFormatLocale () {
	  // Note: in English, the names of days of the week and months are capitalized.
	  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
	  // Generally, formatted dates should look like they are in the middle of a sentence,
	  // e.g. in Spanish language the weekdays and months should be in the lowercase.
	  var months3char = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	  var monthsFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	  var weekdays2char = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
	  var weekdays3char = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
	  var weekdaysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
	  var meridiemUppercase = ['AM', 'PM']
	  var meridiemLowercase = ['am', 'pm']
	  var meridiemFull = ['a.m.', 'p.m.']
	
	  var formatters = {
	    // Month: Jan, Feb, ..., Dec
	    'MMM': function (date) {
	      return months3char[date.getMonth()]
	    },
	
	    // Month: January, February, ..., December
	    'MMMM': function (date) {
	      return monthsFull[date.getMonth()]
	    },
	
	    // Day of week: Su, Mo, ..., Sa
	    'dd': function (date) {
	      return weekdays2char[date.getDay()]
	    },
	
	    // Day of week: Sun, Mon, ..., Sat
	    'ddd': function (date) {
	      return weekdays3char[date.getDay()]
	    },
	
	    // Day of week: Sunday, Monday, ..., Saturday
	    'dddd': function (date) {
	      return weekdaysFull[date.getDay()]
	    },
	
	    // AM, PM
	    'A': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
	    },
	
	    // am, pm
	    'a': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
	    },
	
	    // a.m., p.m.
	    'aa': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
	    }
	  }
	
	  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
	  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
	  ordinalFormatters.forEach(function (formatterToken) {
	    formatters[formatterToken + 'o'] = function (date, formatters) {
	      return ordinal(formatters[formatterToken](date))
	    }
	  })
	
	  return {
	    formatters: formatters,
	    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
	  }
	}
	
	function ordinal (number) {
	  var rem100 = number % 100
	  if (rem100 > 20 || rem100 < 10) {
	    switch (rem100 % 10) {
	      case 1:
	        return number + 'st'
	      case 2:
	        return number + 'nd'
	      case 3:
	        return number + 'rd'
	    }
	  }
	  return number + 'th'
	}
	
	module.exports = buildFormatLocale


/***/ },
/* 237 */
/***/ function(module, exports) {

	var commonFormatterKeys = [
	  'M', 'MM', 'Q', 'D', 'DD', 'DDD', 'DDDD', 'd',
	  'E', 'W', 'WW', 'YY', 'YYYY', 'GG', 'GGGG',
	  'H', 'HH', 'h', 'hh', 'm', 'mm',
	  's', 'ss', 'S', 'SS', 'SSS',
	  'Z', 'ZZ', 'X', 'x'
	]
	
	function buildFormattingTokensRegExp (formatters) {
	  var formatterKeys = []
	  for (var key in formatters) {
	    if (formatters.hasOwnProperty(key)) {
	      formatterKeys.push(key)
	    }
	  }
	
	  var formattingTokens = commonFormatterKeys
	    .concat(formatterKeys)
	    .sort()
	    .reverse()
	  var formattingTokensRegExp = new RegExp(
	    '(\\[[^\\[]*\\])|(\\\\)?' + '(' + formattingTokens.join('|') + '|.)', 'g'
	  )
	
	  return formattingTokensRegExp
	}
	
	module.exports = buildFormattingTokensRegExp


/***/ },
/* 238 */
/***/ function(module, exports) {

	module.exports = {
		"App": {
			"welcome": "Hello World!"
		}
	};

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./en": 238,
		"./en.json": 238
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 239;


/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./_lib/build_formatting_tokens_reg_exp/index": 237,
		"./_lib/build_formatting_tokens_reg_exp/index.js": 237,
		"./_lib/package": 241,
		"./_lib/package.json": 241,
		"./ar/build_distance_in_words_locale/index": 242,
		"./ar/build_distance_in_words_locale/index.js": 242,
		"./ar/build_format_locale/index": 243,
		"./ar/build_format_locale/index.js": 243,
		"./ar/index": 244,
		"./ar/index.js": 244,
		"./ar/package": 245,
		"./ar/package.json": 245,
		"./bg/build_distance_in_words_locale/index": 246,
		"./bg/build_distance_in_words_locale/index.js": 246,
		"./bg/build_format_locale/index": 247,
		"./bg/build_format_locale/index.js": 247,
		"./bg/index": 248,
		"./bg/index.js": 248,
		"./bg/package": 249,
		"./bg/package.json": 249,
		"./ca/build_distance_in_words_locale/index": 250,
		"./ca/build_distance_in_words_locale/index.js": 250,
		"./ca/build_format_locale/index": 251,
		"./ca/build_format_locale/index.js": 251,
		"./ca/index": 252,
		"./ca/index.js": 252,
		"./ca/package": 253,
		"./ca/package.json": 253,
		"./cs/build_distance_in_words_locale/index": 254,
		"./cs/build_distance_in_words_locale/index.js": 254,
		"./cs/build_format_locale/index": 255,
		"./cs/build_format_locale/index.js": 255,
		"./cs/index": 256,
		"./cs/index.js": 256,
		"./cs/package": 257,
		"./cs/package.json": 257,
		"./da/build_distance_in_words_locale/index": 258,
		"./da/build_distance_in_words_locale/index.js": 258,
		"./da/build_format_locale/index": 259,
		"./da/build_format_locale/index.js": 259,
		"./da/index": 260,
		"./da/index.js": 260,
		"./da/package": 261,
		"./da/package.json": 261,
		"./de/build_distance_in_words_locale/index": 262,
		"./de/build_distance_in_words_locale/index.js": 262,
		"./de/build_format_locale/index": 263,
		"./de/build_format_locale/index.js": 263,
		"./de/index": 264,
		"./de/index.js": 264,
		"./de/package": 265,
		"./de/package.json": 265,
		"./el/build_distance_in_words_locale/index": 266,
		"./el/build_distance_in_words_locale/index.js": 266,
		"./el/build_format_locale/index": 267,
		"./el/build_format_locale/index.js": 267,
		"./el/index": 268,
		"./el/index.js": 268,
		"./el/package": 269,
		"./el/package.json": 269,
		"./en/build_distance_in_words_locale/index": 235,
		"./en/build_distance_in_words_locale/index.js": 235,
		"./en/build_format_locale/index": 236,
		"./en/build_format_locale/index.js": 236,
		"./en/index": 234,
		"./en/index.js": 234,
		"./en/package": 270,
		"./en/package.json": 270,
		"./eo/build_distance_in_words_locale/index": 271,
		"./eo/build_distance_in_words_locale/index.js": 271,
		"./eo/build_format_locale/index": 272,
		"./eo/build_format_locale/index.js": 272,
		"./eo/index": 273,
		"./eo/index.js": 273,
		"./eo/package": 274,
		"./eo/package.json": 274,
		"./es/build_distance_in_words_locale/index": 275,
		"./es/build_distance_in_words_locale/index.js": 275,
		"./es/build_format_locale/index": 276,
		"./es/build_format_locale/index.js": 276,
		"./es/index": 277,
		"./es/index.js": 277,
		"./es/package": 278,
		"./es/package.json": 278,
		"./fi/build_distance_in_words_locale/index": 279,
		"./fi/build_distance_in_words_locale/index.js": 279,
		"./fi/build_format_locale/index": 280,
		"./fi/build_format_locale/index.js": 280,
		"./fi/index": 281,
		"./fi/index.js": 281,
		"./fi/package": 282,
		"./fi/package.json": 282,
		"./fil/build_distance_in_words_locale/index": 283,
		"./fil/build_distance_in_words_locale/index.js": 283,
		"./fil/build_format_locale/index": 284,
		"./fil/build_format_locale/index.js": 284,
		"./fil/index": 285,
		"./fil/index.js": 285,
		"./fil/package": 286,
		"./fil/package.json": 286,
		"./fr/build_distance_in_words_locale/index": 287,
		"./fr/build_distance_in_words_locale/index.js": 287,
		"./fr/build_format_locale/index": 288,
		"./fr/build_format_locale/index.js": 288,
		"./fr/index": 289,
		"./fr/index.js": 289,
		"./fr/package": 290,
		"./fr/package.json": 290,
		"./hr/build_distance_in_words_locale/index": 291,
		"./hr/build_distance_in_words_locale/index.js": 291,
		"./hr/build_format_locale/index": 292,
		"./hr/build_format_locale/index.js": 292,
		"./hr/index": 293,
		"./hr/index.js": 293,
		"./hr/package": 294,
		"./hr/package.json": 294,
		"./id/build_distance_in_words_locale/index": 295,
		"./id/build_distance_in_words_locale/index.js": 295,
		"./id/build_format_locale/index": 296,
		"./id/build_format_locale/index.js": 296,
		"./id/index": 297,
		"./id/index.js": 297,
		"./id/package": 298,
		"./id/package.json": 298,
		"./is/build_distance_in_words_locale/index": 299,
		"./is/build_distance_in_words_locale/index.js": 299,
		"./is/build_format_locale/index": 300,
		"./is/build_format_locale/index.js": 300,
		"./is/index": 301,
		"./is/index.js": 301,
		"./is/package": 302,
		"./is/package.json": 302,
		"./it/build_distance_in_words_locale/index": 303,
		"./it/build_distance_in_words_locale/index.js": 303,
		"./it/build_format_locale/index": 304,
		"./it/build_format_locale/index.js": 304,
		"./it/index": 305,
		"./it/index.js": 305,
		"./it/package": 306,
		"./it/package.json": 306,
		"./ja/build_distance_in_words_locale/index": 307,
		"./ja/build_distance_in_words_locale/index.js": 307,
		"./ja/build_format_locale/index": 308,
		"./ja/build_format_locale/index.js": 308,
		"./ja/index": 309,
		"./ja/index.js": 309,
		"./ja/package": 310,
		"./ja/package.json": 310,
		"./ko/build_distance_in_words_locale/index": 311,
		"./ko/build_distance_in_words_locale/index.js": 311,
		"./ko/build_format_locale/index": 312,
		"./ko/build_format_locale/index.js": 312,
		"./ko/index": 313,
		"./ko/index.js": 313,
		"./ko/package": 314,
		"./ko/package.json": 314,
		"./mk/build_distance_in_words_locale/index": 315,
		"./mk/build_distance_in_words_locale/index.js": 315,
		"./mk/build_format_locale/index": 316,
		"./mk/build_format_locale/index.js": 316,
		"./mk/index": 317,
		"./mk/index.js": 317,
		"./mk/package": 318,
		"./mk/package.json": 318,
		"./nb/build_distance_in_words_locale/index": 319,
		"./nb/build_distance_in_words_locale/index.js": 319,
		"./nb/build_format_locale/index": 320,
		"./nb/build_format_locale/index.js": 320,
		"./nb/index": 321,
		"./nb/index.js": 321,
		"./nb/package": 322,
		"./nb/package.json": 322,
		"./nl/build_distance_in_words_locale/index": 323,
		"./nl/build_distance_in_words_locale/index.js": 323,
		"./nl/build_format_locale/index": 324,
		"./nl/build_format_locale/index.js": 324,
		"./nl/index": 325,
		"./nl/index.js": 325,
		"./nl/package": 326,
		"./nl/package.json": 326,
		"./package": 327,
		"./package.json": 327,
		"./pl/build_distance_in_words_locale/index": 328,
		"./pl/build_distance_in_words_locale/index.js": 328,
		"./pl/build_format_locale/index": 329,
		"./pl/build_format_locale/index.js": 329,
		"./pl/index": 330,
		"./pl/index.js": 330,
		"./pl/package": 331,
		"./pl/package.json": 331,
		"./pt/build_distance_in_words_locale/index": 332,
		"./pt/build_distance_in_words_locale/index.js": 332,
		"./pt/build_format_locale/index": 333,
		"./pt/build_format_locale/index.js": 333,
		"./pt/index": 334,
		"./pt/index.js": 334,
		"./pt/package": 335,
		"./pt/package.json": 335,
		"./ro/build_distance_in_words_locale/index": 336,
		"./ro/build_distance_in_words_locale/index.js": 336,
		"./ro/build_format_locale/index": 337,
		"./ro/build_format_locale/index.js": 337,
		"./ro/index": 338,
		"./ro/index.js": 338,
		"./ro/package": 339,
		"./ro/package.json": 339,
		"./ru/build_distance_in_words_locale/index": 340,
		"./ru/build_distance_in_words_locale/index.js": 340,
		"./ru/build_format_locale/index": 341,
		"./ru/build_format_locale/index.js": 341,
		"./ru/index": 342,
		"./ru/index.js": 342,
		"./ru/package": 343,
		"./ru/package.json": 343,
		"./sk/build_distance_in_words_locale/index": 344,
		"./sk/build_distance_in_words_locale/index.js": 344,
		"./sk/build_format_locale/index": 345,
		"./sk/build_format_locale/index.js": 345,
		"./sk/index": 346,
		"./sk/index.js": 346,
		"./sk/package": 347,
		"./sk/package.json": 347,
		"./sv/build_distance_in_words_locale/index": 348,
		"./sv/build_distance_in_words_locale/index.js": 348,
		"./sv/build_format_locale/index": 349,
		"./sv/build_format_locale/index.js": 349,
		"./sv/index": 350,
		"./sv/index.js": 350,
		"./sv/package": 351,
		"./sv/package.json": 351,
		"./th/build_distance_in_words_locale/index": 352,
		"./th/build_distance_in_words_locale/index.js": 352,
		"./th/build_format_locale/index": 353,
		"./th/build_format_locale/index.js": 353,
		"./th/index": 354,
		"./th/index.js": 354,
		"./th/package": 355,
		"./th/package.json": 355,
		"./tr/build_distance_in_words_locale/index": 356,
		"./tr/build_distance_in_words_locale/index.js": 356,
		"./tr/build_format_locale/index": 357,
		"./tr/build_format_locale/index.js": 357,
		"./tr/index": 358,
		"./tr/index.js": 358,
		"./tr/package": 359,
		"./tr/package.json": 359,
		"./zh_cn/build_distance_in_words_locale/index": 360,
		"./zh_cn/build_distance_in_words_locale/index.js": 360,
		"./zh_cn/build_format_locale/index": 361,
		"./zh_cn/build_format_locale/index.js": 361,
		"./zh_cn/index": 362,
		"./zh_cn/index.js": 362,
		"./zh_cn/package": 363,
		"./zh_cn/package.json": 363,
		"./zh_tw/build_distance_in_words_locale/index": 364,
		"./zh_tw/build_distance_in_words_locale/index.js": 364,
		"./zh_tw/build_format_locale/index": 365,
		"./zh_tw/build_format_locale/index.js": 365,
		"./zh_tw/index": 366,
		"./zh_tw/index.js": 366,
		"./zh_tw/package": 367,
		"./zh_tw/package.json": 367
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 240;


/***/ },
/* 241 */
/***/ function(module, exports) {

	module.exports = {
		"typings": "../../typings.d.ts"
	};

/***/ },
/* 242 */
/***/ function(module, exports) {

	function buildDistanceInWordsLocale () {
	  var distanceInWordsLocale = {
	    lessThanXSeconds: {
	      one: 'أقل من ثانية واحدة',
	      other: 'أقل من {{count}} ثواني'
	    },
	
	    xSeconds: {
	      one: 'ثانية واحدة',
	      other: '{{count}} ثواني'
	    },
	
	    halfAMinute: 'نصف دقيقة',
	
	    lessThanXMinutes: {
	      one: 'أقل من دقيقة',
	      other: 'أقل من {{count}} دقيقة'
	    },
	
	    xMinutes: {
	      one: 'دقيقة واحدة',
	      other: '{{count}} دقائق'
	    },
	
	    aboutXHours: {
	      one: 'ساعة واحدة تقريباً',
	      other: '{{count}} ساعات تقريباً'
	    },
	
	    xHours: {
	      one: 'ساعة واحدة',
	      other: '{{count}} ساعات'
	    },
	
	    xDays: {
	      one: 'يوم واحد',
	      other: '{{count}} أيام'
	    },
	
	    aboutXMonths: {
	      one: 'شهر واحد تقريباً',
	      other: '{{count}} أشهر تقريباً'
	    },
	
	    xMonths: {
	      one: 'شهر واحد',
	      other: '{{count}} أشهر'
	    },
	
	    aboutXYears: {
	      one: 'عام واحد تقريباً',
	      other: '{{count}} أعوام تقريباً'
	    },
	
	    xYears: {
	      one: 'عام واحد',
	      other: '{{count}} أعوام'
	    },
	
	    overXYears: {
	      one: 'أكثر من عام',
	      other: 'أكثر من {{count}} أعوام'
	    },
	
	    almostXYears: {
	      one: 'عام واحد تقريباً',
	      other: '{{count}} أعوام تقريباً'
	    }
	  }
	
	  function localize (token, count, options) {
	    options = options || {}
	
	    var result
	    if (typeof distanceInWordsLocale[token] === 'string') {
	      result = distanceInWordsLocale[token]
	    } else if (count === 1) {
	      result = distanceInWordsLocale[token].one
	    } else {
	      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
	    }
	
	    if (options.addSuffix) {
	      if (options.comparison > 0) {
	        return 'في خلال ' + result
	      } else {
	        return 'منذ ' + result
	      }
	    }
	
	    return result
	  }
	
	  return {
	    localize: localize
	  }
	}
	
	module.exports = buildDistanceInWordsLocale


/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	var buildFormattingTokensRegExp = __webpack_require__(237)
	
	function buildFormatLocale () {
	  var months3char = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر']
	  var monthsFull = ['كانون الثاني يناير', 'شباط فبراير', 'آذار مارس', 'نيسان أبريل', 'أيار مايو', 'حزيران يونيو', 'تموز يوليو', 'آب أغسطس', 'أيلول سبتمبر', 'تشرين الأول أكتوبر', 'تشرين الثاني نوفمبر', 'كانون الأول ديسمبر']
	  var weekdays2char = ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س']
	  var weekdays3char = ['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت']
	  var weekdaysFull = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت']
	  var meridiemUppercase = ['صباح', 'مساء']
	  var meridiemLowercase = ['ص', 'م']
	  var meridiemFull = ['صباحاً', 'مساءاً']
	
	  var formatters = {
	    // Month: Jan, Feb, ..., Dec
	    'MMM': function (date) {
	      return months3char[date.getMonth()]
	    },
	
	    // Month: January, February, ..., December
	    'MMMM': function (date) {
	      return monthsFull[date.getMonth()]
	    },
	
	    // Day of week: Su, Mo, ..., Sa
	    'dd': function (date) {
	      return weekdays2char[date.getDay()]
	    },
	
	    // Day of week: Sun, Mon, ..., Sat
	    'ddd': function (date) {
	      return weekdays3char[date.getDay()]
	    },
	
	    // Day of week: Sunday, Monday, ..., Saturday
	    'dddd': function (date) {
	      return weekdaysFull[date.getDay()]
	    },
	
	    // AM, PM
	    'A': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
	    },
	
	    // am, pm
	    'a': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
	    },
	
	    // a.m., p.m.
	    'aa': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
	    }
	  }
	
	  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
	  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
	  ordinalFormatters.forEach(function (formatterToken) {
	    formatters[formatterToken + 'o'] = function (date, formatters) {
	      return ordinal(formatters[formatterToken](date))
	    }
	  })
	
	  return {
	    formatters: formatters,
	    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
	  }
	}
	
	function ordinal (number) {
	  return String(number)
	}
	
	module.exports = buildFormatLocale


/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	var buildDistanceInWordsLocale = __webpack_require__(242)
	var buildFormatLocale = __webpack_require__(243)
	
	/**
	 * @category Locales
	 * @summary Arabic locale (Modern Standard Arabic - Al-fussha).
	 * @author Abdallah Hassan [@AbdallahAHO]{@link https://github.com/AbdallahAHO}
	 */
	module.exports = {
	  distanceInWords: buildDistanceInWordsLocale(),
	  format: buildFormatLocale()
	}


/***/ },
/* 245 */
/***/ function(module, exports) {

	module.exports = {
		"typings": "../../typings.d.ts"
	};

/***/ },
/* 246 */
/***/ function(module, exports) {

	function buildDistanceInWordsLocale () {
	  var distanceInWordsLocale = {
	    lessThanXSeconds: {
	      one: 'по-малко от секунда',
	      other: 'по-малко от {{count}} секунди'
	    },
	
	    xSeconds: {
	      one: '1 секунда',
	      other: '{{count}} секунди'
	    },
	
	    halfAMinute: 'половин минута',
	
	    lessThanXMinutes: {
	      one: 'по-малко от минута',
	      other: 'по-малко от {{count}} минути'
	    },
	
	    xMinutes: {
	      one: '1 минута',
	      other: '{{count}} минути'
	    },
	
	    aboutXHours: {
	      one: 'около час',
	      other: 'около {{count}} часа'
	    },
	
	    xHours: {
	      one: '1 час',
	      other: '{{count}} часа'
	    },
	
	    xDays: {
	      one: '1 ден',
	      other: '{{count}} дни'
	    },
	
	    aboutXMonths: {
	      one: 'около месец',
	      other: 'около {{count}} месеца'
	    },
	
	    xMonths: {
	      one: '1 месец',
	      other: '{{count}} месеца'
	    },
	
	    aboutXYears: {
	      one: 'около година',
	      other: 'около {{count}} години'
	    },
	
	    xYears: {
	      one: '1 година',
	      other: '{{count}} години'
	    },
	
	    overXYears: {
	      one: 'над година',
	      other: 'над {{count}} години'
	    },
	
	    almostXYears: {
	      one: 'почти година',
	      other: 'почти {{count}} години'
	    }
	  }
	
	  function localize (token, count, options) {
	    options = options || {}
	
	    var result
	    if (typeof distanceInWordsLocale[token] === 'string') {
	      result = distanceInWordsLocale[token]
	    } else if (count === 1) {
	      result = distanceInWordsLocale[token].one
	    } else {
	      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
	    }
	
	    if (options.addSuffix) {
	      if (options.comparison > 0) {
	        return 'след ' + result
	      } else {
	        return 'преди ' + result
	      }
	    }
	
	    return result
	  }
	
	  return {
	    localize: localize
	  }
	}
	
	module.exports = buildDistanceInWordsLocale


/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	var buildFormattingTokensRegExp = __webpack_require__(237)
	
	function buildFormatLocale () {
	  var months3char = ['яну', 'фев', 'мар', 'апр', 'май', 'юни', 'юли', 'авг', 'сеп', 'окт', 'ное', 'дек']
	  var monthsFull = ['януари', 'февруари', 'март', 'април', 'май', 'юни', 'юли', 'август', 'септември', 'октомври', 'ноември', 'декември']
	  var weekdays2char = ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
	  var weekdays3char = ['нед', 'пон', 'вто', 'сря', 'чет', 'пет', 'съб']
	  var weekdaysFull = ['неделя', 'понеделник', 'вторник', 'сряда', 'четвъртък', 'петък', 'събота']
	  var meridiem = ['сутринта', 'на обяд', 'следобед', 'вечерта']
	
	  var timeOfDay = function (date) {
	    var hours = date.getHours()
	    if (hours >= 4 && hours < 12) {
	      return meridiem[0]
	    } else if (hours >= 12 && hours < 14) {
	      return meridiem[1]
	    } else if (hours >= 14 && hours < 17) {
	      return meridiem[2]
	    } else {
	      return meridiem[3]
	    }
	  }
	
	  var formatters = {
	    // Month: Jan, Feb, ..., Dec
	    'MMM': function (date) {
	      return months3char[date.getMonth()]
	    },
	
	    // Month: January, February, ..., December
	    'MMMM': function (date) {
	      return monthsFull[date.getMonth()]
	    },
	
	    // Day of week: Su, Mo, ..., Sa
	    'dd': function (date) {
	      return weekdays2char[date.getDay()]
	    },
	
	    // Day of week: Sun, Mon, ..., Sat
	    'ddd': function (date) {
	      return weekdays3char[date.getDay()]
	    },
	
	    // Day of week: Sunday, Monday, ..., Saturday
	    'dddd': function (date) {
	      return weekdaysFull[date.getDay()]
	    },
	
	    // AM, PM
	    'A': timeOfDay,
	
	    // am, pm
	    'a': timeOfDay,
	
	    // a.m., p.m.
	    'aa': timeOfDay
	  }
	
	  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
	  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
	  ordinalFormatters.forEach(function (formatterToken) {
	    formatters[formatterToken + 'o'] = function (date, formatters) {
	      return ordinal(formatters[formatterToken](date))
	    }
	  })
	
	  return {
	    formatters: formatters,
	    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
	  }
	}
	
	function ordinal (number) {
	  var rem100 = number % 100
	  if (rem100 > 20 || rem100 < 10) {
	    switch (rem100 % 10) {
	      case 1:
	        return number + '-ви'
	      case 2:
	        return number + '-ри'
	    }
	  }
	  return number + '-и'
	}
	
	module.exports = buildFormatLocale


/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	var buildDistanceInWordsLocale = __webpack_require__(246)
	var buildFormatLocale = __webpack_require__(247)
	
	/**
	 * @category Locales
	 * @summary Bulgarian locale.
	 * @author Nikolay Stoynov [@arvigeus]{@link https://github.com/arvigeus}
	 */
	module.exports = {
	  distanceInWords: buildDistanceInWordsLocale(),
	  format: buildFormatLocale()
	}


/***/ },
/* 249 */
/***/ function(module, exports) {

	module.exports = {
		"typings": "../../typings.d.ts"
	};

/***/ },
/* 250 */
/***/ function(module, exports) {

	function buildDistanceInWordsLocale () {
	  var distanceInWordsLocale = {
	    lessThanXSeconds: {
	      one: "menys d'un segon",
	      other: 'menys de {{count}} segons'
	    },
	
	    xSeconds: {
	      one: '1 segon',
	      other: '{{count}} segons'
	    },
	
	    halfAMinute: 'mig minut',
	
	    lessThanXMinutes: {
	      one: "menys d'un minut",
	      other: 'menys de {{count}} minuts'
	    },
	
	    xMinutes: {
	      one: '1 minut',
	      other: '{{count}} minuts'
	    },
	
	    aboutXHours: {
	      one: 'aproximadament una hora',
	      other: 'aproximadament {{count}} hores'
	    },
	
	    xHours: {
	      one: '1 hora',
	      other: '{{count}} hores'
	    },
	
	    xDays: {
	      one: '1 dia',
	      other: '{{count}} dies'
	    },
	
	    aboutXMonths: {
	      one: 'aproximadament un mes',
	      other: 'aproximadament {{count}} mesos'
	    },
	
	    xMonths: {
	      one: '1 mes',
	      other: '{{count}} mesos'
	    },
	
	    aboutXYears: {
	      one: 'aproximadament un any',
	      other: 'aproximadament {{count}} anys'
	    },
	
	    xYears: {
	      one: '1 any',
	      other: '{{count}} anys'
	    },
	
	    overXYears: {
	      one: "més d'un any",
	      other: 'més de {{count}} anys'
	    },
	
	    almostXYears: {
	      one: 'gairebé un any',
	      other: 'gairebé {{count}} anys'
	    }
	  }
	
	  function localize (token, count, options) {
	    options = options || {}
	
	    var result
	    if (typeof distanceInWordsLocale[token] === 'string') {
	      result = distanceInWordsLocale[token]
	    } else if (count === 1) {
	      result = distanceInWordsLocale[token].one
	    } else {
	      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
	    }
	
	    if (options.addSuffix) {
	      if (options.comparison > 0) {
	        return 'en ' + result
	      } else {
	        return 'fa ' + result
	      }
	    }
	
	    return result
	  }
	
	  return {
	    localize: localize
	  }
	}
	
	module.exports = buildDistanceInWordsLocale


/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	var buildFormattingTokensRegExp = __webpack_require__(237)
	
	function buildFormatLocale () {
	  var months3char = ['gen', 'feb', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'oct', 'nov', 'des']
	  var monthsFull = ['gener', 'febrer', 'març', 'abril', 'maig', 'juny', 'juliol', 'agost', 'setembre', 'octobre', 'novembre', 'desembre']
	  var weekdays2char = ['dg', 'dl', 'dt', 'dc', 'dj', 'dv', 'ds']
	  var weekdays3char = ['dge', 'dls', 'dts', 'dcs', 'djs', 'dvs', 'dss']
	  var weekdaysFull = ['diumenge', 'dilluns', 'dimarts', 'dimecres', 'dijous', 'divendres', 'dissabte']
	  var meridiemUppercase = ['AM', 'PM']
	  var meridiemLowercase = ['am', 'pm']
	  var meridiemFull = ['a.m.', 'p.m.']
	
	  var formatters = {
	    // Month: Jan, Feb, ..., Dec
	    'MMM': function (date) {
	      return months3char[date.getMonth()]
	    },
	
	    // Month: January, February, ..., December
	    'MMMM': function (date) {
	      return monthsFull[date.getMonth()]
	    },
	
	    // Day of week: Su, Mo, ..., Sa
	    'dd': function (date) {
	      return weekdays2char[date.getDay()]
	    },
	
	    // Day of week: Sun, Mon, ..., Sat
	    'ddd': function (date) {
	      return weekdays3char[date.getDay()]
	    },
	
	    // Day of week: Sunday, Monday, ..., Saturday
	    'dddd': function (date) {
	      return weekdaysFull[date.getDay()]
	    },
	
	    // AM, PM
	    'A': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
	    },
	
	    // am, pm
	    'a': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
	    },
	
	    // a.m., p.m.
	    'aa': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
	    }
	  }
	
	  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
	  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
	  ordinalFormatters.forEach(function (formatterToken) {
	    formatters[formatterToken + 'o'] = function (date, formatters) {
	      return ordinal(formatters[formatterToken](date))
	    }
	  })
	
	  return {
	    formatters: formatters,
	    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
	  }
	}
	
	function ordinal (number) {
	  switch (number) {
	    case 1:
	      return '1r'
	    case 2:
	      return '2n'
	    case 3:
	      return '3r'
	    case 4:
	      return '4t'
	    default:
	      return number + 'è'
	  }
	}
	
	module.exports = buildFormatLocale


/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	var buildDistanceInWordsLocale = __webpack_require__(250)
	var buildFormatLocale = __webpack_require__(251)
	
	/**
	 * @category Locales
	 * @summary Catalan locale.
	 * @author Guillermo Grau [@guigrpa]{@link https://github.com/guigrpa}
	 */
	module.exports = {
	  distanceInWords: buildDistanceInWordsLocale(),
	  format: buildFormatLocale()
	}


/***/ },
/* 253 */
/***/ function(module, exports) {

	module.exports = {
		"typings": "../../typings.d.ts"
	};

/***/ },
/* 254 */
/***/ function(module, exports) {

	function declensionGroup (scheme, count) {
	  if (count === 1) {
	    return scheme.one
	  }
	
	  if (count >= 2 && count <= 4) {
	    return scheme.twoFour
	  }
	
	  // if count === null || count === 0 || count >= 5
	  return scheme.other
	}
	
	function declension (scheme, count, time) {
	  var group = declensionGroup(scheme, count)
	  var finalText = group[time] || group
	  return finalText.replace('{{count}}', count)
	}
	
	function extractPreposition (token) {
	  var result = ['lessThan', 'about', 'over', 'almost'].filter(function (preposition) {
	    return !!token.match(new RegExp('^' + preposition))
	  })
	
	  return result[0]
	}
	
	function prefixPreposition (preposition) {
	  var translation = ''
	
	  if (preposition === 'almost') {
	    translation = 'skoro'
	  }
	
	  if (preposition === 'about') {
	    translation = 'přibližně'
	  }
	
	  return translation.length > 0 ? translation + ' ' : ''
	}
	
	function suffixPreposition (preposition) {
	  var translation = ''
	
	  if (preposition === 'lessThan') {
	    translation = 'méně než'
	  }
	
	  if (preposition === 'over') {
	    translation = 'více než'
	  }
	
	  return translation.length > 0 ? translation + ' ' : ''
	}
	
	function lowercaseFirstLetter (string) {
	  return string.charAt(0).toLowerCase() + string.slice(1)
	}
	
	function buildDistanceInWordsLocale () {
	  var distanceInWordsLocale = {
	    xSeconds: {
	      one: {
	        regular: 'vteřina',
	        past: 'vteřinou',
	        future: 'vteřinu'
	      },
	      twoFour: {
	        regular: '{{count}} vteřiny',
	        past: '{{count}} vteřinami',
	        future: '{{count}} vteřiny'
	      },
	      other: {
	        regular: '{{count}} vteřin',
	        past: '{{count}} vteřinami',
	        future: '{{count}} vteřin'
	      }
	    },
	
	    halfAMinute: {
	      other: {
	        regular: 'půl minuty',
	        past: 'půl minutou',
	        future: 'půl minuty'
	      }
	    },
	
	    xMinutes: {
	      one: {
	        regular: 'minuta',
	        past: 'minutou',
	        future: 'minutu'
	      },
	      twoFour: {
	        regular: '{{count}} minuty',
	        past: '{{count}} minutami',
	        future: '{{count}} minuty'
	      },
	      other: {
	        regular: '{{count}} minut',
	        past: '{{count}} minutami',
	        future: '{{count}} minut'
	      }
	    },
	
	    xHours: {
	      one: {
	        regular: 'hodina',
	        past: 'hodinou',
	        future: 'hodinu'
	      },
	      twoFour: {
	        regular: '{{count}} hodiny',
	        past: '{{count}} hodinami',
	        future: '{{count}} hodiny'
	      },
	      other: {
	        regular: '{{count}} hodin',
	        past: '{{count}} hodinami',
	        future: '{{count}} hodin'
	      }
	    },
	
	    xDays: {
	      one: {
	        regular: 'den',
	        past: 'dnem',
	        future: 'den'
	      },
	      twoFour: {
	        regular: '{{count}} dni',
	        past: '{{count}} dny',
	        future: '{{count}} dni'
	      },
	      other: {
	        regular: '{{count}} dní',
	        past: '{{count}} dny',
	        future: '{{count}} dní'
	      }
	    },
	
	    xMonths: {
	      one: {
	        regular: 'měsíc',
	        past: 'měsícem',
	        future: 'měsíc'
	      },
	      twoFour: {
	        regular: '{{count}} měsíce',
	        past: '{{count}} měsíci',
	        future: '{{count}} měsíce'
	      },
	      other: {
	        regular: '{{count}} měsíců',
	        past: '{{count}} měsíci',
	        future: '{{count}} měsíců'
	      }
	    },
	
	    xYears: {
	      one: {
	        regular: 'rok',
	        past: 'rokem',
	        future: 'rok'
	      },
	      twoFour: {
	        regular: '{{count}} roky',
	        past: '{{count}} roky',
	        future: '{{count}} roky'
	      },
	      other: {
	        regular: '{{count}} roků',
	        past: '{{count}} roky',
	        future: '{{count}} roků'
	      }
	    }
	  }
	
	  function localize (token, count, options) {
	    options = options || {}
	
	    var preposition = extractPreposition(token) || ''
	    var key = lowercaseFirstLetter(token.substring(preposition.length))
	    var scheme = distanceInWordsLocale[key]
	
	    if (!options.addSuffix) {
	      return prefixPreposition(preposition) + suffixPreposition(preposition) + declension(scheme, count, 'regular')
	    }
	
	    if (options.comparison > 0) {
	      return prefixPreposition(preposition) + 'za ' + suffixPreposition(preposition) + declension(scheme, count, 'future')
	    } else {
	      return prefixPreposition(preposition) + 'před ' + suffixPreposition(preposition) + declension(scheme, count, 'past')
	    }
	  }
	
	  return {
	    localize: localize
	  }
	}
	
	module.exports = buildDistanceInWordsLocale


/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	var buildFormattingTokensRegExp = __webpack_require__(237)
	
	function buildFormatLocale () {
	  var months3char = ['led', 'úno', 'bře', 'dub', 'kvě', 'čvn', 'čvc', 'srp', 'zář', 'říj', 'lis', 'pro']
	  var monthsFull = ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec']
	  var weekdays2char = ['ne', 'po', 'út', 'st', 'čt', 'pá', 'so']
	  var weekdays3char = ['ned', 'pon', 'úte', 'stř', 'čtv', 'pát', 'sob']
	  var weekdaysFull = ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota']
	  var meridiemUppercase = ['DOP.', 'ODP.']
	  var meridiemLowercase = ['dop.', 'odp.']
	  var meridiemFull = ['dopoledne', 'odpoledne']
	
	  var formatters = {
	    // Month: led, úno, ..., pro
	    'MMM': function (date) {
	      return months3char[date.getMonth()]
	    },
	
	    // Month: leden, únor, ..., prosinec
	    'MMMM': function (date) {
	      return monthsFull[date.getMonth()]
	    },
	
	    // Day of week: ne, po, ..., so
	    'dd': function (date) {
	      return weekdays2char[date.getDay()]
	    },
	
	    // Day of week: ned, pon, ..., sob
	    'ddd': function (date) {
	      return weekdays3char[date.getDay()]
	    },
	
	    // Day of week: neděle, pondělí, ..., sobota
	    'dddd': function (date) {
	      return weekdaysFull[date.getDay()]
	    },
	
	    // DOP., ODP.
	    'A': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
	    },
	
	    // dop., odp.
	    'a': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
	    },
	
	    // dopoledne, odpoledne
	    'aa': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
	    }
	  }
	
	  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
	  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
	  ordinalFormatters.forEach(function (formatterToken) {
	    formatters[formatterToken + 'o'] = function (date, formatters) {
	      return ordinal(formatters[formatterToken](date))
	    }
	  })
	
	  return {
	    formatters: formatters,
	    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
	  }
	}
	
	function ordinal (number) {
	  return number + '.'
	}
	
	module.exports = buildFormatLocale


/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	var buildDistanceInWordsLocale = __webpack_require__(254)
	var buildFormatLocale = __webpack_require__(255)
	
	/**
	 * @category Locales
	 * @summary Czech locale.
	 * @author David Rus [@davidrus]{@link https://github.com/davidrus}
	 */
	module.exports = {
	  distanceInWords: buildDistanceInWordsLocale(),
	  format: buildFormatLocale()
	}


/***/ },
/* 257 */
/***/ function(module, exports) {

	module.exports = {
		"typings": "../../typings.d.ts"
	};

/***/ },
/* 258 */
/***/ function(module, exports) {

	function buildDistanceInWordsLocale () {
	  var distanceInWordsLocale = {
	    lessThanXSeconds: {
	      one: 'mindre end et sekund',
	      other: 'mindre end {{count}} sekunder'
	    },
	
	    xSeconds: {
	      one: '1 sekund',
	      other: '{{count}} sekunder'
	    },
	
	    halfAMinute: 'et halvt minut',
	
	    lessThanXMinutes: {
	      one: 'mindre end et minut',
	      other: 'mindre end {{count}} minutter'
	    },
	
	    xMinutes: {
	      one: '1 minut',
	      other: '{{count}} minutter'
	    },
	
	    aboutXHours: {
	      one: 'cirka 1 time',
	      other: 'cirka {{count}} timer'
	    },
	
	    xHours: {
	      one: '1 time',
	      other: '{{count}} timer'
	    },
	
	    xDays: {
	      one: '1 dag',
	      other: '{{count}} dage'
	    },
	
	    aboutXMonths: {
	      one: 'cirka 1 måned',
	      other: 'cirka {{count}} måneder'
	    },
	
	    xMonths: {
	      one: '1 måned',
	      other: '{{count}} måneder'
	    },
	
	    aboutXYears: {
	      one: 'cirka 1 år',
	      other: 'cirka {{count}} år'
	    },
	
	    xYears: {
	      one: '1 år',
	      other: '{{count}} år'
	    },
	
	    overXYears: {
	      one: 'over 1 år',
	      other: 'over {{count}} år'
	    },
	
	    almostXYears: {
	      one: 'næsten 1 år',
	      other: 'næsten {{count}} år'
	    }
	  }
	
	  function localize (token, count, options) {
	    options = options || {}
	
	    var result
	    if (typeof distanceInWordsLocale[token] === 'string') {
	      result = distanceInWordsLocale[token]
	    } else if (count === 1) {
	      result = distanceInWordsLocale[token].one
	    } else {
	      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
	    }
	
	    if (options.addSuffix) {
	      if (options.comparison > 0) {
	        return 'om ' + result
	      } else {
	        return result + ' siden'
	      }
	    }
	
	    return result
	  }
	
	  return {
	    localize: localize
	  }
	}
	
	module.exports = buildDistanceInWordsLocale


/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	var buildFormattingTokensRegExp = __webpack_require__(237)
	
	function buildFormatLocale () {
	  var months3char = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec']
	  var monthsFull = ['januar', 'februar', 'marts', 'april', 'maj', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'december']
	  var weekdays2char = ['sø', 'ma', 'ti', 'on', 'to', 'fr', 'lø']
	  var weekdays3char = ['søn', 'man', 'tir', 'ons', 'tor', 'fre', 'lør']
	  var weekdaysFull = ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag']
	  var meridiemUppercase = ['AM', 'PM']
	  var meridiemLowercase = ['am', 'pm']
	  var meridiemFull = ['a.m.', 'p.m.']
	
	  var formatters = {
	    // Month: Jan, Feb, ..., Dec
	    'MMM': function (date) {
	      return months3char[date.getMonth()]
	    },
	
	    // Month: January, February, ..., December
	    'MMMM': function (date) {
	      return monthsFull[date.getMonth()]
	    },
	
	    // Day of week: Su, Mo, ..., Sa
	    'dd': function (date) {
	      return weekdays2char[date.getDay()]
	    },
	
	    // Day of week: Sun, Mon, ..., Sat
	    'ddd': function (date) {
	      return weekdays3char[date.getDay()]
	    },
	
	    // Day of week: Sunday, Monday, ..., Saturday
	    'dddd': function (date) {
	      return weekdaysFull[date.getDay()]
	    },
	
	    // AM, PM
	    'A': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
	    },
	
	    // am, pm
	    'a': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
	    },
	
	    // a.m., p.m.
	    'aa': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
	    }
	  }
	
	  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
	  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
	  ordinalFormatters.forEach(function (formatterToken) {
	    formatters[formatterToken + 'o'] = function (date, formatters) {
	      return ordinal(formatters[formatterToken](date))
	    }
	  })
	
	  return {
	    formatters: formatters,
	    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
	  }
	}
	
	function ordinal (number) {
	  return '' + number
	}
	
	module.exports = buildFormatLocale


/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	var buildDistanceInWordsLocale = __webpack_require__(258)
	var buildFormatLocale = __webpack_require__(259)
	
	/**
	 * @category Locales
	 * @summary Danish locale.
	 * @author Anders B. Hansen [@Andersbiha]{@link https://github.com/Andersbiha}
	 */
	module.exports = {
	  distanceInWords: buildDistanceInWordsLocale(),
	  format: buildFormatLocale()
	}


/***/ },
/* 261 */
/***/ function(module, exports) {

	module.exports = {
		"typings": "../../typings.d.ts"
	};

/***/ },
/* 262 */
/***/ function(module, exports) {

	function buildDistanceInWordsLocale () {
	  var distanceInWordsLocale = {
	    lessThanXSeconds: {
	      standalone: {
	        one: 'weniger als eine Sekunde',
	        other: 'weniger als {{count}} Sekunden'
	      },
	      withPreposition: {
	        one: 'weniger als einer Sekunde',
	        other: 'weniger als {{count}} Sekunden'
	      }
	    },
	
	    xSeconds: {
	      standalone: {
	        one: 'eine Sekunde',
	        other: '{{count}} Sekunden'
	      },
	      withPreposition: {
	        one: 'einer Sekunde',
	        other: '{{count}} Sekunden'
	      }
	    },
	
	    halfAMinute: {
	      standalone: 'eine halbe Minute',
	      withPreposition: 'einer halben Minute'
	    },
	
	    lessThanXMinutes: {
	      standalone: {
	        one: 'weniger als eine Minute',
	        other: 'weniger als {{count}} Minuten'
	      },
	      withPreposition: {
	        one: 'weniger als einer Minute',
	        other: 'weniger als {{count}} Minuten'
	      }
	    },
	
	    xMinutes: {
	      standalone: {
	        one: 'eine Minute',
	        other: '{{count}} Minuten'
	      },
	      withPreposition: {
	        one: 'einer Minute',
	        other: '{{count}} Minuten'
	      }
	    },
	
	    aboutXHours: {
	      standalone: {
	        one: 'etwa eine Stunde',
	        other: 'etwa {{count}} Stunden'
	      },
	      withPreposition: {
	        one: 'etwa einer Stunde',
	        other: 'etwa {{count}} Stunden'
	      }
	    },
	
	    xHours: {
	      standalone: {
	        one: 'eine Stunde',
	        other: '{{count}} Stunden'
	      },
	      withPreposition: {
	        one: 'einer Stunde',
	        other: '{{count}} Stunden'
	      }
	    },
	
	    xDays: {
	      standalone: {
	        one: 'ein Tag',
	        other: '{{count}} Tage'
	      },
	      withPreposition: {
	        one: 'einem Tag',
	        other: '{{count}} Tagen'
	      }
	
	    },
	
	    aboutXMonths: {
	      standalone: {
	        one: 'etwa ein Monat',
	        other: 'etwa {{count}} Monate'
	      },
	      withPreposition: {
	        one: 'etwa einem Monat',
	        other: 'etwa {{count}} Monaten'
	      }
	    },
	
	    xMonths: {
	      standalone: {
	        one: 'ein Monat',
	        other: '{{count}} Monate'
	      },
	      withPreposition: {
	        one: 'einem Monat',
	        other: '{{count}} Monaten'
	      }
	    },
	
	    aboutXYears: {
	      standalone: {
	        one: 'etwa ein Jahr',
	        other: 'etwa {{count}} Jahre'
	      },
	      withPreposition: {
	        one: 'etwa einem Jahr',
	        other: 'etwa {{count}} Jahren'
	      }
	    },
	
	    xYears: {
	      standalone: {
	        one: 'ein Jahr',
	        other: '{{count}} Jahre'
	      },
	      withPreposition: {
	        one: 'einem Jahr',
	        other: '{{count}} Jahren'
	      }
	    },
	
	    overXYears: {
	      standalone: {
	        one: 'mehr als ein Jahr',
	        other: 'mehr als {{count}} Jahre'
	      },
	      withPreposition: {
	        one: 'mehr als einem Jahr',
	        other: 'mehr als {{count}} Jahren'
	      }
	    },
	
	    almostXYears: {
	      standalone: {
	        one: 'fast ein Jahr',
	        other: 'fast {{count}} Jahre'
	      },
	      withPreposition: {
	        one: 'fast einem Jahr',
	        other: 'fast {{count}} Jahren'
	      }
	    }
	  }
	
	  function localize (token, count, options) {
	    options = options || {}
	
	    var usageGroup = options.addSuffix
	      ? distanceInWordsLocale[token].withPreposition
	      : distanceInWordsLocale[token].standalone
	
	    var result
	    if (typeof usageGroup === 'string') {
	      result = usageGroup
	    } else if (count === 1) {
	      result = usageGroup.one
	    } else {
	      result = usageGroup.other.replace('{{count}}', count)
	    }
	
	    if (options.addSuffix) {
	      if (options.comparison > 0) {
	        return 'in ' + result
	      } else {
	        return 'vor ' + result
	      }
	    }
	
	    return result
	  }
	
	  return {
	    localize: localize
	  }
	}
	
	module.exports = buildDistanceInWordsLocale


/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	var buildFormattingTokensRegExp = __webpack_require__(237)
	
	function buildFormatLocale () {
	  // Note: in German, the names of days of the week and months are capitalized.
	  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
	  // Generally, formatted dates should look like they are in the middle of a sentence,
	  // e.g. in Spanish language the weekdays and months should be in the lowercase.
	  var months3char = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez']
	  var monthsFull = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
	  var weekdays2char = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']
	  var weekdays3char = ['Son', 'Mon', 'Die', 'Mit', 'Don', 'Fre', 'Sam']
	  var weekdaysFull = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag']
	  var meridiemUppercase = ['AM', 'PM']
	  var meridiemLowercase = ['am', 'pm']
	  var meridiemFull = ['a.m.', 'p.m.']
	
	  var formatters = {
	    // Month: Jan, Feb, ..., Dec
	    'MMM': function (date) {
	      return months3char[date.getMonth()]
	    },
	
	    // Month: January, February, ..., December
	    'MMMM': function (date) {
	      return monthsFull[date.getMonth()]
	    },
	
	    // Day of week: Su, Mo, ..., Sa
	    'dd': function (date) {
	      return weekdays2char[date.getDay()]
	    },
	
	    // Day of week: Sun, Mon, ..., Sat
	    'ddd': function (date) {
	      return weekdays3char[date.getDay()]
	    },
	
	    // Day of week: Sunday, Monday, ..., Saturday
	    'dddd': function (date) {
	      return weekdaysFull[date.getDay()]
	    },
	
	    // AM, PM
	    'A': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
	    },
	
	    // am, pm
	    'a': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
	    },
	
	    // a.m., p.m.
	    'aa': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
	    }
	  }
	
	  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
	  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
	  ordinalFormatters.forEach(function (formatterToken) {
	    formatters[formatterToken + 'o'] = function (date, formatters) {
	      return ordinal(formatters[formatterToken](date))
	    }
	  })
	
	  return {
	    formatters: formatters,
	    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
	  }
	}
	
	function ordinal (number) {
	  return number + '.'
	}
	
	module.exports = buildFormatLocale


/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	var buildDistanceInWordsLocale = __webpack_require__(262)
	var buildFormatLocale = __webpack_require__(263)
	
	/**
	 * @category Locales
	 * @summary German locale.
	 * @author Thomas Eilmsteiner [@DeMuu]{@link https://github.com/DeMuu}
	 * @author Asia [@asia-t]{@link https://github.com/asia-t}
	 */
	module.exports = {
	  distanceInWords: buildDistanceInWordsLocale(),
	  format: buildFormatLocale()
	}


/***/ },
/* 265 */
/***/ function(module, exports) {

	module.exports = {
		"typings": "../../typings.d.ts"
	};

/***/ },
/* 266 */
/***/ function(module, exports) {

	function buildDistanceInWordsLocale () {
	  var distanceInWordsLocale = {
	    lessThanXSeconds: {
	      one: 'λιγότερο από ένα δευτερόλεπτο',
	      other: 'λιγότερο από {{count}} δευτερόλεπτα'
	    },
	
	    xSeconds: {
	      one: '1 δευτερόλεπτο',
	      other: '{{count}} δευτερόλεπτα'
	    },
	
	    halfAMinute: 'μισό λεπτό',
	
	    lessThanXMinutes: {
	      one: 'λιγότερο από ένα λεπτό',
	      other: 'λιγότερο από {{count}} λεπτά'
	    },
	
	    xMinutes: {
	      one: '1 λεπτό',
	      other: '{{count}} λεπτά'
	    },
	
	    aboutXHours: {
	      one: 'περίπου 1 ώρα',
	      other: 'περίπου {{count}} ώρες'
	    },
	
	    xHours: {
	      one: '1 ώρα',
	      other: '{{count}} ώρες'
	    },
	
	    xDays: {
	      one: '1 ημέρα',
	      other: '{{count}} ημέρες'
	    },
	
	    aboutXMonths: {
	      one: 'περίπου 1 μήνας',
	      other: 'περίπου {{count}} μήνες'
	    },
	
	    xMonths: {
	      one: '1 μήνας',
	      other: '{{count}} μήνες'
	    },
	
	    aboutXYears: {
	      one: 'περίπου 1 χρόνο',
	      other: 'περίπου {{count}} χρόνια'
	    },
	
	    xYears: {
	      one: '1 χρόνο',
	      other: '{{count}} χρόνια'
	    },
	
	    overXYears: {
	      one: 'πάνω από 1 χρόνο',
	      other: 'πάνω από {{count}} χρόνια'
	    },
	
	    almostXYears: {
	      one: 'περίπου 1 χρόνο',
	      other: 'περίπου {{count}} χρόνια'
	    }
	  }
	
	  function localize (token, count, options) {
	    options = options || {}
	
	    var result
	    if (typeof distanceInWordsLocale[token] === 'string') {
	      result = distanceInWordsLocale[token]
	    } else if (count === 1) {
	      result = distanceInWordsLocale[token].one
	    } else {
	      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
	    }
	
	    if (options.addSuffix) {
	      if (options.comparison > 0) {
	        return 'σε ' + result
	      } else {
	        return result + ' πρίν'
	      }
	    }
	
	    return result
	  }
	
	  return {
	    localize: localize
	  }
	}
	
	module.exports = buildDistanceInWordsLocale


/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	var buildFormattingTokensRegExp = __webpack_require__(237)
	
	function buildFormatLocale () {
	  var months3char = ['Ιαν', 'Φεβ', 'Μαρ', 'Απρ', 'Μαϊ', 'Ιουν', 'Ιουλ', 'Αυγ', 'Σεπ', 'Οκτ', 'Νοε', 'Δεκ']
	  var monthsFull = ['Ιανουάριος', 'Φεβρουάριος', 'Μάρτιος', 'Απρίλιος', 'Μάιος', 'Ιούνιος', 'Ιούλιος', 'Αύγουστος', 'Σεπτέμβριος', 'Οκτώβριος', 'Νοέμβριος', 'Δεκέμβριος']
	  var monthsGenitive = ['Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαΐου', 'Ιουνίου', 'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου', 'Οκτωβρίου', 'Νοεμβρίου', 'Δεκεμβρίου']
	  var weekdays2char = ['Κυ', 'Δε', 'Τρ', 'Τε', 'Πέ', 'Πα', 'Σά']
	  var weekdays3char = ['Κυρ', 'Δευ', 'Τρί', 'Τετ', 'Πέμ', 'Παρ', 'Σάβ']
	  var weekdaysFull = ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο']
	  var meridiemUppercase = ['ΠΜ', 'ΜΜ']
	  var meridiemLowercase = ['πμ', 'μμ']
	  var meridiemFull = ['π.μ.', 'μ.μ.']
	
	  var formatters = {
	    // Month: Jan, Feb, ..., Dec
	    'MMM': function (date) {
	      return months3char[date.getMonth()]
	    },
	
	    // Month: January, February, ..., December
	    'MMMM': function (date) {
	      return monthsFull[date.getMonth()]
	    },
	
	    // Day of week: Su, Mo, ..., Sa
	    'dd': function (date) {
	      return weekdays2char[date.getDay()]
	    },
	
	    // Day of week: Sun, Mon, ..., Sat
	    'ddd': function (date) {
	      return weekdays3char[date.getDay()]
	    },
	
	    // Day of week: Sunday, Monday, ..., Saturday
	    'dddd': function (date) {
	      return weekdaysFull[date.getDay()]
	    },
	
	    // AM, PM
	    'A': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
	    },
	
	    // am, pm
	    'a': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
	    },
	
	    // a.m., p.m.
	    'aa': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
	    }
	  }
	
	  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
	  var ordinalGenders = {
	    'M': 'ος',
	    'D': 'η',
	    'DDD': 'η',
	    'd': 'η',
	    'Q': 'ο',
	    'W': 'η'
	  }
	  var ordinalKeys = ['M', 'D', 'DDD', 'd', 'Q', 'W']
	  ordinalKeys.forEach(function (formatterToken) {
	    formatters[formatterToken + 'o'] = function (date, formatters) {
	      return formatters[formatterToken](date) + ordinalGenders[formatterToken]
	    }
	  })
	
	  // Generate genitive variant of full months
	  var formatsWithGenitive = ['D', 'Do', 'DD']
	  formatsWithGenitive.forEach(function (formatterToken) {
	    formatters[formatterToken + ' MMMM'] = function (date, commonFormatters) {
	      var formatter = formatters[formatterToken] || commonFormatters[formatterToken]
	      return formatter(date, commonFormatters) + ' ' + monthsGenitive[date.getMonth()]
	    }
	  })
	
	  return {
	    formatters: formatters,
	    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
	  }
	}
	
	module.exports = buildFormatLocale


/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	var buildDistanceInWordsLocale = __webpack_require__(266)
	var buildFormatLocale = __webpack_require__(267)
	
	/**
	 * @category Locales
	 * @summary Greek locale.
	 * @author Theodoros Orfanidis [@teoulas]{@link https://github.com/teoulas}
	 */
	module.exports = {
	  distanceInWords: buildDistanceInWordsLocale(),
	  format: buildFormatLocale()
	}


/***/ },
/* 269 */
/***/ function(module, exports) {

	module.exports = {
		"typings": "../../typings.d.ts"
	};

/***/ },
/* 270 */
/***/ function(module, exports) {

	module.exports = {
		"typings": "../../typings.d.ts"
	};

/***/ },
/* 271 */
/***/ function(module, exports) {

	function buildDistanceInWordsLocale () {
	  var distanceInWordsLocale = {
	    lessThanXSeconds: {
	      one: 'malpli ol sekundo',
	      other: 'malpli ol {{count}} sekundoj'
	    },
	
	    xSeconds: {
	      one: '1 sekundo',
	      other: '{{count}} sekundoj'
	    },
	
	    halfAMinute: 'duonminuto',
	
	    lessThanXMinutes: {
	      one: 'malpli ol minuto',
	      other: 'malpli ol {{count}} minutoj'
	    },
	
	    xMinutes: {
	      one: '1 minuto',
	      other: '{{count}} minutoj'
	    },
	
	    aboutXHours: {
	      one: 'proksimume 1 horo',
	      other: 'proksimume {{count}} horoj'
	    },
	
	    xHours: {
	      one: '1 horo',
	      other: '{{count}} horoj'
	    },
	
	    xDays: {
	      one: '1 tago',
	      other: '{{count}} tagoj'
	    },
	
	    aboutXMonths: {
	      one: 'proksimume 1 monato',
	      other: 'proksimume {{count}} monatoj'
	    },
	
	    xMonths: {
	      one: '1 monato',
	      other: '{{count}} monatoj'
	    },
	
	    aboutXYears: {
	      one: 'proksimume 1 jaro',
	      other: 'proksimume {{count}} jaroj'
	    },
	
	    xYears: {
	      one: '1 jaro',
	      other: '{{count}} jaroj'
	    },
	
	    overXYears: {
	      one: 'pli ol 1 jaro',
	      other: 'pli ol {{count}} jaroj'
	    },
	
	    almostXYears: {
	      one: 'preskaŭ 1 jaro',
	      other: 'preskaŭ {{count}} jaroj'
	    }
	  }
	
	  function localize (token, count, options) {
	    options = options || {}
	
	    var result
	    if (typeof distanceInWordsLocale[token] === 'string') {
	      result = distanceInWordsLocale[token]
	    } else if (count === 1) {
	      result = distanceInWordsLocale[token].one
	    } else {
	      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
	    }
	
	    if (options.addSuffix) {
	      if (options.comparison > 0) {
	        return 'post ' + result
	      } else {
	        return 'antaŭ ' + result
	      }
	    }
	
	    return result
	  }
	
	  return {
	    localize: localize
	  }
	}
	
	module.exports = buildDistanceInWordsLocale


/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	var buildFormattingTokensRegExp = __webpack_require__(237)
	
	function buildFormatLocale () {
	  var months3char = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aŭg', 'sep', 'okt', 'nov', 'dec']
	  var monthsFull = ['januaro', 'februaro', 'marto', 'aprilo', 'majo', 'junio', 'julio', 'aŭgusto', 'septembro', 'oktobro', 'novembro', 'decembro']
	  var weekdays2char = ['di', 'lu', 'ma', 'me', 'ĵa', 've', 'sa']
	  var weekdays3char = ['dim', 'lun', 'mar', 'mer', 'ĵaŭ', 'ven', 'sab']
	  var weekdaysFull = ['dimanĉo', 'lundo', 'mardo', 'merkredo', 'ĵaŭdo', 'vendredo', 'sabato']
	  var meridiemUppercase = ['A.T.M.', 'P.T.M.']
	  var meridiemLowercase = ['a.t.m.', 'p.t.m.']
	  var meridiemFull = ['antaŭtagmeze', 'posttagmeze']
	
	  var formatters = {
	    // Month: jan, feb, ..., deс
	    'MMM': function (date) {
	      return months3char[date.getMonth()]
	    },
	
	    // Month: januaro, februaro, ..., decembro
	    'MMMM': function (date) {
	      return monthsFull[date.getMonth()]
	    },
	
	    // Day of week: di, lu, ..., sa
	    'dd': function (date) {
	      return weekdays2char[date.getDay()]
	    },
	
	    // Day of week: dim, lun, ..., sab
	    'ddd': function (date) {
	      return weekdays3char[date.getDay()]
	    },
	
	    // Day of week: dimanĉo, lundo, ..., sabato
	    'dddd': function (date) {
	      return weekdaysFull[date.getDay()]
	    },
	
	    // A.T.M., P.T.M.
	    'A': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
	    },
	
	    // a.t.m., p.t.m.
	    'a': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
	    },
	
	    // antaŭtagmeze, posttagmeze
	    'aa': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
	    }
	  }
	
	  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
	  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
	  ordinalFormatters.forEach(function (formatterToken) {
	    formatters[formatterToken + 'o'] = function (date, formatters) {
	      return formatters[formatterToken](date) + '-a'
	    }
	  })
	
	  return {
	    formatters: formatters,
	    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
	  }
	}
	
	module.exports = buildFormatLocale


/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	var buildDistanceInWordsLocale = __webpack_require__(271)
	var buildFormatLocale = __webpack_require__(272)
	
	/**
	 * @category Locales
	 * @summary Esperanto locale.
	 */
	module.exports = {
	  distanceInWords: buildDistanceInWordsLocale(),
	  format: buildFormatLocale()
	}


/***/ },
/* 274 */
/***/ function(module, exports) {

	module.exports = {
		"typings": "../../typings.d.ts"
	};

/***/ },
/* 275 */
/***/ function(module, exports) {

	function buildDistanceInWordsLocale () {
	  var distanceInWordsLocale = {
	    lessThanXSeconds: {
	      one: 'menos de un segundo',
	      other: 'menos de {{count}} segundos'
	    },
	
	    xSeconds: {
	      one: '1 segundo',
	      other: '{{count}} segundos'
	    },
	
	    halfAMinute: 'medio minuto',
	
	    lessThanXMinutes: {
	      one: 'menos de un minuto',
	      other: 'menos de {{count}} minutos'
	    },
	
	    xMinutes: {
	      one: '1 minuto',
	      other: '{{count}} minutos'
	    },
	
	    aboutXHours: {
	      one: 'alrededor de 1 hora',
	      other: 'alrededor de {{count}} horas'
	    },
	
	    xHours: {
	      one: '1 hora',
	      other: '{{count}} horas'
	    },
	
	    xDays: {
	      one: '1 día',
	      other: '{{count}} días'
	    },
	
	    aboutXMonths: {
	      one: 'alrededor de 1 mes',
	      other: 'alrededor de {{count}} meses'
	    },
	
	    xMonths: {
	      one: '1 mes',
	      other: '{{count}} meses'
	    },
	
	    aboutXYears: {
	      one: 'alrededor de 1 año',
	      other: 'alrededor de {{count}} años'
	    },
	
	    xYears: {
	      one: '1 año',
	      other: '{{count}} años'
	    },
	
	    overXYears: {
	      one: 'más de 1 año',
	      other: 'más de {{count}} años'
	    },
	
	    almostXYears: {
	      one: 'casi 1 año',
	      other: 'casi {{count}} años'
	    }
	  }
	
	  function localize (token, count, options) {
	    options = options || {}
	
	    var result
	    if (typeof distanceInWordsLocale[token] === 'string') {
	      result = distanceInWordsLocale[token]
	    } else if (count === 1) {
	      result = distanceInWordsLocale[token].one
	    } else {
	      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
	    }
	
	    if (options.addSuffix) {
	      if (options.comparison > 0) {
	        return 'en ' + result
	      } else {
	        return 'hace ' + result
	      }
	    }
	
	    return result
	  }
	
	  return {
	    localize: localize
	  }
	}
	
	module.exports = buildDistanceInWordsLocale


/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	var buildFormattingTokensRegExp = __webpack_require__(237)
	
	function buildFormatLocale () {
	  var months3char = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic']
	  var monthsFull = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
	  var weekdays2char = ['do', 'lu', 'ma', 'mi', 'ju', 'vi', 'sa']
	  var weekdays3char = ['dom', 'lun', 'mar', 'mie', 'jue', 'vie', 'sáb']
	  var weekdaysFull = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado']
	  var meridiemUppercase = ['AM', 'PM']
	  var meridiemLowercase = ['am', 'pm']
	  var meridiemFull = ['a.m.', 'p.m.']
	
	  var formatters = {
	    // Month: Jan, Feb, ..., Dec
	    'MMM': function (date) {
	      return months3char[date.getMonth()]
	    },
	
	    // Month: January, February, ..., December
	    'MMMM': function (date) {
	      return monthsFull[date.getMonth()]
	    },
	
	    // Day of week: Su, Mo, ..., Sa
	    'dd': function (date) {
	      return weekdays2char[date.getDay()]
	    },
	
	    // Day of week: Sun, Mon, ..., Sat
	    'ddd': function (date) {
	      return weekdays3char[date.getDay()]
	    },
	
	    // Day of week: Sunday, Monday, ..., Saturday
	    'dddd': function (date) {
	      return weekdaysFull[date.getDay()]
	    },
	
	    // AM, PM
	    'A': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
	    },
	
	    // am, pm
	    'a': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
	    },
	
	    // a.m., p.m.
	    'aa': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
	    }
	  }
	
	  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
	  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
	  ordinalFormatters.forEach(function (formatterToken) {
	    formatters[formatterToken + 'o'] = function (date, formatters) {
	      return ordinal(formatters[formatterToken](date))
	    }
	  })
	
	  return {
	    formatters: formatters,
	    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
	  }
	}
	
	function ordinal (number) {
	  return number + 'º'
	}
	
	module.exports = buildFormatLocale


/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	var buildDistanceInWordsLocale = __webpack_require__(275)
	var buildFormatLocale = __webpack_require__(276)
	
	/**
	 * @category Locales
	 * @summary Spanish locale.
	 * @author Juan Angosto [@juanangosto]{@link https://github.com/juanangosto}
	 * @author Guillermo Grau [@guigrpa]{@link https://github.com/guigrpa}
	 */
	module.exports = {
	  distanceInWords: buildDistanceInWordsLocale(),
	  format: buildFormatLocale()
	}


/***/ },
/* 278 */
/***/ function(module, exports) {

	module.exports = {
		"typings": "../../typings.d.ts"
	};

/***/ },
/* 279 */
/***/ function(module, exports) {

	function buildDistanceInWordsLocale () {
	  function futureSeconds (text) {
	    return text.replace(/sekuntia?/, 'sekunnin')
	  }
	
	  function futureMinutes (text) {
	    return text.replace(/minuuttia?/, 'minuutin')
	  }
	
	  function futureHours (text) {
	    return text.replace(/tuntia?/, 'tunnin')
	  }
	
	  function futureDays (text) {
	    return text.replace(/päivää?/, 'päivän')
	  }
	
	  function futureMonths (text) {
	    return text.replace(/(kuukausi|kuukautta)/, 'kuukauden')
	  }
	
	  function futureYears (text) {
	    return text.replace(/(vuosi|vuotta)/, 'vuoden')
	  }
	
	  var distanceInWordsLocale = {
	    lessThanXSeconds: {
	      one: 'alle sekunti',
	      other: 'alle {{count}} sekuntia',
	      futureTense: futureSeconds
	    },
	
	    xSeconds: {
	      one: 'sekunti',
	      other: '{{count}} sekuntia',
	      futureTense: futureSeconds
	    },
	
	    halfAMinute: {
	      one: 'puoli minuuttia',
	      other: 'puoli minuuttia',
	      futureTense: function (text) {
	        return 'puolen minuutin'
	      }
	    },
	
	    lessThanXMinutes: {
	      one: 'alle minuutti',
	      other: 'alle {{count}} minuuttia',
	      futureTense: futureMinutes
	    },
	
	    xMinutes: {
	      one: 'minuutti',
	      other: '{{count}} minuuttia',
	      futureTense: futureMinutes
	    },
	
	    aboutXHours: {
	      one: 'noin tunti',
	      other: 'noin {{count}} tuntia',
	      futureTense: futureHours
	    },
	
	    xHours: {
	      one: 'tunti',
	      other: '{{count}} tuntia',
	      futureTense: futureHours
	    },
	
	    xDays: {
	      one: 'päivä',
	      other: '{{count}} päivää',
	      futureTense: futureDays
	    },
	
	    aboutXMonths: {
	      one: 'noin kuukausi',
	      other: 'noin {{count}} kuukautta',
	      futureTense: futureMonths
	    },
	
	    xMonths: {
	      one: 'kuukausi',
	      other: '{{count}} kuukautta',
	      futureTense: futureMonths
	    },
	
	    aboutXYears: {
	      one: 'noin vuosi',
	      other: 'noin {{count}} vuotta',
	      futureTense: futureYears
	    },
	
	    xYears: {
	      one: 'vuosi',
	      other: '{{count}} vuotta',
	      futureTense: futureYears
	    },
	
	    overXYears: {
	      one: 'yli vuosi',
	      other: 'yli {{count}} vuotta',
	      futureTense: futureYears
	    },
	
	    almostXYears: {
	      one: 'lähes vuosi',
	      other: 'lähes {{count}} vuotta',
	      futureTense: futureYears
	    }
	  }
	
	  function localize (token, count, options) {
	    options = options || {}
	
	    var distance = distanceInWordsLocale[token]
	    var result = count === 1 ? distance.one : distance.other.replace('{{count}}', count)
	
	    if (options.addSuffix) {
	      if (options.comparison > 0) {
	        return distance.futureTense(result) + ' kuluttua'
	      } else {
	        return result + ' sitten'
	      }
	    }
	
	    return result
	  }
	
	  return {
	    localize: localize
	  }
	}
	
	module.exports = buildDistanceInWordsLocale


/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	var buildFormattingTokensRegExp = __webpack_require__(237)
	
	function buildFormatLocale () {
	  var months3char = ['tammi', 'helmi', 'maalis', 'huhti', 'touko', 'kesä', 'heinä', 'elo', 'syys', 'loka', 'marras', 'joulu']
	  var monthsFull = ['tammikuu', 'helmikuu', 'maaliskuu', 'huhtikuu', 'toukokuu', 'kesäkuu', 'heinäkuu', 'elokuu', 'syyskuu', 'lokakuu', 'marraskuu', 'joulukuu']
	  var weekdays2char = ['su', 'ma', 'ti', 'ke', 'to', 'pe', 'la']
	  var weekdaysFull = ['sunnuntai', 'maanantai', 'tiistai', 'keskiviikko', 'torstai', 'perjantai', 'lauantai']
	
	  // In Finnish `a.m.` / `p.m.` are virtually never used, but it seems `AP` (aamupäivä) / `IP` (iltapäivä) are acknowleded terms:
	  // https://fi.wikipedia.org/wiki/24_tunnin_kello
	  function meridiem (date) {
	    return date.getHours() < 12 ? 'AP' : 'IP'
	  }
	
	  var formatters = {
	    // Month: Jan, Feb, ..., Dec
	    'MMM': function (date) {
	      return months3char[date.getMonth()]
	    },
	
	    // Month: January, February, ..., December
	    'MMMM': function (date) {
	      return monthsFull[date.getMonth()]
	    },
	
	    // Day of week: Su, Mo, ..., Sa
	    'dd': function (date) {
	      return weekdays2char[date.getDay()]
	    },
	
	    // Day of week: Sun, Mon, ..., Sat
	    'ddd': function (date) {
	      // Finnish doesn't use two-char weekdays
	      return weekdays2char[date.getDay()]
	    },
	
	    // Day of week: Sunday, Monday, ..., Saturday
	    'dddd': function (date) {
	      return weekdaysFull[date.getDay()]
	    },
	
	    // AM, PM
	    'A': meridiem,
	
	    // am, pm
	    'a': meridiem,
	
	    // a.m., p.m.
	    'aa': meridiem
	  }
	
	  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
	  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
	  ordinalFormatters.forEach(function (formatterToken) {
	    formatters[formatterToken + 'o'] = function (date, formatters) {
	      return formatters[formatterToken](date).toString() + '.'
	    }
	  })
	
	  return {
	    formatters: formatters,
	    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
	  }
	}
	
	module.exports = buildFormatLocale


/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	var buildDistanceInWordsLocale = __webpack_require__(279)
	var buildFormatLocale = __webpack_require__(280)
	
	/**
	 * @category Locales
	 * @summary Finnish locale.
	 * @author Pyry-Samuli Lahti [@Pyppe]{@link https://github.com/Pyppe}
	 */
	module.exports = {
	  distanceInWords: buildDistanceInWordsLocale(),
	  format: buildFormatLocale()
	}


/***/ },
/* 282 */
/***/ function(module, exports) {

	module.exports = {
		"typings": "../../typings.d.ts"
	};

/***/ },
/* 283 */
/***/ function(module, exports) {

	function buildDistanceInWordsLocale () {
	  var distanceInWordsLocale = {
	    lessThanXSeconds: {
	      one: 'mas maliit sa isang segundo',
	      other: 'mas maliit sa {{count}} segundo'
	    },
	
	    xSeconds: {
	      one: '1 segundo',
	      other: '{{count}} segundo'
	    },
	
	    halfAMinute: 'kalahating minuto',
	
	    lessThanXMinutes: {
	      one: 'mas maliit sa isang minuto',
	      other: 'mas maliit sa {{count}} minuto'
	    },
	
	    xMinutes: {
	      one: '1 minuto',
	      other: '{{count}} minuto'
	    },
	
	    aboutXHours: {
	      one: 'mga 1 oras',
	      other: 'mga {{count}} oras'
	    },
	
	    xHours: {
	      one: '1 oras',
	      other: '{{count}} oras'
	    },
	
	    xDays: {
	      one: '1 araw',
	      other: '{{count}} araw'
	    },
	
	    aboutXMonths: {
	      one: 'mga 1 buwan',
	      other: 'mga {{count}} buwan'
	    },
	
	    xMonths: {
	      one: '1 buwan',
	      other: '{{count}} buwan'
	    },
	
	    aboutXYears: {
	      one: 'mga 1 taon',
	      other: 'mga {{count}} taon'
	    },
	
	    xYears: {
	      one: '1 taon',
	      other: '{{count}} taon'
	    },
	
	    overXYears: {
	      one: 'higit sa 1 taon',
	      other: 'higit sa {{count}} taon'
	    },
	
	    almostXYears: {
	      one: 'halos 1 taon',
	      other: 'halos {{count}} taon'
	    }
	  }
	
	  function localize (token, count, options) {
	    options = options || {}
	
	    var result
	    if (typeof distanceInWordsLocale[token] === 'string') {
	      result = distanceInWordsLocale[token]
	    } else if (count === 1) {
	      result = distanceInWordsLocale[token].one
	    } else {
	      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
	    }
	
	    if (options.addSuffix) {
	      if (options.comparison > 0) {
	        return 'sa loob ng ' + result
	      } else {
	        return result + ' ang nakalipas'
	      }
	    }
	
	    return result
	  }
	
	  return {
	    localize: localize
	  }
	}
	
	module.exports = buildDistanceInWordsLocale


/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	var buildFormattingTokensRegExp = __webpack_require__(237)
	
	function buildFormatLocale () {
	  var months3char = ['Ene', 'Peb', 'Mar', 'Abr', 'May', 'Hun', 'Hul', 'Ago', 'Set', 'Okt', 'Nob', 'Dis']
	  var monthsFull = ['Enero', 'Pebrero', 'Marso', 'Abril', 'Mayo', 'Hunyo', 'Hulyo', 'Agosto', 'Setyembre', 'Oktubre', 'Nobyembre', 'Disyembre']
	  var weekdays2char = ['Li', 'Lu', 'Ma', 'Mi', 'Hu', 'Bi', 'Sa']
	  var weekdays3char = ['Lin', 'Lun', 'Mar', 'Miy', 'Huw', 'Biy', 'Sab']
	  var weekdaysFull = ['Linggo', 'Lunes', 'Martes', 'Miyerkules', 'Huwebes', 'Biyernes', 'Sabado']
	  var meridiemUppercase = ['NU', 'NT', 'NH', 'NG']
	  var meridiemLowercase = ['nu', 'nt', 'nh', 'ng']
	  var meridiemFull = ['ng umaga', 'ng tanghali', 'ng hapon', 'ng gabi']
	
	  var formatters = {
	    // Month: Jan, Feb, ..., Dec
	    'MMM': function (date) {
	      return months3char[date.getMonth()]
	    },
	
	    // Month: January, February, ..., December
	    'MMMM': function (date) {
	      return monthsFull[date.getMonth()]
	    },
	
	    // Day of week: Su, Mo, ..., Sa
	    'dd': function (date) {
	      return weekdays2char[date.getDay()]
	    },
	
	    // Day of week: Sun, Mon, ..., Sat
	    'ddd': function (date) {
	      return weekdays3char[date.getDay()]
	    },
	
	    // Day of week: Sunday, Monday, ..., Saturday
	    'dddd': function (date) {
	      return weekdaysFull[date.getDay()]
	    },
	
	    // AM, PM
	    'A': function (date) {
	      if (date.getHours() > 12) {
	        var modulo = date.getHours() % 12
	        if (modulo < 6) {
	          return meridiemUppercase[2]
	        } else {
	          return meridiemUppercase[3]
	        }
	      } else if (date.getHours() < 12) {
	        return meridiemUppercase[0]
	      } else {
	        return meridiemUppercase[1]
	      }
	    },
	
	    // am, pm
	    'a': function (date) {
	      if (date.getHours() > 12) {
	        var modulo = date.getHours() % 12
	        if (modulo < 6) {
	          return meridiemLowercase[2]
	        } else {
	          return meridiemLowercase[3]
	        }
	      } else if (date.getHours() < 12) {
	        return meridiemLowercase[0]
	      } else {
	        return meridiemLowercase[1]
	      }
	    },
	
	    // a.m., p.m.
	    'aa': function (date) {
	      if (date.getHours() > 12) {
	        var modulo = date.getHours() % 12
	        if (modulo < 6) {
	          return meridiemFull[2]
	        } else {
	          return meridiemFull[3]
	        }
	      } else if (date.getHours() < 12) {
	        return meridiemFull[0]
	      } else {
	        return meridiemFull[1]
	      }
	    }
	  }
	
	  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
	  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
	  ordinalFormatters.forEach(function (formatterToken) {
	    formatters[formatterToken + 'o'] = function (date, formatters) {
	      return ordinal(formatters[formatterToken](date))
	    }
	  })
	
	  return {
	    formatters: formatters,
	    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
	  }
	}
	
	function ordinal (number) {
	  return 'ika-' + number
	}
	
	module.exports = buildFormatLocale


/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	var buildDistanceInWordsLocale = __webpack_require__(283)
	var buildFormatLocale = __webpack_require__(284)
	
	/**
	 * @category Locales
	 * @summary Filipino locale.
	 * @author Ian De La Cruz [@RIanDeLaCruz]{@link https://github.com/RIanDeLaCruz}
	 */
	module.exports = {
	  distanceInWords: buildDistanceInWordsLocale(),
	  format: buildFormatLocale()
	}


/***/ },
/* 286 */
/***/ function(module, exports) {

	module.exports = {
		"typings": "../../typings.d.ts"
	};

/***/ },
/* 287 */
/***/ function(module, exports) {

	function buildDistanceInWordsLocale () {
	  var distanceInWordsLocale = {
	    lessThanXSeconds: {
	      one: 'moins d’une seconde',
	      other: 'moins de {{count}} secondes'
	    },
	
	    xSeconds: {
	      one: '1 seconde',
	      other: '{{count}} secondes'
	    },
	
	    halfAMinute: '30 secondes',
	
	    lessThanXMinutes: {
	      one: 'moins d’une minute',
	      other: 'moins de {{count}} minutes'
	    },
	
	    xMinutes: {
	      one: '1 minute',
	      other: '{{count}} minutes'
	    },
	
	    aboutXHours: {
	      one: 'environ 1 heure',
	      other: 'environ {{count}} heures'
	    },
	
	    xHours: {
	      one: '1 heure',
	      other: '{{count}} heures'
	    },
	
	    xDays: {
	      one: '1 jour',
	      other: '{{count}} jours'
	    },
	
	    aboutXMonths: {
	      one: 'environ 1 mois',
	      other: 'environ {{count}} mois'
	    },
	
	    xMonths: {
	      one: '1 mois',
	      other: '{{count}} mois'
	    },
	
	    aboutXYears: {
	      one: 'environ 1 an',
	      other: 'environ {{count}} ans'
	    },
	
	    xYears: {
	      one: '1 an',
	      other: '{{count}} ans'
	    },
	
	    overXYears: {
	      one: 'plus d’un an',
	      other: 'plus de {{count}} ans'
	    },
	
	    almostXYears: {
	      one: 'presqu’un an',
	      other: 'presque {{count}} ans'
	    }
	  }
	
	  function localize (token, count, options) {
	    options = options || {}
	
	    var result
	    if (typeof distanceInWordsLocale[token] === 'string') {
	      result = distanceInWordsLocale[token]
	    } else if (count === 1) {
	      result = distanceInWordsLocale[token].one
	    } else {
	      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
	    }
	
	    if (options.addSuffix) {
	      if (options.comparison > 0) {
	        return 'dans ' + result
	      } else {
	        return 'il y a ' + result
	      }
	    }
	
	    return result
	  }
	
	  return {
	    localize: localize
	  }
	}
	
	module.exports = buildDistanceInWordsLocale


/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	var buildFormattingTokensRegExp = __webpack_require__(237)
	
	function buildFormatLocale () {
	  var months3char = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juill.', 'août', 'sept.', 'oct.', 'nov.', 'déc.']
	  var monthsFull = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
	  var weekdays2char = ['di', 'lu', 'ma', 'me', 'je', 've', 'sa']
	  var weekdays3char = ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.']
	  var weekdaysFull = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']
	  var meridiemUppercase = ['AM', 'PM']
	  var meridiemLowercase = ['am', 'pm']
	  var meridiemFull = ['du matin', 'de l’après-midi', 'du soir']
	
	  var formatters = {
	    // Month: Jan, Feb, …, Dec
	    'MMM': function (date) {
	      return months3char[date.getMonth()]
	    },
	
	    // Month: January, February, …, December
	    'MMMM': function (date) {
	      return monthsFull[date.getMonth()]
	    },
	
	    // Day of week: Su, Mo, …, Sa
	    'dd': function (date) {
	      return weekdays2char[date.getDay()]
	    },
	
	    // Day of week: Sun, Mon, …, Sat
	    'ddd': function (date) {
	      return weekdays3char[date.getDay()]
	    },
	
	    // Day of week: Sunday, Monday, …, Saturday
	    'dddd': function (date) {
	      return weekdaysFull[date.getDay()]
	    },
	
	    // AM, PM
	    'A': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
	    },
	
	    // am, pm
	    'a': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
	    },
	
	    // a.m., p.m.
	    'aa': function (date) {
	      var hours = date.getHours()
	
	      if (hours <= 12) {
	        return meridiemFull[0]
	      }
	
	      if (hours <= 16) {
	        return meridiemFull[1]
	      }
	
	      return meridiemFull[2]
	    },
	
	    // ISO week, ordinal version: 1st, 2nd, …, 53rd
	    // NOTE: Week has feminine grammatical gender in French: semaine
	    'Wo': function (date, formatters) {
	      return feminineOrdinal(formatters.W(date))
	    }
	  }
	
	  // Generate ordinal version of formatters: M → Mo, D → Do, etc.
	  // NOTE: For words with masculine grammatical gender in French: mois, jour, trimestre
	  var formatterTokens = ['M', 'D', 'DDD', 'd', 'Q']
	  formatterTokens.forEach(function (formatterToken) {
	    formatters[formatterToken + 'o'] = function (date, formatters) {
	      return masculineOrdinal(formatters[formatterToken](date))
	    }
	  })
	
	  // Special case for day of month ordinals in long date format context:
	  // 1er mars, 2 mars, 3 mars, …
	  // See https://github.com/date-fns/date-fns/issues/437
	  //
	  // NOTE: The below implementation works because parsing of tokens inside a
	  // format string is done by a greedy regular expression, i.e. longer tokens
	  // have priority. E.g. formatter for "Do MMMM" has priority over individual
	  // formatters for "Do" and "MMMM".
	  var monthsTokens = ['MMM', 'MMMM']
	  monthsTokens.forEach(function (monthToken) {
	    formatters['Do ' + monthToken] = function (date, commonFormatters) {
	      var dayOfMonthToken = date.getDate() === 1
	        ? 'Do'
	        : 'D'
	      var dayOfMonthFormatter = formatters[dayOfMonthToken] || commonFormatters[dayOfMonthToken]
	
	      return dayOfMonthFormatter(date, commonFormatters) + ' ' + formatters[monthToken](date)
	    }
	  })
	
	  return {
	    formatters: formatters,
	    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
	  }
	}
	
	function masculineOrdinal (number) {
	  if (number === 1) {
	    return '1er'
	  }
	
	  return number + 'e'
	}
	
	function feminineOrdinal (number) {
	  if (number === 1) {
	    return '1re'
	  }
	
	  return number + 'e'
	}
	
	module.exports = buildFormatLocale


/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	var buildDistanceInWordsLocale = __webpack_require__(287)
	var buildFormatLocale = __webpack_require__(288)
	
	/**
	 * @category Locales
	 * @summary French locale.
	 * @author Jean Dupouy [@izeau]{@link https://github.com/izeau}
	 * @author François B [@fbonzon]{@link https://github.com/fbonzon}
	 */
	module.exports = {
	  distanceInWords: buildDistanceInWordsLocale(),
	  format: buildFormatLocale()
	}


/***/ },
/* 290 */
/***/ function(module, exports) {

	module.exports = {
		"typings": "../../typings.d.ts"
	};

/***/ },
/* 291 */
/***/ function(module, exports) {

	function buildDistanceInWordsLocale () {
	  var distanceInWordsLocale = {
	    lessThanXSeconds: {
	      one: {
	        standalone: 'manje od 1 sekunde',
	        withPrepositionAgo: 'manje od 1 sekunde',
	        withPrepositionIn: 'manje od 1 sekundu'
	      },
	      dual: 'manje od {{count}} sekunde',
	      other: 'manje od {{count}} sekundi'
	    },
	
	    xSeconds: {
	      one: {
	        standalone: '1 sekunda',
	        withPrepositionAgo: '1 sekunde',
	        withPrepositionIn: '1 sekundu'
	      },
	      dual: '{{count}} sekunde',
	      other: '{{count}} sekundi'
	    },
	
	    halfAMinute: 'pola minute',
	
	    lessThanXMinutes: {
	      one: {
	        standalone: 'manje od 1 minute',
	        withPrepositionAgo: 'manje od 1 minute',
	        withPrepositionIn: 'manje od 1 minutu'
	      },
	      dual: 'manje od {{count}} minute',
	      other: 'manje od {{count}} minuta'
	    },
	
	    xMinutes: {
	      one: {
	        standalone: '1 minuta',
	        withPrepositionAgo: '1 minute',
	        withPrepositionIn: '1 minutu'
	      },
	      dual: '{{count}} minute',
	      other: '{{count}} minuta'
	    },
	
	    aboutXHours: {
	      one: {
	        standalone: 'oko 1 sat',
	        withPrepositionAgo: 'oko 1 sat',
	        withPrepositionIn: 'oko 1 sat'
	      },
	      dual: 'oko {{count}} sata',
	      other: 'oko {{count}} sati'
	    },
	
	    xHours: {
	      one: {
	        standalone: '1 sat',
	        withPrepositionAgo: '1 sat',
	        withPrepositionIn: '1 sat'
	      },
	      dual: '{{count}} sata',
	      other: '{{count}} sati'
	    },
	
	    xDays: {
	      one: {
	        standalone: '1 dan',
	        withPrepositionAgo: '1 dan',
	        withPrepositionIn: '1 dan'
	      },
	      dual: '{{count}} dana',
	      other: '{{count}} dana'
	    },
	
	    aboutXMonths: {
	      one: {
	        standalone: 'oko 1 mjesec',
	        withPrepositionAgo: 'oko 1 mjesec',
	        withPrepositionIn: 'oko 1 mjesec'
	      },
	      dual: 'oko {{count}} mjeseca',
	      other: 'oko {{count}} mjeseci'
	    },
	
	    xMonths: {
	      one: {
	        standalone: '1 mjesec',
	        withPrepositionAgo: '1 mjesec',
	        withPrepositionIn: '1 mjesec'
	      },
	      dual: '{{count}} mjeseca',
	      other: '{{count}} mjeseci'
	    },
	
	    aboutXYears: {
	      one: {
	        standalone: 'oko 1 godinu',
	        withPrepositionAgo: 'oko 1 godinu',
	        withPrepositionIn: 'oko 1 godinu'
	      },
	      dual: 'oko {{count}} godine',
	      other: 'oko {{count}} godina'
	    },
	
	    xYears: {
	      one: {
	        standalone: '1 godina',
	        withPrepositionAgo: '1 godine',
	        withPrepositionIn: '1 godinu'
	      },
	      dual: '{{count}} godine',
	      other: '{{count}} godina'
	    },
	
	    overXYears: {
	      one: {
	        standalone: 'preko 1 godinu',
	        withPrepositionAgo: 'preko 1 godinu',
	        withPrepositionIn: 'preko 1 godinu'
	      },
	      dual: 'preko {{count}} godine',
	      other: 'preko {{count}} godina'
	    },
	
	    almostXYears: {
	      one: {
	        standalone: 'gotovo 1 godinu',
	        withPrepositionAgo: 'gotovo 1 godinu',
	        withPrepositionIn: 'gotovo 1 godinu'
	      },
	      dual: 'gotovo {{count}} godine',
	      other: 'gotovo {{count}} godina'
	    }
	  }
	
	  function localize (token, count, options) {
	    options = options || {}
	
	    var result
	
	    if (typeof distanceInWordsLocale[token] === 'string') {
	      result = distanceInWordsLocale[token]
	    } else if (count === 1) {
	      if (options.addSuffix) {
	        if (options.comparison > 0) {
	          result = distanceInWordsLocale[token].one.withPrepositionIn
	        } else {
	          result = distanceInWordsLocale[token].one.withPrepositionAgo
	        }
	      } else {
	        result = distanceInWordsLocale[token].one.standalone
	      }
	    } else if (
	      count % 10 > 1 && count % 10 < 5 && // if last digit is between 2 and 4
	      String(count).substr(-2, 1) !== '1' // unless the 2nd to last digit is "1"
	    ) {
	      result = distanceInWordsLocale[token].dual.replace('{{count}}', count)
	    } else {
	      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
	    }
	
	    if (options.addSuffix) {
	      if (options.comparison > 0) {
	        return 'za ' + result
	      } else {
	        return 'prije ' + result
	      }
	    }
	
	    return result
	  }
	
	  return {
	    localize: localize
	  }
	}
	
	module.exports = buildDistanceInWordsLocale


/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	var buildFormattingTokensRegExp = __webpack_require__(237)
	
	function buildFormatLocale () {
	  var months3char = ['sij', 'velj', 'ožu', 'tra', 'svi', 'lip', 'srp', 'kol', 'ruj', 'lis', 'stu', 'pro']
	  var monthsFull = ['siječanj', 'veljača', 'ožujak', 'travanj', 'svibanj', 'lipanj', 'srpanj', 'kolovoz', 'rujan', 'listopad', 'studeni', 'prosinac']
	  var monthsGenitive = ['siječnja', 'veljače', 'ožujka', 'travnja', 'svibnja', 'lipnja', 'srpnja', 'kolovoza', 'rujna', 'listopada', 'studenog', 'prosinca']
	  var weekdays2char = ['ne', 'po', 'ut', 'sr', 'če', 'pe', 'su']
	  var weekdays3char = ['ned', 'pon', 'uto', 'sri', 'čet', 'pet', 'sub']
	  var weekdaysFull = ['nedjelja', 'ponedjeljak', 'utorak', 'srijeda', 'četvrtak', 'petak', 'subota']
	  var meridiemUppercase = ['ujutro', 'popodne']
	  var meridiemLowercase = ['ujutro', 'popodne']
	  var meridiemFull = ['ujutro', 'popodne']
	
	  var formatters = {
	    // Month: Jan, Feb, ..., Dec
	    'MMM': function (date) {
	      return months3char[date.getMonth()]
	    },
	
	    // Month: January, February, ..., December
	    'MMMM': function (date) {
	      return monthsFull[date.getMonth()]
	    },
	
	    // Day of week: Su, Mo, ..., Sa
	    'dd': function (date) {
	      return weekdays2char[date.getDay()]
	    },
	
	    // Day of week: Sun, Mon, ..., Sat
	    'ddd': function (date) {
	      return weekdays3char[date.getDay()]
	    },
	
	    // Day of week: Sunday, Monday, ..., Saturday
	    'dddd': function (date) {
	      return weekdaysFull[date.getDay()]
	    },
	
	    // AM, PM
	    'A': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
	    },
	
	    // am, pm
	    'a': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
	    },
	
	    // a.m., p.m.
	    'aa': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
	    }
	  }
	
	  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
	  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
	  ordinalFormatters.forEach(function (formatterToken) {
	    formatters[formatterToken + 'o'] = function (date, formatters) {
	      return ordinal(formatters[formatterToken](date))
	    }
	  })
	
	  // Generate formatters like 'D MMMM', where the month is in the genitive case
	  var monthsGenitiveFormatters = ['D', 'Do', 'DD']
	  monthsGenitiveFormatters.forEach(function (formatterToken) {
	    formatters[formatterToken + ' MMM'] = function (date, commonFormatters) {
	      var formatter = formatters[formatterToken] || commonFormatters[formatterToken]
	      return formatter(date, commonFormatters) + ' ' + monthsGenitive[date.getMonth()]
	    }
	  })
	
	  return {
	    formatters: formatters,
	    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
	  }
	}
	
	function ordinal (number) {
	  return number + '.'
	}
	
	module.exports = buildFormatLocale


/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	var buildDistanceInWordsLocale = __webpack_require__(291)
	var buildFormatLocale = __webpack_require__(292)
	
	/**
	 * @category Locales
	 * @summary Croatian locale.
	 * @author Matija Marohnić [@silvenon]{@link https://github.com/silvenon}
	 */
	module.exports = {
	  distanceInWords: buildDistanceInWordsLocale(),
	  format: buildFormatLocale()
	}


/***/ },
/* 294 */
/***/ function(module, exports) {

	module.exports = {
		"typings": "../../typings.d.ts"
	};

/***/ },
/* 295 */
/***/ function(module, exports) {

	function buildDistanceInWordsLocale () {
	  var distanceInWordsLocale = {
	    lessThanXSeconds: {
	      one: 'kurang dari 1 detik',
	      other: 'kurang dari {{count}} detik'
	    },
	
	    xSeconds: {
	      one: '1 detik',
	      other: '{{count}} detik'
	    },
	
	    halfAMinute: 'setengah menit',
	
	    lessThanXMinutes: {
	      one: 'kurang dari 1 menit',
	      other: 'kurang dari {{count}} menit'
	    },
	
	    xMinutes: {
	      one: '1 menit',
	      other: '{{count}} menit'
	    },
	
	    aboutXHours: {
	      one: 'sekitar 1 jam',
	      other: 'sekitar {{count}} jam'
	    },
	
	    xHours: {
	      one: '1 jam',
	      other: '{{count}} jam'
	    },
	
	    xDays: {
	      one: '1 hari',
	      other: '{{count}} hari'
	    },
	
	    aboutXMonths: {
	      one: 'sekitar 1 bulan',
	      other: 'sekitar {{count}} bulan'
	    },
	
	    xMonths: {
	      one: '1 bulan',
	      other: '{{count}} bulan'
	    },
	
	    aboutXYears: {
	      one: 'sekitar 1 tahun',
	      other: 'sekitar {{count}} tahun'
	    },
	
	    xYears: {
	      one: '1 tahun',
	      other: '{{count}} tahun'
	    },
	
	    overXYears: {
	      one: 'lebih dari 1 tahun',
	      other: 'lebih dari {{count}} tahun'
	    },
	
	    almostXYears: {
	      one: 'hampir 1 tahun',
	      other: 'hampir {{count}} tahun'
	    }
	  }
	
	  function localize (token, count, options) {
	    options = options || {}
	
	    var result
	    if (typeof distanceInWordsLocale[token] === 'string') {
	      result = distanceInWordsLocale[token]
	    } else if (count === 1) {
	      result = distanceInWordsLocale[token].one
	    } else {
	      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
	    }
	
	    if (options.addSuffix) {
	      if (options.comparison > 0) {
	        return 'dalam waktu ' + result
	      } else {
	        return result + ' yang lalu'
	      }
	    }
	
	    return result
	  }
	
	  return {
	    localize: localize
	  }
	}
	
	module.exports = buildDistanceInWordsLocale


/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	var buildFormattingTokensRegExp = __webpack_require__(237)
	
	function buildFormatLocale () {
	  // Note: in Indonesian, the names of days of the week and months are capitalized.
	  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
	  // Generally, formatted dates should look like they are in the middle of a sentence,
	  // e.g. in Spanish language the weekdays and months should be in the lowercase.
	  var months3char = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des']
	  var monthsFull = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
	  var weekdays2char = ['Mi', 'Sn', 'Sl', 'Ra', 'Ka', 'Ju', 'Sa']
	  var weekdays3char = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab']
	  var weekdaysFull = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
	  var meridiemUppercase = ['AM', 'PM']
	  var meridiemLowercase = ['am', 'pm']
	  var meridiemFull = ['a.m.', 'p.m.']
	
	  var formatters = {
	    // Month: Jan, Feb, ..., Dec
	    'MMM': function (date) {
	      return months3char[date.getMonth()]
	    },
	
	    // Month: January, February, ..., December
	    'MMMM': function (date) {
	      return monthsFull[date.getMonth()]
	    },
	
	    // Day of week: Su, Mo, ..., Sa
	    'dd': function (date) {
	      return weekdays2char[date.getDay()]
	    },
	
	    // Day of week: Sun, Mon, ..., Sat
	    'ddd': function (date) {
	      return weekdays3char[date.getDay()]
	    },
	
	    // Day of week: Sunday, Monday, ..., Saturday
	    'dddd': function (date) {
	      return weekdaysFull[date.getDay()]
	    },
	
	    // AM, PM
	    'A': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
	    },
	
	    // am, pm
	    'a': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
	    },
	
	    // a.m., p.m.
	    'aa': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
	    }
	  }
	
	  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
	  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
	  ordinalFormatters.forEach(function (formatterToken) {
	    formatters[formatterToken + 'o'] = function (date, formatters) {
	      return ordinal(formatters[formatterToken](date))
	    }
	  })
	
	  return {
	    formatters: formatters,
	    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
	  }
	}
	
	function ordinal (number) {
	  switch (number) {
	    case 1:
	      return 'pertama'
	    case 2:
	      return 'kedua'
	    case 3:
	      return 'ketiga'
	    default:
	      return 'ke-' + number
	  }
	}
	
	module.exports = buildFormatLocale


/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	var buildDistanceInWordsLocale = __webpack_require__(295)
	var buildFormatLocale = __webpack_require__(296)
	
	/**
	 * @category Locales
	 * @summary Indonesian locale.
	 * @author Rahmat Budiharso [@rbudiharso]{@link https://github.com/rbudiharso}
	 * @author Benget Nata [@bentinata]{@link https://github.com/bentinata}
	 */
	module.exports = {
	  distanceInWords: buildDistanceInWordsLocale(),
	  format: buildFormatLocale()
	}


/***/ },
/* 298 */
/***/ function(module, exports) {

	module.exports = {
		"typings": "../../typings.d.ts"
	};

/***/ },
/* 299 */
/***/ function(module, exports) {

	function buildDistanceInWordsLocale () {
	  var distanceInWordsLocale = {
	    lessThanXSeconds: {
	      one: 'minna en 1 sekúnda',
	      other: 'minna en {{count}} sekúndur'
	    },
	
	    xSeconds: {
	      one: '1 sekúnda',
	      other: '{{count}} sekúndur'
	    },
	
	    halfAMinute: 'hálf mínúta',
	
	    lessThanXMinutes: {
	      one: 'minna en 1 mínúta',
	      other: 'minna en {{count}} mínútur'
	    },
	
	    xMinutes: {
	      one: '1 mínúta',
	      other: '{{count}} mínútur'
	    },
	
	    aboutXHours: {
	      one: 'u.þ.b. 1 klukkustund',
	      other: 'u.þ.b. {{count}} klukkustundir'
	    },
	
	    xHours: {
	      one: '1 klukkustund',
	      other: '{{count}} klukkustundir'
	    },
	
	    xDays: {
	      one: '1 dagur',
	      other: '{{count}} dagar'
	    },
	
	    aboutXMonths: {
	      one: 'u.þ.b. 1 mánuður',
	      other: 'u.þ.b. {{count}} mánuðir'
	    },
	
	    xMonths: {
	      one: '1 mánuður',
	      other: '{{count}} mánuðir'
	    },
	
	    aboutXYears: {
	      one: 'u.þ.b. 1 ár',
	      other: 'u.þ.b. {{count}} ár'
	    },
	
	    xYears: {
	      one: '1 ár',
	      other: '{{count}} ár'
	    },
	
	    overXYears: {
	      one: 'meira en 1 ár',
	      other: 'meira en {{count}} ár'
	    },
	
	    almostXYears: {
	      one: 'næstum 1 ár',
	      other: 'næstum {{count}} ár'
	    }
	  }
	
	  function localize (token, count, options) {
	    options = options || {}
	
	    var result
	    if (typeof distanceInWordsLocale[token] === 'string') {
	      result = distanceInWordsLocale[token]
	    } else if (count === 1) {
	      result = distanceInWordsLocale[token].one
	    } else {
	      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
	    }
	
	    if (options.addSuffix) {
	      if (options.comparison > 0) {
	        return 'í ' + result
	      } else {
	        return result + ' síðan'
	      }
	    }
	
	    return result
	  }
	
	  return {
	    localize: localize
	  }
	}
	
	module.exports = buildDistanceInWordsLocale


/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	var buildFormattingTokensRegExp = __webpack_require__(237)
	
	function buildFormatLocale () {
	  var months3char = ['jan', 'feb', 'mar', 'apr', 'maí', 'jún', 'júl', 'ágú', 'sep', 'okt', 'nóv', 'des']
	  var monthsFull = ['janúar', 'febrúar', 'mars', 'apríl', 'maí', 'júní', 'júlí', 'ágúst', 'september', 'október', 'nóvember', 'desember']
	  var weekdays2char = ['su', 'má', 'þr', 'mi', 'fi', 'fö', 'la']
	  var weekdays3char = ['sun', 'mán', 'þri', 'mið', 'fim', 'fös', 'lau']
	  var weekdaysFull = ['sunnudaginn', 'mánudaginn', 'þriðjudaginn', 'miðvikudaginn', 'fimmtudaginn', 'föstudaginn', 'laugardaginn']
	  var meridiemUppercase = ['AM', 'PM']
	  var meridiemLowercase = ['am', 'pm']
	  var meridiemFull = ['a.m.', 'p.m.']
	
	  var formatters = {
	    // Month: Jan, Feb, ..., Dec
	    'MMM': function (date) {
	      return months3char[date.getMonth()]
	    },
	
	    // Month: January, February, ..., December
	    'MMMM': function (date) {
	      return monthsFull[date.getMonth()]
	    },
	
	    // Day of week: Su, Mo, ..., Sa
	    'dd': function (date) {
	      return weekdays2char[date.getDay()]
	    },
	
	    // Day of week: Sun, Mon, ..., Sat
	    'ddd': function (date) {
	      return weekdays3char[date.getDay()]
	    },
	
	    // Day of week: Sunday, Monday, ..., Saturday
	    'dddd': function (date) {
	      return weekdaysFull[date.getDay()]
	    },
	
	    // AM, PM
	    'A': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
	    },
	
	    // am, pm
	    'a': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
	    },
	
	    // a.m., p.m.
	    'aa': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
	    }
	  }
	
	  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
	  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
	  ordinalFormatters.forEach(function (formatterToken) {
	    formatters[formatterToken + 'o'] = function (date, formatters) {
	      return ordinal(formatters[formatterToken](date))
	    }
	  })
	
	  return {
	    formatters: formatters,
	    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
	  }
	}
	
	function ordinal (number) {
	  return '' + number
	}
	
	module.exports = buildFormatLocale


/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	var buildDistanceInWordsLocale = __webpack_require__(299)
	var buildFormatLocale = __webpack_require__(300)
	
	/**
	 * @category Locales
	 * @summary Icelandic locale.
	 * @author Derek Blank [@derekblank]{@link https://github.com/derekblank}
	 */
	module.exports = {
	  distanceInWords: buildDistanceInWordsLocale(),
	  format: buildFormatLocale()
	}


/***/ },
/* 302 */
/***/ function(module, exports) {

	module.exports = {
		"typings": "../../typings.d.ts"
	};

/***/ },
/* 303 */
/***/ function(module, exports) {

	function buildDistanceInWordsLocale () {
	  var distanceInWordsLocale = {
	    lessThanXSeconds: {
	      one: 'meno di un secondo',
	      other: 'meno di {{count}} secondi'
	    },
	
	    xSeconds: {
	      one: 'un secondo',
	      other: '{{count}} secondi'
	    },
	
	    halfAMinute: 'alcuni secondi',
	
	    lessThanXMinutes: {
	      one: 'meno di un minuto',
	      other: 'meno di {{count}} minuti'
	    },
	
	    xMinutes: {
	      one: 'un minuto',
	      other: '{{count}} minuti'
	    },
	
	    aboutXHours: {
	      one: 'circa un\'ora',
	      other: 'circa {{count}} ore'
	    },
	
	    xHours: {
	      one: 'un\'ora',
	      other: '{{count}} ore'
	    },
	
	    xDays: {
	      one: 'un giorno',
	      other: '{{count}} giorni'
	    },
	
	    aboutXMonths: {
	      one: 'circa un mese',
	      other: 'circa {{count}} mesi'
	    },
	
	    xMonths: {
	      one: 'un mese',
	      other: '{{count}} mesi'
	    },
	
	    aboutXYears: {
	      one: 'circa un anno',
	      other: 'circa {{count}} anni'
	    },
	
	    xYears: {
	      one: 'un anno',
	      other: '{{count}} anni'
	    },
	
	    overXYears: {
	      one: 'piú di un anno',
	      other: 'piú di {{count}} anni'
	    },
	
	    almostXYears: {
	      one: 'quasi un anno',
	      other: 'quasi {{count}} anni'
	    }
	  }
	
	  function localize (token, count, options) {
	    options = options || {}
	
	    var result
	    if (typeof distanceInWordsLocale[token] === 'string') {
	      result = distanceInWordsLocale[token]
	    } else if (count === 1) {
	      result = distanceInWordsLocale[token].one
	    } else {
	      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
	    }
	
	    if (options.addSuffix) {
	      if (options.comparison > 0) {
	        return 'in ' + result
	      } else {
	        return result + ' fa'
	      }
	    }
	
	    return result
	  }
	
	  return {
	    localize: localize
	  }
	}
	
	module.exports = buildDistanceInWordsLocale


/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	var buildFormattingTokensRegExp = __webpack_require__(237)
	
	function buildFormatLocale () {
	  var months3char = ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic']
	  var monthsFull = ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre']
	  var weekdays2char = ['do', 'lu', 'ma', 'me', 'gi', 've', 'sa']
	  var weekdays3char = ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab']
	  var weekdaysFull = ['domenica', 'lunedí', 'martedí', 'mercoledí', 'giovedí', 'venerdí', 'sabato']
	  var meridiemUppercase = ['AM', 'PM']
	  var meridiemLowercase = ['am', 'pm']
	  var meridiemFull = ['a.m.', 'p.m.']
	
	  var formatters = {
	    // Month: Jan, Feb, ..., Dec
	    'MMM': function (date) {
	      return months3char[date.getMonth()]
	    },
	
	    // Month: January, February, ..., December
	    'MMMM': function (date) {
	      return monthsFull[date.getMonth()]
	    },
	
	    // Day of week: Su, Mo, ..., Sa
	    'dd': function (date) {
	      return weekdays2char[date.getDay()]
	    },
	
	    // Day of week: Sun, Mon, ..., Sat
	    'ddd': function (date) {
	      return weekdays3char[date.getDay()]
	    },
	
	    // Day of week: Sunday, Monday, ..., Saturday
	    'dddd': function (date) {
	      return weekdaysFull[date.getDay()]
	    },
	
	    // AM, PM
	    'A': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
	    },
	
	    // am, pm
	    'a': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
	    },
	
	    // a.m., p.m.
	    'aa': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
	    }
	  }
	
	  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
	  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
	  ordinalFormatters.forEach(function (formatterToken) {
	    formatters[formatterToken + 'o'] = function (date, formatters) {
	      return ordinal(formatters[formatterToken](date))
	    }
	  })
	
	  return {
	    formatters: formatters,
	    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
	  }
	}
	
	function ordinal (number) {
	  return number + 'º'
	}
	
	module.exports = buildFormatLocale


/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	var buildDistanceInWordsLocale = __webpack_require__(303)
	var buildFormatLocale = __webpack_require__(304)
	
	/**
	 * @category Locales
	 * @summary Italian locale.
	 * @author Alberto Restifo [@albertorestifo]{@link https://github.com/albertorestifo}
	 */
	module.exports = {
	  distanceInWords: buildDistanceInWordsLocale(),
	  format: buildFormatLocale()
	}


/***/ },
/* 306 */
/***/ function(module, exports) {

	module.exports = {
		"typings": "../../typings.d.ts"
	};

/***/ },
/* 307 */
/***/ function(module, exports) {

	function buildDistanceInWordsLocale () {
	  var distanceInWordsLocale = {
	    lessThanXSeconds: {
	      one: '1秒以下',
	      other: '{{count}}秒以下'
	    },
	
	    xSeconds: {
	      one: '1秒',
	      other: '{{count}}秒'
	    },
	
	    halfAMinute: '30秒ぐらい',
	
	    lessThanXMinutes: {
	      one: '1分以下',
	      other: '{{count}}分以下'
	    },
	
	    xMinutes: {
	      one: '1分',
	      other: '{{count}}分'
	    },
	
	    aboutXHours: {
	      one: '1時間ぐらい',
	      other: '{{count}}時間ぐらい'
	    },
	
	    xHours: {
	      one: '1時間',
	      other: '{{count}}時間'
	    },
	
	    xDays: {
	      one: '1日',
	      other: '{{count}}日'
	    },
	
	    aboutXMonths: {
	      one: '1ヶ月ぐらい',
	      other: '{{count}}ヶ月ぐらい'
	    },
	
	    xMonths: {
	      one: '1ヶ月',
	      other: '{{count}}ヶ月'
	    },
	
	    aboutXYears: {
	      one: '1年ぐらい',
	      other: '{{count}}年ぐらい'
	    },
	
	    xYears: {
	      one: '1年',
	      other: '{{count}}年'
	    },
	
	    overXYears: {
	      one: '1年以上',
	      other: '{{count}}年以上'
	    },
	
	    almostXYears: {
	      one: '1年以下',
	      other: '{{count}}年以下'
	    }
	  }
	
	  function localize (token, count, options) {
	    options = options || {}
	
	    var result
	    if (typeof distanceInWordsLocale[token] === 'string') {
	      result = distanceInWordsLocale[token]
	    } else if (count === 1) {
	      result = distanceInWordsLocale[token].one
	    } else {
	      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
	    }
	
	    if (options.addSuffix) {
	      if (options.comparison > 0) {
	        return result + '後'
	      } else {
	        return result + '前'
	      }
	    }
	
	    return result
	  }
	
	  return {
	    localize: localize
	  }
	}
	
	module.exports = buildDistanceInWordsLocale


/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	var buildFormattingTokensRegExp = __webpack_require__(237)
	
	function buildFormatLocale () {
	  var months3char = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
	  var monthsFull = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
	  var weekdays2char = ['日', '月', '火', '水', '木', '金', '土']
	  var weekdays3char = ['日曜', '月曜', '火曜', '水曜', '木曜', '金曜', '土曜']
	  var weekdaysFull = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日']
	  var meridiemUppercase = ['午前', '午後']
	  var meridiemLowercase = ['午前', '午後']
	  var meridiemFull = ['午前', '午後']
	
	  var formatters = {
	    // Month: Jan, Feb, ..., Dec
	    'MMM': function (date) {
	      return months3char[date.getMonth()]
	    },
	
	    // Month: January, February, ..., December
	    'MMMM': function (date) {
	      return monthsFull[date.getMonth()]
	    },
	
	    // Day of week: Su, Mo, ..., Sa
	    'dd': function (date) {
	      return weekdays2char[date.getDay()]
	    },
	
	    // Day of week: Sun, Mon, ..., Sat
	    'ddd': function (date) {
	      return weekdays3char[date.getDay()]
	    },
	
	    // Day of week: Sunday, Monday, ..., Saturday
	    'dddd': function (date) {
	      return weekdaysFull[date.getDay()]
	    },
	
	    // AM, PM
	    'A': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
	    },
	
	    // am, pm
	    'a': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
	    },
	
	    // a.m., p.m.
	    'aa': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
	    }
	  }
	
	  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
	  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
	  ordinalFormatters.forEach(function (formatterToken) {
	    formatters[formatterToken + 'o'] = function (date, formatters) {
	      return ordinal(formatters[formatterToken](date))
	    }
	  })
	
	  return {
	    formatters: formatters,
	    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
	  }
	}
	
	function ordinal (number) {
	  return number + '日'
	}
	
	module.exports = buildFormatLocale


/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	var buildDistanceInWordsLocale = __webpack_require__(307)
	var buildFormatLocale = __webpack_require__(308)
	
	/**
	 * @category Locales
	 * @summary Japanese locale.
	 * @author Thomas Eilmsteiner [@DeMuu]{@link https://github.com/DeMuu}
	 * @author Yamagishi Kazutoshi [@ykzts]{@link https://github.com/ykzts}
	 */
	module.exports = {
	  distanceInWords: buildDistanceInWordsLocale(),
	  format: buildFormatLocale()
	}


/***/ },
/* 310 */
/***/ function(module, exports) {

	module.exports = {
		"typings": "../../typings.d.ts"
	};

/***/ },
/* 311 */
/***/ function(module, exports) {

	function buildDistanceInWordsLocale () {
	  var distanceInWordsLocale = {
	    lessThanXSeconds: {
	      one: '1초 미만',
	      other: '{{count}}초 미만'
	    },
	
	    xSeconds: {
	      one: '1초',
	      other: '{{count}}초'
	    },
	
	    halfAMinute: '30초',
	
	    lessThanXMinutes: {
	      one: '1분 미만',
	      other: '{{count}}분 미만'
	    },
	
	    xMinutes: {
	      one: '1분',
	      other: '{{count}}분'
	    },
	
	    aboutXHours: {
	      one: '약 1시간',
	      other: '약 {{count}}시간'
	    },
	
	    xHours: {
	      one: '1시간',
	      other: '{{count}}시간'
	    },
	
	    xDays: {
	      one: '1일',
	      other: '{{count}}일'
	    },
	
	    aboutXMonths: {
	      one: '약 1개월',
	      other: '약 {{count}}개월'
	    },
	
	    xMonths: {
	      one: '1개월',
	      other: '{{count}}개월'
	    },
	
	    aboutXYears: {
	      one: '약 1년',
	      other: '약 {{count}}년'
	    },
	
	    xYears: {
	      one: '1년',
	      other: '{{count}}년'
	    },
	
	    overXYears: {
	      one: '1년 이상',
	      other: '{{count}}년 이상'
	    },
	
	    almostXYears: {
	      one: '거의 1년',
	      other: '거의 {{count}}년'
	    }
	  }
	
	  function localize (token, count, options) {
	    options = options || {}
	
	    var result
	    if (typeof distanceInWordsLocale[token] === 'string') {
	      result = distanceInWordsLocale[token]
	    } else if (count === 1) {
	      result = distanceInWordsLocale[token].one
	    } else {
	      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
	    }
	
	    if (options.addSuffix) {
	      if (options.comparison > 0) {
	        return result + ' 후'
	      } else {
	        return result + ' 전'
	      }
	    }
	
	    return result
	  }
	
	  return {
	    localize: localize
	  }
	}
	
	module.exports = buildDistanceInWordsLocale


/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	var buildFormattingTokensRegExp = __webpack_require__(237)
	
	function buildFormatLocale () {
	  var months3char = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
	  var monthsFull = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
	  var weekdays2char = ['일', '월', '화', '수', '목', '금', '토']
	  var weekdays3char = ['일', '월', '화', '수', '목', '금', '토']
	  var weekdaysFull = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
	  var meridiemUppercase = ['오전', '오후']
	  var meridiemLowercase = ['오전', '오후']
	  var meridiemFull = ['오전', '오후']
	
	  var formatters = {
	    // Month: Jan, Feb, ..., Dec
	    'MMM': function (date) {
	      return months3char[date.getMonth()]
	    },
	
	    // Month: January, February, ..., December
	    'MMMM': function (date) {
	      return monthsFull[date.getMonth()]
	    },
	
	    // Day of week: Su, Mo, ..., Sa
	    'dd': function (date) {
	      return weekdays2char[date.getDay()]
	    },
	
	    // Day of week: Sun, Mon, ..., Sat
	    'ddd': function (date) {
	      return weekdays3char[date.getDay()]
	    },
	
	    // Day of week: Sunday, Monday, ..., Saturday
	    'dddd': function (date) {
	      return weekdaysFull[date.getDay()]
	    },
	
	    // AM, PM
	    'A': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
	    },
	
	    // am, pm
	    'a': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
	    },
	
	    // a.m., p.m.
	    'aa': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
	    }
	  }
	
	  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
	  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
	  ordinalFormatters.forEach(function (formatterToken) {
	    formatters[formatterToken + 'o'] = function (date, formatters) {
	      return ordinal(formatters[formatterToken](date))
	    }
	  })
	
	  return {
	    formatters: formatters,
	    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
	  }
	}
	
	function ordinal (number) {
	  return number + '일'
	}
	
	module.exports = buildFormatLocale


/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	var buildDistanceInWordsLocale = __webpack_require__(311)
	var buildFormatLocale = __webpack_require__(312)
	
	/**
	 * @category Locales
	 * @summary Korean locale.
	 * @author Hong Chulju [@angdev]{@link https://github.com/angdev}
	 */
	module.exports = {
	  distanceInWords: buildDistanceInWordsLocale(),
	  format: buildFormatLocale()
	}


/***/ },
/* 314 */
/***/ function(module, exports) {

	module.exports = {
		"typings": "../../typings.d.ts"
	};

/***/ },
/* 315 */
/***/ function(module, exports) {

	function buildDistanceInWordsLocale () {
	  var distanceInWordsLocale = {
	    lessThanXSeconds: {
	      one: 'помалку од секунда',
	      other: 'помалку од {{count}} секунди'
	    },
	
	    xSeconds: {
	      one: '1 секунда',
	      other: '{{count}} секунди'
	    },
	
	    halfAMinute: 'половина минута',
	
	    lessThanXMinutes: {
	      one: 'помалку од минута',
	      other: 'помалку од {{count}} минути'
	    },
	
	    xMinutes: {
	      one: '1 минута',
	      other: '{{count}} минути'
	    },
	
	    aboutXHours: {
	      one: 'околу 1 час',
	      other: 'околу {{count}} часа'
	    },
	
	    xHours: {
	      one: '1 час',
	      other: '{{count}} часа'
	    },
	
	    xDays: {
	      one: '1 ден',
	      other: '{{count}} дена'
	    },
	
	    aboutXMonths: {
	      one: 'околу 1 месец',
	      other: 'околу {{count}} месеци'
	    },
	
	    xMonths: {
	      one: '1 месец',
	      other: '{{count}} месеци'
	    },
	
	    aboutXYears: {
	      one: 'околу 1 година',
	      other: 'околу {{count}} години'
	    },
	
	    xYears: {
	      one: '1 година',
	      other: '{{count}} години'
	    },
	
	    overXYears: {
	      one: 'повеќе од 1 година',
	      other: 'повеќе од {{count}} години'
	    },
	
	    almostXYears: {
	      one: 'безмалку 1 година',
	      other: 'безмалку {{count}} години'
	    }
	  }
	
	  function localize (token, count, options) {
	    options = options || {}
	
	    var result
	    if (typeof distanceInWordsLocale[token] === 'string') {
	      result = distanceInWordsLocale[token]
	    } else if (count === 1) {
	      result = distanceInWordsLocale[token].one
	    } else {
	      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
	    }
	
	    if (options.addSuffix) {
	      if (options.comparison > 0) {
	        return 'за ' + result
	      } else {
	        return 'пред ' + result
	      }
	    }
	
	    return result
	  }
	
	  return {
	    localize: localize
	  }
	}
	
	module.exports = buildDistanceInWordsLocale


/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	var buildFormattingTokensRegExp = __webpack_require__(237)
	
	function buildFormatLocale () {
	  var months3char = ['јан', 'фев', 'мар', 'апр', 'мај', 'јун', 'јул', 'авг', 'сеп', 'окт', 'ное', 'дек']
	  var monthsFull = ['јануари', 'февруари', 'март', 'април', 'мај', 'јуни', 'јули', 'август', 'септември', 'октомври', 'ноември', 'декември']
	  var weekdays2char = ['не', 'по', 'вт', 'ср', 'че', 'пе', 'са']
	  var weekdays3char = ['нед', 'пон', 'вто', 'сре', 'чет', 'пет', 'саб']
	  var weekdaysFull = ['недела', 'понеделник', 'вторник', 'среда', 'четврток', 'петок', 'сабота']
	  var meridiem = ['претпладне', 'попладне']
	
	  var formatters = {
	    // Month: Jan, Feb, ..., Dec
	    'MMM': function (date) {
	      return months3char[date.getMonth()]
	    },
	
	    // Month: January, February, ..., December
	    'MMMM': function (date) {
	      return monthsFull[date.getMonth()]
	    },
	
	    // Day of week: Su, Mo, ..., Sa
	    'dd': function (date) {
	      return weekdays2char[date.getDay()]
	    },
	
	    // Day of week: Sun, Mon, ..., Sat
	    'ddd': function (date) {
	      return weekdays3char[date.getDay()]
	    },
	
	    // Day of week: Sunday, Monday, ..., Saturday
	    'dddd': function (date) {
	      return weekdaysFull[date.getDay()]
	    },
	
	    // AM, PM
	    'A': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiem[1] : meridiem[0]
	    },
	
	    // am, pm
	    'a': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiem[1] : meridiem[0]
	    },
	
	    // a.m., p.m.
	    'aa': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiem[1] : meridiem[0]
	    }
	  }
	
	  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
	  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
	  ordinalFormatters.forEach(function (formatterToken) {
	    formatters[formatterToken + 'o'] = function (date, formatters) {
	      return ordinal(formatters[formatterToken](date))
	    }
	  })
	
	  return {
	    formatters: formatters,
	    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
	  }
	}
	
	function ordinal (number) {
	  var rem100 = number % 100
	  if (rem100 > 20 || rem100 < 10) {
	    switch (rem100 % 10) {
	      case 1:
	        return number + '-ви'
	      case 2:
	        return number + '-ри'
	      case 7:
	      case 8:
	        return number + '-ми'
	    }
	  }
	  return number + '-ти'
	}
	
	module.exports = buildFormatLocale


/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	var buildDistanceInWordsLocale = __webpack_require__(315)
	var buildFormatLocale = __webpack_require__(316)
	
	/**
	 * @category Locales
	 * @summary Macedonian locale.
	 * @author Petar Vlahu [@vlahupetar]{@link https://github.com/vlahupetar}
	 */
	module.exports = {
	  distanceInWords: buildDistanceInWordsLocale(),
	  format: buildFormatLocale()
	}


/***/ },
/* 318 */
/***/ function(module, exports) {

	module.exports = {
		"typings": "../../typings.d.ts"
	};

/***/ },
/* 319 */
/***/ function(module, exports) {

	function buildDistanceInWordsLocale () {
	  var distanceInWordsLocale = {
	    lessThanXSeconds: {
	      one: 'mindre enn ett sekund',
	      other: 'mindre enn {{count}} sekunder'
	    },
	
	    xSeconds: {
	      one: 'ett sekund',
	      other: '{{count}} sekunder'
	    },
	
	    halfAMinute: 'et halvt minutt',
	
	    lessThanXMinutes: {
	      one: 'mindre enn ett minutt',
	      other: 'mindre enn {{count}} minutter'
	    },
	
	    xMinutes: {
	      one: 'ett minutt',
	      other: '{{count}} minutter'
	    },
	
	    aboutXHours: {
	      one: 'rundt en time',
	      other: 'rundt {{count}} timer'
	    },
	
	    xHours: {
	      one: 'en time',
	      other: '{{count}} timer'
	    },
	
	    xDays: {
	      one: 'en dag',
	      other: '{{count}} dager'
	    },
	
	    aboutXMonths: {
	      one: 'rundt en måned',
	      other: 'rundt {{count}} måneder'
	    },
	
	    xMonths: {
	      one: 'en måned',
	      other: '{{count}} måneder'
	    },
	
	    aboutXYears: {
	      one: 'rundt ett år',
	      other: 'rundt {{count}} år'
	    },
	
	    xYears: {
	      one: 'ett år',
	      other: '{{count}} år'
	    },
	
	    overXYears: {
	      one: 'over ett år',
	      other: 'over {{count}} år'
	    },
	
	    almostXYears: {
	      one: 'nesten ett år',
	      other: 'nesten {{count}} år'
	    }
	  }
	
	  function localize (token, count, options) {
	    options = options || {}
	
	    var result
	    if (typeof distanceInWordsLocale[token] === 'string') {
	      result = distanceInWordsLocale[token]
	    } else if (count === 1) {
	      result = distanceInWordsLocale[token].one
	    } else {
	      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
	    }
	
	    if (options.addSuffix) {
	      if (options.comparison > 0) {
	        return 'om ' + result
	      } else {
	        return result + ' siden'
	      }
	    }
	
	    return result
	  }
	
	  return {
	    localize: localize
	  }
	}
	
	module.exports = buildDistanceInWordsLocale


/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	var buildFormattingTokensRegExp = __webpack_require__(237)
	
	function buildFormatLocale () {
	  var months3char = ['jan.', 'feb.', 'mars', 'april', 'mai', 'juni', 'juli', 'aug.', 'sep.', 'okt.', 'nov.', 'des.']
	  var monthsFull = ['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember']
	  var weekdays2char = ['sø', 'ma', 'ti', 'on', 'to', 'fr', 'lø']
	  var weekdays3char = ['sø.', 'ma.', 'ti.', 'on.', 'to.', 'fr.', 'lø.']
	  var weekdaysFull = ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag']
	  var meridiemUppercase = ['AM', 'PM']
	  var meridiemLowercase = ['am', 'pm']
	  var meridiemFull = ['a.m.', 'p.m.']
	
	  var formatters = {
	    // Month: Jan, Feb, ..., Dec
	    'MMM': function (date) {
	      return months3char[date.getMonth()]
	    },
	
	    // Month: January, February, ..., December
	    'MMMM': function (date) {
	      return monthsFull[date.getMonth()]
	    },
	
	    // Day of week: Su, Mo, ..., Sa
	    'dd': function (date) {
	      return weekdays2char[date.getDay()]
	    },
	
	    // Day of week: Sun, Mon, ..., Sat
	    'ddd': function (date) {
	      return weekdays3char[date.getDay()]
	    },
	
	    // Day of week: Sunday, Monday, ..., Saturday
	    'dddd': function (date) {
	      return weekdaysFull[date.getDay()]
	    },
	
	    // AM, PM
	    'A': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
	    },
	
	    // am, pm
	    'a': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
	    },
	
	    // a.m., p.m.
	    'aa': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
	    }
	  }
	
	  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
	  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
	  ordinalFormatters.forEach(function (formatterToken) {
	    formatters[formatterToken + 'o'] = function (date, formatters) {
	      return ordinal(formatters[formatterToken](date))
	    }
	  })
	
	  return {
	    formatters: formatters,
	    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
	  }
	}
	
	function ordinal (number) {
	  return number + '.'
	}
	
	module.exports = buildFormatLocale


/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	var buildDistanceInWordsLocale = __webpack_require__(319)
	var buildFormatLocale = __webpack_require__(320)
	
	/**
	 * @category Locales
	 * @summary Norwegian Bokmål locale.
	 * @author Hans-Kristian Koren [@Hanse]{@link https://github.com/Hanse}
	 */
	module.exports = {
	  distanceInWords: buildDistanceInWordsLocale(),
	  format: buildFormatLocale()
	}


/***/ },
/* 322 */
/***/ function(module, exports) {

	module.exports = {
		"typings": "../../typings.d.ts"
	};

/***/ },
/* 323 */
/***/ function(module, exports) {

	function buildDistanceInWordsLocale () {
	  var distanceInWordsLocale = {
	    lessThanXSeconds: {
	      one: 'minder dan een seconde',
	      other: 'minder dan {{count}} seconden'
	    },
	
	    xSeconds: {
	      one: '1 seconde',
	      other: '{{count}} seconden'
	    },
	
	    halfAMinute: 'een halve minuut',
	
	    lessThanXMinutes: {
	      one: 'minder dan een minuut',
	      other: 'minder dan {{count}} minuten'
	    },
	
	    xMinutes: {
	      one: 'een minuut',
	      other: '{{count}} minuten'
	    },
	
	    aboutXHours: {
	      one: 'ongeveer 1 uur',
	      other: 'ongeveer {{count}} uur'
	    },
	
	    xHours: {
	      one: '1 uur',
	      other: '{{count}} uur'
	    },
	
	    xDays: {
	      one: '1 dag',
	      other: '{{count}} dagen'
	    },
	
	    aboutXMonths: {
	      one: 'ongeveer 1 maand',
	      other: 'ongeveer {{count}} maanden'
	    },
	
	    xMonths: {
	      one: '1 maand',
	      other: '{{count}} maanden'
	    },
	
	    aboutXYears: {
	      one: 'ongeveer 1 jaar',
	      other: 'ongeveer {{count}} jaar'
	    },
	
	    xYears: {
	      one: '1 jaar',
	      other: '{{count}} jaar'
	    },
	
	    overXYears: {
	      one: 'meer dan 1 jaar',
	      other: 'meer dan {{count}} jaar'
	    },
	
	    almostXYears: {
	      one: 'bijna 1 jaar',
	      other: 'bijna {{count}} jaar'
	    }
	  }
	
	  function localize (token, count, options) {
	    options = options || {}
	
	    var result
	    if (typeof distanceInWordsLocale[token] === 'string') {
	      result = distanceInWordsLocale[token]
	    } else if (count === 1) {
	      result = distanceInWordsLocale[token].one
	    } else {
	      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
	    }
	
	    if (options.addSuffix) {
	      if (options.comparison > 0) {
	        return 'over ' + result
	      } else {
	        return result + ' geleden'
	      }
	    }
	
	    return result
	  }
	
	  return {
	    localize: localize
	  }
	}
	
	module.exports = buildDistanceInWordsLocale


/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	var buildFormattingTokensRegExp = __webpack_require__(237)
	
	function buildFormatLocale () {
	  var months3char = ['jan', 'feb', 'mar', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec']
	  var monthsFull = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december']
	  var weekdays2char = ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za']
	  var weekdays3char = ['zon', 'maa', 'din', 'woe', 'don', 'vri', 'zat']
	  var weekdaysFull = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag']
	  var meridiemUppercase = ['AM', 'PM']
	  var meridiemLowercase = ['am', 'pm']
	  var meridiemFull = ['a.m.', 'p.m.']
	
	  var formatters = {
	    // Month: Jan, Feb, ..., Dec
	    'MMM': function (date) {
	      return months3char[date.getMonth()]
	    },
	
	    // Month: January, February, ..., December
	    'MMMM': function (date) {
	      return monthsFull[date.getMonth()]
	    },
	
	    // Day of week: Su, Mo, ..., Sa
	    'dd': function (date) {
	      return weekdays2char[date.getDay()]
	    },
	
	    // Day of week: Sun, Mon, ..., Sat
	    'ddd': function (date) {
	      return weekdays3char[date.getDay()]
	    },
	
	    // Day of week: Sunday, Monday, ..., Saturday
	    'dddd': function (date) {
	      return weekdaysFull[date.getDay()]
	    },
	
	    // AM, PM
	    'A': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
	    },
	
	    // am, pm
	    'a': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
	    },
	
	    // a.m., p.m.
	    'aa': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
	    }
	  }
	
	  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
	  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
	  ordinalFormatters.forEach(function (formatterToken) {
	    formatters[formatterToken + 'o'] = function (date, formatters) {
	      return ordinal(formatters[formatterToken](date))
	    }
	  })
	
	  return {
	    formatters: formatters,
	    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
	  }
	}
	
	function ordinal (number) {
	  return number + 'e'
	}
	
	module.exports = buildFormatLocale


/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	var buildDistanceInWordsLocale = __webpack_require__(323)
	var buildFormatLocale = __webpack_require__(324)
	
	/**
	 * @category Locales
	 * @summary Dutch locale.
	 * @author Jorik Tangelder [@jtangelder]{@link https://github.com/jtangelder}
	 * @author Ruben Stolk [@rubenstolk]{@link https://github.com/rubenstolk}
	 */
	module.exports = {
	  distanceInWords: buildDistanceInWordsLocale(),
	  format: buildFormatLocale()
	}


/***/ },
/* 326 */
/***/ function(module, exports) {

	module.exports = {
		"typings": "../../typings.d.ts"
	};

/***/ },
/* 327 */
/***/ function(module, exports) {

	module.exports = {
		"typings": "../typings.d.ts"
	};

/***/ },
/* 328 */
/***/ function(module, exports) {

	function declensionGroup (scheme, count) {
	  if (count === 1) {
	    return scheme.one
	  }
	
	  var rem100 = count % 100
	
	  // ends with 11-20
	  if (rem100 <= 20 && rem100 > 10) {
	    return scheme.other
	  }
	
	  var rem10 = rem100 % 10
	
	  // ends with 2, 3, 4
	  if (rem10 >= 2 && rem10 <= 4) {
	    return scheme.twoFour
	  }
	
	  return scheme.other
	}
	
	function declension (scheme, count, time) {
	  time = time || 'regular'
	  var group = declensionGroup(scheme, count)
	  var finalText = group[time] || group
	  return finalText.replace('{{count}}', count)
	}
	
	function buildDistanceInWordsLocale () {
	  var distanceInWordsLocale = {
	    lessThanXSeconds: {
	      one: {
	        regular: 'mniej niż sekunda',
	        past: 'mniej niż sekundę',
	        future: 'mniej niż sekundę'
	      },
	      twoFour: 'mniej niż {{count}} sekundy',
	      other: 'mniej niż {{count}} sekund'
	    },
	
	    xSeconds: {
	      one: {
	        regular: 'sekunda',
	        past: 'sekundę',
	        future: 'sekundę'
	      },
	      twoFour: '{{count}} sekundy',
	      other: '{{count}} sekund'
	    },
	
	    halfAMinute: {
	      one: 'pół minuty',
	      twoFour: 'pół minuty',
	      other: 'pół minuty'
	    },
	
	    lessThanXMinutes: {
	      one: {
	        regular: 'mniej niż minuta',
	        past: 'mniej niż minutę',
	        future: 'mniej niż minutę'
	      },
	      twoFour: 'mniej niż {{count}} minuty',
	      other: 'mniej niż {{count}} minut'
	    },
	
	    xMinutes: {
	      one: {
	        regular: 'minuta',
	        past: 'minutę',
	        future: 'minutę'
	      },
	      twoFour: '{{count}} minuty',
	      other: '{{count}} minut'
	    },
	
	    aboutXHours: {
	      one: {
	        regular: 'około godzina',
	        past: 'około godziny',
	        future: 'około godzinę'
	      },
	      twoFour: 'około {{count}} godziny',
	      other: 'około {{count}} godzin'
	    },
	
	    xHours: {
	      one: {
	        regular: 'godzina',
	        past: 'godzinę',
	        future: 'godzinę'
	      },
	      twoFour: '{{count}} godziny',
	      other: '{{count}} godzin'
	    },
	
	    xDays: {
	      one: {
	        regular: 'dzień',
	        past: 'dzień',
	        future: '1 dzień'
	      },
	      twoFour: '{{count}} dni',
	      other: '{{count}} dni'
	    },
	
	    aboutXMonths: {
	      one: 'około miesiąc',
	      twoFour: 'około {{count}} miesiące',
	      other: 'około {{count}} miesięcy'
	    },
	
	    xMonths: {
	      one: 'miesiąc',
	      twoFour: '{{count}} miesiące',
	      other: '{{count}} miesięcy'
	    },
	
	    aboutXYears: {
	      one: 'około rok',
	      twoFour: 'około {{count}} lata',
	      other: 'około {{count}} lat'
	    },
	
	    xYears: {
	      one: 'rok',
	      twoFour: '{{count}} lata',
	      other: '{{count}} lat'
	    },
	
	    overXYears: {
	      one: 'ponad rok',
	      twoFour: 'ponad {{count}} lata',
	      other: 'ponad {{count}} lat'
	    },
	
	    almostXYears: {
	      one: 'prawie rok',
	      twoFour: 'prawie {{count}} lata',
	      other: 'prawie {{count}} lat'
	    }
	  }
	
	  function localize (token, count, options) {
	    options = options || {}
	
	    var scheme = distanceInWordsLocale[token]
	    if (!options.addSuffix) {
	      return declension(scheme, count)
	    }
	
	    if (options.comparison > 0) {
	      return 'za ' + declension(scheme, count, 'future')
	    } else {
	      return declension(scheme, count, 'past') + ' temu'
	    }
	  }
	
	  return {
	    localize: localize
	  }
	}
	
	module.exports = buildDistanceInWordsLocale


/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	var buildFormattingTokensRegExp = __webpack_require__(237)
	
	function buildFormatLocale () {
	  var months3char = ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paź', 'lis', 'gru']
	  var monthsFull = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień']
	  var weekdays2char = ['nd', 'pn', 'wt', 'śr', 'cz', 'pt', 'sb']
	  var weekdays3char = ['niedz.', 'pon.', 'wt.', 'śr.', 'czw.', 'piąt.', 'sob.']
	  var weekdaysFull = ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota']
	  var meridiem = ['w nocy', 'rano', 'po południu', 'wieczorem']
	
	  var formatters = {
	    // Month: Jan, Feb, ..., Dec
	    'MMM': function (date) {
	      return months3char[date.getMonth()]
	    },
	
	    // Month: January, February, ..., December
	    'MMMM': function (date) {
	      return monthsFull[date.getMonth()]
	    },
	
	    // Day of week: Su, Mo, ..., Sa
	    'dd': function (date) {
	      return weekdays2char[date.getDay()]
	    },
	
	    // Day of week: Sun, Mon, ..., Sat
	    'ddd': function (date) {
	      return weekdays3char[date.getDay()]
	    },
	
	    // Day of week: Sunday, Monday, ..., Saturday
	    'dddd': function (date) {
	      return weekdaysFull[date.getDay()]
	    },
	
	    // Time of day
	    'A': function (date) {
	      var hours = date.getHours()
	      if (hours >= 17) {
	        return meridiem[3]
	      } else if (hours >= 12) {
	        return meridiem[2]
	      } else if (hours >= 4) {
	        return meridiem[1]
	      } else {
	        return meridiem[0]
	      }
	    }
	  }
	
	  formatters.a = formatters.A
	  formatters.aa = formatters.A
	
	  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
	  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
	  ordinalFormatters.forEach(function (formatterToken) {
	    formatters[formatterToken + 'o'] = function (date, formatters) {
	      // Well, it should be just a number without any suffix
	      return formatters[formatterToken](date).toString()
	    }
	  })
	
	  return {
	    formatters: formatters,
	    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
	  }
	}
	
	module.exports = buildFormatLocale


/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	var buildDistanceInWordsLocale = __webpack_require__(328)
	var buildFormatLocale = __webpack_require__(329)
	
	/**
	 * @category Locales
	 * @summary Polish locale.
	 * @author Mateusz Derks [@ertrzyiks]{@link https://github.com/ertrzyiks}
	 * @author Just RAG [@justrag]{@link https://github.com/justrag}
	 */
	module.exports = {
	  distanceInWords: buildDistanceInWordsLocale(),
	  format: buildFormatLocale()
	}


/***/ },
/* 331 */
/***/ function(module, exports) {

	module.exports = {
		"typings": "../../typings.d.ts"
	};

/***/ },
/* 332 */
/***/ function(module, exports) {

	function buildDistanceInWordsLocale () {
	  var distanceInWordsLocale = {
	    lessThanXSeconds: {
	      one: 'menos de um segundo',
	      other: 'menos de {{count}} segundos'
	    },
	
	    xSeconds: {
	      one: '1 segundo',
	      other: '{{count}} segundos'
	    },
	
	    halfAMinute: 'meio minuto',
	
	    lessThanXMinutes: {
	      one: 'menos de um minuto',
	      other: 'menos de {{count}} minutos'
	    },
	
	    xMinutes: {
	      one: '1 minuto',
	      other: '{{count}} minutos'
	    },
	
	    aboutXHours: {
	      one: 'aproximadamente 1 hora',
	      other: 'aproximadamente {{count}} horas'
	    },
	
	    xHours: {
	      one: '1 hora',
	      other: '{{count}} horas'
	    },
	
	    xDays: {
	      one: '1 dia',
	      other: '{{count}} dias'
	    },
	
	    aboutXMonths: {
	      one: 'aproximadamente 1 mês',
	      other: 'aproximadamente {{count}} meses'
	    },
	
	    xMonths: {
	      one: '1 mês',
	      other: '{{count}} meses'
	    },
	
	    aboutXYears: {
	      one: 'aproximadamente 1 ano',
	      other: 'aproximadamente {{count}} anos'
	    },
	
	    xYears: {
	      one: '1 ano',
	      other: '{{count}} anos'
	    },
	
	    overXYears: {
	      one: 'mais de 1 ano',
	      other: 'mais de {{count}} anos'
	    },
	
	    almostXYears: {
	      one: 'quase 1 ano',
	      other: 'quase {{count}} anos'
	    }
	  }
	
	  function localize (token, count, options) {
	    options = options || {}
	
	    var result
	    if (typeof distanceInWordsLocale[token] === 'string') {
	      result = distanceInWordsLocale[token]
	    } else if (count === 1) {
	      result = distanceInWordsLocale[token].one
	    } else {
	      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
	    }
	
	    if (options.addSuffix) {
	      if (options.comparison > 0) {
	        return 'daqui a ' + result
	      } else {
	        return 'há ' + result
	      }
	    }
	
	    return result
	  }
	
	  return {
	    localize: localize
	  }
	}
	
	module.exports = buildDistanceInWordsLocale


/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	var buildFormattingTokensRegExp = __webpack_require__(237)
	
	function buildFormatLocale () {
	  var months3char = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']
	  var monthsFull = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
	  var weekdays2char = ['do', 'se', 'te', 'qa', 'qi', 'se', 'sa']
	  var weekdays3char = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb']
	  var weekdaysFull = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado']
	  var meridiemUppercase = ['AM', 'PM']
	  var meridiemLowercase = ['am', 'pm']
	  var meridiemFull = ['a.m.', 'p.m.']
	
	  var formatters = {
	    // Month: Jan, Feb, ..., Dec
	    'MMM': function (date) {
	      return months3char[date.getMonth()]
	    },
	
	    // Month: January, February, ..., December
	    'MMMM': function (date) {
	      return monthsFull[date.getMonth()]
	    },
	
	    // Day of week: Su, Mo, ..., Sa
	    'dd': function (date) {
	      return weekdays2char[date.getDay()]
	    },
	
	    // Day of week: Sun, Mon, ..., Sat
	    'ddd': function (date) {
	      return weekdays3char[date.getDay()]
	    },
	
	    // Day of week: Sunday, Monday, ..., Saturday
	    'dddd': function (date) {
	      return weekdaysFull[date.getDay()]
	    },
	
	    // AM, PM
	    'A': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
	    },
	
	    // am, pm
	    'a': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
	    },
	
	    // a.m., p.m.
	    'aa': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
	    }
	  }
	
	  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
	  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
	  ordinalFormatters.forEach(function (formatterToken) {
	    formatters[formatterToken + 'o'] = function (date, formatters) {
	      return ordinal(formatters[formatterToken](date))
	    }
	  })
	
	  return {
	    formatters: formatters,
	    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
	  }
	}
	
	function ordinal (number) {
	  return number + 'º'
	}
	
	module.exports = buildFormatLocale


/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	var buildDistanceInWordsLocale = __webpack_require__(332)
	var buildFormatLocale = __webpack_require__(333)
	
	/**
	 * @category Locales
	 * @summary Portuguese locale.
	 * @author Dário Freire [@dfreire]{@link https://github.com/dfreire}
	 */
	module.exports = {
	  distanceInWords: buildDistanceInWordsLocale(),
	  format: buildFormatLocale()
	}


/***/ },
/* 335 */
/***/ function(module, exports) {

	module.exports = {
		"typings": "../../typings.d.ts"
	};

/***/ },
/* 336 */
/***/ function(module, exports) {

	function buildDistanceInWordsLocale () {
	  var distanceInWordsLocale = {
	    lessThanXSeconds: {
	      one: 'mai puțin de o secundă',
	      other: 'mai puțin de {{count}} secunde'
	    },
	
	    xSeconds: {
	      one: '1 secundă',
	      other: '{{count}} secunde'
	    },
	
	    halfAMinute: 'jumătate de minut',
	
	    lessThanXMinutes: {
	      one: 'mai puțin de un minut',
	      other: 'mai puțin de {{count}} minute'
	    },
	
	    xMinutes: {
	      one: '1 minut',
	      other: '{{count}} minute'
	    },
	
	    aboutXHours: {
	      one: 'circa 1 oră',
	      other: 'circa {{count}} ore'
	    },
	
	    xHours: {
	      one: '1 oră',
	      other: '{{count}} ore'
	    },
	
	    xDays: {
	      one: '1 zi',
	      other: '{{count}} zile'
	    },
	
	    aboutXMonths: {
	      one: 'circa 1 lună',
	      other: 'circa {{count}} luni'
	    },
	
	    xMonths: {
	      one: '1 lună',
	      other: '{{count}} luni'
	    },
	
	    aboutXYears: {
	      one: 'circa 1 an',
	      other: 'circa {{count}} ani'
	    },
	
	    xYears: {
	      one: '1 an',
	      other: '{{count}} ani'
	    },
	
	    overXYears: {
	      one: 'peste 1 an',
	      other: 'peste {{count}} ani'
	    },
	
	    almostXYears: {
	      one: 'aproape 1 an',
	      other: 'aproape {{count}} ani'
	    }
	  }
	
	  function localize (token, count, options) {
	    options = options || {}
	
	    var result
	    if (typeof distanceInWordsLocale[token] === 'string') {
	      result = distanceInWordsLocale[token]
	    } else if (count === 1) {
	      result = distanceInWordsLocale[token].one
	    } else {
	      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
	    }
	
	    if (options.addSuffix) {
	      if (options.comparison > 0) {
	        return 'în ' + result
	      } else {
	        return result + ' în urmă'
	      }
	    }
	
	    return result
	  }
	
	  return {
	    localize: localize
	  }
	}
	
	module.exports = buildDistanceInWordsLocale


/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	var buildFormattingTokensRegExp = __webpack_require__(237)
	
	function buildFormatLocale () {
	  // Note: in Romanian language the weekdays and months should be in the lowercase.
	  var months3char = ['ian', 'feb', 'mar', 'apr', 'mai', 'iun', 'iul', 'aug', 'sep', 'oct', 'noi', 'dec']
	  var monthsFull = ['ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie', 'iulie', 'august', 'septembrie', 'octombrie', 'noiembrie', 'decembrie']
	  var weekdays2char = ['du', 'lu', 'ma', 'mi', 'jo', 'vi', 'sâ']
	  var weekdays3char = ['dum', 'lun', 'mar', 'mie', 'joi', 'vin', 'sâm']
	  var weekdaysFull = ['duminică', 'luni', 'marți', 'miercuri', 'joi', 'vineri', 'sâmbăta']
	  var meridiemUppercase = ['AM', 'PM']
	  var meridiemLowercase = ['am', 'pm']
	  var meridiemFull = ['a.m.', 'p.m.']
	
	  var formatters = {
	    // Month: Jan, Feb, ..., Dec
	    'MMM': function (date) {
	      return months3char[date.getMonth()]
	    },
	
	    // Month: January, February, ..., December
	    'MMMM': function (date) {
	      return monthsFull[date.getMonth()]
	    },
	
	    // Day of week: Su, Mo, ..., Sa
	    'dd': function (date) {
	      return weekdays2char[date.getDay()]
	    },
	
	    // Day of week: Sun, Mon, ..., Sat
	    'ddd': function (date) {
	      return weekdays3char[date.getDay()]
	    },
	
	    // Day of week: Sunday, Monday, ..., Saturday
	    'dddd': function (date) {
	      return weekdaysFull[date.getDay()]
	    },
	
	    // AM, PM
	    'A': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
	    },
	
	    // am, pm
	    'a': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
	    },
	
	    // a.m., p.m.
	    'aa': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
	    }
	  }
	
	  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
	  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
	  ordinalFormatters.forEach(function (formatterToken) {
	    formatters[formatterToken + 'o'] = function (date, formatters) {
	      return ordinal(formatters[formatterToken](date))
	    }
	  })
	
	  return {
	    formatters: formatters,
	    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
	  }
	}
	
	function ordinal (number) {
	  return number.toString()
	}
	
	module.exports = buildFormatLocale


/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	var buildDistanceInWordsLocale = __webpack_require__(336)
	var buildFormatLocale = __webpack_require__(337)
	
	/**
	 * @category Locales
	 * @summary Romanian locale.
	 * @author Sergiu Munteanu [@jsergiu]{@link https://github.com/jsergiu}
	 */
	module.exports = {
	  distanceInWords: buildDistanceInWordsLocale(),
	  format: buildFormatLocale()
	}


/***/ },
/* 339 */
/***/ function(module, exports) {

	module.exports = {
		"typings": "../../typings.d.ts"
	};

/***/ },
/* 340 */
/***/ function(module, exports) {

	function declension (scheme, count) {
	  // scheme for count=1 exists
	  if (scheme.one !== undefined && count === 1) {
	    return scheme.one
	  }
	
	  var rem10 = count % 10
	  var rem100 = count % 100
	
	  // 1, 21, 31, ...
	  if (rem10 === 1 && rem100 !== 11) {
	    return scheme.singularNominative.replace('{{count}}', count)
	
	  // 2, 3, 4, 22, 23, 24, 32 ...
	  } else if ((rem10 >= 2 && rem10 <= 4) && (rem100 < 10 || rem100 > 20)) {
	    return scheme.singularGenitive.replace('{{count}}', count)
	
	  // 5, 6, 7, 8, 9, 10, 11, ...
	  } else {
	    return scheme.pluralGenitive.replace('{{count}}', count)
	  }
	}
	
	function buildLocalizeTokenFn (scheme) {
	  return function (count, options) {
	    if (options.addSuffix) {
	      if (options.comparison > 0) {
	        if (scheme.future) {
	          return declension(scheme.future, count)
	        } else {
	          return 'через ' + declension(scheme.regular, count)
	        }
	      } else {
	        if (scheme.past) {
	          return declension(scheme.past, count)
	        } else {
	          return declension(scheme.regular, count) + ' назад'
	        }
	      }
	    } else {
	      return declension(scheme.regular, count)
	    }
	  }
	}
	
	function buildDistanceInWordsLocale () {
	  var distanceInWordsLocale = {
	    lessThanXSeconds: buildLocalizeTokenFn({
	      regular: {
	        one: 'меньше секунды',
	        singularNominative: 'меньше {{count}} секунды',
	        singularGenitive: 'меньше {{count}} секунд',
	        pluralGenitive: 'меньше {{count}} секунд'
	      },
	      future: {
	        one: 'меньше, чем через секунду',
	        singularNominative: 'меньше, чем через {{count}} секунду',
	        singularGenitive: 'меньше, чем через {{count}} секунды',
	        pluralGenitive: 'меньше, чем через {{count}} секунд'
	      }
	    }),
	
	    xSeconds: buildLocalizeTokenFn({
	      regular: {
	        singularNominative: '{{count}} секунда',
	        singularGenitive: '{{count}} секунды',
	        pluralGenitive: '{{count}} секунд'
	      },
	      past: {
	        singularNominative: '{{count}} секунду назад',
	        singularGenitive: '{{count}} секунды назад',
	        pluralGenitive: '{{count}} секунд назад'
	      },
	      future: {
	        singularNominative: 'через {{count}} секунду',
	        singularGenitive: 'через {{count}} секунды',
	        pluralGenitive: 'через {{count}} секунд'
	      }
	    }),
	
	    halfAMinute: function (_, options) {
	      if (options.addSuffix) {
	        if (options.comparison > 0) {
	          return 'через полминуты'
	        } else {
	          return 'полминуты назад'
	        }
	      }
	
	      return 'полминуты'
	    },
	
	    lessThanXMinutes: buildLocalizeTokenFn({
	      regular: {
	        one: 'меньше минуты',
	        singularNominative: 'меньше {{count}} минуты',
	        singularGenitive: 'меньше {{count}} минут',
	        pluralGenitive: 'меньше {{count}} минут'
	      },
	      future: {
	        one: 'меньше, чем через минуту',
	        singularNominative: 'меньше, чем через {{count}} минуту',
	        singularGenitive: 'меньше, чем через {{count}} минуты',
	        pluralGenitive: 'меньше, чем через {{count}} минут'
	      }
	    }),
	
	    xMinutes: buildLocalizeTokenFn({
	      regular: {
	        singularNominative: '{{count}} минута',
	        singularGenitive: '{{count}} минуты',
	        pluralGenitive: '{{count}} минут'
	      },
	      past: {
	        singularNominative: '{{count}} минуту назад',
	        singularGenitive: '{{count}} минуты назад',
	        pluralGenitive: '{{count}} минут назад'
	      },
	      future: {
	        singularNominative: 'через {{count}} минуту',
	        singularGenitive: 'через {{count}} минуты',
	        pluralGenitive: 'через {{count}} минут'
	      }
	    }),
	
	    aboutXHours: buildLocalizeTokenFn({
	      regular: {
	        singularNominative: 'около {{count}} часа',
	        singularGenitive: 'около {{count}} часов',
	        pluralGenitive: 'около {{count}} часов'
	      },
	      future: {
	        singularNominative: 'приблизительно через {{count}} час',
	        singularGenitive: 'приблизительно через {{count}} часа',
	        pluralGenitive: 'приблизительно через {{count}} часов'
	      }
	    }),
	
	    xHours: buildLocalizeTokenFn({
	      regular: {
	        singularNominative: '{{count}} час',
	        singularGenitive: '{{count}} часа',
	        pluralGenitive: '{{count}} часов'
	      }
	    }),
	
	    xDays: buildLocalizeTokenFn({
	      regular: {
	        singularNominative: '{{count}} день',
	        singularGenitive: '{{count}} дня',
	        pluralGenitive: '{{count}} дней'
	      }
	    }),
	
	    aboutXMonths: buildLocalizeTokenFn({
	      regular: {
	        singularNominative: 'около {{count}} месяца',
	        singularGenitive: 'около {{count}} месяцев',
	        pluralGenitive: 'около {{count}} месяцев'
	      },
	      future: {
	        singularNominative: 'приблизительно через {{count}} месяц',
	        singularGenitive: 'приблизительно через {{count}} месяца',
	        pluralGenitive: 'приблизительно через {{count}} месяцев'
	      }
	    }),
	
	    xMonths: buildLocalizeTokenFn({
	      regular: {
	        singularNominative: '{{count}} месяц',
	        singularGenitive: '{{count}} месяца',
	        pluralGenitive: '{{count}} месяцев'
	      }
	    }),
	
	    aboutXYears: buildLocalizeTokenFn({
	      regular: {
	        singularNominative: 'около {{count}} года',
	        singularGenitive: 'около {{count}} лет',
	        pluralGenitive: 'около {{count}} лет'
	      },
	      future: {
	        singularNominative: 'приблизительно через {{count}} год',
	        singularGenitive: 'приблизительно через {{count}} года',
	        pluralGenitive: 'приблизительно через {{count}} лет'
	      }
	    }),
	
	    xYears: buildLocalizeTokenFn({
	      regular: {
	        singularNominative: '{{count}} год',
	        singularGenitive: '{{count}} года',
	        pluralGenitive: '{{count}} лет'
	      }
	    }),
	
	    overXYears: buildLocalizeTokenFn({
	      regular: {
	        singularNominative: 'больше {{count}} года',
	        singularGenitive: 'больше {{count}} лет',
	        pluralGenitive: 'больше {{count}} лет'
	      },
	      future: {
	        singularNominative: 'больше, чем через {{count}} год',
	        singularGenitive: 'больше, чем через {{count}} года',
	        pluralGenitive: 'больше, чем через {{count}} лет'
	      }
	    }),
	
	    almostXYears: buildLocalizeTokenFn({
	      regular: {
	        singularNominative: 'почти {{count}} год',
	        singularGenitive: 'почти {{count}} года',
	        pluralGenitive: 'почти {{count}} лет'
	      },
	      future: {
	        singularNominative: 'почти через {{count}} год',
	        singularGenitive: 'почти через {{count}} года',
	        pluralGenitive: 'почти через {{count}} лет'
	      }
	    })
	  }
	
	  function localize (token, count, options) {
	    options = options || {}
	    return distanceInWordsLocale[token](count, options)
	  }
	
	  return {
	    localize: localize
	  }
	}
	
	module.exports = buildDistanceInWordsLocale


/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	var buildFormattingTokensRegExp = __webpack_require__(237)
	
	function buildFormatLocale () {
	  // http://new.gramota.ru/spravka/buro/search-answer?s=242637
	  var monthsShort = ['янв.', 'фев.', 'март', 'апр.', 'май', 'июнь', 'июль', 'авг.', 'сент.', 'окт.', 'нояб.', 'дек.']
	  var monthsFull = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']
	  var monthsGenitive = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
	  var weekdays2char = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
	  var weekdays3char = ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'суб']
	  var weekdaysFull = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']
	  var meridiem = ['ночи', 'утра', 'дня', 'вечера']
	
	  var formatters = {
	    // Month: янв., фев., ..., дек.
	    'MMM': function (date) {
	      return monthsShort[date.getMonth()]
	    },
	
	    // Month: январь, февраль, ..., декабрь
	    'MMMM': function (date) {
	      return monthsFull[date.getMonth()]
	    },
	
	    // Day of week: вс, пн, ..., сб
	    'dd': function (date) {
	      return weekdays2char[date.getDay()]
	    },
	
	    // Day of week: вск, пнд, ..., суб
	    'ddd': function (date) {
	      return weekdays3char[date.getDay()]
	    },
	
	    // Day of week: воскресенье, понедельник, ..., суббота
	    'dddd': function (date) {
	      return weekdaysFull[date.getDay()]
	    },
	
	    // Time of day: ночи, утра, дня, вечера
	    'A': function (date) {
	      var hours = date.getHours()
	      if (hours >= 17) {
	        return meridiem[3]
	      } else if (hours >= 12) {
	        return meridiem[2]
	      } else if (hours >= 4) {
	        return meridiem[1]
	      } else {
	        return meridiem[0]
	      }
	    },
	
	    'Do': function (date, formatters) {
	      return formatters.D(date) + '-е'
	    },
	
	    'Wo': function (date, formatters) {
	      return formatters.W(date) + '-я'
	    }
	  }
	
	  formatters.a = formatters.A
	  formatters.aa = formatters.A
	
	  // Generate ordinal version of formatters: M -> Mo, DDD -> DDDo, etc.
	  var ordinalFormatters = ['M', 'DDD', 'd', 'Q']
	  ordinalFormatters.forEach(function (formatterToken) {
	    formatters[formatterToken + 'o'] = function (date, formatters) {
	      return formatters[formatterToken](date) + '-й'
	    }
	  })
	
	  // Generate formatters like 'D MMMM',
	  // where month is in the genitive case: января, февраля, ..., декабря
	  var monthsGenitiveFormatters = ['D', 'Do', 'DD']
	  monthsGenitiveFormatters.forEach(function (formatterToken) {
	    formatters[formatterToken + ' MMMM'] = function (date, commonFormatters) {
	      var formatter = formatters[formatterToken] || commonFormatters[formatterToken]
	      return formatter(date, commonFormatters) + ' ' + monthsGenitive[date.getMonth()]
	    }
	  })
	
	  return {
	    formatters: formatters,
	    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
	  }
	}
	
	module.exports = buildFormatLocale


/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	var buildDistanceInWordsLocale = __webpack_require__(340)
	var buildFormatLocale = __webpack_require__(341)
	
	/**
	 * @category Locales
	 * @summary Russian locale.
	 */
	module.exports = {
	  distanceInWords: buildDistanceInWordsLocale(),
	  format: buildFormatLocale()
	}


/***/ },
/* 343 */
/***/ function(module, exports) {

	module.exports = {
		"typings": "../../typings.d.ts"
	};

/***/ },
/* 344 */
/***/ function(module, exports) {

	function declensionGroup (scheme, count) {
	  if (count === 1) {
	    return scheme.one
	  }
	
	  if (count >= 2 && count <= 4) {
	    return scheme.twoFour
	  }
	
	  // if count === null || count === 0 || count >= 5
	  return scheme.other
	}
	
	function declension (scheme, count, time) {
	  var group = declensionGroup(scheme, count)
	  var finalText = group[time] || group
	  return finalText.replace('{{count}}', count)
	}
	
	function extractPreposition (token) {
	  var result = ['lessThan', 'about', 'over', 'almost'].filter(function (preposition) {
	    return !!token.match(new RegExp('^' + preposition))
	  })
	
	  return result[0]
	}
	
	function prefixPreposition (preposition) {
	  var translation = ''
	
	  if (preposition === 'almost') {
	    translation = 'takmer'
	  }
	
	  if (preposition === 'about') {
	    translation = 'približne'
	  }
	
	  return translation.length > 0 ? translation + ' ' : ''
	}
	
	function suffixPreposition (preposition) {
	  var translation = ''
	
	  if (preposition === 'lessThan') {
	    translation = 'menej než'
	  }
	
	  if (preposition === 'over') {
	    translation = 'viac než'
	  }
	
	  return translation.length > 0 ? translation + ' ' : ''
	}
	
	function lowercaseFirstLetter (string) {
	  return string.charAt(0).toLowerCase() + string.slice(1)
	}
	
	function buildDistanceInWordsLocale () {
	  var distanceInWordsLocale = {
	    xSeconds: {
	      one: {
	        regular: 'sekunda',
	        past: 'sekundou',
	        future: 'sekundu'
	      },
	      twoFour: {
	        regular: '{{count}} sekundy',
	        past: '{{count}} sekundami',
	        future: '{{count}} sekundy'
	      },
	      other: {
	        regular: '{{count}} sekúnd',
	        past: '{{count}} sekundami',
	        future: '{{count}} sekúnd'
	      }
	    },
	
	    halfAMinute: {
	      other: {
	        regular: 'pol minúty',
	        past: 'pol minútou',
	        future: 'pol minúty'
	      }
	    },
	
	    xMinutes: {
	      one: {
	        regular: 'minúta',
	        past: 'minútou',
	        future: 'minútu'
	      },
	      twoFour: {
	        regular: '{{count}} minúty',
	        past: '{{count}} minútami',
	        future: '{{count}} minúty'
	      },
	      other: {
	        regular: '{{count}} minút',
	        past: '{{count}} minútami',
	        future: '{{count}} minút'
	      }
	    },
	
	    xHours: {
	      one: {
	        regular: 'hodina',
	        past: 'hodinou',
	        future: 'hodinu'
	      },
	      twoFour: {
	        regular: '{{count}} hodiny',
	        past: '{{count}} hodinami',
	        future: '{{count}} hodiny'
	      },
	      other: {
	        regular: '{{count}} hodín',
	        past: '{{count}} hodinami',
	        future: '{{count}} hodín'
	      }
	    },
	
	    xDays: {
	      one: {
	        regular: 'deň',
	        past: 'dňom',
	        future: 'deň'
	      },
	      twoFour: {
	        regular: '{{count}} dni',
	        past: '{{count}} dňami',
	        future: '{{count}} dni'
	      },
	      other: {
	        regular: '{{count}} dní',
	        past: '{{count}} dňami',
	        future: '{{count}} dní'
	      }
	    },
	
	    xMonths: {
	      one: {
	        regular: 'mesiac',
	        past: 'mesiacom',
	        future: 'mesiac'
	      },
	      twoFour: {
	        regular: '{{count}} mesiace',
	        past: '{{count}} mesiacmi',
	        future: '{{count}} mesiace'
	      },
	      other: {
	        regular: '{{count}} mesiacov',
	        past: '{{count}} mesiacmi',
	        future: '{{count}} mesiacov'
	      }
	    },
	
	    xYears: {
	      one: {
	        regular: 'rok',
	        past: 'rokom',
	        future: 'rok'
	      },
	      twoFour: {
	        regular: '{{count}} roky',
	        past: '{{count}} rokmi',
	        future: '{{count}} roky'
	      },
	      other: {
	        regular: '{{count}} rokov',
	        past: '{{count}} rokmi',
	        future: '{{count}} rokov'
	      }
	    }
	  }
	
	  function localize (token, count, options) {
	    options = options || {}
	
	    var preposition = extractPreposition(token) || ''
	    var key = lowercaseFirstLetter(token.substring(preposition.length))
	    var scheme = distanceInWordsLocale[key]
	
	    if (!options.addSuffix) {
	      return prefixPreposition(preposition) + suffixPreposition(preposition) + declension(scheme, count, 'regular')
	    }
	
	    if (options.comparison > 0) {
	      return prefixPreposition(preposition) + 'za ' + suffixPreposition(preposition) + declension(scheme, count, 'future')
	    } else {
	      return prefixPreposition(preposition) + 'pred ' + suffixPreposition(preposition) + declension(scheme, count, 'past')
	    }
	  }
	
	  return {
	    localize: localize
	  }
	}
	
	module.exports = buildDistanceInWordsLocale


/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	var buildFormattingTokensRegExp = __webpack_require__(237)
	
	function buildFormatLocale () {
	  var months3char = ['jan', 'feb', 'mar', 'apr', 'máj', 'jún', 'júl', 'aug', 'sep', 'okt', 'nov', 'dec']
	  var monthsFull = ['január', 'február', 'marec', 'apríl', 'máj', 'jún', 'júl', 'august', 'september', 'október', 'november', 'december']
	  var weekdays2char = ['ne', 'po', 'ut', 'st', 'št', 'pi', 'so']
	  var weekdays3char = ['neď', 'pon', 'uto', 'str', 'štv', 'pia', 'sob']
	  var weekdaysFull = ['nedeľa', 'pondelok', 'utorok', 'streda', 'štvrtok', 'piatok', 'sobota']
	  var meridiemUppercase = ['AM', 'PM']
	  var meridiemLowercase = ['am', 'pm']
	  var meridiemFull = ['a.m.', 'p.m.']
	
	  var formatters = {
	    // Month: jan, feb, ..., dec
	    'MMM': function (date) {
	      return months3char[date.getMonth()]
	    },
	
	    // Month: január, február, ..., december
	    'MMMM': function (date) {
	      return monthsFull[date.getMonth()]
	    },
	
	    // Day of week: ne, po, ..., so
	    'dd': function (date) {
	      return weekdays2char[date.getDay()]
	    },
	
	    // Day of week: neď, pon, ..., sob
	    'ddd': function (date) {
	      return weekdays3char[date.getDay()]
	    },
	
	    // Day of week: neďeľa, pondelok, ..., sobota
	    'dddd': function (date) {
	      return weekdaysFull[date.getDay()]
	    },
	
	    // AM, PM
	    'A': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
	    },
	
	    // am, pm
	    'a': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
	    },
	
	    // a.m., p.m.
	    'aa': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
	    }
	  }
	
	  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
	  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
	  ordinalFormatters.forEach(function (formatterToken) {
	    formatters[formatterToken + 'o'] = function (date, formatters) {
	      return ordinal(formatters[formatterToken](date))
	    }
	  })
	
	  return {
	    formatters: formatters,
	    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
	  }
	}
	
	function ordinal (number) {
	  return number + '.'
	}
	
	module.exports = buildFormatLocale


/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	var buildDistanceInWordsLocale = __webpack_require__(344)
	var buildFormatLocale = __webpack_require__(345)
	
	/**
	 * @category Locales
	 * @summary Slovak locale.
	 * @author Marek Suscak [@mareksuscak]{@link https://github.com/mareksuscak}
	 */
	module.exports = {
	  distanceInWords: buildDistanceInWordsLocale(),
	  format: buildFormatLocale()
	}


/***/ },
/* 347 */
/***/ function(module, exports) {

	module.exports = {
		"typings": "../../typings.d.ts"
	};

/***/ },
/* 348 */
/***/ function(module, exports) {

	function buildDistanceInWordsLocale () {
	  var distanceInWordsLocale = {
	    lessThanXSeconds: {
	      singular: 'mindre än en sekund',
	      plural: 'mindre än {{count}} sekunder'
	    },
	
	    xSeconds: {
	      singular: 'en sekund',
	      plural: '{{count}} sekunder'
	    },
	
	    halfAMinute: 'en halv minut',
	
	    lessThanXMinutes: {
	      singular: 'mindre än en minut',
	      plural: 'mindre än {{count}} minuter'
	    },
	
	    xMinutes: {
	      singular: 'en minut',
	      plural: '{{count}} minuter'
	    },
	
	    aboutXHours: {
	      singular: 'ungefär en timme',
	      plural: 'ungefär {{count}} timmar'
	    },
	
	    xHours: {
	      singular: 'en timme',
	      plural: '{{count}} timmar'
	    },
	
	    xDays: {
	      singular: 'en dag',
	      plural: '{{count}} dagar'
	    },
	
	    aboutXMonths: {
	      singular: 'ungefär en månad',
	      plural: 'ungefär {{count}} månader'
	    },
	
	    xMonths: {
	      singular: 'en månad',
	      plural: '{{count}} månader'
	    },
	
	    aboutXYears: {
	      singular: 'ungefär ett år',
	      plural: 'ungefär {{count}} år'
	    },
	
	    xYears: {
	      singular: 'ett år',
	      plural: '{{count}} år'
	    },
	
	    overXYears: {
	      singular: 'över ett år',
	      plural: 'över {{count}} år'
	    },
	
	    almostXYears: {
	      singular: 'nästan ett år',
	      plural: 'nästan {{count}} år'
	    }
	  }
	
	  var wordMapping = [
	    'noll',
	    'en',
	    'två',
	    'tre',
	    'fyra',
	    'fem',
	    'sex',
	    'sju',
	    'åtta',
	    'nio',
	    'tio',
	    'elva',
	    'tolv'
	  ]
	
	  function localize (token, count, options) {
	    options = options || {}
	
	    var translation = distanceInWordsLocale[token]
	    var result
	    if (typeof translation === 'string') {
	      result = translation
	    } else if (count === 0 || count > 1) {
	      result = translation.plural.replace('{{count}}', count < 13 ? wordMapping[count] : count)
	    } else {
	      result = translation.singular
	    }
	
	    if (options.addSuffix) {
	      if (options.comparison > 0) {
	        return 'om ' + result
	      } else {
	        return result + ' sedan'
	      }
	    }
	
	    return result
	  }
	
	  return {
	    localize: localize
	  }
	}
	
	module.exports = buildDistanceInWordsLocale


/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	var buildFormattingTokensRegExp = __webpack_require__(237)
	
	function buildFormatLocale () {
	  var months3char = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec']
	  var monthsFull = ['januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli', 'augusti', 'september', 'oktober', 'november', 'december']
	  var weekdays2char = ['sö', 'må', 'ti', 'on', 'to', 'fr', 'lö']
	  var weekdays3char = ['sön', 'mån', 'tis', 'ons', 'tor', 'fre', 'lör']
	  var weekdaysFull = ['söndag', 'måndag', 'tisdag', 'onsdag', 'torsdag', 'fredag', 'lördag']
	  var meridiemFull = ['f.m.', 'e.m.']
	
	  var formatters = {
	    // Month: Jan, Feb, ..., Dec
	    'MMM': function (date) {
	      return months3char[date.getMonth()]
	    },
	
	    // Month: January, February, ..., December
	    'MMMM': function (date) {
	      return monthsFull[date.getMonth()]
	    },
	
	    // Day of week: Su, Mo, ..., Sa
	    'dd': function (date) {
	      return weekdays2char[date.getDay()]
	    },
	
	    // Day of week: Sun, Mon, ..., Sat
	    'ddd': function (date) {
	      return weekdays3char[date.getDay()]
	    },
	
	    // Day of week: Sunday, Monday, ..., Saturday
	    'dddd': function (date) {
	      return weekdaysFull[date.getDay()]
	    },
	
	    // a.m., p.m.
	    'aa': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
	    }
	  }
	
	  formatters.A = formatters.aa
	  formatters.a = formatters.aa
	
	  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
	  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
	  ordinalFormatters.forEach(function (formatterToken) {
	    formatters[formatterToken + 'o'] = function (date, formatters) {
	      return ordinal(formatters[formatterToken](date))
	    }
	  })
	
	  return {
	    formatters: formatters,
	    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
	  }
	}
	
	function ordinal (number) {
	  var rem100 = number % 100
	  if (rem100 > 20 || rem100 < 10) {
	    switch (rem100 % 10) {
	      case 1:
	      case 2:
	        return number + ':a'
	    }
	  }
	  return number + ':e'
	}
	
	module.exports = buildFormatLocale


/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	var buildDistanceInWordsLocale = __webpack_require__(348)
	var buildFormatLocale = __webpack_require__(349)
	
	/**
	 * @category Locales
	 * @summary Swedish locale.
	 * @author Johannes Ulén [@ejulen]{@link https://github.com/ejulen}
	 */
	module.exports = {
	  distanceInWords: buildDistanceInWordsLocale(),
	  format: buildFormatLocale()
	}


/***/ },
/* 351 */
/***/ function(module, exports) {

	module.exports = {
		"typings": "../../typings.d.ts"
	};

/***/ },
/* 352 */
/***/ function(module, exports) {

	function buildDistanceInWordsLocale () {
	  var distanceInWordsLocale = {
	    lessThanXSeconds: {
	      one: 'น้อยกว่า 1 วินาที',
	      other: 'น้อยกว่า {{count}} วินาที'
	    },
	
	    xSeconds: {
	      one: '1 วินาที',
	      other: '{{count}} วินาที'
	    },
	
	    halfAMinute: 'ครึ่งนาที',
	
	    lessThanXMinutes: {
	      one: 'น้อยกว่า 1 นาที',
	      other: 'น้อยกว่า {{count}} นาที'
	    },
	
	    xMinutes: {
	      one: '1 นาที',
	      other: '{{count}} นาที'
	    },
	
	    aboutXHours: {
	      one: 'ประมาณ 1 ชั่วโมง',
	      other: 'ประมาณ {{count}} ชั่วโมง'
	    },
	
	    xHours: {
	      one: '1 ชั่วโมง',
	      other: '{{count}} ชั่วโมง'
	    },
	
	    xDays: {
	      one: '1 วัน',
	      other: '{{count}} วัน'
	    },
	
	    aboutXMonths: {
	      one: 'ประมาณ 1 เดือน',
	      other: 'ประมาณ {{count}} เดือน'
	    },
	
	    xMonths: {
	      one: '1 เดือน',
	      other: '{{count}} เดือน'
	    },
	
	    aboutXYears: {
	      one: 'ประมาณ 1 ปี',
	      other: 'ประมาณ {{count}} ปี'
	    },
	
	    xYears: {
	      one: '1 ปี',
	      other: '{{count}} ปี'
	    },
	
	    overXYears: {
	      one: 'มากกว่า 1 ปี',
	      other: 'มากกว่า {{count}} ปี'
	    },
	
	    almostXYears: {
	      one: 'เกือบ 1 ปี',
	      other: 'เกือบ {{count}} ปี'
	    }
	  }
	
	  function localize (token, count, options) {
	    options = options || {}
	
	    var result
	    if (typeof distanceInWordsLocale[token] === 'string') {
	      result = distanceInWordsLocale[token]
	    } else if (count === 1) {
	      result = distanceInWordsLocale[token].one
	    } else {
	      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
	    }
	
	    if (options.addSuffix) {
	      if (options.comparison > 0) {
	        if (token === 'halfAMinute') {
	          return 'ใน' + result
	        } else {
	          return 'ใน ' + result
	        }
	      } else {
	        return result + 'ที่ผ่านมา'
	      }
	    }
	
	    return result
	  }
	
	  return {
	    localize: localize
	  }
	}
	
	module.exports = buildDistanceInWordsLocale


/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	var buildFormattingTokensRegExp = __webpack_require__(237)
	
	function buildFormatLocale () {
	  var months3char = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.']
	  var monthsFull = ['มกราคาม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม']
	  var weekdays2char = ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.']
	  var weekdays3char = ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.']
	  var weekdaysFull = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์']
	  var meridiemUppercase = ['น.']
	  var meridiemLowercase = ['น.']
	  var meridiemFull = ['นาฬิกา']
	
	  var formatters = {
	    // Month: Jan, Feb, ..., Dec
	    'MMM': function (date) {
	      return months3char[date.getMonth()]
	    },
	
	    // Month: January, February, ..., December
	    'MMMM': function (date) {
	      return monthsFull[date.getMonth()]
	    },
	
	    // Day of week: Su, Mo, ..., Sa
	    'dd': function (date) {
	      return weekdays2char[date.getDay()]
	    },
	
	    // Day of week: Sun, Mon, ..., Sat
	    'ddd': function (date) {
	      return weekdays3char[date.getDay()]
	    },
	
	    // Day of week: Sunday, Monday, ..., Saturday
	    'dddd': function (date) {
	      return weekdaysFull[date.getDay()]
	    },
	
	    // AM, PM
	    'A': function (date) {
	      return meridiemUppercase[0]
	    },
	
	    // am, pm
	    'a': function (date) {
	      return meridiemLowercase[0]
	    },
	
	    // a.m., p.m.
	    'aa': function (date) {
	      return meridiemFull[0]
	    }
	  }
	
	  return {
	    formatters: formatters,
	    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
	  }
	}
	
	module.exports = buildFormatLocale


/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	var buildDistanceInWordsLocale = __webpack_require__(352)
	var buildFormatLocale = __webpack_require__(353)
	
	/**
	 * @category Locales
	 * @summary Thai locale.
	 * @author Athiwat Hirunworawongkun [@athivvat]{@link https://github.com/athivvat}
	 */
	module.exports = {
	  distanceInWords: buildDistanceInWordsLocale(),
	  format: buildFormatLocale()
	}


/***/ },
/* 355 */
/***/ function(module, exports) {

	module.exports = {
		"typings": "../../typings.d.ts"
	};

/***/ },
/* 356 */
/***/ function(module, exports) {

	function buildDistanceInWordsLocale () {
	  var distanceInWordsLocale = {
	    lessThanXSeconds: {
	      one: 'bir saniyeden az',
	      other: '{{count}} saniyeden az'
	    },
	
	    xSeconds: {
	      one: '1 saniye',
	      other: '{{count}} saniye'
	    },
	
	    halfAMinute: 'yarım dakika',
	
	    lessThanXMinutes: {
	      one: 'bir dakikadan az',
	      other: '{{count}} dakikadan az'
	    },
	
	    xMinutes: {
	      one: '1 dakika',
	      other: '{{count}} dakika'
	    },
	
	    aboutXHours: {
	      one: 'yaklaşık 1 saat',
	      other: 'yaklaşık {{count}} saat'
	    },
	
	    xHours: {
	      one: '1 saat',
	      other: '{{count}} saat'
	    },
	
	    xDays: {
	      one: '1 gün',
	      other: '{{count}} gün'
	    },
	
	    aboutXMonths: {
	      one: 'yaklaşık 1 ay',
	      other: 'yaklaşık {{count}} ay'
	    },
	
	    xMonths: {
	      one: '1 ay',
	      other: '{{count}} ay'
	    },
	
	    aboutXYears: {
	      one: 'yaklaşık 1 yıl',
	      other: 'yaklaşık {{count}} yıl'
	    },
	
	    xYears: {
	      one: '1 yıl',
	      other: '{{count}} yıl'
	    },
	
	    overXYears: {
	      one: '1 yıldan fazla',
	      other: '{{count}} yıldan fazla'
	    },
	
	    almostXYears: {
	      one: 'neredeyse 1 yıl',
	      other: 'neredeyse {{count}} yıl'
	    }
	  }
	
	  var extraWordTokens = [
	    'lessThanXSeconds',
	    'lessThanXMinutes',
	    'overXYears'
	  ]
	
	  function localize (token, count, options) {
	    options = options || {}
	
	    var result
	    if (typeof distanceInWordsLocale[token] === 'string') {
	      result = distanceInWordsLocale[token]
	    } else if (count === 1) {
	      result = distanceInWordsLocale[token].one
	    } else {
	      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
	    }
	
	    if (options.addSuffix) {
	      var extraWord = ''
	      if (extraWordTokens.indexOf(token) > -1) {
	        extraWord = ' bir süre'
	      }
	
	      if (options.comparison > 0) {
	        return result + extraWord + ' içinde'
	      } else {
	        return result + extraWord + ' önce'
	      }
	    }
	
	    return result
	  }
	
	  return {
	    localize: localize
	  }
	}
	
	module.exports = buildDistanceInWordsLocale


/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	var buildFormattingTokensRegExp = __webpack_require__(237)
	
	function buildFormatLocale () {
	  // Note: in Turkish, the names of days of the week and months are capitalized.
	  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
	  // Generally, formatted dates should look like they are in the middle of a sentence,
	  // e.g. in Spanish language the weekdays and months should be in the lowercase.
	  var months3char = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara']
	  var monthsFull = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']
	  var weekdays2char = ['Pz', 'Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct']
	  var weekdays3char = ['Paz', 'Pts', 'Sal', 'Çar', 'Per', 'Cum', 'Cts']
	  var weekdaysFull = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi']
	  var meridiemUppercase = ['ÖÖ', 'ÖS']
	  var meridiemLowercase = ['öö', 'ös']
	  var meridiemFull = ['ö.ö.', 'ö.s.']
	
	  var formatters = {
	    // Month: Jan, Feb, ..., Dec
	    'MMM': function (date) {
	      return months3char[date.getMonth()]
	    },
	
	    // Month: January, February, ..., December
	    'MMMM': function (date) {
	      return monthsFull[date.getMonth()]
	    },
	
	    // Day of week: Su, Mo, ..., Sa
	    'dd': function (date) {
	      return weekdays2char[date.getDay()]
	    },
	
	    // Day of week: Sun, Mon, ..., Sat
	    'ddd': function (date) {
	      return weekdays3char[date.getDay()]
	    },
	
	    // Day of week: Sunday, Monday, ..., Saturday
	    'dddd': function (date) {
	      return weekdaysFull[date.getDay()]
	    },
	
	    // AM, PM
	    'A': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
	    },
	
	    // am, pm
	    'a': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
	    },
	
	    // a.m., p.m.
	    'aa': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
	    }
	  }
	
	  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
	  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
	  ordinalFormatters.forEach(function (formatterToken) {
	    formatters[formatterToken + 'o'] = function (date, formatters) {
	      return ordinal(formatters[formatterToken](date))
	    }
	  })
	
	  return {
	    formatters: formatters,
	    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
	  }
	}
	
	function ordinal (number) {
	  var suffixes = {
	    1: '\'inci',
	    2: '\'inci',
	    3: '\'üncü',
	    4: '\'üncü',
	    5: '\'inci',
	    6: '\'ıncı',
	    7: '\'inci',
	    8: '\'inci',
	    9: '\'uncu',
	    10: '\'uncu',
	    20: '\'inci',
	    30: '\'uncu',
	    50: '\'inci',
	    60: '\'ıncı',
	    70: '\'inci',
	    80: '\'inci',
	    90: '\'ıncı',
	    100: '\'üncü'
	  }
	
	  if (number === 0) {
	    return '0\'ıncı'
	  }
	
	  var x = number % 10
	  var y = number % 100 - x
	  var z = number >= 100 ? 100 : null
	
	  return number + (suffixes[x] || suffixes[y] || suffixes[z])
	}
	
	module.exports = buildFormatLocale


/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	var buildDistanceInWordsLocale = __webpack_require__(356)
	var buildFormatLocale = __webpack_require__(357)
	
	/**
	 * @category Locales
	 * @summary Turkish locale.
	 * @author Alpcan Aydın [@alpcanaydin]{@link https://github.com/alpcanaydin}
	 */
	module.exports = {
	  distanceInWords: buildDistanceInWordsLocale(),
	  format: buildFormatLocale()
	}


/***/ },
/* 359 */
/***/ function(module, exports) {

	module.exports = {
		"typings": "../../typings.d.ts"
	};

/***/ },
/* 360 */
/***/ function(module, exports) {

	function buildDistanceInWordsLocale () {
	  var distanceInWordsLocale = {
	    lessThanXSeconds: {
	      one: '不到 1 秒',
	      other: '不到 {{count}} 秒'
	    },
	
	    xSeconds: {
	      one: '1 秒',
	      other: '{{count}} 秒'
	    },
	
	    halfAMinute: '半分钟',
	
	    lessThanXMinutes: {
	      one: '不到 1 分钟',
	      other: '不到 {{count}} 分钟'
	    },
	
	    xMinutes: {
	      one: '1 分钟',
	      other: '{{count}} 分钟'
	    },
	
	    xHours: {
	      one: '1 小时',
	      other: '{{count}} 小时'
	    },
	
	    aboutXHours: {
	      one: '大约 1 小时',
	      other: '大约 {{count}} 小时'
	    },
	
	    xDays: {
	      one: '1 天',
	      other: '{{count}} 天'
	    },
	
	    aboutXMonths: {
	      one: '大约 1 个月',
	      other: '大约 {{count}} 个月'
	    },
	
	    xMonths: {
	      one: '1 个月',
	      other: '{{count}} 个月'
	    },
	
	    aboutXYears: {
	      one: '大约 1 年',
	      other: '大约 {{count}} 年'
	    },
	
	    xYears: {
	      one: '1 年',
	      other: '{{count}} 年'
	    },
	
	    overXYears: {
	      one: '超过 1 年',
	      other: '超过 {{count}} 年'
	    },
	
	    almostXYears: {
	      one: '将近 1 年',
	      other: '将近 {{count}} 年'
	    }
	  }
	
	  function localize (token, count, options) {
	    options = options || {}
	
	    var result
	    if (typeof distanceInWordsLocale[token] === 'string') {
	      result = distanceInWordsLocale[token]
	    } else if (count === 1) {
	      result = distanceInWordsLocale[token].one
	    } else {
	      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
	    }
	
	    if (options.addSuffix) {
	      if (options.comparison > 0) {
	        return result + '内'
	      } else {
	        return result + '前'
	      }
	    }
	
	    return result
	  }
	
	  return {
	    localize: localize
	  }
	}
	
	module.exports = buildDistanceInWordsLocale


/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	var buildFormattingTokensRegExp = __webpack_require__(237)
	
	function buildFormatLocale () {
	  var months3char = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
	  var monthsFull = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
	  var weekdays2char = ['日', '一', '二', '三', '四', '五', '六']
	  var weekdays3char = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
	  var weekdaysFull = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
	  var meridiemUppercase = ['AM', 'PM']
	  var meridiemLowercase = ['am', 'pm']
	  var meridiemFull = ['上午', '下午']
	
	  var formatters = {
	    // Month: Jan, Feb, ..., Dec
	    'MMM': function (date) {
	      return months3char[date.getMonth()]
	    },
	
	    // Month: January, February, ..., December
	    'MMMM': function (date) {
	      return monthsFull[date.getMonth()]
	    },
	
	    // Day of week: Su, Mo, ..., Sa
	    'dd': function (date) {
	      return weekdays2char[date.getDay()]
	    },
	
	    // Day of week: Sun, Mon, ..., Sat
	    'ddd': function (date) {
	      return weekdays3char[date.getDay()]
	    },
	
	    // Day of week: Sunday, Monday, ..., Saturday
	    'dddd': function (date) {
	      return weekdaysFull[date.getDay()]
	    },
	
	    // AM, PM
	    'A': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
	    },
	
	    // am, pm
	    'a': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
	    },
	
	    // a.m., p.m.
	    'aa': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
	    }
	  }
	
	  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
	  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
	  ordinalFormatters.forEach(function (formatterToken) {
	    formatters[formatterToken + 'o'] = function (date, formatters) {
	      return ordinal(formatters[formatterToken](date))
	    }
	  })
	
	  return {
	    formatters: formatters,
	    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
	  }
	}
	
	function ordinal (number) {
	  return number.toString()
	}
	
	module.exports = buildFormatLocale


/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	var buildDistanceInWordsLocale = __webpack_require__(360)
	var buildFormatLocale = __webpack_require__(361)
	
	/**
	 * @category Locales
	 * @summary Chinese Simplified locale.
	 * @author Changyu Geng [@KingMario]{@link https://github.com/KingMario}
	 */
	module.exports = {
	  distanceInWords: buildDistanceInWordsLocale(),
	  format: buildFormatLocale()
	}


/***/ },
/* 363 */
/***/ function(module, exports) {

	module.exports = {
		"typings": "../../typings.d.ts"
	};

/***/ },
/* 364 */
/***/ function(module, exports) {

	function buildDistanceInWordsLocale () {
	  var distanceInWordsLocale = {
	    lessThanXSeconds: {
	      one: '少於 1 秒',
	      other: '少於 {{count}} 秒'
	    },
	
	    xSeconds: {
	      one: '1 秒',
	      other: '{{count}} 秒'
	    },
	
	    halfAMinute: '半分鐘',
	
	    lessThanXMinutes: {
	      one: '少於 1 分鐘',
	      other: '少於 {{count}} 分鐘'
	    },
	
	    xMinutes: {
	      one: '1 分鐘',
	      other: '{{count}} 分鐘'
	    },
	
	    xHours: {
	      one: '1 小時',
	      other: '{{count}} 小時'
	    },
	
	    aboutXHours: {
	      one: '大約 1 小時',
	      other: '大約 {{count}} 小時'
	    },
	
	    xDays: {
	      one: '1 天',
	      other: '{{count}} 天'
	    },
	
	    aboutXMonths: {
	      one: '大約 1 個月',
	      other: '大約 {{count}} 個月'
	    },
	
	    xMonths: {
	      one: '1 個月',
	      other: '{{count}} 個月'
	    },
	
	    aboutXYears: {
	      one: '大約 1 年',
	      other: '大約 {{count}} 年'
	    },
	
	    xYears: {
	      one: '1 年',
	      other: '{{count}} 年'
	    },
	
	    overXYears: {
	      one: '超過 1 年',
	      other: '超過 {{count}} 年'
	    },
	
	    almostXYears: {
	      one: '將近 1 年',
	      other: '將近 {{count}} 年'
	    }
	  }
	
	  function localize (token, count, options) {
	    options = options || {}
	
	    var result
	    if (typeof distanceInWordsLocale[token] === 'string') {
	      result = distanceInWordsLocale[token]
	    } else if (count === 1) {
	      result = distanceInWordsLocale[token].one
	    } else {
	      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
	    }
	
	    if (options.addSuffix) {
	      if (options.comparison > 0) {
	        return result + '內'
	      } else {
	        return result + '前'
	      }
	    }
	
	    return result
	  }
	
	  return {
	    localize: localize
	  }
	}
	
	module.exports = buildDistanceInWordsLocale


/***/ },
/* 365 */
/***/ function(module, exports, __webpack_require__) {

	var buildFormattingTokensRegExp = __webpack_require__(237)
	
	function buildFormatLocale () {
	  var months3char = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
	  var monthsFull = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
	  var weekdays2char = ['日', '一', '二', '三', '四', '五', '六']
	  var weekdays3char = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
	  var weekdaysFull = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
	  var meridiemUppercase = ['AM', 'PM']
	  var meridiemLowercase = ['am', 'pm']
	  var meridiemFull = ['上午', '下午']
	
	  var formatters = {
	    // Month: Jan, Feb, ..., Dec
	    'MMM': function (date) {
	      return months3char[date.getMonth()]
	    },
	
	    // Month: January, February, ..., December
	    'MMMM': function (date) {
	      return monthsFull[date.getMonth()]
	    },
	
	    // Day of week: Su, Mo, ..., Sa
	    'dd': function (date) {
	      return weekdays2char[date.getDay()]
	    },
	
	    // Day of week: Sun, Mon, ..., Sat
	    'ddd': function (date) {
	      return weekdays3char[date.getDay()]
	    },
	
	    // Day of week: Sunday, Monday, ..., Saturday
	    'dddd': function (date) {
	      return weekdaysFull[date.getDay()]
	    },
	
	    // AM, PM
	    'A': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
	    },
	
	    // am, pm
	    'a': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
	    },
	
	    // a.m., p.m.
	    'aa': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
	    }
	  }
	
	  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
	  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
	  ordinalFormatters.forEach(function (formatterToken) {
	    formatters[formatterToken + 'o'] = function (date, formatters) {
	      return ordinal(formatters[formatterToken](date))
	    }
	  })
	
	  return {
	    formatters: formatters,
	    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
	  }
	}
	
	function ordinal (number) {
	  return number.toString()
	}
	
	module.exports = buildFormatLocale


/***/ },
/* 366 */
/***/ function(module, exports, __webpack_require__) {

	var buildDistanceInWordsLocale = __webpack_require__(364)
	var buildFormatLocale = __webpack_require__(365)
	
	/**
	 * @category Locales
	 * @summary Chinese Simplified locale.
	 * @author tonypai [@tpai]{@link https://github.com/tpai}
	 */
	module.exports = {
	  distanceInWords: buildDistanceInWordsLocale(),
	  format: buildFormatLocale()
	}


/***/ },
/* 367 */
/***/ function(module, exports) {

	module.exports = {
		"typings": "../../typings.d.ts"
	};

/***/ },
/* 368 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _app = __webpack_require__(369);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _react = __webpack_require__(194);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _I18n = __webpack_require__(197);
	
	var _classnames = __webpack_require__(371);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ShareForm = function (_React$Component) {
	    _inherits(ShareForm, _React$Component);
	
	    function ShareForm(props) {
	        _classCallCheck(this, ShareForm);
	
	        var _this2 = _possibleConstructorReturn(this, (ShareForm.__proto__ || Object.getPrototypeOf(ShareForm)).call(this, props));
	
	        _this2.state = {
	            instance: props.instance,
	            docType: '',
	            id: '',
	            email: '',
	            url: '',
	            sharingType: ''
	        };
	        _this2.handleInputChange = _this2.handleInputChange.bind(_this2);
	        _this2.onSubmit = _this2.onSubmit.bind(_this2);
	
	        return _this2;
	    }
	
	    _createClass(ShareForm, [{
	        key: 'handleInputChange',
	        value: function handleInputChange(event) {
	            var target = event.target;
	
	            if (target.type === 'checkbox') {
	                if (!target.checked) {
	                    return;
	                }
	            }
	            var value = target.value;
	            var name = target.name;
	
	            this.setState(_defineProperty({}, name, value));
	        }
	    }, {
	        key: 'onSubmit',
	        value: function onSubmit(event) {
	            event.preventDefault();
	            this.setState({}, this.sendFormData);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    'Sharotronic 2000'
	                ),
	                _react2.default.createElement(
	                    'form',
	                    { onSubmit: this.onSubmit, className: 'ShareForm' },
	                    _react2.default.createElement(
	                        'label',
	                        null,
	                        'Share what?'
	                    ),
	                    _react2.default.createElement('input', {
	                        type: 'text',
	                        name: 'instance',
	                        placeholder: this.props.instance,
	                        value: this.state.instance,
	                        onInput: this.handleInputChange }),
	                    _react2.default.createElement('input', {
	                        type: 'text',
	                        name: 'docType',
	                        placeholder: 'DocType',
	                        value: this.state.docType,
	                        onInput: this.handleInputChange }),
	                    _react2.default.createElement('input', {
	                        type: 'text',
	                        name: 'id',
	                        placeholder: 'ID',
	                        value: this.state.id,
	                        onInput: this.handleInputChange }),
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        _react2.default.createElement(
	                            'label',
	                            null,
	                            'With who?'
	                        ),
	                        _react2.default.createElement('input', {
	                            type: 'text',
	                            name: 'email',
	                            placeholder: 'Email',
	                            value: this.state.email,
	                            onInput: this.handleInputChange }),
	                        _react2.default.createElement('input', {
	                            type: 'text',
	                            name: 'url',
	                            placeholder: 'URL',
	                            value: this.state.url,
	                            onInput: this.handleInputChange })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        _react2.default.createElement(
	                            'label',
	                            null,
	                            'One-shot',
	                            _react2.default.createElement('input', {
	                                name: 'sharingType',
	                                value: 'one-shot',
	                                type: 'checkbox',
	                                onChange: this.handleInputChange })
	                        ),
	                        _react2.default.createElement(
	                            'label',
	                            null,
	                            'Master-slave',
	                            _react2.default.createElement('input', {
	                                name: 'sharingType',
	                                value: 'master-slave',
	                                type: 'checkbox',
	                                onChange: this.handleInputChange })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'button',
	                        { type: 'submit' },
	                        'Share it!'
	                    )
	                )
	            );
	        }
	    }, {
	        key: 'sendFormData',
	        value: function sendFormData() {
	
	            var perm = {
	                tests: {
	                    description: "desc",
	                    type: this.state.docType,
	                    verbs: ["GET", "POST", "PUT"],
	                    values: [this.state.id]
	                }
	            };
	
	            var formData = {
	                sharing_type: this.state.sharingType,
	                permissions: perm,
	                desc: "Share it share it !"
	            };
	
	            var recipient = {
	                email: this.state.email,
	                url: this.state.url
	            };
	            console.log("instance : ", this.state.instance);
	
	            var _this = this;
	            var recipientTarget = this.state.instance + "/sharings/recipient";
	            // Create the recipient
	            this.sendXHR(recipientTarget, recipient, function (res) {
	                var rec = {
	                    type: "io.cozy.recipients",
	                    id: res.id
	                };
	                var recipients = [{
	                    recipient: rec
	                }];
	                formData.recipients = recipients;
	                console.log("data : ", JSON.stringify(formData));
	                var sharingTarget = _this.state.instance + "/sharings/";
	                // Create the sharing
	                _this.sendXHR(sharingTarget, formData, function (res) {
	                    console.log("Sharing ok : ", JSON.stringify(res));
	                });
	            });
	        }
	    }, {
	        key: 'sendXHR',
	        value: function sendXHR(target, data, callback) {
	            var xmlhttp = new XMLHttpRequest();
	            var _this = this;
	            xmlhttp.onreadystatechange = function () {
	                if (xmlhttp.readyState === 4) {
	                    var response = JSON.parse(xmlhttp.responseText);
	                    if (xmlhttp.status === 200 || xmlhttp.status === 201) {
	                        callback(response.data);
	                    } else {
	                        console.log("error : ", JSON.stringify(response.errors));
	                    }
	                }
	            };
	            xmlhttp.open('POST', target, true);
	            xmlhttp.setRequestHeader('Content-type', 'application/json');
	            xmlhttp.send(JSON.stringify(data));
	        }
	    }]);
	
	    return ShareForm;
	}(_react2.default.Component);
	
	var App = function App(_ref) {
	    var t = _ref.t;
	    return _react2.default.createElement(ShareForm, { instance: "http://cozy1.local:8080" });
	};
	
	exports.default = (0, _I18n.translate)()(App);

/***/ },
/* 369 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"title":"_1VC2xx3kUAm9cQMrud_-QU","spin":"IXFdI46qtOyqN0s8YCJVV"};

/***/ },
/* 370 */,
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map
