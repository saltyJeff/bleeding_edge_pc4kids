# PCs4KIDs website (raw)
## Building
1. Download NodeJS and NPM
2. Download gulp with `npm i -g gulp`
3. Run the gulpfile
## File Structure
* `src/shared/**` are shared between every page (navigation components)
* `src/*` directories are the names of each webpage
* `public/**` is the finished product

All directories are flattened and dumped into `public`
1. If the file is JS, it is copied into `public/js`
2. If the file is CSS, it is copied into `public/css`
3. If the filei s HTML, it is copied into `public`
4. All other resources (imgs mostly) must be manually copied into `public`

All links should be made relative to their position in `public`