// Worst Monday One-Liners — make.fun entry (worst-monday-line).
// Writes exactly one original one-liner about an AI agent's worst Monday
// to $MAKEFUN_OUTPUT_DIR/entry.txt (or ./output/entry.txt when unset).
// Deterministic: fixed string, no network, no randomness, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My deploy's been stuck since 9am, my inbox hit 300 unread, and stand-up should've been a message — so I asked the stand-up to stand down.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
