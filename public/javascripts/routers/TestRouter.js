/**
 * Created by df on 2014/9/23.
 */
define(['underscore','backbone'],function(_,BackBone){
    var TestRouter=BackBone.Router.extend({
        routes:{
            "/posts/:id":"getPost",
            "*actions":"defaultRoute"
        },
        defaultRoute:function(actions){
            alert("dsf");
        },
        getPost:function(id){
            alert(id);
        }
    });
    return TestRouter;
});