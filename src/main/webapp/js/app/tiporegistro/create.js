/* global moduleTiporegistro */

'use strict';

moduleTiporegistro.controller('tiporegistroCreateController', ['$scope', '$http', 'toolService', '$anchorScroll', '$location',
    function ($scope, $http, toolService, $anchorScroll, $location) {
        $anchorScroll();

        $scope.formulario = true;
        $scope.botones = true;
        $scope.correcto = false;

        $scope.volver = function () {
            $location.url('tiporegistro/plist');
        };

        $scope.crear = function () {
            var json = {
                descripcion: $scope.descripcion
            };
            $http({
                method: 'GET',
                url: 'http://localhost:8081/barberia66/barberia66?ob=tiporegistro&op=create',
                params: {json: JSON.stringify(json)}
            }).then(function (response) {
                $scope.status = response.status;
                $scope.ajaxData = response.data.message;
                if ($scope.status === 200) {
                    $scope.formulario = false;
                    $scope.botones = false;
                    $scope.correcto = true;
                }
            }, function (response) {
                $scope.status = response.status;
                $scope.ajaxData = response.data.message || 'Request failed';
            });
        };

        $scope.isActive = toolService.isActive;
    }
]);