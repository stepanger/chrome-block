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
     * @param {redirect} arrya адреса страниц для переадресации 
     *          
     */
    myModel.redirectURL = function(redirect){
        
        console.log(redirect);
        
        return rand(redirect)
        
    };
    
    return myModel
    
}(CHROMESTO || {}));