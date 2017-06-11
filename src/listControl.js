(function($){
    
    $(document).ready(function(){
        
        //Показ списка заблакированных сайтов
        addHTMLStorage();
        
        $("ul").on("click", "li", function(){
            $(this).remove();
            deletStorage($(this).text());
        })
    })
    
    function addHTMLStorage(filterMass){
        
        var localBlock = JSON.parse(localStorage.getItem(OPTIONS.STORAGE_NAME));
        
        if(!localBlock){
            $(".dataBlock .list").text(OPTIONS.THERE_ARE_NO_BLOCKS);
            return;
        }
        
        $.each(localBlock, function(index, value) {
            $('<li/>', {
                text: index
            }).appendTo($(".border"));
        });
    }
    
    function deletStorage(text){
        var localBlock = JSON.parse(localStorage.getItem(OPTIONS.STORAGE_NAME));
        
        var block = localBlock;
            
        delete block[text+""];
            
        if ($.isEmptyObject(block)) {
            return localStorage.clear();
        }
            
        return localStorage.setItem(OPTIONS.STORAGE_NAME, JSON.stringify(block));

    }
    
}(jQuery));