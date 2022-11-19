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
  const { control, handleSubmit } = useForm({});
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
              lineNumber: 51,
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
                lineNumber: 56,
                columnNumber: 36
              }, this)
            }, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 52,
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
                lineNumber: 62,
                columnNumber: 36
              }, this)
            }, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 58,
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
                lineNumber: 68,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 64,
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
                lineNumber: 76,
                columnNumber: 36
              }, this)
            }, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 71,
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
                lineNumber: 82,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 78,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
              children: "M\u0105\u017C"
            }, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 85,
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
                lineNumber: 90,
                columnNumber: 36
              }, this)
            }, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 86,
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
                lineNumber: 96,
                columnNumber: 36
              }, this)
            }, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 92,
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
                lineNumber: 103,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 98,
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
                lineNumber: 111,
                columnNumber: 36
              }, this)
            }, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 106,
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
                lineNumber: 117,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 113,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
              children: "Wsp\xF3lne"
            }, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 121,
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
                    lineNumber: 128,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem_default, {
                    value: 2,
                    children: "Warszawa"
                  }, void 0, false, {
                    fileName: "app/routes/createhookform.tsx",
                    lineNumber: 129,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem_default, {
                    value: 3,
                    children: "Bia\u0142ystok"
                  }, void 0, false, {
                    fileName: "app/routes/createhookform.tsx",
                    lineNumber: 130,
                    columnNumber: 17
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/createhookform.tsx",
                lineNumber: 127,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 122,
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
                lineNumber: 138,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 134,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {}, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 141,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
              size: "large",
              variant: "outlined",
              type: "submit",
              children: "Submit"
            }, void 0, false, {
              fileName: "app/routes/createhookform.tsx",
              lineNumber: 142,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/createhookform.tsx",
          lineNumber: 46,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/createhookform.tsx",
        lineNumber: 45,
        columnNumber: 7
      }, this),
      ""
    ]
  }, void 0, true, {
    fileName: "app/routes/createhookform.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}
export {
  CreateHookForm as default
};
//# sourceMappingURL=/build/routes/createhookform-PP4EQ354.js.map
