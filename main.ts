// One Line, Zero Use: The Useless Superpower Sprint
// main.ts — writes our single line from entry.txt to /output/entry.txt.
// The entry file lives next to this script; resolve it relative to the
// script itself so the program works no matter which directory it is
// launched from.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const line = readFileSync(join(here, "entry.txt"), "utf8");

// The gate wants 1–200 characters of real text; refuse to write junk.
if (line.trim().length < 1 || line.length > 200) {
  throw new Error(`entry.txt must be 1-200 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
