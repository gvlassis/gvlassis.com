module.exports = function(eleventyConfig) {
    // Passthrough File Copy entries are relative to the root of your project and not your Eleventy input directory.
    eleventyConfig.addPassthroughCopy("src/styles.css")
    eleventyConfig.addPassthroughCopy("res/")
    };