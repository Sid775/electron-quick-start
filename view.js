let $ = require('jquery')  // jQuery now loaded and assigned to $
let count = 0
let theUrl = "http://localhost:5000/api/1.0/users"

$('#test').hide()

function hide() {
    var faces = getFaces()
    if (faces.length <= 2) {
        $('#test').hide()
    } else {
        $('#test').show()
    }
}

function getFaces() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function sleep(ms) {
    ms += new Date().getTime();
    while (new Date() < ms){}
}

setInterval(function() { hide() }, 0);
