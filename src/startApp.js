(function(){
    chrome.runtime.onInstalled.addListener(function(details){
        
        if(details.reason == "install"){
            console.log("install App Chocolate") 
                    
            localStorage.setItem(OPTIONS.STORAGE_NAME_CASH, '["http://123.org/"]');
            
            //Исправить chrome.storage
            localStorage.setItem(OPTIONS.STORAGE_NAME, '["http://123.org/"]');

            chrome.runtime.reload();
        }
        
        if(details.reason == "update"){
            console.log("update App Chocolate")
        }
        
    });
    
}())