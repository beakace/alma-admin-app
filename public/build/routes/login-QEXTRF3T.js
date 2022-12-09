import {
  require_jsx_dev_runtime,
  useSearchParams
} from "/build/_shared/chunk-D7N37Z4Z.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/routes/login.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Login() {
  var _a;
  const [searchParams] = useSearchParams();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "container",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "content",
        "data-light": "",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            children: "Login"
          }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 16,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
            method: "post",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                type: "hidden",
                name: "redirectTo",
                value: (_a = searchParams.get("redirectTo")) != null ? _a : void 0
              }, void 0, false, {
                fileName: "app/routes/login.tsx",
                lineNumber: 18,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                    htmlFor: "username-input",
                    children: "U\u017Cytkownik"
                  }, void 0, false, {
                    fileName: "app/routes/login.tsx",
                    lineNumber: 25,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                    type: "text",
                    id: "username-input",
                    name: "username"
                  }, void 0, false, {
                    fileName: "app/routes/login.tsx",
                    lineNumber: 26,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/login.tsx",
                lineNumber: 24,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                    htmlFor: "password-input",
                    children: "Has\u0142o"
                  }, void 0, false, {
                    fileName: "app/routes/login.tsx",
                    lineNumber: 29,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                    id: "password-input",
                    name: "password",
                    type: "password"
                  }, void 0, false, {
                    fileName: "app/routes/login.tsx",
                    lineNumber: 30,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/login.tsx",
                lineNumber: 28,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                type: "submit",
                className: "button",
                children: "Submit"
              }, void 0, false, {
                fileName: "app/routes/login.tsx",
                lineNumber: 32,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/login.tsx",
            lineNumber: 17,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 15,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "links",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {}, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 38,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 37,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/login.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
export {
  Login as default
};
//# sourceMappingURL=/build/routes/login-QEXTRF3T.js.map
