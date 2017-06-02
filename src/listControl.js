(function($){
    
    $(document).ready(function(){
        
        addRedirect();
    
        $(".redirectControl").on("click", ".redirectOK", function(){
            
            var href = $($(this).siblings(".redirect")).val();
            
            addRedirect((Chocolate.addURL(href)).slice(0,-1));
            
        })
        
        CHROMESTO.getStorage("block", function(page){
            
            addHTMLStorage(page);
        });
        
        $("ul").on("click", "li", function(){
            $(this).remove();
            deletStorage($(this).text());
        })
        
    })
    
    function addRedirect(site){
        CHROMESTO.getStorage("redirect", function(page){
            
            if(!page){
                CHROMESTO.setStorage({redirect: [OPTIONS.REDIRECT_URL]},function(){});
                chrome.runtime.reload();
                return;
            }
            
            if(site){
                CHROMESTO.setStorage({redirect: [site]},function(){});
                $(".listRedirect span").text(site)
                chrome.runtime.reload();
                return;
            }
            
            $(".listRedirect span").text(page)

        });
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