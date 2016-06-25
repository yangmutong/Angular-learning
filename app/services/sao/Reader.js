/**
 * Created by MuTong Yang on 2016/6/25/0025.
 */
(function(){
  angular.module("com.ngnice.app")
      .factory("Reader",function($resource){
          return $resource('/api/readers/:id', {id: '@id'});
      })
})();