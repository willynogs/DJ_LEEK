app.factory('getContent', function($http){
  return {
    getType: function(type){
      return $http({
        method: "GET",
        url: `/api/content/${type}`
      });
    }
  };
});
