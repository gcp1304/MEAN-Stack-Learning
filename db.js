var mongoose = require("mongoose")

mongoose.Promise = global.Promise // This is to get rid of DeprecationWarning
mongoose.connect("mongodb://localhost/social", function() {
    console.log("mongodb connected")
})
module.exports = mongoose
