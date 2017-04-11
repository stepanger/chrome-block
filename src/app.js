(function(){
   chrome.webRequest.onHeadersReceived.addListener(function(details){
        console.log(details);
    },{
       types: ['main_frame'],
       urls: ["<all_urls>"]
   })
}())