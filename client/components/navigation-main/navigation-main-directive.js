// Directive navigationMain TODO
(function(){
  angular.module( 'xSchedule' )
    .directive( 'navigationMain', () => {
      return {
        templateUrl: '/assets/templates/navigation-main.html',
        scope: {
        },
        link: function( /* $scope, $element, $attributes */ ) {},
        controllerAs: 'navigationMain',
        bindToController: true,
        controller: function( ) {
          // Instead of using scope, you should reference the variable 'navigationMain'
          // Comment this line out if NO directive variables are set so it will pass linting
          var navigationMain = this;

          navigationMain.items = [
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
      }
  } )
})()
