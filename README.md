# Welcome to RIT CLR

This is Eleventy SSG for RIT 'Learning Resources Dump'.

## Quickstart 

**Prerequisite:**
- node.js
- npm

Clone this repo:
`git clone site url`

Move directory to this file:
`cd CLR`

Install dependencies:
`npm install`

Split 2 Terminal,
Run eleventy:
`npx eleventy --serve`

Run Sass:
`npm run build:sass -- --watch`

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