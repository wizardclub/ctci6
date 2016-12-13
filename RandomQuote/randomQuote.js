function loadDoc(){
  var id = "?" + Math.random();  
  var api_url = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter" + id;
    ajaxCall('GET', api_url, api_cb);
}

function api_cb(data){
    var divForQuote = document.getElementById('qod-quote');
    divForQuote.innerHTML = data[0].content + "<p>~ " + data[0].title + "</p>";
}


function ajaxCall(method, url, cb) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.response));
        }
    };
    xhttp.open(method, url, true);
    xhttp.send();
}
