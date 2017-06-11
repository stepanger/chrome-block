/*
(function(){

    chrome.webRequest.onBeforeRequest.addListener(function(details){
        
        console.log(details);
        
        return {
            redirectUrl: OPTIONS.REDIRECT_URL
        };
    },{
    types: [
        OPTIONS.TYPE_OF_PAGES
    ],
    urls: Chocolate.blockWebRequest()
    },["blocking"])
    
}());

*/

(function(){
    
    var callbackChocolate = function(details) {
        notifications(false, details)
        return {
            redirectUrl: OPTIONS.REDIRECT_URL
        };
    }
    , callbackUser = function(details) {
        notifications(true, details)
        return {
            redirectUrl: OPTIONS.REDIRECT_URL
        };
    }
    , filterChocolate = {
        types: [OPTIONS.TYPE_OF_PAGES],
        urls:  Chocolate.blockWebRequest(OPTIONS.STORAGE_NAME_CASH, "arrya")
    }
    , filterUser = {
        types: [OPTIONS.TYPE_OF_PAGES],
        urls:  Chocolate.blockWebRequest(OPTIONS.STORAGE_NAME)
    }
    , opt_extraInfoSpec = ["blocking"];
    
    /*
    
    Блокировка Страниц Пользователя
    
    */

    chrome.webRequest.onBeforeRequest.addListener(
        callbackUser,
        filterUser,
        opt_extraInfoSpec
    );
    
    
    /*
    
    Блокировка Страниц Chocolate
    
    */
    
    chrome.webRequest.onBeforeRequest.addListener(
        callbackChocolate,
        filterChocolate,
        opt_extraInfoSpec
    );
    
    
    function notifications(status, details){
        
        var message = "Данный ресурс заблокирован Chocolate ";
        
        if(status){
            message = "Вы заблокировали этот ресурс";
        }
        
        chrome.notifications.create("", {
            type: "basic",
            iconUrl: "icon/icon48.png",
            title: "Chocolate",
            message: message,
            contextMessage: details.url,
            eventTime: 3
        },function(id){
            timer = setTimeout(function(){
                chrome.notifications.clear(id)
            }, 3000);
        })
    };
    
    
  /*
        chrome.webRequest.onBeforeRequest.addListener(function(details){
        
        notifications(false, details)
        
        return {
            redirectUrl: OPTIONS.REDIRECT_URL
        };
    },{
    types: [
        OPTIONS.TYPE_OF_PAGES
    ],
    urls:  Chocolate.blockWebRequest(OPTIONS.STORAGE_NAME_CASH, "arrya")
    },["blocking"])
    
    */
}());























