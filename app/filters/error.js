/**
 * Created by MuTong Yang on 2016/6/25/0025.
 */
(function(){
    "use strict";
    angular.module('com.ngnice.app')
        .filter("error", error);

    function error(Errors){
        return function (name, customMessages){
            // TODO : TYPE CHANGING
            var errors  = angular.extend({},Erros, customMessages);
            return errors[name] || name;
        }
    }

})();