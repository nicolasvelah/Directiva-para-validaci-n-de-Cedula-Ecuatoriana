(function (angular) {
    directive('cedula', function () {
        return {
            restrict: 'A',
            link: function (scope, $elm, attrs) {

                function isNumeric(n) {
                    return !isNaN(parseFloat(n)) && isFinite(n);
                }

                scope.$watch(
                    function () {

                        var cedula_completa = $elm.val();
                        var cedula_completa = cedula_completa.replace(/\D/g, '');
                        $elm.val(cedula_completa);
                        var cedula = cedula_completa.split('');
                        var tipo = null;

                        if (cedula.length == 10) {
                            tipo = 'cedula';
                            scope.validate.tipo_documento = 'Cedula';

                            if (scope.cedula_val == true) {
                                scope.tipo_doc = false;
                            } else {
                                scope.tipo_doc = true;
                                scope.msn_doc = 'Has ingresado una Cédula válida';
                            }

                        } else if (cedula.length > 10 && !scope.labelcedula) {

                            var cedula_3ultimos = cedula_completa.substr(10);

                            if (cedula_3ultimos == '0'
                                || cedula_3ultimos == '00'
                                || cedula_3ultimos == '001') {

                                //console.log('1 ruc correcto');
                                scope.tipo_doc = true;
                                if (cedula_3ultimos == '001') {
                                    if (scope.cedula_val != true) {
                                        scope.msn_doc = 'Has ingresado un RUC válido';
                                        scope.cedula_val = false;
                                    } else {
                                        scope.msn_doc = '';
                                    }

                                } else {
                                    scope.msn_doc = 'Estás ingresando un RUC';
                                    scope.cedula_val = true;
                                }

                            } else {

                                //console.log(' 2 ruc incorrecto');
                                $elm.val(cedula_completa.substr(0, 10) + '001');
                                scope.tipo_doc = true;
                                scope.msn_doc = 'Ingresa un RUC correcto terminado en 001';
                            }

                            tipo = 'RUC';
                            scope.validate.tipo_documento = 'RUC';
                        } else if (cedula.length < 10 && cedula.length > 0 && !scope.labelcedula) {
                            tipo = null;
                            scope.tipo_doc = true;
                            scope.msn_doc = 'Estás ingresando un documento tipo cédula o RUC';
                            scope.cedula_val = true;
                        } else if (cedula.length < 10 && cedula.length > 0 && scope.labelcedula) {
                            tipo = null;
                            scope.tipo_doc = true;
                            scope.msn_doc = 'Debes ingresar un documento tipo cedula de 10 dígitos.';
                            scope.cedula_val = true;
                        } else {
                            tipo = null;
                            scope.tipo_doc = false;
                        }

                        if (tipo != null) {
                            var coeficiente = 2;
                            var multip = [];
                            angular.forEach(cedula, function (value, key) {
                                if (key < 9) {
                                    multip.push(value * coeficiente);

                                    if (coeficiente == 2) {
                                        coeficiente = 1;
                                    } else {
                                        coeficiente = 2;
                                    }
                                }
                            });

                            var total = 0;
                            angular.forEach(multip, function (value, key) {
                                if (value > 9) {
                                    value = value - 9;
                                }
                                total = total + value;
                            });

                            var total_validate = Math.round(total / 10) * 10;

                            if (total_validate < total && total_validate != 0) {
                                total_validate = total_validate + 10;
                            }

                            var total_validate = total_validate - total;

                            if (total_validate < 0) {
                                total_validate = Math.abs(total_validate);
                            }


                            if (cedula[9] == total_validate) {
                                //console.log('3 Cédula válida');
                                if (cedula.length > 10 && cedula.length < 13) {
                                    //console.log('4 RUC length = ' +cedula.length+ ' = incorrecto');
                                    scope.cedula_val = true;
                                } else {
                                    //console.log('5 otro___');
                                    scope.cedula_val = false;
                                }

                            } else {
                                //console.log('6 Cédula invalida');
                                scope.cedula_val = true;
                            }

                        }

                    }
                )
            }
        }

    }).directive('ruc', function () {
        return {
            restrict: 'A',
            link: function (scope, $elm, attrs) {
                scope.$watch(
                    function () {
                        var cedula_completa = $elm.val();
                        var cedula = $elm.val().split('');
                        var tipo = null;
                        tipo = 'RUC';
                        if (cedula.length > 10) {

                            var cedula_3ultimos = cedula_completa.substr(10);

                            if (cedula_3ultimos == '0'
                                || cedula_3ultimos == '00'
                                || cedula_3ultimos == '001') {

                                //console.log('1 ruc correcto');
                                scope.tipo_doc = true;
                                if (cedula_3ultimos == '001') {
                                    if (scope.cedula_val != true) {
                                        scope.msn_doc = 'Has ingresado un RUC';
                                        scope.cedula_val = false;
                                    } else {
                                        scope.msn_doc = '';
                                    }

                                } else {
                                    scope.msn_doc = 'Estás ingresando un RUC';
                                    scope.cedula_val = true;
                                }

                            } else {

                                //console.log(' 2 ruc incorrecto');
                                $elm.val(cedula_completa.substr(0, 10) + '001');
                                scope.tipo_doc = true;
                                scope.msn_doc = 'Ingresa un RUC correcto terminado en 001';
                            }

                            tipo = 'RUC';
                            scope.validate.tipo_documento = 'RUC';
                        } else if (cedula.length < 13 && cedula.length > 0 && !scope.labelcedula) {
                            tipo = null;
                            scope.tipo_doc = true;
                            scope.msn_doc = 'Debes ingresar un documento tipo RUC de 13 dígitos.';
                            scope.cedula_val = true;
                        } else {
                            tipo = null;
                            scope.tipo_doc = false;
                        }

                        if (tipo != null) {
                            var coeficiente = 2;
                            var multip = [];
                            angular.forEach(cedula, function (value, key) {
                                if (key < 9) {
                                    multip.push(value * coeficiente);

                                    if (coeficiente == 2) {
                                        coeficiente = 1;
                                    } else {
                                        coeficiente = 2;
                                    }
                                }
                            });

                            var total = 0;
                            angular.forEach(multip, function (value, key) {
                                if (value > 9) {
                                    value = value - 9;
                                }
                                total = total + value;
                            });

                            var total_validate = Math.round(total / 10) * 10;

                            if (total_validate < total && total_validate != 0) {
                                total_validate = total_validate + 10;
                            }

                            var total_validate = total_validate - total;

                            if (total_validate < 0) {
                                total_validate = Math.abs(total_validate);
                            }


                            if (cedula[9] == total_validate) {
                                //console.log('3 Cédula válida');
                                if (cedula.length > 10 && cedula.length < 13) {
                                    //console.log('4 RUC length = ' +cedula.length+ ' = incorrecto');
                                    scope.cedula_val = true;
                                } else {
                                    //console.log('5 otro___');
                                    scope.cedula_val = false;
                                }

                            } else {
                                //console.log('6 Cédula invalida');
                                scope.cedula_val = true;
                            }

                        }
                    }
                )
            }
        }

    })
})(window.angular);