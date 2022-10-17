import {
  init_useEventCallback,
  init_useIsFocusVisible,
  useEventCallback_default,
  useIsFocusVisible_default
} from "/build/_shared/chunk-XHMERQVH.js";
import {
  createSvgIcon,
  debounce_default,
  init_createSvgIcon,
  init_debounce,
  init_isMuiElement,
  init_ownerDocument,
  init_ownerWindow,
  init_useControlled,
  init_useEnhancedEffect,
  isMuiElement_default,
  ownerDocument_default,
  ownerWindow_default,
  useControlled_default,
  useEnhancedEffect_default
} from "/build/_shared/chunk-ICEPHC2A.js";
import {
  ClassNameGenerator_default,
  capitalize_default,
  createChainedFunction,
  deprecatedPropType,
  init_capitalize,
  init_esm,
  init_useForkRef,
  requirePropFactory,
  setRef,
  unsupportedProp,
  useForkRef_default,
  useId
} from "/build/_shared/chunk-GFQTOUIA.js";
import {
  __esm,
  __export
} from "/build/_shared/chunk-CUPSZOF3.js";

// node_modules/@mui/material/esm/utils/createChainedFunction.js
var createChainedFunction_default;
var init_createChainedFunction = __esm({
  "node_modules/@mui/material/esm/utils/createChainedFunction.js"() {
    init_esm();
    createChainedFunction_default = createChainedFunction;
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

// node_modules/@mui/base/className/index.js
var init_className = __esm({
  "node_modules/@mui/base/className/index.js"() {
    init_esm();
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
  unstable_useEnhancedEffect: () => useEnhancedEffect_default,
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

export {
  useId_default,
  init_useId,
  unsupportedProp_default,
  init_unsupportedProp,
  utils_exports,
  init_utils
};
//# sourceMappingURL=/build/_shared/chunk-YBHEXKVQ.js.map
