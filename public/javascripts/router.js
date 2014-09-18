/**
 * Created by df on 2014/9/18.
 */
define(['jquery','underscore','backbone','views/HomeView'],
 function($,_,BackBone,HomeView){
    var AppRouter=BackBone.Router.extend({
        routes:{
            "*actions":"defaultAction"
        }

    });

    var initialize=function(){
        var app_router=new AppRouter();
        app_router.on("route:defaultAction",function(actions){
            var homeview=new HomeView();
            homeview.render();
        });
        Backbone.history.start();
    };

    return {
        initialize:initialize
    };



});