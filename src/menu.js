(function(){
    
    var parentMenu = chrome.contextMenus.create({
        "title": OPTIONS.CONTEXT_MENUS,
        "contexts":OPTIONS.CONTEXTS_LI,
    });
    
    chrome.contextMenus.create({
        "title": OPTIONS.CONTEXT_MENUS_URL,
        "parentId": parentMenu,
        "onclick": (function(info, tab){
            Chocolate.blockPage(tab.title, tab.url, "url")
        })
    });
    
    chrome.contextMenus.create({
        "title": OPTIONS.CONTEXT_MENUS_SITE,
        "parentId": parentMenu,
        "onclick": (function(info, tab){
            Chocolate.blockPage(tab.title, tab.url, "site")
        })
    });
    
}());