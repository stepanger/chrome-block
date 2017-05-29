;var Chocolate = (function (myModel) {
    
    console.log("Chocolate ==> blockWebRequest.js");
    
    "use strict";
    
    /**
     * blockWebRequest
     * 
     * Блокировка массив страниц arr_block,
     * тип страниц OPTIONS.TYPE_OF_PAGES,
     * редирект на страницу OPTIONS.REDIRECT_URL
     * 
     * @param   {Array} arr_block массив URL
     * @returns {function}   webRequest
     */
    myModel.blockWebRequest = function (arr_block){
        return chrome.webRequest.onHeadersReceived.addListener(function(details){
            console.log(details);
            return {
                redirectUrl: CHROMESTO.redirectURL(OPTIONS.REDIRECT_URL)
            };
        },{
            types: [
                OPTIONS.TYPE_OF_PAGES
            ],
            urls: arr_block
        },["blocking"])
    };
    
    return myModel
    
}(Chocolate || {}));