import {
  create,
  create3 as create2,
  o
} from "/build/_shared/chunk-RYTAUNOY.js";
import {
  useForm
} from "/build/_shared/chunk-FWRYVETO.js";
import {
  TextField_default
} from "/build/_shared/chunk-62UKOSNU.js";
import {
  Button_default
} from "/build/_shared/chunk-OFQDJBEB.js";
import "/build/_shared/chunk-XUVAOVVU.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-7S3FVGI6.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/routes/register.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var App = () => {
  var _a, _b, _c;
  const validationSchema = create2().shape({
    wifeFirstName: create().required("Fullname is required"),
    wifeLastName: create().required("Fullname is required"),
    wifeEmail: create().required("Email is required").email("Email is invalid")
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: o(validationSchema)
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "register-form",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
      onSubmit: handleSubmit(onSubmit),
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "form-group",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
              children: "Imi\u0119"
            }, void 0, false, {
              fileName: "app/routes/register.tsx",
              lineNumber: 57,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
              type: "text",
              ...register("wifeFirstName"),
              className: `form-control ${errors.wifeFirstName ? "is-invalid" : ""}`
            }, void 0, false, {
              fileName: "app/routes/register.tsx",
              lineNumber: 58,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "invalid-feedback",
              children: (_a = errors.wifeFirstName) == null ? void 0 : _a.message
            }, void 0, false, {
              fileName: "app/routes/register.tsx",
              lineNumber: 65,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/register.tsx",
          lineNumber: 56,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "form-group",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
              children: "Username"
            }, void 0, false, {
              fileName: "app/routes/register.tsx",
              lineNumber: 71,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
              type: "text",
              ...register("wifeLastName"),
              className: `form-control ${errors.wifeLastName ? "is-invalid" : ""}`
            }, void 0, false, {
              fileName: "app/routes/register.tsx",
              lineNumber: 72,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "invalid-feedback",
              children: (_b = errors.wifeLastName) == null ? void 0 : _b.message
            }, void 0, false, {
              fileName: "app/routes/register.tsx",
              lineNumber: 79,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/register.tsx",
          lineNumber: 70,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "form-group",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
              children: "Email"
            }, void 0, false, {
              fileName: "app/routes/register.tsx",
              lineNumber: 83,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
              type: "text",
              ...register("wifeEmail"),
              className: `form-control ${errors.wifeEmail ? "is-invalid" : ""}`
            }, void 0, false, {
              fileName: "app/routes/register.tsx",
              lineNumber: 84,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "invalid-feedback",
              children: (_c = errors.email) == null ? void 0 : _c.message
            }, void 0, false, {
              fileName: "app/routes/register.tsx",
              lineNumber: 89,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/register.tsx",
          lineNumber: 82,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "form-group",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
              size: "large",
              variant: "outlined",
              type: "submit",
              children: "Submit"
            }, void 0, false, {
              fileName: "app/routes/register.tsx",
              lineNumber: 93,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              type: "button",
              onClick: () => reset(),
              className: "btn btn-warning float-right",
              children: "Reset"
            }, void 0, false, {
              fileName: "app/routes/register.tsx",
              lineNumber: 96,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/register.tsx",
          lineNumber: 92,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/register.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/register.tsx",
    lineNumber: 54,
    columnNumber: 5
  }, this);
};
var register_default = App;
export {
  register_default as default
};
//# sourceMappingURL=/build/routes/register-6IR4ME3T.js.map
