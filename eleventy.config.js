const sass = require('sass');
const markdownIt = require("markdown-it");
const markdownItAnchor = require('markdown-it-anchor');
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const pluginTOC = require('@uncenter/eleventy-plugin-toc');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(pluginTOC);
    eleventyConfig.addWatchTarget("./css/");
    eleventyConfig.setLibrary('md', markdownIt().use(markdownItAnchor));
    eleventyConfig.addPassthroughCopy({ "./css/compiled.css": "/css/main.css" });
    eleventyConfig.addPassthroughCopy("js");

    let options = {
		html: true,
		breaks: true,
		linkify: true,
	};

	eleventyConfig.setLibrary("md", markdownIt(options).use(markdownItAnchor));

    eleventyConfig.addCollection("categoryList", function(collectionApi) {
        const categorySet = new Set();
        collectionApi.getAll().forEach(item => {
            if ("category" in item.data) {
                let categories = item.data.category;
                categorySet.add(categories);
            }
        });
        return [...categorySet].sort();
    });

    // Set the input and output directories
    return {
        markdownTemplateEngine: "njk",
        
        dir: {
            input: "content",
            output: "_site",
            includes: "../_includes"
        }
    };
};
