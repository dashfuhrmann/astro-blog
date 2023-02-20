import ArticlePreview from "../js/ArticlePreview";

console.log("log");

window.CMS.registerPreviewTemplate("posts", ArticlePreview);

export function test() {
  console.log(test);
}
