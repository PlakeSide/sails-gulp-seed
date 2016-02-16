// ToDO: Describe the Routes service file
(function(){
  angular.module( 'xSchedule' ).config(
    function(
      $stateProvider,
      $locationProvider,
      $urlMatcherFactoryProvider,
      $urlRouterProvider,
      $uiViewScrollProvider ) {

    $locationProvider.html5Mode( false )

    // Allow trailing slash route matching
    $urlMatcherFactoryProvider.strictMode( false )

    $uiViewScrollProvider.useAnchorScroll()

    // Catchall route
    $urlRouterProvider.otherwise( '/dashboard' )

    let componentDirective = ( url, name, options ) => {
      return angular.merge({},
        {
          url: url,
          template: `<${ name }></ ${ name } >`,
          absract: url ? true : false
        },
        options )
    }

    $stateProvider
      .state( 'home',
        componentDirective('/', 'main-dashboard' ) )

    console.log('Routes Service running.')

  } )
})()
