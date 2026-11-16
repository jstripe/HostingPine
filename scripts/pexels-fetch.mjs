// Usage: node scripts/pexels-fetch.mjs   (downloads the picks below to media-source/<section>/<slug>.jpg + sidecar json)
import { mkdirSync, writeFileSync, existsSync } from "node:fs";
const key = process.env.PEXELS_API_KEY;
if (!key) { console.error("PEXELS_API_KEY not set"); process.exit(1); }
const picks = [
  ["home", "hero-servers", 17323801], ["home", "aud-business", 7857531], ["home", "aud-shop", 17485353], ["home", "aud-dev", 574069],
  ["about", "about-desk", 10375901], ["contact", "contact-desk", 7658191], ["home", "setup-laptop", 16675632],
];
for (const [section, slug, id] of picks) {
  const dir = `media-source/${section}`; mkdirSync(dir, { recursive: true });
  const file = `${dir}/${slug}.jpg`;
  if (existsSync(file)) continue;
  const meta = await (await fetch(`https://api.pexels.com/v1/photos/${id}`, { headers: { Authorization: key } })).json();
  const img = await fetch(meta.src.original);
  writeFileSync(file, Buffer.from(await img.arrayBuffer()));
  writeFileSync(`${dir}/${slug}.json`, JSON.stringify({ slug, pexelsId: id, url: meta.url, photographer: meta.photographer, photographerUrl: meta.photographer_url, alt: meta.alt, width: meta.width, height: meta.height, license: "Pexels License (free to use, attribution not required)" }, null, 2));
  console.log("ok", slug);
}
