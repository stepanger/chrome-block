(function(){
    
    CHROMESTO.setStorage({
        "history": {
            "asd asd": "http://12",
            "asds dd": "http://12s"
        }
    }, function(){});
    
    CHROMESTO.getStorage(null, function(page){
        
        var asd = page.history
        
        var keys = Object.keys(asd);
        
        var ssss = [];
        
        for (var i = 0, l = keys.length; i < l; i++) {
            console.log(keys[i] + ' is ' + asd[keys[i]]);
        }
    });
    
}())