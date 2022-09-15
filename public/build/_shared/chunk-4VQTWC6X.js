import {
  ButtonBase_default,
  ClassNameGenerator_default,
  _objectWithoutPropertiesLoose,
  alpha,
  capitalize_default,
  clsx_m_default,
  composeClasses,
  createChainedFunction,
  debounce,
  deprecatedPropType,
  extendSxProp,
  generateUtilityClass,
  generateUtilityClasses,
  init_base,
  init_capitalize,
  init_clsx_m,
  init_esm,
  init_esm2,
  init_objectWithoutPropertiesLoose,
  init_styled,
  init_useEventCallback,
  init_useForkRef,
  init_useIsFocusVisible,
  init_useThemeProps,
  isMuiElement,
  ownerDocument,
  ownerWindow,
  refType_default,
  requirePropFactory,
  require_jsx_runtime,
  require_prop_types,
  rootShouldForwardProp,
  setRef,
  styled_default,
  unsupportedProp,
  useControlled,
  useEnhancedEffect_default,
  useEventCallback_default,
  useForkRef_default,
  useId,
  useIsFocusVisible_default,
  useThemeProps
} from "/build/_shared/chunk-GG33M3TJ.js";
import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  __toESM,
  _extends,
  init_extends,
  require_react
} from "/build/_shared/chunk-YLI6H36I.js";

// node_modules/@babel/runtime/helpers/interopRequireDefault.js
var require_interopRequireDefault = __commonJS({
  "node_modules/@babel/runtime/helpers/interopRequireDefault.js"(exports, module) {
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        "default": obj
      };
    }
    module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@mui/base/className/index.js
var init_className = __esm({
  "node_modules/@mui/base/className/index.js"() {
    init_esm();
  }
});

// node_modules/@mui/material/esm/utils/createChainedFunction.js
var createChainedFunction_default;
var init_createChainedFunction = __esm({
  "node_modules/@mui/material/esm/utils/createChainedFunction.js"() {
    init_esm();
    createChainedFunction_default = createChainedFunction;
  }
});

// node_modules/@mui/material/esm/SvgIcon/svgIconClasses.js
function getSvgIconUtilityClass(slot) {
  return generateUtilityClass("MuiSvgIcon", slot);
}
var svgIconClasses;
var init_svgIconClasses = __esm({
  "node_modules/@mui/material/esm/SvgIcon/svgIconClasses.js"() {
    init_base();
    svgIconClasses = generateUtilityClasses("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
  }
});

// node_modules/@mui/material/esm/SvgIcon/SvgIcon.js
var React, import_prop_types, import_jsx_runtime, import_jsx_runtime2, _excluded, useUtilityClasses, SvgIconRoot, SvgIcon, SvgIcon_default;
var init_SvgIcon = __esm({
  "node_modules/@mui/material/esm/SvgIcon/SvgIcon.js"() {
    init_extends();
    init_objectWithoutPropertiesLoose();
    React = __toESM(require_react());
    import_prop_types = __toESM(require_prop_types());
    init_clsx_m();
    init_base();
    init_capitalize();
    init_useThemeProps();
    init_styled();
    init_svgIconClasses();
    import_jsx_runtime = __toESM(require_jsx_runtime());
    import_jsx_runtime2 = __toESM(require_jsx_runtime());
    _excluded = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"];
    useUtilityClasses = (ownerState) => {
      const {
        color,
        fontSize,
        classes
      } = ownerState;
      const slots = {
        root: ["root", color !== "inherit" && `color${capitalize_default(color)}`, `fontSize${capitalize_default(fontSize)}`]
      };
      return composeClasses(slots, getSvgIconUtilityClass, classes);
    };
    SvgIconRoot = styled_default("svg", {
      name: "MuiSvgIcon",
      slot: "Root",
      overridesResolver: (props, styles) => {
        const {
          ownerState
        } = props;
        return [styles.root, ownerState.color !== "inherit" && styles[`color${capitalize_default(ownerState.color)}`], styles[`fontSize${capitalize_default(ownerState.fontSize)}`]];
      }
    })(({
      theme,
      ownerState
    }) => {
      var _theme$transitions, _theme$transitions$cr, _theme$transitions2, _theme$transitions2$d, _theme$typography, _theme$typography$pxT, _theme$typography2, _theme$typography2$px, _theme$typography3, _theme$typography3$px, _palette$ownerState$c, _palette, _palette$ownerState$c2, _palette2, _palette2$action, _palette3, _palette3$action;
      return {
        userSelect: "none",
        width: "1em",
        height: "1em",
        display: "inline-block",
        fill: "currentColor",
        flexShrink: 0,
        transition: (_theme$transitions = theme.transitions) == null ? void 0 : (_theme$transitions$cr = _theme$transitions.create) == null ? void 0 : _theme$transitions$cr.call(_theme$transitions, "fill", {
          duration: (_theme$transitions2 = theme.transitions) == null ? void 0 : (_theme$transitions2$d = _theme$transitions2.duration) == null ? void 0 : _theme$transitions2$d.shorter
        }),
        fontSize: {
          inherit: "inherit",
          small: ((_theme$typography = theme.typography) == null ? void 0 : (_theme$typography$pxT = _theme$typography.pxToRem) == null ? void 0 : _theme$typography$pxT.call(_theme$typography, 20)) || "1.25rem",
          medium: ((_theme$typography2 = theme.typography) == null ? void 0 : (_theme$typography2$px = _theme$typography2.pxToRem) == null ? void 0 : _theme$typography2$px.call(_theme$typography2, 24)) || "1.5rem",
          large: ((_theme$typography3 = theme.typography) == null ? void 0 : (_theme$typography3$px = _theme$typography3.pxToRem) == null ? void 0 : _theme$typography3$px.call(_theme$typography3, 35)) || "2.1875"
        }[ownerState.fontSize],
        color: (_palette$ownerState$c = (_palette = (theme.vars || theme).palette) == null ? void 0 : (_palette$ownerState$c2 = _palette[ownerState.color]) == null ? void 0 : _palette$ownerState$c2.main) != null ? _palette$ownerState$c : {
          action: (_palette2 = (theme.vars || theme).palette) == null ? void 0 : (_palette2$action = _palette2.action) == null ? void 0 : _palette2$action.active,
          disabled: (_palette3 = (theme.vars || theme).palette) == null ? void 0 : (_palette3$action = _palette3.action) == null ? void 0 : _palette3$action.disabled,
          inherit: void 0
        }[ownerState.color]
      };
    });
    SvgIcon = /* @__PURE__ */ React.forwardRef(function SvgIcon2(inProps, ref) {
      const props = useThemeProps({
        props: inProps,
        name: "MuiSvgIcon"
      });
      const {
        children,
        className,
        color = "inherit",
        component = "svg",
        fontSize = "medium",
        htmlColor,
        inheritViewBox = false,
        titleAccess,
        viewBox = "0 0 24 24"
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
      const ownerState = _extends({}, props, {
        color,
        component,
        fontSize,
        instanceFontSize: inProps.fontSize,
        inheritViewBox,
        viewBox
      });
      const more = {};
      if (!inheritViewBox) {
        more.viewBox = viewBox;
      }
      const classes = useUtilityClasses(ownerState);
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(SvgIconRoot, _extends({
        as: component,
        className: clsx_m_default(classes.root, className),
        ownerState,
        focusable: "false",
        color: htmlColor,
        "aria-hidden": titleAccess ? void 0 : true,
        role: titleAccess ? "img" : void 0,
        ref
      }, more, other, {
        children: [children, titleAccess ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", {
          children: titleAccess
        }) : null]
      }));
    });
    true ? SvgIcon.propTypes = {
      children: import_prop_types.default.node,
      classes: import_prop_types.default.object,
      className: import_prop_types.default.string,
      color: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types.default.string]),
      component: import_prop_types.default.elementType,
      fontSize: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["inherit", "large", "medium", "small"]), import_prop_types.default.string]),
      htmlColor: import_prop_types.default.string,
      inheritViewBox: import_prop_types.default.bool,
      shapeRendering: import_prop_types.default.string,
      sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
      titleAccess: import_prop_types.default.string,
      viewBox: import_prop_types.default.string
    } : void 0;
    SvgIcon.muiName = "SvgIcon";
    SvgIcon_default = SvgIcon;
  }
});

