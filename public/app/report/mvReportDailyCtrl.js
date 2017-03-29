
angular.module('app').controller('mvReportDailyCtrl', function ($scope, mvReport) {

    $scope.report = mvReport.query();

    // var log =[];
    //
    // angular.forEach(report, function(value, key){
    //     this.push(key + ': ' + value);
    // }, log);
    //
    // console.log(log);

    $scope.intro = "Hello Daily";

    $scope.labels = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7'];

    $scope.series = ['Start', 'End'];

    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
});

