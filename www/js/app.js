var inspireWellness = angular.module('unionVillage', ['ui.router', 'inspireWellness.controllers', 'inspireWellness.services', 'inspireWellness.directives', 'firebase']);

inspireWellness.config(function($stateProvider, $urlRouterProvider) {
      
  $stateProvider
  
  // setup an abstract state for the tabs directive   
  .state('inspireWellness', {
        abstract: true,
        views: {
            'header': {
                templateUrl: 'templates/header.html'
            },
            'footer': {
                templateUrl: 'templates/footer.html'
            }
        }
    })
    .state("inspireWellness.home", {
        url: "/",
        views: {
            'content@': {
                templateUrl: 'templates/home.html'
            }
        }
    })
    .state("inspireWellness.wellnessMall", {
        url: "/wellnessMall",
        views: {
            'content@': {
                templateUrl: 'templates/wellnessMall.html'
            }
        }
    })
    .state("inspireWellness.ourCompany", {
        url: "/ourCompany",
        views: {
            'content@': {
                templateUrl: 'templates/ourCompany.html'
            }
        }
    })
    .state("inspireWellness.callUs", {
        url: "/callUs",
        views: {
            'content@': {
                templateUrl: 'templates/callUs.html'
            }
        }
    })
    .state("inspireWellness.emailUs", {
        url: "/emailUs",
        views: {
            'content@': {
                templateUrl: 'templates/emailUs.html'
            }
        }
    })
    .state("inspireWellness.success", {
        url: "/success",
        views: {
            'content@': {
                templateUrl: 'templates/success.html'
            }
        }
    });

    
    $urlRouterProvider.otherwise("/");
    
});