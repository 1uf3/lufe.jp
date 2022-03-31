// @ts-ignore
import MarkdownIt from "markdown-it";
import markdownHtml from 'zenn-markdown-html';


export const render = (markdown: string): string => {
    const html = markdownHtml(markdown);
    return html;
};