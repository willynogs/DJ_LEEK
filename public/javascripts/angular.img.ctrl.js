app.controller('ImgCtrl', function($scope, $http, getContent){
  $scope.images = [];

  $scope.init = function(){
    getContent.getType('image')
    .then((response) => {
      $scope.images = response.data;
    });
  };
});
