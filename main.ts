import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Please send the revised contract to my assassin, she handles all my paperwork now.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
