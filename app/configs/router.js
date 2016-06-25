/**
 * Created by MuTong Yang on 2016/6/25/0025.
 */
(function(){
    "use strict";
    angular.module("com.ngnice.app")
        .config(appConfig);

    function appConfig($stateProvider, $urlRouterProvider){
        $stateProvider.state('default', {
            url:'',
            templateUrl: 'controllers/home/index.html',
            controller: 'HomeIndexController as vm'
        });

        $stateProvider.state('home', {
            url: "/",
            templateUrl: 'controllers/home/index.html',
            controller: "HomeIndexController as vm"
        }).state('notFound', {
            url: "/notFound",
            templateUrl: "controllers/home/notFound.html",
            controller: "HomeNotFoundController as vm"
        });

        $urlRouterProvider.otherwise('/notFound');


        $stateProvider.state('reader', {
            url: "/reader",
            template: '<div ui-view></div>',
            abstract: true
        }).state('reader.create', {
            url: '/create',
            tempalteUrl: "controllers/reader/create.html",
            controller: "ReaderCreateController as vm"
        }).state('reader.list', {
            url: '/list',
            templateUrl: "controllers/reader/list.html",
            controller: "ReaderListController as vm"
        });

        $stateProvider.state('thread', {
            url: '/thread',
            template: '<div ui-view></div>',
            abstract: true
        }).state('thread.list', {
            url: '/list',
            templateUrl: 'controllers/thread/list.html',
            controller: "ThreadListController as vm",
        }).state('thread.tree', {
            url: '/tree',
            templateUrl: 'controllers/thread/tree.html',
            controller: "ThreadTreeController as vm"
        }).state('thread.show', {
            url: '/:id/show?title&poster',
            templateUrl: 'controllers/thread/show.html',
            controller: 'ThreadShowController as vm'
        })
    }
})();
