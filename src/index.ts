import { fileURLToPath } from "node:url";
import { basename, dirname, join, resolve } from "node:path";

const __filename = basename(fileURLToPath(import.meta.url));
const __dirname = dirname(fileURLToPath(import.meta.url))

const greeting = (msg: string) => {
  return new Promise((resolve) => {
    return resolve(msg)
  })
}

const msg = await greeting('Node w/ Typescript, ESM & Top-level await. \nUse: npx tsx <file> to execute a node script!')

process.stdout.write(`Current File: ${__filename} \n`)
process.stdout.write(`Current Dir: ${__dirname}`)
process.stdout.write(msg)

