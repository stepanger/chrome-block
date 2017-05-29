
;var OPTIONS = (function () {

    console.log("OPTIONS.js ==> options");
    
    "use strict";
    
    /**
     * Настройки
     * Настройки расширения CHROME
     * @return {Параметры расширения} type Object 
    */
    
    return {
        ID_EXPANSION: chrome.runtime.id, 
        STORAGE_NAME: "block",
        REDIRECT_URL: ["https://google.com/"],
        TYPE_OF_PAGES: "main_frame",
        CONTEXT_MENUS: "Chocolate",
        CONTEXT_MENUS_URL: "Заблокировать страницу",
        CONTEXT_MENUS_SITE: "Заблокировать сайт",
        THERE_ARE_NO_BLOCKS: "Список заблокированных ресурсов, пуст!",
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