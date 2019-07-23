document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("viewusersolution").addEventListener("click", function(){
      url = document.getElementById("link").innerHTML
      console.log(url)
      document.getElementById("content").innerHTML = "No user answers available yet!"
      httpGetAsync(url, parseResponse)
      document.getElementById("link").innerHTML = ""
    });
    
    function parseResponse(o){
      files=  JSON.parse(o)
      console.log(files)
      for (file of files){
        f = file["download_url"]
        g = file["name"]
        console.log(f)
        console.log(g)
        if(g=="communityanswer.md")
        {
          console.log("Won't render")
        }
        else{
          httpGetAsync(f, renderContent)
        }
       
      }
    }
    
    function renderContent(data){
      console.log(data)
      contentArea = document.getElementById("content");
      
      var node = document.createElement("div");// Create a <div> node
      node.setAttribute("id", "answeridstyle");
      node.setAttribute("markdown","1");
      node.setAttribute("onclick","myFunc()");
      node.innerHTML = marked(data)    //Set inner HTML
      contentArea.appendChild(node);
      
    }
    
    function httpGetAsync(theUrl, callback){
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.onreadystatechange = function() { 
          if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
              callback(xmlHttp.responseText);
      }
      xmlHttp.open("GET", theUrl, true); // true for asynchronous 
      xmlHttp.send(null);
    }
  });
  