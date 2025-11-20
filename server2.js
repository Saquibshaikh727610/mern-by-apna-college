const express = require('express')
const app = express()
const port = 3000
const path = require("path")
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))
// Parse URL-encoded bodies (form submissions)
app.use(express.urlencoded({ extended: true }))



let posts = [
    {
        username: "saquib shaikh",
        id: 123,
        department: "sy bsc cs",
        skills: "MERN DEVELOPER"
    },
    {
        username: "zabi shaikh",
        id: 124,
        department: "sy bsc cs",
        skills: "GRAPHICS DESIGNER"
    },
    {
        username: "shenaz shaikh",
        id: 125,
        department: "sy bsc cs",
        skills: "MEHNDI ARTIST"
    },
]

// get request on home page at "/" route 
app.get('/', (req, res) => {
    res.render("home.ejs", {
        posts: posts
    })
})

// get request handling at "/new" for creating a new post it displays a form 
app.get('/new', (req, res) => {
    res.render("new.ejs")// render new.ejs for making new post display form 
})

// handling post requst at "/new" jo data form send (new.ejs) vala karega using post method  
app.post('/new', (req, res) => {
    let { username, skills, department, id } = req.body
    let newPost = {
        username: username,
        skills: skills,
        id: id,
        department: department,
    }
    posts.push(newPost)

    res.redirect("/");
});
// wanting a specific post data  using id using get route it is a show route
app.get("/post/:id", (req, res) => {
    let id = parseInt(req.params.id); 
    
  
    function findPostById(id) {
        for (let i = 0; i < posts.length; i++) {
            if (id  === posts[i].id)
                return posts[i];
        }
        return "post nahi mila";
    }
    
    let post = findPostById(id)
    console.log(id);
    console.log(post);
    
    res.render("post.ejs", { post : post})
})


app.post("/login",(req,res)=>{
    let {username} = req.body
    console.log(username);
    res.send("data received")
    
})

app.get("/post/:id/edit", (req, res) => {
 let id = parseInt(req.params.id); 
    
  
    function findPostById(id) {
        for (let i = 0; i < posts.length; i++) {
            if (id  === posts[i].id)
                return posts[i];
        }
        return "post nahi mila";
    }
    
    let post = findPostById(id)
    console.log(id);
    console.log(post);
    res.render("edit.ejs", { post })
})


app.patch("/post/:id/edit", (req, res) => {
    let id = parseInt(req.params.id); 
    let {department,skills,} = req.body
  
    function findPostById(id) {
        for (let i = 0; i < posts.length; i++) {
            if (id  === posts[i].id)
                return posts[i];
        }
        return "post nahi mila";
    }
    
    let post = findPostById(id)
   
    post.skills = skills
    post.department = department
    console.log(id);
    console.log(post);
    res.redirect("/")
})

app.delete("/post/:id",(req,res)=>{
    let count = 0
    let {id} = parseInt(req.params.id)
let deletePost = (id)=>{
for (let i = 0; i < posts.length; i++) {
    if (posts[i].id == id) {
        count++
        return count
    }
    return "nahi mila"
}
}
let returnedCount = deletePost(id)
posts.splice(returnedCount,1)
console.log(posts);
res.redirect("/")
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


