var Chocolate = (function (myModel) {
    
    console.log("Chocolate ==> blockWebRequest.js");
    
    "use strict";
    
    /**
     * blockWebRequest
     * 
     * Создание массив страниц из localStorage
     * 
     * @returns {Arrya} arr_block_url массив URL
     */
    
    myModel.blockWebRequest = function (){
        
        var localBlock = JSON.parse(localStorage.getItem(OPTIONS.STORAGE_NAME));

        console.log(localBlock);
        
        var arr_block_url = [];
        
        for (key in localBlock) {
            arr_block_url[arr_block_url.length] = localBlock[key]
        }
        
        console.log(arr_block_url);
        
        if(arr_block_url.length === 0){
            return ["http://pornohab.com/*"];
        }
        
        return arr_block_url
    };

    return myModel
    
}(Chocolate || {}));

