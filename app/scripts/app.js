'use strict';

angular.module('challengeApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
  .otherwise({
    redirectTo: '/'
  });
})
.directive('dnDisplayMode', ['$window',
    function($window) {
      return {
        restrict: 'E',
        scope: {
          model: '=ngModel'
        },
        template: '<div data-mode="xsmall" class="visible-xs"></div><div data-mode="small" class="visible-sm"></div><div data-mode="medium" class="visible-md"></div><div data-mode="large" class="visible-lg"></div>',
        replace: false,
        link: function(scope, element, attrs) {
          var markers = element.find('div');

          function isVisible(element) {
            return element && !element.style.display.toString().match(/none/i) && element.offsetWidth;
          }

          function update() {
            angular.forEach(markers, function(el) {
              if (isVisible(el)) {
                scope.model = el.getAttribute('data-mode');
                return false;
              }
            });
          }

          var t;
          angular.element($window).bind('resize', function() {
            clearTimeout(t);
            t = setTimeout(function() {
              update();
              scope.$apply();
            }, 300);
          });
          update();
        }
      }
    }
])
