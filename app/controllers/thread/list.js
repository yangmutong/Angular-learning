/**
 * Created by MuTong Yang on 2016/6/26/0026.
 */
(function(){
    "use strict";
    angular.module('com.ngnice.app')
        .controller('ThreadListController', function(){
            var vm = this;
            vm.items = [
                {
                    title: "first",
                    poster: "yangmutong",
                    dateCreated: '2016-06-26T00:00:00'
                },
                {
                    title: "second",
                    poster: "yangmutong",
                    dateCreated: '2016-06-26T00:00:00'
                },
                {
                    title: "third",
                    poster: "yangmutong",
                    dateCreated: '2016-06-26T00:00:00'
                }
            ];

            vm.search = function(){
                // TO-DO : TRY TO DO SOMETHING SEARCHING ON SERVER

            };
            vm.search = _.debounce(search, 500);


        })
})();