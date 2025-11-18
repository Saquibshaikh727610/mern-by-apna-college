const express = require('express')
const app = express()
const port = 3000
const path = require("path")
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.set("view engine","ejs")
app.set("views",path.join(__dirname ,"/views"))
// Parse URL-encoded bodies (form submissions)
app.use(express.urlencoded({ extended: true }))



let posts = [
    {
        username:"saquib shaikh",
        id:"123",
        department:"sy bsc cs",
        skills:"MERN DEVELOPER"
    },
    {
        username:"zabi shaikh",
        id:"124",
        department:"sy bsc cs",
        skills:"GRAPHICS DESIGNER"
    },
    {
        username:"shenaz shaikh",
        id:"125",
        department:"sy bsc cs",
        skills:"MEHNDI ARTIST"
    },
]


app.get('/', (req, res) => {
  res.render("home.ejs",{
    posts : posts
  })
})

app.get('/new', (req, res) => {
  res.render("new.ejs")// render new.ejs for making new post display form 
})
app.post('/new', (req, res) => {
  let {username,skills,department,id} = req.body
let newPost = {
  username:username,
  skills:skills,
  id:id,
  department:department,
}
posts.push(newPost)
  // console.log(req.body,newPost);
res.redirect("/");
});

app.get("/post/:id",(req,res)=>{
let {id} = req.params
  function findPostById(id) {
    for (let i = 0; i < posts.length; i++) {
      if (posts[i].id === id) 
        return posts[i];
    }
    return undefined;
  }
  let post = findPostById(posts)
  res.render("post.ejs",{post})
})
// let post = findId(posts)
//this render the post.ejs which selected post in detaild and a button for edit 

app.get("/post/:id/edit",(req,res)=>{

let findId = (posts) => {
  let urlid = req.params.id
  for (let i = 0; i < posts.length; i++) {   
    if (posts[i].id === urlid) {
      return posts[i]
    }
  }
}
let post = findId(posts)
res.render("edit.ejs",{post})
})


app.patch("/post/:id",(req,res)=>{
  let urlid = req.params
  // let {username ,department,skills} = req.body
let findId = (posts) => {
  // let urlid = req.params.id
  for (let i = 0; i < posts.length; i++) {   
    if (posts[i].id == urlid) {
      return posts[i]
    }
  }
}
let post = findId(posts)
// post.username = username
// post.skills = skills
// post.department = department
// post.id = id
console.log(post);

// res.render("edit.ejs",{post})
res.send("edited")
})



// app.delete("/post/:id",(req,res)=>{
// let {id} = req.params
// // posts = posts.filter(p => p.id !== id)
// res.redirect("/")
// })
// Handle new post submissions
// app.post('/posts', (req, res) => {
//   const { username, skills } = req.body
//   // Basic validation: require a username
//   if (!username || username.trim() === '') {
//     return res.redirect('/new')
//   }
//   const newPost = {
//     username: username.trim(),
//     id: Date.now().toString(),
//     class: req.body.class || 'unspecified',
//     skills: skills ? skills.trim() : ''
//   }
//   posts.push(newPost)
//   res.redirect('/')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



// testing experiment 
// 
// let findId = (posts) => {
//   let urlid = req.params
//   for (let i = 0; i < array.length; i++) {   
//     if (posts[i] == urlid) {
//       return posts[i]
//     }
//   }
// }