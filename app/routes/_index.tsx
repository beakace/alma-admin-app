import type { ActionArgs, LoaderArgs } from "@remix-run/node"
import { redirect } from "@remix-run/node"
import { logout, requireUser } from "~/db/session.server"

export const loader = async ({ request }: LoaderArgs) => {
  await requireUser(request)
  return redirect("/couples")
}

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData()
  const logoutElementName = formData.get("sign-out")?.toString()

  if (logoutElementName === "sign-out") {
    return await logout(request)
  }

  return null
}
