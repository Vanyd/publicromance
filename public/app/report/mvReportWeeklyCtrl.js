
angular.module('app').controller('mvReportWeeklyCtrl', function ($scope, mvReport) {


    $scope.report = mvReport;


    //Adds all name objects into one array
    $scope.nameArray =  $scope.report.map(function(obj) {
        return obj.name;
    });
    //filters to unique names and places them as a label in the chart
    $scope.labels = $scope.nameArray.filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
    });


    //Filters Objects from last 24 hours and places them in a array
    $scope.dateArray = $scope.report.filter(function (obj) {

        var currentDate = new Date();
        var ONE_DAY = 86400000 * 7;
        var difference = currentDate.getTime()-ONE_DAY;

        return obj.date.getTime() >= difference ;

    });

    //filters quantity and places them in data array
    $scope.data = $scope.dateArray.map(function (obj) {
        return obj.quantity;
    });

    $scope.test = function() {


        $scope.quantityArray = $scope.dateArray.map(function (obj) {
            return obj.quantity;
        });

        console.log($scope.quantityArray);


    };
});