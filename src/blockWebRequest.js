;var Chocolate = (function (myModel) {
    
    myModel.blockWebRequest = function (arr_block){
        chrome.webRequest.onHeadersReceived.addListener(function(details){
            console.log(details);
            return {
                redirectUrl: OPTIONS.REDIRECT_URL
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