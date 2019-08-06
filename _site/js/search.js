$(document).ready(function(){
  // Initialize lunr with the fields to be searched, plus the boost.
  window.idx = lunr(function () {
    this.field('id');
    this.field('content');
    this.field('title', { boost: 10 });
    this.field('url');
  });

  // Get the generated search_data.json file so lunr.js can search it locally.
  window.data = $.getJSON(window.aimaBaseURL+'/search_data.json');
  var query = unescape(getQueryString("query")).replace(/\+/g," ");
  $("#search_box").val(query);

  // Wait for the data to load and add it to lunr
  window.data.then(function(loaded_data){

    $.each(loaded_data, function(index, value){
      window.idx.add(
        $.extend({ "id": index }, value)
      );
    });

    if(query){
      var results = window.idx.search(query); // Get lunr to perform a search
      display_search_results(results); // Hand the results off to be displayed
    }
  });

  // Event when the form is submitted
  $("#search-btn").on("click",function(event){
      event.preventDefault();
      var query = $("#search_box").val(); // Get the value for the text field
      var results = window.idx.search(query); // Get lunr to perform a search
      display_search_results(results); // Hand the results off to be displayed
  });

  function display_search_results(results) {
    var $search_results = $("#search_results");

    // Wait for data to load
    window.data.then(function(loaded_data) {
      element = document.getElementById("search_results");
      // Are there any results?
      if (results.length) {
        $search_results.empty(); // Clear any old results

        // Iterate over the results
        results.forEach(function(result) {
          var item = loaded_data[result.ref];
          breadcrumbFilter=""
          contentFilter=""
          if(item.breadcrumb){
            breadcrumbFilter = item.breadcrumb.match(/^(\D*)(\d+)-/)[0];  
          }
          //if(item.breadcrumb){
            //contentFilter = item.content.match(/^(\D*)(\d+).(\D*)(\d+)/)[0];  
          //}

          // Build a snippet of HTML for this result
          var appendString = '<li><a href="' +window.aimaBaseURL+item.url.trim() + '">' + item.title + " | "+ 
                            item.breadcrumb.replace(breadcrumbFilter,"")+ '</a><div>'+ 
                            item.content.replace(contentFilter,"").substring(0,250); +
                            '</div></li>';

          // Add the snippet to the collection of results.
          $search_results.append(appendString);
        });
        MathJax.Hub.Queue(["Typeset",MathJax.Hub,element]);
      } else {
        // If there are no results, let the user know.
        $search_results.html('<li>No results found.<br/>Please check spelling and spacing...</li>');
      }
    });
  }

  function getQueryString( field) {
    var href = window.location.href;
    var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
    var string = reg.exec(href);
    return string ? string[1] : null;
  };

})
