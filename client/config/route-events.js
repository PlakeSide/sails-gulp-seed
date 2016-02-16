// This file contains all events that should trigger on route changes
(function(){
  angular.module( 'xSchedule' ).run( function routeEvents( $rootScope, $mdSidenav, $mdComponentRegistry ) {

    // Closes the side menu on stateChangeStart
    let closeMainMenuAfterNavigation = () => $mdSidenav('main-navigation-menu').close()
    $mdComponentRegistry
      .when('main-navigation-menu')
      .then( () => $rootScope.$on('$stateChangeStart', closeMainMenuAfterNavigation) )

  } )
})()
