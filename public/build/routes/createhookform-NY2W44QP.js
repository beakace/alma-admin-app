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
function CreateHookForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({});
  const onSubmit = (data) => {
    console.log(data);
  };
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
              lineNumber: 58,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Controller, {
              name: "wifeFirstName",
              control,
              defaultValue: "",
              render: ({ field }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
                label: "Imi\u0119",
                ...field
              }, void 0, false, {
                fileName: "app/routes/createhookform.tsx",
                lineNumber: 63,
                columnNumber: 36
              }, this)
            }, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 59,
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
                lineNumber: 69,
                columnNumber: 36
              }, this)
            }, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 65,
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
                lineNumber: 75,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 71,
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
                lineNumber: 83,
                columnNumber: 36
              }, this)
            }, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 78,
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
                lineNumber: 89,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 85,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
              children: "M\u0105\u017C"
            }, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 92,
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
                lineNumber: 97,
                columnNumber: 36
              }, this)
            }, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 93,
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
                lineNumber: 103,
                columnNumber: 36
              }, this)
            }, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 99,
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
                lineNumber: 110,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 105,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Controller, {
              name: "husbandEmail",
              control,
              rules: { required: true },
              defaultValue: "",
              render: ({ field }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
                label: "Email",
                ...field
              }, void 0, false, {
                fileName: "app/routes/createhookform.tsx",
                lineNumber: 118,
                columnNumber: 36
              }, this)
            }, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 113,
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
                lineNumber: 124,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 120,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
              children: "Wsp\xF3lne"
            }, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 128,
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
                    lineNumber: 135,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem_default, {
                    value: 2,
                    children: "Warszawa"
                  }, void 0, false, {
                    fileName: "app/routes/createhookform.tsx",
                    lineNumber: 136,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem_default, {
                    value: 3,
                    children: "Bia\u0142ystok"
                  }, void 0, false, {
                    fileName: "app/routes/createhookform.tsx",
                    lineNumber: 137,
                    columnNumber: 17
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/createhookform.tsx",
                lineNumber: 134,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 129,
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
                lineNumber: 145,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 141,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {}, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 148,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
              size: "large",
              variant: "outlined",
              type: "submit",
              children: "Submitt"
            }, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 149,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/createhookform.tsx",
          lineNumber: 53,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/createhookform.tsx",
        lineNumber: 52,
        columnNumber: 7
      }, this),
      ""
    ]
  }, void 0, true, {
    fileName: "app/routes/createhookform.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}
export {
  CreateHookForm as default
};
//# sourceMappingURL=/build/routes/createhookform-NY2W44QP.js.map
