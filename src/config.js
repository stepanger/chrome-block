;var OPTIONS = (function () {
    
    console.log("OPTIONS.js ==> options");
    
    "use strict";
    
    /**
     * Настройки
     * Настройки расширения CHROME
     * @return {
            ID_EXPANSION    - Id расширения
            STORAGE_NAME    - Id ключа базы в storage
            REDIRECT_URL    - Адрес для редиректа блокированной страницы 
            TYPE_OF_PAGES   - Тип блокирующий страницы
            CONTEXT_MENUS   - Наименование в выпадающем меню
            CONTEXTS_LI     - На каких элементах будет отображаться выпадающие меню    
        } type Object 
    */
    
    return {
        ID_EXPANSION: chrome.runtime.id, 
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