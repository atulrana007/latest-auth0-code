/*!
 * McAfee Auth Custom Layout
 * Version 1.0.0
 */
!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=2)}([function(module,exports){eval('/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\nmodule.exports = function(src) {\n\tfunction log(error) {\n\t\t(typeof console !== "undefined")\n\t\t&& (console.error || console.log)("[Script Loader]", error);\n\t}\n\n\t// Check for IE =< 8\n\tfunction isIE() {\n\t\treturn typeof attachEvent !== "undefined" && typeof addEventListener === "undefined";\n\t}\n\n\ttry {\n\t\tif (typeof execScript !== "undefined" && isIE()) {\n\t\t\texecScript(src);\n\t\t} else if (typeof eval !== "undefined") {\n\t\t\teval.call(null, src);\n\t\t} else {\n\t\t\tlog("EvalError: No eval function available");\n\t\t}\n\t} catch (error) {\n\t\tlog(error);\n\t}\n}\n\n\n//# sourceURL=webpack:///./node_modules/script-loader/addScript.js?')},function(module,exports,__webpack_require__){"use strict";eval('\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return "@media ".concat(item[2], " {").concat(content, "}");\n      }\n\n      return content;\n    }).join(\'\');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \'string\') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \'\']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || \'\'; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === \'function\') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return "/*# sourceURL=".concat(cssMapping.sourceRoot || \'\').concat(source, " */");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join(\'\\n\');\n  }\n\n  return [content].join(\'\\n\');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);\n  return "/*# ".concat(data, " */");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?')},function(module,exports,__webpack_require__){eval("__webpack_require__(3);\n__webpack_require__(5);\nmodule.exports = __webpack_require__(8);\n\n\n//# sourceURL=webpack:///multi_./build/static/js/runtime-main.8b5ec4ed.js_./build/static/css/main.e4ba8ee2.chunk.css_./build/static/js/main.07e0c93c.chunk.js?")},function(module,exports,__webpack_require__){eval("__webpack_require__(0)(__webpack_require__(4))\n\n//# sourceURL=webpack:///./build/static/js/runtime-main.8b5ec4ed.js?")},function(module,exports){eval('module.exports = "!function(e){function r(r){for(var n,a,p=r[0],i=r[1],l=r[2],c=0,s=[];c<p.length;c++)a=p[c],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&s.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(f&&f(r);s.length;)s.shift()();return u.push.apply(u,l||[]),t()}function t(){for(var e,r=0;r<u.length;r++){for(var t=u[r],n=!0,p=1;p<t.length;p++){var i=t[p];0!==o[i]&&(n=!1)}n&&(u.splice(r--,1),e=a(a.s=t[0]))}return e}var n={},o={1:0},u=[];function a(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=n,a.d=function(e,r,t){a.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},a.r=function(e){\\"undefined\\"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\\"Module\\"}),Object.defineProperty(e,\\"__esModule\\",{value:!0})},a.t=function(e,r){if(1&r&&(e=a(e)),8&r)return e;if(4&r&&\\"object\\"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,\\"default\\",{enumerable:!0,value:e}),2&r&&\\"string\\"!=typeof e)for(var n in e)a.d(t,n,function(r){return e[r]}.bind(null,n));return t},a.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(r,\\"a\\",r),r},a.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},a.p=\\"/\\";var p=this[\\"webpackJsonpwss-main-app\\"]=this[\\"webpackJsonpwss-main-app\\"]||[],i=p.push.bind(p);p.push=r,p=p.slice();for(var l=0;l<p.length;l++)r(p[l]);var f=i;t()}([]);\\n//# sourceMappingURL=runtime-main.8b5ec4ed.js.map"\n\n//# sourceURL=webpack:///./build/static/js/runtime-main.8b5ec4ed.js?./node_modules/raw-loader')},function(module,exports,__webpack_require__){eval("var api = __webpack_require__(6);\n            var content = __webpack_require__(7);\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./build/static/css/main.e4ba8ee2.chunk.css?")},function(module,exports,__webpack_require__){"use strict";eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?")},function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, ".header-main-title{position:relative;float:left;line-height:25px;padding:17px 0 0 25px;color:#c01818;font-weight:700}.header-main-title>div{float:left}.header-main-title .mcafee-logo{padding:0 15px 0 0}.header-main-title .package-name{padding:0 0 0 10px;border:solid #c01818;border-width:0 0 0 1px;font-family:\\"Open Sans\\",sans-serif}.header-buttons{position:relative;float:right;color:#5d7998;margin:10px 20px 0 0}.space-in-between{margin-right:20px}.flex-container{display:flex;flex-direction:row}.flex-left,.flex-right{width:50%}.wss-header{height:57px;position:relative;background-color:#fff;color:#333;font-size:18px;min-height:48px;outline:none;box-shadow:0 2px 4px rgb(33 41 52/12%),0 2px 2px rgb(0 0 0/8%)}\\n/*# sourceMappingURL=main.e4ba8ee2.chunk.css.map */", "",{"version":3,"sources":["webpack://src/auth-layout/Header.css","webpack://build/static/css/main.e4ba8ee2.chunk.css"],"names":[],"mappings":"AAAA,mBACE,iBAAkB,CAClB,UAAW,CACX,gBAAiB,CACjB,qBAAsB,CACtB,aAAc,CACd,eACF,CACA,uBACE,UACF,CAEA,gCACE,kBACF,CAEA,iCAEE,kBAAmB,CACnB,oBAAuB,CAAvB,sBAAuB,CACvB,kCACF,CAEA,gBACE,iBAAkB,CAClB,WAAY,CACZ,aAAc,CACd,oBACF,CAEA,kBACE,iBACF,CAEA,gBACE,YAAa,CACb,kBACF,CAMA,uBACE,SACF,CAEA,YACE,WAAY,CACZ,iBAAkB,CAClB,qBAAsB,CACtB,UAAc,CACd,cAAe,CACf,eAAgB,CAChB,YAAa,CACb,8DACF;ACvDA,kDAAkD","sourcesContent":[".header-main-title {\\n  position: relative;\\n  float: left;\\n  line-height: 25px;\\n  padding: 17px 0 0 25px;\\n  color: #c01818;\\n  font-weight: bold;\\n}\\n.header-main-title > div {\\n  float: left;\\n}\\n\\n.header-main-title .mcafee-logo {\\n  padding: 0 15px 0 0;\\n}\\n\\n.header-main-title .package-name {\\n  border: solid #c01818;\\n  padding: 0 0 0 10px;\\n  border-width: 0 0 0 1px;\\n  font-family: \\"Open Sans\\", sans-serif;\\n}\\n\\n.header-buttons {\\n  position: relative;\\n  float: right;\\n  color: #5d7998;\\n  margin: 10px 20px 0 0;\\n}\\n\\n.space-in-between {\\n  margin-right: 20px;\\n}\\n\\n.flex-container {\\n  display: flex;\\n  flex-direction: row;\\n}\\n\\n.flex-left {\\n  width: 50%;\\n}\\n\\n.flex-right {\\n  width: 50%;\\n}\\n\\n.wss-header {\\n  height: 57px;\\n  position: relative;\\n  background-color: #fff;\\n  color: #333333;\\n  font-size: 18px;\\n  min-height: 48px;\\n  outline: none;\\n  box-shadow: 0px 2px 4px rgb(33 41 52 / 12%), 0px 2px 2px rgb(0 0 0 / 8%);\\n}\\n",".header-main-title{position:relative;float:left;line-height:25px;padding:17px 0 0 25px;color:#c01818;font-weight:700}.header-main-title>div{float:left}.header-main-title .mcafee-logo{padding:0 15px 0 0}.header-main-title .package-name{padding:0 0 0 10px;border:solid #c01818;border-width:0 0 0 1px;font-family:\\"Open Sans\\",sans-serif}.header-buttons{position:relative;float:right;color:#5d7998;margin:10px 20px 0 0}.space-in-between{margin-right:20px}.flex-container{display:flex;flex-direction:row}.flex-left,.flex-right{width:50%}.wss-header{height:57px;position:relative;background-color:#fff;color:#333;font-size:18px;min-height:48px;outline:none;box-shadow:0 2px 4px rgb(33 41 52/12%),0 2px 2px rgb(0 0 0/8%)}\\n/*# sourceMappingURL=main.e4ba8ee2.chunk.css.map */"],"sourceRoot":""}]);\n// Exports\n/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./build/static/css/main.e4ba8ee2.chunk.css?./node_modules/css-loader/dist/cjs.js')},function(module,exports,__webpack_require__){eval("__webpack_require__(0)(__webpack_require__(9))\n\n//# sourceURL=webpack:///./build/static/js/main.07e0c93c.chunk.js?")},function(module,exports){eval('module.exports = "/*! For license information please see main.07e0c93c.chunk.js.LICENSE.txt */\\n(this[\\"webpackJsonpwss-main-app\\"]=this[\\"webpackJsonpwss-main-app\\"]||[]).push([[0],[function(e,t,r){\\"use strict\\";e.exports=r(3)},function(e,t,r){\\"use strict\\";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function u(e){if(null===e||void 0===e)throw new TypeError(\\"Object.assign cannot be called with null or undefined\\");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String(\\"abc\\");if(e[5]=\\"de\\",\\"5\\"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t[\\"_\\"+String.fromCharCode(r)]=r;if(\\"0123456789\\"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(\\"\\"))return!1;var n={};return\\"abcdefghijklmnopqrst\\".split(\\"\\").forEach((function(e){n[e]=e})),\\"abcdefghijklmnopqrst\\"===Object.keys(Object.assign({},n)).join(\\"\\")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,c,l=u(e),a=1;a<arguments.length;a++){for(var s in r=Object(arguments[a]))o.call(r,s)&&(l[s]=r[s]);if(n){c=n(r);for(var f=0;f<c.length;f++)i.call(r,c[f])&&(l[c[f]]=r[c[f]])}}return l}},function(e,t,r){},function(e,t,r){\\"use strict\\";r(1);var n=r(4),o=60103;if(t.Fragment=60107,\\"function\\"===typeof Symbol&&Symbol.for){var i=Symbol.for;o=i(\\"react.element\\"),t.Fragment=i(\\"react.fragment\\")}var u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var n,i={},a=null,s=null;for(n in void 0!==r&&(a=\\"\\"+r),void 0!==t.key&&(a=\\"\\"+t.key),void 0!==t.ref&&(s=t.ref),t)c.call(t,n)&&!l.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:a,ref:s,props:i,_owner:u.current}}t.jsx=a,t.jsxs=a},function(e,t,r){\\"use strict\\";e.exports=r(5)},function(e,t,r){\\"use strict\\";var n=r(1),o=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var u=60109,c=60110,l=60112;t.Suspense=60113;var a=60115,s=60116;if(\\"function\\"===typeof Symbol&&Symbol.for){var f=Symbol.for;o=f(\\"react.element\\"),i=f(\\"react.portal\\"),t.Fragment=f(\\"react.fragment\\"),t.StrictMode=f(\\"react.strict_mode\\"),t.Profiler=f(\\"react.profiler\\"),u=f(\\"react.provider\\"),c=f(\\"react.context\\"),l=f(\\"react.forward_ref\\"),t.Suspense=f(\\"react.suspense\\"),a=f(\\"react.memo\\"),s=f(\\"react.lazy\\")}var d=\\"function\\"===typeof Symbol&&Symbol.iterator;function p(e){for(var t=\\"https://reactjs.org/docs/error-decoder.html?invariant=\\"+e,r=1;r<arguments.length;r++)t+=\\"&args[]=\\"+encodeURIComponent(arguments[r]);return\\"Minified React error #\\"+e+\\"; visit \\"+t+\\" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\\"}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function h(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||y}function b(){}function j(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if(\\"object\\"!==typeof e&&\\"function\\"!==typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,\\"setState\\")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,\\"forceUpdate\\")},b.prototype=h.prototype;var m=j.prototype=new b;m.constructor=j,n(m,h.prototype),m.isPureReactComponent=!0;var w={current:null},O=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};function g(e,t,r){var n,i={},u=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(u=\\"\\"+t.key),t)O.call(t,n)&&!L.hasOwnProperty(n)&&(i[n]=t[n]);var l=arguments.length-2;if(1===l)i.children=r;else if(1<l){for(var a=Array(l),s=0;s<l;s++)a[s]=arguments[s+2];i.children=a}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===i[n]&&(i[n]=l[n]);return{$$typeof:o,type:e,key:u,ref:c,props:i,_owner:w.current}}function C(e){return\\"object\\"===typeof e&&null!==e&&e.$$typeof===o}var _=/\\\\/+/g;function x(e,t){return\\"object\\"===typeof e&&null!==e&&null!=e.key?function(e){var t={\\"=\\":\\"=0\\",\\":\\":\\"=2\\"};return\\"$\\"+e.replace(/[=:]/g,(function(e){return t[e]}))}(\\"\\"+e.key):t.toString(36)}function R(e,t,r,n,u){var c=typeof e;\\"undefined\\"!==c&&\\"boolean\\"!==c||(e=null);var l=!1;if(null===e)l=!0;else switch(c){case\\"string\\":case\\"number\\":l=!0;break;case\\"object\\":switch(e.$$typeof){case o:case i:l=!0}}if(l)return u=u(l=e),e=\\"\\"===n?\\".\\"+x(l,0):n,Array.isArray(u)?(r=\\"\\",null!=e&&(r=e.replace(_,\\"$&/\\")+\\"/\\"),R(u,t,r,\\"\\",(function(e){return e}))):null!=u&&(C(u)&&(u=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,r+(!u.key||l&&l.key===u.key?\\"\\":(\\"\\"+u.key).replace(_,\\"$&/\\")+\\"/\\")+e)),t.push(u)),1;if(l=0,n=\\"\\"===n?\\".\\":n+\\":\\",Array.isArray(e))for(var a=0;a<e.length;a++){var s=n+x(c=e[a],a);l+=R(c,t,r,s,u)}else if(\\"function\\"===typeof(s=function(e){return null===e||\\"object\\"!==typeof e?null:\\"function\\"===typeof(e=d&&e[d]||e[\\"@@iterator\\"])?e:null}(e)))for(e=s.call(e),a=0;!(c=e.next()).done;)l+=R(c=c.value,t,r,s=n+x(c,a++),u);else if(\\"object\\"===c)throw t=\\"\\"+e,Error(p(31,\\"[object Object]\\"===t?\\"object with keys {\\"+Object.keys(e).join(\\", \\")+\\"}\\":t));return l}function S(e,t,r){if(null==e)return e;var n=[],o=0;return R(e,n,\\"\\",\\"\\",(function(e){return t.call(r,e,o++)})),n}function k(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function P(){var e=E.current;if(null===e)throw Error(p(321));return e}var I={ReactCurrentDispatcher:E,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:w,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:S,forEach:function(e,t,r){S(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return S(e,(function(){t++})),t},toArray:function(e){return S(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error(p(143));return e}},t.Component=h,t.PureComponent=j,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error(p(267,e));var i=n({},e.props),u=e.key,c=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,l=w.current),void 0!==t.key&&(u=\\"\\"+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)O.call(t,s)&&!L.hasOwnProperty(s)&&(i[s]=void 0===t[s]&&void 0!==a?a[s]:t[s])}var s=arguments.length-2;if(1===s)i.children=r;else if(1<s){a=Array(s);for(var f=0;f<s;f++)a[f]=arguments[f+2];i.children=a}return{$$typeof:o,type:e.type,key:u,ref:c,props:i,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:c,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=g,t.createFactory=function(e){var t=g.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:s,_payload:{_status:-1,_result:e},_init:k}},t.memo=function(e,t){return{$$typeof:a,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return P().useCallback(e,t)},t.useContext=function(e,t){return P().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return P().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return P().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return P().useLayoutEffect(e,t)},t.useMemo=function(e,t){return P().useMemo(e,t)},t.useReducer=function(e,t,r){return P().useReducer(e,t,r)},t.useRef=function(e){return P().useRef(e)},t.useState=function(e){return P().useState(e)},t.version=\\"17.0.2\\"},function(e,t,r){\\"use strict\\";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(\\"undefined\\"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var u,c=e[Symbol.iterator]();!(n=(u=c.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(l){o=!0,i=l}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}}(e,t)||function(e,t){if(e){if(\\"string\\"===typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return\\"Object\\"===r&&e.constructor&&(r=e.constructor.name),\\"Map\\"===r||\\"Set\\"===r?Array.from(e):\\"Arguments\\"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}(e,t)||function(){throw new TypeError(\\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\\")}()}r.r(t),r.d(t,\\"default\\",(function(){return f}));r(2);var l=r(0);function a(e){var t=e.packagename,r=void 0===t?\\"Security Center\\":t;return Object(l.jsx)(\\"div\\",{children:Object(l.jsxs)(\\"div\\",{id:\\"nav_bar\\",className:\\"wss-header\\",children:[Object(l.jsxs)(\\"div\\",{className:\\"header-main-title\\",children:[Object(l.jsx)(\\"div\\",{className:\\"mcafee-logo\\",children:Object(l.jsxs)(\\"svg\\",{width:\\"107\\",height:\\"26\\",viewBox:\\"0 0 124 24\\",fill:\\"none\\",xmlns:\\"http://www.w3.org/2000/svg\\",children:[Object(l.jsx)(\\"path\\",{fillRule:\\"evenodd\\",clipRule:\\"evenodd\\",d:\\"M61.6426 15.5011L58.4221 13.6081L58.1827 13.9789C57.4487 15.1198 56.4453 15.6987 55.2021 15.6976C53.0722 15.6966 51.4665 14.1065 51.4676 11.999C51.4692 9.89204 53.076 8.30413 55.2064 8.30519C56.4673 8.30625 57.4144 8.85391 58.1875 10.0303L58.4279 10.3957L61.6635 8.49851L61.384 8.09809C59.8382 5.88307 57.8181 4.80628 55.2085 4.80469C50.2752 4.80257 47.611 8.50805 47.6094 11.9964C47.6072 15.4852 50.2666 19.1944 55.1999 19.1971C57.7137 19.1981 60.0851 17.9338 61.3899 15.8962L61.6426 15.5011Z\\",fill:\\"#C01818\\"}),Object(l.jsx)(\\"path\\",{fillRule:\\"evenodd\\",clipRule:\\"evenodd\\",d:\\"M70.6277 7.65314L72.4299 12.1298L68.8004 12.1271L70.6277 7.65314ZM61.4814 19.199L65.9339 19.2016L67.257 15.9458L73.9395 15.949L75.2587 19.2064L79.7305 19.2091L71.7539 0.127119L67.7822 0.125L68.8396 2.65464L61.4814 19.199Z\\",fill:\\"#C01818\\"}),Object(l.jsx)(\\"path\\",{fillRule:\\"evenodd\\",clipRule:\\"evenodd\\",d:\\"M81.5738 19.2114L85.4812 19.2135L85.4861 10.6495L88.0336 10.6516L88.0357 7.05894L85.4882 7.05735L85.4887 5.35927C85.4887 4.63046 85.9824 3.85663 86.8963 3.85716C87.3986 3.85769 87.7016 3.94244 88.0041 4.07061L88.4389 4.25599L90.0622 0.750195L89.5943 0.561108C88.8683 0.266619 87.8569 0.160687 87.1517 0.160158C85.3795 0.159098 83.9194 0.732187 82.9268 1.81692C82.0605 2.76395 81.5829 4.08121 81.5818 5.52505L81.5808 7.0547L79.8557 7.05417L79.8535 10.6474L81.5792 10.6479L81.5738 19.2114Z\\",fill:\\"#C01818\\"}),Object(l.jsx)(\\"path\\",{fillRule:\\"evenodd\\",clipRule:\\"evenodd\\",d:\\"M29.1885 0.015625V19.1818L33.4338 19.1844L33.4402 8.2269L37.5549 11.2597L41.6733 8.2269V19.1892L45.9127 19.1913L45.9234 0.015625L37.5581 6.26875L29.1885 0.015625Z\\",fill:\\"#C01818\\"}),Object(l.jsx)(\\"path\\",{fillRule:\\"evenodd\\",clipRule:\\"evenodd\\",d:\\"M93.4254 10.272C93.9357 8.96483 95.0365 8.20159 96.4585 8.20212C97.8956 8.20265 99.0173 8.95053 99.6121 10.2752L93.4254 10.272ZM96.8335 4.8711C91.9157 4.86845 89.259 8.56439 89.2568 12.0421C89.2552 15.5209 91.9071 19.2184 96.8255 19.2211H96.8276H96.8308C99.086 19.1973 101.201 18.1803 102.838 16.3472L99.6514 14.6274C98.8343 15.4552 97.8422 15.8906 96.7467 15.8901C95.1421 15.889 93.719 14.8308 93.3469 13.4473L103.974 13.4531L103.974 12.4982C103.978 7.24025 99.8007 4.87321 96.8335 4.8711Z\\",fill:\\"#C01818\\"}),Object(l.jsx)(\\"path\\",{fillRule:\\"evenodd\\",clipRule:\\"evenodd\\",d:\\"M109.398 10.282C109.908 8.97429 111.008 8.21105 112.431 8.21158C113.868 8.21264 114.99 8.95999 115.585 10.2852L109.398 10.282ZM112.806 4.88086C107.887 4.87821 105.232 8.57363 105.229 12.0514C105.227 15.5301 107.879 19.2277 112.798 19.2309H112.8H112.802C115.059 19.2065 117.174 18.1895 118.81 16.3564L115.623 14.6371C114.806 15.465 113.814 15.9004 112.719 15.8998C111.114 15.8988 109.691 14.8405 109.32 13.4571L119.946 13.4624L119.947 12.5079C119.95 7.25002 115.773 4.88245 112.806 4.88086Z\\",fill:\\"#C01818\\"}),Object(l.jsx)(\\"path\\",{fillRule:\\"evenodd\\",clipRule:\\"evenodd\\",d:\\"M119.447 4.13281H121.102V4.43842H120.452V6.15398H120.095V4.43842H119.447V4.13281Z\\",fill:\\"#C01818\\"}),Object(l.jsx)(\\"path\\",{fillRule:\\"evenodd\\",clipRule:\\"evenodd\\",d:\\"M121.574 4.13281H122.078L122.641 5.71543H122.647L123.197 4.13281H123.694V6.15398H123.354V4.59414H123.348L122.782 6.15398H122.487L121.92 4.59414H121.915V6.15398H121.574V4.13281Z\\",fill:\\"#C01818\\"}),Object(l.jsx)(\\"path\\",{fillRule:\\"evenodd\\",clipRule:\\"evenodd\\",d:\\"M4.30152 16.3653V6.65355L10.4946 9.48668V4.80081L0 0V19.0814L10.4946 23.8865V19.2001L4.30152 16.3653Z\\",fill:\\"#C01818\\"}),Object(l.jsx)(\\"path\\",{fillRule:\\"evenodd\\",clipRule:\\"evenodd\\",d:\\"M16.6883 16.3653V6.65355L10.4951 9.48668V4.80081L20.9898 0V19.0814L10.4951 23.8865V19.2001L16.6883 16.3653Z\\",fill:\\"#C01818\\"})]})}),Object(l.jsx)(\\"div\\",{className:\\"package-name\\",children:r})]}),Object(l.jsxs)(\\"div\\",{className:\\"header-buttons justify-content-center\\",children:[Object(l.jsx)(\\"span\\",{role:\\"button\\",tabIndex:\\"0\\",id:\\"MinimizeBtn\\",className:\\"flex align-self-center space-in-between\\",onClick:function(){console.log(\\"minimize clicked!\\"),window.makeGetWindowIDRequest&&window.makeGetWindowIDRequest((function(e){window.makePublishMessageRequest&&window.makePublishMessageRequest(\\"UI_CONTAINER.MINIMIZE_WINDOW\\",{windowID:e})}),(function(e){console.error(\\"failed to minimize window\\",JSON.stringify(e))}))},children:Object(l.jsx)(\\"svg\\",{width:\\"16\\",height:\\"16\\",viewBox:\\"0 0 10 10\\",fill:\\"none\\",xmlns:\\"http://www.w3.org/2000/svg\\",children:Object(l.jsx)(\\"path\\",{d:\\"M11 4.99902V6H1V4.99902H11Z\\",fill:\\"#706E6E\\"})})}),Object(l.jsx)(\\"span\\",{role:\\"button\\",tabIndex:\\"0\\",id:\\"CloseBtn\\",onClick:function(){console.log(\\"close clicked!\\"),window.makeGetWindowIDRequest&&window.makeGetWindowIDRequest((function(e){window.makePublishMessageRequest&&window.makePublishMessageRequest(\\"UI_CONTAINER.DESTROY_WINDOW\\",{windowID:e})}),(function(e){console.error(\\"failed to close window\\",JSON.stringify(e))}))},children:Object(l.jsx)(\\"svg\\",{width:\\"16\\",height:\\"16\\",viewBox:\\"0 0 10 10\\",fill:\\"none\\",xmlns:\\"http://www.w3.org/2000/svg\\",children:Object(l.jsx)(\\"path\\",{d:\\"M6.70801 6L11 10.292L10.292 11L6 6.70801L1.70801 11L1 10.292L5.29199 6L1 1.70801L1.70801 1L6 5.29199L10.292 1L11 1.70801L6.70801 6Z\\",fill:\\"#706E6E\\"})})})]})]})})}function s(e){var t=e.urlParams||{},r=t.trigger,n=t.aai,o=n&&JSON.parse(n);return Object(l.jsx)(\\"h2\\",{children:function(){var e,t=\\"\\";switch(r){case\\"mscnt\\":t=\\"You must sign in to use the VPN feature...\\";break;case\\"add_device\\":t=\\"You must sign in to protect another device...\\";break;case\\"upfront\\":\\"register\\"===(null===o||void 0===o||null===(e=o.cc)||void 0===e?void 0:e.mode)&&(t=\\"Your new computer comes with McAfee LiveSafe!\\");break;default:t=\\"Default title\\"}return t}()})}function f(e){var t=window.__mcAuth0,r=(t.React,t.useState),n=t.useEffect,o=c(r(),2),u=o[0],f=o[1];n((function(){if(!u){var e=new URLSearchParams(window.location.search),t=Object.fromEntries(e.entries());f(t)}}),[u]);var d=e.mainApp,p=e.appProps;return Object(l.jsxs)(\\"div\\",{children:[Object(l.jsx)(a,{}),Object(l.jsxs)(\\"div\\",{className:\\"flex-container\\",children:[Object(l.jsx)(\\"div\\",{className:\\"flex-left sideColumn\\",children:Object(l.jsx)(d,i({},i(i({},p),{},{showHeader:!1,showFooter:!1})))}),Object(l.jsx)(\\"div\\",{className:\\"flex-right\\",children:Object(l.jsx)(s,{urlParams:u})})]})]})}window.customLayout=f}],[[6,1]]]);\\n//# sourceMappingURL=main.07e0c93c.chunk.js.map"\n\n//# sourceURL=webpack:///./build/static/js/main.07e0c93c.chunk.js?./node_modules/raw-loader')}]);