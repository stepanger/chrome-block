;var Chocolate = (function (myModel) {
    
    console.log("Chocolate ==> blockPage.js");
    
    "use strict";
    
    function createURL(str){
        
        var parser = document.createElement('a');
        parser.href = str;
        
        var site = parser.protocol + "//"+parser.hostname+"/*";
    
        return site;
    };
    
    function addChromeURL(key, value){
        
        CHROMESTO.getStorage(OPTIONS.STORAGE_NAME, function(block){
            
            console.log(block);
            
            if(!block){
                
              var block = '{"block":{"'+key+'": "'+value+'"}}';
                  block = JSON.parse(block);   
                
              CHROMESTO.setStorage(block, function(){
                  chrome.runtime.reload();
              });
                
              return;
        }
          
        block[key] = value;
        
        CHROMESTO.setStorage({block: block}, function(){
            chrome.runtime.reload();
        });
          
      });
        
    };
    
    
    myModel.blockPage = function(key, value, query){
        
        
        if(query === "url"){
            return addChromeURL(key, value);
        }
        
        if(query === "site"){
            return addChromeURL(key, createURL(value));
        }
        
    };
    
    return myModel
    
}(Chocolate || {}));