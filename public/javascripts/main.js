/**
 * Created by df on 2014/9/2.
 */
require.config({
    paths: {
        jquery: 'libs/jquery/jquery-min',
        underscore: 'libs/underscore/underscore-min', // https://github.com/amdjs
        backbone: 'libs/backbone/backbone-min', // https://github.com/amdjs
        text: 'libs/require/text'
    }
});

require(["./views/userview","./views/userlistview"],function(UserView,UserListView){
    var userview=new UserView();
    var userlistview=new UserListView();
})