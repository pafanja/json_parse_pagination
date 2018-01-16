$(function() {
  function showData(arr) 
    {
      let out = "";
      for(let i = 0; i < arr.length; i++) 
        {
          out += '<p class="title">' + arr[i].title;
        }
      document.getElementById("posts").innerHTML = out;
    }
var xmlhttp = new XMLHttpRequest();
var url = "https://jsonplaceholder.typicode.com/albums";
var itemsPerPage = 20;
var numPage = window.location.search.substring(6);
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var arrayOfParseData = JSON.parse(this.responseText);
    let size = 20; // count of recors per page
    var subArrays = [];//arrays for pages
    for (let i = 0; i < Math.ceil(arrayOfParseData.length/size); i++){
      subArrays[i] = arrayOfParseData.slice((i*size), (i*size) + size);
      $('<a>', { href: '?page='+(i+1)+'', text: ''+(i+1)+''}).appendTo('#pagination');
    }
    showData(subArrays[numPage-1]);
  };
};
  xmlhttp.open("GET", url, true);
  xmlhttp.send(); 
});

