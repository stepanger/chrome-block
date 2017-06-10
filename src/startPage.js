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
    
    /*
    
    Блокировка Страниц Пользователя
    
    */

    chrome.webRequest.onBeforeRequest.addListener(function(details){
        
        console.log(details);
        
        notifications(true, details)
        
        return {
            redirectUrl: OPTIONS.REDIRECT_URL
        };
    },{
    types: [
        OPTIONS.TYPE_OF_PAGES
    ],
    urls: Chocolate.blockWebRequest(OPTIONS.STORAGE_NAME)
    },["blocking"]);
    
    
    /*
    
    Блокировка Страниц Chocolate
    
    */
    
    chrome.webRequest.onBeforeRequest.addListener(function(details){
        
        notifications(false, details)
        
        return {
            cancel: true
        };
    },{
    types: [
        OPTIONS.TYPE_OF_PAGES
    ],
    urls:  Chocolate.blockWebRequest(OPTIONS.STORAGE_NAME_CASH, "arrya")
    },["blocking"])
    
    
    function notifications(status, details){
        
        var message = "Данный ресурс заблокирован Chocolate ";
        
        if(status){
            message = "Вы заблокировали этот ресурс";
        }
        
        chrome.notifications.create("", {
            type: "basic",
            iconUrl: "icon/icon48.png",
            title: "Chocolate",
            message: message+" \n "+details.url,
            eventTime: 3
        },function(id){
            timer = setTimeout(function(){
                chrome.notifications.clear(id)
            }, 3000);
        })
    }
    
  
}());



























