/**
 * Created by df on 2014/9/2.
 */
define(["underscore","backbone","../models/usermodel"],function(_,Backbone,User){
    var UserCollection=Backbone.Collection.extend({
        model:User
    });
    return UserCollection;
});