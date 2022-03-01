'use strict';

var motorcortex = require('@donkeyclip/motorcortex');

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var check = function (it) {
  return it && it.Math == Math && it;
}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


var global$v = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) || // eslint-disable-next-line no-new-func -- fallback
function () {
  return this;
}() || Function('return this')();

var objectGetOwnPropertyDescriptor = {};

var fails$g = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$f = fails$g; // Detect IE8's incomplete defineProperty implementation

var descriptors = !fails$f(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, {
    get: function () {
      return 7;
    }
  })[1] != 7;
});

var fails$e = fails$g;
var functionBindNative = !fails$e(function () {
  var test = function () {
    /* empty */
  }.bind(); // eslint-disable-next-line no-prototype-builtins -- safe


  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$3 = functionBindNative;
var call$8 = Function.prototype.call;
var functionCall = NATIVE_BIND$3 ? call$8.bind(call$8) : function () {
  return call$8.apply(call$8, arguments);
};

var objectPropertyIsEnumerable = {};

var $propertyIsEnumerable = {}.propertyIsEnumerable; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({
  1: 2
}, 1); // `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$1(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

var createPropertyDescriptor$3 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var NATIVE_BIND$2 = functionBindNative;
var FunctionPrototype$2 = Function.prototype;
var bind$2 = FunctionPrototype$2.bind;
var call$7 = FunctionPrototype$2.call;
var uncurryThis$h = NATIVE_BIND$2 && bind$2.bind(call$7, call$7);
var functionUncurryThis = NATIVE_BIND$2 ? function (fn) {
  return fn && uncurryThis$h(fn);
} : function (fn) {
  return fn && function () {
    return call$7.apply(fn, arguments);
  };
};

var uncurryThis$g = functionUncurryThis;
var toString$5 = uncurryThis$g({}.toString);
var stringSlice$3 = uncurryThis$g(''.slice);

var classofRaw$1 = function (it) {
  return stringSlice$3(toString$5(it), 8, -1);
};

var global$u = global$v;
var uncurryThis$f = functionUncurryThis;
var fails$d = fails$g;
var classof$6 = classofRaw$1;
var Object$4 = global$u.Object;
var split = uncurryThis$f(''.split); // fallback for non-array-like ES3 and non-enumerable old V8 strings

var indexedObject = fails$d(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object$4('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$6(it) == 'String' ? split(it, '') : Object$4(it);
} : Object$4;

var global$t = global$v;
var TypeError$a = global$t.TypeError; // `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible

var requireObjectCoercible$4 = function (it) {
  if (it == undefined) throw TypeError$a("Can't call method on " + it);
  return it;
};

var IndexedObject$2 = indexedObject;
var requireObjectCoercible$3 = requireObjectCoercible$4;

var toIndexedObject$5 = function (it) {
  return IndexedObject$2(requireObjectCoercible$3(it));
};

// https://tc39.es/ecma262/#sec-iscallable

var isCallable$c = function (argument) {
  return typeof argument == 'function';
};

var isCallable$b = isCallable$c;

var isObject$8 = function (it) {
  return typeof it == 'object' ? it !== null : isCallable$b(it);
};

var global$s = global$v;
var isCallable$a = isCallable$c;

var aFunction = function (argument) {
  return isCallable$a(argument) ? argument : undefined;
};

var getBuiltIn$5 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$s[namespace]) : global$s[namespace] && global$s[namespace][method];
};

var uncurryThis$e = functionUncurryThis;
var objectIsPrototypeOf = uncurryThis$e({}.isPrototypeOf);

var getBuiltIn$4 = getBuiltIn$5;
var engineUserAgent = getBuiltIn$4('navigator', 'userAgent') || '';

var global$r = global$v;
var userAgent = engineUserAgent;
var process = global$r.process;
var Deno = global$r.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version$1;

if (v8) {
  match = v8.split('.'); // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us

  version$1 = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
} // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0


if (!version$1 && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);

  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version$1 = +match[1];
  }
}

var engineV8Version = version$1;

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION$2 = engineV8Version;
var fails$c = fails$g; // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing

var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$c(function () {
  var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

  return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && V8_VERSION$2 && V8_VERSION$2 < 41;
});

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL$1 = nativeSymbol;
var useSymbolAsUid = NATIVE_SYMBOL$1 && !Symbol.sham && typeof Symbol.iterator == 'symbol';

var global$q = global$v;
var getBuiltIn$3 = getBuiltIn$5;
var isCallable$9 = isCallable$c;
var isPrototypeOf = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
var Object$3 = global$q.Object;
var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$3('Symbol');
  return isCallable$9($Symbol) && isPrototypeOf($Symbol.prototype, Object$3(it));
};

var global$p = global$v;
var String$3 = global$p.String;

var tryToString$2 = function (argument) {
  try {
    return String$3(argument);
  } catch (error) {
    return 'Object';
  }
};

var global$o = global$v;
var isCallable$8 = isCallable$c;
var tryToString$1 = tryToString$2;
var TypeError$9 = global$o.TypeError; // `Assert: IsCallable(argument) is true`

var aCallable$2 = function (argument) {
  if (isCallable$8(argument)) return argument;
  throw TypeError$9(tryToString$1(argument) + ' is not a function');
};

var aCallable$1 = aCallable$2; // `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod

var getMethod$2 = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable$1(func);
};

var global$n = global$v;
var call$6 = functionCall;
var isCallable$7 = isCallable$c;
var isObject$7 = isObject$8;
var TypeError$8 = global$n.TypeError; // `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive

var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$7(fn = input.toString) && !isObject$7(val = call$6(fn, input))) return val;
  if (isCallable$7(fn = input.valueOf) && !isObject$7(val = call$6(fn, input))) return val;
  if (pref !== 'string' && isCallable$7(fn = input.toString) && !isObject$7(val = call$6(fn, input))) return val;
  throw TypeError$8("Can't convert object to primitive value");
};

var shared$4 = {exports: {}};

var global$m = global$v; // eslint-disable-next-line es/no-object-defineproperty -- safe

var defineProperty = Object.defineProperty;

var setGlobal$3 = function (key, value) {
  try {
    defineProperty(global$m, key, {
      value: value,
      configurable: true,
      writable: true
    });
  } catch (error) {
    global$m[key] = value;
  }

  return value;
};

var global$l = global$v;
var setGlobal$2 = setGlobal$3;
var SHARED = '__core-js_shared__';
var store$3 = global$l[SHARED] || setGlobal$2(SHARED, {});
var sharedStore = store$3;

var store$2 = sharedStore;
(shared$4.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.21.1',
  mode: 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

var global$k = global$v;
var requireObjectCoercible$2 = requireObjectCoercible$4;
var Object$2 = global$k.Object; // `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject

var toObject$4 = function (argument) {
  return Object$2(requireObjectCoercible$2(argument));
};

var uncurryThis$d = functionUncurryThis;
var toObject$3 = toObject$4;
var hasOwnProperty = uncurryThis$d({}.hasOwnProperty); // `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty

var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$3(it), key);
};

var uncurryThis$c = functionUncurryThis;
var id = 0;
var postfix = Math.random();
var toString$4 = uncurryThis$c(1.0.toString);

var uid$2 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$4(++id + postfix, 36);
};

