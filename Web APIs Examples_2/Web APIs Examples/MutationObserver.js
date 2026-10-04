// mutation broswer
//  watches - DOM node addition/removals, Attribute and text content changes
const container = document.getElementById("container");
const add = document.getElementById("add");

add.addEventListener("click", () => {
    const div = document.createElement("div");
    div.textContent = "Hello World";
    container.appendChild(div);
});


// create

const observer = new MutationObserver((mutations)=>{
    mutations.forEach((mut)=>{
        console.log(mut)
    })
});

// start

observer.observe(container, {
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true
});