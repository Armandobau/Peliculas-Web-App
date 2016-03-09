'use strict';

angular.module('pelisApp')


    .controller('HomeController', ['$scope', 'homeFactory', function($scope, homeFactory) {
        
       homeFactory.getMovies().query(
                function(response) {
                    $scope.movies = response;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
                }
       );
        
       homeFactory.getShows().query(
                function(response) {
                    $scope.shows = response;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
                }
       );
       
    }])



    .controller('MoviesController', ['$scope', 'moviesFactory', function($scope, moviesFactory) {
        
       moviesFactory.getMovies().query(
                function(response) {
                    $scope.movies = response;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
                }
            );
       
    }])


    .controller('ShowsController', ['$scope', 'showsFactory', function($scope, showsFactory) {
        
       showsFactory.getShows().query(
                function(response) {
                    $scope.shows = response;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
                }
            );
       
    }])




    .controller('MovieDetailsController', ['$scope', '$stateParams', 'moviesFactory', 'favoriteMoviesFactory', function($scope, $stateParams, moviesFactory, favoriteMoviesFactory) {

            $scope.movie = {};
            $scope.query = "-date";
        
            //ordenar los comentarios por rating,autor o fecha///////////////////////////////
            $scope.changeQuery = function(x){
                if(x==1){
                    $scope.query="-rating";
                }
                if(x==2){
                    $scope.query="author";
                }
                if(x==3){
                    $scope.query="-date";
                }
            }
            /////////////////////////////////////////////////////////////////////////////////
            
           
            //obtiene las peliculas//////////////////////////////////////////////////////////
            $scope.movie = moviesFactory.getMovies().get({id:parseInt($stateParams.id,10)})
            .$promise.then(
                function(response){
                    $scope.movie = response;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
                }
            );
            /////////////////////////////////////////////////////////////////////////////////
        
        
            //añade o borra las peliculas de favoritos///////////////////////////////////////
                $scope.addFavorite = function(){
                    favoriteMoviesFactory.getMovies().save($scope.movie);
                    console.log("añadido");
                } 
                
                
                $scope.removeFavorite = function(){
                    favoriteMoviesFactory.getMovies().remove($scope.movie);
                    console.log("borrado");
                }
            ////////////////////////////////////////////////////////////////////////////////        
 
        
                        
        }])



    .controller('ShowDetailsController', ['$scope', '$stateParams', 'showsFactory', 'favoriteShowsFactory', function($scope, $stateParams, showsFactory, favoriteShowsFactory) {

            $scope.show = {};
            $scope.query = "-date";   
        
            $scope.changeQuery = function(x){
                if(x==1){
                    $scope.query="-rating";
                }
                if(x==2){
                    $scope.query="author";
                }
                if(x==3){
                    $scope.query="-date";
                }
            }
            
            $scope.show = showsFactory.getShows().get({id:parseInt($stateParams.id,10)})
            .$promise.then(
                function(response){
                    $scope.show = response;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
                }
            );
        
        
            
            $scope.addFavorite = function(){
                favoriteShowsFactory.getShows().save($scope.show);
                console.log("añadido");
            } 
                
                
            $scope.removeFavorite = function(){
                favoriteShowsFactory.getShows().remove($scope.show);
                console.log("borrado");
            }
        
                        
        }])
    



    .controller('MovieCommentController', ['$scope', 'moviesFactory', function($scope, moviesFactory) {

        $scope.mycomment = {rating:"", comment:"", author:"", date:""};
            
            $scope.submitComment = function () {
                
                $scope.mycomment.date = new Date().toISOString();
                
                
                $scope.movie.comments.push($scope.mycomment);
                
                moviesFactory.getMovies().update({id:$scope.movie.id},$scope.movie);
                
                $scope.commentForm.$setPristine();
                
                $scope.mycomment = {rating:"", comment:"", author:"", date:""};
            }
        
        
        
    }])



    .controller('ShowCommentController', ['$scope', 'showsFactory', function($scope, showsFactory) {

        $scope.mycomment = {rating:"", comment:"", author:"", date:""};
            
            $scope.submitComment = function () {
                
                $scope.mycomment.date = new Date().toISOString();
                
                
                $scope.show.comments.push($scope.mycomment);
                
                showsFactory.getShows().update({id:$scope.show.id},$scope.show);
                
                $scope.commentForm.$setPristine();
                
                $scope.mycomment = {rating:"", comment:"", author:"", date:""};
            }
    }])




     .controller('FavoriteMoviesController', ['$scope', '$stateParams', 'favoriteMoviesFactory', function($scope, $stateParams, favoriteMoviesFactory) {

         
         
            $scope.movies = favoriteMoviesFactory.getMovies().query(
                function(response) {
                    $scope.movies = response;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
                }
            );
       
        
                        
        }])


    .controller('FavoriteShowsController', ['$scope', '$stateParams', 'favoriteShowsFactory', function($scope, $stateParams, favoriteShowsFactory) {

         
         
            $scope.shows = favoriteShowsFactory.getShows().query(
                function(response) {
                    $scope.shows = response;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
                }
            );
       
        
                        
        }])


;
