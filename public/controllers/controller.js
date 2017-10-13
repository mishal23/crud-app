/**
 * Created by mishal23 on 16/7/17.
 */
var app=angular.module('app',[]);

app.controller('AppCtrl',['$scope','$http',function ($scope,$http) {

    var refresh = function () {
        $http.get('/contactlist').then(function (response) {
           // console.log("Requested data received");
            var contactlist = response.data;
            $scope.contactlist = contactlist;
        });
    };

    refresh();

    $scope.addContact = function () {
      //console.log($scope.contact);
      $http.post('/contactlist',$scope.contact).then(function (response) {
        //  console.log(response);
          $scope.contact = {};
          refresh();
      });
    };

    $scope.delete = function (id) {
        //console.log(id);
        $http.delete('/contactlist/' + id).then(function (response) {
            refresh();
        });
    };

    $scope.edit = function (id) {
      //console.log(id);
      $http.get('/contactlist/' + id).then(function (response) {
        //  console.log(response.data);

          $scope.contact = response.data;
      });
    };
    
    $scope.update = function (id) {
        //console.log(id);
        //console.log("Sending to POST");
        $http.put('/contactlist/' + id,$scope.contact).then(function (response) {
            refresh();
            $scope.contact={};
        });
    };
    
    $scope.clear = function () {
        $scope.contact = {};
    }
}]);