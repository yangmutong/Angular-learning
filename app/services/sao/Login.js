/**
 * Created by MuTong Yang on 2016/6/26/0026.
 */
(function(){
    'use strict';

    angular.module('com.ngnice.app').factory('Login', function LoginFactory($resource) {
        return $resource('/api/login/index');
    });

})();