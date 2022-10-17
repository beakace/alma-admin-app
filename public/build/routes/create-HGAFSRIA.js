import {
  MenuItem_default
} from "/build/_shared/chunk-U3WUT3ZB.js";
import "/build/_shared/chunk-YBHEXKVQ.js";
import {
  Button_default
} from "/build/_shared/chunk-XHMERQVH.js";
import {
  Form
} from "/build/_shared/chunk-SIG6Y2AJ.js";
import {
  Box_default
} from "/build/_shared/chunk-UENNKZG4.js";
import {
  FormControl_default,
  InputLabel_default,
  Select_default,
  TextField_default
} from "/build/_shared/chunk-ICEPHC2A.js";
import "/build/_shared/chunk-GFQTOUIA.js";
import "/build/_shared/chunk-XUVAOVVU.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-7S3FVGI6.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/routes/create.tsx
var React = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Create() {
  const [city, setCity] = React.useState("");
  const [inputs, setInputs] = React.useState({
    wifeFirstName: "",
    wifeLastName: "",
    wifePhoneNumber: "",
    wifeEmail: "",
    husbandFirstName: "",
    husbandLastName: "",
    husbandPhoneNumber: "",
    husbandEmail: "",
    wifeBirthYear: "",
    husbandBirthYear: "",
    weddingYear: "",
    city: ""
  });
  const handleInputChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {
        onSubmit: handleSubmit,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, {
            component: "form",
            sx: {
              "& > :not(style)": { m: 1, width: "25ch" }
            },
            autoComplete: "off",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                children: "\u017Bona"
              }, void 0, false, {
                fileName: "app/routes/create.tsx",
                lineNumber: 57,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
                onChange: handleInputChange,
                name: "wifeFirstName",
                value: inputs.wifeFirstName,
                id: "wife.firstName",
                label: "Imi\u0119",
                variant: "outlined",
                required: true
              }, void 0, false, {
                fileName: "app/routes/create.tsx",
                lineNumber: 58,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
                name: "wifeLastName",
                value: inputs.wifeLastName,
                onChange: handleInputChange,
                id: "wife.lastName",
                label: "Nazwisko",
                variant: "outlined",
                required: true
              }, void 0, false, {
                fileName: "app/routes/create.tsx",
                lineNumber: 67,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
                name: "wifePhoneNumber",
                value: inputs.wifePhoneNumber,
                onChange: handleInputChange,
                type: "tel",
                id: "wife.phoneNumber",
                label: "Nr telefonu",
                variant: "outlined",
                required: true
              }, void 0, false, {
                fileName: "app/routes/create.tsx",
                lineNumber: 76,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
                name: "wifeEmail",
                value: inputs.wifeEmail,
                onChange: handleInputChange,
                type: "email",
                id: "wife.email",
                label: "Email",
                variant: "outlined",
                required: true
              }, void 0, false, {
                fileName: "app/routes/create.tsx",
                lineNumber: 86,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
                type: "number",
                InputProps: {
                  inputProps: {
                    max: 2010,
                    min: 1920
                  }
                },
                name: "wifeBirthYear",
                value: inputs.wifeBirthYear,
                onChange: handleInputChange,
                id: "wife.birthYear",
                label: "Rok urodzenia",
                variant: "outlined",
                required: true
              }, void 0, false, {
                fileName: "app/routes/create.tsx",
                lineNumber: 96,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                children: "M\u0105\u017C"
              }, void 0, false, {
                fileName: "app/routes/create.tsx",
                lineNumber: 113,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
                name: "husbandFirstName",
                value: inputs.husbandFirstName,
                onChange: handleInputChange,
                id: "husband.firstName",
                label: "Imi\u0119",
                variant: "outlined",
                required: true
              }, void 0, false, {
                fileName: "app/routes/create.tsx",
                lineNumber: 114,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
                name: "husbandLastName",
                value: inputs.husbandLastName,
                onChange: handleInputChange,
                id: "husband.lastName",
                label: "Nazwisko",
                variant: "outlined",
                required: true
              }, void 0, false, {
                fileName: "app/routes/create.tsx",
                lineNumber: 123,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
                name: "husbandPhoneNumber",
                value: inputs.husbandPhoneNumber,
                onChange: handleInputChange,
                type: "tel",
                id: "husband.phoneNumber",
                label: "Nr telefonu",
                variant: "outlined",
                required: true
              }, void 0, false, {
                fileName: "app/routes/create.tsx",
                lineNumber: 132,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
                name: "husbandEmail",
                value: inputs.husbandEmail,
                onChange: handleInputChange,
                type: "email",
                id: "husband.email",
                label: "Email",
                variant: "outlined",
                required: true
              }, void 0, false, {
                fileName: "app/routes/create.tsx",
                lineNumber: 142,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
                type: "number",
                InputProps: {
                  inputProps: {
                    max: 2010,
                    min: 1920
                  }
                },
                name: "husbandBirthYear",
                value: inputs.husbandBirthYear,
                onChange: handleInputChange,
                id: "husband.birthYear",
                label: "Rok urodzenia",
                variant: "outlined",
                required: true
              }, void 0, false, {
                fileName: "app/routes/create.tsx",
                lineNumber: 153,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                children: "Wsp\xF3lne"
              }, void 0, false, {
                fileName: "app/routes/create.tsx",
                lineNumber: 169,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
                type: "number",
                InputProps: {
                  inputProps: {
                    maxLength: 4,
                    max: 2010,
                    min: 1920
                  }
                },
                name: "weddingYear",
                value: inputs.weddingYear,
                onChange: handleInputChange,
                id: "wife.weddingYear",
                label: "Rok \u015Blubu",
                variant: "outlined",
                required: true
              }, void 0, false, {
                fileName: "app/routes/create.tsx",
                lineNumber: 171,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, {
                sx: { minWidth: 120 },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl_default, {
                  fullWidth: true,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputLabel_default, {
                      id: "city-label",
                      children: "Oddzia\u0142"
                    }, void 0, false, {
                      fileName: "app/routes/create.tsx",
                      lineNumber: 190,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select_default, {
                      name: "city",
                      labelId: "city-label",
                      id: "city",
                      value: inputs.city,
                      label: "Oddzia\u0142",
                      onChange: handleInputChange,
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem_default, {
                          value: 1,
                          children: "Wroc\u0142aw"
                        }, void 0, false, {
                          fileName: "app/routes/create.tsx",
                          lineNumber: 199,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem_default, {
                          value: 2,
                          children: "Warszawa"
                        }, void 0, false, {
                          fileName: "app/routes/create.tsx",
                          lineNumber: 200,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem_default, {
                          value: 3,
                          children: "Bia\u0142ystok"
                        }, void 0, false, {
                          fileName: "app/routes/create.tsx",
                          lineNumber: 201,
                          columnNumber: 17
                        }, this)
                      ]
                    }, void 0, true, {
                      fileName: "app/routes/create.tsx",
                      lineNumber: 191,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/routes/create.tsx",
                  lineNumber: 189,
                  columnNumber: 13
                }, this)
              }, void 0, false, {
                fileName: "app/routes/create.tsx",
                lineNumber: 188,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, {
                sx: { minWidth: 120 },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl_default, {
                  fullWidth: true,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputLabel_default, {
                      id: "invitedBy-select-label",
                      children: "Zaproszeni przez"
                    }, void 0, false, {
                      fileName: "app/routes/create.tsx",
                      lineNumber: 207,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select_default, {
                      labelId: "invitedBy-select-label",
                      id: "invitedBy-select",
                      value: inputs.city,
                      label: "Zaproszeni przez",
                      onChange: handleInputChange,
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem_default, {
                          value: 4,
                          children: "Tu"
                        }, void 0, false, {
                          fileName: "app/routes/create.tsx",
                          lineNumber: 217,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem_default, {
                          value: 5,
                          children: "B\u0119d\u0105"
                        }, void 0, false, {
                          fileName: "app/routes/create.tsx",
                          lineNumber: 218,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem_default, {
                          value: 6,
                          children: "R\xF3zne pary"
                        }, void 0, false, {
                          fileName: "app/routes/create.tsx",
                          lineNumber: 219,
                          columnNumber: 17
                        }, this)
                      ]
                    }, void 0, true, {
                      fileName: "app/routes/create.tsx",
                      lineNumber: 210,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/routes/create.tsx",
                  lineNumber: 206,
                  columnNumber: 13
                }, this)
              }, void 0, false, {
                fileName: "app/routes/create.tsx",
                lineNumber: 205,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/create.tsx",
            lineNumber: 50,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
            type: "submit",
            children: "Submit"
          }, void 0, false, {
            fileName: "app/routes/create.tsx",
            lineNumber: 224,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/create.tsx",
        lineNumber: 49,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/create.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}
export {
  Create as default
};
//# sourceMappingURL=/build/routes/create-HGAFSRIA.js.map