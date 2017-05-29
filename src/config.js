
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
            CONTEXT_MENUS_URL  - Страница с конкретным адресом
            CONTEXT_MENUS_SITE - Адрес сайта 
            CONTEXTS_LI        - На каких элементах будет отображаться выпадающие меню    
        } type Object 
    */
    
    return {
        ID_EXPANSION: chrome.runtime.id, 
        STORAGE_NAME: "block",
        REDIRECT_URL: "https://google.com/",
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