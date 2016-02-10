// Directive mainDashboard TODO
(function(){
  angular.module( 'xSchedule' )
    .directive( 'mainDashboard', () => {
      return {
        templateUrl: '/assets/templates/main-dashboard.html',
        scope: {
        },
        link: function( /* $scope, $element, $attributes */ ) {},
        controllerAs: 'mainDashboard',
        bindToController: true,
        controller: function( ) {
          // Instead of using scope, you should reference the variable 'mainDashboard'
          // Comment this line out if NO directive variables are set so it will pass linting
          var mainDashboard = this;

          mainDashboard.test = 'Hello World'

        }
      }
  } )
})()
