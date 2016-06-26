/**
 * Created by MuTong Yang on 2016/6/26/0026.
 */
(function(){
    "use strict";
    angular.module('com.ngnice.app')
        .filter('page', function(){
            return function (input, page, pageSize){
                if(!input){
                    return input
                }
                if(page < 0 || pageSize < 0){
                    return [];
                }
                var start = page * pageSize;
                var end = (page + 1) * pageSize;

                return input.slice(start, end);
            }
        })
})();