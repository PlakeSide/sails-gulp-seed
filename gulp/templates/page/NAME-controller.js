angular.module( 'queueAdmin' ).controller('<%= camelName %>Controller', ( $scope ) => {
  console.log( '<%= camelName %>PageController', $scope )
  $scope.foo = '<%= camelName %>PageController'
} )

