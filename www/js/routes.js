angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('mobileAppsTraining', {
    url: '/page1',
    templateUrl: 'templates/mobileAppsTraining.html',
    controller: 'mobileAppsTrainingCtrl'
  })

  .state('introToMSWord', {
    url: '/page2',
    templateUrl: 'templates/introToMSWord.html',
    controller: 'introToMSWordCtrl'
  })

  .state('introToMSExcel', {
    url: '/page4',
    templateUrl: 'templates/introToMSExcel.html',
    controller: 'introToMSExcelCtrl'
  })

  .state('contactUs', {
    url: '/page5',
    templateUrl: 'templates/contactUs.html',
    controller: 'contactUsCtrl'
  })

  .state('pDFDownload', {
    url: '/page6',
    templateUrl: 'templates/pDFDownload.html',
    controller: 'pDFDownloadCtrl'
  })

  .state('sliderPage', {
    url: '/page7',
    templateUrl: 'templates/sliderPage.html',
    controller: 'sliderPageCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});