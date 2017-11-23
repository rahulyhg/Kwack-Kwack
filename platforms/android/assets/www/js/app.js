// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
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

.config(function ($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

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

  .state('home', {
      url: '/home',

      templateUrl: 'templates/homeSlider.html',
      controller: 'HomeCtrl'

    })
    .state('tab.trailer', {
      url: '/trailer',
      views: {
        'tab-trailer': {

          templateUrl: 'templates/tab-trailer.html',
          controller: 'TrailerCtrl'
        }
      }

    })

  .state('profile', {
    url: '/profile',
    templateUrl: 'templates/profile.html',
    controller: 'ProfileCtrl'
  })

  .state('discover', {
    url: '/discover',
    templateUrl: 'templates/discover.html',
    controller: 'DiscoverCtrl'
  })

  .state('tab.discoverNews', {
    url: '/discoverNews',
    views: {
      'tab-discoverNews': {

        templateUrl: 'templates/tab-discoverNews.html',
        controller: 'DiscoverNewsCtrl'
      }
    }

  })


  .state('filter', {
    url: '/filter',

    templateUrl: 'templates/filter.html',
    controller: 'FilterCtrl'

  })

  .state('signUp', {
    url: '/signup',
    templateUrl: 'templates/signUp.html',
    controller: 'SignUpCtrl'

  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'

  })


  .state('location', {
    url: '/location',
    templateUrl: 'templates/location.html',
    controller: 'LocationCtrl'

  })

  .state('otp', {
      url: '/otp',
      templateUrl: 'templates/otp.html',
      controller: 'DiscoverCtrl'

    })
    .state('tab.explore', {
      url: '/explore',
      views: {
        'tab-explore': {
      templateUrl: 'templates/explore.html',
      controller: 'ExploreCtrl'
        }
      }
    })

  .state('inviteFriends', {
      url: '/inviteFriends',
      templateUrl: 'templates/inviteFriends.html',
      controller: 'InviteFriendsCtrl'
    })

    .state('tab.startPolling', {
      url: '/startPolling',
      views: {
        'tab-startPolling': {
      templateUrl: 'templates/startPolling.html',
      controller: 'SrartPollingCtrl'
        }
      }
    })
    .state('tab.social', {
      url: '/social',
      views: {
        'tab-social': {
          templateUrl: 'templates/tab-social.html',
          controller: 'SocialCtrl'
        }
      }

    })
    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    });



  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

});