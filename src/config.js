;var OPTIONS = (function () {
    
    console.log("OPTIONS.js ==> options");
    
    "use strict";
    
    /**
     * Настройки
     * Настройки расширения CHROME
     * @return {OPTIONS} type Object 
    */
    
    return {
        ID_EXPANSION: chrome.runtime.id,  //id расширения
        STORAGE_NAME: "block",
        REDIRECT_URL: "https://habrahabr.ru/",
        TYPE_OF_PAGES: "main_frame",
        CONTEXT_MENUS: "Chocolate - Заблокировать страницу",
        CONTEXTS_LI: [
            "page",
            "selection",
            "link",
            "editable",
            "image",
            "video",
            "audio"
        ]
    }
    
}());