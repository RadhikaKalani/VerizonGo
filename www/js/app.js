// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive


  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

      .state('tab.main', {
      url: '/dash/main',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-main.html',
          controller: 'MainCtrl'
        }
      }
    })

    .state('tab.employees', {
    url: '/dash/main/employees',
    views: {
      'tab-dash': {
        templateUrl: 'templates/employees.html',
        controller: 'employeesCtrl'
      }
    }
  })

    .state('tab.locations', {
    url: '/dash/main/locations',
    views: {
      'tab-dash': {
        templateUrl: 'templates/location.html',
        controller: 'locationsCtrl'
      }
    }
  })

    .state('tab.appointment', {
    url: '/dash/main/appointment',
    views: {
      'tab-dash': {
        templateUrl: 'templates/appointment.html',
        controller: 'locationsCtrl'
      }
    }
  })



  .state('tab.account', {
    url: '/dash/main/account',
    views: {
      'tab-dash': {
        templateUrl: 'templates/myaccount.html',
        controller: 'AccountCtrl'
      }
    }
  })

    .state('tab.bill', {
    url: '/dash/main/account/bill',
    views: {
      'tab-dash': {
        templateUrl: 'templates/bill.html'
      }
    }
  })


    .state('tab.location', {
    url: '/main/location',
    views: {
      'tab-main': {
        templateUrl: 'templates/location.html'
      }
    }
  })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
