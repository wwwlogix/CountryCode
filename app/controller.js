app.controller('countryInfoCtrl', function ($scope, $http) {
    $scope.countryName = 'Pakistan';
    $scope.countryInfo = undefined;

    $scope.getCountry = function () {
        var country = $scope.countryName;
        if (country.length == 0) return false;

        var url = "https://restcountries.eu/rest/v1/name/" + country;
        NProgress.start();
        $http.get(url).then(function (response) {
            NProgress.done();
            if (response.data && response.data.length) {
                var info = response.data[0];
                console.warn(info);

                $scope.countryInfo = info;
            }
        }, function (error) {
            NProgress.done();
            if (error.status == 404) {
                $scope.countryInfo = undefined;
                alert('Country Not Found!');
            }
        });
    }
});

