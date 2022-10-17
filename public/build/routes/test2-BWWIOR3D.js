import {
  require_createSvgIcon,
  require_interopRequireDefault
} from "/build/_shared/chunk-4ZM6F7F7.js";
import {
  TextField_default
} from "/build/_shared/chunk-REBCZQQV.js";
import {
  Box_default,
  Button_default,
  init_esm2 as init_esm,
  require_jsx_runtime
} from "/build/_shared/chunk-RAMW3SOP.js";
import "/build/_shared/chunk-BBTLTVP5.js";
import {
  require_jsx_dev_runtime,
  require_react,
  useLoaderData,
  useSearchParams
} from "/build/_shared/chunk-L526GBBA.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// node_modules/@mui/icons-material/Search.js
var require_Search = __commonJS({
  "node_modules/@mui/icons-material/Search.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _jsxRuntime = require_jsx_runtime();
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
      d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
    }), "Search");
    exports.default = _default;
  }
});

// app/routes/test2.tsx
init_esm();
var import_react = __toESM(require_react());
var import_Search = __toESM(require_Search());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function SearchBar() {
  const [loading, setLoading] = (0, import_react.useState)(false);
  const [query, setQuery] = (0, import_react.useState)("");
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");
  const newCouples = useLoaderData().couples;
  (0, import_react.useEffect)(() => {
    if (searchQuery) {
      setLoading(true);
      fetch(newCouples.city).then((response) => response.json()).then((data) => {
        data = newCouples;
      }).finally(() => {
        setLoading(false);
      });
    }
  }, [searchQuery]);
  const changeHandler = (event) => {
    setQuery(event.target.value);
  };
  (0, import_react.useEffect)(() => {
    if (searchQuery) {
      setQuery(searchQuery);
    }
  }, [searchQuery]);
  const startSearch = (0, import_react.useCallback)(
    (event) => {
      event.preventDefault();
      setSearchParams({ query }, { replace: true });
    },
    [query, setSearchParams]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, {
    component: "form",
    noValidate: true,
    autoComplete: "off",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
        id: "outlined-basic",
        variant: "outlined",
        label: "Szukaj...",
        value: query,
        onChange: changeHandler,
        size: "small",
        sx: {
          mt: "1rem",
          height: "3rem"
        }
      }, void 0, false, {
        fileName: "app/routes/test2.tsx",
        lineNumber: 52,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
        type: "submit",
        onClick: startSearch,
        variant: "contained",
        size: "large",
        sx: {
          mt: "1rem",
          height: "2.5rem"
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Search.default, {}, void 0, false, {
          fileName: "app/routes/test2.tsx",
          lineNumber: 75,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/test2.tsx",
        lineNumber: 65,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/test2.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
}
var test2_default = SearchBar;
export {
  test2_default as default
};
//# sourceMappingURL=/build/routes/test2-BWWIOR3D.js.map
