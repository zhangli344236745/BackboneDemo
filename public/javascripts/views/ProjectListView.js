/**
 * Created by df on 2014/9/18.
 */
define(['jquery','underscore','backbone','models/ProjectModel',
        'collections/ProjectCollection','text!templates/projects/projectsListTemplate.html'],
function($,_,BackBone,ProjectModel,ProjectCollection,projectsListTemplate){
    var ProjectListView=new BackBone.View.extend({
        el:'#projects-list',
        render:function(){
            var data={
                projects:this.collection.models,
                _:_
            };
            var compileTemplate= _.template(projectsListTemplate,data);
            $(this.el).html(compileTemplate);
        }
    });
    return ProjectListView;
});