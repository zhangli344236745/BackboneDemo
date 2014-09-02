/**
 * Created by df on 2014/9/2.
 */
var mongoose=require("mongoose");
var config=require("../config/config.js");

console.log(config);
mongoose.connect(config.db);

require("./User.js");
require("./Comment.js");

exports.User=mongoose.model("User");
exports.Comment=mongoose.model("Comment");

