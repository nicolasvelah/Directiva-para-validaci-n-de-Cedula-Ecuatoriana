(function (angular) {
    directive('telefono', function () {

        return {
            restrict: 'A',
            link: function (scope, $elm, attrs) {
                scope.$watch(
                    function () {
                        scope.celular_true = false;
                        scope.msn = '';
                        scope.msn_error = '';
                        scope.showmsn = false;
                        scope.showmsn_error = false;
                        scope.error = false;

                        var telf = $elm.val().split('');
                        var telf_completo = $elm.val();
                        scope.celular_true = false;

                        if (telf[0] == 0 && telf[1] == 9) {

                            //console.log('CELULARES');

                            scope.showmsn = true;
                            scope.msn = 'Estás ingresando un número celular';
                            scope.telftipo = 'Celular';

                            if (telf.length >= 10 && telf.length <= 10) {
                                scope.showmsn = true;
                                scope.msn = 'Has ingresado un teléfono celular válido';
                                scope.validate.contactouno = '';
                                scope.validate.numero_cel = $elm.val();
                                scope.celular_true = true;
                            }
                        } else if (
                            telf[0] == 0 && telf[1] == 1 ||
                            telf[0] == 0 && telf[1] == 8 ||
                            telf[0] == 0 && telf[1] == 0) {
                            //console.log('codigos no validos 00, 01, 08');
                            scope.showmsn = true;
                            scope.error = true;
                            scope.msn = '00, 01 y 08 no son códigos válidos en Ecuador.';
                            scope.telftipo = 'Celular o Fijo';
                        } else if (
                            telf[0] == 0 && telf[1] != 9 ||
                            telf[0] == 0 && telf[1] != 8 ||
                            telf[0] == 0 && telf[1] != 1 ||
                            telf[0] == 0 && telf[1] != 0 ||
                            telf[0] == 0 && telf[1] != null) {
                            //console.log('FINJOS');

                            if (telf.length >= 2 && telf.length <= 9) {

                                if (telf[1] == 2) {
                                    scope.codprovincia = 'Pichincha, Santo Domingo';
                                } else if (telf[1] == 3) {
                                    scope.codprovincia = 'Bolívar, Chimborazo, Cotopaxi, Pastaza, Tungurahua';
                                } else if (telf[1] == 4) {
                                    scope.codprovincia = 'Guayas, Santa Elena';
                                } else if (telf[1] == 5) {
                                    scope.codprovincia = 'Galápagos, Los Ríos, Manabí';
                                } else if (telf[1] == 6) {
                                    scope.codprovincia = 'Carchi, Esmeraldas, Imbabura, Napo, Orellana, Sucumbíos';
                                } else if (telf[1] == 7) {
                                    scope.codprovincia = 'Azuay, Cañar, El Oro, Loja, Morona Santiago, Zamora Chinchipe';
                                }

                                scope.showmsn = true;
                                scope.telftipo = 'Fijo';
                                scope.msn = 'Estás ingresando un teléfono fijo que pertenece a una de las siguientes provincias <b>' + scope.codprovincia + '</b>';
                            }

                            if (telf.length >= 9 && telf.length <= 9) {
                                scope.showmsn = true;
                                scope.msn = 'Ha ingresado un teléfono fijo que pertenece a una de las siguientes provincias <b>' + scope.codprovincia + '</b>';
                                scope.validate.contactouno = $elm.val();
                                scope.validate.numero_cel = '';
                                scope.celular_true = true;
                            }

                            /*BORRA EL 10MO CARACTER*/
                            if (telf.length >= 10 && telf.length <= 10) {
                                $elm.val(telf_completo.substr(0, 9));
                            }
                        } else if (telf[0] != null) {
                            //console.log('Si pirmer caracter no es 0');
                            scope.showmsn = true;
                            scope.error = true;
                            scope.msn = 'El teléfono debe empezar con 0 para celulares y fijos. <br> Para fijos utilizar código de área.';
                        }
                    }
                )
            }
        }

    }).directive('celular', function () {

        return {
            restrict: 'A',
            link: function (scope, $elm, attrs) {
                scope.$watch(
                    function () {
                        scope.celular_true = false;
                        scope.msn = '';
                        scope.msn_error = '';
                        scope.showmsn = false;
                        scope.showmsn_error = false;
                        scope.error = false;

                        var telf = $elm.val().split('');
                        var telf_completo = $elm.val();
                        scope.celular_true = false;

                        if (telf[0] == 0 && telf[1] == 9) {

                            //console.log('CELULARES');

                            scope.showmsn = true;
                            scope.msn = 'Estás ingresando un número celular';
                            scope.telftipo = 'Celular';

                            if (telf.length >= 10 && telf.length <= 10) {
                                scope.showmsn = true;
                                scope.msn = 'Ha ingresado un teléfono celular';
                                scope.validate.numero_cel = $elm.val();
                                scope.celular_true = true;
                            }
                        } else if (
                            telf[0] == 0 && telf[1] == 1 ||
                            telf[0] == 0 && telf[1] == 8 ||
                            telf[0] == 0 && telf[1] == 0) {
                            //console.log('codigos no validos 00, 01, 08');
                            scope.showmsn = true;
                            scope.error = true;
                            scope.msn = '00, 01 y 08 no son códigos válidos en Ecuador.';
                            scope.telftipo = 'Celular o Fijo';
                        } else if (
                            telf[0] == 0 && telf[1] != 9 ||
                            telf[0] == 0 && telf[1] != 8 ||
                            telf[0] == 0 && telf[1] != 1 ||
                            telf[0] == 0 && telf[1] != 0 ||
                            telf[0] == 0 && telf[1] != null) {
                            //console.log('FINJOS');

                            if (telf.length >= 2 && telf.length <= 9) {


                            }

                            /*BORRA EL 10MO CARACTER*/
                            if (telf.length >= 10 && telf.length <= 10) {
                                $elm.val(telf_completo.substr(0, 9));
                            }
                        } else if (telf[0] != null) {
                            //console.log('Si pirmer caracter no es 0');
                            scope.showmsn = true;
                            scope.error = true;
                            scope.msn = 'El teléfono debe empezar con 0 para celulares y fijos. Para fijos utilizar código de área.';
                        }
                    }
                )
            }
        }

    }).directive('fijo', function () {

        return {
            restrict: 'A',
            link: function (scope, $elm, attrs) {
                scope.$watch(
                    function () {
                        scope.celular_true = true;
                        scope.msn = '';
                        scope.msn_error = '';
                        scope.showmsn = false;
                        scope.showmsn_error = false;
                        scope.error = false;

                        var telf = $elm.val().split('');
                        var telf_completo = $elm.val();
                        scope.celular_true = false;

                        if (telf[0] == 0 && telf[1] == 9) {


                        } else if (
                            telf[0] == 0 && telf[1] == 1 ||
                            telf[0] == 0 && telf[1] == 8 ||
                            telf[0] == 0 && telf[1] == 0) {
                            //console.log('codigos no validos 00, 01, 08');
                            scope.showmsn = true;
                            scope.error = true;
                            scope.msn = '00, 01 y 08 no son códigos válidos en Ecuador.';
                            scope.telftipo = 'Celular o Fijo';
                        } else if (
                            telf[0] == 0 && telf[1] != 9 ||
                            telf[0] == 0 && telf[1] != 8 ||
                            telf[0] == 0 && telf[1] != 1 ||
                            telf[0] == 0 && telf[1] != 0 ||
                            telf[0] == 0 && telf[1] != null) {
                            //console.log('FIJOS');

                            if (telf.length >= 2 && telf.length <= 9) {

                                if (telf[1] == 2) {
                                    scope.codprovincia = 'Pichincha, Santo Domingo';
                                } else if (telf[1] == 3) {
                                    scope.codprovincia = 'Bolívar, Chimborazo, Cotopaxi, Pastaza, Tungurahua';
                                } else if (telf[1] == 4) {
                                    scope.codprovincia = 'Guayas, Santa Elena';
                                } else if (telf[1] == 5) {
                                    scope.codprovincia = 'Galápagos, Los Ríos, Manabí';
                                } else if (telf[1] == 6) {
                                    scope.codprovincia = 'Carchi, Esmeraldas, Imbabura, Napo, Orellana, Sucumbíos';
                                } else if (telf[1] == 7) {
                                    scope.codprovincia = 'Azuay, Cañar, El Oro, Loja, Morona Santiago, Zamora Chinchipe';
                                }

                                scope.showmsn = true;
                                scope.telftipo = 'Fijo';
                                scope.msn = 'Estás ingresando un teléfono fijo que pertenece a una de las siguientes provincias <b>' + scope.codprovincia + '</b>';
                            }

                            if (telf.length >= 9 && telf.length <= 9) {
                                scope.showmsn = true;
                                scope.msn = 'Ha ingresado un teléfono fijo que pertenece a una de las siguientes provincias <b>' + scope.codprovincia + '</b>';
                                scope.validate.contactouno = $elm.val();
                                scope.celular_true = true;
                            }

                            /*BORRA EL 10MO CARACTER*/
                            if (telf.length >= 10 && telf.length <= 10) {
                                $elm.val(telf_completo.substr(0, 9));
                            }
                        } else if (telf[0] != null) {
                            //console.log('Si pirmer caracter no es 0');
                            scope.showmsn = true;
                            scope.error = true;
                            scope.msn = 'El teléfono debe empezar con 0 para celulares y fijos. Para fijos utilizar código de área.';
                        }
                    }
                )
            }
        }

    })
})(window.angular);