connector.controller('KwackScreenCtrl', function ($scope, $ionicModal, Chats) {
  $ionicModal.fromTemplateUrl('templates/modal/filter1.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function (modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function () {
    $scope.modal.show();
  }

  $scope.closeModal = function () {
    $scope.modal.hide();
  };
  // $scope.months=["January","Feb","March"]
  $scope.months = [{
      "month": "January"
    }, {
      "month": "February"
    }, {
      "month": "March"
    }, {
      "month": "April",
    }, {
      "month": "May",
    }, {
      "month": "June"
    },
    {
      "month": "July",
    }, {
      "month": "August"
    }, {
      "month": "September"
    }, {
      "month": "October"
    }, {
      "month": "November"
    }, {
      "month": "December"
    }

  ]
  Chats.apiCallWithoutData("Interests/getAllInterests", function (data) {
    $scope.allInterest = data.data

    console.log("data is*****************", $scope.allInterest)
    $scope.interestdup = _.chunk($scope.allInterest, 3);
  })
  $scope.searchText = {};
  $scope.search = function (value) {
    $scope.companyCategory = [];
    $scope.isText = true;

    if (value.searchText != "") {
      Chats.apiCallWithData("Interests/globalSearch", value, function (data) {
        console.log("data is", data)
        if (data.value) {
          $scope.Interestsname = data.data.Interests;
          console.log("inside if")
        } else {
          console.log("Event data false");
        }
      });
    }
  };

  Chats.apiCallWithoutData("NewsInfo/getAllNews", function (data) {
    $scope.news = data.data
   
    _.each($scope.news,function(value){
      value.year=new Date(value.createdAt).getFullYear();
    })
  $scope.dynamicYear =  _.uniqBy($scope.news, 'year');
     
  })

  $scope.doRefresh = function (val) {
    $scope.pagination = {
      shouldLoadMore: true,
      currentPage: 0,
      result: []
    };
    if (!val) {
      $scope.loadMore();
    }
  };
  $scope.loadMore = function () {
    $scope.pagination.shouldLoadMore = false;
    $scope.pagination.currentPage++;
    var url = 'Assignment/tasklist';
    if (LocalStorageService.getOnlineStatus()) {
      MyServices.getData(url, {
        page: $scope.pagination.currentPage
      }, function (data) {
        $scope.pagination.result = _.concat($scope.pagination.result, data.data);
        if (data.data.length == 10) {
          $scope.pagination.shouldLoadMore = true;
        }
        LocalStorageService.isItLocalStorageData($scope.pagination.result);
        LocalStorageService.saveTaskOnLocalStorage($scope.pagination.result, "task");
        $scope.pagination.resultGroup = LocalStorageService.groupDataByMonth($scope.pagination.result);
        $scope.$broadcast('scroll.refreshComplete');
      });
    } else if (!LocalStorageService.getOnlineStatus()) {
      $scope.pagination.result = LocalStorageService.getTaskFromLocalStorage("task");
      LocalStorageService.isItLocalStorageData($scope.pagination.result);
      $scope.pagination.resultGroup = LocalStorageService.groupDataByMonth($scope.pagination.result);
    }
  };


})