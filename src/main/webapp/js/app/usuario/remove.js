/* global moduleUsuario */

'use strict';

moduleUsuario.controller('usuarioRemoveController', ['$scope', '$http', 'toolService', '$routeParams', '$anchorScroll', '$location',
    function ($scope, $http, toolService, $routeParams, $anchorScroll, $location) {
        $anchorScroll();
        
        $scope.botones = true;
        $scope.alerta = false;
        $scope.formulario = true;

        if (!$routeParams.id) {
            $scope.id = 1;
        } else {
            $scope.id = $routeParams.id;
        }

        $http({
            method: 'GET',
            url: 'http://localhost:8081/barberia66/barberia66?ob=usuario&op=get&id=' + $scope.id
        }).then(function (response) {
            $scope.status = response.status;
            $scope.ajaxData = response.data.message;
            $scope.fecha = formatDate(response.data.message.fecha_alta);
        }, function (response) {
            $scope.status = response.status;
            $scope.ajaxData = response.data.message || 'Request failed';
        });

        $scope.volver = function () {
            $location.url('usuario/plist');
        };

        $scope.borrar = function () {
            $http({
                method: 'GET',
                url: 'http://localhost:8081/barberia66/barberia66?ob=usuario&op=remove&id=' + $scope.id
            }).then(function (response) {
                $scope.status = response.status;
                $scope.ajaxData = response.data.message;
                $scope.formulario = false;
                $scope.botones = false;
                $scope.alerta = true;
            }, function (response) {
                $scope.status = response.status;
                $scope.ajaxData = response.data.message || 'Request failed';
            });
        };
        
        function formatDate(fecha) {
            var fechaCambiada = fecha.replace(', ', ' ');
            var fechaSeparada = fechaCambiada.split(" ");

            var dia = fechaSeparada[1];
            var mes;
            var anyo = fechaSeparada[2];

            switch (fechaSeparada[0]) {
                case "Jan":
                    mes = "1";
                    break;
                case "Feb":
                    mes = "2";
                    break;
                case "Mar":
                    mes = "3";
                    break;
                case "Apr":
                    mes = "4";
                    break;
                case "May":
                    mes = "5";
                    break;
                case "Jun":
                    mes = "6";
                    break;
                case "Jul":
                    mes = "7";
                    break;
                case "Aug":
                    mes = "8";
                    break;
                case "Sep":
                    mes = "9";
                    break;
                case "Oct":
                    mes = "10";
                    break;
                case "Nov":
                    mes = "11";
                    break;
                case "Dec":
                    mes = "12";
                    break;
            }

            var fechaFinal = dia + '/' + mes + '/' + anyo;
            return fechaFinal;
        }

        $scope.isActive = toolService.isActive;
    }
]);