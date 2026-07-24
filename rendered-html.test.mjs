import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const pageUrl = new URL("../app/page.tsx", import.meta.url);
const layoutUrl = new URL("../app/layout.tsx", import.meta.url);
const cssUrl = new URL("../app/globals.css", import.meta.url);

test("contains the finished Nook experience", async () => {
  const [page, layout, css] = await Promise.all([
    readFile(pageUrl, "utf8"),
    readFile(layoutUrl, "utf8"),
    readFile(cssUrl, "utf8"),
  ]);

  assert.match(page, /Nook Auctions is coming soon/);
  assert.match(page, /Future favorites/);
  assert.match(page, /Good to know/);
  assert.match(page, /You’re on the list/);
  assert.match(layout, /Nook Auctions — Furniture finds, rehomed/);
  assert.match(css, /--coral:\s*#dc684f/);

  assert.doesNotMatch(page, /SkeletonPreview|codex-preview/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview/);
});
