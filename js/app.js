var app = angular.module('sicbo', []);

app.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});

function SicboCtrl($scope) {
  $scope.limit = 10;

  $scope.results = [];

  $scope.addResult = function() {
    var nr = $scope.new_result
    $scope.results.push([parseInt(nr.charAt(0)), parseInt(nr.charAt(1)), parseInt(nr.charAt(2))]);
    $scope.new_result = '';
  }
}
