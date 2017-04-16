(function(){
    
     CHROMESTO.getStorage(OPTIONS.STORAGE_NAME, function(block){
         
         var arr_block_url = [];
         
         for (key in block) {
             arr_block_url[arr_block_url.length] = block[key]
         }
         
         console.log(arr_block_url);
         
         if(arr_block_url.length === 0){
             return;
         }
         
         Chocolate.blockWebRequest(arr_block_url);
         
    });
    
    
}())