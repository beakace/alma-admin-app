import { LoaderArgs, json } from "@remix-run/node"
import { Outlet, useLoaderData, useNavigation } from "@remix-run/react"
import { LoadingScreen } from "~/components/loadingscreen"
import Navbar from "~/components/navbar"
import { requireUser } from "~/db/session.server"

export const loader = async ({ request }: LoaderArgs) => {
  const { username } = await requireUser(request)
  const isAuthenticated = Boolean(username)
  return json({ isAuthenticated })
}

export default function Index() {
  const loaderData = useLoaderData<typeof loader>()
  const navigation = useNavigation()
  const isAuthenticated = Boolean(loaderData)
  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} />
      {navigation.state !== "idle" ? <LoadingScreen /> : null}
      <Outlet />
    </>
  )
}
