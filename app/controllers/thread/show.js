/**
 * Created by MuTong Yang on 2016/6/26/0026.
 */
(function(){
    "use strict";
    angular.module('com.ngnice.app')
        .controller('ThreadShowController', function($stateParams){
            var vm = this;
            vm.id = $stateParams.id;
            vm.title = $stateParams.title;
            vm.poster = $stateParams.poster;

        });
})();