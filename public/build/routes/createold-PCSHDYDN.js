import{a as t,b as p,c as g,d as u,e as o,f as N}from"/build/_shared/chunk-LZGFJAIF.js";import{A as f,H as m,p as b,z as s}from"/build/_shared/chunk-MVC2EMJB.js";import{za as w}from"/build/_shared/chunk-WU5JEAYZ.js";import"/build/_shared/chunk-LEWO2QSC.js";import{m as d,r as h}from"/build/_shared/chunk-ZIWRNK6O.js";import{e as l}from"/build/_shared/chunk-242LWQVT.js";var e=l(h()),F=N().shape({wifeFirstName:u().required("Imi\u0119 jest wymagane"),wifeLastName:u().required("Nazwisko jest wymagane"),wifePhoneNumber:o().required("Numer telefonu jest wymagany"),wifeEmail:u().required("Email jest wymagany").email("Email jest nieprawid\u0142owy"),wifeBirthYear:o().required("Rok urodzenia jest wymagany"),husbandFirstName:u().required("Imi\u0119 jest wymagane"),husbandLastName:u().required("Nazwisko jest wymagane"),husbandPhoneNumber:o().required("Numer telefonu jest wymagany"),husbandEmail:u().required("Email jest wymagany").email("Email jest nieprawid\u0142owy"),husbandBirthYear:o().required("Rok urodzenia jest wymagany"),weddingYear:o().required("Rok \u015Blubu jest wymagany"),city:o().required("Miasto jest wymagane")});var E=()=>{let{control:i,handleSubmit:c,watch:y,formState:{errors:r}}=p({resolver:g(F)}),Y=n=>console.log(y("husbandEmail"));return console.log("errors are",r),(0,e.jsxs)("div",{children:[" ",(0,e.jsx)(d,{method:"post",onSubmit:c(Y),children:(0,e.jsxs)(b,{sx:{"& > :not(style)":{m:1,width:"25ch"}},children:[(0,e.jsx)("h1",{children:"\u017Bona"}),(0,e.jsx)(t,{name:"wifeFirstName",control:i,defaultValue:"",render:({field:n})=>{var a;return(0,e.jsx)(m,{label:"Imi\u0119",...n,error:!!r.wifeFirstName,helperText:r.wifeFirstName?(a=r.wifeFirstName)==null?void 0:a.message:""})}}),(0,e.jsx)(t,{name:"wifeLastName",control:i,defaultValue:"",render:({field:n})=>{var a;return(0,e.jsx)(m,{label:"Nazwisko",...n,error:!!r.wifeLastName,helperText:r.wifeLastName?(a=r.wifeLastName)==null?void 0:a.message:""})}}),(0,e.jsx)(t,{name:"wifePhoneNumber",control:i,render:({field:n})=>{var a;return(0,e.jsx)(m,{label:"Numer telefonu",...n,error:!!r.wifePhoneNumber,helperText:r.wifePhoneNumber?(a=r.wifePhoneNumber)==null?void 0:a.message:""})}}),(0,e.jsx)(t,{name:"wifeEmail",control:i,defaultValue:"",render:({field:n})=>{var a;return(0,e.jsx)(m,{label:"Email",...n,error:!!r.wifeEmail,helperText:r.wifeEmail?(a=r.wifeEmail)==null?void 0:a.message:""})}}),(0,e.jsx)(t,{name:"wifeBirthYear",control:i,render:({field:n})=>{var a;return(0,e.jsx)(m,{label:"Rok urodzenia",...n,error:!!r.wifeBirthYear,helperText:r.wifeBirthYear?(a=r.wifeBirthYear)==null?void 0:a.message:""})}}),(0,e.jsx)("h1",{children:"M\u0105\u017C"}),(0,e.jsx)(t,{name:"husbandFirstName",control:i,defaultValue:"",render:({field:n})=>{var a;return(0,e.jsx)(m,{label:"Imi\u0119",...n,error:!!r.husbandFirstName,helperText:r.husbandFirstName?(a=r.husbandFirstName)==null?void 0:a.message:""})}}),(0,e.jsx)(t,{name:"husbandLastName",control:i,defaultValue:"",render:({field:n})=>{var a;return(0,e.jsx)(m,{label:"Nazwisko",...n,error:!!r.husbandLastName,helperText:r.husbandLastName?(a=r.husbandLastName)==null?void 0:a.message:""})}}),(0,e.jsx)(t,{name:"husbandPhoneNumber",control:i,render:({field:n})=>{var a;return(0,e.jsx)(m,{label:"Numer telefonu",...n,error:!!r.husbandPhoneNumber,helperText:r.husbandPhoneNumber?(a=r.husbandPhoneNumber)==null?void 0:a.message:""})}}),(0,e.jsx)(t,{name:"husbandEmail",control:i,rules:{required:!0},defaultValue:"",render:({field:n})=>{var a;return(0,e.jsx)(m,{...n,label:"Email",variant:"outlined",error:!!r.husbandEmail,helperText:r.husbandEmail?(a=r.husbandEmail)==null?void 0:a.message:"",fullWidth:!0,margin:"dense"})}}),(0,e.jsx)(t,{name:"husbandBirthYear",control:i,render:({field:n})=>{var a;return(0,e.jsx)(m,{label:"Rok urodzenia",...n,error:!!r.husbandBirthYear,helperText:r.husbandBirthYear?(a=r.husbandBirthYear)==null?void 0:a.message:""})}}),(0,e.jsx)("h1",{children:"Wsp\xF3lne"}),(0,e.jsx)(t,{name:"city",control:i,defaultValue:"",render:({field:n})=>(0,e.jsxs)(f,{label:"Oddzia\u0142",...n,name:"city",children:[(0,e.jsx)(s,{value:1,children:"Wroc\u0142aw"}),(0,e.jsx)(s,{value:2,children:"Warszawa"}),(0,e.jsx)(s,{value:3,children:"Bia\u0142ystok"})]})}),(0,e.jsx)(t,{name:"weddingYear",control:i,render:({field:n})=>{var a;return(0,e.jsx)(m,{type:"number",label:"Rok \u015Blubu",...n,error:!!r.weddingYear,helperText:r.weddingYear?(a=r.weddingYear)==null?void 0:a.message:""})}}),(0,e.jsx)("p",{}),(0,e.jsx)(w,{size:"large",variant:"outlined",type:"submit",children:"Submit"})]})}),""]})},x=E;export{x as default};
