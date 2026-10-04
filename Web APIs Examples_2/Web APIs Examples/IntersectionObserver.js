const target = document.getElementById("target");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            console.log("Element is visible");
        }
    })
},{
    root: null,
    rootMargin: "0px",
    threshold: 0.5 // 50% visible
});

observer.observe(target);