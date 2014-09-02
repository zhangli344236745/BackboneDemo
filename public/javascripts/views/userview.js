/**
 * Created by df on 2014/9/2.
 */
define(["jquery","underscore","backbone","text!templetes/form.html","models/usermodel"],function($,_,Backbone,Form,User){
    var UserView=Backbone.View.extend({
        el:"#formId",
        events:{
            "click #submit":'submit'
        },
        initialize:function(){
            this.render();
        },
        render:function(){
          $(this.el).html(Form);
        },
        submit:function(){
            var _this=this;
            var user=new User();
            user.save({name:this.$("#name").val(),age:$("#age").val()},{
                success:function(data){
                    console.log(data);
                }
            });
        }
    });
    return UserView;
});