// node_modules/@mui/material/esm/SvgIcon/index.js
var init_SvgIcon2 = __esm({
  "node_modules/@mui/material/esm/SvgIcon/index.js"() {
    init_SvgIcon();
    init_svgIconClasses();
  }
});

// node_modules/@mui/material/esm/utils/createSvgIcon.js
function createSvgIcon(path, displayName) {
  const Component = (props, ref) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(SvgIcon_default, _extends({
    "data-testid": `${displayName}Icon`,
    ref
  }, props, {
    children: path
  }));
  if (true) {
    Component.displayName = `${displayName}Icon`;
  }
  Component.muiName = SvgIcon_default.muiName;
  return /* @__PURE__ */ React2.memo(/* @__PURE__ */ React2.forwardRef(Component));
}
var React2, import_jsx_runtime3;
var init_createSvgIcon = __esm({
  "node_modules/@mui/material/esm/utils/createSvgIcon.js"() {
    init_extends();
    React2 = __toESM(require_react());
    init_SvgIcon2();
    import_jsx_runtime3 = __toESM(require_jsx_runtime());
  }
});

// node_modules/@mui/material/esm/utils/debounce.js
var debounce_default;
var init_debounce = __esm({
  "node_modules/@mui/material/esm/utils/debounce.js"() {
    init_esm();
    debounce_default = debounce;
  }
});

// node_modules/@mui/material/esm/utils/deprecatedPropType.js
var deprecatedPropType_default;
var init_deprecatedPropType = __esm({
  "node_modules/@mui/material/esm/utils/deprecatedPropType.js"() {
    init_esm();
    deprecatedPropType_default = deprecatedPropType;
  }
});

// node_modules/@mui/material/esm/utils/isMuiElement.js
var isMuiElement_default;
var init_isMuiElement = __esm({
  "node_modules/@mui/material/esm/utils/isMuiElement.js"() {
    init_esm();
    isMuiElement_default = isMuiElement;
  }
});

// node_modules/@mui/material/esm/utils/ownerDocument.js
var ownerDocument_default;
var init_ownerDocument = __esm({
  "node_modules/@mui/material/esm/utils/ownerDocument.js"() {
    init_esm();
    ownerDocument_default = ownerDocument;
  }
});

// node_modules/@mui/material/esm/utils/ownerWindow.js
var ownerWindow_default;
var init_ownerWindow = __esm({
  "node_modules/@mui/material/esm/utils/ownerWindow.js"() {
    init_esm();
    ownerWindow_default = ownerWindow;
  }
});

// node_modules/@mui/material/esm/utils/requirePropFactory.js
var requirePropFactory_default;
var init_requirePropFactory = __esm({
  "node_modules/@mui/material/esm/utils/requirePropFactory.js"() {
    init_esm();
    requirePropFactory_default = requirePropFactory;
  }
});

// node_modules/@mui/material/esm/utils/setRef.js
var setRef_default;
var init_setRef = __esm({
  "node_modules/@mui/material/esm/utils/setRef.js"() {
    init_esm();
    setRef_default = setRef;
  }
});

// node_modules/@mui/material/esm/utils/useEnhancedEffect.js
var useEnhancedEffect_default2;
var init_useEnhancedEffect = __esm({
  "node_modules/@mui/material/esm/utils/useEnhancedEffect.js"() {
    init_esm();
    useEnhancedEffect_default2 = useEnhancedEffect_default;
  }
});

// node_modules/@mui/material/esm/utils/useId.js
var useId_default;
var init_useId = __esm({
  "node_modules/@mui/material/esm/utils/useId.js"() {
    init_esm();
    useId_default = useId;
  }
});

// node_modules/@mui/material/esm/utils/unsupportedProp.js
var unsupportedProp_default;
var init_unsupportedProp = __esm({
  "node_modules/@mui/material/esm/utils/unsupportedProp.js"() {
    init_esm();
    unsupportedProp_default = unsupportedProp;
  }
});

