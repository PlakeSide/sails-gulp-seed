angular.module( 'PrimaryApp' ).controller('<%= camelName %>Controller', ( $scope ) => {
  console.log( '<%= camelName %>PageController', $scope )
  $scope.foo = '<%= camelName %>PageController'
} )
