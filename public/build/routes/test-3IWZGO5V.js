import {
  Checkbox_default,
  FormControlLabel_default,
  FormControl_default,
  FormGroup_default,
  FormLabel_default,
  require_Clear
} from "/build/_shared/chunk-23YXPYNB.js";
import {
  Button_default
} from "/build/_shared/chunk-3CS5BHU6.js";
import "/build/_shared/chunk-OW2WZFAM.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-YLI6H36I.js";

// app/routes/test.tsx
var import_Clear = __toESM(require_Clear());
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Index() {
  const loaderData = useLoaderData();
  const [isChecked, setIsChecked] = (0, import_react2.useState)(false);
  const handleClearClick = () => {
    setIsChecked(false);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl_default, {
    style: {
      display: "flex",
      alignItems: "flex-end"
    },
    component: "fieldset",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormLabel_default, {
        component: "legend"
      }, void 0, false, {
        fileName: "app/routes/test.tsx",
        lineNumber: 31,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormGroup_default, {
        "aria-label": "position",
        row: true,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControlLabel_default, {
            value: "Bez maila",
            control: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Checkbox_default, {
              checked: isChecked,
              onChange: (e) => {
                setIsChecked(e.target.checked);
              }
            }, void 0, false, {
              fileName: "app/routes/test.tsx",
              lineNumber: 36,
              columnNumber: 13
            }, this),
            label: "Bez maila",
            labelPlacement: "end"
          }, void 0, false, {
            fileName: "app/routes/test.tsx",
            lineNumber: 33,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControlLabel_default, {
            value: "A",
            control: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Checkbox_default, {
              checked: isChecked,
              onChange: (e) => {
                setIsChecked(e.target.checked);
              }
            }, void 0, false, {
              fileName: "app/routes/test.tsx",
              lineNumber: 49,
              columnNumber: 13
            }, this),
            label: "A",
            labelPlacement: "end"
          }, void 0, false, {
            fileName: "app/routes/test.tsx",
            lineNumber: 46,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControlLabel_default, {
            value: "B",
            control: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Checkbox_default, {
              checked: isChecked,
              onChange: (e) => {
                setIsChecked(e.target.checked);
              }
            }, void 0, false, {
              fileName: "app/routes/test.tsx",
              lineNumber: 62,
              columnNumber: 13
            }, this),
            label: "B",
            labelPlacement: "end"
          }, void 0, false, {
            fileName: "app/routes/test.tsx",
            lineNumber: 59,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControlLabel_default, {
            value: "C",
            control: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Checkbox_default, {
              checked: isChecked,
              onChange: (e) => {
                setIsChecked(e.target.checked);
              }
            }, void 0, false, {
              fileName: "app/routes/test.tsx",
              lineNumber: 75,
              columnNumber: 13
            }, this),
            label: "C",
            labelPlacement: "end"
          }, void 0, false, {
            fileName: "app/routes/test.tsx",
            lineNumber: 72,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControlLabel_default, {
            value: "D",
            control: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Checkbox_default, {
              checked: isChecked,
              onChange: (e) => {
                setIsChecked(e.target.checked);
              }
            }, void 0, false, {
              fileName: "app/routes/test.tsx",
              lineNumber: 88,
              columnNumber: 13
            }, this),
            label: "D",
            labelPlacement: "end"
          }, void 0, false, {
            fileName: "app/routes/test.tsx",
            lineNumber: 85,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControlLabel_default, {
            value: "S/X",
            control: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Checkbox_default, {
              checked: isChecked,
              onChange: (e) => {
                setIsChecked(e.target.checked);
              }
            }, void 0, false, {
              fileName: "app/routes/test.tsx",
              lineNumber: 101,
              columnNumber: 13
            }, this),
            label: "S/X",
            labelPlacement: "end"
          }, void 0, false, {
            fileName: "app/routes/test.tsx",
            lineNumber: 98,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
            sx: { visibility: isChecked ? "visible" : "hidden" },
            onClick: handleClearClick,
            variant: "outlined",
            startIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Clear.default, {}, void 0, false, {
              fileName: "app/routes/test.tsx",
              lineNumber: 115,
              columnNumber: 22
            }, this),
            children: "Wyczy\u015B\u0107 filtry"
          }, void 0, false, {
            fileName: "app/routes/test.tsx",
            lineNumber: 111,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/test.tsx",
        lineNumber: 32,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/test.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/test-3IWZGO5V.js.map
