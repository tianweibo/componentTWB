(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue'), require('http'), require('https'), require('url'), require('stream'), require('assert'), require('zlib')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue', 'http', 'https', 'url', 'stream', 'assert', 'zlib'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.InteractiveCom = {}, global.Vue, global.require$$1, global.require$$2, global.require$$0$1, global.require$$3, global.require$$4, global.require$$8));
})(this, (function (exports, vue, require$$1, require$$2, require$$0$1, require$$3, require$$4, require$$8) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var require$$1__default = /*#__PURE__*/_interopDefaultLegacy(require$$1);
  var require$$2__default = /*#__PURE__*/_interopDefaultLegacy(require$$2);
  var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0$1);
  var require$$3__default = /*#__PURE__*/_interopDefaultLegacy(require$$3);
  var require$$4__default = /*#__PURE__*/_interopDefaultLegacy(require$$4);
  var require$$8__default = /*#__PURE__*/_interopDefaultLegacy(require$$8);

  var script$3 = vue.defineComponent({
      name: 'l-text1',
      props: {
          msg: String,
      },
  });

  const _withScopeId = n => (vue.pushScopeId("data-v-6bf95b7a"),n=n(),vue.popScopeId(),n);
  const _hoisted_1$3 = /*#__PURE__*/vue.createTextVNode("Primary Button");
  const _hoisted_2$3 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/vue.createElementVNode("h1", { class: "hello" }, "我是文本组件1", -1 /* HOISTED */));
  const _hoisted_3$3 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/vue.createElementVNode("span", { style: {"color":"grey"} }, "222", -1 /* HOISTED */));

  function render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_a_button = vue.resolveComponent("a-button");

    return (vue.openBlock(), vue.createElementBlock("div", null, [
      vue.createVNode(_component_a_button, { type: "primary" }, {
        default: vue.withCtx(() => [
          _hoisted_1$3
        ]),
        _: 1 /* STABLE */
      }),
      _hoisted_2$3,
      _hoisted_3$3
    ]))
  }

  script$3.render = render$3;
  script$3.__scopeId = "data-v-6bf95b7a";
  script$3.__file = "src/components/LText/LText.vue";

  script$3.install = (app) => {
      app.component(script$3.name, script$3);
  };

  var script$2 = vue.defineComponent({
      name: 'l-image1',
      props: {
          msg: String,
      },
  });

  const _hoisted_1$2 = { class: "hello" };
  const _hoisted_2$2 = /*#__PURE__*/vue.createElementVNode("h1", null, "我是图片组件2-test", -1 /* HOISTED */);
  const _hoisted_3$2 = [
    _hoisted_2$2
  ];

  function render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$2, _hoisted_3$2))
  }

  script$2.render = render$2;
  script$2.__file = "src/components/LImage/LImage.vue";

  script$2.install = (app) => {
      app.component(script$2.name, script$2);
  };

  var axios$2 = {exports: {}};

  var bind$2 = function bind(fn, thisArg) {
    return function wrap() {
      var args = new Array(arguments.length);
      for (var i = 0; i < args.length; i++) {
        args[i] = arguments[i];
      }
      return fn.apply(thisArg, args);
    };
  };

  var bind$1 = bind$2;

  // utils is a library of generic helper functions non-specific to axios

  var toString = Object.prototype.toString;

  /**
   * Determine if a value is an Array
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an Array, otherwise false
   */
  function isArray$1(val) {
    return toString.call(val) === '[object Array]';
  }

  /**
   * Determine if a value is undefined
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if the value is undefined, otherwise false
   */
  function isUndefined(val) {
    return typeof val === 'undefined';
  }

  /**
   * Determine if a value is a Buffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Buffer, otherwise false
   */
  function isBuffer$1(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
      && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
  }

  /**
   * Determine if a value is an ArrayBuffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an ArrayBuffer, otherwise false
   */
  function isArrayBuffer(val) {
    return toString.call(val) === '[object ArrayBuffer]';
  }

  /**
   * Determine if a value is a FormData
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an FormData, otherwise false
   */
  function isFormData(val) {
    return (typeof FormData !== 'undefined') && (val instanceof FormData);
  }

  /**
   * Determine if a value is a view on an ArrayBuffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
   */
  function isArrayBufferView(val) {
    var result;
    if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
      result = ArrayBuffer.isView(val);
    } else {
      result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
    }
    return result;
  }

  /**
   * Determine if a value is a String
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a String, otherwise false
   */
  function isString(val) {
    return typeof val === 'string';
  }

  /**
   * Determine if a value is a Number
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Number, otherwise false
   */
  function isNumber(val) {
    return typeof val === 'number';
  }

  /**
   * Determine if a value is an Object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an Object, otherwise false
   */
  function isObject(val) {
    return val !== null && typeof val === 'object';
  }

  /**
   * Determine if a value is a plain Object
   *
   * @param {Object} val The value to test
   * @return {boolean} True if value is a plain Object, otherwise false
   */
  function isPlainObject(val) {
    if (toString.call(val) !== '[object Object]') {
      return false;
    }

    var prototype = Object.getPrototypeOf(val);
    return prototype === null || prototype === Object.prototype;
  }

  /**
   * Determine if a value is a Date
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Date, otherwise false
   */
  function isDate(val) {
    return toString.call(val) === '[object Date]';
  }

  /**
   * Determine if a value is a File
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a File, otherwise false
   */
  function isFile(val) {
    return toString.call(val) === '[object File]';
  }

  /**
   * Determine if a value is a Blob
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Blob, otherwise false
   */
  function isBlob(val) {
    return toString.call(val) === '[object Blob]';
  }

  /**
   * Determine if a value is a Function
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Function, otherwise false
   */
  function isFunction$1(val) {
    return toString.call(val) === '[object Function]';
  }

  /**
   * Determine if a value is a Stream
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Stream, otherwise false
   */
  function isStream(val) {
    return isObject(val) && isFunction$1(val.pipe);
  }

  /**
   * Determine if a value is a URLSearchParams object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a URLSearchParams object, otherwise false
   */
  function isURLSearchParams(val) {
    return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
  }

  /**
   * Trim excess whitespace off the beginning and end of a string
   *
   * @param {String} str The String to trim
   * @returns {String} The String freed of excess whitespace
   */
  function trim(str) {
    return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
  }

  /**
   * Determine if we're running in a standard browser environment
   *
   * This allows axios to run in a web worker, and react-native.
   * Both environments support XMLHttpRequest, but not fully standard globals.
   *
   * web workers:
   *  typeof window -> undefined
   *  typeof document -> undefined
   *
   * react-native:
   *  navigator.product -> 'ReactNative'
   * nativescript
   *  navigator.product -> 'NativeScript' or 'NS'
   */
  function isStandardBrowserEnv() {
    if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                             navigator.product === 'NativeScript' ||
                                             navigator.product === 'NS')) {
      return false;
    }
    return (
      typeof window !== 'undefined' &&
      typeof document !== 'undefined'
    );
  }

  /**
   * Iterate over an Array or an Object invoking a function for each item.
   *
   * If `obj` is an Array callback will be called passing
   * the value, index, and complete array for each item.
   *
   * If 'obj' is an Object callback will be called passing
   * the value, key, and complete object for each property.
   *
   * @param {Object|Array} obj The object to iterate
   * @param {Function} fn The callback to invoke for each item
   */
  function forEach(obj, fn) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === 'undefined') {
      return;
    }

    // Force an array if not already something iterable
    if (typeof obj !== 'object') {
      /*eslint no-param-reassign:0*/
      obj = [obj];
    }

    if (isArray$1(obj)) {
      // Iterate over array values
      for (var i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      // Iterate over object keys
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          fn.call(null, obj[key], key, obj);
        }
      }
    }
  }

  /**
   * Accepts varargs expecting each argument to be an object, then
   * immutably merges the properties of each object and returns result.
   *
   * When multiple objects contain the same key the later object in
   * the arguments list will take precedence.
   *
   * Example:
   *
   * ```js
   * var result = merge({foo: 123}, {foo: 456});
   * console.log(result.foo); // outputs 456
   * ```
   *
   * @param {Object} obj1 Object to merge
   * @returns {Object} Result of all merge properties
   */
  function merge$1(/* obj1, obj2, obj3, ... */) {
    var result = {};
    function assignValue(val, key) {
      if (isPlainObject(result[key]) && isPlainObject(val)) {
        result[key] = merge$1(result[key], val);
      } else if (isPlainObject(val)) {
        result[key] = merge$1({}, val);
      } else if (isArray$1(val)) {
        result[key] = val.slice();
      } else {
        result[key] = val;
      }
    }

    for (var i = 0, l = arguments.length; i < l; i++) {
      forEach(arguments[i], assignValue);
    }
    return result;
  }

  /**
   * Extends object a by mutably adding to it the properties of object b.
   *
   * @param {Object} a The object to be extended
   * @param {Object} b The object to copy properties from
   * @param {Object} thisArg The object to bind function to
   * @return {Object} The resulting value of object a
   */
  function extend(a, b, thisArg) {
    forEach(b, function assignValue(val, key) {
      if (thisArg && typeof val === 'function') {
        a[key] = bind$1(val, thisArg);
      } else {
        a[key] = val;
      }
    });
    return a;
  }

  /**
   * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
   *
   * @param {string} content with BOM
   * @return {string} content value without BOM
   */
  function stripBOM(content) {
    if (content.charCodeAt(0) === 0xFEFF) {
      content = content.slice(1);
    }
    return content;
  }

  var utils$h = {
    isArray: isArray$1,
    isArrayBuffer: isArrayBuffer,
    isBuffer: isBuffer$1,
    isFormData: isFormData,
    isArrayBufferView: isArrayBufferView,
    isString: isString,
    isNumber: isNumber,
    isObject: isObject,
    isPlainObject: isPlainObject,
    isUndefined: isUndefined,
    isDate: isDate,
    isFile: isFile,
    isBlob: isBlob,
    isFunction: isFunction$1,
    isStream: isStream,
    isURLSearchParams: isURLSearchParams,
    isStandardBrowserEnv: isStandardBrowserEnv,
    forEach: forEach,
    merge: merge$1,
    extend: extend,
    trim: trim,
    stripBOM: stripBOM
  };

  var utils$g = utils$h;

  function encode$1(val) {
    return encodeURIComponent(val).
      replace(/%3A/gi, ':').
      replace(/%24/g, '$').
      replace(/%2C/gi, ',').
      replace(/%20/g, '+').
      replace(/%5B/gi, '[').
      replace(/%5D/gi, ']');
  }

  /**
   * Build a URL by appending params to the end
   *
   * @param {string} url The base of the url (e.g., http://www.google.com)
   * @param {object} [params] The params to be appended
   * @returns {string} The formatted url
   */
  var buildURL$3 = function buildURL(url, params, paramsSerializer) {
    /*eslint no-param-reassign:0*/
    if (!params) {
      return url;
    }

    var serializedParams;
    if (paramsSerializer) {
      serializedParams = paramsSerializer(params);
    } else if (utils$g.isURLSearchParams(params)) {
      serializedParams = params.toString();
    } else {
      var parts = [];

      utils$g.forEach(params, function serialize(val, key) {
        if (val === null || typeof val === 'undefined') {
          return;
        }

        if (utils$g.isArray(val)) {
          key = key + '[]';
        } else {
          val = [val];
        }

        utils$g.forEach(val, function parseValue(v) {
          if (utils$g.isDate(v)) {
            v = v.toISOString();
          } else if (utils$g.isObject(v)) {
            v = JSON.stringify(v);
          }
          parts.push(encode$1(key) + '=' + encode$1(v));
        });
      });

      serializedParams = parts.join('&');
    }

    if (serializedParams) {
      var hashmarkIndex = url.indexOf('#');
      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }

      url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }

    return url;
  };

  var utils$f = utils$h;

  function InterceptorManager$1() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  InterceptorManager$1.prototype.use = function use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled: fulfilled,
      rejected: rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  };

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   */
  InterceptorManager$1.prototype.eject = function eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  };

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   */
  InterceptorManager$1.prototype.forEach = function forEach(fn) {
    utils$f.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  };

  var InterceptorManager_1 = InterceptorManager$1;

  var utils$e = utils$h;

  var normalizeHeaderName$1 = function normalizeHeaderName(headers, normalizedName) {
    utils$e.forEach(headers, function processHeader(value, name) {
      if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
        headers[normalizedName] = value;
        delete headers[name];
      }
    });
  };

  /**
   * Update an Error with the specified config, error code, and response.
   *
   * @param {Error} error The error to update.
   * @param {Object} config The config.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   * @returns {Error} The error.
   */
  var enhanceError$3 = function enhanceError(error, config, code, request, response) {
    error.config = config;
    if (code) {
      error.code = code;
    }

    error.request = request;
    error.response = response;
    error.isAxiosError = true;

    error.toJSON = function toJSON() {
      return {
        // Standard
        message: this.message,
        name: this.name,
        // Microsoft
        description: this.description,
        number: this.number,
        // Mozilla
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        // Axios
        config: this.config,
        code: this.code
      };
    };
    return error;
  };

  var enhanceError$2 = enhanceError$3;

  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {Object} config The config.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   * @returns {Error} The created error.
   */
  var createError$3 = function createError(message, config, code, request, response) {
    var error = new Error(message);
    return enhanceError$2(error, config, code, request, response);
  };

  var createError$2 = createError$3;

  /**
   * Resolve or reject a Promise based on response status.
   *
   * @param {Function} resolve A function that resolves the promise.
   * @param {Function} reject A function that rejects the promise.
   * @param {object} response The response.
   */
  var settle$2 = function settle(resolve, reject, response) {
    var validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) {
      resolve(response);
    } else {
      reject(createError$2(
        'Request failed with status code ' + response.status,
        response.config,
        null,
        response.request,
        response
      ));
    }
  };

  var utils$d = utils$h;

  var cookies$1 = (
    utils$d.isStandardBrowserEnv() ?

    // Standard browser envs support document.cookie
      (function standardBrowserEnv() {
        return {
          write: function write(name, value, expires, path, domain, secure) {
            var cookie = [];
            cookie.push(name + '=' + encodeURIComponent(value));

            if (utils$d.isNumber(expires)) {
              cookie.push('expires=' + new Date(expires).toGMTString());
            }

            if (utils$d.isString(path)) {
              cookie.push('path=' + path);
            }

            if (utils$d.isString(domain)) {
              cookie.push('domain=' + domain);
            }

            if (secure === true) {
              cookie.push('secure');
            }

            document.cookie = cookie.join('; ');
          },

          read: function read(name) {
            var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
            return (match ? decodeURIComponent(match[3]) : null);
          },

          remove: function remove(name) {
            this.write(name, '', Date.now() - 86400000);
          }
        };
      })() :

    // Non standard browser env (web workers, react-native) lack needed support.
      (function nonStandardBrowserEnv() {
        return {
          write: function write() {},
          read: function read() { return null; },
          remove: function remove() {}
        };
      })()
  );

  /**
   * Determines whether the specified URL is absolute
   *
   * @param {string} url The URL to test
   * @returns {boolean} True if the specified URL is absolute, otherwise false
   */
  var isAbsoluteURL$1 = function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
  };

  /**
   * Creates a new URL by combining the specified URLs
   *
   * @param {string} baseURL The base URL
   * @param {string} relativeURL The relative URL
   * @returns {string} The combined URL
   */
  var combineURLs$1 = function combineURLs(baseURL, relativeURL) {
    return relativeURL
      ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
      : baseURL;
  };

  var isAbsoluteURL = isAbsoluteURL$1;
  var combineURLs = combineURLs$1;

  /**
   * Creates a new URL by combining the baseURL with the requestedURL,
   * only when the requestedURL is not already an absolute URL.
   * If the requestURL is absolute, this function returns the requestedURL untouched.
   *
   * @param {string} baseURL The base URL
   * @param {string} requestedURL Absolute or relative URL to combine
   * @returns {string} The combined full path
   */
  var buildFullPath$2 = function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  };

  var utils$c = utils$h;

  // Headers whose duplicates are ignored by node
  // c.f. https://nodejs.org/api/http.html#http_message_headers
  var ignoreDuplicateOf = [
    'age', 'authorization', 'content-length', 'content-type', 'etag',
    'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
    'last-modified', 'location', 'max-forwards', 'proxy-authorization',
    'referer', 'retry-after', 'user-agent'
  ];

  /**
   * Parse headers into an object
   *
   * ```
   * Date: Wed, 27 Aug 2014 08:58:49 GMT
   * Content-Type: application/json
   * Connection: keep-alive
   * Transfer-Encoding: chunked
   * ```
   *
   * @param {String} headers Headers needing to be parsed
   * @returns {Object} Headers parsed into an object
   */
  var parseHeaders$1 = function parseHeaders(headers) {
    var parsed = {};
    var key;
    var val;
    var i;

    if (!headers) { return parsed; }

    utils$c.forEach(headers.split('\n'), function parser(line) {
      i = line.indexOf(':');
      key = utils$c.trim(line.substr(0, i)).toLowerCase();
      val = utils$c.trim(line.substr(i + 1));

      if (key) {
        if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
          return;
        }
        if (key === 'set-cookie') {
          parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
        } else {
          parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
        }
      }
    });

    return parsed;
  };

  var utils$b = utils$h;

  var isURLSameOrigin$1 = (
    utils$b.isStandardBrowserEnv() ?

    // Standard browser envs have full support of the APIs needed to test
    // whether the request URL is of the same origin as current location.
      (function standardBrowserEnv() {
        var msie = /(msie|trident)/i.test(navigator.userAgent);
        var urlParsingNode = document.createElement('a');
        var originURL;

        /**
      * Parse a URL to discover it's components
      *
      * @param {String} url The URL to be parsed
      * @returns {Object}
      */
        function resolveURL(url) {
          var href = url;

          if (msie) {
          // IE needs attribute set twice to normalize properties
            urlParsingNode.setAttribute('href', href);
            href = urlParsingNode.href;
          }

          urlParsingNode.setAttribute('href', href);

          // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
          return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
              urlParsingNode.pathname :
              '/' + urlParsingNode.pathname
          };
        }

        originURL = resolveURL(window.location.href);

        /**
      * Determine if a URL shares the same origin as the current location
      *
      * @param {String} requestURL The URL to test
      * @returns {boolean} True if URL shares the same origin, otherwise false
      */
        return function isURLSameOrigin(requestURL) {
          var parsed = (utils$b.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
          return (parsed.protocol === originURL.protocol &&
              parsed.host === originURL.host);
        };
      })() :

    // Non standard browser envs (web workers, react-native) lack needed support.
      (function nonStandardBrowserEnv() {
        return function isURLSameOrigin() {
          return true;
        };
      })()
  );

  var utils$a = utils$h;
  var settle$1 = settle$2;
  var cookies = cookies$1;
  var buildURL$2 = buildURL$3;
  var buildFullPath$1 = buildFullPath$2;
  var parseHeaders = parseHeaders$1;
  var isURLSameOrigin = isURLSameOrigin$1;
  var createError$1 = createError$3;

  var xhr = function xhrAdapter(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      var requestData = config.data;
      var requestHeaders = config.headers;
      var responseType = config.responseType;

      if (utils$a.isFormData(requestData)) {
        delete requestHeaders['Content-Type']; // Let the browser set it
      }

      var request = new XMLHttpRequest();

      // HTTP basic authentication
      if (config.auth) {
        var username = config.auth.username || '';
        var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
        requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
      }

      var fullPath = buildFullPath$1(config.baseURL, config.url);
      request.open(config.method.toUpperCase(), buildURL$2(fullPath, config.params, config.paramsSerializer), true);

      // Set the request timeout in MS
      request.timeout = config.timeout;

      function onloadend() {
        if (!request) {
          return;
        }
        // Prepare the response
        var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
        var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
          request.responseText : request.response;
        var response = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config: config,
          request: request
        };

        settle$1(resolve, reject, response);

        // Clean up request
        request = null;
      }

      if ('onloadend' in request) {
        // Use onloadend if available
        request.onloadend = onloadend;
      } else {
        // Listen for ready state to emulate onloadend
        request.onreadystatechange = function handleLoad() {
          if (!request || request.readyState !== 4) {
            return;
          }

          // The request errored out and we didn't get a response, this will be
          // handled by onerror instead
          // With one exception: request that using file: protocol, most browsers
          // will return status as 0 even though it's a successful request
          if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
            return;
          }
          // readystate handler is calling before onerror or ontimeout handlers,
          // so we should call onloadend on the next 'tick'
          setTimeout(onloadend);
        };
      }

      // Handle browser request cancellation (as opposed to a manual cancellation)
      request.onabort = function handleAbort() {
        if (!request) {
          return;
        }

        reject(createError$1('Request aborted', config, 'ECONNABORTED', request));

        // Clean up request
        request = null;
      };

      // Handle low level network errors
      request.onerror = function handleError() {
        // Real errors are hidden from us by the browser
        // onerror should only fire if it's a network error
        reject(createError$1('Network Error', config, null, request));

        // Clean up request
        request = null;
      };

      // Handle timeout
      request.ontimeout = function handleTimeout() {
        var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
        if (config.timeoutErrorMessage) {
          timeoutErrorMessage = config.timeoutErrorMessage;
        }
        reject(createError$1(
          timeoutErrorMessage,
          config,
          config.transitional && config.transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
          request));

        // Clean up request
        request = null;
      };

      // Add xsrf header
      // This is only done if running in a standard browser environment.
      // Specifically not if we're in a web worker, or react-native.
      if (utils$a.isStandardBrowserEnv()) {
        // Add xsrf header
        var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

        if (xsrfValue) {
          requestHeaders[config.xsrfHeaderName] = xsrfValue;
        }
      }

      // Add headers to the request
      if ('setRequestHeader' in request) {
        utils$a.forEach(requestHeaders, function setRequestHeader(val, key) {
          if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
            // Remove Content-Type if data is undefined
            delete requestHeaders[key];
          } else {
            // Otherwise add header to the request
            request.setRequestHeader(key, val);
          }
        });
      }

      // Add withCredentials to request if needed
      if (!utils$a.isUndefined(config.withCredentials)) {
        request.withCredentials = !!config.withCredentials;
      }

      // Add responseType to request if needed
      if (responseType && responseType !== 'json') {
        request.responseType = config.responseType;
      }

      // Handle progress if needed
      if (typeof config.onDownloadProgress === 'function') {
        request.addEventListener('progress', config.onDownloadProgress);
      }

      // Not all browsers support upload events
      if (typeof config.onUploadProgress === 'function' && request.upload) {
        request.upload.addEventListener('progress', config.onUploadProgress);
      }

      if (config.cancelToken) {
        // Handle cancellation
        config.cancelToken.promise.then(function onCanceled(cancel) {
          if (!request) {
            return;
          }

          request.abort();
          reject(cancel);
          // Clean up request
          request = null;
        });
      }

      if (!requestData) {
        requestData = null;
      }

      // Send the request
      request.send(requestData);
    });
  };

  var followRedirects = {exports: {}};

  var debug$1;

  var debug_1 = function () {
    if (!debug$1) {
      try {
        /* eslint global-require: off */
        debug$1 = require("debug")("follow-redirects");
      }
      catch (error) { /* */ }
      if (typeof debug$1 !== "function") {
        debug$1 = function () { /* */ };
      }
    }
    debug$1.apply(null, arguments);
  };

  var url$1 = require$$0__default["default"];
  var URL = url$1.URL;
  var http$1 = require$$1__default["default"];
  var https$1 = require$$2__default["default"];
  var Writable = require$$3__default["default"].Writable;
  var assert = require$$4__default["default"];
  var debug = debug_1;

  // Create handlers that pass events from native requests
  var events = ["abort", "aborted", "connect", "error", "socket", "timeout"];
  var eventHandlers = Object.create(null);
  events.forEach(function (event) {
    eventHandlers[event] = function (arg1, arg2, arg3) {
      this._redirectable.emit(event, arg1, arg2, arg3);
    };
  });

  // Error types with codes
  var RedirectionError = createErrorType(
    "ERR_FR_REDIRECTION_FAILURE",
    "Redirected request failed"
  );
  var TooManyRedirectsError = createErrorType(
    "ERR_FR_TOO_MANY_REDIRECTS",
    "Maximum number of redirects exceeded"
  );
  var MaxBodyLengthExceededError = createErrorType(
    "ERR_FR_MAX_BODY_LENGTH_EXCEEDED",
    "Request body larger than maxBodyLength limit"
  );
  var WriteAfterEndError = createErrorType(
    "ERR_STREAM_WRITE_AFTER_END",
    "write after end"
  );

  // An HTTP(S) request that can be redirected
  function RedirectableRequest(options, responseCallback) {
    // Initialize the request
    Writable.call(this);
    this._sanitizeOptions(options);
    this._options = options;
    this._ended = false;
    this._ending = false;
    this._redirectCount = 0;
    this._redirects = [];
    this._requestBodyLength = 0;
    this._requestBodyBuffers = [];

    // Attach a callback if passed
    if (responseCallback) {
      this.on("response", responseCallback);
    }

    // React to responses of native requests
    var self = this;
    this._onNativeResponse = function (response) {
      self._processResponse(response);
    };

    // Perform the first request
    this._performRequest();
  }
  RedirectableRequest.prototype = Object.create(Writable.prototype);

  RedirectableRequest.prototype.abort = function () {
    abortRequest(this._currentRequest);
    this.emit("abort");
  };

  // Writes buffered data to the current native request
  RedirectableRequest.prototype.write = function (data, encoding, callback) {
    // Writing is not allowed if end has been called
    if (this._ending) {
      throw new WriteAfterEndError();
    }

    // Validate input and shift parameters if necessary
    if (!(typeof data === "string" || typeof data === "object" && ("length" in data))) {
      throw new TypeError("data should be a string, Buffer or Uint8Array");
    }
    if (typeof encoding === "function") {
      callback = encoding;
      encoding = null;
    }

    // Ignore empty buffers, since writing them doesn't invoke the callback
    // https://github.com/nodejs/node/issues/22066
    if (data.length === 0) {
      if (callback) {
        callback();
      }
      return;
    }
    // Only write when we don't exceed the maximum body length
    if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
      this._requestBodyLength += data.length;
      this._requestBodyBuffers.push({ data: data, encoding: encoding });
      this._currentRequest.write(data, encoding, callback);
    }
    // Error when we exceed the maximum body length
    else {
      this.emit("error", new MaxBodyLengthExceededError());
      this.abort();
    }
  };

  // Ends the current native request
  RedirectableRequest.prototype.end = function (data, encoding, callback) {
    // Shift parameters if necessary
    if (typeof data === "function") {
      callback = data;
      data = encoding = null;
    }
    else if (typeof encoding === "function") {
      callback = encoding;
      encoding = null;
    }

    // Write data if needed and end
    if (!data) {
      this._ended = this._ending = true;
      this._currentRequest.end(null, null, callback);
    }
    else {
      var self = this;
      var currentRequest = this._currentRequest;
      this.write(data, encoding, function () {
        self._ended = true;
        currentRequest.end(null, null, callback);
      });
      this._ending = true;
    }
  };

  // Sets a header value on the current native request
  RedirectableRequest.prototype.setHeader = function (name, value) {
    this._options.headers[name] = value;
    this._currentRequest.setHeader(name, value);
  };

  // Clears a header value on the current native request
  RedirectableRequest.prototype.removeHeader = function (name) {
    delete this._options.headers[name];
    this._currentRequest.removeHeader(name);
  };

  // Global timeout for all underlying requests
  RedirectableRequest.prototype.setTimeout = function (msecs, callback) {
    var self = this;

    // Destroys the socket on timeout
    function destroyOnTimeout(socket) {
      socket.setTimeout(msecs);
      socket.removeListener("timeout", socket.destroy);
      socket.addListener("timeout", socket.destroy);
    }

    // Sets up a timer to trigger a timeout event
    function startTimer(socket) {
      if (self._timeout) {
        clearTimeout(self._timeout);
      }
      self._timeout = setTimeout(function () {
        self.emit("timeout");
        clearTimer();
      }, msecs);
      destroyOnTimeout(socket);
    }

    // Stops a timeout from triggering
    function clearTimer() {
      // Clear the timeout
      if (self._timeout) {
        clearTimeout(self._timeout);
        self._timeout = null;
      }

      // Clean up all attached listeners
      self.removeListener("abort", clearTimer);
      self.removeListener("error", clearTimer);
      self.removeListener("response", clearTimer);
      if (callback) {
        self.removeListener("timeout", callback);
      }
      if (!self.socket) {
        self._currentRequest.removeListener("socket", startTimer);
      }
    }

    // Attach callback if passed
    if (callback) {
      this.on("timeout", callback);
    }

    // Start the timer if or when the socket is opened
    if (this.socket) {
      startTimer(this.socket);
    }
    else {
      this._currentRequest.once("socket", startTimer);
    }

    // Clean up on events
    this.on("socket", destroyOnTimeout);
    this.on("abort", clearTimer);
    this.on("error", clearTimer);
    this.on("response", clearTimer);

    return this;
  };

  // Proxy all other public ClientRequest methods
  [
    "flushHeaders", "getHeader",
    "setNoDelay", "setSocketKeepAlive",
  ].forEach(function (method) {
    RedirectableRequest.prototype[method] = function (a, b) {
      return this._currentRequest[method](a, b);
    };
  });

  // Proxy all public ClientRequest properties
  ["aborted", "connection", "socket"].forEach(function (property) {
    Object.defineProperty(RedirectableRequest.prototype, property, {
      get: function () { return this._currentRequest[property]; },
    });
  });

  RedirectableRequest.prototype._sanitizeOptions = function (options) {
    // Ensure headers are always present
    if (!options.headers) {
      options.headers = {};
    }

    // Since http.request treats host as an alias of hostname,
    // but the url module interprets host as hostname plus port,
    // eliminate the host property to avoid confusion.
    if (options.host) {
      // Use hostname if set, because it has precedence
      if (!options.hostname) {
        options.hostname = options.host;
      }
      delete options.host;
    }

    // Complete the URL object when necessary
    if (!options.pathname && options.path) {
      var searchPos = options.path.indexOf("?");
      if (searchPos < 0) {
        options.pathname = options.path;
      }
      else {
        options.pathname = options.path.substring(0, searchPos);
        options.search = options.path.substring(searchPos);
      }
    }
  };


  // Executes the next native request (initial or redirect)
  RedirectableRequest.prototype._performRequest = function () {
    // Load the native protocol
    var protocol = this._options.protocol;
    var nativeProtocol = this._options.nativeProtocols[protocol];
    if (!nativeProtocol) {
      this.emit("error", new TypeError("Unsupported protocol " + protocol));
      return;
    }

    // If specified, use the agent corresponding to the protocol
    // (HTTP and HTTPS use different types of agents)
    if (this._options.agents) {
      var scheme = protocol.substr(0, protocol.length - 1);
      this._options.agent = this._options.agents[scheme];
    }

    // Create the native request
    var request = this._currentRequest =
          nativeProtocol.request(this._options, this._onNativeResponse);
    this._currentUrl = url$1.format(this._options);

    // Set up event handlers
    request._redirectable = this;
    for (var e = 0; e < events.length; e++) {
      request.on(events[e], eventHandlers[events[e]]);
    }

    // End a redirected request
    // (The first request must be ended explicitly with RedirectableRequest#end)
    if (this._isRedirect) {
      // Write the request entity and end.
      var i = 0;
      var self = this;
      var buffers = this._requestBodyBuffers;
      (function writeNext(error) {
        // Only write if this request has not been redirected yet
        /* istanbul ignore else */
        if (request === self._currentRequest) {
          // Report any write errors
          /* istanbul ignore if */
          if (error) {
            self.emit("error", error);
          }
          // Write the next buffer if there are still left
          else if (i < buffers.length) {
            var buffer = buffers[i++];
            /* istanbul ignore else */
            if (!request.finished) {
              request.write(buffer.data, buffer.encoding, writeNext);
            }
          }
          // End the request if `end` has been called on us
          else if (self._ended) {
            request.end();
          }
        }
      }());
    }
  };

  // Processes a response from the current native request
  RedirectableRequest.prototype._processResponse = function (response) {
    // Store the redirected response
    var statusCode = response.statusCode;
    if (this._options.trackRedirects) {
      this._redirects.push({
        url: this._currentUrl,
        headers: response.headers,
        statusCode: statusCode,
      });
    }

    // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
    // that further action needs to be taken by the user agent in order to
    // fulfill the request. If a Location header field is provided,
    // the user agent MAY automatically redirect its request to the URI
    // referenced by the Location field value,
    // even if the specific status code is not understood.

    // If the response is not a redirect; return it as-is
    var location = response.headers.location;
    if (!location || this._options.followRedirects === false ||
        statusCode < 300 || statusCode >= 400) {
      response.responseUrl = this._currentUrl;
      response.redirects = this._redirects;
      this.emit("response", response);

      // Clean up
      this._requestBodyBuffers = [];
      return;
    }

    // The response is a redirect, so abort the current request
    abortRequest(this._currentRequest);
    // Discard the remainder of the response to avoid waiting for data
    response.destroy();

    // RFC7231§6.4: A client SHOULD detect and intervene
    // in cyclical redirections (i.e., "infinite" redirection loops).
    if (++this._redirectCount > this._options.maxRedirects) {
      this.emit("error", new TooManyRedirectsError());
      return;
    }

    // RFC7231§6.4: Automatic redirection needs to done with
    // care for methods not known to be safe, […]
    // RFC7231§6.4.2–3: For historical reasons, a user agent MAY change
    // the request method from POST to GET for the subsequent request.
    if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" ||
        // RFC7231§6.4.4: The 303 (See Other) status code indicates that
        // the server is redirecting the user agent to a different resource […]
        // A user agent can perform a retrieval request targeting that URI
        // (a GET or HEAD request if using HTTP) […]
        (statusCode === 303) && !/^(?:GET|HEAD)$/.test(this._options.method)) {
      this._options.method = "GET";
      // Drop a possible entity and headers related to it
      this._requestBodyBuffers = [];
      removeMatchingHeaders(/^content-/i, this._options.headers);
    }

    // Drop the Host header, as the redirect might lead to a different host
    var currentHostHeader = removeMatchingHeaders(/^host$/i, this._options.headers);

    // If the redirect is relative, carry over the host of the last request
    var currentUrlParts = url$1.parse(this._currentUrl);
    var currentHost = currentHostHeader || currentUrlParts.host;
    var currentUrl = /^\w+:/.test(location) ? this._currentUrl :
      url$1.format(Object.assign(currentUrlParts, { host: currentHost }));

    // Determine the URL of the redirection
    var redirectUrl;
    try {
      redirectUrl = url$1.resolve(currentUrl, location);
    }
    catch (cause) {
      this.emit("error", new RedirectionError(cause));
      return;
    }

    // Create the redirected request
    debug("redirecting to", redirectUrl);
    this._isRedirect = true;
    var redirectUrlParts = url$1.parse(redirectUrl);
    Object.assign(this._options, redirectUrlParts);

    // Drop confidential headers when redirecting to a less secure protocol
    // or to a different domain that is not a superdomain
    if (redirectUrlParts.protocol !== currentUrlParts.protocol &&
       redirectUrlParts.protocol !== "https:" ||
       redirectUrlParts.host !== currentHost &&
       !isSubdomain(redirectUrlParts.host, currentHost)) {
      removeMatchingHeaders(/^(?:authorization|cookie)$/i, this._options.headers);
    }

    // Evaluate the beforeRedirect callback
    if (typeof this._options.beforeRedirect === "function") {
      var responseDetails = { headers: response.headers };
      try {
        this._options.beforeRedirect.call(null, this._options, responseDetails);
      }
      catch (err) {
        this.emit("error", err);
        return;
      }
      this._sanitizeOptions(this._options);
    }

    // Perform the redirected request
    try {
      this._performRequest();
    }
    catch (cause) {
      this.emit("error", new RedirectionError(cause));
    }
  };

  // Wraps the key/value object of protocols with redirect functionality
  function wrap(protocols) {
    // Default settings
    var exports = {
      maxRedirects: 21,
      maxBodyLength: 10 * 1024 * 1024,
    };

    // Wrap each protocol
    var nativeProtocols = {};
    Object.keys(protocols).forEach(function (scheme) {
      var protocol = scheme + ":";
      var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
      var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);

      // Executes a request, following redirects
      function request(input, options, callback) {
        // Parse parameters
        if (typeof input === "string") {
          var urlStr = input;
          try {
            input = urlToOptions(new URL(urlStr));
          }
          catch (err) {
            /* istanbul ignore next */
            input = url$1.parse(urlStr);
          }
        }
        else if (URL && (input instanceof URL)) {
          input = urlToOptions(input);
        }
        else {
          callback = options;
          options = input;
          input = { protocol: protocol };
        }
        if (typeof options === "function") {
          callback = options;
          options = null;
        }

        // Set defaults
        options = Object.assign({
          maxRedirects: exports.maxRedirects,
          maxBodyLength: exports.maxBodyLength,
        }, input, options);
        options.nativeProtocols = nativeProtocols;

        assert.equal(options.protocol, protocol, "protocol mismatch");
        debug("options", options);
        return new RedirectableRequest(options, callback);
      }

      // Executes a GET request, following redirects
      function get(input, options, callback) {
        var wrappedRequest = wrappedProtocol.request(input, options, callback);
        wrappedRequest.end();
        return wrappedRequest;
      }

      // Expose the properties on the wrapped protocol
      Object.defineProperties(wrappedProtocol, {
        request: { value: request, configurable: true, enumerable: true, writable: true },
        get: { value: get, configurable: true, enumerable: true, writable: true },
      });
    });
    return exports;
  }

  /* istanbul ignore next */
  function noop$1() { /* empty */ }

  // from https://github.com/nodejs/node/blob/master/lib/internal/url.js
  function urlToOptions(urlObject) {
    var options = {
      protocol: urlObject.protocol,
      hostname: urlObject.hostname.startsWith("[") ?
        /* istanbul ignore next */
        urlObject.hostname.slice(1, -1) :
        urlObject.hostname,
      hash: urlObject.hash,
      search: urlObject.search,
      pathname: urlObject.pathname,
      path: urlObject.pathname + urlObject.search,
      href: urlObject.href,
    };
    if (urlObject.port !== "") {
      options.port = Number(urlObject.port);
    }
    return options;
  }

  function removeMatchingHeaders(regex, headers) {
    var lastValue;
    for (var header in headers) {
      if (regex.test(header)) {
        lastValue = headers[header];
        delete headers[header];
      }
    }
    return (lastValue === null || typeof lastValue === "undefined") ?
      undefined : String(lastValue).trim();
  }

  function createErrorType(code, defaultMessage) {
    function CustomError(cause) {
      Error.captureStackTrace(this, this.constructor);
      if (!cause) {
        this.message = defaultMessage;
      }
      else {
        this.message = defaultMessage + ": " + cause.message;
        this.cause = cause;
      }
    }
    CustomError.prototype = new Error();
    CustomError.prototype.constructor = CustomError;
    CustomError.prototype.name = "Error [" + code + "]";
    CustomError.prototype.code = code;
    return CustomError;
  }

  function abortRequest(request) {
    for (var e = 0; e < events.length; e++) {
      request.removeListener(events[e], eventHandlers[events[e]]);
    }
    request.on("error", noop$1);
    request.abort();
  }

  function isSubdomain(subdomain, domain) {
    const dot = subdomain.length - domain.length - 1;
    return dot > 0 && subdomain[dot] === "." && subdomain.endsWith(domain);
  }

  // Exports
  followRedirects.exports = wrap({ http: http$1, https: https$1 });
  followRedirects.exports.wrap = wrap;

  var _from = "axios@^0.21.1";
  var _id = "axios@0.21.4";
  var _inBundle = false;
  var _integrity = "sha512-ut5vewkiu8jjGBdqpM44XxjuCjq9LAKeHVmoVfHVzy8eHgxxq8SbAVQNovDA8mVi05kP0Ea/n/UzcSHcTJQfNg==";
  var _location = "/axios";
  var _phantomChildren = {
  };
  var _requested = {
  	type: "range",
  	registry: true,
  	raw: "axios@^0.21.1",
  	name: "axios",
  	escapedName: "axios",
  	rawSpec: "^0.21.1",
  	saveSpec: null,
  	fetchSpec: "^0.21.1"
  };
  var _requiredBy = [
  	"#DEV:/"
  ];
  var _resolved = "https://registry.npmjs.org/axios/-/axios-0.21.4.tgz";
  var _shasum = "c67b90dc0568e5c1cf2b0b858c43ba28e2eda575";
  var _spec = "axios@^0.21.1";
  var _where = "/Users/tianwb/Desktop/前端/componentTWB";
  var author = {
  	name: "Matt Zabriskie"
  };
  var browser = {
  	"./lib/adapters/http.js": "./lib/adapters/xhr.js"
  };
  var bugs = {
  	url: "https://github.com/axios/axios/issues"
  };
  var bundleDependencies = false;
  var bundlesize = [
  	{
  		path: "./dist/axios.min.js",
  		threshold: "5kB"
  	}
  ];
  var dependencies = {
  	"follow-redirects": "^1.14.0"
  };
  var deprecated = false;
  var description = "Promise based HTTP client for the browser and node.js";
  var devDependencies = {
  	coveralls: "^3.0.0",
  	"es6-promise": "^4.2.4",
  	grunt: "^1.3.0",
  	"grunt-banner": "^0.6.0",
  	"grunt-cli": "^1.2.0",
  	"grunt-contrib-clean": "^1.1.0",
  	"grunt-contrib-watch": "^1.0.0",
  	"grunt-eslint": "^23.0.0",
  	"grunt-karma": "^4.0.0",
  	"grunt-mocha-test": "^0.13.3",
  	"grunt-ts": "^6.0.0-beta.19",
  	"grunt-webpack": "^4.0.2",
  	"istanbul-instrumenter-loader": "^1.0.0",
  	"jasmine-core": "^2.4.1",
  	karma: "^6.3.2",
  	"karma-chrome-launcher": "^3.1.0",
  	"karma-firefox-launcher": "^2.1.0",
  	"karma-jasmine": "^1.1.1",
  	"karma-jasmine-ajax": "^0.1.13",
  	"karma-safari-launcher": "^1.0.0",
  	"karma-sauce-launcher": "^4.3.6",
  	"karma-sinon": "^1.0.5",
  	"karma-sourcemap-loader": "^0.3.8",
  	"karma-webpack": "^4.0.2",
  	"load-grunt-tasks": "^3.5.2",
  	minimist: "^1.2.0",
  	mocha: "^8.2.1",
  	sinon: "^4.5.0",
  	"terser-webpack-plugin": "^4.2.3",
  	typescript: "^4.0.5",
  	"url-search-params": "^0.10.0",
  	webpack: "^4.44.2",
  	"webpack-dev-server": "^3.11.0"
  };
  var homepage = "https://axios-http.com";
  var jsdelivr = "dist/axios.min.js";
  var keywords = [
  	"xhr",
  	"http",
  	"ajax",
  	"promise",
  	"node"
  ];
  var license = "MIT";
  var main = "index.js";
  var name = "axios";
  var repository = {
  	type: "git",
  	url: "git+https://github.com/axios/axios.git"
  };
  var scripts = {
  	build: "NODE_ENV=production grunt build",
  	coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
  	examples: "node ./examples/server.js",
  	fix: "eslint --fix lib/**/*.js",
  	postversion: "git push && git push --tags",
  	preversion: "npm test",
  	start: "node ./sandbox/server.js",
  	test: "grunt test",
  	version: "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json"
  };
  var typings = "./index.d.ts";
  var unpkg = "dist/axios.min.js";
  var version = "0.21.4";
  var require$$0 = {
  	_from: _from,
  	_id: _id,
  	_inBundle: _inBundle,
  	_integrity: _integrity,
  	_location: _location,
  	_phantomChildren: _phantomChildren,
  	_requested: _requested,
  	_requiredBy: _requiredBy,
  	_resolved: _resolved,
  	_shasum: _shasum,
  	_spec: _spec,
  	_where: _where,
  	author: author,
  	browser: browser,
  	bugs: bugs,
  	bundleDependencies: bundleDependencies,
  	bundlesize: bundlesize,
  	dependencies: dependencies,
  	deprecated: deprecated,
  	description: description,
  	devDependencies: devDependencies,
  	homepage: homepage,
  	jsdelivr: jsdelivr,
  	keywords: keywords,
  	license: license,
  	main: main,
  	name: name,
  	repository: repository,
  	scripts: scripts,
  	typings: typings,
  	unpkg: unpkg,
  	version: version
  };

  var utils$9 = utils$h;
  var settle = settle$2;
  var buildFullPath = buildFullPath$2;
  var buildURL$1 = buildURL$3;
  var http = require$$1__default["default"];
  var https = require$$2__default["default"];
  var httpFollow = followRedirects.exports.http;
  var httpsFollow = followRedirects.exports.https;
  var url = require$$0__default["default"];
  var zlib = require$$8__default["default"];
  var pkg$1 = require$$0;
  var createError = createError$3;
  var enhanceError$1 = enhanceError$3;

  var isHttps = /https:?/;

  /**
   *
   * @param {http.ClientRequestArgs} options
   * @param {AxiosProxyConfig} proxy
   * @param {string} location
   */
  function setProxy(options, proxy, location) {
    options.hostname = proxy.host;
    options.host = proxy.host;
    options.port = proxy.port;
    options.path = location;

    // Basic proxy authorization
    if (proxy.auth) {
      var base64 = Buffer.from(proxy.auth.username + ':' + proxy.auth.password, 'utf8').toString('base64');
      options.headers['Proxy-Authorization'] = 'Basic ' + base64;
    }

    // If a proxy is used, any redirects must also pass through the proxy
    options.beforeRedirect = function beforeRedirect(redirection) {
      redirection.headers.host = redirection.host;
      setProxy(redirection, proxy, redirection.href);
    };
  }

  /*eslint consistent-return:0*/
  var http_1 = function httpAdapter(config) {
    return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {
      var resolve = function resolve(value) {
        resolvePromise(value);
      };
      var reject = function reject(value) {
        rejectPromise(value);
      };
      var data = config.data;
      var headers = config.headers;

      // Set User-Agent (required by some servers)
      // See https://github.com/axios/axios/issues/69
      if ('User-Agent' in headers || 'user-agent' in headers) {
        // User-Agent is specified; handle case where no UA header is desired
        if (!headers['User-Agent'] && !headers['user-agent']) {
          delete headers['User-Agent'];
          delete headers['user-agent'];
        }
        // Otherwise, use specified value
      } else {
        // Only set header if it hasn't been set in config
        headers['User-Agent'] = 'axios/' + pkg$1.version;
      }

      if (data && !utils$9.isStream(data)) {
        if (Buffer.isBuffer(data)) ; else if (utils$9.isArrayBuffer(data)) {
          data = Buffer.from(new Uint8Array(data));
        } else if (utils$9.isString(data)) {
          data = Buffer.from(data, 'utf-8');
        } else {
          return reject(createError(
            'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
            config
          ));
        }

        // Add Content-Length header if data exists
        headers['Content-Length'] = data.length;
      }

      // HTTP basic authentication
      var auth = undefined;
      if (config.auth) {
        var username = config.auth.username || '';
        var password = config.auth.password || '';
        auth = username + ':' + password;
      }

      // Parse url
      var fullPath = buildFullPath(config.baseURL, config.url);
      var parsed = url.parse(fullPath);
      var protocol = parsed.protocol || 'http:';

      if (!auth && parsed.auth) {
        var urlAuth = parsed.auth.split(':');
        var urlUsername = urlAuth[0] || '';
        var urlPassword = urlAuth[1] || '';
        auth = urlUsername + ':' + urlPassword;
      }

      if (auth) {
        delete headers.Authorization;
      }

      var isHttpsRequest = isHttps.test(protocol);
      var agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;

      var options = {
        path: buildURL$1(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ''),
        method: config.method.toUpperCase(),
        headers: headers,
        agent: agent,
        agents: { http: config.httpAgent, https: config.httpsAgent },
        auth: auth
      };

      if (config.socketPath) {
        options.socketPath = config.socketPath;
      } else {
        options.hostname = parsed.hostname;
        options.port = parsed.port;
      }

      var proxy = config.proxy;
      if (!proxy && proxy !== false) {
        var proxyEnv = protocol.slice(0, -1) + '_proxy';
        var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
        if (proxyUrl) {
          var parsedProxyUrl = url.parse(proxyUrl);
          var noProxyEnv = process.env.no_proxy || process.env.NO_PROXY;
          var shouldProxy = true;

          if (noProxyEnv) {
            var noProxy = noProxyEnv.split(',').map(function trim(s) {
              return s.trim();
            });

            shouldProxy = !noProxy.some(function proxyMatch(proxyElement) {
              if (!proxyElement) {
                return false;
              }
              if (proxyElement === '*') {
                return true;
              }
              if (proxyElement[0] === '.' &&
                  parsed.hostname.substr(parsed.hostname.length - proxyElement.length) === proxyElement) {
                return true;
              }

              return parsed.hostname === proxyElement;
            });
          }

          if (shouldProxy) {
            proxy = {
              host: parsedProxyUrl.hostname,
              port: parsedProxyUrl.port,
              protocol: parsedProxyUrl.protocol
            };

            if (parsedProxyUrl.auth) {
              var proxyUrlAuth = parsedProxyUrl.auth.split(':');
              proxy.auth = {
                username: proxyUrlAuth[0],
                password: proxyUrlAuth[1]
              };
            }
          }
        }
      }

      if (proxy) {
        options.headers.host = parsed.hostname + (parsed.port ? ':' + parsed.port : '');
        setProxy(options, proxy, protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path);
      }

      var transport;
      var isHttpsProxy = isHttpsRequest && (proxy ? isHttps.test(proxy.protocol) : true);
      if (config.transport) {
        transport = config.transport;
      } else if (config.maxRedirects === 0) {
        transport = isHttpsProxy ? https : http;
      } else {
        if (config.maxRedirects) {
          options.maxRedirects = config.maxRedirects;
        }
        transport = isHttpsProxy ? httpsFollow : httpFollow;
      }

      if (config.maxBodyLength > -1) {
        options.maxBodyLength = config.maxBodyLength;
      }

      // Create the request
      var req = transport.request(options, function handleResponse(res) {
        if (req.aborted) return;

        // uncompress the response body transparently if required
        var stream = res;

        // return the last request in case of redirects
        var lastRequest = res.req || req;


        // if no content, is HEAD request or decompress disabled we should not decompress
        if (res.statusCode !== 204 && lastRequest.method !== 'HEAD' && config.decompress !== false) {
          switch (res.headers['content-encoding']) {
          /*eslint default-case:0*/
          case 'gzip':
          case 'compress':
          case 'deflate':
          // add the unzipper to the body stream processing pipeline
            stream = stream.pipe(zlib.createUnzip());

            // remove the content-encoding in order to not confuse downstream operations
            delete res.headers['content-encoding'];
            break;
          }
        }

        var response = {
          status: res.statusCode,
          statusText: res.statusMessage,
          headers: res.headers,
          config: config,
          request: lastRequest
        };

        if (config.responseType === 'stream') {
          response.data = stream;
          settle(resolve, reject, response);
        } else {
          var responseBuffer = [];
          var totalResponseBytes = 0;
          stream.on('data', function handleStreamData(chunk) {
            responseBuffer.push(chunk);
            totalResponseBytes += chunk.length;

            // make sure the content length is not over the maxContentLength if specified
            if (config.maxContentLength > -1 && totalResponseBytes > config.maxContentLength) {
              stream.destroy();
              reject(createError('maxContentLength size of ' + config.maxContentLength + ' exceeded',
                config, null, lastRequest));
            }
          });

          stream.on('error', function handleStreamError(err) {
            if (req.aborted) return;
            reject(enhanceError$1(err, config, null, lastRequest));
          });

          stream.on('end', function handleStreamEnd() {
            var responseData = Buffer.concat(responseBuffer);
            if (config.responseType !== 'arraybuffer') {
              responseData = responseData.toString(config.responseEncoding);
              if (!config.responseEncoding || config.responseEncoding === 'utf8') {
                responseData = utils$9.stripBOM(responseData);
              }
            }

            response.data = responseData;
            settle(resolve, reject, response);
          });
        }
      });

      // Handle errors
      req.on('error', function handleRequestError(err) {
        if (req.aborted && err.code !== 'ERR_FR_TOO_MANY_REDIRECTS') return;
        reject(enhanceError$1(err, config, null, req));
      });

      // Handle request timeout
      if (config.timeout) {
        // This is forcing a int timeout to avoid problems if the `req` interface doesn't handle other types.
        var timeout = parseInt(config.timeout, 10);

        if (isNaN(timeout)) {
          reject(createError(
            'error trying to parse `config.timeout` to int',
            config,
            'ERR_PARSE_TIMEOUT',
            req
          ));

          return;
        }

        // Sometime, the response will be very slow, and does not respond, the connect event will be block by event loop system.
        // And timer callback will be fired, and abort() will be invoked before connection, then get "socket hang up" and code ECONNRESET.
        // At this time, if we have a large number of request, nodejs will hang up some socket on background. and the number will up and up.
        // And then these socket which be hang up will devoring CPU little by little.
        // ClientRequest.setTimeout will be fired on the specify milliseconds, and can make sure that abort() will be fired after connect.
        req.setTimeout(timeout, function handleRequestTimeout() {
          req.abort();
          reject(createError(
            'timeout of ' + timeout + 'ms exceeded',
            config,
            config.transitional && config.transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
            req
          ));
        });
      }

      if (config.cancelToken) {
        // Handle cancellation
        config.cancelToken.promise.then(function onCanceled(cancel) {
          if (req.aborted) return;

          req.abort();
          reject(cancel);
        });
      }

      // Send the request
      if (utils$9.isStream(data)) {
        data.on('error', function handleStreamError(err) {
          reject(enhanceError$1(err, config, null, req));
        }).pipe(req);
      } else {
        req.end(data);
      }
    });
  };

  var utils$8 = utils$h;
  var normalizeHeaderName = normalizeHeaderName$1;
  var enhanceError = enhanceError$3;

  var DEFAULT_CONTENT_TYPE = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };

  function setContentTypeIfUnset(headers, value) {
    if (!utils$8.isUndefined(headers) && utils$8.isUndefined(headers['Content-Type'])) {
      headers['Content-Type'] = value;
    }
  }

  function getDefaultAdapter() {
    var adapter;
    if (typeof XMLHttpRequest !== 'undefined') {
      // For browsers use XHR adapter
      adapter = xhr;
    } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
      // For node use HTTP adapter
      adapter = http_1;
    }
    return adapter;
  }

  function stringifySafely(rawValue, parser, encoder) {
    if (utils$8.isString(rawValue)) {
      try {
        (parser || JSON.parse)(rawValue);
        return utils$8.trim(rawValue);
      } catch (e) {
        if (e.name !== 'SyntaxError') {
          throw e;
        }
      }
    }

    return (encoder || JSON.stringify)(rawValue);
  }

  var defaults$5 = {

    transitional: {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false
    },

    adapter: getDefaultAdapter(),

    transformRequest: [function transformRequest(data, headers) {
      normalizeHeaderName(headers, 'Accept');
      normalizeHeaderName(headers, 'Content-Type');

      if (utils$8.isFormData(data) ||
        utils$8.isArrayBuffer(data) ||
        utils$8.isBuffer(data) ||
        utils$8.isStream(data) ||
        utils$8.isFile(data) ||
        utils$8.isBlob(data)
      ) {
        return data;
      }
      if (utils$8.isArrayBufferView(data)) {
        return data.buffer;
      }
      if (utils$8.isURLSearchParams(data)) {
        setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
        return data.toString();
      }
      if (utils$8.isObject(data) || (headers && headers['Content-Type'] === 'application/json')) {
        setContentTypeIfUnset(headers, 'application/json');
        return stringifySafely(data);
      }
      return data;
    }],

    transformResponse: [function transformResponse(data) {
      var transitional = this.transitional;
      var silentJSONParsing = transitional && transitional.silentJSONParsing;
      var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
      var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

      if (strictJSONParsing || (forcedJSONParsing && utils$8.isString(data) && data.length)) {
        try {
          return JSON.parse(data);
        } catch (e) {
          if (strictJSONParsing) {
            if (e.name === 'SyntaxError') {
              throw enhanceError(e, this, 'E_JSON_PARSE');
            }
            throw e;
          }
        }
      }

      return data;
    }],

    /**
     * A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
    timeout: 0,

    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',

    maxContentLength: -1,
    maxBodyLength: -1,

    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    }
  };

  defaults$5.headers = {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  };

  utils$8.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
    defaults$5.headers[method] = {};
  });

  utils$8.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
    defaults$5.headers[method] = utils$8.merge(DEFAULT_CONTENT_TYPE);
  });

  var defaults_1 = defaults$5;

  var utils$7 = utils$h;
  var defaults$4 = defaults_1;

  /**
   * Transform the data for a request or a response
   *
   * @param {Object|String} data The data to be transformed
   * @param {Array} headers The headers for the request or response
   * @param {Array|Function} fns A single function or Array of functions
   * @returns {*} The resulting transformed data
   */
  var transformData$1 = function transformData(data, headers, fns) {
    var context = this || defaults$4;
    /*eslint no-param-reassign:0*/
    utils$7.forEach(fns, function transform(fn) {
      data = fn.call(context, data, headers);
    });

    return data;
  };

  var isCancel$1 = function isCancel(value) {
    return !!(value && value.__CANCEL__);
  };

  var utils$6 = utils$h;
  var transformData = transformData$1;
  var isCancel = isCancel$1;
  var defaults$3 = defaults_1;

  /**
   * Throws a `Cancel` if cancellation has been requested.
   */
  function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
      config.cancelToken.throwIfRequested();
    }
  }

  /**
   * Dispatch a request to the server using the configured adapter.
   *
   * @param {object} config The config that is to be used for the request
   * @returns {Promise} The Promise to be fulfilled
   */
  var dispatchRequest$1 = function dispatchRequest(config) {
    throwIfCancellationRequested(config);

    // Ensure headers exist
    config.headers = config.headers || {};

    // Transform request data
    config.data = transformData.call(
      config,
      config.data,
      config.headers,
      config.transformRequest
    );

    // Flatten headers
    config.headers = utils$6.merge(
      config.headers.common || {},
      config.headers[config.method] || {},
      config.headers
    );

    utils$6.forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      function cleanHeaderConfig(method) {
        delete config.headers[method];
      }
    );

    var adapter = config.adapter || defaults$3.adapter;

    return adapter(config).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config);

      // Transform response data
      response.data = transformData.call(
        config,
        response.data,
        response.headers,
        config.transformResponse
      );

      return response;
    }, function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config);

        // Transform response data
        if (reason && reason.response) {
          reason.response.data = transformData.call(
            config,
            reason.response.data,
            reason.response.headers,
            config.transformResponse
          );
        }
      }

      return Promise.reject(reason);
    });
  };

  var utils$5 = utils$h;

  /**
   * Config-specific merge-function which creates a new config-object
   * by merging two configuration objects together.
   *
   * @param {Object} config1
   * @param {Object} config2
   * @returns {Object} New object resulting from merging config2 to config1
   */
  var mergeConfig$2 = function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    var config = {};

    var valueFromConfig2Keys = ['url', 'method', 'data'];
    var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
    var defaultToConfig2Keys = [
      'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
      'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
      'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
      'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
      'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
    ];
    var directMergeKeys = ['validateStatus'];

    function getMergedValue(target, source) {
      if (utils$5.isPlainObject(target) && utils$5.isPlainObject(source)) {
        return utils$5.merge(target, source);
      } else if (utils$5.isPlainObject(source)) {
        return utils$5.merge({}, source);
      } else if (utils$5.isArray(source)) {
        return source.slice();
      }
      return source;
    }

    function mergeDeepProperties(prop) {
      if (!utils$5.isUndefined(config2[prop])) {
        config[prop] = getMergedValue(config1[prop], config2[prop]);
      } else if (!utils$5.isUndefined(config1[prop])) {
        config[prop] = getMergedValue(undefined, config1[prop]);
      }
    }

    utils$5.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
      if (!utils$5.isUndefined(config2[prop])) {
        config[prop] = getMergedValue(undefined, config2[prop]);
      }
    });

    utils$5.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

    utils$5.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
      if (!utils$5.isUndefined(config2[prop])) {
        config[prop] = getMergedValue(undefined, config2[prop]);
      } else if (!utils$5.isUndefined(config1[prop])) {
        config[prop] = getMergedValue(undefined, config1[prop]);
      }
    });

    utils$5.forEach(directMergeKeys, function merge(prop) {
      if (prop in config2) {
        config[prop] = getMergedValue(config1[prop], config2[prop]);
      } else if (prop in config1) {
        config[prop] = getMergedValue(undefined, config1[prop]);
      }
    });

    var axiosKeys = valueFromConfig2Keys
      .concat(mergeDeepPropertiesKeys)
      .concat(defaultToConfig2Keys)
      .concat(directMergeKeys);

    var otherKeys = Object
      .keys(config1)
      .concat(Object.keys(config2))
      .filter(function filterAxiosKeys(key) {
        return axiosKeys.indexOf(key) === -1;
      });

    utils$5.forEach(otherKeys, mergeDeepProperties);

    return config;
  };

  var pkg = require$$0;

  var validators$1 = {};

  // eslint-disable-next-line func-names
  ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
    validators$1[type] = function validator(thing) {
      return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
    };
  });

  var deprecatedWarnings = {};
  var currentVerArr = pkg.version.split('.');

  /**
   * Compare package versions
   * @param {string} version
   * @param {string?} thanVersion
   * @returns {boolean}
   */
  function isOlderVersion(version, thanVersion) {
    var pkgVersionArr = thanVersion ? thanVersion.split('.') : currentVerArr;
    var destVer = version.split('.');
    for (var i = 0; i < 3; i++) {
      if (pkgVersionArr[i] > destVer[i]) {
        return true;
      } else if (pkgVersionArr[i] < destVer[i]) {
        return false;
      }
    }
    return false;
  }

  /**
   * Transitional option validator
   * @param {function|boolean?} validator
   * @param {string?} version
   * @param {string} message
   * @returns {function}
   */
  validators$1.transitional = function transitional(validator, version, message) {
    var isDeprecated = version && isOlderVersion(version);

    function formatMessage(opt, desc) {
      return '[Axios v' + pkg.version + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
    }

    // eslint-disable-next-line func-names
    return function(value, opt, opts) {
      if (validator === false) {
        throw new Error(formatMessage(opt, ' has been removed in ' + version));
      }

      if (isDeprecated && !deprecatedWarnings[opt]) {
        deprecatedWarnings[opt] = true;
        // eslint-disable-next-line no-console
        console.warn(
          formatMessage(
            opt,
            ' has been deprecated since v' + version + ' and will be removed in the near future'
          )
        );
      }

      return validator ? validator(value, opt, opts) : true;
    };
  };

  /**
   * Assert object's properties type
   * @param {object} options
   * @param {object} schema
   * @param {boolean?} allowUnknown
   */

  function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== 'object') {
      throw new TypeError('options must be an object');
    }
    var keys = Object.keys(options);
    var i = keys.length;
    while (i-- > 0) {
      var opt = keys[i];
      var validator = schema[opt];
      if (validator) {
        var value = options[opt];
        var result = value === undefined || validator(value, opt, options);
        if (result !== true) {
          throw new TypeError('option ' + opt + ' must be ' + result);
        }
        continue;
      }
      if (allowUnknown !== true) {
        throw Error('Unknown option ' + opt);
      }
    }
  }

  var validator$1 = {
    isOlderVersion: isOlderVersion,
    assertOptions: assertOptions,
    validators: validators$1
  };

  var utils$4 = utils$h;
  var buildURL = buildURL$3;
  var InterceptorManager = InterceptorManager_1;
  var dispatchRequest = dispatchRequest$1;
  var mergeConfig$1 = mergeConfig$2;
  var validator = validator$1;

  var validators = validator.validators;
  /**
   * Create a new instance of Axios
   *
   * @param {Object} instanceConfig The default config for the instance
   */
  function Axios$1(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {Object} config The config specific for this request (merged with this.defaults)
   */
  Axios$1.prototype.request = function request(config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof config === 'string') {
      config = arguments[1] || {};
      config.url = arguments[0];
    } else {
      config = config || {};
    }

    config = mergeConfig$1(this.defaults, config);

    // Set config.method
    if (config.method) {
      config.method = config.method.toLowerCase();
    } else if (this.defaults.method) {
      config.method = this.defaults.method.toLowerCase();
    } else {
      config.method = 'get';
    }

    var transitional = config.transitional;

    if (transitional !== undefined) {
      validator.assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean, '1.0.0'),
        forcedJSONParsing: validators.transitional(validators.boolean, '1.0.0'),
        clarifyTimeoutError: validators.transitional(validators.boolean, '1.0.0')
      }, false);
    }

    // filter out skipped interceptors
    var requestInterceptorChain = [];
    var synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }

      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });

    var responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });

    var promise;

    if (!synchronousRequestInterceptors) {
      var chain = [dispatchRequest, undefined];

      Array.prototype.unshift.apply(chain, requestInterceptorChain);
      chain = chain.concat(responseInterceptorChain);

      promise = Promise.resolve(config);
      while (chain.length) {
        promise = promise.then(chain.shift(), chain.shift());
      }

      return promise;
    }


    var newConfig = config;
    while (requestInterceptorChain.length) {
      var onFulfilled = requestInterceptorChain.shift();
      var onRejected = requestInterceptorChain.shift();
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected(error);
        break;
      }
    }

    try {
      promise = dispatchRequest(newConfig);
    } catch (error) {
      return Promise.reject(error);
    }

    while (responseInterceptorChain.length) {
      promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
    }

    return promise;
  };

  Axios$1.prototype.getUri = function getUri(config) {
    config = mergeConfig$1(this.defaults, config);
    return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
  };

  // Provide aliases for supported request methods
  utils$4.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
    /*eslint func-names:0*/
    Axios$1.prototype[method] = function(url, config) {
      return this.request(mergeConfig$1(config || {}, {
        method: method,
        url: url,
        data: (config || {}).data
      }));
    };
  });

  utils$4.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
    /*eslint func-names:0*/
    Axios$1.prototype[method] = function(url, data, config) {
      return this.request(mergeConfig$1(config || {}, {
        method: method,
        url: url,
        data: data
      }));
    };
  });

  var Axios_1 = Axios$1;

  /**
   * A `Cancel` is an object that is thrown when an operation is canceled.
   *
   * @class
   * @param {string=} message The message.
   */
  function Cancel$1(message) {
    this.message = message;
  }

  Cancel$1.prototype.toString = function toString() {
    return 'Cancel' + (this.message ? ': ' + this.message : '');
  };

  Cancel$1.prototype.__CANCEL__ = true;

  var Cancel_1 = Cancel$1;

  var Cancel = Cancel_1;

  /**
   * A `CancelToken` is an object that can be used to request cancellation of an operation.
   *
   * @class
   * @param {Function} executor The executor function.
   */
  function CancelToken(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    var resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });

    var token = this;
    executor(function cancel(message) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }

      token.reason = new Cancel(message);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `Cancel` if cancellation has been requested.
   */
  CancelToken.prototype.throwIfRequested = function throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  };

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  CancelToken.source = function source() {
    var cancel;
    var token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token: token,
      cancel: cancel
    };
  };

  var CancelToken_1 = CancelToken;

  /**
   * Syntactic sugar for invoking a function and expanding an array for arguments.
   *
   * Common use case would be to use `Function.prototype.apply`.
   *
   *  ```js
   *  function f(x, y, z) {}
   *  var args = [1, 2, 3];
   *  f.apply(null, args);
   *  ```
   *
   * With `spread` this example can be re-written.
   *
   *  ```js
   *  spread(function(x, y, z) {})([1, 2, 3]);
   *  ```
   *
   * @param {Function} callback
   * @returns {Function}
   */
  var spread = function spread(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  };

  /**
   * Determines whether the payload is an error thrown by Axios
   *
   * @param {*} payload The value to test
   * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
   */
  var isAxiosError = function isAxiosError(payload) {
    return (typeof payload === 'object') && (payload.isAxiosError === true);
  };

  var utils$3 = utils$h;
  var bind = bind$2;
  var Axios = Axios_1;
  var mergeConfig = mergeConfig$2;
  var defaults$2 = defaults_1;

  /**
   * Create an instance of Axios
   *
   * @param {Object} defaultConfig The default config for the instance
   * @return {Axios} A new instance of Axios
   */
  function createInstance(defaultConfig) {
    var context = new Axios(defaultConfig);
    var instance = bind(Axios.prototype.request, context);

    // Copy axios.prototype to instance
    utils$3.extend(instance, Axios.prototype, context);

    // Copy context to instance
    utils$3.extend(instance, context);

    return instance;
  }

  // Create the default instance to be exported
  var axios$1 = createInstance(defaults$2);

  // Expose Axios class to allow class inheritance
  axios$1.Axios = Axios;

  // Factory for creating new instances
  axios$1.create = function create(instanceConfig) {
    return createInstance(mergeConfig(axios$1.defaults, instanceConfig));
  };

  // Expose Cancel & CancelToken
  axios$1.Cancel = Cancel_1;
  axios$1.CancelToken = CancelToken_1;
  axios$1.isCancel = isCancel$1;

  // Expose all/spread
  axios$1.all = function all(promises) {
    return Promise.all(promises);
  };
  axios$1.spread = spread;

  // Expose isAxiosError
  axios$1.isAxiosError = isAxiosError;

  axios$2.exports = axios$1;

  // Allow use of default import syntax in TypeScript
  axios$2.exports.default = axios$1;

  var axios = axios$2.exports;

  function _defineProperty$8(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty$8(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}function t(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}function n(){return (n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);}return e}).apply(this,arguments)}function r(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t;}function i(e,t){if(null==e)return {};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(i[n]=e[n]);return i}function o(e){return 1==(null!=(t=e)&&"object"==typeof t&&!1===Array.isArray(t))&&"[object Object]"===Object.prototype.toString.call(e);var t;}var u=Object.prototype,a=u.toString,f=u.hasOwnProperty,c=/^\s*function (\w+)/;function l(e){var t,n=null!==(t=null==e?void 0:e.type)&&void 0!==t?t:e;if(n){var r=n.toString().match(c);return r?r[1]:""}return ""}var s=function(e){var t,n;return !1!==o(e)&&"function"==typeof(t=e.constructor)&&!1!==o(n=t.prototype)&&!1!==n.hasOwnProperty("isPrototypeOf")},v=function(e){return e},y=v;if("production"!==process.env.NODE_ENV){var p="undefined"!=typeof console;y=p?function(e){console.warn("[VueTypes warn]: "+e);}:v;}var d=function(e,t){return f.call(e,t)},h=Number.isInteger||function(e){return "number"==typeof e&&isFinite(e)&&Math.floor(e)===e},b=Array.isArray||function(e){return "[object Array]"===a.call(e)},O=function(e){return "[object Function]"===a.call(e)},g=function(e){return s(e)&&d(e,"_vueTypes_name")},m=function(e){return s(e)&&(d(e,"type")||["_vueTypes_name","validator","default","required"].some(function(t){return d(e,t)}))};function j(e,t){return Object.defineProperty(e.bind(t),"__original",{value:e})}function _(e,t,n){var r;void 0===n&&(n=!1);var i=!0,o="";r=s(e)?e:{type:e};var u=g(r)?r._vueTypes_name+" - ":"";if(m(r)&&null!==r.type){if(void 0===r.type||!0===r.type)return i;if(!r.required&&void 0===t)return i;b(r.type)?(i=r.type.some(function(e){return !0===_(e,t,!0)}),o=r.type.map(function(e){return l(e)}).join(" or ")):i="Array"===(o=l(r))?b(t):"Object"===o?s(t):"String"===o||"Number"===o||"Boolean"===o||"Function"===o?function(e){if(null==e)return "";var t=e.constructor.toString().match(c);return t?t[1]:""}(t)===o:t instanceof r.type;}if(!i){var a=u+'value "'+t+'" should be of type "'+o+'"';return !1===n?(y(a),!1):a}if(d(r,"validator")&&O(r.validator)){var f=y,v=[];if(y=function(e){v.push(e);},i=r.validator(t),y=f,!i){var p=(v.length>1?"* ":"")+v.join("\n* ");return v.length=0,!1===n?(y(p),i):p}}return i}function T(e,t){var n=Object.defineProperties(t,{_vueTypes_name:{value:e,writable:!0},isRequired:{get:function(){return this.required=!0,this}},def:{value:function(e){return void 0!==e||this.default?O(e)||!0===_(this,e,!0)?(this.default=b(e)?function(){return [].concat(e)}:s(e)?function(){return Object.assign({},e)}:e,this):(y(this._vueTypes_name+' - invalid default value: "'+e+'"'),this):this}}}),r=n.validator;return O(r)&&(n.validator=j(r,n)),n}function w(e,t){var n=T(e,t);return Object.defineProperty(n,"validate",{value:function(e){return O(this.validator)&&y(this._vueTypes_name+" - calling .validate() will overwrite the current custom validator function. Validator info:\n"+JSON.stringify(this)),this.validator=j(e,this),this}})}function k(e,t,n){var r,o,u=(r=t,o={},Object.getOwnPropertyNames(r).forEach(function(e){o[e]=Object.getOwnPropertyDescriptor(r,e);}),Object.defineProperties({},o));if(u._vueTypes_name=e,!s(n))return u;var a,f,c=n.validator,l=i(n,["validator"]);if(O(c)){var v=u.validator;v&&(v=null!==(f=(a=v).__original)&&void 0!==f?f:a),u.validator=j(v?function(e){return v.call(this,e)&&c.call(this,e)}:c,u);}return Object.assign(u,l)}function P(e){return e.replace(/^(?!\s*$)/gm,"  ")}var x=function(){return w("any",{})},A=function(){return w("function",{type:Function})},E=function(){return w("boolean",{type:Boolean})},N=function(){return w("string",{type:String})},q=function(){return w("number",{type:Number})},S=function(){return w("array",{type:Array})},V=function(){return w("object",{type:Object})},F=function(){return T("integer",{type:Number,validator:function(e){return h(e)}})},D=function(){return T("symbol",{validator:function(e){return "symbol"==typeof e}})};function L(e,t){if(void 0===t&&(t="custom validation failed"),"function"!=typeof e)throw new TypeError("[VueTypes error]: You must provide a function as argument");return T(e.name||"<<anonymous function>>",{validator:function(n){var r=e(n);return r||y(this._vueTypes_name+" - "+t),r}})}function Y(e){if(!b(e))throw new TypeError("[VueTypes error]: You must provide an array as argument.");var t='oneOf - value should be one of "'+e.join('", "')+'".',n=e.reduce(function(e,t){if(null!=t){var n=t.constructor;-1===e.indexOf(n)&&e.push(n);}return e},[]);return T("oneOf",{type:n.length>0?n:void 0,validator:function(n){var r=-1!==e.indexOf(n);return r||y(t),r}})}function B(e){if(!b(e))throw new TypeError("[VueTypes error]: You must provide an array as argument");for(var t=!1,n=[],r=0;r<e.length;r+=1){var i=e[r];if(m(i)){if(g(i)&&"oneOf"===i._vueTypes_name){n=n.concat(i.type);continue}if(O(i.validator)&&(t=!0),!0!==i.type&&i.type){n=n.concat(i.type);continue}}n.push(i);}return n=n.filter(function(e,t){return n.indexOf(e)===t}),T("oneOfType",t?{type:n,validator:function(t){var n=[],r=e.some(function(e){var r=_(g(e)&&"oneOf"===e._vueTypes_name?e.type||null:e,t,!0);return "string"==typeof r&&n.push(r),!0===r});return r||y("oneOfType - provided value does not match any of the "+n.length+" passed-in validators:\n"+P(n.join("\n"))),r}}:{type:n})}function I(e){return T("arrayOf",{type:Array,validator:function(t){var n,r=t.every(function(t){return !0===(n=_(e,t,!0))});return r||y("arrayOf - value validation error:\n"+P(n)),r}})}function J(e){return T("instanceOf",{type:e})}function M(e){return T("objectOf",{type:Object,validator:function(t){var n,r=Object.keys(t).every(function(r){return !0===(n=_(e,t[r],!0))});return r||y("objectOf - value validation error:\n"+P(n)),r}})}function R(e){var t=Object.keys(e),n=t.filter(function(t){var n;return !!(null===(n=e[t])||void 0===n?void 0:n.required)}),r=T("shape",{type:Object,validator:function(r){var i=this;if(!s(r))return !1;var o=Object.keys(r);if(n.length>0&&n.some(function(e){return -1===o.indexOf(e)})){var u=n.filter(function(e){return -1===o.indexOf(e)});return y(1===u.length?'shape - required property "'+u[0]+'" is not defined.':'shape - required properties "'+u.join('", "')+'" are not defined.'),!1}return o.every(function(n){if(-1===t.indexOf(n))return !0===i._vueTypes_isLoose||(y('shape - shape definition does not include a "'+n+'" property. Allowed keys: "'+t.join('", "')+'".'),!1);var o=_(e[n],r[n],!0);return "string"==typeof o&&y('shape - "'+n+'" property validation error:\n '+P(o)),!0===o})}});return Object.defineProperty(r,"_vueTypes_isLoose",{writable:!0,value:!1}),Object.defineProperty(r,"loose",{get:function(){return this._vueTypes_isLoose=!0,this}}),r}var $=function(){function e(){}return e.extend=function(e){var t=this;if(b(e))return e.forEach(function(e){return t.extend(e)}),this;var n=e.name,r=e.validate,o=void 0!==r&&r,u=e.getter,a=void 0!==u&&u,f=i(e,["name","validate","getter"]);if(d(this,n))throw new TypeError('[VueTypes error]: Type "'+n+'" already defined');var c,l=f.type;return g(l)?(delete f.type,Object.defineProperty(this,n,a?{get:function(){return k(n,l,f)}}:{value:function(){var e,t=k(n,l,f);return t.validator&&(t.validator=(e=t.validator).bind.apply(e,[t].concat([].slice.call(arguments)))),t}})):(c=a?{get:function(){var e=Object.assign({},f);return o?w(n,e):T(n,e)},enumerable:!0}:{value:function(){var e,t,r=Object.assign({},f);return e=o?w(n,r):T(n,r),r.validator&&(e.validator=(t=r.validator).bind.apply(t,[e].concat([].slice.call(arguments)))),e},enumerable:!0},Object.defineProperty(this,n,c))},t(e,null,[{key:"any",get:function(){return x()}},{key:"func",get:function(){return A().def(this.defaults.func)}},{key:"bool",get:function(){return E().def(this.defaults.bool)}},{key:"string",get:function(){return N().def(this.defaults.string)}},{key:"number",get:function(){return q().def(this.defaults.number)}},{key:"array",get:function(){return S().def(this.defaults.array)}},{key:"object",get:function(){return V().def(this.defaults.object)}},{key:"integer",get:function(){return F().def(this.defaults.integer)}},{key:"symbol",get:function(){return D()}}]),e}();function z(e){var i;return void 0===e&&(e={func:function(){},bool:!0,string:"",number:0,array:function(){return []},object:function(){return {}},integer:0}),(i=function(i){function o(){return i.apply(this,arguments)||this}return r(o,i),t(o,null,[{key:"sensibleDefaults",get:function(){return n({},this.defaults)},set:function(t){this.defaults=!1!==t?n({},!0!==t?t:e):{};}}]),o}($)).defaults=n({},e),i}$.defaults={},$.custom=L,$.oneOf=Y,$.instanceOf=J,$.oneOfType=B,$.arrayOf=I,$.objectOf=M,$.shape=R,$.utils={validate:function(e,t){return !0===_(t,e,!0)},toType:function(e,t,n){return void 0===n&&(n=!1),n?w(e,t):T(e,t)}};(function(e){function t(){return e.apply(this,arguments)||this}return r(t,e),t})(z());

  var PropTypes = z({
    func: undefined,
    bool: undefined,
    string: undefined,
    number: undefined,
    array: undefined,
    object: undefined,
    integer: undefined
  });
  PropTypes.extend([{
    name: 'looseBool',
    getter: true,
    type: Boolean,
    default: undefined
  }, {
    name: 'style',
    getter: true,
    type: [String, Object],
    default: undefined
  }, {
    name: 'VNodeChild',
    getter: true,
    type: null
  }]);
  var PropsTypes = PropTypes;

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  var isFunction = function isFunction(val) {
    return typeof val === 'function';
  };

  var cacheStringFunction = function cacheStringFunction(fn) {
    var cache = Object.create(null);
    return function (str) {
      var hit = cache[str];
      return hit || (cache[str] = fn(str));
    };
  };

  var camelizeRE = /-(\w)/g;
  var camelize = cacheStringFunction(function (str) {
    return str.replace(camelizeRE, function (_, c) {
      return c ? c.toUpperCase() : '';
    });
  });
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cacheStringFunction(function (str) {
    return str.replace(hyphenateRE, '-$1').toLowerCase();
  });
  var hasOwnProperty = Object.prototype.hasOwnProperty;

  var hasOwn = function hasOwn(val, key) {
    return hasOwnProperty.call(val, key);
  }; // change from vue sourcecode


  function resolvePropValue(options, props, key, value) {
    var opt = options[key];

    if (opt != null) {
      var hasDefault = hasOwn(opt, 'default'); // default values

      if (hasDefault && value === undefined) {
        var defaultValue = opt.default;
        value = opt.type !== Function && isFunction(defaultValue) ? defaultValue() : defaultValue;
      } // boolean casting


      if (opt.type === Boolean) {
        if (!hasOwn(props, key) && !hasDefault) {
          value = false;
        } else if (value === '') {
          value = true;
        }
      }
    }

    return value;
  }

  function _arrayLikeToArray$2(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  function _unsupportedIterableToArray$2(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$2(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen);
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray$2(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$2(arr) || _nonIterableSpread();
  }

  var isValid = function isValid(value) {
    return value !== undefined && value !== null && value !== '';
  };

  var isValid$1 = isValid;

  var flattenChildren = function flattenChildren() {
    var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var filterEmpty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var temp = Array.isArray(children) ? children : [children];
    var res = [];
    temp.forEach(function (child) {
      if (Array.isArray(child)) {
        res.push.apply(res, _toConsumableArray(flattenChildren(child, filterEmpty)));
      } else if (child && child.type === vue.Fragment) {
        res.push.apply(res, _toConsumableArray(flattenChildren(child.children, filterEmpty)));
      } else if (child && vue.isVNode(child)) {
        if (filterEmpty && !isEmptyElement(child)) {
          res.push(child);
        } else if (!filterEmpty) {
          res.push(child);
        }
      } else if (isValid$1(child)) {
        res.push(child);
      }
    });
    return res;
  };

  var getSlot = function getSlot(self) {
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (vue.isVNode(self)) {
      if (self.type === vue.Fragment) {
        return name === 'default' ? flattenChildren(self.children) : [];
      } else if (self.children && self.children[name]) {
        return flattenChildren(self.children[name](options));
      } else {
        return [];
      }
    } else {
      var res = self.$slots[name] && self.$slots[name](options);
      return flattenChildren(res);
    }
  };

  var getOptionProps = function getOptionProps(instance) {
    var res = {};

    if (instance.$ && instance.$.vnode) {
      var props = instance.$.vnode.props || {};
      Object.keys(instance.$props).forEach(function (k) {
        var v = instance.$props[k];
        var hyphenateKey = hyphenate(k);

        if (v !== undefined || hyphenateKey in props) {
          res[k] = v; // 直接取 $props[k]
        }
      });
    } else if (vue.isVNode(instance) && _typeof(instance.type) === 'object') {
      var originProps = instance.props || {};
      var _props = {};
      Object.keys(originProps).forEach(function (key) {
        _props[camelize(key)] = originProps[key];
      });
      var options = instance.type.props || {};
      Object.keys(options).forEach(function (k) {
        var v = resolvePropValue(options, _props, k, _props[k]);

        if (v !== undefined || k in _props) {
          res[k] = v;
        }
      });
    }

    return res;
  };

  var getComponent = function getComponent(instance) {
    var prop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : instance;
    var execute = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    var com = undefined;

    if (instance.$) {
      var temp = instance[prop];

      if (temp !== undefined) {
        return typeof temp === 'function' && execute ? temp(options) : temp;
      } else {
        com = instance.$slots[prop];
        com = execute && com ? com(options) : com;
      }
    } else if (vue.isVNode(instance)) {
      var _temp = instance.props && instance.props[prop];

      if (_temp !== undefined && instance.props !== null) {
        return typeof _temp === 'function' && execute ? _temp(options) : _temp;
      } else if (instance.type === vue.Fragment) {
        com = instance.children;
      } else if (instance.children && instance.children[prop]) {
        com = instance.children[prop];
        com = execute && com ? com(options) : com;
      }
    }

    if (Array.isArray(com)) {
      com = flattenChildren(com);
      com = com.length === 1 ? com[0] : com;
      com = com.length === 0 ? undefined : com;
    }

    return com;
  };
  function isEmptyElement(c) {
    return c && (c.type === vue.Comment || c.type === vue.Fragment && c.children.length === 0 || c.type === vue.Text && c.children.trim() === '');
  }

  var BaseMixin = {
    methods: {
      setState: function setState() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var callback = arguments.length > 1 ? arguments[1] : undefined;
        var newState = typeof state === 'function' ? state(this.$data, this.$props) : state;

        if (this.getDerivedStateFromProps) {
          var s = this.getDerivedStateFromProps(getOptionProps(this), _extends(_extends({}, this.$data), newState));

          if (s === null) {
            return;
          } else {
            newState = _extends(_extends({}, newState), s || {});
          }
        }

        _extends(this.$data, newState);

        if (this._.isMounted) {
          this.$forceUpdate();
        }

        vue.nextTick(function () {
          callback && callback();
        });
      },
      __emit: function __emit() {
        // 直接调用事件，底层组件不需要vueTool记录events
        var args = [].slice.call(arguments, 0);
        var eventName = args[0];
        eventName = "on".concat(eventName[0].toUpperCase()).concat(eventName.substring(1));
        var event = this.$props[eventName] || this.$attrs[eventName];

        if (args.length && event) {
          if (Array.isArray(event)) {
            for (var i = 0, l = event.length; i < l; i++) {
              event[i].apply(event, _toConsumableArray(args.slice(1)));
            }
          } else {
            event.apply(void 0, _toConsumableArray(args.slice(1)));
          }
        }
      }
    }
  };

  var __rest$1 = undefined && undefined.__rest || function (s, e) {
    var t = {};

    for (var p in s) {
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }

    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  };
  var getTransitionGroupProps = function getTransitionGroupProps(transitionName) {
    var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var transitionProps = transitionName ? _extends({
      appear: true,
      // appearFromClass: `${transitionName}-appear ${transitionName}-appear-prepare`,
      appearActiveClass: "".concat(transitionName),
      appearToClass: "".concat(transitionName, "-appear ").concat(transitionName, "-appear-active"),
      enterFromClass: "".concat(transitionName, "-appear ").concat(transitionName, "-enter ").concat(transitionName, "-appear-prepare ").concat(transitionName, "-enter-prepare"),
      enterActiveClass: "".concat(transitionName),
      enterToClass: "".concat(transitionName, "-enter ").concat(transitionName, "-appear ").concat(transitionName, "-appear-active ").concat(transitionName, "-enter-active"),
      leaveActiveClass: "".concat(transitionName, " ").concat(transitionName, "-leave"),
      leaveToClass: "".concat(transitionName, "-leave-active")
    }, opt) : _extends({
      css: false
    }, opt);
    return transitionProps;
  };
  var TransitionGroup = vue.TransitionGroup;

  if (process.env.NODE_ENV === 'test') {
    vue.defineComponent({
      name: 'TransitionForTest',
      inheritAttrs: false,
      setup: function setup(_props, _ref) {
        var slots = _ref.slots,
            attrs = _ref.attrs;
        var instance = vue.getCurrentInstance();
        vue.onUpdated(function () {
          var child = instance.subTree.children[0];

          if (child && child.dirs && child.dirs[0]) {
            var value = child.dirs[0].value;
            var oldValue = child.dirs[0].oldValue;

            if (!value && value !== oldValue) {
              vue.nextTick(function () {
                if (attrs.onAfterLeave) {
                  attrs.onAfterLeave(instance.vnode.el);
                }
              });
            }
          }
        });
        return function () {
          var _a;

          return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
        };
      }
    });
    TransitionGroup = vue.defineComponent({
      name: 'TransitionGroupForTest',
      inheritAttrs: false,
      props: ['tag', 'class'],
      setup: function setup(props, _ref2) {
        var slots = _ref2.slots;
        return function () {
          var _a;

          var Tag = props.tag,
              rest = __rest$1(props, ["tag"]);

          var children = ((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)) || [];

          if (Tag) {
            return vue.createVNode(Tag, rest, {
              default: function _default() {
                return [children];
              }
            });
          } else {
            return children;
          }
        };
      }
    });
  } // ================== Collapse Motion ==================

  /**
   * Take input from [0, n] and return it as [0, 1]
   * @hidden
   */
  function bound01(n, max) {
      if (isOnePointZero(n)) {
          n = '100%';
      }
      var isPercent = isPercentage(n);
      n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
      // Automatically convert percentage into number
      if (isPercent) {
          n = parseInt(String(n * max), 10) / 100;
      }
      // Handle floating point rounding errors
      if (Math.abs(n - max) < 0.000001) {
          return 1;
      }
      // Convert into [0, 1] range if it isn't already
      if (max === 360) {
          // If n is a hue given in degrees,
          // wrap around out-of-range values into [0, 360] range
          // then convert into [0, 1].
          n = (n < 0 ? (n % max) + max : n % max) / parseFloat(String(max));
      }
      else {
          // If n not a hue given in degrees
          // Convert into [0, 1] range if it isn't already.
          n = (n % max) / parseFloat(String(max));
      }
      return n;
  }
  /**
   * Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
   * <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
   * @hidden
   */
  function isOnePointZero(n) {
      return typeof n === 'string' && n.indexOf('.') !== -1 && parseFloat(n) === 1;
  }
  /**
   * Check to see if string passed in is a percentage
   * @hidden
   */
  function isPercentage(n) {
      return typeof n === 'string' && n.indexOf('%') !== -1;
  }
  /**
   * Return a valid alpha value [0,1] with all invalid values being set to 1
   * @hidden
   */
  function boundAlpha(a) {
      a = parseFloat(a);
      if (isNaN(a) || a < 0 || a > 1) {
          a = 1;
      }
      return a;
  }
  /**
   * Replace a decimal with it's percentage value
   * @hidden
   */
  function convertToPercentage(n) {
      if (n <= 1) {
          return Number(n) * 100 + "%";
      }
      return n;
  }
  /**
   * Force a hex value to have 2 characters
   * @hidden
   */
  function pad2(c) {
      return c.length === 1 ? '0' + c : String(c);
  }

  // `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
  // <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>
  /**
   * Handle bounds / percentage checking to conform to CSS color spec
   * <http://www.w3.org/TR/css3-color/>
   * *Assumes:* r, g, b in [0, 255] or [0, 1]
   * *Returns:* { r, g, b } in [0, 255]
   */
  function rgbToRgb(r, g, b) {
      return {
          r: bound01(r, 255) * 255,
          g: bound01(g, 255) * 255,
          b: bound01(b, 255) * 255,
      };
  }
  function hue2rgb(p, q, t) {
      if (t < 0) {
          t += 1;
      }
      if (t > 1) {
          t -= 1;
      }
      if (t < 1 / 6) {
          return p + (q - p) * (6 * t);
      }
      if (t < 1 / 2) {
          return q;
      }
      if (t < 2 / 3) {
          return p + (q - p) * (2 / 3 - t) * 6;
      }
      return p;
  }
  /**
   * Converts an HSL color value to RGB.
   *
   * *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
   * *Returns:* { r, g, b } in the set [0, 255]
   */
  function hslToRgb(h, s, l) {
      var r;
      var g;
      var b;
      h = bound01(h, 360);
      s = bound01(s, 100);
      l = bound01(l, 100);
      if (s === 0) {
          // achromatic
          g = l;
          b = l;
          r = l;
      }
      else {
          var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
          var p = 2 * l - q;
          r = hue2rgb(p, q, h + 1 / 3);
          g = hue2rgb(p, q, h);
          b = hue2rgb(p, q, h - 1 / 3);
      }
      return { r: r * 255, g: g * 255, b: b * 255 };
  }
  /**
   * Converts an RGB color value to HSV
   *
   * *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
   * *Returns:* { h, s, v } in [0,1]
   */
  function rgbToHsv(r, g, b) {
      r = bound01(r, 255);
      g = bound01(g, 255);
      b = bound01(b, 255);
      var max = Math.max(r, g, b);
      var min = Math.min(r, g, b);
      var h = 0;
      var v = max;
      var d = max - min;
      var s = max === 0 ? 0 : d / max;
      if (max === min) {
          h = 0; // achromatic
      }
      else {
          switch (max) {
              case r:
                  h = (g - b) / d + (g < b ? 6 : 0);
                  break;
              case g:
                  h = (b - r) / d + 2;
                  break;
              case b:
                  h = (r - g) / d + 4;
                  break;
          }
          h /= 6;
      }
      return { h: h, s: s, v: v };
  }
  /**
   * Converts an HSV color value to RGB.
   *
   * *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
   * *Returns:* { r, g, b } in the set [0, 255]
   */
  function hsvToRgb(h, s, v) {
      h = bound01(h, 360) * 6;
      s = bound01(s, 100);
      v = bound01(v, 100);
      var i = Math.floor(h);
      var f = h - i;
      var p = v * (1 - s);
      var q = v * (1 - f * s);
      var t = v * (1 - (1 - f) * s);
      var mod = i % 6;
      var r = [v, q, p, p, t, v][mod];
      var g = [t, v, v, q, p, p][mod];
      var b = [p, p, t, v, v, q][mod];
      return { r: r * 255, g: g * 255, b: b * 255 };
  }
  /**
   * Converts an RGB color to hex
   *
   * Assumes r, g, and b are contained in the set [0, 255]
   * Returns a 3 or 6 character hex
   */
  function rgbToHex(r, g, b, allow3Char) {
      var hex = [
          pad2(Math.round(r).toString(16)),
          pad2(Math.round(g).toString(16)),
          pad2(Math.round(b).toString(16)),
      ];
      // Return a 3 character hex if possible
      if (allow3Char &&
          hex[0].startsWith(hex[0].charAt(1)) &&
          hex[1].startsWith(hex[1].charAt(1)) &&
          hex[2].startsWith(hex[2].charAt(1))) {
          return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
      }
      return hex.join('');
  }
  /** Converts a hex value to a decimal */
  function convertHexToDecimal(h) {
      return parseIntFromHex(h) / 255;
  }
  /** Parse a base-16 hex value into a base-10 integer */
  function parseIntFromHex(val) {
      return parseInt(val, 16);
  }

  // https://github.com/bahamas10/css-color-names/blob/master/css-color-names.json
  /**
   * @hidden
   */
  var names = {
      aliceblue: '#f0f8ff',
      antiquewhite: '#faebd7',
      aqua: '#00ffff',
      aquamarine: '#7fffd4',
      azure: '#f0ffff',
      beige: '#f5f5dc',
      bisque: '#ffe4c4',
      black: '#000000',
      blanchedalmond: '#ffebcd',
      blue: '#0000ff',
      blueviolet: '#8a2be2',
      brown: '#a52a2a',
      burlywood: '#deb887',
      cadetblue: '#5f9ea0',
      chartreuse: '#7fff00',
      chocolate: '#d2691e',
      coral: '#ff7f50',
      cornflowerblue: '#6495ed',
      cornsilk: '#fff8dc',
      crimson: '#dc143c',
      cyan: '#00ffff',
      darkblue: '#00008b',
      darkcyan: '#008b8b',
      darkgoldenrod: '#b8860b',
      darkgray: '#a9a9a9',
      darkgreen: '#006400',
      darkgrey: '#a9a9a9',
      darkkhaki: '#bdb76b',
      darkmagenta: '#8b008b',
      darkolivegreen: '#556b2f',
      darkorange: '#ff8c00',
      darkorchid: '#9932cc',
      darkred: '#8b0000',
      darksalmon: '#e9967a',
      darkseagreen: '#8fbc8f',
      darkslateblue: '#483d8b',
      darkslategray: '#2f4f4f',
      darkslategrey: '#2f4f4f',
      darkturquoise: '#00ced1',
      darkviolet: '#9400d3',
      deeppink: '#ff1493',
      deepskyblue: '#00bfff',
      dimgray: '#696969',
      dimgrey: '#696969',
      dodgerblue: '#1e90ff',
      firebrick: '#b22222',
      floralwhite: '#fffaf0',
      forestgreen: '#228b22',
      fuchsia: '#ff00ff',
      gainsboro: '#dcdcdc',
      ghostwhite: '#f8f8ff',
      goldenrod: '#daa520',
      gold: '#ffd700',
      gray: '#808080',
      green: '#008000',
      greenyellow: '#adff2f',
      grey: '#808080',
      honeydew: '#f0fff0',
      hotpink: '#ff69b4',
      indianred: '#cd5c5c',
      indigo: '#4b0082',
      ivory: '#fffff0',
      khaki: '#f0e68c',
      lavenderblush: '#fff0f5',
      lavender: '#e6e6fa',
      lawngreen: '#7cfc00',
      lemonchiffon: '#fffacd',
      lightblue: '#add8e6',
      lightcoral: '#f08080',
      lightcyan: '#e0ffff',
      lightgoldenrodyellow: '#fafad2',
      lightgray: '#d3d3d3',
      lightgreen: '#90ee90',
      lightgrey: '#d3d3d3',
      lightpink: '#ffb6c1',
      lightsalmon: '#ffa07a',
      lightseagreen: '#20b2aa',
      lightskyblue: '#87cefa',
      lightslategray: '#778899',
      lightslategrey: '#778899',
      lightsteelblue: '#b0c4de',
      lightyellow: '#ffffe0',
      lime: '#00ff00',
      limegreen: '#32cd32',
      linen: '#faf0e6',
      magenta: '#ff00ff',
      maroon: '#800000',
      mediumaquamarine: '#66cdaa',
      mediumblue: '#0000cd',
      mediumorchid: '#ba55d3',
      mediumpurple: '#9370db',
      mediumseagreen: '#3cb371',
      mediumslateblue: '#7b68ee',
      mediumspringgreen: '#00fa9a',
      mediumturquoise: '#48d1cc',
      mediumvioletred: '#c71585',
      midnightblue: '#191970',
      mintcream: '#f5fffa',
      mistyrose: '#ffe4e1',
      moccasin: '#ffe4b5',
      navajowhite: '#ffdead',
      navy: '#000080',
      oldlace: '#fdf5e6',
      olive: '#808000',
      olivedrab: '#6b8e23',
      orange: '#ffa500',
      orangered: '#ff4500',
      orchid: '#da70d6',
      palegoldenrod: '#eee8aa',
      palegreen: '#98fb98',
      paleturquoise: '#afeeee',
      palevioletred: '#db7093',
      papayawhip: '#ffefd5',
      peachpuff: '#ffdab9',
      peru: '#cd853f',
      pink: '#ffc0cb',
      plum: '#dda0dd',
      powderblue: '#b0e0e6',
      purple: '#800080',
      rebeccapurple: '#663399',
      red: '#ff0000',
      rosybrown: '#bc8f8f',
      royalblue: '#4169e1',
      saddlebrown: '#8b4513',
      salmon: '#fa8072',
      sandybrown: '#f4a460',
      seagreen: '#2e8b57',
      seashell: '#fff5ee',
      sienna: '#a0522d',
      silver: '#c0c0c0',
      skyblue: '#87ceeb',
      slateblue: '#6a5acd',
      slategray: '#708090',
      slategrey: '#708090',
      snow: '#fffafa',
      springgreen: '#00ff7f',
      steelblue: '#4682b4',
      tan: '#d2b48c',
      teal: '#008080',
      thistle: '#d8bfd8',
      tomato: '#ff6347',
      turquoise: '#40e0d0',
      violet: '#ee82ee',
      wheat: '#f5deb3',
      white: '#ffffff',
      whitesmoke: '#f5f5f5',
      yellow: '#ffff00',
      yellowgreen: '#9acd32',
  };

  /**
   * Given a string or object, convert that input to RGB
   *
   * Possible string inputs:
   * ```
   * "red"
   * "#f00" or "f00"
   * "#ff0000" or "ff0000"
   * "#ff000000" or "ff000000"
   * "rgb 255 0 0" or "rgb (255, 0, 0)"
   * "rgb 1.0 0 0" or "rgb (1, 0, 0)"
   * "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
   * "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
   * "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
   * "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
   * "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
   * ```
   */
  function inputToRGB(color) {
      var rgb = { r: 0, g: 0, b: 0 };
      var a = 1;
      var s = null;
      var v = null;
      var l = null;
      var ok = false;
      var format = false;
      if (typeof color === 'string') {
          color = stringInputToObject(color);
      }
      if (typeof color === 'object') {
          if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
              rgb = rgbToRgb(color.r, color.g, color.b);
              ok = true;
              format = String(color.r).substr(-1) === '%' ? 'prgb' : 'rgb';
          }
          else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
              s = convertToPercentage(color.s);
              v = convertToPercentage(color.v);
              rgb = hsvToRgb(color.h, s, v);
              ok = true;
              format = 'hsv';
          }
          else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
              s = convertToPercentage(color.s);
              l = convertToPercentage(color.l);
              rgb = hslToRgb(color.h, s, l);
              ok = true;
              format = 'hsl';
          }
          if (Object.prototype.hasOwnProperty.call(color, 'a')) {
              a = color.a;
          }
      }
      a = boundAlpha(a);
      return {
          ok: ok,
          format: color.format || format,
          r: Math.min(255, Math.max(rgb.r, 0)),
          g: Math.min(255, Math.max(rgb.g, 0)),
          b: Math.min(255, Math.max(rgb.b, 0)),
          a: a,
      };
  }
  // <http://www.w3.org/TR/css3-values/#integers>
  var CSS_INTEGER = '[-\\+]?\\d+%?';
  // <http://www.w3.org/TR/css3-values/#number-value>
  var CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?';
  // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
  var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
  // Actual matching.
  // Parentheses and commas are optional, but not required.
  // Whitespace can take the place of commas or opening paren
  var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
  var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
  var matchers = {
      CSS_UNIT: new RegExp(CSS_UNIT),
      rgb: new RegExp('rgb' + PERMISSIVE_MATCH3),
      rgba: new RegExp('rgba' + PERMISSIVE_MATCH4),
      hsl: new RegExp('hsl' + PERMISSIVE_MATCH3),
      hsla: new RegExp('hsla' + PERMISSIVE_MATCH4),
      hsv: new RegExp('hsv' + PERMISSIVE_MATCH3),
      hsva: new RegExp('hsva' + PERMISSIVE_MATCH4),
      hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
      hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  };
  /**
   * Permissive string parsing.  Take in a number of formats, and output an object
   * based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
   */
  function stringInputToObject(color) {
      color = color.trim().toLowerCase();
      if (color.length === 0) {
          return false;
      }
      var named = false;
      if (names[color]) {
          color = names[color];
          named = true;
      }
      else if (color === 'transparent') {
          return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
      }
      // Try to match string input using regular expressions.
      // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
      // Just return an object and let the conversion functions handle that.
      // This way the result will be the same whether the tinycolor is initialized with string or object.
      var match = matchers.rgb.exec(color);
      if (match) {
          return { r: match[1], g: match[2], b: match[3] };
      }
      match = matchers.rgba.exec(color);
      if (match) {
          return { r: match[1], g: match[2], b: match[3], a: match[4] };
      }
      match = matchers.hsl.exec(color);
      if (match) {
          return { h: match[1], s: match[2], l: match[3] };
      }
      match = matchers.hsla.exec(color);
      if (match) {
          return { h: match[1], s: match[2], l: match[3], a: match[4] };
      }
      match = matchers.hsv.exec(color);
      if (match) {
          return { h: match[1], s: match[2], v: match[3] };
      }
      match = matchers.hsva.exec(color);
      if (match) {
          return { h: match[1], s: match[2], v: match[3], a: match[4] };
      }
      match = matchers.hex8.exec(color);
      if (match) {
          return {
              r: parseIntFromHex(match[1]),
              g: parseIntFromHex(match[2]),
              b: parseIntFromHex(match[3]),
              a: convertHexToDecimal(match[4]),
              format: named ? 'name' : 'hex8',
          };
      }
      match = matchers.hex6.exec(color);
      if (match) {
          return {
              r: parseIntFromHex(match[1]),
              g: parseIntFromHex(match[2]),
              b: parseIntFromHex(match[3]),
              format: named ? 'name' : 'hex',
          };
      }
      match = matchers.hex4.exec(color);
      if (match) {
          return {
              r: parseIntFromHex(match[1] + match[1]),
              g: parseIntFromHex(match[2] + match[2]),
              b: parseIntFromHex(match[3] + match[3]),
              a: convertHexToDecimal(match[4] + match[4]),
              format: named ? 'name' : 'hex8',
          };
      }
      match = matchers.hex3.exec(color);
      if (match) {
          return {
              r: parseIntFromHex(match[1] + match[1]),
              g: parseIntFromHex(match[2] + match[2]),
              b: parseIntFromHex(match[3] + match[3]),
              format: named ? 'name' : 'hex',
          };
      }
      return false;
  }
  /**
   * Check to see if it looks like a CSS unit
   * (see `matchers` above for definition).
   */
  function isValidCSSUnit(color) {
      return Boolean(matchers.CSS_UNIT.exec(String(color)));
  }

  var hueStep = 2; // 色相阶梯

  var saturationStep = 0.16; // 饱和度阶梯，浅色部分

  var saturationStep2 = 0.05; // 饱和度阶梯，深色部分

  var brightnessStep1 = 0.05; // 亮度阶梯，浅色部分

  var brightnessStep2 = 0.15; // 亮度阶梯，深色部分

  var lightColorCount = 5; // 浅色数量，主色上

  var darkColorCount = 4; // 深色数量，主色下
  // 暗色主题颜色映射关系表

  var darkColorMap = [{
    index: 7,
    opacity: 0.15
  }, {
    index: 6,
    opacity: 0.25
  }, {
    index: 5,
    opacity: 0.3
  }, {
    index: 5,
    opacity: 0.45
  }, {
    index: 5,
    opacity: 0.65
  }, {
    index: 5,
    opacity: 0.85
  }, {
    index: 4,
    opacity: 0.9
  }, {
    index: 3,
    opacity: 0.95
  }, {
    index: 2,
    opacity: 0.97
  }, {
    index: 1,
    opacity: 0.98
  }]; // Wrapper function ported from TinyColor.prototype.toHsv
  // Keep it here because of `hsv.h * 360`

  function toHsv(_ref) {
    var r = _ref.r,
        g = _ref.g,
        b = _ref.b;
    var hsv = rgbToHsv(r, g, b);
    return {
      h: hsv.h * 360,
      s: hsv.s,
      v: hsv.v
    };
  } // Wrapper function ported from TinyColor.prototype.toHexString
  // Keep it here because of the prefix `#`


  function toHex(_ref2) {
    var r = _ref2.r,
        g = _ref2.g,
        b = _ref2.b;
    return "#".concat(rgbToHex(r, g, b, false));
  } // Wrapper function ported from TinyColor.prototype.mix, not treeshakable.
  // Amount in range [0, 1]
  // Assume color1 & color2 has no alpha, since the following src code did so.


  function mix(rgb1, rgb2, amount) {
    var p = amount / 100;
    var rgb = {
      r: (rgb2.r - rgb1.r) * p + rgb1.r,
      g: (rgb2.g - rgb1.g) * p + rgb1.g,
      b: (rgb2.b - rgb1.b) * p + rgb1.b
    };
    return rgb;
  }

  function getHue(hsv, i, light) {
    var hue; // 根据色相不同，色相转向不同

    if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
      hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
    } else {
      hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
    }

    if (hue < 0) {
      hue += 360;
    } else if (hue >= 360) {
      hue -= 360;
    }

    return hue;
  }

  function getSaturation(hsv, i, light) {
    // grey color don't change saturation
    if (hsv.h === 0 && hsv.s === 0) {
      return hsv.s;
    }

    var saturation;

    if (light) {
      saturation = hsv.s - saturationStep * i;
    } else if (i === darkColorCount) {
      saturation = hsv.s + saturationStep;
    } else {
      saturation = hsv.s + saturationStep2 * i;
    } // 边界值修正


    if (saturation > 1) {
      saturation = 1;
    } // 第一格的 s 限制在 0.06-0.1 之间


    if (light && i === lightColorCount && saturation > 0.1) {
      saturation = 0.1;
    }

    if (saturation < 0.06) {
      saturation = 0.06;
    }

    return Number(saturation.toFixed(2));
  }

  function getValue(hsv, i, light) {
    var value;

    if (light) {
      value = hsv.v + brightnessStep1 * i;
    } else {
      value = hsv.v - brightnessStep2 * i;
    }

    if (value > 1) {
      value = 1;
    }

    return Number(value.toFixed(2));
  }

  function generate$1(color) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var patterns = [];
    var pColor = inputToRGB(color);

    for (var i = lightColorCount; i > 0; i -= 1) {
      var hsv = toHsv(pColor);
      var colorString = toHex(inputToRGB({
        h: getHue(hsv, i, true),
        s: getSaturation(hsv, i, true),
        v: getValue(hsv, i, true)
      }));
      patterns.push(colorString);
    }

    patterns.push(toHex(pColor));

    for (var _i = 1; _i <= darkColorCount; _i += 1) {
      var _hsv = toHsv(pColor);

      var _colorString = toHex(inputToRGB({
        h: getHue(_hsv, _i),
        s: getSaturation(_hsv, _i),
        v: getValue(_hsv, _i)
      }));

      patterns.push(_colorString);
    } // dark theme patterns


    if (opts.theme === 'dark') {
      return darkColorMap.map(function (_ref3) {
        var index = _ref3.index,
            opacity = _ref3.opacity;
        var darkColorString = toHex(mix(inputToRGB(opts.backgroundColor || '#141414'), inputToRGB(patterns[index]), opacity * 100));
        return darkColorString;
      });
    }

    return patterns;
  }

  var presetPrimaryColors = {
    red: '#F5222D',
    volcano: '#FA541C',
    orange: '#FA8C16',
    gold: '#FAAD14',
    yellow: '#FADB14',
    lime: '#A0D911',
    green: '#52C41A',
    cyan: '#13C2C2',
    blue: '#1890FF',
    geekblue: '#2F54EB',
    purple: '#722ED1',
    magenta: '#EB2F96',
    grey: '#666666'
  };
  var presetPalettes = {};
  var presetDarkPalettes = {};
  Object.keys(presetPrimaryColors).forEach(function (key) {
    presetPalettes[key] = generate$1(presetPrimaryColors[key]);
    presetPalettes[key].primary = presetPalettes[key][5]; // dark presetPalettes

    presetDarkPalettes[key] = generate$1(presetPrimaryColors[key], {
      theme: 'dark',
      backgroundColor: '#141414'
    });
    presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
  });
  presetPalettes.red;
  presetPalettes.volcano;
  presetPalettes.gold;
  presetPalettes.orange;
  presetPalettes.yellow;
  presetPalettes.lime;
  presetPalettes.green;
  presetPalettes.cyan;
  presetPalettes.blue;
  presetPalettes.geekblue;
  presetPalettes.purple;
  presetPalettes.magenta;
  presetPalettes.grey;

  // https://github.com/substack/insert-css
  var containers = []; // will store container HTMLElement references

  var styleElements = []; // will store {prepend: HTMLElement, append: HTMLElement}

  var usage = 'insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).';

  function createStyleElement() {
    var styleElement = document.createElement('style');
    styleElement.setAttribute('type', 'text/css');
    return styleElement;
  } // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types


  function insertCss(css, options) {
    options = options || {};

    if (css === undefined) {
      throw new Error(usage);
    }

    var position = options.prepend === true ? 'prepend' : 'append';
    var container = options.container !== undefined ? options.container : document.querySelector('head');
    var containerId = containers.indexOf(container); // first time we see this container, create the necessary entries

    if (containerId === -1) {
      containerId = containers.push(container) - 1;
      styleElements[containerId] = {};
    } // try to get the correponding container + position styleElement, create it otherwise


    var styleElement;

    if (styleElements[containerId] !== undefined && styleElements[containerId][position] !== undefined) {
      styleElement = styleElements[containerId][position];
    } else {
      styleElement = styleElements[containerId][position] = createStyleElement();

      if (position === 'prepend') {
        container.insertBefore(styleElement, container.childNodes[0]);
      } else {
        container.appendChild(styleElement);
      }
    } // strip potential UTF-8 BOM if css was read from a file


    if (css.charCodeAt(0) === 0xfeff) {
      css = css.substr(1, css.length);
    } // actually add the stylesheet


    if (styleElement.styleSheet) {
      styleElement.styleSheet.cssText += css;
    } else {
      styleElement.textContent += css;
    }

    return styleElement;
  }

  function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$7(target, key, source[key]); }); } return target; }

  function _defineProperty$7(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function warn(valid, message) {
    // Support uglify
    if (process.env.NODE_ENV !== 'production' && !valid && console !== undefined) {
      console.error("Warning: ".concat(message));
    }
  }
  function warning(valid, message) {
    warn(valid, "[@ant-design/icons-vue] ".concat(message));
  } // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

  function isIconDefinition(target) {
    return typeof target === 'object' && typeof target.name === 'string' && typeof target.theme === 'string' && (typeof target.icon === 'object' || typeof target.icon === 'function');
  }
  function generate(node, key, rootProps) {
    if (!rootProps) {
      return vue.h(node.tag, _objectSpread$7({
        key: key
      }, node.attrs), (node.children || []).map(function (child, index) {
        return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
      }));
    }

    return vue.h(node.tag, _objectSpread$7({
      key: key
    }, rootProps, node.attrs), (node.children || []).map(function (child, index) {
      return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
    }));
  }
  function getSecondaryColor(primaryColor) {
    // choose the second color
    return generate$1(primaryColor)[0];
  }
  function normalizeTwoToneColors(twoToneColor) {
    if (!twoToneColor) {
      return [];
    }

    return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
  } // These props make sure that the SVG behaviours like general text.
  var iconStyles = "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
  var cssInjectedFlag = false;
  var useInsertStyles = function useInsertStyles() {
    var styleStr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : iconStyles;
    vue.nextTick(function () {
      if (!cssInjectedFlag) {
        if (typeof window !== 'undefined' && window.document && window.document.documentElement) {
          insertCss(styleStr, {
            prepend: true
          });
        }

        cssInjectedFlag = true;
      }
    });
  };

  var _excluded$1 = ["icon", "primaryColor", "secondaryColor"];

  function _objectWithoutProperties$1(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

  function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

  function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$6(target, key, source[key]); }); } return target; }

  function _defineProperty$6(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  var twoToneColorPalette = {
    primaryColor: '#333',
    secondaryColor: '#E6E6E6',
    calculated: false
  };

  function setTwoToneColors(_ref) {
    var primaryColor = _ref.primaryColor,
        secondaryColor = _ref.secondaryColor;
    twoToneColorPalette.primaryColor = primaryColor;
    twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
    twoToneColorPalette.calculated = !!secondaryColor;
  }

  function getTwoToneColors() {
    return _objectSpread$6({}, twoToneColorPalette);
  }

  var IconBase = function IconBase(props, context) {
    var _props$context$attrs = _objectSpread$6({}, props, context.attrs),
        icon = _props$context$attrs.icon,
        primaryColor = _props$context$attrs.primaryColor,
        secondaryColor = _props$context$attrs.secondaryColor,
        restProps = _objectWithoutProperties$1(_props$context$attrs, _excluded$1);

    var colors = twoToneColorPalette;

    if (primaryColor) {
      colors = {
        primaryColor: primaryColor,
        secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
      };
    }

    useInsertStyles();
    warning(isIconDefinition(icon), "icon should be icon definiton, but got ".concat(icon));

    if (!isIconDefinition(icon)) {
      return null;
    }

    var target = icon;

    if (target && typeof target.icon === 'function') {
      target = _objectSpread$6({}, target, {
        icon: target.icon(colors.primaryColor, colors.secondaryColor)
      });
    }

    return generate(target.icon, "svg-".concat(target.name), _objectSpread$6({}, restProps, {
      'data-icon': target.name,
      width: '1em',
      height: '1em',
      fill: 'currentColor',
      'aria-hidden': 'true'
    })); // },
  };

  IconBase.props = {
    icon: Object,
    primaryColor: String,
    secondaryColor: String,
    focusable: String
  };
  IconBase.inheritAttrs = false;
  IconBase.displayName = 'IconBase';
  IconBase.getTwoToneColors = getTwoToneColors;
  IconBase.setTwoToneColors = setTwoToneColors;
  var VueIcon = IconBase;

  function _slicedToArray$1(arr, i) { return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1(); }

  function _nonIterableRest$1() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

  function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit$1(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles$1(arr) { if (Array.isArray(arr)) return arr; }
  function setTwoToneColor(twoToneColor) {
    var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
        _normalizeTwoToneColo2 = _slicedToArray$1(_normalizeTwoToneColo, 2),
        primaryColor = _normalizeTwoToneColo2[0],
        secondaryColor = _normalizeTwoToneColo2[1];

    return VueIcon.setTwoToneColors({
      primaryColor: primaryColor,
      secondaryColor: secondaryColor
    });
  }
  function getTwoToneColor() {
    var colors = VueIcon.getTwoToneColors();

    if (!colors.calculated) {
      return colors.primaryColor;
    }

    return [colors.primaryColor, colors.secondaryColor];
  }

  var _excluded = ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"];

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$5(target, key, source[key]); }); } return target; }

  function _defineProperty$5(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

  function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

  setTwoToneColor('#1890ff');

  var Icon = function Icon(props, context) {
    var _classObj;

    var _props$context$attrs = _objectSpread$5({}, props, context.attrs),
        cls = _props$context$attrs["class"],
        icon = _props$context$attrs.icon,
        spin = _props$context$attrs.spin,
        rotate = _props$context$attrs.rotate,
        tabindex = _props$context$attrs.tabindex,
        twoToneColor = _props$context$attrs.twoToneColor,
        onClick = _props$context$attrs.onClick,
        restProps = _objectWithoutProperties(_props$context$attrs, _excluded);

    var classObj = (_classObj = {
      anticon: true
    }, _defineProperty$5(_classObj, "anticon-".concat(icon.name), Boolean(icon.name)), _defineProperty$5(_classObj, cls, cls), _classObj);
    var svgClassString = spin === '' || !!spin || icon.name === 'loading' ? 'anticon-spin' : '';
    var iconTabIndex = tabindex;

    if (iconTabIndex === undefined && onClick) {
      iconTabIndex = -1;
      restProps.tabindex = iconTabIndex;
    }

    var svgStyle = rotate ? {
      msTransform: "rotate(".concat(rotate, "deg)"),
      transform: "rotate(".concat(rotate, "deg)")
    } : undefined;

    var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
        _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2),
        primaryColor = _normalizeTwoToneColo2[0],
        secondaryColor = _normalizeTwoToneColo2[1];

    return vue.createVNode("span", _objectSpread$5({
      "role": "img",
      "aria-label": icon.name
    }, restProps, {
      "onClick": onClick,
      "class": classObj
    }), [vue.createVNode(VueIcon, {
      "class": svgClassString,
      "icon": icon,
      "primaryColor": primaryColor,
      "secondaryColor": secondaryColor,
      "style": svgStyle
    }, null)]);
  };

  Icon.props = {
    spin: Boolean,
    rotate: Number,
    icon: Object,
    twoToneColor: String
  };
  Icon.displayName = 'AntdIcon';
  Icon.inheritAttrs = false;
  Icon.getTwoToneColor = getTwoToneColor;
  Icon.setTwoToneColor = setTwoToneColor;
  var AntdIcon = Icon;

  // This icon file is generated automatically.
  var LoadingOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, "name": "loading", "theme": "outlined" };
  var LoadingOutlinedSvg = LoadingOutlined$2;

  function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$4(target, key, source[key]); }); } return target; }

  function _defineProperty$4(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var LoadingOutlined = function LoadingOutlined(props, context) {
    var p = _objectSpread$4({}, props, context.attrs);

    return vue.createVNode(AntdIcon, _objectSpread$4({}, p, {
      "icon": LoadingOutlinedSvg
    }), null);
  };

  LoadingOutlined.displayName = 'LoadingOutlined';
  LoadingOutlined.inheritAttrs = false;
  var LoadingOutlined$1 = LoadingOutlined;

  // This icon file is generated automatically.
  var CloseCircleFilled$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" } }] }, "name": "close-circle", "theme": "filled" };
  var CloseCircleFilledSvg = CloseCircleFilled$2;

  function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$3(target, key, source[key]); }); } return target; }

  function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var CloseCircleFilled = function CloseCircleFilled(props, context) {
    var p = _objectSpread$3({}, props, context.attrs);

    return vue.createVNode(AntdIcon, _objectSpread$3({}, p, {
      "icon": CloseCircleFilledSvg
    }), null);
  };

  CloseCircleFilled.displayName = 'CloseCircleFilled';
  CloseCircleFilled.inheritAttrs = false;
  var CloseCircleFilled$1 = CloseCircleFilled;

  // This icon file is generated automatically.
  var CheckCircleFilled$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, "name": "check-circle", "theme": "filled" };
  var CheckCircleFilledSvg = CheckCircleFilled$2;

  function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } return target; }

  function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var CheckCircleFilled = function CheckCircleFilled(props, context) {
    var p = _objectSpread$2({}, props, context.attrs);

    return vue.createVNode(AntdIcon, _objectSpread$2({}, p, {
      "icon": CheckCircleFilledSvg
    }), null);
  };

  CheckCircleFilled.displayName = 'CheckCircleFilled';
  CheckCircleFilled.inheritAttrs = false;
  var CheckCircleFilled$1 = CheckCircleFilled;

  // This icon file is generated automatically.
  var ExclamationCircleFilled$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, "name": "exclamation-circle", "theme": "filled" };
  var ExclamationCircleFilledSvg = ExclamationCircleFilled$2;

  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } return target; }

  function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var ExclamationCircleFilled = function ExclamationCircleFilled(props, context) {
    var p = _objectSpread$1({}, props, context.attrs);

    return vue.createVNode(AntdIcon, _objectSpread$1({}, p, {
      "icon": ExclamationCircleFilledSvg
    }), null);
  };

  ExclamationCircleFilled.displayName = 'ExclamationCircleFilled';
  ExclamationCircleFilled.inheritAttrs = false;
  var ExclamationCircleFilled$1 = ExclamationCircleFilled;

  // This icon file is generated automatically.
  var InfoCircleFilled$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, "name": "info-circle", "theme": "filled" };
  var InfoCircleFilledSvg = InfoCircleFilled$2;

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var InfoCircleFilled = function InfoCircleFilled(props, context) {
    var p = _objectSpread({}, props, context.attrs);

    return vue.createVNode(AntdIcon, _objectSpread({}, p, {
      "icon": InfoCircleFilledSvg
    }), null);
  };

  InfoCircleFilled.displayName = 'InfoCircleFilled';
  InfoCircleFilled.inheritAttrs = false;
  var InfoCircleFilled$1 = InfoCircleFilled;

  /**
   * Safe chained function
   *
   * Will only create a new function if needed,
   * otherwise will pass back existing functions or null.
   *
   * @returns {function|null}
   */
  function createChainedFunction() {
    var args = [].slice.call(arguments, 0);

    if (args.length === 1) {
      return args[0];
    }

    return function chainedFunction() {
      for (var i = 0; i < args.length; i++) {
        if (args[i] && args[i].apply) {
          args[i].apply(this, arguments);
        }
      }
    };
  }

  var Notice = {
    mixins: [BaseMixin],
    props: {
      duration: PropsTypes.number.def(1.5),
      closable: PropsTypes.looseBool,
      prefixCls: PropsTypes.string,
      update: PropsTypes.looseBool,
      closeIcon: PropsTypes.any,
      onClose: PropsTypes.func
    },
    watch: {
      duration: function duration() {
        this.restartCloseTimer();
      }
    },
    mounted: function mounted() {
      this.startCloseTimer();
    },
    updated: function updated() {
      if (this.update) {
        this.restartCloseTimer();
      }
    },
    beforeUnmount: function beforeUnmount() {
      this.clearCloseTimer();
      this.willDestroy = true; // beforeUnmount调用后依然会触发onMouseleave事件
    },
    methods: {
      close: function close(e) {
        if (e) {
          e.stopPropagation();
        }

        this.clearCloseTimer();

        this.__emit('close');
      },
      startCloseTimer: function startCloseTimer() {
        var _this = this;

        this.clearCloseTimer();

        if (!this.willDestroy && this.duration) {
          this.closeTimer = setTimeout(function () {
            _this.close();
          }, this.duration * 1000);
        }
      },
      clearCloseTimer: function clearCloseTimer() {
        if (this.closeTimer) {
          clearTimeout(this.closeTimer);
          this.closeTimer = null;
        }
      },
      restartCloseTimer: function restartCloseTimer() {
        this.clearCloseTimer();
        this.startCloseTimer();
      }
    },
    render: function render() {
      var _className;

      var prefixCls = this.prefixCls,
          closable = this.closable,
          clearCloseTimer = this.clearCloseTimer,
          startCloseTimer = this.startCloseTimer,
          close = this.close,
          $attrs = this.$attrs;
      var componentClass = "".concat(prefixCls, "-notice");
      var className = (_className = {}, _defineProperty$8(_className, "".concat(componentClass), 1), _defineProperty$8(_className, "".concat(componentClass, "-closable"), closable), _className);
      var closeIcon = getComponent(this, 'closeIcon');
      return vue.createVNode("div", {
        "class": className,
        "style": $attrs.style || {
          right: '50%'
        },
        "onMouseenter": clearCloseTimer,
        "onMouseleave": startCloseTimer
      }, [vue.createVNode("div", {
        "class": "".concat(componentClass, "-content")
      }, [getSlot(this)]), closable ? vue.createVNode("a", {
        "tabindex": "0",
        "onClick": close,
        "class": "".concat(componentClass, "-close")
      }, [closeIcon || vue.createVNode("span", {
        "class": "".concat(componentClass, "-close-x")
      }, null)]) : null]);
    }
  };

  var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};

    for (var p in s) {
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }

    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  };

  function noop() {}

  var seed = 0;
  var now = Date.now();

  function getUuid() {
    return "rcNotification_".concat(now, "_").concat(seed++);
  }

  var Notification = vue.defineComponent({
    mixins: [BaseMixin],
    props: {
      prefixCls: PropsTypes.string.def('rc-notification'),
      transitionName: PropsTypes.string,
      animation: PropsTypes.oneOfType([PropsTypes.string, PropsTypes.object]).def('fade'),
      maxCount: PropsTypes.number,
      closeIcon: PropsTypes.any
    },
    data: function data() {
      return {
        notices: []
      };
    },
    methods: {
      getTransitionName: function getTransitionName() {
        var props = this.$props;
        var transitionName = props.transitionName;

        if (!transitionName && props.animation) {
          transitionName = "".concat(props.prefixCls, "-").concat(props.animation);
        }

        return transitionName;
      },
      add: function add(notice) {
        var key = notice.key = notice.key || getUuid();
        var maxCount = this.$props.maxCount;
        this.setState(function (previousState) {
          var notices = previousState.notices;
          var noticeIndex = notices.map(function (v) {
            return v.key;
          }).indexOf(key);
          var updatedNotices = notices.concat();

          if (noticeIndex !== -1) {
            updatedNotices.splice(noticeIndex, 1, notice);
          } else {
            if (maxCount && notices.length >= maxCount) {
              // XXX, use key of first item to update new added (let React to move exsiting
              // instead of remove and mount). Same key was used before for both a) external
              // manual control and b) internal react 'key' prop , which is not that good.
              notice.updateKey = updatedNotices[0].updateKey || updatedNotices[0].key;
              updatedNotices.shift();
            }

            updatedNotices.push(notice);
          }

          return {
            notices: updatedNotices
          };
        });
      },
      remove: function remove(key) {
        this.setState(function (previousState) {
          return {
            notices: previousState.notices.filter(function (notice) {
              return notice.key !== key;
            })
          };
        });
      }
    },
    render: function render() {
      var _this = this;

      var prefixCls = this.prefixCls,
          notices = this.notices,
          remove = this.remove,
          getTransitionName = this.getTransitionName,
          $attrs = this.$attrs;
      var transitionProps = getTransitionGroupProps(getTransitionName());
      var noticeNodes = notices.map(function (notice, index) {
        var update = Boolean(index === notices.length - 1 && notice.updateKey);
        var key = notice.updateKey ? notice.updateKey : notice.key;
        var content = notice.content,
            duration = notice.duration,
            closable = notice.closable,
            onClose = notice.onClose,
            style = notice.style,
            className = notice.class;
        var close = createChainedFunction(remove.bind(_this, notice.key), onClose);
        var noticeProps = {
          prefixCls: prefixCls,
          duration: duration,
          closable: closable,
          update: update,
          closeIcon: getComponent(_this, 'closeIcon'),
          onClose: close,
          onClick: notice.onClick || noop,
          style: style,
          class: className,
          key: key
        };
        return vue.createVNode(Notice, noticeProps, {
          default: function _default() {
            return [typeof content === 'function' ? content() : content];
          }
        });
      });

      var className = _defineProperty$8({}, prefixCls, 1);

      return vue.createVNode("div", {
        "class": className,
        "style": $attrs.style || {
          top: '65px',
          left: '50%'
        }
      }, [vue.createVNode(TransitionGroup, _objectSpread2({
        "tag": "span"
      }, transitionProps), {
        default: function _default() {
          return [noticeNodes];
        }
      })]);
    }
  });

  Notification.newInstance = function newNotificationInstance(properties, callback) {
    var _a = properties || {},
        getContainer = _a.getContainer,
        style = _a.style,
        className = _a.class,
        props = __rest(_a, ["getContainer", "style", "class"]);

    var div = document.createElement('div');

    if (getContainer) {
      var root = getContainer();
      root.appendChild(div);
    } else {
      document.body.appendChild(div);
    }

    var app = vue.createApp({
      mounted: function mounted() {
        var self = this;
        this.$nextTick(function () {
          callback({
            notice: function notice(noticeProps) {
              self.$refs.notification.add(noticeProps);
            },
            removeNotice: function removeNotice(key) {
              self.$refs.notification.remove(key);
            },
            component: self,
            destroy: function destroy() {
              app.unmount(div);

              if (div.parentNode) {
                div.parentNode.removeChild(div);
              }
            }
          });
        });
      },
      render: function render() {
        var p = _extends(_extends({}, props), {
          ref: 'notification',
          style: style,
          class: className
        });

        return vue.createVNode(Notification, p, null);
      }
    });
    app.mount(div);
  };

  var Notification$1 = Notification;

  var defaultDuration = 3;
  var defaultTop;
  var messageInstance;
  var key = 1;
  var prefixCls = 'ant-message';
  var transitionName = 'move-up';

  var getContainer = function getContainer() {
    return document.body;
  };

  var maxCount;

  function getMessageInstance(callback) {
    if (messageInstance) {
      callback(messageInstance);
      return;
    }

    Notification$1.newInstance({
      prefixCls: prefixCls,
      transitionName: transitionName,
      style: {
        top: defaultTop
      },
      getContainer: getContainer,
      maxCount: maxCount
    }, function (instance) {
      if (messageInstance) {
        callback(messageInstance);
        return;
      }

      messageInstance = instance;
      callback(instance);
    });
  }

  var iconMap = {
    info: InfoCircleFilled$1,
    success: CheckCircleFilled$1,
    error: CloseCircleFilled$1,
    warning: ExclamationCircleFilled$1,
    loading: LoadingOutlined$1
  };

  function notice(args) {
    var duration = args.duration !== undefined ? args.duration : defaultDuration;
    var Icon = iconMap[args.type];
    var iconNode = Icon ? vue.createVNode(Icon, null, null) : '';
    var target = args.key || key++;
    var closePromise = new Promise(function (resolve) {
      var callback = function callback() {
        if (typeof args.onClose === 'function') {
          args.onClose();
        }

        return resolve(true);
      };

      getMessageInstance(function (instance) {
        instance.notice({
          key: target,
          duration: duration,
          style: args.style || {},
          class: args.class,
          content: function content() {
            return vue.createVNode("div", {
              "class": "".concat(prefixCls, "-custom-content").concat(args.type ? " ".concat(prefixCls, "-").concat(args.type) : '')
            }, [args.icon || iconNode, vue.createVNode("span", null, [args.content])]);
          },
          onClose: callback
        });
      });
    });

    var result = function result() {
      if (messageInstance) {
        messageInstance.removeNotice(target);
      }
    };

    result.then = function (filled, rejected) {
      return closePromise.then(filled, rejected);
    };

    result.promise = closePromise;
    return result;
  }

  function isArgsProps(content) {
    return Object.prototype.toString.call(content) === '[object Object]' && !!content.content;
  }

  var api = {
    open: notice,
    config: function config(options) {
      if (options.top !== undefined) {
        defaultTop = options.top;
        messageInstance = null; // delete messageInstance for new defaultTop
      }

      if (options.duration !== undefined) {
        defaultDuration = options.duration;
      }

      if (options.prefixCls !== undefined) {
        prefixCls = options.prefixCls;
      }

      if (options.getContainer !== undefined) {
        getContainer = options.getContainer;
      }

      if (options.transitionName !== undefined) {
        transitionName = options.transitionName;
        messageInstance = null; // delete messageInstance for new transitionName
      }

      if (options.maxCount !== undefined) {
        maxCount = options.maxCount;
        messageInstance = null;
      }
    },
    destroy: function destroy() {
      if (messageInstance) {
        messageInstance.destroy();
        messageInstance = null;
      }
    }
  };
  ['success', 'info', 'warning', 'error', 'loading'].forEach(function (type) {
    api[type] = function (content, duration, onClose) {
      if (isArgsProps(content)) {
        return api.open(_extends(_extends({}, content), {
          type: type
        }));
      }

      if (typeof duration === 'function') {
        onClose = duration;
        duration = undefined;
      }

      return api.open({
        content: content,
        duration: duration,
        type: type,
        onClose: onClose
      });
    };
  });
  api.warn = api.warning;
  var message = api;

  var has$1 = Object.prototype.hasOwnProperty;

  var hexTable = (function () {
      var array = [];
      for (var i = 0; i < 256; ++i) {
          array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
      }

      return array;
  }());

  var compactQueue = function compactQueue(queue) {
      var obj;

      while (queue.length) {
          var item = queue.pop();
          obj = item.obj[item.prop];

          if (Array.isArray(obj)) {
              var compacted = [];

              for (var j = 0; j < obj.length; ++j) {
                  if (typeof obj[j] !== 'undefined') {
                      compacted.push(obj[j]);
                  }
              }

              item.obj[item.prop] = compacted;
          }
      }

      return obj;
  };

  var arrayToObject = function arrayToObject(source, options) {
      var obj = options && options.plainObjects ? Object.create(null) : {};
      for (var i = 0; i < source.length; ++i) {
          if (typeof source[i] !== 'undefined') {
              obj[i] = source[i];
          }
      }

      return obj;
  };

  var merge = function merge(target, source, options) {
      if (!source) {
          return target;
      }

      if (typeof source !== 'object') {
          if (Array.isArray(target)) {
              target.push(source);
          } else if (target && typeof target === 'object') {
              if ((options && (options.plainObjects || options.allowPrototypes)) || !has$1.call(Object.prototype, source)) {
                  target[source] = true;
              }
          } else {
              return [target, source];
          }

          return target;
      }

      if (!target || typeof target !== 'object') {
          return [target].concat(source);
      }

      var mergeTarget = target;
      if (Array.isArray(target) && !Array.isArray(source)) {
          mergeTarget = arrayToObject(target, options);
      }

      if (Array.isArray(target) && Array.isArray(source)) {
          source.forEach(function (item, i) {
              if (has$1.call(target, i)) {
                  var targetItem = target[i];
                  if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                      target[i] = merge(targetItem, item, options);
                  } else {
                      target.push(item);
                  }
              } else {
                  target[i] = item;
              }
          });
          return target;
      }

      return Object.keys(source).reduce(function (acc, key) {
          var value = source[key];

          if (has$1.call(acc, key)) {
              acc[key] = merge(acc[key], value, options);
          } else {
              acc[key] = value;
          }
          return acc;
      }, mergeTarget);
  };

  var assign = function assignSingleSource(target, source) {
      return Object.keys(source).reduce(function (acc, key) {
          acc[key] = source[key];
          return acc;
      }, target);
  };

  var decode = function (str) {
      try {
          return decodeURIComponent(str.replace(/\+/g, ' '));
      } catch (e) {
          return str;
      }
  };

  var encode = function encode(str) {
      // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
      // It has been adapted here for stricter adherence to RFC 3986
      if (str.length === 0) {
          return str;
      }

      var string = typeof str === 'string' ? str : String(str);

      var out = '';
      for (var i = 0; i < string.length; ++i) {
          var c = string.charCodeAt(i);

          if (
              c === 0x2D // -
              || c === 0x2E // .
              || c === 0x5F // _
              || c === 0x7E // ~
              || (c >= 0x30 && c <= 0x39) // 0-9
              || (c >= 0x41 && c <= 0x5A) // a-z
              || (c >= 0x61 && c <= 0x7A) // A-Z
          ) {
              out += string.charAt(i);
              continue;
          }

          if (c < 0x80) {
              out = out + hexTable[c];
              continue;
          }

          if (c < 0x800) {
              out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
              continue;
          }

          if (c < 0xD800 || c >= 0xE000) {
              out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
              continue;
          }

          i += 1;
          c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
          /* eslint operator-linebreak: [2, "before"] */
          out += hexTable[0xF0 | (c >> 18)]
              + hexTable[0x80 | ((c >> 12) & 0x3F)]
              + hexTable[0x80 | ((c >> 6) & 0x3F)]
              + hexTable[0x80 | (c & 0x3F)];
      }

      return out;
  };

  var compact = function compact(value) {
      var queue = [{ obj: { o: value }, prop: 'o' }];
      var refs = [];

      for (var i = 0; i < queue.length; ++i) {
          var item = queue[i];
          var obj = item.obj[item.prop];

          var keys = Object.keys(obj);
          for (var j = 0; j < keys.length; ++j) {
              var key = keys[j];
              var val = obj[key];
              if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                  queue.push({ obj: obj, prop: key });
                  refs.push(val);
              }
          }
      }

      return compactQueue(queue);
  };

  var isRegExp = function isRegExp(obj) {
      return Object.prototype.toString.call(obj) === '[object RegExp]';
  };

  var isBuffer = function isBuffer(obj) {
      if (obj === null || typeof obj === 'undefined') {
          return false;
      }

      return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
  };

  var utils$2 = {
      arrayToObject: arrayToObject,
      assign: assign,
      compact: compact,
      decode: decode,
      encode: encode,
      isBuffer: isBuffer,
      isRegExp: isRegExp,
      merge: merge
  };

  var replace = String.prototype.replace;
  var percentTwenties = /%20/g;

  var formats$2 = {
      'default': 'RFC3986',
      formatters: {
          RFC1738: function (value) {
              return replace.call(value, percentTwenties, '+');
          },
          RFC3986: function (value) {
              return String(value);
          }
      },
      RFC1738: 'RFC1738',
      RFC3986: 'RFC3986'
  };

  var utils$1 = utils$2;
  var formats$1 = formats$2;

  var arrayPrefixGenerators = {
      brackets: function brackets(prefix) {
          return prefix + '[]';
      },
      indices: function indices(prefix, key) {
          return prefix + '[' + key + ']';
      },
      repeat: function repeat(prefix) {
          return prefix;
      }
  };

  var isArray = Array.isArray;
  var push = Array.prototype.push;
  var pushToArray = function (arr, valueOrArray) {
      push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
  };

  var toISO = Date.prototype.toISOString;

  var defaults$1 = {
      delimiter: '&',
      encode: true,
      encoder: utils$1.encode,
      encodeValuesOnly: false,
      serializeDate: function serializeDate(date) {
          return toISO.call(date);
      },
      skipNulls: false,
      strictNullHandling: false
  };

  var stringify$1 = function stringify(
      object,
      prefix,
      generateArrayPrefix,
      strictNullHandling,
      skipNulls,
      encoder,
      filter,
      sort,
      allowDots,
      serializeDate,
      formatter,
      encodeValuesOnly
  ) {
      var obj = object;
      if (typeof filter === 'function') {
          obj = filter(prefix, obj);
      } else if (obj instanceof Date) {
          obj = serializeDate(obj);
      }

      if (obj === null) {
          if (strictNullHandling) {
              return encoder && !encodeValuesOnly ? encoder(prefix, defaults$1.encoder) : prefix;
          }

          obj = '';
      }

      if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils$1.isBuffer(obj)) {
          if (encoder) {
              var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults$1.encoder);
              return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults$1.encoder))];
          }
          return [formatter(prefix) + '=' + formatter(String(obj))];
      }

      var values = [];

      if (typeof obj === 'undefined') {
          return values;
      }

      var objKeys;
      if (isArray(filter)) {
          objKeys = filter;
      } else {
          var keys = Object.keys(obj);
          objKeys = sort ? keys.sort(sort) : keys;
      }

      for (var i = 0; i < objKeys.length; ++i) {
          var key = objKeys[i];

          if (skipNulls && obj[key] === null) {
              continue;
          }

          if (isArray(obj)) {
              pushToArray(values, stringify(
                  obj[key],
                  generateArrayPrefix(prefix, key),
                  generateArrayPrefix,
                  strictNullHandling,
                  skipNulls,
                  encoder,
                  filter,
                  sort,
                  allowDots,
                  serializeDate,
                  formatter,
                  encodeValuesOnly
              ));
          } else {
              pushToArray(values, stringify(
                  obj[key],
                  prefix + (allowDots ? '.' + key : '[' + key + ']'),
                  generateArrayPrefix,
                  strictNullHandling,
                  skipNulls,
                  encoder,
                  filter,
                  sort,
                  allowDots,
                  serializeDate,
                  formatter,
                  encodeValuesOnly
              ));
          }
      }

      return values;
  };

  var stringify_1 = function (object, opts) {
      var obj = object;
      var options = opts ? utils$1.assign({}, opts) : {};

      if (options.encoder !== null && typeof options.encoder !== 'undefined' && typeof options.encoder !== 'function') {
          throw new TypeError('Encoder has to be a function.');
      }

      var delimiter = typeof options.delimiter === 'undefined' ? defaults$1.delimiter : options.delimiter;
      var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults$1.strictNullHandling;
      var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults$1.skipNulls;
      var encode = typeof options.encode === 'boolean' ? options.encode : defaults$1.encode;
      var encoder = typeof options.encoder === 'function' ? options.encoder : defaults$1.encoder;
      var sort = typeof options.sort === 'function' ? options.sort : null;
      var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
      var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults$1.serializeDate;
      var encodeValuesOnly = typeof options.encodeValuesOnly === 'boolean' ? options.encodeValuesOnly : defaults$1.encodeValuesOnly;
      if (typeof options.format === 'undefined') {
          options.format = formats$1['default'];
      } else if (!Object.prototype.hasOwnProperty.call(formats$1.formatters, options.format)) {
          throw new TypeError('Unknown format option provided.');
      }
      var formatter = formats$1.formatters[options.format];
      var objKeys;
      var filter;

      if (typeof options.filter === 'function') {
          filter = options.filter;
          obj = filter('', obj);
      } else if (isArray(options.filter)) {
          filter = options.filter;
          objKeys = filter;
      }

      var keys = [];

      if (typeof obj !== 'object' || obj === null) {
          return '';
      }

      var arrayFormat;
      if (options.arrayFormat in arrayPrefixGenerators) {
          arrayFormat = options.arrayFormat;
      } else if ('indices' in options) {
          arrayFormat = options.indices ? 'indices' : 'repeat';
      } else {
          arrayFormat = 'indices';
      }

      var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

      if (!objKeys) {
          objKeys = Object.keys(obj);
      }

      if (sort) {
          objKeys.sort(sort);
      }

      for (var i = 0; i < objKeys.length; ++i) {
          var key = objKeys[i];

          if (skipNulls && obj[key] === null) {
              continue;
          }
          pushToArray(keys, stringify$1(
              obj[key],
              key,
              generateArrayPrefix,
              strictNullHandling,
              skipNulls,
              encode ? encoder : null,
              filter,
              sort,
              allowDots,
              serializeDate,
              formatter,
              encodeValuesOnly
          ));
      }

      var joined = keys.join(delimiter);
      var prefix = options.addQueryPrefix === true ? '?' : '';

      return joined.length > 0 ? prefix + joined : '';
  };

  var utils = utils$2;

  var has = Object.prototype.hasOwnProperty;

  var defaults = {
      allowDots: false,
      allowPrototypes: false,
      arrayLimit: 20,
      decoder: utils.decode,
      delimiter: '&',
      depth: 5,
      parameterLimit: 1000,
      plainObjects: false,
      strictNullHandling: false
  };

  var parseValues = function parseQueryStringValues(str, options) {
      var obj = {};
      var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
      var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
      var parts = cleanStr.split(options.delimiter, limit);

      for (var i = 0; i < parts.length; ++i) {
          var part = parts[i];

          var bracketEqualsPos = part.indexOf(']=');
          var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

          var key, val;
          if (pos === -1) {
              key = options.decoder(part, defaults.decoder);
              val = options.strictNullHandling ? null : '';
          } else {
              key = options.decoder(part.slice(0, pos), defaults.decoder);
              val = options.decoder(part.slice(pos + 1), defaults.decoder);
          }
          if (has.call(obj, key)) {
              obj[key] = [].concat(obj[key]).concat(val);
          } else {
              obj[key] = val;
          }
      }

      return obj;
  };

  var parseObject = function (chain, val, options) {
      var leaf = val;

      for (var i = chain.length - 1; i >= 0; --i) {
          var obj;
          var root = chain[i];

          if (root === '[]' && options.parseArrays) {
              obj = [].concat(leaf);
          } else {
              obj = options.plainObjects ? Object.create(null) : {};
              var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
              var index = parseInt(cleanRoot, 10);
              if (!options.parseArrays && cleanRoot === '') {
                  obj = { 0: leaf };
              } else if (
                  !isNaN(index)
                  && root !== cleanRoot
                  && String(index) === cleanRoot
                  && index >= 0
                  && (options.parseArrays && index <= options.arrayLimit)
              ) {
                  obj = [];
                  obj[index] = leaf;
              } else if (cleanRoot !== '__proto__') {
                  obj[cleanRoot] = leaf;
              }
          }

          leaf = obj;
      }

      return leaf;
  };

  var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
      if (!givenKey) {
          return;
      }

      // Transform dot notation to bracket notation
      var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

      // The regex chunks

      var brackets = /(\[[^[\]]*])/;
      var child = /(\[[^[\]]*])/g;

      // Get the parent

      var segment = brackets.exec(key);
      var parent = segment ? key.slice(0, segment.index) : key;

      // Stash the parent if it exists

      var keys = [];
      if (parent) {
          // If we aren't using plain objects, optionally prefix keys
          // that would overwrite object prototype properties
          if (!options.plainObjects && has.call(Object.prototype, parent)) {
              if (!options.allowPrototypes) {
                  return;
              }
          }

          keys.push(parent);
      }

      // Loop through children appending to the array until we hit depth

      var i = 0;
      while ((segment = child.exec(key)) !== null && i < options.depth) {
          i += 1;
          if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
              if (!options.allowPrototypes) {
                  return;
              }
          }
          keys.push(segment[1]);
      }

      // If there's a remainder, just add whatever is left

      if (segment) {
          keys.push('[' + key.slice(segment.index) + ']');
      }

      return parseObject(keys, val, options);
  };

  var parse$1 = function (str, opts) {
      var options = opts ? utils.assign({}, opts) : {};

      if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
          throw new TypeError('Decoder has to be a function.');
      }

      options.ignoreQueryPrefix = options.ignoreQueryPrefix === true;
      options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
      options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
      options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
      options.parseArrays = options.parseArrays !== false;
      options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
      options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults.allowDots;
      options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
      options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
      options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
      options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;

      if (str === '' || str === null || typeof str === 'undefined') {
          return options.plainObjects ? Object.create(null) : {};
      }

      var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
      var obj = options.plainObjects ? Object.create(null) : {};

      // Iterate over the keys and setup the new object

      var keys = Object.keys(tempObj);
      for (var i = 0; i < keys.length; ++i) {
          var key = keys[i];
          var newObj = parseKeys(key, tempObj[key], options);
          obj = utils.merge(obj, newObj, options);
      }

      return utils.compact(obj);
  };

  var stringify = stringify_1;
  var parse = parse$1;
  var formats = formats$2;

  var lib = {
      formats: formats,
      parse: parse,
      stringify: stringify
  };

  const production = {
      api: "",
      apiMerchants: "",
  };
  const dev = {
      api: "https://tb-testphp1.enbrands.com",
      apiMerchants: 'https://b.tb-test-k8s.enbrands.com',
  };
  const test = {
      api: "",
      apiMerchants: '',
  };
  //module.exports = (env => {
  let config = {
      api: "https://tb-testphp1.enbrands.com",
      apiMerchants: 'https://b.tb-test-k8s.enbrands.com',
  };
  switch (process.env.VUE_APP_ENV) {
      case "development": {
          config = dev;
          break;
      }
      case "test": {
          config = test;
          break;
      }
      case "debug": {
          config = production;
          break;
      }
      case "production": {
          config = production;
          break;
      }
      default: {
          config = dev;
          break;
      }
  }
  //return config;
  //})(process.env.VUE_APP_ENV);
  var config$1 = config;

  // 全局配置
  // 创建 axios 实例
  const service = axios.create({
      baseURL: config$1.api,
      timeout: 10000 // request timeout
  });
  // 响应成功
  function responseSuccess(response) {
      if (response && (response.status === 200 || response.status === 304)) {
          if (response.data && response.data.retcode === 0) {
              return response.data;
          }
          else {
              message.error(response.data.errmsg);
              return;
          }
      }
      else {
          // 异常状态下，把错误信息返回去
          if (response && response.data && response.data.errmsg) {
              message.error(response.data.errmsg);
              return;
          }
          else if (response && response.status === 404) {
              message.error("访问异常");
              return;
          }
          else {
              message.error("网络错误");
              return;
          }
      }
  }
  // 响应错误
  function responseError(response) {
      // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
      message.error("网络错误");
      return response;
  }
  service.interceptors.request.use((config) => {
      // 这里的config包含每次请求的内容
      config.headers["Content-Type"] = "application/json;charset=UTF-8";
      config.headers["Accept"] = "application/json";
      //const token = storage.get("TOKEN") || null;
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ5amZjcm0iLCJpYXQiOjE2NDk1OTIxMjIsImV4cCI6MTY0OTU5OTMyMiwibmJmIjoxNjQ5NTkyMTIyLCJzdWIiOiIiLCJqdGkiOiI1MTNjODYxOGMyMjEyYThkMjhiYjk5ODI4Y2E0Y2VlNiIsImFjY291bnRfaWQiOjJ9.FCzYcj5ZqBaZtnUQ-c6nSjddYU1aqA2xwsO9Ee23jsY';
      {
          // 如果token不为null，否则传token给后台
          config.headers["authorization"] = token;
      }
      const data = lib.parse(config.data);
      for (const key in data) {
          if (!data[key])
              delete data[key];
      }
      return config;
  }, (error) => {
      return Promise.reject(error);
  });
  service.interceptors.response.use((response) => {
      return response;
  }, (error) => {
      return Promise.resolve(error.response);
  });
  // 请求方式配置
  const Http = {};
  Http.post = function (url, data) {
      return service({
          method: "post",
          url,
          data
      })
          .then((Response) => {
          return responseSuccess(Response);
      })
          .catch((Response) => {
          return responseError(Response);
      });
  };
  Http.get = function (url, params) {
      // get
      return service({
          method: "get",
          url,
          params // get 请求时带的参数
      })
          .then((Response) => {
          return responseSuccess(Response);
      })
          .catch((Response) => {
          return responseError(Response);
      });
  };

  const getGiftList = (params) => {
      return Http.get('/api/gifts/pageList', params);
  };
  // 礼品类型列表
  const getGiftTypeList = (params) => {
      return Http.get('/api/giftTypes/list', params);
  };

  var script$1 = vue.defineComponent({
      name: 'choice-gift',
      emits: ["handChoice", "closeDialog"],
      props: {},
      setup(props, context) {
          const allTotal = vue.ref(0);
          const dialogTableVisible = vue.ref(true);
          const giftTypeList = vue.ref([]);
          const giftList = vue.ref([]);
          let pagination = null;
          const loading = vue.ref(false);
          const formState = vue.reactive({
              name: "",
              typeName: null
          });
          let reuiqreGiftList = null;
          const pageChange = (page) => {
              pagination.current = page;
              reuiqreGiftList(false);
          };
          pagination = vue.reactive({
              total: 0,
              pageSize: 5,
              showSizeChanger: false,
              current: 1,
              onChange: pageChange
          });
          reuiqreGiftList = (type) => {
              loading.value = true;
              let pageNo = 1;
              if (type) {
                  pageNo = 1;
                  pagination.current = 1;
              }
              else {
                  pageNo = pagination.current;
              }
              getGiftList({ pageSize: 5, pageNo: pageNo, name: formState.name, typeId: formState.typeName }).then((res) => {
                  if (res && res.retcode === 0) {
                      loading.value = false;
                      giftList.value = res.content.data;
                      pagination.total = res.content.totalCount;
                  }
              });
          };
          const columns = [
              {
                  title: "图片预览",
                  name: "图片预览",
                  dataIndex: "pictureUrl",
                  key: "pictureUrl",
                  slots: { customRender: "pictureUrl" }
              },
              {
                  title: "礼品名称	",
                  dataIndex: "name",
                  key: "name"
              },
              {
                  title: "礼品类型		",
                  dataIndex: "typeName",
                  key: "typeName"
              },
              {
                  title: "有效期",
                  dataIndex: "validateTimeSet",
                  key: "id",
                  slots: { customRender: "validateTimeSet" }
              },
              {
                  title: "可用库存",
                  // width: 140,
                  dataIndex: "available",
                  key: "available"
              },
              {
                  title: "操作",
                  dataIndex: "operator",
                  key: "operator",
                  slots: { customRender: "operator" }
              }
          ];
          const handleSelectGift = (e, row) => {
              context.emit("closeDialog");
              context.emit("handChoice", row);
          };
          const requireGiftTypeList = () => {
              getGiftTypeList({
                  pageSize: 1000,
                  pageNo: 1,
                  name: ""
              }).then((res) => {
                  if (res && res.retcode === 0) {
                      giftTypeList.value = res.content.data;
                      giftTypeList.value.push({
                          cdkeyMode: 0,
                          createAt: "",
                          id: 0,
                          issueMode: 0,
                          name: "全部礼品类型",
                          sys: 0,
                          typeCode: ""
                      });
                  }
              });
          };
          const closeDialog = () => {
              context.emit("closeDialog");
          };
          vue.onMounted(() => {
              requireGiftTypeList();
              reuiqreGiftList(true);
          });
          return {
              formState,
              giftTypeList,
              dialogTableVisible,
              allTotal,
              columns,
              giftList,
              pagination,
              closeDialog,
              loading,
              handleSelectGift,
              requireGiftTypeList,
              reuiqreGiftList
          };
      }
  });

  const _hoisted_1$1 = { class: "search-head" };
  const _hoisted_2$1 = /*#__PURE__*/vue.createTextVNode("查询");
  const _hoisted_3$1 = /*#__PURE__*/vue.createTextVNode(" 共");
  const _hoisted_4 = { class: "all-total" };
  const _hoisted_5 = /*#__PURE__*/vue.createTextVNode("个礼品 ");
  const _hoisted_6 = { class: "search=table" };
  const _hoisted_7 = ["src"];
  const _hoisted_8 = ["onClick"];
  const _hoisted_9 = /*#__PURE__*/vue.createTextVNode("选择");

  function render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_a_select_option = vue.resolveComponent("a-select-option");
    const _component_a_select = vue.resolveComponent("a-select");
    const _component_a_form_item = vue.resolveComponent("a-form-item");
    const _component_a_input = vue.resolveComponent("a-input");
    const _component_a_button = vue.resolveComponent("a-button");
    const _component_a_form = vue.resolveComponent("a-form");
    const _component_a_table = vue.resolveComponent("a-table");
    const _component_a_modal = vue.resolveComponent("a-modal");

    return (vue.openBlock(), vue.createBlock(_component_a_modal, {
      modelValue: _ctx.dialogTableVisible,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => ((_ctx.dialogTableVisible) = $event)),
      title: "选择礼P",
      width: "70%",
      onCancel: _ctx.closeDialog,
      footer: "null"
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("div", _hoisted_1$1, [
          vue.createVNode(_component_a_form, {
            model: _ctx.formState,
            name: "exhangeSearch",
            layout: "inline",
            autocomplete: "off",
            ref: "form"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_a_form_item, {
                label: "礼品类型",
                name: "typeName"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_a_select, {
                    modelValue: _ctx.formState.typeName,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.formState.typeName) = $event)),
                    style: {"width":"180px"},
                    allowClear: ""
                  }, {
                    default: vue.withCtx(() => [
                      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.giftTypeList, (item, index) => {
                        return (vue.openBlock(), vue.createBlock(_component_a_select_option, {
                          value: item.id,
                          key: index
                        }, {
                          default: vue.withCtx(() => [
                            vue.createTextVNode(vue.toDisplayString(item.name), 1 /* TEXT */)
                          ]),
                          _: 2 /* DYNAMIC */
                        }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["value"]))
                      }), 128 /* KEYED_FRAGMENT */))
                    ]),
                    _: 1 /* STABLE */
                  }, 8 /* PROPS */, ["modelValue"])
                ]),
                _: 1 /* STABLE */
              }),
              vue.createVNode(_component_a_form_item, {
                label: "礼品名称",
                name: "name"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_a_input, {
                    modelValue: _ctx.formState.name,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((_ctx.formState.name) = $event)),
                    maxlength: 15,
                    placeholder: "请输入礼品名称"
                  }, null, 8 /* PROPS */, ["modelValue"])
                ]),
                _: 1 /* STABLE */
              }),
              vue.createCommentVNode("  <a-form-item label=\"礼品来源\" name=\"resource\">\n          <a-radio-group v-model:value=\"formState.resource\">\n            <a-radio value=\"1\">自用</a-radio>\n            <a-radio value=\"2\">外部</a-radio>\n          </a-radio-group>\n        </a-form-item> "),
              vue.createVNode(_component_a_form_item, null, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_a_button, {
                    type: "primary",
                    onClick: _cache[2] || (_cache[2] = $event => (_ctx.reuiqreGiftList(true))),
                    "html-type": "submit"
                  }, {
                    default: vue.withCtx(() => [
                      _hoisted_2$1
                    ]),
                    _: 1 /* STABLE */
                  })
                ]),
                _: 1 /* STABLE */
              }),
              vue.createVNode(_component_a_form_item, null, {
                default: vue.withCtx(() => [
                  _hoisted_3$1,
                  vue.createElementVNode("span", _hoisted_4, vue.toDisplayString(_ctx.pagination.total), 1 /* TEXT */),
                  _hoisted_5
                ]),
                _: 1 /* STABLE */
              })
            ]),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["model"])
        ]),
        vue.createElementVNode("div", _hoisted_6, [
          vue.createVNode(_component_a_table, {
            columns: _ctx.columns,
            "data-source": _ctx.giftList,
            loading: _ctx.loading,
            pagination: _ctx.pagination
          }, {
            pictureUrl: vue.withCtx(({ record }) => [
              vue.createElementVNode("img", {
                style: {"height":"60px","width":"100px","object-fit":"cover"},
                src: record && record.pictureUrl,
                alt: "图片"
              }, null, 8 /* PROPS */, _hoisted_7)
            ]),
            validateTimeSet: vue.withCtx(({ record }) => [
              vue.createElementVNode("span", null, vue.toDisplayString(record && record.effectiveBegin) + "至" + vue.toDisplayString(record && record.effectiveEnd), 1 /* TEXT */)
            ]),
            operator: vue.withCtx(({ column, record }) => [
              vue.createElementVNode("span", {
                onClick: $event => (_ctx.handleSelectGift(column, record))
              }, [
                vue.createVNode(_component_a_button, {
                  disabled: record.showStatus !== 3
                }, {
                  default: vue.withCtx(() => [
                    _hoisted_9
                  ]),
                  _: 2 /* DYNAMIC */
                }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["disabled"])
              ], 8 /* PROPS */, _hoisted_8)
            ]),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["columns", "data-source", "loading", "pagination"])
        ])
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["modelValue", "onCancel"]))
  }

  script$1.render = render$1;
  script$1.__scopeId = "data-v-2d03796f";
  script$1.__file = "src/components/ChoiceGift/ChoiceGift.vue";

  script$1.install = (app) => {
      app.component(script$1.name, script$1);
  };

  var script = vue.defineComponent({
      name: 'upload-image',
      props: {
          msg: String,
      },
  });

  const _hoisted_1 = { class: "hello" };
  const _hoisted_2 = /*#__PURE__*/vue.createElementVNode("h1", null, "我是上传图片4", -1 /* HOISTED */);
  const _hoisted_3 = [
    _hoisted_2
  ];

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, _hoisted_3))
  }

  script.render = render;
  script.__file = "src/components/UploadImage/UploadImage.vue";

  script.install = (app) => {
      app.component(script.name, script);
  };

  const components = [script$3, script$2, script$1, script];
  const install = (app) => {
      components.forEach(component => {
          app.component(component.name, component);
      });
  };
  // import coms from 'interactiveCom'
  // app.use(coms)
  var index = {
      install
  };

  exports.ChoiceGift = script$1;
  exports.LImage = script$2;
  exports.LText = script$3;
  exports.UploadImage = script;
  exports["default"] = index;
  exports.install = install;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