// node_modules/@mui/material/esm/utils/useControlled.js
var useControlled_default;
var init_useControlled = __esm({
  "node_modules/@mui/material/esm/utils/useControlled.js"() {
    init_esm();
    useControlled_default = useControlled;
  }
});

// node_modules/@mui/material/esm/utils/index.js
var utils_exports = {};
__export(utils_exports, {
  capitalize: () => capitalize_default,
  createChainedFunction: () => createChainedFunction_default,
  createSvgIcon: () => createSvgIcon,
  debounce: () => debounce_default,
  deprecatedPropType: () => deprecatedPropType_default,
  isMuiElement: () => isMuiElement_default,
  ownerDocument: () => ownerDocument_default,
  ownerWindow: () => ownerWindow_default,
  requirePropFactory: () => requirePropFactory_default,
  setRef: () => setRef_default,
  unstable_ClassNameGenerator: () => unstable_ClassNameGenerator,
  unstable_useEnhancedEffect: () => useEnhancedEffect_default2,
  unstable_useId: () => useId_default,
  unsupportedProp: () => unsupportedProp_default,
  useControlled: () => useControlled_default,
  useEventCallback: () => useEventCallback_default,
  useForkRef: () => useForkRef_default,
  useIsFocusVisible: () => useIsFocusVisible_default
});
var unstable_ClassNameGenerator;
var init_utils = __esm({
  "node_modules/@mui/material/esm/utils/index.js"() {
    init_className();
    init_capitalize();
    init_createChainedFunction();
    init_createSvgIcon();
    init_debounce();
    init_deprecatedPropType();
    init_isMuiElement();
    init_ownerDocument();
    init_ownerWindow();
    init_requirePropFactory();
    init_setRef();
    init_useEnhancedEffect();
    init_useId();
    init_unsupportedProp();
    init_useControlled();
    init_useEventCallback();
    init_useForkRef();
    init_useIsFocusVisible();
    unstable_ClassNameGenerator = {
      configure: (generator) => {
        console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.", "", "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead", "", "The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401", "", "The updated documentation: https://mui.com/guides/classname-generator/"].join("\n"));
        ClassNameGenerator_default.configure(generator);
      }
    };
  }
});

// node_modules/@mui/icons-material/utils/createSvgIcon.js
var require_createSvgIcon = __commonJS({
  "node_modules/@mui/icons-material/utils/createSvgIcon.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _utils.createSvgIcon;
      }
    });
    var _utils = (init_utils(), __toCommonJS(utils_exports));
  }
});

// node_modules/@mui/icons-material/Clear.js
var require_Clear = __commonJS({
  "node_modules/@mui/icons-material/Clear.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _jsxRuntime = require_jsx_runtime();
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
      d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
    }), "Clear");
    exports.default = _default;
  }
});

// node_modules/@mui/material/esm/Checkbox/Checkbox.js
init_objectWithoutPropertiesLoose();
init_extends();
var React9 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());
init_esm();
init_base();
init_esm2();

// node_modules/@mui/material/esm/internal/SwitchBase.js
init_objectWithoutPropertiesLoose();
init_extends();
var React5 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());
init_clsx_m();
init_esm();
init_base();
init_capitalize();
init_styled();
init_useControlled();

// node_modules/@mui/material/esm/FormControl/useFormControl.js
var React4 = __toESM(require_react());

// node_modules/@mui/material/esm/FormControl/FormControlContext.js
var React3 = __toESM(require_react());
var FormControlContext = /* @__PURE__ */ React3.createContext();
if (true) {
  FormControlContext.displayName = "FormControlContext";
}
var FormControlContext_default = FormControlContext;

// node_modules/@mui/material/esm/FormControl/useFormControl.js
function useFormControl() {
  return React4.useContext(FormControlContext_default);
}

