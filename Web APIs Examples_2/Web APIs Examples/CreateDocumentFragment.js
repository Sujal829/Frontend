const fragment = document.createDocumentFragment();

for (let i = 0; i < 10000; i++) {
    const li= document.createElement('li');
    li.textContent = `Item ${i}`;
    fragment.appendChild(li);
}
document.getElementById('list').appendChild(fragment);

//When to use
// I want to render a large list 
// Append many elements to the DOM
// improves performace- heavy DOM updates
