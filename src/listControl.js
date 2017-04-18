(function($){
    
    $(document).ready(function(){
        
        CHROMESTO.getStorage("block", function(page){
            addHTMLStorage(page);
        });
        
        $("ul").on("click", "li", function(){
            $(this).remove();
            deletStorage($(this).text());
        })
        
    })
    
    function addHTMLStorage(filterMass){
        
        if(!filterMass){
            return;
        }
        
        $.each(filterMass, function(index, value) {
            $('<li/>', {
                text: index
            }).appendTo($(".border"));
        });
    };
    
    function deletStorage(text){
        CHROMESTO.getStorage("block", function(page){
            var block = page;
            
            delete block[text+""];
            
            if ($.isEmptyObject(block)) {
                return CHROMESTO.clearStorage(function(){
                    return chrome.runtime.reload();
                })
            }
            
            CHROMESTO.setStorage({block: block}, function(){
                // Перезапуск
                chrome.runtime.reload();
            });
        });
    }
    
    
    
    
}(jQuery));
