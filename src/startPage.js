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

    chrome.webRequest.onBeforeRequest.addListener(function(details){
        
        console.log(details);
        
        chrome.notifications.create("", {
            type: "basic",
            iconUrl: "icon/icon48.png",
            title: "Chocolate",
            message: "Вы заблокировали данный ресурс \n "+details.url,
            eventTime: 3
        },function(id){
            timer = setTimeout(function(){
                chrome.notifications.clear(id)
            }, 3000);
        })
        
        return {
            redirectUrl: OPTIONS.REDIRECT_URL
        };
    },{
    types: [
        OPTIONS.TYPE_OF_PAGES
    ],
    urls: Chocolate.blockWebRequest()
    },["blocking"]);
    
}());