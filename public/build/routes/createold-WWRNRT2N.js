import {
  Controller,
  create,
  create2,
  create3,
  o,
  useForm
} from "/build/_shared/chunk-A3BYVHY4.js";
import {
  Box_default,
  MenuItem_default,
  Select_default,
  TextField_default
} from "/build/_shared/chunk-SRMGHJLC.js";
import {
  Button_default
} from "/build/_shared/chunk-C7GHH2ZQ.js";
import "/build/_shared/chunk-KQSRV3KE.js";
import {
  Form,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-D7N37Z4Z.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/routes/createold.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var schema = create3().shape({
  wifeFirstName: create().required("Imi\u0119 jest wymagane"),
  wifeLastName: create().required("Nazwisko jest wymagane"),
  wifePhoneNumber: create2().required("Numer telefonu jest wymagany"),
  wifeEmail: create().required("Email jest wymagany").email("Email jest nieprawid\u0142owy"),
  wifeBirthYear: create2().required("Rok urodzenia jest wymagany"),
  husbandFirstName: create().required("Imi\u0119 jest wymagane"),
  husbandLastName: create().required("Nazwisko jest wymagane"),
  husbandPhoneNumber: create2().required("Numer telefonu jest wymagany"),
  husbandEmail: create().required("Email jest wymagany").email("Email jest nieprawid\u0142owy"),
  husbandBirthYear: create2().required("Rok urodzenia jest wymagany"),
  weddingYear: create2().required("Rok \u015Blubu jest wymagany"),
  city: create2().required("Miasto jest wymagane")
});
var createForm = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    resolver: o(schema)
  });
  const onSubmit = (data) => console.log(watch("husbandEmail"));
  console.log("errors are", errors);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {
        method: "post",
        onSubmit: handleSubmit(onSubmit),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, {
          sx: {
            "& > :not(style)": { m: 1, width: "25ch" }
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
              children: "\u017Bona"
            }, void 0, false, {
              fileName: "app/routes/createold.tsx",
              lineNumber: 94,
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
                  fileName: "app/routes/createold.tsx",
                  lineNumber: 100,
                  columnNumber: 15
                }, this);
              }
            }, void 0, false, {
              fileName: "app/routes/createold.tsx",
              lineNumber: 95,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Controller, {
              name: "wifeLastName",
              control,
              defaultValue: "",
              render: ({ field }) => {
                var _a;
                return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
                  label: "Nazwisko",
                  ...field,
                  error: !!errors.wifeLastName,
                  helperText: errors.wifeLastName ? (_a = errors.wifeLastName) == null ? void 0 : _a.message : ""
                }, void 0, false, {
                  fileName: "app/routes/createold.tsx",
                  lineNumber: 115,
                  columnNumber: 15
                }, this);
              }
            }, void 0, false, {
              fileName: "app/routes/createold.tsx",
              lineNumber: 110,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Controller, {
              name: "wifePhoneNumber",
              control,
              render: ({ field }) => {
                var _a;
                return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
                  label: "Numer telefonu",
                  ...field,
                  error: !!errors.wifePhoneNumber,
                  helperText: errors.wifePhoneNumber ? (_a = errors.wifePhoneNumber) == null ? void 0 : _a.message : ""
                }, void 0, false, {
                  fileName: "app/routes/createold.tsx",
                  lineNumber: 129,
                  columnNumber: 15
                }, this);
              }
            }, void 0, false, {
              fileName: "app/routes/createold.tsx",
              lineNumber: 125,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Controller, {
              name: "wifeEmail",
              control,
              defaultValue: "",
              render: ({ field }) => {
                var _a;
                return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
                  label: "Email",
                  ...field,
                  error: !!errors.wifeEmail,
                  helperText: errors.wifeEmail ? (_a = errors.wifeEmail) == null ? void 0 : _a.message : ""
                }, void 0, false, {
                  fileName: "app/routes/createold.tsx",
                  lineNumber: 144,
                  columnNumber: 15
                }, this);
              }
            }, void 0, false, {
              fileName: "app/routes/createold.tsx",
              lineNumber: 139,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Controller, {
              name: "wifeBirthYear",
              control,
              render: ({ field }) => {
                var _a;
                return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
                  label: "Rok urodzenia",
                  ...field,
                  error: !!errors.wifeBirthYear,
                  helperText: errors.wifeBirthYear ? (_a = errors.wifeBirthYear) == null ? void 0 : _a.message : ""
                }, void 0, false, {
                  fileName: "app/routes/createold.tsx",
                  lineNumber: 156,
                  columnNumber: 15
                }, this);
              }
            }, void 0, false, {
              fileName: "app/routes/createold.tsx",
              lineNumber: 152,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
              children: "M\u0105\u017C"
            }, void 0, false, {
              fileName: "app/routes/createold.tsx",
              lineNumber: 166,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Controller, {
              name: "husbandFirstName",
              control,
              defaultValue: "",
              render: ({ field }) => {
                var _a;
                return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
                  label: "Imi\u0119",
                  ...field,
                  error: !!errors.husbandFirstName,
                  helperText: errors.husbandFirstName ? (_a = errors.husbandFirstName) == null ? void 0 : _a.message : ""
                }, void 0, false, {
                  fileName: "app/routes/createold.tsx",
                  lineNumber: 172,
                  columnNumber: 15
                }, this);
              }
            }, void 0, false, {
              fileName: "app/routes/createold.tsx",
              lineNumber: 167,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Controller, {
              name: "husbandLastName",
              control,
              defaultValue: "",
              render: ({ field }) => {
                var _a;
                return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
                  label: "Nazwisko",
                  ...field,
                  error: !!errors.husbandLastName,
                  helperText: errors.husbandLastName ? (_a = errors.husbandLastName) == null ? void 0 : _a.message : ""
                }, void 0, false, {
                  fileName: "app/routes/createold.tsx",
                  lineNumber: 189,
                  columnNumber: 15
                }, this);
              }
            }, void 0, false, {
              fileName: "app/routes/createold.tsx",
              lineNumber: 184,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Controller, {
              name: "husbandPhoneNumber",
              control,
              render: ({ field }) => {
                var _a;
                return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
                  label: "Numer telefonu",
                  ...field,
                  error: !!errors.husbandPhoneNumber,
                  helperText: errors.husbandPhoneNumber ? (_a = errors.husbandPhoneNumber) == null ? void 0 : _a.message : ""
                }, void 0, false, {
                  fileName: "app/routes/createold.tsx",
                  lineNumber: 203,
                  columnNumber: 15
                }, this);
              }
            }, void 0, false, {
              fileName: "app/routes/createold.tsx",
              lineNumber: 199,
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
                  fileName: "app/routes/createold.tsx",
                  lineNumber: 221,
                  columnNumber: 15
                }, this);
              }
            }, void 0, false, {
              fileName: "app/routes/createold.tsx",
              lineNumber: 215,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Controller, {
              name: "husbandBirthYear",
              control,
              render: ({ field }) => {
                var _a;
                return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
                  label: "Rok urodzenia",
                  ...field,
                  error: !!errors.husbandBirthYear,
                  helperText: errors.husbandBirthYear ? (_a = errors.husbandBirthYear) == null ? void 0 : _a.message : ""
                }, void 0, false, {
                  fileName: "app/routes/createold.tsx",
                  lineNumber: 238,
                  columnNumber: 15
                }, this);
              }
            }, void 0, false, {
              fileName: "app/routes/createold.tsx",
              lineNumber: 234,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
              children: "Wsp\xF3lne"
            }, void 0, false, {
              fileName: "app/routes/createold.tsx",
              lineNumber: 251,
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
                    fileName: "app/routes/createold.tsx",
                    lineNumber: 258,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem_default, {
                    value: 2,
                    children: "Warszawa"
                  }, void 0, false, {
                    fileName: "app/routes/createold.tsx",
                    lineNumber: 259,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem_default, {
                    value: 3,
                    children: "Bia\u0142ystok"
                  }, void 0, false, {
                    fileName: "app/routes/createold.tsx",
                    lineNumber: 260,
                    columnNumber: 17
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/createold.tsx",
                lineNumber: 257,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: "app/routes/createold.tsx",
              lineNumber: 252,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Controller, {
              name: "weddingYear",
              control,
              render: ({ field }) => {
                var _a;
                return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
                  type: "number",
                  label: "Rok \u015Blubu",
                  ...field,
                  error: !!errors.weddingYear,
                  helperText: errors.weddingYear ? (_a = errors.weddingYear) == null ? void 0 : _a.message : ""
                }, void 0, false, {
                  fileName: "app/routes/createold.tsx",
                  lineNumber: 268,
                  columnNumber: 15
                }, this);
              }
            }, void 0, false, {
              fileName: "app/routes/createold.tsx",
              lineNumber: 264,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {}, void 0, false, {
              fileName: "app/routes/createold.tsx",
              lineNumber: 279,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
              size: "large",
              variant: "outlined",
              type: "submit",
              children: "Submit"
            }, void 0, false, {
              fileName: "app/routes/createold.tsx",
              lineNumber: 280,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/createold.tsx",
          lineNumber: 89,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/createold.tsx",
        lineNumber: 88,
        columnNumber: 7
      }, this),
      ""
    ]
  }, void 0, true, {
    fileName: "app/routes/createold.tsx",
    lineNumber: 86,
    columnNumber: 5
  }, this);
};
var createold_default = createForm;
export {
  createold_default as default
};
//# sourceMappingURL=/build/routes/createold-WWRNRT2N.js.map
