app.filter('formatDate', function(){
  return function(input){
    return moment(input).format('MMM DD, YYYY @ h:mm a');
  };
});
