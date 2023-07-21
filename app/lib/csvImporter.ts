import { decode } from "iconv-lite"
import { detect } from "jschardet"
import { z } from "zod"

export function zodEnumFromObjKeys<K extends string>(
  obj: Record<K, any>
): z.ZodEnum<[K, ...K[]]> {
  const [firstKey, ...otherKeys] = Object.keys(obj) as K[]
  return z.enum([firstKey, ...otherKeys])
}

export function extractFullYearFromString(dateStr: string): number {
  const dateObj = new Date(dateStr)

  if (!isNaN(dateObj.getTime())) {
    return dateObj.getFullYear()
  }

  return 0
}

export function removeTextInParentheses(input: string | null): string | null {
  if (!input) return null
  const regex = /\([^)]+\)|\s{2,}/g

  const cleanedText = input.replace(regex, " ")

  return cleanedText.trim()
}

export async function decodeFile(blob: Blob) {
  const arrayBuffer = await blob.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)
  const encoding = detect(buffer)

  if (encoding.encoding === "windows-1252") {
    return decode(buffer, "win1250")
  }
  return await blob.text()
}
