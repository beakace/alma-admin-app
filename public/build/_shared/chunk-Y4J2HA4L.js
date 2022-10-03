import {
  ClassNameGenerator_default,
  createBox,
  createTheme_default,
  init_createTheme,
  init_esm,
  init_esm2,
  init_styled,
  init_useThemeProps,
  require_prop_types
} from "/build/_shared/chunk-LSWZ6SJM.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// node_modules/@mui/material/esm/Box/Box.js
init_esm2();
var import_prop_types = __toESM(require_prop_types());

// node_modules/@mui/material/esm/className/index.js
init_esm();

// node_modules/@mui/material/esm/styles/index.js
init_esm2();
init_createTheme();

// node_modules/@mui/material/esm/styles/cssUtils.js
function getUnit(input) {
  return String(input).match(/[\d.\-+]*\s*(.*)/)[1] || "";
}
function toUnitless(length) {
  return parseFloat(length);
}

// node_modules/@mui/material/esm/styles/index.js
init_useThemeProps();
init_styled();

// node_modules/@mui/material/esm/styles/ThemeProvider.js
init_esm2();

// node_modules/@mui/material/esm/Box/Box.js
var defaultTheme = createTheme_default();
var Box = createBox({
  defaultTheme,
  defaultClassName: "MuiBox-root",
  generateClassName: ClassNameGenerator_default.generate
});
true ? Box.propTypes = {
  children: import_prop_types.default.node,
  component: import_prop_types.default.elementType,
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
} : void 0;
var Box_default = Box;

export {
  getUnit,
  toUnitless,
  Box_default
};
//# sourceMappingURL=/build/_shared/chunk-Y4J2HA4L.js.map
