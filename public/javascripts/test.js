/**
 * Created by df on 2014/9/23.
 */
require.config({
    paths: {
        jquery: 'libs/jquery/jquery-min',
        underscore: 'libs/underscore/underscore-min', // https://github.com/amdjs
        backbone: 'libs/backbone/backbone-min', // https://github.com/amdjs
        text: 'libs/require/text',
        templates:"../templates"
    }
});

require(['underscore','backbone','routers/TestRouter'],function(_,BackBone,TestRouter){
    var app_routes=new TestRouter();
    BackBone.history.start();
})