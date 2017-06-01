var CHROMESTO = (function (myModel) {
    
    console.log("CHROME ==> redirect.js");
    
    "use strict";

    function rand(mass){
        
        return mass[Math.floor(Math.random() * mass.length)];
        
    }
    
    /**
     * redirectURL
     * 
     * Редирект на указанную страницу
     * 
     * @param {primary} optional, true если переадресация первичная 
     * @param {redirect} arrya адреса страниц для переадресации 
     *          
     */
    myModel.redirectURL = function(redirect){
        
        return rand(redirect)
        
    };
    
    return myModel
    
}(CHROMESTO || {}));