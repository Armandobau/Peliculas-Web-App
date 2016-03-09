'use strict';

angular.module('pelisApp', ['ui.router','ngResource'])


.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        
            // route for the home page
            .state('app', { //si se le ha dado a un boton que referencia ese estado, con ui-sref
                url:'/', //pone esta url
                views: {
                    'header': {
                        templateUrl : 'views/header.html'
                    },
                    'content': {
                        templateUrl : 'views/home.html',
                        controller  : 'HomeController'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html'
                    }
                }

            })
        

            .state('app.movies', {
                url:'movies',
                views: {
                    'content@': {
                        templateUrl : 'views/movies.html',
                        controller  : 'MoviesController'                  
                    }
                }
            })
            
        
            .state('app.shows', {
                url:'tvshows',
                views: {
                    'content@': {
                        templateUrl : 'views/shows.html',
                        controller  : 'ShowsController'                  
                    }
                }
            })
        
        
        
            .state('app.moviedetails', {
                url: 'movie/:id',
                views: {
                    'content@': {
                        templateUrl : 'views/moviedetails.html',
                        controller  : 'MovieDetailsController'
                   }
                }
            })
    
    
            .state('app.showdetails', {
                url: 'show/:id',
                views: {
                    'content@': {
                        templateUrl : 'views/showdetails.html',
                        controller  : 'ShowDetailsController'
                   }
                }
            })
        
        
        
        
            .state('app.movieslist', {
                url:'favoritemovies',
                views: {
                    'content@': {
                        templateUrl : 'views/movieslist.html',
                        controller  : 'FavoriteMoviesController'                  
                    }
                }
            })
        
            .state('app.showslist', {
                url:'favoriteshows',
                views: {
                    'content@': {
                        templateUrl : 'views/showslist.html',
                        controller  : 'FavoriteShowsController'                  
                    }
                }
            })
        
            
    
        $urlRouterProvider.otherwise('/');
    })
;
