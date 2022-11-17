// const [checkboxFilters, setCheckboxFilters]: any = useState({
//     groups: [],
//     response: [],
//   })

//   const handleChange = (e: any) => {
//     // Destructuring
//     const { value, checked } = e.target
//     const { groups } = checkboxFilters

//     console.log(`${value} is ${checked}`)

//     // Case 1 : The user checks the box
//     if (checked) {
//       setCheckboxFilters({
//         groups: [...groups, value],
//         response: [...groups, value],
//       })
//     }

//     // Case 2  : The user unchecks the box
//     else {
//       setCheckboxFilters({
//         groups: groups.filter((e: any) => e !== value),
//         response: groups.filter((e: any) => e !== value),
//       })
//     }
//     // const handleCheckboxFilterChange = (e: any) => {
//     //   setCheckboxFilters((checkboxFilters) => ({
//     //     ...checkboxFilters,
//     //     [e.target.id]: e.target.checked,
//     //   }))
//     // }
//     const couples = useLoaderData().couples

//     // const handleClearClick = () => {
//     //   setCheckboxFilters({
//     //     isCheckedA: false,
//     //     isCheckedB: false,
//     //     isCheckedC: false,
//     //     isCheckedD: false,
//     //     isCheckedSX: false,
//     //     isCheckedNoMail: false,
//     //   })
//     // }

//     const customFilters = couples.filter(
//       (c: CoupleWithSpouses) =>
//         c.city.toLowerCase().includes(search.toLowerCase()) ||
//         c.wife.firstName.toLowerCase().includes(search.toLowerCase()) ||
//         c.wife.lastName.toLowerCase().includes(search.toLowerCase()) ||
//         c.wife.email.toLowerCase().includes(search.toLowerCase()) ||
//         c.husband.firstName.toLowerCase().includes(search.toLowerCase()) ||
//         c.husband.lastName.toLowerCase().includes(search.toLowerCase()) ||
//         c.husband.email.toLowerCase().includes(search.toLowerCase())
//       //   &&
//       // (checkboxFilters.isCheckedA ? c.group === "A" : setCheckboxFilters())
//       // || checkboxFilters.isCheckedB
//       // ? c.group === "B"
//       // : false
//     )

//     return (
//       <Box style={{ margin: "5rem" }}>
//         <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
//           <h1>Alma</h1>
//           <p></p>

//           <Box
//             component="form"
//             noValidate
//             autoComplete="off"
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//             }}
//           >
//             <Box
//               sx={{
//                 display: "flex",
//                 flexDirection: "row",
//               }}
//             >
//               <TextField
//                 id="outlined-basic"
//                 variant="outlined"
//                 label="Szukaj..."
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 size="small"
//                 sx={{
//                   display: "flex",
//                   alignItems: "flex-start",
//                   mt: "1rem",
//                   height: "3rem",
//                 }}
//               />{" "}
//               <Box
//                 sx={{
//                   display: "flex",
//                   width: "100%",
//                   justifyContent: "flex-end",
//                 }}
//               >
//                 <FormControl
//                   style={{
//                     display: "flex",
//                     alignItems: "flex-end",
//                   }}
//                   component="fieldset"
//                 >
//                   <FormLabel component="legend"></FormLabel>
//                   <Button
//                     style={{
//                       paddingLeft: "0.2rem",
//                     }}
//                     size="small"
//                     variant="contained"
//                     component={Link}
//                     to="/create"
//                   >
//                     <AddIcon sx={{ margin: "0" }} /> Dodaj nowe małżeństwo
//                   </Button>{" "}
//                   <Button
//                     size="small"
//                     // disabled={
//                     //   checkboxFilters.isCheckedA ||
//                     //   checkboxFilters.isCheckedB ||
//                     //   checkboxFilters.isCheckedC ||
//                     //   checkboxFilters.isCheckedD ||
//                     //   checkboxFilters.isCheckedNoMail ||
//                     //   checkboxFilters.isCheckedSX
//                     //     ? false
//                     //     : true
//                     // }
//                     // onClick={handleClearClick}
//                     variant="outlined"
//                     startIcon={<ClearIcon />}
//                   >
//                     Wyczyść filtry
//                   </Button>
//                   <FormGroup aria-label="position" row>
//                     <FormControlLabel
//                       value="Bez maila"
//                       control={
//                         <Checkbox
//                           onChange={handleChange}
//                           id="isCheckedNoMail"
//                           // checked={checkboxFilters.isCheckedNoMail}
//                         />
//                       }
//                       label="Bez maila"
//                       labelPlacement="end"
//                     />
//                     <FormControlLabel
//                       value="A"
//                       control={
//                         <Checkbox
//                           onChange={handleChange}
//                           id="isCheckedA"
//                           // checked={checkboxFilters.isCheckedA}
//                         />
//                       }
//                       label="A"
//                       labelPlacement="end"
//                     />
//                     <FormControlLabel
//                       value="B"
//                       control={
//                         <Checkbox
//                           onChange={handleChange}
//                           id="isCheckedB"
//                           // checked={checkboxFilters.isCheckedB}
//                         />
//                       }
//                       label="B"
//                       labelPlacement="end"
//                     />
//                     <FormControlLabel
//                       value="C"
//                       control={
//                         <Checkbox
//                           onChange={handleChange}
//                           id="isCheckedC"
//                           // checked={checkboxFilters.isCheckedC}
//                         />
//                       }
//                       label="C"
//                       labelPlacement="end"
//                     />
//                     <FormControlLabel
//                       value="D"
//                       control={
//                         <Checkbox
//                           onChange={handleChange}
//                           id="isCheckedD"
//                           // checked={checkboxFilters.isCheckedD}
//                         />
//                       }
//                       label="D"
//                       labelPlacement="end"
//                     />
//                     <FormControlLabel
//                       value="S/X"
//                       control={
//                         <Checkbox
//                           onChange={handleChange}
//                           id="isCheckedSX"
//                           // checked={checkboxFilters.isCheckedSX}
//                         />
//                       }
//                       label="S/X"
//                       labelPlacement="end"
//                     />
//                   </FormGroup>
//                 </FormControl>
//               </Box>
//             </Box>

//             <DataTable couples={customFilters} />
//           </Box>
//         </div>
//       </Box>
//     )
//   }
// }
