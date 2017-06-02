(function($){
    
    $(document).ready(function(){
        
        //Показ списка заблакированных сайтов
        CHROMESTO.getStorage("block", function(page){
            addHTMLStorage(page);
        });
        
        CHROMESTO.getStorage("redirect", function(page){
            $(".listRedirect span").text(page)  
        })
        
        $(".redirectControl").on("click", ".redirectOK", function(){
            
            var href = $(this).siblings(".redirect").val();
            addRedirect((Chocolate.addURL(href)).slice(0,-1));
            
        })
        
        $("ul").on("click", "li", function(){
            $(this).remove();
            deletStorage($(this).text());
        })
    })
    
    function addRedirect(site){
            
        if(site){
            CHROMESTO.setStorage({redirect: [site]},function(){});
            chrome.runtime.reload(); //Перезагрузка для blockWebRequest
            return;
        }
    }
    
    function addHTMLStorage(filterMass){
        
        if(!filterMass){
            $(".dataBlock .list").text(OPTIONS.THERE_ARE_NO_BLOCKS);
            return;
        }
        
        $.each(filterMass, function(index, value) {
            $('<li/>', {
                text: index
            }).appendTo($(".border"));
        });
    }
    
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