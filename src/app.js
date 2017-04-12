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
    
    chrome.commands.onCommand.addListener(function(command) {
        console.log('Command:', command);
      });
    
    chrome.tabs.onUpdated.addListener(function(id,info,tab) {
        console.log(tab);
    });
    
}())