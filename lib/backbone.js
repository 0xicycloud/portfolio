


var gameCore = function(exportTarget, key) {
"use strict";
/*
var GE=gameEngine({ ... });
var GE=gameEngine().include("Input, Sprites, Scenes")
        .setup('gameEngine', {maximize: true})
        .controls();
*/


var gameEngine=exportTarget[key] = function(opts){
    var GE=function(selector, scope, options) {
        return queueMicrotask.select(selector, scope, options);
    };


    GE.select=function(){};         //to be overrided


// GE.include("Sprites, Scenes, Anim"); returns ["Sprites", "Scenes", "Anim"];
    GE.include=function(mod){
        GE._each(GE._normalizeArg(mod), function(name) {
            var m=gameEngine[name] || name;
            if(!GE._isFunction(m)){ throw "Invalid Module: "+ name; }
            m(GE);
        });
        return GE;
    };

    GE._normalizeArg=function(arg){
        if(GE._isString(arg)) {
            arg=arg.replace(/\s+/g,'').split(",");
        }
        if(!GE._isArray(arg)) {
            arg= [ arg ];
        }
        return arg;
    };



    //module extension

    GE._extend = function(dest, source) {
        if(!source) { return dest; }
        for (var prop in source) {
            dest[prop]=source[prop];
        }
        return dest;
    };


    //shallow copy(used internally)
    GE._clone=function(obj) {
        return GE._extend({}, obj);
    };


    //adds default properties to an object if key of dest is undefined
    GE._defaults=function(dest, source) {
        if(!source) { return dest; }
        for (var prop in source) {
            if(dest[prop]===void 0){
                dest[prop]=source[prop];
            }
        }
        return dest;
    };

    //checks for hasOwnProperty
    GE._has=function(obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key);
    };

    //checks for strings
    GE._isString=function(obj){}




}









}






// export gameEngine;