app.controller('AboutCtrl', function($scope, $http, getContent){
  $scope.about = '';

  $scope.init = function(){
    getContent.getType('about')
    .then((response) => {
      $scope.about = response.data[0].about;
    });
  };
});