// node_modules/@mui/material/esm/internal/switchBaseClasses.js
init_base();
function getSwitchBaseUtilityClass(slot) {
  return generateUtilityClass("PrivateSwitchBase", slot);
}
var switchBaseClasses = generateUtilityClasses("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);

// node_modules/@mui/material/esm/internal/SwitchBase.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var _excluded2 = ["autoFocus", "checked", "checkedIcon", "className", "defaultChecked", "disabled", "disableFocusRipple", "edge", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"];
var useUtilityClasses2 = (ownerState) => {
  const {
    classes,
    checked,
    disabled,
    edge
  } = ownerState;
  const slots = {
    root: ["root", checked && "checked", disabled && "disabled", edge && `edge${capitalize_default(edge)}`],
    input: ["input"]
  };
  return composeClasses(slots, getSwitchBaseUtilityClass, classes);
};
var SwitchBaseRoot = styled_default(ButtonBase_default)(({
  ownerState
}) => _extends({
  padding: 9,
  borderRadius: "50%"
}, ownerState.edge === "start" && {
  marginLeft: ownerState.size === "small" ? -3 : -12
}, ownerState.edge === "end" && {
  marginRight: ownerState.size === "small" ? -3 : -12
}));
var SwitchBaseInput = styled_default("input")({
  cursor: "inherit",
  position: "absolute",
  opacity: 0,
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  zIndex: 1
});
var SwitchBase = /* @__PURE__ */ React5.forwardRef(function SwitchBase2(props, ref) {
  const {
    autoFocus,
    checked: checkedProp,
    checkedIcon,
    className,
    defaultChecked,
    disabled: disabledProp,
    disableFocusRipple = false,
    edge = false,
    icon,
    id,
    inputProps,
    inputRef,
    name,
    onBlur,
    onChange,
    onFocus,
    readOnly,
    required,
    tabIndex,
    type,
    value
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded2);
  const [checked, setCheckedState] = useControlled_default({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: "SwitchBase",
    state: "checked"
  });
  const muiFormControl = useFormControl();
  const handleFocus = (event) => {
    if (onFocus) {
      onFocus(event);
    }
    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    }
  };
  const handleBlur = (event) => {
    if (onBlur) {
      onBlur(event);
    }
    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    }
  };
  const handleInputChange = (event) => {
    if (event.nativeEvent.defaultPrevented) {
      return;
    }
    const newChecked = event.target.checked;
    setCheckedState(newChecked);
    if (onChange) {
      onChange(event, newChecked);
    }
  };
  let disabled = disabledProp;
  if (muiFormControl) {
    if (typeof disabled === "undefined") {
      disabled = muiFormControl.disabled;
    }
  }
  const hasLabelFor = type === "checkbox" || type === "radio";
  const ownerState = _extends({}, props, {
    checked,
    disabled,
    disableFocusRipple,
    edge
  });
  const classes = useUtilityClasses2(ownerState);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(SwitchBaseRoot, _extends({
    component: "span",
    className: clsx_m_default(classes.root, className),
    centerRipple: true,
    focusRipple: !disableFocusRipple,
    disabled,
    tabIndex: null,
    role: void 0,
    onFocus: handleFocus,
    onBlur: handleBlur,
    ownerState,
    ref
  }, other, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SwitchBaseInput, _extends({
      autoFocus,
      checked: checkedProp,
      defaultChecked,
      className: classes.input,
      disabled,
      id: hasLabelFor && id,
      name,
      onChange: handleInputChange,
      readOnly,
      ref: inputRef,
      required,
      ownerState,
      tabIndex,
      type
    }, type === "checkbox" && value === void 0 ? {} : {
      value
    }, inputProps)), checked ? checkedIcon : icon]
  }));
});
true ? SwitchBase.propTypes = {
  autoFocus: import_prop_types2.default.bool,
  checked: import_prop_types2.default.bool,
  checkedIcon: import_prop_types2.default.node.isRequired,
  classes: import_prop_types2.default.object,
  className: import_prop_types2.default.string,
  defaultChecked: import_prop_types2.default.bool,
  disabled: import_prop_types2.default.bool,
  disableFocusRipple: import_prop_types2.default.bool,
  edge: import_prop_types2.default.oneOf(["end", "start", false]),
  icon: import_prop_types2.default.node.isRequired,
  id: import_prop_types2.default.string,
  inputProps: import_prop_types2.default.object,
  inputRef: refType_default,
  name: import_prop_types2.default.string,
  onBlur: import_prop_types2.default.func,
  onChange: import_prop_types2.default.func,
  onFocus: import_prop_types2.default.func,
  readOnly: import_prop_types2.default.bool,
  required: import_prop_types2.default.bool,
  sx: import_prop_types2.default.object,
  tabIndex: import_prop_types2.default.oneOfType([import_prop_types2.default.number, import_prop_types2.default.string]),
  type: import_prop_types2.default.string.isRequired,
  value: import_prop_types2.default.any
} : void 0;
var SwitchBase_default = SwitchBase;

// node_modules/@mui/material/esm/internal/svg-icons/CheckBoxOutlineBlank.js
var React6 = __toESM(require_react());
init_createSvgIcon();
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var CheckBoxOutlineBlank_default = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}), "CheckBoxOutlineBlank");

// node_modules/@mui/material/esm/internal/svg-icons/CheckBox.js
var React7 = __toESM(require_react());
init_createSvgIcon();
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var CheckBox_default = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), "CheckBox");

// node_modules/@mui/material/esm/internal/svg-icons/IndeterminateCheckBox.js
var React8 = __toESM(require_react());
init_createSvgIcon();
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
var IndeterminateCheckBox_default = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}), "IndeterminateCheckBox");

// node_modules/@mui/material/esm/Checkbox/Checkbox.js
init_capitalize();
init_useThemeProps();
init_styled();

// node_modules/@mui/material/esm/Checkbox/checkboxClasses.js
init_base();
function getCheckboxUtilityClass(slot) {
  return generateUtilityClass("MuiCheckbox", slot);
}
var checkboxClasses = generateUtilityClasses("MuiCheckbox", ["root", "checked", "disabled", "indeterminate", "colorPrimary", "colorSecondary"]);
var checkboxClasses_default = checkboxClasses;

