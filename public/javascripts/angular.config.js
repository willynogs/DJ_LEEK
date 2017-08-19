app.config(function($locationProvider, $stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider){
  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
  $urlMatcherFactoryProvider.strictMode(false)
  /* all state for app go here */
  $stateProvider
    .state('index', {
      url: '/',
      templateUrl: '/ang_temps/home.html',
      controller: 'HomeCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: '/ang_temps/about.html',
      controller: 'AboutCtrl'
    })
    .state('events', {
      url: '/events',
      templateUrl: '/ang_temps/events.html',
      controller: 'EventsCtrl'
    })
    .state('images', {
      url: '/images',
      templateUrl: '/ang_temps/images.html',
      controller: 'ImgCtrl'
    });
});
