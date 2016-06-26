/**
 * Created by MuTong Yang on 2016/6/26/0026.
 */
(function() {
    "use strict";
    angular.module('com.ngnice.app')
        .factory('AuthHandler', function($q, $injector){
           return {
               responseError: function(rejection){
                   if(rejection.status === 401){
                       var password = prompt("请输入密码： ");
                       if(password){
                           var Login = $injector.get('Login');
                           var $http = $injector.get('$http');

                           return Login.save({
                               username: 'testuser',
                               passwd: password
                           }).$promise.then(function(){
                               return $http(rejection.config);
                           });
                       }else{
                           return $q.reject(rejection);
                       }
                   }else{
                       return $q.reject(rejection);
                   }
               }
           }
        });
})();