angular.module( 'dunvegan.vision', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'vision', {
    url: '/vision',
    views: {
      "main": {
        controller: 'VisionCtrl',
        templateUrl: 'vision/vision.tpl.html'
      }
    },
    data:{ pageTitle: 'Our Vision' }
  });
})

.controller( 'VisionCtrl', function VisionCtrl( $scope ) {
  //
});