angular.module( 'dunvegan', [
  'templates-app',
  'templates-common',
  'dunvegan.home',
  'dunvegan.about',
  'dunvegan.contact',
  'dunvegan.vision',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {
  // Use a loading screen and image loader https://github.com/desandro/imagesloaded
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | DSS' ;
    }
  });
});

