window.onload = function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://raw.githubusercontent.com/stepanger/Chocolate/storage/data/base.json", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            console.log( xhr.responseText );
        }
    }
    xhr.send();
}