import { pbkdf2, randomBytes } from "crypto"

const iterations = 1000
const keyLength = 64

export async function hash(
  plaintext: string,
  saltOrRounds: string | number
): Promise<string> {
  return new Promise((resolve, reject) => {
    const salt =
      typeof saltOrRounds === "number" ? generateSaltSync() : saltOrRounds

    pbkdf2(
      plaintext,
      salt,
      iterations,
      keyLength,
      "sha512",
      (error, derivedKey) => {
        if (error) {
          reject(error)
        }
        const derivedHash = derivedKey.toString("hex")
        const hash = `pbkdf2$${salt}$${derivedHash}`
        resolve(hash)
      }
    )
  })
}

export async function compare(
  plaintext: string,
  hashedValue: string
): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const [algorithm, salt, derivedHash] = hashedValue.split("$")
    if (algorithm !== "pbkdf2") {
      reject(new Error("Invalid hash algorithm"))
    }

    pbkdf2(
      plaintext,
      salt,
      iterations,
      keyLength,
      "sha512",
      (error, derivedKey) => {
        if (error) {
          reject(error)
        }
        const derivedHashToCompare = derivedKey.toString("hex")

        resolve(derivedHash === derivedHashToCompare)
      }
    )
  })
}

function generateSaltSync(): string {
  const salt = randomBytes(16).toString("hex")
  return salt
}
