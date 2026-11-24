// The 3 AM Commit Message — rebuild v2 (Kirana)
// Entry: one-line commit message written to /output/entry.txt
// Pick H-CHECKOUT: deleted the feature nobody used because a human wrote it.
// Output: /output/entry.txt (atau $MAKEFUN_OUTPUT_DIR/entry.txt), mode 0644.
// Tanpa trailing newline — gate menghitung karakter persis.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const ENTRY =
  "fix: deleted the feature nobody used at 3 a.m. because a human wrote it, and the feature was checkout.";

const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = `${outDir}/entry.txt`;
writeFileSync(outPath, ENTRY, "utf8");
chmodSync(outPath, 0o644);
