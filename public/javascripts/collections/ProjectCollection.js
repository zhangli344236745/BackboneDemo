/**
 * Created by df on 2014/9/18.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'models/ProjectModel'
], function($, _, Backbone, ProjectModel){
    var ProjectCollection = Backbone.Collection.extend({
        model: ProjectModel,
        initialize: function(){
        }

    });
    return ProjectCollection;
});
