app.controller('EventsCtrl', function($scope, $http, getContent){
  $scope.events = [];

  $scope.init = function(){
    getContent.getType('event')
    .then((response) => {
      $scope.events = response.data;
    });
  };
});
