import {
  Box_default,
  DataTable,
  IconButton_default,
  Paper_default,
  TableBody_default,
  TableCell_default,
  TableContainer_default,
  TableFooter_default,
  TableHead_default,
  TablePagination_default,
  TableRow_default,
  Table_default,
  TextField_default,
  tableCellClasses_default,
  useTheme
} from "/build/_shared/chunk-7NJL3AT2.js";
import {
  require_Clear,
  require_createSvgIcon,
  require_interopRequireDefault
} from "/build/_shared/chunk-EFBTBYVK.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-NY267XDX.js";
import {
  Checkbox_default,
  FormControlLabel_default,
  FormControl_default,
  FormGroup_default,
  FormLabel_default
} from "/build/_shared/chunk-LSWH3OAT.js";
import {
  Button_default,
  require_jsx_runtime,
  styled_default
} from "/build/_shared/chunk-C4PMEWWA.js";
import "/build/_shared/chunk-FVMCPGYL.js";
import {
  __commonJS,
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6X5ICLL3.js";

// node_modules/@mui/icons-material/FirstPage.js
var require_FirstPage = __commonJS({
  "node_modules/@mui/icons-material/FirstPage.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _jsxRuntime = require_jsx_runtime();
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
      d: "M18.41 16.59 13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
    }), "FirstPage");
    exports.default = _default;
  }
});

// node_modules/@mui/icons-material/KeyboardArrowLeft.js
var require_KeyboardArrowLeft = __commonJS({
  "node_modules/@mui/icons-material/KeyboardArrowLeft.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _jsxRuntime = require_jsx_runtime();
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
      d: "M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
    }), "KeyboardArrowLeft");
    exports.default = _default;
  }
});

// node_modules/@mui/icons-material/KeyboardArrowRight.js
var require_KeyboardArrowRight = __commonJS({
  "node_modules/@mui/icons-material/KeyboardArrowRight.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _jsxRuntime = require_jsx_runtime();
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
      d: "M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
    }), "KeyboardArrowRight");
    exports.default = _default;
  }
});

// node_modules/@mui/icons-material/LastPage.js
var require_LastPage = __commonJS({
  "node_modules/@mui/icons-material/LastPage.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _jsxRuntime = require_jsx_runtime();
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
      d: "M5.59 7.41 10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
    }), "LastPage");
    exports.default = _default;
  }
});

// app/routes/index.tsx
var import_Clear = __toESM(require_Clear());

