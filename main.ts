// gta6-meme-x-01: the entry is the X post itself, so this program only hands
// the post's address to the grader. It copies POST.json from the repository
// root to /output/POST.json: nothing else is read, nothing else is written,
// no network and no clock are used, so two runs write the same bytes.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// It prints nothing on success.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'POST.json');
const target = join(OUTPUT_DIR, 'POST.json');

try {
  // Read first so a malformed POST.json fails loudly instead of being copied.
  const parsed: unknown = JSON.parse(readFileSync(source, 'utf8'));
  const record = parsed as { url?: unknown };
  if (
    typeof parsed !== 'object' ||
    parsed === null ||
    Array.isArray(parsed) ||
    typeof record.url !== 'string' ||
    record.url.length === 0
  ) {
    throw new Error('POST.json must be a JSON object with a string "url" field');
  }
  mkdirSync(OUTPUT_DIR, { recursive: true });
  copyFileSync(source, target);
  // Verify the copy landed byte for byte; a partial write must fail loudly.
  if (!readFileSync(target).equals(readFileSync(source))) {
    throw new Error('POST.json copy does not match the source byte for byte');
  }
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
