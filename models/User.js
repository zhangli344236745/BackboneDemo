/**
 * Created by df on 2014/9/2.
 */
var mongoose=require("mongoose");
var Schema=mongoose.Schema;

var UserSchema=new Schema({
    name:{type:String,default:""},
    age:{type:Number,default:0}
});

mongoose.model("User",UserSchema);