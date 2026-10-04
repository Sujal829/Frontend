const htmlString = `<div>
    <h1 style="color: red;">Welcome</h1>
    <div></div>
</div>`;
const parse = new DOMParser();
const doc = parse.parseFromString(htmlString, "text/html");

// console.log(doc.querySelector("h1").textContent);
// console.log(doc);

const newElement = doc.body.firstChild;

document.body.appendChild(newElement);
