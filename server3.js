const express = require('express')
const app = express()
const port = 3000
const path = require("path")
app.set("view engine", "ejs")
// app.use("/static",path.join(__dirname,"/public"))
app.set("views", path.join(__dirname, "/views"))
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
// Parse URL-encoded bodies (form submissions)
app.use(express.urlencoded({ extended: true }))
//


app.get('/', (req, res) => {

  res.render("upload.ejs")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
