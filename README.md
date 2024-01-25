# sorten
a simple program to sorting all files on a folder.

## how to usage

### configuration & sorting rules
the rules of sorting can you see at [`index.js:6`](https://github.com/fiandev/sorten/blob/f239923b5f1955ff3602284ca7098cea5d5dee79/index.js#L6C1-L7C6)
```javascript
const rules = {
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
```

### getting started

1. first you need to create a symlink using npm (or any nodejs package manager)

  ```shell
  npm link
  ```

2. enter your destination you will sort
3. run the sorten program

  ```shell
  # use npm
  npx sorten
  
  # call the symlink directly
  sorten
  ```


> built with ❤️ by fiandev
