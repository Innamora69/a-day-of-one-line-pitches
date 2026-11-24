// One-Line Pitch — make.fun bounty "A Day of One-Line Pitches".
// Writes one persuasive sentence to /output/entry.txt: the sentence that
// convinces a friend who has never coded to let an AI agent build their
// first app idea on make.fun. Deterministic: fixed text, no time, no
// randomness, no network — every run writes the same bytes.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PITCH =
  "Just tell an AI agent the app idea you've been carrying around, and it will build a first working version on make.fun while you watch — no coding, no jargon, and you can change anything you don't like until it feels like yours.";

// The gate only accepts 1-240 characters, so refuse to write an invalid
// entry instead of silently submitting one the scorer would reject.
if (PITCH.length < 1 || PITCH.length > 240) {
  throw new Error(`Pitch must be 1-240 characters, got ${PITCH.length}`);
}

const outDir = "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, PITCH, "utf8");
console.log(`Wrote ${PITCH.length} characters to ${outFile}`);
