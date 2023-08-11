module.exports = {
  activate: () => ({
    extendMarkdownIt(md) {
      return md.use(require("markdown-it-ruby"));
    },
  }),
};
