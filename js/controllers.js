// DIOSES

moduloMitologia.controller("controllerMain", function ($scope){
	$scope.saludoInicial = 'Selecciona una mitología';
});
moduloMitologia.controller("controllerGrecia", function ($scope){
	$scope.dioses = [ {nombre: 'Zeus'}, {nombre: 'Afrodita'}, {nombre: 'Atenea'} ];
});
moduloMitologia.controller("controllerEscandinavia", function ($scope){
	$scope.dioses = [ {nombre: 'Odin'}, {nombre: 'Thor'}, {nombre: 'Loki'} ];
});
moduloMitologia.controller("controllerMesoamerica", function ($scope){
	$scope.dioses = [ {nombre: 'Quetzalcoatl'}, {nombre: 'Tezcatlipoca'}, {nombre: 'Tlaloc'} ];
});

//LIGA
moduloLiga.controller('playersController', function($scope, factoryPlayer) {
    factoryPlayer.getMainInfo().success(function (response) {
        //Dig into the responde to get the relevant data
        $scope.playersList = response;
    });

    $scope.deletePlayer = function(player) {
        /* Obsérvese que le pasamos el tinglado entero: console.log(nota); */

        /* Variable privada */
        var posicionPlayer = $scope.playersList.indexOf(player);

        /* Si está en el array, nos cepillamos esa nota */
        if ( posicionPlayer != -1 ) {
            /* Obsérvese que en cuanto lo quitamos del jasonako, desaparece
            de la vista x el data-binding */
            $scope.playersList.splice(posicionPlayer, 1);
        }

    }

    $scope.update = function(player,sum) {

        player.points = parseInt(player.points) + parseInt(sum) ;
        player.partidosJ = parseInt(player.partidosJ) + 1;

    }
});

moduloLiga.controller("playerAcciones", function($scope, factoryPlayer) {

    factoryPlayer.getMainInfo().success(function (response) {
        //Dig into the responde to get the relevant data
        $scope.playersList = response;
    });

    $scope.estadoPlayer = false;

    $scope.addPlayer = function() {
       if ( $scope.estadoPlayer === true ) {
            $scope.estadoPlayer = false;
       } else {
            $scope.estadoPlayer = true;
       }       
    }

    $scope.getShowPlayer= function() {       
       return $scope.estadoPlayer;
    }

    $scope.submitAddPlayer = function() {
        
        var nuevoPlayer = {};
        nuevoPlayer =  { name: $scope.formPlayer.inputName, 
                       points:0, 
                       nationality:$scope.formPlayer.inputNationality,
                       partidosJ:0,
                       team:$scope.formPlayer.inputTeam
                    }; 
        // "name":"Oli","points":"0","nationality":"Córdoba","partidosJ":"0","team":"PSG"
        
        /* Añadimos la nota en el jasonajo, lo cual se refleja enseguida en la vista...*/   
        $scope.playersList.push(nuevoPlayer);

       // localStorage.setItem('json', JSON.stringify($scope.playersList));
        //console.log(localStorage);

        /* Cambiamos la visibilidad del modal */
        $scope.estadoPlayer = false;        

        /* y reseteamos el formulario */
        $scope.formPlayer = {};
    }
});