/**
 * Created by MuTong Yang on 2016/6/25/0025.
 */
(function(){
    "use strict";
    angular.module('com.ngnice.app')
        .filter("error", error);

    function error(Errors){
        return function (name){
            // TODO : TYPE CHANGING
            return Errors[name] || name;
        }
    }

})();