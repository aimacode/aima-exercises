document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("viewusersolution").addEventListener("click", function(){
      url = document.getElementById("link2").innerHTML
      console.log(url)
      document.getElementById("content2").innerHTML ="No Community answer available yet!";
      httpGetAsync(url, parseResponse)
      document.getElementById("link2").innerHTML = ""
    });
    
    function parseResponse(o)
    {
      files=  JSON.parse(o)
      console.log(files)
      present=false;
      for (file of files)
      {
        f = file["download_url"]
        g = file["name"]
        
        if(g=="communityanswer.md")
        {
          present=true;
          document.getElementById("content2").innerHTML ="";
        }
       }
       if(present == true)
       {
           for(file of files)
           {
               f = file["download_url"]
               g = file["name"]
               if(g=="communityanswer.md")
               {
                   httpGetAsync(f,renderContent)
               }
           }
       }
       if(present == false)
       {
        document.getElementById("content2").innerHTML=" No Community answer available yet!";
       }
     
    }
    
    function renderContent(data){
      console.log(data)
      contentArea = document.getElementById("content2");
      
      var node = document.createElement("div");// Create a <div> node
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
  