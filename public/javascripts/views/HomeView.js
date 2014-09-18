/**
 * Created by df on 2014/9/18.
 */
define(['jquery','underscore','backbone','views/SidebarView','text!templates/home/homeTemplate.html'],
function($,_,BackBone,SidebarView,homeTemplate){
    var HomeView=BackBone.View.extend({
        el:'#page',
        render:function(){
            $(".menu li").removeClass("active");
            $(".menu li a[href='#']").parent().addClass('active');
            this.$el.html(homeTemplate);

            var sidebarview=new SidebarView();
            sidebarview.render();
        }
    });
    return HomeView;
});