// node_modules/@mui/material/esm/Checkbox/Checkbox.js
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
var _excluded3 = ["checkedIcon", "color", "icon", "indeterminate", "indeterminateIcon", "inputProps", "size"];
var useUtilityClasses3 = (ownerState) => {
  const {
    classes,
    indeterminate,
    color
  } = ownerState;
  const slots = {
    root: ["root", indeterminate && "indeterminate", `color${capitalize_default(color)}`]
  };
  const composedClasses = composeClasses(slots, getCheckboxUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
var CheckboxRoot = styled_default(SwitchBase_default, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiCheckbox",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.indeterminate && styles.indeterminate, ownerState.color !== "default" && styles[`color${capitalize_default(ownerState.color)}`]];
  }
})(({
  theme,
  ownerState
}) => _extends({
  color: (theme.vars || theme).palette.text.secondary
}, !ownerState.disableRipple && {
  "&:hover": {
    backgroundColor: theme.vars ? `rgba(${ownerState.color === "default" ? theme.vars.palette.action.activeChannel : theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(ownerState.color === "default" ? theme.palette.action.active : theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}, ownerState.color !== "default" && {
  [`&.${checkboxClasses_default.checked}, &.${checkboxClasses_default.indeterminate}`]: {
    color: (theme.vars || theme).palette[ownerState.color].main
  },
  [`&.${checkboxClasses_default.disabled}`]: {
    color: (theme.vars || theme).palette.action.disabled
  }
}));
var defaultCheckedIcon = /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(CheckBox_default, {});
var defaultIcon = /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(CheckBoxOutlineBlank_default, {});
var defaultIndeterminateIcon = /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(IndeterminateCheckBox_default, {});
var Checkbox = /* @__PURE__ */ React9.forwardRef(function Checkbox2(inProps, ref) {
  var _icon$props$fontSize, _indeterminateIcon$pr;
  const props = useThemeProps({
    props: inProps,
    name: "MuiCheckbox"
  });
  const {
    checkedIcon = defaultCheckedIcon,
    color = "primary",
    icon: iconProp = defaultIcon,
    indeterminate = false,
    indeterminateIcon: indeterminateIconProp = defaultIndeterminateIcon,
    inputProps,
    size = "medium"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded3);
  const icon = indeterminate ? indeterminateIconProp : iconProp;
  const indeterminateIcon = indeterminate ? indeterminateIconProp : checkedIcon;
  const ownerState = _extends({}, props, {
    color,
    indeterminate,
    size
  });
  const classes = useUtilityClasses3(ownerState);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(CheckboxRoot, _extends({
    type: "checkbox",
    inputProps: _extends({
      "data-indeterminate": indeterminate
    }, inputProps),
    icon: /* @__PURE__ */ React9.cloneElement(icon, {
      fontSize: (_icon$props$fontSize = icon.props.fontSize) != null ? _icon$props$fontSize : size
    }),
    checkedIcon: /* @__PURE__ */ React9.cloneElement(indeterminateIcon, {
      fontSize: (_indeterminateIcon$pr = indeterminateIcon.props.fontSize) != null ? _indeterminateIcon$pr : size
    }),
    ownerState,
    ref
  }, other, {
    classes
  }));
});
true ? Checkbox.propTypes = {
  checked: import_prop_types3.default.bool,
  checkedIcon: import_prop_types3.default.node,
  classes: import_prop_types3.default.object,
  color: import_prop_types3.default.oneOfType([import_prop_types3.default.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types3.default.string]),
  defaultChecked: import_prop_types3.default.bool,
  disabled: import_prop_types3.default.bool,
  disableRipple: import_prop_types3.default.bool,
  icon: import_prop_types3.default.node,
  id: import_prop_types3.default.string,
  indeterminate: import_prop_types3.default.bool,
  indeterminateIcon: import_prop_types3.default.node,
  inputProps: import_prop_types3.default.object,
  inputRef: refType_default,
  onChange: import_prop_types3.default.func,
  required: import_prop_types3.default.bool,
  size: import_prop_types3.default.oneOfType([import_prop_types3.default.oneOf(["medium", "small"]), import_prop_types3.default.string]),
  sx: import_prop_types3.default.oneOfType([import_prop_types3.default.arrayOf(import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object, import_prop_types3.default.bool])), import_prop_types3.default.func, import_prop_types3.default.object]),
  value: import_prop_types3.default.any
} : void 0;
var Checkbox_default = Checkbox;

// node_modules/@mui/material/esm/FormGroup/FormGroup.js
init_objectWithoutPropertiesLoose();
init_extends();
var React10 = __toESM(require_react());
var import_prop_types4 = __toESM(require_prop_types());
init_clsx_m();
init_base();
init_styled();
init_useThemeProps();

// node_modules/@mui/material/esm/FormGroup/formGroupClasses.js
init_base();
function getFormGroupUtilityClass(slot) {
  return generateUtilityClass("MuiFormGroup", slot);
}
var formGroupClasses = generateUtilityClasses("MuiFormGroup", ["root", "row", "error"]);

// node_modules/@mui/material/esm/FormControl/formControlState.js
function formControlState({
  props,
  states,
  muiFormControl
}) {
  return states.reduce((acc, state) => {
    acc[state] = props[state];
    if (muiFormControl) {
      if (typeof props[state] === "undefined") {
        acc[state] = muiFormControl[state];
      }
    }
    return acc;
  }, {});
}

// node_modules/@mui/material/esm/FormGroup/FormGroup.js
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
var _excluded4 = ["className", "row"];
var useUtilityClasses4 = (ownerState) => {
  const {
    classes,
    row,
    error
  } = ownerState;
  const slots = {
    root: ["root", row && "row", error && "error"]
  };
  return composeClasses(slots, getFormGroupUtilityClass, classes);
};
var FormGroupRoot = styled_default("div", {
  name: "MuiFormGroup",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.row && styles.row];
  }
})(({
  ownerState
}) => _extends({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap"
}, ownerState.row && {
  flexDirection: "row"
}));
var FormGroup = /* @__PURE__ */ React10.forwardRef(function FormGroup2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiFormGroup"
  });
  const {
    className,
    row = false
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded4);
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["error"]
  });
  const ownerState = _extends({}, props, {
    row,
    error: fcs.error
  });
  const classes = useUtilityClasses4(ownerState);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(FormGroupRoot, _extends({
    className: clsx_m_default(classes.root, className),
    ownerState,
    ref
  }, other));
});
true ? FormGroup.propTypes = {
  children: import_prop_types4.default.node,
  classes: import_prop_types4.default.object,
  className: import_prop_types4.default.string,
  row: import_prop_types4.default.bool,
  sx: import_prop_types4.default.oneOfType([import_prop_types4.default.arrayOf(import_prop_types4.default.oneOfType([import_prop_types4.default.func, import_prop_types4.default.object, import_prop_types4.default.bool])), import_prop_types4.default.func, import_prop_types4.default.object])
} : void 0;
var FormGroup_default = FormGroup;

// node_modules/@mui/material/esm/FormControl/FormControl.js
init_objectWithoutPropertiesLoose();
init_extends();
var React11 = __toESM(require_react());
var import_prop_types5 = __toESM(require_prop_types());
init_clsx_m();
init_base();
init_useThemeProps();
init_styled();

// node_modules/@mui/material/esm/InputBase/utils.js
function hasValue(value) {
  return value != null && !(Array.isArray(value) && value.length === 0);
}
function isFilled(obj, SSR = false) {
  return obj && (hasValue(obj.value) && obj.value !== "" || SSR && hasValue(obj.defaultValue) && obj.defaultValue !== "");
}
function isAdornedStart(obj) {
  return obj.startAdornment;
}

// node_modules/@mui/material/esm/FormControl/FormControl.js
init_capitalize();
init_isMuiElement();

// node_modules/@mui/material/esm/FormControl/formControlClasses.js
init_base();
function getFormControlUtilityClasses(slot) {
  return generateUtilityClass("MuiFormControl", slot);
}
var formControlClasses = generateUtilityClasses("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);

// node_modules/@mui/material/esm/FormControl/FormControl.js
var import_jsx_runtime11 = __toESM(require_jsx_runtime());
var _excluded5 = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"];
var useUtilityClasses5 = (ownerState) => {
  const {
    classes,
    margin,
    fullWidth
  } = ownerState;
  const slots = {
    root: ["root", margin !== "none" && `margin${capitalize_default(margin)}`, fullWidth && "fullWidth"]
  };
  return composeClasses(slots, getFormControlUtilityClasses, classes);
};
var FormControlRoot = styled_default("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState
  }, styles) => {
    return _extends({}, styles.root, styles[`margin${capitalize_default(ownerState.margin)}`], ownerState.fullWidth && styles.fullWidth);
  }
})(({
  ownerState
}) => _extends({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top"
}, ownerState.margin === "normal" && {
  marginTop: 16,
  marginBottom: 8
}, ownerState.margin === "dense" && {
  marginTop: 8,
  marginBottom: 4
}, ownerState.fullWidth && {
  width: "100%"
}));
var FormControl = /* @__PURE__ */ React11.forwardRef(function FormControl2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiFormControl"
  });
  const {
    children,
    className,
    color = "primary",
    component = "div",
    disabled = false,
    error = false,
    focused: visuallyFocused,
    fullWidth = false,
    hiddenLabel = false,
    margin = "none",
    required = false,
    size = "medium",
    variant = "outlined"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded5);
  const ownerState = _extends({}, props, {
    color,
    component,
    disabled,
    error,
    fullWidth,
    hiddenLabel,
    margin,
    required,
    size,
    variant
  });
  const classes = useUtilityClasses5(ownerState);
  const [adornedStart, setAdornedStart] = React11.useState(() => {
    let initialAdornedStart = false;
    if (children) {
      React11.Children.forEach(children, (child) => {
        if (!isMuiElement_default(child, ["Input", "Select"])) {
          return;
        }
        const input = isMuiElement_default(child, ["Select"]) ? child.props.input : child;
        if (input && isAdornedStart(input.props)) {
          initialAdornedStart = true;
        }
      });
    }
    return initialAdornedStart;
  });
  const [filled, setFilled] = React11.useState(() => {
    let initialFilled = false;
    if (children) {
      React11.Children.forEach(children, (child) => {
        if (!isMuiElement_default(child, ["Input", "Select"])) {
          return;
        }
        if (isFilled(child.props, true)) {
          initialFilled = true;
        }
      });
    }
    return initialFilled;
  });
  const [focusedState, setFocused] = React11.useState(false);
  if (disabled && focusedState) {
    setFocused(false);
  }
  const focused = visuallyFocused !== void 0 && !disabled ? visuallyFocused : focusedState;
  let registerEffect;
  if (true) {
    const registeredInput = React11.useRef(false);
    registerEffect = () => {
      if (registeredInput.current) {
        console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join("\n"));
      }
      registeredInput.current = true;
      return () => {
        registeredInput.current = false;
      };
    };
  }
  const onFilled = React11.useCallback(() => {
    setFilled(true);
  }, []);
  const onEmpty = React11.useCallback(() => {
    setFilled(false);
  }, []);
  const childContext = {
    adornedStart,
    setAdornedStart,
    color,
    disabled,
    error,
    filled,
    focused,
    fullWidth,
    hiddenLabel,
    size,
    onBlur: () => {
      setFocused(false);
    },
    onEmpty,
    onFilled,
    onFocus: () => {
      setFocused(true);
    },
    registerEffect,
    required,
    variant
  };
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(FormControlContext_default.Provider, {
    value: childContext,
    children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(FormControlRoot, _extends({
      as: component,
      ownerState,
      className: clsx_m_default(classes.root, className),
      ref
    }, other, {
      children
    }))
  });
});
true ? FormControl.propTypes = {
  children: import_prop_types5.default.node,
  classes: import_prop_types5.default.object,
  className: import_prop_types5.default.string,
  color: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), import_prop_types5.default.string]),
  component: import_prop_types5.default.elementType,
  disabled: import_prop_types5.default.bool,
  error: import_prop_types5.default.bool,
  focused: import_prop_types5.default.bool,
  fullWidth: import_prop_types5.default.bool,
  hiddenLabel: import_prop_types5.default.bool,
  margin: import_prop_types5.default.oneOf(["dense", "none", "normal"]),
  required: import_prop_types5.default.bool,
  size: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["medium", "small"]), import_prop_types5.default.string]),
  sx: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object, import_prop_types5.default.bool])), import_prop_types5.default.func, import_prop_types5.default.object]),
  variant: import_prop_types5.default.oneOf(["filled", "outlined", "standard"])
} : void 0;
var FormControl_default = FormControl;

// node_modules/@mui/material/esm/FormControlLabel/FormControlLabel.js
init_objectWithoutPropertiesLoose();
init_extends();
var React13 = __toESM(require_react());
var import_prop_types7 = __toESM(require_prop_types());
init_clsx_m();
init_esm();
init_base();

// node_modules/@mui/material/esm/Typography/Typography.js
init_objectWithoutPropertiesLoose();
init_extends();
var React12 = __toESM(require_react());
var import_prop_types6 = __toESM(require_prop_types());
init_clsx_m();
init_esm2();
init_base();
init_styled();
init_useThemeProps();
init_capitalize();

// node_modules/@mui/material/esm/Typography/typographyClasses.js
init_base();
function getTypographyUtilityClass(slot) {
  return generateUtilityClass("MuiTypography", slot);
}
var typographyClasses = generateUtilityClasses("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);

// node_modules/@mui/material/esm/Typography/Typography.js
var import_jsx_runtime12 = __toESM(require_jsx_runtime());
var _excluded6 = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"];
var useUtilityClasses6 = (ownerState) => {
  const {
    align,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ["root", variant, ownerState.align !== "inherit" && `align${capitalize_default(align)}`, gutterBottom && "gutterBottom", noWrap && "noWrap", paragraph && "paragraph"]
  };
  return composeClasses(slots, getTypographyUtilityClass, classes);
};
var TypographyRoot = styled_default("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.variant && styles[ownerState.variant], ownerState.align !== "inherit" && styles[`align${capitalize_default(ownerState.align)}`], ownerState.noWrap && styles.noWrap, ownerState.gutterBottom && styles.gutterBottom, ownerState.paragraph && styles.paragraph];
  }
})(({
  theme,
  ownerState
}) => _extends({
  margin: 0
}, ownerState.variant && theme.typography[ownerState.variant], ownerState.align !== "inherit" && {
  textAlign: ownerState.align
}, ownerState.noWrap && {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}, ownerState.gutterBottom && {
  marginBottom: "0.35em"
}, ownerState.paragraph && {
  marginBottom: 16
}));
var defaultVariantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
};
var colorTransformations = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
};
var transformDeprecatedColors = (color) => {
  return colorTransformations[color] || color;
};
var Typography = /* @__PURE__ */ React12.forwardRef(function Typography2(inProps, ref) {
  const themeProps = useThemeProps({
    props: inProps,
    name: "MuiTypography"
  });
  const color = transformDeprecatedColors(themeProps.color);
  const props = extendSxProp(_extends({}, themeProps, {
    color
  }));
  const {
    align = "inherit",
    className,
    component,
    gutterBottom = false,
    noWrap = false,
    paragraph = false,
    variant = "body1",
    variantMapping = defaultVariantMapping
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded6);
  const ownerState = _extends({}, props, {
    align,
    color,
    className,
    component,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    variantMapping
  });
  const Component = component || (paragraph ? "p" : variantMapping[variant] || defaultVariantMapping[variant]) || "span";
  const classes = useUtilityClasses6(ownerState);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(TypographyRoot, _extends({
    as: Component,
    ref,
    ownerState,
    className: clsx_m_default(classes.root, className)
  }, other));
});
true ? Typography.propTypes = {
  align: import_prop_types6.default.oneOf(["center", "inherit", "justify", "left", "right"]),
  children: import_prop_types6.default.node,
  classes: import_prop_types6.default.object,
  className: import_prop_types6.default.string,
  component: import_prop_types6.default.elementType,
  gutterBottom: import_prop_types6.default.bool,
  noWrap: import_prop_types6.default.bool,
  paragraph: import_prop_types6.default.bool,
  sx: import_prop_types6.default.oneOfType([import_prop_types6.default.arrayOf(import_prop_types6.default.oneOfType([import_prop_types6.default.func, import_prop_types6.default.object, import_prop_types6.default.bool])), import_prop_types6.default.func, import_prop_types6.default.object]),
  variant: import_prop_types6.default.oneOfType([import_prop_types6.default.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), import_prop_types6.default.string]),
  variantMapping: import_prop_types6.default.object
} : void 0;
var Typography_default = Typography;

// node_modules/@mui/material/esm/FormControlLabel/FormControlLabel.js
init_capitalize();
init_styled();
init_useThemeProps();

// node_modules/@mui/material/esm/FormControlLabel/formControlLabelClasses.js
init_base();
function getFormControlLabelUtilityClasses(slot) {
  return generateUtilityClass("MuiFormControlLabel", slot);
}
var formControlLabelClasses = generateUtilityClasses("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error"]);
var formControlLabelClasses_default = formControlLabelClasses;

// node_modules/@mui/material/esm/FormControlLabel/FormControlLabel.js
var import_jsx_runtime13 = __toESM(require_jsx_runtime());
var import_jsx_runtime14 = __toESM(require_jsx_runtime());
var _excluded7 = ["checked", "className", "componentsProps", "control", "disabled", "disableTypography", "inputRef", "label", "labelPlacement", "name", "onChange", "value"];
var useUtilityClasses7 = (ownerState) => {
  const {
    classes,
    disabled,
    labelPlacement,
    error
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", `labelPlacement${capitalize_default(labelPlacement)}`, error && "error"],
    label: ["label", disabled && "disabled"]
  };
  return composeClasses(slots, getFormControlLabelUtilityClasses, classes);
};
var FormControlLabelRoot = styled_default("label", {
  name: "MuiFormControlLabel",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${formControlLabelClasses_default.label}`]: styles.label
    }, styles.root, styles[`labelPlacement${capitalize_default(ownerState.labelPlacement)}`]];
  }
})(({
  theme,
  ownerState
}) => _extends({
  display: "inline-flex",
  alignItems: "center",
  cursor: "pointer",
  verticalAlign: "middle",
  WebkitTapHighlightColor: "transparent",
  marginLeft: -11,
  marginRight: 16,
  [`&.${formControlLabelClasses_default.disabled}`]: {
    cursor: "default"
  }
}, ownerState.labelPlacement === "start" && {
  flexDirection: "row-reverse",
  marginLeft: 16,
  marginRight: -11
}, ownerState.labelPlacement === "top" && {
  flexDirection: "column-reverse",
  marginLeft: 16
}, ownerState.labelPlacement === "bottom" && {
  flexDirection: "column",
  marginLeft: 16
}, {
  [`& .${formControlLabelClasses_default.label}`]: {
    [`&.${formControlLabelClasses_default.disabled}`]: {
      color: (theme.vars || theme).palette.text.disabled
    }
  }
}));
var FormControlLabel = /* @__PURE__ */ React13.forwardRef(function FormControlLabel2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiFormControlLabel"
  });
  const {
    className,
    componentsProps = {},
    control,
    disabled: disabledProp,
    disableTypography,
    label: labelProp,
    labelPlacement = "end"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded7);
  const muiFormControl = useFormControl();
  let disabled = disabledProp;
  if (typeof disabled === "undefined" && typeof control.props.disabled !== "undefined") {
    disabled = control.props.disabled;
  }
  if (typeof disabled === "undefined" && muiFormControl) {
    disabled = muiFormControl.disabled;
  }
  const controlProps = {
    disabled
  };
  ["checked", "name", "onChange", "value", "inputRef"].forEach((key) => {
    if (typeof control.props[key] === "undefined" && typeof props[key] !== "undefined") {
      controlProps[key] = props[key];
    }
  });
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["error"]
  });
  const ownerState = _extends({}, props, {
    disabled,
    labelPlacement,
    error: fcs.error
  });
  const classes = useUtilityClasses7(ownerState);
  let label = labelProp;
  if (label != null && label.type !== Typography_default && !disableTypography) {
    label = /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Typography_default, _extends({
      component: "span",
      className: classes.label
    }, componentsProps.typography, {
      children: label
    }));
  }
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(FormControlLabelRoot, _extends({
    className: clsx_m_default(classes.root, className),
    ownerState,
    ref
  }, other, {
    children: [/* @__PURE__ */ React13.cloneElement(control, controlProps), label]
  }));
});
true ? FormControlLabel.propTypes = {
  checked: import_prop_types7.default.bool,
  classes: import_prop_types7.default.object,
  className: import_prop_types7.default.string,
  componentsProps: import_prop_types7.default.shape({
    typography: import_prop_types7.default.object
  }),
  control: import_prop_types7.default.element.isRequired,
  disabled: import_prop_types7.default.bool,
  disableTypography: import_prop_types7.default.bool,
  inputRef: refType_default,
  label: import_prop_types7.default.node,
  labelPlacement: import_prop_types7.default.oneOf(["bottom", "end", "start", "top"]),
  name: import_prop_types7.default.string,
  onChange: import_prop_types7.default.func,
  sx: import_prop_types7.default.oneOfType([import_prop_types7.default.arrayOf(import_prop_types7.default.oneOfType([import_prop_types7.default.func, import_prop_types7.default.object, import_prop_types7.default.bool])), import_prop_types7.default.func, import_prop_types7.default.object]),
  value: import_prop_types7.default.any
} : void 0;
var FormControlLabel_default = FormControlLabel;

