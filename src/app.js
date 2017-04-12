(function(){
    
     CHROMESTO.getStorage(OPTIONS.STORAGE_NAME, function(block){
         
         var arr_block_url = [];
         
         for (key in block) {
             arr_block_url[arr_block_url.length] = block[key]
         }
         
         console.log(arr_block_url);
         
         if(arr_block_url.length === 0){
             return;
         }
         
         blockSite(arr_block_url);
         
    });
    
    function blockSite(arr_block){
        chrome.webRequest.onHeadersReceived.addListener(function(details){
            console.log(details);
            return {redirectUrl: OPTIONS.REDIRECT_URL};
        },{
            types: [
                OPTIONS.TYPE_OF_PAGES
            ],
            urls: arr_block
        },["blocking"])
    };
    
    
    function storage(key, value){
        CHROMESTO.getStorage("block", function(block){
            
            console.log(block);
            
            if(!block){
                
                var block = '{"block":{"'+key+'": "'+value+'"}}';
                    block = JSON.parse(block);   
   
                CHROMESTO.setStorage(block, function(){
                    chrome.runtime.reload();
                });
                return
            }
            
            block[key] = value;
            
            CHROMESTO.setStorage({block: block}, function(){
                chrome.runtime.reload();
            });
            
        });
    }
    
    
    chrome.contextMenus.create({
        "title": OPTIONS.CONTEXT_MENUS,
        "contexts":OPTIONS.CONTEXTS_LI,
        "onclick": (function(info, tab){
            
            storage(tab.title, tab.url)
        })
    });
    
}());