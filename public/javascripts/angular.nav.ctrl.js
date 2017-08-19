app.controller('NavCtrl', function($scope, $state){
  $scope.goTo = function(route) {
    $state.go(route);
  };
});
