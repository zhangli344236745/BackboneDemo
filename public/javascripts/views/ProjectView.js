/**
 * Created by df on 2014/9/18.
 */
define(['jquery','underscore','backbone','views/SidebarView',
    'models/ProjectModel','collections/ProjectCollection',
    'views/ProjectListView','text!templates/projects/projectsTemplate.html'],
    function($,_,BackBone,SidebarView,ProjectModel,ProjectCollection,ProjectListView,projectsTemplate){
      var ProjectView=BackBone.View.extend({
           el:"#page",
           render:function(){
               $('.menu li').removeClass('active');
               $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
               this.$el.html(projectsTemplate);

               var project0 = new ProjectModel({title: 'Cross Domain', url: 'https://github.com/thomasdavis/backbonetutorials/tree/gh-pages/examples/cross-domain'});
               var project1 = new ProjectModel({title:'Infinite Scroll', url: 'https://github.com/thomasdavis/backbonetutorials/tree/gh-pages/examples/infinite-scroll'});
               var project2 = new ProjectModel({title:'Modular Backbone', url: 'https://github.com/thomasdavis/backbonetutorials/tree/gh-pages/examples/modular-backbone'});
               var project3 = new ProjectModel({title:'Node MongoDB Mongoose Restify', url: 'https://github.com/thomasdavis/backbonetutorials/tree/gh-pages/examples/nodejs-mongodb-mongoose-restify'});
               var project4 = new ProjectModel({title:'Todo App', url: 'https://github.com/thomasdavis/backbonetutorials/tree/gh-pages/examples/todo-app'});

               var aProjects = [project0,
                   project1,
                   project2,
                   project3,
                   project4];
               var projectCollection=new ProjectCollection(aProjects);
               var projectView=new ProjectListView({collection:projectCollection});
               projectView.render();

               var sliderbar=new SiderbarView();
               sliderbar.render();
           }
      });
      return ProjectView;
    });