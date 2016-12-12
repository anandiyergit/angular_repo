'use strict';

angular.module('confusionApp', ['ui.router','ngResource'])
        .config(function($stateProvider, $urlRouterProvider){
          $stateProvider
          // route for the home page

          .state('app',{
            url:'/',
            views: {
              'header':{
                      templateUrl : 'views/header.html'
              },
              'content':{
                      template : '<h1> Anand will fill up this place!<h1>',
                      controller : 'IndexController'
              },
              'footer':{
                      templateUrl : 'views/footer.html'
              }
            }
          })

          // route for the aboutus page
          .state('app.aboutus',{
            url:'aboutus',
            views:{
              'content@':{
                template : '<h1> Anand will fill up this place!<h1>'
              }
            }
          })

          // route for the contactus page
          .state('app.contactus',{
            url:'contactus',
            views:{
              'content@':{
                templateUrl : 'views/contactus.html',
                controller: 'ContactController'
              }
            }
          })

          // route for the menu page
          .state('app.menu',{
            url:'menu',
            views:{
              'content@':{
                templateUrl: 'views/menu.html',
                controller: 'MenuController'
              }
            }
          });
          $urlRouterProvider.otherwise('/');
        })
        ;
