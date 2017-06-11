(function(){
    
    // Основное меню (Chocolate)
    var parentMenu = chrome.contextMenus.create({
        "title": OPTIONS.CONTEXT_MENUS,
        "contexts":OPTIONS.CONTEXTS_LI,
    });
    
    // Заблокировать страницу
    chrome.contextMenus.create({
        "title": OPTIONS.CONTEXT_MENUS_URL,
        "parentId": parentMenu,
        "onclick": (function(info, tab){
            Chocolate.blockPage(tab.title, tab.url, "url");
            //chrome.runtime.reload();
        })
    });
    
    // Заблокировать сайт
    chrome.contextMenus.create({
        "title": OPTIONS.CONTEXT_MENUS_SITE,
        "parentId": parentMenu,
        "onclick": (function(info, tab){
            Chocolate.blockPage(tab.title, tab.url, "site")
            //chrome.runtime.reload();
        })
    });
    
}());