'use strict';

angular.module('pelisApp')

    
        //.constant("baseURL","http://localhost:3000/") 
        .constant("baseURL","http://192.168.1.108:3000/")
        
        .factory('homeFactory', ['$resource', 'baseURL', function($resource,baseURL) {
    
            var homfac = {};
            
            homfac.getMovies = function(){
                return $resource(baseURL+"movies/:id",null,  {'update':{method:'PUT' }});
            };
            
            homfac.getShows = function(){
                return $resource(baseURL+"shows/:id",null,  {'update':{method:'PUT' }});
            };
            
            return homfac;
                                           
        }])


        .factory('moviesFactory', ['$resource', 'baseURL', function($resource,baseURL) {
    
            var movfac = {};
            
            movfac.getMovies = function(){
                return $resource(baseURL+"movies/:id",null,  {'update':{method:'PUT' }});
            };

            
            return movfac;
                                           
        }])


        .factory('showsFactory', ['$resource', 'baseURL', function($resource,baseURL) {
    
            var shwfac = {};
            
            shwfac.getShows = function(){
                return $resource(baseURL+"shows/:id",null,  {'update':{method:'PUT' }});
            };
            
            return shwfac;
                                           
        }])



        .factory('favoriteMoviesFactory', ['$resource', 'baseURL', function($resource,baseURL) {
    
            var favfac = {};
            
            favfac.getMovies = function(){
                return $resource(baseURL+"favorites/:id",null,  {'update':{method:'PUT' }});
            };

            
            return favfac;
                                           
        }])
        
        .factory('favoriteShowsFactory', ['$resource', 'baseURL', function($resource,baseURL) {
    
            var fav2fac = {};
            
            fav2fac.getShows = function(){
                return $resource(baseURL+"favorites2/:id",null,  {'update':{method:'PUT' }});
            };

            
            return fav2fac;
                                           
        }])


;