// node_modules/@mui/material/esm/FormLabel/FormLabel.js
init_objectWithoutPropertiesLoose();
init_extends();
var React14 = __toESM(require_react());
var import_prop_types8 = __toESM(require_prop_types());
init_clsx_m();
init_base();
init_capitalize();
init_useThemeProps();
init_styled();

// node_modules/@mui/material/esm/FormLabel/formLabelClasses.js
init_base();
function getFormLabelUtilityClasses(slot) {
  return generateUtilityClass("MuiFormLabel", slot);
}
var formLabelClasses = generateUtilityClasses("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]);
var formLabelClasses_default = formLabelClasses;

// node_modules/@mui/material/esm/FormLabel/FormLabel.js
var import_jsx_runtime15 = __toESM(require_jsx_runtime());
var _excluded8 = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"];
var useUtilityClasses8 = (ownerState) => {
  const {
    classes,
    color,
    focused,
    disabled,
    error,
    filled,
    required
  } = ownerState;
  const slots = {
    root: ["root", `color${capitalize_default(color)}`, disabled && "disabled", error && "error", filled && "filled", focused && "focused", required && "required"],
    asterisk: ["asterisk", error && "error"]
  };
  return composeClasses(slots, getFormLabelUtilityClasses, classes);
};
var FormLabelRoot = styled_default("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: ({
    ownerState
  }, styles) => {
    return _extends({}, styles.root, ownerState.color === "secondary" && styles.colorSecondary, ownerState.filled && styles.filled);
  }
})(({
  theme,
  ownerState
}) => _extends({
  color: (theme.vars || theme).palette.text.secondary
}, theme.typography.body1, {
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  [`&.${formLabelClasses_default.focused}`]: {
    color: (theme.vars || theme).palette[ownerState.color].main
  },
  [`&.${formLabelClasses_default.disabled}`]: {
    color: (theme.vars || theme).palette.text.disabled
  },
  [`&.${formLabelClasses_default.error}`]: {
    color: (theme.vars || theme).palette.error.main
  }
}));
var AsteriskComponent = styled_default("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (props, styles) => styles.asterisk
})(({
  theme
}) => ({
  [`&.${formLabelClasses_default.error}`]: {
    color: (theme.vars || theme).palette.error.main
  }
}));
var FormLabel = /* @__PURE__ */ React14.forwardRef(function FormLabel2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiFormLabel"
  });
  const {
    children,
    className,
    component = "label"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded8);
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  });
  const ownerState = _extends({}, props, {
    color: fcs.color || "primary",
    component,
    disabled: fcs.disabled,
    error: fcs.error,
    filled: fcs.filled,
    focused: fcs.focused,
    required: fcs.required
  });
  const classes = useUtilityClasses8(ownerState);
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(FormLabelRoot, _extends({
    as: component,
    ownerState,
    className: clsx_m_default(classes.root, className),
    ref
  }, other, {
    children: [children, fcs.required && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(AsteriskComponent, {
      ownerState,
      "aria-hidden": true,
      className: classes.asterisk,
      children: ["\u2009", "*"]
    })]
  }));
});
true ? FormLabel.propTypes = {
  children: import_prop_types8.default.node,
  classes: import_prop_types8.default.object,
  className: import_prop_types8.default.string,
  color: import_prop_types8.default.oneOfType([import_prop_types8.default.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), import_prop_types8.default.string]),
  component: import_prop_types8.default.elementType,
  disabled: import_prop_types8.default.bool,
  error: import_prop_types8.default.bool,
  filled: import_prop_types8.default.bool,
  focused: import_prop_types8.default.bool,
  required: import_prop_types8.default.bool,
  sx: import_prop_types8.default.oneOfType([import_prop_types8.default.arrayOf(import_prop_types8.default.oneOfType([import_prop_types8.default.func, import_prop_types8.default.object, import_prop_types8.default.bool])), import_prop_types8.default.func, import_prop_types8.default.object])
} : void 0;
var FormLabel_default = FormLabel;

export {
  require_interopRequireDefault,
  createSvgIcon,
  init_createSvgIcon,
  debounce_default,
  init_debounce,
  ownerDocument_default,
  init_ownerDocument,
  ownerWindow_default,
  init_ownerWindow,
  useEnhancedEffect_default2 as useEnhancedEffect_default,
  init_useEnhancedEffect,
  useId_default,
  init_useId,
  useControlled_default,
  init_useControlled,
  require_createSvgIcon,
  require_Clear,
  FormControlContext_default,
  useFormControl,
  Checkbox_default,
  formControlState,
  FormGroup_default,
  isFilled,
  FormControl_default,
  FormControlLabel_default,
  formLabelClasses_default,
  FormLabel_default
};
//# sourceMappingURL=/build/_shared/chunk-4VQTWC6X.js.map
