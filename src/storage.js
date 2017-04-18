;var CHROMESTO = (function (myModel) {
    
    console.log("CHROME ==> storage.js");
    
    "use strict";
    
    var chromeLocal = chrome.storage.local;
    
    /**
     * setStorage
     * 
     * Заносит значения в chrome.storage.local
     * 
     * CHROMESTO.setStorage({"history": ["habr", "google"]}, function(){});
     * 
     * @param {object}   obj     (ключ: значение) записи
     * @param {function} callback
     * @returns {function}   chromeLocal.set
     */
    myModel.setStorage = function(obj, callback){
        chromeLocal.set(obj, function(err) {
            if(err){
                console.info(err);
                return
            }
            
            if(!callback){
                return
            }
            
            return callback();
        });
    };
    
    /**
     * getStorage
     * 
     * Получает значения из chrome.storage.local
     * 
     * CHROMESTO.getStorage("hictory and null", function(page){console.log(page)});
     * 
     * @param {string}   string   ключ записи
     * @param {function} callback function(page) 
     * @returns {function}   chromeLocal.get
     */
    myModel.getStorage = function(string, callback){
        chromeLocal.get(function(page) {
                
            if(string == "null"){
                return callback(page);   
            }else{
                return callback(page[string]);
            }
            
        });
    };
    
    /**
     * clearStorage
     * 
     * Удаляет все значения из chrome.storage.local
     * 
     * @param   {function} callback 
     * @returns {function} chromeLocal.clear
     */
    myModel.clearStorage = function(callback){
        
        if(!callback){
            return chromeLocal.clear();
        }
        return chromeLocal.clear(callback);
    };
    
    /**
     * removeStorage
     * 
     * Удаляет значени по ключу из chrome.storage.local
     * 
     * @param   {string} key       Ключ в записи
     * @param   {function} callback 
     * @returns {function} chromeLocal.remove
     */
    myModel.removeStorage = function(key, callback){
        
        if(!callback){
            return chromeLocal.remove(key);
        }
        
        return chromeLocal.remove(key, callback);
    };
    
    /**
     * memoryStorage
     * 
     * Получает объем (в байтах), используемый в chrome.storage.local
     * 
     * CHROMESTO.memoryStorage(function(bytesInUse){console.log(bytesInUse)});
     * 
     * @param {function} callback 
     * @returns {function} chromeLocal.getBytesInUse
     */
    myModel.memoryStorage = function(callback){
        return chromeLocal.getBytesInUse(function(bytesInUse){
            callback(bytesInUse);
        })
    };
    
    return myModel
    
}(CHROMESTO || {}));