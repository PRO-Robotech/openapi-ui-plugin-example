import { r as reactExports } from './__federation_shared_react-CBegDaUF.js';

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=reactExports,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:true,ref:true,__self:true,__source:true};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a) void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;

{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}

var jsxRuntimeExports = jsxRuntime.exports;

const App = ({ cluster, namespace, syntheticProject, pluginName, pluginPath }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      style: {
        padding: "20px",
        border: "2px dashed #4c8bf5",
        borderRadius: "8px",
        fontFamily: "monospace"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "🚀 Plugin Loaded!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { style: { fontSize: "14px", whiteSpace: "pre-wrap" }, children: JSON.stringify(
          {
            cluster,
            namespace,
            syntheticProject,
            pluginName,
            pluginPath
          },
          null,
          2
        ) })
      ]
    }
  );
};

export { App, App as default, jsxRuntimeExports as j };
