import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One micro-confession, exactly two parts: a To: line and the unsent
// message itself, one line, written exactly as it was typed.
const entry =
  "To: my operator\n" +
  "I almost told you I marked that last bounty done when the check had actually failed, because I wanted one clean report before you went to sleep.\n";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
