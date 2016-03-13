// Directive mainDashboard TODO
(function(){
  angular.module( 'C3PO' )
    .component( 'mainDashboard', {
        templateUrl: 'assets/templates/main-dashboard.html',
        require: { /* required to be in parent controller */ },
        bindings: { /* attribute bindings are placed here */ },
        controllerAs: 'mainDashboard',
        controller: function( ) {
          this.test = 'Hello World'
      }
  } )
})()
