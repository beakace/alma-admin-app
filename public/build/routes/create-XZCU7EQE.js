import {
  create,
  create2,
  create3,
  o
} from "/build/_shared/chunk-7WLZOJPE.js";
import {
  Box_default,
  Controller,
  MenuItem_default,
  Select_default,
  TextField_default,
  useForm
} from "/build/_shared/chunk-6TBHYBGQ.js";
import {
  Button_default
} from "/build/_shared/chunk-QBE6LSJI.js";
import "/build/_shared/chunk-BBTLTVP5.js";
import {
  Form,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-L526GBBA.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/routes/create.tsx
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
              fileName: "app/routes/create.tsx",
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
                  fileName: "app/routes/create.tsx",
                  lineNumber: 81,
                  columnNumber: 15
                }, this);
              }
            }, void 0, false, {
              fileName: "app/routes/create.tsx",
              lineNumber: 76,
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
                  fileName: "app/routes/create.tsx",
                  lineNumber: 96,
                  columnNumber: 15
                }, this);
              }
            }, void 0, false, {
              fileName: "app/routes/create.tsx",
              lineNumber: 91,
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
                  fileName: "app/routes/create.tsx",
                  lineNumber: 110,
                  columnNumber: 15
                }, this);
              }
            }, void 0, false, {
              fileName: "app/routes/create.tsx",
              lineNumber: 106,
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
                  fileName: "app/routes/create.tsx",
                  lineNumber: 125,
                  columnNumber: 15
                }, this);
              }
            }, void 0, false, {
              fileName: "app/routes/create.tsx",
              lineNumber: 120,
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
                  fileName: "app/routes/create.tsx",
                  lineNumber: 137,
                  columnNumber: 15
                }, this);
              }
            }, void 0, false, {
              fileName: "app/routes/create.tsx",
              lineNumber: 133,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
              children: "M\u0105\u017C"
            }, void 0, false, {
              fileName: "app/routes/create.tsx",
              lineNumber: 147,
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
                  fileName: "app/routes/create.tsx",
                  lineNumber: 153,
                  columnNumber: 15
                }, this);
              }
            }, void 0, false, {
              fileName: "app/routes/create.tsx",
              lineNumber: 148,
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
                  fileName: "app/routes/create.tsx",
                  lineNumber: 170,
                  columnNumber: 15
                }, this);
              }
            }, void 0, false, {
              fileName: "app/routes/create.tsx",
              lineNumber: 165,
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
                  fileName: "app/routes/create.tsx",
                  lineNumber: 184,
                  columnNumber: 15
                }, this);
              }
            }, void 0, false, {
              fileName: "app/routes/create.tsx",
              lineNumber: 180,
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
                  fileName: "app/routes/create.tsx",
                  lineNumber: 202,
                  columnNumber: 15
                }, this);
              }
            }, void 0, false, {
              fileName: "app/routes/create.tsx",
              lineNumber: 196,
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
                  fileName: "app/routes/create.tsx",
                  lineNumber: 219,
                  columnNumber: 15
                }, this);
              }
            }, void 0, false, {
              fileName: "app/routes/create.tsx",
              lineNumber: 215,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
              children: "Wsp\xF3lne"
            }, void 0, false, {
              fileName: "app/routes/create.tsx",
              lineNumber: 232,
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
                    fileName: "app/routes/create.tsx",
                    lineNumber: 239,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem_default, {
                    value: 2,
                    children: "Warszawa"
                  }, void 0, false, {
                    fileName: "app/routes/create.tsx",
                    lineNumber: 240,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem_default, {
                    value: 3,
                    children: "Bia\u0142ystok"
                  }, void 0, false, {
                    fileName: "app/routes/create.tsx",
                    lineNumber: 241,
                    columnNumber: 17
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/create.tsx",
                lineNumber: 238,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: "app/routes/create.tsx",
              lineNumber: 233,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Controller, {
              name: "weddingYear",
              control,
              render: ({ field }) => {
                var _a;
                return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
                  type: "number",
                  label: "Rok urodzenia",
                  ...field,
                  error: !!errors.weddingYear,
                  helperText: errors.weddingYear ? (_a = errors.weddingYear) == null ? void 0 : _a.message : ""
                }, void 0, false, {
                  fileName: "app/routes/create.tsx",
                  lineNumber: 249,
                  columnNumber: 15
                }, this);
              }
            }, void 0, false, {
              fileName: "app/routes/create.tsx",
              lineNumber: 245,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {}, void 0, false, {
              fileName: "app/routes/create.tsx",
              lineNumber: 260,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
              size: "large",
              variant: "outlined",
              type: "submit",
              children: "Submit"
            }, void 0, false, {
              fileName: "app/routes/create.tsx",
              lineNumber: 261,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/create.tsx",
          lineNumber: 70,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/create.tsx",
        lineNumber: 69,
        columnNumber: 7
      }, this),
      ""
    ]
  }, void 0, true, {
    fileName: "app/routes/create.tsx",
    lineNumber: 67,
    columnNumber: 5
  }, this);
};
var create_default = Home;
export {
  create_default as default
};
//# sourceMappingURL=/build/routes/create-XZCU7EQE.js.map
