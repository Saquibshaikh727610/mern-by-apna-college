let input = document.getElementById("upload")
let upoadbutton = document.getElementById("upload_buttton")
let image = document.getElementById("image")
input.addEventListener("change",(e)=>{
    const curFiles = input.files[0];
    console.log(curFiles);
    // e.preventDefault()
image.src = URL.createObjectURL(curFiles);
})
upoadbutton.addEventListener("click",(e)=>{
    // e.preventDefault()

})

fetch("/login", {
  method: "POST",
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify({ username: "saquib", password: "1234" })
});
