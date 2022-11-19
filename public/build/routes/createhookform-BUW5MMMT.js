import {
  create,
  create2,
  create3,
  o
} from "/build/_shared/chunk-RYTAUNOY.js";
import {
  Controller,
  useForm
} from "/build/_shared/chunk-FWRYVETO.js";
import {
  Box_default,
  MenuItem_default,
  Select_default,
  TextField_default
} from "/build/_shared/chunk-62UKOSNU.js";
import {
  Button_default
} from "/build/_shared/chunk-OFQDJBEB.js";
import "/build/_shared/chunk-XUVAOVVU.js";
import {
  Form
} from "/build/_shared/chunk-SIG6Y2AJ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-7S3FVGI6.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/routes/createhookform.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var schema = create3().shape({
  wifeFirstName: create().required("Fullname is required"),
  wifeLastName: create().required("Fullname is required"),
  wifePhoneNumber: create2().required("Fullname is required"),
  wifeEmail: create().required("Email is required").email("Email is invalid"),
  wifeBirthYear: create2().required("Fullname is required"),
  husbandFirstName: create().required("Fullname is required"),
  husbandLastName: create().required("Fullname is required"),
  husbandPhoneNumber: create2().required("Fullname is required"),
  husbandEmail: create().required("Email is required").email("Email is invalid"),
  husbandBirthYear: create2().required("Fullname is required"),
  weddingYear: create2().required("Fullname is required"),
  city: create().required("Fullname is required"),
  invitedBy: create().required("Fullname is required")
});
var Home = () => {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    resolver: o(schema)
  });
  const onSubmit = (data) => console.log("data submitted: ", data);
  console.log(watch("husbandEmail"));
  console.log("errors are", errors);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {
        onSubmit: handleSubmit(onSubmit),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, {
          sx: {
            "& > :not(style)": { m: 1, width: "25ch" }
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
              children: "\u017Bona"
            }, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 75,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Controller, {
              name: "wifeFirstName",
              control,
              defaultValue: "",
              render: ({ field }) => {
                var _a;
                return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
                  label: "Imi\u0119",
                  ...field,
                  error: !!errors.wifeFirstName,
                  helperText: errors.wifeFirstName ? (_a = errors.wifeFirstName) == null ? void 0 : _a.message : ""
                }, void 0, false, {
                  fileName: "app/routes/createhookform.tsx",
                  lineNumber: 81,
                  columnNumber: 15
                }, this);
              }
            }, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 76,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Controller, {
              name: "wifeLastName",
              control,
              defaultValue: "",
              render: ({ field }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
                label: "Nazwisko",
                ...field
              }, void 0, false, {
                fileName: "app/routes/createhookform.tsx",
                lineNumber: 95,
                columnNumber: 36
              }, this)
            }, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 91,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Controller, {
              name: "wifePhoneNumber",
              control,
              render: ({ field }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
                label: "Numer telefonu",
                ...field
              }, void 0, false, {
                fileName: "app/routes/createhookform.tsx",
                lineNumber: 101,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 97,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Controller, {
              name: "wifeEmail",
              control,
              rules: { required: true, pattern: /^\S+@\S+$/i },
              defaultValue: "",
              render: ({ field }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
                label: "Email",
                ...field
              }, void 0, false, {
                fileName: "app/routes/createhookform.tsx",
                lineNumber: 109,
                columnNumber: 36
              }, this)
            }, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 104,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Controller, {
              name: "wifeBirthYear",
              control,
              render: ({ field }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
                label: "Rok urodzenia",
                ...field
              }, void 0, false, {
                fileName: "app/routes/createhookform.tsx",
                lineNumber: 115,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 111,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
              children: "M\u0105\u017C"
            }, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 118,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Controller, {
              name: "husbandFirstName",
              control,
              defaultValue: "",
              render: ({ field }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
                label: "Imi\u0119",
                ...field
              }, void 0, false, {
                fileName: "app/routes/createhookform.tsx",
                lineNumber: 123,
                columnNumber: 36
              }, this)
            }, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 119,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Controller, {
              name: "husbandLastName",
              control,
              defaultValue: "",
              render: ({ field }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
                label: "Nazwisko",
                ...field
              }, void 0, false, {
                fileName: "app/routes/createhookform.tsx",
                lineNumber: 129,
                columnNumber: 36
              }, this)
            }, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 125,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Controller, {
              name: "husbandPhoneNumber",
              control,
              defaultValue: "",
              render: ({ field }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
                label: "Numer telefonu",
                ...field
              }, void 0, false, {
                fileName: "app/routes/createhookform.tsx",
                lineNumber: 136,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 131,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Controller, {
              name: "husbandEmail",
              control,
              rules: { required: true },
              defaultValue: "",
              render: ({ field }) => {
                var _a;
                return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
                  ...field,
                  label: "Email",
                  variant: "outlined",
                  error: !!errors.husbandEmail,
                  helperText: errors.husbandEmail ? (_a = errors.husbandEmail) == null ? void 0 : _a.message : "",
                  fullWidth: true,
                  margin: "dense"
                }, void 0, false, {
                  fileName: "app/routes/createhookform.tsx",
                  lineNumber: 145,
                  columnNumber: 15
                }, this);
              }
            }, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 139,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Controller, {
              name: "husbandBirthYear",
              control,
              render: ({ field }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
                label: "Rok urodzenia",
                ...field
              }, void 0, false, {
                fileName: "app/routes/createhookform.tsx",
                lineNumber: 162,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 158,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
              children: "Wsp\xF3lne"
            }, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 166,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Controller, {
              name: "city",
              control,
              defaultValue: "",
              render: ({ field }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select_default, {
                label: "Oddzia\u0142",
                ...field,
                name: "city",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem_default, {
                    value: 1,
                    children: "Wroc\u0142aw"
                  }, void 0, false, {
                    fileName: "app/routes/createhookform.tsx",
                    lineNumber: 173,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem_default, {
                    value: 2,
                    children: "Warszawa"
                  }, void 0, false, {
                    fileName: "app/routes/createhookform.tsx",
                    lineNumber: 174,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem_default, {
                    value: 3,
                    children: "Bia\u0142ystok"
                  }, void 0, false, {
                    fileName: "app/routes/createhookform.tsx",
                    lineNumber: 175,
                    columnNumber: 17
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/createhookform.tsx",
                lineNumber: 172,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 167,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Controller, {
              name: "weddingYear",
              control,
              render: ({ field }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
                type: "number",
                label: "Rok urodzenia",
                ...field
              }, void 0, false, {
                fileName: "app/routes/createhookform.tsx",
                lineNumber: 183,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 179,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {}, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 186,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
              size: "large",
              variant: "outlined",
              type: "submit",
              children: "Submit"
            }, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 187,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/createhookform.tsx",
          lineNumber: 70,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/createhookform.tsx",
        lineNumber: 69,
        columnNumber: 7
      }, this),
      ""
    ]
  }, void 0, true, {
    fileName: "app/routes/createhookform.tsx",
    lineNumber: 67,
    columnNumber: 5
  }, this);
};
var createhookform_default = Home;
export {
  createhookform_default as default
};
//# sourceMappingURL=/build/routes/createhookform-BUW5MMMT.js.map
