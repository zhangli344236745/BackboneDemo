/**
 * Created by df on 2014/9/2.
 */
define(["underscore","backbone"],function(_,Backbone){
    var User=Backbone.Model.extend({
        defaults:{
            name:"",
            age:0
        },
        url:"/user"
    });
    return User;
});