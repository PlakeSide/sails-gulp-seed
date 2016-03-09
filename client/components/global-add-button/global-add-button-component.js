// TODO Directive globalAddButton
(function(){
  angular.module( 'sails-gulp-seed' )
    .component( 'globalAddButton' , {
      require: { /* required to be in parent controller */ },
      bindings: { /* attribute bindings are placed here */ },
      templateUrl :  'assets/templates/global-add-button.html',
      controllerAs : 'globalAddButton',
      controller: function($rootScope){
        this.name = 'globalAddButton'
        console.info($rootScope)
      }
    })
})()
