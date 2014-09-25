/**
 * Created by df on 2014/9/18.
 */
define(['jquery','underscore','backbone','views/HomeView','views/ProjectView'],
 function($,_,BackBone,HomeView,ProjectView){
    var AppRouter=BackBone.Router.extend({
        routes:{
            "projects":"showProject",
            "*actions":"defaultAction"
        }

    });

    var initialize=function(){
        var app_router=new AppRouter();
        app_router.on("route:defaultAction",function(actions){
            var homeview=new HomeView();
            homeview.render();
        });
        app_router.on("route:showProject",function(){
            var projectview=new ProjectView();
            projectview.render();
        });
        Backbone.history.start();
    };

    return {
        initialize:initialize
    };



});