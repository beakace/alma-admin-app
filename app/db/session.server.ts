import type { PrismaClient } from "@prisma/client"
import { createCookieSessionStorage, redirect } from "@remix-run/node"
import { compare } from "./hash.server"

const sessionSecret = process.env.SESSION_SECRET ?? "SECRET_123!secret"

export type SessionUser = {
  id: string
  username: string
  organizationUnitId: number
}

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: "RJ_session",
      secure: true,
      secrets: [sessionSecret],
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
      httpOnly: true,
    },
  })

export async function login(
  username: string,
  password: string,
  dbClient: PrismaClient,
  redirectTo = "/"
) {
  const user = await dbClient.user.findUnique({
    where: { username },
  })
  if (!user) {
    throw new Error("User not found")
  }
  if (!user.passwordHash) {
    throw new Error("User has no password set")
  }

  const passwordMatch = await compare(password, user.passwordHash)
  if (!passwordMatch) {
    throw new Error("Incorrect password")
  }

  return createUserSession(
    {
      id: user.id,
      username: user.username,
      organizationUnitId: user.organizationUnitId,
    },
    redirectTo
  )
}

export function getUserSession(request: Request) {
  return getSession(request.headers.get("Cookie"))
}
export async function requireUser(request: Request): Promise<SessionUser> {
  const session = await getUserSession(request)

  const user = session.get("user")
  if (!user) throw redirect("/login")

  return user
}
export async function logout(request: Request) {
  const session = await getSession(request.headers.get("Cookie"))
  return redirect("/login", {
    headers: { "Set-Cookie": await destroySession(session) },
  })
}

export async function createUserSession(
  user: SessionUser,
  redirectTo: string,
  ...setCookies: string[]
) {
  const session = await getSession()
  session.set("user", user)

  const headers = new Headers()
  headers.append("Set-Cookie", await commitSession(session))
  for (const cookie of setCookies) {
    headers.append("Set-Cookie", cookie)
  }

  return redirect(redirectTo, {
    headers,
  })
}
