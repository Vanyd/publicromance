//Wraping the toaster lib into a serivce
angular.module('app').value('mvToastr', toastr);

angular.module('app').factory('mvNotification', function(mvToastr) {
    return {
        notify: function(msg){
            mvToastr.success(msg);
            console.log(msg);
        },
        error: function (msg) {
            mvToastr.error(msg);
            console.log(msg);
        }
    }
});