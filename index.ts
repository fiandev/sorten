import fsx from "fs-extra";
import fs from "fs";
import path from "path";
import { glob } from "fast-glob";
import { Command } from "commander";

const defaultRules: Record<string, string> = {
  "./multimedia/images/@": "./*.{jpg,png,webp,gif,jpeg}",
  "./multimedia/videos/@": "./*.{mp4,mov}",
  "./multimedia/audios/@": "./*.{mp3,m4a}",
  "./files/archives/@": "./*.{zip,rar,tr.gz,7z,tar,tar.gz}",
  "./files/codes/@": "./*.{xml,html,css,js,jsx,tsx,ts,sql,md,json}",
  "./files/documents/@": "./*.{pdf,xlxx,docx,docs}",
  "./files/applications/windows/@": "./*.{exe,msi}",
  "./files/applications/android/@": "./*.apk",
  "./files/applications/linux/debian/@": "./*.deb",
  "./files/applications/bootables/@": "./*.iso",
  "./files/transfers/@": "./*.torrent",
  "./others/@": "./*.{bak,txt}",
};

const program = new Command();

program
  .name("sorten")
  .description("Sort files into categorized directories based on extensions")
  .version("1.0.0")
  .option("-c, --config <path>", "path to config.json", "./config.json");

program.parse();
const options = program.opts();
const configPath = options.config;

let rules: Record<string, string>;

try {
  const configContent = fs.readFileSync(configPath, "utf8");
  rules = JSON.parse(configContent);
} catch {
  rules = { ...defaultRules };
}

(async () => {
  for (let key in rules) {
    let files = await glob([rules[key]]);

    if (files.length < 1) continue;

    for (let file of files) {
      if (!fs.lstatSync(file).isFile()) continue;

      let { base, ext } = path.parse(file);
      let extension = [".gz"].includes(ext)
        ? base.slice(base.search(/\./) + 1)
        : ext.slice(1);
      let dest = key.replace(/\@/, extension) + `/${base}`;

      fsx.move(file, dest, (err: any) => {
        if (err) return console.log(`[${base}]: ${err.message}`);
        console.log(`${base} moved successfully`);
      });
    }
  }
})();
