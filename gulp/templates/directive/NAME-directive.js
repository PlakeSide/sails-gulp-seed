// Directive <%= camelName %> TODO
(function(){
  angular.module( '<%= moduleName %>' )
    .directive( '<%= camelName %>', () => {
      return {
        templateUrl: '<%= dashedName %>.html',
        scope: {
        },
        link: function( /* $scope, $element, $attributes */ ) {},
        controllerAs: '<%= camelName %>',
        bindToController: true,
        controller: function( ) {
          // Instead of using scope, you should reference the variable '<%= camelName %>'
          // Comment this line out if NO directive variables are set so it will pass linting
          var <%= camelName %> = this;

          <%= camelName %>.test = 'Hello World'

        }
      }
  } )
})()
