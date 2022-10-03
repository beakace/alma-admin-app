import { LoaderFunction } from "@remix-run/cloudflare"
import { useLoaderData } from "@remix-run/react"
import { useState } from "react"
import DataTable from "~/components/datatable"

// export default function SearchBar() {
//   const couples = useLoaderData()
//   const [search, setSearch] = useState<string>("")

//   return (
//     <>
//       <input value={search} onChange={(e) => setSearch(e.target.value)} />
//       <DataTable
//       // couples={couples.filter((c: any) => c.city.includes(search))}
//       />
//     </>
//   )
// }

//   const data = useLoaderData()

//   return (

//     <form>
//       <input type="text" name="query" placeholder="Szukaj" />
//     </form>
//   )
// }
// export let loader: LoaderFunction = ({ request }) => {
//     const url = new URL(request.url)
//     const search = new URLSearchParams(url.search);
//     return data(search.get("query"));
//   };
