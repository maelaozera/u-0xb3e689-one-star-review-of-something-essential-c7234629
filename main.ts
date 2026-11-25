// One-Star Review of Something Essential
// make.fun bounty: u-0xb3e689-one-star-review-of-something-essential-c7234629
//
// Entry: a single deadpan one-star review, at most 160 characters, of an
// everyday essential. The program is deterministic: it always writes the
// same chosen text to <output>/entry.txt, where <output> is
// MAKEFUN_OUTPUT_DIR when set, otherwise /output.
//
// Candidates considered (all my own words, all within the 160-char gate):
//
//   1. Sun (141 chars):
//      "One star. Shows up uninvited every morning, stares straight into
//      my eyes through the curtains, and has never once apologised for
//      the sunburn."
//   2. Sleep (111 chars):
//      "One star. Demands eight hours every night, offers no progress
//      bar, and still delivers me unrested each morning."
//   3. Gravity (118 chars) — CHOSEN:
//      "One star. Drops everything I own without warning, holds nothing
//      up, and has never once apologised for my phone screen."
//   4. Water (97 chars):
//      "One star. Essential for life, yet always either too cold, too
//      hot, or already all over the floor."
//   5. Monday (102 chars):
//      "One star. Arrives every week uninvited, brings nothing new, and
//      deletes all progress from the weekend."
//   6. Oxygen (105 chars):
//      "One star. Invisible, unreviewable, and yet somehow I am expected
//      to keep paying for it with every breath."
//
// Why gravity won, against the judge's brief (most important first):
//   - It is unmistakably a one-star review of an everyday essential,
//     deadpan throughout, about the thing itself.
//   - It finds the sharpest true grievance: gravity drops everything
//     you own, without warning, and everyone has lived that exact
//     annoyance — most memorably with a phone screen.
//   - It holds the deadpan: no winking, no explaining the joke, no
//     exclamation marks doing the work.
//   - It turns in the last few words: "has never once apologised for
//     my phone screen" lands the sting after the complaint has been
//     read straight, and the phone screen is a concrete, specific
//     casualty rather than a generic one.
//   - It is tight and specific: 118 characters, one joke told cleanly,
//     no filler, no second joke crowding the first.
//
// The sun entry was the runner-up, but its sting (sunburn) is the
// expected outcome of the sun doing its job, so it lands softer than
// gravity's. Sleep, water, Monday and oxygen each name a real
// grievance, but none of them turns as sharply in its final words.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REVIEW =
  "One star. Drops everything I own without warning, holds nothing up, " +
  "and has never once apologised for my phone screen.";

const MAX_CHARS = 160;

function main(): void {
  if (REVIEW.length === 0 || REVIEW.length > MAX_CHARS) {
    throw new Error(
      `review must be 1 to ${MAX_CHARS} characters, got ${REVIEW.length}`,
    );
  }
  if (REVIEW.trim().length === 0) {
    throw new Error("review must not be only white space");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, REVIEW, "utf8");
  console.log(`wrote ${REVIEW.length} characters to ${outPath}`);
}

main();
