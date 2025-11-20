let fileName = document.querySelector("#upload")
console.log(fileName);
let form = document.querySelector("#form")
form.addEventListener("onsubmit",(e)=>{
    e.preventDefault()
    console.log("form sumbited");
console.log(e);
// console.log(e.baseURL);

})
// fileName.addEventListener("submit")