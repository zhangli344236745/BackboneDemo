/**
 * Created by df on 2014/9/2.
 */
var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var ObjectId = Schema.ObjectId;

var CommentSchema=new Schema({
    title:{type:String,default:""},
    content:{type:String,default:""},
    author:{type:ObjectId}
});

mongoose.model("Comment",CommentSchema);