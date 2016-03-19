// TODO Directive <%= camelName %>
(function(){
  angular.module( 'PrimaryApp' )
    .component( '<%= camelName %>' , {
      // require: { /* required to be in parent controller */ },
      // bindings: { /* attribute bindings are placed here */ },
      templateUrl :  '<%= templateFolder %><%= dashedName %>.html',
      controllerAs : '<%= camelName %>',
      controller: function (){
        this.name = '<%= camelName %>'
      }
    })
})()
