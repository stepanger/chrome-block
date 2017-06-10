(function(){
    
    function parseURL(data){
        
        localStorage.removeItem(OPTIONS.STORAGE_NAME_CASH)
        
        var ChocolateBlock = JSON.parse(data);
        
        console.log(ChocolateBlock);
        
        localStorage.setItem(OPTIONS.STORAGE_NAME_CASH, JSON.stringify(ChocolateBlock.url));
    }
    
    chrome.idle.onStateChanged.addListener(function(idleState){
        
        if(idleState == "idle"){
            console.log("The system is not active!");
            
            var loadURL = new XMLHttpRequest();
            loadURL.open("GET", OPTIONS.LOADING_BASE_URL, true);
            loadURL.onreadystatechange = function() {

                if(loadURL.readyState === 4 && loadURL.status === 200){
            
                    return parseURL(loadURL.responseText)
                }
            }
            
            return loadURL.send();
        }
        
        if(idleState == "active"){
            console.log("The system is active");
            return;
            
        }
    })
    
    
}())