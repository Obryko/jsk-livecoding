import { getPosts } from "./service";


const section = document.querySelector('#articles');

const crateHeader = (title) => {
    const header = document.createElement('header');
    const h3 = document.createElement('h3');
    header.appendChild(h3);

    const text = document.createTextNode(title);
    h3.appendChild(text);

    return header;
}
const crateP = (content) => {
    const p = document.createElement('p');
    p.innerHTML = content;

    return p;
}

const createArticle = (post) => {
    const article = document.createElement('article')
    article.appendChild(crateHeader(post.title));
    article.appendChild(crateP(post.content));
    return article;
}

export default async () => {
    const posts = await getPosts();
    posts
    .map(post => createArticle(post))
    .forEach(article => {
        section.appendChild(article);
    });
}