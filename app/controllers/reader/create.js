/**
 * Created by MuTong Yang on 2016/6/25/0025.
 */
(function(){
    "use strict";
    angular.module('com.ngnice.app')
        .controller('ReaderCreateController', ReaderCreateController);

    function ReaderCreateController(Reader){
        var vm = this;
        vm.submit = function(form){
            Reader.save(form, function(reader){
                console.log(reader);
            }, function(response){
                console.log(response);
            });
            console.log(form);

        }
    }
})();