

//Iterating over a DOM collection

//Iterating over DOM collections like NodeList: the following example adds a read class to paragraphs that are direct descendants of an article:

// Note: This will only work in platforms that have
// implemented NodeList.prototype[Symbol.iterator]

let articleParagraphs = document.querySelectorAll('article > p');

for (let paragraph of articleParagraphs) {
  paragraph.classList.add('read');
}