var global$j = global$v;
var shared$3 = shared$4.exports;
var hasOwn$6 = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL = nativeSymbol;
var USE_SYMBOL_AS_UID = useSymbolAsUid;
var WellKnownSymbolsStore = shared$3('wks');
var Symbol$1 = global$j.Symbol;
var symbolFor = Symbol$1 && Symbol$1['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

var wellKnownSymbol$a = function (name) {
  if (!hasOwn$6(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;

    if (NATIVE_SYMBOL && hasOwn$6(Symbol$1, name)) {
      WellKnownSymbolsStore[name] = Symbol$1[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  }

  return WellKnownSymbolsStore[name];
};

var global$i = global$v;
var call$5 = functionCall;
var isObject$6 = isObject$8;
var isSymbol$1 = isSymbol$2;
var getMethod$1 = getMethod$2;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$9 = wellKnownSymbol$a;
var TypeError$7 = global$i.TypeError;
var TO_PRIMITIVE = wellKnownSymbol$9('toPrimitive'); // `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive

var toPrimitive$1 = function (input, pref) {
  if (!isObject$6(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod$1(input, TO_PRIMITIVE);
  var result;

  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$5(exoticToPrim, input, pref);
    if (!isObject$6(result) || isSymbol$1(result)) return result;
    throw TypeError$7("Can't convert object to primitive value");
  }

  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive = toPrimitive$1;
var isSymbol = isSymbol$2; // `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey

var toPropertyKey$3 = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};

var global$h = global$v;
var isObject$5 = isObject$8;
var document$1 = global$h.document; // typeof document.createElement is 'object' in old IE

var EXISTS$1 = isObject$5(document$1) && isObject$5(document$1.createElement);

var documentCreateElement$1 = function (it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};

var DESCRIPTORS$6 = descriptors;
var fails$b = fails$g;
var createElement = documentCreateElement$1; // Thanks to IE8 for its funny defineProperty

var ie8DomDefine = !DESCRIPTORS$6 && !fails$b(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
});

var DESCRIPTORS$5 = descriptors;
var call$4 = functionCall;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var createPropertyDescriptor$2 = createPropertyDescriptor$3;
var toIndexedObject$4 = toIndexedObject$5;
var toPropertyKey$2 = toPropertyKey$3;
var hasOwn$5 = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

objectGetOwnPropertyDescriptor.f = DESCRIPTORS$5 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$4(O);
  P = toPropertyKey$2(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor$1(O, P);
  } catch (error) {
    /* empty */
  }
  if (hasOwn$5(O, P)) return createPropertyDescriptor$2(!call$4(propertyIsEnumerableModule.f, O, P), O[P]);
};

var objectDefineProperty = {};

var DESCRIPTORS$4 = descriptors;
var fails$a = fails$g; // V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334

var v8PrototypeDefineBug = DESCRIPTORS$4 && fails$a(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () {
    /* empty */
  }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var global$g = global$v;
var isObject$4 = isObject$8;
var String$2 = global$g.String;
var TypeError$6 = global$g.TypeError; // `Assert: Type(argument) is Object`

var anObject$8 = function (argument) {
  if (isObject$4(argument)) return argument;
  throw TypeError$6(String$2(argument) + ' is not an object');
};

var global$f = global$v;
var DESCRIPTORS$3 = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$7 = anObject$8;
var toPropertyKey$1 = toPropertyKey$3;
var TypeError$5 = global$f.TypeError; // eslint-disable-next-line es/no-object-defineproperty -- safe

var $defineProperty = Object.defineProperty; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable'; // `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty

objectDefineProperty.f = DESCRIPTORS$3 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$7(O);
  P = toPropertyKey$1(P);
  anObject$7(Attributes);

  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);

    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  }

  return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject$7(O);
  P = toPropertyKey$1(P);
  anObject$7(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError$5('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$2 = descriptors;
var definePropertyModule$4 = objectDefineProperty;
var createPropertyDescriptor$1 = createPropertyDescriptor$3;
var createNonEnumerableProperty$4 = DESCRIPTORS$2 ? function (object, key, value) {
  return definePropertyModule$4.f(object, key, createPropertyDescriptor$1(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var redefine$2 = {exports: {}};

var uncurryThis$b = functionUncurryThis;
var isCallable$6 = isCallable$c;
var store$1 = sharedStore;
var functionToString = uncurryThis$b(Function.toString); // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

if (!isCallable$6(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$3 = store$1.inspectSource;

var global$e = global$v;
var isCallable$5 = isCallable$c;
var inspectSource$2 = inspectSource$3;
var WeakMap$1 = global$e.WeakMap;
var nativeWeakMap = isCallable$5(WeakMap$1) && /native code/.test(inspectSource$2(WeakMap$1));

var shared$2 = shared$4.exports;
var uid = uid$2;
var keys = shared$2('keys');

var sharedKey$2 = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

var hiddenKeys$4 = {};

var NATIVE_WEAK_MAP = nativeWeakMap;
var global$d = global$v;
var uncurryThis$a = functionUncurryThis;
var isObject$3 = isObject$8;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$4;
var hasOwn$4 = hasOwnProperty_1;
var shared$1 = sharedStore;
var sharedKey$1 = sharedKey$2;
var hiddenKeys$3 = hiddenKeys$4;
var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$4 = global$d.TypeError;
var WeakMap = global$d.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;

    if (!isObject$3(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$4('Incompatible receiver, ' + TYPE + ' required');
    }

    return state;
  };
};

if (NATIVE_WEAK_MAP || shared$1.state) {
  var store = shared$1.state || (shared$1.state = new WeakMap());
  var wmget = uncurryThis$a(store.get);
  var wmhas = uncurryThis$a(store.has);
  var wmset = uncurryThis$a(store.set);

  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError$4(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };

  get = function (it) {
    return wmget(store, it) || {};
  };

  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey$1('state');
  hiddenKeys$3[STATE] = true;

  set = function (it, metadata) {
    if (hasOwn$4(it, STATE)) throw new TypeError$4(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$3(it, STATE, metadata);
    return metadata;
  };

  get = function (it) {
    return hasOwn$4(it, STATE) ? it[STATE] : {};
  };

  has = function (it) {
    return hasOwn$4(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var DESCRIPTORS$1 = descriptors;
var hasOwn$3 = hasOwnProperty_1;
var FunctionPrototype$1 = Function.prototype; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var getDescriptor = DESCRIPTORS$1 && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn$3(FunctionPrototype$1, 'name'); // additional protection from minified / mangled / dropped function names

var PROPER = EXISTS && function something() {
  /* empty */
}.name === 'something';

var CONFIGURABLE = EXISTS && (!DESCRIPTORS$1 || DESCRIPTORS$1 && getDescriptor(FunctionPrototype$1, 'name').configurable);
var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var global$c = global$v;
var isCallable$4 = isCallable$c;
var hasOwn$2 = hasOwnProperty_1;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$4;
var setGlobal$1 = setGlobal$3;
var inspectSource$1 = inspectSource$3;
var InternalStateModule = internalState;
var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
var getInternalState$1 = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');
(redefine$2.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;

  if (isCallable$4(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }

    if (!hasOwn$2(value, 'name') || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
      createNonEnumerableProperty$2(value, 'name', name);
    }

    state = enforceInternalState(value);

    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }

  if (O === global$c) {
    if (simple) O[key] = value;else setGlobal$1(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }

  if (simple) O[key] = value;else createNonEnumerableProperty$2(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable$4(this) && getInternalState$1(this).source || inspectSource$1(this);
});

var objectGetOwnPropertyNames = {};

var ceil = Math.ceil;
var floor = Math.floor; // `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity

var toIntegerOrInfinity$3 = function (argument) {
  var number = +argument; // eslint-disable-next-line no-self-compare -- safe

  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};

var toIntegerOrInfinity$2 = toIntegerOrInfinity$3;
var max$1 = Math.max;
var min$2 = Math.min; // Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

var toAbsoluteIndex$3 = function (index, length) {
  var integer = toIntegerOrInfinity$2(index);
  return integer < 0 ? max$1(integer + length, 0) : min$2(integer, length);
};

var toIntegerOrInfinity$1 = toIntegerOrInfinity$3;
var min$1 = Math.min; // `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength

var toLength$2 = function (argument) {
  return argument > 0 ? min$1(toIntegerOrInfinity$1(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength$1 = toLength$2; // `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike

var lengthOfArrayLike$5 = function (obj) {
  return toLength$1(obj.length);
};

var toIndexedObject$3 = toIndexedObject$5;
var toAbsoluteIndex$2 = toAbsoluteIndex$3;
var lengthOfArrayLike$4 = lengthOfArrayLike$5; // `Array.prototype.{ indexOf, includes }` methods implementation

var createMethod$2 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$3($this);
    var length = lengthOfArrayLike$4(O);
    var index = toAbsoluteIndex$2(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare -- NaN check

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$2(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$2(false)
};

var uncurryThis$9 = functionUncurryThis;
var hasOwn$1 = hasOwnProperty_1;
var toIndexedObject$2 = toIndexedObject$5;
var indexOf$1 = arrayIncludes.indexOf;
var hiddenKeys$2 = hiddenKeys$4;
var push$2 = uncurryThis$9([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$2(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) !hasOwn$1(hiddenKeys$2, key) && hasOwn$1(O, key) && push$2(result, key); // Don't enum bug & hidden keys


  while (names.length > i) if (hasOwn$1(O, key = names[i++])) {
    ~indexOf$1(result, key) || push$2(result, key);
  }

  return result;
};

var enumBugKeys$3 = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

var internalObjectKeys$1 = objectKeysInternal;
var enumBugKeys$2 = enumBugKeys$3;
var hiddenKeys$1 = enumBugKeys$2.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe

objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys$1(O, hiddenKeys$1);
};

var objectGetOwnPropertySymbols = {};

objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

var getBuiltIn$2 = getBuiltIn$5;
var uncurryThis$8 = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var anObject$6 = anObject$8;
var concat = uncurryThis$8([].concat); // all object keys, includes non-enumerable and symbols

var ownKeys$1 = getBuiltIn$2('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$6(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$3 = objectDefineProperty;

var copyConstructorProperties$1 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$3.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];

    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$9 = fails$g;
var isCallable$3 = isCallable$c;
var replacement = /#|\.prototype\./;

var isForced$1 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true : value == NATIVE ? false : isCallable$3(detection) ? fails$9(detection) : !!detection;
};

var normalize = isForced$1.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$1.data = {};
var NATIVE = isForced$1.NATIVE = 'N';
var POLYFILL = isForced$1.POLYFILL = 'P';
var isForced_1 = isForced$1;

var global$b = global$v;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$4;
var redefine$1 = redefine$2.exports;
var setGlobal = setGlobal$3;
var copyConstructorProperties = copyConstructorProperties$1;
var isForced = isForced_1;
/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/

var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;

  if (GLOBAL) {
    target = global$b;
  } else if (STATIC) {
    target = global$b[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global$b[TARGET] || {}).prototype;
  }

  if (target) for (key in source) {
    sourceProperty = source[key];

    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];

    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    } // add a flag to not completely full polyfills


    if (options.sham || targetProperty && targetProperty.sham) {
      createNonEnumerableProperty$1(sourceProperty, 'sham', true);
    } // extend global


    redefine$1(target, key, sourceProperty, options);
  }
};

var classof$5 = classofRaw$1; // `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe

var isArray$2 = Array.isArray || function isArray(argument) {
  return classof$5(argument) == 'Array';
};

var toPropertyKey = toPropertyKey$3;
var definePropertyModule$2 = objectDefineProperty;
var createPropertyDescriptor = createPropertyDescriptor$3;

var createProperty$2 = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule$2.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
};

var wellKnownSymbol$8 = wellKnownSymbol$a;
var TO_STRING_TAG$1 = wellKnownSymbol$8('toStringTag');
var test = {};
test[TO_STRING_TAG$1] = 'z';
var toStringTagSupport = String(test) === '[object z]';

var global$a = global$v;
var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable$2 = isCallable$c;
var classofRaw = classofRaw$1;
var wellKnownSymbol$7 = wellKnownSymbol$a;
var TO_STRING_TAG = wellKnownSymbol$7('toStringTag');
var Object$1 = global$a.Object; // ES3 wrong here

var CORRECT_ARGUMENTS = classofRaw(function () {
  return arguments;
}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) {
    /* empty */
  }
}; // getting tag from ES6+ `Object.prototype.toString`


var classof$4 = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (tag = tryGet(O = Object$1(it), TO_STRING_TAG)) == 'string' ? tag // builtinTag case
  : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
  : (result = classofRaw(O)) == 'Object' && isCallable$2(O.callee) ? 'Arguments' : result;
};

var uncurryThis$7 = functionUncurryThis;
var fails$8 = fails$g;
var isCallable$1 = isCallable$c;
var classof$3 = classof$4;
var getBuiltIn$1 = getBuiltIn$5;
var inspectSource = inspectSource$3;

var noop = function () {
  /* empty */
};

var empty = [];
var construct = getBuiltIn$1('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec$2 = uncurryThis$7(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable$1(argument)) return false;

  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable$1(argument)) return false;

  switch (classof$3(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction':
      return false;
  }

  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec$2(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true; // `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor

var isConstructor$2 = !construct || fails$8(function () {
  var called;
  return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function () {
    called = true;
  }) || called;
}) ? isConstructorLegacy : isConstructorModern;

var global$9 = global$v;
var isArray$1 = isArray$2;
var isConstructor$1 = isConstructor$2;
var isObject$2 = isObject$8;
var wellKnownSymbol$6 = wellKnownSymbol$a;
var SPECIES$3 = wellKnownSymbol$6('species');
var Array$2 = global$9.Array; // a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate

var arraySpeciesConstructor$1 = function (originalArray) {
  var C;

  if (isArray$1(originalArray)) {
    C = originalArray.constructor; // cross-realm fallback

    if (isConstructor$1(C) && (C === Array$2 || isArray$1(C.prototype))) C = undefined;else if (isObject$2(C)) {
      C = C[SPECIES$3];
      if (C === null) C = undefined;
    }
  }

  return C === undefined ? Array$2 : C;
};

var arraySpeciesConstructor = arraySpeciesConstructor$1; // `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate

var arraySpeciesCreate$2 = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

var fails$7 = fails$g;
var wellKnownSymbol$5 = wellKnownSymbol$a;
var V8_VERSION$1 = engineV8Version;
var SPECIES$2 = wellKnownSymbol$5('species');

var arrayMethodHasSpeciesSupport$2 = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION$1 >= 51 || !fails$7(function () {
    var array = [];
    var constructor = array.constructor = {};

    constructor[SPECIES$2] = function () {
      return {
        foo: 1
      };
    };

    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

var $$4 = _export;
var global$8 = global$v;
var fails$6 = fails$g;
var isArray = isArray$2;
var isObject$1 = isObject$8;
var toObject$2 = toObject$4;
var lengthOfArrayLike$3 = lengthOfArrayLike$5;
var createProperty$1 = createProperty$2;
var arraySpeciesCreate$1 = arraySpeciesCreate$2;
var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$2;
var wellKnownSymbol$4 = wellKnownSymbol$a;
var V8_VERSION = engineV8Version;
var IS_CONCAT_SPREADABLE = wellKnownSymbol$4('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
var TypeError$3 = global$8.TypeError; // We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679

var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails$6(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});
var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport$1('concat');

var isConcatSpreadable = function (O) {
  if (!isObject$1(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species

$$4({
  target: 'Array',
  proto: true,
  forced: FORCED
}, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject$2(this);
    var A = arraySpeciesCreate$1(O, 0);
    var n = 0;
    var i, k, length, len, E;

    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];

      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike$3(E);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError$3(MAXIMUM_ALLOWED_INDEX_EXCEEDED);

        for (k = 0; k < len; k++, n++) if (k in E) createProperty$1(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError$3(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty$1(A, n++, E);
      }
    }

    A.length = n;
    return A;
  }
});

var RotatedLine = /*#__PURE__*/function (_HTMLClip) {
  _inherits(RotatedLine, _HTMLClip);

  var _super = _createSuper(RotatedLine);

  function RotatedLine() {
    _classCallCheck(this, RotatedLine);

    return _super.apply(this, arguments);
  }

  _createClass(RotatedLine, [{
    key: "html",
    get: function get() {
      return "\n      <div class=\"wrapper\">\n        <div class=\"text--container text--container-left\">\n          <div class=\"text-left\">".concat(this.attrs.title, "</div>\n        </div>\n        <div class=\"line\"></div>\n        <div class=\"text--container text--container-right\">\n          <div class=\"text-right text-right1\">").concat(this.attrs.subTitle1, "</div>\n          <div class=\"text-right text-right2\">").concat(this.attrs.subTitle2, "</div>\n          <div class=\"text-right text-right3\">").concat(this.attrs.subTitle3, "</div>\n        </div>\n      </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      switch (this.attrs.size) {
        case "S":
          this.size = this.generateSize("1.5rem", "1rem", "0.2rem", "5rem", 3);
          break;

        case "M":
          this.size = this.generateSize("2rem", "1.2rem", "0.3rem", "7rem", 4);
          break;

        case "L":
          this.size = this.generateSize("2.5rem", "1.5rem", "0.3rem", "9rem", 4);
          break;

        case "XL":
          this.size = this.generateSize("3rem", "2rem", "0.3rem", "11rem", 4);
          break;
      }

      return "\n      body{\n       font-size: 62.5%;\n      }\n\n      .wrapper {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        transform: rotate(90deg);\n        white-space: nowrap;\n        overflow: hidden;\n        width : 100%;\n        width : ".concat(this.attrs.width + this.size.lineWidth, "px;\n        color : ").concat(this.attrs.textColor, ";\n        font-family: ").concat(this.attrs.fontFamily, " !important;\n      }\n\n      .line {\n        width: 3px;\n        background: ").concat(this.attrs.lineColor, " ;\n        height: 0rem;\n      }\n      \n      .text-left {\n        position: relative;\n        right : -100%;\n        font-size: ").concat(this.size.fontSizeLeft, ";\n        text-align: right;\n      }\n      \n      .text-right {\n        position: relative;\n        right: 100%;\n        font-size: ").concat(this.size.fontSizeRigth, ";\n      }\n      \n      .text--container {\n        white-space: nowrap;\n        overflow: hidden;\n        position: relative;\n        width :").concat(this.attrs.width / 2, "px;\n      } \n    ");
    }
  }, {
    key: "generateSize",
    value: function generateSize(fontSizeLeft, fontSizeRigth, lineWidth, lineHeight, gap) {
      return {
        fontSizeLeft: fontSizeLeft,
        fontSizeRigth: fontSizeRigth,
        lineWidth: lineWidth,
        lineHeight: lineHeight,
        gap: gap
      };
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var rotateAminmeEnd = new motorcortex.CSSEffect({
        animatedAttrs: {
          transform: {
            rotate: "0deg"
          }
        },
        attrs: {}
      }, {
        duration: 450,
        selector: ".wrapper",
        easing: "easeInOutQuart"
      });
      var widthLIne = new motorcortex.CSSEffect({
        animatedAttrs: {
          height: this.size.lineHeight
        },
        attrs: {}
      }, {
        duration: 450,
        selector: ".line",
        easing: "easeInOutQuart"
      });
      var leftTextAnimate = new motorcortex.CSSEffect({
        animatedAttrs: {
          right: "".concat(this.size.gap, "%")
        },
        attrs: {}
      }, {
        duration: 900,
        selector: ".text-left",
        easing: "easeInOutQuart"
      });

      for (var i = 1; i <= 3; i++) {
        var rightTextAnimate = new motorcortex.CSSEffect({
          animatedAttrs: {
            right: "-".concat(this.size.gap, "%")
          },
          attrs: {}
        }, {
          duration: 900 * i,
          selector: ".text-right" + i,
          easing: "easeOutExpo"
        });
        this.addIncident(rightTextAnimate, 1500);
      }

      var rightTextAnimateIn = new motorcortex.CSSEffect({
        animatedAttrs: {
          right: "100%"
        },
        attrs: {}
      }, {
        duration: 900,
        selector: ".text-right",
        easing: "easeOutExpo"
      });
      var leftTextAnimateIn = new motorcortex.CSSEffect({
        animatedAttrs: {
          right: "-100%"
        },
        attrs: {}
      }, {
        duration: 900,
        selector: ".text-left",
        easing: "easeOutExpo"
      });
      var rotateAminmeStartOut = new motorcortex.CSSEffect({
        animatedAttrs: {
          transform: {
            rotate: "90deg"
          }
        },
        attrs: {}
      }, {
        duration: 450,
        selector: ".wrapper",
        easing: "easeInOutQuart"
      });
      var widthLIneOut = new motorcortex.CSSEffect({
        animatedAttrs: {
          height: "0rem"
        },
        attrs: {}
      }, {
        duration: 450,
        selector: ".line",
        easing: "easeInOutQuart"
      });
      var delayEnd = this.attrs.delayEnd || 0;
      this.addIncident(widthLIne, 0);
      this.addIncident(rotateAminmeEnd, 450);
      this.addIncident(leftTextAnimate, 900);

      if (!this.attrs.stopOnLast) {
        this.addIncident(rightTextAnimateIn, 4200 + delayEnd);
        this.addIncident(leftTextAnimateIn, 4200 + delayEnd);
        this.addIncident(rotateAminmeStartOut, 5100 + delayEnd);
        this.addIncident(widthLIneOut, 5550 + delayEnd);
      }
    }
  }]);

  return RotatedLine;
}(motorcortex.HTMLClip);

var RolingText = /*#__PURE__*/function (_HTMLClip) {
  _inherits(RolingText, _HTMLClip);

  var _super = _createSuper(RolingText);

  function RolingText() {
    _classCallCheck(this, RolingText);

    return _super.apply(this, arguments);
  }

  _createClass(RolingText, [{
    key: "html",
    get: function get() {
      return "\n      <div class=\"wrapper\">\n        <div class=\"line\"></div>\n        <div class=\"textClip\"> \n          <span>".concat(this.attrs.subTitle1, "</span>\n          <span>").concat(this.attrs.subTitle2, "</span>\n          <span>").concat(this.attrs.subTitle3, "</span>\n        </div>\n      </div>\n        ");
    }
  }, {
    key: "css",
    get: function get() {
      switch (this.attrs.size) {
        case "S":
          this.size = this.generateSize(21, "-21px", "31px", 0.5, "-42px");
          break;

        case "M":
          this.size = this.generateSize(28, "-28px", "38px", 1, "-56px");
          break;

        case "L":
          this.size = this.generateSize(35, "-35px", "45px", 1.5, "-70px");
          break;

        case "XL":
          this.size = this.generateSize(42, "-42px", "52px", 2, "-84px");
          break;

        case "XXL":
          this.size = this.generateSize(49, "-49px", "59px", 2, "-98px");
          break;

        case "XXXL":
          this.size = this.generateSize(70, "-70px", "80px", 2, "-140px", 86);
          break;
      }

      return "\n      body{\n       font-size: 62.5%;\n      }\n\n      .wrapper{\n        white-space: nowrap;\n        overflow: hidden;\n        display: flex;\n        height: ".concat(this.size.lineHeight, ";\n        width : ").concat(this.attrs.width, "px;\n        justify-content: center;\n        align-items: center;\n        font-family: ").concat(this.attrs.fontFamily, " !important;\n      }\n    \n      .line{\n        position: relative; \n        height: 0;\n        width: 3px;\n        justify-content: center;\n        background: ").concat(this.attrs.lineColor, " ;\n        margin-right: ").concat(this.size.gap, "rem;\n      \n      }\n      \n      .textClip{\n        position: relative;\n        display: flex;\n        flex-direction: column;\n        font-size: ").concat(this.size.fontSizeLeft, "px;\n        white-space: nowrap;\n        overflow: hidden;\n        height: ").concat(this.size.fontSizeLeft, "px;\n      }\n    \n      .textClip span{\n        color : ").concat(this.attrs.textColor, ";\n        position: relative;\n        left : -").concat(this.attrs.width / 2, "px;\n        width : 100%;\n        height: ").concat(this.size.fontSizeLeft, "px;\n        align-items: center;\n        display: flex;\n        top:0;\n      }\n  ");
    }
  }, {
    key: "generateSize",
    value: function generateSize(fontSizeLeft, topMove, lineHeight, gap, topMove2) {
      return {
        fontSizeLeft: fontSizeLeft,
        topMove: topMove,
        lineHeight: lineHeight,
        gap: gap,
        topMove2: topMove2
      };
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var animeLineHeight = new motorcortex.CSSEffect({
        animatedAttrs: {
          height: this.size.lineHeight
        },
        attrs: {}
      }, {
        duration: 450,
        selector: ".line"
      });
      var animeTextLeft = new motorcortex.CSSEffect({
        animatedAttrs: {
          left: "0px"
        },
        attrs: {}
      }, {
        duration: 800,
        selector: ".textClip span"
      });
      var animeTextTop = new motorcortex.CSSEffect({
        animatedAttrs: {
          top: this.size.topMove
        }
      }, {
        duration: 900,
        selector: ".textClip span"
      });
      var animeTextTopNext = new motorcortex.CSSEffect({
        animatedAttrs: {
          top: this.size.topMove2
        }
      }, {
        duration: 900,
        selector: ".textClip span"
      });
      var animeTextLeftBack = new motorcortex.CSSEffect({
        animatedAttrs: {
          left: "-".concat(this.attrs.width / 2, "px")
        }
      }, {
        duration: 900,
        selector: ".textClip span"
      });
      var animeLineHeightBack = new motorcortex.CSSEffect({
        animatedAttrs: {
          height: "0px"
        },
        attrs: {}
      }, {
        duration: 450,
        selector: ".line"
      });
      this.addIncident(animeLineHeight, 0);
      this.addIncident(animeTextLeft, 450);
      this.addIncident(animeTextTop, 2250);
      this.addIncident(animeTextTopNext, 3450);
      var delayEnd = this.attrs.delayEnd || 0;

      if (!this.attrs.stopOnLast) {
        this.addIncident(animeTextLeftBack, 4500 + delayEnd);
        this.addIncident(animeLineHeightBack, 5550 + delayEnd);
      }
    }
  }]);

  return RolingText;
}(motorcortex.HTMLClip);

var SvgBorder = /*#__PURE__*/function (_HTMLClip) {
  _inherits(SvgBorder, _HTMLClip);

  var _super = _createSuper(SvgBorder);

  function SvgBorder() {
    _classCallCheck(this, SvgBorder);

    return _super.apply(this, arguments);
  }

  _createClass(SvgBorder, [{
    key: "html",
    get: function get() {
      switch (this.attrs.size) {
        case "S":
          this.size = this.generateSize(600, 70, "2rem", "1rem", 50, 17, 50);
          break;

        case "M":
          this.size = this.generateSize(700, 90, "3rem", "2rem", 50, 34, 70);
          break;

        case "L":
          this.size = this.generateSize(1000, 110, "3.5rem", "2.5rem", 55, 45, 80);
          break;
      }

      return "\n      <div class=\"svg-wrapper\">\n        <svg height=\"".concat(this.size.borderHeight, "\" width=\"").concat(this.size.borderWidth, "\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect class=\"shape2\" height=\"").concat(this.size.borderHeight, "\" width=\"").concat(this.size.borderWidth, "\" />\n        </svg>\n        <div class=\"sub--container\">\n          <div class=\"sub\">").concat(this.attrs.subTitle, "</div>\n        </div>\n        <div class=\"titleContainer\">\n          <div class=\"text\">").concat(this.attrs.title, "</div>\n        </div>\n        <div class=\"sloganContainer\">\n          <div class=\"slogan\">").concat(this.attrs.slogan, "</div>\n        </div>\n      </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n      body{\n       font-size: 62.5%;\n      }\n\n      .svg-wrapper {\n        position: relative;\n        top :10px;\n        height: 100%;\n        color:  ".concat(this.attrs.textColor, ";\n        font-family: ").concat(this.attrs.fontFamily, " !important;\n      }\n      \n      .shape2 {\n        stroke-dasharray: 6000;\n        stroke-width: 5px;\n        fill: transparent;\n        stroke: ").concat(this.attrs.lineColor, ";\n        border-bottom: 5px solid black;\n        stroke-dashoffset: 6000;\n      }\n      \n      \n      .text {\n        font-size: ").concat(this.size.fontSizeTitle, ";\n        letter-spacing: 8px;\n        position: relative;\n        top: ").concat(this.size.titleTop, "px;\n      }\n      \n      .sub--container {\n        position: absolute;\n        white-space: nowrap;\n        overflow: hidden;\n        left: 20px;\n        top: -7%;\n      }\n\n      .sloganContainer {\n        position: relative;\n        top: -30px;\n        left: 45%;\n        white-space: nowrap;\n        overflow: hidden;\n        width: 150px;\n      }\n\n      .titleContainer{\n        position: relative;\n        top: -").concat(this.size.titleContainerTop, "px;\n        white-space: nowrap;\n        overflow: hidden;\n        width: ").concat(this.size.borderWidth, "px;\n        height: 50px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n      \n      .sub{\n        position: relative;\n        top: ").concat(this.size.subTop, "px;\n        font-size : ").concat(this.size.fontSizeSub, ";\n      }\n      \n      .slogan{\n        position: relative;\n        top: -").concat(this.size.subTop, "px;\n        font-size : ").concat(this.size.fontSizeSub, ";\n      }\n    ");
    }
  }, {
    key: "generateSize",
    value: function generateSize(borderWidth, borderHeight, fontSizeTitle, fontSizeSub, titleTop, subTop, titleContainerTop) {
      return {
        borderWidth: borderWidth,
        borderHeight: borderHeight,
        fontSizeTitle: fontSizeTitle,
        fontSizeSub: fontSizeSub,
        titleTop: titleTop,
        subTop: subTop,
        titleContainerTop: titleContainerTop
      };
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var delayEnd = this.attrs.delayEnd || 0;
      var borderAnimete = new motorcortex.CSSEffect({
        animatedAttrs: {
          strokeDashoffset: " ".concat(12000 - this.attrs.borderGap, "px")
        },
        attrs: {}
      }, {
        duration: 1400,
        selector: ".shape2",
        easing: "easeInOutQuart"
      });
      var titleAnimete = new motorcortex.CSSEffect({
        animatedAttrs: {
          top: "0px"
        },
        attrs: {}
      }, {
        duration: 600,
        selector: ".text"
      });
      var subAnimate = new motorcortex.CSSEffect({
        animatedAttrs: {
          top: "0px"
        },
        attrs: {}
      }, {
        duration: 600,
        selector: ".sub",
        easing: "easeInOutQuart"
      });
      var sloganAnimate = new motorcortex.CSSEffect({
        animatedAttrs: {
          top: "0px"
        },
        attrs: {}
      }, {
        duration: 600,
        selector: ".slogan",
        easing: "easeInOutQuart"
      });
      var borderAnimeteLeft = new motorcortex.CSSEffect({
        animatedAttrs: {
          strokeDashoffset: "6000px"
        },
        attrs: {}
      }, {
        duration: 1200,
        selector: ".shape2"
      });
      var titleAnimeteLeft = new motorcortex.CSSEffect({
        animatedAttrs: {
          left: "100%"
        },
        attrs: {}
      }, {
        duration: 800,
        selector: ".text"
      });
      var subAnimateLeft = new motorcortex.CSSEffect({
        animatedAttrs: {
          left: "100%"
        },
        attrs: {}
      }, {
        duration: 800,
        selector: ".sub",
        easing: "easeInOutQuart"
      });
      var sloganAnimateLeft = new motorcortex.CSSEffect({
        animatedAttrs: {
          left: "150px"
        },
        attrs: {}
      }, {
        duration: 800,
        selector: ".slogan",
        easing: "easeInOutQuart"
      });
      this.addIncident(borderAnimete, 0);
      this.addIncident(titleAnimete, 600);
      this.addIncident(subAnimate, 1200);
      this.addIncident(sloganAnimate, 1200);
      var grupMc = new motorcortex.Group();
      grupMc.addIncident(borderAnimeteLeft, 800);
      grupMc.addIncident(titleAnimeteLeft, 400);
      grupMc.addIncident(subAnimateLeft, 400);
      grupMc.addIncident(sloganAnimateLeft, 400);

      if (!this.attrs.stopOnLast) {
        this.addIncident(grupMc, 3000 + delayEnd);
      }
    }
  }]);

  return SvgBorder;
}(motorcortex.HTMLClip);

var RotatadLineReveal = /*#__PURE__*/function (_HTMLClip) {
  _inherits(RotatadLineReveal, _HTMLClip);

  var _super = _createSuper(RotatadLineReveal);

  function RotatadLineReveal() {
    _classCallCheck(this, RotatadLineReveal);

    return _super.apply(this, arguments);
  }

  _createClass(RotatadLineReveal, [{
    key: "html",
    get: function get() {
      switch (this.attrs.size) {
        case "S":
          this.size = this.generateSize("1.5rem", "1rem", "3.5rem", "55px");
          break;

        case "M":
          this.size = this.generateSize("2.5rem", "2rem", "5rem", "90px");
          break;

        case "L":
          this.size = this.generateSize("3.5rem", "2rem", "7rem", "100px");
          break;
      }

      return "\n      <div class=\"wrapper\">\n        <div class=\"redLine\">\n          <div class=\"text text1\"><div class=\"title \">".concat(this.attrs.title, "</div></div>\n          <div class=\"text text2\"><div class=\"sub\">").concat(this.attrs.subtitle, "</div></div>\n        </div>\n      </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n      .wrapper{\n        width:".concat(this.attrs.width, "px;\n        height:100%;\n        font-family: ").concat(this.attrs.fontFamily, " !important;\n      }\n\n      .redLine {\n        border-left: 2px solid ").concat(this.attrs.lineColor, ";\n        width: 0rem;\n        height: ").concat(this.size.lineHeight, ";\n        display: flex;\n        align-items: flex-start;\n        flex-direction: column;\n        transform: rotate(30deg);\n        position: relative;\n        left: 150%;\n        transform-origin: top left;\n        white-space: nowrap;\n        overflow: hidden;\n        color : ").concat(this.attrs.textColor, "\n      }\n\n      .title{\n        font-size: ").concat(this.size.fontSize, ";\n        font-weight: 600;\n      }\n\n      .sub{\n        font-size: ").concat(this.size.fontSizeSub, ";\n        top: -60px;\n        position: relative;\n      }\n\n      .text {\n        position: relative;\n        left: -50px;\n        white-space: nowrap;\n        overflow: hidden;\n      }\n    ");
    }
  }, {
    key: "generateSize",
    value: function generateSize(fontSize, fontSizeSub, lineSize, lineHeight) {
      return {
        fontSize: fontSize,
        fontSizeSub: fontSizeSub,
        lineSize: lineSize,
        lineHeight: lineHeight
      };
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var grupMc = new motorcortex.Group();
      var lineRotateEnd = new motorcortex.CSSEffect({
        animatedAttrs: {
          transform: {
            rotate: "0deg"
          }
        }
      }, {
        duration: 1200,
        selector: ".redLine",
        easing: "easeOutExpo"
      });
      var lineMoveEnd = new motorcortex.CSSEffect({
        animatedAttrs: {
          left: "".concat(this.attrs.leftEnd, "px")
        }
      }, {
        duration: 2000,
        selector: ".redLine",
        easing: "easeOutExpo"
      });
      var lineWidthEnd = new motorcortex.CSSEffect({
        animatedAttrs: {
          width: "400px"
        },
        attrs: {
          easing: "easeOutExpo"
        }
      }, {
        duration: 800,
        selector: ".redLine"
      });
      var moveText = new motorcortex.CSSEffect({
        animatedAttrs: {
          left: "10px"
        }
      }, {
        duration: 800,
        selector: ".text",
        easing: "easeOutExpo"
      });
      var moveSub = new motorcortex.CSSEffect({
        animatedAttrs: {
          top: "0px"
        }
      }, {
        duration: 400,
        selector: ".sub",
        easing: "easeOutExpo"
      });

      for (var i = 1; i <= 2; i++) {
        var moveTextOut = new motorcortex.CSSEffect({
          animatedAttrs: {
            left: "-".concat(this.attrs.width, "px")
          }
        }, {
          duration: Math.round(1700),
          selector: ".text" + i,
          easing: "easeOutExpo"
        });
        grupMc.addIncident(moveTextOut, 3125 + i * 100);
      }

      var lineHeight = new motorcortex.CSSEffect({
        animatedAttrs: {
          height: "0px"
        }
      }, {
        duration: 400,
        selector: ".redLine",
        easing: "easeInSine"
      });
      this.addIncident(lineRotateEnd, 0);
      this.addIncident(lineMoveEnd, 0);
      this.addIncident(lineWidthEnd, 1200);
      this.addIncident(moveText, 1200);
      this.addIncident(moveSub, 2000);
      var delayEnd = this.attrs.delayEnd || 0;

      if (!this.attrs.stopOnLast) {
        this.addIncident(grupMc, delayEnd);
        this.addIncident(lineHeight, 4250 + delayEnd);
      }
    }
  }]);

  return RotatadLineReveal;
}(motorcortex.HTMLClip);

var SvgDraw = /*#__PURE__*/function (_HTMLClip) {
  _inherits(SvgDraw, _HTMLClip);

  var _super = _createSuper(SvgDraw);

  function SvgDraw() {
    _classCallCheck(this, SvgDraw);

    return _super.apply(this, arguments);
  }

  _createClass(SvgDraw, [{
    key: "html",
    get: function get() {
      switch (this.attrs.size) {
        case "S":
          this.size = this.generateSize(200, 100, "");
          break;

        case "M":
          this.size = this.generateSize(300, 200, "5rem");
          break;

        case "L":
          this.size = this.generateSize(500, 400, "7rem");
          break;
      }

      return "<div class=\"svg-wrapper\">".concat(this.attrs.svg, "</div>");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n      .svg-wrapper{\n        position: relative;\n        width: ".concat(this.size.svgWidth * 1.5, "px;\n        height: 100%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      svg{\n        width: ").concat(this.size.svgWidth, "px;\n        height: ").concat(this.size.svgHeight, "px;\n      }\n\n      .svgContainer{\n        height:100vh;\n      }\n\n      svg path{\n        stroke-dasharray: ").concat(this.attrs.StrokeDashArray, ";\n        stroke-dashoffset: ").concat(this.attrs.strokeDashOffset, ";\n      }\n    ");
    }
  }, {
    key: "generateSize",
    value: function generateSize(svgWidth, svgHeight, lineSize) {
      return {
        svgWidth: svgWidth,
        svgHeight: svgHeight,
        lineSize: lineSize
      };
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var textDrow = new motorcortex.CSSEffect({
        animatedAttrs: {
          strokeDashoffset: "0px"
        },
        attrs: {}
      }, {
        duration: 2700,
        selector: "svg path",
        easing: "easeInSine"
      });
      var textBigBack = new motorcortex.CSSEffect({
        animatedAttrs: {
          transform: {
            scaleX: 1.3,
            scaleY: 1.3
          }
        }
      }, {
        duration: 1530,
        selector: "svg",
        id: "transform2",
        easing: "easeOutElastic"
      });
      var textErase = new motorcortex.CSSEffect({
        animatedAttrs: {
          strokeDashoffset: this.attrs.strokeDashOffset
        },
        attrs: {}
      }, {
        duration: 2700,
        selector: "svg path",
        easing: "easeInSine"
      });
      this.addIncident(textDrow, 0);
      this.addIncident(textBigBack, 2700);
      var delayEnd = this.attrs.delayEnd || 0;

      if (!this.attrs.stopOnLast) {
        this.addIncident(textErase, 3420 + delayEnd);
      }
    }
  }]);

  return SvgDraw;
}(motorcortex.HTMLClip);

var global$7 = global$v;
var classof$2 = classof$4;
var String$1 = global$7.String;

var toString$3 = function (argument) {
  if (classof$2(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String$1(argument);
};

var anObject$5 = anObject$8; // `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags

var regexpFlags$1 = function () {
  var that = anObject$5(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

var fails$5 = fails$g;
var global$6 = global$v; // babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError

var $RegExp$2 = global$6.RegExp;
var UNSUPPORTED_Y$2 = fails$5(function () {
  var re = $RegExp$2('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
}); // UC Browser bug
// https://github.com/zloirock/core-js/issues/1008

var MISSED_STICKY = UNSUPPORTED_Y$2 || fails$5(function () {
  return !$RegExp$2('a', 'y').sticky;
});
var BROKEN_CARET = UNSUPPORTED_Y$2 || fails$5(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp$2('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});
var regexpStickyHelpers = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y$2
};

var objectDefineProperties = {};

var internalObjectKeys = objectKeysInternal;
var enumBugKeys$1 = enumBugKeys$3; // `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe

var objectKeys$1 = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys$1);
};

var DESCRIPTORS = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule$1 = objectDefineProperty;
var anObject$4 = anObject$8;
var toIndexedObject$1 = toIndexedObject$5;
var objectKeys = objectKeys$1; // `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe

objectDefineProperties.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$4(O);
  var props = toIndexedObject$1(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;

  while (length > index) definePropertyModule$1.f(O, key = keys[index++], props[key]);

  return O;
};

var getBuiltIn = getBuiltIn$5;
var html$1 = getBuiltIn('document', 'documentElement');

/* global ActiveXObject -- old IE, WSH */
var anObject$3 = anObject$8;
var definePropertiesModule = objectDefineProperties;
var enumBugKeys = enumBugKeys$3;
var hiddenKeys = hiddenKeys$4;
var html = html$1;
var documentCreateElement = documentCreateElement$1;
var sharedKey = sharedKey$2;
var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () {
  /* empty */
};

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
}; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype


var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak

  return temp;
}; // Create object with fake `null` prototype: use iframe Object with cleared prototype


var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
}; // Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug


var activeXDocument;

var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) {
    /* ignore */
  }

  NullProtoObject = typeof document != 'undefined' ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) // old IE
  : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument); // WSH

  var length = enumBugKeys.length;

  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];

  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true; // `Object.create` method
// https://tc39.es/ecma262/#sec-object.create

var objectCreate = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject$3(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[IE_PROTO] = O;
  } else result = NullProtoObject();

  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

var fails$4 = fails$g;
var global$5 = global$v; // babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError

var $RegExp$1 = global$5.RegExp;
var regexpUnsupportedDotAll = fails$4(function () {
  var re = $RegExp$1('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});

var fails$3 = fails$g;
var global$4 = global$v; // babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError

var $RegExp = global$4.RegExp;
var regexpUnsupportedNcg = fails$3(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' || 'b'.replace(re, '$<a>c') !== 'bc';
});

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */

/* eslint-disable regexp/no-useless-quantifier -- testing */


var call$3 = functionCall;
var uncurryThis$6 = functionUncurryThis;
var toString$2 = toString$3;
var regexpFlags = regexpFlags$1;
var stickyHelpers$1 = regexpStickyHelpers;
var shared = shared$4.exports;
var create$1 = objectCreate;
var getInternalState = internalState.get;
var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG = regexpUnsupportedNcg;
var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt$2 = uncurryThis$6(''.charAt);
var indexOf = uncurryThis$6(''.indexOf);
var replace = uncurryThis$6(''.replace);
var stringSlice$2 = uncurryThis$6(''.slice);

var UPDATES_LAST_INDEX_WRONG = function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call$3(nativeExec, re1, 'a');
  call$3(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
}();

var UNSUPPORTED_Y$1 = stickyHelpers$1.BROKEN_CARET; // nonparticipating capturing group, copied from es5-shim's String#split patch.

var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1 || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString$2(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call$3(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y$1 && re.sticky;
    var flags = call$3(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace(flags, 'y', '');

      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice$2(str, re.lastIndex); // Support anchored sticky behavior.

      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$2(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      } // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.


      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }

    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
    match = call$3(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice$2(match.input, charsAdded);
        match[0] = stringSlice$2(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }

    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      call$3(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create$1(null);

      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

var regexpExec$3 = patchedExec;

var $$3 = _export;
var exec$1 = regexpExec$3; // `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec

$$3({
  target: 'RegExp',
  proto: true,
  forced: /./.exec !== exec$1
}, {
  exec: exec$1
});

var NATIVE_BIND$1 = functionBindNative;
var FunctionPrototype = Function.prototype;
var apply$1 = FunctionPrototype.apply;
var call$2 = FunctionPrototype.call; // eslint-disable-next-line es/no-reflect -- safe

var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$1 ? call$2.bind(apply$1) : function () {
  return call$2.apply(apply$1, arguments);
});

var uncurryThis$5 = functionUncurryThis;
var redefine = redefine$2.exports;
var regexpExec$2 = regexpExec$3;
var fails$2 = fails$g;
var wellKnownSymbol$3 = wellKnownSymbol$a;
var createNonEnumerableProperty = createNonEnumerableProperty$4;
var SPECIES$1 = wellKnownSymbol$3('species');
var RegExpPrototype = RegExp.prototype;

var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol$3(KEY);
  var DELEGATES_TO_SYMBOL = !fails$2(function () {
    // String methods call symbol-named RegEp methods
    var O = {};

    O[SYMBOL] = function () {
      return 7;
    };

    return ''[KEY](O) != 7;
  });
  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$2(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {}; // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.

      re.constructor = {};

      re.constructor[SPECIES$1] = function () {
        return re;
      };

      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () {
      execCalled = true;
      return null;
    };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || FORCED) {
    var uncurriedNativeRegExpMethod = uncurryThis$5(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis$5(nativeMethod);
      var $exec = regexp.exec;

      if ($exec === regexpExec$2 || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return {
            done: true,
            value: uncurriedNativeRegExpMethod(regexp, str, arg2)
          };
        }

        return {
          done: true,
          value: uncurriedNativeMethod(str, regexp, arg2)
        };
      }

      return {
        done: false
      };
    });
    redefine(String.prototype, KEY, methods[0]);
    redefine(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};

var isObject = isObject$8;
var classof$1 = classofRaw$1;
var wellKnownSymbol$2 = wellKnownSymbol$a;
var MATCH = wellKnownSymbol$2('match'); // `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp

var isRegexp = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof$1(it) == 'RegExp');
};

var global$3 = global$v;
var isConstructor = isConstructor$2;
var tryToString = tryToString$2;
var TypeError$2 = global$3.TypeError; // `Assert: IsConstructor(argument) is true`

var aConstructor$1 = function (argument) {
  if (isConstructor(argument)) return argument;
  throw TypeError$2(tryToString(argument) + ' is not a constructor');
};

var anObject$2 = anObject$8;
var aConstructor = aConstructor$1;
var wellKnownSymbol$1 = wellKnownSymbol$a;
var SPECIES = wellKnownSymbol$1('species'); // `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor

var speciesConstructor$1 = function (O, defaultConstructor) {
  var C = anObject$2(O).constructor;
  var S;
  return C === undefined || (S = anObject$2(C)[SPECIES]) == undefined ? defaultConstructor : aConstructor(S);
};

var uncurryThis$4 = functionUncurryThis;
var toIntegerOrInfinity = toIntegerOrInfinity$3;
var toString$1 = toString$3;
var requireObjectCoercible$1 = requireObjectCoercible$4;
var charAt$1 = uncurryThis$4(''.charAt);
var charCodeAt = uncurryThis$4(''.charCodeAt);
var stringSlice$1 = uncurryThis$4(''.slice);

var createMethod$1 = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$1(requireObjectCoercible$1($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? charAt$1(S, position) : first : CONVERT_TO_STRING ? stringSlice$1(S, position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod$1(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod$1(true)
};

var charAt = stringMultibyte.charAt; // `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex

var advanceStringIndex$1 = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};

var global$2 = global$v;
var toAbsoluteIndex$1 = toAbsoluteIndex$3;
var lengthOfArrayLike$2 = lengthOfArrayLike$5;
var createProperty = createProperty$2;
var Array$1 = global$2.Array;
var max = Math.max;

var arraySliceSimple = function (O, start, end) {
  var length = lengthOfArrayLike$2(O);
  var k = toAbsoluteIndex$1(start, length);
  var fin = toAbsoluteIndex$1(end === undefined ? length : end, length);
  var result = Array$1(max(fin - k, 0));

  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);

  result.length = n;
  return result;
};

var global$1 = global$v;
var call$1 = functionCall;
var anObject$1 = anObject$8;
var isCallable = isCallable$c;
var classof = classofRaw$1;
var regexpExec$1 = regexpExec$3;
var TypeError$1 = global$1.TypeError; // `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec

var regexpExecAbstract = function (R, S) {
  var exec = R.exec;

  if (isCallable(exec)) {
    var result = call$1(exec, R, S);
    if (result !== null) anObject$1(result);
    return result;
  }

  if (classof(R) === 'RegExp') return call$1(regexpExec$1, R, S);
  throw TypeError$1('RegExp#exec called on incompatible receiver');
};

var apply = functionApply;
var call = functionCall;
var uncurryThis$3 = functionUncurryThis;
var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
var isRegExp = isRegexp;
var anObject = anObject$8;
var requireObjectCoercible = requireObjectCoercible$4;
var speciesConstructor = speciesConstructor$1;
var advanceStringIndex = advanceStringIndex$1;
var toLength = toLength$2;
var toString = toString$3;
var getMethod = getMethod$2;
var arraySlice = arraySliceSimple;
var callRegExpExec = regexpExecAbstract;
var regexpExec = regexpExec$3;
var stickyHelpers = regexpStickyHelpers;
var fails$1 = fails$g;
var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var MAX_UINT32 = 0xFFFFFFFF;
var min = Math.min;
var $push = [].push;
var exec = uncurryThis$3(/./.exec);
var push$1 = uncurryThis$3($push);
var stringSlice = uncurryThis$3(''.slice); // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails$1(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;

  re.exec = function () {
    return originalExec.apply(this, arguments);
  };

  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
}); // @@split logic

fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;

  if ('abbc'.split(/(b)*/)[1] == 'c' || // eslint-disable-next-line regexp/no-empty-group -- required for testing
  'test'.split(/(?:)/, -1).length != 4 || 'ab'.split(/(?:ab)*/).length != 2 || '.'.split(/(.?)(.?)/).length != 4 || // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
  '.'.split(/()()/).length > 1 || ''.split(/.?/).length) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = toString(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string]; // If `separator` is not a regex, use native split

      if (!isRegExp(separator)) {
        return call(nativeSplit, string, separator, lim);
      }

      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
      var lastLastIndex = 0; // Make `global` and avoid `lastIndex` issues by working with a copy

      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;

      while (match = call(regexpExec, separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;

        if (lastIndex > lastLastIndex) {
          push$1(output, stringSlice(string, lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) apply($push, output, arraySlice(match, 1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }

        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }

      if (lastLastIndex === string.length) {
        if (lastLength || !exec(separatorCopy, '')) push$1(output, '');
      } else push$1(output, stringSlice(string, lastLastIndex));

      return output.length > lim ? arraySlice(output, 0, lim) : output;
    }; // Chakra, V8

  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : call(nativeSplit, this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [// `String.prototype.split` method
  // https://tc39.es/ecma262/#sec-string.prototype.split
  function split(separator, limit) {
    var O = requireObjectCoercible(this);
    var splitter = separator == undefined ? undefined : getMethod(separator, SPLIT);
    return splitter ? call(splitter, separator, O, limit) : call(internalSplit, toString(O), separator, limit);
  }, // `RegExp.prototype[@@split]` method
  // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
  //
  // NOTE: This cannot be properly polyfilled in engines that don't support
  // the 'y' flag.
  function (string, limit) {
    var rx = anObject(this);
    var S = toString(string);
    var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);
    if (res.done) return res.value;
    var C = speciesConstructor(rx, RegExp);
    var unicodeMatching = rx.unicode;
    var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (UNSUPPORTED_Y ? 'g' : 'y'); // ^(? + rx + ) is needed, in combination with some S slicing, to
    // simulate the 'y' flag.

    var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
    var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
    if (lim === 0) return [];
    if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
    var p = 0;
    var q = 0;
    var A = [];

    while (q < S.length) {
      splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
      var z = callRegExpExec(splitter, UNSUPPORTED_Y ? stringSlice(S, q) : S);
      var e;

      if (z === null || (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p) {
        q = advanceStringIndex(S, q, unicodeMatching);
      } else {
        push$1(A, stringSlice(S, p, q));
        if (A.length === lim) return A;

        for (var i = 1; i <= z.length - 1; i++) {
          push$1(A, z[i]);
          if (A.length === lim) return A;
        }

        q = p = e;
      }
    }

    push$1(A, stringSlice(S, p));
    return A;
  }];
}, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);

var Circle = /*#__PURE__*/function (_HTMLClip) {
  _inherits(Circle, _HTMLClip);

  var _super = _createSuper(Circle);

  function Circle() {
    _classCallCheck(this, Circle);

    return _super.apply(this, arguments);
  }

  _createClass(Circle, [{
    key: "html",
    get: function get() {
      return "\n      <div class=\"wrapper\">\n        <div class=\"circle\">\n          <div class=\"word\"></div>\n        </div>\n        <div class=\"sub\">\n          <span >".concat(this.attrs.subTitle, "</span>\n        </div>\n      </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n      .wrapper{\n        white-space: nowrap;\n        overflow: hidden;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: ".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.width, "px;\n        font-family: ").concat(this.attrs.fontFamily, " !important;\n      }\n\n      .circle{\n        width: 0px;\n        height: 0px;\n        background: ").concat(this.attrs.circleColor, ";\n        position: relative;\n        border-radius: 100%;\n        mask: url(./img.svg);\n        mask-position-y: 69px;\n        mask-size: 810px;\n      }\n\n      .word{\n        overflow: hidden;\n        width: 9px;\n        height: 3px;\n        position: relative;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 100%;\n        height: 100%;\n      }\n      \n      .letter{\n        font-size: ").concat(this.attrs.fontSize, "px;\n        color: ").concat(this.attrs.textColor, ";\n        left: 2.5px;\n        position: relative;\n        text-align: center;\n        top : ").concat(this.attrs.width, "px;\n        width: 100%;\n        background-color:#ffffff00\n        \n      }\n\n      .sub{\n        position: absolute;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        overflow: hidden;\n        top: 33%;\n        transform: rotate(-10deg);\n        width: 400px;\n        height: 400px;\n\n      }\n\n      .sub span{\n        font-size: ").concat(this.attrs.fontSize * 0.8, "px;\n        position: relative;\n        top:100%;\n        letter-spacing: 3px;\n      }\n    ");
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var array = this.attrs.title.split("");
      var html = "";

      for (var i = 0; i < array.length; i++) {
        html += "<span class='letter letter".concat(i + 1, "'>").concat(array[i], "</span>");
      }

      var word = new motorcortex.HTMLClip({
        css: this.css,
        html: " <div class=\"wrapper\" >".concat(html, " </div>"),
        selector: ".word"
      });
      this.addIncident(word, 0);
      var circleScale = new motorcortex.CSSEffect({
        animatedAttrs: {
          width: "".concat(this.attrs.width, "px"),
          height: "".concat(this.attrs.width, "px")
        },
        initialValues: {
          width: "0px",
          height: "0px"
        }
      }, {
        duration: 500,
        selector: ".circle",
        easing: "easeOutExpo"
      });

      for (var _i = 0; _i < array.length; _i++) {
        var textAnimation = new motorcortex.CSSEffect({
          animatedAttrs: {
            top: "0px",
            opacity: 1
          }
        }, {
          duration: 500,
          selector: ".letter" + (_i + 1),
          easing: "easeOutExpo"
        });
        word.addIncident(textAnimation, 500 + 100 * (_i + 1));
      }

      var circleScaleDown = new motorcortex.CSSEffect({
        animatedAttrs: {
          width: "".concat(this.attrs.width * 0.8, "px"),
          height: "".concat(this.attrs.width * 0.8, "px")
        } // initialValues:{
        //   width: `${this.attrs.width}px`,
        //   height: `${this.attrs.width}px`,
        // }

      }, {
        duration: 600,
        selector: ".circle",
        easing: "easeOutElastic"
      });
      var wrapperDown = new motorcortex.CSSEffect({
        animatedAttrs: {
          width: "".concat(this.attrs.width * 0.8, "px"),
          height: "".concat(this.attrs.width * 0.8, "px"),
          transform: {
            rotate: "10deg"
          }
        },
        attrs: {}
      }, {
        duration: 600,
        selector: ".wrapper",
        easing: "easeOutElastic"
      });
      var maskDown = new motorcortex.CSSEffect({
        animatedAttrs: {
          maskSize: "".concat(this.attrs.width * 0.8, "px"),
          transform: {
            rotate: "-10deg"
          }
        },
        attrs: {}
      }, {
        duration: 600,
        selector: ".circle",
        easing: "easeOutElastic"
      });
      var subOut = new motorcortex.CSSEffect({
        animatedAttrs: {
          top: "0px"
        },
        attrs: {}
      }, {
        duration: 600,
        selector: ".sub span",
        easing: "easeOutElastic"
      });
      var circleScaleDownEnd = new motorcortex.CSSEffect({
        animatedAttrs: {
          transform: {
            scale: 0
          }
        },
        initialValues: {
          transform: {
            scale: 1
          }
        },
        attrs: {}
      }, {
        duration: 600,
        selector: ".circle,.sub span,.sub",
        easing: "easeOutElastic"
      });
      word.addIncident(wrapperDown, 2000);
      this.addIncident(circleScaleDown, 2000);
      this.addIncident(maskDown, 2000);
      this.addIncident(subOut, 2000);
      this.addIncident(circleScale, 0);
      var delayEnd = this.attrs.delayEnd || 0;

      if (!this.attrs.stopOnLast) {
        this.addIncident(circleScaleDownEnd, 3600 + delayEnd);
      }
    }
  }]);

  return Circle;
}(motorcortex.HTMLClip);

var LogoBox = /*#__PURE__*/function (_HTMLClip) {
  _inherits(LogoBox, _HTMLClip);

  var _super = _createSuper(LogoBox);

  function LogoBox() {
    _classCallCheck(this, LogoBox);

    return _super.apply(this, arguments);
  }

  _createClass(LogoBox, [{
    key: "html",
    get: function get() {
      return "\n      <div class=\"wrapper\">\n        <div class=\"onemore\">\n          <div class=\"redLineContainer\">\n            <div class=\"yellow\">\n              <div class=\"logo\"><img src=\"".concat(this.attrs.logoUrl, "\" alt=\"Italian Trulli\"></div>\n            </div>\n            <div class=\"redLine\">\n              <div class=\"text text1\">").concat(this.attrs.subTitle1, "</div>\n              <div class=\"text text2\">").concat(this.attrs.subTitle2, "</div>\n              <div class=\"text text3\">").concat(this.attrs.subTitle3, "</div>\n            </div>\n           \n          </div>\n        </div>\n      </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n      .wrapper{\n        white-space: nowrap;\n        overflow: hidden;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        font-family: ".concat(this.attrs.fontFamily, " !important;\n      }\n\n      .redLineContainer {\n        white-space: nowrap;\n        width: 0px;\n        overflow: hidden;\n        background: ").concat(this.attrs.textColor, ";\n        display: flex;\n        justify-content: center;\n        align-content: center;\n        opacity: 0;\n        border: ").concat(1 * this.attrs.size, "px solid ").concat(this.attrs.textColor, ";\n      }\n      \n      .redLine {\n        position: relative;\n        right:  100px;\n        overflow: hidden;\n        background: ").concat(this.attrs.bgColor, ";\n        width: 100%;\n        display: flex;\n        justify-content: center;\n        flex-direction: column;\n        height: ").concat(70 * this.attrs.size, "px;\n      }\n      \n      .yellow{\n        width: 0px;\n        overflow: hidden;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .logo img{\n        width: ").concat(50 * this.attrs.size, "px;\n      }\n      \n      .logo{\n        display: flex;\n        align-items: center;\n      }\n      \n      .text{ \n        left: ").concat(-100 * this.attrs.size, "px;\n        position: relative;\n        display: flex;\n        align-items: center;\n        height: ").concat(22 * this.attrs.size, "px;\n        padding-left: 8%;\n        color: ").concat(this.attrs.textColor, ";\n        font-size :").concat(14 * this.attrs.size, "px;\n      }\n    ");
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var opacity = new motorcortex.CSSEffect({
        animatedAttrs: {
          opacity: 1
        },
        attrs: {}
      }, {
        duration: 1,
        selector: ".redLineContainer"
      });
      var border = new motorcortex.CSSEffect({
        animatedAttrs: {
          right: "0px"
        },
        attrs: {}
      }, {
        duration: 1000,
        selector: ".redLine"
      });
      var conteiner = new motorcortex.CSSEffect({
        animatedAttrs: {
          width: "".concat(this.attrs.width * 0.75 * this.attrs.size, "px")
        },
        attrs: {}
      }, {
        duration: 1000,
        selector: ".redLineContainer"
      });

      for (var i = 1; i <= 3; i++) {
        var textLeft = new motorcortex.CSSEffect({
          animatedAttrs: {
            left: "0px"
          },
          attrs: {}
        }, {
          duration: 500 * i,
          selector: ".text" + i,
          easing: "easeOutExpo"
        });
        this.addIncident(textLeft, 500);
      }

      var conteinerMore = new motorcortex.CSSEffect({
        animatedAttrs: {
          width: "".concat(this.attrs.width * this.attrs.size, "px")
        },
        attrs: {}
      }, {
        duration: 500,
        selector: ".redLineContainer"
      });
      var yellowW = new motorcortex.CSSEffect({
        animatedAttrs: {
          width: "".concat(80 * this.attrs.size, "px")
        },
        attrs: {}
      }, {
        duration: 500,
        selector: ".yellow"
      });
      var end = new motorcortex.CSSEffect({
        animatedAttrs: {
          width: "0%"
        },
        initialValues: {
          width: "100%"
        },
        attrs: {}
      }, {
        duration: 500,
        selector: ".wrapper"
      });
      this.addIncident(opacity, 0);
      this.addIncident(border, 0);
      this.addIncident(conteiner, 0);
      this.addIncident(conteinerMore, 1500);
      this.addIncident(yellowW, 1500);

      if (!this.attrs.stopOnLast) {
        this.addIncident(end, 3000);
      }
    }
  }]);

  return LogoBox;
}(motorcortex.HTMLClip);

var fails = fails$g;

var arrayMethodIsStrict$1 = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () {
      return 1;
    }, 1);
  });
};

var $$2 = _export;
var uncurryThis$2 = functionUncurryThis;
var IndexedObject$1 = indexedObject;
var toIndexedObject = toIndexedObject$5;
var arrayMethodIsStrict = arrayMethodIsStrict$1;
var un$Join = uncurryThis$2([].join);
var ES3_STRINGS = IndexedObject$1 != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ','); // `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join

$$2({
  target: 'Array',
  proto: true,
  forced: ES3_STRINGS || !STRICT_METHOD
}, {
  join: function join(separator) {
    return un$Join(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});

var uncurryThis$1 = functionUncurryThis;
var aCallable = aCallable$2;
var NATIVE_BIND = functionBindNative;
var bind$1 = uncurryThis$1(uncurryThis$1.bind); // optional / simple context binding

var functionBindContext = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind$1(fn, that) : function
    /* ...args */
  () {
    return fn.apply(that, arguments);
  };
};

var bind = functionBindContext;
var uncurryThis = functionUncurryThis;
var IndexedObject = indexedObject;
var toObject$1 = toObject$4;
var lengthOfArrayLike$1 = lengthOfArrayLike$5;
var arraySpeciesCreate = arraySpeciesCreate$2;
var push = uncurryThis([].push); // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation

var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject$1($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var length = lengthOfArrayLike$1(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;

    for (; length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);

      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3:
            return true;
          // some

          case 5:
            return value;
          // find

          case 6:
            return index;
          // findIndex

          case 2:
            push(target, value);
          // filter
        } else switch (TYPE) {
          case 4:
            return false;
          // every

          case 7:
            push(target, value);
          // filterReject
        }
      }
    }

    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

var arrayIteration = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};

var $$1 = _export;
var $map = arrayIteration.map;
var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$2;
var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map'); // `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species

$$1({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT
}, {
  map: function map(callbackfn
  /* , thisArg */
  ) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var RightOpacity = /*#__PURE__*/function (_HTMLClip) {
  _inherits(RightOpacity, _HTMLClip);

  var _super = _createSuper(RightOpacity);

  function RightOpacity() {
    _classCallCheck(this, RightOpacity);

    return _super.apply(this, arguments);
  }

  _createClass(RightOpacity, [{
    key: "html",
    get: function get() {
      this.list = this.attrs.text.split("");
      var divList = this.list.map(function (e, i) {
        return "<div class=\"letter letter-item-".concat(i, "\">").concat(e, "</div>");
      }).join("");
      return "\n      <div class=\"wrapper\">\n        <div class=\"letter-wrapper\">\n          ".concat(divList, "\n        </div>\n      </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      var stroke = this.attrs.stroke === true ? "-webkit-text-stroke:".concat(this.attrs.strokeSize, "px ").concat(this.attrs.strokeColor, ";") : "";
      return "\n      .wrapper{\n        width:".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        white-space: nowrap;\n        overflow: hidden;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .letter{\n        font-size:").concat(this.attrs.fontSize, "px;\n        color:").concat(this.attrs.color, ";\n        ").concat(stroke, "\n        text-transform:uppercase;\n        font-family: ").concat(this.attrs.fontFamily, ";\n        position: absolute;\n      }\n\n      .letter-wrapper{\n        width:").concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        position: relative;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n    ");
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var left = new motorcortex.CSSEffect({
        animatedAttrs: {
          left: "@expression(index * ".concat(this.attrs.width / this.list.length, ")px")
        },
        initialValues: {
          left: "@expression((index * ".concat(this.attrs.width / this.list.length, ")+").concat(this.attrs.width / 2, ")px")
        }
      }, {
        duration: 1,
        selector: ".letter",
        delay: "@stagger(0, 0)"
      });
      this.addIncident(left, 0);
      var opacity = new motorcortex.CSSEffect({
        animatedAttrs: {
          opacity: 1 // left: `@expression(index * ${this.attrs.width / this.list.length})px`

        },
        initialValues: {
          opacity: 0 // left: `@expression((index * ${this.attrs.width / this.list.length})+${this.attrs.width / 2})px`

        }
      }, {
        duration: 300,
        selector: ".letter",
        easing: "easeOutExpo",
        delay: "@stagger(0, 300)"
      });
      this.addIncident(opacity, 10);
      var left2 = new motorcortex.CSSEffect({
        animatedAttrs: {
          left: "0px"
        },
        initialValues: {
          left: "".concat(this.attrs.width * 0.5, "px")
        }
      }, {
        duration: 300,
        selector: ".letter-wrapper",
        easing: "easeOutExpo" // delay: "@stagger(0, 300)"

      });
      this.addIncident(left2, 0);
      var leftLetter = new motorcortex.CSSEffect({
        animatedAttrs: {
          left: "".concat(this.attrs.width / 2, "px")
        }
      }, {
        duration: 300,
        selector: ".letter",
        easing: "easeInQuad",
        delay: "@stagger(0, 300,0.5,easeInQuad,omni)"
      });
      this.addIncident(leftLetter, this.attrs.exitTime);
      var opacityback = new motorcortex.CSSEffect({
        animatedAttrs: {
          opacity: 0
        }
      }, {
        duration: 300,
        selector: ".letter"
      });
      this.addIncident(opacityback, this.calculatedDuration - 300);
    }
  }]);

  return RightOpacity;
}(motorcortex.HTMLClip);

var LetterScale = /*#__PURE__*/function (_HTMLClip) {
  _inherits(LetterScale, _HTMLClip);

  var _super = _createSuper(LetterScale);

  function LetterScale() {
    _classCallCheck(this, LetterScale);

    return _super.apply(this, arguments);
  }

  _createClass(LetterScale, [{
    key: "html",
    get: function get() {
      this.list = this.attrs.text.split("");
      var divList = this.list.map(function (e, i) {
        return "<div class=\"letter letter-item-".concat(i, "\">").concat(e, "</div>");
      }).join("");
      return "\n      <div class=\"wrapper\">\n        <div class=\"letter-wrapper\">\n          ".concat(divList, "\n        </div>\n      </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      var stroke = this.attrs.stroke === true ? "-webkit-text-stroke:".concat(this.attrs.strokeSize, "px ").concat(this.attrs.strokeColor, ";") : "";
      return "\n      .wrapper{\n        width:".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        white-space: nowrap;\n        overflow: hidden;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .letter{\n        font-size:").concat(this.attrs.fontSize, "px;\n        color:").concat(this.attrs.color, ";\n        text-transform:uppercase;\n        font-family: ").concat(this.attrs.fontFamily, ";\n        position: relative;\n        ").concat(stroke, "\n      }\n      \n      .letter-wrapper{\n        width:").concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        position: relative;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n    ");
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var left = new motorcortex.CSSEffect({
        animatedAttrs: {
          fontSize: "".concat(this.attrs.fontSize, "px")
        },
        initialValues: {
          fontSize: "".concat(this.attrs.fontSize * 0.7, "px")
        }
      }, {
        duration: 600,
        selector: ".letter",
        easing: "easeOutExpo",
        delay: "@stagger(0, 600,0.5,linear,omni)"
      });
      this.addIncident(left, 0);
    }
  }]);

  return LetterScale;
}(motorcortex.HTMLClip);

var toObject = toObject$4;
var toAbsoluteIndex = toAbsoluteIndex$3;
var lengthOfArrayLike = lengthOfArrayLike$5; // `Array.prototype.fill` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.fill

var arrayFill = function fill(value
/* , start = 0, end = @length */
) {
  var O = toObject(this);
  var length = lengthOfArrayLike(O);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);

  while (endPos > index) O[index++] = value;

  return O;
};

var wellKnownSymbol = wellKnownSymbol$a;
var create = objectCreate;
var definePropertyModule = objectDefineProperty;
var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype; // Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
} // add a key to Array.prototype[@@unscopables]


var addToUnscopables$1 = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

var $ = _export;
var fill = arrayFill;
var addToUnscopables = addToUnscopables$1; // `Array.prototype.fill` method
// https://tc39.es/ecma262/#sec-array.prototype.fill

$({
  target: 'Array',
  proto: true
}, {
  fill: fill
}); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

addToUnscopables('fill');

var CircularText = /*#__PURE__*/function (_HTMLClip) {
  _inherits(CircularText, _HTMLClip);

  var _super = _createSuper(CircularText);

  function CircularText() {
    _classCallCheck(this, CircularText);

    return _super.apply(this, arguments);
  }

  _createClass(CircularText, [{
    key: "html",
    get: function get() {
      return "\n    <div class=\"wrapper\">\n      <div class=\"circle\">\n        <svg viewBox=\"0 0 ".concat(this.attrs.viewBox, " ").concat(this.attrs.viewBox, "\">\n          <path d=\"M ").concat(this.attrs.viewBox / 2 - this.attrs.path, ",").concat(this.attrs.viewBox / 2, " a ").concat(this.attrs.path, ", ").concat(this.attrs.path, " 0 1, 1 0,1 z\" id=\"circular\" />\n          <text class=\"text\"><textPath xlink:href=\"#circular\">\n          ").concat(this.attrs.text, "\n            </textPath>\n          </text>\n        </svg>\n      </div>\n    </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n      .wrapper{\n        width:".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        white-space: nowrap;\n        overflow: hidden;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        font-family: ").concat(this.attrs.fontFamily, " !important;\n      }\n\n      .circle path {\n        fill: ").concat(this.attrs.fill, ";\n        1px solid black;\n      }\n\n      .circle {\n        width:").concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .circle svg {\n        display: block;\n        overflow: visible;\n        flex:1;\n      }\n\n      .text{\n        font-size: ").concat(this.attrs.fontSize, "px;\n      }\n      \n      .circle text {\n        fill: ").concat(this.attrs.color, ";\n        font-family: ").concat(this.attrs.fontFamily, ";\n      }\n    ");
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var left = new motorcortex.CSSEffect({
        animatedAttrs: {
          transform: {
            rotate: "360deg"
          }
        }
      }, {
        duration: 3000,
        selector: ".circle svg"
      });
      this.addIncident(left, 0);
    }
  }]);

  return CircularText;
}(motorcortex.HTMLClip);

var _COLOR = "color";
var RotatedLIneVal = {
  width: {
    optional: false,
    type: "number",
    min: 0
  },
  size: {
    type: "enum",
    values: ["S", "M", "L", "XL"]
  },
  lineColor: {
    optional: true,
    type: _COLOR
  },
  textColor: {
    optional: true,
    type: _COLOR
  },
  subTitle1: {
    optional: false,
    type: "string"
  },
  subTitle2: {
    optional: false,
    type: "string"
  },
  subTitle3: {
    optional: false,
    type: "string"
  },
  title: {
    optional: false,
    type: "string"
  },
  stopOnLast: {
    optional: false,
    type: "boolean"
  },
  delayEnd: {
    optional: true,
    type: "number",
    min: 0
  }
};
var RolingTextVal = {
  width: {
    optional: false,
    type: "number",
    min: 0
  },
  size: {
    type: "enum",
    values: ["S", "M", "L", "XL", "XXL", "XXXL"]
  },
  lineColor: {
    optional: true,
    type: _COLOR
  },
  textColor: {
    optional: true,
    type: _COLOR
  },
  subTitle1: {
    optional: false,
    type: "string"
  },
  subTitle2: {
    optional: false,
    type: "string"
  },
  subTitle3: {
    optional: false,
    type: "string"
  },
  stopOnLast: {
    optional: false,
    type: "boolean"
  },
  delayEnd: {
    optional: true,
    type: "number",
    min: 0
  }
};
var RotatadLineRevealVal = {
  width: {
    optional: false,
    type: "number",
    min: 0
  },
  size: {
    type: "enum",
    values: ["S", "M", "L"]
  },
  lineColor: {
    optional: true,
    type: _COLOR
  },
  textColor: {
    optional: true,
    type: _COLOR
  },
  title: {
    optional: false,
    type: "string"
  },
  subtitle: {
    optional: false,
    type: "string"
  },
  stopOnLast: {
    optional: false,
    type: "boolean"
  },
  leftEnd: {
    optional: false,
    type: "number",
    min: 0
  },
  delayEnd: {
    optional: true,
    type: "number",
    min: 0
  }
};
var SvgBorderVal = {
  width: {
    optional: true,
    type: "number",
    min: 0
  },
  size: {
    type: "enum",
    values: ["S", "M", "L"]
  },
  lineColor: {
    optional: true,
    type: _COLOR
  },
  textColor: {
    optional: true,
    type: _COLOR
  },
  title: {
    optional: false,
    type: "string"
  },
  slogan: {
    optional: false,
    type: "string"
  },
  subTitle: {
    optional: false,
    type: "string"
  },
  stopOnLast: {
    optional: false,
    type: "boolean"
  },
  delayEnd: {
    optional: true,
    type: "number",
    min: 0
  },
  borderGap: {
    optional: false,
    type: "number",
    min: 0
  }
};
var CircleVal = {
  width: {
    optional: true,
    type: "number",
    min: 0
  },
  fontsize: {
    optional: true,
    type: "number",
    min: 1
  },
  circleColor: {
    optional: true,
    type: _COLOR
  },
  textColor: {
    optional: true,
    type: _COLOR
  },
  title: {
    optional: false,
    type: "string"
  },
  subTitle: {
    optional: false,
    type: "string"
  },
  stopOnLast: {
    optional: false,
    type: "boolean"
  },
  delayEnd: {
    optional: true,
    type: "number",
    min: 0
  }
};
var SvgDrawVal = {
  width: {
    optional: true,
    type: "number",
    min: 0
  },
  size: {
    type: "enum",
    values: ["S", "M", "L"]
  },
  lineColor: {
    optional: true,
    type: _COLOR
  },
  textColor: {
    optional: true,
    type: _COLOR
  },
  strokeDashOffset: {
    optional: true,
    type: "number"
  },
  StrokeDashArray: {
    optional: true,
    type: "number"
  },
  erase: {
    optional: true,
    type: "boolean"
  },
  svg: {
    optional: true,
    type: "string"
  },
  stopOnLast: {
    optional: false,
    type: "boolean"
  },
  delayEnd: {
    optional: true,
    type: "number",
    min: 0
  }
};
var RigthOpacityValidationVal = {
  width: {
    optional: false,
    type: "number",
    min: 0
  },
  height: {
    optional: false,
    type: "number",
    min: 0
  },
  text: {
    optional: false,
    type: "string"
  },
  color: {
    optional: true,
    type: _COLOR
  },
  fontSize: {
    optional: false,
    type: "number",
    min: 0
  },
  stroke: {
    optional: false,
    type: "boolean"
  },
  strokeSize: {
    optional: true,
    type: "number",
    min: 0
  },
  strokeColor: {
    optional: true,
    type: _COLOR
  },
  fontFamily: {
    optional: false,
    type: "string"
  },
  exitTime: {
    optional: false,
    type: "number",
    min: 0
  }
};
var LetterScaleValidationVal = {
  width: {
    optional: false,
    type: "number",
    min: 0
  },
  height: {
    optional: false,
    type: "number",
    min: 0
  },
  text: {
    optional: false,
    type: "string"
  },
  color: {
    optional: true,
    type: _COLOR
  },
  fontSize: {
    optional: false,
    type: "number",
    min: 0
  },
  stroke: {
    optional: false,
    type: "boolean"
  },
  strokeSize: {
    optional: true,
    type: "number",
    min: 0
  },
  strokeColor: {
    optional: true,
    type: _COLOR
  },
  fontFamily: {
    optional: false,
    type: "string"
  }
};
var CircularTextValidation = {
  width: {
    optional: false,
    type: "number",
    min: 0
  },
  height: {
    optional: false,
    type: "number",
    min: 0
  },
  color: {
    optional: true,
    type: _COLOR
  },
  text: {
    optional: false,
    type: "string"
  },
  fontSize: {
    optional: false,
    type: "number",
    min: 0
  },
  viewBox: {
    optional: false,
    type: "number"
  },
  path: {
    optional: false,
    type: "number",
    min: 0
  },
  fill: {
    optional: false,
    type: _COLOR
  },
  fontFamily: {
    optional: false,
    type: "string"
  }
};

var name = "@donkeyclip/motorcortex-animetitles";
var version = "1.0.6";

var index = {
  npm_name: name,
  version: version,
  incidents: [{
    exportable: RotatedLine,
    name: "RotatedLine",
    attributesValidationRules: RotatedLIneVal
  }, {
    exportable: RolingText,
    name: "RolingText",
    attributesValidationRules: RolingTextVal
  }, {
    exportable: SvgBorder,
    name: "SvgBorder",
    attributesValidationRules: SvgBorderVal
  }, {
    exportable: RotatadLineReveal,
    name: "RotatadLineReveal",
    attributesValidationRules: RotatadLineRevealVal
  }, {
    exportable: SvgDraw,
    name: "SvgDraw",
    attributesValidationRules: SvgDrawVal
  }, {
    exportable: Circle,
    name: "Circle",
    attributesValidationRules: CircleVal
  }, {
    exportable: LogoBox,
    name: "LogoBox"
  }, {
    exportable: RightOpacity,
    name: "RightOpacity",
    attributesValidationRules: RigthOpacityValidationVal
  }, //todo
  // {
  //   exportable: FlushStroke,
  //   name: "FlushStroke"
  //   attributesValidationRules: Circle
  // },
  {
    exportable: LetterScale,
    name: "LetterScale",
    attributesValidationRules: LetterScaleValidationVal
  }, {
    exportable: CircularText,
    name: "CircularText",
    attributesValidationRules: CircularTextValidation
  }]
};

module.exports = index;
