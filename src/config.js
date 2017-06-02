
var OPTIONS = (function () {

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
        PATTERN_URL: /^(?:(?:https?):\/\/(?:[a-z0-9_-]{1,32}(?::[a-z0-9_-]{1,32})?@)?)?(?:(?:[a-z0-9-]{1,128}\.)+(?:com|net|org|mil|edu|arpa|ru|gov|biz|info|aero|inc|name|[a-z]{2})|(?!0)(?:(?!0[^.]|255)[0-9]{1,3}\.){3}(?!0|255)[0-9]{1,3})(?:\/[a-z0-9.,_@%&?+=\~\/-]*)?(?:#[^ \'\"&<>]*)?$/i,
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