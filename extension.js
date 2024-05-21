import ruby from "markdown-it-ruby";

export const activate = () => ({
  extendMarkdownIt: (md) => md.use(ruby),
});
