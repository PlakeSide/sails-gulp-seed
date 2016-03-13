// Directive navigationMain TODO
(function(){
  angular.module( 'C3PO' )
    .component( 'mainNavigation', {
      templateUrl: 'assets/templates/navigation-main.html',
      // require: { /* required to be in parent controller */ },
      // bindings: { /* attribute bindings are placed here */ },
      controllerAs: 'navigationMain',
      controller: function( ) {

        this.items = [
          {
            icon: 'today',
            title: 'Calendar',
            route: 'home'
          },
          {
            icon: 'supervisor_account',
            title: 'Clients',
            route: 'home'
          },
          {
            icon: 'face',
            title: 'Staff',
            route: 'home'
          }
        ]

    }
  } )
})()
