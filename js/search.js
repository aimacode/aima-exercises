$(document).ready(function(){
  // Initialize lunr with the fields to be searched, plus the boost.
  window.idx = lunr(function () {
    this.field('id');
    this.field('content');
    this.field('title', { boost: 10 });
    this.field('url');
  });

  // Get the generated search_data.json file so lunr.js can search it locally.
  window.data = $.getJSON('/search_data.json');

  // Wait for the data to load and add it to lunr
  window.data.then(function(loaded_data){
    $.each(loaded_data, function(index, value){
    window.idx.add(
      $.extend({ "id": index }, value)
    );
    });
  });

  // Event when the form is submitted
  $("#site_search").submit(function(event){
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
          breadcrumbFilter = item.breadcrumb.match(/^(\D*)(\d+)-/)[0];
          contentFilter = item.content.match(/^(\D*)(\d+).(\D*)(\d+)/)[0];

          // Build a snippet of HTML for this result
          var appendString = '<li><a href="' + item.url + '">' + item.title + " | "+ 
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
})
