(function(){
    
    
    var callbackChocolate = function(details) {
        
        var block = Chocolate.blockWebRequest(CONFIG.STORAGE_NAME);
        
        console.log(block);
        
        if(!block){
            console.error("Массив block Пуст")
            return {cancel: false};
        }
        
        if(block.indexOf(details.url) != -1){
            console.info("Обнаружено в block "+ details.url);
            notifications(true, details)
            return {cancel: true};
        }
        
        console.log("В массиве block нету ", details.url);
        
        return {cancel: false};
    };
    
    var filterChocolate = {
        types: [
            "main_frame",
            "xmlhttprequest"
        ],
        urls:  ["<all_urls>"]
    };
    
    var opt_extraInfoSpec = ["blocking"];
    
    
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
            contextMessage: details.url
        },function(id){
            timer = setTimeout(function(){
                chrome.notifications.clear(id)
            }, 3000);
        })
    };
    
    
}())


