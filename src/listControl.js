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
            $(".dataBlock blockquote").text(OPTIONS.THERE_ARE_NO_BLOCKS);
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

/*

        addRedirect();
    
        $(".redirectControl").on("click", ".redirectOK", function(){
            console.log(this);
        })

    function addRedirect(site){
        CHROMESTO.getStorage("redirect", function(page){
            
            if(!page){
                CHROMESTO.setStorage({redirect: "https://google.com/"},function(){});
                return;
            }
            
            if(site){
                CHROMESTO.setStorage({redirect: site},function(){});
                $("blockquote span").text(site)
                return;
            }else{
                $("blockquote span").text(page)
            }

        });
    }

*/