// app/components/mytable.tsx
var React = __toESM(require_react());
var import_FirstPage = __toESM(require_FirstPage());
var import_KeyboardArrowLeft = __toESM(require_KeyboardArrowLeft());
var import_KeyboardArrowRight = __toESM(require_KeyboardArrowRight());
var import_LastPage = __toESM(require_LastPage());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var StyledTableCell = styled_default(TableCell_default)(({ theme }) => ({
  [`&.${tableCellClasses_default.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses_default.body}`]: {
    fontSize: 14
  }
}));
function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;
  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };
  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };
  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };
  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, {
    sx: { flexShrink: 0, ml: 5 },
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
        onClick: handleFirstPageButtonClick,
        disabled: page === 0,
        "aria-label": "first page",
        children: theme.direction === "rtl" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_LastPage.default, {}, void 0, false, {
          fileName: "app/components/mytable.tsx",
          lineNumber: 74,
          columnNumber: 38
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_FirstPage.default, {}, void 0, false, {
          fileName: "app/components/mytable.tsx",
          lineNumber: 74,
          columnNumber: 57
        }, this)
      }, void 0, false, {
        fileName: "app/components/mytable.tsx",
        lineNumber: 69,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
        onClick: handleBackButtonClick,
        disabled: page === 0,
        "aria-label": "previous page",
        children: theme.direction === "rtl" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_KeyboardArrowRight.default, {}, void 0, false, {
          fileName: "app/components/mytable.tsx",
          lineNumber: 82,
          columnNumber: 11
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_KeyboardArrowLeft.default, {}, void 0, false, {
          fileName: "app/components/mytable.tsx",
          lineNumber: 84,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: "app/components/mytable.tsx",
        lineNumber: 76,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
        onClick: handleNextButtonClick,
        disabled: page >= Math.ceil(count / rowsPerPage) - 1,
        "aria-label": "next page",
        children: theme.direction === "rtl" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_KeyboardArrowLeft.default, {}, void 0, false, {
          fileName: "app/components/mytable.tsx",
          lineNumber: 93,
          columnNumber: 11
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_KeyboardArrowRight.default, {}, void 0, false, {
          fileName: "app/components/mytable.tsx",
          lineNumber: 95,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: "app/components/mytable.tsx",
        lineNumber: 87,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
        onClick: handleLastPageButtonClick,
        disabled: page >= Math.ceil(count / rowsPerPage) - 1,
        "aria-label": "last page",
        children: theme.direction === "rtl" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_FirstPage.default, {}, void 0, false, {
          fileName: "app/components/mytable.tsx",
          lineNumber: 103,
          columnNumber: 38
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_LastPage.default, {}, void 0, false, {
          fileName: "app/components/mytable.tsx",
          lineNumber: 103,
          columnNumber: 58
        }, this)
      }, void 0, false, {
        fileName: "app/components/mytable.tsx",
        lineNumber: 98,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/mytable.tsx",
    lineNumber: 68,
    columnNumber: 5
  }, this);
}
function MyTable({ loader: loader2 }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - loader2.couples.length) : 0;
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableContainer_default, {
    component: Paper_default,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table_default, {
      sx: { minWidth: 500 },
      "aria-label": "custom pagination table",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead_default, {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow_default, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledTableCell, {
                children: "Nazwisko"
              }, void 0, false, {
                fileName: "app/components/mytable.tsx",
                lineNumber: 136,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledTableCell, {
                align: "right",
                children: "Imi\u0119\xA0"
              }, void 0, false, {
                fileName: "app/components/mytable.tsx",
                lineNumber: 137,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledTableCell, {
                align: "right",
                children: "Kod pocztowy\xA0"
              }, void 0, false, {
                fileName: "app/components/mytable.tsx",
                lineNumber: 138,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledTableCell, {
                align: "right",
                children: "Miasto\xA0"
              }, void 0, false, {
                fileName: "app/components/mytable.tsx",
                lineNumber: 139,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledTableCell, {
                align: "right",
                children: "Grupa\xA0"
              }, void 0, false, {
                fileName: "app/components/mytable.tsx",
                lineNumber: 140,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledTableCell, {
                align: "right",
                children: "ID\xA0"
              }, void 0, false, {
                fileName: "app/components/mytable.tsx",
                lineNumber: 141,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledTableCell, {
                align: "right",
                children: "Zaproszeni przez\xA0"
              }, void 0, false, {
                fileName: "app/components/mytable.tsx",
                lineNumber: 142,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledTableCell, {
                align: "right",
                children: "Data urodzin\xA0"
              }, void 0, false, {
                fileName: "app/components/mytable.tsx",
                lineNumber: 145,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledTableCell, {
                align: "right",
                children: "Data \u015Blubu\xA0"
              }, void 0, false, {
                fileName: "app/components/mytable.tsx",
                lineNumber: 146,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledTableCell, {
                align: "right",
                children: "email\xA0"
              }, void 0, false, {
                fileName: "app/components/mytable.tsx",
                lineNumber: 147,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledTableCell, {
                align: "right",
                children: "Akcje\xA0"
              }, void 0, false, {
                fileName: "app/components/mytable.tsx",
                lineNumber: 148,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/mytable.tsx",
            lineNumber: 135,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/mytable.tsx",
          lineNumber: 134,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableBody_default, {
          children: [
            (rowsPerPage > 0 ? loader2.couples.slice(
              page * rowsPerPage,
              page * rowsPerPage + rowsPerPage
            ) : loader2.couples).loader.couples.map((couple) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow_default, {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                  component: "th",
                  scope: "row",
                  children: couple.husband.lastName
                }, void 0, false, {
                  fileName: "app/components/mytable.tsx",
                  lineNumber: 161,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                  style: { width: 160 },
                  align: "right",
                  children: couple.husband.firstName
                }, void 0, false, {
                  fileName: "app/components/mytable.tsx",
                  lineNumber: 164,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                  style: { width: 160 },
                  align: "right",
                  children: couple.postalCode
                }, void 0, false, {
                  fileName: "app/components/mytable.tsx",
                  lineNumber: 167,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                  style: { width: 160 },
                  align: "right",
                  children: couple.city
                }, void 0, false, {
                  fileName: "app/components/mytable.tsx",
                  lineNumber: 170,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                  style: { width: 160 },
                  align: "right",
                  children: couple.group
                }, void 0, false, {
                  fileName: "app/components/mytable.tsx",
                  lineNumber: 173,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                  style: { width: 160 },
                  align: "right",
                  children: couple.id
                }, void 0, false, {
                  fileName: "app/components/mytable.tsx",
                  lineNumber: 176,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                  style: { width: 160 },
                  align: "right",
                  children: couple.invitedById
                }, void 0, false, {
                  fileName: "app/components/mytable.tsx",
                  lineNumber: 179,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                  style: { width: 160 },
                  align: "right",
                  children: couple.birthYear
                }, void 0, false, {
                  fileName: "app/components/mytable.tsx",
                  lineNumber: 182,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                  style: { width: 160 },
                  align: "right",
                  children: couple.weddingYear
                }, void 0, false, {
                  fileName: "app/components/mytable.tsx",
                  lineNumber: 185,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                  style: { width: 160 },
                  align: "right",
                  children: couple.email
                }, void 0, false, {
                  fileName: "app/components/mytable.tsx",
                  lineNumber: 188,
                  columnNumber: 15
                }, this)
              ]
            }, couple.husbandId, true, {
              fileName: "app/components/mytable.tsx",
              lineNumber: 160,
              columnNumber: 13
            }, this)),
            emptyRows > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow_default, {
              style: { height: 53 * emptyRows },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell_default, {
                colSpan: 6
              }, void 0, false, {
                fileName: "app/components/mytable.tsx",
                lineNumber: 195,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: "app/components/mytable.tsx",
              lineNumber: 194,
              columnNumber: 13
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/mytable.tsx",
          lineNumber: 152,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableFooter_default, {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow_default, {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TablePagination_default, {
              labelDisplayedRows: ({ from, to, count }) => {
                return `${from}\u2013${to} z ${count !== -1 ? count : `wi\u0119cej ni\u017C ${to}`}`;
              },
              labelRowsPerPage: "Wierszy na stron\u0119:",
              rowsPerPageOptions: [5, 10, 25, 50],
              colSpan: 50,
              count: loader2.couples.length,
              rowsPerPage,
              page,
              SelectProps: {
                inputProps: {
                  "aria-label": "rows per page"
                },
                native: true
              },
              onPageChange: handleChangePage,
              onRowsPerPageChange: handleChangeRowsPerPage,
              ActionsComponent: TablePaginationActions
            }, void 0, false, {
              fileName: "app/components/mytable.tsx",
              lineNumber: 202,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/components/mytable.tsx",
            lineNumber: 201,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/mytable.tsx",
          lineNumber: 200,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/components/mytable.tsx",
      lineNumber: 133,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/mytable.tsx",
    lineNumber: 132,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var loader = async () => {
  return {
    couples: [
      {
        id: "2-1-2005.01-15",
        city: "Wroc\u0142aw",
        group: "A",
        postalCode: "50-123",
        weddingYear: 2e3,
        wifeId: "1234",
        husbandId: "5678",
        invitedById: null,
        wife: {
          id: "1234",
          email: "email@email-wife.com",
          lastName: "Kowalska",
          firstName: "Anna",
          birthYear: 1980,
          phoneNumber: "123456789"
        },
        husband: {
          id: "123",
          email: "husband@email.com",
          lastName: "Kowalski",
          firstName: "Jan",
          birthYear: 1975,
          phoneNumber: "987654321"
        }
      },
      {
        id: "2-1-2006.01-15",
        city: "Wroc\u0142aw",
        group: "B",
        postalCode: "50-123",
        weddingYear: 2001,
        wifeId: "12340",
        husbandId: "56780",
        invitedById: null,
        wife: {
          id: "12340",
          email: "email2@email-wife.com",
          lastName: "Nowak",
          firstName: "Grazyna",
          birthYear: 1981,
          phoneNumber: "123456780"
        },
        husband: {
          id: "1230",
          email: "husband2@email.com",
          lastName: "Nowak",
          firstName: "Janusz",
          birthYear: 1976,
          phoneNumber: "987654320"
        }
      }
    ]
  };
};
function Index() {
  const loaderData = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, {
    style: { margin: "5rem" },
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
          children: "Alma"
        }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 87,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
          style: { marginRight: "1rem", marginBottom: "2rem" },
          id: "outlined-basic",
          label: "Szukaj...",
          variant: "standard"
        }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 88,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {}, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 94,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl_default, {
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
              lineNumber: 102,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormGroup_default, {
              "aria-label": "position",
              row: true,
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControlLabel_default, {
                  value: "Bez maila",
                  control: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Checkbox_default, {}, void 0, false, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 106,
                    columnNumber: 24
                  }, this),
                  label: "Bez maila",
                  labelPlacement: "end"
                }, void 0, false, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 104,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControlLabel_default, {
                  value: "A",
                  control: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Checkbox_default, {}, void 0, false, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 112,
                    columnNumber: 24
                  }, this),
                  label: "A",
                  labelPlacement: "end"
                }, void 0, false, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 110,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControlLabel_default, {
                  value: "B",
                  control: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Checkbox_default, {}, void 0, false, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 118,
                    columnNumber: 24
                  }, this),
                  label: "B",
                  labelPlacement: "end"
                }, void 0, false, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 116,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControlLabel_default, {
                  value: "C",
                  control: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Checkbox_default, {}, void 0, false, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 124,
                    columnNumber: 24
                  }, this),
                  label: "C",
                  labelPlacement: "end"
                }, void 0, false, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 122,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControlLabel_default, {
                  value: "D",
                  control: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Checkbox_default, {}, void 0, false, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 130,
                    columnNumber: 24
                  }, this),
                  label: "D",
                  labelPlacement: "end"
                }, void 0, false, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 128,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControlLabel_default, {
                  value: "S/X",
                  control: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Checkbox_default, {}, void 0, false, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 136,
                    columnNumber: 24
                  }, this),
                  label: "S/X",
                  labelPlacement: "end"
                }, void 0, false, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 134,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                  variant: "outlined",
                  startIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Clear.default, {}, void 0, false, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 140,
                    columnNumber: 51
                  }, this),
                  children: "Wyczy\u015B\u0107 filtry"
                }, void 0, false, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 140,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/index.tsx",
              lineNumber: 103,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/index.tsx",
          lineNumber: 95,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MyTable, {
          loader
        }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 146,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataTable, {
          loaderData
        }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 147,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
          variant: "contained",
          component: Link,
          to: "/about",
          children: "Go to the about page"
        }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 162,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/index.tsx",
    lineNumber: 85,
    columnNumber: 5
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-RCIWGDM7.js.map
