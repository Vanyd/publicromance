
angular.module('app').controller('mvReportDailyCtrl', function ($scope, mvReport, mvProduct) {

    $scope.report = mvReport;

    //TODO loop through over array of objects to get names and quantity.

    $scope.producttest = mvProduct.query(function() {

        for(var key in $scope.report){
            var obj = $scope.report[key];
            for(var prop in obj){
                if(obj.hasOwnProperty(prop)){
                    console.log(prop + " = " + obj[prop]);
                }
            }

        }

    });

    $scope.nameArray =  $scope.report.map(function(obj) {
        return obj.name;
    });
    //filters to unique names and places them as a label in the chart
    $scope.labels = $scope.nameArray.filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
    });



    //
    // for(var key in $scope.report){
    //     var obj = $scope.report[key];
    //     for(var prop in obj){
    //         if(obj.hasOwnProperty(prop)){
    //             console.log(prop + " = " + obj[prop]);
    //         }
    //     }
    //
    // }


   // var responseObject = JSON.parse($scope.report);


    // $scope.responseObject = myFunction($scope.report){
    //     var parsedJSON = JSON.parse($scope.report);
    //     for (var i=0;i<parsedJSON.length;i++) {
    //         console.log(parsedJSON[i].name);
    //     }
    // }



   // var newContent = '';
    ///for (var i = 0; i< responseObject)



    

    console.log($scope.report);

    // $scope.report.map(function(product) {
    //     console.log(product.name);
    // });

        //console.log(responseObject);

    //Adds all name objects into one array.
    $scope.nameArray =  $scope.report.map(function(obj) {
        return obj.name;
    });
    //filters to unique names and places them as a label in the chart
    $scope.labels = $scope.nameArray.filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
    });

    console.log($scope.nameArray);
    console.log($scope.labels);



    //Filters Objects from last 24 hours and places them in a array
    $scope.dateArray = $scope.report.filter(function (obj) {

        // var currentDate = new Date();
        // var ONE_DAY = 86400000 * 4;
        // var difference = currentDate.getTime()-ONE_DAY;

        return obj.date;

    });

    console.log($scope.dateArray);

    //filters quantity and places them in data array
    $scope.data = $scope.dateArray.map(function (obj) {
        return obj.quantity;
    });

    // //filters quantity and places them in data array
    // $scope.dataWarehouse = $scope.dateArray.map(function (obj) {
    //     return obj.quantity.warehouse;
    // });

  //  $scope.data = [[$scope.dataStore],[$scope.dataWarehouse]];

    console.log($scope.data);

    $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
    $scope.options = {
        scales: {
            yAxes: [
                {
                    id: 'y-axis-1',
                    type: 'linear',
                    display: true,
                    position: 'left'
                },
                {
                    id: 'y-axis-2',
                    type: 'linear',
                    display: true,
                    position: 'right'
                }
            ]
        }
    };

    $scope.series = ['Store Quantity', 'Warehouse Quantity'];

    $scope.test = function() {




        console.log($scope.labels.length);
        console.log($scope.data.length);


    };
});

