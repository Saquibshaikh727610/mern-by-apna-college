let posts = [
    {
        username: "saquib shaikh",
        id: 123,
        department: "sy bsc cs",
        skills: "MERN DEVELOPER"
    },
    {
        username: "zabi shaikh",
        id: 123,
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
// let { id } = req.params
let id  = 123
    function findPostById(id) {
        for (let i = 0; i < posts.length - 1; i++) {
            if (id  === posts[i].id)
                return posts[i];
        }
        return "post nahi mila";
    }
    
    let post = findPostById(id)
    console.log(post);
    console.log(post.username);
    