var Chocolate = (function (myModel) {
    
    console.log("Chocolate ==> blockWebRequest.js");
    
    "use strict";
    
    /**
     * blockWebRequest
     * 
     * Блокировка массив страниц arr_block,
     * тип страниц OPTIONS.TYPE_OF_PAGES,
     * редирект на страницу CHROMESTO.redirectURL(page) из storage[redirect]
     * 
     * @param   {Array} arr_block массив URL
     * @returns {function}   webRequest
     */
    
    
    myModel.blockWebRequest = function (arr_block){
        
        //Запрос в storage[redirect]
        CHROMESTO.getStorage("redirect", function(page){
            
            console.info(page)
            
            return chrome.webRequest.onBeforeRequest.addListener(function(details){
                return {
                    redirectUrl: CHROMESTO.redirectURL(page)
                };
            },{
            types: [
                OPTIONS.TYPE_OF_PAGES
            ],
                urls: arr_block
            },["blocking"])
        })
    };
    
    return myModel
    
}(Chocolate || {}));