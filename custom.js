//cat
const sad_cat = document.querySelector(".sad_cat");
const happy_cat = document.querySelector(".happy_cat");
let opa = 0;

sad_cat.addEventListener("click", (e)=> {
    console.log("칫")
    happy_cat.style.opacity = 0;
    opa = 0;
});

happy_cat.addEventListener("mouseenter", ()=>{
    opa += 0.03;
    happy_cat.style.opacity = opa;
})

//num
let num =0;
const btnpls = document.querySelector(".btnpls")
const btnminus = document.querySelector(".btnminus")

btnpls.addEventListener("click", (e)=> {
    e.preventDefault(); 
    console.log(++num);
})

btnminus.addEventListener("click", (e)=> {
    e.preventDefault(); 
    console.log(--num);
})

  