$(function() {
  function showData(arr) 
    {
      var out = "";
      for(var i = 0; i < arr.length; i++) 
        {
          out += '<p class="title">' + arr[i].title;
        }
      document.getElementById("posts").innerHTML = out;
    }
  var xmlhttp = new XMLHttpRequest();
  var url = "https://jsonplaceholder.typicode.com/albums";
  var itemsPerPage = 20;
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var arrayOfParseData = JSON.parse(this.responseText);
        showData(arrayOfParseData);
        //collect all elements with class='title' to array
        var items = $(".title");
        //slice().hide() - hide excess elements
        items.slice(itemsPerPage).hide();
        //pagination
        $('#dark-pagination').pagination({
          items: arrayOfParseData.length,
          itemsOnPage: itemsPerPage,
          cssStyle: 'light-theme',
          onPageClick: function(pageNumber) {
          // show and hide needed <p>
            var showFrom = itemsPerPage * (pageNumber - 1);
            var showTo = showFrom + itemsPerPage;
            items.hide().slice(showFrom, showTo).show();
            }
        });
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
});

