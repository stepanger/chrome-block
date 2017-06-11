(function(){
    chrome.runtime.onInstalled.addListener(function(details){
        
        if(details.reason == "install"){
            console.log("install App Chocolate") 
            
            //При запуске заносится значение 
            localStorage.setItem(OPTIONS.STORAGE_NAME_CASH, '["http://123.org/"]');
            
        }
        
        if(details.reason == "update"){
            console.log("update App Chocolate")
        }
        
    });
    
}())