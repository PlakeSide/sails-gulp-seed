// ToDO: Describe the Routes service file
(function(){
  angular.module( 'xSchedule' )
    .config(
      function($mdThemingProvider){
        $mdThemingProvider.theme('default')
        .primaryPalette('brown')
        .accentPalette('red');
    })
})()
