(function(){
   //chrome.webRequest.onHeadersReceived.addListener(function(details){
   //     console.log(details);
   //     return {redirectUrl: "https://habrahabr.ru/"};
   // },{
   //    types: [
   //        'main_frame'
   //    ],
   //    urls: [
   //        "*://www.google.ru/*",
   //        "*://www.google.com/*"
   //    ]
   //},["blocking"])
    
    
    chrome.contextMenus.create({
        "title": "Chocolate - Заблокировать страницу",
        "contexts":[
            "page","selection",
            "link","editable",
            "image","video","audio"
        ],
        "onclick": (function(info, tab){
            console.log(tab);
        })
    });
    
}())