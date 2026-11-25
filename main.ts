// The Battery's Last Text to Its Charger — entry program.
//
// Writes one line, the phone battery's final text message to the charger
// it waited for all day, to $MAKEFUN_OUTPUT_DIR/entry.txt (or
// ./output/entry.txt when run locally).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

function buildText(): string {
  const setup = "I waited all day at 2% while you charged the toothbrush.";
  const sting = "The toothbrush. Tell the Wi-Fi I loved it more than you.";
  const signoff = "Goodbye.";
  return [setup, sting, signoff].join(" ");
}

const LINE = buildText();

// The gate takes 1–200 characters; refuse to write anything outside it.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
