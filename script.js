var xmlhttp = new XMLHttpRequest();
var url = "https://jsonplaceholder.typicode.com/albums";
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var arrayOfParseData = JSON.parse(this.responseText);
        showData(arrayOfParseData);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function showData(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) 
    {
        out += '<p>' + arr[i].title;
    }
    document.getElementById("posts").innerHTML = out;
}