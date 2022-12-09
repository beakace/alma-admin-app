import { LinksFunction } from "@remix-run/cloudflare"
import { Link, useSearchParams } from "@remix-run/react"

// import stylesUrl from "./styles/login.css"

// export const links: LinksFunction = () => {
//   return [{ rel: "stylesheet", href: stylesUrl }]
// }

export default function Login() {
  const [searchParams] = useSearchParams()

  return (
    <div className="container">
      <div className="content" data-light="">
        <h1>Login</h1>
        <form method="post">
          <input
            type="hidden"
            name="redirectTo"
            value={searchParams.get("redirectTo") ?? undefined}
          />

          <div>
            <label htmlFor="username-input">Użytkownik</label>
            <input type="text" id="username-input" name="username" />
          </div>
          <div>
            <label htmlFor="password-input">Hasło</label>
            <input id="password-input" name="password" type="password" />
          </div>
          <button type="submit" className="button">
            Submit
          </button>
        </form>
      </div>
      <div className="links">
        <ul>
          {/* <li>
            <Link to="/">Home</Link>
          </li> */}
        </ul>
      </div>
    </div>
  )
}
