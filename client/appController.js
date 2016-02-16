(function(){
  angular.module( 'xSchedule' )
    .controller( 'applicationCtrl', function applicationCtrl( $mdSidenav ) {

        var app = this;

        app.toggleMainMenu = () => $mdSidenav('main-navigation-menu').toggle()

    } )
})()
