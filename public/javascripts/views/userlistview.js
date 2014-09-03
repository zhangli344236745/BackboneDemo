/**
 * Created by df on 2014/9/2.
 */
define(["jquery","underscore","backbone","collections/usercollection","text!templetes/userlisttemplete.html"],
function($,_,Backbone,UserCollection,Userlisttemplete){
    var UserCollectionView=Backbone.View.extend({
        el:"#userlistbox",
        initialize:function(){
            this.render();
        },
        render:function(){
            var _this=this;
            var users=new UserCollection();
            users.fetch({
                success:function(data){
                    console.log(_.template(Userlisttemplete,{users:data.models,_:_}));
                    $(_this.el).html(_.template(Userlisttemplete,{users:data.models,_:_}));
                },
                error:function(){

                }
            });
        }
    });
    return UserCollectionView;
});