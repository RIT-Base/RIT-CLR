# Welcome to RIT CLR

This is Eleventy SSG for RIT 'Learning Resources Dump'.

## Quickstart 

**Prerequisite:**
- node.js
- npm

Clone this repo:
```bash
git clone https://github.com/RIT-Base/RIT-CLR.git
```

Move directory to this file:
```bash
cd [project-directory]
```

Install dependencies:
```bash
npm install
```

Split 2 Terminal,
Run eleventy:
```bash
npx eleventy --serve
```

Run Sass:
```bash
npm run build:sass -- --watch
```

---

`_site` folder is generated site, deploy ready. Move `_site` later to safe space for deployment.

## Project Structure

```
project-root/
│
├── _includes/          	# Template Layouts (Components)
├── content/                # Content Folder
├── css/                    # CSS Folder
├── .gitignore
├── eleventy.config.js      # Config for eleventy (plugins etc)
├── package-log.json
├── pacakge.json
└── README.md
```

Focus on _includes (layout), and css for stylizing.
