import { cpSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const source = join(root, "node_modules", "tarteaucitronjs");
const target = join(root, "public", "tarteaucitron");

const copies = [
  ["tarteaucitron.min.js", "tarteaucitron.min.js"],
  ["tarteaucitron.services.min.js", "tarteaucitron.services.min.js"],
  ["advertising.min.js", "advertising.min.js"],
  ["css/tarteaucitron.min.css", "css/tarteaucitron.min.css"],
  ["lang/tarteaucitron.fr.min.js", "lang/tarteaucitron.fr.min.js"],
];

if (!existsSync(source)) {
  console.warn("tarteaucitronjs introuvable, copie ignorée.");
  process.exit(0);
}

mkdirSync(join(target, "css"), { recursive: true });
mkdirSync(join(target, "lang"), { recursive: true });

for (const [from, to] of copies) {
  cpSync(join(source, from), join(target, to));
}

console.log("Fichiers Tarteaucitron copiés dans public/tarteaucitron");
