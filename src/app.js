(function(){
   chrome.webRequest.onHeadersReceived.addListener(function(details){
        console.log(details);
        return {redirectUrl: "https://habrahabr.ru/"};
    },{
       types: ['main_frame'],
       urls: ["*://www.google.ru/*"]
   },["blocking"])
}())