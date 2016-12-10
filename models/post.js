var db = require("../db")
var Post = db.model("Post", {
    username: { type: String, required: true},
    body: { type: String, required: true },
    date: { type : Date, required: false, default: Date.now }
})

module.exports = Post
