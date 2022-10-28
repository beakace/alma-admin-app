import {
  require_createSvgIcon,
  require_interopRequireDefault
} from "/build/_shared/chunk-EIXEFVSP.js";
import {
  Autocomplete_default,
  Badge_default,
  Box_default,
  Checkbox_default,
  Chip_default,
  CircularProgress_default,
  FormControlLabel_default,
  FormGroup_default,
  IconButton_default,
  MenuItem_default,
  Popper_default,
  Skeleton_default,
  Switch_default,
  TablePagination_default,
  Tooltip_default,
  switchClasses_default,
  tablePaginationClasses_default
} from "/build/_shared/chunk-GDR37KBX.js";
import {
  FormControl_default,
  FormLabel_default,
  Grow_default,
  InputBase_default,
  InputLabel_default,
  MenuList_default,
  Paper_default,
  Select_default,
  TextField_default,
  createSvgIcon,
  debounce_default,
  init_utils,
  ownerDocument_default,
  ownerWindow_default,
  useEnhancedEffect_default,
  useId_default
} from "/build/_shared/chunk-KUHAS2WN.js";
import {
  Button_default,
  ClickAwayListener_default,
  HTMLElementType,
  ThemeProvider_default,
  TrapFocus_default,
  _objectWithoutPropertiesLoose,
  alpha,
  capitalize_default,
  chainPropTypes,
  clsx_m_default,
  composeClasses,
  createFilterOptions,
  createTheme_default,
  darken,
  generateUtilityClass,
  generateUtilityClasses,
  init_TrapFocus,
  init_clsx_m,
  init_esm,
  init_objectWithoutPropertiesLoose,
  lighten,
  require_jsx_runtime,
  require_prop_types,
  styled_default,
  useEventCallback_default,
  useForkRef_default,
  useId,
  useThemeProps
} from "/build/_shared/chunk-VVSH55U6.js";
import {
  require_react_dom
} from "/build/_shared/chunk-ZUMYG4AI.js";
import {
  Link,
  _extends,
  init_extends,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-I5L5TQ25.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

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

// node_modules/@mui/icons-material/Add.js
var require_Add = __commonJS({
  "node_modules/@mui/icons-material/Add.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _jsxRuntime = require_jsx_runtime();
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
      d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
    }), "Add");
    exports.default = _default;
  }
});

// app/routes/index.tsx
var import_Clear = __toESM(require_Clear());
var import_Add = __toESM(require_Add());

// node_modules/@mui/x-data-grid/hooks/utils/useGridApiContext.js
var React2 = __toESM(require_react());

// node_modules/@mui/x-data-grid/components/GridApiContext.js
var React = __toESM(require_react());
var GridApiContext = /* @__PURE__ */ React.createContext(void 0);
if (true) {
  GridApiContext.displayName = "GridApiContext";
}

// node_modules/@mui/x-data-grid/hooks/utils/useGridApiContext.js
function useGridApiContext() {
  const apiRef = React2.useContext(GridApiContext);
  if (apiRef === void 0) {
    throw new Error(["MUI: Could not find the data grid context.", "It looks like you rendered your component outside of a DataGrid, DataGridPro or DataGridPremium parent component.", "This can also happen if you are bundling multiple versions of the data grid."].join("\n"));
  }
  return apiRef;
}

// node_modules/@mui/x-data-grid/hooks/utils/useGridRootProps.js
var React4 = __toESM(require_react());

// node_modules/@mui/x-data-grid/context/GridRootPropsContext.js
var React3 = __toESM(require_react());
var GridRootPropsContext = /* @__PURE__ */ React3.createContext(void 0);
if (true) {
  GridRootPropsContext.displayName = "GridRootPropsContext";
}

// node_modules/@mui/x-data-grid/hooks/utils/useGridRootProps.js
var useGridRootProps = () => {
  const contextValue = React4.useContext(GridRootPropsContext);
  if (!contextValue) {
    throw new Error("MUI: useGridRootProps should only be used inside the DataGrid, DataGridPro or DataGridPremium component.");
  }
  return contextValue;
};

// node_modules/@mui/x-data-grid/DataGrid/DataGrid.js
var React132 = __toESM(require_react());
var import_prop_types50 = __toESM(require_prop_types());
init_esm();

// node_modules/@mui/x-data-grid/components/base/GridBody.js
var React8 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());

// node_modules/@mui/x-data-grid/components/containers/GridMainContainer.js
var React5 = __toESM(require_react());

// node_modules/@mui/x-data-grid/constants/gridClasses.js
function getDataGridUtilityClass(slot) {
  return generateUtilityClass("MuiDataGrid", slot);
}
var gridClasses = generateUtilityClasses("MuiDataGrid", ["actionsCell", "aggregationColumnHeader", "aggregationColumnHeader--alignLeft", "aggregationColumnHeader--alignCenter", "aggregationColumnHeader--alignRight", "autoHeight", "booleanCell", "cell--editable", "cell--editing", "cell--textCenter", "cell--textLeft", "cell--textRight", "cell--withRenderer", "cell", "cellContent", "cellCheckbox", "cellSkeleton", "checkboxInput", "columnHeader--alignCenter", "columnHeader--alignLeft", "columnHeader--alignRight", "columnHeader--dragging", "columnHeader--moving", "columnHeader--numeric", "columnHeader--sortable", "columnHeader--sorted", "columnHeader--filtered", "columnHeader", "columnHeaderCheckbox", "columnHeaderDraggableContainer", "columnHeaderDropZone", "columnHeaderTitle", "columnHeaderTitleContainer", "columnHeaderTitleContainerContent", "columnGroupHeader", "columnHeader--filledGroup", "columnHeader--emptyGroup", "columnHeader--showColumnBorder", "columnHeaders", "columnHeadersInner", "columnHeadersInner--scrollable", "columnSeparator--resizable", "columnSeparator--resizing", "columnSeparator--sideLeft", "columnSeparator--sideRight", "columnSeparator", "columnsPanel", "columnsPanelRow", "detailPanel", "detailPanels", "detailPanelToggleCell", "detailPanelToggleCell--expanded", "footerCell", "panel", "panelHeader", "panelWrapper", "panelContent", "panelFooter", "paper", "editBooleanCell", "editInputCell", "filterForm", "filterFormDeleteIcon", "filterFormLinkOperatorInput", "filterFormColumnInput", "filterFormOperatorInput", "filterFormValueInput", "filterIcon", "footerContainer", "iconButtonContainer", "iconSeparator", "main", "menu", "menuIcon", "menuIconButton", "menuOpen", "menuList", "overlay", "root", "root--densityStandard", "root--densityComfortable", "root--densityCompact", "row", "row--editable", "row--editing", "row--lastVisible", "row--dragging", "row--dynamicHeight", "row--detailPanelExpanded", "rowReorderCellPlaceholder", "rowCount", "rowReorderCellContainer", "rowReorderCell", "rowReorderCell--draggable", "scrollArea--left", "scrollArea--right", "scrollArea", "selectedRowCount", "sortIcon", "toolbarContainer", "toolbarFilterList", "virtualScroller", "virtualScrollerContent", "virtualScrollerContent--overflowed", "virtualScrollerRenderZone", "pinnedColumns", "pinnedColumns--left", "pinnedColumns--right", "pinnedColumnHeaders", "pinnedColumnHeaders--left", "pinnedColumnHeaders--right", "withBorder", "treeDataGroupingCell", "treeDataGroupingCellToggle", "groupingCriteriaCell", "groupingCriteriaCellToggle", "pinnedRows", "pinnedRows--top", "pinnedRows--bottom", "pinnedRowsRenderZone"]);

// node_modules/@mui/x-data-grid/components/containers/GridMainContainer.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var useUtilityClasses = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["main"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
var GridMainContainerRoot = styled_default("div", {
  name: "MuiDataGrid",
  slot: "Main",
  overridesResolver: (props, styles) => styles.main
})(() => ({
  position: "relative",
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden"
}));
function GridMainContainer(props) {
  const rootProps = useGridRootProps();
  const ownerState = {
    classes: rootProps.classes
  };
  const classes = useUtilityClasses(ownerState);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GridMainContainerRoot, {
    className: classes.root,
    children: props.children
  });
}

// node_modules/@mui/x-data-grid/components/GridAutoSizer.js
init_extends();
init_objectWithoutPropertiesLoose();
var React6 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
init_utils();

// node_modules/@mui/x-data-grid/lib/createDetectElementResize/index.js
function createDetectElementResize(nonce, hostWindow) {
  var resetTriggers = function resetTriggers2(element) {
    var triggers = element.__resizeTriggers__, expand = triggers.firstElementChild, contract = triggers.lastElementChild, expandChild = expand.firstElementChild;
    contract.scrollLeft = contract.scrollWidth;
    contract.scrollTop = contract.scrollHeight;
    expandChild.style.width = expand.offsetWidth + 1 + "px";
    expandChild.style.height = expand.offsetHeight + 1 + "px";
    expand.scrollLeft = expand.scrollWidth;
    expand.scrollTop = expand.scrollHeight;
  };
  var checkTriggers = function checkTriggers2(element) {
    return element.offsetWidth != element.__resizeLast__.width || element.offsetHeight != element.__resizeLast__.height;
  };
  var scrollListener = function scrollListener2(e) {
    if (e.target.className.indexOf("contract-trigger") < 0 && e.target.className.indexOf("expand-trigger") < 0) {
      return;
    }
    var element = this;
    resetTriggers(this);
    if (this.__resizeRAF__) {
      hostWindow.cancelAnimationFrame(this.__resizeRAF__);
    }
    this.__resizeRAF__ = hostWindow.requestAnimationFrame(function() {
      if (checkTriggers(element)) {
        element.__resizeLast__.width = element.offsetWidth;
        element.__resizeLast__.height = element.offsetHeight;
        element.__resizeListeners__.forEach(function(fn) {
          fn.call(element, e);
        });
      }
    });
  };
  var animation = false, keyframeprefix = "", animationstartevent = "animationstart", domPrefixes = "Webkit Moz O ms".split(" "), startEvents = "webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "), pfx = "";
  {
    var elm = document.createElement("fakeelement");
    if (elm.style.animationName !== void 0) {
      animation = true;
    }
    if (animation === false) {
      for (var i = 0; i < domPrefixes.length; i++) {
        if (elm.style[domPrefixes[i] + "AnimationName"] !== void 0) {
          pfx = domPrefixes[i];
          keyframeprefix = "-" + pfx.toLowerCase() + "-";
          animationstartevent = startEvents[i];
          animation = true;
          break;
        }
      }
    }
  }
  var animationName = "resizeanim";
  var animationKeyframes = "@" + keyframeprefix + "keyframes " + animationName + " { from { opacity: 0; } to { opacity: 0; } } ";
  var animationStyle = keyframeprefix + "animation: 1ms " + animationName + "; ";
  var createStyles = function createStyles2(doc) {
    if (!doc.getElementById("muiDetectElementResize")) {
      var css = (animationKeyframes ? animationKeyframes : "") + ".Mui-resizeTriggers { " + (animationStyle ? animationStyle : "") + 'visibility: hidden; opacity: 0; } .Mui-resizeTriggers, .Mui-resizeTriggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .Mui-resizeTriggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }', head = doc.head || doc.getElementsByTagName("head")[0], style = doc.createElement("style");
      style.id = "muiDetectElementResize";
      style.type = "text/css";
      if (nonce != null) {
        style.setAttribute("nonce", nonce);
      }
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(doc.createTextNode(css));
      }
      head.appendChild(style);
    }
  };
  var addResizeListener = function addResizeListener2(element, fn) {
    if (!element.__resizeTriggers__) {
      var doc = element.ownerDocument;
      var elementStyle = hostWindow.getComputedStyle(element);
      if (elementStyle && elementStyle.position == "static") {
        element.style.position = "relative";
      }
      createStyles(doc);
      element.__resizeLast__ = {};
      element.__resizeListeners__ = [];
      (element.__resizeTriggers__ = doc.createElement("div")).className = "Mui-resizeTriggers";
      element.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>';
      element.appendChild(element.__resizeTriggers__);
      resetTriggers(element);
      element.addEventListener("scroll", scrollListener, true);
      if (animationstartevent) {
        element.__resizeTriggers__.__animationListener__ = function animationListener(e) {
          if (e.animationName == animationName) {
            resetTriggers(element);
          }
        };
        element.__resizeTriggers__.addEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__);
      }
    }
    element.__resizeListeners__.push(fn);
  };
  var removeResizeListener = function removeResizeListener2(element, fn) {
    element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
    if (!element.__resizeListeners__.length) {
      element.removeEventListener("scroll", scrollListener, true);
      if (element.__resizeTriggers__.__animationListener__) {
        element.__resizeTriggers__.removeEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__);
        element.__resizeTriggers__.__animationListener__ = null;
      }
      try {
        element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__);
      } catch (e) {
      }
    }
  };
  return {
    addResizeListener,
    removeResizeListener
  };
}

// node_modules/@mui/x-data-grid/components/GridAutoSizer.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var _excluded = ["children", "defaultHeight", "defaultWidth", "disableHeight", "disableWidth", "nonce", "onResize", "style"];
var GridAutoSizer = /* @__PURE__ */ React6.forwardRef(function AutoSizer(props, ref) {
  const {
    children,
    defaultHeight = null,
    defaultWidth = null,
    disableHeight = false,
    disableWidth = false,
    nonce,
    onResize,
    style
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const [state, setState] = React6.useState({
    height: defaultHeight,
    width: defaultWidth
  });
  const rootRef = React6.useRef(null);
  const parentElement = React6.useRef(null);
  const handleResize = useEventCallback_default(() => {
    if (parentElement.current) {
      const height = parentElement.current.offsetHeight || 0;
      const width = parentElement.current.offsetWidth || 0;
      const win = ownerWindow_default(parentElement.current);
      const computedStyle = win.getComputedStyle(parentElement.current);
      const paddingLeft = parseInt(computedStyle.paddingLeft, 10) || 0;
      const paddingRight = parseInt(computedStyle.paddingRight, 10) || 0;
      const paddingTop = parseInt(computedStyle.paddingTop, 10) || 0;
      const paddingBottom = parseInt(computedStyle.paddingBottom, 10) || 0;
      const newHeight = height - paddingTop - paddingBottom;
      const newWidth = width - paddingLeft - paddingRight;
      if (!disableHeight && state.height !== newHeight || !disableWidth && state.width !== newWidth) {
        setState({
          height: newHeight,
          width: newWidth
        });
        if (onResize) {
          onResize({
            height: newHeight,
            width: newWidth
          });
        }
      }
    }
  });
  useEnhancedEffect_default(() => {
    var _parentElement$curren;
    parentElement.current = rootRef.current.parentElement;
    if (!parentElement) {
      return void 0;
    }
    const win = ownerWindow_default((_parentElement$curren = parentElement.current) != null ? _parentElement$curren : void 0);
    const detectElementResize = createDetectElementResize(nonce, win);
    detectElementResize.addResizeListener(parentElement.current, handleResize);
    handleResize();
    return () => {
      detectElementResize.removeResizeListener(parentElement.current, handleResize);
    };
  }, [nonce, handleResize]);
  const outerStyle = {
    overflow: "visible"
  };
  const childParams = {};
  if (!disableHeight) {
    outerStyle.height = 0;
    childParams.height = state.height;
  }
  if (!disableWidth) {
    outerStyle.width = 0;
    childParams.width = state.width;
  }
  const handleRef = useForkRef_default(rootRef, ref);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", _extends({
    ref: handleRef,
    style: _extends({}, outerStyle, style)
  }, other, {
    children: state.height === null && state.width === null ? null : children(childParams)
  }));
});
true ? GridAutoSizer.propTypes = {
  children: import_prop_types.default.func.isRequired,
  defaultHeight: import_prop_types.default.number,
  defaultWidth: import_prop_types.default.number,
  disableHeight: import_prop_types.default.bool,
  disableWidth: import_prop_types.default.bool,
  nonce: import_prop_types.default.string,
  onResize: import_prop_types.default.func
} : void 0;

// node_modules/@mui/x-data-grid/components/base/GridOverlays.js
init_extends();
var React7 = __toESM(require_react());
init_utils();

// node_modules/@mui/x-data-grid/utils/warning.js
var buildWarning = (message, gravity = "warning") => {
  let alreadyWarned = false;
  const cleanMessage = Array.isArray(message) ? message.join("\n") : message;
  return () => {
    if (!alreadyWarned) {
      alreadyWarned = true;
      if (gravity === "error") {
        console.error(cleanMessage);
      } else {
        console.warn(cleanMessage);
      }
    }
  };
};
var wrapWithWarningOnCall = (method, message) => {
  if (false) {
    return method;
  }
  const warning = buildWarning(message);
  return (...args) => {
    warning();
    return method(...args);
  };
};

// node_modules/@mui/x-data-grid/hooks/utils/useGridSelector.js
function isOutputSelector(selector) {
  return selector.acceptsApiRef;
}
var stateNotInitializedWarning = buildWarning(["MUI: `useGridSelector` has been called before the initialization of the state.", "This hook can only be used inside the context of the grid."]);
var useGridSelector = (apiRef, selector) => {
  if (true) {
    if (!apiRef.current.state) {
      stateNotInitializedWarning();
    }
  }
  if (isOutputSelector(selector)) {
    return selector(apiRef);
  }
  return selector(apiRef.current.state);
};

// node_modules/reselect/es/defaultMemoize.js
var NOT_FOUND = "NOT_FOUND";
function createSingletonCache(equals) {
  var entry;
  return {
    get: function get(key) {
      if (entry && equals(entry.key, key)) {
        return entry.value;
      }
      return NOT_FOUND;
    },
    put: function put(key, value) {
      entry = {
        key,
        value
      };
    },
    getEntries: function getEntries() {
      return entry ? [entry] : [];
    },
    clear: function clear() {
      entry = void 0;
    }
  };
}
function createLruCache(maxSize, equals) {
  var entries = [];
  function get(key) {
    var cacheIndex = entries.findIndex(function(entry2) {
      return equals(key, entry2.key);
    });
    if (cacheIndex > -1) {
      var entry = entries[cacheIndex];
      if (cacheIndex > 0) {
        entries.splice(cacheIndex, 1);
        entries.unshift(entry);
      }
      return entry.value;
    }
    return NOT_FOUND;
  }
  function put(key, value) {
    if (get(key) === NOT_FOUND) {
      entries.unshift({
        key,
        value
      });
      if (entries.length > maxSize) {
        entries.pop();
      }
    }
  }
  function getEntries() {
    return entries;
  }
  function clear() {
    entries = [];
  }
  return {
    get,
    put,
    getEntries,
    clear
  };
}
var defaultEqualityCheck = function defaultEqualityCheck2(a, b) {
  return a === b;
};
function createCacheKeyComparator(equalityCheck) {
  return function areArgumentsShallowlyEqual(prev, next) {
    if (prev === null || next === null || prev.length !== next.length) {
      return false;
    }
    var length = prev.length;
    for (var i = 0; i < length; i++) {
      if (!equalityCheck(prev[i], next[i])) {
        return false;
      }
    }
    return true;
  };
}
function defaultMemoize(func, equalityCheckOrOptions) {
  var providedOptions = typeof equalityCheckOrOptions === "object" ? equalityCheckOrOptions : {
    equalityCheck: equalityCheckOrOptions
  };
  var _providedOptions$equa = providedOptions.equalityCheck, equalityCheck = _providedOptions$equa === void 0 ? defaultEqualityCheck : _providedOptions$equa, _providedOptions$maxS = providedOptions.maxSize, maxSize = _providedOptions$maxS === void 0 ? 1 : _providedOptions$maxS, resultEqualityCheck = providedOptions.resultEqualityCheck;
  var comparator = createCacheKeyComparator(equalityCheck);
  var cache = maxSize === 1 ? createSingletonCache(comparator) : createLruCache(maxSize, comparator);
  function memoized() {
    var value = cache.get(arguments);
    if (value === NOT_FOUND) {
      value = func.apply(null, arguments);
      if (resultEqualityCheck) {
        var entries = cache.getEntries();
        var matchingEntry = entries.find(function(entry) {
          return resultEqualityCheck(entry.value, value);
        });
        if (matchingEntry) {
          value = matchingEntry.value;
        }
      }
      cache.put(arguments, value);
    }
    return value;
  }
  memoized.clearCache = function() {
    return cache.clear();
  };
  return memoized;
}

// node_modules/reselect/es/index.js
function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;
  if (!dependencies.every(function(dep) {
    return typeof dep === "function";
  })) {
    var dependencyTypes = dependencies.map(function(dep) {
      return typeof dep === "function" ? "function " + (dep.name || "unnamed") + "()" : typeof dep;
    }).join(", ");
    throw new Error("createSelector expects all input-selectors to be functions, but received the following types: [" + dependencyTypes + "]");
  }
  return dependencies;
}
function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptionsFromArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptionsFromArgs[_key - 1] = arguments[_key];
  }
  var createSelector3 = function createSelector4() {
    for (var _len2 = arguments.length, funcs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }
    var _recomputations = 0;
    var _lastResult;
    var directlyPassedOptions = {
      memoizeOptions: void 0
    };
    var resultFunc = funcs.pop();
    if (typeof resultFunc === "object") {
      directlyPassedOptions = resultFunc;
      resultFunc = funcs.pop();
    }
    if (typeof resultFunc !== "function") {
      throw new Error("createSelector expects an output function after the inputs, but received: [" + typeof resultFunc + "]");
    }
    var _directlyPassedOption = directlyPassedOptions, _directlyPassedOption2 = _directlyPassedOption.memoizeOptions, memoizeOptions = _directlyPassedOption2 === void 0 ? memoizeOptionsFromArgs : _directlyPassedOption2;
    var finalMemoizeOptions = Array.isArray(memoizeOptions) ? memoizeOptions : [memoizeOptions];
    var dependencies = getDependencies(funcs);
    var memoizedResultFunc = memoize.apply(void 0, [function recomputationWrapper() {
      _recomputations++;
      return resultFunc.apply(null, arguments);
    }].concat(finalMemoizeOptions));
    var selector = memoize(function dependenciesChecker() {
      var params = [];
      var length = dependencies.length;
      for (var i = 0; i < length; i++) {
        params.push(dependencies[i].apply(null, arguments));
      }
      _lastResult = memoizedResultFunc.apply(null, params);
      return _lastResult;
    });
    Object.assign(selector, {
      resultFunc,
      memoizedResultFunc,
      dependencies,
      lastResult: function lastResult() {
        return _lastResult;
      },
      recomputations: function recomputations() {
        return _recomputations;
      },
      resetRecomputations: function resetRecomputations() {
        return _recomputations = 0;
      }
    });
    return selector;
  };
  return createSelector3;
}
var createSelector = /* @__PURE__ */ createSelectorCreator(defaultMemoize);

// node_modules/@mui/x-data-grid/utils/createSelector.js
var cacheContainer = {
  cache: null
};
var missingInstanceIdWarning = buildWarning(["MUI: A selector was called without passing the instance ID, which may impact the performance of the grid.", "To fix, call it with `apiRef`, e.g. `mySelector(apiRef)`, or pass the instance ID explicitly, e.g `mySelector(state, apiRef.current.instanceId)`."]);
var createSelector2 = (...args) => {
  if (cacheContainer.cache === null) {
    cacheContainer.cache = {};
  }
  const selector = (...selectorArgs) => {
    const [stateOrApiRef, instanceId] = selectorArgs;
    const isApiRef = !!stateOrApiRef.current;
    const cacheKey = isApiRef ? stateOrApiRef.current.instanceId : instanceId != null ? instanceId : "default";
    const state = isApiRef ? stateOrApiRef.current.state : stateOrApiRef;
    if (true) {
      if (cacheKey === "default") {
        missingInstanceIdWarning();
      }
    }
    if (cacheContainer.cache === null) {
      cacheContainer.cache = {};
    }
    const {
      cache
    } = cacheContainer;
    if (cache[cacheKey] && cache[cacheKey].get(args)) {
      return cache[cacheKey].get(args)(state, cacheKey);
    }
    const newSelector = createSelector(...args);
    if (!cache[cacheKey]) {
      cache[cacheKey] = /* @__PURE__ */ new Map();
    }
    cache[cacheKey].set(args, newSelector);
    return newSelector(state, cacheKey);
  };
  selector.acceptsApiRef = true;
  return selector;
};

// node_modules/@mui/x-data-grid/hooks/features/rows/gridRowsSelector.js
var gridRowsStateSelector = (state) => state.rows;
var gridRowCountSelector = createSelector2(gridRowsStateSelector, (rows) => rows.totalRowCount);
var gridRowsLoadingSelector = createSelector2(gridRowsStateSelector, (rows) => rows.loading);
var gridTopLevelRowCountSelector = createSelector2(gridRowsStateSelector, (rows) => rows.totalTopLevelRowCount);
var gridRowsLookupSelector = createSelector2(gridRowsStateSelector, (rows) => rows.idRowsLookup);
var gridRowsIdToIdLookupSelector = createSelector2(gridRowsStateSelector, (rows) => rows.idToIdLookup);
var gridRowTreeSelector = createSelector2(gridRowsStateSelector, (rows) => rows.tree);
var gridRowGroupingNameSelector = createSelector2(gridRowsStateSelector, (rows) => rows.groupingName);
var gridRowTreeDepthSelector = createSelector2(gridRowsStateSelector, (rows) => rows.treeDepth);
var gridRowIdsSelector = createSelector2(gridRowsStateSelector, (rows) => rows.ids);
var gridAdditionalRowGroupsSelector = createSelector2(gridRowsStateSelector, (rows) => rows == null ? void 0 : rows.additionalRowGroups);
var gridPinnedRowsSelector = createSelector2(gridAdditionalRowGroupsSelector, (additionalRowGroups) => additionalRowGroups == null ? void 0 : additionalRowGroups.pinnedRows);
var gridPinnedRowsCountSelector = createSelector2(gridPinnedRowsSelector, (pinnedRows) => {
  var _pinnedRows$top, _pinnedRows$bottom;
  return ((pinnedRows == null ? void 0 : (_pinnedRows$top = pinnedRows.top) == null ? void 0 : _pinnedRows$top.length) || 0) + ((pinnedRows == null ? void 0 : (_pinnedRows$bottom = pinnedRows.bottom) == null ? void 0 : _pinnedRows$bottom.length) || 0);
});

// node_modules/@mui/x-data-grid/hooks/features/sorting/gridSortingSelector.js
var gridSortingStateSelector = (state) => state.sorting;
var gridSortedRowIdsSelector = createSelector2(gridSortingStateSelector, (sortingState) => sortingState.sortedRows);
var gridSortedRowEntriesSelector = createSelector2(gridSortedRowIdsSelector, gridRowsLookupSelector, (sortedIds, idRowsLookup) => sortedIds.map((id) => ({
  id,
  model: idRowsLookup[id]
})));
var gridSortModelSelector = createSelector2(gridSortingStateSelector, (sorting) => sorting.sortModel);
var gridSortColumnLookupSelector = createSelector2(gridSortModelSelector, (sortModel) => {
  const result = sortModel.reduce((res, sortItem, index) => {
    res[sortItem.field] = {
      sortDirection: sortItem.sort,
      sortIndex: sortModel.length > 1 ? index + 1 : void 0
    };
    return res;
  }, {});
  return result;
});

// node_modules/@mui/x-data-grid/hooks/features/columns/gridColumnsSelector.js
var gridColumnsSelector = (state) => state.columns;
var gridColumnFieldsSelector = createSelector2(gridColumnsSelector, (columnsState) => columnsState.all);
var gridColumnLookupSelector = createSelector2(gridColumnsSelector, (columnsState) => columnsState.lookup);
var gridColumnDefinitionsSelector = createSelector2(gridColumnFieldsSelector, gridColumnLookupSelector, (allFields, lookup) => allFields.map((field) => lookup[field]));
var gridColumnVisibilityModelSelector = createSelector2(gridColumnsSelector, (columnsState) => columnsState.columnVisibilityModel);
var gridVisibleColumnDefinitionsSelector = createSelector2(gridColumnDefinitionsSelector, gridColumnVisibilityModelSelector, (columns2, columnVisibilityModel) => columns2.filter((column) => columnVisibilityModel[column.field] !== false));
var gridVisibleColumnFieldsSelector = createSelector2(gridVisibleColumnDefinitionsSelector, (visibleColumns) => visibleColumns.map((column) => column.field));
var gridColumnPositionsSelector = createSelector2(gridVisibleColumnDefinitionsSelector, (visibleColumns) => {
  const positions = [];
  let currentPosition = 0;
  for (let i = 0; i < visibleColumns.length; i += 1) {
    positions.push(currentPosition);
    currentPosition += visibleColumns[i].computedWidth;
  }
  return positions;
});
var gridColumnsTotalWidthSelector = createSelector2(gridVisibleColumnDefinitionsSelector, gridColumnPositionsSelector, (visibleColumns, positions) => {
  const colCount = visibleColumns.length;
  if (colCount === 0) {
    return 0;
  }
  return positions[colCount - 1] + visibleColumns[colCount - 1].computedWidth;
});
var gridFilterableColumnDefinitionsSelector = createSelector2(gridColumnDefinitionsSelector, (columns2) => columns2.filter((col) => col.filterable));
var gridFilterableColumnLookupSelector = createSelector2(gridColumnDefinitionsSelector, (columns2) => columns2.reduce((acc, col) => {
  if (col.filterable) {
    acc[col.field] = col;
  }
  return acc;
}, {}));
var allGridColumnsFieldsSelector = wrapWithWarningOnCall(gridColumnFieldsSelector, ["MUI: The method allGridColumnsFieldsSelector is deprecated and will be removed in the next major version.", "Use gridColumnFieldsSelector instead"]);
var allGridColumnsSelector = wrapWithWarningOnCall(gridColumnDefinitionsSelector, ["MUI: The method allGridColumnsSelector is deprecated and will be removed in the next major version.", "Use gridColumnDefinitionsSelector instead"]);
var visibleGridColumnsSelector = wrapWithWarningOnCall(gridVisibleColumnDefinitionsSelector, ["MUI: The method visibleGridColumnsSelector is deprecated and will be removed in the next major version.", "Use gridVisibleColumnDefinitionsSelector instead"]);
var filterableGridColumnsSelector = wrapWithWarningOnCall(gridFilterableColumnDefinitionsSelector, ["MUI: The method filterableGridColumnsSelector is deprecated and will be removed in the next major version.", "Use gridFilterableColumnDefinitionsSelector instead"]);
var filterableGridColumnsIdsSelector = wrapWithWarningOnCall(createSelector2(gridFilterableColumnDefinitionsSelector, (columns2) => columns2.map((col) => col.field)), ["MUI: The method filterableGridColumnsIdsSelector is deprecated and will be removed in the next major version.", "Use gridFilterableColumnDefinitionsSelector instead.", "The return format is now a lookup, if you want to get the same output as before, use the following code:", "", "const lookup = gridFilterableColumnLookupSelector(apiRef);", "const fields = gridColumnFieldsSelector(apiRef).filter(field => lookup[field]);"]);
var visibleGridColumnsLengthSelector = wrapWithWarningOnCall(createSelector2(gridVisibleColumnDefinitionsSelector, (visibleColumns) => visibleColumns.length), ["MUI: The method visibleGridColumnsLengthSelector is deprecated and will be removed in the next major version.", "Use the length of the array returned by gridVisibleColumnDefinitionsSelector instead."]);
var gridColumnsMetaSelector = wrapWithWarningOnCall(createSelector2(gridColumnPositionsSelector, gridColumnsTotalWidthSelector, (positions, totalWidth) => ({
  totalWidth,
  positions
})), ["MUI: The method gridColumnsMetaSelector is deprecated and will be removed in the next major version.", "Use gridColumnsTotalWidthSelector or gridColumnPositionsSelector instead"]);

// node_modules/@mui/x-data-grid/hooks/features/filter/gridFilterSelector.js
var gridFilterStateSelector = (state) => state.filter;
var gridFilterModelSelector = createSelector2(gridFilterStateSelector, (filterState) => filterState.filterModel);
var gridQuickFilterValuesSelector = createSelector2(gridFilterModelSelector, (filterModel) => filterModel.quickFilterValues);
var gridVisibleRowsLookupSelector = createSelector2(gridFilterStateSelector, (filterState) => filterState.visibleRowsLookup);
var gridFilteredRowsLookupSelector = createSelector2(gridFilterStateSelector, (filterState) => filterState.filteredRowsLookup);
var gridFilteredDescendantCountLookupSelector = createSelector2(gridFilterStateSelector, (filterState) => filterState.filteredDescendantCountLookup);
var gridVisibleSortedRowEntriesSelector = createSelector2(gridVisibleRowsLookupSelector, gridSortedRowEntriesSelector, (visibleRowsLookup, sortedRows) => sortedRows.filter((row) => visibleRowsLookup[row.id] !== false));
var gridVisibleSortedRowIdsSelector = createSelector2(gridVisibleSortedRowEntriesSelector, (visibleSortedRowEntries) => visibleSortedRowEntries.map((row) => row.id));
var gridFilteredSortedRowEntriesSelector = createSelector2(gridFilteredRowsLookupSelector, gridSortedRowEntriesSelector, (filteredRowsLookup, sortedRows) => sortedRows.filter((row) => filteredRowsLookup[row.id] !== false));
var gridFilteredSortedRowIdsSelector = createSelector2(gridFilteredSortedRowEntriesSelector, (filteredSortedRowEntries) => filteredSortedRowEntries.map((row) => row.id));
var gridVisibleSortedTopLevelRowEntriesSelector = createSelector2(gridVisibleSortedRowEntriesSelector, gridRowTreeSelector, gridRowTreeDepthSelector, (visibleSortedRows, rowTree, rowTreeDepth) => {
  if (rowTreeDepth < 2) {
    return visibleSortedRows;
  }
  return visibleSortedRows.filter((row) => {
    var _rowTree$row$id;
    return ((_rowTree$row$id = rowTree[row.id]) == null ? void 0 : _rowTree$row$id.depth) === 0;
  });
});
var gridVisibleRowCountSelector = createSelector2(gridVisibleSortedRowEntriesSelector, (visibleSortedRows) => visibleSortedRows.length);
var gridVisibleTopLevelRowCountSelector = createSelector2(gridVisibleSortedTopLevelRowEntriesSelector, (visibleSortedTopLevelRows) => visibleSortedTopLevelRows.length);
var gridFilterActiveItemsSelector = createSelector2(gridFilterModelSelector, gridColumnLookupSelector, (filterModel, columnLookup) => {
  var _filterModel$items;
  return (_filterModel$items = filterModel.items) == null ? void 0 : _filterModel$items.filter((item) => {
    var _column$filterOperato, _item$value;
    if (!item.columnField) {
      return false;
    }
    const column = columnLookup[item.columnField];
    if (!(column != null && column.filterOperators) || (column == null ? void 0 : (_column$filterOperato = column.filterOperators) == null ? void 0 : _column$filterOperato.length) === 0) {
      return false;
    }
    const filterOperator = column.filterOperators.find((operator) => operator.value === item.operatorValue);
    if (!filterOperator) {
      return false;
    }
    return !filterOperator.InputComponent || item.value != null && ((_item$value = item.value) == null ? void 0 : _item$value.toString()) !== "";
  });
});
var gridFilterActiveItemsLookupSelector = createSelector2(gridFilterActiveItemsSelector, (activeFilters) => {
  const result = activeFilters.reduce((res, filterItem) => {
    if (!res[filterItem.columnField]) {
      res[filterItem.columnField] = [filterItem];
    } else {
      res[filterItem.columnField].push(filterItem);
    }
    return res;
  }, {});
  return result;
});

// node_modules/@mui/x-data-grid/hooks/features/density/densitySelector.js
var gridDensitySelector = (state) => state.density;
var gridDensityValueSelector = createSelector2(gridDensitySelector, (density) => density.value);
var gridDensityRowHeightSelector = createSelector2(gridDensitySelector, (density) => density.rowHeight);
var gridDensityHeaderHeightSelector = createSelector2(gridDensitySelector, (density) => density.headerHeight);
var gridDensityHeaderGroupingMaxDepthSelector = createSelector2(gridDensitySelector, (density) => density.headerGroupingMaxDepth);
var gridDensityFactorSelector = createSelector2(gridDensitySelector, (density) => density.factor);
var gridDensityTotalHeaderHeightSelector = createSelector2(gridDensitySelector, (density) => density.headerHeight * (1 + density.headerGroupingMaxDepth));

// node_modules/@mui/x-data-grid/components/base/GridOverlays.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
function GridOverlayWrapper(props) {
  var _viewportInnerSize$he, _viewportInnerSize$wi;
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const totalHeaderHeight = useGridSelector(apiRef, gridDensityTotalHeaderHeightSelector);
  const [viewportInnerSize, setViewportInnerSize] = React7.useState(() => {
    var _apiRef$current$getRo, _apiRef$current$getRo2;
    return (_apiRef$current$getRo = (_apiRef$current$getRo2 = apiRef.current.getRootDimensions()) == null ? void 0 : _apiRef$current$getRo2.viewportInnerSize) != null ? _apiRef$current$getRo : null;
  });
  const handleViewportSizeChange = React7.useCallback(() => {
    var _apiRef$current$getRo3, _apiRef$current$getRo4;
    setViewportInnerSize((_apiRef$current$getRo3 = (_apiRef$current$getRo4 = apiRef.current.getRootDimensions()) == null ? void 0 : _apiRef$current$getRo4.viewportInnerSize) != null ? _apiRef$current$getRo3 : null);
  }, [apiRef]);
  useEnhancedEffect_default(() => {
    return apiRef.current.subscribeEvent("viewportInnerSizeChange", handleViewportSizeChange);
  }, [apiRef, handleViewportSizeChange]);
  let height = (_viewportInnerSize$he = viewportInnerSize == null ? void 0 : viewportInnerSize.height) != null ? _viewportInnerSize$he : 0;
  if (rootProps.autoHeight && height === 0) {
    height = "auto";
  }
  if (!viewportInnerSize) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", _extends({
    style: {
      height,
      width: (_viewportInnerSize$wi = viewportInnerSize == null ? void 0 : viewportInnerSize.width) != null ? _viewportInnerSize$wi : 0,
      position: "absolute",
      top: totalHeaderHeight,
      bottom: height === "auto" ? 0 : void 0
    }
  }, props));
}
function GridOverlays() {
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const totalRowCount = useGridSelector(apiRef, gridRowCountSelector);
  const visibleRowCount = useGridSelector(apiRef, gridVisibleRowCountSelector);
  const loading = useGridSelector(apiRef, gridRowsLoadingSelector);
  const showNoRowsOverlay = !loading && totalRowCount === 0;
  const showNoResultsOverlay = !loading && totalRowCount > 0 && visibleRowCount === 0;
  let overlay = null;
  if (showNoRowsOverlay) {
    var _rootProps$components;
    overlay = /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(rootProps.components.NoRowsOverlay, _extends({}, (_rootProps$components = rootProps.componentsProps) == null ? void 0 : _rootProps$components.noRowsOverlay));
  }
  if (showNoResultsOverlay) {
    var _rootProps$components2;
    overlay = /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(rootProps.components.NoResultsOverlay, _extends({}, (_rootProps$components2 = rootProps.componentsProps) == null ? void 0 : _rootProps$components2.noResultsOverlay));
  }
  if (loading) {
    var _rootProps$components3;
    overlay = /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(rootProps.components.LoadingOverlay, _extends({}, (_rootProps$components3 = rootProps.componentsProps) == null ? void 0 : _rootProps$components3.loadingOverlay));
  }
  if (overlay === null) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(GridOverlayWrapper, {
    children: overlay
  });
}

// node_modules/@mui/x-data-grid/components/base/GridBody.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
function GridBody(props) {
  const {
    children,
    VirtualScrollerComponent,
    ColumnHeadersComponent
  } = props;
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const totalHeaderHeight = useGridSelector(apiRef, gridDensityTotalHeaderHeightSelector);
  const [isVirtualizationDisabled, setIsVirtualizationDisabled] = React8.useState(rootProps.disableVirtualization);
  const disableVirtualization = React8.useCallback(() => {
    setIsVirtualizationDisabled(true);
  }, []);
  const enableVirtualization = React8.useCallback(() => {
    setIsVirtualizationDisabled(false);
  }, []);
  React8.useEffect(() => {
    setIsVirtualizationDisabled(rootProps.disableVirtualization);
  }, [rootProps.disableVirtualization]);
  apiRef.current.unstable_disableVirtualization = disableVirtualization;
  apiRef.current.unstable_enableVirtualization = enableVirtualization;
  const columnHeadersRef = React8.useRef(null);
  const columnsContainerRef = React8.useRef(null);
  const windowRef = React8.useRef(null);
  const renderingZoneRef = React8.useRef(null);
  apiRef.current.columnHeadersContainerElementRef = columnsContainerRef;
  apiRef.current.columnHeadersElementRef = columnHeadersRef;
  apiRef.current.windowRef = windowRef;
  apiRef.current.renderingZoneRef = renderingZoneRef;
  const handleResize = React8.useCallback((size) => {
    apiRef.current.publishEvent("resize", size);
  }, [apiRef]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(GridMainContainer, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime4.jsx)(GridOverlays, {}), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ColumnHeadersComponent, {
      ref: columnsContainerRef,
      innerRef: columnHeadersRef
    }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(GridAutoSizer, {
      nonce: rootProps.nonce,
      disableHeight: rootProps.autoHeight,
      onResize: handleResize,
      children: (size) => {
        const style = {
          width: size.width,
          height: size.height ? size.height - totalHeaderHeight : "auto",
          marginTop: totalHeaderHeight
        };
        return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(VirtualScrollerComponent, {
          ref: windowRef,
          style,
          disableVirtualization: isVirtualizationDisabled
        });
      }
    }), children]
  });
}
true ? GridBody.propTypes = {
  children: import_prop_types2.default.node,
  ColumnHeadersComponent: import_prop_types2.default.elementType.isRequired,
  VirtualScrollerComponent: import_prop_types2.default.elementType.isRequired
} : void 0;

// node_modules/@mui/x-data-grid/components/base/GridErrorHandler.js
init_extends();
var React11 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());

// node_modules/@mui/x-data-grid/hooks/utils/useGridLogger.js
var React9 = __toESM(require_react());
function useGridLogger(apiRef, name) {
  const logger = React9.useRef(null);
  if (logger.current) {
    return logger.current;
  }
  const newLogger = apiRef.current.getLogger(name);
  logger.current = newLogger;
  return newLogger;
}

// node_modules/@mui/x-data-grid/components/ErrorBoundary.js
var React10 = __toESM(require_react());
var ErrorBoundary = class extends React10.Component {
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error
    };
  }
  componentDidCatch(error, errorInfo) {
    if (this.props.api.current) {
      this.logError(error);
      this.props.api.current.showError({
        error,
        errorInfo
      });
    }
  }
  logError(error, errorInfo) {
    this.props.logger.error(`An unexpected error occurred. Error: ${error && error.message}. `, error, errorInfo);
  }
  render() {
    var _this$state;
    if (this.props.hasError || (_this$state = this.state) != null && _this$state.hasError) {
      return this.props.render(this.props.componentProps || this.state);
    }
    return this.props.children;
  }
};

// node_modules/@mui/x-data-grid/components/base/GridErrorHandler.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
function GridErrorHandler(props) {
  const {
    children
  } = props;
  const apiRef = useGridApiContext();
  const logger = useGridLogger(apiRef, "GridErrorHandler");
  const rootProps = useGridRootProps();
  const error = apiRef.current.state.error;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ErrorBoundary, {
    hasError: error != null,
    componentProps: error,
    api: apiRef,
    logger,
    render: (errorProps) => {
      var _rootProps$components;
      return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(GridMainContainer, {
        children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(rootProps.components.ErrorOverlay, _extends({}, errorProps, (_rootProps$components = rootProps.componentsProps) == null ? void 0 : _rootProps$components.errorOverlay))
      });
    },
    children
  });
}
true ? GridErrorHandler.propTypes = {
  children: import_prop_types3.default.node
} : void 0;

// node_modules/@mui/x-data-grid/components/base/GridFooterPlaceholder.js
init_extends();
var React12 = __toESM(require_react());
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
function GridFooterPlaceholder() {
  var _rootProps$components;
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const footerRef = React12.useRef(null);
  apiRef.current.footerRef = footerRef;
  if (rootProps.hideFooter) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", {
    ref: footerRef,
    children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(rootProps.components.Footer, _extends({}, (_rootProps$components = rootProps.componentsProps) == null ? void 0 : _rootProps$components.footer))
  });
}

// node_modules/@mui/x-data-grid/components/base/GridHeaderPlaceholder.js
init_extends();
var React13 = __toESM(require_react());
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
function GridHeaderPlaceholder() {
  var _rootProps$components;
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const headerRef = React13.useRef(null);
  apiRef.current.headerRef = headerRef;
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", {
    ref: headerRef,
    children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(rootProps.components.Header, _extends({}, (_rootProps$components = rootProps.componentsProps) == null ? void 0 : _rootProps$components.header))
  });
}

// node_modules/@mui/x-data-grid/components/cell/GridCell.js
init_extends();
init_objectWithoutPropertiesLoose();
var React14 = __toESM(require_react());
var import_prop_types4 = __toESM(require_prop_types());
init_clsx_m();
init_utils();

// node_modules/@mui/x-data-grid/models/gridEditRowModel.js
var GridEditModes;
(function(GridEditModes2) {
  GridEditModes2["Cell"] = "cell";
  GridEditModes2["Row"] = "row";
})(GridEditModes || (GridEditModes = {}));
var GridCellModes;
(function(GridCellModes2) {
  GridCellModes2["Edit"] = "edit";
  GridCellModes2["View"] = "view";
})(GridCellModes || (GridCellModes = {}));
var GridRowModes;
(function(GridRowModes2) {
  GridRowModes2["Edit"] = "edit";
  GridRowModes2["View"] = "view";
})(GridRowModes || (GridRowModes = {}));

// node_modules/@mui/x-data-grid/models/gridFeatureMode.js
var GridFeatureModeConstant = {
  client: "client",
  server: "server"
};

// node_modules/@mui/x-data-grid/models/gridFilterItem.js
var GridLinkOperator;
(function(GridLinkOperator2) {
  GridLinkOperator2["And"] = "and";
  GridLinkOperator2["Or"] = "or";
})(GridLinkOperator || (GridLinkOperator = {}));

// node_modules/@mui/x-data-grid/models/params/gridEditCellParams.js
var GridCellEditStartReasons;
(function(GridCellEditStartReasons2) {
  GridCellEditStartReasons2["enterKeyDown"] = "enterKeyDown";
  GridCellEditStartReasons2["cellDoubleClick"] = "cellDoubleClick";
  GridCellEditStartReasons2["printableKeyDown"] = "printableKeyDown";
  GridCellEditStartReasons2["deleteKeyDown"] = "deleteKeyDown";
})(GridCellEditStartReasons || (GridCellEditStartReasons = {}));
var GridCellEditStopReasons;
(function(GridCellEditStopReasons2) {
  GridCellEditStopReasons2["cellFocusOut"] = "cellFocusOut";
  GridCellEditStopReasons2["escapeKeyDown"] = "escapeKeyDown";
  GridCellEditStopReasons2["enterKeyDown"] = "enterKeyDown";
  GridCellEditStopReasons2["tabKeyDown"] = "tabKeyDown";
  GridCellEditStopReasons2["shiftTabKeyDown"] = "shiftTabKeyDown";
})(GridCellEditStopReasons || (GridCellEditStopReasons = {}));

// node_modules/@mui/x-data-grid/models/params/gridRowParams.js
var GridRowEditStartReasons;
(function(GridRowEditStartReasons2) {
  GridRowEditStartReasons2["enterKeyDown"] = "enterKeyDown";
  GridRowEditStartReasons2["cellDoubleClick"] = "cellDoubleClick";
  GridRowEditStartReasons2["printableKeyDown"] = "printableKeyDown";
  GridRowEditStartReasons2["deleteKeyDown"] = "deleteKeyDown";
})(GridRowEditStartReasons || (GridRowEditStartReasons = {}));
var GridRowEditStopReasons;
(function(GridRowEditStopReasons2) {
  GridRowEditStopReasons2["rowFocusOut"] = "rowFocusOut";
  GridRowEditStopReasons2["escapeKeyDown"] = "escapeKeyDown";
  GridRowEditStopReasons2["enterKeyDown"] = "enterKeyDown";
  GridRowEditStopReasons2["tabKeyDown"] = "tabKeyDown";
  GridRowEditStopReasons2["shiftTabKeyDown"] = "shiftTabKeyDown";
})(GridRowEditStopReasons || (GridRowEditStopReasons = {}));

// node_modules/@mui/x-data-grid/models/gridDensity.js
var GridDensityTypes;
(function(GridDensityTypes2) {
  GridDensityTypes2["Compact"] = "compact";
  GridDensityTypes2["Standard"] = "standard";
  GridDensityTypes2["Comfortable"] = "comfortable";
})(GridDensityTypes || (GridDensityTypes = {}));

// node_modules/@mui/x-data-grid/models/gridColumnGrouping.js
function isLeaf(node) {
  return node.field !== void 0;
}

// node_modules/@mui/x-data-grid/hooks/features/focus/gridFocusStateSelector.js
var gridFocusStateSelector = (state) => state.focus;
var gridFocusCellSelector = createSelector2(gridFocusStateSelector, (focusState) => focusState.cell);
var gridFocusColumnHeaderSelector = createSelector2(gridFocusStateSelector, (focusState) => focusState.columnHeader);
var gridTabIndexStateSelector = (state) => state.tabIndex;
var gridTabIndexCellSelector = createSelector2(gridTabIndexStateSelector, (state) => state.cell);
var gridTabIndexColumnHeaderSelector = createSelector2(gridTabIndexStateSelector, (state) => state.columnHeader);

// node_modules/@mui/x-data-grid/components/cell/GridCell.js
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
var _excluded2 = ["align", "children", "colIndex", "colDef", "cellMode", "field", "formattedValue", "hasFocus", "height", "isEditable", "rowId", "tabIndex", "value", "width", "className", "showRightBorder", "extendRowFullWidth", "row", "colSpan", "disableDragEvents", "onClick", "onDoubleClick", "onMouseDown", "onMouseUp", "onKeyDown", "onDragEnter", "onDragOver"];
var cachedSupportsPreventScroll;
function doesSupportPreventScroll() {
  if (cachedSupportsPreventScroll === void 0) {
    document.createElement("div").focus({
      get preventScroll() {
        cachedSupportsPreventScroll = true;
        return false;
      }
    });
  }
  return cachedSupportsPreventScroll;
}
var useUtilityClasses2 = (ownerState) => {
  const {
    align,
    showRightBorder,
    isEditable,
    classes
  } = ownerState;
  const slots = {
    root: ["cell", `cell--text${capitalize_default(align)}`, isEditable && "cell--editable", showRightBorder && "withBorder"],
    content: ["cellContent"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
function GridCell(props) {
  var _rootProps$experiment;
  const {
    align,
    children,
    colIndex,
    cellMode,
    field,
    formattedValue,
    hasFocus,
    height,
    isEditable,
    rowId,
    tabIndex,
    value,
    width,
    className,
    showRightBorder,
    colSpan,
    disableDragEvents,
    onClick,
    onDoubleClick,
    onMouseDown,
    onMouseUp,
    onKeyDown,
    onDragEnter,
    onDragOver
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded2);
  const valueToRender = formattedValue == null ? value : formattedValue;
  const cellRef = React14.useRef(null);
  const focusElementRef = React14.useRef(null);
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const ownerState = {
    align,
    showRightBorder,
    isEditable,
    classes: rootProps.classes
  };
  const classes = useUtilityClasses2(ownerState);
  const publishMouseUp = React14.useCallback((eventName) => (event) => {
    const params = apiRef.current.getCellParams(rowId, field || "");
    apiRef.current.publishEvent(eventName, params, event);
    if (onMouseUp) {
      onMouseUp(event);
    }
  }, [apiRef, field, onMouseUp, rowId]);
  const publishMouseDown = React14.useCallback((eventName) => (event) => {
    const params = apiRef.current.getCellParams(rowId, field || "");
    apiRef.current.publishEvent(eventName, params, event);
    if (onMouseDown) {
      onMouseDown(event);
    }
  }, [apiRef, field, onMouseDown, rowId]);
  const publish = React14.useCallback((eventName, propHandler) => (event) => {
    if (!event.currentTarget.contains(event.target)) {
      return;
    }
    if (!apiRef.current.getRow(rowId)) {
      return;
    }
    const params = apiRef.current.getCellParams(rowId, field || "");
    apiRef.current.publishEvent(eventName, params, event);
    if (propHandler) {
      propHandler(event);
    }
  }, [apiRef, field, rowId]);
  const style = {
    minWidth: width,
    maxWidth: width,
    minHeight: height,
    maxHeight: height === "auto" ? "none" : height
  };
  React14.useLayoutEffect(() => {
    if (!hasFocus || cellMode === GridCellModes.Edit) {
      return;
    }
    const doc = ownerDocument_default(apiRef.current.rootElementRef.current);
    if (cellRef.current && !cellRef.current.contains(doc.activeElement)) {
      const focusableElement = cellRef.current.querySelector('[tabindex="0"]');
      const elementToFocus = focusElementRef.current || focusableElement || cellRef.current;
      if (doesSupportPreventScroll()) {
        elementToFocus.focus({
          preventScroll: true
        });
      } else {
        const scrollPosition = apiRef.current.getScrollPosition();
        elementToFocus.focus();
        apiRef.current.scroll(scrollPosition);
      }
    }
  }, [hasFocus, cellMode, apiRef]);
  let handleFocus = other.onFocus;
  if (false) {
    handleFocus = (event) => {
      const focusedCell = gridFocusCellSelector(apiRef);
      if ((focusedCell == null ? void 0 : focusedCell.id) === rowId && focusedCell.field === field) {
        if (typeof other.onFocus === "function") {
          other.onFocus(event);
        }
        return;
      }
      if (!warnedOnce) {
        console.warn([`MUI: The cell with id=${rowId} and field=${field} received focus.`, `According to the state, the focus should be at id=${focusedCell == null ? void 0 : focusedCell.id}, field=${focusedCell == null ? void 0 : focusedCell.field}.`, "Not syncing the state may cause unwanted behaviors since the `cellFocusIn` event won't be fired.", "Call `fireEvent.mouseUp` before the `fireEvent.click` to sync the focus with the state."].join("\n"));
        warnedOnce = true;
      }
    };
  }
  const column = apiRef.current.getColumn(field);
  const managesOwnFocus = column.type === "actions";
  const renderChildren = () => {
    if (children == null) {
      return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", {
        className: classes.content,
        children: valueToRender == null ? void 0 : valueToRender.toString()
      });
    }
    if (/* @__PURE__ */ React14.isValidElement(children) && managesOwnFocus) {
      return /* @__PURE__ */ React14.cloneElement(children, {
        focusElementRef
      });
    }
    return children;
  };
  const draggableEventHandlers = disableDragEvents ? null : {
    onDragEnter: publish("cellDragEnter", onDragEnter),
    onDragOver: publish("cellDragOver", onDragOver)
  };
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", _extends({
    ref: cellRef,
    className: clsx_m_default(className, classes.root),
    role: "cell",
    "data-field": field,
    "data-colindex": colIndex,
    "aria-colindex": colIndex + 1,
    "aria-colspan": colSpan,
    style,
    tabIndex: (cellMode === "view" || !isEditable) && !managesOwnFocus ? tabIndex : -1,
    onClick: publish("cellClick", onClick),
    onDoubleClick: publish("cellDoubleClick", onDoubleClick),
    onMouseDown: publishMouseDown("cellMouseDown"),
    onMouseUp: publishMouseUp("cellMouseUp"),
    onKeyDown: publish("cellKeyDown", onKeyDown)
  }, draggableEventHandlers, other, {
    onFocus: handleFocus,
    children: renderChildren()
  }));
}
true ? GridCell.propTypes = {
  align: import_prop_types4.default.oneOf(["center", "left", "right"]).isRequired,
  cellMode: import_prop_types4.default.oneOf(["edit", "view"]),
  children: import_prop_types4.default.node,
  className: import_prop_types4.default.string,
  colIndex: import_prop_types4.default.number.isRequired,
  colSpan: import_prop_types4.default.number,
  disableDragEvents: import_prop_types4.default.bool,
  field: import_prop_types4.default.string.isRequired,
  formattedValue: import_prop_types4.default.any,
  hasFocus: import_prop_types4.default.bool,
  height: import_prop_types4.default.oneOfType([import_prop_types4.default.oneOf(["auto"]), import_prop_types4.default.number]).isRequired,
  isEditable: import_prop_types4.default.bool,
  onClick: import_prop_types4.default.func,
  onDoubleClick: import_prop_types4.default.func,
  onDragEnter: import_prop_types4.default.func,
  onDragOver: import_prop_types4.default.func,
  onKeyDown: import_prop_types4.default.func,
  onMouseDown: import_prop_types4.default.func,
  onMouseUp: import_prop_types4.default.func,
  rowId: import_prop_types4.default.oneOfType([import_prop_types4.default.number, import_prop_types4.default.string]).isRequired,
  showRightBorder: import_prop_types4.default.bool,
  tabIndex: import_prop_types4.default.oneOf([-1, 0]).isRequired,
  value: import_prop_types4.default.any,
  width: import_prop_types4.default.number.isRequired
} : void 0;

// node_modules/@mui/x-data-grid/components/cell/GridBooleanCell.js
init_extends();
init_objectWithoutPropertiesLoose();
var React15 = __toESM(require_react());
var import_prop_types5 = __toESM(require_prop_types());
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
var _excluded3 = ["id", "value", "formattedValue", "api", "field", "row", "rowNode", "colDef", "cellMode", "isEditable", "hasFocus", "tabIndex", "getValue"];
var useUtilityClasses3 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["booleanCell"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
var GridBooleanCellRaw = (props) => {
  const {
    value
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded3);
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const ownerState = {
    classes: rootProps.classes
  };
  const classes = useUtilityClasses3(ownerState);
  const Icon = React15.useMemo(() => value ? rootProps.components.BooleanCellTrueIcon : rootProps.components.BooleanCellFalseIcon, [rootProps.components.BooleanCellFalseIcon, rootProps.components.BooleanCellTrueIcon, value]);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Icon, _extends({
    fontSize: "small",
    className: classes.root,
    titleAccess: apiRef.current.getLocaleText(value ? "booleanCellTrueLabel" : "booleanCellFalseLabel"),
    "data-value": Boolean(value)
  }, other));
};
true ? GridBooleanCellRaw.propTypes = {
  api: import_prop_types5.default.any.isRequired,
  cellMode: import_prop_types5.default.oneOf(["edit", "view"]).isRequired,
  colDef: import_prop_types5.default.object.isRequired,
  field: import_prop_types5.default.string.isRequired,
  focusElementRef: import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.shape({
    current: import_prop_types5.default.shape({
      focus: import_prop_types5.default.func.isRequired
    })
  })]),
  formattedValue: import_prop_types5.default.any,
  getValue: import_prop_types5.default.func.isRequired,
  hasFocus: import_prop_types5.default.bool.isRequired,
  id: import_prop_types5.default.oneOfType([import_prop_types5.default.number, import_prop_types5.default.string]).isRequired,
  isEditable: import_prop_types5.default.bool,
  row: import_prop_types5.default.object.isRequired,
  rowNode: import_prop_types5.default.object.isRequired,
  tabIndex: import_prop_types5.default.oneOf([-1, 0]).isRequired,
  value: import_prop_types5.default.any
} : void 0;
var GridBooleanCell = /* @__PURE__ */ React15.memo(GridBooleanCellRaw);
var renderBooleanCell = (params) => {
  if (params.rowNode.isAutoGenerated) {
    return "";
  }
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(GridBooleanCell, _extends({}, params));
};

// node_modules/@mui/x-data-grid/components/cell/GridEditBooleanCell.js
init_extends();
init_objectWithoutPropertiesLoose();
var React16 = __toESM(require_react());
var import_prop_types6 = __toESM(require_prop_types());
init_clsx_m();
init_utils();
var import_jsx_runtime11 = __toESM(require_jsx_runtime());
var _excluded4 = ["id", "value", "formattedValue", "api", "field", "row", "rowNode", "colDef", "cellMode", "isEditable", "tabIndex", "className", "getValue", "hasFocus", "isValidating", "isProcessingProps", "error", "onValueChange"];
var useUtilityClasses4 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["editBooleanCell"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
function GridEditBooleanCell(props) {
  var _rootProps$components;
  const {
    id: idProp,
    value,
    field,
    className,
    hasFocus,
    onValueChange
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded4);
  const apiRef = useGridApiContext();
  const inputRef = React16.useRef(null);
  const id = useId_default();
  const [valueState, setValueState] = React16.useState(value);
  const rootProps = useGridRootProps();
  const ownerState = {
    classes: rootProps.classes
  };
  const classes = useUtilityClasses4(ownerState);
  const handleChange = React16.useCallback(async (event) => {
    const newValue = event.target.checked;
    if (onValueChange) {
      await onValueChange(event, newValue);
    }
    setValueState(newValue);
    await apiRef.current.setEditCellValue({
      id: idProp,
      field,
      value: newValue
    }, event);
  }, [apiRef, field, idProp, onValueChange]);
  React16.useEffect(() => {
    setValueState(value);
  }, [value]);
  useEnhancedEffect_default(() => {
    if (hasFocus) {
      inputRef.current.focus();
    }
  }, [hasFocus]);
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("label", _extends({
    htmlFor: id,
    className: clsx_m_default(classes.root, className)
  }, other, {
    children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(rootProps.components.BaseCheckbox, _extends({
      id,
      inputRef,
      checked: Boolean(valueState),
      onChange: handleChange,
      size: "small"
    }, (_rootProps$components = rootProps.componentsProps) == null ? void 0 : _rootProps$components.baseCheckbox))
  }));
}
true ? GridEditBooleanCell.propTypes = {
  api: import_prop_types6.default.any.isRequired,
  cellMode: import_prop_types6.default.oneOf(["edit", "view"]).isRequired,
  changeReason: import_prop_types6.default.oneOf(["debouncedSetEditCellValue", "setEditCellValue"]),
  colDef: import_prop_types6.default.object.isRequired,
  field: import_prop_types6.default.string.isRequired,
  formattedValue: import_prop_types6.default.any,
  getValue: import_prop_types6.default.func.isRequired,
  hasFocus: import_prop_types6.default.bool.isRequired,
  id: import_prop_types6.default.oneOfType([import_prop_types6.default.number, import_prop_types6.default.string]).isRequired,
  isEditable: import_prop_types6.default.bool,
  isProcessingProps: import_prop_types6.default.bool,
  isValidating: import_prop_types6.default.bool,
  onValueChange: import_prop_types6.default.func,
  row: import_prop_types6.default.object.isRequired,
  rowNode: import_prop_types6.default.object.isRequired,
  tabIndex: import_prop_types6.default.oneOf([-1, 0]).isRequired,
  value: import_prop_types6.default.any
} : void 0;
var renderEditBooleanCell = (params) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(GridEditBooleanCell, _extends({}, params));

// node_modules/@mui/x-data-grid/components/cell/GridEditDateCell.js
init_extends();
init_objectWithoutPropertiesLoose();
var React17 = __toESM(require_react());
var import_prop_types7 = __toESM(require_prop_types());
init_utils();
var import_jsx_runtime12 = __toESM(require_jsx_runtime());
var _excluded5 = ["id", "value", "formattedValue", "api", "field", "row", "rowNode", "colDef", "cellMode", "isEditable", "tabIndex", "hasFocus", "getValue", "inputProps", "isValidating", "isProcessingProps", "onValueChange"];
var StyledInputBase = styled_default(InputBase_default)({
  fontSize: "inherit"
});
var useUtilityClasses5 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["editInputCell"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
function GridEditDateCell(props) {
  const {
    id,
    value: valueProp,
    field,
    colDef,
    hasFocus,
    inputProps,
    onValueChange
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded5);
  const isDateTime = colDef.type === "dateTime";
  const apiRef = useGridApiContext();
  const inputRef = React17.useRef();
  const valueTransformed = React17.useMemo(() => {
    let parsedDate;
    if (valueProp == null) {
      parsedDate = null;
    } else if (valueProp instanceof Date) {
      parsedDate = valueProp;
    } else {
      parsedDate = new Date((valueProp != null ? valueProp : "").toString());
    }
    let formattedDate;
    if (parsedDate == null || Number.isNaN(parsedDate.getTime())) {
      formattedDate = "";
    } else {
      const localDate = new Date(parsedDate.getTime() - parsedDate.getTimezoneOffset() * 60 * 1e3);
      formattedDate = localDate.toISOString().substr(0, isDateTime ? 16 : 10);
    }
    return {
      parsed: parsedDate,
      formatted: formattedDate
    };
  }, [valueProp, isDateTime]);
  const [valueState, setValueState] = React17.useState(valueTransformed);
  const rootProps = useGridRootProps();
  const ownerState = {
    classes: rootProps.classes
  };
  const classes = useUtilityClasses5(ownerState);
  const handleChange = React17.useCallback(async (event) => {
    const newFormattedDate = event.target.value;
    let newParsedDate;
    if (newFormattedDate === "") {
      newParsedDate = null;
    } else {
      const [date, time] = newFormattedDate.split("T");
      const [year, month, day] = date.split("-");
      newParsedDate = new Date();
      newParsedDate.setFullYear(Number(year), Number(month) - 1, Number(day));
      newParsedDate.setHours(0, 0, 0, 0);
      if (time) {
        const [hours, minutes] = time.split(":");
        newParsedDate.setHours(Number(hours), Number(minutes), 0, 0);
      }
    }
    if (onValueChange) {
      await onValueChange(event, newParsedDate);
    }
    setValueState({
      parsed: newParsedDate,
      formatted: newFormattedDate
    });
    apiRef.current.setEditCellValue({
      id,
      field,
      value: newParsedDate
    }, event);
  }, [apiRef, field, id, onValueChange]);
  React17.useEffect(() => {
    setValueState((state) => {
      var _valueTransformed$par, _state$parsed;
      if (valueTransformed.parsed !== state.parsed && ((_valueTransformed$par = valueTransformed.parsed) == null ? void 0 : _valueTransformed$par.getTime()) !== ((_state$parsed = state.parsed) == null ? void 0 : _state$parsed.getTime())) {
        return valueTransformed;
      }
      return state;
    });
  }, [valueTransformed]);
  useEnhancedEffect_default(() => {
    if (hasFocus) {
      inputRef.current.focus();
    }
  }, [hasFocus]);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(StyledInputBase, _extends({
    inputRef,
    fullWidth: true,
    className: classes.root,
    type: isDateTime ? "datetime-local" : "date",
    inputProps: _extends({
      max: isDateTime ? "9999-12-31T23:59" : "9999-12-31"
    }, inputProps),
    value: valueState.formatted,
    onChange: handleChange
  }, other));
}
true ? GridEditDateCell.propTypes = {
  api: import_prop_types7.default.any.isRequired,
  cellMode: import_prop_types7.default.oneOf(["edit", "view"]).isRequired,
  changeReason: import_prop_types7.default.oneOf(["debouncedSetEditCellValue", "setEditCellValue"]),
  colDef: import_prop_types7.default.object.isRequired,
  field: import_prop_types7.default.string.isRequired,
  formattedValue: import_prop_types7.default.any,
  getValue: import_prop_types7.default.func.isRequired,
  hasFocus: import_prop_types7.default.bool.isRequired,
  id: import_prop_types7.default.oneOfType([import_prop_types7.default.number, import_prop_types7.default.string]).isRequired,
  isEditable: import_prop_types7.default.bool,
  isProcessingProps: import_prop_types7.default.bool,
  isValidating: import_prop_types7.default.bool,
  onValueChange: import_prop_types7.default.func,
  row: import_prop_types7.default.object.isRequired,
  rowNode: import_prop_types7.default.object.isRequired,
  tabIndex: import_prop_types7.default.oneOf([-1, 0]).isRequired,
  value: import_prop_types7.default.any
} : void 0;
var renderEditDateCell = (params) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(GridEditDateCell, _extends({}, params));

// node_modules/@mui/x-data-grid/components/cell/GridEditInputCell.js
init_objectWithoutPropertiesLoose();
init_extends();
var React20 = __toESM(require_react());
var import_prop_types9 = __toESM(require_prop_types());
init_utils();

// node_modules/@mui/x-data-grid/components/icons/index.js
var React18 = __toESM(require_react());
init_utils();
var import_jsx_runtime13 = __toESM(require_jsx_runtime());
var GridArrowUpwardIcon = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", {
  d: "M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"
}), "ArrowUpward");
var GridArrowDownwardIcon = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", {
  d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
}), "ArrowDownward");
var GridKeyboardArrowRight = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", {
  d: "M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
}), "KeyboardArrowRight");
var GridExpandMoreIcon = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", {
  d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
}), "ExpandMore");
var GridFilterListIcon = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", {
  d: "M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"
}), "FilterList");
var GridFilterAltIcon = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", {
  d: "M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61z"
}), "FilterAlt");
var GridSearchIcon = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", {
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
}), "Search");
var GridMenuIcon = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", {
  d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
}), "Menu");
var GridCheckCircleIcon = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), "CheckCircle");
var GridColumnIcon = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", {
  d: "M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"
}), "ColumnIcon");
var GridSeparatorIcon = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", {
  d: "M11 19V5h2v14z"
}), "Separator");
var GridViewHeadlineIcon = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", {
  d: "M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"
}), "ViewHeadline");
var GridTableRowsIcon = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", {
  d: "M21,8H3V4h18V8z M21,10H3v4h18V10z M21,16H3v4h18V16z"
}), "TableRows");
var GridViewStreamIcon = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", {
  d: "M4 18h17v-6H4v6zM4 5v6h17V5H4z"
}), "ViewStream");
var GridTripleDotsVerticalIcon = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", {
  d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}), "TripleDotsVertical");
var GridCloseIcon = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
var GridAddIcon = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}), "Add");
var GridRemoveIcon = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", {
  d: "M19 13H5v-2h14v2z"
}), "Remove");
var GridLoadIcon = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", {
  d: "M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"
}), "Load");
var GridDragIcon = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", {
  d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}), "Drag");
var GridSaveAltIcon = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", {
  d: "M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"
}), "SaveAlt");
var GridCheckIcon = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", {
  d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
}), "Check");
var GridMoreVertIcon = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", {
  d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}), "MoreVert");

// node_modules/@mui/x-data-grid/components/panel/filterPanel/GridFilterInputValue.js
init_extends();
init_objectWithoutPropertiesLoose();
var React19 = __toESM(require_react());
var import_prop_types8 = __toESM(require_prop_types());
init_utils();

// node_modules/@mui/x-data-grid/components/panel/filterPanel/filterPanelUtils.js
function getValueFromOption(option) {
  if (typeof option === "object" && option !== null) {
    return option.value;
  }
  return option;
}
function getValueFromValueOptions(value, valueOptions) {
  if (valueOptions === void 0) {
    return void 0;
  }
  const result = valueOptions.find((option) => {
    const optionValue = getValueFromOption(option);
    return String(optionValue) === String(value);
  });
  return getValueFromOption(result);
}

// node_modules/@mui/x-data-grid/components/panel/filterPanel/GridFilterInputValue.js
var import_jsx_runtime14 = __toESM(require_jsx_runtime());
var _excluded6 = ["item", "applyValue", "type", "apiRef", "focusElementRef"];
var warnedOnce = {};
function warnDeprecatedTypeSupport(type) {
  console.warn([`MUI: Using GridFilterInputValue with a "${type}" column is deprecated.`, "Use GridFilterInputSingleSelect instead."].join("\n"));
  warnedOnce[type] = true;
}
var renderSingleSelectOptions = ({
  valueOptions,
  valueFormatter,
  field
}, api, OptionComponent) => {
  const iterableColumnValues = typeof valueOptions === "function" ? ["", ...valueOptions({
    field
  })] : ["", ...valueOptions || []];
  return iterableColumnValues.map((option) => {
    const isOptionTypeObject = typeof option === "object";
    const key = isOptionTypeObject ? option.value : option;
    const value = isOptionTypeObject ? option.value : option;
    const formattedValue = valueFormatter && option !== "" ? valueFormatter({
      value: option,
      field,
      api
    }) : option;
    const content = isOptionTypeObject ? option.label : formattedValue;
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(OptionComponent, {
      value,
      children: content
    }, key);
  });
};
var SUBMIT_FILTER_STROKE_TIME = 500;
function GridFilterInputValue(props) {
  var _item$value, _rootProps$components, _baseSelectProps$nati, _rootProps$components2, _rootProps$components3;
  const {
    item,
    applyValue,
    type,
    apiRef,
    focusElementRef
  } = props, others = _objectWithoutPropertiesLoose(props, _excluded6);
  if (["date", "datetime-local", "singleSelect"].includes(type) && !warnedOnce[type]) {
    warnDeprecatedTypeSupport(type);
  }
  const filterTimeout = React19.useRef();
  const [filterValueState, setFilterValueState] = React19.useState((_item$value = item.value) != null ? _item$value : "");
  const [applying, setIsApplying] = React19.useState(false);
  const id = useId_default();
  const rootProps = useGridRootProps();
  const baseSelectProps = ((_rootProps$components = rootProps.componentsProps) == null ? void 0 : _rootProps$components.baseSelect) || {};
  const isSelectNative = (_baseSelectProps$nati = baseSelectProps.native) != null ? _baseSelectProps$nati : true;
  const singleSelectProps = type === "singleSelect" ? {
    select: true,
    SelectProps: _extends({
      native: isSelectNative
    }, (_rootProps$components2 = rootProps.componentsProps) == null ? void 0 : _rootProps$components2.baseSelect),
    children: renderSingleSelectOptions(apiRef.current.getColumn(item.columnField), apiRef.current, isSelectNative ? "option" : MenuItem_default)
  } : {};
  const onFilterChange = React19.useCallback((event) => {
    let value = event.target.value;
    if (type === "singleSelect") {
      const column = apiRef.current.getColumn(item.columnField);
      const columnValueOptions = typeof column.valueOptions === "function" ? column.valueOptions({
        field: column.field
      }) : column.valueOptions;
      value = getValueFromValueOptions(value, columnValueOptions);
    }
    clearTimeout(filterTimeout.current);
    setFilterValueState(String(value));
    setIsApplying(true);
    filterTimeout.current = setTimeout(() => {
      applyValue(_extends({}, item, {
        value
      }));
      setIsApplying(false);
    }, SUBMIT_FILTER_STROKE_TIME);
  }, [apiRef, applyValue, item, type]);
  React19.useEffect(() => {
    return () => {
      clearTimeout(filterTimeout.current);
    };
  }, []);
  React19.useEffect(() => {
    var _item$value2;
    const itemValue = (_item$value2 = item.value) != null ? _item$value2 : "";
    setFilterValueState(String(itemValue));
  }, [item.value]);
  const InputProps = applying ? {
    endAdornment: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(GridLoadIcon, {})
  } : others.InputProps;
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(rootProps.components.BaseTextField, _extends({
    id,
    label: apiRef.current.getLocaleText("filterPanelInputLabel"),
    placeholder: apiRef.current.getLocaleText("filterPanelInputPlaceholder"),
    value: filterValueState,
    onChange: onFilterChange,
    variant: "standard",
    type: type || "text",
    InputProps,
    InputLabelProps: {
      shrink: true
    },
    inputRef: focusElementRef
  }, singleSelectProps, others, (_rootProps$components3 = rootProps.componentsProps) == null ? void 0 : _rootProps$components3.baseTextField));
}
true ? GridFilterInputValue.propTypes = {
  apiRef: import_prop_types8.default.shape({
    current: import_prop_types8.default.object.isRequired
  }).isRequired,
  applyValue: import_prop_types8.default.func.isRequired,
  focusElementRef: import_prop_types8.default.oneOfType([import_prop_types8.default.func, import_prop_types8.default.object]),
  item: import_prop_types8.default.shape({
    columnField: import_prop_types8.default.string.isRequired,
    id: import_prop_types8.default.oneOfType([import_prop_types8.default.number, import_prop_types8.default.string]),
    operatorValue: import_prop_types8.default.string,
    value: import_prop_types8.default.any
  }).isRequired
} : void 0;

// node_modules/@mui/x-data-grid/components/cell/GridEditInputCell.js
var import_jsx_runtime15 = __toESM(require_jsx_runtime());
var _excluded7 = ["id", "value", "formattedValue", "api", "field", "row", "rowNode", "colDef", "cellMode", "isEditable", "tabIndex", "hasFocus", "getValue", "isValidating", "debounceMs", "isProcessingProps", "onValueChange"];
var useUtilityClasses6 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["editInputCell"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
var GridEditInputCellRoot = styled_default(InputBase_default, {
  name: "MuiDataGrid",
  slot: "EditInputCell",
  overridesResolver: (props, styles) => styles.editInputCell
})(({
  theme: theme2
}) => _extends({}, theme2.typography.body2, {
  padding: "1px 0",
  "& input": {
    padding: "0 16px",
    height: "100%"
  }
}));
var GridEditInputCell = /* @__PURE__ */ React20.forwardRef((props, ref) => {
  var _rootProps$experiment, _rootProps$experiment3;
  const rootProps = useGridRootProps();
  const {
    id,
    value,
    field,
    colDef,
    hasFocus,
    debounceMs = (_rootProps$experiment = rootProps.experimentalFeatures) != null && _rootProps$experiment.newEditingApi ? 200 : SUBMIT_FILTER_STROKE_TIME,
    isProcessingProps,
    onValueChange
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded7);
  const apiRef = useGridApiContext();
  const inputRef = React20.useRef();
  const [valueState, setValueState] = React20.useState(value);
  const ownerState = {
    classes: rootProps.classes
  };
  const classes = useUtilityClasses6(ownerState);
  const handleChange = React20.useCallback(async (event) => {
    var _rootProps$experiment2;
    const newValue = event.target.value;
    if (onValueChange) {
      await onValueChange(event, newValue);
    }
    const column = apiRef.current.getColumn(field);
    let parsedValue = newValue;
    if (column.valueParser && (_rootProps$experiment2 = rootProps.experimentalFeatures) != null && _rootProps$experiment2.newEditingApi) {
      parsedValue = column.valueParser(newValue, apiRef.current.getCellParams(id, field));
    }
    setValueState(parsedValue);
    apiRef.current.setEditCellValue({
      id,
      field,
      value: parsedValue,
      debounceMs,
      unstable_skipValueParser: true
    }, event);
  }, [apiRef, debounceMs, field, id, onValueChange, (_rootProps$experiment3 = rootProps.experimentalFeatures) == null ? void 0 : _rootProps$experiment3.newEditingApi]);
  const meta = apiRef.current.unstable_getEditCellMeta ? apiRef.current.unstable_getEditCellMeta(id, field) : {};
  React20.useEffect(() => {
    if (meta.changeReason !== "debouncedSetEditCellValue") {
      setValueState(value);
    }
  }, [meta.changeReason, value]);
  useEnhancedEffect_default(() => {
    if (hasFocus) {
      inputRef.current.focus();
    }
  }, [hasFocus]);
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(GridEditInputCellRoot, _extends({
    ref,
    inputRef,
    className: classes.root,
    fullWidth: true,
    type: colDef.type === "number" ? colDef.type : "text",
    value: valueState != null ? valueState : "",
    onChange: handleChange,
    endAdornment: isProcessingProps ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(GridLoadIcon, {}) : void 0
  }, other));
});
true ? GridEditInputCell.propTypes = {
  api: import_prop_types9.default.any,
  cellMode: import_prop_types9.default.oneOf(["edit", "view"]),
  changeReason: import_prop_types9.default.oneOf(["debouncedSetEditCellValue", "setEditCellValue"]),
  colDef: import_prop_types9.default.object,
  debounceMs: import_prop_types9.default.number,
  field: import_prop_types9.default.string,
  formattedValue: import_prop_types9.default.any,
  getValue: import_prop_types9.default.func,
  hasFocus: import_prop_types9.default.bool,
  id: import_prop_types9.default.oneOfType([import_prop_types9.default.number, import_prop_types9.default.string]),
  isEditable: import_prop_types9.default.bool,
  isProcessingProps: import_prop_types9.default.bool,
  isValidating: import_prop_types9.default.bool,
  onValueChange: import_prop_types9.default.func,
  row: import_prop_types9.default.object,
  rowNode: import_prop_types9.default.object,
  tabIndex: import_prop_types9.default.oneOf([-1, 0]),
  value: import_prop_types9.default.any
} : void 0;
var renderEditInputCell = (params) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(GridEditInputCell, _extends({}, params));

// node_modules/@mui/x-data-grid/components/cell/GridEditSingleSelectCell.js
init_extends();
init_objectWithoutPropertiesLoose();
var React21 = __toESM(require_react());
var import_prop_types10 = __toESM(require_prop_types());
init_utils();

// node_modules/@mui/x-data-grid/utils/keyboardUtils.js
var isEscapeKey = (key) => key === "Escape";
var isEnterKey = (key) => key === "Enter";
var isTabKey = (key) => key === "Tab";
var isSpaceKey = (key) => key === " ";
var isArrowKeys = (key) => key.indexOf("Arrow") === 0;
var isHomeOrEndKeys = (key) => key === "Home" || key === "End";
var isPageKeys = (key) => key.indexOf("Page") === 0;
var isDeleteKeys = (key) => key === "Delete" || key === "Backspace";
function isPrintableKey(event) {
  return event.key.length === 1 && event.ctrlKey === false && event.metaKey === false;
}
var GRID_CELL_EXIT_EDIT_MODE_KEYS = ["Enter", "Escape", "Tab"];
var GRID_CELL_EDIT_COMMIT_KEYS = ["Enter", "Tab"];
var isCellEnterEditModeKeys = (event) => isEnterKey(event.key) || isDeleteKeys(event.key) || isPrintableKey(event);
var isCellExitEditModeKeys = (key) => GRID_CELL_EXIT_EDIT_MODE_KEYS.indexOf(key) > -1;
var isCellEditCommitKeys = (key) => GRID_CELL_EDIT_COMMIT_KEYS.indexOf(key) > -1;
var isNavigationKey = (key) => isHomeOrEndKeys(key) || isArrowKeys(key) || isPageKeys(key) || isSpaceKey(key);
var isKeyboardEvent = (event) => !!event.key;
var isHideMenuKey = (key) => isTabKey(key) || isEscapeKey(key);

// node_modules/@mui/x-data-grid/components/cell/GridEditSingleSelectCell.js
var import_jsx_runtime16 = __toESM(require_jsx_runtime());
var _excluded8 = ["id", "value", "formattedValue", "api", "field", "row", "rowNode", "colDef", "cellMode", "isEditable", "tabIndex", "className", "getValue", "hasFocus", "isValidating", "isProcessingProps", "error", "onValueChange", "initialOpen"];
var renderSingleSelectOptions2 = (option, OptionComponent) => {
  const isOptionTypeObject = typeof option === "object";
  const key = isOptionTypeObject ? option.value : option;
  const value = isOptionTypeObject ? option.value : option;
  const content = isOptionTypeObject ? option.label : option;
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(OptionComponent, {
    value,
    children: content
  }, key);
};
function isKeyboardEvent2(event) {
  return !!event.key;
}
function GridEditSingleSelectCell(props) {
  var _rootProps$components, _baseSelectProps$nati, _rootProps$components2;
  const rootProps = useGridRootProps();
  const {
    id,
    value,
    api,
    field,
    row,
    colDef,
    hasFocus,
    error,
    onValueChange,
    initialOpen = rootProps.editMode === GridEditModes.Cell
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded8);
  const apiRef = useGridApiContext();
  const ref = React21.useRef();
  const inputRef = React21.useRef();
  const [open, setOpen] = React21.useState(initialOpen);
  const baseSelectProps = ((_rootProps$components = rootProps.componentsProps) == null ? void 0 : _rootProps$components.baseSelect) || {};
  const isSelectNative = (_baseSelectProps$nati = baseSelectProps.native) != null ? _baseSelectProps$nati : false;
  let valueOptionsFormatted;
  if (typeof colDef.valueOptions === "function") {
    valueOptionsFormatted = colDef.valueOptions({
      id,
      row,
      field
    });
  } else {
    valueOptionsFormatted = colDef.valueOptions;
  }
  if (colDef.valueFormatter) {
    valueOptionsFormatted = valueOptionsFormatted.map((option) => {
      if (typeof option === "object") {
        return option;
      }
      const params = {
        field,
        api,
        value: option
      };
      return {
        value: option,
        label: String(colDef.valueFormatter(params))
      };
    });
  }
  const handleChange = async (event) => {
    var _rootProps$experiment;
    setOpen(false);
    const target = event.target;
    const formattedTargetValue = getValueFromValueOptions(target.value, valueOptionsFormatted);
    if (onValueChange) {
      await onValueChange(event, formattedTargetValue);
    }
    const isValid = await apiRef.current.setEditCellValue({
      id,
      field,
      value: formattedTargetValue
    }, event);
    if ((_rootProps$experiment = rootProps.experimentalFeatures) != null && _rootProps$experiment.newEditingApi) {
      return;
    }
    if (rootProps.editMode === GridEditModes.Row || isValid === false) {
      return;
    }
    const canCommit = await Promise.resolve(apiRef.current.commitCellChange({
      id,
      field
    }, event));
    if (canCommit) {
      apiRef.current.setCellMode(id, field, "view");
      if (event.key) {
        const params = apiRef.current.getCellParams(id, field);
        apiRef.current.publishEvent("cellNavigationKeyDown", params, event);
      }
    }
  };
  const handleClose = (event, reason) => {
    if (rootProps.editMode === GridEditModes.Row) {
      setOpen(false);
      return;
    }
    if (reason === "backdropClick" || isEscapeKey(event.key)) {
      var _rootProps$experiment2;
      if ((_rootProps$experiment2 = rootProps.experimentalFeatures) != null && _rootProps$experiment2.newEditingApi) {
        apiRef.current.stopCellEditMode({
          id,
          field,
          ignoreModifications: true
        });
      } else {
        apiRef.current.setCellMode(id, field, "view");
      }
    }
  };
  const handleOpen = (event) => {
    if (isKeyboardEvent2(event) && event.key === "Enter") {
      return;
    }
    setOpen(true);
  };
  useEnhancedEffect_default(() => {
    if (hasFocus) {
      inputRef.current.focus();
    }
  }, [hasFocus]);
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(rootProps.components.BaseSelect, _extends({
    ref,
    inputRef,
    value,
    onChange: handleChange,
    open,
    onOpen: handleOpen,
    MenuProps: {
      onClose: handleClose
    },
    error,
    native: isSelectNative,
    fullWidth: true
  }, other, (_rootProps$components2 = rootProps.componentsProps) == null ? void 0 : _rootProps$components2.baseSelect, {
    children: valueOptionsFormatted.map((valueOptions) => renderSingleSelectOptions2(valueOptions, isSelectNative ? "option" : MenuItem_default))
  }));
}
true ? GridEditSingleSelectCell.propTypes = {
  api: import_prop_types10.default.any.isRequired,
  cellMode: import_prop_types10.default.oneOf(["edit", "view"]).isRequired,
  changeReason: import_prop_types10.default.oneOf(["debouncedSetEditCellValue", "setEditCellValue"]),
  colDef: import_prop_types10.default.object.isRequired,
  field: import_prop_types10.default.string.isRequired,
  formattedValue: import_prop_types10.default.any,
  getValue: import_prop_types10.default.func.isRequired,
  hasFocus: import_prop_types10.default.bool.isRequired,
  id: import_prop_types10.default.oneOfType([import_prop_types10.default.number, import_prop_types10.default.string]).isRequired,
  initialOpen: import_prop_types10.default.bool,
  isEditable: import_prop_types10.default.bool,
  isProcessingProps: import_prop_types10.default.bool,
  isValidating: import_prop_types10.default.bool,
  onValueChange: import_prop_types10.default.func,
  row: import_prop_types10.default.object.isRequired,
  rowNode: import_prop_types10.default.object.isRequired,
  tabIndex: import_prop_types10.default.oneOf([-1, 0]).isRequired,
  value: import_prop_types10.default.any
} : void 0;
var renderEditSingleSelectCell = (params) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(GridEditSingleSelectCell, _extends({}, params));

// node_modules/@mui/x-data-grid/components/cell/GridActionsCell.js
init_extends();
init_objectWithoutPropertiesLoose();
var React23 = __toESM(require_react());
var import_prop_types12 = __toESM(require_prop_types());
init_utils();

// node_modules/@mui/x-data-grid/components/menu/GridMenu.js
init_extends();
init_objectWithoutPropertiesLoose();
var React22 = __toESM(require_react());
var import_prop_types11 = __toESM(require_prop_types());
init_clsx_m();
init_esm();
var import_jsx_runtime17 = __toESM(require_jsx_runtime());
var _excluded9 = ["open", "target", "onClickAway", "children", "position", "className", "onExited"];
var useUtilityClasses7 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["menu"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
var GridMenuRoot = styled_default(Popper_default, {
  name: "MuiDataGrid",
  slot: "Menu",
  overridesResolver: (props, styles) => styles.menu
})(({
  theme: theme2
}) => ({
  zIndex: theme2.zIndex.modal,
  [`& .${gridClasses.menuList}`]: {
    outline: 0
  }
}));
var transformOrigin = {
  "bottom-start": "top left",
  "bottom-end": "top right"
};
var GridMenu = (props) => {
  var _rootProps$components;
  const {
    open,
    target,
    onClickAway,
    children,
    position,
    className,
    onExited
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded9);
  const apiRef = useGridApiContext();
  const prevTarget = React22.useRef(target);
  const prevOpen = React22.useRef(open);
  const rootProps = useGridRootProps();
  const ownerState = {
    classes: rootProps.classes
  };
  const classes = useUtilityClasses7(ownerState);
  React22.useEffect(() => {
    if (prevOpen.current && prevTarget.current) {
      prevTarget.current.focus();
    }
    const eventName = open ? "menuOpen" : "menuClose";
    apiRef.current.publishEvent(eventName, {
      target
    });
    prevOpen.current = open;
    prevTarget.current = target;
  }, [apiRef, open, target]);
  const handleExited = (popperOnExited) => (node) => {
    if (popperOnExited) {
      popperOnExited();
    }
    if (onExited) {
      onExited(node);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(GridMenuRoot, _extends({
    as: rootProps.components.BasePopper,
    className: clsx_m_default(className, classes.root),
    open,
    anchorEl: target,
    transition: true,
    placement: position
  }, other, (_rootProps$components = rootProps.componentsProps) == null ? void 0 : _rootProps$components.basePopper, {
    children: ({
      TransitionProps,
      placement
    }) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(ClickAwayListener_default, {
      onClickAway,
      mouseEvent: "onMouseDown",
      children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Grow_default, _extends({}, TransitionProps, {
        style: {
          transformOrigin: transformOrigin[placement]
        },
        onExited: handleExited(TransitionProps == null ? void 0 : TransitionProps.onExited),
        children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Paper_default, {
          children
        })
      }))
    })
  }));
};
true ? GridMenu.propTypes = {
  children: import_prop_types11.default.node,
  onClickAway: import_prop_types11.default.func.isRequired,
  onExited: import_prop_types11.default.func,
  open: import_prop_types11.default.bool.isRequired,
  position: import_prop_types11.default.oneOf(["bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  target: HTMLElementType
} : void 0;

// node_modules/@mui/x-data-grid/components/cell/GridActionsCell.js
var import_jsx_runtime18 = __toESM(require_jsx_runtime());
var import_jsx_runtime19 = __toESM(require_jsx_runtime());
var _excluded10 = ["colDef", "id", "api", "hasFocus", "isEditable", "field", "value", "formattedValue", "row", "rowNode", "cellMode", "getValue", "tabIndex", "position", "focusElementRef"];
var hasActions = (colDef) => typeof colDef.getActions === "function";
var GridActionsCell = (props) => {
  const {
    colDef,
    id,
    hasFocus,
    tabIndex,
    position = "bottom-end",
    focusElementRef
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded10);
  const [focusedButtonIndex, setFocusedButtonIndex] = React23.useState(-1);
  const [open, setOpen] = React23.useState(false);
  const apiRef = useGridApiContext();
  const rootRef = React23.useRef(null);
  const buttonRef = React23.useRef(null);
  const ignoreCallToFocus = React23.useRef(false);
  const touchRippleRefs = React23.useRef({});
  const menuId = useId_default();
  const buttonId = useId_default();
  const rootProps = useGridRootProps();
  React23.useLayoutEffect(() => {
    if (!hasFocus) {
      Object.entries(touchRippleRefs.current).forEach(([index, ref]) => {
        ref == null ? void 0 : ref.stop({}, () => {
          delete touchRippleRefs.current[index];
        });
      });
    }
  }, [hasFocus]);
  React23.useEffect(() => {
    if (focusedButtonIndex < 0 || !rootRef.current) {
      return;
    }
    if (focusedButtonIndex >= rootRef.current.children.length) {
      return;
    }
    const child = rootRef.current.children[focusedButtonIndex];
    child.focus();
  }, [focusedButtonIndex]);
  React23.useEffect(() => {
    if (!hasFocus) {
      setFocusedButtonIndex(-1);
      ignoreCallToFocus.current = false;
    }
  }, [hasFocus]);
  React23.useImperativeHandle(focusElementRef, () => ({
    focus() {
      if (!ignoreCallToFocus.current) {
        setFocusedButtonIndex(0);
      }
    }
  }), []);
  if (!hasActions(colDef)) {
    throw new Error("MUI: Missing the `getActions` property in the `GridColDef`.");
  }
  const options = colDef.getActions(apiRef.current.getRowParams(id));
  const iconButtons = options.filter((option) => !option.props.showInMenu);
  const menuButtons = options.filter((option) => option.props.showInMenu);
  const numberOfButtons = iconButtons.length + (menuButtons.length ? 1 : 0);
  React23.useEffect(() => {
    if (focusedButtonIndex >= numberOfButtons) {
      setFocusedButtonIndex(numberOfButtons - 1);
    }
  }, [focusedButtonIndex, numberOfButtons]);
  const showMenu = () => {
    setOpen(true);
    setFocusedButtonIndex(numberOfButtons - 1);
    ignoreCallToFocus.current = true;
  };
  const hideMenu = () => {
    setOpen(false);
  };
  const handleTouchRippleRef = (index) => (instance) => {
    touchRippleRefs.current[index] = instance;
  };
  const handleButtonClick = (index, onClick) => (event) => {
    setFocusedButtonIndex(index);
    ignoreCallToFocus.current = true;
    if (onClick) {
      onClick(event);
    }
  };
  const handleRootKeyDown = (event) => {
    if (numberOfButtons <= 1) {
      return;
    }
    let newIndex = focusedButtonIndex;
    if (event.key === "ArrowRight") {
      newIndex += 1;
    } else if (event.key === "ArrowLeft") {
      newIndex -= 1;
    }
    if (newIndex < 0 || newIndex >= numberOfButtons) {
      return;
    }
    if (newIndex !== focusedButtonIndex) {
      event.preventDefault();
      event.stopPropagation();
      setFocusedButtonIndex(newIndex);
    }
  };
  const handleListKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
    }
    if (["Tab", "Enter", "Escape"].includes(event.key)) {
      hideMenu();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", _extends({
    role: "menu",
    ref: rootRef,
    tabIndex: -1,
    className: gridClasses.actionsCell,
    onKeyDown: handleRootKeyDown
  }, other, {
    children: [iconButtons.map((button, index) => /* @__PURE__ */ React23.cloneElement(button, {
      key: index,
      touchRippleRef: handleTouchRippleRef(index),
      onClick: handleButtonClick(index, button.props.onClick),
      tabIndex: focusedButtonIndex === index ? tabIndex : -1
    })), menuButtons.length > 0 && buttonId && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(IconButton_default, {
      ref: buttonRef,
      id: buttonId,
      "aria-label": apiRef.current.getLocaleText("actionsCellMore"),
      "aria-controls": menuId,
      "aria-expanded": open ? "true" : void 0,
      "aria-haspopup": "true",
      role: "menuitem",
      size: "small",
      onClick: showMenu,
      touchRippleRef: handleTouchRippleRef(buttonId),
      tabIndex: focusedButtonIndex === iconButtons.length ? tabIndex : -1,
      children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(rootProps.components.MoreActionsIcon, {
        fontSize: "small"
      })
    }), menuButtons.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(GridMenu, {
      onClickAway: hideMenu,
      onClick: hideMenu,
      open,
      target: buttonRef.current,
      position,
      children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(MenuList_default, {
        id: menuId,
        className: gridClasses.menuList,
        onKeyDown: handleListKeyDown,
        "aria-labelledby": buttonId,
        variant: "menu",
        autoFocusItem: true,
        children: menuButtons.map((button, index) => /* @__PURE__ */ React23.cloneElement(button, {
          key: index
        }))
      })
    })]
  }));
};
true ? GridActionsCell.propTypes = {
  api: import_prop_types12.default.any.isRequired,
  cellMode: import_prop_types12.default.oneOf(["edit", "view"]).isRequired,
  colDef: import_prop_types12.default.object.isRequired,
  field: import_prop_types12.default.string.isRequired,
  focusElementRef: import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.shape({
    current: import_prop_types12.default.shape({
      focus: import_prop_types12.default.func.isRequired
    })
  })]),
  formattedValue: import_prop_types12.default.any,
  getValue: import_prop_types12.default.func.isRequired,
  hasFocus: import_prop_types12.default.bool.isRequired,
  id: import_prop_types12.default.oneOfType([import_prop_types12.default.number, import_prop_types12.default.string]).isRequired,
  isEditable: import_prop_types12.default.bool,
  position: import_prop_types12.default.oneOf(["bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  row: import_prop_types12.default.object.isRequired,
  rowNode: import_prop_types12.default.object.isRequired,
  tabIndex: import_prop_types12.default.oneOf([-1, 0]).isRequired,
  value: import_prop_types12.default.any
} : void 0;
var renderActionsCell = (params) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(GridActionsCell, _extends({}, params));

// node_modules/@mui/x-data-grid/components/cell/GridSkeletonCell.js
init_extends();
init_objectWithoutPropertiesLoose();
var React24 = __toESM(require_react());
var import_prop_types13 = __toESM(require_prop_types());
init_utils();
var import_jsx_runtime20 = __toESM(require_jsx_runtime());
var _excluded11 = ["field", "align", "width", "contentWidth"];
var useUtilityClasses8 = (ownerState) => {
  const {
    align,
    classes
  } = ownerState;
  const slots = {
    root: ["cell", "cellSkeleton", `cell--text${capitalize_default(align)}`]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
function GridSkeletonCell(props) {
  const {
    align,
    width,
    contentWidth
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded11);
  const rootProps = useGridRootProps();
  const ownerState = {
    classes: rootProps.classes,
    align
  };
  const classes = useUtilityClasses8(ownerState);
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", _extends({
    className: classes.root,
    style: {
      width
    }
  }, other, {
    children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Skeleton_default, {
      width: `${contentWidth}%`
    })
  }));
}
true ? GridSkeletonCell.propTypes = {
  align: import_prop_types13.default.string.isRequired,
  contentWidth: import_prop_types13.default.number.isRequired,
  field: import_prop_types13.default.string.isRequired,
  width: import_prop_types13.default.number.isRequired
} : void 0;

// node_modules/@mui/x-data-grid/components/containers/GridRoot.js
init_extends();
init_objectWithoutPropertiesLoose();
var React25 = __toESM(require_react());
var import_prop_types14 = __toESM(require_prop_types());
init_clsx_m();
init_utils();

// node_modules/@mui/x-data-grid/components/containers/GridRootStyles.js
init_extends();
var GridRootStyles = styled_default("div", {
  name: "MuiDataGrid",
  slot: "Root",
  overridesResolver: (props, styles) => [
    {
      [`&.${gridClasses.autoHeight}`]: styles.autoHeight
    },
    {
      [`&.${gridClasses.aggregationColumnHeader}`]: styles.aggregationColumnHeader
    },
    {
      [`&.${gridClasses["aggregationColumnHeader--alignLeft"]}`]: styles["aggregationColumnHeader--alignLeft"]
    },
    {
      [`&.${gridClasses["aggregationColumnHeader--alignCenter"]}`]: styles["aggregationColumnHeader--alignCenter"]
    },
    {
      [`&.${gridClasses["aggregationColumnHeader--alignRight"]}`]: styles["aggregationColumnHeader--alignRight"]
    },
    {
      [`&.${gridClasses.aggregationColumnHeaderLabel}`]: styles.aggregationColumnHeaderLabel
    },
    {
      [`& .${gridClasses.editBooleanCell}`]: styles.editBooleanCell
    },
    {
      [`& .${gridClasses["cell--editing"]}`]: styles["cell--editing"]
    },
    {
      [`& .${gridClasses["cell--textCenter"]}`]: styles["cell--textCenter"]
    },
    {
      [`& .${gridClasses["cell--textLeft"]}`]: styles["cell--textLeft"]
    },
    {
      [`& .${gridClasses["cell--textRight"]}`]: styles["cell--textRight"]
    },
    {
      [`& .${gridClasses["cell--withRenderer"]}`]: styles["cell--withRenderer"]
    },
    {
      [`& .${gridClasses.cell}`]: styles.cell
    },
    {
      [`& .${gridClasses.cellContent}`]: styles.cellContent
    },
    {
      [`& .${gridClasses.cellCheckbox}`]: styles.cellCheckbox
    },
    {
      [`& .${gridClasses.cellSkeleton}`]: styles.cellSkeleton
    },
    {
      [`& .${gridClasses.checkboxInput}`]: styles.checkboxInput
    },
    {
      [`& .${gridClasses["columnHeader--alignCenter"]}`]: styles["columnHeader--alignCenter"]
    },
    {
      [`& .${gridClasses["columnHeader--alignLeft"]}`]: styles["columnHeader--alignLeft"]
    },
    {
      [`& .${gridClasses["columnHeader--alignRight"]}`]: styles["columnHeader--alignRight"]
    },
    {
      [`& .${gridClasses["columnHeader--dragging"]}`]: styles["columnHeader--dragging"]
    },
    {
      [`& .${gridClasses["columnHeader--moving"]}`]: styles["columnHeader--moving"]
    },
    {
      [`& .${gridClasses["columnHeader--numeric"]}`]: styles["columnHeader--numeric"]
    },
    {
      [`& .${gridClasses["columnHeader--sortable"]}`]: styles["columnHeader--sortable"]
    },
    {
      [`& .${gridClasses["columnHeader--sorted"]}`]: styles["columnHeader--sorted"]
    },
    {
      [`& .${gridClasses.columnHeader}`]: styles.columnHeader
    },
    {
      [`& .${gridClasses.columnHeaderCheckbox}`]: styles.columnHeaderCheckbox
    },
    {
      [`& .${gridClasses.columnHeaderDraggableContainer}`]: styles.columnHeaderDraggableContainer
    },
    {
      [`& .${gridClasses.columnHeaderTitleContainer}`]: styles.columnHeaderTitleContainer
    },
    {
      [`& .${gridClasses["columnSeparator--resizable"]}`]: styles["columnSeparator--resizable"]
    },
    {
      [`& .${gridClasses["columnSeparator--resizing"]}`]: styles["columnSeparator--resizing"]
    },
    {
      [`& .${gridClasses.columnSeparator}`]: styles.columnSeparator
    },
    {
      [`& .${gridClasses.filterIcon}`]: styles.filterIcon
    },
    {
      [`& .${gridClasses.iconSeparator}`]: styles.iconSeparator
    },
    {
      [`& .${gridClasses.menuIcon}`]: styles.menuIcon
    },
    {
      [`& .${gridClasses.menuIconButton}`]: styles.menuIconButton
    },
    {
      [`& .${gridClasses.menuOpen}`]: styles.menuOpen
    },
    {
      [`& .${gridClasses.menuList}`]: styles.menuList
    },
    {
      [`& .${gridClasses["row--editable"]}`]: styles["row--editable"]
    },
    {
      [`& .${gridClasses["row--editing"]}`]: styles["row--editing"]
    },
    {
      [`& .${gridClasses["row--dragging"]}`]: styles["row--dragging"]
    },
    {
      [`& .${gridClasses.row}`]: styles.row
    },
    {
      [`& .${gridClasses.rowReorderCellPlaceholder}`]: styles.rowReorderCellPlaceholder
    },
    {
      [`& .${gridClasses.rowReorderCell}`]: styles.rowReorderCell
    },
    {
      [`& .${gridClasses["rowReorderCell--draggable"]}`]: styles["rowReorderCell--draggable"]
    },
    {
      [`& .${gridClasses.sortIcon}`]: styles.sortIcon
    },
    {
      [`& .${gridClasses.withBorder}`]: styles.withBorder
    },
    {
      [`& .${gridClasses.treeDataGroupingCell}`]: styles.treeDataGroupingCell
    },
    {
      [`& .${gridClasses.treeDataGroupingCellToggle}`]: styles.treeDataGroupingCellToggle
    },
    {
      [`& .${gridClasses.detailPanelToggleCell}`]: styles.detailPanelToggleCell
    },
    {
      [`& .${gridClasses["detailPanelToggleCell--expanded"]}`]: styles["detailPanelToggleCell--expanded"]
    },
    styles.root
  ]
})(({
  theme: theme2
}) => {
  const borderColor = theme2.palette.mode === "light" ? lighten(alpha(theme2.palette.divider, 1), 0.88) : darken(alpha(theme2.palette.divider, 1), 0.68);
  const gridStyle = _extends({
    flex: 1,
    boxSizing: "border-box",
    position: "relative",
    border: `1px solid ${borderColor}`,
    borderRadius: theme2.shape.borderRadius,
    color: theme2.palette.text.primary
  }, theme2.typography.body2, {
    outline: "none",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    [`&.${gridClasses.autoHeight}`]: {
      height: "auto",
      [`& .${gridClasses["row--lastVisible"]} .${gridClasses.cell}`]: {
        borderBottomColor: "transparent"
      }
    },
    [`& .${gridClasses["virtualScrollerContent--overflowed"]} .${gridClasses["row--lastVisible"]} .${gridClasses.cell}`]: {
      borderBottomColor: "transparent"
    },
    [`& .${gridClasses.columnHeader}, & .${gridClasses.cell}`]: {
      WebkitTapHighlightColor: "transparent",
      lineHeight: null,
      padding: "0 10px",
      boxSizing: "border-box"
    },
    [`& .${gridClasses.columnHeader}:focus-within, & .${gridClasses.cell}:focus-within`]: {
      outline: `solid ${alpha(theme2.palette.primary.main, 0.5)} 1px`,
      outlineWidth: 1,
      outlineOffset: -1
    },
    [`& .${gridClasses.columnHeader}:focus, & .${gridClasses.cell}:focus`]: {
      outline: `solid ${theme2.palette.primary.main} 1px`
    },
    [`& .${gridClasses.columnHeaderCheckbox}, & .${gridClasses.cellCheckbox}`]: {
      padding: 0,
      justifyContent: "center",
      alignItems: "center"
    },
    [`& .${gridClasses.columnHeader}`]: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    },
    [`& .${gridClasses["columnHeader--sorted"]} .${gridClasses.iconButtonContainer}, & .${gridClasses["columnHeader--filtered"]} .${gridClasses.iconButtonContainer}`]: {
      visibility: "visible",
      width: "auto"
    },
    [`& .${gridClasses.columnHeader}:not(.${gridClasses["columnHeader--sorted"]}) .${gridClasses.sortIcon}`]: {
      opacity: 0,
      transition: theme2.transitions.create(["opacity"], {
        duration: theme2.transitions.duration.shorter
      })
    },
    [`& .${gridClasses.columnHeader}:not(.${gridClasses["columnHeader--sorted"]}):hover .${gridClasses.sortIcon}`]: {
      opacity: 0.5
    },
    [`& .${gridClasses.columnHeaderTitleContainer}`]: {
      display: "flex",
      alignItems: "center",
      minWidth: 0,
      flex: 1,
      whiteSpace: "nowrap",
      overflow: "hidden"
    },
    [`& .${gridClasses.columnHeaderTitleContainerContent}`]: {
      overflow: "hidden",
      display: "flex",
      alignItems: "center"
    },
    [`& .${gridClasses["columnHeader--filledGroup"]} .${gridClasses.columnHeaderTitleContainer}`]: {
      borderBottom: `solid ${borderColor} 1px`,
      boxSizing: "border-box"
    },
    [`& .${gridClasses["columnHeader--filledGroup"]}.${gridClasses["columnHeader--showColumnBorder"]} .${gridClasses.columnHeaderTitleContainer}`]: {
      borderBottom: `none`
    },
    [`& .${gridClasses["columnHeader--filledGroup"]}.${gridClasses["columnHeader--showColumnBorder"]}`]: {
      borderBottom: `solid ${borderColor} 1px`,
      boxSizing: "border-box"
    },
    [`& .${gridClasses.sortIcon}, & .${gridClasses.filterIcon}`]: {
      fontSize: "inherit"
    },
    [`& .${gridClasses["columnHeader--sortable"]}`]: {
      cursor: "pointer"
    },
    [`& .${gridClasses["columnHeader--alignCenter"]} .${gridClasses.columnHeaderTitleContainer}`]: {
      justifyContent: "center"
    },
    [`& .${gridClasses["columnHeader--alignRight"]} .${gridClasses.columnHeaderDraggableContainer}, & .${gridClasses["columnHeader--alignRight"]} .${gridClasses.columnHeaderTitleContainer}`]: {
      flexDirection: "row-reverse"
    },
    [`& .${gridClasses["columnHeader--alignCenter"]} .${gridClasses.menuIcon}, & .${gridClasses["columnHeader--alignRight"]} .${gridClasses.menuIcon}`]: {
      marginRight: "auto",
      marginLeft: -6
    },
    [`& .${gridClasses["columnHeader--alignRight"]} .${gridClasses.menuIcon}, & .${gridClasses["columnHeader--alignRight"]} .${gridClasses.menuIcon}`]: {
      marginRight: "auto",
      marginLeft: -10
    },
    [`& .${gridClasses["columnHeader--moving"]}`]: {
      backgroundColor: theme2.palette.action.hover
    },
    [`& .${gridClasses.columnSeparator}`]: {
      position: "absolute",
      zIndex: 100,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      color: borderColor
    },
    [`& .${gridClasses["columnSeparator--sideLeft"]}`]: {
      left: -12
    },
    [`& .${gridClasses["columnSeparator--sideRight"]}`]: {
      right: -12
    },
    [`& .${gridClasses["columnSeparator--resizable"]}`]: {
      cursor: "col-resize",
      touchAction: "none",
      "&:hover": {
        color: theme2.palette.text.primary,
        "@media (hover: none)": {
          color: borderColor
        }
      },
      [`&.${gridClasses["columnSeparator--resizing"]}`]: {
        color: theme2.palette.text.primary
      },
      "& svg": {
        pointerEvents: "none"
      }
    },
    [`& .${gridClasses.iconSeparator}`]: {
      color: "inherit"
    },
    [`& .${gridClasses.menuIcon}`]: {
      width: 0,
      visibility: "hidden",
      fontSize: 20,
      marginRight: -10,
      display: "flex",
      alignItems: "center"
    },
    [`& .${gridClasses.columnHeader}:hover`]: {
      [`& .${gridClasses.iconButtonContainer}`]: {
        visibility: "visible",
        width: "auto"
      },
      [`& .${gridClasses.menuIcon}`]: {
        width: "auto",
        visibility: "visible"
      }
    },
    [`.${gridClasses.menuOpen}`]: {
      visibility: "visible",
      width: "auto"
    },
    [`& .${gridClasses.row}`]: {
      display: "flex",
      width: "fit-content",
      breakInside: "avoid",
      "&:hover, &.Mui-hovered": {
        backgroundColor: theme2.palette.action.hover,
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      },
      "&.Mui-selected": {
        backgroundColor: alpha(theme2.palette.primary.main, theme2.palette.action.selectedOpacity),
        "&:hover, &.Mui-hovered": {
          backgroundColor: alpha(theme2.palette.primary.main, theme2.palette.action.selectedOpacity + theme2.palette.action.hoverOpacity),
          "@media (hover: none)": {
            backgroundColor: alpha(theme2.palette.primary.main, theme2.palette.action.selectedOpacity)
          }
        }
      }
    },
    [`& .${gridClasses.cell}`]: {
      display: "flex",
      alignItems: "center",
      borderBottom: `1px solid ${borderColor}`
    },
    [`& .${gridClasses.row}:not(.${gridClasses["row--dynamicHeight"]}) > .${gridClasses.cell}`]: {
      overflow: "hidden",
      whiteSpace: "nowrap"
    },
    [`& .${gridClasses.cellContent}`]: {
      overflow: "hidden",
      textOverflow: "ellipsis"
    },
    [`& .${gridClasses.cell}.${gridClasses["cell--editing"]}`]: {
      padding: 1,
      display: "flex",
      boxShadow: theme2.shadows[2],
      backgroundColor: theme2.palette.background.paper,
      "&:focus-within": {
        outline: `solid ${theme2.palette.primary.main} 1px`,
        outlineOffset: "-1px"
      }
    },
    [`& .${gridClasses["row--editing"]}`]: {
      boxShadow: theme2.shadows[2]
    },
    [`& .${gridClasses["row--editing"]} .${gridClasses.cell}`]: {
      boxShadow: theme2.shadows[0],
      backgroundColor: theme2.palette.background.paper
    },
    [`& .${gridClasses.editBooleanCell}`]: {
      display: "flex",
      height: "100%",
      width: "100%",
      alignItems: "center",
      justifyContent: "center"
    },
    [`& .${gridClasses.booleanCell}[data-value="true"]`]: {
      color: theme2.palette.text.secondary
    },
    [`& .${gridClasses.booleanCell}[data-value="false"]`]: {
      color: theme2.palette.text.disabled
    },
    [`& .${gridClasses.actionsCell}`]: {
      display: "inline-flex",
      alignItems: "center",
      gridGap: theme2.spacing(1)
    },
    [`& .${gridClasses.rowReorderCell}`]: {
      display: "inline-flex",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      opacity: theme2.palette.action.disabledOpacity
    },
    [`& .${gridClasses["rowReorderCell--draggable"]}`]: {
      cursor: "move",
      opacity: 1
    },
    [`& .${gridClasses.rowReorderCellContainer}`]: {
      padding: 0,
      alignItems: "stretch"
    },
    [`& .${gridClasses.withBorder}`]: {
      borderRight: `1px solid ${borderColor}`
    },
    [`& .${gridClasses["cell--textLeft"]}`]: {
      justifyContent: "flex-start"
    },
    [`& .${gridClasses["cell--textRight"]}`]: {
      justifyContent: "flex-end"
    },
    [`& .${gridClasses["cell--textCenter"]}`]: {
      justifyContent: "center"
    },
    [`& .${gridClasses.columnHeaderDraggableContainer}`]: {
      display: "flex",
      width: "100%",
      height: "100%"
    },
    [`& .${gridClasses.rowReorderCellPlaceholder}`]: {
      display: "none"
    },
    [`& .${gridClasses["columnHeader--dragging"]}, & .${gridClasses["row--dragging"]}`]: {
      background: theme2.palette.background.paper,
      padding: "0 12px",
      borderRadius: theme2.shape.borderRadius,
      opacity: theme2.palette.action.disabledOpacity
    },
    [`& .${gridClasses["row--dragging"]}`]: {
      background: theme2.palette.background.paper,
      padding: "0 12px",
      borderRadius: theme2.shape.borderRadius,
      opacity: theme2.palette.action.disabledOpacity,
      [`& .${gridClasses.rowReorderCellPlaceholder}`]: {
        display: "flex"
      }
    },
    [`& .${gridClasses.treeDataGroupingCell}`]: {
      display: "flex",
      alignItems: "center",
      width: "100%"
    },
    [`& .${gridClasses.treeDataGroupingCellToggle}`]: {
      flex: "0 0 28px",
      alignSelf: "stretch",
      marginRight: theme2.spacing(2)
    },
    [`& .${gridClasses.groupingCriteriaCell}`]: {
      display: "flex",
      alignItems: "center",
      width: "100%"
    },
    [`& .${gridClasses.groupingCriteriaCellToggle}`]: {
      flex: "0 0 28px",
      alignSelf: "stretch",
      marginRight: theme2.spacing(2)
    }
  });
  return gridStyle;
});

// node_modules/@mui/x-data-grid/components/containers/GridRoot.js
var import_jsx_runtime21 = __toESM(require_jsx_runtime());
var _excluded12 = ["children", "className"];
var useUtilityClasses9 = (ownerState) => {
  const {
    autoHeight,
    density,
    classes
  } = ownerState;
  const slots = {
    root: ["root", autoHeight && "autoHeight", `root--density${capitalize_default(density)}`]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
var GridRoot = /* @__PURE__ */ React25.forwardRef(function GridRoot2(props, ref) {
  const rootProps = useGridRootProps();
  const {
    children,
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded12);
  const apiRef = useGridApiContext();
  const visibleColumns = useGridSelector(apiRef, gridVisibleColumnDefinitionsSelector);
  const totalRowCount = useGridSelector(apiRef, gridRowCountSelector);
  const densityValue = useGridSelector(apiRef, gridDensityValueSelector);
  const headerGroupingMaxDepth = useGridSelector(apiRef, gridDensityHeaderGroupingMaxDepthSelector);
  const rootContainerRef = React25.useRef(null);
  const handleRef = useForkRef_default(rootContainerRef, ref);
  const pinnedRowsCount = useGridSelector(apiRef, gridPinnedRowsCountSelector);
  const ownerState = {
    density: densityValue,
    classes: rootProps.classes,
    autoHeight: rootProps.autoHeight
  };
  const classes = useUtilityClasses9(ownerState);
  apiRef.current.rootElementRef = rootContainerRef;
  const [mountedState, setMountedState] = React25.useState(false);
  useEnhancedEffect_default(() => {
    setMountedState(true);
  }, []);
  useEnhancedEffect_default(() => {
    if (mountedState) {
      apiRef.current.unstable_updateGridDimensionsRef();
    }
  }, [apiRef, mountedState]);
  if (!mountedState) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(GridRootStyles, _extends({
    ref: handleRef,
    className: clsx_m_default(className, classes.root),
    role: "grid",
    "aria-colcount": visibleColumns.length,
    "aria-rowcount": headerGroupingMaxDepth + 1 + pinnedRowsCount + totalRowCount,
    "aria-multiselectable": !rootProps.disableMultipleSelection,
    "aria-label": rootProps["aria-label"],
    "aria-labelledby": rootProps["aria-labelledby"]
  }, other, {
    children
  }));
});
true ? GridRoot.propTypes = {
  sx: import_prop_types14.default.oneOfType([import_prop_types14.default.arrayOf(import_prop_types14.default.oneOfType([import_prop_types14.default.func, import_prop_types14.default.object, import_prop_types14.default.bool])), import_prop_types14.default.func, import_prop_types14.default.object])
} : void 0;

// node_modules/@mui/x-data-grid/components/containers/GridFooterContainer.js
init_extends();
init_objectWithoutPropertiesLoose();
var React26 = __toESM(require_react());
var import_prop_types15 = __toESM(require_prop_types());
init_clsx_m();
var import_jsx_runtime22 = __toESM(require_jsx_runtime());
var _excluded13 = ["className"];
var useUtilityClasses10 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["footerContainer"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
var GridFooterContainerRoot = styled_default("div", {
  name: "MuiDataGrid",
  slot: "FooterContainer",
  overridesResolver: (props, styles) => styles.footerContainer
})(({
  theme: theme2
}) => {
  const borderColor = theme2.palette.mode === "light" ? lighten(alpha(theme2.palette.divider, 1), 0.88) : darken(alpha(theme2.palette.divider, 1), 0.68);
  return {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: 52,
    borderTop: `1px solid ${borderColor}`
  };
});
var GridFooterContainer = /* @__PURE__ */ React26.forwardRef(function GridFooterContainer2(props, ref) {
  const {
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded13);
  const rootProps = useGridRootProps();
  const ownerState = {
    classes: rootProps.classes
  };
  const classes = useUtilityClasses10(ownerState);
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(GridFooterContainerRoot, _extends({
    ref,
    className: clsx_m_default(classes.root, className)
  }, other));
});
true ? GridFooterContainer.propTypes = {
  sx: import_prop_types15.default.oneOfType([import_prop_types15.default.arrayOf(import_prop_types15.default.oneOfType([import_prop_types15.default.func, import_prop_types15.default.object, import_prop_types15.default.bool])), import_prop_types15.default.func, import_prop_types15.default.object])
} : void 0;

// node_modules/@mui/x-data-grid/components/containers/GridOverlay.js
init_extends();
init_objectWithoutPropertiesLoose();
var React27 = __toESM(require_react());
var import_prop_types16 = __toESM(require_prop_types());
init_clsx_m();
var import_jsx_runtime23 = __toESM(require_jsx_runtime());
var _excluded14 = ["className"];
var useUtilityClasses11 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["overlay"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
var GridOverlayRoot = styled_default("div", {
  name: "MuiDataGrid",
  slot: "Overlay",
  overridesResolver: (props, styles) => styles.overlay
})(({
  theme: theme2
}) => ({
  position: "absolute",
  top: 0,
  zIndex: 4,
  width: "100%",
  height: "100%",
  pointerEvents: "none",
  display: "flex",
  alignSelf: "center",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: alpha(theme2.palette.background.default, theme2.palette.action.disabledOpacity)
}));
var GridOverlay = /* @__PURE__ */ React27.forwardRef(function GridOverlay2(props, ref) {
  const {
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded14);
  const rootProps = useGridRootProps();
  const ownerState = {
    classes: rootProps.classes
  };
  const classes = useUtilityClasses11(ownerState);
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(GridOverlayRoot, _extends({
    ref,
    className: clsx_m_default(classes.root, className)
  }, other));
});
true ? GridOverlay.propTypes = {
  sx: import_prop_types16.default.oneOfType([import_prop_types16.default.arrayOf(import_prop_types16.default.oneOfType([import_prop_types16.default.func, import_prop_types16.default.object, import_prop_types16.default.bool])), import_prop_types16.default.func, import_prop_types16.default.object])
} : void 0;

// node_modules/@mui/x-data-grid/components/columnHeaders/GridColumnHeaderItem.js
init_extends();
var React35 = __toESM(require_react());
var import_prop_types21 = __toESM(require_prop_types());
init_utils();

// node_modules/@mui/x-data-grid/components/columnHeaders/GridColumnHeaderSortIcon.js
init_extends();
var React29 = __toESM(require_react());
var import_prop_types17 = __toESM(require_prop_types());

// node_modules/@mui/x-data-grid/components/columnHeaders/GridIconButtonContainer.js
init_extends();
init_objectWithoutPropertiesLoose();
var React28 = __toESM(require_react());
init_clsx_m();
var import_jsx_runtime24 = __toESM(require_jsx_runtime());
var _excluded15 = ["className"];
var useUtilityClasses12 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["iconButtonContainer"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
var GridIconButtonContainerRoot = styled_default("div", {
  name: "MuiDataGrid",
  slot: "IconButtonContainer",
  overridesResolver: (props, styles) => styles.iconButtonContainer
})(() => ({
  display: "flex",
  visibility: "hidden",
  width: 0
}));
var GridIconButtonContainer = /* @__PURE__ */ React28.forwardRef(function GridIconButtonContainer2(props, ref) {
  const {
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded15);
  const rootProps = useGridRootProps();
  const ownerState = {
    classes: rootProps.classes
  };
  const classes = useUtilityClasses12(ownerState);
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(GridIconButtonContainerRoot, _extends({
    ref,
    className: clsx_m_default(classes.root, className)
  }, other));
});

// node_modules/@mui/x-data-grid/components/columnHeaders/GridColumnHeaderSortIcon.js
var import_jsx_runtime25 = __toESM(require_jsx_runtime());
var import_jsx_runtime26 = __toESM(require_jsx_runtime());
var useUtilityClasses13 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    icon: ["sortIcon"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
function getIcon(icons, direction, className, sortingOrder) {
  let Icon;
  const iconProps = {};
  if (direction === "asc") {
    Icon = icons.ColumnSortedAscendingIcon;
  } else if (direction === "desc") {
    Icon = icons.ColumnSortedDescendingIcon;
  } else {
    Icon = icons.ColumnUnsortedIcon;
    iconProps.sortingOrder = sortingOrder;
  }
  return Icon ? /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Icon, _extends({
    fontSize: "small",
    className
  }, iconProps)) : null;
}
function GridColumnHeaderSortIconRaw(props) {
  const {
    direction,
    index,
    sortingOrder
  } = props;
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const ownerState = _extends({}, props, {
    classes: rootProps.classes
  });
  const classes = useUtilityClasses13(ownerState);
  const iconElement = getIcon(rootProps.components, direction, classes.icon, sortingOrder);
  if (!iconElement) {
    return null;
  }
  const iconButton = /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(IconButton_default, {
    tabIndex: -1,
    "aria-label": apiRef.current.getLocaleText("columnHeaderSortIconLabel"),
    title: apiRef.current.getLocaleText("columnHeaderSortIconLabel"),
    size: "small",
    children: iconElement
  });
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(GridIconButtonContainer, {
    children: [index != null && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Badge_default, {
      badgeContent: index,
      color: "default",
      children: iconButton
    }), index == null && iconButton]
  });
}
var GridColumnHeaderSortIcon = /* @__PURE__ */ React29.memo(GridColumnHeaderSortIconRaw);
true ? GridColumnHeaderSortIconRaw.propTypes = {
  direction: import_prop_types17.default.oneOf(["asc", "desc"]),
  index: import_prop_types17.default.number,
  sortingOrder: import_prop_types17.default.arrayOf(import_prop_types17.default.oneOf(["asc", "desc"])).isRequired
} : void 0;

// node_modules/@mui/x-data-grid/components/columnHeaders/ColumnHeaderMenuIcon.js
init_extends();
var React30 = __toESM(require_react());
var import_jsx_runtime27 = __toESM(require_jsx_runtime());
var useUtilityClasses14 = (ownerState) => {
  const {
    classes,
    open
  } = ownerState;
  const slots = {
    root: ["menuIcon", open && "menuOpen"],
    button: ["menuIconButton"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
var ColumnHeaderMenuIcon = /* @__PURE__ */ React30.memo((props) => {
  const {
    column,
    open,
    columnMenuId,
    columnMenuButtonId,
    iconButtonRef
  } = props;
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const ownerState = _extends({}, props, {
    classes: rootProps.classes
  });
  const classes = useUtilityClasses14(ownerState);
  const handleMenuIconClick = React30.useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    apiRef.current.toggleColumnMenu(column.field);
  }, [apiRef, column.field]);
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", {
    className: classes.root,
    children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(IconButton_default, {
      ref: iconButtonRef,
      tabIndex: -1,
      className: classes.button,
      "aria-label": apiRef.current.getLocaleText("columnMenuLabel"),
      title: apiRef.current.getLocaleText("columnMenuLabel"),
      size: "small",
      onClick: handleMenuIconClick,
      "aria-expanded": open ? "true" : void 0,
      "aria-haspopup": "true",
      "aria-controls": columnMenuId,
      id: columnMenuButtonId,
      children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(rootProps.components.ColumnMenuIcon, {
        fontSize: "small"
      })
    })
  });
});

// node_modules/@mui/x-data-grid/components/menu/columnMenu/GridColumnHeaderMenu.js
init_extends();
var React31 = __toESM(require_react());
var import_prop_types18 = __toESM(require_prop_types());
init_esm();
var import_jsx_runtime28 = __toESM(require_jsx_runtime());
function GridColumnHeaderMenu({
  columnMenuId,
  columnMenuButtonId,
  ContentComponent,
  contentComponentProps,
  field,
  open,
  target,
  onExited
}) {
  const apiRef = useGridApiContext();
  const currentColumn = apiRef.current.getColumn(field);
  const hideMenu = React31.useCallback((event) => {
    event.stopPropagation();
    apiRef.current.hideColumnMenu();
  }, [apiRef]);
  if (!target) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(GridMenu, {
    placement: `bottom-${currentColumn.align === "right" ? "start" : "end"}`,
    open,
    target,
    onClickAway: hideMenu,
    onExited,
    children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(ContentComponent, _extends({
      currentColumn,
      hideMenu,
      open,
      id: columnMenuId,
      labelledby: columnMenuButtonId
    }, contentComponentProps))
  });
}
true ? GridColumnHeaderMenu.propTypes = {
  columnMenuButtonId: import_prop_types18.default.string,
  columnMenuId: import_prop_types18.default.string,
  ContentComponent: import_prop_types18.default.elementType.isRequired,
  contentComponentProps: import_prop_types18.default.any,
  field: import_prop_types18.default.string.isRequired,
  onExited: import_prop_types18.default.func,
  open: import_prop_types18.default.bool.isRequired,
  target: HTMLElementType
} : void 0;

// node_modules/@mui/x-data-grid/components/columnHeaders/GridGenericColumnHeaderItem.js
init_extends();
init_objectWithoutPropertiesLoose();
var React34 = __toESM(require_react());
init_clsx_m();
init_utils();

// node_modules/@mui/x-data-grid/components/columnHeaders/GridColumnHeaderTitle.js
init_extends();
init_objectWithoutPropertiesLoose();
var React32 = __toESM(require_react());
var import_prop_types19 = __toESM(require_prop_types());
init_clsx_m();

// node_modules/@mui/x-data-grid/utils/domUtils.js
function isOverflown(element) {
  return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}
function findParentElementFromClassName(elem, className) {
  return elem.closest(`.${className}`);
}
function escapeOperandAttributeSelector(operand) {
  return operand.replace(/["\\]/g, "\\$&");
}
function getGridColumnHeaderElement(root, field) {
  return root.querySelector(`[role="columnheader"][data-field="${escapeOperandAttributeSelector(field)}"]`);
}
function getGridRowElement(root, id) {
  return root.querySelector(`.${gridClasses.row}[data-id="${escapeOperandAttributeSelector(String(id))}"]`);
}
function getGridCellElement(root, {
  id,
  field
}) {
  const row = getGridRowElement(root, id);
  if (!row) {
    return null;
  }
  return row.querySelector(`.${gridClasses.cell}[data-field="${escapeOperandAttributeSelector(field)}"]`);
}

// node_modules/@mui/x-data-grid/components/columnHeaders/GridColumnHeaderTitle.js
var import_jsx_runtime29 = __toESM(require_jsx_runtime());
var _excluded16 = ["className"];
var useUtilityClasses15 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["columnHeaderTitle"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
var GridColumnHeaderTitleRoot = styled_default("div", {
  name: "MuiDataGrid",
  slot: "ColumnHeaderTitle",
  overridesResolver: (props, styles) => styles.columnHeaderTitle
})(({
  theme: theme2
}) => ({
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
  fontWeight: theme2.typography.fontWeightMedium
}));
var ColumnHeaderInnerTitle = /* @__PURE__ */ React32.forwardRef(function ColumnHeaderInnerTitle2(props, ref) {
  const {
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded16);
  const rootProps = useGridRootProps();
  const ownerState = {
    classes: rootProps.classes
  };
  const classes = useUtilityClasses15(ownerState);
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(GridColumnHeaderTitleRoot, _extends({
    ref,
    className: clsx_m_default(classes.root, className)
  }, other));
});
function GridColumnHeaderTitle(props) {
  var _rootProps$components;
  const {
    label,
    description,
    columnWidth
  } = props;
  const rootProps = useGridRootProps();
  const titleRef = React32.useRef(null);
  const [tooltip, setTooltip] = React32.useState("");
  React32.useEffect(() => {
    if (!description && titleRef && titleRef.current) {
      const isOver = isOverflown(titleRef.current);
      if (isOver) {
        setTooltip(label);
      } else {
        setTooltip("");
      }
    }
  }, [titleRef, columnWidth, description, label]);
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(rootProps.components.BaseTooltip, _extends({
    title: description || tooltip
  }, (_rootProps$components = rootProps.componentsProps) == null ? void 0 : _rootProps$components.baseTooltip, {
    children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(ColumnHeaderInnerTitle, {
      ref: titleRef,
      children: label
    })
  }));
}
true ? GridColumnHeaderTitle.propTypes = {
  columnWidth: import_prop_types19.default.number.isRequired,
  description: import_prop_types19.default.node,
  label: import_prop_types19.default.string.isRequired
} : void 0;

// node_modules/@mui/x-data-grid/components/columnHeaders/GridColumnHeaderSeparator.js
init_extends();
init_objectWithoutPropertiesLoose();
var React33 = __toESM(require_react());
var import_prop_types20 = __toESM(require_prop_types());
init_utils();
var import_jsx_runtime30 = __toESM(require_jsx_runtime());
var _excluded17 = ["resizable", "resizing", "height", "side"];
var GridColumnHeaderSeparatorSides;
(function(GridColumnHeaderSeparatorSides2) {
  GridColumnHeaderSeparatorSides2["Left"] = "left";
  GridColumnHeaderSeparatorSides2["Right"] = "right";
})(GridColumnHeaderSeparatorSides || (GridColumnHeaderSeparatorSides = {}));
var useUtilityClasses16 = (ownerState) => {
  const {
    resizable,
    resizing,
    classes,
    side
  } = ownerState;
  const slots = {
    root: ["columnSeparator", resizable && "columnSeparator--resizable", resizing && "columnSeparator--resizing", side && `columnSeparator--side${capitalize_default(side)}`],
    icon: ["iconSeparator"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
function GridColumnHeaderSeparatorRaw(props) {
  const {
    height,
    side = GridColumnHeaderSeparatorSides.Right
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded17);
  const rootProps = useGridRootProps();
  const ownerState = _extends({}, props, {
    side,
    classes: rootProps.classes
  });
  const classes = useUtilityClasses16(ownerState);
  const stopClick = React33.useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", _extends({
    className: classes.root,
    style: {
      minHeight: height,
      opacity: rootProps.showColumnRightBorder ? 0 : 1
    }
  }, other, {
    onClick: stopClick,
    children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(rootProps.components.ColumnResizeIcon, {
      className: classes.icon
    })
  }));
}
var GridColumnHeaderSeparator = /* @__PURE__ */ React33.memo(GridColumnHeaderSeparatorRaw);
true ? GridColumnHeaderSeparatorRaw.propTypes = {
  height: import_prop_types20.default.number.isRequired,
  resizable: import_prop_types20.default.bool.isRequired,
  resizing: import_prop_types20.default.bool.isRequired,
  side: import_prop_types20.default.oneOf(["left", "right"])
} : void 0;

// node_modules/@mui/x-data-grid/components/columnHeaders/GridGenericColumnHeaderItem.js
var import_jsx_runtime31 = __toESM(require_jsx_runtime());
var import_jsx_runtime32 = __toESM(require_jsx_runtime());
var _excluded18 = ["classes", "columnMenuOpen", "colIndex", "height", "isResizing", "sortDirection", "hasFocus", "tabIndex", "separatorSide", "isDraggable", "headerComponent", "description", "elementId", "width", "columnMenuIconButton", "columnMenu", "columnTitleIconButtons", "headerClassName", "label", "resizable", "draggableContainerProps", "columnHeaderSeparatorProps", "disableHeaderSeparator"];
var GridGenericColumnHeaderItem = /* @__PURE__ */ React34.forwardRef(function GridGenericColumnHeaderItem2(props, ref) {
  const {
    classes,
    columnMenuOpen,
    colIndex,
    height,
    isResizing,
    sortDirection,
    hasFocus,
    tabIndex,
    separatorSide,
    isDraggable,
    headerComponent,
    description,
    width,
    columnMenuIconButton = null,
    columnMenu = null,
    columnTitleIconButtons = null,
    headerClassName,
    label,
    resizable,
    draggableContainerProps,
    columnHeaderSeparatorProps,
    disableHeaderSeparator
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded18);
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const headerCellRef = React34.useRef(null);
  const [showColumnMenuIcon, setShowColumnMenuIcon] = React34.useState(columnMenuOpen);
  const handleRef = useForkRef_default(headerCellRef, ref);
  let ariaSort = "none";
  if (sortDirection != null) {
    ariaSort = sortDirection === "asc" ? "ascending" : "descending";
  }
  React34.useEffect(() => {
    if (!showColumnMenuIcon) {
      setShowColumnMenuIcon(columnMenuOpen);
    }
  }, [showColumnMenuIcon, columnMenuOpen]);
  React34.useLayoutEffect(() => {
    const columnMenuState = apiRef.current.state.columnMenu;
    if (hasFocus && !columnMenuState.open) {
      const focusableElement = headerCellRef.current.querySelector('[tabindex="0"]');
      const elementToFocus = focusableElement || headerCellRef.current;
      elementToFocus == null ? void 0 : elementToFocus.focus();
      apiRef.current.columnHeadersContainerElementRef.current.scrollLeft = 0;
    }
  }, [apiRef, hasFocus]);
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", _extends({
    ref: handleRef,
    className: clsx_m_default(classes.root, headerClassName),
    style: {
      height,
      width,
      minWidth: width,
      maxWidth: width
    },
    role: "columnheader",
    tabIndex,
    "aria-colindex": colIndex + 1,
    "aria-sort": ariaSort,
    "aria-label": headerComponent == null ? label : void 0
  }, other, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", _extends({
      className: classes.draggableContainer,
      draggable: isDraggable
    }, draggableContainerProps, {
      children: [/* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", {
        className: classes.titleContainer,
        children: [/* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", {
          className: classes.titleContainerContent,
          children: headerComponent !== void 0 ? headerComponent : /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(GridColumnHeaderTitle, {
            label,
            description,
            columnWidth: width
          })
        }), columnTitleIconButtons]
      }), columnMenuIconButton]
    })), !disableHeaderSeparator && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(GridColumnHeaderSeparator, _extends({
      resizable: !rootProps.disableColumnResize && !!resizable,
      resizing: isResizing,
      height,
      side: separatorSide
    }, columnHeaderSeparatorProps)), columnMenu]
  }));
});

// node_modules/@mui/x-data-grid/components/columnHeaders/GridColumnHeaderItem.js
var import_jsx_runtime33 = __toESM(require_jsx_runtime());
var import_jsx_runtime34 = __toESM(require_jsx_runtime());
var useUtilityClasses17 = (ownerState) => {
  const {
    column,
    classes,
    isDragging,
    sortDirection,
    showRightBorder,
    filterItemsCounter
  } = ownerState;
  const isColumnSorted = sortDirection != null;
  const isColumnFiltered = filterItemsCounter != null && filterItemsCounter > 0;
  const isColumnNumeric = column.type === "number";
  const slots = {
    root: ["columnHeader", column.headerAlign === "left" && "columnHeader--alignLeft", column.headerAlign === "center" && "columnHeader--alignCenter", column.headerAlign === "right" && "columnHeader--alignRight", column.sortable && "columnHeader--sortable", isDragging && "columnHeader--moving", isColumnSorted && "columnHeader--sorted", isColumnFiltered && "columnHeader--filtered", isColumnNumeric && "columnHeader--numeric", showRightBorder && "withBorder"],
    draggableContainer: ["columnHeaderDraggableContainer"],
    titleContainer: ["columnHeaderTitleContainer"],
    titleContainerContent: ["columnHeaderTitleContainerContent"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
function GridColumnHeaderItem(props) {
  var _apiRef$current$getRo, _rootProps$components, _column$sortingOrder, _rootProps$components2, _column$headerName;
  const {
    column,
    columnMenuOpen,
    colIndex,
    headerHeight,
    isResizing,
    isLastColumn,
    sortDirection,
    sortIndex,
    filterItemsCounter,
    hasFocus,
    tabIndex,
    extendRowFullWidth,
    disableReorder,
    separatorSide
  } = props;
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const headerCellRef = React35.useRef(null);
  const columnMenuId = useId_default();
  const columnMenuButtonId = useId_default();
  const iconButtonRef = React35.useRef(null);
  const [showColumnMenuIcon, setShowColumnMenuIcon] = React35.useState(columnMenuOpen);
  const {
    hasScrollX,
    hasScrollY
  } = (_apiRef$current$getRo = apiRef.current.getRootDimensions()) != null ? _apiRef$current$getRo : {
    hasScrollX: false,
    hasScrollY: false
  };
  const isDraggable = React35.useMemo(() => !rootProps.disableColumnReorder && !disableReorder && !column.disableReorder, [rootProps.disableColumnReorder, disableReorder, column.disableReorder]);
  let headerComponent;
  if (column.renderHeader) {
    headerComponent = column.renderHeader(apiRef.current.getColumnHeaderParams(column.field));
  }
  const removeLastBorderRight = isLastColumn && hasScrollX && !hasScrollY;
  const showRightBorder = !isLastColumn ? rootProps.showColumnRightBorder : !removeLastBorderRight && !extendRowFullWidth;
  const ownerState = _extends({}, props, {
    classes: rootProps.classes,
    showRightBorder
  });
  const classes = useUtilityClasses17(ownerState);
  const publish = React35.useCallback((eventName) => (event) => {
    if (!event.currentTarget.contains(event.target)) {
      return;
    }
    apiRef.current.publishEvent(eventName, apiRef.current.getColumnHeaderParams(column.field), event);
  }, [apiRef, column.field]);
  const mouseEventsHandlers = React35.useMemo(() => ({
    onClick: publish("columnHeaderClick"),
    onDoubleClick: publish("columnHeaderDoubleClick"),
    onMouseOver: publish("columnHeaderOver"),
    onMouseOut: publish("columnHeaderOut"),
    onMouseEnter: publish("columnHeaderEnter"),
    onMouseLeave: publish("columnHeaderLeave"),
    onKeyDown: publish("columnHeaderKeyDown"),
    onFocus: publish("columnHeaderFocus"),
    onBlur: publish("columnHeaderBlur")
  }), [publish]);
  const draggableEventHandlers = React35.useMemo(() => isDraggable ? {
    onDragStart: publish("columnHeaderDragStart"),
    onDragEnter: publish("columnHeaderDragEnter"),
    onDragOver: publish("columnHeaderDragOver"),
    onDragEnd: publish("columnHeaderDragEnd")
  } : {}, [isDraggable, publish]);
  const columnHeaderSeparatorProps = React35.useMemo(() => ({
    onMouseDown: publish("columnSeparatorMouseDown")
  }), [publish]);
  React35.useEffect(() => {
    if (!showColumnMenuIcon) {
      setShowColumnMenuIcon(columnMenuOpen);
    }
  }, [showColumnMenuIcon, columnMenuOpen]);
  const handleExited = React35.useCallback(() => {
    setShowColumnMenuIcon(false);
  }, []);
  const columnMenuIconButton = !rootProps.disableColumnMenu && !column.disableColumnMenu && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(ColumnHeaderMenuIcon, {
    column,
    columnMenuId,
    columnMenuButtonId,
    open: showColumnMenuIcon,
    iconButtonRef
  });
  const columnMenu = /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(GridColumnHeaderMenu, {
    columnMenuId,
    columnMenuButtonId,
    field: column.field,
    open: columnMenuOpen,
    target: iconButtonRef.current,
    ContentComponent: rootProps.components.ColumnMenu,
    contentComponentProps: (_rootProps$components = rootProps.componentsProps) == null ? void 0 : _rootProps$components.columnMenu,
    onExited: handleExited
  });
  const sortingOrder = (_column$sortingOrder = column.sortingOrder) != null ? _column$sortingOrder : rootProps.sortingOrder;
  const columnTitleIconButtons = /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(React35.Fragment, {
    children: [!rootProps.disableColumnFilter && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(rootProps.components.ColumnHeaderFilterIconButton, _extends({
      field: column.field,
      counter: filterItemsCounter
    }, (_rootProps$components2 = rootProps.componentsProps) == null ? void 0 : _rootProps$components2.columnHeaderFilterIconButton)), column.sortable && !column.hideSortIcons && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(GridColumnHeaderSortIcon, {
      direction: sortDirection,
      index: sortIndex,
      sortingOrder
    })]
  });
  React35.useLayoutEffect(() => {
    const columnMenuState = apiRef.current.state.columnMenu;
    if (hasFocus && !columnMenuState.open) {
      const focusableElement = headerCellRef.current.querySelector('[tabindex="0"]');
      const elementToFocus = focusableElement || headerCellRef.current;
      elementToFocus == null ? void 0 : elementToFocus.focus();
      apiRef.current.columnHeadersContainerElementRef.current.scrollLeft = 0;
    }
  }, [apiRef, hasFocus]);
  const headerClassName = typeof column.headerClassName === "function" ? column.headerClassName({
    field: column.field,
    colDef: column
  }) : column.headerClassName;
  const label = (_column$headerName = column.headerName) != null ? _column$headerName : column.field;
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(GridGenericColumnHeaderItem, _extends({
    ref: headerCellRef,
    classes,
    columnMenuOpen,
    colIndex,
    height: headerHeight,
    isResizing,
    sortDirection,
    hasFocus,
    tabIndex,
    separatorSide,
    isDraggable,
    headerComponent,
    description: column.description,
    elementId: column.field,
    width: column.computedWidth,
    columnMenuIconButton,
    columnTitleIconButtons,
    headerClassName,
    label,
    resizable: !rootProps.disableColumnResize && !!column.resizable,
    "data-field": column.field,
    columnMenu,
    draggableContainerProps: draggableEventHandlers,
    columnHeaderSeparatorProps
  }, mouseEventsHandlers));
}
true ? GridColumnHeaderItem.propTypes = {
  colIndex: import_prop_types21.default.number.isRequired,
  column: import_prop_types21.default.object.isRequired,
  columnMenuOpen: import_prop_types21.default.bool.isRequired,
  disableReorder: import_prop_types21.default.bool,
  extendRowFullWidth: import_prop_types21.default.bool.isRequired,
  filterItemsCounter: import_prop_types21.default.number,
  hasFocus: import_prop_types21.default.bool,
  headerHeight: import_prop_types21.default.number.isRequired,
  isDragging: import_prop_types21.default.bool.isRequired,
  isLastColumn: import_prop_types21.default.bool.isRequired,
  isResizing: import_prop_types21.default.bool.isRequired,
  separatorSide: import_prop_types21.default.oneOf(["left", "right"]),
  sortDirection: import_prop_types21.default.oneOf(["asc", "desc"]),
  sortIndex: import_prop_types21.default.number,
  tabIndex: import_prop_types21.default.oneOf([-1, 0]).isRequired
} : void 0;

// node_modules/@mui/x-data-grid/components/columnHeaders/GridColumnHeaderFilterIconButton.js
init_extends();
var React36 = __toESM(require_react());
var import_prop_types22 = __toESM(require_prop_types());

// node_modules/@mui/x-data-grid/hooks/features/preferencesPanel/gridPreferencePanelSelector.js
var gridPreferencePanelStateSelector = (state) => state.preferencePanel;

// node_modules/@mui/x-data-grid/hooks/features/preferencesPanel/gridPreferencePanelsValue.js
var GridPreferencePanelsValue;
(function(GridPreferencePanelsValue2) {
  GridPreferencePanelsValue2["filters"] = "filters";
  GridPreferencePanelsValue2["columns"] = "columns";
})(GridPreferencePanelsValue || (GridPreferencePanelsValue = {}));

// node_modules/@mui/x-data-grid/components/columnHeaders/GridColumnHeaderFilterIconButton.js
var import_jsx_runtime35 = __toESM(require_jsx_runtime());
var import_jsx_runtime36 = __toESM(require_jsx_runtime());
var useUtilityClasses18 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    icon: ["filterIcon"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
function GridColumnHeaderFilterIconButton(props) {
  var _rootProps$components;
  const {
    counter,
    field,
    onClick
  } = props;
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const ownerState = _extends({}, props, {
    classes: rootProps.classes
  });
  const classes = useUtilityClasses18(ownerState);
  const toggleFilter = React36.useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    const {
      open,
      openedPanelValue
    } = gridPreferencePanelStateSelector(apiRef.current.state);
    if (open && openedPanelValue === GridPreferencePanelsValue.filters) {
      apiRef.current.hideFilterPanel();
    } else {
      apiRef.current.showFilterPanel();
    }
    if (onClick) {
      onClick(apiRef.current.getColumnHeaderParams(field), event);
    }
  }, [apiRef, field, onClick]);
  if (!counter) {
    return null;
  }
  const iconButton = /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(IconButton_default, {
    onClick: toggleFilter,
    color: "default",
    "aria-label": apiRef.current.getLocaleText("columnHeaderFiltersLabel"),
    size: "small",
    tabIndex: -1,
    children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(rootProps.components.ColumnFilteredIcon, {
      className: classes.icon,
      fontSize: "small"
    })
  });
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(rootProps.components.BaseTooltip, _extends({
    title: apiRef.current.getLocaleText("columnHeaderFiltersTooltipActive")(counter),
    enterDelay: 1e3
  }, (_rootProps$components = rootProps.componentsProps) == null ? void 0 : _rootProps$components.baseTooltip, {
    children: /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(GridIconButtonContainer, {
      children: [counter > 1 && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Badge_default, {
        badgeContent: counter,
        color: "default",
        children: iconButton
      }), counter === 1 && iconButton]
    })
  }));
}
true ? GridColumnHeaderFilterIconButton.propTypes = {
  counter: import_prop_types22.default.number,
  field: import_prop_types22.default.string.isRequired,
  onClick: import_prop_types22.default.func
} : void 0;

// node_modules/@mui/x-data-grid/components/columnSelection/GridCellCheckboxRenderer.js
init_extends();
init_objectWithoutPropertiesLoose();
var React37 = __toESM(require_react());
var import_prop_types23 = __toESM(require_prop_types());
init_utils();
var import_jsx_runtime37 = __toESM(require_jsx_runtime());
var _excluded19 = ["field", "id", "value", "formattedValue", "row", "rowNode", "colDef", "isEditable", "cellMode", "hasFocus", "tabIndex", "getValue", "api"];
var useUtilityClasses19 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["checkboxInput"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
var GridCellCheckboxForwardRef = /* @__PURE__ */ React37.forwardRef(function GridCellCheckboxRenderer(props, ref) {
  var _rootProps$components;
  const {
    field,
    id,
    value: isChecked,
    rowNode,
    hasFocus,
    tabIndex
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded19);
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const ownerState = {
    classes: rootProps.classes
  };
  const classes = useUtilityClasses19(ownerState);
  const checkboxElement = React37.useRef(null);
  const rippleRef = React37.useRef();
  const handleRef = useForkRef_default(checkboxElement, ref);
  const element = apiRef.current.getCellElement(id, field);
  const handleChange = (event) => {
    const params = {
      value: event.target.checked,
      id
    };
    apiRef.current.publishEvent("rowSelectionCheckboxChange", params, event);
  };
  React37.useLayoutEffect(() => {
    if (tabIndex === 0 && element) {
      element.tabIndex = -1;
    }
  }, [element, tabIndex]);
  React37.useLayoutEffect(() => {
    if (hasFocus) {
      var _checkboxElement$curr;
      const input = (_checkboxElement$curr = checkboxElement.current) == null ? void 0 : _checkboxElement$curr.querySelector("input");
      input == null ? void 0 : input.focus();
    } else if (rippleRef.current) {
      rippleRef.current.stop({});
    }
  }, [hasFocus]);
  const handleKeyDown = React37.useCallback((event) => {
    if (isSpaceKey(event.key)) {
      event.stopPropagation();
    }
    if (isNavigationKey(event.key) && !event.shiftKey) {
      apiRef.current.publishEvent("cellNavigationKeyDown", props, event);
    }
  }, [apiRef, props]);
  if (rowNode.position === "footer") {
    return null;
  }
  const isSelectable = apiRef.current.isRowSelectable(id);
  const label = apiRef.current.getLocaleText(isChecked ? "checkboxSelectionUnselectRow" : "checkboxSelectionSelectRow");
  if (rowNode.isPinned) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(rootProps.components.BaseCheckbox, _extends({
    ref: handleRef,
    tabIndex,
    checked: isChecked,
    onChange: handleChange,
    className: classes.root,
    inputProps: {
      "aria-label": label
    },
    onKeyDown: handleKeyDown,
    disabled: !isSelectable,
    touchRippleRef: rippleRef
  }, (_rootProps$components = rootProps.componentsProps) == null ? void 0 : _rootProps$components.baseCheckbox, other));
});
true ? GridCellCheckboxForwardRef.propTypes = {
  api: import_prop_types23.default.any.isRequired,
  cellMode: import_prop_types23.default.oneOf(["edit", "view"]).isRequired,
  colDef: import_prop_types23.default.object.isRequired,
  field: import_prop_types23.default.string.isRequired,
  focusElementRef: import_prop_types23.default.oneOfType([import_prop_types23.default.func, import_prop_types23.default.shape({
    current: import_prop_types23.default.shape({
      focus: import_prop_types23.default.func.isRequired
    })
  })]),
  formattedValue: import_prop_types23.default.any,
  getValue: import_prop_types23.default.func.isRequired,
  hasFocus: import_prop_types23.default.bool.isRequired,
  id: import_prop_types23.default.oneOfType([import_prop_types23.default.number, import_prop_types23.default.string]).isRequired,
  isEditable: import_prop_types23.default.bool,
  row: import_prop_types23.default.object.isRequired,
  rowNode: import_prop_types23.default.object.isRequired,
  tabIndex: import_prop_types23.default.oneOf([-1, 0]).isRequired,
  value: import_prop_types23.default.any
} : void 0;
var GridCellCheckboxRenderer2 = /* @__PURE__ */ React37.memo(GridCellCheckboxForwardRef);

// node_modules/@mui/x-data-grid/components/columnSelection/GridHeaderCheckbox.js
init_extends();
init_objectWithoutPropertiesLoose();
var React38 = __toESM(require_react());
var import_prop_types24 = __toESM(require_prop_types());

// node_modules/@mui/x-data-grid/hooks/features/selection/gridSelectionSelector.js
var gridSelectionStateSelector = (state) => state.selection;
var selectedGridRowsCountSelector = createSelector2(gridSelectionStateSelector, (selection) => selection.length);
var selectedGridRowsSelector = createSelector2(gridSelectionStateSelector, gridRowsLookupSelector, (selectedRows, rowsLookup) => new Map(selectedRows.map((id) => [id, rowsLookup[id]])));
var selectedIdsLookupSelector = createSelector2(gridSelectionStateSelector, (selection) => selection.reduce((lookup, rowId) => {
  lookup[rowId] = rowId;
  return lookup;
}, {}));

// node_modules/@mui/x-data-grid/hooks/features/pagination/gridPaginationSelector.js
var gridPaginationSelector = (state) => state.pagination;
var gridPageSelector = createSelector2(gridPaginationSelector, (pagination) => pagination.page);
var gridPageSizeSelector = createSelector2(gridPaginationSelector, (pagination) => pagination.pageSize);
var gridPageCountSelector = createSelector2(gridPaginationSelector, (pagination) => pagination.pageCount);
var gridPaginationRowRangeSelector = createSelector2(gridPaginationSelector, gridRowTreeSelector, gridRowTreeDepthSelector, gridVisibleSortedRowEntriesSelector, gridVisibleSortedTopLevelRowEntriesSelector, (pagination, rowTree, rowTreeDepth, visibleSortedRowEntries, visibleSortedTopLevelRowEntries) => {
  const visibleTopLevelRowCount = visibleSortedTopLevelRowEntries.length;
  const topLevelFirstRowIndex = Math.min(pagination.pageSize * pagination.page, visibleTopLevelRowCount - 1);
  const topLevelLastRowIndex = Math.min(topLevelFirstRowIndex + pagination.pageSize - 1, visibleTopLevelRowCount - 1);
  if (topLevelFirstRowIndex === -1 || topLevelLastRowIndex === -1) {
    return null;
  }
  if (rowTreeDepth < 2) {
    return {
      firstRowIndex: topLevelFirstRowIndex,
      lastRowIndex: topLevelLastRowIndex
    };
  }
  const topLevelFirstRow = visibleSortedTopLevelRowEntries[topLevelFirstRowIndex];
  const topLevelRowsInCurrentPageCount = topLevelLastRowIndex - topLevelFirstRowIndex + 1;
  const firstRowIndex = visibleSortedRowEntries.findIndex((row) => row.id === topLevelFirstRow.id);
  let lastRowIndex = firstRowIndex;
  let topLevelRowAdded = 0;
  while (lastRowIndex < visibleSortedRowEntries.length && topLevelRowAdded <= topLevelRowsInCurrentPageCount) {
    const row = visibleSortedRowEntries[lastRowIndex];
    const depth = rowTree[row.id].depth;
    if (topLevelRowAdded < topLevelRowsInCurrentPageCount || depth > 0) {
      lastRowIndex += 1;
    }
    if (depth === 0) {
      topLevelRowAdded += 1;
    }
  }
  return {
    firstRowIndex,
    lastRowIndex: lastRowIndex - 1
  };
});
var gridPaginatedVisibleSortedGridRowEntriesSelector = createSelector2(gridVisibleSortedRowEntriesSelector, gridPaginationRowRangeSelector, (visibleSortedRowEntries, paginationRange) => {
  if (!paginationRange) {
    return [];
  }
  return visibleSortedRowEntries.slice(paginationRange.firstRowIndex, paginationRange.lastRowIndex + 1);
});
var gridPaginatedVisibleSortedGridRowIdsSelector = createSelector2(gridVisibleSortedRowIdsSelector, gridPaginationRowRangeSelector, (visibleSortedRowIds, paginationRange) => {
  if (!paginationRange) {
    return [];
  }
  return visibleSortedRowIds.slice(paginationRange.firstRowIndex, paginationRange.lastRowIndex + 1);
});

// node_modules/@mui/x-data-grid/components/columnSelection/GridHeaderCheckbox.js
var import_jsx_runtime38 = __toESM(require_jsx_runtime());
var _excluded20 = ["field", "colDef"];
var useUtilityClasses20 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["checkboxInput"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
var GridHeaderCheckbox = /* @__PURE__ */ React38.forwardRef(function GridHeaderCheckbox2(props, ref) {
  var _rootProps$components;
  const other = _objectWithoutPropertiesLoose(props, _excluded20);
  const [, forceUpdate] = React38.useState(false);
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const ownerState = {
    classes: rootProps.classes
  };
  const classes = useUtilityClasses20(ownerState);
  const tabIndexState = useGridSelector(apiRef, gridTabIndexColumnHeaderSelector);
  const selection = useGridSelector(apiRef, gridSelectionStateSelector);
  const visibleRowIds = useGridSelector(apiRef, gridVisibleSortedRowIdsSelector);
  const paginatedVisibleRowIds = useGridSelector(apiRef, gridPaginatedVisibleSortedGridRowIdsSelector);
  const filteredSelection = React38.useMemo(() => {
    if (typeof rootProps.isRowSelectable !== "function") {
      return selection;
    }
    return selection.filter((id) => {
      if (!apiRef.current.getRow(id)) {
        return false;
      }
      return rootProps.isRowSelectable(apiRef.current.getRowParams(id));
    });
  }, [apiRef, rootProps.isRowSelectable, selection]);
  const selectionCandidates = React38.useMemo(() => {
    const rowIds = !rootProps.pagination || !rootProps.checkboxSelectionVisibleOnly ? visibleRowIds : paginatedVisibleRowIds;
    return rowIds.reduce((acc, id) => {
      acc[id] = true;
      return acc;
    }, {});
  }, [rootProps.pagination, rootProps.checkboxSelectionVisibleOnly, paginatedVisibleRowIds, visibleRowIds]);
  const currentSelectionSize = React38.useMemo(() => filteredSelection.filter((id) => selectionCandidates[id]).length, [filteredSelection, selectionCandidates]);
  const isIndeterminate = currentSelectionSize > 0 && currentSelectionSize < Object.keys(selectionCandidates).length;
  const isChecked = currentSelectionSize > 0;
  const handleChange = (event) => {
    const params = {
      value: event.target.checked
    };
    apiRef.current.publishEvent("headerSelectionCheckboxChange", params);
  };
  const tabIndex = tabIndexState !== null && tabIndexState.field === props.field ? 0 : -1;
  React38.useLayoutEffect(() => {
    const element = apiRef.current.getColumnHeaderElement(props.field);
    if (tabIndex === 0 && element) {
      element.tabIndex = -1;
    }
  }, [tabIndex, apiRef, props.field]);
  const handleKeyDown = React38.useCallback((event) => {
    if (event.key === " ") {
      apiRef.current.publishEvent("headerSelectionCheckboxChange", {
        value: !isChecked
      });
    }
    if (isNavigationKey(event.key) && !event.shiftKey) {
      apiRef.current.publishEvent("columnHeaderNavigationKeyDown", props, event);
    }
  }, [apiRef, props, isChecked]);
  const handleSelectionChange = React38.useCallback(() => {
    forceUpdate((p) => !p);
  }, []);
  React38.useEffect(() => {
    return apiRef.current.subscribeEvent("selectionChange", handleSelectionChange);
  }, [apiRef, handleSelectionChange]);
  const label = apiRef.current.getLocaleText(isChecked ? "checkboxSelectionUnselectAllRows" : "checkboxSelectionSelectAllRows");
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(rootProps.components.BaseCheckbox, _extends({
    ref,
    indeterminate: isIndeterminate,
    checked: isChecked,
    onChange: handleChange,
    className: classes.root,
    inputProps: {
      "aria-label": label
    },
    tabIndex,
    onKeyDown: handleKeyDown
  }, (_rootProps$components = rootProps.componentsProps) == null ? void 0 : _rootProps$components.baseCheckbox, other));
});
true ? GridHeaderCheckbox.propTypes = {
  colDef: import_prop_types24.default.object.isRequired,
  field: import_prop_types24.default.string.isRequired
} : void 0;

// node_modules/@mui/x-data-grid/components/menu/columnMenu/GridColumnsMenuItem.js
var React39 = __toESM(require_react());
var import_prop_types25 = __toESM(require_prop_types());
var import_jsx_runtime39 = __toESM(require_jsx_runtime());
var GridColumnsMenuItem = (props) => {
  const {
    onClick
  } = props;
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const showColumns = React39.useCallback((event) => {
    onClick(event);
    apiRef.current.showPreferences(GridPreferencePanelsValue.columns);
  }, [apiRef, onClick]);
  if (rootProps.disableColumnSelector) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(MenuItem_default, {
    onClick: showColumns,
    children: apiRef.current.getLocaleText("columnMenuShowColumns")
  });
};
true ? GridColumnsMenuItem.propTypes = {
  column: import_prop_types25.default.object.isRequired,
  onClick: import_prop_types25.default.func.isRequired
} : void 0;

// node_modules/@mui/x-data-grid/components/menu/columnMenu/GridFilterMenuItem.js
var React40 = __toESM(require_react());
var import_prop_types26 = __toESM(require_prop_types());
var import_jsx_runtime40 = __toESM(require_jsx_runtime());
var GridFilterMenuItem = (props) => {
  const {
    column,
    onClick
  } = props;
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const showFilter = React40.useCallback((event) => {
    onClick(event);
    apiRef.current.showFilterPanel(column == null ? void 0 : column.field);
  }, [apiRef, column == null ? void 0 : column.field, onClick]);
  if (rootProps.disableColumnFilter || !(column != null && column.filterable)) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(MenuItem_default, {
    onClick: showFilter,
    children: apiRef.current.getLocaleText("columnMenuFilter")
  });
};
true ? GridFilterMenuItem.propTypes = {
  column: import_prop_types26.default.object.isRequired,
  onClick: import_prop_types26.default.func.isRequired
} : void 0;

// node_modules/@mui/x-data-grid/components/menu/columnMenu/GridColumnMenu.js
init_extends();
var React50 = __toESM(require_react());
var import_prop_types34 = __toESM(require_prop_types());

// node_modules/@mui/x-data-grid/components/menu/columnMenu/GridColumnMenuContainer.js
init_extends();
init_objectWithoutPropertiesLoose();
init_clsx_m();
var import_prop_types27 = __toESM(require_prop_types());
var React41 = __toESM(require_react());
var import_jsx_runtime41 = __toESM(require_jsx_runtime());
var _excluded21 = ["hideMenu", "currentColumn", "open", "id", "labelledby", "className", "children"];
var GridColumnMenuContainer = /* @__PURE__ */ React41.forwardRef(function GridColumnMenuContainer2(props, ref) {
  const {
    hideMenu,
    open,
    id,
    labelledby,
    className,
    children
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded21);
  const handleListKeyDown = React41.useCallback((event) => {
    if (isTabKey(event.key)) {
      event.preventDefault();
    }
    if (isHideMenuKey(event.key)) {
      hideMenu(event);
    }
  }, [hideMenu]);
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(MenuList_default, _extends({
    id,
    ref,
    className: clsx_m_default(gridClasses.menuList, className),
    "aria-labelledby": labelledby,
    onKeyDown: handleListKeyDown,
    autoFocus: open
  }, other, {
    children
  }));
});
true ? GridColumnMenuContainer.propTypes = {
  currentColumn: import_prop_types27.default.object.isRequired,
  hideMenu: import_prop_types27.default.func.isRequired,
  id: import_prop_types27.default.string,
  labelledby: import_prop_types27.default.string,
  open: import_prop_types27.default.bool.isRequired
} : void 0;

// node_modules/@mui/x-data-grid/components/menu/columnMenu/HideGridColMenuItem.js
var React48 = __toESM(require_react());
var import_prop_types32 = __toESM(require_prop_types());

// node_modules/@mui/x-data-grid/hooks/features/columns/gridColumnsUtils.js
init_extends();

// node_modules/@mui/x-data-grid/colDef/gridActionsColDef.js
init_extends();

// node_modules/@mui/x-data-grid/hooks/features/sorting/gridSortingUtils.js
init_extends();
var sortModelDisableMultiColumnsSortingWarning = buildWarning(["MUI: The `sortModel` can only contain a single item when the `disableMultipleColumnsSorting` prop is set to `true`.", "If you are using the community version of the `DataGrid`, this prop is always `true`."], "error");
var sanitizeSortModel = (model, disableMultipleColumnsSorting) => {
  if (disableMultipleColumnsSorting && model.length > 1) {
    sortModelDisableMultiColumnsSortingWarning();
    return [model[0]];
  }
  return model;
};
var mergeStateWithSortModel = (sortModel, disableMultipleColumnsSorting) => (state) => _extends({}, state, {
  sorting: _extends({}, state.sorting, {
    sortModel: sanitizeSortModel(sortModel, disableMultipleColumnsSorting)
  })
});
var isDesc = (direction) => direction === "desc";
var parseSortItem = (sortItem, apiRef) => {
  const column = apiRef.current.getColumn(sortItem.field);
  if (!column) {
    return null;
  }
  const comparator = isDesc(sortItem.sort) ? (...args) => -1 * column.sortComparator(...args) : column.sortComparator;
  const getSortCellParams = (id) => ({
    id,
    field: column.field,
    rowNode: apiRef.current.getRowNode(id),
    value: apiRef.current.getCellValue(id, column.field),
    api: apiRef.current
  });
  return {
    getSortCellParams,
    comparator
  };
};
var compareRows = (parsedSortItems, row1, row2) => {
  return parsedSortItems.reduce((res, item, index) => {
    if (res !== 0) {
      return res;
    }
    const sortCellParams1 = row1.params[index];
    const sortCellParams2 = row2.params[index];
    res = item.comparator(sortCellParams1.value, sortCellParams2.value, sortCellParams1, sortCellParams2);
    return res;
  }, 0);
};
var buildAggregatedSortingApplier = (sortModel, apiRef) => {
  const comparatorList = sortModel.map((item) => parseSortItem(item, apiRef)).filter((comparator) => !!comparator);
  if (comparatorList.length === 0) {
    return null;
  }
  return (rowList) => rowList.map((node) => ({
    node,
    params: comparatorList.map((el) => el.getSortCellParams(node.id))
  })).sort((a, b) => compareRows(comparatorList, a, b)).map((row) => row.node.id);
};
var getNextGridSortDirection = (sortingOrder, current) => {
  const currentIdx = sortingOrder.indexOf(current);
  if (!current || currentIdx === -1 || currentIdx + 1 === sortingOrder.length) {
    return sortingOrder[0];
  }
  return sortingOrder[currentIdx + 1];
};
var gridNillComparator = (v1, v2) => {
  if (v1 == null && v2 != null) {
    return -1;
  }
  if (v2 == null && v1 != null) {
    return 1;
  }
  if (v1 == null && v2 == null) {
    return 0;
  }
  return null;
};
var collator = new Intl.Collator();
var gridStringOrNumberComparator = (value1, value2) => {
  const nillResult = gridNillComparator(value1, value2);
  if (nillResult !== null) {
    return nillResult;
  }
  if (typeof value1 === "string") {
    return collator.compare(value1.toString(), value2.toString());
  }
  return value1 - value2;
};
var gridNumberComparator = (value1, value2) => {
  const nillResult = gridNillComparator(value1, value2);
  if (nillResult !== null) {
    return nillResult;
  }
  return Number(value1) - Number(value2);
};
var gridDateComparator = (value1, value2) => {
  const nillResult = gridNillComparator(value1, value2);
  if (nillResult !== null) {
    return nillResult;
  }
  if (value1 > value2) {
    return 1;
  }
  if (value1 < value2) {
    return -1;
  }
  return 0;
};

// node_modules/@mui/x-data-grid/utils/utils.js
function isNumber(value) {
  return typeof value === "number";
}
function isFunction(value) {
  return typeof value === "function";
}
function localStorageAvailable() {
  try {
    const key = "__some_random_key_you_are_not_going_to_use__";
    window.localStorage.setItem(key, key);
    window.localStorage.removeItem(key);
    return true;
  } catch (err) {
    return false;
  }
}
function escapeRegExp(value) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
var clamp = (value, min, max) => Math.max(min, Math.min(max, value));
function isDeepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (a && b && typeof a === "object" && typeof b === "object") {
    if (a.constructor !== b.constructor) {
      return false;
    }
    if (Array.isArray(a)) {
      const length2 = a.length;
      if (length2 !== b.length) {
        return false;
      }
      for (let i = 0; i < length2; i += 1) {
        if (!isDeepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    if (a instanceof Map && b instanceof Map) {
      if (a.size !== b.size) {
        return false;
      }
      const entriesA = Array.from(a.entries());
      for (let i = 0; i < entriesA.length; i += 1) {
        if (!b.has(entriesA[i][0])) {
          return false;
        }
      }
      for (let i = 0; i < entriesA.length; i += 1) {
        const entryA = entriesA[i];
        if (!isDeepEqual(entryA[1], b.get(entryA[0]))) {
          return false;
        }
      }
      return true;
    }
    if (a instanceof Set && b instanceof Set) {
      if (a.size !== b.size) {
        return false;
      }
      const entries = Array.from(a.entries());
      for (let i = 0; i < entries.length; i += 1) {
        if (!b.has(entries[i][0])) {
          return false;
        }
      }
      return true;
    }
    if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      const length2 = a.length;
      if (length2 !== b.length) {
        return false;
      }
      for (let i = 0; i < length2; i += 1) {
        if (a[i] !== b[i]) {
          return false;
        }
      }
      return true;
    }
    if (a.constructor === RegExp) {
      return a.source === b.source && a.flags === b.flags;
    }
    if (a.valueOf !== Object.prototype.valueOf) {
      return a.valueOf() === b.valueOf();
    }
    if (a.toString !== Object.prototype.toString) {
      return a.toString() === b.toString();
    }
    const keys = Object.keys(a);
    const length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (let i = 0; i < length; i += 1) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (let i = 0; i < length; i += 1) {
      const key = keys[i];
      if (!isDeepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}
function mulberry32(a) {
  return () => {
    let t = a += 1831565813;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function randomNumberBetween(seed, min, max) {
  const random = mulberry32(seed);
  return () => min + (max - min) * random();
}
function deepClone(obj) {
  if (typeof structuredClone === "function") {
    return structuredClone(obj);
  }
  return JSON.parse(JSON.stringify(obj));
}

// node_modules/@mui/x-data-grid/components/panel/filterPanel/GridFilterInputMultipleValue.js
init_extends();
init_objectWithoutPropertiesLoose();
var React42 = __toESM(require_react());
var import_prop_types28 = __toESM(require_prop_types());
init_utils();
var import_jsx_runtime42 = __toESM(require_jsx_runtime());
var _excluded22 = ["item", "applyValue", "type", "apiRef", "focusElementRef", "color", "error", "helperText", "size", "variant"];
function GridFilterInputMultipleValue(props) {
  const {
    item,
    applyValue,
    type,
    apiRef,
    focusElementRef,
    color,
    error,
    helperText,
    size,
    variant
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded22);
  const TextFieldProps = {
    color,
    error,
    helperText,
    size,
    variant
  };
  const [filterValueState, setFilterValueState] = React42.useState(item.value || []);
  const id = useId_default();
  const rootProps = useGridRootProps();
  React42.useEffect(() => {
    var _item$value;
    const itemValue = (_item$value = item.value) != null ? _item$value : [];
    setFilterValueState(itemValue.map(String));
  }, [item.value]);
  const handleChange = React42.useCallback((event, value) => {
    setFilterValueState(value.map(String));
    applyValue(_extends({}, item, {
      value: [...value]
    }));
  }, [applyValue, item]);
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Autocomplete_default, _extends({
    multiple: true,
    freeSolo: true,
    limitTags: 1,
    options: [],
    filterOptions: (options, params) => {
      const {
        inputValue
      } = params;
      return inputValue == null || inputValue === "" ? [] : [inputValue];
    },
    id,
    value: filterValueState,
    onChange: handleChange,
    renderTags: (value, getTagProps) => value.map((option, index) => /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Chip_default, _extends({
      variant: "outlined",
      size: "small",
      label: option
    }, getTagProps({
      index
    })))),
    renderInput: (params) => {
      var _rootProps$components;
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(rootProps.components.BaseTextField, _extends({}, params, {
        label: apiRef.current.getLocaleText("filterPanelInputLabel"),
        placeholder: apiRef.current.getLocaleText("filterPanelInputPlaceholder"),
        InputLabelProps: _extends({}, params.InputLabelProps, {
          shrink: true
        }),
        inputRef: focusElementRef,
        type: type || "text"
      }, TextFieldProps, (_rootProps$components = rootProps.componentsProps) == null ? void 0 : _rootProps$components.baseTextField));
    }
  }, other));
}
true ? GridFilterInputMultipleValue.propTypes = {
  apiRef: import_prop_types28.default.shape({
    current: import_prop_types28.default.object.isRequired
  }).isRequired,
  applyValue: import_prop_types28.default.func.isRequired,
  focusElementRef: import_prop_types28.default.oneOfType([import_prop_types28.default.func, import_prop_types28.default.object]),
  item: import_prop_types28.default.shape({
    columnField: import_prop_types28.default.string.isRequired,
    id: import_prop_types28.default.oneOfType([import_prop_types28.default.number, import_prop_types28.default.string]),
    operatorValue: import_prop_types28.default.string,
    value: import_prop_types28.default.any
  }).isRequired,
  type: import_prop_types28.default.oneOf(["number", "text"])
} : void 0;

// node_modules/@mui/x-data-grid/colDef/gridStringOperators.js
var getGridStringQuickFilterFn = (value) => {
  if (!value) {
    return null;
  }
  const filterRegex = new RegExp(escapeRegExp(value), "i");
  return ({
    value: columnValue
  }) => {
    return columnValue != null ? filterRegex.test(columnValue.toString()) : false;
  };
};
var getGridStringOperators = (disableTrim = false) => [{
  value: "contains",
  getApplyFilterFn: (filterItem) => {
    if (!filterItem.value) {
      return null;
    }
    const filterItemValue = disableTrim ? filterItem.value : filterItem.value.trim();
    const filterRegex = new RegExp(escapeRegExp(filterItemValue), "i");
    return ({
      value
    }) => {
      return value != null ? filterRegex.test(value.toString()) : false;
    };
  },
  InputComponent: GridFilterInputValue
}, {
  value: "equals",
  getApplyFilterFn: (filterItem) => {
    if (!filterItem.value) {
      return null;
    }
    const filterItemValue = disableTrim ? filterItem.value : filterItem.value.trim();
    const collator4 = new Intl.Collator(void 0, {
      sensitivity: "base",
      usage: "search"
    });
    return ({
      value
    }) => {
      return value != null ? collator4.compare(filterItemValue, value.toString()) === 0 : false;
    };
  },
  InputComponent: GridFilterInputValue
}, {
  value: "startsWith",
  getApplyFilterFn: (filterItem) => {
    if (!filterItem.value) {
      return null;
    }
    const filterItemValue = disableTrim ? filterItem.value : filterItem.value.trim();
    const filterRegex = new RegExp(`^${escapeRegExp(filterItemValue)}.*$`, "i");
    return ({
      value
    }) => {
      return value != null ? filterRegex.test(value.toString()) : false;
    };
  },
  InputComponent: GridFilterInputValue
}, {
  value: "endsWith",
  getApplyFilterFn: (filterItem) => {
    if (!filterItem.value) {
      return null;
    }
    const filterItemValue = disableTrim ? filterItem.value : filterItem.value.trim();
    const filterRegex = new RegExp(`.*${escapeRegExp(filterItemValue)}$`, "i");
    return ({
      value
    }) => {
      return value != null ? filterRegex.test(value.toString()) : false;
    };
  },
  InputComponent: GridFilterInputValue
}, {
  value: "isEmpty",
  getApplyFilterFn: () => {
    return ({
      value
    }) => {
      return value === "" || value == null;
    };
  },
  requiresFilterValue: false
}, {
  value: "isNotEmpty",
  getApplyFilterFn: () => {
    return ({
      value
    }) => {
      return value !== "" && value != null;
    };
  },
  requiresFilterValue: false
}, {
  value: "isAnyOf",
  getApplyFilterFn: (filterItem) => {
    if (!Array.isArray(filterItem.value) || filterItem.value.length === 0) {
      return null;
    }
    const filterItemValue = disableTrim ? filterItem.value : filterItem.value.map((val) => val.trim());
    const collator4 = new Intl.Collator(void 0, {
      sensitivity: "base",
      usage: "search"
    });
    return ({
      value
    }) => value != null ? filterItemValue.some((filterValue) => {
      return collator4.compare(filterValue, value.toString() || "") === 0;
    }) : false;
  },
  InputComponent: GridFilterInputMultipleValue
}];

// node_modules/@mui/x-data-grid/colDef/gridStringColDef.js
var GRID_STRING_COL_DEF = {
  width: 100,
  minWidth: 50,
  maxWidth: Infinity,
  hide: false,
  hideable: true,
  sortable: true,
  resizable: true,
  filterable: true,
  groupable: true,
  pinnable: true,
  aggregable: true,
  editable: false,
  sortComparator: gridStringOrNumberComparator,
  type: "string",
  align: "left",
  filterOperators: getGridStringOperators(),
  renderEditCell: renderEditInputCell,
  getApplyQuickFilterFn: getGridStringQuickFilterFn
};

// node_modules/@mui/x-data-grid/colDef/gridActionsColDef.js
var GRID_ACTIONS_COLUMN_TYPE = "actions";
var GRID_ACTIONS_COL_DEF = _extends({}, GRID_STRING_COL_DEF, {
  sortable: false,
  filterable: false,
  aggregable: false,
  width: 100,
  align: "center",
  headerAlign: "center",
  headerName: "",
  disableColumnMenu: true,
  disableExport: true,
  renderCell: renderActionsCell,
  getApplyQuickFilterFn: void 0
});

// node_modules/@mui/x-data-grid/colDef/gridBooleanColDef.js
init_extends();

// node_modules/@mui/x-data-grid/components/panel/filterPanel/GridFilterInputBoolean.js
init_extends();
init_objectWithoutPropertiesLoose();
var React43 = __toESM(require_react());
var import_jsx_runtime43 = __toESM(require_jsx_runtime());
var import_jsx_runtime44 = __toESM(require_jsx_runtime());
var _excluded23 = ["item", "applyValue", "apiRef", "focusElementRef"];
function GridFilterInputBoolean(props) {
  var _rootProps$components, _baseSelectProps$nati, _rootProps$components2, _rootProps$components3;
  const {
    item,
    applyValue,
    apiRef,
    focusElementRef
  } = props, others = _objectWithoutPropertiesLoose(props, _excluded23);
  const [filterValueState, setFilterValueState] = React43.useState(item.value || "");
  const rootProps = useGridRootProps();
  const baseSelectProps = ((_rootProps$components = rootProps.componentsProps) == null ? void 0 : _rootProps$components.baseSelect) || {};
  const isSelectNative = (_baseSelectProps$nati = baseSelectProps.native) != null ? _baseSelectProps$nati : true;
  const OptionComponent = isSelectNative ? "option" : MenuItem_default;
  const onFilterChange = React43.useCallback((event) => {
    const value = event.target.value;
    setFilterValueState(value);
    applyValue(_extends({}, item, {
      value
    }));
  }, [applyValue, item]);
  React43.useEffect(() => {
    setFilterValueState(item.value || "");
  }, [item.value]);
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(rootProps.components.BaseTextField, _extends({
    label: apiRef.current.getLocaleText("filterPanelInputLabel"),
    value: filterValueState,
    onChange: onFilterChange,
    select: true,
    variant: "standard",
    SelectProps: _extends({
      native: isSelectNative,
      displayEmpty: true
    }, (_rootProps$components2 = rootProps.componentsProps) == null ? void 0 : _rootProps$components2.baseSelect),
    InputLabelProps: {
      shrink: true
    },
    inputRef: focusElementRef
  }, others, (_rootProps$components3 = rootProps.componentsProps) == null ? void 0 : _rootProps$components3.baseTextField, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime43.jsx)(OptionComponent, {
      value: "",
      children: apiRef.current.getLocaleText("filterValueAny")
    }), /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(OptionComponent, {
      value: "true",
      children: apiRef.current.getLocaleText("filterValueTrue")
    }), /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(OptionComponent, {
      value: "false",
      children: apiRef.current.getLocaleText("filterValueFalse")
    })]
  }));
}

// node_modules/@mui/x-data-grid/colDef/gridBooleanOperators.js
var getGridBooleanOperators = () => [{
  value: "is",
  getApplyFilterFn: (filterItem) => {
    if (!filterItem.value) {
      return null;
    }
    const valueAsBoolean = filterItem.value === "true";
    return ({
      value
    }) => {
      return Boolean(value) === valueAsBoolean;
    };
  },
  InputComponent: GridFilterInputBoolean
}];

// node_modules/@mui/x-data-grid/colDef/gridBooleanColDef.js
function gridBooleanFormatter({
  value,
  api
}) {
  return value ? api.getLocaleText("booleanCellTrueLabel") : api.getLocaleText("booleanCellFalseLabel");
}
var GRID_BOOLEAN_COL_DEF = _extends({}, GRID_STRING_COL_DEF, {
  type: "boolean",
  align: "center",
  headerAlign: "center",
  renderCell: renderBooleanCell,
  renderEditCell: renderEditBooleanCell,
  sortComparator: gridNumberComparator,
  valueFormatter: gridBooleanFormatter,
  filterOperators: getGridBooleanOperators(),
  getApplyQuickFilterFn: void 0,
  aggregable: false
});

// node_modules/@mui/x-data-grid/colDef/gridCheckboxSelectionColDef.js
init_extends();
var React44 = __toESM(require_react());
var import_jsx_runtime45 = __toESM(require_jsx_runtime());
var GRID_CHECKBOX_SELECTION_FIELD = "__check__";
var GRID_CHECKBOX_SELECTION_COL_DEF = _extends({}, GRID_BOOLEAN_COL_DEF, {
  field: GRID_CHECKBOX_SELECTION_FIELD,
  type: "checkboxSelection",
  width: 50,
  resizable: false,
  sortable: false,
  filterable: false,
  aggregable: false,
  disableColumnMenu: true,
  disableReorder: true,
  disableExport: true,
  getApplyQuickFilterFn: void 0,
  valueGetter: (params) => {
    const selectionLookup = selectedIdsLookupSelector(params.api.state, params.api.instanceId);
    return selectionLookup[params.id] !== void 0;
  },
  renderHeader: (params) => /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(GridHeaderCheckbox, _extends({}, params)),
  renderCell: (params) => /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(GridCellCheckboxRenderer2, _extends({}, params))
});

// node_modules/@mui/x-data-grid/colDef/gridDateColDef.js
init_extends();

// node_modules/@mui/x-data-grid/components/panel/filterPanel/GridFilterInputDate.js
init_extends();
init_objectWithoutPropertiesLoose();
var React45 = __toESM(require_react());
var import_prop_types29 = __toESM(require_prop_types());
init_utils();
var import_jsx_runtime46 = __toESM(require_jsx_runtime());
var _excluded24 = ["item", "applyValue", "type", "apiRef", "focusElementRef", "InputProps"];
var SUBMIT_FILTER_DATE_STROKE_TIME = 500;
function GridFilterInputDate(props) {
  var _item$value, _rootProps$components;
  const {
    item,
    applyValue,
    type,
    apiRef,
    focusElementRef,
    InputProps
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded24);
  const filterTimeout = React45.useRef();
  const [filterValueState, setFilterValueState] = React45.useState((_item$value = item.value) != null ? _item$value : "");
  const [applying, setIsApplying] = React45.useState(false);
  const id = useId_default();
  const rootProps = useGridRootProps();
  const onFilterChange = React45.useCallback((event) => {
    const value = event.target.value;
    clearTimeout(filterTimeout.current);
    setFilterValueState(String(value));
    setIsApplying(true);
    filterTimeout.current = setTimeout(() => {
      applyValue(_extends({}, item, {
        value
      }));
      setIsApplying(false);
    }, SUBMIT_FILTER_DATE_STROKE_TIME);
  }, [applyValue, item]);
  React45.useEffect(() => {
    return () => {
      clearTimeout(filterTimeout.current);
    };
  }, []);
  React45.useEffect(() => {
    var _item$value2;
    const itemValue = (_item$value2 = item.value) != null ? _item$value2 : "";
    setFilterValueState(String(itemValue));
  }, [item.value]);
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(rootProps.components.BaseTextField, _extends({
    id,
    label: apiRef.current.getLocaleText("filterPanelInputLabel"),
    placeholder: apiRef.current.getLocaleText("filterPanelInputPlaceholder"),
    value: filterValueState,
    onChange: onFilterChange,
    variant: "standard",
    type: type || "text",
    InputLabelProps: {
      shrink: true
    },
    inputRef: focusElementRef,
    InputProps: _extends({}, applying ? {
      endAdornment: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(GridLoadIcon, {})
    } : {}, InputProps, {
      inputProps: _extends({
        max: type === "datetime-local" ? "9999-12-31T23:59" : "9999-12-31"
      }, InputProps == null ? void 0 : InputProps.inputProps)
    })
  }, other, (_rootProps$components = rootProps.componentsProps) == null ? void 0 : _rootProps$components.baseTextField));
}
true ? GridFilterInputDate.propTypes = {
  apiRef: import_prop_types29.default.shape({
    current: import_prop_types29.default.object.isRequired
  }).isRequired,
  applyValue: import_prop_types29.default.func.isRequired,
  focusElementRef: import_prop_types29.default.oneOfType([import_prop_types29.default.func, import_prop_types29.default.object]),
  item: import_prop_types29.default.shape({
    columnField: import_prop_types29.default.string.isRequired,
    id: import_prop_types29.default.oneOfType([import_prop_types29.default.number, import_prop_types29.default.string]),
    operatorValue: import_prop_types29.default.string,
    value: import_prop_types29.default.any
  }).isRequired
} : void 0;

// node_modules/@mui/x-data-grid/colDef/gridDateOperators.js
var dateRegex = /(\d+)-(\d+)-(\d+)/;
var dateTimeRegex = /(\d+)-(\d+)-(\d+)T(\d+):(\d+)/;
function buildApplyFilterFn(filterItem, compareFn, showTime, keepHours) {
  if (!filterItem.value) {
    return null;
  }
  const [year, month, day, hour, minute] = filterItem.value.match(showTime ? dateTimeRegex : dateRegex).slice(1).map(Number);
  const time = new Date(year, month - 1, day, hour || 0, minute || 0).getTime();
  return ({
    value
  }) => {
    if (!value) {
      return false;
    }
    const valueAsDate = value instanceof Date ? value : new Date(value.toString());
    if (keepHours) {
      return compareFn(valueAsDate.getTime(), time);
    }
    const dateCopy = value instanceof Date ? new Date(valueAsDate) : valueAsDate;
    const timeToCompare = dateCopy.setHours(showTime ? valueAsDate.getHours() : 0, showTime ? valueAsDate.getMinutes() : 0, 0, 0);
    return compareFn(timeToCompare, time);
  };
}
var getGridDateOperators = (showTime) => [{
  value: "is",
  getApplyFilterFn: (filterItem) => {
    return buildApplyFilterFn(filterItem, (value1, value2) => value1 === value2, showTime);
  },
  InputComponent: GridFilterInputDate,
  InputComponentProps: {
    type: showTime ? "datetime-local" : "date"
  }
}, {
  value: "not",
  getApplyFilterFn: (filterItem) => {
    return buildApplyFilterFn(filterItem, (value1, value2) => value1 !== value2, showTime);
  },
  InputComponent: GridFilterInputDate,
  InputComponentProps: {
    type: showTime ? "datetime-local" : "date"
  }
}, {
  value: "after",
  getApplyFilterFn: (filterItem) => {
    return buildApplyFilterFn(filterItem, (value1, value2) => value1 > value2, showTime);
  },
  InputComponent: GridFilterInputDate,
  InputComponentProps: {
    type: showTime ? "datetime-local" : "date"
  }
}, {
  value: "onOrAfter",
  getApplyFilterFn: (filterItem) => {
    return buildApplyFilterFn(filterItem, (value1, value2) => value1 >= value2, showTime);
  },
  InputComponent: GridFilterInputDate,
  InputComponentProps: {
    type: showTime ? "datetime-local" : "date"
  }
}, {
  value: "before",
  getApplyFilterFn: (filterItem) => {
    return buildApplyFilterFn(filterItem, (value1, value2) => value1 < value2, showTime, !showTime);
  },
  InputComponent: GridFilterInputDate,
  InputComponentProps: {
    type: showTime ? "datetime-local" : "date"
  }
}, {
  value: "onOrBefore",
  getApplyFilterFn: (filterItem) => {
    return buildApplyFilterFn(filterItem, (value1, value2) => value1 <= value2, showTime);
  },
  InputComponent: GridFilterInputDate,
  InputComponentProps: {
    type: showTime ? "datetime-local" : "date"
  }
}, {
  value: "isEmpty",
  getApplyFilterFn: () => {
    return ({
      value
    }) => {
      return value == null;
    };
  },
  requiresFilterValue: false
}, {
  value: "isNotEmpty",
  getApplyFilterFn: () => {
    return ({
      value
    }) => {
      return value != null;
    };
  },
  requiresFilterValue: false
}];

// node_modules/@mui/x-data-grid/colDef/gridDateColDef.js
function gridDateFormatter({
  value
}) {
  if (value instanceof Date) {
    return value.toLocaleDateString();
  }
  return value != null ? value : "";
}
function gridDateTimeFormatter({
  value
}) {
  if (value instanceof Date) {
    return value.toLocaleString();
  }
  return value != null ? value : "";
}
var GRID_DATE_COL_DEF = _extends({}, GRID_STRING_COL_DEF, {
  type: "date",
  sortComparator: gridDateComparator,
  valueFormatter: gridDateFormatter,
  filterOperators: getGridDateOperators(),
  renderEditCell: renderEditDateCell,
  getApplyQuickFilterFn: void 0
});
var GRID_DATETIME_COL_DEF = _extends({}, GRID_STRING_COL_DEF, {
  type: "dateTime",
  sortComparator: gridDateComparator,
  valueFormatter: gridDateTimeFormatter,
  filterOperators: getGridDateOperators(true),
  renderEditCell: renderEditDateCell,
  getApplyQuickFilterFn: void 0
});

// node_modules/@mui/x-data-grid/colDef/gridNumericColDef.js
init_extends();

// node_modules/@mui/x-data-grid/colDef/gridNumericOperators.js
var parseNumericValue = (value) => {
  if (value == null) {
    return null;
  }
  return Number(value);
};
var getGridNumericQuickFilterFn = (value) => {
  if (value == null || Number.isNaN(value) || value === "") {
    return null;
  }
  return ({
    value: columnValue
  }) => {
    return parseNumericValue(columnValue) === parseNumericValue(value);
  };
};
var getGridNumericOperators = () => [{
  label: "=",
  value: "=",
  getApplyFilterFn: (filterItem) => {
    if (filterItem.value == null || Number.isNaN(filterItem.value)) {
      return null;
    }
    return ({
      value
    }) => {
      return parseNumericValue(value) === filterItem.value;
    };
  },
  InputComponent: GridFilterInputValue,
  InputComponentProps: {
    type: "number"
  }
}, {
  label: "!=",
  value: "!=",
  getApplyFilterFn: (filterItem) => {
    if (filterItem.value == null || Number.isNaN(filterItem.value)) {
      return null;
    }
    return ({
      value
    }) => {
      return parseNumericValue(value) !== filterItem.value;
    };
  },
  InputComponent: GridFilterInputValue,
  InputComponentProps: {
    type: "number"
  }
}, {
  label: ">",
  value: ">",
  getApplyFilterFn: (filterItem) => {
    if (filterItem.value == null || Number.isNaN(filterItem.value)) {
      return null;
    }
    return ({
      value
    }) => {
      if (value == null) {
        return false;
      }
      return parseNumericValue(value) > filterItem.value;
    };
  },
  InputComponent: GridFilterInputValue,
  InputComponentProps: {
    type: "number"
  }
}, {
  label: ">=",
  value: ">=",
  getApplyFilterFn: (filterItem) => {
    if (filterItem.value == null || Number.isNaN(filterItem.value)) {
      return null;
    }
    return ({
      value
    }) => {
      if (value == null) {
        return false;
      }
      return parseNumericValue(value) >= filterItem.value;
    };
  },
  InputComponent: GridFilterInputValue,
  InputComponentProps: {
    type: "number"
  }
}, {
  label: "<",
  value: "<",
  getApplyFilterFn: (filterItem) => {
    if (filterItem.value == null || Number.isNaN(filterItem.value)) {
      return null;
    }
    return ({
      value
    }) => {
      if (value == null) {
        return false;
      }
      return parseNumericValue(value) < filterItem.value;
    };
  },
  InputComponent: GridFilterInputValue,
  InputComponentProps: {
    type: "number"
  }
}, {
  label: "<=",
  value: "<=",
  getApplyFilterFn: (filterItem) => {
    if (filterItem.value == null || Number.isNaN(filterItem.value)) {
      return null;
    }
    return ({
      value
    }) => {
      if (value == null) {
        return false;
      }
      return parseNumericValue(value) <= filterItem.value;
    };
  },
  InputComponent: GridFilterInputValue,
  InputComponentProps: {
    type: "number"
  }
}, {
  value: "isEmpty",
  getApplyFilterFn: () => {
    return ({
      value
    }) => {
      return value == null;
    };
  },
  requiresFilterValue: false
}, {
  value: "isNotEmpty",
  getApplyFilterFn: () => {
    return ({
      value
    }) => {
      return value != null;
    };
  },
  requiresFilterValue: false
}, {
  value: "isAnyOf",
  getApplyFilterFn: (filterItem) => {
    if (!Array.isArray(filterItem.value) || filterItem.value.length === 0) {
      return null;
    }
    return ({
      value
    }) => {
      return value != null && filterItem.value.includes(Number(value));
    };
  },
  InputComponent: GridFilterInputMultipleValue,
  InputComponentProps: {
    type: "number"
  }
}];
var getGridNumericColumnOperators = wrapWithWarningOnCall(getGridNumericOperators, ["MUI: The method getGridNumericColumnOperators is deprecated and will be removed in the next major version.", "Use getGridNumericOperators instead."]);

// node_modules/@mui/x-data-grid/colDef/gridNumericColDef.js
var GRID_NUMERIC_COL_DEF = _extends({}, GRID_STRING_COL_DEF, {
  type: "number",
  align: "right",
  headerAlign: "right",
  sortComparator: gridNumberComparator,
  valueParser: (value) => value === "" ? null : Number(value),
  valueFormatter: ({
    value
  }) => isNumber(value) ? value.toLocaleString() : value || "",
  filterOperators: getGridNumericOperators(),
  getApplyQuickFilterFn: getGridNumericQuickFilterFn
});

// node_modules/@mui/x-data-grid/colDef/gridSingleSelectColDef.js
init_extends();

// node_modules/@mui/x-data-grid/components/panel/filterPanel/GridFilterInputSingleSelect.js
init_extends();
init_objectWithoutPropertiesLoose();
var React46 = __toESM(require_react());
var import_prop_types30 = __toESM(require_prop_types());
init_utils();
var import_jsx_runtime47 = __toESM(require_jsx_runtime());
var _excluded25 = ["item", "applyValue", "type", "apiRef", "focusElementRef"];
var renderSingleSelectOptions3 = ({
  valueOptions,
  valueFormatter,
  field
}, api, OptionComponent) => {
  const iterableColumnValues = typeof valueOptions === "function" ? ["", ...valueOptions({
    field
  })] : ["", ...valueOptions || []];
  return iterableColumnValues.map((option) => {
    const isOptionTypeObject = typeof option === "object";
    const key = isOptionTypeObject ? option.value : option;
    const value = isOptionTypeObject ? option.value : option;
    const formattedValue = valueFormatter && option !== "" ? valueFormatter({
      value: option,
      field,
      api
    }) : option;
    const content = isOptionTypeObject ? option.label : formattedValue;
    return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(OptionComponent, {
      value,
      children: content
    }, key);
  });
};
function GridFilterInputSingleSelect(props) {
  var _item$value, _rootProps$components, _baseSelectProps$nati, _rootProps$components2, _rootProps$components3;
  const {
    item,
    applyValue,
    type,
    apiRef,
    focusElementRef
  } = props, others = _objectWithoutPropertiesLoose(props, _excluded25);
  const [filterValueState, setFilterValueState] = React46.useState((_item$value = item.value) != null ? _item$value : "");
  const id = useId_default();
  const rootProps = useGridRootProps();
  const baseSelectProps = ((_rootProps$components = rootProps.componentsProps) == null ? void 0 : _rootProps$components.baseSelect) || {};
  const isSelectNative = (_baseSelectProps$nati = baseSelectProps.native) != null ? _baseSelectProps$nati : true;
  const currentColumn = item.columnField ? apiRef.current.getColumn(item.columnField) : null;
  const currentValueOptions = React46.useMemo(() => {
    if (currentColumn === null) {
      return void 0;
    }
    return typeof currentColumn.valueOptions === "function" ? currentColumn.valueOptions({
      field: currentColumn.field
    }) : currentColumn.valueOptions;
  }, [currentColumn]);
  const onFilterChange = React46.useCallback((event) => {
    let value = event.target.value;
    value = getValueFromValueOptions(value, currentValueOptions);
    setFilterValueState(String(value));
    applyValue(_extends({}, item, {
      value
    }));
  }, [applyValue, item, currentValueOptions]);
  React46.useEffect(() => {
    var _itemValue;
    let itemValue;
    if (currentValueOptions !== void 0) {
      itemValue = getValueFromValueOptions(item.value, currentValueOptions);
      if (itemValue !== item.value) {
        applyValue(_extends({}, item, {
          value: itemValue
        }));
        return;
      }
    } else {
      itemValue = item.value;
    }
    itemValue = (_itemValue = itemValue) != null ? _itemValue : "";
    setFilterValueState(String(itemValue));
  }, [item, currentValueOptions, applyValue]);
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(rootProps.components.BaseTextField, _extends({
    id,
    label: apiRef.current.getLocaleText("filterPanelInputLabel"),
    placeholder: apiRef.current.getLocaleText("filterPanelInputPlaceholder"),
    value: filterValueState,
    onChange: onFilterChange,
    variant: "standard",
    type: type || "text",
    InputLabelProps: {
      shrink: true
    },
    inputRef: focusElementRef,
    select: true,
    SelectProps: _extends({
      native: isSelectNative
    }, (_rootProps$components2 = rootProps.componentsProps) == null ? void 0 : _rootProps$components2.baseSelect)
  }, others, (_rootProps$components3 = rootProps.componentsProps) == null ? void 0 : _rootProps$components3.baseTextField, {
    children: renderSingleSelectOptions3(apiRef.current.getColumn(item.columnField), apiRef.current, isSelectNative ? "option" : MenuItem_default)
  }));
}
true ? GridFilterInputSingleSelect.propTypes = {
  apiRef: import_prop_types30.default.shape({
    current: import_prop_types30.default.object.isRequired
  }).isRequired,
  applyValue: import_prop_types30.default.func.isRequired,
  focusElementRef: import_prop_types30.default.oneOfType([import_prop_types30.default.func, import_prop_types30.default.object]),
  item: import_prop_types30.default.shape({
    columnField: import_prop_types30.default.string.isRequired,
    id: import_prop_types30.default.oneOfType([import_prop_types30.default.number, import_prop_types30.default.string]),
    operatorValue: import_prop_types30.default.string,
    value: import_prop_types30.default.any
  }).isRequired
} : void 0;

// node_modules/@mui/x-data-grid/components/panel/filterPanel/GridFilterInputMultipleSingleSelect.js
init_extends();
init_objectWithoutPropertiesLoose();
var React47 = __toESM(require_react());
var import_prop_types31 = __toESM(require_prop_types());
init_utils();
var import_jsx_runtime48 = __toESM(require_jsx_runtime());
var _excluded26 = ["item", "applyValue", "type", "apiRef", "focusElementRef", "color", "error", "helperText", "size", "variant"];
var isOptionEqualToValue = (option, value) => getValueFromOption(option) === getValueFromOption(value);
var filter = createFilterOptions();
function GridFilterInputMultipleSingleSelect(props) {
  const {
    item,
    applyValue,
    apiRef,
    focusElementRef,
    color,
    error,
    helperText,
    size,
    variant = "standard"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded26);
  const TextFieldProps = {
    color,
    error,
    helperText,
    size,
    variant
  };
  const id = useId_default();
  const rootProps = useGridRootProps();
  const resolvedColumn = item.columnField ? apiRef.current.getColumn(item.columnField) : null;
  const resolvedValueOptions = React47.useMemo(() => {
    if (!(resolvedColumn != null && resolvedColumn.valueOptions)) {
      return [];
    }
    if (typeof resolvedColumn.valueOptions === "function") {
      return resolvedColumn.valueOptions({
        field: resolvedColumn.field
      });
    }
    return resolvedColumn.valueOptions;
  }, [resolvedColumn]);
  const resolvedFormattedValueOptions = React47.useMemo(() => {
    return resolvedValueOptions == null ? void 0 : resolvedValueOptions.map(getValueFromOption);
  }, [resolvedValueOptions]);
  const {
    valueFormatter,
    field
  } = apiRef.current.getColumn(item.columnField);
  const filterValueOptionFormatter = (option) => {
    if (typeof option === "object") {
      return option.label;
    }
    return valueFormatter && option !== "" ? valueFormatter({
      value: option,
      field,
      api: apiRef.current
    }) : option;
  };
  const filterValues = React47.useMemo(() => {
    if (!Array.isArray(item.value)) {
      return [];
    }
    if (resolvedValueOptions !== void 0) {
      const itemValueIndexes = item.value.map((element) => {
        const formattedElement = getValueFromOption(element);
        const index = (resolvedFormattedValueOptions == null ? void 0 : resolvedFormattedValueOptions.findIndex((formatedOption) => formatedOption === formattedElement)) || 0;
        return index;
      });
      return itemValueIndexes.filter((index) => index >= 0).map((index) => resolvedValueOptions[index]);
    }
    return item.value;
  }, [item.value, resolvedValueOptions, resolvedFormattedValueOptions]);
  React47.useEffect(() => {
    if (!Array.isArray(item.value) || filterValues.length !== item.value.length) {
      applyValue(_extends({}, item, {
        value: filterValues.map(getValueFromOption)
      }));
    }
  }, [item, filterValues, applyValue]);
  const handleChange = React47.useCallback((event, value) => {
    applyValue(_extends({}, item, {
      value: [...value.map(getValueFromOption)]
    }));
  }, [applyValue, item]);
  return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(Autocomplete_default, _extends({
    multiple: true,
    limitTags: 1,
    options: resolvedValueOptions,
    isOptionEqualToValue,
    filterOptions: filter,
    id,
    value: filterValues,
    onChange: handleChange,
    renderTags: (value, getTagProps) => value.map((option, index) => /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(Chip_default, _extends({
      variant: "outlined",
      size: "small",
      label: filterValueOptionFormatter(option)
    }, getTagProps({
      index
    })))),
    renderInput: (params) => {
      var _rootProps$components;
      return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(rootProps.components.BaseTextField, _extends({}, params, {
        label: apiRef.current.getLocaleText("filterPanelInputLabel"),
        placeholder: apiRef.current.getLocaleText("filterPanelInputPlaceholder"),
        InputLabelProps: _extends({}, params.InputLabelProps, {
          shrink: true
        }),
        inputRef: focusElementRef,
        type: "singleSelect"
      }, TextFieldProps, (_rootProps$components = rootProps.componentsProps) == null ? void 0 : _rootProps$components.baseTextField));
    }
  }, other));
}
true ? GridFilterInputMultipleSingleSelect.propTypes = {
  apiRef: import_prop_types31.default.shape({
    current: import_prop_types31.default.object.isRequired
  }).isRequired,
  applyValue: import_prop_types31.default.func.isRequired,
  focusElementRef: import_prop_types31.default.oneOfType([import_prop_types31.default.func, import_prop_types31.default.object]),
  item: import_prop_types31.default.shape({
    columnField: import_prop_types31.default.string.isRequired,
    id: import_prop_types31.default.oneOfType([import_prop_types31.default.number, import_prop_types31.default.string]),
    operatorValue: import_prop_types31.default.string,
    value: import_prop_types31.default.any
  }).isRequired,
  type: import_prop_types31.default.oneOf(["singleSelect"])
} : void 0;

// node_modules/@mui/x-data-grid/colDef/gridSingleSelectOperators.js
var parseObjectValue = (value) => {
  if (value == null || typeof value !== "object") {
    return value;
  }
  return value.value;
};
var getGridSingleSelectQuickFilterFn = (value, column, apiRef) => {
  if (!value) {
    return null;
  }
  const {
    valueOptions,
    valueFormatter,
    field
  } = column;
  const potentialValues = [parseObjectValue(value).toString()];
  const iterableColumnValues = typeof valueOptions === "function" ? valueOptions({
    field
  }) : valueOptions || [];
  if (iterableColumnValues) {
    iterableColumnValues.forEach((option) => {
      let optionValue;
      let optionLabel;
      if (typeof option === "object") {
        optionValue = option.value;
        optionLabel = option.label;
      } else {
        optionValue = option;
        if (valueFormatter) {
          optionLabel = valueFormatter({
            value: option,
            field,
            api: apiRef.current
          });
        } else {
          optionLabel = option;
        }
      }
      if (optionLabel.slice(0, value.length).toLowerCase() === value.toLowerCase()) {
        if (!potentialValues.includes(optionValue)) {
          potentialValues.push(optionValue.toString());
        }
      }
    });
  }
  return ({
    value: columnValue
  }) => {
    return columnValue != null ? potentialValues.includes(parseObjectValue(columnValue).toString()) : false;
  };
};
var getGridSingleSelectOperators = () => [{
  value: "is",
  getApplyFilterFn: (filterItem) => {
    if (filterItem.value == null || filterItem.value === "") {
      return null;
    }
    return ({
      value
    }) => parseObjectValue(value) === parseObjectValue(filterItem.value);
  },
  InputComponent: GridFilterInputSingleSelect
}, {
  value: "not",
  getApplyFilterFn: (filterItem) => {
    if (filterItem.value == null || filterItem.value === "") {
      return null;
    }
    return ({
      value
    }) => parseObjectValue(value) !== parseObjectValue(filterItem.value);
  },
  InputComponent: GridFilterInputSingleSelect
}, {
  value: "isAnyOf",
  getApplyFilterFn: (filterItem) => {
    if (!Array.isArray(filterItem.value) || filterItem.value.length === 0) {
      return null;
    }
    const filterItemValues = filterItem.value.map(parseObjectValue);
    return ({
      value
    }) => filterItemValues.includes(parseObjectValue(value));
  },
  InputComponent: GridFilterInputMultipleSingleSelect
}];

// node_modules/@mui/x-data-grid/colDef/gridSingleSelectColDef.js
var GRID_SINGLE_SELECT_COL_DEF = _extends({}, GRID_STRING_COL_DEF, {
  type: "singleSelect",
  renderEditCell: renderEditSingleSelectCell,
  filterOperators: getGridSingleSelectOperators(),
  getApplyQuickFilterFn: getGridSingleSelectQuickFilterFn
});

// node_modules/@mui/x-data-grid/colDef/gridDefaultColumnTypes.js
var DEFAULT_GRID_COL_TYPE_KEY = "__default__";
var getGridDefaultColumnTypes = () => {
  const nativeColumnTypes = {
    string: GRID_STRING_COL_DEF,
    number: GRID_NUMERIC_COL_DEF,
    date: GRID_DATE_COL_DEF,
    dateTime: GRID_DATETIME_COL_DEF,
    boolean: GRID_BOOLEAN_COL_DEF,
    singleSelect: GRID_SINGLE_SELECT_COL_DEF,
    [GRID_ACTIONS_COLUMN_TYPE]: GRID_ACTIONS_COL_DEF,
    [DEFAULT_GRID_COL_TYPE_KEY]: GRID_STRING_COL_DEF
  };
  return nativeColumnTypes;
};

// node_modules/@mui/x-data-grid/hooks/features/columns/gridColumnsUtils.js
var COLUMNS_DIMENSION_PROPERTIES = ["maxWidth", "minWidth", "width", "flex"];
var computeColumnTypes = (customColumnTypes = {}) => {
  const mergedColumnTypes = _extends({}, getGridDefaultColumnTypes());
  Object.entries(customColumnTypes).forEach(([colType, colTypeDef]) => {
    if (mergedColumnTypes[colType]) {
      mergedColumnTypes[colType] = _extends({}, mergedColumnTypes[colType], colTypeDef);
    } else {
      mergedColumnTypes[colType] = _extends({}, mergedColumnTypes[colTypeDef.extendType || DEFAULT_GRID_COL_TYPE_KEY], colTypeDef);
    }
  });
  return mergedColumnTypes;
};
function computeFlexColumnsWidth({
  initialFreeSpace,
  totalFlexUnits,
  flexColumns
}) {
  const flexColumnsLookup = {
    all: {},
    frozenFields: [],
    freeze: (field) => {
      const value = flexColumnsLookup.all[field];
      if (value && value.frozen !== true) {
        flexColumnsLookup.all[field].frozen = true;
        flexColumnsLookup.frozenFields.push(field);
      }
    }
  };
  function loopOverFlexItems() {
    if (flexColumnsLookup.frozenFields.length === flexColumns.length) {
      return;
    }
    const violationsLookup = {
      min: {},
      max: {}
    };
    let remainingFreeSpace = initialFreeSpace;
    let flexUnits = totalFlexUnits;
    let totalViolation = 0;
    flexColumnsLookup.frozenFields.forEach((field) => {
      remainingFreeSpace -= flexColumnsLookup.all[field].computedWidth;
      flexUnits -= flexColumnsLookup.all[field].flex;
    });
    for (let i = 0; i < flexColumns.length; i += 1) {
      const column = flexColumns[i];
      if (flexColumnsLookup.all[column.field] && flexColumnsLookup.all[column.field].frozen === true) {
        continue;
      }
      const widthPerFlexUnit = remainingFreeSpace / flexUnits;
      let computedWidth = widthPerFlexUnit * column.flex;
      if (computedWidth < column.minWidth) {
        totalViolation += column.minWidth - computedWidth;
        computedWidth = column.minWidth;
        violationsLookup.min[column.field] = true;
      } else if (computedWidth > column.maxWidth) {
        totalViolation += column.maxWidth - computedWidth;
        computedWidth = column.maxWidth;
        violationsLookup.max[column.field] = true;
      }
      flexColumnsLookup.all[column.field] = {
        frozen: false,
        computedWidth,
        flex: column.flex
      };
    }
    if (totalViolation < 0) {
      Object.keys(violationsLookup.max).forEach((field) => {
        flexColumnsLookup.freeze(field);
      });
    } else if (totalViolation > 0) {
      Object.keys(violationsLookup.min).forEach((field) => {
        flexColumnsLookup.freeze(field);
      });
    } else {
      flexColumns.forEach(({
        field
      }) => {
        flexColumnsLookup.freeze(field);
      });
    }
    loopOverFlexItems();
  }
  loopOverFlexItems();
  return flexColumnsLookup.all;
}
var hydrateColumnsWidth = (rawState, viewportInnerWidth) => {
  const columnsLookup = {};
  let totalFlexUnits = 0;
  let widthAllocatedBeforeFlex = 0;
  const flexColumns = [];
  rawState.all.forEach((columnField) => {
    const newColumn = _extends({}, rawState.lookup[columnField]);
    if (rawState.columnVisibilityModel[columnField] === false) {
      newColumn.computedWidth = 0;
    } else {
      let computedWidth;
      if (newColumn.flex && newColumn.flex > 0) {
        totalFlexUnits += newColumn.flex;
        computedWidth = 0;
        flexColumns.push(newColumn);
      } else {
        computedWidth = clamp(newColumn.width, newColumn.minWidth, newColumn.maxWidth);
      }
      widthAllocatedBeforeFlex += computedWidth;
      newColumn.computedWidth = computedWidth;
    }
    columnsLookup[columnField] = newColumn;
  });
  const initialFreeSpace = Math.max(viewportInnerWidth - widthAllocatedBeforeFlex, 0);
  if (totalFlexUnits > 0 && viewportInnerWidth > 0) {
    const computedColumnWidths = computeFlexColumnsWidth({
      initialFreeSpace,
      totalFlexUnits,
      flexColumns
    });
    Object.keys(computedColumnWidths).forEach((field) => {
      columnsLookup[field].computedWidth = computedColumnWidths[field].computedWidth;
    });
  }
  return _extends({}, rawState, {
    lookup: columnsLookup
  });
};
var columnTypeWarnedOnce = false;
var applyInitialState = (columnsState, initialState) => {
  if (!initialState) {
    return columnsState;
  }
  const {
    orderedFields = [],
    dimensions = {}
  } = initialState;
  const columnsWithUpdatedDimensions = Object.keys(dimensions);
  if (columnsWithUpdatedDimensions.length === 0 && orderedFields.length === 0) {
    return columnsState;
  }
  const orderedFieldsLookup = {};
  const cleanOrderedFields = [];
  for (let i = 0; i < orderedFields.length; i += 1) {
    const field = orderedFields[i];
    if (columnsState.lookup[field]) {
      orderedFieldsLookup[field] = true;
      cleanOrderedFields.push(field);
    }
  }
  const newOrderedFields = cleanOrderedFields.length === 0 ? columnsState.all : [...cleanOrderedFields, ...columnsState.all.filter((field) => !orderedFieldsLookup[field])];
  const newColumnLookup = _extends({}, columnsState.lookup);
  for (let i = 0; i < columnsWithUpdatedDimensions.length; i += 1) {
    const field = columnsWithUpdatedDimensions[i];
    const newColDef = _extends({}, newColumnLookup[field], {
      hasBeenResized: true
    });
    Object.entries(dimensions[field]).forEach(([key, value]) => {
      newColDef[key] = value === -1 ? Infinity : value;
    });
    newColumnLookup[field] = newColDef;
  }
  const newColumnsState = {
    all: newOrderedFields,
    lookup: newColumnLookup
  };
  return newColumnsState;
};
var getGridColDef = (columnTypes, type) => {
  if (!type) {
    return columnTypes[DEFAULT_GRID_COL_TYPE_KEY];
  }
  if (true) {
    if (!columnTypeWarnedOnce && !columnTypes[type]) {
      console.warn([`MUI: The column type "${type}" you are using is not supported.`, `Column type "string" is being used instead.`].join("\n"));
      columnTypeWarnedOnce = true;
    }
  }
  if (!columnTypes[type]) {
    return columnTypes[DEFAULT_GRID_COL_TYPE_KEY];
  }
  return columnTypes[type];
};
var createColumnsState = ({
  apiRef,
  columnsToUpsert,
  initialState,
  columnTypes,
  currentColumnVisibilityModel = gridColumnVisibilityModelSelector(apiRef),
  shouldRegenColumnVisibilityModelFromColumns,
  keepOnlyColumnsToUpsert = false
}) => {
  var _apiRef$current$getRo, _apiRef$current$getRo2, _apiRef$current, _apiRef$current$getRo3;
  const isInsideStateInitializer = !apiRef.current.state.columns;
  let columnsStateWithoutColumnVisibilityModel;
  if (isInsideStateInitializer) {
    columnsStateWithoutColumnVisibilityModel = {
      all: [],
      lookup: {}
    };
  } else {
    const currentState = gridColumnsSelector(apiRef.current.state);
    columnsStateWithoutColumnVisibilityModel = {
      all: keepOnlyColumnsToUpsert ? [] : [...currentState.all],
      lookup: _extends({}, currentState.lookup)
    };
  }
  let columnsToKeep = {};
  if (keepOnlyColumnsToUpsert && !isInsideStateInitializer) {
    columnsToKeep = Object.keys(columnsStateWithoutColumnVisibilityModel.lookup).reduce((acc, key) => _extends({}, acc, {
      [key]: false
    }), {});
  }
  const columnsToUpsertLookup = {};
  columnsToUpsert.forEach((newColumn) => {
    const {
      field
    } = newColumn;
    columnsToUpsertLookup[field] = true;
    columnsToKeep[field] = true;
    let existingState = columnsStateWithoutColumnVisibilityModel.lookup[field];
    if (existingState == null) {
      existingState = _extends({}, getGridColDef(columnTypes, newColumn.type), {
        field,
        hasBeenResized: false
      });
      columnsStateWithoutColumnVisibilityModel.all.push(field);
    } else if (keepOnlyColumnsToUpsert) {
      columnsStateWithoutColumnVisibilityModel.all.push(field);
    }
    let hasBeenResized = existingState.hasBeenResized;
    COLUMNS_DIMENSION_PROPERTIES.forEach((key) => {
      if (newColumn[key] !== void 0) {
        hasBeenResized = true;
        if (newColumn[key] === -1) {
          newColumn[key] = Infinity;
        }
      }
    });
    columnsStateWithoutColumnVisibilityModel.lookup[field] = _extends({}, existingState, {
      hide: newColumn.hide == null ? false : newColumn.hide
    }, newColumn, {
      hasBeenResized
    });
  });
  if (keepOnlyColumnsToUpsert && !isInsideStateInitializer) {
    Object.keys(columnsStateWithoutColumnVisibilityModel.lookup).forEach((field) => {
      if (!columnsToKeep[field]) {
        delete columnsStateWithoutColumnVisibilityModel.lookup[field];
      }
    });
  }
  const columnsLookupBeforePreProcessing = _extends({}, columnsStateWithoutColumnVisibilityModel.lookup);
  const columnsStateWithPreProcessing = apiRef.current.unstable_applyPipeProcessors("hydrateColumns", columnsStateWithoutColumnVisibilityModel);
  let columnVisibilityModel = {};
  if (shouldRegenColumnVisibilityModelFromColumns) {
    let hasModelChanged = false;
    const newColumnVisibilityModel = _extends({}, currentColumnVisibilityModel);
    if (isInsideStateInitializer) {
      columnsStateWithPreProcessing.all.forEach((field) => {
        newColumnVisibilityModel[field] = !columnsStateWithoutColumnVisibilityModel.lookup[field].hide;
      });
    } else if (keepOnlyColumnsToUpsert) {
      Object.keys(newColumnVisibilityModel).forEach((field) => {
        if (!columnsStateWithPreProcessing.lookup[field]) {
          delete newColumnVisibilityModel[field];
          hasModelChanged = true;
        }
      });
    }
    columnsStateWithPreProcessing.all.forEach((field) => {
      if (!columnsToUpsertLookup[field] && columnsLookupBeforePreProcessing[field] === columnsStateWithPreProcessing.lookup[field]) {
        return;
      }
      let isVisibleBefore = currentColumnVisibilityModel[field];
      if (isVisibleBefore === void 0) {
        if (isInsideStateInitializer) {
          isVisibleBefore = true;
        } else {
          const currentState = gridColumnsSelector(apiRef.current.state);
          isVisibleBefore = !!currentState.lookup[field];
        }
      }
      const isVisibleAfter = !columnsStateWithPreProcessing.lookup[field].hide;
      if (isVisibleAfter !== isVisibleBefore) {
        hasModelChanged = true;
        newColumnVisibilityModel[field] = isVisibleAfter;
      }
    });
    if (hasModelChanged || isInsideStateInitializer) {
      columnVisibilityModel = newColumnVisibilityModel;
    } else {
      columnVisibilityModel = currentColumnVisibilityModel;
    }
  } else {
    columnVisibilityModel = currentColumnVisibilityModel;
  }
  const columnsStateWithPortableColumns = applyInitialState(columnsStateWithPreProcessing, initialState);
  const columnsState = _extends({}, columnsStateWithPortableColumns, {
    columnVisibilityModel
  });
  return hydrateColumnsWidth(columnsState, (_apiRef$current$getRo = (_apiRef$current$getRo2 = (_apiRef$current = apiRef.current).getRootDimensions) == null ? void 0 : (_apiRef$current$getRo3 = _apiRef$current$getRo2.call(_apiRef$current)) == null ? void 0 : _apiRef$current$getRo3.viewportInnerSize.width) != null ? _apiRef$current$getRo : 0);
};
var mergeColumnsState = (columnsState) => (state) => _extends({}, state, {
  columns: columnsState
});
function getFirstNonSpannedColumnToRender({
  firstColumnToRender,
  apiRef,
  firstRowToRender,
  lastRowToRender,
  visibleRows
}) {
  let firstNonSpannedColumnToRender = firstColumnToRender;
  for (let i = firstRowToRender; i < lastRowToRender; i += 1) {
    const row = visibleRows[i];
    if (row) {
      const rowId = visibleRows[i].id;
      const cellColSpanInfo = apiRef.current.unstable_getCellColSpanInfo(rowId, firstColumnToRender);
      if (cellColSpanInfo && cellColSpanInfo.spannedByColSpan) {
        firstNonSpannedColumnToRender = cellColSpanInfo.leftVisibleCellIndex;
      }
    }
  }
  return firstNonSpannedColumnToRender;
}
function getFirstColumnIndexToRender({
  firstColumnIndex,
  minColumnIndex,
  columnBuffer,
  firstRowToRender,
  lastRowToRender,
  apiRef,
  visibleRows
}) {
  const initialFirstColumnToRender = Math.max(firstColumnIndex - columnBuffer, minColumnIndex);
  const firstColumnToRender = getFirstNonSpannedColumnToRender({
    firstColumnToRender: initialFirstColumnToRender,
    apiRef,
    firstRowToRender,
    lastRowToRender,
    visibleRows
  });
  return firstColumnToRender;
}

// node_modules/@mui/x-data-grid/components/menu/columnMenu/HideGridColMenuItem.js
var import_jsx_runtime49 = __toESM(require_jsx_runtime());
var HideGridColMenuItem = (props) => {
  const {
    column,
    onClick
  } = props;
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const timeoutRef = React48.useRef();
  const visibleColumns = gridVisibleColumnDefinitionsSelector(apiRef);
  const columnsWithMenu = visibleColumns.filter((col) => col.disableColumnMenu !== true);
  const disabled = columnsWithMenu.length === 1;
  const toggleColumn = React48.useCallback((event) => {
    if (disabled) {
      return;
    }
    onClick(event);
    timeoutRef.current = setTimeout(() => {
      apiRef.current.setColumnVisibility(column == null ? void 0 : column.field, false);
    }, 100);
  }, [apiRef, column == null ? void 0 : column.field, onClick, disabled]);
  React48.useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);
  if (rootProps.disableColumnSelector) {
    return null;
  }
  if (column.hideable === false) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(MenuItem_default, {
    onClick: toggleColumn,
    disabled,
    children: apiRef.current.getLocaleText("columnMenuHideColumn")
  });
};
true ? HideGridColMenuItem.propTypes = {
  column: import_prop_types32.default.object.isRequired,
  onClick: import_prop_types32.default.func.isRequired
} : void 0;

// node_modules/@mui/x-data-grid/components/menu/columnMenu/SortGridMenuItems.js
var React49 = __toESM(require_react());
var import_prop_types33 = __toESM(require_prop_types());
var import_jsx_runtime50 = __toESM(require_jsx_runtime());
var import_jsx_runtime51 = __toESM(require_jsx_runtime());
var SortGridMenuItems = (props) => {
  const {
    column,
    onClick
  } = props;
  const apiRef = useGridApiContext();
  const sortModel = useGridSelector(apiRef, gridSortModelSelector);
  const sortDirection = React49.useMemo(() => {
    if (!column) {
      return null;
    }
    const sortItem = sortModel.find((item) => item.field === column.field);
    return sortItem == null ? void 0 : sortItem.sort;
  }, [column, sortModel]);
  const onSortMenuItemClick = React49.useCallback((event) => {
    onClick(event);
    const direction = event.currentTarget.getAttribute("data-value") || null;
    apiRef.current.sortColumn(column, direction);
  }, [apiRef, column, onClick]);
  if (!column || !column.sortable) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(React49.Fragment, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime50.jsx)(MenuItem_default, {
      onClick: onSortMenuItemClick,
      disabled: sortDirection == null,
      children: apiRef.current.getLocaleText("columnMenuUnsort")
    }), /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(MenuItem_default, {
      onClick: onSortMenuItemClick,
      "data-value": "asc",
      disabled: sortDirection === "asc",
      children: apiRef.current.getLocaleText("columnMenuSortAsc")
    }), /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(MenuItem_default, {
      onClick: onSortMenuItemClick,
      "data-value": "desc",
      disabled: sortDirection === "desc",
      children: apiRef.current.getLocaleText("columnMenuSortDesc")
    })]
  });
};
true ? SortGridMenuItems.propTypes = {
  column: import_prop_types33.default.object.isRequired,
  onClick: import_prop_types33.default.func.isRequired
} : void 0;

// node_modules/@mui/x-data-grid/components/menu/columnMenu/GridColumnMenu.js
var import_jsx_runtime52 = __toESM(require_jsx_runtime());
var GridColumnMenu = /* @__PURE__ */ React50.forwardRef(function GridColumnMenu2(props, ref) {
  const {
    hideMenu,
    currentColumn
  } = props;
  const apiRef = useGridApiContext();
  const defaultButtons = [
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(SortGridMenuItems, {
      onClick: hideMenu,
      column: currentColumn
    }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(GridFilterMenuItem, {
      onClick: hideMenu,
      column: currentColumn
    }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(HideGridColMenuItem, {
      onClick: hideMenu,
      column: currentColumn
    }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(GridColumnsMenuItem, {
      onClick: hideMenu,
      column: currentColumn
    })
  ];
  const preProcessedButtons = apiRef.current.unstable_applyPipeProcessors("columnMenu", defaultButtons, currentColumn);
  return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(GridColumnMenuContainer, _extends({
    ref
  }, props, {
    children: preProcessedButtons.map((button, index) => /* @__PURE__ */ React50.cloneElement(button, {
      key: index,
      onClick: hideMenu,
      column: currentColumn
    }))
  }));
});
true ? GridColumnMenu.propTypes = {
  currentColumn: import_prop_types34.default.object.isRequired,
  hideMenu: import_prop_types34.default.func.isRequired,
  id: import_prop_types34.default.string,
  labelledby: import_prop_types34.default.string,
  open: import_prop_types34.default.bool.isRequired
} : void 0;

// node_modules/@mui/x-data-grid/components/panel/GridColumnsPanel.js
init_extends();
init_objectWithoutPropertiesLoose();
var React55 = __toESM(require_react());
var import_prop_types38 = __toESM(require_prop_types());

// node_modules/@mui/x-data-grid/components/panel/GridPanelContent.js
init_extends();
init_objectWithoutPropertiesLoose();
var React51 = __toESM(require_react());
var import_prop_types35 = __toESM(require_prop_types());
init_clsx_m();
var import_jsx_runtime53 = __toESM(require_jsx_runtime());
var _excluded27 = ["className"];
var useUtilityClasses21 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["panelContent"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
var GridPanelContentRoot = styled_default("div", {
  name: "MuiDataGrid",
  slot: "PanelContent",
  overridesResolver: (props, styles) => styles.panelContent
})({
  display: "flex",
  flexDirection: "column",
  overflow: "auto",
  flex: "1 1",
  maxHeight: 400
});
function GridPanelContent(props) {
  const {
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded27);
  const rootProps = useGridRootProps();
  const ownerState = {
    classes: rootProps.classes
  };
  const classes = useUtilityClasses21(ownerState);
  return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(GridPanelContentRoot, _extends({
    className: clsx_m_default(className, classes.root)
  }, other));
}
true ? GridPanelContent.propTypes = {
  sx: import_prop_types35.default.oneOfType([import_prop_types35.default.arrayOf(import_prop_types35.default.oneOfType([import_prop_types35.default.func, import_prop_types35.default.object, import_prop_types35.default.bool])), import_prop_types35.default.func, import_prop_types35.default.object])
} : void 0;

// node_modules/@mui/x-data-grid/components/panel/GridPanelFooter.js
init_extends();
init_objectWithoutPropertiesLoose();
var React52 = __toESM(require_react());
var import_prop_types36 = __toESM(require_prop_types());
init_clsx_m();
var import_jsx_runtime54 = __toESM(require_jsx_runtime());
var _excluded28 = ["className"];
var useUtilityClasses22 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["panelFooter"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
var GridPanelFooterRoot = styled_default("div", {
  name: "MuiDataGrid",
  slot: "PanelFooter",
  overridesResolver: (props, styles) => styles.panelFooter
})(({
  theme: theme2
}) => ({
  padding: theme2.spacing(0.5),
  display: "flex",
  justifyContent: "space-between"
}));
function GridPanelFooter(props) {
  const {
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded28);
  const rootProps = useGridRootProps();
  const ownerState = {
    classes: rootProps.classes
  };
  const classes = useUtilityClasses22(ownerState);
  return /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(GridPanelFooterRoot, _extends({
    className: clsx_m_default(className, classes.root)
  }, other));
}
true ? GridPanelFooter.propTypes = {
  sx: import_prop_types36.default.oneOfType([import_prop_types36.default.arrayOf(import_prop_types36.default.oneOfType([import_prop_types36.default.func, import_prop_types36.default.object, import_prop_types36.default.bool])), import_prop_types36.default.func, import_prop_types36.default.object])
} : void 0;

// node_modules/@mui/x-data-grid/components/panel/GridPanelHeader.js
init_extends();
init_objectWithoutPropertiesLoose();
var React53 = __toESM(require_react());
var import_prop_types37 = __toESM(require_prop_types());
init_clsx_m();
var import_jsx_runtime55 = __toESM(require_jsx_runtime());
var _excluded29 = ["className"];
var useUtilityClasses23 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["panelHeader"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
var GridPanelHeaderRoot = styled_default("div", {
  name: "MuiDataGrid",
  slot: "PanelHeader",
  overridesResolver: (props, styles) => styles.panelHeader
})(({
  theme: theme2
}) => ({
  padding: theme2.spacing(1)
}));
function GridPanelHeader(props) {
  const {
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded29);
  const rootProps = useGridRootProps();
  const ownerState = {
    classes: rootProps.classes
  };
  const classes = useUtilityClasses23(ownerState);
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(GridPanelHeaderRoot, _extends({
    className: clsx_m_default(className, classes.root)
  }, other));
}
true ? GridPanelHeader.propTypes = {
  sx: import_prop_types37.default.oneOfType([import_prop_types37.default.arrayOf(import_prop_types37.default.oneOfType([import_prop_types37.default.func, import_prop_types37.default.object, import_prop_types37.default.bool])), import_prop_types37.default.func, import_prop_types37.default.object])
} : void 0;

// node_modules/@mui/x-data-grid/components/panel/GridPanelWrapper.js
init_extends();
init_objectWithoutPropertiesLoose();
var React54 = __toESM(require_react());
init_clsx_m();

// node_modules/@mui/material/esm/Unstable_TrapFocus/index.js
init_TrapFocus();

// node_modules/@mui/x-data-grid/components/panel/GridPanelWrapper.js
var import_jsx_runtime56 = __toESM(require_jsx_runtime());
var _excluded30 = ["className"];
var useUtilityClasses24 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["panelWrapper"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
var GridPanelWrapperRoot = styled_default("div", {
  name: "MuiDataGrid",
  slot: "PanelWrapper",
  overridesResolver: (props, styles) => styles.panelWrapper
})({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  "&:focus": {
    outline: 0
  }
});
var isEnabled = () => true;
var GridPanelWrapper = /* @__PURE__ */ React54.forwardRef(function GridPanelWrapper2(props, ref) {
  const {
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded30);
  const rootProps = useGridRootProps();
  const ownerState = {
    classes: rootProps.classes
  };
  const classes = useUtilityClasses24(ownerState);
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(TrapFocus_default, {
    open: true,
    disableEnforceFocus: true,
    isEnabled,
    children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(GridPanelWrapperRoot, _extends({
      ref,
      tabIndex: -1,
      className: clsx_m_default(className, classes.root)
    }, other))
  });
});

// node_modules/@mui/x-data-grid/constants/envConstants.js
var GRID_EXPERIMENTAL_ENABLED = false;

// node_modules/@mui/x-data-grid/components/panel/GridColumnsPanel.js
var import_jsx_runtime57 = __toESM(require_jsx_runtime());
var import_jsx_runtime58 = __toESM(require_jsx_runtime());
var _excluded31 = ["sort"];
var useUtilityClasses25 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["columnsPanel"],
    columnsPanelRow: ["columnsPanelRow"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
var GridColumnsPanelRoot = styled_default("div", {
  name: "MuiDataGrid",
  slot: "ColumnsPanel",
  overridesResolver: (props, styles) => styles.columnsPanel
})(() => ({
  padding: "8px 0px 8px 8px"
}));
var GridColumnsPanelRowRoot = styled_default("div", {
  name: "MuiDataGrid",
  slot: "ColumnsPanelRow",
  overridesResolver: (props, styles) => styles.columnsPanelRow
})(({
  theme: theme2
}) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "1px 8px 1px 7px",
  [`& .${switchClasses_default.root}`]: {
    marginRight: theme2.spacing(0.5)
  }
}));
var GridIconButtonRoot = styled_default(IconButton_default)({
  justifyContent: "flex-end"
});
var collator2 = new Intl.Collator();
function GridColumnsPanel(props) {
  var _rootProps$components, _rootProps$components3, _rootProps$components4;
  const apiRef = useGridApiContext();
  const searchInputRef = React55.useRef(null);
  const columns2 = useGridSelector(apiRef, gridColumnDefinitionsSelector);
  const columnVisibilityModel = useGridSelector(apiRef, gridColumnVisibilityModelSelector);
  const rootProps = useGridRootProps();
  const [searchValue, setSearchValue] = React55.useState("");
  const ownerState = {
    classes: rootProps.classes
  };
  const classes = useUtilityClasses25(ownerState);
  const {
    sort
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded31);
  const sortedColumns = React55.useMemo(() => {
    switch (sort) {
      case "asc":
        return [...columns2].sort((a, b) => collator2.compare(a.headerName || a.field, b.headerName || b.field));
      case "desc":
        return [...columns2].sort((a, b) => -collator2.compare(a.headerName || a.field, b.headerName || b.field));
      default:
        return columns2;
    }
  }, [columns2, sort]);
  const toggleColumn = (event) => {
    const {
      name: field
    } = event.target;
    apiRef.current.setColumnVisibility(field, columnVisibilityModel[field] === false);
  };
  const toggleAllColumns = React55.useCallback((isVisible) => {
    if (apiRef.current.unstable_caches.columns.isUsingColumnVisibilityModel) {
      if (isVisible) {
        return apiRef.current.setColumnVisibilityModel({});
      }
      return apiRef.current.setColumnVisibilityModel(Object.fromEntries(columns2.filter((col) => col.hideable !== false).map((col) => [col.field, false])));
    }
    return apiRef.current.updateColumns(columns2.map((col) => {
      if (col.hideable !== false) {
        return {
          field: col.field,
          hide: !isVisible
        };
      }
      return col;
    }));
  }, [apiRef, columns2]);
  const handleSearchValueChange = React55.useCallback((event) => {
    setSearchValue(event.target.value);
  }, []);
  const currentColumns = React55.useMemo(() => {
    if (!searchValue) {
      return sortedColumns;
    }
    const searchValueToCheck = searchValue.toLowerCase();
    return sortedColumns.filter((column) => (column.headerName || column.field).toLowerCase().indexOf(searchValueToCheck) > -1);
  }, [sortedColumns, searchValue]);
  React55.useEffect(() => {
    searchInputRef.current.focus();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(GridPanelWrapper, _extends({}, other, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime57.jsx)(GridPanelHeader, {
      children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(rootProps.components.BaseTextField, _extends({
        label: apiRef.current.getLocaleText("columnsPanelTextFieldLabel"),
        placeholder: apiRef.current.getLocaleText("columnsPanelTextFieldPlaceholder"),
        inputRef: searchInputRef,
        value: searchValue,
        onChange: handleSearchValueChange,
        variant: "standard",
        fullWidth: true
      }, (_rootProps$components = rootProps.componentsProps) == null ? void 0 : _rootProps$components.baseTextField))
    }), /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(GridPanelContent, {
      children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(GridColumnsPanelRoot, {
        className: classes.root,
        children: currentColumns.map((column) => {
          var _rootProps$components2;
          return /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(GridColumnsPanelRowRoot, {
            className: classes.columnsPanelRow,
            children: [/* @__PURE__ */ (0, import_jsx_runtime57.jsx)(FormControlLabel_default, {
              control: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(rootProps.components.BaseSwitch, _extends({
                disabled: column.hideable === false,
                checked: columnVisibilityModel[column.field] !== false,
                onClick: toggleColumn,
                name: column.field,
                size: "small"
              }, (_rootProps$components2 = rootProps.componentsProps) == null ? void 0 : _rootProps$components2.baseSwitch)),
              label: column.headerName || column.field
            }), !rootProps.disableColumnReorder && GRID_EXPERIMENTAL_ENABLED && /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(GridIconButtonRoot, {
              draggable: true,
              "aria-label": apiRef.current.getLocaleText("columnsPanelDragIconLabel"),
              title: apiRef.current.getLocaleText("columnsPanelDragIconLabel"),
              size: "small",
              disabled: true,
              children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(GridDragIcon, {})
            })]
          }, column.field);
        })
      })
    }), /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(GridPanelFooter, {
      children: [/* @__PURE__ */ (0, import_jsx_runtime57.jsx)(rootProps.components.BaseButton, _extends({
        onClick: () => toggleAllColumns(false)
      }, (_rootProps$components3 = rootProps.componentsProps) == null ? void 0 : _rootProps$components3.baseButton, {
        children: apiRef.current.getLocaleText("columnsPanelHideAllButton")
      })), /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(rootProps.components.BaseButton, _extends({
        onClick: () => toggleAllColumns(true)
      }, (_rootProps$components4 = rootProps.componentsProps) == null ? void 0 : _rootProps$components4.baseButton, {
        children: apiRef.current.getLocaleText("columnsPanelShowAllButton")
      }))]
    })]
  }));
}
true ? GridColumnsPanel.propTypes = {
  sort: import_prop_types38.default.oneOf(["asc", "desc"])
} : void 0;

// node_modules/@mui/x-data-grid/components/panel/GridPanel.js
init_extends();
init_objectWithoutPropertiesLoose();
var React56 = __toESM(require_react());
var import_prop_types39 = __toESM(require_prop_types());
init_clsx_m();
var import_jsx_runtime59 = __toESM(require_jsx_runtime());
var _excluded32 = ["children", "className", "classes"];
var gridPanelClasses = generateUtilityClasses("MuiDataGrid", ["panel", "paper"]);
var GridPanelRoot = styled_default(Popper_default, {
  name: "MuiDataGrid",
  slot: "Panel",
  overridesResolver: (props, styles) => styles.panel
})(({
  theme: theme2
}) => ({
  zIndex: theme2.zIndex.modal
}));
var GridPaperRoot = styled_default(Paper_default, {
  name: "MuiDataGrid",
  slot: "Paper",
  overridesResolver: (props, styles) => styles.paper
})(({
  theme: theme2
}) => ({
  backgroundColor: theme2.palette.background.paper,
  minWidth: 300,
  maxHeight: 450,
  display: "flex"
}));
var GridPanel = /* @__PURE__ */ React56.forwardRef((props, ref) => {
  var _apiRef$current$colum;
  const {
    children,
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded32);
  const apiRef = useGridApiContext();
  const classes = gridPanelClasses;
  const [isPlaced, setIsPlaced] = React56.useState(false);
  const handleClickAway = React56.useCallback(() => {
    apiRef.current.hidePreferences();
  }, [apiRef]);
  const handleKeyDown = React56.useCallback((event) => {
    if (isEscapeKey(event.key)) {
      apiRef.current.hidePreferences();
    }
  }, [apiRef]);
  const modifiers = React56.useMemo(() => [{
    name: "flip",
    enabled: false
  }, {
    name: "isPlaced",
    enabled: true,
    phase: "main",
    fn: () => {
      setIsPlaced(true);
    },
    effect: () => () => {
      setIsPlaced(false);
    }
  }], []);
  const anchorEl = (_apiRef$current$colum = apiRef.current.columnHeadersContainerElementRef) == null ? void 0 : _apiRef$current$colum.current;
  if (!anchorEl) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(GridPanelRoot, _extends({
    ref,
    placement: "bottom-start",
    className: clsx_m_default(className, classes.panel),
    anchorEl,
    modifiers
  }, other, {
    children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(ClickAwayListener_default, {
      mouseEvent: "onMouseUp",
      onClickAway: handleClickAway,
      children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(GridPaperRoot, {
        className: classes.paper,
        elevation: 8,
        onKeyDown: handleKeyDown,
        children: isPlaced && children
      })
    })
  }));
});
true ? GridPanel.propTypes = {
  children: import_prop_types39.default.node,
  classes: import_prop_types39.default.object,
  open: import_prop_types39.default.bool.isRequired
} : void 0;

// node_modules/@mui/x-data-grid/components/panel/GridPreferencesPanel.js
init_extends();
var React57 = __toESM(require_react());
var import_jsx_runtime60 = __toESM(require_jsx_runtime());
var GridPreferencesPanel = /* @__PURE__ */ React57.forwardRef(function GridPreferencesPanel2(props, ref) {
  var _preferencePanelState, _rootProps$components, _rootProps$components2;
  const apiRef = useGridApiContext();
  const columns2 = useGridSelector(apiRef, gridColumnDefinitionsSelector);
  const rootProps = useGridRootProps();
  const preferencePanelState = useGridSelector(apiRef, gridPreferencePanelStateSelector);
  const panelContent = apiRef.current.unstable_applyPipeProcessors("preferencePanel", null, (_preferencePanelState = preferencePanelState.openedPanelValue) != null ? _preferencePanelState : GridPreferencePanelsValue.filters);
  return /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(rootProps.components.Panel, _extends({
    ref,
    as: rootProps.components.BasePopper,
    open: columns2.length > 0 && preferencePanelState.open
  }, (_rootProps$components = rootProps.componentsProps) == null ? void 0 : _rootProps$components.panel, props, (_rootProps$components2 = rootProps.componentsProps) == null ? void 0 : _rootProps$components2.basePopper, {
    children: panelContent
  }));
});

// node_modules/@mui/x-data-grid/components/panel/filterPanel/GridFilterForm.js
init_extends();
init_objectWithoutPropertiesLoose();
var React58 = __toESM(require_react());
var import_prop_types40 = __toESM(require_prop_types());
init_utils();
init_clsx_m();
var import_jsx_runtime61 = __toESM(require_jsx_runtime());
var import_jsx_runtime62 = __toESM(require_jsx_runtime());
var _excluded33 = ["item", "hasMultipleFilters", "deleteFilter", "applyFilterChanges", "multiFilterOperator", "showMultiFilterOperators", "disableMultiFilterOperator", "applyMultiFilterOperatorChanges", "focusElementRef", "linkOperators", "columnsSort", "deleteIconProps", "linkOperatorInputProps", "operatorInputProps", "columnInputProps", "valueInputProps", "children"];
var _excluded210 = ["InputComponentProps"];
var useUtilityClasses26 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["filterForm"],
    deleteIcon: ["filterFormDeleteIcon"],
    linkOperatorInput: ["filterFormLinkOperatorInput"],
    columnInput: ["filterFormColumnInput"],
    operatorInput: ["filterFormOperatorInput"],
    valueInput: ["filterFormValueInput"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
var GridFilterFormRoot = styled_default("div", {
  name: "MuiDataGrid",
  slot: "FilterForm",
  overridesResolver: (props, styles) => styles.filterForm
})(({
  theme: theme2
}) => ({
  display: "flex",
  padding: theme2.spacing(1)
}));
var FilterFormDeleteIcon = styled_default(FormControl_default, {
  name: "MuiDataGrid",
  slot: "FilterFormDeleteIcon",
  overridesResolver: (_, styles) => styles.filterFormDeleteIcon
})(({
  theme: theme2
}) => ({
  flexShrink: 0,
  justifyContent: "flex-end",
  marginRight: theme2.spacing(0.5),
  marginBottom: theme2.spacing(0.2)
}));
var FilterFormLinkOperatorInput = styled_default(FormControl_default, {
  name: "MuiDataGrid",
  slot: "FilterFormLinkOperatorInput",
  overridesResolver: (_, styles) => styles.filterFormLinkOperatorInput
})({
  minWidth: 55,
  marginRight: 5,
  justifyContent: "end"
});
var FilterFormColumnInput = styled_default(FormControl_default, {
  name: "MuiDataGrid",
  slot: "FilterFormColumnInput",
  overridesResolver: (_, styles) => styles.filterFormColumnInput
})({
  width: 150
});
var FilterFormOperatorInput = styled_default(FormControl_default, {
  name: "MuiDataGrid",
  slot: "FilterFormOperatorInput",
  overridesResolver: (_, styles) => styles.filterFormOperatorInput
})({
  width: 120
});
var FilterFormValueInput = styled_default(FormControl_default, {
  name: "MuiDataGrid",
  slot: "FilterFormValueInput",
  overridesResolver: (_, styles) => styles.filterFormValueInput
})({
  width: 190
});
var getLinkOperatorLocaleKey = (linkOperator) => {
  switch (linkOperator) {
    case GridLinkOperator.And:
      return "filterPanelOperatorAnd";
    case GridLinkOperator.Or:
      return "filterPanelOperatorOr";
    default:
      throw new Error("MUI: Invalid `linkOperator` property in the `GridFilterPanel`.");
  }
};
var getColumnLabel = (col) => col.headerName || col.field;
var collator3 = new Intl.Collator();
var GridFilterForm = /* @__PURE__ */ React58.forwardRef(function GridFilterForm2(props, ref) {
  var _rootProps$components, _rootProps$components2, _baseSelectProps$nati, _rootProps$components3, _rootProps$components4, _rootProps$components5, _currentColumn$filter2;
  const {
    item,
    hasMultipleFilters,
    deleteFilter,
    applyFilterChanges,
    multiFilterOperator,
    showMultiFilterOperators,
    disableMultiFilterOperator,
    applyMultiFilterOperatorChanges,
    focusElementRef,
    linkOperators = [GridLinkOperator.And, GridLinkOperator.Or],
    columnsSort,
    deleteIconProps = {},
    linkOperatorInputProps = {},
    operatorInputProps = {},
    columnInputProps = {},
    valueInputProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded33);
  const apiRef = useGridApiContext();
  const filterableColumns = useGridSelector(apiRef, gridFilterableColumnDefinitionsSelector);
  const columnSelectId = useId_default();
  const columnSelectLabelId = useId_default();
  const operatorSelectId = useId_default();
  const operatorSelectLabelId = useId_default();
  const rootProps = useGridRootProps();
  const ownerState = {
    classes: rootProps.classes
  };
  const classes = useUtilityClasses26(ownerState);
  const valueRef = React58.useRef(null);
  const filterSelectorRef = React58.useRef(null);
  const hasLinkOperatorColumn = hasMultipleFilters && linkOperators.length > 0;
  const baseFormControlProps = ((_rootProps$components = rootProps.componentsProps) == null ? void 0 : _rootProps$components.baseFormControl) || {};
  const baseSelectProps = ((_rootProps$components2 = rootProps.componentsProps) == null ? void 0 : _rootProps$components2.baseSelect) || {};
  const isBaseSelectNative = (_baseSelectProps$nati = baseSelectProps.native) != null ? _baseSelectProps$nati : true;
  const OptionComponent = isBaseSelectNative ? "option" : MenuItem_default;
  const {
    InputComponentProps
  } = valueInputProps, valueInputPropsOther = _objectWithoutPropertiesLoose(valueInputProps, _excluded210);
  const sortedFilterableColumns = React58.useMemo(() => {
    switch (columnsSort) {
      case "asc":
        return filterableColumns.sort((a, b) => collator3.compare(getColumnLabel(a), getColumnLabel(b)));
      case "desc":
        return filterableColumns.sort((a, b) => -collator3.compare(getColumnLabel(a), getColumnLabel(b)));
      default:
        return filterableColumns;
    }
  }, [filterableColumns, columnsSort]);
  const currentColumn = item.columnField ? apiRef.current.getColumn(item.columnField) : null;
  const currentOperator = React58.useMemo(() => {
    var _currentColumn$filter;
    if (!item.operatorValue || !currentColumn) {
      return null;
    }
    return (_currentColumn$filter = currentColumn.filterOperators) == null ? void 0 : _currentColumn$filter.find((operator) => operator.value === item.operatorValue);
  }, [item, currentColumn]);
  const changeColumn = React58.useCallback((event) => {
    const columnField = event.target.value;
    const column = apiRef.current.getColumn(columnField);
    if (column.field === currentColumn.field) {
      return;
    }
    const newOperator = column.filterOperators.find((operator) => operator.value === item.operatorValue) || column.filterOperators[0];
    const eraseItemValue = !newOperator.InputComponent || newOperator.InputComponent !== (currentOperator == null ? void 0 : currentOperator.InputComponent);
    applyFilterChanges(_extends({}, item, {
      columnField,
      operatorValue: newOperator.value,
      value: eraseItemValue ? void 0 : item.value
    }));
  }, [apiRef, applyFilterChanges, item, currentColumn, currentOperator]);
  const changeOperator = React58.useCallback((event) => {
    const operatorValue = event.target.value;
    const newOperator = currentColumn == null ? void 0 : currentColumn.filterOperators.find((operator) => operator.value === operatorValue);
    const eraseItemValue = !(newOperator != null && newOperator.InputComponent) || (newOperator == null ? void 0 : newOperator.InputComponent) !== (currentOperator == null ? void 0 : currentOperator.InputComponent);
    applyFilterChanges(_extends({}, item, {
      operatorValue,
      value: eraseItemValue ? void 0 : item.value
    }));
  }, [applyFilterChanges, item, currentColumn, currentOperator]);
  const changeLinkOperator = React58.useCallback((event) => {
    const linkOperator = event.target.value === GridLinkOperator.And.toString() ? GridLinkOperator.And : GridLinkOperator.Or;
    applyMultiFilterOperatorChanges(linkOperator);
  }, [applyMultiFilterOperatorChanges]);
  const handleDeleteFilter = () => {
    if (rootProps.disableMultipleColumnsFiltering) {
      if (item.value === void 0) {
        deleteFilter(item);
      } else {
        applyFilterChanges(_extends({}, item, {
          value: void 0
        }));
      }
    } else {
      deleteFilter(item);
    }
  };
  React58.useImperativeHandle(focusElementRef, () => ({
    focus: () => {
      if (currentOperator != null && currentOperator.InputComponent) {
        var _valueRef$current;
        valueRef == null ? void 0 : (_valueRef$current = valueRef.current) == null ? void 0 : _valueRef$current.focus();
      } else {
        filterSelectorRef.current.focus();
      }
    }
  }), [currentOperator]);
  return /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)(GridFilterFormRoot, _extends({
    ref,
    className: classes.root
  }, other, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime61.jsx)(FilterFormDeleteIcon, _extends({
      variant: "standard",
      as: rootProps.components.BaseFormControl
    }, baseFormControlProps, deleteIconProps, {
      className: clsx_m_default(classes.deleteIcon, baseFormControlProps.className, deleteIconProps.className),
      children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(IconButton_default, {
        "aria-label": apiRef.current.getLocaleText("filterPanelDeleteIconLabel"),
        title: apiRef.current.getLocaleText("filterPanelDeleteIconLabel"),
        onClick: handleDeleteFilter,
        size: "small",
        children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(rootProps.components.FilterPanelDeleteIcon, {
          fontSize: "small"
        })
      })
    })), /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(FilterFormLinkOperatorInput, _extends({
      variant: "standard",
      as: rootProps.components.BaseFormControl
    }, baseFormControlProps, linkOperatorInputProps, {
      sx: _extends({
        display: hasLinkOperatorColumn ? "flex" : "none",
        visibility: showMultiFilterOperators ? "visible" : "hidden"
      }, baseFormControlProps.sx || {}, linkOperatorInputProps.sx || {}),
      className: clsx_m_default(classes.linkOperatorInput, baseFormControlProps.className, linkOperatorInputProps.className),
      children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(rootProps.components.BaseSelect, _extends({
        inputProps: {
          "aria-label": apiRef.current.getLocaleText("filterPanelLinkOperator")
        },
        value: multiFilterOperator,
        onChange: changeLinkOperator,
        disabled: !!disableMultiFilterOperator || linkOperators.length === 1,
        native: isBaseSelectNative
      }, (_rootProps$components3 = rootProps.componentsProps) == null ? void 0 : _rootProps$components3.baseSelect, {
        children: linkOperators.map((linkOperator) => /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(OptionComponent, {
          value: linkOperator.toString(),
          children: apiRef.current.getLocaleText(getLinkOperatorLocaleKey(linkOperator))
        }, linkOperator.toString()))
      }))
    })), /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)(FilterFormColumnInput, _extends({
      variant: "standard",
      as: rootProps.components.BaseFormControl
    }, baseFormControlProps, columnInputProps, {
      className: clsx_m_default(classes.columnInput, baseFormControlProps.className, columnInputProps.className),
      children: [/* @__PURE__ */ (0, import_jsx_runtime61.jsx)(InputLabel_default, {
        htmlFor: columnSelectId,
        id: columnSelectLabelId,
        children: apiRef.current.getLocaleText("filterPanelColumns")
      }), /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(rootProps.components.BaseSelect, _extends({
        labelId: columnSelectLabelId,
        id: columnSelectId,
        label: apiRef.current.getLocaleText("filterPanelColumns"),
        value: item.columnField || "",
        onChange: changeColumn,
        native: isBaseSelectNative
      }, (_rootProps$components4 = rootProps.componentsProps) == null ? void 0 : _rootProps$components4.baseSelect, {
        children: sortedFilterableColumns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(OptionComponent, {
          value: col.field,
          children: getColumnLabel(col)
        }, col.field))
      }))]
    })), /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)(FilterFormOperatorInput, _extends({
      variant: "standard",
      as: rootProps.components.BaseFormControl
    }, baseFormControlProps, operatorInputProps, {
      className: clsx_m_default(classes.operatorInput, baseFormControlProps.className, operatorInputProps.className),
      children: [/* @__PURE__ */ (0, import_jsx_runtime61.jsx)(InputLabel_default, {
        htmlFor: operatorSelectId,
        id: operatorSelectLabelId,
        children: apiRef.current.getLocaleText("filterPanelOperators")
      }), /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(rootProps.components.BaseSelect, _extends({
        labelId: operatorSelectLabelId,
        label: apiRef.current.getLocaleText("filterPanelOperators"),
        id: operatorSelectId,
        value: item.operatorValue,
        onChange: changeOperator,
        native: isBaseSelectNative,
        inputRef: filterSelectorRef
      }, (_rootProps$components5 = rootProps.componentsProps) == null ? void 0 : _rootProps$components5.baseSelect, {
        children: currentColumn == null ? void 0 : (_currentColumn$filter2 = currentColumn.filterOperators) == null ? void 0 : _currentColumn$filter2.map((operator) => /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(OptionComponent, {
          value: operator.value,
          children: operator.label || apiRef.current.getLocaleText(`filterOperator${capitalize_default(operator.value)}`)
        }, operator.value))
      }))]
    })), /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(FilterFormValueInput, _extends({
      variant: "standard",
      as: rootProps.components.BaseFormControl
    }, baseFormControlProps, valueInputPropsOther, {
      className: clsx_m_default(classes.valueInput, baseFormControlProps.className, valueInputPropsOther.className),
      children: currentOperator != null && currentOperator.InputComponent ? /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(currentOperator.InputComponent, _extends({
        apiRef,
        item,
        applyValue: applyFilterChanges,
        focusElementRef: valueRef
      }, currentOperator.InputComponentProps, InputComponentProps)) : null
    }))]
  }));
});
true ? GridFilterForm.propTypes = {
  applyFilterChanges: import_prop_types40.default.func.isRequired,
  applyMultiFilterOperatorChanges: import_prop_types40.default.func.isRequired,
  children: import_prop_types40.default.node,
  columnInputProps: import_prop_types40.default.any,
  columnsSort: import_prop_types40.default.oneOf(["asc", "desc"]),
  deleteFilter: import_prop_types40.default.func.isRequired,
  deleteIconProps: import_prop_types40.default.any,
  disableMultiFilterOperator: import_prop_types40.default.bool,
  focusElementRef: import_prop_types40.default.oneOfType([import_prop_types40.default.func, import_prop_types40.default.object]),
  hasMultipleFilters: import_prop_types40.default.bool.isRequired,
  item: import_prop_types40.default.shape({
    columnField: import_prop_types40.default.string.isRequired,
    id: import_prop_types40.default.oneOfType([import_prop_types40.default.number, import_prop_types40.default.string]),
    operatorValue: import_prop_types40.default.string,
    value: import_prop_types40.default.any
  }).isRequired,
  linkOperatorInputProps: import_prop_types40.default.any,
  linkOperators: import_prop_types40.default.arrayOf(import_prop_types40.default.oneOf(["and", "or"]).isRequired),
  multiFilterOperator: import_prop_types40.default.oneOf(["and", "or"]),
  operatorInputProps: import_prop_types40.default.any,
  showMultiFilterOperators: import_prop_types40.default.bool,
  valueInputProps: import_prop_types40.default.any
} : void 0;

// node_modules/@mui/x-data-grid/components/panel/filterPanel/GridFilterPanel.js
init_extends();
init_objectWithoutPropertiesLoose();
var React59 = __toESM(require_react());
var import_prop_types41 = __toESM(require_prop_types());
var import_jsx_runtime63 = __toESM(require_jsx_runtime());
var import_jsx_runtime64 = __toESM(require_jsx_runtime());
var _excluded34 = ["linkOperators", "columnsSort", "filterFormProps", "children"];
var GridFilterPanel = /* @__PURE__ */ React59.forwardRef(function GridFilterPanel2(props, ref) {
  var _rootProps$components;
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const filterModel = useGridSelector(apiRef, gridFilterModelSelector);
  const filterableColumns = useGridSelector(apiRef, gridFilterableColumnDefinitionsSelector);
  const lastFilterRef = React59.useRef(null);
  const {
    linkOperators = [GridLinkOperator.And, GridLinkOperator.Or],
    columnsSort,
    filterFormProps
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded34);
  const applyFilter = React59.useCallback((item) => {
    apiRef.current.upsertFilterItem(item);
  }, [apiRef]);
  const applyFilterLinkOperator = React59.useCallback((operator) => {
    apiRef.current.setFilterLinkOperator(operator);
  }, [apiRef]);
  const getDefaultItem = React59.useCallback(() => {
    const firstColumnWithOperator = filterableColumns.find((colDef) => {
      var _colDef$filterOperato;
      return (_colDef$filterOperato = colDef.filterOperators) == null ? void 0 : _colDef$filterOperato.length;
    });
    if (!firstColumnWithOperator) {
      return null;
    }
    return {
      columnField: firstColumnWithOperator.field,
      operatorValue: firstColumnWithOperator.filterOperators[0].value,
      id: Math.round(Math.random() * 1e5)
    };
  }, [filterableColumns]);
  const items = React59.useMemo(() => {
    if (filterModel.items.length) {
      return filterModel.items;
    }
    const defaultItem = getDefaultItem();
    return defaultItem ? [defaultItem] : [];
  }, [filterModel.items, getDefaultItem]);
  const hasMultipleFilters = items.length > 1;
  const addNewFilter = () => {
    const defaultItem = getDefaultItem();
    if (!defaultItem) {
      return;
    }
    apiRef.current.upsertFilterItems([...items, defaultItem]);
  };
  const deleteFilter = React59.useCallback((item) => {
    const shouldCloseFilterPanel = items.length === 1;
    apiRef.current.deleteFilterItem(item);
    if (shouldCloseFilterPanel) {
      apiRef.current.hideFilterPanel();
    }
  }, [apiRef, items.length]);
  React59.useEffect(() => {
    if (linkOperators.length > 0 && filterModel.linkOperator && !linkOperators.includes(filterModel.linkOperator)) {
      applyFilterLinkOperator(linkOperators[0]);
    }
  }, [linkOperators, applyFilterLinkOperator, filterModel.linkOperator]);
  React59.useEffect(() => {
    if (items.length > 0) {
      lastFilterRef.current.focus();
    }
  }, [items.length]);
  return /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)(GridPanelWrapper, _extends({
    ref
  }, other, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime63.jsx)(GridPanelContent, {
      children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(GridFilterForm, _extends({
        item,
        applyFilterChanges: applyFilter,
        deleteFilter,
        hasMultipleFilters,
        showMultiFilterOperators: index > 0,
        multiFilterOperator: filterModel.linkOperator,
        disableMultiFilterOperator: index !== 1,
        applyMultiFilterOperatorChanges: applyFilterLinkOperator,
        focusElementRef: index === items.length - 1 ? lastFilterRef : null,
        linkOperators,
        columnsSort
      }, filterFormProps), item.id == null ? index : item.id))
    }), !rootProps.disableMultipleColumnsFiltering && /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(GridPanelFooter, {
      children: /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(rootProps.components.BaseButton, _extends({
        onClick: addNewFilter,
        startIcon: /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(GridAddIcon, {})
      }, (_rootProps$components = rootProps.componentsProps) == null ? void 0 : _rootProps$components.baseButton, {
        children: apiRef.current.getLocaleText("filterPanelAddFilter")
      }))
    })]
  }));
});
true ? GridFilterPanel.propTypes = {
  children: import_prop_types41.default.node,
  columnsSort: import_prop_types41.default.oneOf(["asc", "desc"]),
  filterFormProps: import_prop_types41.default.shape({
    columnInputProps: import_prop_types41.default.any,
    columnsSort: import_prop_types41.default.oneOf(["asc", "desc"]),
    deleteIconProps: import_prop_types41.default.any,
    linkOperatorInputProps: import_prop_types41.default.any,
    operatorInputProps: import_prop_types41.default.any,
    valueInputProps: import_prop_types41.default.any
  }),
  linkOperators: import_prop_types41.default.arrayOf(import_prop_types41.default.oneOf(["and", "or"]).isRequired),
  sx: import_prop_types41.default.oneOfType([import_prop_types41.default.arrayOf(import_prop_types41.default.oneOfType([import_prop_types41.default.func, import_prop_types41.default.object, import_prop_types41.default.bool])), import_prop_types41.default.func, import_prop_types41.default.object])
} : void 0;

// node_modules/@mui/x-data-grid/components/toolbar/GridToolbarExport.js
init_extends();
init_objectWithoutPropertiesLoose();
var React61 = __toESM(require_react());
var import_prop_types42 = __toESM(require_prop_types());

// node_modules/@mui/x-data-grid/components/toolbar/GridToolbarExportContainer.js
init_extends();
init_objectWithoutPropertiesLoose();
var React60 = __toESM(require_react());
init_utils();
var import_jsx_runtime65 = __toESM(require_jsx_runtime());
var import_jsx_runtime66 = __toESM(require_jsx_runtime());
var _excluded35 = ["children", "onClick"];
var GridToolbarExportContainer = /* @__PURE__ */ React60.forwardRef(function GridToolbarExportContainer2(props, ref) {
  var _rootProps$components;
  const {
    children,
    onClick
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded35);
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const buttonId = useId_default();
  const menuId = useId_default();
  const [open, setOpen] = React60.useState(false);
  const buttonRef = React60.useRef(null);
  const handleRef = useForkRef_default(ref, buttonRef);
  const handleMenuOpen = (event) => {
    setOpen((prevOpen) => !prevOpen);
    onClick == null ? void 0 : onClick(event);
  };
  const handleMenuClose = () => setOpen(false);
  const handleListKeyDown = (event) => {
    if (isTabKey(event.key)) {
      event.preventDefault();
    }
    if (isHideMenuKey(event.key)) {
      handleMenuClose();
    }
  };
  const handleMenuClickAway = (event) => {
    var _buttonRef$current;
    if (buttonRef.current === event.target || (_buttonRef$current = buttonRef.current) != null && _buttonRef$current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };
  if (children == null) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)(React60.Fragment, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime65.jsx)(rootProps.components.BaseButton, _extends({
      ref: handleRef,
      size: "small",
      startIcon: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(rootProps.components.ExportIcon, {}),
      "aria-expanded": open ? "true" : void 0,
      "aria-label": apiRef.current.getLocaleText("toolbarExportLabel"),
      "aria-haspopup": "menu",
      "aria-labelledby": menuId,
      id: buttonId
    }, other, {
      onClick: handleMenuOpen
    }, (_rootProps$components = rootProps.componentsProps) == null ? void 0 : _rootProps$components.baseButton, {
      children: apiRef.current.getLocaleText("toolbarExport")
    })), /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(GridMenu, {
      open,
      target: buttonRef.current,
      onClickAway: handleMenuClickAway,
      position: "bottom-start",
      children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(MenuList_default, {
        id: menuId,
        className: gridClasses.menuList,
        "aria-labelledby": buttonId,
        onKeyDown: handleListKeyDown,
        autoFocusItem: open,
        children: React60.Children.map(children, (child) => {
          if (!/* @__PURE__ */ React60.isValidElement(child)) {
            return child;
          }
          return /* @__PURE__ */ React60.cloneElement(child, {
            hideMenu: handleMenuClose
          });
        })
      })
    })]
  });
});

// node_modules/@mui/x-data-grid/components/toolbar/GridToolbarExport.js
var import_jsx_runtime67 = __toESM(require_jsx_runtime());
var _excluded36 = ["hideMenu", "options"];
var _excluded211 = ["hideMenu", "options"];
var _excluded37 = ["csvOptions", "printOptions", "excelOptions"];
var GridCsvExportMenuItem = (props) => {
  const apiRef = useGridApiContext();
  const {
    hideMenu,
    options
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded36);
  return /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(MenuItem_default, _extends({
    onClick: () => {
      apiRef.current.exportDataAsCsv(options);
      hideMenu == null ? void 0 : hideMenu();
    }
  }, other, {
    children: apiRef.current.getLocaleText("toolbarExportCSV")
  }));
};
var GridPrintExportMenuItem = (props) => {
  const apiRef = useGridApiContext();
  const {
    hideMenu,
    options
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded211);
  return /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(MenuItem_default, _extends({
    onClick: () => {
      apiRef.current.exportDataAsPrint(options);
      hideMenu == null ? void 0 : hideMenu();
    }
  }, other, {
    children: apiRef.current.getLocaleText("toolbarExportPrint")
  }));
};
var GridToolbarExport = /* @__PURE__ */ React61.forwardRef(function GridToolbarExport2(props, ref) {
  const {
    csvOptions = {},
    printOptions = {},
    excelOptions
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded37);
  const apiRef = useGridApiContext();
  const preProcessedButtons = apiRef.current.unstable_applyPipeProcessors("exportMenu", [], {
    excelOptions,
    csvOptions,
    printOptions
  }).sort((a, b) => a.componentName > b.componentName ? 1 : -1);
  if (preProcessedButtons.length === 0) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(GridToolbarExportContainer, _extends({}, other, {
    ref,
    children: preProcessedButtons.map((button, index) => /* @__PURE__ */ React61.cloneElement(button.component, {
      key: index
    }))
  }));
});
true ? GridToolbarExport.propTypes = {
  csvOptions: import_prop_types42.default.object,
  printOptions: import_prop_types42.default.object
} : void 0;

// node_modules/@mui/x-data-grid/hooks/features/filter/gridFilterState.js
var getDefaultGridFilterModel = () => ({
  items: [],
  linkOperator: GridLinkOperator.And,
  quickFilterValues: [],
  quickFilterLogicOperator: GridLinkOperator.And
});

// node_modules/@mui/x-data-grid/components/GridFooter.js
init_extends();
var React64 = __toESM(require_react());
var import_prop_types45 = __toESM(require_prop_types());

// node_modules/@mui/x-data-grid/components/GridRowCount.js
init_extends();
init_objectWithoutPropertiesLoose();
var React62 = __toESM(require_react());
var import_prop_types43 = __toESM(require_prop_types());
init_clsx_m();
var import_jsx_runtime68 = __toESM(require_jsx_runtime());
var _excluded38 = ["className", "rowCount", "visibleRowCount"];
var useUtilityClasses27 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["rowCount"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
var GridRowCountRoot = styled_default("div", {
  name: "MuiDataGrid",
  slot: "RowCount",
  overridesResolver: (props, styles) => styles.rowCount
})(({
  theme: theme2
}) => ({
  alignItems: "center",
  display: "flex",
  margin: theme2.spacing(0, 2)
}));
var GridRowCount = /* @__PURE__ */ React62.forwardRef(function GridRowCount2(props, ref) {
  const {
    className,
    rowCount,
    visibleRowCount
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded38);
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const ownerState = {
    classes: rootProps.classes
  };
  const classes = useUtilityClasses27(ownerState);
  if (rowCount === 0) {
    return null;
  }
  const text = visibleRowCount < rowCount ? apiRef.current.getLocaleText("footerTotalVisibleRows")(visibleRowCount, rowCount) : rowCount.toLocaleString();
  return /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)(GridRowCountRoot, _extends({
    ref,
    className: clsx_m_default(classes.root, className)
  }, other, {
    children: [apiRef.current.getLocaleText("footerTotalRows"), " ", text]
  }));
});
true ? GridRowCount.propTypes = {
  rowCount: import_prop_types43.default.number.isRequired,
  sx: import_prop_types43.default.oneOfType([import_prop_types43.default.arrayOf(import_prop_types43.default.oneOfType([import_prop_types43.default.func, import_prop_types43.default.object, import_prop_types43.default.bool])), import_prop_types43.default.func, import_prop_types43.default.object]),
  visibleRowCount: import_prop_types43.default.number.isRequired
} : void 0;

// node_modules/@mui/x-data-grid/components/GridSelectedRowCount.js
init_extends();
init_objectWithoutPropertiesLoose();
var React63 = __toESM(require_react());
var import_prop_types44 = __toESM(require_prop_types());
init_clsx_m();
var import_jsx_runtime69 = __toESM(require_jsx_runtime());
var _excluded39 = ["className", "selectedRowCount"];
var useUtilityClasses28 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["selectedRowCount"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
var GridSelectedRowCountRoot = styled_default("div", {
  name: "MuiDataGrid",
  slot: "SelectedRowCount",
  overridesResolver: (props, styles) => styles.selectedRowCount
})(({
  theme: theme2
}) => ({
  alignItems: "center",
  display: "flex",
  margin: theme2.spacing(0, 2),
  visibility: "hidden",
  width: 0,
  height: 0,
  [theme2.breakpoints.up("sm")]: {
    visibility: "visible",
    width: "auto",
    height: "auto"
  }
}));
var GridSelectedRowCount = /* @__PURE__ */ React63.forwardRef(function GridSelectedRowCount2(props, ref) {
  const {
    className,
    selectedRowCount
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded39);
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const ownerState = {
    classes: rootProps.classes
  };
  const classes = useUtilityClasses28(ownerState);
  const rowSelectedText = apiRef.current.getLocaleText("footerRowSelected")(selectedRowCount);
  return /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(GridSelectedRowCountRoot, _extends({
    ref,
    className: clsx_m_default(classes.root, className)
  }, other, {
    children: rowSelectedText
  }));
});
true ? GridSelectedRowCount.propTypes = {
  selectedRowCount: import_prop_types44.default.number.isRequired,
  sx: import_prop_types44.default.oneOfType([import_prop_types44.default.arrayOf(import_prop_types44.default.oneOfType([import_prop_types44.default.func, import_prop_types44.default.object, import_prop_types44.default.bool])), import_prop_types44.default.func, import_prop_types44.default.object])
} : void 0;

// node_modules/@mui/x-data-grid/components/GridFooter.js
var import_jsx_runtime70 = __toESM(require_jsx_runtime());
var import_jsx_runtime71 = __toESM(require_jsx_runtime());
var GridFooter = /* @__PURE__ */ React64.forwardRef(function GridFooter2(props, ref) {
  var _rootProps$components;
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const totalTopLevelRowCount = useGridSelector(apiRef, gridTopLevelRowCountSelector);
  const selectedRowCount = useGridSelector(apiRef, selectedGridRowsCountSelector);
  const visibleTopLevelRowCount = useGridSelector(apiRef, gridVisibleTopLevelRowCountSelector);
  const selectedRowCountElement = !rootProps.hideFooterSelectedRowCount && selectedRowCount > 0 ? /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(GridSelectedRowCount, {
    selectedRowCount
  }) : /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("div", {});
  const rowCountElement = !rootProps.hideFooterRowCount && !rootProps.pagination ? /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(GridRowCount, {
    rowCount: totalTopLevelRowCount,
    visibleRowCount: visibleTopLevelRowCount
  }) : null;
  const paginationElement = rootProps.pagination && !rootProps.hideFooterPagination && rootProps.components.Pagination && /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(rootProps.components.Pagination, _extends({}, (_rootProps$components = rootProps.componentsProps) == null ? void 0 : _rootProps$components.pagination));
  return /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)(GridFooterContainer, _extends({
    ref
  }, props, {
    children: [selectedRowCountElement, rowCountElement, paginationElement]
  }));
});
true ? GridFooter.propTypes = {
  sx: import_prop_types45.default.oneOfType([import_prop_types45.default.arrayOf(import_prop_types45.default.oneOfType([import_prop_types45.default.func, import_prop_types45.default.object, import_prop_types45.default.bool])), import_prop_types45.default.func, import_prop_types45.default.object])
} : void 0;

// node_modules/@mui/x-data-grid/components/GridHeader.js
init_extends();
var React65 = __toESM(require_react());
var import_jsx_runtime72 = __toESM(require_jsx_runtime());
var import_jsx_runtime73 = __toESM(require_jsx_runtime());
var GridHeader = /* @__PURE__ */ React65.forwardRef(function GridHeader2(props, ref) {
  var _rootProps$components, _rootProps$components2;
  const rootProps = useGridRootProps();
  return /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)("div", _extends({
    ref
  }, props, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime72.jsx)(rootProps.components.PreferencesPanel, _extends({}, (_rootProps$components = rootProps.componentsProps) == null ? void 0 : _rootProps$components.preferencesPanel)), rootProps.components.Toolbar && /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(rootProps.components.Toolbar, _extends({}, (_rootProps$components2 = rootProps.componentsProps) == null ? void 0 : _rootProps$components2.toolbar))]
  }));
});

// node_modules/@mui/x-data-grid/components/GridLoadingOverlay.js
init_extends();
var React66 = __toESM(require_react());
var import_prop_types46 = __toESM(require_prop_types());
var import_jsx_runtime74 = __toESM(require_jsx_runtime());
var GridLoadingOverlay = /* @__PURE__ */ React66.forwardRef(function GridLoadingOverlay2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(GridOverlay, _extends({
    ref
  }, props, {
    children: /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(CircularProgress_default, {})
  }));
});
true ? GridLoadingOverlay.propTypes = {
  sx: import_prop_types46.default.oneOfType([import_prop_types46.default.arrayOf(import_prop_types46.default.oneOfType([import_prop_types46.default.func, import_prop_types46.default.object, import_prop_types46.default.bool])), import_prop_types46.default.func, import_prop_types46.default.object])
} : void 0;

// node_modules/@mui/x-data-grid/components/GridNoRowsOverlay.js
init_extends();
var React67 = __toESM(require_react());
var import_prop_types47 = __toESM(require_prop_types());
var import_jsx_runtime75 = __toESM(require_jsx_runtime());
var GridNoRowsOverlay = /* @__PURE__ */ React67.forwardRef(function GridNoRowsOverlay2(props, ref) {
  const apiRef = useGridApiContext();
  const noRowsLabel = apiRef.current.getLocaleText("noRowsLabel");
  return /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(GridOverlay, _extends({
    ref
  }, props, {
    children: noRowsLabel
  }));
});
true ? GridNoRowsOverlay.propTypes = {
  sx: import_prop_types47.default.oneOfType([import_prop_types47.default.arrayOf(import_prop_types47.default.oneOfType([import_prop_types47.default.func, import_prop_types47.default.object, import_prop_types47.default.bool])), import_prop_types47.default.func, import_prop_types47.default.object])
} : void 0;

// node_modules/@mui/x-data-grid/components/GridPagination.js
init_extends();
var React68 = __toESM(require_react());
var import_jsx_runtime76 = __toESM(require_jsx_runtime());
var GridPaginationRoot = styled_default(TablePagination_default)(({
  theme: theme2
}) => ({
  [`& .${tablePaginationClasses_default.selectLabel}`]: {
    display: "none",
    [theme2.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  [`& .${tablePaginationClasses_default.input}`]: {
    display: "none",
    [theme2.breakpoints.up("sm")]: {
      display: "inline-flex"
    }
  }
}));
var GridPagination = /* @__PURE__ */ React68.forwardRef(function GridPagination2(props, ref) {
  var _rootProps$rowsPerPag;
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const paginationState = useGridSelector(apiRef, gridPaginationSelector);
  const lastPage = React68.useMemo(() => Math.floor(paginationState.rowCount / (paginationState.pageSize || 1)), [paginationState.rowCount, paginationState.pageSize]);
  const handlePageSizeChange = React68.useCallback((event) => {
    const newPageSize = Number(event.target.value);
    apiRef.current.setPageSize(newPageSize);
  }, [apiRef]);
  const handlePageChange = React68.useCallback((event, page) => {
    apiRef.current.setPage(page);
  }, [apiRef]);
  if (true) {
    var _rootProps$pageSize;
    const warnedOnceMissingPageSizeInRowsPerPageOptions = React68.useRef(false);
    if (!warnedOnceMissingPageSizeInRowsPerPageOptions.current && !rootProps.autoPageSize && !rootProps.rowsPerPageOptions.includes((_rootProps$pageSize = rootProps.pageSize) != null ? _rootProps$pageSize : paginationState.pageSize)) {
      var _rootProps$pageSize2;
      console.warn([`MUI: The page size \`${(_rootProps$pageSize2 = rootProps.pageSize) != null ? _rootProps$pageSize2 : paginationState.pageSize}\` is not preset in the \`rowsPerPageOptions\``, `Add it to show the pagination select.`].join("\n"));
      warnedOnceMissingPageSizeInRowsPerPageOptions.current = true;
    }
  }
  return /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(GridPaginationRoot, _extends({
    ref,
    component: "div",
    count: paginationState.rowCount,
    page: paginationState.page <= lastPage ? paginationState.page : lastPage,
    rowsPerPageOptions: (_rootProps$rowsPerPag = rootProps.rowsPerPageOptions) != null && _rootProps$rowsPerPag.includes(paginationState.pageSize) ? rootProps.rowsPerPageOptions : [],
    rowsPerPage: paginationState.pageSize,
    onPageChange: handlePageChange,
    onRowsPerPageChange: handlePageSizeChange
  }, apiRef.current.getLocaleText("MuiTablePagination"), props));
});

// node_modules/@mui/x-data-grid/components/GridRow.js
init_extends();
init_objectWithoutPropertiesLoose();
var React70 = __toESM(require_react());
var import_prop_types48 = __toESM(require_prop_types());
init_clsx_m();

// node_modules/@mui/x-data-grid/hooks/utils/useGridVisibleRows.js
var React69 = __toESM(require_react());
var getVisibleRows = (apiRef, props) => {
  let rows;
  let range;
  if (props.pagination && props.paginationMode === "client") {
    range = gridPaginationRowRangeSelector(apiRef);
    rows = gridPaginatedVisibleSortedGridRowEntriesSelector(apiRef);
  } else {
    rows = gridVisibleSortedRowEntriesSelector(apiRef);
    if (rows.length === 0) {
      range = null;
    } else {
      range = {
        firstRowIndex: 0,
        lastRowIndex: rows.length - 1
      };
    }
  }
  return {
    rows,
    range
  };
};
var useGridVisibleRows = (apiRef, props) => {
  const response = getVisibleRows(apiRef, props);
  return React69.useMemo(() => ({
    rows: response.rows,
    range: response.range
  }), [response.rows, response.range]);
};

// node_modules/@mui/x-data-grid/constants/gridDetailPanelToggleField.js
var GRID_DETAIL_PANEL_TOGGLE_FIELD = "__detail_panel_toggle__";

// node_modules/@mui/x-data-grid/components/GridRow.js
var import_jsx_runtime77 = __toESM(require_jsx_runtime());
var import_jsx_runtime78 = __toESM(require_jsx_runtime());
var _excluded40 = ["selected", "rowId", "row", "index", "style", "position", "rowHeight", "className", "visibleColumns", "renderedColumns", "containerWidth", "firstColumnToRender", "lastColumnToRender", "cellFocus", "cellTabIndex", "editRowsState", "isLastVisible", "onClick", "onDoubleClick", "onMouseEnter", "onMouseLeave"];
var _excluded212 = ["changeReason"];
var useUtilityClasses29 = (ownerState) => {
  const {
    editable,
    editing,
    selected,
    isLastVisible,
    rowHeight,
    classes
  } = ownerState;
  const slots = {
    root: ["row", selected && "selected", editable && "row--editable", editing && "row--editing", isLastVisible && "row--lastVisible", rowHeight === "auto" && "row--dynamicHeight"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
var EmptyCell = ({
  width
}) => {
  if (!width) {
    return null;
  }
  const style = {
    width
  };
  return /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("div", {
    className: "MuiDataGrid-cell",
    style
  });
};
function GridRow(props) {
  var _apiRef$current$getRo;
  const {
    selected,
    rowId,
    row,
    index,
    style: styleProp,
    position,
    rowHeight,
    className,
    visibleColumns,
    renderedColumns,
    containerWidth,
    firstColumnToRender,
    cellFocus,
    cellTabIndex,
    editRowsState,
    isLastVisible = false,
    onClick,
    onDoubleClick,
    onMouseEnter,
    onMouseLeave
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded40);
  const apiRef = useGridApiContext();
  const ref = React70.useRef(null);
  const rootProps = useGridRootProps();
  const currentPage = useGridVisibleRows(apiRef, rootProps);
  const columnsTotalWidth = useGridSelector(apiRef, gridColumnsTotalWidthSelector);
  const sortModel = useGridSelector(apiRef, gridSortModelSelector);
  const treeDepth = useGridSelector(apiRef, gridRowTreeDepthSelector);
  const headerGroupingMaxDepth = useGridSelector(apiRef, gridDensityHeaderGroupingMaxDepthSelector);
  const ariaRowIndex = index + headerGroupingMaxDepth + 2;
  const {
    hasScrollX,
    hasScrollY
  } = (_apiRef$current$getRo = apiRef.current.getRootDimensions()) != null ? _apiRef$current$getRo : {
    hasScrollX: false,
    hasScrollY: false
  };
  const ownerState = {
    selected,
    isLastVisible,
    classes: rootProps.classes,
    editing: apiRef.current.getRowMode(rowId) === GridRowModes.Edit,
    editable: rootProps.editMode === GridEditModes.Row,
    rowHeight
  };
  const classes = useUtilityClasses29(ownerState);
  React70.useLayoutEffect(() => {
    if (rowHeight === "auto" && ref.current && typeof ResizeObserver === "undefined") {
      apiRef.current.unstable_storeRowHeightMeasurement(rowId, ref.current.clientHeight, position);
    }
  }, [apiRef, rowHeight, rowId, position]);
  React70.useLayoutEffect(() => {
    if (currentPage.range) {
      const rowIndex = apiRef.current.getRowIndexRelativeToVisibleRows(rowId);
      if (rowIndex != null) {
        apiRef.current.unstable_setLastMeasuredRowIndex(rowIndex);
      }
    }
    const rootElement = ref.current;
    const hasFixedHeight = rowHeight !== "auto";
    if (!rootElement || hasFixedHeight || typeof ResizeObserver === "undefined") {
      return void 0;
    }
    const resizeObserver = new ResizeObserver((entries) => {
      const [entry] = entries;
      const height = entry.borderBoxSize && entry.borderBoxSize.length > 0 ? entry.borderBoxSize[0].blockSize : entry.contentRect.height;
      apiRef.current.unstable_storeRowHeightMeasurement(rowId, height, position);
    });
    resizeObserver.observe(rootElement);
    return () => resizeObserver.disconnect();
  }, [apiRef, currentPage.range, index, rowHeight, rowId, position]);
  const publish = React70.useCallback((eventName, propHandler) => (event) => {
    if (event.target.nodeType === 1 && !event.currentTarget.contains(event.target)) {
      return;
    }
    if (!apiRef.current.getRow(rowId)) {
      return;
    }
    apiRef.current.publishEvent(eventName, apiRef.current.getRowParams(rowId), event);
    if (propHandler) {
      propHandler(event);
    }
  }, [apiRef, rowId]);
  const publishClick = React70.useCallback((event) => {
    const cell = findParentElementFromClassName(event.target, gridClasses.cell);
    const field = cell == null ? void 0 : cell.getAttribute("data-field");
    if (field) {
      if (field === GRID_CHECKBOX_SELECTION_COL_DEF.field) {
        return;
      }
      if (field === GRID_DETAIL_PANEL_TOGGLE_FIELD) {
        return;
      }
      if (field === "__reorder__") {
        return;
      }
      if (apiRef.current.getCellMode(rowId, field) === GridCellModes.Edit) {
        return;
      }
      const column = apiRef.current.getColumn(field);
      if (column.type === GRID_ACTIONS_COLUMN_TYPE) {
        return;
      }
    }
    publish("rowClick", onClick)(event);
  }, [apiRef, onClick, publish, rowId]);
  const getCell = React70.useCallback((column, cellProps) => {
    var _rootProps$components;
    const cellParams = apiRef.current.getCellParams(rowId, column.field);
    const classNames = [];
    const disableDragEvents = rootProps.disableColumnReorder && column.disableReorder || !rootProps.rowReordering && !!sortModel.length && treeDepth > 1 && Object.keys(editRowsState).length > 0;
    if (column.cellClassName) {
      classNames.push(clsx_m_default(typeof column.cellClassName === "function" ? column.cellClassName(cellParams) : column.cellClassName));
    }
    const editCellState = editRowsState[rowId] ? editRowsState[rowId][column.field] : null;
    let content = null;
    if (editCellState == null && column.renderCell) {
      var _rootProps$classes;
      content = column.renderCell(_extends({}, cellParams, {
        api: apiRef.current
      }));
      classNames.push(clsx_m_default(gridClasses["cell--withRenderer"], (_rootProps$classes = rootProps.classes) == null ? void 0 : _rootProps$classes["cell--withRenderer"]));
    }
    if (editCellState != null && column.renderEditCell) {
      var _rootProps$classes2;
      let updatedRow = row;
      if (apiRef.current.unstable_getRowWithUpdatedValues) {
        updatedRow = apiRef.current.unstable_getRowWithUpdatedValues(rowId, column.field);
      }
      const editCellStateRest = _objectWithoutPropertiesLoose(editCellState, _excluded212);
      const params = _extends({}, cellParams, {
        row: updatedRow
      }, editCellStateRest, {
        api: apiRef.current
      });
      content = column.renderEditCell(params);
      classNames.push(clsx_m_default(gridClasses["cell--editing"], (_rootProps$classes2 = rootProps.classes) == null ? void 0 : _rootProps$classes2["cell--editing"]));
    }
    if (rootProps.getCellClassName) {
      classNames.push(rootProps.getCellClassName(cellParams));
    }
    const hasFocus = cellFocus !== null && cellFocus.id === rowId && cellFocus.field === column.field;
    const tabIndex = cellTabIndex !== null && cellTabIndex.id === rowId && cellTabIndex.field === column.field && cellParams.cellMode === "view" ? 0 : -1;
    return /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(rootProps.components.Cell, _extends({
      value: cellParams.value,
      field: column.field,
      width: cellProps.width,
      rowId,
      height: rowHeight,
      showRightBorder: cellProps.showRightBorder,
      formattedValue: cellParams.formattedValue,
      align: column.align || "left",
      cellMode: cellParams.cellMode,
      colIndex: cellProps.indexRelativeToAllColumns,
      isEditable: cellParams.isEditable,
      hasFocus,
      tabIndex,
      className: clsx_m_default(classNames),
      colSpan: cellProps.colSpan,
      disableDragEvents
    }, (_rootProps$components = rootProps.componentsProps) == null ? void 0 : _rootProps$components.cell, {
      children: content
    }), column.field);
  }, [apiRef, cellTabIndex, editRowsState, cellFocus, rootProps, row, rowHeight, rowId, treeDepth, sortModel.length]);
  const sizes = apiRef.current.unstable_getRowInternalSizes(rowId);
  let minHeight = rowHeight;
  if (minHeight === "auto" && sizes) {
    let numberOfBaseSizes = 0;
    const maximumSize = Object.entries(sizes).reduce((acc, [key, size]) => {
      const isBaseHeight = /^base[A-Z]/.test(key);
      if (!isBaseHeight) {
        return acc;
      }
      numberOfBaseSizes += 1;
      if (size > acc) {
        return size;
      }
      return acc;
    }, 0);
    if (maximumSize > 0 && numberOfBaseSizes > 1) {
      minHeight = maximumSize;
    }
  }
  const style = _extends({}, styleProp, {
    maxHeight: rowHeight === "auto" ? "none" : rowHeight,
    minHeight
  });
  if (sizes != null && sizes.spacingTop) {
    const property = rootProps.rowSpacingType === "border" ? "borderTopWidth" : "marginTop";
    style[property] = sizes.spacingTop;
  }
  if (sizes != null && sizes.spacingBottom) {
    const property = rootProps.rowSpacingType === "border" ? "borderBottomWidth" : "marginBottom";
    style[property] = sizes.spacingBottom;
  }
  const rowClassNames = apiRef.current.unstable_applyPipeProcessors("rowClassName", [], rowId);
  if (typeof rootProps.getRowClassName === "function") {
    var _currentPage$range;
    const indexRelativeToCurrentPage = index - (((_currentPage$range = currentPage.range) == null ? void 0 : _currentPage$range.firstRowIndex) || 0);
    const rowParams = _extends({}, apiRef.current.getRowParams(rowId), {
      isFirstVisible: indexRelativeToCurrentPage === 0,
      isLastVisible: indexRelativeToCurrentPage === currentPage.rows.length - 1,
      indexRelativeToCurrentPage
    });
    rowClassNames.push(rootProps.getRowClassName(rowParams));
  }
  const randomNumber = randomNumberBetween(1e4, 20, 80);
  const cells = [];
  for (let i = 0; i < renderedColumns.length; i += 1) {
    const column = renderedColumns[i];
    const indexRelativeToAllColumns = firstColumnToRender + i;
    const isLastColumn = indexRelativeToAllColumns === visibleColumns.length - 1;
    const removeLastBorderRight = isLastColumn && hasScrollX && !hasScrollY;
    const showRightBorder = !isLastColumn ? rootProps.showCellRightBorder : !removeLastBorderRight && rootProps.disableExtendRowFullWidth;
    const cellColSpanInfo = apiRef.current.unstable_getCellColSpanInfo(rowId, indexRelativeToAllColumns);
    if (cellColSpanInfo && !cellColSpanInfo.spannedByColSpan) {
      if (row) {
        const {
          colSpan,
          width
        } = cellColSpanInfo.cellProps;
        const cellProps = {
          width,
          colSpan,
          showRightBorder,
          indexRelativeToAllColumns
        };
        cells.push(getCell(column, cellProps));
      } else {
        const {
          width
        } = cellColSpanInfo.cellProps;
        const contentWidth = Math.round(randomNumber());
        cells.push(/* @__PURE__ */ (0, import_jsx_runtime77.jsx)(rootProps.components.SkeletonCell, {
          width,
          contentWidth,
          field: column.field,
          align: column.align
        }, column.field));
      }
    }
  }
  const emptyCellWidth = containerWidth - columnsTotalWidth;
  const eventHandlers = row ? {
    onClick: publishClick,
    onDoubleClick: publish("rowDoubleClick", onDoubleClick),
    onMouseEnter: publish("rowMouseEnter", onMouseEnter),
    onMouseLeave: publish("rowMouseLeave", onMouseLeave)
  } : null;
  return /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)("div", _extends({
    ref,
    "data-id": rowId,
    "data-rowindex": index,
    role: "row",
    className: clsx_m_default(...rowClassNames, classes.root, className),
    "aria-rowindex": ariaRowIndex,
    "aria-selected": selected,
    style
  }, eventHandlers, other, {
    children: [cells, emptyCellWidth > 0 && /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(EmptyCell, {
      width: emptyCellWidth
    })]
  }));
}
true ? GridRow.propTypes = {
  cellFocus: import_prop_types48.default.object,
  cellTabIndex: import_prop_types48.default.object,
  containerWidth: import_prop_types48.default.number.isRequired,
  editRowsState: import_prop_types48.default.object.isRequired,
  firstColumnToRender: import_prop_types48.default.number.isRequired,
  index: import_prop_types48.default.number.isRequired,
  isLastVisible: import_prop_types48.default.bool,
  lastColumnToRender: import_prop_types48.default.number.isRequired,
  position: import_prop_types48.default.oneOf(["center", "left", "right"]).isRequired,
  renderedColumns: import_prop_types48.default.arrayOf(import_prop_types48.default.object).isRequired,
  row: import_prop_types48.default.object,
  rowHeight: import_prop_types48.default.oneOfType([import_prop_types48.default.oneOf(["auto"]), import_prop_types48.default.number]).isRequired,
  rowId: import_prop_types48.default.oneOfType([import_prop_types48.default.number, import_prop_types48.default.string]).isRequired,
  selected: import_prop_types48.default.bool.isRequired,
  visibleColumns: import_prop_types48.default.arrayOf(import_prop_types48.default.object).isRequired
} : void 0;

// node_modules/@mui/x-data-grid/components/GridScrollArea.js
init_extends();
var React72 = __toESM(require_react());
var import_prop_types49 = __toESM(require_prop_types());
init_clsx_m();

// node_modules/@mui/x-data-grid/hooks/utils/useGridApiEventHandler.js
var React71 = __toESM(require_react());

// node_modules/@mui/x-data-grid/utils/cleanupTracking/TimerBasedCleanupTracking.js
var CLEANUP_TIMER_LOOP_MILLIS = 1e3;
var TimerBasedCleanupTracking = class {
  constructor(timeout = CLEANUP_TIMER_LOOP_MILLIS) {
    this.timeouts = /* @__PURE__ */ new Map();
    this.cleanupTimeout = CLEANUP_TIMER_LOOP_MILLIS;
    this.cleanupTimeout = timeout;
  }
  register(object, unsubscribe, unregisterToken) {
    if (!this.timeouts) {
      this.timeouts = /* @__PURE__ */ new Map();
    }
    const timeout = setTimeout(() => {
      if (typeof unsubscribe === "function") {
        unsubscribe();
      }
      this.timeouts.delete(unregisterToken.cleanupToken);
    }, this.cleanupTimeout);
    this.timeouts.set(unregisterToken.cleanupToken, timeout);
  }
  unregister(unregisterToken) {
    const timeout = this.timeouts.get(unregisterToken.cleanupToken);
    if (timeout) {
      this.timeouts.delete(unregisterToken.cleanupToken);
      clearTimeout(timeout);
    }
  }
  reset() {
    if (this.timeouts) {
      this.timeouts.forEach((value, key) => {
        this.unregister({
          cleanupToken: key
        });
      });
      this.timeouts = void 0;
    }
  }
};

// node_modules/@mui/x-data-grid/utils/cleanupTracking/FinalizationRegistryBasedCleanupTracking.js
var FinalizationRegistryBasedCleanupTracking = class {
  constructor() {
    this.registry = new FinalizationRegistry((unsubscribe) => {
      if (typeof unsubscribe === "function") {
        unsubscribe();
      }
    });
  }
  register(object, unsubscribe, unregisterToken) {
    this.registry.register(object, unsubscribe, unregisterToken);
  }
  unregister(unregisterToken) {
    this.registry.unregister(unregisterToken);
  }
  reset() {
  }
};

// node_modules/@mui/x-data-grid/hooks/utils/useGridApiEventHandler.js
var GridSignature;
(function(GridSignature2) {
  GridSignature2["DataGrid"] = "DataGrid";
  GridSignature2["DataGridPro"] = "DataGridPro";
})(GridSignature || (GridSignature = {}));
var ObjectToBeRetainedByReact = class {
};
function createUseGridApiEventHandler(registryContainer2) {
  let cleanupTokensCounter = 0;
  return function useGridApiEventHandler2(apiRef, eventName, handler, options) {
    if (registryContainer2.registry === null) {
      registryContainer2.registry = typeof FinalizationRegistry !== "undefined" ? new FinalizationRegistryBasedCleanupTracking() : new TimerBasedCleanupTracking();
    }
    const [objectRetainedByReact] = React71.useState(new ObjectToBeRetainedByReact());
    const subscription = React71.useRef(null);
    const handlerRef = React71.useRef();
    handlerRef.current = handler;
    const cleanupTokenRef = React71.useRef(null);
    if (!subscription.current && handlerRef.current) {
      const enhancedHandler = (params, event, details) => {
        if (!event.defaultMuiPrevented) {
          var _handlerRef$current;
          (_handlerRef$current = handlerRef.current) == null ? void 0 : _handlerRef$current.call(handlerRef, params, event, details);
        }
      };
      subscription.current = apiRef.current.subscribeEvent(eventName, enhancedHandler, options);
      cleanupTokensCounter += 1;
      cleanupTokenRef.current = {
        cleanupToken: cleanupTokensCounter
      };
      registryContainer2.registry.register(
        objectRetainedByReact,
        () => {
          var _subscription$current;
          (_subscription$current = subscription.current) == null ? void 0 : _subscription$current.call(subscription);
          subscription.current = null;
          cleanupTokenRef.current = null;
        },
        cleanupTokenRef.current
      );
    } else if (!handlerRef.current && subscription.current) {
      subscription.current();
      subscription.current = null;
      if (cleanupTokenRef.current) {
        registryContainer2.registry.unregister(cleanupTokenRef.current);
        cleanupTokenRef.current = null;
      }
    }
    React71.useEffect(() => {
      if (!subscription.current && handlerRef.current) {
        const enhancedHandler = (params, event, details) => {
          if (!event.defaultMuiPrevented) {
            var _handlerRef$current2;
            (_handlerRef$current2 = handlerRef.current) == null ? void 0 : _handlerRef$current2.call(handlerRef, params, event, details);
          }
        };
        subscription.current = apiRef.current.subscribeEvent(eventName, enhancedHandler, options);
      }
      if (cleanupTokenRef.current && registryContainer2.registry) {
        registryContainer2.registry.unregister(cleanupTokenRef.current);
        cleanupTokenRef.current = null;
      }
      return () => {
        var _subscription$current2;
        (_subscription$current2 = subscription.current) == null ? void 0 : _subscription$current2.call(subscription);
        subscription.current = null;
      };
    }, [apiRef, eventName, options]);
  };
}
var registryContainer = {
  registry: null
};
var useGridApiEventHandler = createUseGridApiEventHandler(registryContainer);
var optionsSubscriberOptions = {
  isFirst: true
};
function useGridApiOptionHandler(apiRef, eventName, handler) {
  useGridApiEventHandler(apiRef, eventName, handler, optionsSubscriberOptions);
}

// node_modules/@mui/x-data-grid/components/GridScrollArea.js
var import_jsx_runtime79 = __toESM(require_jsx_runtime());
var CLIFF = 1;
var SLOP = 1.5;
var useUtilityClasses30 = (ownerState) => {
  const {
    scrollDirection,
    classes
  } = ownerState;
  const slots = {
    root: ["scrollArea", `scrollArea--${scrollDirection}`]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
var GridScrollAreaRawRoot = styled_default("div", {
  name: "MuiDataGrid",
  slot: "ScrollArea",
  overridesResolver: (props, styles) => [{
    [`&.${gridClasses["scrollArea--left"]}`]: styles["scrollArea--left"]
  }, {
    [`&.${gridClasses["scrollArea--right"]}`]: styles["scrollArea--right"]
  }, styles.scrollArea]
})(() => ({
  position: "absolute",
  top: 0,
  zIndex: 101,
  width: 20,
  bottom: 0,
  [`&.${gridClasses["scrollArea--left"]}`]: {
    left: 0
  },
  [`&.${gridClasses["scrollArea--right"]}`]: {
    right: 0
  }
}));
function GridScrollAreaRaw(props) {
  const {
    scrollDirection
  } = props;
  const rootRef = React72.useRef(null);
  const apiRef = useGridApiContext();
  const timeout = React72.useRef();
  const [dragging, setDragging] = React72.useState(false);
  const height = useGridSelector(apiRef, gridDensityHeaderHeightSelector);
  const scrollPosition = React72.useRef({
    left: 0,
    top: 0
  });
  const rootProps = useGridRootProps();
  const ownerState = _extends({}, props, {
    classes: rootProps.classes
  });
  const classes = useUtilityClasses30(ownerState);
  const handleScrolling = React72.useCallback((newScrollPosition) => {
    scrollPosition.current = newScrollPosition;
  }, []);
  const handleDragOver = React72.useCallback((event) => {
    let offset;
    if (scrollDirection === "left") {
      offset = event.clientX - rootRef.current.getBoundingClientRect().right;
    } else if (scrollDirection === "right") {
      offset = Math.max(1, event.clientX - rootRef.current.getBoundingClientRect().left);
    } else {
      throw new Error("MUI: Wrong drag direction");
    }
    offset = (offset - CLIFF) * SLOP + CLIFF;
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      apiRef.current.scroll({
        left: scrollPosition.current.left + offset,
        top: scrollPosition.current.top
      });
    });
  }, [scrollDirection, apiRef]);
  React72.useEffect(() => {
    return () => {
      clearTimeout(timeout.current);
    };
  }, []);
  const toggleDragging = React72.useCallback(() => {
    setDragging((prevDragging) => !prevDragging);
  }, []);
  useGridApiEventHandler(apiRef, "rowsScroll", handleScrolling);
  useGridApiEventHandler(apiRef, "columnHeaderDragStart", toggleDragging);
  useGridApiEventHandler(apiRef, "columnHeaderDragEnd", toggleDragging);
  return dragging ? /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(GridScrollAreaRawRoot, {
    ref: rootRef,
    className: clsx_m_default(classes.root),
    onDragOver: handleDragOver,
    style: {
      height
    }
  }) : null;
}
true ? GridScrollAreaRaw.propTypes = {
  scrollDirection: import_prop_types49.default.oneOf(["left", "right"]).isRequired
} : void 0;
var GridScrollArea = /* @__PURE__ */ React72.memo(GridScrollAreaRaw);

// node_modules/@mui/x-data-grid/context/GridContextProvider.js
var React73 = __toESM(require_react());
var import_jsx_runtime80 = __toESM(require_jsx_runtime());
var GridContextProvider = ({
  apiRef,
  props,
  children
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(GridRootPropsContext.Provider, {
    value: props,
    children: /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(GridApiContext.Provider, {
      value: apiRef,
      children
    })
  });
};

// node_modules/@mui/x-data-grid/hooks/core/useGridLoggerFactory.js
var React74 = __toESM(require_react());
var forceDebug = localStorageAvailable() && window.localStorage.getItem("DEBUG") != null;
var noop = () => {
};
var noopLogger = {
  debug: noop,
  info: noop,
  warn: noop,
  error: noop
};
var LOG_LEVELS = ["debug", "info", "warn", "error"];
function getAppender(name, logLevel, appender = console) {
  const minLogLevelIdx = LOG_LEVELS.indexOf(logLevel);
  if (minLogLevelIdx === -1) {
    throw new Error(`MUI: Log level ${logLevel} not recognized.`);
  }
  const logger = LOG_LEVELS.reduce((loggerObj, method, idx) => {
    if (idx >= minLogLevelIdx) {
      loggerObj[method] = (...args) => {
        const [message, ...other] = args;
        appender[method](`MUI: ${name} - ${message}`, ...other);
      };
    } else {
      loggerObj[method] = noop;
    }
    return loggerObj;
  }, {});
  return logger;
}
var useGridLoggerFactory = (apiRef, props) => {
  apiRef.current.getLogger = React74.useCallback((name) => {
    if (forceDebug) {
      return getAppender(name, "debug", props.logger);
    }
    if (!props.logLevel) {
      return noopLogger;
    }
    return getAppender(name, props.logLevel.toString(), props.logger);
  }, [props.logLevel, props.logger]);
};

// node_modules/@mui/x-data-grid/hooks/core/useGridApiInitialization.js
var React76 = __toESM(require_react());

// node_modules/@mui/x-data-grid/hooks/utils/useGridApiMethod.js
var React75 = __toESM(require_react());
function useGridApiMethod(apiRef, apiMethods, apiName) {
  const apiMethodsRef = React75.useRef(apiMethods);
  const [apiMethodsNames] = React75.useState(Object.keys(apiMethods));
  const installMethods = React75.useCallback(() => {
    if (!apiRef.current) {
      return;
    }
    apiMethodsNames.forEach((methodName) => {
      if (!apiRef.current.hasOwnProperty(methodName)) {
        apiRef.current[methodName] = (...args) => apiMethodsRef.current[methodName](...args);
      }
    });
  }, [apiMethodsNames, apiRef]);
  React75.useEffect(() => {
    apiMethodsRef.current = apiMethods;
  }, [apiMethods]);
  React75.useEffect(() => {
    installMethods();
  }, [installMethods]);
  installMethods();
}

// node_modules/@mui/x-data-grid/utils/EventManager.js
var EventManager = class {
  constructor() {
    this.maxListeners = 10;
    this.warnOnce = false;
    this.events = {};
  }
  on(eventName, listener, options = {}) {
    let collection = this.events[eventName];
    if (!collection) {
      collection = {
        highPriority: /* @__PURE__ */ new Map(),
        regular: /* @__PURE__ */ new Map()
      };
      this.events[eventName] = collection;
    }
    if (options.isFirst) {
      collection.highPriority.set(listener, true);
    } else {
      collection.regular.set(listener, true);
    }
    if (true) {
      const collectionSize = collection.highPriority.size + collection.regular.size;
      if (collectionSize > this.maxListeners && !this.warnOnce) {
        this.warnOnce = true;
        console.warn([`Possible EventEmitter memory leak detected. ${collectionSize} ${eventName} listeners added.`, `Use emitter.setMaxListeners() to increase limit.`].join("\n"));
      }
    }
  }
  removeListener(eventName, listener) {
    if (this.events[eventName]) {
      this.events[eventName].regular.delete(listener);
      this.events[eventName].highPriority.delete(listener);
    }
  }
  removeAllListeners() {
    this.events = {};
  }
  emit(eventName, ...args) {
    const collection = this.events[eventName];
    if (!collection) {
      return;
    }
    const highPriorityListeners = Array.from(collection.highPriority.keys());
    const regularListeners = Array.from(collection.regular.keys());
    for (let i = highPriorityListeners.length - 1; i >= 0; i -= 1) {
      const listener = highPriorityListeners[i];
      if (collection.highPriority.has(listener)) {
        listener.apply(this, args);
      }
    }
    for (let i = 0; i < regularListeners.length; i += 1) {
      const listener = regularListeners[i];
      if (collection.regular.has(listener)) {
        listener.apply(this, args);
      }
    }
  }
  once(eventName, listener) {
    const that = this;
    this.on(eventName, function oneTimeListener(...args) {
      that.removeListener(eventName, oneTimeListener);
      listener.apply(that, args);
    });
  }
};

// node_modules/@mui/x-data-grid/hooks/core/useGridApiInitialization.js
var isSyntheticEvent = (event) => {
  return event.isPropagationStopped !== void 0;
};
var globalId = 0;
function useGridApiInitialization(inputApiRef, props) {
  const apiRef = React76.useRef();
  if (!apiRef.current) {
    apiRef.current = {
      unstable_eventManager: new EventManager(),
      unstable_caches: {},
      state: {},
      instanceId: globalId
    };
    globalId += 1;
  }
  React76.useImperativeHandle(inputApiRef, () => apiRef.current, [apiRef]);
  const publishEvent = React76.useCallback((...args) => {
    const [name, params, event = {}] = args;
    event.defaultMuiPrevented = false;
    if (isSyntheticEvent(event) && event.isPropagationStopped()) {
      return;
    }
    const details = props.signature === GridSignature.DataGridPro ? {
      api: apiRef.current
    } : {};
    apiRef.current.unstable_eventManager.emit(name, params, event, details);
  }, [apiRef, props.signature]);
  const subscribeEvent = React76.useCallback((event, handler, options) => {
    apiRef.current.unstable_eventManager.on(event, handler, options);
    const api = apiRef.current;
    return () => {
      api.unstable_eventManager.removeListener(event, handler);
    };
  }, [apiRef]);
  const showError = React76.useCallback((args) => {
    apiRef.current.publishEvent("componentError", args);
  }, [apiRef]);
  useGridApiMethod(apiRef, {
    subscribeEvent,
    publishEvent,
    showError
  }, "GridCoreApi");
  React76.useEffect(() => {
    const api = apiRef.current;
    return () => {
      api.publishEvent("unmount");
    };
  }, [apiRef]);
  return apiRef;
}

// node_modules/@mui/x-data-grid/hooks/core/useGridErrorHandler.js
init_extends();
var React77 = __toESM(require_react());
function useGridErrorHandler(apiRef, props) {
  const handleError = React77.useCallback((args) => {
    apiRef.current.setState((state) => _extends({}, state, {
      error: args
    }));
  }, [apiRef]);
  React77.useEffect(() => {
    handleError(props.error);
  }, [handleError, props.error]);
  useGridApiEventHandler(apiRef, "componentError", handleError);
}

// node_modules/@mui/x-data-grid/hooks/core/useGridLocaleText.js
var React78 = __toESM(require_react());
var useGridLocaleText = (apiRef, props) => {
  const getLocaleText = React78.useCallback((key) => {
    if (props.localeText[key] == null) {
      throw new Error(`Missing translation for key ${key}.`);
    }
    return props.localeText[key];
  }, [props.localeText]);
  const localeTextApi = {
    getLocaleText
  };
  useGridApiMethod(apiRef, localeTextApi, "LocaleTextApi");
};

// node_modules/@mui/x-data-grid/hooks/core/pipeProcessing/useGridPipeProcessing.js
init_objectWithoutPropertiesLoose();

// node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}

// node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

// node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}

// node_modules/@mui/x-data-grid/hooks/core/pipeProcessing/useGridPipeProcessing.js
var React79 = __toESM(require_react());
var useGridPipeProcessing = (apiRef) => {
  const processorsCache = React79.useRef({});
  const runAppliers = React79.useCallback((groupCache) => {
    if (!groupCache) {
      return;
    }
    Object.values(groupCache.appliers).forEach((callback) => {
      callback();
    });
  }, []);
  const registerPipeProcessor = React79.useCallback((group, id, processor) => {
    if (!processorsCache.current[group]) {
      processorsCache.current[group] = {
        processors: /* @__PURE__ */ new Map(),
        appliers: {}
      };
    }
    const groupCache = processorsCache.current[group];
    const oldProcessor = groupCache.processors.get(id);
    if (oldProcessor !== processor) {
      groupCache.processors.set(id, processor);
      runAppliers(groupCache);
    }
    return () => {
      processorsCache.current[group].processors.set(id, null);
    };
  }, [runAppliers]);
  const registerPipeApplier = React79.useCallback((group, id, applier) => {
    if (!processorsCache.current[group]) {
      processorsCache.current[group] = {
        processors: /* @__PURE__ */ new Map(),
        appliers: {}
      };
    }
    processorsCache.current[group].appliers[id] = applier;
    return () => {
      const _appliers = processorsCache.current[group].appliers, otherAppliers = _objectWithoutPropertiesLoose(_appliers, [id].map(_toPropertyKey));
      processorsCache.current[group].appliers = otherAppliers;
    };
  }, []);
  const requestPipeProcessorsApplication = React79.useCallback((group) => {
    const groupCache = processorsCache.current[group];
    runAppliers(groupCache);
  }, [runAppliers]);
  const applyPipeProcessors = React79.useCallback((...args) => {
    const [group, value, context] = args;
    if (!processorsCache.current[group]) {
      return value;
    }
    const preProcessors = Array.from(processorsCache.current[group].processors.values());
    return preProcessors.reduce((acc, preProcessor) => {
      if (!preProcessor) {
        return acc;
      }
      return preProcessor(acc, context);
    }, value);
  }, []);
  const preProcessingApi = {
    unstable_registerPipeProcessor: registerPipeProcessor,
    unstable_registerPipeApplier: registerPipeApplier,
    unstable_requestPipeProcessorsApplication: requestPipeProcessorsApplication,
    unstable_applyPipeProcessors: applyPipeProcessors
  };
  useGridApiMethod(apiRef, preProcessingApi, "GridPipeProcessingApi");
};

// node_modules/@mui/x-data-grid/hooks/core/pipeProcessing/useGridRegisterPipeProcessor.js
var React81 = __toESM(require_react());

// node_modules/@mui/x-data-grid/hooks/utils/useFirstRender.js
var React80 = __toESM(require_react());
var useFirstRender = (callback) => {
  const isFirstRender = React80.useRef(true);
  if (isFirstRender.current) {
    isFirstRender.current = false;
    callback();
  }
};

// node_modules/@mui/x-data-grid/hooks/core/pipeProcessing/useGridRegisterPipeProcessor.js
var useGridRegisterPipeProcessor = (apiRef, group, callback) => {
  const cleanup = React81.useRef();
  const id = React81.useRef(`mui-${Math.round(Math.random() * 1e9)}`);
  const registerPreProcessor = React81.useCallback(() => {
    cleanup.current = apiRef.current.unstable_registerPipeProcessor(group, id.current, callback);
  }, [apiRef, callback, group]);
  useFirstRender(() => {
    registerPreProcessor();
  });
  const isFirstRender = React81.useRef(true);
  React81.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      registerPreProcessor();
    }
    return () => {
      if (cleanup.current) {
        cleanup.current();
        cleanup.current = null;
      }
    };
  }, [registerPreProcessor]);
};

// node_modules/@mui/x-data-grid/hooks/core/pipeProcessing/useGridRegisterPipeApplier.js
var React82 = __toESM(require_react());
var useGridRegisterPipeApplier = (apiRef, group, callback) => {
  const cleanup = React82.useRef();
  const id = React82.useRef(`mui-${Math.round(Math.random() * 1e9)}`);
  const registerPreProcessor = React82.useCallback(() => {
    cleanup.current = apiRef.current.unstable_registerPipeApplier(group, id.current, callback);
  }, [apiRef, callback, group]);
  useFirstRender(() => {
    registerPreProcessor();
  });
  const isFirstRender = React82.useRef(true);
  React82.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      registerPreProcessor();
    }
    return () => {
      if (cleanup.current) {
        cleanup.current();
        cleanup.current = null;
      }
    };
  }, [registerPreProcessor]);
};

// node_modules/@mui/x-data-grid/hooks/core/strategyProcessing/useGridRegisterStrategyProcessor.js
var React83 = __toESM(require_react());
var useGridRegisterStrategyProcessor = (apiRef, strategyName, group, processor) => {
  const registerPreProcessor = React83.useCallback(() => {
    apiRef.current.unstable_registerStrategyProcessor(strategyName, group, processor);
  }, [apiRef, processor, group, strategyName]);
  useFirstRender(() => {
    registerPreProcessor();
  });
  const isFirstRender = React83.useRef(true);
  React83.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      registerPreProcessor();
    }
  }, [registerPreProcessor]);
};

// node_modules/@mui/x-data-grid/hooks/core/strategyProcessing/useGridStrategyProcessing.js
init_objectWithoutPropertiesLoose();
var React84 = __toESM(require_react());
var GRID_DEFAULT_STRATEGY = "none";
var GRID_STRATEGIES_PROCESSORS = {
  rowTreeCreation: "rowTree",
  filtering: "rowTree",
  sorting: "rowTree"
};
var useGridStrategyProcessing = (apiRef) => {
  const availableStrategies = React84.useRef(/* @__PURE__ */ new Map());
  const strategiesCache = React84.useRef({});
  const registerStrategyProcessor = React84.useCallback((strategyName, processorName, processor) => {
    const cleanup = () => {
      const _ref = strategiesCache.current[processorName], otherProcessors = _objectWithoutPropertiesLoose(_ref, [strategyName].map(_toPropertyKey));
      strategiesCache.current[processorName] = otherProcessors;
    };
    if (!strategiesCache.current[processorName]) {
      strategiesCache.current[processorName] = {};
    }
    const groupPreProcessors = strategiesCache.current[processorName];
    const previousProcessor = groupPreProcessors[strategyName];
    groupPreProcessors[strategyName] = processor;
    if (!previousProcessor || previousProcessor === processor) {
      return cleanup;
    }
    if (strategyName === apiRef.current.unstable_getActiveStrategy(GRID_STRATEGIES_PROCESSORS[processorName])) {
      apiRef.current.publishEvent("activeStrategyProcessorChange", processorName);
    }
    return cleanup;
  }, [apiRef]);
  const applyStrategyProcessor = React84.useCallback((processorName, params) => {
    const activeStrategy = apiRef.current.unstable_getActiveStrategy(GRID_STRATEGIES_PROCESSORS[processorName]);
    if (activeStrategy == null) {
      throw new Error("Can't apply a strategy processor before defining an active strategy");
    }
    const groupCache = strategiesCache.current[processorName];
    if (!groupCache || !groupCache[activeStrategy]) {
      throw new Error(`No processor found for processor "${processorName}" on strategy "${activeStrategy}"`);
    }
    const processor = groupCache[activeStrategy];
    return processor(params);
  }, [apiRef]);
  const getActiveStrategy = React84.useCallback((strategyGroup) => {
    var _availableStrategyEnt;
    const strategyEntries = Array.from(availableStrategies.current.entries());
    const availableStrategyEntry = strategyEntries.find(([, strategy]) => {
      if (strategy.group !== strategyGroup) {
        return false;
      }
      return strategy.isAvailable();
    });
    return (_availableStrategyEnt = availableStrategyEntry == null ? void 0 : availableStrategyEntry[0]) != null ? _availableStrategyEnt : GRID_DEFAULT_STRATEGY;
  }, []);
  const setStrategyAvailability = React84.useCallback((strategyGroup, strategyName, isAvailable) => {
    availableStrategies.current.set(strategyName, {
      group: strategyGroup,
      isAvailable
    });
    apiRef.current.publishEvent("strategyAvailabilityChange");
  }, [apiRef]);
  const strategyProcessingApi = {
    unstable_registerStrategyProcessor: registerStrategyProcessor,
    unstable_applyStrategyProcessor: applyStrategyProcessor,
    unstable_getActiveStrategy: getActiveStrategy,
    unstable_setStrategyAvailability: setStrategyAvailability
  };
  useGridApiMethod(apiRef, strategyProcessingApi, "GridStrategyProcessing");
};

// node_modules/@mui/x-data-grid/hooks/core/useGridStateInitialization.js
init_extends();
init_objectWithoutPropertiesLoose();
var React86 = __toESM(require_react());

// node_modules/@mui/x-data-grid/hooks/utils/useGridNativeEventListener.js
var React85 = __toESM(require_react());
var useGridNativeEventListener = (apiRef, ref, eventName, handler, options) => {
  const logger = useGridLogger(apiRef, "useNativeEventListener");
  const [added, setAdded] = React85.useState(false);
  const handlerRef = React85.useRef(handler);
  const wrapHandler = React85.useCallback((event) => {
    return handlerRef.current && handlerRef.current(event);
  }, []);
  React85.useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);
  React85.useEffect(() => {
    let targetElement;
    if (isFunction(ref)) {
      targetElement = ref();
    } else {
      targetElement = ref && ref.current ? ref.current : null;
    }
    if (targetElement && eventName && !added) {
      logger.debug(`Binding native ${eventName} event`);
      targetElement.addEventListener(eventName, wrapHandler, options);
      const boundElem = targetElement;
      setAdded(true);
      const unsubscribe = () => {
        logger.debug(`Clearing native ${eventName} event`);
        boundElem.removeEventListener(eventName, wrapHandler, options);
      };
      apiRef.current.subscribeEvent("unmount", unsubscribe);
    }
  }, [ref, wrapHandler, eventName, added, logger, options, apiRef]);
};

// node_modules/@mui/x-data-grid/hooks/core/useGridStateInitialization.js
var _excluded41 = ["stateId"];
var useGridStateInitialization = (apiRef, props) => {
  const controlStateMapRef = React86.useRef({});
  const [, rawForceUpdate] = React86.useState();
  const registerControlState = React86.useCallback((controlStateItem) => {
    const {
      stateId
    } = controlStateItem, others = _objectWithoutPropertiesLoose(controlStateItem, _excluded41);
    controlStateMapRef.current[stateId] = _extends({}, others, {
      stateId
    });
  }, []);
  const setState = React86.useCallback((state, reason) => {
    let newState;
    if (isFunction(state)) {
      newState = state(apiRef.current.state);
    } else {
      newState = state;
    }
    if (apiRef.current.state === newState) {
      return false;
    }
    let ignoreSetState = false;
    const updatedControlStateIds = [];
    Object.keys(controlStateMapRef.current).forEach((stateId) => {
      const controlState = controlStateMapRef.current[stateId];
      const oldSubState = controlState.stateSelector(apiRef.current.state, apiRef.current.instanceId);
      const newSubState = controlState.stateSelector(newState, apiRef.current.instanceId);
      if (newSubState === oldSubState) {
        return;
      }
      updatedControlStateIds.push({
        stateId: controlState.stateId,
        hasPropChanged: newSubState !== controlState.propModel
      });
      if (controlState.propModel !== void 0 && newSubState !== controlState.propModel) {
        ignoreSetState = true;
      }
    });
    if (updatedControlStateIds.length > 1) {
      throw new Error(`You're not allowed to update several sub-state in one transaction. You already updated ${updatedControlStateIds[0].stateId}, therefore, you're not allowed to update ${updatedControlStateIds.map((el) => el.stateId).join(", ")} in the same transaction.`);
    }
    if (!ignoreSetState) {
      apiRef.current.state = newState;
      if (apiRef.current.publishEvent) {
        apiRef.current.publishEvent("stateChange", newState);
      }
    }
    if (updatedControlStateIds.length === 1) {
      const {
        stateId,
        hasPropChanged
      } = updatedControlStateIds[0];
      const controlState = controlStateMapRef.current[stateId];
      const model = controlState.stateSelector(newState, apiRef.current.instanceId);
      if (controlState.propOnChange && hasPropChanged) {
        const details = props.signature === GridSignature.DataGridPro ? {
          api: apiRef.current,
          reason
        } : {
          reason
        };
        controlState.propOnChange(model, details);
      }
      if (!ignoreSetState) {
        apiRef.current.publishEvent(controlState.changeEvent, model, {
          reason
        });
      }
    }
    return !ignoreSetState;
  }, [apiRef, props.signature]);
  const updateControlState = React86.useCallback((key, state, reason) => {
    return apiRef.current.setState((previousState) => {
      return _extends({}, previousState, {
        [key]: state(previousState[key])
      });
    }, reason);
  }, [apiRef]);
  const forceUpdate = React86.useCallback(() => rawForceUpdate(() => apiRef.current.state), [apiRef]);
  const stateApi = {
    setState,
    forceUpdate,
    unstable_updateControlState: updateControlState,
    unstable_registerControlState: registerControlState
  };
  useGridApiMethod(apiRef, stateApi, "GridStateApi");
};

// node_modules/@mui/x-data-grid/hooks/core/useGridInitialization.js
var useGridInitialization = (inputApiRef, props) => {
  const apiRef = useGridApiInitialization(inputApiRef, props);
  useGridLoggerFactory(apiRef, props);
  useGridErrorHandler(apiRef, props);
  useGridStateInitialization(apiRef, props);
  useGridPipeProcessing(apiRef);
  useGridStrategyProcessing(apiRef);
  useGridLocaleText(apiRef, props);
  return apiRef;
};

// node_modules/@mui/x-data-grid/hooks/utils/useGridInitializeState.js
var React87 = __toESM(require_react());
var useGridInitializeState = (initializer, apiRef, props) => {
  const isInitialized = React87.useRef(false);
  if (!isInitialized.current) {
    apiRef.current.state = initializer(apiRef.current.state, props, apiRef);
    isInitialized.current = true;
  }
};

// node_modules/@mui/x-data-grid/hooks/features/clipboard/useGridClipboard.js
var React88 = __toESM(require_react());
function writeToClipboardPolyfill(data) {
  const span = document.createElement("span");
  span.style.whiteSpace = "pre";
  span.style.userSelect = "all";
  span.style.opacity = "0px";
  span.textContent = data;
  document.body.appendChild(span);
  const range = document.createRange();
  range.selectNode(span);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  try {
    document.execCommand("copy");
  } finally {
    document.body.removeChild(span);
  }
}
var useGridClipboard = (apiRef) => {
  const copySelectedRowsToClipboard = React88.useCallback((includeHeaders = false) => {
    if (apiRef.current.getSelectedRows().size === 0) {
      return;
    }
    const data = apiRef.current.getDataAsCsv({
      includeHeaders,
      delimiter: "	"
    });
    if (navigator.clipboard) {
      navigator.clipboard.writeText(data).catch(() => {
        writeToClipboardPolyfill(data);
      });
    } else {
      writeToClipboardPolyfill(data);
    }
  }, [apiRef]);
  const handleKeydown = React88.useCallback((event) => {
    var _window$getSelection;
    const isModifierKeyPressed = event.ctrlKey || event.metaKey || event.altKey;
    if (String.fromCharCode(event.keyCode) !== "C" || !isModifierKeyPressed) {
      return;
    }
    if (((_window$getSelection = window.getSelection()) == null ? void 0 : _window$getSelection.toString()) !== "") {
      return;
    }
    apiRef.current.unstable_copySelectedRowsToClipboard(event.altKey);
  }, [apiRef]);
  useGridNativeEventListener(apiRef, apiRef.current.rootElementRef, "keydown", handleKeydown);
  const clipboardApi = {
    unstable_copySelectedRowsToClipboard: copySelectedRowsToClipboard
  };
  useGridApiMethod(apiRef, clipboardApi, "GridClipboardApi");
};

// node_modules/@mui/x-data-grid/hooks/features/columnMenu/useGridColumnMenu.js
init_extends();
var React89 = __toESM(require_react());

// node_modules/@mui/x-data-grid/hooks/features/columnMenu/columnMenuSelector.js
var gridColumnMenuSelector = (state) => state.columnMenu;

// node_modules/@mui/x-data-grid/hooks/features/columnMenu/useGridColumnMenu.js
var columnMenuStateInitializer = (state) => _extends({}, state, {
  columnMenu: {
    open: false
  }
});
var useGridColumnMenu = (apiRef) => {
  const logger = useGridLogger(apiRef, "useGridColumnMenu");
  const showColumnMenu = React89.useCallback((field) => {
    const shouldUpdate = apiRef.current.setState((state) => {
      if (state.columnMenu.open && state.columnMenu.field === field) {
        return state;
      }
      logger.debug("Opening Column Menu");
      return _extends({}, state, {
        columnMenu: {
          open: true,
          field
        }
      });
    });
    if (shouldUpdate) {
      apiRef.current.hidePreferences();
      apiRef.current.forceUpdate();
    }
  }, [apiRef, logger]);
  const hideColumnMenu = React89.useCallback(() => {
    const shouldUpdate = apiRef.current.setState((state) => {
      if (!state.columnMenu.open && state.columnMenu.field === void 0) {
        return state;
      }
      logger.debug("Hiding Column Menu");
      return _extends({}, state, {
        columnMenu: _extends({}, state.columnMenu, {
          open: false,
          field: void 0
        })
      });
    });
    if (shouldUpdate) {
      apiRef.current.forceUpdate();
    }
  }, [apiRef, logger]);
  const toggleColumnMenu = React89.useCallback((field) => {
    logger.debug("Toggle Column Menu");
    const columnMenu = gridColumnMenuSelector(apiRef.current.state);
    if (!columnMenu.open || columnMenu.field !== field) {
      showColumnMenu(field);
    } else {
      hideColumnMenu();
    }
  }, [apiRef, logger, showColumnMenu, hideColumnMenu]);
  const columnMenuApi = {
    showColumnMenu,
    hideColumnMenu,
    toggleColumnMenu
  };
  useGridApiMethod(apiRef, columnMenuApi, "GridColumnMenuApi");
  const handleColumnHeaderFocus = React89.useCallback((params, event) => {
    if (!event.target.classList.contains(gridClasses.menuIconButton)) {
      return;
    }
    if (!event.relatedTarget) {
      return;
    }
    const columnMenuLostFocus = event.relatedTarget.classList.contains(gridClasses.menuList);
    const columnMenuItemLostFocus = event.relatedTarget.getAttribute("role") === "menuitem";
    if (columnMenuLostFocus || columnMenuItemLostFocus) {
      apiRef.current.setColumnHeaderFocus(params.field);
    }
  }, [apiRef]);
  useGridApiEventHandler(apiRef, "columnResizeStart", hideColumnMenu);
  useGridApiEventHandler(apiRef, "columnHeaderFocus", handleColumnHeaderFocus);
  useGridApiEventHandler(apiRef, "virtualScrollerWheel", apiRef.current.hideColumnMenu);
  useGridApiEventHandler(apiRef, "virtualScrollerTouchMove", apiRef.current.hideColumnMenu);
};

// node_modules/@mui/x-data-grid/hooks/features/columns/useGridColumns.js
init_extends();
var React90 = __toESM(require_react());
var import_jsx_runtime81 = __toESM(require_jsx_runtime());
var columnsStateInitializer = (state, props, apiRef) => {
  var _props$initialState, _props$initialState$c, _props$initialState2, _ref, _props$columnVisibili, _props$initialState3, _props$initialState3$;
  const isUsingColumnVisibilityModel = !!props.columnVisibilityModel || !!((_props$initialState = props.initialState) != null && (_props$initialState$c = _props$initialState.columns) != null && _props$initialState$c.columnVisibilityModel);
  apiRef.current.unstable_caches.columns = {
    isUsingColumnVisibilityModel
  };
  const columnsTypes = computeColumnTypes(props.columnTypes);
  const columnsState = createColumnsState({
    apiRef,
    columnTypes: columnsTypes,
    columnsToUpsert: props.columns,
    initialState: (_props$initialState2 = props.initialState) == null ? void 0 : _props$initialState2.columns,
    shouldRegenColumnVisibilityModelFromColumns: !isUsingColumnVisibilityModel,
    currentColumnVisibilityModel: (_ref = (_props$columnVisibili = props.columnVisibilityModel) != null ? _props$columnVisibili : (_props$initialState3 = props.initialState) == null ? void 0 : (_props$initialState3$ = _props$initialState3.columns) == null ? void 0 : _props$initialState3$.columnVisibilityModel) != null ? _ref : {},
    keepOnlyColumnsToUpsert: true
  });
  return _extends({}, state, {
    columns: columnsState
  });
};
function useGridColumns(apiRef, props) {
  var _props$initialState5, _props$componentsProp2;
  const logger = useGridLogger(apiRef, "useGridColumns");
  const columnTypes = React90.useMemo(() => computeColumnTypes(props.columnTypes), [props.columnTypes]);
  const previousColumnsProp = React90.useRef(props.columns);
  const previousColumnTypesProp = React90.useRef(columnTypes);
  apiRef.current.unstable_registerControlState({
    stateId: "visibleColumns",
    propModel: props.columnVisibilityModel,
    propOnChange: props.onColumnVisibilityModelChange,
    stateSelector: gridColumnVisibilityModelSelector,
    changeEvent: "columnVisibilityModelChange"
  });
  const setGridColumnsState = React90.useCallback((columnsState) => {
    logger.debug("Updating columns state.");
    apiRef.current.setState(mergeColumnsState(columnsState));
    apiRef.current.forceUpdate();
    apiRef.current.publishEvent("columnsChange", columnsState.all);
  }, [logger, apiRef]);
  const getColumn = React90.useCallback((field) => gridColumnLookupSelector(apiRef)[field], [apiRef]);
  const getAllColumns = React90.useCallback(() => gridColumnDefinitionsSelector(apiRef), [apiRef]);
  const getVisibleColumns = React90.useCallback(() => gridVisibleColumnDefinitionsSelector(apiRef), [apiRef]);
  const getColumnsMeta = React90.useCallback(() => gridColumnsMetaSelector(apiRef), [apiRef]);
  const getColumnIndex = React90.useCallback((field, useVisibleColumns = true) => {
    const columns2 = useVisibleColumns ? gridVisibleColumnDefinitionsSelector(apiRef) : gridColumnDefinitionsSelector(apiRef);
    return columns2.findIndex((col) => col.field === field);
  }, [apiRef]);
  const getColumnPosition = React90.useCallback((field) => {
    const index = getColumnIndex(field);
    return gridColumnPositionsSelector(apiRef)[index];
  }, [apiRef, getColumnIndex]);
  const setColumnVisibilityModel = React90.useCallback((model) => {
    const currentModel = gridColumnVisibilityModelSelector(apiRef);
    if (currentModel !== model) {
      apiRef.current.setState((state) => _extends({}, state, {
        columns: createColumnsState({
          apiRef,
          columnTypes,
          columnsToUpsert: [],
          initialState: void 0,
          shouldRegenColumnVisibilityModelFromColumns: false,
          currentColumnVisibilityModel: model,
          keepOnlyColumnsToUpsert: false
        })
      }));
      apiRef.current.forceUpdate();
    }
  }, [apiRef, columnTypes]);
  const updateColumns = React90.useCallback((columns2) => {
    const columnsState = createColumnsState({
      apiRef,
      columnTypes,
      columnsToUpsert: columns2,
      initialState: void 0,
      shouldRegenColumnVisibilityModelFromColumns: true,
      keepOnlyColumnsToUpsert: false
    });
    setGridColumnsState(columnsState);
  }, [apiRef, setGridColumnsState, columnTypes]);
  const updateColumn = React90.useCallback((column) => apiRef.current.updateColumns([column]), [apiRef]);
  const setColumnVisibility = React90.useCallback((field, isVisible) => {
    if (apiRef.current.unstable_caches.columns.isUsingColumnVisibilityModel) {
      var _columnVisibilityMode;
      const columnVisibilityModel = gridColumnVisibilityModelSelector(apiRef);
      const isCurrentlyVisible = (_columnVisibilityMode = columnVisibilityModel[field]) != null ? _columnVisibilityMode : true;
      if (isVisible !== isCurrentlyVisible) {
        const newModel = _extends({}, columnVisibilityModel, {
          [field]: isVisible
        });
        apiRef.current.setColumnVisibilityModel(newModel);
      }
    } else {
      const column = apiRef.current.getColumn(field);
      const newColumn = _extends({}, column, {
        hide: !isVisible
      });
      apiRef.current.updateColumns([newColumn]);
      const params = {
        field,
        colDef: newColumn,
        isVisible
      };
      apiRef.current.publishEvent("columnVisibilityChange", params);
    }
  }, [apiRef]);
  const setColumnIndex = React90.useCallback((field, targetIndexPosition) => {
    const allColumns = gridColumnFieldsSelector(apiRef);
    const oldIndexPosition = allColumns.findIndex((col) => col === field);
    if (oldIndexPosition === targetIndexPosition) {
      return;
    }
    logger.debug(`Moving column ${field} to index ${targetIndexPosition}`);
    const updatedColumns = [...allColumns];
    const fieldRemoved = updatedColumns.splice(oldIndexPosition, 1)[0];
    updatedColumns.splice(targetIndexPosition, 0, fieldRemoved);
    setGridColumnsState(_extends({}, gridColumnsSelector(apiRef.current.state), {
      all: updatedColumns
    }));
    const params = {
      field,
      element: apiRef.current.getColumnHeaderElement(field),
      colDef: apiRef.current.getColumn(field),
      targetIndex: targetIndexPosition,
      oldIndex: oldIndexPosition
    };
    apiRef.current.publishEvent("columnOrderChange", params);
  }, [apiRef, logger, setGridColumnsState]);
  const setColumnWidth = React90.useCallback((field, width) => {
    logger.debug(`Updating column ${field} width to ${width}`);
    const column = apiRef.current.getColumn(field);
    const newColumn = _extends({}, column, {
      width
    });
    apiRef.current.updateColumns([newColumn]);
    apiRef.current.publishEvent("columnWidthChange", {
      element: apiRef.current.getColumnHeaderElement(field),
      colDef: newColumn,
      width
    });
  }, [apiRef, logger]);
  const columnApi = {
    getColumn,
    getAllColumns,
    getColumnIndex,
    getColumnPosition,
    getVisibleColumns,
    getColumnsMeta,
    updateColumn,
    updateColumns,
    setColumnVisibilityModel,
    setColumnVisibility,
    setColumnIndex,
    setColumnWidth
  };
  useGridApiMethod(apiRef, columnApi, "GridColumnApi");
  const stateExportPreProcessing = React90.useCallback((prevState, context) => {
    const columnsStateToExport = {};
    if (apiRef.current.unstable_caches.columns.isUsingColumnVisibilityModel) {
      var _props$initialState$c2, _props$initialState4, _props$initialState4$;
      const columnVisibilityModelToExport = gridColumnVisibilityModelSelector(apiRef);
      const shouldExportColumnVisibilityModel = !context.exportOnlyDirtyModels || props.columnVisibilityModel != null || Object.keys((_props$initialState$c2 = (_props$initialState4 = props.initialState) == null ? void 0 : (_props$initialState4$ = _props$initialState4.columns) == null ? void 0 : _props$initialState4$.columnVisibilityModel) != null ? _props$initialState$c2 : {}).length > 0 || Object.keys(columnVisibilityModelToExport).length > 0;
      if (shouldExportColumnVisibilityModel) {
        columnsStateToExport.columnVisibilityModel = columnVisibilityModelToExport;
      }
    }
    columnsStateToExport.orderedFields = gridColumnFieldsSelector(apiRef);
    const columns2 = gridColumnDefinitionsSelector(apiRef);
    const dimensions = {};
    columns2.forEach((colDef) => {
      if (colDef.hasBeenResized) {
        const colDefDimensions = {};
        COLUMNS_DIMENSION_PROPERTIES.forEach((propertyName) => {
          let propertyValue = colDef[propertyName];
          if (propertyValue === Infinity) {
            propertyValue = -1;
          }
          colDefDimensions[propertyName] = propertyValue;
        });
        dimensions[colDef.field] = colDefDimensions;
      }
    });
    if (Object.keys(dimensions).length > 0) {
      columnsStateToExport.dimensions = dimensions;
    }
    return _extends({}, prevState, {
      columns: columnsStateToExport
    });
  }, [apiRef, props.columnVisibilityModel, (_props$initialState5 = props.initialState) == null ? void 0 : _props$initialState5.columns]);
  const stateRestorePreProcessing = React90.useCallback((params, context) => {
    var _context$stateToResto;
    const columnVisibilityModelToImport = apiRef.current.unstable_caches.columns.isUsingColumnVisibilityModel ? (_context$stateToResto = context.stateToRestore.columns) == null ? void 0 : _context$stateToResto.columnVisibilityModel : void 0;
    const initialState = context.stateToRestore.columns;
    if (columnVisibilityModelToImport == null && initialState == null) {
      return params;
    }
    const columnsState = createColumnsState({
      apiRef,
      columnTypes,
      columnsToUpsert: [],
      initialState,
      shouldRegenColumnVisibilityModelFromColumns: !apiRef.current.unstable_caches.columns.isUsingColumnVisibilityModel,
      currentColumnVisibilityModel: columnVisibilityModelToImport,
      keepOnlyColumnsToUpsert: false
    });
    apiRef.current.setState(mergeColumnsState(columnsState));
    if (initialState != null) {
      apiRef.current.publishEvent("columnsChange", columnsState.all);
    }
    return params;
  }, [apiRef, columnTypes]);
  const preferencePanelPreProcessing = React90.useCallback((initialValue, value) => {
    if (value === GridPreferencePanelsValue.columns) {
      var _props$componentsProp;
      const ColumnsPanel = props.components.ColumnsPanel;
      return /* @__PURE__ */ (0, import_jsx_runtime81.jsx)(ColumnsPanel, _extends({}, (_props$componentsProp = props.componentsProps) == null ? void 0 : _props$componentsProp.columnsPanel));
    }
    return initialValue;
  }, [props.components.ColumnsPanel, (_props$componentsProp2 = props.componentsProps) == null ? void 0 : _props$componentsProp2.columnsPanel]);
  useGridRegisterPipeProcessor(apiRef, "exportState", stateExportPreProcessing);
  useGridRegisterPipeProcessor(apiRef, "restoreState", stateRestorePreProcessing);
  useGridRegisterPipeProcessor(apiRef, "preferencePanel", preferencePanelPreProcessing);
  const prevInnerWidth = React90.useRef(null);
  const handleGridSizeChange = (viewportInnerSize) => {
    if (prevInnerWidth.current !== viewportInnerSize.width) {
      prevInnerWidth.current = viewportInnerSize.width;
      setGridColumnsState(hydrateColumnsWidth(gridColumnsSelector(apiRef.current.state), viewportInnerSize.width));
    }
  };
  useGridApiEventHandler(apiRef, "viewportInnerSizeChange", handleGridSizeChange);
  useGridApiOptionHandler(apiRef, "columnVisibilityChange", props.onColumnVisibilityChange);
  const hydrateColumns = React90.useCallback(() => {
    logger.info(`Columns pipe processing have changed, regenerating the columns`);
    const columnsState = createColumnsState({
      apiRef,
      columnTypes,
      columnsToUpsert: [],
      initialState: void 0,
      shouldRegenColumnVisibilityModelFromColumns: !apiRef.current.unstable_caches.columns.isUsingColumnVisibilityModel,
      keepOnlyColumnsToUpsert: false
    });
    setGridColumnsState(columnsState);
  }, [apiRef, logger, setGridColumnsState, columnTypes]);
  useGridRegisterPipeApplier(apiRef, "hydrateColumns", hydrateColumns);
  const isFirstRender = React90.useRef(true);
  React90.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    logger.info(`GridColumns have changed, new length ${props.columns.length}`);
    if (previousColumnsProp.current === props.columns && previousColumnTypesProp.current === columnTypes) {
      return;
    }
    const columnsState = createColumnsState({
      apiRef,
      columnTypes,
      initialState: void 0,
      shouldRegenColumnVisibilityModelFromColumns: !apiRef.current.unstable_caches.columns.isUsingColumnVisibilityModel,
      columnsToUpsert: props.columns,
      keepOnlyColumnsToUpsert: true
    });
    previousColumnsProp.current = props.columns;
    previousColumnTypesProp.current = columnTypes;
    setGridColumnsState(columnsState);
  }, [logger, apiRef, setGridColumnsState, props.columns, columnTypes]);
  React90.useEffect(() => {
    if (props.columnVisibilityModel !== void 0) {
      apiRef.current.setColumnVisibilityModel(props.columnVisibilityModel);
    }
  }, [apiRef, logger, props.columnVisibilityModel]);
}

// node_modules/@mui/x-data-grid/hooks/features/density/useGridDensity.js
init_extends();
var React92 = __toESM(require_react());

// node_modules/@mui/x-data-grid/hooks/features/columnGrouping/useGridColumnGrouping.js
init_extends();
init_objectWithoutPropertiesLoose();
var React91 = __toESM(require_react());

// node_modules/@mui/x-data-grid/hooks/features/columnGrouping/gridColumnGroupsSelector.js
var gridColumnGroupingSelector = (state) => state.columnGrouping;
var gridColumnGroupsLookupSelector = createSelector2(gridColumnGroupingSelector, (columnGrouping) => columnGrouping.lookup);

// node_modules/@mui/x-data-grid/hooks/features/columnGrouping/useGridColumnGrouping.js
var _excluded42 = ["groupId", "children"];
function hasGroupPath(lookupElement) {
  return lookupElement.groupPath !== void 0;
}
var recurrentUnwrapGroupingColumnModel = (columnGroupNode, parents, unwrappedGroupingModelToComplet) => {
  if (isLeaf(columnGroupNode)) {
    if (unwrappedGroupingModelToComplet[columnGroupNode.field] !== void 0) {
      throw new Error([`MUI: columnGroupingModel contains duplicated field`, `column field ${columnGroupNode.field} occurrs two times in the grouping model:`, `- ${unwrappedGroupingModelToComplet[columnGroupNode.field].join(" > ")}`, `- ${parents.join(" > ")}`].join("\n"));
    }
    unwrappedGroupingModelToComplet[columnGroupNode.field] = parents;
    return;
  }
  const {
    groupId,
    children
  } = columnGroupNode;
  children.forEach((child) => {
    recurrentUnwrapGroupingColumnModel(child, [...parents, groupId], unwrappedGroupingModelToComplet);
  });
};
var unwrapGroupingColumnModel = (columnGroupingModel) => {
  if (!columnGroupingModel) {
    return {};
  }
  const unwrappedSubTree = {};
  columnGroupingModel.forEach((columnGroupNode) => {
    recurrentUnwrapGroupingColumnModel(columnGroupNode, [], unwrappedSubTree);
  });
  return unwrappedSubTree;
};
var createGroupLookup = (columnGroupingModel) => {
  let groupLookup = {};
  columnGroupingModel.forEach((node) => {
    if (isLeaf(node)) {
      return;
    }
    const {
      groupId,
      children
    } = node, other = _objectWithoutPropertiesLoose(node, _excluded42);
    if (!groupId) {
      throw new Error("MUI: An element of the columnGroupingModel does not have either `field` or `groupId`.");
    }
    if (!children) {
      console.warn(`MUI: group groupId=${groupId} has no children.`);
    }
    const groupParam = _extends({}, other, {
      groupId
    });
    const subTreeLookup = createGroupLookup(children);
    if (subTreeLookup[groupId] !== void 0 || groupLookup[groupId] !== void 0) {
      throw new Error(`MUI: The groupId ${groupId} is used multiple times in the columnGroupingModel.`);
    }
    groupLookup = _extends({}, groupLookup, subTreeLookup, {
      [groupId]: groupParam
    });
  });
  return _extends({}, groupLookup);
};
var columnGroupsStateInitializer = (state, props) => {
  var _props$columnGrouping;
  const groupLookup = createGroupLookup((_props$columnGrouping = props.columnGroupingModel) != null ? _props$columnGrouping : []);
  return _extends({}, state, {
    columnGrouping: {
      lookup: groupLookup,
      groupCollapsedModel: {}
    }
  });
};
var useGridColumnGrouping = (apiRef, props) => {
  var _props$experimentalFe2;
  const getColumnGroupPath = React91.useCallback((field) => {
    var _columnLookup$field$g, _columnLookup$field;
    const columnLookup = gridColumnLookupSelector(apiRef);
    return (_columnLookup$field$g = (_columnLookup$field = columnLookup[field]) == null ? void 0 : _columnLookup$field.groupPath) != null ? _columnLookup$field$g : [];
  }, [apiRef]);
  const getAllGroupDetails = React91.useCallback(() => {
    const columnGroupLookup = gridColumnGroupsLookupSelector(apiRef);
    return columnGroupLookup;
  }, [apiRef]);
  const columnGroupingApi = {
    unstable_getColumnGroupPath: getColumnGroupPath,
    unstable_getAllGroupDetails: getAllGroupDetails
  };
  useGridApiMethod(apiRef, columnGroupingApi, "GridColumnGroupingApi");
  const isFirstRender = React91.useRef(true);
  React91.useEffect(() => {
    var _props$experimentalFe, _props$columnGrouping2;
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (!((_props$experimentalFe = props.experimentalFeatures) != null && _props$experimentalFe.columnGrouping)) {
      return;
    }
    const groupLookup = createGroupLookup((_props$columnGrouping2 = props.columnGroupingModel) != null ? _props$columnGrouping2 : []);
    apiRef.current.setState((state) => _extends({}, state, {
      columnGrouping: _extends({}, state.columnGrouping, {
        lookup: groupLookup
      })
    }));
  }, [apiRef, props.columnGroupingModel, (_props$experimentalFe2 = props.experimentalFeatures) == null ? void 0 : _props$experimentalFe2.columnGrouping]);
};

// node_modules/@mui/x-data-grid/hooks/features/density/useGridDensity.js
var COMPACT_DENSITY_FACTOR = 0.7;
var COMFORTABLE_DENSITY_FACTOR = 1.3;
var getUpdatedDensityState = (newDensity, newHeaderHeight, newRowHeight, newMaxDepth) => {
  switch (newDensity) {
    case GridDensityTypes.Compact:
      return {
        value: newDensity,
        headerHeight: Math.floor(newHeaderHeight * COMPACT_DENSITY_FACTOR),
        rowHeight: Math.floor(newRowHeight * COMPACT_DENSITY_FACTOR),
        headerGroupingMaxDepth: newMaxDepth,
        factor: COMPACT_DENSITY_FACTOR
      };
    case GridDensityTypes.Comfortable:
      return {
        value: newDensity,
        headerHeight: Math.floor(newHeaderHeight * COMFORTABLE_DENSITY_FACTOR),
        rowHeight: Math.floor(newRowHeight * COMFORTABLE_DENSITY_FACTOR),
        headerGroupingMaxDepth: newMaxDepth,
        factor: COMFORTABLE_DENSITY_FACTOR
      };
    default:
      return {
        value: newDensity,
        headerHeight: newHeaderHeight,
        rowHeight: newRowHeight,
        headerGroupingMaxDepth: newMaxDepth,
        factor: 1
      };
  }
};
var densityStateInitializer = (state, props) => {
  let maxDepth;
  if (props.columnGroupingModel == null || Object.keys(props.columnGroupingModel).length === 0) {
    maxDepth = 0;
  } else {
    const unwrappedGroupingColumnModel = unwrapGroupingColumnModel(props.columnGroupingModel);
    const columnsState = state.columns;
    const visibleColumns = columnsState.all.filter((field) => columnsState.columnVisibilityModel[field] !== false);
    if (visibleColumns.length === 0) {
      maxDepth = 0;
    } else {
      maxDepth = Math.max(...visibleColumns.map((field) => {
        var _unwrappedGroupingCol, _unwrappedGroupingCol2;
        return (_unwrappedGroupingCol = (_unwrappedGroupingCol2 = unwrappedGroupingColumnModel[field]) == null ? void 0 : _unwrappedGroupingCol2.length) != null ? _unwrappedGroupingCol : 0;
      }));
    }
  }
  return _extends({}, state, {
    density: getUpdatedDensityState(props.density, props.headerHeight, props.rowHeight, maxDepth)
  });
};
var useGridDensity = (apiRef, props) => {
  const visibleColumns = useGridSelector(apiRef, gridVisibleColumnDefinitionsSelector);
  const maxDepth = visibleColumns.length > 0 ? Math.max(...visibleColumns.map((column) => {
    var _column$groupPath$len, _column$groupPath;
    return (_column$groupPath$len = (_column$groupPath = column.groupPath) == null ? void 0 : _column$groupPath.length) != null ? _column$groupPath$len : 0;
  })) : 0;
  const logger = useGridLogger(apiRef, "useDensity");
  const setDensity = React92.useCallback((newDensity, newHeaderHeight = props.headerHeight, newRowHeight = props.rowHeight, newMaxDepth = maxDepth) => {
    logger.debug(`Set grid density to ${newDensity}`);
    apiRef.current.setState((state) => {
      const currentDensityState = gridDensitySelector(state);
      const newDensityState = getUpdatedDensityState(newDensity, newHeaderHeight, newRowHeight, newMaxDepth);
      if (isDeepEqual(currentDensityState, newDensityState)) {
        return state;
      }
      return _extends({}, state, {
        density: newDensityState
      });
    });
    apiRef.current.forceUpdate();
  }, [logger, apiRef, props.headerHeight, props.rowHeight, maxDepth]);
  React92.useEffect(() => {
    apiRef.current.setDensity(props.density, props.headerHeight, props.rowHeight, maxDepth);
  }, [apiRef, props.density, props.rowHeight, props.headerHeight, maxDepth]);
  const densityApi = {
    setDensity
  };
  useGridApiMethod(apiRef, densityApi, "GridDensityApi");
};

// node_modules/@mui/x-data-grid/hooks/features/export/useGridCsvExport.js
var React93 = __toESM(require_react());

// node_modules/@mui/x-data-grid/utils/exportAs.js
function exportAs(blob, extension = "csv", filename = document.title || "untitled") {
  const fullName = `${filename}.${extension}`;
  if ("download" in HTMLAnchorElement.prototype) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fullName;
    a.click();
    setTimeout(() => {
      URL.revokeObjectURL(url);
    });
    return;
  }
  throw new Error("MUI: exportAs not supported");
}

// node_modules/@mui/x-data-grid/hooks/features/export/serializers/csvSerializer.js
var serializeCellValue = (value, delimiterCharacter) => {
  if (typeof value === "string") {
    const formattedValue = value.replace(/"/g, '""');
    if ([delimiterCharacter, "\n", "\r"].some((delimiter) => formattedValue.includes(delimiter))) {
      return `"${formattedValue}"`;
    }
    return formattedValue;
  }
  return value;
};
var objectFormattedValueWarning = buildWarning(["MUI: When the value of a field is an object or a `renderCell` is provided, the CSV export might not display the value correctly.", "You can provide a `valueFormatter` with a string representation to be used."]);
var serializeRow = (id, columns2, getCellParams, delimiterCharacter) => columns2.map((column) => {
  const cellParams = getCellParams(id, column.field);
  if (true) {
    if (String(cellParams.formattedValue) === "[object Object]") {
      objectFormattedValueWarning();
    }
  }
  return serializeCellValue(cellParams.formattedValue, delimiterCharacter);
});
function buildCSV(options) {
  const {
    columns: columns2,
    rowIds,
    getCellParams,
    delimiterCharacter,
    includeHeaders
  } = options;
  const CSVBody = rowIds.reduce((acc, id) => `${acc}${serializeRow(id, columns2, getCellParams, delimiterCharacter).join(delimiterCharacter)}\r
`, "").trim();
  if (!includeHeaders) {
    return CSVBody;
  }
  const CSVHead = `${columns2.filter((column) => column.field !== GRID_CHECKBOX_SELECTION_COL_DEF.field).map((column) => serializeCellValue(column.headerName || column.field, delimiterCharacter)).join(delimiterCharacter)}\r
`;
  return `${CSVHead}${CSVBody}`.trim();
}

// node_modules/@mui/x-data-grid/hooks/features/export/utils.js
var getColumnsToExport = ({
  apiRef,
  options
}) => {
  const columns2 = gridColumnDefinitionsSelector(apiRef);
  if (options.fields) {
    return options.fields.map((field) => columns2.find((column) => column.field === field)).filter((column) => !!column);
  }
  const validColumns = options.allColumns ? columns2 : gridVisibleColumnDefinitionsSelector(apiRef);
  return validColumns.filter((column) => !column.disableExport);
};
var defaultGetRowsToExport = ({
  apiRef
}) => {
  var _pinnedRows$top, _pinnedRows$bottom;
  const filteredSortedRowIds = gridFilteredSortedRowIdsSelector(apiRef);
  const rowTree = gridRowTreeSelector(apiRef);
  const selectedRows = apiRef.current.getSelectedRows();
  const bodyRows = filteredSortedRowIds.filter((id) => {
    var _rowTree$id$position;
    return ((_rowTree$id$position = rowTree[id].position) != null ? _rowTree$id$position : "body") === "body";
  });
  const pinnedRows = gridPinnedRowsSelector(apiRef);
  const topPinnedRowsIds = (pinnedRows == null ? void 0 : (_pinnedRows$top = pinnedRows.top) == null ? void 0 : _pinnedRows$top.map((row) => row.id)) || [];
  const bottomPinnedRowsIds = (pinnedRows == null ? void 0 : (_pinnedRows$bottom = pinnedRows.bottom) == null ? void 0 : _pinnedRows$bottom.map((row) => row.id)) || [];
  bodyRows.unshift(...topPinnedRowsIds);
  bodyRows.push(...bottomPinnedRowsIds);
  if (selectedRows.size > 0) {
    return bodyRows.filter((id) => selectedRows.has(id));
  }
  return bodyRows;
};

// node_modules/@mui/x-data-grid/hooks/features/export/useGridCsvExport.js
var import_jsx_runtime82 = __toESM(require_jsx_runtime());
var useGridCsvExport = (apiRef) => {
  const logger = useGridLogger(apiRef, "useGridCsvExport");
  const getDataAsCsv = React93.useCallback((options = {}) => {
    var _options$getRowsToExp, _options$includeHeade;
    logger.debug(`Get data as CSV`);
    const exportedColumns = getColumnsToExport({
      apiRef,
      options
    });
    const getRowsToExport = (_options$getRowsToExp = options.getRowsToExport) != null ? _options$getRowsToExp : defaultGetRowsToExport;
    const exportedRowIds = getRowsToExport({
      apiRef
    });
    return buildCSV({
      columns: exportedColumns,
      rowIds: exportedRowIds,
      getCellParams: apiRef.current.getCellParams,
      delimiterCharacter: options.delimiter || ",",
      includeHeaders: (_options$includeHeade = options.includeHeaders) != null ? _options$includeHeade : true
    });
  }, [logger, apiRef]);
  const exportDataAsCsv = React93.useCallback((options) => {
    logger.debug(`Export data as CSV`);
    const csv = getDataAsCsv(options);
    const blob = new Blob([options != null && options.utf8WithBom ? new Uint8Array([239, 187, 191]) : "", csv], {
      type: "text/csv"
    });
    exportAs(blob, "csv", options == null ? void 0 : options.fileName);
  }, [logger, getDataAsCsv]);
  const csvExportApi = {
    getDataAsCsv,
    exportDataAsCsv
  };
  useGridApiMethod(apiRef, csvExportApi, "GridCsvExportApi");
  const addExportMenuButtons = React93.useCallback((initialValue, options) => {
    var _options$csvOptions;
    if ((_options$csvOptions = options.csvOptions) != null && _options$csvOptions.disableToolbarButton) {
      return initialValue;
    }
    return [...initialValue, {
      component: /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(GridCsvExportMenuItem, {
        options: options.csvOptions
      }),
      componentName: "csvExport"
    }];
  }, []);
  useGridRegisterPipeProcessor(apiRef, "exportMenu", addExportMenuButtons);
};

// node_modules/@mui/x-data-grid/hooks/features/export/useGridPrintExport.js
init_extends();
var React94 = __toESM(require_react());
init_utils();

// node_modules/@mui/x-data-grid/hooks/features/rows/gridRowsMetaSelector.js
var gridRowsMetaSelector = (state) => state.rowsMeta;

// node_modules/@mui/x-data-grid/hooks/features/export/useGridPrintExport.js
var import_jsx_runtime83 = __toESM(require_jsx_runtime());
var useGridPrintExport = (apiRef, props) => {
  const logger = useGridLogger(apiRef, "useGridPrintExport");
  const doc = React94.useRef(null);
  const previousGridState = React94.useRef(null);
  const previousColumnVisibility = React94.useRef({});
  React94.useEffect(() => {
    doc.current = ownerDocument_default(apiRef.current.rootElementRef.current);
  }, [apiRef]);
  const updateGridColumnsForPrint = React94.useCallback((fields, allColumns) => new Promise((resolve) => {
    if (!fields && !allColumns) {
      resolve();
      return;
    }
    const exportedColumnFields = getColumnsToExport({
      apiRef,
      options: {
        fields,
        allColumns
      }
    }).map((column) => column.field);
    const columns2 = gridColumnDefinitionsSelector(apiRef);
    const newColumnVisibilityModel = {};
    columns2.forEach((column) => {
      newColumnVisibilityModel[column.field] = exportedColumnFields.includes(column.field);
    });
    apiRef.current.setColumnVisibilityModel(newColumnVisibilityModel);
    resolve();
  }), [apiRef]);
  const buildPrintWindow = React94.useCallback((title) => {
    const iframeEl = document.createElement("iframe");
    iframeEl.id = "grid-print-window";
    iframeEl.src = window.location.href;
    iframeEl.style.position = "absolute";
    iframeEl.style.width = "0px";
    iframeEl.style.height = "0px";
    iframeEl.title = title || document.title;
    return iframeEl;
  }, []);
  const handlePrintWindowLoad = React94.useCallback((printWindow, options) => {
    var _printWindow$contentW, _querySelector, _querySelector2;
    const normalizeOptions = _extends({
      copyStyles: true,
      hideToolbar: false,
      hideFooter: false
    }, options);
    printWindow.onload = null;
    const printDoc = printWindow.contentDocument || ((_printWindow$contentW = printWindow.contentWindow) == null ? void 0 : _printWindow$contentW.document);
    if (!printDoc) {
      return;
    }
    const totalHeaderHeight = gridDensityTotalHeaderHeightSelector(apiRef);
    const rowsMeta = gridRowsMetaSelector(apiRef.current.state);
    const gridRootElement = apiRef.current.rootElementRef.current;
    const gridClone = gridRootElement.cloneNode(true);
    const gridCloneViewport = gridClone.querySelector(`.${gridClasses.virtualScroller}`);
    gridCloneViewport.style.height = "auto";
    gridCloneViewport.style.width = "auto";
    gridCloneViewport.parentElement.style.width = "auto";
    gridCloneViewport.parentElement.style.height = "auto";
    const gridMain = gridClone.querySelector(`.${gridClasses.main}`);
    gridMain.style.overflow = "visible";
    const columnHeaders = gridClone.querySelector(`.${gridClasses.columnHeaders}`);
    const columnHeadersInner = columnHeaders.querySelector(`.${gridClasses.columnHeadersInner}`);
    columnHeadersInner.style.width = "100%";
    let gridToolbarElementHeight = ((_querySelector = gridRootElement.querySelector(`.${gridClasses.toolbarContainer}`)) == null ? void 0 : _querySelector.clientHeight) || 0;
    let gridFooterElementHeight = ((_querySelector2 = gridRootElement.querySelector(`.${gridClasses.footerContainer}`)) == null ? void 0 : _querySelector2.clientHeight) || 0;
    if (normalizeOptions.hideToolbar) {
      var _gridClone$querySelec;
      (_gridClone$querySelec = gridClone.querySelector(`.${gridClasses.toolbarContainer}`)) == null ? void 0 : _gridClone$querySelec.remove();
      gridToolbarElementHeight = 0;
    }
    if (normalizeOptions.hideFooter) {
      var _gridClone$querySelec2;
      (_gridClone$querySelec2 = gridClone.querySelector(`.${gridClasses.footerContainer}`)) == null ? void 0 : _gridClone$querySelec2.remove();
      gridFooterElementHeight = 0;
    }
    gridClone.style.height = `${rowsMeta.currentPageTotalHeight + totalHeaderHeight + gridToolbarElementHeight + gridFooterElementHeight}px`;
    printDoc.body.innerHTML = "";
    printDoc.body.appendChild(gridClone);
    const defaultPageStyle = typeof normalizeOptions.pageStyle === "function" ? normalizeOptions.pageStyle() : normalizeOptions.pageStyle;
    if (typeof defaultPageStyle === "string") {
      const styleElement = printDoc.createElement("style");
      styleElement.appendChild(printDoc.createTextNode(defaultPageStyle));
      printDoc.head.appendChild(styleElement);
    }
    if (normalizeOptions.bodyClassName) {
      printDoc.body.classList.add(...normalizeOptions.bodyClassName.split(" "));
    }
    if (normalizeOptions.copyStyles) {
      const headStyleElements = doc.current.querySelectorAll("style, link[rel='stylesheet']");
      for (let i = 0; i < headStyleElements.length; i += 1) {
        const node = headStyleElements[i];
        if (node.tagName === "STYLE") {
          const newHeadStyleElements = printDoc.createElement(node.tagName);
          const sheet = node.sheet;
          if (sheet) {
            let styleCSS = "";
            for (let j = 0; j < sheet.cssRules.length; j += 1) {
              if (typeof sheet.cssRules[j].cssText === "string") {
                styleCSS += `${sheet.cssRules[j].cssText}\r
`;
              }
            }
            newHeadStyleElements.appendChild(printDoc.createTextNode(styleCSS));
            printDoc.head.appendChild(newHeadStyleElements);
          }
        } else if (node.getAttribute("href")) {
          const newHeadStyleElements = printDoc.createElement(node.tagName);
          for (let j = 0; j < node.attributes.length; j += 1) {
            const attr = node.attributes[j];
            if (attr) {
              newHeadStyleElements.setAttribute(attr.nodeName, attr.nodeValue || "");
            }
          }
          printDoc.head.appendChild(newHeadStyleElements);
        }
      }
    }
    if (true) {
      printWindow.contentWindow.print();
    }
  }, [apiRef, doc]);
  const handlePrintWindowAfterPrint = React94.useCallback((printWindow) => {
    var _previousGridState$cu, _previousGridState$cu2;
    doc.current.body.removeChild(printWindow);
    apiRef.current.restoreState(previousGridState.current || {});
    if (!((_previousGridState$cu = previousGridState.current) != null && (_previousGridState$cu2 = _previousGridState$cu.columns) != null && _previousGridState$cu2.columnVisibilityModel)) {
      apiRef.current.setColumnVisibilityModel(previousColumnVisibility.current);
    }
    apiRef.current.unstable_enableVirtualization();
    previousGridState.current = null;
    previousColumnVisibility.current = {};
  }, [apiRef]);
  const exportDataAsPrint = React94.useCallback(async (options) => {
    logger.debug(`Export data as Print`);
    if (!apiRef.current.rootElementRef.current) {
      throw new Error("MUI: No grid root element available.");
    }
    previousGridState.current = apiRef.current.exportState();
    previousColumnVisibility.current = gridColumnVisibilityModelSelector(apiRef);
    if (props.pagination) {
      const visibleRowCount = gridVisibleRowCountSelector(apiRef);
      apiRef.current.setPageSize(visibleRowCount);
    }
    await updateGridColumnsForPrint(options == null ? void 0 : options.fields, options == null ? void 0 : options.allColumns);
    apiRef.current.unstable_disableVirtualization();
    const printWindow = buildPrintWindow(options == null ? void 0 : options.fileName);
    doc.current.body.appendChild(printWindow);
    if (false) {
      handlePrintWindowLoad(printWindow, options);
      handlePrintWindowAfterPrint(printWindow);
    } else {
      printWindow.onload = () => handlePrintWindowLoad(printWindow, options);
      printWindow.contentWindow.onafterprint = () => handlePrintWindowAfterPrint(printWindow);
    }
  }, [props, logger, apiRef, buildPrintWindow, handlePrintWindowLoad, handlePrintWindowAfterPrint, updateGridColumnsForPrint]);
  const printExportApi = {
    exportDataAsPrint
  };
  useGridApiMethod(apiRef, printExportApi, "GridPrintExportApi");
  const addExportMenuButtons = React94.useCallback((initialValue, options) => {
    var _options$printOptions;
    if ((_options$printOptions = options.printOptions) != null && _options$printOptions.disableToolbarButton) {
      return initialValue;
    }
    return [...initialValue, {
      component: /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(GridPrintExportMenuItem, {
        options: options.printOptions
      }),
      componentName: "printExport"
    }];
  }, []);
  useGridRegisterPipeProcessor(apiRef, "exportMenu", addExportMenuButtons);
};

// node_modules/@mui/x-data-grid/hooks/features/filter/useGridFilter.js
init_extends();
var React95 = __toESM(require_react());

// node_modules/@mui/x-data-grid/hooks/features/rows/gridRowsUtils.js
init_extends();
init_objectWithoutPropertiesLoose();
var _excluded43 = ["rowsBeforePartialUpdates"];
function checkGridRowIdIsValid(id, row, detailErrorMessage = "A row was provided without id in the rows prop:") {
  if (id == null) {
    throw new Error(["MUI: The data grid component requires all rows to have a unique `id` property.", "Alternatively, you can use the `getRowId` prop to specify a custom id for each row.", detailErrorMessage, JSON.stringify(row)].join("\n"));
  }
}
var getRowIdFromRowModel = (rowModel, getRowId, detailErrorMessage) => {
  const id = getRowId ? getRowId(rowModel) : rowModel.id;
  checkGridRowIdIsValid(id, rowModel, detailErrorMessage);
  return id;
};
var createRowsInternalCache = ({
  rows,
  getRowId,
  loading
}) => {
  const cache = {
    rowsBeforePartialUpdates: rows,
    loadingPropBeforePartialUpdates: loading,
    idRowsLookup: {},
    idToIdLookup: {},
    ids: []
  };
  for (let i = 0; i < rows.length; i += 1) {
    const row = rows[i];
    const id = getRowIdFromRowModel(row, getRowId);
    cache.idRowsLookup[id] = row;
    cache.idToIdLookup[id] = id;
    cache.ids.push(id);
  }
  return cache;
};
var getRowsStateFromCache = ({
  apiRef,
  previousTree,
  rowCountProp,
  loadingProp
}) => {
  const _apiRef$current$unsta = apiRef.current.unstable_caches.rows, cacheForGrouping = _objectWithoutPropertiesLoose(_apiRef$current$unsta, _excluded43);
  const rowCount = rowCountProp != null ? rowCountProp : 0;
  const groupingResponse = apiRef.current.unstable_applyStrategyProcessor("rowTreeCreation", _extends({}, cacheForGrouping, {
    previousTree
  }));
  const processedGroupingResponse = apiRef.current.unstable_applyPipeProcessors("hydrateRows", groupingResponse);
  const dataTopLevelRowCount = processedGroupingResponse.treeDepth === 1 ? processedGroupingResponse.ids.length : Object.values(processedGroupingResponse.tree).filter((node) => node.parent == null && !node.isPinned).length;
  return _extends({}, processedGroupingResponse, {
    groupingResponseBeforeRowHydration: groupingResponse,
    loading: loadingProp,
    totalRowCount: Math.max(rowCount, processedGroupingResponse.ids.length),
    totalTopLevelRowCount: Math.max(rowCount, dataTopLevelRowCount)
  });
};
var getTreeNodeDescendants = (tree, parentId, skipAutoGeneratedRows) => {
  var _tree$parentId;
  const children = (_tree$parentId = tree[parentId]) == null ? void 0 : _tree$parentId.children;
  if (children == null) {
    return [];
  }
  const validDescendants = [];
  for (let i = 0; i < children.length; i += 1) {
    const child = children[i];
    const childNode = tree[child];
    if (!skipAutoGeneratedRows || !childNode.isAutoGenerated) {
      validDescendants.push(child);
    }
    validDescendants.push(...getTreeNodeDescendants(tree, childNode.id, skipAutoGeneratedRows));
  }
  return validDescendants;
};
function calculatePinnedRowsHeight(apiRef) {
  var _pinnedRows$top, _pinnedRows$bottom;
  const pinnedRows = gridPinnedRowsSelector(apiRef);
  const topPinnedRowsHeight = (pinnedRows == null ? void 0 : (_pinnedRows$top = pinnedRows.top) == null ? void 0 : _pinnedRows$top.reduce((acc, value) => {
    acc += apiRef.current.unstable_getRowHeight(value.id);
    return acc;
  }, 0)) || 0;
  const bottomPinnedRowsHeight = (pinnedRows == null ? void 0 : (_pinnedRows$bottom = pinnedRows.bottom) == null ? void 0 : _pinnedRows$bottom.reduce((acc, value) => {
    acc += apiRef.current.unstable_getRowHeight(value.id);
    return acc;
  }, 0)) || 0;
  return {
    top: topPinnedRowsHeight,
    bottom: bottomPinnedRowsHeight
  };
}

// node_modules/@mui/x-data-grid/hooks/features/filter/gridFilterUtils.js
init_extends();
var cleanFilterItem = (item, apiRef) => {
  const cleanItem = _extends({}, item);
  if (cleanItem.id == null) {
    cleanItem.id = Math.round(Math.random() * 1e5);
  }
  if (cleanItem.operatorValue == null) {
    const column = gridColumnLookupSelector(apiRef)[cleanItem.columnField];
    cleanItem.operatorValue = column && column.filterOperators[0].value;
  }
  return cleanItem;
};
var filterModelDisableMultiColumnsFilteringWarning = buildWarning(["MUI: The `filterModel` can only contain a single item when the `disableMultipleColumnsFiltering` prop is set to `true`.", "If you are using the community version of the `DataGrid`, this prop is always `true`."], "error");
var filterModelMissingItemIdWarning = buildWarning("MUI: The 'id' field is required on `filterModel.items` when you use multiple filters.", "error");
var filterModelMissingItemOperatorWarning = buildWarning(["MUI: One of your filtering item have no `operatorValue` provided.", "This property will become required on `@mui/x-data-grid@6.X`."]);
var sanitizeFilterModel = (model, disableMultipleColumnsFiltering, apiRef) => {
  const hasSeveralItems = model.items.length > 1;
  let items;
  if (hasSeveralItems && disableMultipleColumnsFiltering) {
    filterModelDisableMultiColumnsFilteringWarning();
    items = [model.items[0]];
  } else {
    items = model.items;
  }
  const hasItemsWithoutIds = hasSeveralItems && items.some((item) => item.id == null);
  const hasItemWithoutOperator = items.some((item) => item.operatorValue == null);
  if (hasItemsWithoutIds) {
    filterModelMissingItemIdWarning();
  }
  if (hasItemWithoutOperator) {
    filterModelMissingItemOperatorWarning();
  }
  if (hasItemWithoutOperator || hasItemsWithoutIds) {
    return _extends({}, model, {
      items: items.map((item) => cleanFilterItem(item, apiRef))
    });
  }
  if (model.items !== items) {
    return _extends({}, model, {
      items
    });
  }
  return model;
};
var mergeStateWithFilterModel = (filterModel, disableMultipleColumnsFiltering, apiRef) => (filteringState) => _extends({}, filteringState, {
  filterModel: sanitizeFilterModel(filterModel, disableMultipleColumnsFiltering, apiRef)
});
var getFilterCallbackFromItem = (filterItem, apiRef) => {
  if (!filterItem.columnField || !filterItem.operatorValue) {
    return null;
  }
  const column = apiRef.current.getColumn(filterItem.columnField);
  if (!column) {
    return null;
  }
  let parsedValue;
  if (column.valueParser) {
    var _filterItem$value;
    const parser = column.valueParser;
    parsedValue = Array.isArray(filterItem.value) ? (_filterItem$value = filterItem.value) == null ? void 0 : _filterItem$value.map((x) => parser(x)) : parser(filterItem.value);
  } else {
    parsedValue = filterItem.value;
  }
  const newFilterItem = _extends({}, filterItem, {
    value: parsedValue
  });
  const filterOperators = column.filterOperators;
  if (!(filterOperators != null && filterOperators.length)) {
    throw new Error(`MUI: No filter operators found for column '${column.field}'.`);
  }
  const filterOperator = filterOperators.find((operator) => operator.value === newFilterItem.operatorValue);
  if (!filterOperator) {
    throw new Error(`MUI: No filter operator found for column '${column.field}' and operator value '${newFilterItem.operatorValue}'.`);
  }
  const applyFilterOnRow = filterOperator.getApplyFilterFn(newFilterItem, column);
  if (typeof applyFilterOnRow !== "function") {
    return null;
  }
  const fn = (rowId) => {
    const cellParams = apiRef.current.getCellParams(rowId, newFilterItem.columnField);
    return applyFilterOnRow(cellParams);
  };
  return {
    fn,
    item: newFilterItem
  };
};
var buildAggregatedFilterItemsApplier = (filterModel, apiRef) => {
  const {
    items
  } = filterModel;
  const appliers = items.map((item) => getFilterCallbackFromItem(item, apiRef)).filter((callback) => !!callback);
  if (appliers.length === 0) {
    return null;
  }
  return (rowId, shouldApplyFilter) => {
    const resultPerItemId = {};
    const filteredAppliers = shouldApplyFilter ? appliers.filter((applier) => shouldApplyFilter(applier.item.columnField)) : appliers;
    filteredAppliers.forEach((applier) => {
      resultPerItemId[applier.item.id] = applier.fn(rowId);
    });
    return resultPerItemId;
  };
};
var buildAggregatedQuickFilterApplier = (filterModel, apiRef) => {
  const {
    quickFilterValues = []
  } = filterModel;
  if (quickFilterValues.length === 0) {
    return null;
  }
  const columnsFields = gridColumnFieldsSelector(apiRef);
  const appliersPerColumnField = {};
  columnsFields.forEach((field) => {
    const column = apiRef.current.getColumn(field);
    const getApplyQuickFilterFn = column == null ? void 0 : column.getApplyQuickFilterFn;
    if (!getApplyQuickFilterFn) {
      return;
    }
    appliersPerColumnField[field] = quickFilterValues.map((value) => getApplyQuickFilterFn(value, column, apiRef));
  });
  const sanitizedQuickFilterValues = quickFilterValues.filter((value, index) => Object.keys(appliersPerColumnField).some((field) => appliersPerColumnField[field][index] != null));
  if (sanitizedQuickFilterValues.length === 0) {
    return null;
  }
  return (rowId, shouldApplyFilter) => {
    const usedCellParams = {};
    const columnsFieldsToFilter = [];
    Object.keys(appliersPerColumnField).forEach((columnField) => {
      if (!shouldApplyFilter || shouldApplyFilter(columnField)) {
        usedCellParams[columnField] = apiRef.current.getCellParams(rowId, columnField);
        columnsFieldsToFilter.push(columnField);
      }
    });
    const quickFilterValueResult = {};
    sanitizedQuickFilterValues.forEach((value, index) => {
      const isPassing = columnsFieldsToFilter.some((field) => {
        var _appliersPerColumnFie, _appliersPerColumnFie2;
        if (appliersPerColumnField[field][index] == null) {
          return false;
        }
        return (_appliersPerColumnFie = (_appliersPerColumnFie2 = appliersPerColumnField[field])[index]) == null ? void 0 : _appliersPerColumnFie.call(_appliersPerColumnFie2, usedCellParams[field]);
      });
      quickFilterValueResult[value] = isPassing;
    });
    return quickFilterValueResult;
  };
};
var buildAggregatedFilterApplier = (filterModel, apiRef) => {
  const isRowMatchingFilterItems = buildAggregatedFilterItemsApplier(filterModel, apiRef);
  const isRowMatchingQuickFilter = buildAggregatedQuickFilterApplier(filterModel, apiRef);
  return (rowId, shouldApplyFilter) => ({
    passingFilterItems: isRowMatchingFilterItems && isRowMatchingFilterItems(rowId, shouldApplyFilter),
    passingQuickFilterValues: isRowMatchingQuickFilter && isRowMatchingQuickFilter(rowId, shouldApplyFilter)
  });
};
var passFilterLogic = (allFilterItemResults, allQuickFilterResults, filterModel, apiRef) => {
  var _filterModel$quickFil, _filterModel$linkOper;
  const cleanedFilterItems = filterModel.items.filter((item) => getFilterCallbackFromItem(item, apiRef) !== null);
  const cleanedAllFilterItemResults = allFilterItemResults.filter((result) => result != null);
  const cleanedAllQuickFilterResults = allQuickFilterResults.filter((result) => result != null);
  const quickFilterLogicOperator = (_filterModel$quickFil = filterModel.quickFilterLogicOperator) != null ? _filterModel$quickFil : getDefaultGridFilterModel().quickFilterLogicOperator;
  const linkOperator = (_filterModel$linkOper = filterModel.linkOperator) != null ? _filterModel$linkOper : getDefaultGridFilterModel().linkOperator;
  if (cleanedAllFilterItemResults.length > 0) {
    const filterItemPredicate = (item) => {
      return cleanedAllFilterItemResults.some((filterItemResult) => filterItemResult[item.id]);
    };
    if (linkOperator === GridLinkOperator.And) {
      const passesAllFilters = cleanedFilterItems.every(filterItemPredicate);
      if (!passesAllFilters) {
        return false;
      }
    } else {
      const passesSomeFilters = cleanedFilterItems.some(filterItemPredicate);
      if (!passesSomeFilters) {
        return false;
      }
    }
  }
  if (cleanedAllQuickFilterResults.length > 0 && filterModel.quickFilterValues != null) {
    const quickFilterValuePredicate = (value) => {
      return cleanedAllQuickFilterResults.some((quickFilterValueResult) => quickFilterValueResult[value]);
    };
    if (quickFilterLogicOperator === GridLinkOperator.And) {
      const passesAllQuickFilterValues = filterModel.quickFilterValues.every(quickFilterValuePredicate);
      if (!passesAllQuickFilterValues) {
        return false;
      }
    } else {
      const passesSomeQuickFilterValues = filterModel.quickFilterValues.some(quickFilterValuePredicate);
      if (!passesSomeQuickFilterValues) {
        return false;
      }
    }
  }
  return true;
};

// node_modules/@mui/x-data-grid/hooks/features/filter/useGridFilter.js
var import_jsx_runtime84 = __toESM(require_jsx_runtime());
var filterStateInitializer = (state, props, apiRef) => {
  var _ref, _props$filterModel, _props$initialState, _props$initialState$f;
  const filterModel = (_ref = (_props$filterModel = props.filterModel) != null ? _props$filterModel : (_props$initialState = props.initialState) == null ? void 0 : (_props$initialState$f = _props$initialState.filter) == null ? void 0 : _props$initialState$f.filterModel) != null ? _ref : getDefaultGridFilterModel();
  return _extends({}, state, {
    filter: {
      filterModel: sanitizeFilterModel(filterModel, props.disableMultipleColumnsFiltering, apiRef),
      visibleRowsLookup: {},
      filteredDescendantCountLookup: {}
    }
  });
};
var useGridFilter = (apiRef, props) => {
  var _props$initialState3, _props$initialState3$, _props$componentsProp2;
  const logger = useGridLogger(apiRef, "useGridFilter");
  apiRef.current.unstable_registerControlState({
    stateId: "filter",
    propModel: props.filterModel,
    propOnChange: props.onFilterModelChange,
    stateSelector: gridFilterModelSelector,
    changeEvent: "filterModelChange"
  });
  const updateFilteredRows = React95.useCallback(() => {
    apiRef.current.setState((state) => {
      const filterModel = gridFilterModelSelector(state, apiRef.current.instanceId);
      const isRowMatchingFilters = props.filterMode === GridFeatureModeConstant.client ? buildAggregatedFilterApplier(filterModel, apiRef) : null;
      const filteringResult = apiRef.current.unstable_applyStrategyProcessor("filtering", {
        isRowMatchingFilters,
        filterModel: filterModel != null ? filterModel : getDefaultGridFilterModel()
      });
      return _extends({}, state, {
        filter: _extends({}, state.filter, filteringResult)
      });
    });
    apiRef.current.publishEvent("filteredRowsSet");
  }, [props.filterMode, apiRef]);
  const applyFilters = React95.useCallback(() => {
    updateFilteredRows();
    apiRef.current.forceUpdate();
  }, [apiRef, updateFilteredRows]);
  const upsertFilterItem = React95.useCallback((item) => {
    const filterModel = gridFilterModelSelector(apiRef);
    const items = [...filterModel.items];
    const itemIndex = items.findIndex((filterItem) => filterItem.id === item.id);
    if (itemIndex === -1) {
      items.push(item);
    } else {
      items[itemIndex] = item;
    }
    apiRef.current.setFilterModel(_extends({}, filterModel, {
      items
    }), "upsertFilterItem");
  }, [apiRef]);
  const upsertFilterItems = React95.useCallback((items) => {
    const filterModel = gridFilterModelSelector(apiRef);
    const existingItems = [...filterModel.items];
    items.forEach((item) => {
      const itemIndex = items.findIndex((filterItem) => filterItem.id === item.id);
      if (itemIndex === -1) {
        existingItems.push(item);
      } else {
        existingItems[itemIndex] = item;
      }
    });
    apiRef.current.setFilterModel(_extends({}, filterModel, {
      items
    }), "upsertFilterItems");
  }, [apiRef]);
  const deleteFilterItem = React95.useCallback((itemToDelete) => {
    const filterModel = gridFilterModelSelector(apiRef);
    const items = filterModel.items.filter((item) => item.id !== itemToDelete.id);
    if (items.length === filterModel.items.length) {
      return;
    }
    apiRef.current.setFilterModel(_extends({}, filterModel, {
      items
    }), "deleteFilterItem");
  }, [apiRef]);
  const showFilterPanel = React95.useCallback((targetColumnField) => {
    logger.debug("Displaying filter panel");
    if (targetColumnField) {
      const filterModel = gridFilterModelSelector(apiRef);
      const filterItemsWithValue = filterModel.items.filter((item) => {
        var _column$filterOperato;
        if (item.value !== void 0) {
          return true;
        }
        const column = apiRef.current.getColumn(item.columnField);
        const filterOperator = (_column$filterOperato = column.filterOperators) == null ? void 0 : _column$filterOperato.find((operator) => operator.value === item.operatorValue);
        const requiresFilterValue = typeof (filterOperator == null ? void 0 : filterOperator.requiresFilterValue) === "undefined" ? true : filterOperator == null ? void 0 : filterOperator.requiresFilterValue;
        if (requiresFilterValue) {
          return false;
        }
        return true;
      });
      let newFilterItems;
      const filterItemOnTarget = filterItemsWithValue.find((item) => item.columnField === targetColumnField);
      if (filterItemOnTarget) {
        newFilterItems = filterItemsWithValue;
      } else if (props.disableMultipleColumnsFiltering) {
        newFilterItems = [cleanFilterItem({
          columnField: targetColumnField
        }, apiRef)];
      } else {
        newFilterItems = [...filterItemsWithValue, cleanFilterItem({
          columnField: targetColumnField
        }, apiRef)];
      }
      apiRef.current.setFilterModel(_extends({}, filterModel, {
        items: newFilterItems
      }));
    }
    apiRef.current.showPreferences(GridPreferencePanelsValue.filters);
  }, [apiRef, logger, props.disableMultipleColumnsFiltering]);
  const hideFilterPanel = React95.useCallback(() => {
    logger.debug("Hiding filter panel");
    apiRef.current.hidePreferences();
  }, [apiRef, logger]);
  const setFilterLinkOperator = React95.useCallback((linkOperator) => {
    const filterModel = gridFilterModelSelector(apiRef);
    if (filterModel.linkOperator === linkOperator) {
      return;
    }
    apiRef.current.setFilterModel(_extends({}, filterModel, {
      linkOperator
    }), "changeLogicOperator");
  }, [apiRef]);
  const setQuickFilterValues = React95.useCallback((values) => {
    const filterModel = gridFilterModelSelector(apiRef);
    if (isDeepEqual(filterModel.quickFilterValues, values)) {
      return;
    }
    apiRef.current.setFilterModel(_extends({}, filterModel, {
      quickFilterValues: [...values]
    }));
  }, [apiRef]);
  const setFilterModel = React95.useCallback((model, reason) => {
    const currentModel = gridFilterModelSelector(apiRef);
    if (currentModel !== model) {
      logger.debug("Setting filter model");
      apiRef.current.unstable_updateControlState("filter", mergeStateWithFilterModel(model, props.disableMultipleColumnsFiltering, apiRef), reason);
      apiRef.current.unstable_applyFilters();
    }
  }, [apiRef, logger, props.disableMultipleColumnsFiltering]);
  const getVisibleRowModels = React95.useCallback(() => {
    const visibleSortedRows = gridVisibleSortedRowEntriesSelector(apiRef);
    return new Map(visibleSortedRows.map((row) => [row.id, row.model]));
  }, [apiRef]);
  const filterApi = {
    setFilterLinkOperator,
    unstable_applyFilters: applyFilters,
    deleteFilterItem,
    upsertFilterItem,
    upsertFilterItems,
    setFilterModel,
    showFilterPanel,
    hideFilterPanel,
    getVisibleRowModels,
    setQuickFilterValues
  };
  useGridApiMethod(apiRef, filterApi, "GridFilterApi");
  const stateExportPreProcessing = React95.useCallback((prevState, context) => {
    var _props$initialState2, _props$initialState2$;
    const filterModelToExport = gridFilterModelSelector(apiRef);
    const shouldExportFilterModel = !context.exportOnlyDirtyModels || props.filterModel != null || ((_props$initialState2 = props.initialState) == null ? void 0 : (_props$initialState2$ = _props$initialState2.filter) == null ? void 0 : _props$initialState2$.filterModel) != null || !isDeepEqual(filterModelToExport, getDefaultGridFilterModel());
    if (!shouldExportFilterModel) {
      return prevState;
    }
    return _extends({}, prevState, {
      filter: {
        filterModel: filterModelToExport
      }
    });
  }, [apiRef, props.filterModel, (_props$initialState3 = props.initialState) == null ? void 0 : (_props$initialState3$ = _props$initialState3.filter) == null ? void 0 : _props$initialState3$.filterModel]);
  const stateRestorePreProcessing = React95.useCallback((params, context) => {
    var _context$stateToResto;
    const filterModel = (_context$stateToResto = context.stateToRestore.filter) == null ? void 0 : _context$stateToResto.filterModel;
    if (filterModel == null) {
      return params;
    }
    apiRef.current.unstable_updateControlState("filter", mergeStateWithFilterModel(filterModel, props.disableMultipleColumnsFiltering, apiRef), "restoreState");
    return _extends({}, params, {
      callbacks: [...params.callbacks, apiRef.current.unstable_applyFilters]
    });
  }, [apiRef, props.disableMultipleColumnsFiltering]);
  const preferencePanelPreProcessing = React95.useCallback((initialValue, value) => {
    if (value === GridPreferencePanelsValue.filters) {
      var _props$componentsProp;
      const FilterPanel = props.components.FilterPanel;
      return /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(FilterPanel, _extends({}, (_props$componentsProp = props.componentsProps) == null ? void 0 : _props$componentsProp.filterPanel));
    }
    return initialValue;
  }, [props.components.FilterPanel, (_props$componentsProp2 = props.componentsProps) == null ? void 0 : _props$componentsProp2.filterPanel]);
  const flatFilteringMethod = React95.useCallback((params) => {
    if (props.filterMode === GridFeatureModeConstant.client && params.isRowMatchingFilters) {
      const rowIds = gridRowIdsSelector(apiRef);
      const filteredRowsLookup = {};
      for (let i = 0; i < rowIds.length; i += 1) {
        const rowId = rowIds[i];
        let isRowPassing;
        if (typeof rowId === "string" && rowId.startsWith("auto-generated-group-footer")) {
          isRowPassing = true;
        } else {
          const {
            passingFilterItems,
            passingQuickFilterValues
          } = params.isRowMatchingFilters(rowId);
          isRowPassing = passFilterLogic([passingFilterItems], [passingQuickFilterValues], params.filterModel, apiRef);
        }
        filteredRowsLookup[rowId] = isRowPassing;
      }
      return {
        filteredRowsLookup,
        visibleRowsLookup: filteredRowsLookup,
        filteredDescendantCountLookup: {}
      };
    }
    return {
      visibleRowsLookup: {},
      filteredRowsLookup: {},
      filteredDescendantCountLookup: {}
    };
  }, [apiRef, props.filterMode]);
  useGridRegisterPipeProcessor(apiRef, "exportState", stateExportPreProcessing);
  useGridRegisterPipeProcessor(apiRef, "restoreState", stateRestorePreProcessing);
  useGridRegisterPipeProcessor(apiRef, "preferencePanel", preferencePanelPreProcessing);
  useGridRegisterStrategyProcessor(apiRef, GRID_DEFAULT_STRATEGY, "filtering", flatFilteringMethod);
  const handleColumnsChange = React95.useCallback(() => {
    logger.debug("onColUpdated - GridColumns changed, applying filters");
    const filterModel = gridFilterModelSelector(apiRef);
    const filterableColumnsLookup = gridFilterableColumnLookupSelector(apiRef);
    const newFilterItems = filterModel.items.filter((item) => item.columnField && filterableColumnsLookup[item.columnField]);
    if (newFilterItems.length < filterModel.items.length) {
      apiRef.current.setFilterModel(_extends({}, filterModel, {
        items: newFilterItems
      }));
    }
  }, [apiRef, logger]);
  const handleStrategyProcessorChange = React95.useCallback((methodName) => {
    if (methodName === "filtering") {
      apiRef.current.unstable_applyFilters();
    }
  }, [apiRef]);
  useGridApiEventHandler(apiRef, "rowsSet", updateFilteredRows);
  useGridApiEventHandler(apiRef, "rowExpansionChange", apiRef.current.unstable_applyFilters);
  useGridApiEventHandler(apiRef, "columnsChange", handleColumnsChange);
  useGridApiEventHandler(apiRef, "activeStrategyProcessorChange", handleStrategyProcessorChange);
  useFirstRender(() => {
    apiRef.current.unstable_applyFilters();
  });
  React95.useEffect(() => {
    if (props.filterModel !== void 0) {
      apiRef.current.setFilterModel(props.filterModel);
    }
  }, [apiRef, logger, props.filterModel]);
};

// node_modules/@mui/x-data-grid/hooks/features/focus/useGridFocus.js
init_extends();
var React96 = __toESM(require_react());
init_utils();
var focusStateInitializer = (state) => _extends({}, state, {
  focus: {
    cell: null,
    columnHeader: null
  },
  tabIndex: {
    cell: null,
    columnHeader: null
  }
});
var useGridFocus = (apiRef, props) => {
  const logger = useGridLogger(apiRef, "useGridFocus");
  const lastClickedCell = React96.useRef(null);
  const setCellFocus = React96.useCallback((id, field) => {
    const focusedCell = gridFocusCellSelector(apiRef);
    if ((focusedCell == null ? void 0 : focusedCell.id) === id && (focusedCell == null ? void 0 : focusedCell.field) === field) {
      return;
    }
    apiRef.current.setState((state) => {
      logger.debug(`Focusing on cell with id=${id} and field=${field}`);
      return _extends({}, state, {
        tabIndex: {
          cell: {
            id,
            field
          },
          columnHeader: null
        },
        focus: {
          cell: {
            id,
            field
          },
          columnHeader: null
        }
      });
    });
    apiRef.current.forceUpdate();
    if (!apiRef.current.getRow(id)) {
      return;
    }
    if (focusedCell) {
      apiRef.current.publishEvent("cellFocusOut", apiRef.current.getCellParams(focusedCell.id, focusedCell.field));
    }
    apiRef.current.publishEvent("cellFocusIn", apiRef.current.getCellParams(id, field));
  }, [apiRef, logger]);
  const setColumnHeaderFocus = React96.useCallback((field, event = {}) => {
    const cell = gridFocusCellSelector(apiRef);
    if (cell) {
      apiRef.current.publishEvent("cellFocusOut", apiRef.current.getCellParams(cell.id, cell.field), event);
    }
    apiRef.current.setState((state) => {
      logger.debug(`Focusing on column header with colIndex=${field}`);
      return _extends({}, state, {
        tabIndex: {
          columnHeader: {
            field
          },
          cell: null
        },
        focus: {
          columnHeader: {
            field
          },
          cell: null
        }
      });
    });
    apiRef.current.forceUpdate();
  }, [apiRef, logger]);
  const moveFocusToRelativeCell = React96.useCallback((id, field, direction) => {
    let columnIndexToFocus = apiRef.current.getColumnIndex(field);
    let rowIndexToFocus = apiRef.current.getRowIndexRelativeToVisibleRows(id);
    const visibleColumns = gridVisibleColumnDefinitionsSelector(apiRef);
    if (direction === "right") {
      columnIndexToFocus += 1;
    } else if (direction === "left") {
      columnIndexToFocus -= 1;
    } else {
      rowIndexToFocus += 1;
    }
    const currentPage = getVisibleRows(apiRef, {
      pagination: props.pagination,
      paginationMode: props.paginationMode
    });
    if (columnIndexToFocus >= visibleColumns.length) {
      rowIndexToFocus += 1;
      if (rowIndexToFocus < currentPage.rows.length) {
        columnIndexToFocus = 0;
      }
    } else if (columnIndexToFocus < 0) {
      rowIndexToFocus -= 1;
      if (rowIndexToFocus >= 0) {
        columnIndexToFocus = visibleColumns.length - 1;
      }
    }
    rowIndexToFocus = clamp(rowIndexToFocus, 0, currentPage.rows.length - 1);
    const rowToFocus = currentPage.rows[rowIndexToFocus];
    const colSpanInfo = apiRef.current.unstable_getCellColSpanInfo(rowToFocus.id, columnIndexToFocus);
    if (colSpanInfo && colSpanInfo.spannedByColSpan) {
      if (direction === "left" || direction === "below") {
        columnIndexToFocus = colSpanInfo.leftVisibleCellIndex;
      } else if (direction === "right") {
        columnIndexToFocus = colSpanInfo.rightVisibleCellIndex;
      }
    }
    columnIndexToFocus = clamp(columnIndexToFocus, 0, visibleColumns.length - 1);
    const columnToFocus = visibleColumns[columnIndexToFocus];
    apiRef.current.setCellFocus(rowToFocus.id, columnToFocus.field);
  }, [apiRef, props.pagination, props.paginationMode]);
  const handleCellDoubleClick = React96.useCallback(({
    id,
    field
  }) => {
    apiRef.current.setCellFocus(id, field);
  }, [apiRef]);
  const handleCellKeyDown = React96.useCallback((params, event) => {
    if (event.key === "Enter" || event.key === "Tab" || isNavigationKey(event.key)) {
      return;
    }
    apiRef.current.setCellFocus(params.id, params.field);
  }, [apiRef]);
  const handleColumnHeaderFocus = React96.useCallback(({
    field
  }, event) => {
    if (event.target !== event.currentTarget) {
      return;
    }
    apiRef.current.setColumnHeaderFocus(field, event);
  }, [apiRef]);
  const handleBlur = React96.useCallback(() => {
    logger.debug(`Clearing focus`);
    apiRef.current.setState((state) => _extends({}, state, {
      focus: {
        cell: null,
        columnHeader: null
      }
    }));
  }, [logger, apiRef]);
  const handleCellMouseDown = React96.useCallback((params) => {
    lastClickedCell.current = params;
  }, []);
  const handleDocumentClick = React96.useCallback((event) => {
    const cellParams = lastClickedCell.current;
    lastClickedCell.current = null;
    const focusedCell = gridFocusCellSelector(apiRef);
    if (!focusedCell) {
      if (cellParams) {
        apiRef.current.setCellFocus(cellParams.id, cellParams.field);
      }
      return;
    }
    if ((cellParams == null ? void 0 : cellParams.id) === focusedCell.id && (cellParams == null ? void 0 : cellParams.field) === focusedCell.field) {
      return;
    }
    const cellElement = apiRef.current.getCellElement(focusedCell.id, focusedCell.field);
    if (cellElement != null && cellElement.contains(event.target)) {
      return;
    }
    if (!apiRef.current.getRow(focusedCell.id)) {
      return;
    }
    if (cellParams) {
      apiRef.current.setCellFocus(cellParams.id, cellParams.field);
    } else {
      apiRef.current.setState((state) => _extends({}, state, {
        focus: {
          cell: null,
          columnHeader: null
        }
      }));
      apiRef.current.forceUpdate();
      apiRef.current.publishEvent("cellFocusOut", apiRef.current.getCellParams(focusedCell.id, focusedCell.field), event);
    }
  }, [apiRef]);
  const handleCellModeChange = React96.useCallback((params) => {
    if (params.cellMode === "view") {
      return;
    }
    const cell = gridFocusCellSelector(apiRef);
    if ((cell == null ? void 0 : cell.id) !== params.id || (cell == null ? void 0 : cell.field) !== params.field) {
      apiRef.current.setCellFocus(params.id, params.field);
    }
  }, [apiRef]);
  const handleRowSet = React96.useCallback(() => {
    const cell = gridFocusCellSelector(apiRef);
    if (cell && !apiRef.current.getRow(cell.id)) {
      apiRef.current.setState((state) => _extends({}, state, {
        focus: {
          cell: null,
          columnHeader: null
        }
      }));
    }
  }, [apiRef]);
  useGridApiMethod(apiRef, {
    setCellFocus,
    setColumnHeaderFocus,
    unstable_moveFocusToRelativeCell: moveFocusToRelativeCell
  }, "GridFocusApi");
  React96.useEffect(() => {
    const doc = ownerDocument_default(apiRef.current.rootElementRef.current);
    doc.addEventListener("click", handleDocumentClick);
    return () => {
      doc.removeEventListener("click", handleDocumentClick);
    };
  }, [apiRef, handleDocumentClick]);
  useGridApiEventHandler(apiRef, "columnHeaderBlur", handleBlur);
  useGridApiEventHandler(apiRef, "cellDoubleClick", handleCellDoubleClick);
  useGridApiEventHandler(apiRef, "cellMouseDown", handleCellMouseDown);
  useGridApiEventHandler(apiRef, "cellKeyDown", handleCellKeyDown);
  useGridApiEventHandler(apiRef, "cellModeChange", handleCellModeChange);
  useGridApiEventHandler(apiRef, "columnHeaderFocus", handleColumnHeaderFocus);
  useGridApiEventHandler(apiRef, "rowsSet", handleRowSet);
};

// node_modules/@mui/x-data-grid/hooks/features/keyboardNavigation/useGridKeyboardNavigation.js
var React97 = __toESM(require_react());
function enrichPageRowsWithPinnedRows(apiRef, rows) {
  const pinnedRows = gridPinnedRowsSelector(apiRef) || {};
  return [...pinnedRows.top || [], ...rows, ...pinnedRows.bottom || []];
}
var useGridKeyboardNavigation = (apiRef, props) => {
  const logger = useGridLogger(apiRef, "useGridKeyboardNavigation");
  const initialCurrentPageRows = useGridVisibleRows(apiRef, props).rows;
  const currentPageRows = React97.useMemo(() => enrichPageRowsWithPinnedRows(apiRef, initialCurrentPageRows), [apiRef, initialCurrentPageRows]);
  const goToCell = React97.useCallback((colIndex, rowId, closestColumnToUse = "left") => {
    const visibleSortedRows = gridVisibleSortedRowEntriesSelector(apiRef);
    const nextCellColSpanInfo = apiRef.current.unstable_getCellColSpanInfo(rowId, colIndex);
    if (nextCellColSpanInfo && nextCellColSpanInfo.spannedByColSpan) {
      if (closestColumnToUse === "left") {
        colIndex = nextCellColSpanInfo.leftVisibleCellIndex;
      } else if (closestColumnToUse === "right") {
        colIndex = nextCellColSpanInfo.rightVisibleCellIndex;
      }
    }
    const rowIndexRelativeToAllRows = visibleSortedRows.findIndex((row) => row.id === rowId);
    logger.debug(`Navigating to cell row ${rowIndexRelativeToAllRows}, col ${colIndex}`);
    apiRef.current.scrollToIndexes({
      colIndex,
      rowIndex: rowIndexRelativeToAllRows
    });
    const field = apiRef.current.getVisibleColumns()[colIndex].field;
    apiRef.current.setCellFocus(rowId, field);
  }, [apiRef, logger]);
  const goToHeader = React97.useCallback((colIndex, event) => {
    logger.debug(`Navigating to header col ${colIndex}`);
    apiRef.current.scrollToIndexes({
      colIndex
    });
    const field = apiRef.current.getVisibleColumns()[colIndex].field;
    apiRef.current.setColumnHeaderFocus(field, event);
  }, [apiRef, logger]);
  const getRowIdFromIndex = React97.useCallback((rowIndex) => {
    return currentPageRows[rowIndex].id;
  }, [currentPageRows]);
  const handleCellNavigationKeyDown = React97.useCallback((params, event) => {
    const dimensions = apiRef.current.getRootDimensions();
    if (currentPageRows.length === 0 || !dimensions) {
      return;
    }
    const viewportPageSize = apiRef.current.unstable_getViewportPageSize();
    const colIndexBefore = params.field ? apiRef.current.getColumnIndex(params.field) : 0;
    const rowIndexBefore = currentPageRows.findIndex((row) => row.id === params.id);
    const firstRowIndexInPage = 0;
    const lastRowIndexInPage = currentPageRows.length - 1;
    const firstColIndex = 0;
    const lastColIndex = gridVisibleColumnDefinitionsSelector(apiRef).length - 1;
    let shouldPreventDefault = true;
    switch (event.key) {
      case "ArrowDown":
      case "Enter": {
        if (rowIndexBefore < lastRowIndexInPage) {
          goToCell(colIndexBefore, getRowIdFromIndex(rowIndexBefore + 1));
        }
        break;
      }
      case "ArrowUp": {
        if (rowIndexBefore > firstRowIndexInPage) {
          goToCell(colIndexBefore, getRowIdFromIndex(rowIndexBefore - 1));
        } else {
          goToHeader(colIndexBefore, event);
        }
        break;
      }
      case "ArrowRight": {
        if (colIndexBefore < lastColIndex) {
          goToCell(colIndexBefore + 1, getRowIdFromIndex(rowIndexBefore), "right");
        }
        break;
      }
      case "ArrowLeft": {
        if (colIndexBefore > firstColIndex) {
          goToCell(colIndexBefore - 1, getRowIdFromIndex(rowIndexBefore));
        }
        break;
      }
      case "Tab": {
        if (event.shiftKey && colIndexBefore > firstColIndex) {
          goToCell(colIndexBefore - 1, getRowIdFromIndex(rowIndexBefore), "left");
        } else if (!event.shiftKey && colIndexBefore < lastColIndex) {
          goToCell(colIndexBefore + 1, getRowIdFromIndex(rowIndexBefore), "right");
        }
        break;
      }
      case " ": {
        const field = params.field;
        if (field === GRID_DETAIL_PANEL_TOGGLE_FIELD) {
          break;
        }
        const colDef = params.colDef;
        if (colDef && colDef.type === "treeDataGroup") {
          break;
        }
        if (!event.shiftKey && rowIndexBefore < lastRowIndexInPage) {
          goToCell(colIndexBefore, getRowIdFromIndex(Math.min(rowIndexBefore + viewportPageSize, lastRowIndexInPage)));
        }
        break;
      }
      case "PageDown": {
        if (rowIndexBefore < lastRowIndexInPage) {
          goToCell(colIndexBefore, getRowIdFromIndex(Math.min(rowIndexBefore + viewportPageSize, lastRowIndexInPage)));
        }
        break;
      }
      case "PageUp": {
        const nextRowIndex = Math.max(rowIndexBefore - viewportPageSize, firstRowIndexInPage);
        if (nextRowIndex !== rowIndexBefore && nextRowIndex >= firstRowIndexInPage) {
          goToCell(colIndexBefore, getRowIdFromIndex(nextRowIndex));
        } else {
          goToHeader(colIndexBefore, event);
        }
        break;
      }
      case "Home": {
        if (event.ctrlKey || event.metaKey || event.shiftKey) {
          goToCell(firstColIndex, getRowIdFromIndex(firstRowIndexInPage));
        } else {
          goToCell(firstColIndex, getRowIdFromIndex(rowIndexBefore));
        }
        break;
      }
      case "End": {
        if (event.ctrlKey || event.metaKey || event.shiftKey) {
          goToCell(lastColIndex, getRowIdFromIndex(lastRowIndexInPage));
        } else {
          goToCell(lastColIndex, getRowIdFromIndex(rowIndexBefore));
        }
        break;
      }
      default: {
        shouldPreventDefault = false;
      }
    }
    if (shouldPreventDefault) {
      event.preventDefault();
    }
  }, [apiRef, currentPageRows, goToCell, goToHeader, getRowIdFromIndex]);
  const handleColumnHeaderKeyDown = React97.useCallback((params, event) => {
    const headerTitleNode = event.currentTarget.querySelector(`.${gridClasses.columnHeaderTitleContainerContent}`);
    const isFromInsideContent = !!headerTitleNode && headerTitleNode.contains(event.target);
    if (isFromInsideContent && params.field !== GRID_CHECKBOX_SELECTION_COL_DEF.field) {
      return;
    }
    const dimensions = apiRef.current.getRootDimensions();
    if (!dimensions) {
      return;
    }
    const viewportPageSize = apiRef.current.unstable_getViewportPageSize();
    const colIndexBefore = params.field ? apiRef.current.getColumnIndex(params.field) : 0;
    const firstRowIndexInPage = 0;
    const lastRowIndexInPage = currentPageRows.length - 1;
    const firstColIndex = 0;
    const lastColIndex = gridVisibleColumnDefinitionsSelector(apiRef).length - 1;
    let shouldPreventDefault = true;
    switch (event.key) {
      case "ArrowDown": {
        if (firstRowIndexInPage !== null) {
          goToCell(colIndexBefore, getRowIdFromIndex(firstRowIndexInPage));
        }
        break;
      }
      case "ArrowRight": {
        if (colIndexBefore < lastColIndex) {
          goToHeader(colIndexBefore + 1, event);
        }
        break;
      }
      case "ArrowLeft": {
        if (colIndexBefore > firstColIndex) {
          goToHeader(colIndexBefore - 1, event);
        }
        break;
      }
      case "PageDown": {
        if (firstRowIndexInPage !== null && lastRowIndexInPage !== null) {
          goToCell(colIndexBefore, getRowIdFromIndex(Math.min(firstRowIndexInPage + viewportPageSize, lastRowIndexInPage)));
        }
        break;
      }
      case "Home": {
        goToHeader(firstColIndex, event);
        break;
      }
      case "End": {
        goToHeader(lastColIndex, event);
        break;
      }
      case "Enter": {
        if (event.ctrlKey || event.metaKey) {
          apiRef.current.toggleColumnMenu(params.field);
        }
        break;
      }
      case " ": {
        break;
      }
      default: {
        shouldPreventDefault = false;
      }
    }
    if (shouldPreventDefault) {
      event.preventDefault();
    }
  }, [apiRef, currentPageRows, goToCell, goToHeader, getRowIdFromIndex]);
  const handleCellKeyDown = React97.useCallback((params, event) => {
    if (!event.currentTarget.contains(event.target)) {
      return;
    }
    const cellParams = apiRef.current.getCellParams(params.id, params.field);
    if (cellParams.cellMode !== GridCellModes.Edit && isNavigationKey(event.key)) {
      apiRef.current.publishEvent("cellNavigationKeyDown", cellParams, event);
    }
  }, [apiRef]);
  useGridApiEventHandler(apiRef, "cellNavigationKeyDown", handleCellNavigationKeyDown);
  useGridApiEventHandler(apiRef, "columnHeaderKeyDown", handleColumnHeaderKeyDown);
  useGridApiEventHandler(apiRef, "cellKeyDown", handleCellKeyDown);
};

// node_modules/@mui/x-data-grid/hooks/features/pagination/useGridPagination.js
init_extends();

// node_modules/@mui/x-data-grid/hooks/features/pagination/useGridPageSize.js
init_extends();
var React98 = __toESM(require_react());
var defaultPageSize = (autoPageSize) => autoPageSize ? 0 : 100;
var mergeStateWithPageSize = (pageSize) => (state) => _extends({}, state, {
  pagination: _extends({}, state.pagination, {
    pageSize
  })
});
var useGridPageSize = (apiRef, props) => {
  var _props$initialState2, _props$initialState2$;
  const logger = useGridLogger(apiRef, "useGridPageSize");
  const rowHeight = useGridSelector(apiRef, gridDensityRowHeightSelector);
  apiRef.current.unstable_registerControlState({
    stateId: "pageSize",
    propModel: props.pageSize,
    propOnChange: props.onPageSizeChange,
    stateSelector: gridPageSizeSelector,
    changeEvent: "pageSizeChange"
  });
  const setPageSize = React98.useCallback((pageSize) => {
    if (pageSize === gridPageSizeSelector(apiRef)) {
      return;
    }
    logger.debug(`Setting page size to ${pageSize}`);
    apiRef.current.setState(mergeStateWithPageSize(pageSize));
    apiRef.current.forceUpdate();
  }, [apiRef, logger]);
  const pageSizeApi = {
    setPageSize
  };
  useGridApiMethod(apiRef, pageSizeApi, "GridPageSizeApi");
  const stateExportPreProcessing = React98.useCallback((prevState, context) => {
    var _props$initialState, _props$initialState$p;
    const pageSizeToExport = gridPageSizeSelector(apiRef);
    const shouldExportPageSize = !context.exportOnlyDirtyModels || props.pageSize != null || ((_props$initialState = props.initialState) == null ? void 0 : (_props$initialState$p = _props$initialState.pagination) == null ? void 0 : _props$initialState$p.pageSize) != null || pageSizeToExport !== defaultPageSize(props.autoPageSize);
    if (!shouldExportPageSize) {
      return prevState;
    }
    return _extends({}, prevState, {
      pagination: _extends({}, prevState.pagination, {
        pageSize: pageSizeToExport
      })
    });
  }, [apiRef, props.pageSize, (_props$initialState2 = props.initialState) == null ? void 0 : (_props$initialState2$ = _props$initialState2.pagination) == null ? void 0 : _props$initialState2$.pageSize, props.autoPageSize]);
  const stateRestorePreProcessing = React98.useCallback((params, context) => {
    var _context$stateToResto;
    const pageSize = (_context$stateToResto = context.stateToRestore.pagination) == null ? void 0 : _context$stateToResto.pageSize;
    if (pageSize != null) {
      apiRef.current.setState(mergeStateWithPageSize(pageSize));
    }
    return params;
  }, [apiRef]);
  useGridRegisterPipeProcessor(apiRef, "exportState", stateExportPreProcessing);
  useGridRegisterPipeProcessor(apiRef, "restoreState", stateRestorePreProcessing);
  const handleUpdateAutoPageSize = React98.useCallback(() => {
    const dimensions = apiRef.current.getRootDimensions();
    if (!props.autoPageSize || !dimensions) {
      return;
    }
    const pinnedRowsHeight = calculatePinnedRowsHeight(apiRef);
    const maximumPageSizeWithoutScrollBar = Math.floor((dimensions.viewportInnerSize.height - pinnedRowsHeight.top - pinnedRowsHeight.bottom) / rowHeight);
    apiRef.current.setPageSize(maximumPageSizeWithoutScrollBar);
  }, [apiRef, props.autoPageSize, rowHeight]);
  useGridApiEventHandler(apiRef, "viewportInnerSizeChange", handleUpdateAutoPageSize);
  React98.useEffect(() => {
    if (props.pageSize != null && !props.autoPageSize) {
      apiRef.current.setPageSize(props.pageSize);
    }
  }, [apiRef, props.autoPageSize, props.pageSize]);
  React98.useEffect(() => {
    handleUpdateAutoPageSize();
  }, [handleUpdateAutoPageSize]);
};

// node_modules/@mui/x-data-grid/hooks/features/pagination/useGridPage.js
init_extends();
var React99 = __toESM(require_react());
var getPageCount = (rowCount, pageSize) => {
  if (pageSize > 0 && rowCount > 0) {
    return Math.ceil(rowCount / pageSize);
  }
  return 0;
};
var applyValidPage = (paginationState) => {
  if (!paginationState.pageCount) {
    return paginationState;
  }
  return _extends({}, paginationState, {
    page: Math.max(Math.min(paginationState.page, paginationState.pageCount - 1), 0)
  });
};
var mergeStateWithPage = (page) => (state) => _extends({}, state, {
  pagination: applyValidPage(_extends({}, state.pagination, {
    page
  }))
});
var noRowCountInServerMode = buildWarning(["MUI: the 'rowCount' prop is undefined while using paginationMode='server'", "For more detail, see http://mui.com/components/data-grid/pagination/#basic-implementation"], "error");
var useGridPage = (apiRef, props) => {
  var _props$initialState2, _props$initialState2$;
  const logger = useGridLogger(apiRef, "useGridPage");
  const visibleTopLevelRowCount = useGridSelector(apiRef, gridVisibleTopLevelRowCountSelector);
  apiRef.current.unstable_registerControlState({
    stateId: "page",
    propModel: props.page,
    propOnChange: props.onPageChange,
    stateSelector: gridPageSelector,
    changeEvent: "pageChange"
  });
  const setPage = React99.useCallback((page) => {
    logger.debug(`Setting page to ${page}`);
    apiRef.current.setState(mergeStateWithPage(page));
    apiRef.current.forceUpdate();
  }, [apiRef, logger]);
  const pageApi = {
    setPage
  };
  useGridApiMethod(apiRef, pageApi, "GridPageApi");
  const stateExportPreProcessing = React99.useCallback((prevState, context) => {
    var _props$initialState, _props$initialState$p;
    const pageToExport = gridPageSelector(apiRef);
    const shouldExportPage = !context.exportOnlyDirtyModels || props.page != null || ((_props$initialState = props.initialState) == null ? void 0 : (_props$initialState$p = _props$initialState.pagination) == null ? void 0 : _props$initialState$p.page) != null || pageToExport !== 0;
    if (!shouldExportPage) {
      return prevState;
    }
    return _extends({}, prevState, {
      pagination: _extends({}, prevState.pagination, {
        page: pageToExport
      })
    });
  }, [apiRef, props.page, (_props$initialState2 = props.initialState) == null ? void 0 : (_props$initialState2$ = _props$initialState2.pagination) == null ? void 0 : _props$initialState2$.page]);
  const stateRestorePreProcessing = React99.useCallback((params, context) => {
    var _context$stateToResto, _context$stateToResto2;
    const page = (_context$stateToResto = (_context$stateToResto2 = context.stateToRestore.pagination) == null ? void 0 : _context$stateToResto2.page) != null ? _context$stateToResto : gridPageSelector(apiRef);
    apiRef.current.setState(mergeStateWithPage(page));
    return params;
  }, [apiRef]);
  useGridRegisterPipeProcessor(apiRef, "exportState", stateExportPreProcessing);
  useGridRegisterPipeProcessor(apiRef, "restoreState", stateRestorePreProcessing);
  const handlePageSizeChange = (pageSize) => {
    apiRef.current.setState((state) => {
      const pageCount = getPageCount(state.pagination.rowCount, pageSize);
      return _extends({}, state, {
        pagination: applyValidPage(_extends({}, state.pagination, {
          pageCount,
          page: state.pagination.page
        }))
      });
    });
    apiRef.current.forceUpdate();
  };
  const handlePageChange = () => apiRef.current.scrollToIndexes({
    rowIndex: gridPageSelector(apiRef) * gridPageSizeSelector(apiRef)
  });
  useGridApiEventHandler(apiRef, "pageSizeChange", handlePageSizeChange);
  useGridApiEventHandler(apiRef, "pageChange", handlePageChange);
  React99.useEffect(() => {
    if (true) {
      if (props.paginationMode === "server" && props.rowCount == null) {
        noRowCountInServerMode();
      }
    }
  }, [props.rowCount, props.paginationMode]);
  React99.useEffect(() => {
    apiRef.current.setState((state) => {
      const rowCount = props.rowCount !== void 0 ? props.rowCount : visibleTopLevelRowCount;
      const pageCount = getPageCount(rowCount, state.pagination.pageSize);
      const page = props.page == null ? state.pagination.page : props.page;
      return _extends({}, state, {
        pagination: applyValidPage(_extends({}, state.pagination, {
          page,
          rowCount,
          pageCount
        }))
      });
    });
    apiRef.current.forceUpdate();
  }, [visibleTopLevelRowCount, props.rowCount, props.page, props.paginationMode, apiRef]);
};

// node_modules/@mui/x-data-grid/hooks/features/pagination/useGridPagination.js
var paginationStateInitializer = (state, props) => {
  var _props$initialState, _props$initialState$p, _ref, _props$page, _props$initialState2, _props$initialState2$, _props$rowCount, _props$rowCount2;
  let pageSize;
  if (props.pageSize != null) {
    pageSize = props.pageSize;
  } else if (((_props$initialState = props.initialState) == null ? void 0 : (_props$initialState$p = _props$initialState.pagination) == null ? void 0 : _props$initialState$p.pageSize) != null) {
    pageSize = props.initialState.pagination.pageSize;
  } else {
    pageSize = defaultPageSize(props.autoPageSize);
  }
  return _extends({}, state, {
    pagination: {
      pageSize,
      page: (_ref = (_props$page = props.page) != null ? _props$page : (_props$initialState2 = props.initialState) == null ? void 0 : (_props$initialState2$ = _props$initialState2.pagination) == null ? void 0 : _props$initialState2$.page) != null ? _ref : 0,
      pageCount: getPageCount((_props$rowCount = props.rowCount) != null ? _props$rowCount : 0, pageSize),
      rowCount: (_props$rowCount2 = props.rowCount) != null ? _props$rowCount2 : 0
    }
  });
};
var useGridPagination = (apiRef, props) => {
  useGridPageSize(apiRef, props);
  useGridPage(apiRef, props);
};

// node_modules/@mui/x-data-grid/hooks/features/preferencesPanel/useGridPreferencesPanel.js
init_extends();
var React100 = __toESM(require_react());
var preferencePanelStateInitializer = (state, props) => {
  var _props$initialState$p, _props$initialState;
  return _extends({}, state, {
    preferencePanel: (_props$initialState$p = (_props$initialState = props.initialState) == null ? void 0 : _props$initialState.preferencePanel) != null ? _props$initialState$p : {
      open: false
    }
  });
};
var useGridPreferencesPanel = (apiRef, props) => {
  var _props$initialState3;
  const logger = useGridLogger(apiRef, "useGridPreferencesPanel");
  const hideTimeout = React100.useRef();
  const immediateTimeout = React100.useRef();
  const hidePreferences = React100.useCallback(() => {
    logger.debug("Hiding Preferences Panel");
    const preferencePanelState = gridPreferencePanelStateSelector(apiRef.current.state);
    if (preferencePanelState.openedPanelValue) {
      apiRef.current.publishEvent("preferencePanelClose", {
        openedPanelValue: preferencePanelState.openedPanelValue
      });
    }
    apiRef.current.setState((state) => _extends({}, state, {
      preferencePanel: {
        open: false
      }
    }));
    apiRef.current.forceUpdate();
  }, [apiRef, logger]);
  const doNotHidePanel = React100.useCallback(() => {
    immediateTimeout.current = setTimeout(() => clearTimeout(hideTimeout.current), 0);
  }, []);
  const hidePreferencesDelayed = React100.useCallback(() => {
    hideTimeout.current = setTimeout(hidePreferences, 100);
  }, [hidePreferences]);
  const showPreferences = React100.useCallback((newValue) => {
    logger.debug("Opening Preferences Panel");
    doNotHidePanel();
    apiRef.current.setState((state) => _extends({}, state, {
      preferencePanel: _extends({}, state.preferencePanel, {
        open: true,
        openedPanelValue: newValue
      })
    }));
    apiRef.current.publishEvent("preferencePanelOpen", {
      openedPanelValue: newValue
    });
    apiRef.current.forceUpdate();
  }, [logger, doNotHidePanel, apiRef]);
  useGridApiMethod(apiRef, {
    showPreferences,
    hidePreferences: hidePreferencesDelayed
  }, "ColumnMenuApi");
  const stateExportPreProcessing = React100.useCallback((prevState, context) => {
    var _props$initialState2;
    const preferencePanelToExport = gridPreferencePanelStateSelector(apiRef.current.state);
    const shouldExportPreferencePanel = !context.exportOnlyDirtyModels || ((_props$initialState2 = props.initialState) == null ? void 0 : _props$initialState2.preferencePanel) != null || preferencePanelToExport.open;
    if (!shouldExportPreferencePanel) {
      return prevState;
    }
    return _extends({}, prevState, {
      preferencePanel: preferencePanelToExport
    });
  }, [apiRef, (_props$initialState3 = props.initialState) == null ? void 0 : _props$initialState3.preferencePanel]);
  const stateRestorePreProcessing = React100.useCallback((params, context) => {
    const preferencePanel = context.stateToRestore.preferencePanel;
    if (preferencePanel != null) {
      apiRef.current.setState((state) => _extends({}, state, {
        preferencePanel
      }));
    }
    return params;
  }, [apiRef]);
  useGridRegisterPipeProcessor(apiRef, "exportState", stateExportPreProcessing);
  useGridRegisterPipeProcessor(apiRef, "restoreState", stateRestorePreProcessing);
  React100.useEffect(() => {
    return () => {
      clearTimeout(hideTimeout.current);
      clearTimeout(immediateTimeout.current);
    };
  }, []);
};

// node_modules/@mui/x-data-grid/hooks/features/editRows/useGridEditing.old.js
init_extends();
var React103 = __toESM(require_react());

// node_modules/@mui/x-data-grid/hooks/features/editRows/gridEditRowsSelector.js
var gridEditRowsStateSelector = (state) => state.editRows;

// node_modules/@mui/x-data-grid/hooks/features/editRows/useGridCellEditing.old.js
init_extends();
var React101 = __toESM(require_react());
init_utils();
function isPromise(promise) {
  return typeof promise.then === "function";
}
var useCellEditing = (apiRef, props) => {
  var _props$experimentalFe2;
  const logger = useGridLogger(apiRef, "useGridEditRows");
  const buildCallback = (callback) => (...args) => {
    if (props.editMode === GridEditModes.Cell) {
      callback(...args);
    }
  };
  const setCellMode = React101.useCallback((id, field, mode) => {
    if (apiRef.current.getCellMode(id, field) === mode) {
      return;
    }
    logger.debug(`Switching cell id: ${id} field: ${field} to mode: ${mode}`);
    apiRef.current.setState((state) => {
      const newEditRowsState = _extends({}, state.editRows);
      newEditRowsState[id] = _extends({}, newEditRowsState[id]);
      if (mode === GridCellModes.Edit) {
        newEditRowsState[id][field] = {
          value: apiRef.current.getCellValue(id, field)
        };
      } else {
        delete newEditRowsState[id][field];
        if (!Object.keys(newEditRowsState[id]).length) {
          delete newEditRowsState[id];
        }
      }
      return _extends({}, state, {
        editRows: newEditRowsState
      });
    });
    apiRef.current.forceUpdate();
    apiRef.current.publishEvent("cellModeChange", apiRef.current.getCellParams(id, field));
  }, [apiRef, logger]);
  const getCellMode = React101.useCallback((id, field) => {
    const editRowsState = gridEditRowsStateSelector(apiRef.current.state);
    const isEditing = editRowsState[id] && editRowsState[id][field];
    return isEditing ? GridCellModes.Edit : GridCellModes.View;
  }, [apiRef]);
  const commitCellChange = React101.useCallback((params, event = {}) => {
    var _props$experimentalFe;
    const {
      id,
      field
    } = params;
    apiRef.current.unstable_runPendingEditCellValueMutation(id, field);
    const model = apiRef.current.getEditRowsModel();
    if (!model[id] || !model[id][field]) {
      throw new Error(`MUI: Cell at id: ${id} and field: ${field} is not in edit mode.`);
    }
    const editCellProps = model[id][field];
    const column = apiRef.current.getColumn(field);
    const row = apiRef.current.getRow(id);
    if ((_props$experimentalFe = props.experimentalFeatures) != null && _props$experimentalFe.preventCommitWhileValidating) {
      const cellProps = model[id][field];
      if (cellProps.isValidating || cellProps.error) {
        return false;
      }
    }
    const commitParams = _extends({}, params, {
      value: editCellProps.value
    });
    let hasError = !!editCellProps.error;
    if (!hasError && typeof column.preProcessEditCellProps === "function") {
      const result = column.preProcessEditCellProps({
        id,
        row,
        props: editCellProps
      });
      if (isPromise(result)) {
        return result.then((newEditCellProps) => {
          apiRef.current.unstable_setEditCellProps({
            id,
            field,
            props: newEditCellProps
          });
          if (newEditCellProps.error) {
            return false;
          }
          apiRef.current.publishEvent("cellEditCommit", commitParams, event);
          return true;
        });
      }
      apiRef.current.unstable_setEditCellProps({
        id,
        field,
        props: result
      });
      hasError = !!result.error;
    }
    if (!hasError) {
      apiRef.current.publishEvent("cellEditCommit", commitParams, event);
      return true;
    }
    return false;
  }, [apiRef, (_props$experimentalFe2 = props.experimentalFeatures) == null ? void 0 : _props$experimentalFe2.preventCommitWhileValidating]);
  const setCellEditingEditCellValue = React101.useCallback((params) => {
    const column = apiRef.current.getColumn(params.field);
    const row = apiRef.current.getRow(params.id);
    return new Promise((resolve) => {
      let newEditCellProps = {
        value: params.value
      };
      const model = apiRef.current.getEditRowsModel();
      const editCellProps = model[params.id][params.field];
      if (typeof column.preProcessEditCellProps !== "function") {
        apiRef.current.unstable_setEditCellProps(_extends({}, params, {
          props: newEditCellProps
        }));
        resolve(true);
        return;
      }
      newEditCellProps = apiRef.current.unstable_setEditCellProps(_extends({}, params, {
        props: _extends({}, editCellProps, {
          isValidating: true
        })
      }));
      Promise.resolve(column.preProcessEditCellProps({
        id: params.id,
        row,
        props: _extends({}, newEditCellProps, {
          value: apiRef.current.unstable_parseValue(params.id, params.field, params.value)
        })
      })).then((newEditCellPropsProcessed) => {
        apiRef.current.unstable_setEditCellProps(_extends({}, params, {
          props: _extends({}, newEditCellPropsProcessed, {
            isValidating: false
          })
        }));
        resolve(!newEditCellPropsProcessed.error);
      });
    });
  }, [apiRef]);
  const cellEditingApi = {
    setCellMode,
    getCellMode,
    commitCellChange,
    unstable_setCellEditingEditCellValue: setCellEditingEditCellValue
  };
  useGridApiMethod(apiRef, cellEditingApi, "EditRowApi");
  const handleCellKeyDown = React101.useCallback(async (params, event) => {
    if (event.which === 229) {
      return;
    }
    const {
      id,
      field,
      cellMode,
      isEditable
    } = params;
    if (!isEditable) {
      return;
    }
    const isEditMode = cellMode === GridCellModes.Edit;
    const isModifierKeyPressed = event.ctrlKey || event.metaKey || event.altKey;
    if (!isEditMode && isCellEnterEditModeKeys(event) && !isModifierKeyPressed && !(event.key === " " && event.shiftKey)) {
      apiRef.current.publishEvent("cellEditStart", params, event);
    }
    if (!isEditMode && isDeleteKeys(event.key)) {
      apiRef.current.setEditCellValue({
        id,
        field,
        value: ""
      });
      apiRef.current.commitCellChange({
        id,
        field
      }, event);
      apiRef.current.publishEvent("cellEditStop", params, event);
    }
    if (isEditMode && isCellEditCommitKeys(event.key)) {
      const commitParams = {
        id,
        field
      };
      const isValid = await apiRef.current.commitCellChange(commitParams, event);
      if (!isValid) {
        return;
      }
    }
    if (isEditMode && isCellExitEditModeKeys(event.key)) {
      apiRef.current.publishEvent("cellEditStop", params, event);
    }
  }, [apiRef]);
  const handleCellDoubleClick = React101.useCallback((params, event) => {
    if (!params.isEditable) {
      return;
    }
    apiRef.current.publishEvent("cellEditStart", params, event);
  }, [apiRef]);
  const commitPropsAndExit = async (params, event) => {
    if (params.cellMode === GridCellModes.View) {
      return;
    }
    await apiRef.current.commitCellChange(params, event);
    apiRef.current.publishEvent("cellEditStop", params, event);
  };
  const handleCellFocusOut = useEventCallback_default((params, event) => {
    commitPropsAndExit(params, event);
  });
  const handleColumnHeaderDragStart = useEventCallback_default(() => {
    const cell = gridFocusCellSelector(apiRef);
    if (!cell) {
      return;
    }
    const params = apiRef.current.getCellParams(cell.id, cell.field);
    commitPropsAndExit(params, {});
  });
  const handleCellEditStart = React101.useCallback((params, event) => {
    if (!params.isEditable) {
      return;
    }
    apiRef.current.setCellMode(params.id, params.field, GridCellModes.Edit);
    if (isKeyboardEvent(event) && isPrintableKey(event)) {
      apiRef.current.unstable_setEditCellProps({
        id: params.id,
        field: params.field,
        props: {
          value: ""
        }
      });
    }
  }, [apiRef]);
  const handleCellEditStop = React101.useCallback((params, event) => {
    apiRef.current.setCellMode(params.id, params.field, GridCellModes.View);
    if (!isKeyboardEvent(event)) {
      return;
    }
    if (isCellEditCommitKeys(event.key)) {
      apiRef.current.publishEvent("cellNavigationKeyDown", params, event);
      return;
    }
    if (event.key === "Escape" || isDeleteKeys(event.key)) {
      apiRef.current.setCellFocus(params.id, params.field);
    }
  }, [apiRef]);
  const handleCellEditCommit = React101.useCallback((params) => {
    const {
      id,
      field
    } = params;
    const model = apiRef.current.getEditRowsModel();
    const {
      value
    } = model[id][field];
    logger.debug(`Setting cell id: ${id} field: ${field} to value: ${value == null ? void 0 : value.toString()}`);
    const row = apiRef.current.getRow(id);
    if (row) {
      const column = apiRef.current.getColumn(params.field);
      let rowUpdate = _extends({}, row, {
        [field]: value
      });
      if (column.valueSetter) {
        rowUpdate = column.valueSetter({
          row,
          value
        });
      }
      apiRef.current.updateRows([rowUpdate]);
    }
  }, [apiRef, logger]);
  const handleEditCellPropsChange = React101.useCallback((params) => {
    const row = apiRef.current.getRow(params.id);
    const column = apiRef.current.getColumn(params.field);
    const editCellProps = column.preProcessEditCellProps ? column.preProcessEditCellProps({
      id: params.id,
      row,
      props: params.props
    }) : params.props;
    if (isPromise(editCellProps)) {
      editCellProps.then((newEditCellProps) => {
        apiRef.current.unstable_setEditCellProps(_extends({}, params, {
          props: newEditCellProps
        }));
      });
    } else {
      apiRef.current.unstable_setEditCellProps(_extends({}, params, {
        props: editCellProps
      }));
    }
  }, [apiRef]);
  useGridApiEventHandler(apiRef, "cellKeyDown", buildCallback(handleCellKeyDown));
  useGridApiEventHandler(apiRef, "cellDoubleClick", buildCallback(handleCellDoubleClick));
  useGridApiEventHandler(apiRef, "cellFocusOut", buildCallback(handleCellFocusOut));
  useGridApiEventHandler(apiRef, "columnHeaderDragStart", buildCallback(handleColumnHeaderDragStart));
  useGridApiEventHandler(apiRef, "cellEditStart", buildCallback(handleCellEditStart));
  useGridApiEventHandler(apiRef, "cellEditStop", buildCallback(handleCellEditStop));
  useGridApiEventHandler(apiRef, "cellEditCommit", buildCallback(handleCellEditCommit));
  useGridApiEventHandler(apiRef, "editCellPropsChange", buildCallback(handleEditCellPropsChange));
  useGridApiOptionHandler(apiRef, "cellEditCommit", props.onCellEditCommit);
  useGridApiOptionHandler(apiRef, "cellEditStart", props.onCellEditStart);
  useGridApiOptionHandler(apiRef, "cellEditStop", props.onCellEditStop);
};

// node_modules/@mui/x-data-grid/hooks/features/editRows/useGridRowEditing.old.js
init_extends();
var React102 = __toESM(require_react());
init_utils();
var useGridRowEditing = (apiRef, props) => {
  var _props$experimentalFe2, _props$experimentalFe4;
  const focusTimeout = React102.useRef(null);
  const nextFocusedCell = React102.useRef(null);
  const columns2 = useGridSelector(apiRef, gridColumnDefinitionsSelector);
  const buildCallback = (callback) => (...args) => {
    if (props.editMode === GridEditModes.Row) {
      callback(...args);
    }
  };
  const setRowMode = React102.useCallback((id, mode) => {
    if (mode === apiRef.current.getRowMode(id)) {
      return;
    }
    apiRef.current.setState((state) => {
      const newEditRowsState = _extends({}, state.editRows);
      if (mode === GridRowModes.Edit) {
        newEditRowsState[id] = {};
        columns2.forEach((column) => {
          const cellParams = apiRef.current.getCellParams(id, column.field);
          if (cellParams.isEditable) {
            newEditRowsState[id][column.field] = {
              value: cellParams.value
            };
          }
        });
      } else {
        delete newEditRowsState[id];
      }
      return _extends({}, state, {
        editRows: newEditRowsState
      });
    });
    apiRef.current.forceUpdate();
  }, [apiRef, columns2]);
  const getRowMode = React102.useCallback((id) => {
    if (props.editMode === GridEditModes.Cell) {
      return GridRowModes.View;
    }
    const editRowsState = gridEditRowsStateSelector(apiRef.current.state);
    return editRowsState[id] ? GridRowModes.Edit : GridRowModes.View;
  }, [apiRef, props.editMode]);
  const commitRowChange = React102.useCallback((id, event = {}) => {
    var _props$experimentalFe;
    if (props.editMode === GridEditModes.Cell) {
      throw new Error(`MUI: You can't commit changes when the edit mode is 'cell'.`);
    }
    apiRef.current.unstable_runPendingEditCellValueMutation(id);
    const model = apiRef.current.getEditRowsModel();
    const editRowProps = model[id];
    if (!editRowProps) {
      throw new Error(`MUI: Row at id: ${id} is not being edited.`);
    }
    if ((_props$experimentalFe = props.experimentalFeatures) != null && _props$experimentalFe.preventCommitWhileValidating) {
      const isValid = Object.keys(editRowProps).reduce((acc, field) => {
        return acc && !editRowProps[field].isValidating && !editRowProps[field].error;
      }, true);
      if (!isValid) {
        return false;
      }
    }
    const hasFieldWithError = Object.values(editRowProps).some((value) => !!value.error);
    if (hasFieldWithError) {
      return false;
    }
    const fieldsWithValidator = Object.keys(editRowProps).filter((field) => {
      const column = apiRef.current.getColumn(field);
      return typeof column.preProcessEditCellProps === "function";
    });
    if (fieldsWithValidator.length > 0) {
      const row = apiRef.current.getRow(id);
      const validatorErrors = fieldsWithValidator.map(async (field) => {
        const column = apiRef.current.getColumn(field);
        const newEditCellProps = await Promise.resolve(column.preProcessEditCellProps({
          id,
          row,
          props: editRowProps[field]
        }));
        apiRef.current.unstable_setEditCellProps({
          id,
          field,
          props: newEditCellProps
        });
        return newEditCellProps.error;
      });
      return Promise.all(validatorErrors).then((errors) => {
        if (errors.some((error) => !!error)) {
          return false;
        }
        apiRef.current.publishEvent("rowEditCommit", id, event);
        return true;
      });
    }
    apiRef.current.publishEvent("rowEditCommit", id, event);
    return true;
  }, [apiRef, props.editMode, (_props$experimentalFe2 = props.experimentalFeatures) == null ? void 0 : _props$experimentalFe2.preventCommitWhileValidating]);
  const setRowEditingEditCellValue = React102.useCallback((params) => {
    const model = apiRef.current.getEditRowsModel();
    const editRow = model[params.id];
    const row = apiRef.current.getRow(params.id);
    let isValid = true;
    return new Promise((resolve) => {
      Object.keys(editRow).forEach(async (field) => {
        const column = apiRef.current.getColumn(field);
        let editCellProps = field === params.field ? {
          value: params.value
        } : editRow[field];
        editCellProps = apiRef.current.unstable_setEditCellProps({
          id: params.id,
          field,
          props: _extends({}, editCellProps, {
            isValidating: true
          })
        });
        if (column.preProcessEditCellProps) {
          editCellProps = await Promise.resolve(column.preProcessEditCellProps({
            id: params.id,
            row,
            props: _extends({}, editCellProps, {
              value: field === params.field ? apiRef.current.unstable_parseValue(params.id, field, params.value) : editCellProps.value
            })
          }));
        }
        if (editCellProps.error) {
          isValid = false;
        }
        apiRef.current.unstable_setEditCellProps({
          id: params.id,
          field,
          props: _extends({}, editCellProps, {
            isValidating: false
          })
        });
      });
      resolve(isValid);
    });
  }, [apiRef]);
  const rowEditingApi = {
    setRowMode,
    getRowMode,
    commitRowChange,
    unstable_setRowEditingEditCellValue: setRowEditingEditCellValue
  };
  useGridApiMethod(apiRef, rowEditingApi, "EditRowApi");
  const handleCellKeyDown = React102.useCallback(async (params, event) => {
    if (event.which === 229) {
      return;
    }
    const {
      cellMode,
      isEditable
    } = params;
    if (!isEditable) {
      return;
    }
    const isEditMode = cellMode === GridCellModes.Edit;
    const rowParams = apiRef.current.getRowParams(params.id);
    if (isEditMode) {
      if (event.key === "Enter") {
        var _props$experimentalFe3;
        const isValid = await apiRef.current.commitRowChange(params.id);
        if (!isValid && (_props$experimentalFe3 = props.experimentalFeatures) != null && _props$experimentalFe3.preventCommitWhileValidating) {
          return;
        }
        apiRef.current.publishEvent("rowEditStop", rowParams, event);
      } else if (event.key === "Escape") {
        apiRef.current.publishEvent("rowEditStop", rowParams, event);
      }
    } else if (event.key === "Enter") {
      apiRef.current.publishEvent("rowEditStart", rowParams, event);
    }
  }, [apiRef, (_props$experimentalFe4 = props.experimentalFeatures) == null ? void 0 : _props$experimentalFe4.preventCommitWhileValidating]);
  const handleCellDoubleClick = React102.useCallback((params, event) => {
    if (!params.isEditable) {
      return;
    }
    const rowParams = apiRef.current.getRowParams(params.id);
    apiRef.current.publishEvent("rowEditStart", rowParams, event);
  }, [apiRef]);
  const handleEditCellPropsChange = React102.useCallback((params) => {
    const row = apiRef.current.getRow(params.id);
    const model = apiRef.current.getEditRowsModel();
    const editRow = model[params.id];
    Object.keys(editRow).forEach(async (field) => {
      const column = apiRef.current.getColumn(field);
      if (column.preProcessEditCellProps) {
        const editCellProps = field === params.field ? params.props : editRow[field];
        const newEditCellProps = await Promise.resolve(column.preProcessEditCellProps({
          id: params.id,
          row,
          props: editCellProps
        }));
        apiRef.current.unstable_setEditCellProps({
          id: params.id,
          field,
          props: newEditCellProps
        });
      } else if (field === params.field) {
        apiRef.current.unstable_setEditCellProps(params);
      }
    });
  }, [apiRef]);
  const handleRowEditStart = React102.useCallback((params) => {
    apiRef.current.setRowMode(params.id, GridRowModes.Edit);
  }, [apiRef]);
  const handleRowEditStop = React102.useCallback((params, event) => {
    apiRef.current.setRowMode(params.id, GridRowModes.View);
    if (event.key === "Enter") {
      apiRef.current.publishEvent("cellNavigationKeyDown", params, event);
    }
  }, [apiRef]);
  const handleRowEditCommit = React102.useCallback((id) => {
    const model = apiRef.current.getEditRowsModel();
    const editRow = model[id];
    if (!editRow) {
      throw new Error(`MUI: Row at id: ${id} is not being edited.`);
    }
    const row = apiRef.current.getRow(id);
    if (row) {
      let rowUpdate = _extends({}, row);
      Object.keys(editRow).forEach((field) => {
        const column = apiRef.current.getColumn(field);
        const value = editRow[field].value;
        if (column.valueSetter) {
          rowUpdate = column.valueSetter({
            row: rowUpdate,
            value
          });
        } else {
          rowUpdate[field] = value;
        }
      });
      apiRef.current.updateRows([rowUpdate]);
    }
  }, [apiRef]);
  const handleCellFocusIn = React102.useCallback((params) => {
    nextFocusedCell.current = params;
  }, []);
  const commitPropsAndExit = async (params, event) => {
    if (params.cellMode === GridCellModes.View) {
      return;
    }
    nextFocusedCell.current = null;
    focusTimeout.current = setTimeout(async () => {
      var _nextFocusedCell$curr;
      if (((_nextFocusedCell$curr = nextFocusedCell.current) == null ? void 0 : _nextFocusedCell$curr.id) !== params.id) {
        await apiRef.current.commitRowChange(params.id, event);
        const rowParams = apiRef.current.getRowParams(params.id);
        apiRef.current.publishEvent("rowEditStop", rowParams, event);
      }
    });
  };
  const handleCellFocusOut = useEventCallback_default((params, event) => {
    commitPropsAndExit(params, event);
  });
  const handleColumnHeaderDragStart = useEventCallback_default(() => {
    const cell = gridFocusCellSelector(apiRef);
    if (!cell) {
      return;
    }
    const params = apiRef.current.getCellParams(cell.id, cell.field);
    commitPropsAndExit(params, {});
  });
  useGridApiEventHandler(apiRef, "cellKeyDown", buildCallback(handleCellKeyDown));
  useGridApiEventHandler(apiRef, "cellDoubleClick", buildCallback(handleCellDoubleClick));
  useGridApiEventHandler(apiRef, "editCellPropsChange", buildCallback(handleEditCellPropsChange));
  useGridApiEventHandler(apiRef, "rowEditStart", buildCallback(handleRowEditStart));
  useGridApiEventHandler(apiRef, "rowEditStop", buildCallback(handleRowEditStop));
  useGridApiEventHandler(apiRef, "rowEditCommit", buildCallback(handleRowEditCommit));
  useGridApiEventHandler(apiRef, "cellFocusIn", buildCallback(handleCellFocusIn));
  useGridApiEventHandler(apiRef, "cellFocusOut", buildCallback(handleCellFocusOut));
  useGridApiEventHandler(apiRef, "columnHeaderDragStart", buildCallback(handleColumnHeaderDragStart));
  useGridApiOptionHandler(apiRef, "rowEditCommit", props.onRowEditCommit);
  useGridApiOptionHandler(apiRef, "rowEditStart", props.onRowEditStart);
  useGridApiOptionHandler(apiRef, "rowEditStop", props.onRowEditStop);
};

// node_modules/@mui/x-data-grid/hooks/features/editRows/useGridEditing.old.js
var editingStateInitializer = (state) => _extends({}, state, {
  editRows: {}
});
function useGridEditing(apiRef, props) {
  var _props$experimentalFe2;
  const logger = useGridLogger(apiRef, "useGridEditRows");
  useCellEditing(apiRef, props);
  useGridRowEditing(apiRef, props);
  const debounceMap = React103.useRef({});
  apiRef.current.unstable_registerControlState({
    stateId: "editRows",
    propModel: props.editRowsModel,
    propOnChange: props.onEditRowsModelChange,
    stateSelector: gridEditRowsStateSelector,
    changeEvent: "editRowsModelChange"
  });
  const isCellEditable = React103.useCallback(
    (params) => !params.rowNode.isAutoGenerated && !params.rowNode.isPinned && !!params.colDef.editable && !!params.colDef.renderEditCell && (!props.isCellEditable || props.isCellEditable(params)),
    [props.isCellEditable]
  );
  const maybeDebounce = (id, field, debounceMs, callback) => {
    if (!debounceMs) {
      callback();
      return;
    }
    if (!debounceMap.current[id]) {
      debounceMap.current[id] = {};
    }
    if (debounceMap.current[id][field]) {
      const [timeout2] = debounceMap.current[id][field];
      clearTimeout(timeout2);
    }
    const callbackToRunImmediately = () => {
      callback();
      const [timeout2] = debounceMap.current[id][field];
      clearTimeout(timeout2);
      delete debounceMap.current[id][field];
    };
    const timeout = setTimeout(() => {
      callback();
      delete debounceMap.current[id][field];
    }, debounceMs);
    debounceMap.current[id][field] = [timeout, callbackToRunImmediately];
  };
  const runPendingEditCellValueMutation = React103.useCallback((id, field) => {
    if (!debounceMap.current[id]) {
      return;
    }
    if (!field) {
      Object.keys(debounceMap.current[id]).forEach((debouncedField) => {
        const [, callback] = debounceMap.current[id][debouncedField];
        callback();
      });
    } else if (debounceMap.current[id][field]) {
      const [, callback] = debounceMap.current[id][field];
      callback();
    }
  }, []);
  const setEditCellValue = React103.useCallback((params, event = {}) => {
    maybeDebounce(params.id, params.field, params.debounceMs, () => {
      var _props$experimentalFe;
      if ((_props$experimentalFe = props.experimentalFeatures) != null && _props$experimentalFe.preventCommitWhileValidating) {
        if (props.editMode === "row") {
          return apiRef.current.unstable_setRowEditingEditCellValue(params);
        }
        return apiRef.current.unstable_setCellEditingEditCellValue(params);
      }
      const newParams = {
        id: params.id,
        field: params.field,
        props: {
          value: params.value
        }
      };
      return apiRef.current.publishEvent("editCellPropsChange", newParams, event);
    });
  }, [apiRef, props.editMode, (_props$experimentalFe2 = props.experimentalFeatures) == null ? void 0 : _props$experimentalFe2.preventCommitWhileValidating]);
  const parseValue = React103.useCallback((id, field, value) => {
    const column = apiRef.current.getColumn(field);
    return column.valueParser ? column.valueParser(value, apiRef.current.getCellParams(id, field)) : value;
  }, [apiRef]);
  const setEditCellProps = React103.useCallback((params) => {
    const {
      id,
      field,
      props: editProps
    } = params;
    logger.debug(`Setting cell props on id: ${id} field: ${field}`);
    apiRef.current.setState((state) => {
      const editRowsModel = _extends({}, state.editRows);
      editRowsModel[id] = _extends({}, state.editRows[id]);
      editRowsModel[id][field] = _extends({}, editProps, {
        value: parseValue(id, field, editProps.value)
      });
      return _extends({}, state, {
        editRows: editRowsModel
      });
    });
    apiRef.current.forceUpdate();
    const editRowsState = gridEditRowsStateSelector(apiRef.current.state);
    return editRowsState[id][field];
  }, [apiRef, logger, parseValue]);
  const setEditRowsModel = React103.useCallback((model) => {
    const currentModel = gridEditRowsStateSelector(apiRef.current.state);
    if (currentModel !== model) {
      logger.debug(`Setting editRows model`);
      apiRef.current.setState((state) => _extends({}, state, {
        editRows: model
      }));
      apiRef.current.forceUpdate();
    }
  }, [apiRef, logger]);
  const getEditRowsModel = React103.useCallback(() => gridEditRowsStateSelector(apiRef.current.state), [apiRef]);
  const preventTextSelection = React103.useCallback((params, event) => {
    const isMoreThanOneClick = event.detail > 1;
    if (params.isEditable && params.cellMode === GridCellModes.View && isMoreThanOneClick) {
      event.preventDefault();
    }
  }, []);
  useGridApiEventHandler(apiRef, "cellMouseDown", preventTextSelection);
  useGridApiOptionHandler(apiRef, "editCellPropsChange", props.onEditCellPropsChange);
  const editingSharedApi = {
    isCellEditable,
    setEditRowsModel,
    getEditRowsModel,
    setEditCellValue,
    unstable_setEditCellProps: setEditCellProps,
    unstable_parseValue: parseValue,
    unstable_runPendingEditCellValueMutation: runPendingEditCellValueMutation
  };
  useGridApiMethod(apiRef, editingSharedApi, "EditRowApi");
  React103.useEffect(() => {
    if (props.editRowsModel !== void 0) {
      apiRef.current.setEditRowsModel(props.editRowsModel);
    }
  }, [apiRef, props.editRowsModel]);
}

// node_modules/@mui/x-data-grid/hooks/features/editRows/useGridEditing.new.js
init_extends();
var React106 = __toESM(require_react());

// node_modules/@mui/x-data-grid/hooks/features/editRows/useGridCellEditing.new.js
init_objectWithoutPropertiesLoose();
init_extends();
var React104 = __toESM(require_react());
var _excluded44 = ["id", "field"];
var _excluded213 = ["id", "field"];
var missingOnProcessRowUpdateErrorWarning = buildWarning(["MUI: A call to `processRowUpdate` threw an error which was not handled because `onProcessRowUpdateError` is missing.", "To handle the error pass a callback to the `onProcessRowUpdateError` prop, e.g. `<DataGrid onProcessRowUpdateError={(error) => ...} />`.", "For more detail, see http://mui.com/components/data-grid/editing/#persistence."], "error");
var useGridCellEditing = (apiRef, props) => {
  const [cellModesModel, setCellModesModel] = React104.useState({});
  const cellModesModelRef = React104.useRef(cellModesModel);
  const prevCellModesModel = React104.useRef({});
  const {
    processRowUpdate,
    onProcessRowUpdateError,
    cellModesModel: cellModesModelProp,
    onCellModesModelChange,
    signature
  } = props;
  const runIfEditModeIsCell = (callback) => (...args) => {
    if (props.editMode === GridEditModes.Cell) {
      callback(...args);
    }
  };
  const throwIfNotEditable = React104.useCallback((id, field) => {
    const params = apiRef.current.getCellParams(id, field);
    if (!apiRef.current.isCellEditable(params)) {
      throw new Error(`MUI: The cell with id=${id} and field=${field} is not editable.`);
    }
  }, [apiRef]);
  const throwIfNotInMode = React104.useCallback((id, field, mode) => {
    if (apiRef.current.getCellMode(id, field) !== mode) {
      throw new Error(`MUI: The cell with id=${id} and field=${field} is not in ${mode} mode.`);
    }
  }, [apiRef]);
  const handleCellDoubleClick = React104.useCallback((params, event) => {
    if (!params.isEditable) {
      return;
    }
    if (params.cellMode === GridCellModes.Edit) {
      return;
    }
    const newParams = _extends({}, params, {
      reason: GridCellEditStartReasons.cellDoubleClick
    });
    apiRef.current.publishEvent("cellEditStart", newParams, event);
  }, [apiRef]);
  const handleCellFocusOut = React104.useCallback((params, event) => {
    if (params.cellMode === GridCellModes.View) {
      return;
    }
    if (apiRef.current.getCellMode(params.id, params.field) === GridCellModes.View) {
      return;
    }
    const newParams = _extends({}, params, {
      reason: GridCellEditStopReasons.cellFocusOut
    });
    apiRef.current.publishEvent("cellEditStop", newParams, event);
  }, [apiRef]);
  const handleCellKeyDown = React104.useCallback((params, event) => {
    if (params.cellMode === GridCellModes.Edit) {
      if (event.which === 229) {
        return;
      }
      let reason;
      if (event.key === "Escape") {
        reason = GridCellEditStopReasons.escapeKeyDown;
      } else if (event.key === "Enter") {
        reason = GridCellEditStopReasons.enterKeyDown;
      } else if (event.key === "Tab") {
        reason = event.shiftKey ? GridCellEditStopReasons.shiftTabKeyDown : GridCellEditStopReasons.tabKeyDown;
        event.preventDefault();
      }
      if (reason) {
        const newParams = _extends({}, params, {
          reason
        });
        apiRef.current.publishEvent("cellEditStop", newParams, event);
      }
    } else if (params.isEditable) {
      let reason;
      if (isPrintableKey(event)) {
        reason = GridCellEditStartReasons.printableKeyDown;
      } else if ((event.ctrlKey || event.metaKey) && event.key === "v") {
        reason = GridCellEditStartReasons.printableKeyDown;
      } else if (event.key === "Enter") {
        reason = GridCellEditStartReasons.enterKeyDown;
      } else if (event.key === "Delete" || event.key === "Backspace") {
        reason = GridCellEditStartReasons.deleteKeyDown;
      }
      if (reason) {
        const newParams = _extends({}, params, {
          reason
        });
        apiRef.current.publishEvent("cellEditStart", newParams, event);
      }
    }
  }, [apiRef]);
  const handleCellEditStart = React104.useCallback((params) => {
    const {
      id,
      field,
      reason
    } = params;
    const startCellEditModeParams = {
      id,
      field
    };
    if (reason === GridCellEditStartReasons.deleteKeyDown || reason === GridCellEditStartReasons.printableKeyDown) {
      startCellEditModeParams.deleteValue = true;
    }
    apiRef.current.startCellEditMode(startCellEditModeParams);
  }, [apiRef]);
  const handleCellEditStop = React104.useCallback((params) => {
    const {
      id,
      field,
      reason
    } = params;
    apiRef.current.unstable_runPendingEditCellValueMutation(id, field);
    let cellToFocusAfter;
    if (reason === GridCellEditStopReasons.enterKeyDown) {
      cellToFocusAfter = "below";
    } else if (reason === GridCellEditStopReasons.tabKeyDown) {
      cellToFocusAfter = "right";
    } else if (reason === GridCellEditStopReasons.shiftTabKeyDown) {
      cellToFocusAfter = "left";
    }
    let ignoreModifications = reason === "escapeKeyDown";
    const editingState = gridEditRowsStateSelector(apiRef.current.state);
    if (editingState[id][field].isProcessingProps && !props.disableIgnoreModificationsIfProcessingProps) {
      ignoreModifications = true;
    }
    apiRef.current.stopCellEditMode({
      id,
      field,
      ignoreModifications,
      cellToFocusAfter
    });
  }, [apiRef, props.disableIgnoreModificationsIfProcessingProps]);
  useGridApiEventHandler(apiRef, "cellDoubleClick", runIfEditModeIsCell(handleCellDoubleClick));
  useGridApiEventHandler(apiRef, "cellFocusOut", runIfEditModeIsCell(handleCellFocusOut));
  useGridApiEventHandler(apiRef, "cellKeyDown", runIfEditModeIsCell(handleCellKeyDown));
  useGridApiEventHandler(apiRef, "cellEditStart", runIfEditModeIsCell(handleCellEditStart));
  useGridApiEventHandler(apiRef, "cellEditStop", runIfEditModeIsCell(handleCellEditStop));
  useGridApiOptionHandler(apiRef, "cellEditStart", props.onCellEditStart);
  useGridApiOptionHandler(apiRef, "cellEditStop", props.onCellEditStop);
  const getCellMode = React104.useCallback((id, field) => {
    const editingState = gridEditRowsStateSelector(apiRef.current.state);
    const isEditing = editingState[id] && editingState[id][field];
    return isEditing ? GridCellModes.Edit : GridCellModes.View;
  }, [apiRef]);
  const updateCellModesModel = React104.useCallback((newModel) => {
    const isNewModelDifferentFromProp = newModel !== props.cellModesModel;
    if (onCellModesModelChange && isNewModelDifferentFromProp) {
      const details = signature === GridSignature.DataGridPro ? {
        api: apiRef.current
      } : {};
      onCellModesModelChange(newModel, details);
    }
    if (props.cellModesModel && isNewModelDifferentFromProp) {
      return;
    }
    setCellModesModel(newModel);
    cellModesModelRef.current = newModel;
    apiRef.current.publishEvent("cellModesModelChange", newModel);
  }, [apiRef, onCellModesModelChange, props.cellModesModel, signature]);
  const updateFieldInCellModesModel = React104.useCallback((id, field, newProps) => {
    const newModel = _extends({}, cellModesModelRef.current);
    if (newProps !== null) {
      newModel[id] = _extends({}, newModel[id], {
        [field]: _extends({}, newProps)
      });
    } else {
      const _newModel$id = newModel[id], otherFields = _objectWithoutPropertiesLoose(_newModel$id, [field].map(_toPropertyKey));
      newModel[id] = otherFields;
      if (Object.keys(newModel[id]).length === 0) {
        delete newModel[id];
      }
    }
    updateCellModesModel(newModel);
  }, [updateCellModesModel]);
  const updateOrDeleteFieldState = React104.useCallback((id, field, newProps) => {
    apiRef.current.setState((state) => {
      const newEditingState = _extends({}, state.editRows);
      if (newProps !== null) {
        newEditingState[id] = _extends({}, newEditingState[id], {
          [field]: _extends({}, newProps)
        });
      } else {
        delete newEditingState[id][field];
        if (Object.keys(newEditingState[id]).length === 0) {
          delete newEditingState[id];
        }
      }
      return _extends({}, state, {
        editRows: newEditingState
      });
    });
    apiRef.current.forceUpdate();
  }, [apiRef]);
  const startCellEditMode = React104.useCallback((params) => {
    const {
      id,
      field
    } = params, other = _objectWithoutPropertiesLoose(params, _excluded44);
    throwIfNotEditable(id, field);
    throwIfNotInMode(id, field, GridCellModes.View);
    updateFieldInCellModesModel(id, field, _extends({
      mode: GridCellModes.Edit
    }, other));
  }, [throwIfNotEditable, throwIfNotInMode, updateFieldInCellModesModel]);
  const updateStateToStartCellEditMode = React104.useCallback((params) => {
    const {
      id,
      field,
      deleteValue
    } = params;
    const newProps = {
      value: deleteValue ? "" : apiRef.current.getCellValue(id, field),
      error: false,
      isProcessingProps: false
    };
    updateOrDeleteFieldState(id, field, newProps);
    apiRef.current.setCellFocus(id, field);
  }, [apiRef, updateOrDeleteFieldState]);
  const stopCellEditMode = React104.useCallback((params) => {
    const {
      id,
      field
    } = params, other = _objectWithoutPropertiesLoose(params, _excluded213);
    throwIfNotInMode(id, field, GridCellModes.Edit);
    updateFieldInCellModesModel(id, field, _extends({
      mode: GridCellModes.View
    }, other));
  }, [throwIfNotInMode, updateFieldInCellModesModel]);
  const updateStateToStopCellEditMode = React104.useCallback(async (params) => {
    const {
      id,
      field,
      ignoreModifications,
      cellToFocusAfter = "none"
    } = params;
    throwIfNotInMode(id, field, GridCellModes.Edit);
    apiRef.current.unstable_runPendingEditCellValueMutation(id, field);
    const finishCellEditMode = () => {
      updateOrDeleteFieldState(id, field, null);
      updateFieldInCellModesModel(id, field, null);
      if (cellToFocusAfter !== "none") {
        apiRef.current.unstable_moveFocusToRelativeCell(id, field, cellToFocusAfter);
      }
    };
    if (ignoreModifications) {
      finishCellEditMode();
      return;
    }
    const editingState = gridEditRowsStateSelector(apiRef.current.state);
    const {
      error,
      isProcessingProps
    } = editingState[id][field];
    if (error || isProcessingProps) {
      prevCellModesModel.current[id][field].mode = GridCellModes.Edit;
      updateFieldInCellModesModel(id, field, {
        mode: GridCellModes.Edit
      });
      return;
    }
    const rowUpdate = apiRef.current.unstable_getRowWithUpdatedValuesFromCellEditing(id, field);
    if (processRowUpdate) {
      const handleError = (errorThrown) => {
        prevCellModesModel.current[id][field].mode = GridCellModes.Edit;
        if (onProcessRowUpdateError) {
          onProcessRowUpdateError(errorThrown);
        } else {
          missingOnProcessRowUpdateErrorWarning();
        }
      };
      try {
        const row = apiRef.current.getRow(id);
        Promise.resolve(processRowUpdate(rowUpdate, row)).then((finalRowUpdate) => {
          apiRef.current.updateRows([finalRowUpdate]);
          finishCellEditMode();
        }).catch(handleError);
      } catch (errorThrown) {
        handleError(errorThrown);
      }
    } else {
      apiRef.current.updateRows([rowUpdate]);
      finishCellEditMode();
    }
  }, [apiRef, onProcessRowUpdateError, processRowUpdate, throwIfNotInMode, updateFieldInCellModesModel, updateOrDeleteFieldState]);
  const setCellEditingEditCellValue = React104.useCallback(async (params) => {
    var _editingState$id, _editingState$id$fiel;
    const {
      id,
      field,
      value,
      debounceMs,
      unstable_skipValueParser: skipValueParser
    } = params;
    throwIfNotEditable(id, field);
    throwIfNotInMode(id, field, GridCellModes.Edit);
    const column = apiRef.current.getColumn(field);
    const row = apiRef.current.getRow(id);
    let parsedValue = value;
    if (column.valueParser && !skipValueParser) {
      parsedValue = column.valueParser(value, apiRef.current.getCellParams(id, field));
    }
    let editingState = gridEditRowsStateSelector(apiRef.current.state);
    let newProps = _extends({}, editingState[id][field], {
      value: parsedValue,
      changeReason: debounceMs ? "debouncedSetEditCellValue" : "setEditCellValue"
    });
    if (column.preProcessEditCellProps) {
      const hasChanged = value !== editingState[id][field].value;
      newProps = _extends({}, newProps, {
        isProcessingProps: true
      });
      updateOrDeleteFieldState(id, field, newProps);
      newProps = await Promise.resolve(column.preProcessEditCellProps({
        id,
        row,
        props: newProps,
        hasChanged
      }));
    }
    if (apiRef.current.getCellMode(id, field) === GridCellModes.View) {
      return false;
    }
    editingState = gridEditRowsStateSelector(apiRef.current.state);
    newProps = _extends({}, newProps, {
      isProcessingProps: false
    });
    newProps.value = column.preProcessEditCellProps ? editingState[id][field].value : parsedValue;
    updateOrDeleteFieldState(id, field, newProps);
    editingState = gridEditRowsStateSelector(apiRef.current.state);
    return !((_editingState$id = editingState[id]) != null && (_editingState$id$fiel = _editingState$id[field]) != null && _editingState$id$fiel.error);
  }, [apiRef, throwIfNotEditable, throwIfNotInMode, updateOrDeleteFieldState]);
  const getRowWithUpdatedValuesFromCellEditing = React104.useCallback((id, field) => {
    const column = apiRef.current.getColumn(field);
    const editingState = gridEditRowsStateSelector(apiRef.current.state);
    const {
      value
    } = editingState[id][field];
    const row = apiRef.current.getRow(id);
    return column.valueSetter ? column.valueSetter({
      value,
      row
    }) : _extends({}, row, {
      [field]: value
    });
  }, [apiRef]);
  const editingApi = {
    getCellMode,
    startCellEditMode,
    stopCellEditMode,
    unstable_setCellEditingEditCellValue: setCellEditingEditCellValue,
    unstable_getRowWithUpdatedValuesFromCellEditing: getRowWithUpdatedValuesFromCellEditing
  };
  useGridApiMethod(apiRef, editingApi, "EditingApi");
  React104.useEffect(() => {
    if (cellModesModelProp) {
      updateCellModesModel(cellModesModelProp);
    }
  }, [cellModesModelProp, updateCellModesModel]);
  React104.useEffect(() => {
    const idToIdLookup = gridRowsIdToIdLookupSelector(apiRef);
    const copyOfPrevCellModes = prevCellModesModel.current;
    prevCellModesModel.current = deepClone(cellModesModel);
    Object.entries(cellModesModel).forEach(([id, fields]) => {
      Object.entries(fields).forEach(([field, params]) => {
        var _copyOfPrevCellModes$, _copyOfPrevCellModes$2, _idToIdLookup$id;
        const prevMode = ((_copyOfPrevCellModes$ = copyOfPrevCellModes[id]) == null ? void 0 : (_copyOfPrevCellModes$2 = _copyOfPrevCellModes$[field]) == null ? void 0 : _copyOfPrevCellModes$2.mode) || GridCellModes.View;
        const originalId = (_idToIdLookup$id = idToIdLookup[id]) != null ? _idToIdLookup$id : id;
        if (params.mode === GridCellModes.Edit && prevMode === GridCellModes.View) {
          updateStateToStartCellEditMode(_extends({
            id: originalId,
            field
          }, params));
        } else if (params.mode === GridCellModes.View && prevMode === GridCellModes.Edit) {
          updateStateToStopCellEditMode(_extends({
            id: originalId,
            field
          }, params));
        }
      });
    });
  }, [apiRef, cellModesModel, updateStateToStartCellEditMode, updateStateToStopCellEditMode]);
};

// node_modules/@mui/x-data-grid/hooks/features/editRows/useGridRowEditing.new.js
init_objectWithoutPropertiesLoose();
init_extends();
var React105 = __toESM(require_react());
var _excluded45 = ["id"];
var _excluded214 = ["id"];
var missingOnProcessRowUpdateErrorWarning2 = buildWarning(["MUI: A call to `processRowUpdate` threw an error which was not handled because `onProcessRowUpdateError` is missing.", "To handle the error pass a callback to the `onProcessRowUpdateError` prop, e.g. `<DataGrid onProcessRowUpdateError={(error) => ...} />`.", "For more detail, see http://mui.com/components/data-grid/editing/#persistence."], "error");
var useGridRowEditing2 = (apiRef, props) => {
  const [rowModesModel, setRowModesModel] = React105.useState({});
  const rowModesModelRef = React105.useRef(rowModesModel);
  const prevRowModesModel = React105.useRef({});
  const focusTimeout = React105.useRef(null);
  const nextFocusedCell = React105.useRef(null);
  const {
    processRowUpdate,
    onProcessRowUpdateError,
    rowModesModel: rowModesModelProp,
    onRowModesModelChange,
    signature
  } = props;
  const runIfEditModeIsRow = (callback) => (...args) => {
    if (props.editMode === GridEditModes.Row) {
      callback(...args);
    }
  };
  const throwIfNotEditable = React105.useCallback((id, field) => {
    const params = apiRef.current.getCellParams(id, field);
    if (!apiRef.current.isCellEditable(params)) {
      throw new Error(`MUI: The cell with id=${id} and field=${field} is not editable.`);
    }
  }, [apiRef]);
  const throwIfNotInMode = React105.useCallback((id, mode) => {
    if (apiRef.current.getRowMode(id) !== mode) {
      throw new Error(`MUI: The row with id=${id} is not in ${mode} mode.`);
    }
  }, [apiRef]);
  const handleCellDoubleClick = React105.useCallback((params, event) => {
    if (!params.isEditable) {
      return;
    }
    if (apiRef.current.getRowMode(params.id) === GridRowModes.Edit) {
      return;
    }
    const rowParams = apiRef.current.getRowParams(params.id);
    const newParams = _extends({}, rowParams, {
      field: params.field,
      reason: GridRowEditStartReasons.cellDoubleClick
    });
    apiRef.current.publishEvent("rowEditStart", newParams, event);
  }, [apiRef]);
  const handleCellFocusIn = React105.useCallback((params) => {
    nextFocusedCell.current = params;
  }, []);
  const handleCellFocusOut = React105.useCallback((params, event) => {
    if (!params.isEditable) {
      return;
    }
    if (apiRef.current.getRowMode(params.id) === GridRowModes.View) {
      return;
    }
    nextFocusedCell.current = null;
    focusTimeout.current = setTimeout(() => {
      var _nextFocusedCell$curr;
      focusTimeout.current = null;
      if (((_nextFocusedCell$curr = nextFocusedCell.current) == null ? void 0 : _nextFocusedCell$curr.id) !== params.id) {
        if (!apiRef.current.getRow(params.id)) {
          return;
        }
        if (apiRef.current.getRowMode(params.id) === GridRowModes.View) {
          return;
        }
        const rowParams = apiRef.current.getRowParams(params.id);
        const newParams = _extends({}, rowParams, {
          field: params.field,
          reason: GridRowEditStopReasons.rowFocusOut
        });
        apiRef.current.publishEvent("rowEditStop", newParams, event);
      }
    });
  }, [apiRef]);
  React105.useEffect(() => {
    return () => {
      clearTimeout(focusTimeout.current);
    };
  }, []);
  const handleCellKeyDown = React105.useCallback((params, event) => {
    if (params.cellMode === GridRowModes.Edit) {
      if (event.which === 229) {
        return;
      }
      let reason;
      if (event.key === "Escape") {
        reason = GridRowEditStopReasons.escapeKeyDown;
      } else if (event.key === "Enter") {
        reason = GridRowEditStopReasons.enterKeyDown;
      } else if (event.key === "Tab") {
        const columnFields = gridColumnFieldsSelector(apiRef).filter((field) => apiRef.current.isCellEditable(apiRef.current.getCellParams(params.id, field)));
        if (event.shiftKey) {
          if (params.field === columnFields[0]) {
            reason = GridRowEditStopReasons.shiftTabKeyDown;
          }
        } else if (params.field === columnFields[columnFields.length - 1]) {
          reason = GridRowEditStopReasons.tabKeyDown;
        }
        if (reason) {
          event.preventDefault();
        }
      }
      if (reason) {
        const rowParams = apiRef.current.getRowParams(params.id);
        const newParams = _extends({}, rowParams, {
          reason,
          field: params.field
        });
        apiRef.current.publishEvent("rowEditStop", newParams, event);
      }
    } else if (params.isEditable) {
      let reason;
      if (isPrintableKey(event)) {
        reason = GridRowEditStartReasons.printableKeyDown;
      } else if ((event.ctrlKey || event.metaKey) && event.key === "v") {
        reason = GridRowEditStartReasons.printableKeyDown;
      } else if (event.key === "Enter") {
        reason = GridRowEditStartReasons.enterKeyDown;
      } else if (event.key === "Delete" || event.key === "Backspace") {
        reason = GridRowEditStartReasons.deleteKeyDown;
      }
      if (reason) {
        const rowParams = apiRef.current.getRowParams(params.id);
        const newParams = _extends({}, rowParams, {
          field: params.field,
          reason
        });
        apiRef.current.publishEvent("rowEditStart", newParams, event);
      }
    }
  }, [apiRef]);
  const handleRowEditStart = React105.useCallback((params) => {
    const {
      id,
      field,
      reason
    } = params;
    const startRowEditModeParams = {
      id,
      fieldToFocus: field
    };
    if (reason === GridRowEditStartReasons.deleteKeyDown || reason === GridRowEditStartReasons.printableKeyDown) {
      startRowEditModeParams.deleteValue = !!field;
    }
    apiRef.current.startRowEditMode(startRowEditModeParams);
  }, [apiRef]);
  const handleRowEditStop = React105.useCallback((params) => {
    const {
      id,
      reason,
      field
    } = params;
    apiRef.current.unstable_runPendingEditCellValueMutation(id);
    let cellToFocusAfter;
    if (reason === GridRowEditStopReasons.enterKeyDown) {
      cellToFocusAfter = "below";
    } else if (reason === GridRowEditStopReasons.tabKeyDown) {
      cellToFocusAfter = "right";
    } else if (reason === GridRowEditStopReasons.shiftTabKeyDown) {
      cellToFocusAfter = "left";
    }
    let ignoreModifications = reason === "escapeKeyDown";
    const editingState = gridEditRowsStateSelector(apiRef.current.state);
    if (!ignoreModifications && !props.disableIgnoreModificationsIfProcessingProps) {
      ignoreModifications = Object.values(editingState[id]).some((fieldProps) => {
        return fieldProps.isProcessingProps;
      });
    }
    apiRef.current.stopRowEditMode({
      id,
      ignoreModifications,
      field,
      cellToFocusAfter
    });
  }, [apiRef, props.disableIgnoreModificationsIfProcessingProps]);
  useGridApiEventHandler(apiRef, "cellDoubleClick", runIfEditModeIsRow(handleCellDoubleClick));
  useGridApiEventHandler(apiRef, "cellFocusIn", runIfEditModeIsRow(handleCellFocusIn));
  useGridApiEventHandler(apiRef, "cellFocusOut", runIfEditModeIsRow(handleCellFocusOut));
  useGridApiEventHandler(apiRef, "cellKeyDown", runIfEditModeIsRow(handleCellKeyDown));
  useGridApiEventHandler(apiRef, "rowEditStart", runIfEditModeIsRow(handleRowEditStart));
  useGridApiEventHandler(apiRef, "rowEditStop", runIfEditModeIsRow(handleRowEditStop));
  useGridApiOptionHandler(apiRef, "rowEditStart", props.onRowEditStart);
  useGridApiOptionHandler(apiRef, "rowEditStop", props.onRowEditStop);
  const getRowMode = React105.useCallback((id) => {
    if (props.editMode === GridEditModes.Cell) {
      return GridRowModes.View;
    }
    const editingState = gridEditRowsStateSelector(apiRef.current.state);
    const isEditing = editingState[id] && Object.keys(editingState[id]).length > 0;
    return isEditing ? GridRowModes.Edit : GridRowModes.View;
  }, [apiRef, props.editMode]);
  const updateRowModesModel = React105.useCallback((newModel) => {
    const isNewModelDifferentFromProp = newModel !== props.rowModesModel;
    if (onRowModesModelChange && isNewModelDifferentFromProp) {
      const details = signature === GridSignature.DataGridPro ? {
        api: apiRef.current
      } : {};
      onRowModesModelChange(newModel, details);
    }
    if (props.rowModesModel && isNewModelDifferentFromProp) {
      return;
    }
    setRowModesModel(newModel);
    rowModesModelRef.current = newModel;
    apiRef.current.publishEvent("rowModesModelChange", newModel);
  }, [apiRef, onRowModesModelChange, props.rowModesModel, signature]);
  const updateRowInRowModesModel = React105.useCallback((id, newProps) => {
    const newModel = _extends({}, rowModesModelRef.current);
    if (newProps !== null) {
      newModel[id] = _extends({}, newProps);
    } else {
      delete newModel[id];
    }
    updateRowModesModel(newModel);
  }, [updateRowModesModel]);
  const updateOrDeleteRowState = React105.useCallback((id, newProps) => {
    apiRef.current.setState((state) => {
      const newEditingState = _extends({}, state.editRows);
      if (newProps !== null) {
        newEditingState[id] = newProps;
      } else {
        delete newEditingState[id];
      }
      return _extends({}, state, {
        editRows: newEditingState
      });
    });
    apiRef.current.forceUpdate();
  }, [apiRef]);
  const updateOrDeleteFieldState = React105.useCallback((id, field, newProps) => {
    apiRef.current.setState((state) => {
      const newEditingState = _extends({}, state.editRows);
      if (newProps !== null) {
        newEditingState[id] = _extends({}, newEditingState[id], {
          [field]: _extends({}, newProps)
        });
      } else {
        delete newEditingState[id][field];
        if (Object.keys(newEditingState[id]).length === 0) {
          delete newEditingState[id];
        }
      }
      return _extends({}, state, {
        editRows: newEditingState
      });
    });
    apiRef.current.forceUpdate();
  }, [apiRef]);
  const startRowEditMode = React105.useCallback((params) => {
    const {
      id
    } = params, other = _objectWithoutPropertiesLoose(params, _excluded45);
    throwIfNotInMode(id, GridRowModes.View);
    updateRowInRowModesModel(id, _extends({
      mode: GridRowModes.Edit
    }, other));
  }, [throwIfNotInMode, updateRowInRowModesModel]);
  const updateStateToStartRowEditMode = React105.useCallback((params) => {
    const {
      id,
      fieldToFocus,
      deleteValue
    } = params;
    const columnFields = gridColumnFieldsSelector(apiRef);
    const newProps = columnFields.reduce((acc, field) => {
      const cellParams = apiRef.current.getCellParams(id, field);
      if (!cellParams.isEditable) {
        return acc;
      }
      const shouldDeleteValue = deleteValue && fieldToFocus === field;
      acc[field] = {
        value: shouldDeleteValue ? "" : apiRef.current.getCellValue(id, field),
        error: false,
        isProcessingProps: false
      };
      return acc;
    }, {});
    updateOrDeleteRowState(id, newProps);
    if (fieldToFocus) {
      apiRef.current.setCellFocus(id, fieldToFocus);
    }
  }, [apiRef, updateOrDeleteRowState]);
  const stopRowEditMode = React105.useCallback((params) => {
    const {
      id
    } = params, other = _objectWithoutPropertiesLoose(params, _excluded214);
    throwIfNotInMode(id, GridRowModes.Edit);
    updateRowInRowModesModel(id, _extends({
      mode: GridRowModes.View
    }, other));
  }, [throwIfNotInMode, updateRowInRowModesModel]);
  const updateStateToStopRowEditMode = React105.useCallback((params) => {
    const {
      id,
      ignoreModifications,
      field: focusedField,
      cellToFocusAfter = "none"
    } = params;
    apiRef.current.unstable_runPendingEditCellValueMutation(id);
    const finishRowEditMode = () => {
      if (cellToFocusAfter !== "none" && focusedField) {
        apiRef.current.unstable_moveFocusToRelativeCell(id, focusedField, cellToFocusAfter);
      }
      updateOrDeleteRowState(id, null);
      updateRowInRowModesModel(id, null);
    };
    if (ignoreModifications) {
      finishRowEditMode();
      return;
    }
    const editingState = gridEditRowsStateSelector(apiRef.current.state);
    const row = apiRef.current.getRow(id);
    const isSomeFieldProcessingProps = Object.values(editingState[id]).some((fieldProps) => fieldProps.isProcessingProps);
    if (isSomeFieldProcessingProps) {
      prevRowModesModel.current[id].mode = GridRowModes.Edit;
      return;
    }
    const hasSomeFieldWithError = Object.values(editingState[id]).some((fieldProps) => fieldProps.error);
    if (hasSomeFieldWithError) {
      prevRowModesModel.current[id].mode = GridRowModes.Edit;
      updateRowInRowModesModel(id, {
        mode: GridRowModes.Edit
      });
      return;
    }
    const rowUpdate = apiRef.current.unstable_getRowWithUpdatedValuesFromRowEditing(id);
    if (processRowUpdate) {
      const handleError = (errorThrown) => {
        prevRowModesModel.current[id].mode = GridRowModes.Edit;
        if (onProcessRowUpdateError) {
          onProcessRowUpdateError(errorThrown);
        } else {
          missingOnProcessRowUpdateErrorWarning2();
        }
      };
      try {
        Promise.resolve(processRowUpdate(rowUpdate, row)).then((finalRowUpdate) => {
          apiRef.current.updateRows([finalRowUpdate]);
          finishRowEditMode();
        }).catch(handleError);
      } catch (errorThrown) {
        handleError(errorThrown);
      }
    } else {
      apiRef.current.updateRows([rowUpdate]);
      finishRowEditMode();
    }
  }, [apiRef, onProcessRowUpdateError, processRowUpdate, updateOrDeleteRowState, updateRowInRowModesModel]);
  const setRowEditingEditCellValue = React105.useCallback((params) => {
    const {
      id,
      field,
      value,
      debounceMs,
      unstable_skipValueParser: skipValueParser
    } = params;
    throwIfNotEditable(id, field);
    const column = apiRef.current.getColumn(field);
    const row = apiRef.current.getRow(id);
    let parsedValue = value;
    if (column.valueParser && !skipValueParser) {
      parsedValue = column.valueParser(value, apiRef.current.getCellParams(id, field));
    }
    let editingState = gridEditRowsStateSelector(apiRef.current.state);
    let newProps = _extends({}, editingState[id][field], {
      value: parsedValue,
      changeReason: debounceMs ? "debouncedSetEditCellValue" : "setEditCellValue"
    });
    if (!column.preProcessEditCellProps) {
      updateOrDeleteFieldState(id, field, newProps);
    }
    return new Promise((resolve) => {
      const promises = [];
      if (column.preProcessEditCellProps) {
        const hasChanged = newProps.value !== editingState[id][field].value;
        newProps = _extends({}, newProps, {
          isProcessingProps: true
        });
        updateOrDeleteFieldState(id, field, newProps);
        const _editingState$id = editingState[id], otherFieldsProps = _objectWithoutPropertiesLoose(_editingState$id, [field].map(_toPropertyKey));
        const promise = Promise.resolve(column.preProcessEditCellProps({
          id,
          row,
          props: newProps,
          hasChanged,
          otherFieldsProps
        })).then((processedProps) => {
          if (apiRef.current.getRowMode(id) === GridRowModes.View) {
            resolve(false);
            return;
          }
          editingState = gridEditRowsStateSelector(apiRef.current.state);
          processedProps = _extends({}, processedProps, {
            isProcessingProps: false
          });
          processedProps.value = column.preProcessEditCellProps ? editingState[id][field].value : parsedValue;
          updateOrDeleteFieldState(id, field, processedProps);
        });
        promises.push(promise);
      }
      Object.entries(editingState[id]).forEach(([thisField, fieldProps]) => {
        if (thisField === field) {
          return;
        }
        const fieldColumn = apiRef.current.getColumn(thisField);
        if (!fieldColumn.preProcessEditCellProps) {
          return;
        }
        fieldProps = _extends({}, fieldProps, {
          isProcessingProps: true
        });
        updateOrDeleteFieldState(id, thisField, fieldProps);
        editingState = gridEditRowsStateSelector(apiRef.current.state);
        const _editingState$id2 = editingState[id], otherFieldsProps = _objectWithoutPropertiesLoose(_editingState$id2, [thisField].map(_toPropertyKey));
        const promise = Promise.resolve(fieldColumn.preProcessEditCellProps({
          id,
          row,
          props: fieldProps,
          hasChanged: false,
          otherFieldsProps
        })).then((processedProps) => {
          if (apiRef.current.getRowMode(id) === GridRowModes.View) {
            resolve(false);
            return;
          }
          processedProps = _extends({}, processedProps, {
            isProcessingProps: false
          });
          updateOrDeleteFieldState(id, thisField, processedProps);
        });
        promises.push(promise);
      });
      Promise.all(promises).then(() => {
        if (apiRef.current.getRowMode(id) === GridRowModes.Edit) {
          editingState = gridEditRowsStateSelector(apiRef.current.state);
          resolve(!editingState[id][field].error);
        } else {
          resolve(false);
        }
      });
    });
  }, [apiRef, throwIfNotEditable, updateOrDeleteFieldState]);
  const getRowWithUpdatedValuesFromRowEditing = React105.useCallback((id) => {
    const editingState = gridEditRowsStateSelector(apiRef.current.state);
    const row = apiRef.current.getRow(id);
    let rowUpdate = _extends({}, row);
    Object.entries(editingState[id]).forEach(([field, fieldProps]) => {
      const column = apiRef.current.getColumn(field);
      if (column.valueSetter) {
        rowUpdate = column.valueSetter({
          value: fieldProps.value,
          row: rowUpdate
        });
      } else {
        rowUpdate[field] = fieldProps.value;
      }
    });
    return rowUpdate;
  }, [apiRef]);
  const editingApi = {
    getRowMode,
    startRowEditMode,
    stopRowEditMode,
    unstable_setRowEditingEditCellValue: setRowEditingEditCellValue,
    unstable_getRowWithUpdatedValuesFromRowEditing: getRowWithUpdatedValuesFromRowEditing
  };
  useGridApiMethod(apiRef, editingApi, "EditingApi");
  React105.useEffect(() => {
    if (rowModesModelProp) {
      updateRowModesModel(rowModesModelProp);
    }
  }, [rowModesModelProp, updateRowModesModel]);
  React105.useEffect(() => {
    const idToIdLookup = gridRowsIdToIdLookupSelector(apiRef);
    const copyOfPrevRowModesModel = prevRowModesModel.current;
    prevRowModesModel.current = deepClone(rowModesModel);
    Object.entries(rowModesModel).forEach(([id, params]) => {
      var _copyOfPrevRowModesMo, _idToIdLookup$id;
      const prevMode = ((_copyOfPrevRowModesMo = copyOfPrevRowModesModel[id]) == null ? void 0 : _copyOfPrevRowModesMo.mode) || GridRowModes.View;
      const originalId = (_idToIdLookup$id = idToIdLookup[id]) != null ? _idToIdLookup$id : id;
      if (params.mode === GridRowModes.Edit && prevMode === GridRowModes.View) {
        updateStateToStartRowEditMode(_extends({
          id: originalId
        }, params));
      } else if (params.mode === GridRowModes.View && prevMode === GridRowModes.Edit) {
        updateStateToStopRowEditMode(_extends({
          id: originalId
        }, params));
      }
    });
  }, [apiRef, rowModesModel, updateStateToStartRowEditMode, updateStateToStopRowEditMode]);
};

// node_modules/@mui/x-data-grid/hooks/features/editRows/useGridEditing.new.js
var editingStateInitializer2 = (state) => _extends({}, state, {
  editRows: {}
});
var useGridEditing2 = (apiRef, props) => {
  useGridCellEditing(apiRef, props);
  useGridRowEditing2(apiRef, props);
  const debounceMap = React106.useRef({});
  const {
    isCellEditable: isCellEditableProp
  } = props;
  const isCellEditable = React106.useCallback((params) => {
    if (params.rowNode.isAutoGenerated) {
      return false;
    }
    if (!params.colDef.editable) {
      return false;
    }
    if (!params.colDef.renderEditCell) {
      return false;
    }
    if (isCellEditableProp) {
      return isCellEditableProp(params);
    }
    if (params.rowNode.isPinned) {
      return false;
    }
    return true;
  }, [isCellEditableProp]);
  const maybeDebounce = (id, field, debounceMs, callback) => {
    if (!debounceMs) {
      callback();
      return;
    }
    if (!debounceMap.current[id]) {
      debounceMap.current[id] = {};
    }
    if (debounceMap.current[id][field]) {
      const [timeout2] = debounceMap.current[id][field];
      clearTimeout(timeout2);
    }
    const runImmediately = () => {
      const [timeout2] = debounceMap.current[id][field];
      clearTimeout(timeout2);
      callback();
      delete debounceMap.current[id][field];
    };
    const timeout = setTimeout(() => {
      callback();
      delete debounceMap.current[id][field];
    }, debounceMs);
    debounceMap.current[id][field] = [timeout, runImmediately];
  };
  React106.useEffect(() => {
    const debounces = debounceMap.current;
    return () => {
      Object.entries(debounces).forEach(([id, fields]) => {
        Object.keys(fields).forEach((field) => {
          const [timeout] = debounces[id][field];
          clearTimeout(timeout);
          delete debounces[id][field];
        });
      });
    };
  }, []);
  const runPendingEditCellValueMutation = React106.useCallback((id, field) => {
    if (!debounceMap.current[id]) {
      return;
    }
    if (!field) {
      Object.keys(debounceMap.current[id]).forEach((debouncedField) => {
        const [, runCallback] = debounceMap.current[id][debouncedField];
        runCallback();
      });
    } else if (debounceMap.current[id][field]) {
      const [, runCallback] = debounceMap.current[id][field];
      runCallback();
    }
  }, []);
  const setEditCellValue = React106.useCallback((params) => {
    const {
      id,
      field,
      debounceMs
    } = params;
    return new Promise((resolve) => {
      maybeDebounce(id, field, debounceMs, async () => {
        const setEditCellValueToCall = props.editMode === GridEditModes.Row ? apiRef.current.unstable_setRowEditingEditCellValue : apiRef.current.unstable_setCellEditingEditCellValue;
        if (apiRef.current.getCellMode(id, field) === GridCellModes.Edit) {
          const result = await setEditCellValueToCall(params);
          resolve(result);
        }
      });
    });
  }, [apiRef, props.editMode]);
  const getRowWithUpdatedValues = React106.useCallback((id, field) => {
    return props.editMode === GridEditModes.Cell ? apiRef.current.unstable_getRowWithUpdatedValuesFromCellEditing(id, field) : apiRef.current.unstable_getRowWithUpdatedValuesFromRowEditing(id);
  }, [apiRef, props.editMode]);
  const getEditCellMeta = React106.useCallback((id, field) => {
    const editingState = gridEditRowsStateSelector(apiRef.current.state);
    return {
      changeReason: editingState[id][field].changeReason
    };
  }, [apiRef]);
  const editingSharedApi = {
    isCellEditable,
    setEditCellValue,
    unstable_runPendingEditCellValueMutation: runPendingEditCellValueMutation,
    unstable_getRowWithUpdatedValues: getRowWithUpdatedValues,
    unstable_getEditCellMeta: getEditCellMeta
  };
  useGridApiMethod(apiRef, editingSharedApi, "EditingApi");
};

// node_modules/@mui/x-data-grid/hooks/features/rows/useGridRows.js
init_extends();
var React107 = __toESM(require_react());
var rowsStateInitializer = (state, props, apiRef) => {
  apiRef.current.unstable_caches.rows = createRowsInternalCache({
    rows: props.rows,
    getRowId: props.getRowId,
    loading: props.loading
  });
  return _extends({}, state, {
    rows: getRowsStateFromCache({
      apiRef,
      previousTree: null,
      rowCountProp: props.rowCount,
      loadingProp: props.loading
    })
  });
};
var useGridRows = (apiRef, props) => {
  if (true) {
    try {
      Object.freeze(props.rows);
    } catch (error) {
    }
  }
  const logger = useGridLogger(apiRef, "useGridRows");
  const currentPage = useGridVisibleRows(apiRef, props);
  const lastUpdateMs = React107.useRef(Date.now());
  const timeout = React107.useRef(null);
  const getRow = React107.useCallback((id) => {
    var _ref;
    return (_ref = gridRowsLookupSelector(apiRef)[id]) != null ? _ref : null;
  }, [apiRef]);
  const lookup = React107.useMemo(() => currentPage.rows.reduce((acc, {
    id
  }, index) => {
    acc[id] = index;
    return acc;
  }, {}), [currentPage.rows]);
  const throttledRowsChange = React107.useCallback((newCache, throttle) => {
    const run = () => {
      timeout.current = null;
      lastUpdateMs.current = Date.now();
      apiRef.current.setState((state) => _extends({}, state, {
        rows: getRowsStateFromCache({
          apiRef,
          previousTree: gridRowTreeSelector(apiRef),
          rowCountProp: props.rowCount,
          loadingProp: props.loading
        })
      }));
      apiRef.current.publishEvent("rowsSet");
      apiRef.current.forceUpdate();
    };
    if (timeout.current) {
      clearTimeout(timeout.current);
      timeout.current = null;
    }
    apiRef.current.unstable_caches.rows = newCache;
    if (!throttle) {
      run();
      return;
    }
    const throttleRemainingTimeMs = props.throttleRowsMs - (Date.now() - lastUpdateMs.current);
    if (throttleRemainingTimeMs > 0) {
      timeout.current = setTimeout(run, throttleRemainingTimeMs);
      return;
    }
    run();
  }, [props.throttleRowsMs, props.rowCount, props.loading, apiRef]);
  const setRows = React107.useCallback((rows) => {
    logger.debug(`Updating all rows, new length ${rows.length}`);
    throttledRowsChange(createRowsInternalCache({
      rows,
      getRowId: props.getRowId,
      loading: props.loading
    }), true);
  }, [logger, props.getRowId, props.loading, throttledRowsChange]);
  const updateRows = React107.useCallback((updates) => {
    if (props.signature === GridSignature.DataGrid && updates.length > 1) {
      throw new Error(["MUI: You can't update several rows at once in `apiRef.current.updateRows` on the DataGrid.", "You need to upgrade to DataGridPro or DataGridPremium component to unlock this feature."].join("\n"));
    }
    const uniqueUpdates = /* @__PURE__ */ new Map();
    updates.forEach((update) => {
      const id = getRowIdFromRowModel(update, props.getRowId, "A row was provided without id when calling updateRows():");
      if (uniqueUpdates.has(id)) {
        uniqueUpdates.set(id, _extends({}, uniqueUpdates.get(id), update));
      } else {
        uniqueUpdates.set(id, update);
      }
    });
    const deletedRowIds = [];
    const prevCache = apiRef.current.unstable_caches.rows;
    const newCache = {
      rowsBeforePartialUpdates: prevCache.rowsBeforePartialUpdates,
      loadingPropBeforePartialUpdates: prevCache.loadingPropBeforePartialUpdates,
      idRowsLookup: _extends({}, prevCache.idRowsLookup),
      idToIdLookup: _extends({}, prevCache.idToIdLookup),
      ids: [...prevCache.ids]
    };
    uniqueUpdates.forEach((partialRow, id) => {
      if (partialRow._action === "delete") {
        delete newCache.idRowsLookup[id];
        delete newCache.idToIdLookup[id];
        deletedRowIds.push(id);
        return;
      }
      const oldRow = apiRef.current.getRow(id);
      if (!oldRow) {
        newCache.idRowsLookup[id] = partialRow;
        newCache.idToIdLookup[id] = id;
        newCache.ids.push(id);
        return;
      }
      newCache.idRowsLookup[id] = _extends({}, apiRef.current.getRow(id), partialRow);
    });
    if (deletedRowIds.length > 0) {
      newCache.ids = newCache.ids.filter((id) => !deletedRowIds.includes(id));
    }
    throttledRowsChange(newCache, true);
  }, [props.signature, props.getRowId, throttledRowsChange, apiRef]);
  const getRowModels = React107.useCallback(() => {
    const allRows = gridRowIdsSelector(apiRef);
    const idRowsLookup = gridRowsLookupSelector(apiRef);
    return new Map(allRows.map((id) => [id, idRowsLookup[id]]));
  }, [apiRef]);
  const getRowsCount = React107.useCallback(() => gridRowCountSelector(apiRef), [apiRef]);
  const getAllRowIds = React107.useCallback(() => gridRowIdsSelector(apiRef), [apiRef]);
  const getRowIndexRelativeToVisibleRows = React107.useCallback((id) => lookup[id], [lookup]);
  const setRowChildrenExpansion = React107.useCallback((id, isExpanded) => {
    const currentNode = apiRef.current.getRowNode(id);
    if (!currentNode) {
      throw new Error(`MUI: No row with id #${id} found`);
    }
    const newNode = _extends({}, currentNode, {
      childrenExpanded: isExpanded
    });
    apiRef.current.setState((state) => {
      return _extends({}, state, {
        rows: _extends({}, state.rows, {
          tree: _extends({}, state.rows.tree, {
            [id]: newNode
          })
        })
      });
    });
    apiRef.current.forceUpdate();
    apiRef.current.publishEvent("rowExpansionChange", newNode);
  }, [apiRef]);
  const getRowNode = React107.useCallback((id) => {
    var _gridRowTreeSelector$;
    return (_gridRowTreeSelector$ = gridRowTreeSelector(apiRef)[id]) != null ? _gridRowTreeSelector$ : null;
  }, [apiRef]);
  const getRowGroupChildren = React107.useCallback(({
    skipAutoGeneratedRows = true,
    groupId,
    applySorting,
    applyFiltering
  }) => {
    const tree = gridRowTreeSelector(apiRef);
    let children;
    if (applySorting) {
      const groupNode = tree[groupId];
      if (!groupNode) {
        return [];
      }
      const sortedRowIds = gridSortedRowIdsSelector(apiRef);
      children = [];
      const startIndex = sortedRowIds.findIndex((id) => id === groupId) + 1;
      for (let index = startIndex; index < sortedRowIds.length && tree[sortedRowIds[index]].depth > groupNode.depth; index += 1) {
        const id = sortedRowIds[index];
        const node = tree[id];
        if (!skipAutoGeneratedRows || !node.isAutoGenerated) {
          children.push(id);
        }
      }
    } else {
      children = getTreeNodeDescendants(tree, groupId, skipAutoGeneratedRows);
    }
    if (applyFiltering) {
      const filteredRowsLookup = gridFilteredRowsLookupSelector(apiRef);
      children = children.filter((childId) => filteredRowsLookup[childId] !== false);
    }
    return children;
  }, [apiRef]);
  const setRowIndex = React107.useCallback((rowId, targetIndex) => {
    const allRows = gridRowIdsSelector(apiRef);
    const oldIndex = allRows.findIndex((row) => row === rowId);
    if (oldIndex === -1 || oldIndex === targetIndex) {
      return;
    }
    logger.debug(`Moving row ${rowId} to index ${targetIndex}`);
    const updatedRows = [...allRows];
    updatedRows.splice(targetIndex, 0, updatedRows.splice(oldIndex, 1)[0]);
    apiRef.current.setState((state) => _extends({}, state, {
      rows: _extends({}, state.rows, {
        ids: updatedRows
      })
    }));
    apiRef.current.publishEvent("rowsSet");
  }, [apiRef, logger]);
  const replaceRows = React107.useCallback((firstRowToRender, newRows) => {
    if (props.signature === GridSignature.DataGrid && newRows.length > 1) {
      throw new Error(["MUI: You can't replace rows using `apiRef.current.unstable_replaceRows` on the DataGrid.", "You need to upgrade to DataGridPro or DataGridPremium component to unlock this feature."].join("\n"));
    }
    if (newRows.length === 0) {
      return;
    }
    const allRows = gridRowIdsSelector(apiRef);
    const updatedRows = [...allRows];
    const idRowsLookup = gridRowsLookupSelector(apiRef);
    const idToIdLookup = gridRowsIdToIdLookupSelector(apiRef);
    const tree = gridRowTreeSelector(apiRef);
    const updatedIdRowsLookup = _extends({}, idRowsLookup);
    const updatedIdToIdLookup = _extends({}, idToIdLookup);
    const updatedTree = _extends({}, tree);
    const newRowEntries = newRows.map((newRowModel) => {
      const rowId = getRowIdFromRowModel(newRowModel, props.getRowId, "A row was provided without id when calling replaceRows().");
      return {
        id: rowId,
        model: newRowModel
      };
    });
    newRowEntries.forEach((row, index) => {
      const [replacedRowId] = updatedRows.splice(firstRowToRender + index, 1, row.id);
      delete updatedIdRowsLookup[replacedRowId];
      delete updatedIdToIdLookup[replacedRowId];
      delete updatedTree[replacedRowId];
    });
    newRowEntries.forEach((row) => {
      const rowTreeNodeConfig = {
        id: row.id,
        parent: null,
        depth: 0,
        groupingKey: null,
        groupingField: null
      };
      updatedIdRowsLookup[row.id] = row.model;
      updatedIdToIdLookup[row.id] = row.id;
      updatedTree[row.id] = rowTreeNodeConfig;
    });
    apiRef.current.setState((state) => _extends({}, state, {
      rows: _extends({}, state.rows, {
        idRowsLookup: updatedIdRowsLookup,
        idToIdLookup: updatedIdToIdLookup,
        tree: updatedTree,
        ids: updatedRows
      })
    }));
    apiRef.current.publishEvent("rowsSet");
  }, [apiRef, props.signature, props.getRowId]);
  const rowApi = {
    getRow,
    getRowModels,
    getRowsCount,
    getAllRowIds,
    setRows,
    setRowIndex,
    updateRows,
    setRowChildrenExpansion,
    getRowNode,
    getRowIndexRelativeToVisibleRows,
    getRowGroupChildren,
    unstable_replaceRows: replaceRows
  };
  const groupRows = React107.useCallback(() => {
    logger.info(`Row grouping pre-processing have changed, regenerating the row tree`);
    let cache;
    if (apiRef.current.unstable_caches.rows.rowsBeforePartialUpdates === props.rows) {
      cache = apiRef.current.unstable_caches.rows;
    } else {
      cache = createRowsInternalCache({
        rows: props.rows,
        getRowId: props.getRowId,
        loading: props.loading
      });
    }
    throttledRowsChange(cache, false);
  }, [logger, apiRef, props.rows, props.getRowId, props.loading, throttledRowsChange]);
  const handleStrategyProcessorChange = React107.useCallback((methodName) => {
    if (methodName === "rowTreeCreation") {
      groupRows();
    }
  }, [groupRows]);
  const handleStrategyActivityChange = React107.useCallback(() => {
    if (apiRef.current.unstable_getActiveStrategy("rowTree") !== gridRowGroupingNameSelector(apiRef)) {
      groupRows();
    }
  }, [apiRef, groupRows]);
  useGridApiEventHandler(apiRef, "activeStrategyProcessorChange", handleStrategyProcessorChange);
  useGridApiEventHandler(apiRef, "strategyAvailabilityChange", handleStrategyActivityChange);
  const applyHydrateRowsProcessor = React107.useCallback(() => {
    apiRef.current.setState((state) => _extends({}, state, {
      rows: _extends({}, state.rows, apiRef.current.unstable_applyPipeProcessors("hydrateRows", state.rows.groupingResponseBeforeRowHydration))
    }));
    apiRef.current.publishEvent("rowsSet");
    apiRef.current.forceUpdate();
  }, [apiRef]);
  useGridRegisterPipeApplier(apiRef, "hydrateRows", applyHydrateRowsProcessor);
  useGridApiMethod(apiRef, rowApi, "GridRowApi");
  React107.useEffect(() => {
    return () => {
      if (timeout.current !== null) {
        clearTimeout(timeout.current);
      }
    };
  }, []);
  const isFirstRender = React107.useRef(true);
  React107.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const areNewRowsAlreadyInState = apiRef.current.unstable_caches.rows.rowsBeforePartialUpdates === props.rows;
    const isNewLoadingAlreadyInState = apiRef.current.unstable_caches.rows.loadingPropBeforePartialUpdates === props.loading;
    if (areNewRowsAlreadyInState) {
      if (!isNewLoadingAlreadyInState) {
        apiRef.current.setState((state) => _extends({}, state, {
          rows: _extends({}, state.rows, {
            loading: props.loading
          })
        }));
        apiRef.current.unstable_caches.rows.loadingPropBeforePartialUpdates = props.loading;
        apiRef.current.forceUpdate();
      }
      return;
    }
    logger.debug(`Updating all rows, new length ${props.rows.length}`);
    throttledRowsChange(createRowsInternalCache({
      rows: props.rows,
      getRowId: props.getRowId,
      loading: props.loading
    }), false);
  }, [props.rows, props.rowCount, props.getRowId, props.loading, logger, throttledRowsChange, apiRef]);
};

// node_modules/@mui/x-data-grid/hooks/features/rows/useGridRowsPreProcessors.js
var flatRowTreeCreationMethod = ({
  ids,
  idRowsLookup,
  idToIdLookup,
  previousTree
}) => {
  const tree = {};
  for (let i = 0; i < ids.length; i += 1) {
    const rowId = ids[i];
    if (previousTree && previousTree[rowId] && previousTree[rowId].depth === 0 && previousTree[rowId].parent == null && !previousTree[rowId].isPinned) {
      tree[rowId] = previousTree[rowId];
    } else {
      tree[rowId] = {
        id: rowId,
        depth: 0,
        parent: null,
        groupingKey: "",
        groupingField: null
      };
    }
  }
  return {
    groupingName: GRID_DEFAULT_STRATEGY,
    tree,
    treeDepth: 1,
    idRowsLookup,
    idToIdLookup,
    ids
  };
};
var useGridRowsPreProcessors = (apiRef) => {
  useGridRegisterStrategyProcessor(apiRef, GRID_DEFAULT_STRATEGY, "rowTreeCreation", flatRowTreeCreationMethod);
};

// node_modules/@mui/x-data-grid/hooks/features/rows/useGridParamsApi.js
var React108 = __toESM(require_react());
var warnedOnceMissingColumn = false;
function warnMissingColumn(field) {
  console.warn([`MUI: You are calling getValue('${field}') but the column \`${field}\` is not defined.`, `Instead, you can access the data from \`params.row.${field}\`.`].join("\n"));
  warnedOnceMissingColumn = true;
}
var getCellValueWarning = buildWarning([`MUI: You are calling getValue. This method is deprecated and will be removed in the next major version.`, "Instead, you can access the data from `params.row`."]);
function useGridParamsApi(apiRef) {
  const getColumnHeaderParams = React108.useCallback((field) => ({
    field,
    colDef: apiRef.current.getColumn(field)
  }), [apiRef]);
  const getCellValueWithDeprecationWarning = React108.useCallback((...args) => {
    if (true) {
      getCellValueWarning();
    }
    return apiRef.current.getCellValue(...args);
  }, [apiRef]);
  const getRowParams = React108.useCallback((id) => {
    const row = apiRef.current.getRow(id);
    if (!row) {
      throw new Error(`No row with id #${id} found`);
    }
    const params = {
      id,
      columns: apiRef.current.getAllColumns(),
      row,
      getValue: getCellValueWithDeprecationWarning
    };
    return params;
  }, [apiRef, getCellValueWithDeprecationWarning]);
  const getBaseCellParams = React108.useCallback((id, field) => {
    const row = apiRef.current.getRow(id);
    const rowNode = apiRef.current.getRowNode(id);
    if (!row || !rowNode) {
      throw new Error(`No row with id #${id} found`);
    }
    const cellFocus = gridFocusCellSelector(apiRef);
    const cellTabIndex = gridTabIndexCellSelector(apiRef);
    const params = {
      id,
      field,
      row,
      rowNode,
      value: row[field],
      colDef: apiRef.current.getColumn(field),
      cellMode: apiRef.current.getCellMode(id, field),
      getValue: getCellValueWithDeprecationWarning,
      api: apiRef.current,
      hasFocus: cellFocus !== null && cellFocus.field === field && cellFocus.id === id,
      tabIndex: cellTabIndex && cellTabIndex.field === field && cellTabIndex.id === id ? 0 : -1
    };
    return params;
  }, [apiRef, getCellValueWithDeprecationWarning]);
  const getCellParams = React108.useCallback((id, field) => {
    const colDef = apiRef.current.getColumn(field);
    const value = apiRef.current.getCellValue(id, field);
    const row = apiRef.current.getRow(id);
    const rowNode = apiRef.current.getRowNode(id);
    if (!row || !rowNode) {
      throw new Error(`No row with id #${id} found`);
    }
    const cellFocus = gridFocusCellSelector(apiRef);
    const cellTabIndex = gridTabIndexCellSelector(apiRef);
    const params = {
      id,
      field,
      row,
      rowNode,
      colDef,
      cellMode: apiRef.current.getCellMode(id, field),
      getValue: getCellValueWithDeprecationWarning,
      hasFocus: cellFocus !== null && cellFocus.field === field && cellFocus.id === id,
      tabIndex: cellTabIndex && cellTabIndex.field === field && cellTabIndex.id === id ? 0 : -1,
      value,
      formattedValue: value
    };
    if (colDef && colDef.valueFormatter) {
      params.formattedValue = colDef.valueFormatter({
        id,
        field: params.field,
        value: params.value,
        api: apiRef.current
      });
    }
    params.isEditable = colDef && apiRef.current.isCellEditable(params);
    return params;
  }, [apiRef, getCellValueWithDeprecationWarning]);
  const getCellValue = React108.useCallback((id, field) => {
    const colDef = apiRef.current.getColumn(field);
    if (true) {
      if (!colDef && !warnedOnceMissingColumn) {
        warnMissingColumn(field);
      }
    }
    if (!colDef || !colDef.valueGetter) {
      const rowModel = apiRef.current.getRow(id);
      if (!rowModel) {
        throw new Error(`No row with id #${id} found`);
      }
      return rowModel[field];
    }
    return colDef.valueGetter(getBaseCellParams(id, field));
  }, [apiRef, getBaseCellParams]);
  const getColumnHeaderElement = React108.useCallback((field) => {
    if (!apiRef.current.rootElementRef.current) {
      return null;
    }
    return getGridColumnHeaderElement(apiRef.current.rootElementRef.current, field);
  }, [apiRef]);
  const getRowElement = React108.useCallback((id) => {
    if (!apiRef.current.rootElementRef.current) {
      return null;
    }
    return getGridRowElement(apiRef.current.rootElementRef.current, id);
  }, [apiRef]);
  const getCellElement = React108.useCallback((id, field) => {
    if (!apiRef.current.rootElementRef.current) {
      return null;
    }
    return getGridCellElement(apiRef.current.rootElementRef.current, {
      id,
      field
    });
  }, [apiRef]);
  const paramsApi = {
    getCellValue,
    getCellParams,
    getCellElement,
    getRowParams,
    getRowElement,
    getColumnHeaderParams,
    getColumnHeaderElement
  };
  useGridApiMethod(apiRef, paramsApi, "GridParamsApi");
}

// node_modules/@mui/x-data-grid/hooks/features/selection/useGridSelection.js
init_extends();
var React109 = __toESM(require_react());
var getSelectionModelPropValue = (selectionModelProp, prevSelectionModel) => {
  if (selectionModelProp == null) {
    return selectionModelProp;
  }
  if (Array.isArray(selectionModelProp)) {
    return selectionModelProp;
  }
  if (prevSelectionModel && prevSelectionModel[0] === selectionModelProp) {
    return prevSelectionModel;
  }
  return [selectionModelProp];
};
var selectionStateInitializer = (state, props) => {
  var _getSelectionModelPro;
  return _extends({}, state, {
    selection: (_getSelectionModelPro = getSelectionModelPropValue(props.selectionModel)) != null ? _getSelectionModelPro : []
  });
};
var useGridSelection = (apiRef, props) => {
  const logger = useGridLogger(apiRef, "useGridSelection");
  const propSelectionModel = React109.useMemo(() => {
    return getSelectionModelPropValue(props.selectionModel, gridSelectionStateSelector(apiRef.current.state));
  }, [apiRef, props.selectionModel]);
  const lastRowToggled = React109.useRef(null);
  apiRef.current.unstable_registerControlState({
    stateId: "selection",
    propModel: propSelectionModel,
    propOnChange: props.onSelectionModelChange,
    stateSelector: gridSelectionStateSelector,
    changeEvent: "selectionChange"
  });
  const {
    checkboxSelection,
    disableMultipleSelection,
    disableSelectionOnClick,
    pagination,
    paginationMode,
    isRowSelectable: propIsRowSelectable
  } = props;
  const canHaveMultipleSelection = !disableMultipleSelection || checkboxSelection;
  const visibleRows = useGridVisibleRows(apiRef, props);
  const expandMouseRowRangeSelection = React109.useCallback((id) => {
    var _lastRowToggled$curre;
    let endId = id;
    const startId = (_lastRowToggled$curre = lastRowToggled.current) != null ? _lastRowToggled$curre : id;
    const isSelected = apiRef.current.isRowSelected(id);
    if (isSelected) {
      const visibleRowIds = gridVisibleSortedRowIdsSelector(apiRef);
      const startIndex = visibleRowIds.findIndex((rowId) => rowId === startId);
      const endIndex = visibleRowIds.findIndex((rowId) => rowId === endId);
      if (startIndex === endIndex) {
        return;
      }
      if (startIndex > endIndex) {
        endId = visibleRowIds[endIndex + 1];
      } else {
        endId = visibleRowIds[endIndex - 1];
      }
    }
    lastRowToggled.current = id;
    apiRef.current.selectRowRange({
      startId,
      endId
    }, !isSelected);
  }, [apiRef]);
  const setSelectionModel = React109.useCallback((model) => {
    const currentModel = gridSelectionStateSelector(apiRef.current.state);
    if (currentModel !== model) {
      logger.debug(`Setting selection model`);
      apiRef.current.setState((state) => _extends({}, state, {
        selection: model
      }));
      apiRef.current.forceUpdate();
    }
  }, [apiRef, logger]);
  const isRowSelected = React109.useCallback((id) => gridSelectionStateSelector(apiRef.current.state).includes(id), [apiRef]);
  const isRowSelectable = React109.useCallback((id) => {
    if (propIsRowSelectable && !propIsRowSelectable(apiRef.current.getRowParams(id))) {
      return false;
    }
    const rowNode = apiRef.current.getRowNode(id);
    if ((rowNode == null ? void 0 : rowNode.position) === "footer" || rowNode != null && rowNode.isPinned) {
      return false;
    }
    return true;
  }, [apiRef, propIsRowSelectable]);
  const getSelectedRows = React109.useCallback(() => selectedGridRowsSelector(apiRef), [apiRef]);
  const selectRow = React109.useCallback((id, isSelected = true, resetSelection = false) => {
    if (!apiRef.current.isRowSelectable(id)) {
      return;
    }
    lastRowToggled.current = id;
    if (resetSelection) {
      logger.debug(`Setting selection for row ${id}`);
      apiRef.current.setSelectionModel(isSelected ? [id] : []);
    } else {
      logger.debug(`Toggling selection for row ${id}`);
      const selection = gridSelectionStateSelector(apiRef.current.state);
      const newSelection = selection.filter((el) => el !== id);
      if (isSelected) {
        newSelection.push(id);
      }
      const isSelectionValid = newSelection.length < 2 || canHaveMultipleSelection;
      if (isSelectionValid) {
        apiRef.current.setSelectionModel(newSelection);
      }
    }
  }, [apiRef, logger, canHaveMultipleSelection]);
  const selectRows = React109.useCallback((ids, isSelected = true, resetSelection = false) => {
    logger.debug(`Setting selection for several rows`);
    const selectableIds = ids.filter((id) => apiRef.current.isRowSelectable(id));
    let newSelection;
    if (resetSelection) {
      newSelection = isSelected ? selectableIds : [];
    } else {
      const selectionLookup = _extends({}, selectedIdsLookupSelector(apiRef));
      selectableIds.forEach((id) => {
        if (isSelected) {
          selectionLookup[id] = id;
        } else {
          delete selectionLookup[id];
        }
      });
      newSelection = Object.values(selectionLookup);
    }
    const isSelectionValid = newSelection.length < 2 || canHaveMultipleSelection;
    if (isSelectionValid) {
      apiRef.current.setSelectionModel(newSelection);
    }
  }, [apiRef, logger, canHaveMultipleSelection]);
  const selectRowRange = React109.useCallback(({
    startId,
    endId
  }, isSelected = true, resetSelection) => {
    if (!apiRef.current.getRow(startId) || !apiRef.current.getRow(endId)) {
      return;
    }
    logger.debug(`Expanding selection from row ${startId} to row ${endId}`);
    const allPagesRowIds = gridVisibleSortedRowIdsSelector(apiRef);
    const startIndex = allPagesRowIds.indexOf(startId);
    const endIndex = allPagesRowIds.indexOf(endId);
    const [start, end] = startIndex > endIndex ? [endIndex, startIndex] : [startIndex, endIndex];
    const rowsBetweenStartAndEnd = allPagesRowIds.slice(start, end + 1);
    apiRef.current.selectRows(rowsBetweenStartAndEnd, isSelected, resetSelection);
  }, [apiRef, logger]);
  const selectionApi = {
    selectRow,
    selectRows,
    selectRowRange,
    setSelectionModel,
    getSelectedRows,
    isRowSelected,
    isRowSelectable
  };
  useGridApiMethod(apiRef, selectionApi, "GridSelectionApi");
  const removeOutdatedSelection = React109.useCallback(() => {
    if (props.keepNonExistentRowsSelected) {
      return;
    }
    const currentSelection = gridSelectionStateSelector(apiRef.current.state);
    const rowsLookup = gridRowsLookupSelector(apiRef);
    const selectionLookup = _extends({}, selectedIdsLookupSelector(apiRef));
    let hasChanged = false;
    currentSelection.forEach((id) => {
      if (!rowsLookup[id]) {
        delete selectionLookup[id];
        hasChanged = true;
      }
    });
    if (hasChanged) {
      apiRef.current.setSelectionModel(Object.values(selectionLookup));
    }
  }, [apiRef, props.keepNonExistentRowsSelected]);
  const handleSingleRowSelection = React109.useCallback((id, event) => {
    const hasCtrlKey = event.metaKey || event.ctrlKey;
    const isMultipleSelectionDisabled = !checkboxSelection && !hasCtrlKey && !isKeyboardEvent(event);
    const resetSelection = !canHaveMultipleSelection || isMultipleSelectionDisabled;
    const isSelected = apiRef.current.isRowSelected(id);
    if (resetSelection) {
      apiRef.current.selectRow(id, !isMultipleSelectionDisabled ? !isSelected : true, true);
    } else {
      apiRef.current.selectRow(id, !isSelected, false);
    }
  }, [apiRef, canHaveMultipleSelection, checkboxSelection]);
  const handleCellClick = React109.useCallback((params, event) => {
    if (disableSelectionOnClick) {
      return;
    }
    if (params.field === GRID_CHECKBOX_SELECTION_COL_DEF.field) {
      return;
    }
    if (params.field === GRID_DETAIL_PANEL_TOGGLE_FIELD) {
      return;
    }
    if (params.field) {
      const column = apiRef.current.getColumn(params.field);
      if (column.type === GRID_ACTIONS_COLUMN_TYPE) {
        return;
      }
    }
    if (params.rowNode.isPinned) {
      return;
    }
    if (event.shiftKey && (canHaveMultipleSelection || checkboxSelection)) {
      expandMouseRowRangeSelection(params.id);
    } else {
      handleSingleRowSelection(params.id, event);
    }
  }, [disableSelectionOnClick, canHaveMultipleSelection, checkboxSelection, apiRef, expandMouseRowRangeSelection, handleSingleRowSelection]);
  const preventSelectionOnShift = React109.useCallback((params, event) => {
    if (canHaveMultipleSelection && event.shiftKey) {
      var _window$getSelection;
      (_window$getSelection = window.getSelection()) == null ? void 0 : _window$getSelection.removeAllRanges();
    }
  }, [canHaveMultipleSelection]);
  const handleRowSelectionCheckboxChange = React109.useCallback((params, event) => {
    if (event.nativeEvent.shiftKey) {
      expandMouseRowRangeSelection(params.id);
    } else {
      apiRef.current.selectRow(params.id, params.value);
    }
  }, [apiRef, expandMouseRowRangeSelection]);
  const handleHeaderSelectionCheckboxChange = React109.useCallback((params) => {
    const shouldLimitSelectionToCurrentPage = props.checkboxSelectionVisibleOnly && props.pagination;
    const rowsToBeSelected = shouldLimitSelectionToCurrentPage ? gridPaginatedVisibleSortedGridRowIdsSelector(apiRef) : gridVisibleSortedRowIdsSelector(apiRef);
    apiRef.current.selectRows(rowsToBeSelected, params.value);
  }, [apiRef, props.checkboxSelectionVisibleOnly, props.pagination]);
  const handleCellKeyDown = React109.useCallback((params, event) => {
    if (apiRef.current.getCellMode(params.id, params.field) === GridCellModes.Edit) {
      return;
    }
    if (!event.currentTarget.contains(event.target)) {
      return;
    }
    if (isNavigationKey(event.key) && event.shiftKey) {
      const focusCell = gridFocusCellSelector(apiRef);
      if (focusCell && focusCell.id !== params.id) {
        event.preventDefault();
        const isNextRowSelected = apiRef.current.isRowSelected(focusCell.id);
        if (!canHaveMultipleSelection) {
          apiRef.current.selectRow(focusCell.id, !isNextRowSelected, true);
          return;
        }
        const newRowIndex = apiRef.current.getRowIndexRelativeToVisibleRows(focusCell.id);
        const previousRowIndex = apiRef.current.getRowIndexRelativeToVisibleRows(params.id);
        let start;
        let end;
        if (newRowIndex > previousRowIndex) {
          if (isNextRowSelected) {
            start = previousRowIndex;
            end = newRowIndex - 1;
          } else {
            start = previousRowIndex;
            end = newRowIndex;
          }
        } else {
          if (isNextRowSelected) {
            start = newRowIndex + 1;
            end = previousRowIndex;
          } else {
            start = newRowIndex;
            end = previousRowIndex;
          }
        }
        const rowsBetweenStartAndEnd = visibleRows.rows.slice(start, end + 1).map((row) => row.id);
        apiRef.current.selectRows(rowsBetweenStartAndEnd, !isNextRowSelected);
        return;
      }
    }
    if (event.key === " " && event.shiftKey) {
      event.preventDefault();
      handleSingleRowSelection(params.id, event);
      return;
    }
    if (event.key.toLowerCase() === "a" && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      selectRows(apiRef.current.getAllRowIds(), true);
    }
  }, [apiRef, handleSingleRowSelection, selectRows, visibleRows.rows, canHaveMultipleSelection]);
  useGridApiEventHandler(apiRef, "sortedRowsSet", removeOutdatedSelection);
  useGridApiEventHandler(apiRef, "cellClick", handleCellClick);
  useGridApiEventHandler(apiRef, "rowSelectionCheckboxChange", handleRowSelectionCheckboxChange);
  useGridApiEventHandler(apiRef, "headerSelectionCheckboxChange", handleHeaderSelectionCheckboxChange);
  useGridApiEventHandler(apiRef, "cellMouseDown", preventSelectionOnShift);
  useGridApiEventHandler(apiRef, "cellKeyDown", handleCellKeyDown);
  React109.useEffect(() => {
    if (propSelectionModel !== void 0) {
      apiRef.current.setSelectionModel(propSelectionModel);
    }
  }, [apiRef, propSelectionModel]);
  const isStateControlled = propSelectionModel != null;
  React109.useEffect(() => {
    if (isStateControlled) {
      return;
    }
    const currentSelection = gridSelectionStateSelector(apiRef.current.state);
    if (isRowSelectable) {
      const newSelection = currentSelection.filter((id) => isRowSelectable(id));
      if (newSelection.length < currentSelection.length) {
        apiRef.current.setSelectionModel(newSelection);
      }
    }
  }, [apiRef, isRowSelectable, isStateControlled]);
  React109.useEffect(() => {
    const currentSelection = gridSelectionStateSelector(apiRef.current.state);
    if (!canHaveMultipleSelection && currentSelection.length > 1) {
      const {
        rows: currentPageRows
      } = getVisibleRows(apiRef, {
        pagination,
        paginationMode
      });
      const currentPageRowsLookup = currentPageRows.reduce((acc, {
        id
      }) => {
        acc[id] = true;
        return acc;
      }, {});
      const firstSelectableRow = currentSelection.find((id) => {
        let isSelectable = true;
        if (isRowSelectable) {
          isSelectable = isRowSelectable(id);
        }
        return isSelectable && currentPageRowsLookup[id];
      });
      apiRef.current.setSelectionModel(firstSelectableRow !== void 0 ? [firstSelectableRow] : []);
    }
  }, [apiRef, canHaveMultipleSelection, checkboxSelection, disableMultipleSelection, isRowSelectable, pagination, paginationMode]);
};

// node_modules/@mui/x-data-grid/hooks/features/selection/useGridSelectionPreProcessors.js
init_extends();
var React113 = __toESM(require_react());

// node_modules/@mui/x-data-grid/constants/localeTextConstants.js
var GRID_DEFAULT_LOCALE_TEXT = {
  noRowsLabel: "No rows",
  noResultsOverlayLabel: "No results found.",
  errorOverlayDefaultLabel: "An error occurred.",
  toolbarDensity: "Density",
  toolbarDensityLabel: "Density",
  toolbarDensityCompact: "Compact",
  toolbarDensityStandard: "Standard",
  toolbarDensityComfortable: "Comfortable",
  toolbarColumns: "Columns",
  toolbarColumnsLabel: "Select columns",
  toolbarFilters: "Filters",
  toolbarFiltersLabel: "Show filters",
  toolbarFiltersTooltipHide: "Hide filters",
  toolbarFiltersTooltipShow: "Show filters",
  toolbarFiltersTooltipActive: (count) => count !== 1 ? `${count} active filters` : `${count} active filter`,
  toolbarQuickFilterPlaceholder: "Search\u2026",
  toolbarQuickFilterLabel: "Search",
  toolbarQuickFilterDeleteIconLabel: "Clear",
  toolbarExport: "Export",
  toolbarExportLabel: "Export",
  toolbarExportCSV: "Download as CSV",
  toolbarExportPrint: "Print",
  toolbarExportExcel: "Download as Excel",
  columnsPanelTextFieldLabel: "Find column",
  columnsPanelTextFieldPlaceholder: "Column title",
  columnsPanelDragIconLabel: "Reorder column",
  columnsPanelShowAllButton: "Show all",
  columnsPanelHideAllButton: "Hide all",
  filterPanelAddFilter: "Add filter",
  filterPanelDeleteIconLabel: "Delete",
  filterPanelLinkOperator: "Logic operator",
  filterPanelOperators: "Operator",
  filterPanelOperatorAnd: "And",
  filterPanelOperatorOr: "Or",
  filterPanelColumns: "Columns",
  filterPanelInputLabel: "Value",
  filterPanelInputPlaceholder: "Filter value",
  filterOperatorContains: "contains",
  filterOperatorEquals: "equals",
  filterOperatorStartsWith: "starts with",
  filterOperatorEndsWith: "ends with",
  filterOperatorIs: "is",
  filterOperatorNot: "is not",
  filterOperatorAfter: "is after",
  filterOperatorOnOrAfter: "is on or after",
  filterOperatorBefore: "is before",
  filterOperatorOnOrBefore: "is on or before",
  filterOperatorIsEmpty: "is empty",
  filterOperatorIsNotEmpty: "is not empty",
  filterOperatorIsAnyOf: "is any of",
  filterValueAny: "any",
  filterValueTrue: "true",
  filterValueFalse: "false",
  columnMenuLabel: "Menu",
  columnMenuShowColumns: "Show columns",
  columnMenuFilter: "Filter",
  columnMenuHideColumn: "Hide",
  columnMenuUnsort: "Unsort",
  columnMenuSortAsc: "Sort by ASC",
  columnMenuSortDesc: "Sort by DESC",
  columnHeaderFiltersTooltipActive: (count) => count !== 1 ? `${count} active filters` : `${count} active filter`,
  columnHeaderFiltersLabel: "Show filters",
  columnHeaderSortIconLabel: "Sort",
  footerRowSelected: (count) => count !== 1 ? `${count.toLocaleString()} rows selected` : `${count.toLocaleString()} row selected`,
  footerTotalRows: "Total Rows:",
  footerTotalVisibleRows: (visibleCount, totalCount) => `${visibleCount.toLocaleString()} of ${totalCount.toLocaleString()}`,
  checkboxSelectionHeaderName: "Checkbox selection",
  checkboxSelectionSelectAllRows: "Select all rows",
  checkboxSelectionUnselectAllRows: "Unselect all rows",
  checkboxSelectionSelectRow: "Select row",
  checkboxSelectionUnselectRow: "Unselect row",
  booleanCellTrueLabel: "yes",
  booleanCellFalseLabel: "no",
  actionsCellMore: "more",
  pinToLeft: "Pin to left",
  pinToRight: "Pin to right",
  unpin: "Unpin",
  treeDataGroupingHeaderName: "Group",
  treeDataExpand: "see children",
  treeDataCollapse: "hide children",
  groupingColumnHeaderName: "Group",
  groupColumn: (name) => `Group by ${name}`,
  unGroupColumn: (name) => `Stop grouping by ${name}`,
  detailPanelToggle: "Detail panel toggle",
  expandDetailPanel: "Expand",
  collapseDetailPanel: "Collapse",
  MuiTablePagination: {},
  rowReorderingHeaderName: "Row reordering",
  aggregationMenuItemHeader: "Aggregation",
  aggregationFunctionLabelSum: "sum",
  aggregationFunctionLabelAvg: "avg",
  aggregationFunctionLabelMin: "min",
  aggregationFunctionLabelMax: "max",
  aggregationFunctionLabelSize: "size"
};

// node_modules/@mui/x-data-grid/constants/defaultGridSlotsComponents.js
init_extends();

// node_modules/@mui/x-data-grid/components/columnHeaders/GridColumnUnsortedIcon.js
init_extends();
init_objectWithoutPropertiesLoose();
var React110 = __toESM(require_react());
var import_jsx_runtime85 = __toESM(require_jsx_runtime());
var _excluded46 = ["sortingOrder"];
var GridColumnUnsortedIcon = /* @__PURE__ */ React110.memo(function GridColumnHeaderSortIcon2(props) {
  const {
    sortingOrder
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded46);
  const rootProps = useGridRootProps();
  const [nextSortDirection] = sortingOrder;
  const Icon = nextSortDirection === "asc" ? rootProps.components.ColumnSortedAscendingIcon : rootProps.components.ColumnSortedDescendingIcon;
  return Icon ? /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(Icon, _extends({}, other)) : null;
});

// node_modules/@mui/x-data-grid/components/ErrorOverlay.js
init_extends();
init_objectWithoutPropertiesLoose();
var React111 = __toESM(require_react());
var import_jsx_runtime86 = __toESM(require_jsx_runtime());
var _excluded47 = ["message", "hasError", "errorInfo"];
var ErrorOverlay = /* @__PURE__ */ React111.forwardRef(function ErrorOverlay2(props, ref) {
  const {
    message
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded47);
  const apiRef = useGridApiContext();
  const defaultLabel = apiRef.current.getLocaleText("errorOverlayDefaultLabel");
  const rowHeight = useGridSelector(apiRef, gridDensityRowHeightSelector);
  return /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(GridOverlay, _extends({
    ref,
    sx: {
      width: "100%",
      minHeight: 2 * rowHeight
    }
  }, other, {
    children: message || defaultLabel
  }));
});

// node_modules/@mui/x-data-grid/components/GridNoResultsOverlay.js
init_extends();
var React112 = __toESM(require_react());
var import_jsx_runtime87 = __toESM(require_jsx_runtime());
var GridNoResultsOverlay = /* @__PURE__ */ React112.forwardRef(function GridNoResultsOverlay2(props, ref) {
  const apiRef = useGridApiContext();
  const noResultsOverlayLabel = apiRef.current.getLocaleText("noResultsOverlayLabel");
  return /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(GridOverlay, _extends({
    ref
  }, props, {
    children: noResultsOverlayLabel
  }));
});

// node_modules/@mui/x-data-grid/constants/defaultGridSlotsComponents.js
var DEFAULT_GRID_ICON_SLOTS_COMPONENTS = {
  BooleanCellTrueIcon: GridCheckIcon,
  BooleanCellFalseIcon: GridCloseIcon,
  ColumnMenuIcon: GridTripleDotsVerticalIcon,
  OpenFilterButtonIcon: GridFilterListIcon,
  FilterPanelDeleteIcon: GridCloseIcon,
  ColumnFilteredIcon: GridFilterAltIcon,
  ColumnSelectorIcon: GridColumnIcon,
  ColumnUnsortedIcon: GridColumnUnsortedIcon,
  ColumnSortedAscendingIcon: GridArrowUpwardIcon,
  ColumnSortedDescendingIcon: GridArrowDownwardIcon,
  ColumnResizeIcon: GridSeparatorIcon,
  DensityCompactIcon: GridViewHeadlineIcon,
  DensityStandardIcon: GridTableRowsIcon,
  DensityComfortableIcon: GridViewStreamIcon,
  ExportIcon: GridSaveAltIcon,
  MoreActionsIcon: GridMoreVertIcon,
  TreeDataCollapseIcon: GridExpandMoreIcon,
  TreeDataExpandIcon: GridKeyboardArrowRight,
  GroupingCriteriaCollapseIcon: GridExpandMoreIcon,
  GroupingCriteriaExpandIcon: GridKeyboardArrowRight,
  DetailPanelExpandIcon: GridAddIcon,
  DetailPanelCollapseIcon: GridRemoveIcon,
  RowReorderIcon: GridDragIcon,
  QuickFilterIcon: GridSearchIcon,
  QuickFilterClearIcon: GridCloseIcon
};
var DATA_GRID_DEFAULT_SLOTS_COMPONENTS = _extends({}, DEFAULT_GRID_ICON_SLOTS_COMPONENTS, {
  BaseCheckbox: Checkbox_default,
  BaseTextField: TextField_default,
  BaseFormControl: FormControl_default,
  BaseSelect: Select_default,
  BaseSwitch: Switch_default,
  BaseButton: Button_default,
  BaseTooltip: Tooltip_default,
  BasePopper: Popper_default,
  Cell: GridCell,
  SkeletonCell: GridSkeletonCell,
  ColumnHeaderFilterIconButton: GridColumnHeaderFilterIconButton,
  ColumnMenu: GridColumnMenu,
  ErrorOverlay,
  Footer: GridFooter,
  Header: GridHeader,
  Toolbar: null,
  PreferencesPanel: GridPreferencesPanel,
  LoadingOverlay: GridLoadingOverlay,
  NoResultsOverlay: GridNoResultsOverlay,
  NoRowsOverlay: GridNoRowsOverlay,
  Pagination: GridPagination,
  FilterPanel: GridFilterPanel,
  ColumnsPanel: GridColumnsPanel,
  Panel: GridPanel,
  Row: GridRow
});

// node_modules/@mui/x-data-grid/hooks/features/selection/useGridSelectionPreProcessors.js
var useUtilityClasses31 = (ownerState) => {
  const {
    classes
  } = ownerState;
  return React113.useMemo(() => {
    const slots = {
      cellCheckbox: ["cellCheckbox"],
      columnHeaderCheckbox: ["columnHeaderCheckbox"]
    };
    return composeClasses(slots, getDataGridUtilityClass, classes);
  }, [classes]);
};
var useGridSelectionPreProcessors = (apiRef, props) => {
  const ownerState = {
    classes: props.classes
  };
  const classes = useUtilityClasses31(ownerState);
  const updateSelectionColumn = React113.useCallback((columnsState) => {
    const selectionColumn = _extends({}, GRID_CHECKBOX_SELECTION_COL_DEF, {
      cellClassName: classes.cellCheckbox,
      headerClassName: classes.columnHeaderCheckbox,
      headerName: apiRef.current.getLocaleText("checkboxSelectionHeaderName")
    });
    const shouldHaveSelectionColumn = props.checkboxSelection;
    const haveSelectionColumn = columnsState.lookup[GRID_CHECKBOX_SELECTION_FIELD] != null;
    if (shouldHaveSelectionColumn && !haveSelectionColumn) {
      columnsState.lookup[GRID_CHECKBOX_SELECTION_FIELD] = selectionColumn;
      columnsState.all = [GRID_CHECKBOX_SELECTION_FIELD, ...columnsState.all];
    } else if (!shouldHaveSelectionColumn && haveSelectionColumn) {
      delete columnsState.lookup[GRID_CHECKBOX_SELECTION_FIELD];
      columnsState.all = columnsState.all.filter((field) => field !== GRID_CHECKBOX_SELECTION_FIELD);
    } else if (shouldHaveSelectionColumn && haveSelectionColumn) {
      columnsState.lookup[GRID_CHECKBOX_SELECTION_FIELD] = _extends({}, selectionColumn, columnsState.lookup[GRID_CHECKBOX_SELECTION_FIELD]);
    }
    return columnsState;
  }, [apiRef, classes, props.checkboxSelection]);
  useGridRegisterPipeProcessor(apiRef, "hydrateColumns", updateSelectionColumn);
};

// node_modules/@mui/x-data-grid/hooks/features/sorting/useGridSorting.js
init_extends();
var React114 = __toESM(require_react());
var sortingStateInitializer = (state, props) => {
  var _ref, _props$sortModel, _props$initialState, _props$initialState$s;
  const sortModel = (_ref = (_props$sortModel = props.sortModel) != null ? _props$sortModel : (_props$initialState = props.initialState) == null ? void 0 : (_props$initialState$s = _props$initialState.sorting) == null ? void 0 : _props$initialState$s.sortModel) != null ? _ref : [];
  return _extends({}, state, {
    sorting: {
      sortModel: sanitizeSortModel(sortModel, props.disableMultipleColumnsSorting),
      sortedRows: []
    }
  });
};
var useGridSorting = (apiRef, props) => {
  var _props$initialState3, _props$initialState3$;
  const logger = useGridLogger(apiRef, "useGridSorting");
  apiRef.current.unstable_registerControlState({
    stateId: "sortModel",
    propModel: props.sortModel,
    propOnChange: props.onSortModelChange,
    stateSelector: gridSortModelSelector,
    changeEvent: "sortModelChange"
  });
  const upsertSortModel = React114.useCallback((field, sortItem) => {
    const sortModel = gridSortModelSelector(apiRef);
    const existingIdx = sortModel.findIndex((c) => c.field === field);
    let newSortModel = [...sortModel];
    if (existingIdx > -1) {
      if (!sortItem) {
        newSortModel.splice(existingIdx, 1);
      } else {
        newSortModel.splice(existingIdx, 1, sortItem);
      }
    } else {
      newSortModel = [...sortModel, sortItem];
    }
    return newSortModel;
  }, [apiRef]);
  const createSortItem = React114.useCallback((col, directionOverride) => {
    var _col$sortingOrder2;
    const sortModel = gridSortModelSelector(apiRef);
    const existing = sortModel.find((c) => c.field === col.field);
    if (existing) {
      var _col$sortingOrder;
      const nextSort = directionOverride === void 0 ? getNextGridSortDirection((_col$sortingOrder = col.sortingOrder) != null ? _col$sortingOrder : props.sortingOrder, existing.sort) : directionOverride;
      return nextSort == null ? void 0 : _extends({}, existing, {
        sort: nextSort
      });
    }
    return {
      field: col.field,
      sort: directionOverride === void 0 ? getNextGridSortDirection((_col$sortingOrder2 = col.sortingOrder) != null ? _col$sortingOrder2 : props.sortingOrder) : directionOverride
    };
  }, [apiRef, props.sortingOrder]);
  const applySorting = React114.useCallback(() => {
    apiRef.current.setState((state) => {
      if (props.sortingMode === GridFeatureModeConstant.server) {
        logger.debug("Skipping sorting rows as sortingMode = server");
        return _extends({}, state, {
          sorting: _extends({}, state.sorting, {
            sortedRows: gridRowIdsSelector(state, apiRef.current.instanceId)
          })
        });
      }
      const sortModel = gridSortModelSelector(state, apiRef.current.instanceId);
      const sortRowList = buildAggregatedSortingApplier(sortModel, apiRef);
      const sortedRows = apiRef.current.unstable_applyStrategyProcessor("sorting", {
        sortRowList
      });
      return _extends({}, state, {
        sorting: _extends({}, state.sorting, {
          sortedRows
        })
      });
    });
    apiRef.current.publishEvent("sortedRowsSet");
    apiRef.current.forceUpdate();
  }, [apiRef, logger, props.sortingMode]);
  const setSortModel = React114.useCallback((model) => {
    const currentModel = gridSortModelSelector(apiRef);
    if (currentModel !== model) {
      logger.debug(`Setting sort model`);
      apiRef.current.setState(mergeStateWithSortModel(model, props.disableMultipleColumnsSorting));
      apiRef.current.forceUpdate();
      apiRef.current.applySorting();
    }
  }, [apiRef, logger, props.disableMultipleColumnsSorting]);
  const sortColumn = React114.useCallback((column, direction, allowMultipleSorting) => {
    if (!column.sortable) {
      return;
    }
    const sortItem = createSortItem(column, direction);
    let sortModel;
    if (!allowMultipleSorting || props.disableMultipleColumnsSorting) {
      sortModel = !sortItem ? [] : [sortItem];
    } else {
      sortModel = upsertSortModel(column.field, sortItem);
    }
    apiRef.current.setSortModel(sortModel);
  }, [apiRef, upsertSortModel, createSortItem, props.disableMultipleColumnsSorting]);
  const getSortModel = React114.useCallback(() => gridSortModelSelector(apiRef), [apiRef]);
  const getSortedRows = React114.useCallback(() => {
    const sortedRows = gridSortedRowEntriesSelector(apiRef);
    return sortedRows.map((row) => row.model);
  }, [apiRef]);
  const getSortedRowIds = React114.useCallback(() => gridSortedRowIdsSelector(apiRef), [apiRef]);
  const getRowIndex = React114.useCallback((id) => apiRef.current.getSortedRowIds().indexOf(id), [apiRef]);
  const getRowIdFromRowIndex = React114.useCallback((index) => apiRef.current.getSortedRowIds()[index], [apiRef]);
  const sortApi = {
    getSortModel,
    getSortedRows,
    getSortedRowIds,
    getRowIndex,
    getRowIdFromRowIndex,
    setSortModel,
    sortColumn,
    applySorting
  };
  useGridApiMethod(apiRef, sortApi, "GridSortApi");
  const stateExportPreProcessing = React114.useCallback((prevState, context) => {
    var _props$initialState2, _props$initialState2$;
    const sortModelToExport = gridSortModelSelector(apiRef);
    const shouldExportSortModel = !context.exportOnlyDirtyModels || props.sortModel != null || ((_props$initialState2 = props.initialState) == null ? void 0 : (_props$initialState2$ = _props$initialState2.sorting) == null ? void 0 : _props$initialState2$.sortModel) != null || sortModelToExport.length > 0;
    if (!shouldExportSortModel) {
      return prevState;
    }
    return _extends({}, prevState, {
      sorting: {
        sortModel: sortModelToExport
      }
    });
  }, [apiRef, props.sortModel, (_props$initialState3 = props.initialState) == null ? void 0 : (_props$initialState3$ = _props$initialState3.sorting) == null ? void 0 : _props$initialState3$.sortModel]);
  const stateRestorePreProcessing = React114.useCallback((params, context) => {
    var _context$stateToResto;
    const sortModel = (_context$stateToResto = context.stateToRestore.sorting) == null ? void 0 : _context$stateToResto.sortModel;
    if (sortModel == null) {
      return params;
    }
    apiRef.current.setState(mergeStateWithSortModel(sortModel, props.disableMultipleColumnsSorting));
    return _extends({}, params, {
      callbacks: [...params.callbacks, apiRef.current.applySorting]
    });
  }, [apiRef, props.disableMultipleColumnsSorting]);
  const flatSortingMethod = React114.useCallback((params) => {
    const rowTree = gridRowTreeSelector(apiRef);
    if (!params.sortRowList) {
      const bodyRowIds = [];
      const footerRowIds2 = [];
      gridRowIdsSelector(apiRef).forEach((rowId) => {
        if (rowTree[rowId].isPinned) {
          return;
        }
        if (rowTree[rowId].position === "footer") {
          footerRowIds2.push(rowId);
        } else {
          bodyRowIds.push(rowId);
        }
      });
      return [...bodyRowIds, ...footerRowIds2];
    }
    const bodyRows = [];
    const footerRowIds = [];
    Object.values(rowTree).forEach((rowNode) => {
      if (rowNode.isPinned) {
        return;
      }
      if (rowNode.position === "footer") {
        footerRowIds.push(rowNode.id);
      } else {
        bodyRows.push(rowNode);
      }
    });
    return [...params.sortRowList(bodyRows), ...footerRowIds];
  }, [apiRef]);
  useGridRegisterPipeProcessor(apiRef, "exportState", stateExportPreProcessing);
  useGridRegisterPipeProcessor(apiRef, "restoreState", stateRestorePreProcessing);
  useGridRegisterStrategyProcessor(apiRef, GRID_DEFAULT_STRATEGY, "sorting", flatSortingMethod);
  const handleColumnHeaderClick = React114.useCallback(({
    colDef
  }, event) => {
    const allowMultipleSorting = event.shiftKey || event.metaKey || event.ctrlKey;
    sortColumn(colDef, void 0, allowMultipleSorting);
  }, [sortColumn]);
  const handleColumnHeaderKeyDown = React114.useCallback(({
    colDef
  }, event) => {
    if (isEnterKey(event.key) && !event.ctrlKey && !event.metaKey) {
      sortColumn(colDef, void 0, event.shiftKey);
    }
  }, [sortColumn]);
  const handleColumnsChange = React114.useCallback(() => {
    const sortModel = gridSortModelSelector(apiRef);
    const latestColumns = gridColumnLookupSelector(apiRef);
    if (sortModel.length > 0) {
      const newModel = sortModel.filter((sortItem) => latestColumns[sortItem.field]);
      if (newModel.length < sortModel.length) {
        apiRef.current.setSortModel(newModel);
      }
    }
  }, [apiRef]);
  const handleStrategyProcessorChange = React114.useCallback((methodName) => {
    if (methodName === "sorting") {
      apiRef.current.applySorting();
    }
  }, [apiRef]);
  useGridApiEventHandler(apiRef, "columnHeaderClick", handleColumnHeaderClick);
  useGridApiEventHandler(apiRef, "columnHeaderKeyDown", handleColumnHeaderKeyDown);
  useGridApiEventHandler(apiRef, "rowsSet", apiRef.current.applySorting);
  useGridApiEventHandler(apiRef, "columnsChange", handleColumnsChange);
  useGridApiEventHandler(apiRef, "activeStrategyProcessorChange", handleStrategyProcessorChange);
  useFirstRender(() => {
    apiRef.current.applySorting();
  });
  React114.useEffect(() => {
    if (props.sortModel !== void 0) {
      apiRef.current.setSortModel(props.sortModel);
    }
  }, [apiRef, props.sortModel]);
};

// node_modules/@mui/x-data-grid/hooks/features/scroll/useGridScroll.js
var React115 = __toESM(require_react());
function scrollIntoView(dimensions) {
  const {
    clientHeight,
    scrollTop,
    offsetHeight,
    offsetTop
  } = dimensions;
  const elementBottom = offsetTop + offsetHeight;
  if (offsetHeight > clientHeight) {
    return offsetTop;
  }
  if (elementBottom - clientHeight > scrollTop) {
    return elementBottom - clientHeight;
  }
  if (offsetTop < scrollTop) {
    return offsetTop;
  }
  return void 0;
}
var useGridScroll = (apiRef, props) => {
  const logger = useGridLogger(apiRef, "useGridScroll");
  const colRef = apiRef.current.columnHeadersElementRef;
  const windowRef = apiRef.current.windowRef;
  const visibleSortedRows = useGridSelector(apiRef, gridVisibleSortedRowEntriesSelector);
  const scrollToIndexes = React115.useCallback((params) => {
    const totalRowCount = gridRowCountSelector(apiRef);
    const visibleColumns = gridVisibleColumnDefinitionsSelector(apiRef);
    const scrollToHeader = params.rowIndex == null;
    if (!scrollToHeader && totalRowCount === 0 || visibleColumns.length === 0) {
      return false;
    }
    logger.debug(`Scrolling to cell at row ${params.rowIndex}, col: ${params.colIndex} `);
    let scrollCoordinates = {};
    if (params.colIndex != null) {
      const columnPositions = gridColumnPositionsSelector(apiRef);
      let cellWidth;
      if (typeof params.rowIndex !== "undefined") {
        var _visibleSortedRows$pa;
        const rowId = (_visibleSortedRows$pa = visibleSortedRows[params.rowIndex]) == null ? void 0 : _visibleSortedRows$pa.id;
        const cellColSpanInfo = apiRef.current.unstable_getCellColSpanInfo(rowId, params.colIndex);
        if (cellColSpanInfo && !cellColSpanInfo.spannedByColSpan) {
          cellWidth = cellColSpanInfo.cellProps.width;
        }
      }
      if (typeof cellWidth === "undefined") {
        cellWidth = visibleColumns[params.colIndex].computedWidth;
      }
      scrollCoordinates.left = scrollIntoView({
        clientHeight: windowRef.current.clientWidth,
        scrollTop: windowRef.current.scrollLeft,
        offsetHeight: cellWidth,
        offsetTop: columnPositions[params.colIndex]
      });
    }
    if (params.rowIndex != null) {
      var _querySelector, _querySelector2;
      const rowsMeta = gridRowsMetaSelector(apiRef.current.state);
      const page = gridPageSelector(apiRef);
      const pageSize = gridPageSizeSelector(apiRef);
      const elementIndex = !props.pagination ? params.rowIndex : params.rowIndex - page * pageSize;
      const targetOffsetHeight = rowsMeta.positions[elementIndex + 1] ? rowsMeta.positions[elementIndex + 1] - rowsMeta.positions[elementIndex] : rowsMeta.currentPageTotalHeight - rowsMeta.positions[elementIndex];
      const topPinnedRowsHeight = ((_querySelector = windowRef.current.querySelector(`.${gridClasses["pinnedRows--top"]}`)) == null ? void 0 : _querySelector.clientHeight) || 0;
      const bottomPinnedRowsHeight = ((_querySelector2 = windowRef.current.querySelector(`.${gridClasses["pinnedRows--bottom"]}`)) == null ? void 0 : _querySelector2.clientHeight) || 0;
      scrollCoordinates.top = scrollIntoView({
        clientHeight: windowRef.current.clientHeight - topPinnedRowsHeight - bottomPinnedRowsHeight,
        scrollTop: windowRef.current.scrollTop,
        offsetHeight: targetOffsetHeight,
        offsetTop: rowsMeta.positions[elementIndex]
      });
    }
    scrollCoordinates = apiRef.current.unstable_applyPipeProcessors("scrollToIndexes", scrollCoordinates, params);
    if (typeof scrollCoordinates.left !== void 0 || typeof scrollCoordinates.top !== void 0) {
      apiRef.current.scroll(scrollCoordinates);
      return true;
    }
    return false;
  }, [logger, apiRef, windowRef, props.pagination, visibleSortedRows]);
  const scroll = React115.useCallback((params) => {
    if (windowRef.current && params.left != null && colRef.current) {
      colRef.current.scrollLeft = params.left;
      windowRef.current.scrollLeft = params.left;
      logger.debug(`Scrolling left: ${params.left}`);
    }
    if (windowRef.current && params.top != null) {
      windowRef.current.scrollTop = params.top;
      logger.debug(`Scrolling top: ${params.top}`);
    }
    logger.debug(`Scrolling, updating container, and viewport`);
  }, [windowRef, colRef, logger]);
  const getScrollPosition = React115.useCallback(() => {
    if (!(windowRef != null && windowRef.current)) {
      return {
        top: 0,
        left: 0
      };
    }
    return {
      top: windowRef.current.scrollTop,
      left: windowRef.current.scrollLeft
    };
  }, [windowRef]);
  const scrollApi = {
    scroll,
    scrollToIndexes,
    getScrollPosition
  };
  useGridApiMethod(apiRef, scrollApi, "GridScrollApi");
};

// node_modules/@mui/x-data-grid/hooks/features/events/useGridEvents.js
function useGridEvents(apiRef, props) {
  useGridApiOptionHandler(apiRef, "columnHeaderClick", props.onColumnHeaderClick);
  useGridApiOptionHandler(apiRef, "columnHeaderDoubleClick", props.onColumnHeaderDoubleClick);
  useGridApiOptionHandler(apiRef, "columnHeaderOver", props.onColumnHeaderOver);
  useGridApiOptionHandler(apiRef, "columnHeaderOut", props.onColumnHeaderOut);
  useGridApiOptionHandler(apiRef, "columnHeaderEnter", props.onColumnHeaderEnter);
  useGridApiOptionHandler(apiRef, "columnHeaderLeave", props.onColumnHeaderLeave);
  useGridApiOptionHandler(apiRef, "columnOrderChange", props.onColumnOrderChange);
  useGridApiOptionHandler(apiRef, "cellClick", props.onCellClick);
  useGridApiOptionHandler(apiRef, "cellDoubleClick", props.onCellDoubleClick);
  useGridApiOptionHandler(apiRef, "cellKeyDown", props.onCellKeyDown);
  useGridApiOptionHandler(apiRef, "cellFocusOut", props.onCellFocusOut);
  useGridApiOptionHandler(apiRef, "preferencePanelClose", props.onPreferencePanelClose);
  useGridApiOptionHandler(apiRef, "preferencePanelOpen", props.onPreferencePanelOpen);
  useGridApiOptionHandler(apiRef, "menuOpen", props.onMenuOpen);
  useGridApiOptionHandler(apiRef, "menuClose", props.onMenuClose);
  useGridApiOptionHandler(apiRef, "rowDoubleClick", props.onRowDoubleClick);
  useGridApiOptionHandler(apiRef, "rowClick", props.onRowClick);
  useGridApiOptionHandler(apiRef, "componentError", props.onError);
  useGridApiOptionHandler(apiRef, "stateChange", props.onStateChange);
}

// node_modules/@mui/x-data-grid/hooks/features/dimensions/useGridDimensions.js
var React116 = __toESM(require_react());
init_utils();
var isTestEnvironment = false;
var hasScroll = ({
  content,
  container,
  scrollBarSize
}) => {
  const hasScrollXIfNoYScrollBar = content.width > container.width;
  const hasScrollYIfNoXScrollBar = content.height > container.height;
  let hasScrollX = false;
  let hasScrollY = false;
  if (hasScrollXIfNoYScrollBar || hasScrollYIfNoXScrollBar) {
    hasScrollX = hasScrollXIfNoYScrollBar;
    hasScrollY = content.height + (hasScrollX ? scrollBarSize : 0) > container.height;
    if (hasScrollY) {
      hasScrollX = content.width + scrollBarSize > container.width;
    }
  }
  return {
    hasScrollX,
    hasScrollY
  };
};
function useGridDimensions(apiRef, props) {
  const logger = useGridLogger(apiRef, "useResizeContainer");
  const errorShown = React116.useRef(false);
  const rootDimensionsRef = React116.useRef(null);
  const fullDimensionsRef = React116.useRef(null);
  const rowsMeta = useGridSelector(apiRef, gridRowsMetaSelector);
  const totalHeaderHeight = useGridSelector(apiRef, gridDensityTotalHeaderHeightSelector);
  const updateGridDimensionsRef = React116.useCallback(() => {
    var _apiRef$current$rootE;
    const rootElement = (_apiRef$current$rootE = apiRef.current.rootElementRef) == null ? void 0 : _apiRef$current$rootE.current;
    const columnsTotalWidth = gridColumnsTotalWidthSelector(apiRef);
    const pinnedRowsHeight = calculatePinnedRowsHeight(apiRef);
    if (!rootDimensionsRef.current) {
      return;
    }
    let scrollBarSize;
    if (props.scrollbarSize != null) {
      scrollBarSize = props.scrollbarSize;
    } else if (!columnsTotalWidth || !rootElement) {
      scrollBarSize = 0;
    } else {
      const doc = ownerDocument_default(rootElement);
      const scrollDiv = doc.createElement("div");
      scrollDiv.style.width = "99px";
      scrollDiv.style.height = "99px";
      scrollDiv.style.position = "absolute";
      scrollDiv.style.overflow = "scroll";
      scrollDiv.className = "scrollDiv";
      rootElement.appendChild(scrollDiv);
      scrollBarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      rootElement.removeChild(scrollDiv);
    }
    let viewportOuterSize;
    let hasScrollX;
    let hasScrollY;
    if (props.autoHeight) {
      hasScrollY = false;
      hasScrollX = Math.round(columnsTotalWidth) > rootDimensionsRef.current.width;
      viewportOuterSize = {
        width: rootDimensionsRef.current.width,
        height: rowsMeta.currentPageTotalHeight + (hasScrollX ? scrollBarSize : 0)
      };
    } else {
      viewportOuterSize = {
        width: rootDimensionsRef.current.width,
        height: rootDimensionsRef.current.height - totalHeaderHeight
      };
      const scrollInformation = hasScroll({
        content: {
          width: Math.round(columnsTotalWidth),
          height: rowsMeta.currentPageTotalHeight
        },
        container: {
          width: viewportOuterSize.width,
          height: viewportOuterSize.height - pinnedRowsHeight.top - pinnedRowsHeight.bottom
        },
        scrollBarSize
      });
      hasScrollY = scrollInformation.hasScrollY;
      hasScrollX = scrollInformation.hasScrollX;
    }
    const viewportInnerSize = {
      width: viewportOuterSize.width - (hasScrollY ? scrollBarSize : 0),
      height: viewportOuterSize.height - (hasScrollX ? scrollBarSize : 0)
    };
    const newFullDimensions = {
      viewportOuterSize,
      viewportInnerSize,
      hasScrollX,
      hasScrollY,
      scrollBarSize
    };
    const prevDimensions = fullDimensionsRef.current;
    fullDimensionsRef.current = newFullDimensions;
    if (newFullDimensions.viewportInnerSize.width !== (prevDimensions == null ? void 0 : prevDimensions.viewportInnerSize.width) || newFullDimensions.viewportInnerSize.height !== (prevDimensions == null ? void 0 : prevDimensions.viewportInnerSize.height)) {
      apiRef.current.publishEvent("viewportInnerSizeChange", newFullDimensions.viewportInnerSize);
    }
  }, [apiRef, props.scrollbarSize, props.autoHeight, totalHeaderHeight, rowsMeta.currentPageTotalHeight]);
  const resize = React116.useCallback(() => {
    updateGridDimensionsRef();
    apiRef.current.publishEvent("debouncedResize", rootDimensionsRef.current);
  }, [apiRef, updateGridDimensionsRef]);
  const getRootDimensions = React116.useCallback(() => fullDimensionsRef.current, []);
  const getViewportPageSize = React116.useCallback(() => {
    const dimensions = apiRef.current.getRootDimensions();
    if (!dimensions) {
      return 0;
    }
    const currentPage = getVisibleRows(apiRef, {
      pagination: props.pagination,
      paginationMode: props.paginationMode
    });
    if (props.getRowHeight) {
      const renderContext = apiRef.current.unstable_getRenderContext();
      const viewportPageSize = renderContext.lastRowIndex - renderContext.firstRowIndex;
      return Math.min(viewportPageSize - 1, currentPage.rows.length);
    }
    const maximumPageSizeWithoutScrollBar = Math.floor(dimensions.viewportInnerSize.height / gridDensityRowHeightSelector(apiRef));
    return Math.min(maximumPageSizeWithoutScrollBar, currentPage.rows.length);
  }, [apiRef, props.pagination, props.paginationMode, props.getRowHeight]);
  const dimensionsApi = {
    resize,
    getRootDimensions,
    unstable_getViewportPageSize: getViewportPageSize,
    unstable_updateGridDimensionsRef: updateGridDimensionsRef
  };
  useGridApiMethod(apiRef, dimensionsApi, "GridDimensionsApi");
  const debounceResize = React116.useMemo(() => debounce_default(resize, 60), [resize]);
  const isFirstSizing = React116.useRef(true);
  const handleResize = React116.useCallback((size) => {
    rootDimensionsRef.current = size;
    const isJSDOM = /jsdom/.test(window.navigator.userAgent);
    if (size.height === 0 && !errorShown.current && !props.autoHeight && !isJSDOM) {
      logger.error(["The parent DOM element of the data grid has an empty height.", "Please make sure that this element has an intrinsic height.", "The grid displays with a height of 0px.", "", "More details: https://mui.com/r/x-data-grid-no-dimensions."].join("\n"));
      errorShown.current = true;
    }
    if (size.width === 0 && !errorShown.current && !isJSDOM) {
      logger.error(["The parent DOM element of the data grid has an empty width.", "Please make sure that this element has an intrinsic width.", "The grid displays with a width of 0px.", "", "More details: https://mui.com/r/x-data-grid-no-dimensions."].join("\n"));
      errorShown.current = true;
    }
    if (isTestEnvironment) {
      resize();
      isFirstSizing.current = false;
      return;
    }
    if (isFirstSizing.current) {
      resize();
      isFirstSizing.current = false;
      return;
    }
    debounceResize();
  }, [props.autoHeight, debounceResize, logger, resize]);
  useEnhancedEffect_default(() => updateGridDimensionsRef(), [updateGridDimensionsRef]);
  useGridApiOptionHandler(apiRef, "sortedRowsSet", updateGridDimensionsRef);
  useGridApiOptionHandler(apiRef, "pageChange", updateGridDimensionsRef);
  useGridApiOptionHandler(apiRef, "pageSizeChange", updateGridDimensionsRef);
  useGridApiOptionHandler(apiRef, "columnsChange", updateGridDimensionsRef);
  useGridApiEventHandler(apiRef, "resize", handleResize);
  useGridApiOptionHandler(apiRef, "debouncedResize", props.onResize);
}

// node_modules/@mui/x-data-grid/hooks/features/rows/useGridRowsMeta.js
init_extends();
var React117 = __toESM(require_react());
init_utils();
var rowsMetaStateInitializer = (state) => _extends({}, state, {
  rowsMeta: {
    currentPageTotalHeight: 0,
    positions: []
  }
});
var useGridRowsMeta = (apiRef, props) => {
  const {
    getRowHeight: getRowHeightProp,
    getRowSpacing,
    getEstimatedRowHeight
  } = props;
  const rowsHeightLookup = React117.useRef({});
  const lastMeasuredRowIndex = React117.useRef(-1);
  const hasRowWithAutoHeight = React117.useRef(false);
  const rowHeightFromDensity = useGridSelector(apiRef, gridDensityRowHeightSelector);
  const filterState = useGridSelector(apiRef, gridFilterStateSelector);
  const paginationState = useGridSelector(apiRef, gridPaginationSelector);
  const sortingState = useGridSelector(apiRef, gridSortingStateSelector);
  const currentPage = useGridVisibleRows(apiRef, props);
  const pinnedRows = useGridSelector(apiRef, gridPinnedRowsSelector);
  const hydrateRowsMeta = React117.useCallback(() => {
    var _pinnedRows$top, _pinnedRows$bottom;
    hasRowWithAutoHeight.current = false;
    const densityFactor = gridDensityFactorSelector(apiRef.current.state, apiRef.current.instanceId);
    const calculateRowProcessedSizes = (row) => {
      if (!rowsHeightLookup.current[row.id]) {
        rowsHeightLookup.current[row.id] = {
          sizes: {
            baseCenter: rowHeightFromDensity
          },
          isResized: false,
          autoHeight: false,
          needsFirstMeasurement: true
        };
      }
      const {
        isResized,
        needsFirstMeasurement,
        sizes
      } = rowsHeightLookup.current[row.id];
      let baseRowHeight = rowHeightFromDensity;
      const existingBaseRowHeight = sizes.baseCenter;
      if (isResized) {
        baseRowHeight = existingBaseRowHeight;
      } else if (getRowHeightProp) {
        const rowHeightFromUser = getRowHeightProp(_extends({}, row, {
          densityFactor
        }));
        if (rowHeightFromUser === "auto") {
          if (needsFirstMeasurement) {
            const estimatedRowHeight = getEstimatedRowHeight ? getEstimatedRowHeight(_extends({}, row, {
              densityFactor
            })) : rowHeightFromDensity;
            baseRowHeight = estimatedRowHeight != null ? estimatedRowHeight : rowHeightFromDensity;
          } else {
            baseRowHeight = existingBaseRowHeight;
          }
          hasRowWithAutoHeight.current = true;
          rowsHeightLookup.current[row.id].autoHeight = true;
        } else {
          baseRowHeight = rowHeightFromUser != null ? rowHeightFromUser : rowHeightFromDensity;
          rowsHeightLookup.current[row.id].needsFirstMeasurement = false;
          rowsHeightLookup.current[row.id].autoHeight = false;
        }
      } else {
        rowsHeightLookup.current[row.id].needsFirstMeasurement = false;
      }
      const existingBaseSizes = Object.entries(sizes).reduce((acc, [key, size]) => {
        if (/^base[A-Z]/.test(key)) {
          acc[key] = size;
        }
        return acc;
      }, {});
      const initialHeights = _extends({}, existingBaseSizes, {
        baseCenter: baseRowHeight
      });
      if (getRowSpacing) {
        var _spacing$top, _spacing$bottom;
        const indexRelativeToCurrentPage = apiRef.current.getRowIndexRelativeToVisibleRows(row.id);
        const spacing = getRowSpacing(_extends({}, row, {
          isFirstVisible: indexRelativeToCurrentPage === 0,
          isLastVisible: indexRelativeToCurrentPage === currentPage.rows.length - 1,
          indexRelativeToCurrentPage
        }));
        initialHeights.spacingTop = (_spacing$top = spacing.top) != null ? _spacing$top : 0;
        initialHeights.spacingBottom = (_spacing$bottom = spacing.bottom) != null ? _spacing$bottom : 0;
      }
      const processedSizes = apiRef.current.unstable_applyPipeProcessors("rowHeight", initialHeights, row);
      rowsHeightLookup.current[row.id].sizes = processedSizes;
      return processedSizes;
    };
    const positions = [];
    const currentPageTotalHeight = currentPage.rows.reduce((acc, row) => {
      positions.push(acc);
      let maximumBaseSize = 0;
      let otherSizes = 0;
      const processedSizes = calculateRowProcessedSizes(row);
      Object.entries(processedSizes).forEach(([size, value]) => {
        if (/^base[A-Z]/.test(size)) {
          maximumBaseSize = value > maximumBaseSize ? value : maximumBaseSize;
        } else {
          otherSizes += value;
        }
      });
      return acc + maximumBaseSize + otherSizes;
    }, 0);
    pinnedRows == null ? void 0 : (_pinnedRows$top = pinnedRows.top) == null ? void 0 : _pinnedRows$top.forEach((row) => {
      calculateRowProcessedSizes(row);
    });
    pinnedRows == null ? void 0 : (_pinnedRows$bottom = pinnedRows.bottom) == null ? void 0 : _pinnedRows$bottom.forEach((row) => {
      calculateRowProcessedSizes(row);
    });
    apiRef.current.setState((state) => {
      return _extends({}, state, {
        rowsMeta: {
          currentPageTotalHeight,
          positions
        }
      });
    });
    if (!hasRowWithAutoHeight.current) {
      lastMeasuredRowIndex.current = Infinity;
    }
    apiRef.current.forceUpdate();
  }, [apiRef, currentPage.rows, rowHeightFromDensity, getRowHeightProp, getRowSpacing, getEstimatedRowHeight, pinnedRows]);
  const getRowHeight = React117.useCallback((rowId) => {
    const height = rowsHeightLookup.current[rowId];
    return height ? height.sizes.baseCenter : rowHeightFromDensity;
  }, [rowHeightFromDensity]);
  const getRowInternalSizes = (rowId) => {
    var _rowsHeightLookup$cur;
    return (_rowsHeightLookup$cur = rowsHeightLookup.current[rowId]) == null ? void 0 : _rowsHeightLookup$cur.sizes;
  };
  const setRowHeight = React117.useCallback((id, height) => {
    rowsHeightLookup.current[id].sizes.baseCenter = height;
    rowsHeightLookup.current[id].isResized = true;
    rowsHeightLookup.current[id].needsFirstMeasurement = false;
    hydrateRowsMeta();
  }, [hydrateRowsMeta]);
  const debouncedHydrateRowsMeta = React117.useMemo(() => debounce_default(hydrateRowsMeta), [hydrateRowsMeta]);
  const storeMeasuredRowHeight = React117.useCallback((id, height, position) => {
    if (!rowsHeightLookup.current[id] || !rowsHeightLookup.current[id].autoHeight) {
      return;
    }
    const needsHydration = rowsHeightLookup.current[id].sizes[`base${capitalize_default(position)}`] !== height;
    rowsHeightLookup.current[id].needsFirstMeasurement = false;
    rowsHeightLookup.current[id].sizes[`base${capitalize_default(position)}`] = height;
    if (needsHydration) {
      debouncedHydrateRowsMeta();
    }
  }, [debouncedHydrateRowsMeta]);
  const rowHasAutoHeight = React117.useCallback((id) => {
    var _rowsHeightLookup$cur2;
    return ((_rowsHeightLookup$cur2 = rowsHeightLookup.current[id]) == null ? void 0 : _rowsHeightLookup$cur2.autoHeight) || false;
  }, []);
  const getLastMeasuredRowIndex = React117.useCallback(() => {
    return lastMeasuredRowIndex.current;
  }, []);
  const setLastMeasuredRowIndex = React117.useCallback((index) => {
    if (hasRowWithAutoHeight.current && index > lastMeasuredRowIndex.current) {
      lastMeasuredRowIndex.current = index;
    }
  }, []);
  const resetRowHeights = React117.useCallback(() => {
    rowsHeightLookup.current = {};
    hydrateRowsMeta();
  }, [hydrateRowsMeta]);
  React117.useEffect(() => {
    hydrateRowsMeta();
  }, [rowHeightFromDensity, filterState, paginationState, sortingState, hydrateRowsMeta]);
  useGridRegisterPipeApplier(apiRef, "rowHeight", hydrateRowsMeta);
  const rowsMetaApi = {
    unstable_getLastMeasuredRowIndex: getLastMeasuredRowIndex,
    unstable_setLastMeasuredRowIndex: setLastMeasuredRowIndex,
    unstable_rowHasAutoHeight: rowHasAutoHeight,
    unstable_getRowHeight: getRowHeight,
    unstable_getRowInternalSizes: getRowInternalSizes,
    unstable_setRowHeight: setRowHeight,
    unstable_storeRowHeightMeasurement: storeMeasuredRowHeight,
    resetRowHeights
  };
  useGridApiMethod(apiRef, rowsMetaApi, "GridRowsMetaApi");
};

// node_modules/@mui/x-data-grid/hooks/features/statePersistence/useGridStatePersistence.js
var React118 = __toESM(require_react());
var useGridStatePersistence = (apiRef) => {
  const exportState = React118.useCallback((params = {}) => {
    const stateToExport = apiRef.current.unstable_applyPipeProcessors("exportState", {}, params);
    return stateToExport;
  }, [apiRef]);
  const restoreState = React118.useCallback((stateToRestore) => {
    const response = apiRef.current.unstable_applyPipeProcessors("restoreState", {
      callbacks: []
    }, {
      stateToRestore
    });
    response.callbacks.forEach((callback) => {
      callback();
    });
    apiRef.current.forceUpdate();
  }, [apiRef]);
  const statePersistenceApi = {
    exportState,
    restoreState
  };
  useGridApiMethod(apiRef, statePersistenceApi, "GridStatePersistenceApi");
};

// node_modules/@mui/x-data-grid/hooks/features/columns/useGridColumnSpanning.js
var React119 = __toESM(require_react());
var useGridColumnSpanning = (apiRef) => {
  const lookup = React119.useRef({});
  const setCellColSpanInfo = React119.useCallback((rowId, columnIndex, cellColSpanInfo) => {
    const sizes = lookup.current;
    if (!sizes[rowId]) {
      sizes[rowId] = {};
    }
    sizes[rowId][columnIndex] = cellColSpanInfo;
  }, []);
  const getCellColSpanInfo = React119.useCallback((rowId, columnIndex) => {
    var _lookup$current$rowId;
    return (_lookup$current$rowId = lookup.current[rowId]) == null ? void 0 : _lookup$current$rowId[columnIndex];
  }, []);
  const calculateCellColSpan = React119.useCallback((params) => {
    const {
      columnIndex,
      rowId,
      minFirstColumnIndex,
      maxLastColumnIndex,
      columns: columns2
    } = params;
    const columnsLength = columns2.length;
    const column = columns2[columnIndex];
    const colSpan = typeof column.colSpan === "function" ? column.colSpan(apiRef.current.getCellParams(rowId, column.field)) : column.colSpan;
    if (!colSpan || colSpan === 1) {
      setCellColSpanInfo(rowId, columnIndex, {
        spannedByColSpan: false,
        cellProps: {
          colSpan: 1,
          width: column.computedWidth
        }
      });
      return {
        colSpan: 1
      };
    }
    let width = column.computedWidth;
    for (let j = 1; j < colSpan; j += 1) {
      const nextColumnIndex = columnIndex + j;
      if (nextColumnIndex >= minFirstColumnIndex && nextColumnIndex < maxLastColumnIndex) {
        const nextColumn = columns2[nextColumnIndex];
        width += nextColumn.computedWidth;
        setCellColSpanInfo(rowId, columnIndex + j, {
          spannedByColSpan: true,
          rightVisibleCellIndex: Math.min(columnIndex + colSpan, columnsLength - 1),
          leftVisibleCellIndex: columnIndex
        });
      }
      setCellColSpanInfo(rowId, columnIndex, {
        spannedByColSpan: false,
        cellProps: {
          colSpan,
          width
        }
      });
    }
    return {
      colSpan
    };
  }, [apiRef, setCellColSpanInfo]);
  const calculateColSpan = React119.useCallback(({
    rowId,
    minFirstColumn,
    maxLastColumn,
    columns: columns2
  }) => {
    for (let i = minFirstColumn; i < maxLastColumn; i += 1) {
      const cellProps = calculateCellColSpan({
        columnIndex: i,
        rowId,
        minFirstColumnIndex: minFirstColumn,
        maxLastColumnIndex: maxLastColumn,
        columns: columns2
      });
      if (cellProps.colSpan > 1) {
        i += cellProps.colSpan - 1;
      }
    }
  }, [calculateCellColSpan]);
  const columnSpanningApi = {
    unstable_getCellColSpanInfo: getCellColSpanInfo,
    unstable_calculateColSpan: calculateColSpan
  };
  useGridApiMethod(apiRef, columnSpanningApi, "GridColumnSpanningAPI");
  const handleColumnReorderChange = React119.useCallback(() => {
    lookup.current = {};
  }, []);
  useGridApiEventHandler(apiRef, "columnOrderChange", handleColumnReorderChange);
};

// node_modules/@mui/x-data-grid/hooks/features/columnGrouping/useGridColumnGroupingPreProcessors.js
init_extends();
var React120 = __toESM(require_react());
var useGridColumnGroupingPreProcessors = (apiRef, props) => {
  var _props$experimentalFe2;
  const addHeaderGroups = React120.useCallback((columnsState) => {
    var _props$experimentalFe;
    if (!((_props$experimentalFe = props.experimentalFeatures) != null && _props$experimentalFe.columnGrouping)) {
      return columnsState;
    }
    const unwrappedGroupingModel = unwrapGroupingColumnModel(props.columnGroupingModel);
    columnsState.all.forEach((field) => {
      var _unwrappedGroupingMod, _unwrappedGroupingMod2;
      const newGroupPath = (_unwrappedGroupingMod = unwrappedGroupingModel[field]) != null ? _unwrappedGroupingMod : [];
      const lookupElement = columnsState.lookup[field];
      if (hasGroupPath(lookupElement) && isDeepEqual(newGroupPath, lookupElement == null ? void 0 : lookupElement.groupPath)) {
        return;
      }
      columnsState.lookup[field] = _extends({}, columnsState.lookup[field], {
        groupPath: (_unwrappedGroupingMod2 = unwrappedGroupingModel[field]) != null ? _unwrappedGroupingMod2 : []
      });
    });
    return columnsState;
  }, [props.columnGroupingModel, (_props$experimentalFe2 = props.experimentalFeatures) == null ? void 0 : _props$experimentalFe2.columnGrouping]);
  useGridRegisterPipeProcessor(apiRef, "hydrateColumns", addHeaderGroups);
};

// node_modules/@mui/x-data-grid/DataGrid/useDataGridComponent.js
var useDataGridComponent = (props) => {
  var _props$experimentalFe, _props$experimentalFe2;
  const apiRef = useGridInitialization(void 0, props);
  useGridColumnGroupingPreProcessors(apiRef, props);
  useGridSelectionPreProcessors(apiRef, props);
  useGridRowsPreProcessors(apiRef);
  useGridInitializeState(selectionStateInitializer, apiRef, props);
  useGridInitializeState(columnsStateInitializer, apiRef, props);
  useGridInitializeState(columnGroupsStateInitializer, apiRef, props);
  useGridInitializeState(rowsStateInitializer, apiRef, props);
  useGridInitializeState((_props$experimentalFe = props.experimentalFeatures) != null && _props$experimentalFe.newEditingApi ? editingStateInitializer2 : editingStateInitializer, apiRef, props);
  useGridInitializeState(focusStateInitializer, apiRef, props);
  useGridInitializeState(sortingStateInitializer, apiRef, props);
  useGridInitializeState(preferencePanelStateInitializer, apiRef, props);
  useGridInitializeState(filterStateInitializer, apiRef, props);
  useGridInitializeState(densityStateInitializer, apiRef, props);
  useGridInitializeState(paginationStateInitializer, apiRef, props);
  useGridInitializeState(rowsMetaStateInitializer, apiRef, props);
  useGridInitializeState(columnMenuStateInitializer, apiRef, props);
  useGridKeyboardNavigation(apiRef, props);
  useGridSelection(apiRef, props);
  useGridColumns(apiRef, props);
  useGridRows(apiRef, props);
  useGridParamsApi(apiRef);
  useGridColumnSpanning(apiRef);
  useGridColumnGrouping(apiRef, props);
  const useGridEditing3 = (_props$experimentalFe2 = props.experimentalFeatures) != null && _props$experimentalFe2.newEditingApi ? useGridEditing2 : useGridEditing;
  useGridEditing3(apiRef, props);
  useGridFocus(apiRef, props);
  useGridPreferencesPanel(apiRef, props);
  useGridFilter(apiRef, props);
  useGridSorting(apiRef, props);
  useGridDensity(apiRef, props);
  useGridPagination(apiRef, props);
  useGridRowsMeta(apiRef, props);
  useGridScroll(apiRef, props);
  useGridColumnMenu(apiRef);
  useGridCsvExport(apiRef);
  useGridPrintExport(apiRef, props);
  useGridClipboard(apiRef);
  useGridDimensions(apiRef, props);
  useGridEvents(apiRef, props);
  useGridStatePersistence(apiRef);
  return apiRef;
};

// node_modules/@mui/x-data-grid/DataGrid/useDataGridProps.js
init_extends();
var React121 = __toESM(require_react());
var DATA_GRID_FORCED_PROPS = {
  apiRef: void 0,
  disableMultipleColumnsFiltering: true,
  disableMultipleColumnsSorting: true,
  disableMultipleSelection: true,
  throttleRowsMs: void 0,
  hideFooterRowCount: false,
  pagination: true,
  checkboxSelectionVisibleOnly: false,
  disableColumnReorder: true,
  disableColumnResize: true,
  signature: "DataGrid"
};
var MAX_PAGE_SIZE = 100;
var DATA_GRID_PROPS_DEFAULT_VALUES = {
  autoHeight: false,
  autoPageSize: false,
  checkboxSelection: false,
  checkboxSelectionVisibleOnly: false,
  columnBuffer: 3,
  rowBuffer: 3,
  columnThreshold: 3,
  rowThreshold: 3,
  density: GridDensityTypes.Standard,
  disableExtendRowFullWidth: false,
  disableColumnFilter: false,
  disableColumnMenu: false,
  disableColumnSelector: false,
  disableDensitySelector: false,
  disableMultipleColumnsFiltering: false,
  disableMultipleSelection: false,
  disableMultipleColumnsSorting: false,
  disableSelectionOnClick: false,
  disableVirtualization: false,
  disableIgnoreModificationsIfProcessingProps: false,
  editMode: GridEditModes.Cell,
  filterMode: GridFeatureModeConstant.client,
  headerHeight: 56,
  hideFooter: false,
  hideFooterPagination: false,
  hideFooterRowCount: false,
  hideFooterSelectedRowCount: false,
  logger: console,
  logLevel: false ? "error" : "warn",
  pagination: false,
  paginationMode: GridFeatureModeConstant.client,
  rowHeight: 52,
  rowsPerPageOptions: [25, 50, 100],
  rowSpacingType: "margin",
  showCellRightBorder: false,
  showColumnRightBorder: false,
  sortingOrder: ["asc", "desc", null],
  sortingMode: GridFeatureModeConstant.client,
  throttleRowsMs: 0,
  disableColumnReorder: false,
  disableColumnResize: false,
  keepNonExistentRowsSelected: false
};
var useDataGridProps = (inProps) => {
  if (inProps.pageSize > MAX_PAGE_SIZE) {
    throw new Error(`'props.pageSize' cannot exceed 100 in DataGrid.`);
  }
  const themedProps = useThemeProps({
    props: inProps,
    name: "MuiDataGrid"
  });
  const localeText = React121.useMemo(() => _extends({}, GRID_DEFAULT_LOCALE_TEXT, themedProps.localeText), [themedProps.localeText]);
  const components = React121.useMemo(() => {
    const overrides = themedProps.components;
    if (!overrides) {
      return _extends({}, DATA_GRID_DEFAULT_SLOTS_COMPONENTS);
    }
    const mergedComponents = {};
    Object.entries(DATA_GRID_DEFAULT_SLOTS_COMPONENTS).forEach(([key, defaultComponent]) => {
      mergedComponents[key] = overrides[key] === void 0 ? defaultComponent : overrides[key];
    });
    return mergedComponents;
  }, [themedProps.components]);
  return React121.useMemo(() => _extends({}, DATA_GRID_PROPS_DEFAULT_VALUES, themedProps, {
    localeText,
    components
  }, DATA_GRID_FORCED_PROPS), [themedProps, localeText, components]);
};

// node_modules/@mui/x-data-grid/components/DataGridVirtualScroller.js
init_extends();
init_objectWithoutPropertiesLoose();
var React126 = __toESM(require_react());

// node_modules/@mui/x-data-grid/components/virtualization/GridVirtualScroller.js
init_extends();
init_objectWithoutPropertiesLoose();
var React122 = __toESM(require_react());
init_clsx_m();
var import_jsx_runtime88 = __toESM(require_jsx_runtime());
var _excluded48 = ["className"];
var useUtilityClasses32 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["virtualScroller"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
var VirtualScrollerRoot = styled_default("div", {
  name: "MuiDataGrid",
  slot: "VirtualScroller",
  overridesResolver: (props, styles) => styles.virtualScroller
})({
  overflow: "auto",
  position: "relative",
  "@media print": {
    overflow: "hidden"
  }
});
var GridVirtualScroller = /* @__PURE__ */ React122.forwardRef(function GridVirtualScroller2(props, ref) {
  const {
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded48);
  const rootProps = useGridRootProps();
  const ownerState = {
    classes: rootProps.classes
  };
  const classes = useUtilityClasses32(ownerState);
  return /* @__PURE__ */ (0, import_jsx_runtime88.jsx)(VirtualScrollerRoot, _extends({
    ref,
    className: clsx_m_default(classes.root, className)
  }, other));
});

// node_modules/@mui/x-data-grid/components/virtualization/GridVirtualScrollerContent.js
init_extends();
init_objectWithoutPropertiesLoose();
var React123 = __toESM(require_react());
init_clsx_m();
var import_jsx_runtime89 = __toESM(require_jsx_runtime());
var _excluded49 = ["className", "style"];
var useUtilityClasses33 = (ownerState) => {
  const {
    classes,
    overflowedContent
  } = ownerState;
  const slots = {
    root: ["virtualScrollerContent", overflowedContent && "virtualScrollerContent--overflowed"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
var VirtualScrollerContentRoot = styled_default("div", {
  name: "MuiDataGrid",
  slot: "VirtualScrollerContent",
  overridesResolver: (props, styles) => styles.virtualScrollerContent
})({});
var GridVirtualScrollerContent = /* @__PURE__ */ React123.forwardRef(function GridVirtualScrollerContent2(props, ref) {
  const {
    className,
    style
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded49);
  const rootProps = useGridRootProps();
  const ownerState = {
    classes: rootProps.classes,
    overflowedContent: !rootProps.autoHeight && (style == null ? void 0 : style.minHeight) === "auto"
  };
  const classes = useUtilityClasses33(ownerState);
  return /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(VirtualScrollerContentRoot, _extends({
    ref,
    className: clsx_m_default(classes.root, className),
    style
  }, other));
});

// node_modules/@mui/x-data-grid/components/virtualization/GridVirtualScrollerRenderZone.js
init_extends();
init_objectWithoutPropertiesLoose();
var React124 = __toESM(require_react());
init_clsx_m();
var import_jsx_runtime90 = __toESM(require_jsx_runtime());
var _excluded50 = ["className"];
var useUtilityClasses34 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["virtualScrollerRenderZone"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
var VirtualScrollerRenderZoneRoot = styled_default("div", {
  name: "MuiDataGrid",
  slot: "VirtualScrollerRenderZone",
  overridesResolver: (props, styles) => styles.virtualScrollerRenderZone
})({
  position: "absolute",
  display: "flex",
  flexDirection: "column"
});
var GridVirtualScrollerRenderZone = /* @__PURE__ */ React124.forwardRef(function GridVirtualScrollerRenderZone2(props, ref) {
  const {
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded50);
  const rootProps = useGridRootProps();
  const ownerState = {
    classes: rootProps.classes
  };
  const classes = useUtilityClasses34(ownerState);
  return /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(VirtualScrollerRenderZoneRoot, _extends({
    ref,
    className: clsx_m_default(classes.root, className)
  }, other));
});

// node_modules/@mui/x-data-grid/hooks/features/virtualization/useGridVirtualScroller.js
init_objectWithoutPropertiesLoose();
init_extends();
var React125 = __toESM(require_react());
var ReactDOM = __toESM(require_react_dom());
init_utils();
var import_jsx_runtime91 = __toESM(require_jsx_runtime());
var _excluded51 = ["style"];
function binarySearch(offset, positions, sliceStart = 0, sliceEnd = positions.length) {
  if (positions.length <= 0) {
    return -1;
  }
  if (sliceStart >= sliceEnd) {
    return sliceStart;
  }
  const pivot = sliceStart + Math.floor((sliceEnd - sliceStart) / 2);
  const itemOffset = positions[pivot];
  return offset <= itemOffset ? binarySearch(offset, positions, sliceStart, pivot) : binarySearch(offset, positions, pivot + 1, sliceEnd);
}
function exponentialSearch(offset, positions, index) {
  let interval = 1;
  while (index < positions.length && positions[index] < offset) {
    index += interval;
    interval *= 2;
  }
  return binarySearch(offset, positions, Math.floor(index / 2), Math.min(index, positions.length));
}
var getRenderableIndexes = ({
  firstIndex,
  lastIndex,
  buffer,
  minFirstIndex,
  maxLastIndex
}) => {
  return [clamp(firstIndex - buffer, minFirstIndex, maxLastIndex), clamp(lastIndex + buffer, minFirstIndex, maxLastIndex)];
};
var useGridVirtualScroller = (props) => {
  var _currentPage$range3, _currentPage$range4;
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const visibleColumns = useGridSelector(apiRef, gridVisibleColumnDefinitionsSelector);
  const {
    ref,
    disableVirtualization,
    onRenderZonePositioning,
    renderZoneMinColumnIndex = 0,
    renderZoneMaxColumnIndex = visibleColumns.length,
    getRowProps
  } = props;
  const columnPositions = useGridSelector(apiRef, gridColumnPositionsSelector);
  const columnsTotalWidth = useGridSelector(apiRef, gridColumnsTotalWidthSelector);
  const rowHeight = useGridSelector(apiRef, gridDensityRowHeightSelector);
  const cellFocus = useGridSelector(apiRef, gridFocusCellSelector);
  const cellTabIndex = useGridSelector(apiRef, gridTabIndexCellSelector);
  const rowsMeta = useGridSelector(apiRef, gridRowsMetaSelector);
  const editRowsState = useGridSelector(apiRef, gridEditRowsStateSelector);
  const selectedRowsLookup = useGridSelector(apiRef, selectedIdsLookupSelector);
  const currentPage = useGridVisibleRows(apiRef, rootProps);
  const renderZoneRef = React125.useRef(null);
  const rootRef = React125.useRef(null);
  const handleRef = useForkRef_default(ref, rootRef);
  const [renderContext, setRenderContext] = React125.useState(null);
  const prevRenderContext = React125.useRef(renderContext);
  const scrollPosition = React125.useRef({
    top: 0,
    left: 0
  });
  const [containerWidth, setContainerWidth] = React125.useState(null);
  const prevTotalWidth = React125.useRef(columnsTotalWidth);
  const getNearestIndexToRender = React125.useCallback((offset) => {
    var _currentPage$range, _currentPage$range2;
    const lastMeasuredIndexRelativeToAllRows = apiRef.current.unstable_getLastMeasuredRowIndex();
    const lastMeasuredIndexRelativeToCurrentPage = lastMeasuredIndexRelativeToAllRows - (((_currentPage$range = currentPage.range) == null ? void 0 : _currentPage$range.firstRowIndex) || 0);
    const lastMeasuredIndex = Math.max(0, lastMeasuredIndexRelativeToCurrentPage);
    let allRowsMeasured = lastMeasuredIndex === Infinity;
    if ((_currentPage$range2 = currentPage.range) != null && _currentPage$range2.lastRowIndex && !allRowsMeasured) {
      allRowsMeasured = lastMeasuredIndex >= currentPage.range.lastRowIndex;
    }
    if (allRowsMeasured || rowsMeta.positions[lastMeasuredIndex] >= offset) {
      return binarySearch(offset, rowsMeta.positions);
    }
    return exponentialSearch(offset, rowsMeta.positions, lastMeasuredIndex);
  }, [apiRef, (_currentPage$range3 = currentPage.range) == null ? void 0 : _currentPage$range3.firstRowIndex, (_currentPage$range4 = currentPage.range) == null ? void 0 : _currentPage$range4.lastRowIndex, rowsMeta.positions]);
  const computeRenderContext = React125.useCallback(() => {
    if (disableVirtualization) {
      return {
        firstRowIndex: 0,
        lastRowIndex: currentPage.rows.length,
        firstColumnIndex: 0,
        lastColumnIndex: visibleColumns.length
      };
    }
    const {
      top,
      left
    } = scrollPosition.current;
    const firstRowIndex = Math.min(getNearestIndexToRender(top), rowsMeta.positions.length - 1);
    const lastRowIndex = rootProps.autoHeight ? firstRowIndex + currentPage.rows.length : getNearestIndexToRender(top + rootRef.current.clientHeight);
    let hasRowWithAutoHeight = false;
    let firstColumnIndex = 0;
    let lastColumnIndex = columnPositions.length;
    const [firstRowToRender, lastRowToRender] = getRenderableIndexes({
      firstIndex: firstRowIndex,
      lastIndex: lastRowIndex,
      minFirstIndex: 0,
      maxLastIndex: currentPage.rows.length,
      buffer: rootProps.rowBuffer
    });
    for (let i = firstRowToRender; i < lastRowToRender && !hasRowWithAutoHeight; i += 1) {
      const row = currentPage.rows[i];
      hasRowWithAutoHeight = apiRef.current.unstable_rowHasAutoHeight(row.id);
    }
    if (!hasRowWithAutoHeight) {
      firstColumnIndex = binarySearch(left, columnPositions);
      lastColumnIndex = binarySearch(left + containerWidth, columnPositions);
    }
    return {
      firstRowIndex,
      lastRowIndex,
      firstColumnIndex,
      lastColumnIndex
    };
  }, [disableVirtualization, getNearestIndexToRender, rowsMeta.positions.length, rootProps.autoHeight, rootProps.rowBuffer, currentPage.rows, columnPositions, visibleColumns.length, apiRef, containerWidth]);
  React125.useEffect(() => {
    if (disableVirtualization) {
      renderZoneRef.current.style.transform = `translate3d(0px, 0px, 0px)`;
    } else {
      rootRef.current.scrollLeft = 0;
      rootRef.current.scrollTop = 0;
    }
  }, [disableVirtualization]);
  React125.useEffect(() => {
    setContainerWidth(rootRef.current.clientWidth);
  }, [rowsMeta.currentPageTotalHeight]);
  const handleResize = React125.useCallback((params) => {
    setContainerWidth(params.width);
  }, []);
  useGridApiEventHandler(apiRef, "resize", handleResize);
  const updateRenderZonePosition = React125.useCallback((nextRenderContext) => {
    const [firstRowToRender, lastRowToRender] = getRenderableIndexes({
      firstIndex: nextRenderContext.firstRowIndex,
      lastIndex: nextRenderContext.lastRowIndex,
      minFirstIndex: 0,
      maxLastIndex: currentPage.rows.length,
      buffer: rootProps.rowBuffer
    });
    const [initialFirstColumnToRender] = getRenderableIndexes({
      firstIndex: nextRenderContext.firstColumnIndex,
      lastIndex: nextRenderContext.lastColumnIndex,
      minFirstIndex: renderZoneMinColumnIndex,
      maxLastIndex: renderZoneMaxColumnIndex,
      buffer: rootProps.columnBuffer
    });
    const firstColumnToRender = getFirstNonSpannedColumnToRender({
      firstColumnToRender: initialFirstColumnToRender,
      apiRef,
      firstRowToRender,
      lastRowToRender,
      visibleRows: currentPage.rows
    });
    const top = gridRowsMetaSelector(apiRef.current.state).positions[firstRowToRender];
    const left = gridColumnPositionsSelector(apiRef)[firstColumnToRender];
    renderZoneRef.current.style.transform = `translate3d(${left}px, ${top}px, 0px)`;
    if (typeof onRenderZonePositioning === "function") {
      onRenderZonePositioning({
        top,
        left
      });
    }
  }, [apiRef, currentPage.rows, onRenderZonePositioning, renderZoneMinColumnIndex, renderZoneMaxColumnIndex, rootProps.columnBuffer, rootProps.rowBuffer]);
  React125.useLayoutEffect(() => {
    if (renderContext) {
      updateRenderZonePosition(renderContext);
    }
  }, [renderContext, updateRenderZonePosition]);
  const updateRenderContext = React125.useCallback((nextRenderContext) => {
    setRenderContext(nextRenderContext);
    const [firstRowToRender, lastRowToRender] = getRenderableIndexes({
      firstIndex: nextRenderContext.firstRowIndex,
      lastIndex: nextRenderContext.lastRowIndex,
      minFirstIndex: 0,
      maxLastIndex: currentPage.rows.length,
      buffer: rootProps.rowBuffer
    });
    apiRef.current.publishEvent("renderedRowsIntervalChange", {
      firstRowToRender,
      lastRowToRender
    });
    prevRenderContext.current = nextRenderContext;
  }, [apiRef, setRenderContext, prevRenderContext, currentPage.rows.length, rootProps.rowBuffer]);
  React125.useEffect(() => {
    if (containerWidth == null) {
      return;
    }
    const initialRenderContext = computeRenderContext();
    updateRenderContext(initialRenderContext);
    const {
      top,
      left
    } = scrollPosition.current;
    const params = {
      top,
      left,
      renderContext: initialRenderContext
    };
    apiRef.current.publishEvent("rowsScroll", params);
  }, [apiRef, computeRenderContext, containerWidth, updateRenderContext]);
  const handleScroll = (event) => {
    const {
      scrollTop,
      scrollLeft
    } = event.currentTarget;
    scrollPosition.current.top = scrollTop;
    scrollPosition.current.left = scrollLeft;
    if (scrollLeft < 0 || scrollTop < 0 || !prevRenderContext.current) {
      return;
    }
    const nextRenderContext = disableVirtualization ? prevRenderContext.current : computeRenderContext();
    const topRowsScrolledSincePreviousRender = Math.abs(nextRenderContext.firstRowIndex - prevRenderContext.current.firstRowIndex);
    const bottomRowsScrolledSincePreviousRender = Math.abs(nextRenderContext.lastRowIndex - prevRenderContext.current.lastRowIndex);
    const topColumnsScrolledSincePreviousRender = Math.abs(nextRenderContext.firstColumnIndex - prevRenderContext.current.firstColumnIndex);
    const bottomColumnsScrolledSincePreviousRender = Math.abs(nextRenderContext.lastColumnIndex - prevRenderContext.current.lastColumnIndex);
    const shouldSetState = topRowsScrolledSincePreviousRender >= rootProps.rowThreshold || bottomRowsScrolledSincePreviousRender >= rootProps.rowThreshold || topColumnsScrolledSincePreviousRender >= rootProps.columnThreshold || bottomColumnsScrolledSincePreviousRender >= rootProps.columnThreshold || prevTotalWidth.current !== columnsTotalWidth;
    apiRef.current.publishEvent("rowsScroll", {
      top: scrollTop,
      left: scrollLeft,
      renderContext: shouldSetState ? nextRenderContext : prevRenderContext.current
    }, event);
    if (shouldSetState) {
      ReactDOM.flushSync(() => {
        updateRenderContext(nextRenderContext);
      });
      prevTotalWidth.current = columnsTotalWidth;
    }
  };
  const handleWheel = (event) => {
    apiRef.current.publishEvent("virtualScrollerWheel", {}, event);
  };
  const handleTouchMove = (event) => {
    apiRef.current.publishEvent("virtualScrollerTouchMove", {}, event);
  };
  const getRows = (params = {
    renderContext
  }) => {
    const {
      renderContext: nextRenderContext,
      minFirstColumn = renderZoneMinColumnIndex,
      maxLastColumn = renderZoneMaxColumnIndex,
      availableSpace = containerWidth,
      rowIndexOffset = 0,
      position = "center"
    } = params;
    if (!nextRenderContext || availableSpace == null) {
      return null;
    }
    const rowBuffer = !disableVirtualization ? rootProps.rowBuffer : 0;
    const columnBuffer = !disableVirtualization ? rootProps.columnBuffer : 0;
    const [firstRowToRender, lastRowToRender] = getRenderableIndexes({
      firstIndex: nextRenderContext.firstRowIndex,
      lastIndex: nextRenderContext.lastRowIndex,
      minFirstIndex: 0,
      maxLastIndex: currentPage.rows.length,
      buffer: rowBuffer
    });
    const renderedRows = [];
    if (params.rows) {
      params.rows.forEach((row) => {
        renderedRows.push(row);
        apiRef.current.unstable_calculateColSpan({
          rowId: row.id,
          minFirstColumn,
          maxLastColumn,
          columns: visibleColumns
        });
      });
    } else {
      if (!currentPage.range) {
        return null;
      }
      for (let i = firstRowToRender; i < lastRowToRender; i += 1) {
        const row = currentPage.rows[i];
        renderedRows.push(row);
        apiRef.current.unstable_calculateColSpan({
          rowId: row.id,
          minFirstColumn,
          maxLastColumn,
          columns: visibleColumns
        });
      }
    }
    const [initialFirstColumnToRender, lastColumnToRender] = getRenderableIndexes({
      firstIndex: nextRenderContext.firstColumnIndex,
      lastIndex: nextRenderContext.lastColumnIndex,
      minFirstIndex: minFirstColumn,
      maxLastIndex: maxLastColumn,
      buffer: columnBuffer
    });
    const firstColumnToRender = getFirstNonSpannedColumnToRender({
      firstColumnToRender: initialFirstColumnToRender,
      apiRef,
      firstRowToRender,
      lastRowToRender,
      visibleRows: currentPage.rows
    });
    const renderedColumns = visibleColumns.slice(firstColumnToRender, lastColumnToRender);
    const rows = [];
    for (let i = 0; i < renderedRows.length; i += 1) {
      var _currentPage$range5, _rootProps$components;
      const {
        id,
        model
      } = renderedRows[i];
      const lastVisibleRowIndex = firstRowToRender + i === currentPage.rows.length - 1;
      const baseRowHeight = !apiRef.current.unstable_rowHasAutoHeight(id) ? apiRef.current.unstable_getRowHeight(id) : "auto";
      let isSelected;
      if (selectedRowsLookup[id] == null) {
        isSelected = false;
      } else {
        isSelected = apiRef.current.isRowSelectable(id);
      }
      rows.push(/* @__PURE__ */ (0, import_jsx_runtime91.jsx)(rootProps.components.Row, _extends({
        row: model,
        rowId: id,
        rowHeight: baseRowHeight,
        cellFocus,
        cellTabIndex,
        editRowsState,
        renderedColumns,
        visibleColumns,
        firstColumnToRender,
        lastColumnToRender,
        selected: isSelected,
        index: rowIndexOffset + ((currentPage == null ? void 0 : (_currentPage$range5 = currentPage.range) == null ? void 0 : _currentPage$range5.firstRowIndex) || 0) + firstRowToRender + i,
        containerWidth: availableSpace,
        isLastVisible: lastVisibleRowIndex,
        position
      }, typeof getRowProps === "function" ? getRowProps(id, model) : {}, (_rootProps$components = rootProps.componentsProps) == null ? void 0 : _rootProps$components.row), id));
    }
    return rows;
  };
  const needsHorizontalScrollbar = containerWidth && columnsTotalWidth > containerWidth;
  const contentSize = React125.useMemo(() => {
    const height = Math.max(rowsMeta.currentPageTotalHeight, 1);
    let shouldExtendContent = false;
    if (rootRef != null && rootRef.current && height <= (rootRef == null ? void 0 : rootRef.current.clientHeight)) {
      shouldExtendContent = true;
    }
    const size = {
      width: needsHorizontalScrollbar ? columnsTotalWidth : "auto",
      height,
      minHeight: shouldExtendContent ? "100%" : "auto"
    };
    if (rootProps.autoHeight && currentPage.rows.length === 0) {
      size.height = 2 * rowHeight;
    }
    return size;
  }, [rootRef, columnsTotalWidth, rowsMeta.currentPageTotalHeight, currentPage.rows.length, needsHorizontalScrollbar, rootProps.autoHeight, rowHeight]);
  React125.useEffect(() => {
    apiRef.current.publishEvent("virtualScrollerContentSizeChange");
  }, [apiRef, contentSize]);
  if (rootProps.autoHeight && currentPage.rows.length === 0) {
    contentSize.height = 2 * rowHeight;
  }
  const rootStyle = {};
  if (!needsHorizontalScrollbar) {
    rootStyle.overflowX = "hidden";
  }
  if (rootProps.autoHeight) {
    rootStyle.overflowY = "hidden";
  }
  const getRenderContext = React125.useCallback(() => {
    return prevRenderContext.current;
  }, []);
  apiRef.current.unstable_getRenderContext = getRenderContext;
  return {
    renderContext,
    updateRenderZonePosition,
    getRows,
    getRootProps: (_ref = {}) => {
      let {
        style = {}
      } = _ref, other = _objectWithoutPropertiesLoose(_ref, _excluded51);
      return _extends({
        ref: handleRef,
        onScroll: handleScroll,
        onWheel: handleWheel,
        onTouchMove: handleTouchMove,
        style: _extends({}, style, rootStyle)
      }, other);
    },
    getContentProps: ({
      style = {}
    } = {}) => ({
      style: _extends({}, style, contentSize)
    }),
    getRenderZoneProps: () => ({
      ref: renderZoneRef
    })
  };
};

// node_modules/@mui/x-data-grid/components/DataGridVirtualScroller.js
var import_jsx_runtime92 = __toESM(require_jsx_runtime());
var _excluded52 = ["className", "disableVirtualization"];
var DataGridVirtualScroller = /* @__PURE__ */ React126.forwardRef(function DataGridVirtualScroller2(props, ref) {
  const {
    className,
    disableVirtualization
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded52);
  const {
    getRootProps,
    getContentProps,
    getRenderZoneProps,
    getRows
  } = useGridVirtualScroller({
    ref,
    disableVirtualization
  });
  return /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(GridVirtualScroller, _extends({
    className
  }, getRootProps(other), {
    children: /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(GridVirtualScrollerContent, _extends({}, getContentProps(), {
      children: /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(GridVirtualScrollerRenderZone, _extends({}, getRenderZoneProps(), {
        children: getRows()
      }))
    }))
  }));
});

// node_modules/@mui/x-data-grid/components/DataGridColumnHeaders.js
init_extends();
init_objectWithoutPropertiesLoose();
var React131 = __toESM(require_react());

// node_modules/@mui/x-data-grid/hooks/features/columnHeaders/useGridColumnHeaders.js
init_extends();
var React128 = __toESM(require_react());
var ReactDOM2 = __toESM(require_react_dom());
init_utils();

// node_modules/@mui/x-data-grid/components/columnHeaders/GridColumnGroupHeader.js
init_extends();
var React127 = __toESM(require_react());
init_esm();
var import_jsx_runtime93 = __toESM(require_jsx_runtime());
var useUtilityClasses35 = (ownerState) => {
  const {
    classes,
    headerAlign,
    isDragging,
    showRightBorder,
    showColumnBorder,
    groupId
  } = ownerState;
  const slots = {
    root: ["columnHeader", headerAlign === "left" && "columnHeader--alignLeft", headerAlign === "center" && "columnHeader--alignCenter", headerAlign === "right" && "columnHeader--alignRight", isDragging && "columnHeader--moving", showRightBorder && "withBorder", showColumnBorder && "columnHeader--showColumnBorder", groupId === null ? "columnHeader--emptyGroup" : "columnHeader--filledGroup"],
    draggableContainer: ["columnHeaderDraggableContainer"],
    titleContainer: ["columnHeaderTitleContainer"],
    titleContainerContent: ["columnHeaderTitleContainerContent"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
function GridColumnGroupHeader(props) {
  var _apiRef$current$getRo, _columnGroupsLookup$g;
  const {
    groupId,
    width,
    depth,
    maxDepth,
    fields,
    height,
    colIndex,
    isLastColumn,
    extendRowFullWidth
  } = props;
  const rootProps = useGridRootProps();
  const apiRef = useGridApiContext();
  const columnGroupsLookup = useGridSelector(apiRef, gridColumnGroupsLookupSelector);
  const {
    hasScrollX,
    hasScrollY
  } = (_apiRef$current$getRo = apiRef.current.getRootDimensions()) != null ? _apiRef$current$getRo : {
    hasScrollX: false,
    hasScrollY: false
  };
  const group = groupId ? columnGroupsLookup[groupId] : {};
  const {
    headerName = groupId != null ? groupId : "",
    description = "",
    headerAlign = void 0
  } = group;
  let headerComponent;
  const render = groupId && ((_columnGroupsLookup$g = columnGroupsLookup[groupId]) == null ? void 0 : _columnGroupsLookup$g.renderHeaderGroup);
  const renderParams = {
    groupId,
    headerName,
    description,
    depth,
    maxDepth,
    fields,
    colIndex,
    isLastColumn
  };
  if (groupId && render) {
    headerComponent = render(renderParams);
  }
  const removeLastBorderRight = isLastColumn && hasScrollX && !hasScrollY;
  const showRightBorder = !isLastColumn ? rootProps.showColumnRightBorder : !removeLastBorderRight && !extendRowFullWidth;
  const showColumnBorder = rootProps.showColumnRightBorder;
  const ownerState = _extends({}, props, {
    classes: rootProps.classes,
    showRightBorder,
    showColumnBorder,
    headerAlign,
    depth,
    isDragging: false
  });
  const label = headerName != null ? headerName : groupId;
  const id = useId();
  const elementId = groupId === null ? `empty-group-cell-${id}` : groupId;
  const classes = useUtilityClasses35(ownerState);
  const headerClassName = typeof group.headerClassName === "function" ? group.headerClassName(renderParams) : group.headerClassName;
  return /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(GridGenericColumnHeaderItem, {
    classes,
    columnMenuOpen: false,
    colIndex,
    height,
    isResizing: false,
    sortDirection: null,
    hasFocus: false,
    tabIndex: -1,
    isDraggable: false,
    headerComponent,
    headerClassName,
    description,
    elementId,
    width,
    columnMenuIconButton: null,
    columnTitleIconButtons: null,
    resizable: false,
    label,
    "aria-colspan": fields.length,
    "data-fields": `|-${fields.join("-|-")}-|`,
    disableHeaderSeparator: true
  });
}

// node_modules/@mui/x-data-grid/hooks/features/columnHeaders/useGridColumnHeaders.js
var import_jsx_runtime94 = __toESM(require_jsx_runtime());
var MERGE_EMPTY_CELLS = true;
var GridColumnHeaderRow = styled_default("div", {
  name: "MuiDataGrid",
  slot: "ColumnHeaderRow",
  overridesResolver: (props, styles) => styles.columnHeaderRow
})(() => ({
  display: "flex"
}));
function isUIEvent(event) {
  return !!event.target;
}
var useGridColumnHeaders = (props) => {
  const {
    innerRef: innerRefProp,
    minColumnIndex = 0
  } = props;
  const [dragCol, setDragCol] = React128.useState("");
  const [resizeCol, setResizeCol] = React128.useState("");
  const apiRef = useGridApiContext();
  const visibleColumns = useGridSelector(apiRef, gridVisibleColumnDefinitionsSelector);
  const columnPositions = useGridSelector(apiRef, gridColumnPositionsSelector);
  const tabIndexState = useGridSelector(apiRef, gridTabIndexColumnHeaderSelector);
  const cellTabIndexState = useGridSelector(apiRef, gridTabIndexCellSelector);
  const columnHeaderFocus = useGridSelector(apiRef, gridFocusColumnHeaderSelector);
  const headerHeight = useGridSelector(apiRef, gridDensityHeaderHeightSelector);
  const headerGroupingMaxDepth = useGridSelector(apiRef, gridDensityHeaderGroupingMaxDepthSelector);
  const totalHeaderHeight = useGridSelector(apiRef, gridDensityTotalHeaderHeightSelector);
  const filterColumnLookup = useGridSelector(apiRef, gridFilterActiveItemsLookupSelector);
  const sortColumnLookup = useGridSelector(apiRef, gridSortColumnLookupSelector);
  const columnMenuState = useGridSelector(apiRef, gridColumnMenuSelector);
  const rootProps = useGridRootProps();
  const innerRef = React128.useRef(null);
  const handleInnerRef = useForkRef_default(innerRefProp, innerRef);
  const [renderContext, setRenderContext] = React128.useState(null);
  const prevRenderContext = React128.useRef(renderContext);
  const prevScrollLeft = React128.useRef(0);
  const currentPage = useGridVisibleRows(apiRef, rootProps);
  React128.useEffect(() => {
    apiRef.current.columnHeadersContainerElementRef.current.scrollLeft = 0;
  }, [apiRef]);
  const getFirstColumnIndexToRenderRef = React128.useRef(defaultMemoize(getFirstColumnIndexToRender, {
    equalityCheck: (a, b) => ["firstColumnIndex", "minColumnIndex", "columnBuffer"].every((key) => a[key] === b[key])
  }));
  const updateInnerPosition = React128.useCallback((nextRenderContext) => {
    const [firstRowToRender, lastRowToRender] = getRenderableIndexes({
      firstIndex: nextRenderContext.firstRowIndex,
      lastIndex: nextRenderContext.lastRowIndex,
      minFirstIndex: 0,
      maxLastIndex: currentPage.rows.length,
      buffer: rootProps.rowBuffer
    });
    const firstColumnToRender = getFirstColumnIndexToRenderRef.current({
      firstColumnIndex: nextRenderContext.firstColumnIndex,
      minColumnIndex,
      columnBuffer: rootProps.columnBuffer,
      firstRowToRender,
      lastRowToRender,
      apiRef,
      visibleRows: currentPage.rows
    });
    const offset = firstColumnToRender > 0 ? prevScrollLeft.current - columnPositions[firstColumnToRender] : prevScrollLeft.current;
    innerRef.current.style.transform = `translate3d(${-offset}px, 0px, 0px)`;
  }, [columnPositions, minColumnIndex, rootProps.columnBuffer, apiRef, currentPage.rows, rootProps.rowBuffer]);
  React128.useLayoutEffect(() => {
    if (renderContext) {
      updateInnerPosition(renderContext);
    }
  }, [renderContext, updateInnerPosition]);
  const handleScroll = React128.useCallback(({
    left,
    renderContext: nextRenderContext = null
  }, event) => {
    var _prevRenderContext$cu, _prevRenderContext$cu2;
    if (!innerRef.current) {
      return;
    }
    if (prevScrollLeft.current === left && ((_prevRenderContext$cu = prevRenderContext.current) == null ? void 0 : _prevRenderContext$cu.firstColumnIndex) === (nextRenderContext == null ? void 0 : nextRenderContext.firstColumnIndex) && ((_prevRenderContext$cu2 = prevRenderContext.current) == null ? void 0 : _prevRenderContext$cu2.lastColumnIndex) === (nextRenderContext == null ? void 0 : nextRenderContext.lastColumnIndex)) {
      return;
    }
    prevScrollLeft.current = left;
    let canUpdateInnerPosition = false;
    if (nextRenderContext !== prevRenderContext.current || !prevRenderContext.current) {
      if (isUIEvent(event)) {
        ReactDOM2.flushSync(() => {
          setRenderContext(nextRenderContext);
        });
        canUpdateInnerPosition = true;
      } else {
        setRenderContext(nextRenderContext);
      }
      prevRenderContext.current = nextRenderContext;
    } else {
      canUpdateInnerPosition = true;
    }
    if (nextRenderContext && canUpdateInnerPosition) {
      updateInnerPosition(nextRenderContext);
    }
  }, [updateInnerPosition]);
  const handleColumnResizeStart = React128.useCallback((params) => setResizeCol(params.field), []);
  const handleColumnResizeStop = React128.useCallback(() => setResizeCol(""), []);
  const handleColumnReorderStart = React128.useCallback((params) => setDragCol(params.field), []);
  const handleColumnReorderStop = React128.useCallback(() => setDragCol(""), []);
  useGridApiEventHandler(apiRef, "columnResizeStart", handleColumnResizeStart);
  useGridApiEventHandler(apiRef, "columnResizeStop", handleColumnResizeStop);
  useGridApiEventHandler(apiRef, "columnHeaderDragStart", handleColumnReorderStart);
  useGridApiEventHandler(apiRef, "columnHeaderDragEnd", handleColumnReorderStop);
  useGridApiEventHandler(apiRef, "rowsScroll", handleScroll);
  const getColumnsToRender = (params) => {
    const {
      renderContext: nextRenderContext = renderContext,
      minFirstColumn = minColumnIndex,
      maxLastColumn = visibleColumns.length
    } = params || {};
    if (!nextRenderContext) {
      return null;
    }
    const [firstRowToRender, lastRowToRender] = getRenderableIndexes({
      firstIndex: nextRenderContext.firstRowIndex,
      lastIndex: nextRenderContext.lastRowIndex,
      minFirstIndex: 0,
      maxLastIndex: currentPage.rows.length,
      buffer: rootProps.rowBuffer
    });
    const firstColumnToRender = getFirstColumnIndexToRenderRef.current({
      firstColumnIndex: nextRenderContext.firstColumnIndex,
      minColumnIndex: minFirstColumn,
      columnBuffer: rootProps.columnBuffer,
      apiRef,
      firstRowToRender,
      lastRowToRender,
      visibleRows: currentPage.rows
    });
    const lastColumnToRender = Math.min(nextRenderContext.lastColumnIndex + rootProps.columnBuffer, maxLastColumn);
    const renderedColumns = visibleColumns.slice(firstColumnToRender, lastColumnToRender);
    return {
      renderedColumns,
      firstColumnToRender,
      lastColumnToRender,
      minFirstColumn,
      maxLastColumn
    };
  };
  const getColumnHeaders = (params, other = {}) => {
    const columnsToRender = getColumnsToRender(params);
    if (columnsToRender == null) {
      return null;
    }
    const {
      renderedColumns,
      firstColumnToRender
    } = columnsToRender;
    const columns2 = [];
    for (let i = 0; i < renderedColumns.length; i += 1) {
      const column = renderedColumns[i];
      const columnIndex = firstColumnToRender + i;
      const isFirstColumn = columnIndex === 0;
      const hasTabbableElement = !(tabIndexState === null && cellTabIndexState === null);
      const tabIndex = tabIndexState !== null && tabIndexState.field === column.field || isFirstColumn && !hasTabbableElement ? 0 : -1;
      const hasFocus = columnHeaderFocus !== null && columnHeaderFocus.field === column.field;
      const open = columnMenuState.open && columnMenuState.field === column.field;
      columns2.push(/* @__PURE__ */ (0, import_jsx_runtime94.jsx)(GridColumnHeaderItem, _extends({}, sortColumnLookup[column.field], {
        columnMenuOpen: open,
        filterItemsCounter: filterColumnLookup[column.field] && filterColumnLookup[column.field].length,
        headerHeight,
        isDragging: column.field === dragCol,
        column,
        colIndex: columnIndex,
        isResizing: resizeCol === column.field,
        isLastColumn: columnIndex === visibleColumns.length - 1,
        extendRowFullWidth: !rootProps.disableExtendRowFullWidth,
        hasFocus,
        tabIndex
      }, other), column.field));
    }
    return /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(GridColumnHeaderRow, {
      role: "row",
      "aria-rowindex": headerGroupingMaxDepth + 1,
      children: columns2
    });
  };
  const getParents = (path = [], depth) => path.slice(0, depth + 1);
  const getColumnGroupHeaders = (params) => {
    if (headerGroupingMaxDepth === 0) {
      return null;
    }
    const columnsToRender = getColumnsToRender(params);
    if (columnsToRender == null) {
      return null;
    }
    const {
      renderedColumns,
      firstColumnToRender,
      lastColumnToRender,
      maxLastColumn
    } = columnsToRender;
    const columns2 = [];
    const headerToRender = [];
    for (let depth = 0; depth < headerGroupingMaxDepth; depth += 1) {
      var _visibleColumns$first, _visibleColumns$first2, _visibleColumns$first3;
      const initialHeader = [];
      let leftOverflow = 0;
      let columnIndex = firstColumnToRender - 1;
      const firstColumnToRenderGroup = (_visibleColumns$first = visibleColumns[firstColumnToRender]) == null ? void 0 : (_visibleColumns$first2 = _visibleColumns$first.groupPath) == null ? void 0 : _visibleColumns$first2[depth];
      const firstColumnToRenderGroupParents = getParents((_visibleColumns$first3 = visibleColumns[firstColumnToRender]) == null ? void 0 : _visibleColumns$first3.groupPath, depth);
      while (firstColumnToRenderGroup !== null && columnIndex >= minColumnIndex && (_visibleColumns$colum = visibleColumns[columnIndex]) != null && _visibleColumns$colum.groupPath && isDeepEqual(getParents((_visibleColumns$colum2 = visibleColumns[columnIndex]) == null ? void 0 : _visibleColumns$colum2.groupPath, depth), firstColumnToRenderGroupParents)) {
        var _visibleColumns$colum, _visibleColumns$colum2, _column$computedWidth;
        const column = visibleColumns[columnIndex];
        leftOverflow += (_column$computedWidth = column.computedWidth) != null ? _column$computedWidth : 0;
        if (initialHeader.length === 0) {
          var _column$computedWidth2;
          initialHeader.push({
            width: (_column$computedWidth2 = column.computedWidth) != null ? _column$computedWidth2 : 0,
            fields: [column.field],
            groupId: firstColumnToRenderGroup,
            groupParents: firstColumnToRenderGroupParents,
            colIndex: columnIndex
          });
        } else {
          var _column$computedWidth3;
          initialHeader[0].width += (_column$computedWidth3 = column.computedWidth) != null ? _column$computedWidth3 : 0;
          initialHeader[0].fields.push(column.field);
          initialHeader[0].colIndex = columnIndex;
        }
        columnIndex -= 1;
      }
      const depthInfo = renderedColumns.reduce((aggregated, column, i) => {
        var _column$computedWidth7;
        const lastItem = aggregated[aggregated.length - 1];
        if (column.groupPath && column.groupPath.length > depth) {
          var _column$computedWidth5;
          if (lastItem && lastItem.groupId === column.groupPath[depth]) {
            var _column$computedWidth4;
            return [...aggregated.slice(0, aggregated.length - 1), _extends({}, lastItem, {
              width: lastItem.width + ((_column$computedWidth4 = column.computedWidth) != null ? _column$computedWidth4 : 0),
              fields: [...lastItem.fields, column.field]
            })];
          }
          return [...aggregated, {
            groupId: column.groupPath[depth],
            groupParents: getParents(column.groupPath, depth),
            width: (_column$computedWidth5 = column.computedWidth) != null ? _column$computedWidth5 : 0,
            fields: [column.field],
            colIndex: firstColumnToRender + i
          }];
        }
        if (MERGE_EMPTY_CELLS && lastItem && lastItem.groupId === null && isDeepEqual(getParents(column.groupPath, depth), lastItem.groupParents)) {
          var _column$computedWidth6;
          return [...aggregated.slice(0, aggregated.length - 1), _extends({}, lastItem, {
            width: lastItem.width + ((_column$computedWidth6 = column.computedWidth) != null ? _column$computedWidth6 : 0),
            fields: [...lastItem.fields, column.field]
          })];
        }
        return [...aggregated, {
          groupId: null,
          groupParents: getParents(column.groupPath, depth),
          width: (_column$computedWidth7 = column.computedWidth) != null ? _column$computedWidth7 : 0,
          fields: [column.field],
          colIndex: firstColumnToRender + i
        }];
      }, initialHeader);
      columnIndex = lastColumnToRender;
      const lastColumnToRenderGroup = depthInfo[depthInfo.length - 1].groupId;
      while (lastColumnToRenderGroup !== null && columnIndex < maxLastColumn && (_visibleColumns$colum3 = visibleColumns[columnIndex]) != null && _visibleColumns$colum3.groupPath && ((_visibleColumns$colum4 = visibleColumns[columnIndex]) == null ? void 0 : (_visibleColumns$colum5 = _visibleColumns$colum4.groupPath) == null ? void 0 : _visibleColumns$colum5[depth]) === lastColumnToRenderGroup) {
        var _visibleColumns$colum3, _visibleColumns$colum4, _visibleColumns$colum5, _column$computedWidth8;
        const column = visibleColumns[columnIndex];
        depthInfo[depthInfo.length - 1].width += (_column$computedWidth8 = column.computedWidth) != null ? _column$computedWidth8 : 0;
        depthInfo[depthInfo.length - 1].fields.push(column.field);
        columnIndex += 1;
      }
      headerToRender.push({
        leftOverflow,
        elements: [...depthInfo]
      });
    }
    headerToRender.forEach((depthInfo, depthIndex) => {
      columns2.push(/* @__PURE__ */ (0, import_jsx_runtime94.jsx)(GridColumnHeaderRow, {
        style: {
          height: `${headerHeight}px`,
          transform: `translateX(-${depthInfo.leftOverflow}px)`
        },
        role: "row",
        "aria-rowindex": depthIndex + 1,
        children: depthInfo.elements.map(({
          groupId,
          width,
          fields,
          colIndex
        }, groupIndex) => {
          return /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(GridColumnGroupHeader, {
            groupId,
            width,
            fields,
            colIndex,
            depth: depthIndex,
            isLastColumn: colIndex === visibleColumns.length - fields.length,
            extendRowFullWidth: !rootProps.disableExtendRowFullWidth,
            maxDepth: headerToRender.length,
            height: headerHeight
          }, groupIndex);
        })
      }, depthIndex));
    });
    return columns2;
  };
  const rootStyle = {
    minHeight: totalHeaderHeight,
    maxHeight: totalHeaderHeight,
    lineHeight: `${headerHeight}px`
  };
  return {
    renderContext,
    getColumnHeaders,
    getColumnGroupHeaders,
    isDragging: !!dragCol,
    getRootProps: (other = {}) => _extends({
      style: rootStyle
    }, other),
    getInnerProps: () => ({
      ref: handleInnerRef,
      role: "rowgroup"
    })
  };
};

// node_modules/@mui/x-data-grid/components/columnHeaders/GridColumnHeaders.js
init_extends();
init_objectWithoutPropertiesLoose();
var React129 = __toESM(require_react());
init_clsx_m();
var import_jsx_runtime95 = __toESM(require_jsx_runtime());
var _excluded53 = ["className"];
var useUtilityClasses36 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["columnHeaders"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
var GridColumnHeadersRoot = styled_default("div", {
  name: "MuiDataGrid",
  slot: "ColumnHeaders",
  overridesResolver: (props, styles) => styles.columnHeaders
})(({
  theme: theme2
}) => {
  const borderColor = theme2.palette.mode === "light" ? lighten(alpha(theme2.palette.divider, 1), 0.88) : darken(alpha(theme2.palette.divider, 1), 0.68);
  return {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    borderBottom: `1px solid ${borderColor}`,
    borderTopLeftRadius: theme2.shape.borderRadius,
    borderTopRightRadius: theme2.shape.borderRadius
  };
});
var GridColumnHeaders = /* @__PURE__ */ React129.forwardRef(function GridColumnHeaders2(props, ref) {
  const {
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded53);
  const rootProps = useGridRootProps();
  const ownerState = {
    classes: rootProps.classes
  };
  const classes = useUtilityClasses36(ownerState);
  return /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(GridColumnHeadersRoot, _extends({
    ref,
    className: clsx_m_default(className, classes.root)
  }, other));
});

// node_modules/@mui/x-data-grid/components/columnHeaders/GridColumnHeadersInner.js
init_extends();
init_objectWithoutPropertiesLoose();
var React130 = __toESM(require_react());
init_clsx_m();
var import_jsx_runtime96 = __toESM(require_jsx_runtime());
var _excluded54 = ["isDragging", "className"];
var useUtilityClasses37 = (ownerState) => {
  const {
    isDragging,
    hasScrollX,
    classes
  } = ownerState;
  const slots = {
    root: ["columnHeadersInner", isDragging && "columnHeaderDropZone", hasScrollX && "columnHeadersInner--scrollable"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
var GridColumnHeadersInnerRoot = styled_default("div", {
  name: "MuiDataGrid",
  slot: "columnHeadersInner",
  overridesResolver: (props, styles) => [{
    [`&.${gridClasses.columnHeaderDropZone}`]: styles.columnHeaderDropZone
  }, styles.columnHeadersInner]
})(() => ({
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  [`&.${gridClasses.columnHeaderDropZone} .${gridClasses.columnHeaderDraggableContainer}`]: {
    cursor: "move"
  },
  [`&.${gridClasses["columnHeadersInner--scrollable"]} .${gridClasses.columnHeader}:last-child`]: {
    borderRight: "none"
  }
}));
var GridColumnHeadersInner = /* @__PURE__ */ React130.forwardRef(function GridColumnHeadersInner2(props, ref) {
  var _apiRef$current$getRo, _apiRef$current$getRo2;
  const {
    isDragging,
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded54);
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const ownerState = {
    isDragging,
    hasScrollX: (_apiRef$current$getRo = (_apiRef$current$getRo2 = apiRef.current.getRootDimensions()) == null ? void 0 : _apiRef$current$getRo2.hasScrollX) != null ? _apiRef$current$getRo : false,
    classes: rootProps.classes
  };
  const classes = useUtilityClasses37(ownerState);
  return /* @__PURE__ */ (0, import_jsx_runtime96.jsx)(GridColumnHeadersInnerRoot, _extends({
    ref,
    className: clsx_m_default(className, classes.root)
  }, other));
});

// node_modules/@mui/x-data-grid/components/DataGridColumnHeaders.js
var import_jsx_runtime97 = __toESM(require_jsx_runtime());
var import_jsx_runtime98 = __toESM(require_jsx_runtime());
var _excluded55 = ["innerRef", "className"];
var DataGridColumnHeaders = /* @__PURE__ */ React131.forwardRef(function GridColumnsHeader(props, ref) {
  const {
    innerRef
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded55);
  const {
    isDragging,
    getRootProps,
    getInnerProps,
    getColumnHeaders,
    getColumnGroupHeaders
  } = useGridColumnHeaders({
    innerRef
  });
  return /* @__PURE__ */ (0, import_jsx_runtime98.jsxs)(GridColumnHeaders, _extends({
    ref
  }, getRootProps(other), {
    children: [/* @__PURE__ */ (0, import_jsx_runtime97.jsx)(GridScrollArea, {
      scrollDirection: "left"
    }), /* @__PURE__ */ (0, import_jsx_runtime98.jsxs)(GridColumnHeadersInner, _extends({
      isDragging
    }, getInnerProps(), {
      children: [getColumnGroupHeaders(), getColumnHeaders()]
    })), /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(GridScrollArea, {
      scrollDirection: "right"
    })]
  }));
});

// node_modules/@mui/x-data-grid/DataGrid/DataGrid.js
var import_jsx_runtime99 = __toESM(require_jsx_runtime());
var import_jsx_runtime100 = __toESM(require_jsx_runtime());
var DataGridRaw = /* @__PURE__ */ React132.forwardRef(function DataGrid(inProps, ref) {
  const props = useDataGridProps(inProps);
  const apiRef = useDataGridComponent(props);
  return /* @__PURE__ */ (0, import_jsx_runtime99.jsx)(GridContextProvider, {
    apiRef,
    props,
    children: /* @__PURE__ */ (0, import_jsx_runtime99.jsx)(GridRoot, {
      className: props.className,
      style: props.style,
      sx: props.sx,
      ref,
      children: /* @__PURE__ */ (0, import_jsx_runtime100.jsxs)(GridErrorHandler, {
        children: [/* @__PURE__ */ (0, import_jsx_runtime99.jsx)(GridHeaderPlaceholder, {}), /* @__PURE__ */ (0, import_jsx_runtime99.jsx)(GridBody, {
          ColumnHeadersComponent: DataGridColumnHeaders,
          VirtualScrollerComponent: DataGridVirtualScroller
        }), /* @__PURE__ */ (0, import_jsx_runtime99.jsx)(GridFooterPlaceholder, {})]
      })
    })
  });
});
var DataGrid2 = /* @__PURE__ */ React132.memo(DataGridRaw);
DataGridRaw.propTypes = {
  "aria-label": import_prop_types50.default.string,
  "aria-labelledby": import_prop_types50.default.string,
  autoHeight: import_prop_types50.default.bool,
  autoPageSize: import_prop_types50.default.bool,
  cellModesModel: import_prop_types50.default.object,
  checkboxSelection: import_prop_types50.default.bool,
  classes: import_prop_types50.default.object,
  columnBuffer: import_prop_types50.default.number,
  columnGroupingModel: import_prop_types50.default.arrayOf(import_prop_types50.default.object),
  columns: chainPropTypes(import_prop_types50.default.array.isRequired, (props) => {
    if (props.columns && props.columns.some((column) => column.resizable)) {
      return new Error([`MUI: \`column.resizable = true\` is not a valid prop.`, "Column resizing is not available in the MIT version.", "", "You need to upgrade to DataGridPro or DataGridPremium component to unlock this feature."].join("\n"));
    }
    return null;
  }),
  columnThreshold: import_prop_types50.default.number,
  columnTypes: import_prop_types50.default.object,
  columnVisibilityModel: import_prop_types50.default.object,
  components: import_prop_types50.default.object,
  componentsProps: import_prop_types50.default.object,
  density: import_prop_types50.default.oneOf(["comfortable", "compact", "standard"]),
  disableColumnFilter: import_prop_types50.default.bool,
  disableColumnMenu: import_prop_types50.default.bool,
  disableColumnSelector: import_prop_types50.default.bool,
  disableDensitySelector: import_prop_types50.default.bool,
  disableExtendRowFullWidth: import_prop_types50.default.bool,
  disableIgnoreModificationsIfProcessingProps: import_prop_types50.default.bool,
  disableSelectionOnClick: import_prop_types50.default.bool,
  disableVirtualization: import_prop_types50.default.bool,
  editMode: import_prop_types50.default.oneOf(["cell", "row"]),
  editRowsModel: import_prop_types50.default.object,
  error: import_prop_types50.default.any,
  experimentalFeatures: import_prop_types50.default.shape({
    columnGrouping: import_prop_types50.default.bool,
    newEditingApi: import_prop_types50.default.bool,
    preventCommitWhileValidating: import_prop_types50.default.bool,
    warnIfFocusStateIsNotSynced: import_prop_types50.default.bool
  }),
  filterMode: import_prop_types50.default.oneOf(["client", "server"]),
  filterModel: import_prop_types50.default.shape({
    items: import_prop_types50.default.arrayOf(import_prop_types50.default.shape({
      columnField: import_prop_types50.default.string.isRequired,
      id: import_prop_types50.default.oneOfType([import_prop_types50.default.number, import_prop_types50.default.string]),
      operatorValue: import_prop_types50.default.string,
      value: import_prop_types50.default.any
    })).isRequired,
    linkOperator: import_prop_types50.default.oneOf(["and", "or"]),
    quickFilterLogicOperator: import_prop_types50.default.oneOf(["and", "or"]),
    quickFilterValues: import_prop_types50.default.array
  }),
  getCellClassName: import_prop_types50.default.func,
  getDetailPanelContent: import_prop_types50.default.func,
  getEstimatedRowHeight: import_prop_types50.default.func,
  getRowClassName: import_prop_types50.default.func,
  getRowHeight: import_prop_types50.default.func,
  getRowId: import_prop_types50.default.func,
  getRowSpacing: import_prop_types50.default.func,
  headerHeight: import_prop_types50.default.number,
  hideFooter: import_prop_types50.default.bool,
  hideFooterPagination: import_prop_types50.default.bool,
  hideFooterSelectedRowCount: import_prop_types50.default.bool,
  initialState: import_prop_types50.default.object,
  isCellEditable: import_prop_types50.default.func,
  isRowSelectable: import_prop_types50.default.func,
  keepNonExistentRowsSelected: import_prop_types50.default.bool,
  loading: import_prop_types50.default.bool,
  localeText: import_prop_types50.default.object,
  logger: import_prop_types50.default.shape({
    debug: import_prop_types50.default.func.isRequired,
    error: import_prop_types50.default.func.isRequired,
    info: import_prop_types50.default.func.isRequired,
    warn: import_prop_types50.default.func.isRequired
  }),
  logLevel: import_prop_types50.default.oneOf(["debug", "error", "info", "warn", false]),
  nonce: import_prop_types50.default.string,
  onCellClick: import_prop_types50.default.func,
  onCellDoubleClick: import_prop_types50.default.func,
  onCellEditCommit: import_prop_types50.default.func,
  onCellEditStart: import_prop_types50.default.func,
  onCellEditStop: import_prop_types50.default.func,
  onCellFocusOut: import_prop_types50.default.func,
  onCellKeyDown: import_prop_types50.default.func,
  onCellModesModelChange: import_prop_types50.default.func,
  onColumnHeaderClick: import_prop_types50.default.func,
  onColumnHeaderDoubleClick: import_prop_types50.default.func,
  onColumnHeaderEnter: import_prop_types50.default.func,
  onColumnHeaderLeave: import_prop_types50.default.func,
  onColumnHeaderOut: import_prop_types50.default.func,
  onColumnHeaderOver: import_prop_types50.default.func,
  onColumnOrderChange: import_prop_types50.default.func,
  onColumnVisibilityChange: import_prop_types50.default.func,
  onColumnVisibilityModelChange: import_prop_types50.default.func,
  onEditCellPropsChange: import_prop_types50.default.func,
  onEditRowsModelChange: import_prop_types50.default.func,
  onError: import_prop_types50.default.func,
  onFilterModelChange: import_prop_types50.default.func,
  onMenuClose: import_prop_types50.default.func,
  onMenuOpen: import_prop_types50.default.func,
  onPageChange: import_prop_types50.default.func,
  onPageSizeChange: import_prop_types50.default.func,
  onPreferencePanelClose: import_prop_types50.default.func,
  onPreferencePanelOpen: import_prop_types50.default.func,
  onProcessRowUpdateError: import_prop_types50.default.func,
  onResize: import_prop_types50.default.func,
  onRowClick: import_prop_types50.default.func,
  onRowDoubleClick: import_prop_types50.default.func,
  onRowEditCommit: import_prop_types50.default.func,
  onRowEditStart: import_prop_types50.default.func,
  onRowEditStop: import_prop_types50.default.func,
  onRowModesModelChange: import_prop_types50.default.func,
  onSelectionModelChange: import_prop_types50.default.func,
  onSortModelChange: import_prop_types50.default.func,
  onStateChange: import_prop_types50.default.func,
  page: import_prop_types50.default.number,
  pageSize: chainPropTypes(import_prop_types50.default.number, (props) => {
    if (props.pageSize && props.pageSize > MAX_PAGE_SIZE) {
      return new Error([`MUI: \`<DataGrid pageSize={${props.pageSize}} />\` is not a valid prop.`, `Only page size below ${MAX_PAGE_SIZE} is available in the MIT version.`, "", "You need to upgrade to DataGridPro or DataGridPremium component to unlock this feature."].join("\n"));
    }
    return null;
  }),
  pagination: (props) => {
    if (props.pagination === false) {
      return new Error(["MUI: `<DataGrid pagination={false} />` is not a valid prop.", "Infinite scrolling is not available in the MIT version.", "", "You need to upgrade to DataGridPro or DataGridPremium component to disable the pagination."].join("\n"));
    }
    return null;
  },
  paginationMode: import_prop_types50.default.oneOf(["client", "server"]),
  processRowUpdate: import_prop_types50.default.func,
  rowBuffer: import_prop_types50.default.number,
  rowCount: import_prop_types50.default.number,
  rowHeight: import_prop_types50.default.number,
  rowModesModel: import_prop_types50.default.object,
  rows: import_prop_types50.default.array.isRequired,
  rowSpacingType: import_prop_types50.default.oneOf(["border", "margin"]),
  rowsPerPageOptions: import_prop_types50.default.arrayOf(import_prop_types50.default.number),
  rowThreshold: import_prop_types50.default.number,
  scrollbarSize: import_prop_types50.default.number,
  selectionModel: chainPropTypes(import_prop_types50.default.oneOfType([import_prop_types50.default.number, import_prop_types50.default.string, import_prop_types50.default.array]), (props) => {
    if (!props.checkboxSelection && Array.isArray(props.selectionModel) && props.selectionModel.length > 1) {
      return new Error([`MUI: \`<DataGrid selectionModel={${JSON.stringify(props.selectionModel)}} />\` is not a valid prop.`, "selectionModel can only be of 1 item in DataGrid.", "", "You need to upgrade to DataGridPro or DataGridPremium component to unlock multiple selection."].join("\n"));
    }
    return null;
  }),
  showCellRightBorder: import_prop_types50.default.bool,
  showColumnRightBorder: import_prop_types50.default.bool,
  sortingMode: import_prop_types50.default.oneOf(["client", "server"]),
  sortingOrder: import_prop_types50.default.arrayOf(import_prop_types50.default.oneOf(["asc", "desc"])),
  sortModel: import_prop_types50.default.arrayOf(import_prop_types50.default.shape({
    field: import_prop_types50.default.string.isRequired,
    sort: import_prop_types50.default.oneOf(["asc", "desc"])
  })),
  sx: import_prop_types50.default.oneOfType([import_prop_types50.default.arrayOf(import_prop_types50.default.oneOfType([import_prop_types50.default.func, import_prop_types50.default.object, import_prop_types50.default.bool])), import_prop_types50.default.func, import_prop_types50.default.object])
};

// node_modules/@mui/material/esm/locale/index.js
var plPL = {
  components: {
    MuiBreadcrumbs: {
      defaultProps: {
        expandText: "Poka\u017C \u015Bcie\u017Ck\u0119"
      }
    },
    MuiTablePagination: {
      defaultProps: {
        getItemAriaLabel: (type) => {
          if (type === "first") {
            return "Przejd\u017A do pierwszej strony";
          }
          if (type === "last") {
            return "Przejd\u017A do ostatniej strony";
          }
          if (type === "next") {
            return "Przejd\u017A do nast\u0119pnej strony";
          }
          return "Przejd\u017A do poprzedniej strony";
        },
        labelRowsPerPage: "Wierszy na stron\u0119:",
        labelDisplayedRows: ({
          from,
          to,
          count
        }) => `${from}\u2013${to} z ${count !== -1 ? count : `ponad ${to}`}`
      }
    },
    MuiRating: {
      defaultProps: {
        getLabelText: (value) => {
          let pluralForm = "gwiazdek";
          const lastDigit = value % 10;
          if ((value < 10 || value > 20) && lastDigit > 1 && lastDigit < 5) {
            pluralForm = "gwiazdki";
          } else if (value === 1) {
            pluralForm = "gwiazdka";
          }
          return `${value} ${pluralForm}`;
        },
        emptyLabelText: "Brak gwiazdek"
      }
    },
    MuiAutocomplete: {
      defaultProps: {
        clearText: "Wyczy\u015B\u0107",
        closeText: "Zamknij",
        loadingText: "\u0141adowanie\u2026",
        noOptionsText: "Brak opcji",
        openText: "Otw\xF3rz"
      }
    },
    MuiAlert: {
      defaultProps: {
        closeText: "Zamknij"
      }
    },
    MuiPagination: {
      defaultProps: {
        "aria-label": "Nawigacja podzia\u0142u na strony",
        getItemAriaLabel: (type, page, selected) => {
          if (type === "page") {
            return selected ? `${page}. strona` : `Przejd\u017A do ${page}. strony`;
          }
          if (type === "first") {
            return "Przejd\u017A do pierwszej strony";
          }
          if (type === "last") {
            return "Przejd\u017A do ostatniej strony";
          }
          if (type === "next") {
            return "Przejd\u017A do nast\u0119pnej strony";
          }
          return "Przejd\u017A do poprzedniej strony";
        }
      }
    }
  }
};

// node_modules/@mui/x-data-grid/utils/getGridLocalization.js
init_extends();
var getGridLocalization = (gridTranslations, coreTranslations) => {
  var _coreTranslations$com, _coreTranslations$com2;
  return {
    components: {
      MuiDataGrid: {
        defaultProps: {
          localeText: _extends({}, gridTranslations, {
            MuiTablePagination: (coreTranslations == null ? void 0 : (_coreTranslations$com = coreTranslations.components) == null ? void 0 : (_coreTranslations$com2 = _coreTranslations$com.MuiTablePagination) == null ? void 0 : _coreTranslations$com2.defaultProps) || {}
          })
        }
      }
    }
  };
};

// node_modules/@mui/x-data-grid/locales/plPL.js
var plPLGrid = {
  noRowsLabel: "Brak danych",
  noResultsOverlayLabel: "Nie znaleziono wynik\xF3w.",
  errorOverlayDefaultLabel: "Wyst\u0105pi\u0142 b\u0142\u0105d.",
  toolbarDensity: "Wysoko\u015B\u0107 rz\u0119du",
  toolbarDensityLabel: "Wysoko\u015B\u0107 rz\u0119du",
  toolbarDensityCompact: "Kompakt",
  toolbarDensityStandard: "Standard",
  toolbarDensityComfortable: "Komfort",
  toolbarColumns: "Kolumny",
  toolbarColumnsLabel: "Zaznacz kolumny",
  toolbarFilters: "Filtry",
  toolbarFiltersLabel: "Poka\u017C filtry",
  toolbarFiltersTooltipHide: "Ukryj filtry",
  toolbarFiltersTooltipShow: "Poka\u017C filtry",
  toolbarFiltersTooltipActive: (count) => `Liczba aktywnych filtr\xF3w: ${count}`,
  toolbarExport: "Eksportuj",
  toolbarExportLabel: "Eksportuj",
  toolbarExportCSV: "Pobierz jako plik CSV",
  toolbarExportPrint: "Drukuj",
  columnsPanelTextFieldLabel: "Znajd\u017A kolumn\u0119",
  columnsPanelTextFieldPlaceholder: "Tytu\u0142 kolumny",
  columnsPanelDragIconLabel: "Zmie\u0144 kolejno\u015B\u0107 kolumn",
  columnsPanelShowAllButton: "Poka\u017C wszystko",
  columnsPanelHideAllButton: "Ukryj wszystko",
  filterPanelAddFilter: "Dodaj filtr",
  filterPanelDeleteIconLabel: "Usu\u0144",
  filterPanelLinkOperator: "Operator logiczny",
  filterPanelOperators: "Operator",
  filterPanelOperatorAnd: "I",
  filterPanelOperatorOr: "Lub",
  filterPanelColumns: "Kolumny",
  filterPanelInputLabel: "Warto\u015B\u0107",
  filterPanelInputPlaceholder: "Filtrowana warto\u015B\u0107",
  filterOperatorContains: "zawiera",
  filterOperatorEquals: "r\xF3wna si\u0119",
  filterOperatorStartsWith: "zaczyna si\u0119 od",
  filterOperatorEndsWith: "ko\u0144czy si\u0119 na",
  filterOperatorIs: "r\xF3wna si\u0119",
  filterOperatorNot: "r\xF3\u017Cne",
  filterOperatorAfter: "wi\u0119ksze ni\u017C",
  filterOperatorOnOrAfter: "wi\u0119ksze lub r\xF3wne",
  filterOperatorBefore: "mniejsze ni\u017C",
  filterOperatorOnOrBefore: "mniejsze lub r\xF3wne",
  filterOperatorIsEmpty: "jest pusty",
  filterOperatorIsNotEmpty: "nie jest pusty",
  filterOperatorIsAnyOf: "jest jednym z",
  filterValueAny: "dowolny",
  filterValueTrue: "prawda",
  filterValueFalse: "fa\u0142sz",
  columnMenuLabel: "Menu",
  columnMenuShowColumns: "Poka\u017C wszystkie kolumny",
  columnMenuFilter: "Filtr",
  columnMenuHideColumn: "Ukryj",
  columnMenuUnsort: "Anuluj sortowanie",
  columnMenuSortAsc: "Sortuj rosn\u0105co",
  columnMenuSortDesc: "Sortuj malej\u0105co",
  columnHeaderFiltersTooltipActive: (count) => `Liczba aktywnych filtr\xF3w: ${count}`,
  columnHeaderFiltersLabel: "Poka\u017C filtry",
  columnHeaderSortIconLabel: "Sortuj",
  footerRowSelected: (count) => `Liczba wybranych wierszy: ${count.toLocaleString()}`,
  footerTotalRows: "\u0141\u0105czna liczba wierszy:",
  footerTotalVisibleRows: (visibleCount, totalCount) => `${visibleCount.toLocaleString()} z ${totalCount.toLocaleString()}`,
  checkboxSelectionHeaderName: "Pole wyboru",
  checkboxSelectionSelectAllRows: "Zaznacz wszystkie wiersze",
  checkboxSelectionUnselectAllRows: "Odznacz wszystkie wiersze",
  checkboxSelectionSelectRow: "Zaznacz wiersz",
  checkboxSelectionUnselectRow: "Odznacz wiersz",
  booleanCellTrueLabel: "tak",
  booleanCellFalseLabel: "nie",
  actionsCellMore: "wi\u0119cej",
  pinToLeft: "Przypnij do lewej",
  pinToRight: "Przypnij do prawej",
  unpin: "Odepnij",
  treeDataGroupingHeaderName: "Grupa",
  treeDataExpand: "poka\u017C elementy potomne",
  treeDataCollapse: "ukryj elementy potomne",
  groupingColumnHeaderName: "Grupa",
  groupColumn: (name) => `Grupuj wed\u0142ug ${name}`,
  unGroupColumn: (name) => `Rozgrupuj ${name}`,
  expandDetailPanel: "Rozwi\u0144",
  collapseDetailPanel: "Zwi\u0144"
};
var plPL2 = getGridLocalization(plPLGrid, plPL);

// app/components/datatable.tsx
init_clsx_m();
var import_react = __toESM(require_react());

// node_modules/@mui/icons-material/esm/utils/createSvgIcon.js
init_utils();

// node_modules/@mui/icons-material/esm/Delete.js
var import_jsx_runtime101 = __toESM(require_jsx_runtime());
var Delete_default = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime101.jsx)("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
}), "Delete");

// node_modules/@mui/icons-material/esm/Edit.js
var import_jsx_runtime102 = __toESM(require_jsx_runtime());
var Edit_default = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime102.jsx)("path", {
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
}), "Edit");

// app/components/datatable.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var columns = [
  {
    field: "para",
    headerName: "Ma\u0142\u017Ce\u0144stwo",
    minWidth: 125,
    flex: 2,
    valueGetter: (params) => params.row.wife.firstName + " " + params.row.wife.lastName + " & " + params.row.husband.firstName + " " + params.row.husband.lastName
  },
  { field: "postalCode", headerName: "Kod pocztowy", minWidth: 110, flex: 1 },
  { field: "city", headerName: "Oddzia\u0142", minWidth: 130, flex: 1 },
  {
    field: "group",
    type: "string",
    headerName: "Grupa",
    minWidth: 60,
    flex: 1,
    align: "center",
    cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }
      return clsx_m_default("alma-app", {
        A: params.value == "A",
        B: params.value == "B",
        C: params.value == "C",
        D: params.value == "D",
        S: params.value == "S",
        X: params.value == "X"
      });
    }
  },
  { field: "id", headerName: "ID", minWidth: 120, flex: 1 },
  {
    field: "birthYear",
    headerName: "Data urodzin",
    minWidth: 100,
    flex: 1,
    valueGetter: (params) => params.row.wife.birthYear + " & " + params.row.husband.birthYear
  },
  { field: "weddingYear", headerName: "Data \u015Blubu", minWidth: 90, flex: 1 },
  {
    field: "invitedBy",
    headerName: "Zaproszeni przez",
    minWidth: 120,
    flex: 1
  },
  {
    field: "email",
    headerName: "Email",
    minWidth: 120,
    flex: 2.5,
    valueGetter: (params) => params.row.wife.email + " & " + params.row.husband.email
  },
  {
    field: "actions",
    headerName: "Akcje",
    minWidth: 120,
    flex: 2.5,
    renderCell: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip_default, {
          title: "edytuj",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
            component: Link,
            to: "/edit",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Edit_default, {}, void 0, false, {
              fileName: "app/components/datatable.tsx",
              lineNumber: 87,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/components/datatable.tsx",
            lineNumber: 86,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/datatable.tsx",
          lineNumber: 85,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip_default, {
          title: "usu\u0144",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
            onClick: () => {
            },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Delete_default, {}, void 0, false, {
              fileName: "app/components/datatable.tsx",
              lineNumber: 92,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/components/datatable.tsx",
            lineNumber: 91,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/datatable.tsx",
          lineNumber: 90,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/components/datatable.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this)
  }
];
var theme = createTheme_default(
  {
    palette: {
      primary: { main: "#1976d2" }
    }
  },
  plPL2
);
function DataTable({ couples }) {
  const [pageSize, setPageSize] = (0, import_react.useState)(25);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    style: { height: 800, width: "100%" },
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeProvider_default, {
      theme,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, {
        sx: {
          height: "100%",
          width: "100%",
          "& .alma-app.A": {
            backgroundColor: "#FFB0B2"
          },
          "& .alma-app.B": {
            backgroundColor: "#B0B2FF"
          },
          "& .alma-app.C": {
            backgroundColor: "#B2FFB0"
          },
          "& .alma-app.D": {
            backgroundColor: "#FEFFAF"
          },
          "& .alma-app.S": {
            backgroundColor: "#BDC3C7"
          },
          "& .alma-app.X": {
            backgroundColor: "#BFBFBF"
          }
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataGrid2, {
          onSelectionModelChange: (rows) => console.log(rows),
          disableColumnFilter: true,
          rows: couples,
          columns,
          pageSize,
          onPageSizeChange: (newPageSize) => setPageSize(newPageSize),
          rowsPerPageOptions: [5, 15, 25, 50, 100],
          getRowHeight: () => "auto",
          paginationMode: "client"
        }, void 0, false, {
          fileName: "app/components/datatable.tsx",
          lineNumber: 140,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: "app/components/datatable.tsx",
        lineNumber: 114,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/components/datatable.tsx",
      lineNumber: 113,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/datatable.tsx",
    lineNumber: 112,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var import_react4 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Index() {
  const [search, setSearch] = (0, import_react4.useState)("");
  const [checkboxFilters, setCheckboxFilters] = (0, import_react4.useState)({
    isCheckedA: false,
    isCheckedB: false,
    isCheckedC: false,
    isCheckedD: false,
    isCheckedSX: false,
    isCheckedNoMail: false
  });
  const handleCheckboxFilterChange = (e) => {
    setCheckboxFilters((checkboxFilters2) => ({
      ...checkboxFilters2,
      [e.target.id]: e.target.checked
    }));
  };
  const couples = useLoaderData().couples;
  const handleClearClick = () => {
    setCheckboxFilters({
      isCheckedA: false,
      isCheckedB: false,
      isCheckedC: false,
      isCheckedD: false,
      isCheckedSX: false,
      isCheckedNoMail: false
    });
  };
  const customFilters = couples.filter(
    (c) => c.city.toLowerCase().includes(search.toLowerCase()) || c.wife.firstName.toLowerCase().includes(search.toLowerCase()) || c.wife.lastName.toLowerCase().includes(search.toLowerCase()) || c.wife.email.toLowerCase().includes(search.toLowerCase()) || c.husband.firstName.toLowerCase().includes(search.toLowerCase()) || c.husband.lastName.toLowerCase().includes(search.toLowerCase()) || c.husband.email.toLowerCase().includes(search.toLowerCase())
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, {
    style: { margin: "5rem" },
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
          children: "Alma"
        }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 231,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {}, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 232,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, {
          component: "form",
          noValidate: true,
          autoComplete: "off",
          sx: {
            display: "flex",
            flexDirection: "column"
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, {
              sx: {
                display: "flex",
                flexDirection: "row"
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
                  id: "outlined-basic",
                  variant: "outlined",
                  label: "Szukaj...",
                  value: search,
                  onChange: (e) => setSearch(e.target.value),
                  size: "small",
                  sx: {
                    display: "flex",
                    alignItems: "flex-start",
                    mt: "1rem",
                    height: "3rem"
                  }
                }, void 0, false, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 249,
                  columnNumber: 13
                }, this),
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, {
                  sx: {
                    display: "flex",
                    width: "100%",
                    justifyContent: "flex-end"
                  },
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl_default, {
                    style: {
                      display: "flex",
                      alignItems: "flex-end"
                    },
                    component: "fieldset",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormLabel_default, {
                        component: "legend"
                      }, void 0, false, {
                        fileName: "app/routes/index.tsx",
                        lineNumber: 277,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                        style: {
                          paddingLeft: "0.2rem"
                        },
                        size: "small",
                        variant: "contained",
                        component: Link,
                        to: "/create",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Add.default, {
                            sx: { margin: "0" }
                          }, void 0, false, {
                            fileName: "app/routes/index.tsx",
                            lineNumber: 287,
                            columnNumber: 19
                          }, this),
                          " Dodaj nowe ma\u0142\u017Ce\u0144stwo"
                        ]
                      }, void 0, true, {
                        fileName: "app/routes/index.tsx",
                        lineNumber: 278,
                        columnNumber: 17
                      }, this),
                      " ",
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                        size: "small",
                        disabled: checkboxFilters.isCheckedA || checkboxFilters.isCheckedB || checkboxFilters.isCheckedC || checkboxFilters.isCheckedD || checkboxFilters.isCheckedNoMail || checkboxFilters.isCheckedSX ? false : true,
                        onClick: handleClearClick,
                        variant: "outlined",
                        startIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Clear.default, {}, void 0, false, {
                          fileName: "app/routes/index.tsx",
                          lineNumber: 303,
                          columnNumber: 30
                        }, this),
                        children: "Wyczy\u015B\u0107 filtry"
                      }, void 0, false, {
                        fileName: "app/routes/index.tsx",
                        lineNumber: 289,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormGroup_default, {
                        "aria-label": "position",
                        row: true,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControlLabel_default, {
                            value: "Bez maila",
                            control: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Checkbox_default, {
                              onChange: handleCheckboxFilterChange,
                              id: "isCheckedNoMail",
                              checked: checkboxFilters.isCheckedNoMail
                            }, void 0, false, {
                              fileName: "app/routes/index.tsx",
                              lineNumber: 311,
                              columnNumber: 23
                            }, this),
                            label: "Bez maila",
                            labelPlacement: "end"
                          }, void 0, false, {
                            fileName: "app/routes/index.tsx",
                            lineNumber: 308,
                            columnNumber: 19
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControlLabel_default, {
                            value: "A",
                            control: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Checkbox_default, {
                              onChange: handleCheckboxFilterChange,
                              id: "isCheckedA",
                              checked: checkboxFilters.isCheckedA
                            }, void 0, false, {
                              fileName: "app/routes/index.tsx",
                              lineNumber: 323,
                              columnNumber: 23
                            }, this),
                            label: "A",
                            labelPlacement: "end"
                          }, void 0, false, {
                            fileName: "app/routes/index.tsx",
                            lineNumber: 320,
                            columnNumber: 19
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControlLabel_default, {
                            value: "B",
                            control: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Checkbox_default, {
                              onChange: handleCheckboxFilterChange,
                              id: "isCheckedB",
                              checked: checkboxFilters.isCheckedB
                            }, void 0, false, {
                              fileName: "app/routes/index.tsx",
                              lineNumber: 335,
                              columnNumber: 23
                            }, this),
                            label: "B",
                            labelPlacement: "end"
                          }, void 0, false, {
                            fileName: "app/routes/index.tsx",
                            lineNumber: 332,
                            columnNumber: 19
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControlLabel_default, {
                            value: "C",
                            control: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Checkbox_default, {
                              onChange: handleCheckboxFilterChange,
                              id: "isCheckedC",
                              checked: checkboxFilters.isCheckedC
                            }, void 0, false, {
                              fileName: "app/routes/index.tsx",
                              lineNumber: 347,
                              columnNumber: 23
                            }, this),
                            label: "C",
                            labelPlacement: "end"
                          }, void 0, false, {
                            fileName: "app/routes/index.tsx",
                            lineNumber: 344,
                            columnNumber: 19
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControlLabel_default, {
                            value: "D",
                            control: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Checkbox_default, {
                              onChange: handleCheckboxFilterChange,
                              id: "isCheckedD",
                              checked: checkboxFilters.isCheckedD
                            }, void 0, false, {
                              fileName: "app/routes/index.tsx",
                              lineNumber: 359,
                              columnNumber: 23
                            }, this),
                            label: "D",
                            labelPlacement: "end"
                          }, void 0, false, {
                            fileName: "app/routes/index.tsx",
                            lineNumber: 356,
                            columnNumber: 19
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControlLabel_default, {
                            value: "S/X",
                            control: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Checkbox_default, {
                              onChange: handleCheckboxFilterChange,
                              id: "isCheckedSX",
                              checked: checkboxFilters.isCheckedSX
                            }, void 0, false, {
                              fileName: "app/routes/index.tsx",
                              lineNumber: 371,
                              columnNumber: 23
                            }, this),
                            label: "S/X",
                            labelPlacement: "end"
                          }, void 0, false, {
                            fileName: "app/routes/index.tsx",
                            lineNumber: 368,
                            columnNumber: 19
                          }, this)
                        ]
                      }, void 0, true, {
                        fileName: "app/routes/index.tsx",
                        lineNumber: 307,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 270,
                    columnNumber: 15
                  }, this)
                }, void 0, false, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 263,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/index.tsx",
              lineNumber: 243,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataTable, {
              couples: customFilters
            }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 385,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/index.tsx",
          lineNumber: 234,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 230,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/index.tsx",
    lineNumber: 229,
    columnNumber: 5
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-POGBCTUH.js.map
