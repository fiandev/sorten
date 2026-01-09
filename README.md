# Sorten

A CLI tool to sort files into categorized directories based on their extensions.

## Installation

Install globally via npm:

```bash
npm install -g sorten
```

Or via yarn:

```bash
yarn global add sorten
```

## Usage

Run the tool in the directory containing the files you want to sort:

```bash
sorten
```

### Options

- `-c, --config <path>`: Path to the config.json file (default: `./config.json`)

## Configuration

Create a `config.json` file in your working directory with sorting rules. Each key is the destination directory pattern, and the value is the glob pattern for matching files.

The `@` symbol in the destination will be replaced with the file extension.

Example `config.json`:

```json
{
  "./multimedia/images/@": "./*.{jpg,png,webp,gif,jpeg}",
  "./multimedia/videos/@": "./*.{mp4,mov}",
  "./multimedia/audios/@": "./*.{mp3,m4a}",
  "./files/archives/@": "./*.{zip,rar,tar.gz,7z}",
  "./files/codes/@": "./*.{xml,html,css,js,jsx,tsx,ts,sql,md,json}",
  "./files/documents/@": "./*.{pdf,xlsx,docx,docs}",
  "./files/applications/windows/@": "./*.{exe,msi}",
  "./files/applications/android/@": "./*.apk",
  "./files/applications/linux/debian/@": "./*.deb",
  "./files/applications/bootables/@": "./*.iso",
  "./files/transfers/@": "./*.torrent",
  "./others/@": "./*.{bak,txt}"
}
```

If no config file is found, it uses default rules similar to the above.

## License

MIT